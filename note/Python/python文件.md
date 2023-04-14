# $$python文件$$
[文件操作](#文件操作)
[读取](#读取)
[写入](#写入)

## 文件操作
### 打开操作
`文件对象 = open(文件名/文件路径,读写模式,编码格式)`
文件名/文件路径表示要打开的文件
读写模式设置可只读可只写可追加等
编码格式基本为utf-8
```python
f = open('python.txt','r',encoding ="utf-8")
# encoding要用关键字函数参数方法对应
```

> 常用文件操作
> * ’r‘:只读  
> * ’w‘:只写  当文件不存在时会自动创建文件
> * 'a':追加  在已有的数据后添加新文件，当文件不存在时会自动创建文件

### 关闭操作
`文件对象.close()`
结束文件对内存的占用,并将内存数据写入到硬盘中

### with open
`with open("""body""") as 文件对象:`
自动化关闭打开
```python
with open('python.txt', 'r', encoding ="utf-8") as f:
	for line in f:
		print(line)

# output:
"""
 我不是码神,我只是个小白
python好难学怎么办
我太难了
小黑子露出只因脚了吧
"""
```

示例文件：
> 我不是码神,我只是个小白
> python好难学怎么办
> 我太难了
> 小黑子露出只因脚了吧

## 读取
#### read
`文件对象.read(字符数)`
将文件内容以字符串形式读取出来
字符数可不写,默认为读取全部
```python
print(f.read(10))
# output: 我不是码神,我只是个

# 如果之前调用过read()函数并读取过内容那之后的read(空)会从之前的内容的结尾读取
print(f.read())
# output:
"""
小白
python好难学怎么办
我太难了
小黑子露出只因脚了吧
"""
```
单独读时
```python
print(f.read())
# output:
"""
我不是码神,我只是个小白
python好难学怎么办
我太难了
小黑子露出只因脚了吧
"""
```

#### readlines
`文件对象.readlines()`
读取对象并按行封装到列表中
```python
# 单独读取
lines = f.readlines()
print(lines)
# output:
["我不是码神,我只是个小白", "python好难学怎么办", "我太难了", "小黑子露出只因脚了吧"]
```
`文件对象.readline()`
读取单行
```python
print(f.readline())
print(f.readline())
print(f.readline())
# output:
"""
我不是码神,我只是个小白
python好难学怎么办
我太难了
小黑子露出只因脚了吧
"""
```
另一种方法:
```python
for line in f.readline():
	print(line)

# output:
"""
我不是码神,我只是个小白
python好难学怎么办
我太难了
小黑子露出只因脚了吧
"""
```

## 写入
`文件对象.write(内容)`
将内容写入内存
`文件对象.flush()`
内存中积攒内容写入到文件中
```python
f = open("D:/test.txt", "w", encoding = "UTF-8")
f.write("Hello world")
f.flush()
f.close()
# D:/test.txt:
# Hello world

# 但是w模式只适合初次创建因为想再次使用时会清空原有内容
f = open("D:/test.txt", "w", encoding = "UTF-8")
f.write("我不是码神")
f.flush()
f.close()
# D:/test.txt:
# 我不是码神
```

## 追加
```python
f = open("D:/test.txt", "w", encoding = "UTF-8")
f.write("Hello world")
f.close()


f.open("D:/test.txt", "a", encoding = "UTF-8")
f.write("我不是码神")
f.close()
# D:/test.txt:
# Hello world我不是码神
```


文件操作例子:
将a.txt文件备份至b.txt文件
```python
fr = open("D:/a.txt", "r", encoding = "UTF-8")
fw = open("D:/b.txt", "w", encoding = "UTF-8")
for line in fr:
	line = line.strip()
	fw.write(line)
	fw.write("\n")

fr.close()
fw.close()
```