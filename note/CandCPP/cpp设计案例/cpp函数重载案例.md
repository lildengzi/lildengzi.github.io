# 函数重载案例
## 基本用法
```ad-error
```
```
void func()
{
	cout << "1" << endl;
}

void func()
{
	cout << "2" << endl;
}

int main()
{
	func();
	func(10);
	//output:
	//1
	//2
}
```


```ad-example
title:Example
```
```cpp
void func()
{
	cout << "1" << endl;
}

void func(int a)
{
	cout << "2" << endl;
}

void func(double a)
{
	cout << "3" << endl;
}

void func(int b, double a)
{
	cout << "4" << endl;
}

void func(double a, int b)
{
	cout << "5" << endl;
}

int main()
{
	func();
	func(10);
	func(10.0);
	func(10, 10.0);
	func(10.0, 10);
	//output:
	//1
	//2
	//3
	//4
	//5
}
```

## 注意事项
### 引用作重载条件
```ad-warning
```
```cpp
void func(int& a) //int &a = 10;不合法,所以 第二个走下面
{
	cout << "1" << endl;
}

void func(const int& a)
{
	cout << "2" << endl;
}

int main()
{
	int a = 10;
	func(a);
	func(10);
	//output:1 2
}
```
由此可知const也可以作为重载条件

###  函数重载与函数默认参数
```ad-warning
```
```cpp
void func(int a, int b = 10)
{
	cout << "1" << endl;
}

void func(int a)
{
	cout << "2" << endl;
}

int main()
{
	int a = 10;
	func(10);
	//错误  因为默认参数的出现，编译器无法识别，产生二义性，应尽量避免这种情况
}
```
