
* 在无法直接判断类型时注解比较有用
* 提示性功能而非决定性

### 变量类型注解
`变量名: 类型 = 数据`
`变量名 = 数据  # type:类型`
```python
# 方式一
var_1: int = 10
var_2: str = "张三
var_3: bool = True

class Student:
	pass
stu: Student = Student()

my_list: list[int] = [1, 2, 3]
my_tuple: tuple[int, str, bool] = (1, "string", True)
...


# 方式二
var_1 = 100    # type:int
var_2 = True    # type:bool
def func():
	return 20
var_3 = func()    # type:int
```

### 函数(方法)类型注解
`def 函数名(变量名: 类型名, ...) -> 返回类型:`
```python
def add(x: int, y: int) -> list:
	return x + y

add()
```

### Union联合类型注解
导包tytping
`变量名: 容器名[Union[类型名, 类型名, ...]] = 数据`
```python
from typing import Union
my_list: list[Union[str, int]] = [1, 2, "hahaha", "nb"]
my_dict: dict[str, Union[str, int]] = {"name":"张三", "age":31}

# 函数
def func(data: Union[int, str]) -> Union[int, str]:
	pass
```

