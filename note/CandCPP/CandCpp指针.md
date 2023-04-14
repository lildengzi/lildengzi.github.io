目录
![[指针思维导图]]

## 指针介绍
`类型名* 指针变量 [= 数据 | NULL | nullptr(C++)];`
操作地址的变量，C和Cpp不可替代的原因，面向过程的灵魂
```c
//定义指针
int a = 10;
int* p;//or:int* p = &a;并省略下面一行;
p = &a;//or:*p = a;
cout << &a << endl;
cout << p << endl;
//output:00CFFA5C 00CFFA5C
cout << a << endl;
cout << *p << endl;
//output:10  10
cout << sizeof(int*) << endl;
cout << sizeof(float*) << endl;
cout << sizeof(char*) << endl;
cout << sizeof(double*) << endl;
//output:4  (全部，在32位操作系统)
//8  (全部，64位操作系统)
``` 

## 基本概念
指针本质就是操作内存地址
[[CandCpp指针案例]]
```c
int* p = nullptr;
int a = 0;
//*p 解引用
//p 指针变量
//&p 指针变量地址

p = &a;
//&*p 为 a
//*&a 为 a
(*p)++;
//先算*再算++,相当于a++ == 1
*p++;
//先算++再算*,相当于p指向a所在内存下一位
```
![[一张图看懂指针]]

## 指针运算
- 自增++
- 自减--
```ad-example
```
```c
int main()
{
	int a[2] = {10, 20};
	int *p = a;
	printf("%x %x %x %x", *(p++), *p++);
	//output:11 20
}
```

# 安全隐患
## 内存泄漏
由程序员手动开辟的区域没被收回，造成指针指向的地址占用内存还存在而不被销毁
```ad-warning
```
```c
#include<malloc.h>

int main()
{
	int *p_head = (int*)malloc(10);
	return 0;
	//指针未被释放
}
```

## 空指针
指针变量指向内存中编号为0的空间
空指针不可访问
```ad-warning
```
```c
int* p = [NULL, nullptr];
//0~255（空）内存编号系统占用，因此不可访问
*p = 100;
//output:ERROR
```

## 野指针
指针变量指向非法内存空间，在程序中尽量避免野指针
```ad-warning
```
```c
int* p = (int*)0x1100;
printf("%x", *p);
//output:ERROR
```

## 指针置空
在释放内存后指针指向的内存地址并不会因此改变数值，而是留下随机值在原位
规范建议将释放后的内存置空
> [!success] 
```c
int *p_head = (int*)malloc(10);
free p_head;
p_head = NULL;
```

# const修饰指针
const修饰指针——常量指针
* 指针指向可更改
* 指针指向的值不可以改
const修饰常量——指针常量
* 指针指向不可以改
* 指针指向的值可更改
const修饰指针修饰常量——常量指针常量
* 指针指向和指向的值都不可以改
```ad-important
```
```cpp
int a = 10;
int b = 20;
const int* p = &a;

//错误示例:
*p = 20;//指针指向的值不可以改

p = &b;//正确，此时指针指向b
```

```cpp
int a = 10;
int b = 20;
int* const p = &a;

//错误示例:
p = &b;//指针指向不可以改

*p = 10;//正确，此时b内存数据为10
```

```cpp
int a = 10;
int b = 20;
const int* const p = &a;
int const* const p = &a;

//错误示例:
p = &b;//指针指向不可以改

*p = 20;//指针指向的值不可以改
```

# 指针和数组
### 指针访问数组元素
编译器把`数组名[下标]`解释为`(数组首地址 + 下标)`
编译器把`地址[下标]`解释为`*(地址 + 下标)`
```c
int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int* p = arr;
cout << *p << endl;//output:1
p++;//让指针向后偏移4个字节
cout << *p << endl;//output:2
```
数组名就是数组首地址
```ad-example
```
```c
int main()
{
    int arr[10] { 0 };
    int *p = arr;
    printf("%d %d", arr, p);
    //output:00854331 00854331
}
```

> [!example] 例子
```c
int main()
{
    int a[5]{0, 1, 2, 3, 4};
    int *p = a;
    if(a[1] == *(a + 1))
    {
        printf("Hello ");
    }
    else(p[1] == *(p + 1))
    {
        printf("World");
    }
    return 0;
}
/*output:
Hello World
*/
```

