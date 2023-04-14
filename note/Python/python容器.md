# $$python list容器$$
[数据容器\(序列\)的切片](#序列切片)
[列表list](#列表list)   
1. [index](#index) 输入元素，输出下标索引值
2. [fix](#fix) 修改元素
3. [insert](#insert) 输入索引值，插入元素
3. [append](#append) 追加元素
4. [extend](#extend) 追加多个元素
6. [del/pop](#del) 删除元素(无/有返回值)
7. [remove](#remove) 删索引值-1的元素
8. [clear](#clear) 清空列表
9. [len](#len) 返回列表长度
10. [遍历](#遍历)

[元组tuple](#元组tuple)
1. [index](#index) 输入元素，输出下标索引值
2. [count](#count) 返回输入的元素个数
3. [len](#len) 返回列表长度
4. [遍历](#遍历) 
5. [可修改情况](#特殊情况)

[字符串str](#字符串str) 
1. [repalce](#replace) 取代
2. [split](#split) 分割
3. [strip](#strip) 查找

[集合set](#集合set)
1. [add](#add) 添加元素
2. [remove](#remove) 删除元素
3. [pop](#pop) 随机抽取元素
4. [clear](#clear) 清空集合
5. [difference](#difference) 得到新的集合
6. [union](#union) 结合两个元素
7. [集合遍历](#集合遍历) 

[字典dict](#字典dict)
1. [新增/更新元素](#新增/更新元素)
2. [pop](#pop)
3. [keys](#keys)
4. [遍历字典](#遍历字典)
[数据容器通用操作](#数据容器通用操作)

# 序列切片
序列:有序支持索引的数据集

`序列[起始下标:结束下标:步长]`
表示从指定序列开始，依次取出元素，到指定位置(不包含)结束，得到一个新序列：
* 起始下标可留空，留空视作从头开始
* 结束下标可留空，视作到序列尾结束
* 步长表示，依次取得的元素间隔
> 1. 不写(默认)为1
>  2. 步长为N表示跳过N-1个元素取
>  3. 步长为负数表示反向取(起始下标和结束下标也要互换)

```python
# 例一
list1 = [0, 1, 2, 3, 4, 5, 6]
print(list[1:4]) # output:[1, 2, 3]

# 例二
tuple1 = (0, 1, 2, 3, 4, 5, 6)
print(tuple1[:]) # output:(0, 1, 2, 3, 4, 5, 6)

# 例三
string = "01234567"
print(string[::2]) #output:0246

# 例四
string2 = "01234567"
print(string[::-1]) # output:76543210

# 例五
list2 = [0, 1, 2, 3, 4, 5, 6]
print(list2[3:1:-1]) #output:[3, 2]

# 例六
tuple2 = (0, 1, 2, 3, 4, 5, 6)
print(tuple2[::-2]) #output:(6, 4, 2, 0)
```

```python
# 例子:
string = "万过薪月,员序程马黑来,nohtyp学"
print(string[::-1][9:14])
print(string[5:11][::-1])
print(string[10:4:-1])
# output:来黑马程序员
```

# 列表list
1. **可容纳2\*\*63-1个元素**
2. **可容纳不同类型元素**
3. **有序存储**
4. **允许重复数据**
5. **可以增删改查**     
```python
# 字面量
[元素1,元素2,元素3,...]
# 定义变量
student_list = [元素1,元素2,元素3,...]

# 定义空列表
变量 = []
变量 = list()
```
例:
```python
name = [True,666,"hhh",789]
print(name)
# output:[True,666,"hhh",789]
```

List嵌套
```python
name = [["nb",666],["hhh",123]]
print(name)
# output:[["nb",666],["hhh",123]]
```

元素输出    
`name[下标量]`  
例:
```python
name = ['Tom','Lily','Rose']
print(name[-1]) # output:Rose
print(name[0]) # output:Tom
print(name[1]) # output:Lily
name2 = [[1,2,3],[4,5,6]]
print(name2[0][0]) # output:1
```

#### index
`下标 = 列表名.index(名字)`     
index:返回对象索引值
```python
name = [111,222,333,444,555,666]
index = name.index(666)
print(index) #output:5
# 不存在会报错
```

#### fix 
修改列表：
```python
name = [1,2,3]
name[1] = input()
# 修改元素 2
```

#### insert
`列表名.insert(下标,插入对象)`  
插入insert:
```python
name = [1,2,3,4,5]
name.insert(1,666)
print(name) 
# output:[1,666,2,3,4,5]
```

#### append
`列表名.append(追加元素)`   
追加元素append:
```python
name = [1,2,3,4,5]
name.append("666")
print(name)
# output:[1,2,3,4,5,"666"]
```

#### extend
`列表名.extend(追加对象)`  
追加元素extend:
```python
name = [1,2,3]
name2 = [4,5,6]
name.extend(name2)
print(name)
# output:[1,2,3,4,5,6]
```

#### del
`del 列表名(下标)`  
删除元素del:
```python
name = ["li_hua","li_ling","lil_mei"]
del name(0)
print(name) # output:["li_ling","lil_mei"]
```
`列表名.pop(下标名)`  
pop:
```python
name = ["li_hua","li_ling","lil_mei"]
name2 = name.pop(2)
print(name) # output:["li_hua","li_ling"]
print(name2) #output:lil_mei
```

#### remove
`列表名.remove(元素)`   
**只会删前一个**  
```python
name = [1,2,3]
name.remove(2)
print(name) # output:[1,3]
```

#### clear
`列表名.clear()`
```python
name = [1,2,3]
name.clear()
print(name) # output:啥都没有   
```

#### len
`len(列表名)`   
len列表元素数量:
```python
name = [1,2,3]
count = len(name)
print(count) # output:3
```

#### 遍历
对列表的元素进行批量处理:
```python
index = 0
list = [1,2,3]

while index < len(list):
	element = list[index]
	"""元素处理"""
	print(element)
	index += 1

for element in list:
	print(element)
"""
output(both):
1
2
3
"""
```

# 元组tuple
1. **可容纳2\*\*63-1个元素**
2. **可容纳不同类型元素**
3. **有序存储**
4. **允许重复数据**
5. **不可修改**
```python
# 定义元组
(元素1，元素2，原素3，...)
# 定义元组变量
tuple = (元素1，元素2，原素3，...)

# 空元组
tuple = ()
# or:
名称 = tuple()
```

例：
```python
t1 = (1, "Hello", True)
t2 = tuple(1, "Hello", True)
print(t1) # output:(1, "Hello", True)
print(t2) # output:(1, "Hello", True)
```

如果只有一个元素，必须在第一个元素后加一个逗号
```python
t1 = ("Hello", )
t2 = ("Hello")
print(type(t1)) # output:type<tuple>
print(type(t2)) # output:type<string>
```

元组嵌套
```python
t3 = ((1,2,3),(4,5,6))
print(t3) # output:((1,2,3),(4,5,6))
print(t3[1][2]) # output:6
```

#### index
`元组名.index(元素名)`
返回索引值
```python
t4 = (114514, "Hello", "Python")
index = t4.index("Python")
print(index) # output:2
```

#### count
`元组名.count(元素名)`
返回元素个数
```python
t4 = (114514, "Hello", "Python")
num = t4.count("Python")
print(num) # output:1
```

#### len
`元组名.len(元素名)`
返回元组长度
```python
t4 = (114514, "Hello", "Python")
print(len(t4)) #output:3
```

#### 遍历
```python
t4 = (114514, "Hello", "Python")
index = 0
while index < len(t4):
	print(t4[index]) # output:114514 Hello Python
	index += 1

for element in t4:
	print(element) # output:114514 Hello Python
```

#### 特殊情况
元组本身不可修改，但是如果里面嵌套一个list，可以修改:
```python
tuple1 = ([1,2,3],114514)
tuple1[0][0] = "nb"
print(tuple1)
# output:(["nb",2,3],114514)
```

# 字符串str
[回去看](python入门.md)
1. **操作与list基本相同**
2. **不可修改**

index
`字符串名.index(元素名)`
count
`字符串名.count(元素名)`
len
`len(字符串名)`

#### replace
`母串.replace(字串1,字串2)`
将母串中含有的字串1换成字串2，并返回一个新的字符串
```python
string = "python"
newstr = string.replace("y", "a")
print(newstr,string) #output:pathon python
```

#### split
`字符串.split(分隔字符串)`
返回分割后的字符串
```python
string = "hello world i am python"
strlist = string.split(" ")
print(strlist)
# output:['hello', 'world', 'i', 'am', 'python']
```

#### strip
`字符串.strip()`
去除前后空格
`字符串.strip(字符串2)`
去除前后指定字符串
```python
string = "      what is love  "
print(string.strip()) #output:"what is love"

string = "123what is love321"
print(string.strip("123")) # output:"what is love"
# 按单个字符删除,即母串前后中有'1''2'就删除
```

# 集合set
1. **与list基本相同**
2. **元素不重复**
3. **不支持下标索引访问**

len
`len(集合名)`

```python
# 定义集合字面量
{元素1, 元素2, 元素3, ...}
# 定义集合变量
变量名 = {元素1, 元素2, 元素3, ...}

# 定义空集合
变量名 = set()
```

例:
```python
set1 = {"nb", 666, True, "hello", 666, "nb"}
set2 = set()
print(set1) # output:{666, "nb", "hello"} 顺序不固定
print(set2) # output:set()
```

#### add
`集合名.add(元素)`
向集合添加元素,如果不重复就能添加成功
```python
set1 = {1, 3, 4}
set1.add(2)
print(set1) # output:{1, 2, 3, 4}
```

#### remove
`集合名.remove(元素)`
删除集合里元素
```python
set2 = {1, 2, 3, 4}
set2.remove(2)
print(set2) # output:{1, 3, 4}
```

#### pop
`集合名.pop()`
随机返回一个集合中的元素
```python
set3 = {1, 2, 3, 4}
element = set3.pop()
print(set3) # output:{2, 3, 4} 数是随机的
print(element) # output:1
```

#### clear
`集合名.clear()`
清空集合
```python
set3 = {1, 2, 3, 4}
print(set3.clear()) # output:set()
```

#### difference
`集合名.difference(集合2)`
取两个集合的差集
```python
set1 = {1, 2, 3}
set2 = {1, 5, 6}
set3 = set1.difference(set2)
print(set3) # output:{2, 3} 集合2没有的集合1的元素集
```
or:
`集合名.difference_update(集合2)`
在集合1内删除与集合2有交集的元素
```python
set1 = {1, 2, 3}
set2 = {1, 5, 6}
set1.difference_update(set2)
print(set1) # output:{2, 3}
```

#### union
`集合1.union(集合2)`
两个集合结合
```python
set1 = {1, 2, 3}
set2 = {1, 5, 6}
set3 = set1.union(set2)
print(set3) # output:{1, 2, 3, 6, 5} 不一定有序  原有的set1,set2不变
```

## update
`集合.update(参数)`
更新集合(也算修改?)
```python
d = {‘one’:1,’two’:2}

d.update({‘three’:3,’four’:4}) # 传一个字典  
print(d)

d.update(five=5,six=6) # 传关键字  
print(d)

d.update([(‘seven’,7),(‘eight’,8)]) # 传一个包含一个或多个元组的列表  
print(d)

d.update(([‘nice’,9],[‘ten’,10])) # 传一个包含一个或多个列表的元组  
print(d)

d.update(zip([‘eleven’,’twelve’],[11,12])) # 传一个zip()函数  
print(d)

d.update(one=111,two=222) # 使用以上任意方法修改存在的键对应的值  
print(d)

以上实例输出结果为：

{‘one’: 1, ‘four’: 4, ‘three’: 3, ‘two’: 2}  
{‘one’: 1, ‘four’: 4, ‘three’: 3, ‘five’: 5, ‘two’: 2, ‘six’: 6}  
{‘seven’: 7, ‘one’: 1, ‘four’: 4, ‘three’: 3, ‘five’: 5, ‘two’: 2, ‘six’: 6, ‘eight’: 8}  
{‘seven’: 7, ‘one’: 1, ‘four’: 4, ‘three’: 3, ‘ten’: 10, ‘five’: 5, ‘nice’: 9, ‘two’: 2, ‘six’: 6, ‘eight’: 8}  
{‘one’: 1, ‘four’: 4, ‘three’: 3, ‘twelve’: 12, ‘ten’: 10, ‘seven’: 7, ‘six’: 6, ‘eleven’: 11, ‘two’: 2, ‘nice’: 9, ‘five’: 5, ‘eight’: 8}  
{‘one’: 111, ‘four’: 4, ‘three’: 3, ‘twelve’: 12, ‘ten’: 10, ‘seven’: 7, ‘six’: 6, ‘eleven’: 11, ‘two’: 222, ‘nice’: 9, ‘five’: 5, ‘eight’: 8}
```

#### 集合遍历
```python
set1 = {1, 2, 3}
for ekement in set1:
	print(element) # output:1 2 3
```

# 字典dict
1. **没有下标索引,取而代之的是key**
2. **key和value可以是任意数据类型(key不可为字典)**
3. **可容纳多个不同类型数据**
4. **可修改**
5. **key不可重复,value可重复**

clear
`字典名.clear()`
len
`len(字典名)`
返回key值数量

```python
# 定义简单字典
dictionary = {"张三":100,"李四":99,"王五":98,"老六":96}
# 定义空字典
dict1 = {}
dict2 = dict()
```

例:
```python
dictionary = {"张三":100,"李四":99,"王五":98,"张三":65}
print(dictionary) # output:{"李四":99,"王五":98,"张三":65}
print(dictionary["王五"]) # output:98

# 定义嵌套字典
my_dict = {
	"1":{
		"语文":99,
		"数学":89,
		"英语":74
	},
	"2":{
		"语文":99,
		"数学":89,
		"英语":74
	},
	"3":{
		"语文":99,
		"数学":89,
		"英语":74
	}
}

print(my_dict["1"]["语文"]) # output:99
```

#### 新增/更新元素
`字典名[key] = value`
当key不存在时，结果为新增元素。当key存在时，结果为修改
```python
my_dict = {"1":100, "2":99, "3":98, "4":97}
my_dict["5"] = 96 # 添加进了字典
my_dict["1"] = 93 # 修改了字典
```

#### pop
`字典名.pop(key)`
删除key及其对应value
```python
# 书接上文
score = my_dict.pop("1") 
print(score) # output:93
```

#### keys
`字典名.keys()`
获取所有的key值
```python
my_dict = {"1":100, "2":99, "3":98, "4":97}
# 获取
print(my_dict.keys()) # output:{["1","2","3"]}
```

#### 遍历字典
```python
# 书接上文
for key in my_dict.keys():
	print(key)
	print(my_dict[key])

# output:
#"1"
#100
#"2"
#99
#"3"
#98
#"4"
#97


# 方式二
for key in my_dict:
	print(key)
	print(my_dict[key])

# output:同上
```

# 数据容器通用操作

#### 取大小
`max(容器名)`
返回容器最大元素值
`min(容器名)`
返回容器最小元素值
```python
mylist = [1, 2, 3, 4]
mystr = "1234"
mytuple = (1, 2, 3, 4)
myset = {1, 2, 3, 4}
mydict = {"key1":1, "key2":2, "key3":3, "key4":4}

print(max(mylist))
print(max(mystr))
print(max(mytuple))
print(max(myset))
print(max(mydict))
# output:4 4 4 key4

print(min(mylist))
print(min(mystr))
print(min(mytuple))
print(min(myset))
print(min(mydict))
# output:1 1 1 key1
```

#### 容器转化
容器转list
```python
# 书接上文
print(list(mylist))
print(list(mystr))
print(list(mytuple))
print(list(myset))
print(list(mydict))

# output:
# [1, 2, 3, 4]
"""
['1', '2', '3', '4']
"""
# [1, 2, 3, 4]
# [1, 2, 3, 4]
"""
['key1', 'key2', 'key3', 'key4']
"""
```

容器转tuple
```python
# 书接上文
print(tuple(mylist))
print(tuple(mystr))
print(tuple(mytuple))
print(tuple(myset))
print(tuple(mydict))

# output:
# (1, 2, 3, 4)
"""
('1', '2', '3', '4')
"""
# (1, 2, 3, 4)
# (1, 2, 3, 4)
"""
('key1', 'key2', 'key3', 'key4')
"""
```

容器转str
```python
# 书接上文
print(str(mylist))
print(str(mystr))
print(str(mytuple))
print(str(myset))
print(str(mydict))

# output:
"""
[1, 2, 3, 4]
1234
(1, 2, 3, 4)
{1, 2, 3, 4}
{"key1":1, "key2":2, "key3":3, "key4":4}
"""
# 本体会有一个双引号
```

容器转set
```python
# 书接上文
print(str(mylist))
print(str(mystr))
print(str(mytuple))
print(str(myset))
print(str(mydict))

# output:
# {1, 2, 3, 4}
"""
('4', '1', '3', '2') 随机
"""
# {1, 2, 3, 4}
# {1, 2, 3, 4}
"""
('key1', 'key4', 'key2', 'key3') 随机
"""
```

#### 通用排序
`sorted(容器名, reverse=布尔名)`
给容器排序并放入列表,正序或反序
```python
mylist = [3, 1, 2, 4]
mystr = "1234"
mytuple = (3, 1, 2, 4)
myset = {3, 1, 2, 4}
mydict = {"key3":3, "key1":1, "key2":2, "key4":4}

print(sorted(mylist))
print(sorted(mystr))
print(sorted(mytuple))
print(sorted(myset))
print(sorted(mydict))

# output:
# [1, 2, 3, 4]
"""
['1', '2', '3', '4']
"""
# [1, 2, 3, 4]
# [1, 2, 3, 4]
"""
['key1', 'key2', 'key3', 'key4']
"""

降序
print(sorted(mylist, reverse = True))
# output:[1, 2, 3, 4]
```
