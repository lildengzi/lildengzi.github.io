
#  $$python入门$$


异于c/c++ == **
#### 目录
[基础](#基础)   
[条件判断](#条件判断)   
[循环语句](#循环语句)   
[函数](#函数)   
[其他库](#其他库)   
[容器](python容器.md)
[文件操作](python文件.md)
[异常处理](python异常.md)
[模块/包](python模块及包.md)
[类和对象](python类和对象.md)
[[python注解]]
[json格式](json.md)
[[python语法糖]]

#### 外部链接
**常用模块**
echarts是一个数据可视化框架
[pyecharts](https://05x-docs.pyecharts.org/#/) 
[[pymysql]]


# 基础
```python
int  # 整型
bool # 布尔
float # 浮点数
complex # *复数*
string # 字符串  
list # 有序可变数列
tuple # 有序不可变数列
set # 集合
dictionary # *字典key-value集合*

bool True,False # *大写*
None == False # *无值*
```

注释
```python
"""
我不是码神
"""
# 666

# 函数体注释

"""
函数说明
:param x: 参数x的说明
:param y: 参数y的说明
:return:  返回值的说明

"""
``` 

查看一个数据的类型  
`type("""数据/变量""")`

print输出流 input输入流  
```python
print(x,y,z,"通过逗号把想输出的数据输出")

print()  # 什么都不写相当于printf("\n")

name = input("666")
"""等于
printf("666");提示信息
cin>>name;
"""
# input默认接受字符串,可以通过转换符转换    

keyboard_input = main()
# *获取键盘输入信息*
```

数据类型转换
```python
int(x) # 数据x转换成int类型
float(x) # 同上
string(x)
"""万物皆可转字符串，但字符串不一定能转数字"""
``` 

运算符
```python
a+b # 字面意思
a-b
a*b
/
// # *取整除*11/2答案为5
%
a**b # *指数运算*a的b次方
# 自赋值
+=
-=
*=
/=
%=
//= 
**=
# 比较运算
==
!=
>
<
>=
<=
```

字符串定义法
```python
name = '666'
name2 = "666"
name3 = """666""" # 需要一个变量接收
# 字符串内包含双引、单引号怎么搞，以下提供三种方法
name = "'666'"
name2 = '"666"'
name3 = "\"666\""  
```

字符串格式化
```python
# 方法一(格式化输出)
num = 666
num2 = 114514
message = "哈哈%s,牛%s" % (num,num2)
print(message) # output:哈哈666,牛114514
# 方法二(非格式化)
# 原样输出，不会进行精度控制
num = 666
num2 = 114514
# f表示format
print(f"你很{num},不要{num2}") # output:哈哈666,牛114514
# 其他
# 表达式格式化
print(f"1*2={1*2}")
```

字符串输出
```python
str='123456789' 
print(str) # 输出字符串 
print(str[0:-1]) # 输出第一个到倒数第二个的所有字符 
print(str[0]) # 输出字符串第一个字符 
print(str[2:5]) # 输出从第三个开始到第五个的字符 
print(str[2:]) # 输出从第三个开始后的所有字符 
print(str[1:5:2]) # 输出从第二个开始到第五个且每隔一个的字符（步长为2） 
print(str * 2) # 输出字符串两次 
print(str + '你好') # 连接字符串 
print('hello\nrunoob') # 使用反斜杠(\)+n转义特殊字符 
print(r'hello\nrunoob') 
# 在字符串前面添加一个 r，表示原始字符串，不会发生转义

# output:123456789
# output:12345678
# output:1
# output:345
# output:3456789
# output:24
# output:123456789123456789
# output:123456789你好
# output:hello
# runoob
# output:hello\nrunoob
```

占位符
```python
n = "%s%c%d%f%3.3lf"
# %m.nlf中
# m表示数字宽度，宽度不足时会用空格补在前面，足够时不生效
# n表示数字精度，精度不足时会用0补后面
```

# 条件判断
if
```python
age = 30
if age >= 18:   # *if写法*
    print("adult")
# python以缩进判断归属
```

if-else
```python
age = 30
if age>=18:
    print("adult")
else:
    print("child")
# output: adult
```

if-elif-else
```python
if age > 18: # ...
elif : # *else if()*
else :
```

或/与/非
`or`
只有两个都为假时才假
`and`
只有两个都为真时才真
`not`
否定
```python
if not ...: # *not*如果不为
if ... and ...: 
if ... or ...:
```

```ad-example
title:Example
collapse:open
```
```python
num = 0
num2 = 1

if not num:
    print("yes")
else:
    print("no")

if num and num2:
    print("yes2")
else:
    print("no2")

if num or num2:
    print("yes3")
else:
    print("no3")
# output:
# yes
# no2
# yes3
```

# 循环语句
while 条件判断:
```python
i = 0
while i<100:
    print("666")
    i+=1
```

for 临时变量 in 待处理数字集:
```python
name = "123456"
for i in name:
    print(i)
    # 将name中每个内容挨个取出
```

continue和break
```python
for i in range(5):
    print("语句一")
    continue
    print("语句二") # 被跳过

for i in range(5):
    print("语句一")
    break   # 直接结束
    print("666")
```

range
```python
num = 5
range(num)
# 生成一个0到num-1序列

range(num1,num2)
# 生成一个num1到（num2-1的序列）

range(num1,num2,step)
# 生成num1,num1+(step),...直到num2 - 1的序列

for i in range(10):
    #range简单用法
```

# 函数
初识
```python
def what_is_love():
    print("nb")
    return None
# *def定义函数*
what_is_love()
# output: nb
```

参数函数
```python
def add(a,b):
    result = a+b
    return result
    # 函数在遇到return后结束
num = add()
```

global关键字    
`global num`    
`# 使局部变量num变成全局变量`   
[python函数进阶](python函数进阶.md)

python

# 其他库
随机数库
```python
import random
num = random.randint(1,10)
# 一到十随机抽一个数字
```

python中，变量无类型，存储数据有类型    
