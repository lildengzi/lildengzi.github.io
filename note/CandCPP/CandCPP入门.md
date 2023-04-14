###### 目录
1. [[CandCpp基础数据变量]]
2. [[CandCpp流程控制]]
5. [[CandCpp运算符]]
6. [[注释规范]]
7. [[CandCpp标准输入输出]]
8. [[C语言MallocAndFree]]
9. [[CandCpp函数]]
10. [[CandCpp数组]]
11. [[CandCpp指针]]
12. [[CandCpp枚举]]
13. [[CandCpp结构体]]
14. [[CandCPP文件操作]]
15. [[CandCpp预处理]]
[[C语言设计]]
[[cpp进阶]]
[[现代cpp]]
[[工程文件学习]]
[[ide使用指南]]
[[Qt框架入门]]
[[编程小知识]]

------
# C 简介

C 语言是一种通用的高级语言，最初是由丹尼斯·里奇在贝尔实验室为开发 UNIX 操作系统而设计的。C 语言最开始是于 1972 年在 DEC PDP-11 计算机上被首次实现。

在 1978 年，布莱恩·柯林汉（Brian Kernighan）和丹尼斯·里奇（Dennis Ritchie）制作了 C 的第一个公开可用的描述，现在被称为 K&R 标准。

UNIX 操作系统，C编译器，和几乎所有的 UNIX 应用程序都是用 C 语言编写的。由于各种原因，C 语言现在已经成为一种广泛使用的专业语言。

-   易于学习。
-   结构化语言。
-   它产生高效率的程序。
-   它可以处理底层的活动。
-   它可以在多种计算机平台上编译。

# C++介绍
C++ 是一种静态类型的、编译式的、通用的、大小写敏感的、不规则的编程语言，支持过程化编程、面向对象编程和泛型编程。

C++ 被认为是一种**中级**语言，它综合了高级语言和低级语言的特点。

C++ 是由 Bjarne Stroustrup 于 1979 年在新泽西州美利山贝尔实验室开始设计开发的。C++ 进一步扩充和完善了 C 语言，最初命名为带类的C，后来在 1983 年更名为 C++。

C++ 基本上是 C 的一个超集，事实上，几乎任何合法的 C 程序都是合法的 C++ 程序。

标准的 C++ 由三个重要部分组成：

-   核心语言，提供了所有构件块，包括变量、数据类型和常量，等等。
-   C++ 标准库，提供了大量的函数，用于操作文件、字符串等。
-   标准模板库（STL），提供了大量的方法，用于操作数据结构等。
*   目前C++普及标准为C++14

---
# 基本构成
```ad-important
title:Important
collapse:open
## c语言
```
```c
#include<stdio.h>

int main()
{
	printf("Hello World");
	return 0;
}
```

```ad-important
title:Important
collapse:open
## c++
```
```cpp
#include<iostream>
using namespace std;

int main()
{
	cout<<"Hello World"<<endl;
	return 0;
}
```

## 解读
- `std`:standard 标准
- `i`:input 输入
- `o`:output 输出
- `stream`:流
- `main`:主函数，程序入口
- `printf`:c语言输出函数
- `cout`:c++输出函数

---


# 存储类
**存储类不是C语言重点**
## auto
<!--(已弃用存储类，转而变成cpp自动类型推导)-->
`auto 变量名 = 数据`
auto的原理就是根据后面的值，来自己推测前面的类型是什么。
auto的作用就是为了简化变量初始化，如果这个变量有一个很长很长的初始化类型，就可以用auto代替。

注意点：f
1. 用auto声明的变量必须初始化（auto是根据后面的值来推测这个变量的类型，如果后面没有值，自然会报错）
2. 函数和模板参数不能被声明为auto（原因同上）
3. 因为auto是一个占位符，并不是一个他自己的类型，因此不能用于类型转换或其他一些操作，如sizeof和typeid
4. 定义在一个auto序列的变量必须始终推导成同一类型
```c
int a = 100;
auto a;//此时auto为int

//错误的例子:
auto a = 5, b = 5.0, c = '5';//多次自动推导只能推相同类型
//正确例子:
auto a = 5, b = 6, ...;

//基本用法:
std::vector<std::string> ve;
std::vector<std::string>::iterator it = ve.begin();
//可以简化成
auto it = ve.bagin();
```

## const
`const 类型名 变量名 = 数据`
```c
//以下两种都是一样的
const int num=5;
int const num=5;
//两种写法一样，都表示变量num的值不能改变，const修饰变量时要初始化，否则之后就不能再进行赋值
```
[[CandCPPconst]]有更多介绍

## static
`static 类型名 变量名 = 数据`
将变量变成静态变量
```c
static int s_n = 100;
```

## extern
`extern 类型名 变量名 = 数据`
全局变量就是`extern int 全局变量;`，不过编译器会智能处理，所以写代码时不需要加extern
用于外部(全局)变量声明/定义
extern是C语言中的一个关键字，一般用在变量名前或函数名前，作用是用来说明“**此变量/函数是在别处定义的，要在此处引用**”，extern这个关键字大部分读者应该是在变量的存储类型这一类的内容中
多文件中内部变量有可能会同名，此时可以extern声明该变量是全局变量
```c
//test.c
int a;//全局变量

int main()
{
	return 0;
}

//test02.c
#include"test.c"
int func()
{
	extern int a;//此时a变量跟test.c中的a是同一变量
	printf("%d", a);
}
```

## mutable
`mutable 类型名 变量名 = 数据`
突破const的限制，使得变量可更改
```cpp
class Person
{
	
};
```
