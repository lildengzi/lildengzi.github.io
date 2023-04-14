
# 捕获异常

[异常捕获](#异常捕获基本语法)
[捕获常规异常](#捕获常规异常)
[捕获特定异常](#捕获特定异常)
[捕获特定异常](#捕获特定异常)
[捕获多个异常](#捕获多个异常)
[finally](#finally)
[异常传递性](#异常传递性)

## 异常捕获基本语法
```python
try:
"""可能发生错误的代码"""
except:
"""出现异常执行的代码"""
```

### 捕获常规异常
例：
```python
try:
	open("""xxx""")
except:
	print("文件打开异常")
```

### 捕获特定异常
```python
try:
	"""可能发生错误的代码"""
except NameError as e:
	"""出现异常执行的代码"""
```
例：
```python
try:
	print(name) # 未定义变量
except NameError as e:
	print(e)
	print("变量未定义异常")
	# output:name 'name' is not defined
	# output:变量未定义异常
```
其中NameError是python自带的错误类型

### 捕获多个异常
例：
```python
try:
	print(name) # 未定义变量
	1 / 0 # 不存在的除法
except (NameError, ZeroDivisionError) as e:
	print(e) 
	print("变量未定义 或 除法 不存在")
	# output:name 'name' is not defined
	# output:变量未定义 或 除法 不存在
```
NameError和ZeroDivisionError为python自带错误类型

### 捕获全部异常
例：
```python
try:
	print(name) # 未定义变量
	1 / 0
except Exception as e:
	print("出现异常")
	# output:出现异常

# or:
try:
	print(name)
	1 / 0
except:
	print("出现异常")
	# output:出现异常
```
其中Exception为python自带顶级错误类型，包含所有错误

### finally
`finally:`
	`# body`
无论有没有异常都会执行
```python
try:
	f = open('test.txt', 'r')
except:
	f = open('test.txt', 'w')
else:
	print("未出现bug")
finally:
	f.close()
```

### 异常传递性
```python
def func1():
	print("1")
	num = 1 / 0 # 不存在的计算
	print("2")

def func2():
	print("3")
	print("4")

def main():
	func2()

main()

# output:
"""
xxxxxxxxxxxxx
main()
xxxxxxxxxxxxx
func2()
xxxxxxxxxxxxx
func1()
xxxxxxxxxxxxx
num = 1 / 0 # 不存在的计算
ZeroDivisionError:division zero
"""

# 因此
def func1():
	print("1")
	num = 1 / 0 # 不存在的计算
	print("2")

def func2():
	print("3")
	print("4")

def main():
	try:
		func2()
	except:
		print("异常")

main()

# output:
# 异常
```

