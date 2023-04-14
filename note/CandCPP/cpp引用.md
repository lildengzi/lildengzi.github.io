# 引用
C++非常重要的技术

## 基本语法
`类型 &别名 = 原名`
引用很容易与指针混淆，它们之间有三个主要的不同：
-   不存在空引用。引用必须连接到一块合法的内存。
-   一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象。
-   引用必须在创建时被初始化。指针可以在任何时间被初始化。
- 引用在初始化后，不可以被改变。
```cpp
int main()
{
	int a = 0;
	int &b = a;
	cout << a << endl;
	cout << b << endl;
	b = 100;
	cout << a << endl;
	cout << b << endl;
	/*output:
	0
	0
	100
	100*/
	
	//错误示例:未初始化
	int &b;
	
	//引用初始化后不可被改变，变量只能赋值而非更改引用
	int c = 20;
	b = c;//赋值
	cout << a << endl;
	cout << b << endl;
	cout << c << endl;
	/*output:
	  20
	  20
	  20*/
}
```

## 引用做函数参数
引用能够形参修饰实参
```cpp
void swap01(int a, int b)
{
	int temp = a;
	a = b;
	b = temp;
}

void swap02(int* a, int* b)
{
	int temp = *a;
	*a = *b;
	*b = temp;
}

void swap03(int& a, int& b)
{
	int temp = a;
	a = b;
	b = temp;
}

int main()
{
	int a = 10;
	int b = 20;
	swap01(a, b);
	cout << a << b <<endl;
	//output:10 20
	swap02(&a, &b);
	cout << a << b <<endl;
	//output:20 10
	swap03(a, b);
	cout << a << b <<endl;
	//output:20 10
}
```

## 引用作为函数返回值
函数调用可以作为左值
<font color="rgb(200, 100, 100)">不要返回局部变量的引用</font>
```cpp
int& test01()
{
	int a = 10;
	return a;
}

int& test02()
{
	static int a = 10;
	return a;
}

int main()
{
	int &ref = test01();
	cout << ref << endl;
	cout << ref << endl;
	/*output:
	10
	78765432  (随机)
	*/

//第一次是因为编译器做了正确处理，部分编译器会做不同处理
//第二次数据不再保留(vs2022无限保留)
//返回局部变量地址本身就是非法操作

	int &ref2 = test02();
	cout << ref2 << endl;
	cout << ref2 << endl;
	/*output:
	10
	10  (无论多少次都是10)
	*/
	test02() = 1000;
	cout << ref2 << endl;
	cout << ref2 << endl;
	/*output:
	1000
	1000  (无论多少次都是1000)
	*/
}
```

## 引用的本质
`&`引用其实就是一个常量指针
```cpp
void func(int& ref)
{
	ref = 100;
}

int main()
{
	int a = 10;
	
	//自动转换为int* const ref = &a;
	int& ref = a;
	ref = 20;//内部发现是引用，转化为: *ref = 20;
	cout << a << endl;
	cout << ref << endl;
	
	func(a);
	return 0;
}
```
引用常用方法就是做函数参数或函数返回值

## 常量引用
用来修饰形参防止误操作
```cpp
int main()
{
	int a = 10;
	int& ref = 10;//错误，引用必须引一块合法内存空间，10在常量区(非法)，a在栈区（合法）
	
	//加const之后，编译器代码修改int temp = 10;const int& ref = 10;（即找不到原名）
	const int& ref = 10;
	
	ref = 20;//错误，加入const之后变为只读，不可修改
	
}
```
基本常用用法：
```ad-example
title:Example
collapse:open
```
```cpp
//错误示例：
void show(int& val)
{
	val = 100;
	cout << val << endl;//output:100
}

int main()
{
	int a = 10;
	show(a);
}

//正确示例
void show(const int& val)
{
	val = 100;//报错
	cout << val <<endl;
}

int main()
{
	int a = 10;
	show(a);
}
```
