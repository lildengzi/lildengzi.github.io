import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const learningPath = path.join(repoRoot, "data", "learning.json");

const userSlug = process.env.LEETCODE_CN_USER || "lildengzi";
const endpoint = "https://leetcode.cn/graphql/";
const profileUrl = `https://leetcode.cn/u/${userSlug}/`;
const timeZone = "Asia/Shanghai";
let leetcodeCookie = buildConfiguredCookie();
let csrfToken = process.env.LEETCODE_CN_CSRFTOKEN || getCookieValue(leetcodeCookie, "csrftoken");

async function main() {
  const learning = JSON.parse(await readFile(learningPath, "utf8"));
  const [calendar, recentAccepted] = await Promise.all([
    fetchSubmissionCalendar().catch((error) => {
      console.warn(`Submission calendar unavailable: ${error.message}`);
      return [];
    }),
    fetchRecentAccepted().catch((error) => {
      console.warn(`Recent accepted submissions unavailable: ${error.message}`);
      return [];
    }),
  ]);

  const activity = calendar.length ? calendar : buildActivityFromRecentAccepted(recentAccepted);
  if (!activity.length) {
    throw new Error("No LeetCode.cn activity was returned. Check that the profile is public and the user slug is correct.");
  }

  learning.description =
    "这里用于集中展示 LeetCode.cn、数据结构与算法、工程实践笔记。LeetCode.cn 刷题热力图由 GitHub Actions 自动同步公开记录。";
  learning.leetcodeProfile = profileUrl;
  learning.leetcodeActivity = activity;
  learning.records = buildRecords(recentAccepted);
  learning.leetcodeSyncedAt = new Date().toISOString();

  await writeFile(learningPath, `${JSON.stringify(learning, null, 2)}\n`, "utf8");
  console.log(`Synced ${activity.length} LeetCode.cn activity days for ${userSlug}.`);
}

async function fetchSubmissionCalendar() {
  const data = await graphql(
    "userProfileCalendar",
    `query userProfileCalendar($userSlug: String!) {
      userProfileCalendar(userSlug: $userSlug) {
        submissionCalendar
      }
    }`,
    { userSlug },
  );
  const rawCalendar = data?.userProfileCalendar?.submissionCalendar;
  if (!rawCalendar) return [];

  const parsed = JSON.parse(rawCalendar);
  return Object.entries(parsed)
    .map(([timestamp, count]) => ({
      date: formatDate(Number(timestamp) * 1000),
      count: Number(count) || 0,
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => a.date.localeCompare(b.date));
}

async function fetchRecentAccepted() {
  const data = await graphql(
    "recentACSubmissions",
    `query recentACSubmissions($userSlug: String!, $limit: Int!) {
      recentACSubmissions(userSlug: $userSlug, limit: $limit) {
        id
        title
        titleSlug
        timestamp
      }
    }`,
    { userSlug, limit: 20 },
  );
  return data?.recentACSubmissions || [];
}

async function graphql(operationName, query, variables) {
  await ensureLeetcodeSession();
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      cookie: leetcodeCookie,
      referer: profileUrl,
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      "x-csrftoken": csrfToken,
    },
    body: JSON.stringify({ operationName, query, variables }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${response.status} ${response.statusText}${text ? `: ${text}` : ""}`);
  }
  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }
  return payload.data;
}

async function ensureLeetcodeSession() {
  if (leetcodeCookie && csrfToken) return;
  const response = await fetch(profileUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    },
  });
  if (!response.ok) {
    throw new Error(`Unable to open LeetCode.cn profile: ${response.status} ${response.statusText}`);
  }

  const setCookie = response.headers.getSetCookie?.() || splitSetCookie(response.headers.get("set-cookie") || "");
  leetcodeCookie = setCookie.map((cookie) => cookie.split(";")[0]).filter(Boolean).join("; ");
  csrfToken = getCookieValue(leetcodeCookie, "csrftoken");
  if (!csrfToken) {
    throw new Error(
      "LeetCode.cn did not return a csrftoken cookie. Set LEETCODE_CN_SESSION and LEETCODE_CN_CSRFTOKEN secrets if public GraphQL access is blocked.",
    );
  }
}

function buildConfiguredCookie() {
  const cookie = process.env.LEETCODE_CN_COOKIE;
  if (cookie) return cookie;

  const pairs = [
    ["LEETCODE_SESSION", process.env.LEETCODE_CN_SESSION],
    ["csrftoken", process.env.LEETCODE_CN_CSRFTOKEN],
  ].filter(([, value]) => value);
  return pairs.map(([name, value]) => `${name}=${value}`).join("; ");
}

function splitSetCookie(value) {
  if (!value) return [];
  return value.split(/,(?=\s*[^;,]+=)/);
}

function getCookieValue(cookie, name) {
  const match = cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : "";
}

function buildActivityFromRecentAccepted(submissions) {
  const counts = new Map();
  for (const submission of submissions) {
    const timestamp = Number(submission.timestamp);
    if (!timestamp) continue;
    const date = formatDate(timestamp * 1000);
    counts.set(date, (counts.get(date) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function buildRecords(submissions) {
  return submissions.slice(0, 8).map((submission) => ({
    date: formatDate(Number(submission.timestamp) * 1000),
    title: `通过 ${submission.title}`,
    description: `LeetCode.cn 题目：${submission.titleSlug}`,
    url: `https://leetcode.cn/problems/${submission.titleSlug}/`,
  }));
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