> [!example] 例子
```c
int main()
{
    int a[5]{0, 1, 2, 3, 4};
    printf("%d", (&a[3])[-1]);
    return 0;
}
/*output:
2
*/
```

### 指针数组
元素都是指针的数组
```ad-example
title:example
```
```c
const char *str[2] = {"hello", "world"};

int main()
{
    printf("%s %s", str[0], str[1]);
}
/*output:
hello world
*/
```
![[指针数组图解]]

### 数组指针
指向数组的指针
> [!example] 
```c
int (*arr)[5] = {0, 1, 2, 3, 4};

int main()
{
    for(int i = 0; i < 5; i++)
    {
        printf("%d ", (*arr)[i]);
    }
}
/*output:
0 1 2 3 4
*/
```

# 指针和函数
## 指针作函数参数
值传递
```ad-example
```
```c
int swap(int f_a, int f_b)
{
	int temp = f_a;
	f_a = f_b;
	f_b = temp;
	printf("%d %d", f_a, f_b);
	//output:3 2
}

int main()
{
	int a = 2,b = 3;
	swap(a, b);
	printf("%d %d", a, b);
	//output:2 3  
	//没有改变
}
```

```ad-example
地址传递
```
```c
int swap(int* f_a, int* f_b)
{
	int temp = *f_a;
	*f_a = *f_b;
	*f_b = temp;
	printf("%d %d", f_a, f_b);
	//output:3 2
}

int a = 2,b = 3;
	swap(&a, &b);
	printf("%d %d", a, b);
	//output:3 2 
	//改变
```
![[指针作函数参数图解]]

## 函数指针
```ad-important
```
```c
int f(int a, int b)
{
    printf("this is func1\n");
}

int (*p)(int, int) = f;
p();//等价于f();
//output:this is func1
```

```ad-example
定义一个函数指针类型
```
```c
//from important
typedef int (*T)(int, int);

int (*p)(int ,int) = f;
T p1 = f;
```

## 指针函数
本质就是指针作为函数返回值
```ad-example
```
```c
int* func()
{
    int a = 100;
    return &a;
}

int main()
{
    int* a = func();
    return 0;
}
```

# 指针降级
```ad-warning
title:warning
collapse:open
对函数的形参数组进行sizeof操作数组会退化成一个指针大小
```
```c
#include <stdio.h>

void test(int a[5])
{
    printf("%d\n", sizeof(a));
}

int main()
{
    int a[5] = {0};
    printf("%d\n", sizeof(a));
    test(a);
    return 0;
}
/*output:
20
8或4 取决于架构

*/
```

# 指针的高级技巧

## 二级指针
二级指针被称为指向指针的指针

## 指针修改const修饰常量
在正常情况下const修饰的变量无法被修改
```ad-error
title:Error
collapse:open
```
```c
const int a = 1;
scanf("%d", &a);//ERROR
```

但是如果用指针指向这个地址再通过修改指针就能达到修改改地址的值的目的
但是**现代编译器**会帮我们做优化，具体优化就是把const修饰的常量转成宏定义，所以本质上我们的指针指向了新的的地址，原有的值不做改变
> [!success] 
> 不开启编译器O2优化
```c
//from error
int *p = &a;
scanf("%d", p);//input:10
//output:10
```

## void\*指针
`void*`就是一个通用指针，可以指向任意类型的指针。
对于没有泛型编程的C语言来说，任何类型的指针都可以传入`memcpy`和`memset`中，这也真实地体现了**内存操作函数**的意义，`void*`帮我们和编译器屏蔽了冗余的变量类型信息，而直接将内存暴露在我们面前。
对于C++而言，对于某些范型可以实现的功能但又想找一种轻量化的实现方法，`void*`也不失为一种不错的选择。
> [!warning] 限制
> 如果将`void*`类型指针赋给其他类型指针，则需要强制类型转换
```c
int someInt = 10;
void* pvoid = &someInt;
int* pInt = (int*) pvoid;
```

> [!warning] 
> void\*指针不可解引用（取内容）
```c
int someInt = 10;
void* pvoid = &someInt;
*pvoid ++;
```

> [!warning] 
> 若想正确删除掉void\*指向的动态类型变量，需要进行强制类型转换：
