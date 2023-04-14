# $$\tt 计算机基本知识$$
# **GNU**  

设想被作为一套完全自由的操作系统  
GNU是GNU's Not Unix的缩写，即我们不是UNIX  
在unix闭源后RMS(人名)大叔不爽，于是发起GNU计划，做了EMacs编辑器和编译器GCC  
因此**GNU是一个计划**  
gcc和glibc就是GNU的产品  
但GNU缺操作内核，一个叫linus的同学干了个linux出来，并被GNU套用打包发布为GNU/Linux  

GNU软件包包括GNU编译器套装(GCC),GNU的c库(gilbc),GNU的核心工作组(coretils),GNU除错器(GDB),GNU二进制实用程序(binutils)的GNU Cashshell中和GNOME桌面环境。  
GNU除在Linux使用还在其他操作系统广泛应用。
###### 待补充
***
编辑器:写文本用的  
编译器:写的文本转换成程序运行

# **GCC**

GCC是GNU操作系统专门写的编译器，最初只运行c(GUN C Compiler),后来变为扩展为可运行多种语言以及各类处理器架构上的汇编语言,所以改名为(GNU Compiler Collection)
## 接口
GCC的外部接口长得像一个标准的Unix编译器。
###### 待补充
# UNIX
Unix既可以指UNIX系统也可以指UNIX规范  

适用场景:**主要用于工程应用和科学计算等领域**，**简洁至上、提供机制而非策略**，医疗保健和银行等市场中关键任务工作负载的首选操作系统。航空航天、汽车和造船业制造商，以及世界各地的大学也广泛采用了 Unix。  

发展历程:随小型机应用发展,UNIX也随之发展起来  
**UNIX系统在计算机操作系统的发展史上占有重要的地位**

UNIX系统在结构上分为核心程序（kernel）和外围程序（shell）

###### 待补充  

# 程序制作方法  

1. 将框架搭好  
初始注释:   
将所有想要实现的功能注释写上    
例：
```cpp
class calc
{
public:
    int add();
    int dev();
    int multi();
    int ...
private:
    double m_num1;
    double m_num2;
};

//加法
int add(){}

//减法
int dev(){}

//乘法
int multi(){}

对外接口
void test(){}

```

2. 内部功能实现
```cpp
int add(int number1,int number2)
{
    result = number1 + number2;
    return result;
}
...
```

3. 外部交互实现
```cpp
int test()
{
int num1,num2;
char type;
cin >> num1 >> type >> num2;
if(type=="+")
{
    ans = add();
}
else ...
cout << ans;
}
```

4. 软件封装