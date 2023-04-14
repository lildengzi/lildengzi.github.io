# 函数介绍
是c语言也是面向过程语言的重要组成部分
* 所有函数都是平等的，即定义函数是分别进行，一个函数不属于另一个函数，但可以互相调用(除了main函数)
* C语言执行是从main函数开始的，main函数结束后整个程序也结束运行，main函数由系统调用
* 从用户角度看，函数有两种,**标准库函数**:如printf,open等。**自定义函数**:自己写的函数。
* 从函数形式看有两种函数，**无参函数** ,**有参函数**。
- 函数有时被称为: 模块

# 基本构成
`类型 函数名(){/*body*/}`
一个函数由下列基本结构构成
- 返回类型
- 函数头
- 函数体
```ad-example
title:Example+
collapse:open
```
```c
void func()
{
    printf("Hello World");
}
```

## 函数头
`类型 函数名()`

## 返回值/函数体
C和CPP等编译语言只支持单参返回值
`return 值变量;`
写在作用域内对数据处理的具体方法`{}`
```ad-example
title:Example-
collapse:open
```
```c
//函数体加返回值
int fun()
{
    return 10;
}
//函数体
void func()
{
    int b = fun();
    printf("%d", b);
}
```

## 函数形参
函数括号内能接收若干传入参数,我们的scanf和printf都是函数
```ad-example
title:Example*
collapse:open
```
```c
int func(int a)
{
    return a + 10;
}

int main()
{
    int b = func(100);
    printf("%d", b);
    //output:100
    return 0;
}
```

### void形参
显示声明不接受任何形参值
```c
int main(void)
{
    return 0;
}
```

# 递归函数
一个函数可以重复调用自己，这就是递归
> [!example] 
```c
void func(n)
{
    if(n >= 0)
    {
        printf("%d", --n);
        func(n);
    }
    else
    {
        return;
    }
}

int main()
{
    int n = 10;
    func(n);
    return 0;
}
/*output:
9876543210*/
```

# 主函数
程序的入口函数,一个源文件不可能没有主函数
`int main(int argc, char* argv []){/*body*/}`
- `argc`:argument count 转入参数的数量 程序会自动计算 无需输入
- `argv`:argument vector 具体参数值
```ad-important
title:Important
collapse:open
```
```c
int main(int argc, char* argv [])
{
    /*body*/
}
```

```ad-example
title:Example
collapse:open
```
```c
#include <stdio.h>

int main(int argc, char* argv [])
{
    printf("参数个数=%d\n", argc);
    for(int i = 0; i < argc; i++)
    {
        printf("第%d个参数:", i + 1);
        printf("参数值=%s\n", argv[i]);
    }
}
/*
input:
test.exe Hello World
output:
参数个数=3
第%d个参数:参数值=test.exe
第%d个参数:参数值=Hello
第%d个参数:参数值=World

*/
```

# 回调函数
将函数名能够作为参数使用，我们将这种技术称为回调函数
```ad-example
title:Example-
collapse:open
```
```c
#include <stdio.h>
#include <stdlib.h>
typedef void (*T)(int);
  
void myFunc(int b)
{
    printf("%d", b);
}

void func(T t, int b)
{
    t(b);
}

int main()
{
    T p1 = myFunc;
    func(p1, 2);
    system("pause");
    return 0;
}
/*output:
2

*/
```

```ad-summary
title:Summary
collapse:open
回调函数能够实现函数调用函数，方便快速开发
```

在之后的函数进阶有更多的关于函数的知识
