###### 目录
[[#基础数据变量]]
[[#变量修饰符]]
[[#变量命名规则]]
额外参考
[[占位符和ASCII码]]

# 基础数据类型
以下数据类型在不同硬件架构有不同表现，后面会讲到
| 类型               | 位        | 范围                                                              |
| ------------------ | --------- | ----------------------------------------------------------------- |
| char               | 1 个字节  | -128 到 127 或者 0 到 255                                         |
| unsigned char      | 1 个字节  | 0 到 255                                                          |
| signed char        | 1 个字节  | -128 到 127                                                       |
| int                | 4 个字节  | -2147483648 到 2147483647                                         |
| unsigned int       | 4 个字节  | 0 到 4294967295                                                   |
| signed int         | 4 个字节  | -2147483648 到 2147483647                                         |
| short int          | 2 个字节  | -32768 到 32767                                                   |
| unsigned short int | 2 个字节  | 0 到 65,535                                                       |
| signed short int   | 2 个字节  | -32768 到 32767                                                   |
| long int%%(x64)%%  | 8 个字节  | -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807           |
| long long          | 8 个字节  | -2^63到2^63-1                                                     |
| unsigned long long | 8 个字节  | 0 到 18,446,744,073,709,551,615                                                                  |
| signed long int    | 8 个字节  | -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807           |
| unsigned long int  | 8 个字节  | 0 到 18,446,744,073,709,551,615                                   |
| float              | 4 个字节  | 精度型占4个字节（32位）内存空间，+/- 3.4e +/- 38 (~7 个数字)      |
| double             | 8 个字节  | 双精度型占8 个字节（64位）内存空间，+/- 1.7e +/- 308 (~15 个数字) |
| long double        | 16 个字节 | 长双精度型 16 个字节（128位）内存空间，可提供18-19位有效数字。    |
| bool               | 1个字节   | true/false                                                        |

## int
`int 变量名 [= 数据];`
整型变量
可存储二进制、八进制、十进制、十六进制数
1.  十六进制
    以0x或0X开头（0是阿拉伯数字0）
2.  八进制
    以0开头（0是阿拉伯数字0）
3.  二进制
    以0b或0B开头（0是阿拉伯数字0)
```c
int a = 100;//十进制
int b = 0XFF;//十六进制
int _b_ = 0xFF;//十六进制
int c = 067;//八进制
int d = 0b1010;//二进制
int _d_ = 0B1010;//二进制
```

### 基本定义方法
十进制
```c
int intnumber = 98765432;
int intnumber2 = -654321;
```

## float
`float 变量名 [= 数据];`
浮点变量
有效精度$6 - 7$位
不能使用科学计数法
```c
float fnumber = 3.141592
float fnumber1 = 3.14f
float fnumber2 = 3.14F
```

## double
`double 变量名 [= 数据];`
双精度
有效长度$14-15$位，可以使用科学计数法
```c
double dnumber = 3.1415926545838
//e表示指数运算，可大写
double dnumber2 = 3e4;//表示3*10^4
double dnumber3 = 3E4;//same
```
-   E大小写都可以，但为了便于区分，一般使用大写E
-   E后面的数可以是必须是整数（正、负或0都可以），不能是小数

## char
`char 变量名 = [字符, ASCII码];`
字符变量
```c
char ch0 = 97;
char ch = 'A';
char ch2 = '\n';
char ch3 = '1';
```
char类型可以根据ascii码进行十位数整型计算
[[占位符和ASCII码]]
[[#字符串]]

## bool
c语言没有布尔类型
`bool 变量名 = [true/false];`
布尔变量
```cpp
bool ok1 = false;
bool ok2 = true;
```

## void
`void 函数体([void])`
无返回值，不接受形参，在candcpp函数详细介绍
```c
//用法一，声明函数无返回值
void main()
{
}

//用法二，声明函数体不接受任何变量
int main(void)
{
}
```

## 字符串
`char[数组空间] 变量名 [= 字符串];`
纯C字符串以字符数组/指针组成
```c
//如果初始化就赋值。则自动计算长度，长度可不填
char ch[] = "Hello world";
//错误写法:没有声明长度。  如果是不想声明，也没有初始化赋值。
char ch[];
char ch[11] = "Hello world";

//整体看
char ch[11] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'};
//指针实现
char* ch = "Hello world";
```

`string 变量名 [= 字符串];`
C++风格
```cpp
//cpp
string str = "Hello World";
//一个容器，内含许多功能
```

## 左右值
`左值 = 右值`
在错误中会经常见到**表达式必须是可修改的左值**
左值即左边的值
```cpp
//常见情况
int left = right;
```

## 变量作用域
变量有全局变量，局部变量，成员变量之分
局部变量：
定义在函数体内
成员变量：
定义在类内
全局变量：
定义在函数体，类外
```cpp
//全局变量
int _n_ = 100;

class Person
{   //成员变量
	int per_n = 100;
};

void main()
{   //局部变量
	int n = 100;
}
```

# 变量修饰符
## signed/unsigned
`signed/unsigned 类型名 变量名 [= 数据/字符];`
声明变量是否有符号(即正负)，int char float double默认为有符号
## long/short
`long/long long/short 类型名 变量名 [= 数据/字符];`
声明变量存储长度(short为短字节/long 为长字节),以下都是合法整型
```c
long a;// == long int a;
short b;
int c;
long long d;
```

## 定义方法
```c
signed s_a = 0;
signed int a = 10;
unsigned int b = 20;
long c = 30;
long long d = 40;
long long int e = 50;
short int f;
unsigned int g = 70;
signed long int h = 80;
long signed int i = 90;
long double j;
int long long k = 110;
...
```
```ad-summary
title:Summary
collapse:open
- 不写类型时默认为int类型
- 修饰符和类型没有顺序之分
> [!example] 这是可行的
> ```c
> int unsigned short l;
> double long m;
> ```

```

```ad-warning
title:warning
collapse:open
- char类型没有unsigned修饰符,尽管有些编译器提供了相应的修饰符，但开发时没有实际意义
```

# 变量命名规则
> [!important] 
> 1. 名称中只能是英文字符`[a-z][A-Z]`,下划线`_`和数字`[0-9]`
> 2. 变量开头不能是数字
> 3. 区分大小写
> 4. 不能用关键字
> 5. 尽量不要用下划线开头的变量名，因为需要由编译器保留实现

> [!error] 
```c
int 1_dfgf; //错误，用数字开头了
int float; //错误，用关键字命名
int #%^$; //错误，名称中只能是英文字符,下划线和数字
```

> [!warning] 
```c
int _int; //警告，可能会和标准库头文件内容重名
```

> [!success] 
```c
int a;
int A; //正确,因为区分大小写
```
