# $$函数进阶$$
函数返回多个返回值
```python
def test_return()
	return 1, 2, "Hello", True

# 接受值一一对应
x, y, z, result = test_return()
```

#### 函数多种传参方式
```python
# 位置参数
def test(name, age, number)
	print(name, age, number)

# 关键字参数
# 1. 可不按顺序匹配
# 2. 可与位置参数混用(必须在前面一一对应,)
def test(name, age, number)
	print(name, age, number)

test(age = 20, name = 'Tom', number = '1234')

# 位置参数混用例子
def test(name, age, number)
	print(name, age, number)

test('Tom', number = '1234', age = 20)

# 以上output:Tom 20 1234

# 缺省参数(有默认值,必须写在后面)
def test(name, age, number='4567')
	print(name, age, number)

test('Tom', 10)
test('Tom', 10, 1234)
#output:
# Tom 10 4567
# Tom 1o 1234

# 不定长参数(位置不定长)
def test(*args)
	print(type(args),args)

test('Tom', 20, '1234')
# output:<class tuple> ('Tom', 20, '1234')

# 不定长参数(关键字不定长)
def test(**kwargs)
	print(type(kwargs),kwargs)

test(age = 20, name = 'Tom', number = '1234')
# output:<class dict> {'name':Tom, 'age':20, 'number':1234}
```

#### 函数做参数
是一种计算逻辑传递，而非数据传递
```python
def test(add):
	result = add(1, 2)
	print(result)

def compute(x, y):
	return x + y

test(compute)
# output:3
```

lambda匿名函数
`lambda 传入参数:函数体(一行代码)`
没有函数名
只使用一次
只能写一行
```python
def test(add):
	result = add(1, 2)
	print(result)

test(lambda x, y: x + y)
```
