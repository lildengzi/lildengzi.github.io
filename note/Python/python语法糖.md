# 大数定义
```ad-example
title:Example
collapse:open
定义一个10亿整数
```
```python
# 法一
a = 10 * 10000 * 10000
# 法二
b = 10_0000_0000
# 法三
c = 10 ** 9
# 以上结果都是10亿
```

# 变量值交换
```ad-example
title:Example
collapse:open
交换变量整数
```
```python
a, b = b, a
# a与b交换
```

# 逻辑判断
```ad-example
title:Example
collapse:open
逻辑判断
```
在c中
```c
if(a >= 90 && a <= 100){;}
```
在python中
```python
if 90 <= a <= 100:
```

# 合并列表
extend的取代方法
```python
a = [1, 2, 3]
b = [4, 5, 6, 7, 8, 9]
print(a + b)
# output:[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

# 列表推导式
```ad-example
title:Example
collapse:open
列表所有数据+233
```
```python
a = [1, 2, 3, 4]

# 法一
b = []
for e in a:
    b.append(e+233)

# 法二
b = [ e+233  for e in a]

# output:[234, 235, 236, 237]
```
