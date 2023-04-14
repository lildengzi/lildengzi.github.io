
# 模块基本操作
`[from 模块名] import [模块 | 类 | 变量 | 函数 | *] [as 别名]`
中括号表示可不写/选写最基本语法为
`import 模块名`
`import 模块名1,模块名2`
功能：导入模块
```python
import time
import numpy as n
from time import sleep
import *

```

自定义模块:
```python
# mod.py
def test()
	print(666)

# main.py
import mod
mod.test()
# output:666
```

多义情况:
```python
# mod2.py
def test()
	print(123)

# mod.py
def test()
	print(666)

# main.py
from mod import test
from mod2 import test

test()
# output:123
```

## if \_\_name\_\_ == "\_\_main\_\_":
模块化管理：
```python
# mod2.py
def test()
	print(123)

test()

#######################
# mod.py
def test2()
	print(666)

if __name__ == "__main__":
	test2()

#######################
# main.py
from mod import test

# output:123

#######################
# main.py
from mod import test2

# output:
```

## \_\_all\_\_:
当导入方式为所有导入时`import *`导入的为`__all__ = ["""body"""]`中body的内容
只作用于$*$上
```python
# mod.py
__all__ = ['test']

def test()
	print(123)

def test2()
	print(666)

if __name__ == "__main__":
	test2()

#######################
# main.py
from mod import *
test()
# output:123
test2()
# output:undefined
```

# 包的导入
创建一个含`__init__.py`文件的文件夹，该文件夹就是python的包
```python
from 包 import 文件
# or:
import 包.文件
```

### \_\_init\_\_.py
控制文件的导入
```python
__all__ = ["""body"""]
```
