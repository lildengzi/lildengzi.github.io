```ad-example
title:Example
collapse:open
获取数据库连接
```
```python
conn = Connection(
      host = 'localhost', # or: IP地址
      port = 3306, # 端口
      user = 'root', # 账户名
      password = '123456'
      [,autocommit = True] # 自动确认更新数据
)
```

```ad-example
title:Example
collapse:open
获取游标对象
```
```python
cursor = conn.cursor()
conn.select_db("test")

# 使用游标对象，执行sql语句
cursor.execute("CREATE TABLE test_pymysql(id INT, info VARCHAR(255))")

# 关闭数据库
conn.close()
```

```ad-example
title:Example
collapse:open
获取查询结果
```
```python
# from 获取数据库连接
cursor = conn.cursor()
conn.select_db("test")

cursor.execute("SELECT * FROM student")

# 获取查询结果
results: tuple = cursor.fetchall()
for r in results:
    print(r)

# 关闭数据库
conn.close()

# output:
((456654, 'ewfw', 32), (...), (...))
```

```ad-example
title:Example
collapse:open
更改数据

确认更新数据

`commit`
```
```python
# from 获取数据库连接
cursor = conn.cursor()
conn.select_db("test")

cursor.execute("INSERT INTO student values(10001, '周杰伦', 31, '男')")

# commit确认
conn.commit()

conn.close()
```
