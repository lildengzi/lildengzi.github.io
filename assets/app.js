const GITHUB_USER = "lildengzi";
const PROFILE_REPO = "lildengzi";
const API_BASE = "https://api.github.com";
const PROFILE_README_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${PROFILE_REPO}/main/README.md`;

const state = {
  repos: [],
  summaries: {},
};

const techKeywords = [
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Go",
  "Rust",
  "Vue",
  "React",
  "Node",
  "Docker",
  "CMake",
  "Linux",
  "GitHub Actions",
  "算法",
  "数据结构",
];

const $ = (selector) => document.querySelector(selector);

function setText(selector, value) {
  const node = $(selector);
  if (node) node.textContent = value || "--";
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function loadProfile() {
  const profile = await fetchJson(`${API_BASE}/users/${GITHUB_USER}`);
  setText("#profile-bio", profile.bio || "热爱工程实践、数据结构与算法、系统化学习的开发者。");
  setText("#repo-count", profile.public_repos);
  setText("#followers-count", profile.followers);
  setText("#location", profile.location || "未公开");
  const avatar = $("#avatar");
  avatar.src = profile.avatar_url;
}

async function loadReadme() {
  try {
    const markdown = await fetchProfileReadme();
    renderReadmeSummary(markdown);
    renderTechStack(markdown);
  } catch (error) {
    $("#readme-summary").innerHTML =
      "<p>还没有读取到 GitHub Profile README。可以在 lildengzi 同名仓库维护个人简介，本站会自动同步摘要。</p>";
    renderTechStack("");
  }
}

async function fetchProfileReadme() {
  try {
    const readme = await fetchJson(`${API_BASE}/repos/${GITHUB_USER}/${PROFILE_REPO}/readme`);
    return decodeBase64(readme.content);
  } catch (error) {
    const response = await fetch(PROFILE_README_URL);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.text();
  }
}

function decodeBase64(content) {
  const binary = atob(content.replace(/\s/g, ""));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

function renderReadmeSummary(markdown) {
  const lines = markdown
    .split(/\r?\n/)
    .map((line) => line.replace(/^#+\s*/, "").trim())
    .filter(isReadableReadmeLine);
  const summary = lines.slice(0, 5);
  $("#readme-summary").innerHTML = summary.length
    ? summary.map((line) => `<p>${escapeHtml(stripMarkdown(line))}</p>`).join("")
    : "<p>README 已读取，但暂未识别到可展示的文字简介。</p>";
}

function isReadableReadmeLine(line) {
  if (!line) return false;
  if (line.startsWith("!") || line.startsWith("<") || line.startsWith("|")) return false;
  if (/^-{3,}$/.test(line)) return false;
  if (/^\[!\[/.test(line)) return false;
  return true;
}

function renderTechStack(markdown) {
  const source = `${markdown}\n${state.repos.map((repo) => repo.language || "").join("\n")}`;
  const detected = techKeywords.filter((keyword) => source.toLowerCase().includes(keyword.toLowerCase()));
  const unique = [...new Set([...detected, "Git"])];
  $("#tech-stack").innerHTML = unique.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
}

async function loadProjects() {
  const [repos, summaries] = await Promise.all([
    fetchJson(`${API_BASE}/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`),
    fetch("./data/project-summaries.json").then((response) => response.json()).catch(() => ({})),
  ]);
  state.summaries = summaries;
  state.repos = repos.filter((repo) => !repo.fork && !repo.archived);
  renderProjects(state.repos);
  renderTechStack("");
}

function renderProjects(repos) {
  const grid = $("#project-grid");
  const template = $("#project-template");
  grid.innerHTML = "";

  if (!repos.length) {
    grid.innerHTML = '<p class="empty">没有匹配到公开仓库。</p>';
    return;
  }

  repos.forEach((repo) => {
    const summary = state.summaries[repo.name] || {};
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector("h3").textContent = repo.name;
    card.querySelector(".language").textContent = repo.language || "Repo";
    card.querySelector(".project-description").textContent =
      summary.summary || repo.description || "待补充极简项目简介。";
    card.querySelector(".project-meta").innerHTML = [
      `★ ${repo.stargazers_count}`,
      `Fork ${repo.forks_count}`,
      `更新 ${formatDate(repo.pushed_at)}`,
      ...(summary.tags || []),
    ]
      .map((item) => `<span class="meta-pill">${escapeHtml(item)}</span>`)
      .join("");
    const link = card.querySelector(".project-link");
    link.href = repo.html_url;
    link.setAttribute("aria-label", `打开 ${repo.name} 仓库`);
    grid.appendChild(card);
  });
}

async function loadLearning() {
  const learning = await fetch("./data/learning.json").then((response) => response.json());
  setText("#learning-headline", learning.headline);
  setText("#learning-description", learning.description);
  renderLeetcodeHeatmap(learning.leetcodeActivity || []);
  const learningList = $("#learning-list");
  if (!learning.records?.length) {
    learningList.hidden = true;
    return;
  }
  learningList.hidden = false;
  learningList.innerHTML = learning.records
    .map(
      (record) => `
        <article class="timeline-item">
          <time class="timeline-date" datetime="${escapeHtml(record.date)}">${escapeHtml(record.date)}</time>
          <div class="timeline-content">
            <h3>${escapeHtml(record.title)}</h3>
            <p>${escapeHtml(record.description)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderLeetcodeHeatmap(activity) {
  const heatmap = $("#leetcode-heatmap");
  const counts = new Map(activity.map((item) => [item.date, Number(item.count) || 0]));
  const days = buildRecentDays(182);
  const maxCount = Math.max(1, ...activity.map((item) => Number(item.count) || 0));
  heatmap.innerHTML = days
    .map((date) => {
      const key = toDateKey(date);
      const count = counts.get(key) || 0;
      const level = getHeatLevel(count, maxCount);
      return `<span class="heat-cell" data-level="${level}" title="${key}: ${count} 题" aria-label="${key} 刷题 ${count} 题"></span>`;
    })
    .join("");
}

function buildRecentDays(totalDays) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(today.getDate() - totalDays + 1);
  const days = [];
  for (let i = 0; i < totalDays; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    days.push(date);
  }
  return days;
}

function getHeatLevel(count, maxCount) {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= Math.ceil(maxCount * 0.35)) return 2;
  if (count <= Math.ceil(maxCount * 0.7)) return 3;
  return 4;
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function setupSearch() {
  $("#repo-search").addEventListener("input", (event) => {
    const keyword = event.target.value.trim().toLowerCase();
    const repos = state.repos.filter((repo) => {
      const summary = state.summaries[repo.name]?.summary || "";
      return [repo.name, repo.language, repo.description, summary]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(keyword));
    });
    renderProjects(repos);
  });
}

function stripMarkdown(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~>#|]/g, "")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

async function main() {
  setText("#year", new Date().getFullYear());
  setupSearch();
  await Promise.allSettled([loadProfile(), loadProjects(), loadLearning()]);
  await loadReadme();
}

main().catch((error) => {
  $("#project-grid").innerHTML = `<p class="error">页面数据加载失败：${escapeHtml(error.message)}</p>`;
});
