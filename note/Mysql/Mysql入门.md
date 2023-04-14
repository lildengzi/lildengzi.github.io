[[php]]

# MySQL 教程
![mysql](https://www.runoob.com/wp-content/uploads/2014/03/mysql.jpg)
MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。
```ad-important
title:Important
collapse:open
数据库管理**系统**DBMS
```

## 什么是数据库？

数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。

每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。

我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。

所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。

RDBMS 即关系数据库管理系统(Relational Database Management System)的特点：
-   1.数据以表格的形式出现
-   2.每行为各种记录名称
-   3.每列为记录名称所对应的数据域
-   4.许多的行和列组成一张表单
-   5.若干的表单组成database

## RDBMS 术语

在我们开始学习MySQL 数据库前，让我们先了解下RDBMS的一些术语：

-   **数据库:** 数据库是一些关联表的集合。
-   **数据表:** 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
-   **列:** 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。
-   **行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
-   **冗余**：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
-   **主键**：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
-   **外键：外键用于关联两个表。
-   **复合键**：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
-   索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
-   **参照完整性:** 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。

MySQL 为关系型数据库(Relational Database Management System), 这种所谓的"关系型"可以理解为"表格"的概念, 一个关系型数据库由一个或数个表格组成, 如图所示的一个表格:

-   表头(header): 每一列的名称;
-   列(col): 具有相同数据类型的数据的集合;
-   行(row): 每一行用来描述某条记录的具体信息;
-   值(value): 行的具体信息, 每个值必须与该列的数据类型相同;
-   **键(key)**: 键的值在当前列中具有唯一性。

## MySQL数据库

MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。MySQL 是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。

-   MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。
-   MySQL 使用标准的 SQL 数据语言形式。
-   MySQL 可以运行于多个系统上，并且支持多种语言。这些编程语言包括 C、C++、Python、Java、Perl、PHP、Eiffel、Ruby 和 Tcl 等。

## mysql操作
启动mysql
`net start mysql[80]`
停止
`net stop mysql[80]`
数据类型:库和表

## SQL语句
1. sql语句可以单行或多行书写
2. 支持空格/缩进
3. 不区分大小写
4. 注释:
- `--`或`# 单行`
- `/*多行*/`

## sql操作分类
### DDL数据库整体操作 
DDL:数据定义
查询所有数据库
`SHOW DATABASES;`
查询当前数据库
`SELECT DATABASES();`
创建
`CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET字符集(UTF8mb4)] [COLLATE 排序规则];`
删除
`DROP DATABASE [IF EXISTS] 数据库名;`
使用
`USE 数据库名;`
```ad-example
title:Example
collapse:open
~~~SQL
CREATE DATABASE ikun DEFAULT CHARSET utf8mb4;
use ikun;
select database();
+------------+
| database() |
+------------+
| ikun       |
+------------+
~~~
```

查表
`SHOW TABLES;`
查表结构
`DESC 表名;`
查询指定表的建表语句
`SHOW CREATE TABLE 表名;`
删除表
`DROP TABLE [IF EXISTS] 表名称;`
创建表
```ad-important
title:Important
collapse:open
~~~SQL
CREATE 表名(
    字段1 字段1类型[COMMENT 字段1注释],
    字段2 字段2类型[COMMENT 字段2注释],
    ...
    字段3 字段3类型[COMMENT 字段3注释],
)[COMMENT 表注释];
~~~
```

常见的数据类型:
| 类型     | 大小       | 描述 |
| -------- | ---------- | ---- |
| INT      | 整数       |      |
| SMALLINT | 浮点数     |      |
| VARCHAR  | 文本       |      |
| date     | 日期类型   |      |
| timetamp | 时间戳类型 |      |

### SQL注释
- 单行注释: `-- 注释内容`
- 单行注释: `# 注释内容`
- 多行注释: `/*注释内容*/`

### DML数据操作
DML:数据增删改操作
插入数据
`INSERT INTO 表[(列1, 列2, ......, 列N)] VALUES(值1, 值2, ......, 值N)[, (值1, 值2, ......, 值N), ......, (值1, 值2, ......, 值N)];`
```ad-important
title:Important1
collapse:open
```
```sql
CREATE TABLE student(
    id INT,
    name VARCHAR(30),
    age INT
)

-- 插入id数据
INSERT INTO student(id) VALUES(1), (2), (3);
-- 插入全部数据
INSERT INTO students(id, name, age) VALUES(10001, '张三', 31), (10002, '李四 ', 33), (10003, '王五', 26);
-- 快捷写法
INSERT INTO student VALUES(10004, '老六', 31), (10005, '小七', 33), (10006, '老八', 26);
```

删除数据
`DELETE FROM 表名称 [WHERE 条件判断];`
判断操作符
```sql
= < > <= >= !=
```

更新数据
`UPDATE 表名 SET 列=值 [WHERE 条件判断];`
```ad-example
title:Example2
collapse:open
```
```sql
-- from Important1
UPDATE student SET name = '张学友' WHERE id = 10001;
-- 张三被改成张学友
```

### DQL数据查询操作
DQL:查询
基础语法
```ad-important
title:Important
collapse:open
`SELECT 字段列表 | * FROM 表 [WHERE 条件判断]`
```
```sql
-- 查询id name 两个列
SELECT id, name FROM student;
-- 查询全部列
SELECT id, name, age FROM student;
-- 查询全部列，快捷
SELECT * FROM student;
```

### DCL分组聚合控制计算
DCL:分组聚合控制计算
将数据分成组通过聚合函数计算输出
`SELECT 字段 | [聚合函数, ...] FROM 表 [WHERE 条件] GROUP BY 列 [ORDER BY ... [ASC | DESC]]`
聚合函数有:
```sql
SUM(列) -- 求和
AVG(列) -- 求平均值
MIN(列) -- 求最小值
MAX(列) -- 求最大值
COUNT(列 | *) -- 求数量
```

通过 列 分组
`GROUP BY 列`

通过 列 排序(默认升序)
`ORDER BY 列 [ASC | DESC]`
- ASC 升序
- DESC 逆序

通过 n, m 限制输出数据数量(必须写在最后)
`LIMIT n[, m]`
