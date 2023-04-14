# 模板案例
```ad-example
```
```cpp
//用选排排char/int数组
template<typename T>
void swap01(T& a, T& b)
{
	T temp = a;
	a = b;
	b = temp;
}

template<typename T>
void func(T arr[], int len)
{
	for (int i = 0; i < len; i++)
	{
		int max = i;
		for (int j = i; j < len; j++)
		{
			if (arr[max] < arr[j])
			{
				max = j;
			}
		}
		if (max != i)
		{
			swap01(arr[max], arr[i]);
		}
	}
}

template<class T>
void print(T arr[], int len)
{
	for (int i = 0; i < len; i++)
	{
		cout << arr[i]<< "  ";
	}
	cout << endl;
}

int main()
{
	int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
	char arr2[] = "abcdefghijklmn";

	int num = sizeof(arr2) / sizeof(char);
	func(arr2, num);
	print(arr2, num);
	//output:nmkjihgfedcba

	num = sizeof(arr) / sizeof(int);
	func(arr, num);
	print(arr, num);
	//output:987654321
	return 0;
}
```

# 模板调用规则
```ad-example
```
```cpp
int myPrint(int a, int b);//声明

template<typename T>
void myPrint(T a, T b)
{
	cout << "模板" << endl;
}

template<typename T>
void myPrint(T a, T b, T c)
{
	cout << "重载模板" << endl;
}


int main()
{
	int a = 10, b = 20;
	myPrint(a, b);//报错，编译器依然会使用普通函数，由于只有声明所以报错
	myPrint<>(a, b);//output:模板,对应第二点
	myPrint(a, b, 100);//output:重载模板，对应第三点
	
	return 0;
}
```

# 模板局限性
```ad-example
title:Example1
```
```cpp
template<class T>
bool compare(T& a, T& b)
{
	if(a == b)
	{return true;}
	else
	{return false;}
}

int main()
{
	int a = 10;
	int b = 20;
	bool ref = compare(a, b);
	
	if(ref)
	{cout << "true" << endl;}
	else{cout << "false" << endl;}
	//output:false
}
```

```ad-important
```
```cpp
class Person
{
public:
	Person(std::string name, int age)
	{
	std::string m_name = name;
	int m_age = age;
	}
	
	std::string m_name;
	int m_age;
};
```

```ad-error
```
```cpp
template<class T>
bool compare(T& a, T& b)
{
	if(a == b)
	{return true;}
	else
	{return false;}
}

int main()
{
	Person p1("Tom", 10);
	Person p2("Tom", 10);
	bool ref = compare(p1, p2);
	
	if(ref)
	{cout << "true" << endl;}
	else{cout << "false" << endl;}
	//编译器在运行时报错，显示没有匹配的运算符
}
```
解决方法:
- 运算符重载
- 更好的模板重载
```ad-example
title:Example2
模板重载跟普通函数唯一不同在于模板发生的模板重载会优先调用
```
```cpp
//上文接imortant
template<class T>
bool compare(T& a, T& b)
{
	if(a == b)
	{return true;}
	else
	{return false;}
}

template<> bool compare(Person& p1, Person& p2)
{
	if(p1.m_name == p1.m_age && p2.m_name == p2.m_age)
	{return true;}
	else
	{return false;}
}

int main()
{
	Person p1("Tom", 10);
	Person p2("Tom", 10);
	bool ref = compare(p1, p2);
	
	if(ref)
	{cout << "true" << endl;}
	else{cout << "false" << endl;}
	//output:true
}
```

# 自定义数组类模板
```ad-question
title:Question
collapse:open
- 可以对内置数据类型和自定义数据类型的数据进行存储
- 数组中的数据存储到堆区
- 构造函数传入数据容量
- 提供拷贝构造和operator



```
```cpp
#include <iostream>
using namespace std;

template<class T>
class Array
{
private:
    
    Array(int capacity)
    {
        this->m_capacity = capacity;
        this->m_size = 0;
        this->p_address; = new T[this->m_capacity];
    }
    
    Array(const Array& arr)
    {
        
    }
    
    ~Array()
    {
        if(this->p_address != NULL)
        {
            
            delete[] p_address;
        }
    }
    
private:
    T *p_address;

};


```

