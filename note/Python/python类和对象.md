类属于一种严格设计图纸，只有设计图纸出现，我们才能设计一个物品(对象),物品会有一定差别

# class
class类
类中可以定义方法和变量
```python
class 类名称:
	类属性(成员变量)
	
	类行为(成员行为)

对象 = 类名称()
```
1. 在程序中设计表格，我们称之为：设计类（class）
设计类:
```python
class Students:
	name = None
	gender = None
	age = None
	number = None
```
2. 在程序中打印生产表格，我们称之为创建对象：
基于类创建对象：
```python
# 承接上文
stu_1 = Students()
stu_2 = Students()
```
3. 在程序中填写表格，我们称之为对象属性赋值:
对象属性赋值：
```python
# 承接上文
stu_1.name = "张三"
stu_2.name = "李四"
```

# 成员函数
`def 方法名(self,...)`
类外叫函数，类内叫方法,self基本可以忽略，其他功能跟函数基本相同
```python
class Student:  
    name = None  
  
    def say_hi(self):  
        print("你好")  
  
stu1 = Student()  

stu1.say_hi() # output:你好
```

# self
`self = this->`
访问成员属性必须用self
```python
class Biancheng:
	Python  = python
	Java = java
	def say_hw(self):
		print({self.Python})
	def say_hw2(self):
		print(self.Java)

bian = Biancheng()

bian.say_hw() # output:python
bian.say_hw2() # output:java
```
[[python面向对象设计案例#类设计案例]]

# \_\_init\_\_():
构造方法,相当于cpp中构造函数
在创建类时自动执行
在创建对象将参数自动传递给__init__方法使用
```python
class Students:
	# 已在__init__中写了成员变量,则成员变量以定义成功,以下四行可以不写
	stu_name = None
	stu_gender = None
	stu_age = None
	stu_number = None
	
	def __init__(self, name, age, gender):
		self.stu_name = name
		self.stu_age = age
		self.stu_gender = gender
		print(f"{self.stu_name} {self.stu_age} {self.stu_gender}")

stu1 = Student("张三", 18, '男') # output:张三 18 男
```

# 内置方法
## \_\_str\_\_
`__str__`魔术方法
控制字符串转化行为
```python
class Students:	
	def __init__(self, name, age, gender):
		self.stu_name = name
		self.stu_age = age
	
	def __str__(self):
		return f"Students类对象中name:{self.name}, age:{self,age}"

stu = Students("张三", 18)
print(stu)
print(str(stu))
# output: 
# Students类对象中name:张三, age:18    # 没有转格式，也被替换成字符串
# Students类对象中name:张三, age:18
```

## \_\_lt\_\_
`__lt__`魔术方法
$<$ 和 $>$符号比较方法,类似cpp运算符重载
```python
class Students:	
	def __init__(self, name, age, gender):
		self.stu_name = name
		self.stu_age = age
		
	def __lt__(self, other):
		return self.stu_age < other.stu_age

stu1.Students("张三", 18)
stu2.Students("李四", 20)
print(stu1 < stu2)
# output: True
```

## \_\_le\_\_
`__le__`魔术方法
比较符号$<= \quad >=$重载
```python
class Students:	
	def __init__(self, name, age, gender):
		self.stu_name = name
		self.stu_age = age
		
	def __lt__(self, other):
		return self.stu_age <= other.stu_age

stu1.Students("张三", 18)
stu2.Students("李四", 20)
print(stu1 <= stu2)
print(stu1 >= stu2)
# output:
# True
# False
```

## \_\_eq\_\_
`__eq__`魔术方法
比较符号重载
不实现\_\_eq\_\_方法时，对象之间可以比较，但比较的是内存地址，即：不同对象比较一定为错
实现\_\_eq\_\_方法时,按自己的想法决定比较方式
```python
class Students:	
	def __init__(self, name, age, gender):
		self.stu_name = name
		self.stu_age = age
		
	def __eq__(self, other):
		return self.stu_age == other.stu_age

stu1.Students("张三", 18)
stu2.Students("李四", 18)

# 不实现
print(stu1 == stu2) # output:False
# 实现
print(stu1 == stu2) # output:True
```

# 封装，继承，多态
## 私有变量
在方法或变量前加两个`__`下划线
内部成员自己使用,设计不直接对用户开放的行为
```python
class Phone:
	# 当前手机运行电压
	__current_voltage = 1
	#
	def __keep_single_core(self):
		print("让CPU单核运行")
	
	#
	def call_by_5g(self):
		if self.__current_voltage >= 1:
			print("5G通话已开启")
		else:
			self.__keep_single_core()
			print("电量不足，已设为单核运行")

phone1 = Phone()
phone1.__keep_single_core() # output:报错
print(phone1.__current_voltage) # output:报错
phone1.call_by_5g() # output:5G通话已开启
```
[[python面向对象设计案例#封装设计案例]]

## 继承
与cpp基本相同
多继承时如果有访问同名变量，位于括号左边的父类优先被访问
[[python面向对象设计案例#继承设计案例]]

### pass
`pass`
占位语句，补全语法完整性
```python
class Father:
	pass
# 空实现
```

## 子类复写
对父类不满意的成员重新赋值
即覆盖重写
```python
class Father:
	producer = "Apple"

class Son(Father):
	producer = "Huawei"

phone = Son()
print(phone.producer) # output: Huawei    成员方法同理
```

### 重新调用父类
方式一，直接用父类
```python
# 将用到self的地方用父类名代替
# 承接上文
print(Phone.producer) # output:Apple    成员方法同理
```
方式二
### super
`super().成员变量/成员方法()`
```python
# 承接上文
print(super().producer) # output:Apple
```
###### 待补充

## 多态
与cpp基本相同
[[python面向对象设计案例#多态设计案例]]
