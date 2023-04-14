# 目录
[[Mysql入门]]

# SQL 是什么？
-   SQL 指结构化查询语言，全称是 Structured Query Language。
-   SQL 让您可以访问和处理数据库，包括数据插入、查询、更新和删除。
-   SQL 在1986年成为 ANSI（American National Standards Institute 美国国家标准化组织）的一项标准，在 1987 年成为国际标准化组织（ISO）标准。
**注释：除了 SQL 标准之外，大部分 SQL 数据库程序都拥有它们自己的专有扩展！
```sql
/*查看有哪些数据库*/
show databases;
/*使用某个数据库*/
use 数据库名;
/*查看数据库有哪些表*/
show tables;
/*退出sql命令行环境\不需要加分号*/
exit
```

# 数据库表
一个数据库通常包含一个或多个表。每个表有一个名字标识（例如:"Websites"）,表包含带有数据的记录（行）。
在本教程中，我们在 MySQL 的 RUNOOB 数据库中创建了 Websites 表，用于存储网站记录。
我们可以通过以下命令查看 "Websites" 表的数据：
```sql
mysql> use RUNOOB;
Database changed

mysql> set names utf8;
Query OK, 0 rows affected (0.00 sec)

mysql> SELECT * FROM Websites;
+----+--------------+---------------------------+-------+---------+
| id | name         | url                       | alexa | country |
+----+--------------+---------------------------+-------+---------+
| 1  | Google       | https://www.google.cm/    | 1     | USA     |
| 2  | 淘宝          | https://www.taobao.com/   | 13    | CN      |
| 3  | 菜鸟教程      | http://www.runoob.com/    | 4689  | CN      |
| 4  | 微博          | http://weibo.com/         | 20    | CN      |
| 5  | Facebook     | https://www.facebook.com/ | 3     | USA     |
+----+--------------+---------------------------+-------+---------+
5 rows in set (0.01 sec)
```
## 解析
-   **use RUNOOB;** 命令用于选择数据库。
-   **set names utf8;** 命令用于设置使用的字符集。
-   **SELECT * FROM Websites;** 读取数据表的信息。
-   上面的表包含五条记录（每一条对应一个网站信息）和5个列（id、name、url、alexa 和country）。
-   SQL 对大小写不敏感：SELECT 与 select 是相同的。