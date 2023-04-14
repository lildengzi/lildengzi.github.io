# 内联函数介绍
普通函数调用的时候，是需要额外的时间开销的，主要体现在
1. 需要保存原来指令的地址
2. 把实参拷贝到堆栈
3. 函数返回值需要放入寄存器

# 使用
`inline func(){...}`
-   1.在内联函数内不允许使用循环语句和开关语句；
-   2.内联函数的定义必须出现在内联函数第一次调用之前；
-   3.类结构中所在的类说明内部定义的函数是内联函数。
```ad-important
title:Important
collapse:open
优点: 当函数体比较小的时候, 内联该函数可以令目标代码更加高效. 对于存取函数以及其它函数体比较短, 性能关键的函数, 鼓励使用内联.

缺点: 滥用内联将导致程序变慢. 内联可能使目标代码量或增或减, 这取决于内联函数的大小. 内联非常短小的存取函数通常会减少代码大小, 但内联一个相当大的函数将戏剧性的增加代码大小. 现代处理器由于更好的利用了指令缓存, 小巧的代码往往执行更快。
```

```ad-example
title:Example1
collapse:open
头文件中声明方法
```
```cpp
class A
{
public:
    void f1(int x); 

    /**
     * @brief 类中定义了的函数是隐式内联函数,声明要想成为内联函数，必须在实现处(定义处)加inline关键字。
     */
    void Foo(int x,int y) ///< 定义即隐式内联函数！
    {
    
    };
    void f1(int x); ///< 声明后，要想成为内联函数，必须在定义处加inline关键字。  
};
```
实现文件中定义内联函数：
```cpp
#include <iostream>
#include "inline.h"

using namespace std;

/**
 * @brief inline要起作用,inline要与函数定义放在一起,inline是一种“用于实现的关键字,而不是用于声明的关键字”
 *
 * @param x
 * @param y
 *
 * @return 
 */
 //写法一
int Foo(int x,int y);  // 函数声明
inline int Foo(int x,int y) // 函数定义
{
    return x+y;
}

// 写法二：定义处加inline关键字，推荐这种写法！
inline void A::f1(int x){

}

int main()
{

    
    cout<<Foo(1,2)<<endl;

}
/**
 * 编译器对 inline 函数的处理步骤
 * 将 inline 函数体复制到 inline 函数调用点处；
 * 为所用 inline 函数中的局部变量分配内存空间；
 * 将 inline 函数的的输入参数和返回值映射到调用方法的局部变量空间中；
 * 如果 inline 函数有多个返回点，将其转变为 inline 函数代码块末尾的分支（使用 GOTO）。
 */
```

```ad-example
title:Example2
collapse:open
```
```cpp
#include <iostream>
 
using namespace std;

inline int Max(int x, int y)
{
   return (x > y)? x : y;
}

// 程序的主函数
int main( )
{

   cout << "Max (20,10): " << Max(20,10) << endl;
   cout << "Max (0,200): " << Max(0,200) << endl;
   cout << "Max (100,1010): " << Max(100,1010) << endl;
   return 0;
   /*output:
   20
   200
   1010
   */
}
```
