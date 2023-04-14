# 预处理(预编译)介绍


# include
`#include<包含头文件>`
让编译器从系统路径查找文件
`#include"包含头文件"`
让编译器从当前目录查找文件
```c
#include<stdio.h>
#include"my_header.h"
```

# c/cpp标准库
c标准输入输出库
`#include<stdio.h>`
cpp标准输入输出库(含命名空间)
`#include<iostream>`
`using namespace std;`
```ad-important
title:Important
collapse:open
C的标准库:
老版本有.h后缀,新版本c前缀
新老版本内容一样

C++标准库:
老版本有.h后缀,新版本没有后缀
老版本已弃用只能用新版本(还要指定命名空间)
```

# define
无参宏
`#define 宏名 宏内容`
有参宏
`#define MAX(x,y) ((x)>(y))?(x):(y))`
编译时，编译器把程序中的宏名用宏内容替换，是为了宏展开(宏替换)
c++内联函数代替有参数的宏更好
```c
#define MAX_NONE "Hello World"
#define INT int
#define print printf

INT main()
{
	print("Hello World");
	print("%s", MAX_NONE);
}
```

# typedef
`typedef 类型名 自取名`
将类型名用自己的名字转述
以下主要为c语言
主要用法:
```c
typedef struct Student
{
	int age;
	char name[100];
	...
};
# 原本定义学生结构体
struct Student stu1; 
# typedef 后的学生结构体定义
Student stu2;
```

用法
`#typedef 新类型名`
```c
//原本定义
struct tagNode create();

//用typedef后
typedef struct tagNode tagNode;
//用tagNode定义时只用tagNode
tagNode create();
```

# 条件编译

有几个指令可以用来有选择地对部分程序源代码进行编译。这个过程被称为条件编译。

条件预处理器的结构与 if 选择结构很像。请看下面这段预处理器的代码：
```c
#ifdef NULL
   #define NULL 0
#endif
```
您可以只在调试时进行编译，调试开关可以使用一个宏来实现，如下所示：
```c
#ifdef DEBUG
   cerr <<"Variable x = " << x << endl;
#endif
```
如果在指令`#ifdef` DEBUG 之前已经定义了符号常量 DEBUG，则会对程序中的 **cerr** 语句进行编译。您可以使用 `#if` 0 语句注释掉程序的一部分，如下所示：
```c
#if 0
   不进行编译的代码
#endif
```

# \#pragma
`pragma once`
防止头文件重复包含,微软特有预编译命令
```ad-example
title:Example-
collapse:open
```
```c
#pragma once
```

# ifndef/define
头文件常见预编译指令
```ad-example
title:Example
collapse:open
```
```c
#ifndef XX_H
#define XX_H
    /*body*/

#endif XX_H
```

# \#define/\#undef
1. define是预编译指令，定义的宏是在预处理阶段展开的
2. define定义的对象没有数据类型，编译器只能机械地进行字符替换
3. define定义的是常量，define定义的宏在编译后消失了，它不占用内存
将任何形式的值(包括类型，数值，指针，变量，地址等几乎所有关键字,类型或自取变量名再定义)添加一个标识符
```ad-important
title:Important
collapse:open
```
```c

```

# \#error

# \#line

编译详情
[[CandCpp底层知识#编译原理]]
