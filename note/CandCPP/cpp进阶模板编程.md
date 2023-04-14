###### 目录
1. [[#函数模板]]
2. [模板注意事项](#注意事项)
3. [[#普通函数和函数模板]]
    - [[#区别]]
    - [[#调用规则]]
4. [[#模板局限性]]
5. [[#类模板]]
    - [[#类模板和函数模板区别]]
    - [[#类模板成员函数调用时机]]
    - [[#类模板对象做函数参数]]
[[cpp模板案例]]
[[STL初识]]

# 模板
- C++另一种编程思想叫泛型编程，主要技术就是模板
- C++提供两种模板机制:**函数模板**和**类模板**

## 函数模板
`template<[typename/class] 变量名>`
`函数声明或定义`
建立一个通用函数，其他函数返回值类型和形参类型可以不具体指定，用虚拟类型代表
- template——声明创建模板
- typename——表明其后面符号是一种数据类型,可用class代替(没有差别)
- 变量名(默认为T)——名称可替换，通常为大写字母
```ad-summary
```
```cpp
//一个正常的函数
void func(int a)

//返回值类型和形参类型可以不确定
template<typename T>
/*body*/

template<class T>
/*body*/
```

```ad-example
```
```cpp
void swap(int& a, int& b)
{
	int temp = a;
	a = b;
	b = temp;
}

void swap2(double& a, double& b)
{
	double temp = a;
	a = b;
	b = temp;
}

int main()
{
	int n = 10, m = 20;
	double y = 1.1,z = 2.2;
	swap(n, m);
	swap2(y, z);
	cout << n << m << endl;
	//output:2010
	cout << y << z << endl;
	//output:2.21.1
}
```
可以发现两函数除了类型不同，操作都是相同的，这时可以利用函数模板
```ad-example
```
```cpp
template<typename T>
void swap(T& a,T& b)
{
	T temp = a;
	a = b;
	b = temp;
}

int main()
{
	int n = 10, m = 20;
	double y = 1.1,z = 2.2;
	//有两种方式使用函数模板
	//1.编译器自动类型推导
	swap(n, m);
	cout << n << m << endl;
	//output:2010
	//2.显示指定类型
	swap<int>(n, m);
	cout << n << m << endl;
	//output:2010
}
```

## 注意事项
- 自动类型推导，必须推导出一致得数据类型T，才可以使用
```ad-example
```
```cpp
template<typename T>
void swap(T& a,T& b)
{
	T temp = a;
	a = b;
	b = temp;
}

int main()
{
	int n = 10, m = 20;
	char c = 'c';
	swap(n, c);//错误，必须推导出一致数据类型
}
```
- 模板必须确定T得数据类型，才可以使用
```ad-example
```
```cpp
template<typename T>
void func()
{
	cout << "func" << endl;
}

int main()
{
	func();//错误，没有指定T得类型
	return 0;
}

//正确示例
template<typename T>
void func()
{
	cout << "func" << endl;
}

int main()
{
	func<int>();//output:func
	return 0;
}
```
[[cpp模板案例]]

## 普通函数和函数模板

### 区别
- 普通函数调用时可以发生自动类型转换（隐式类型转换）
- 函数模板调用时，如果用自动类型推导，不会发生隐式转换
- 如果利用显示指定类型的方式，可以发生隐式类型转换
```ad-example
```
```cpp
int myAdd(int a, int b)
{
	return a + b;
}

template<class T>
T myAdd2(T a, T b)
{
	return a + b;
}

int main()
{
	int a = 10;
	int b = 20;
	char c = 'c';
	cout << myAdd(a, c) << endl;//output:109
	//字符c被隐式转换成整型计算，对应第一点
	
	cout << myAdd2(a, c) << endl;//报错,对应第二点
	
	cout << myAdd2<int>(a, c) << endl;//output:109
	cout << myAdd2<char>(a, c) << endl;//output:m
	//对应第三点
}
```
```ad-summary
建议使用显式指定类型的方式，因为可以确定通用类型T
```

### 调用规则
- 如果函数模板和普通函数都可以实现，优先调用普通函数
- 可以通过空模板参数列表来强制调用函数模板 
- 函数模板也可以发生重载
- 如果函数模板可以产生更好的匹配，优先调用函数模板
```ad-example
```
```cpp
int myPrint(int a, int b)
{
	cout << "普通函数" << endl;
}

template<typename T>
void myPrint(T a, T b)
{
	cout << "模板" << endl;
}

int main()
{
	int a = 10, b = 20;
	myPrint(a, b);//output:普通函数,对应第一点
	
	char c = 'c';
	char d = 'd';
	myPrint(c, d);//output:模板，有更好的匹配(能不发生隐式类型转换)，对应第四点
	return 0;
}
```
[[cpp模板案例#模板调用规则]]有更多例子

## 模板局限性
- 模板不是万能的
```ad-example
```
```cpp
template<class T>
void f(T a, T b)
{
	a = b;
}
```
在上述代码中进行赋值操作，如果a和b传入的是一个数组，就无法实现了

```ad-example
title:moreExample
```
```cpp
template<class T>
void f(T a, T b)
{
	if(a > b){...}
}
```
在上述代码中，如果T数据类型传入的是像Person这样的自定义数据类型，也无法正常运行
C++为了解决这些问题，提供模板的重载，可以为这些**特定类型**提供**具体化模板**
[[cpp模板案例#模板局限性]]有更多例子
```ad-summary
- 利用具体化模板，可以解决自定义类型的通用化
- 学习模板的目的是能够运用系统提供的STL的模板
```

## 类模板
`template<typename T>`
`类`
- 建立一个通用类，类中成员类型可以不具体指定，用**虚拟类型**代表
- template——声明创建模板
- typename——表明其后面符号是一种数据类型,可用class代替(没有差别)
- 变量名(默认为T)——名称可替换，通常为大写字母
```ad-summary
```
```cpp
template<class NT, class AT>
class Person
{
	NT name;
	AT age;
};
```

```ad-example
```
```cpp
template<class NT, class AT>
class Person
{
public:
	Person(string name, int age){this->name, this->age;}
	void show(){cout << this->name << " " << this->age << endl;}
	NT name;
	AT age;
};

int main()
{
	Person<string, int>p1("孙悟空", 999);
	p1.show();//output:孙悟空 999
}
```

### 类模板和函数模板区别
1. 类模板没有自动类型推导方式
2. 类模板在模板参数列表中可以有默认参数
```ad-important
```
```cpp
template<class NT, class AT>
class Person
{
public:
	Person(string name, int age){this->name, this->age;}
	void show(){cout << this->name << " " << this->age << endl;}
	
	NT name;
	AT age;
};
```

```ad-error
```
```cpp
//根据important
int main()
{
	Personp1("孙悟空", 999);//报错，类模板不能自动类型推导
}
```

```ad-example
```
```cpp
template<class NT, class AT = int>//类模板特有的默认类型
class Person
{
public:
	Person(string name, int age){this->name, this->age;}
	void show(){cout << this->name << " " << this->age << endl;}
	
	NT name;
	AT age;
};

int main()
{
	Person<string>p("猪八戒", 999);//可以，因为有默认类型
	p.show()//output:猪八戒 999
}
```

### 类模板成员函数调用时机
- 普通类的成员函数一开始就可以创建
- 类模板成员函数调用时就可以创建
```ad-error
```
```cpp
class Person1
{
public:
	void show()
	{
		cout << "Person1" << endl;
	}
};

class Person2
{
public:
	void show2()
	{
		cout << "Person2" << endl;
	}
};

template<typename T>
class MyClass
{
public:
	T obj;
	
	void func1()
	{obj.show1();}
	void func2()
	{obj.show2();}
};//此时编译可通过

int main()
{
	MyClas<Person1>m;//调用时类模板才会创建
	m.func1();
	m.func2();//报错，因为显示Person1类型
	return 0;
}
```

### 类模板对象做函数参数
- 
```ad-important
```
```cpp
template<class NT, class AT = int>
class Person
{
public:
    
    Person(NT name, AT age)
    {
    	this->m_name = name;
    	this-> m_age = age;
    }
    
    void showPerson()
    {
        cout << this->m_name << " " << this->m_age << endl;
    }
    
    NT m_name;
    AT m_age;
};

//直接调用(最常用)
void printPerson(Person<string, int>&p)
{
    p.showPerson();
}

//参数模板化
template<class NT, class AT>
void printPerson2(Person<NT, AT>&p)
{
    p.showPerson();
}

//整个类模板化
template<class T>
void printPerson3(T &p)
{
    p.showPerson();
}

int main()
{
    Person<string, int>p("张三", 100);
    Person<string, int>p2("李四", 90);
    Person<string, int>p3("王五", 30);
    printPerson(p);
    printPerson2(p2);
    printPerson3(p3);
    return 0;
}
/*output:
张三 100
李四 90
王五 30
*/
```
```ad-summary
title:Summary
collapse:open
**最常用的是第一种**
```

### 类模板与继承
```ad-important
title:Important
collapse:open
```
```cpp
template<class T>
class Base
{
    T m;
};

class Son:public Base<int>
{
    
};

template<class T1, class T2>
class Son2:public Base<T2>
{
    T1 obj;
};

int main()
{
    Son son;
    Son<int, char>s2;
    return 0;
}
```

### 类模板成员函数类外实现
```ad-important
title:Important
collapse:open
```
```cpp
template<class T1, class T2>
class Person
{
public:
    Person(T1 name, T2 age);

    void showPerson();
    
    
    T1 m_name;
    T2 m_age;
};

template<class T1, class T2>
Person<T1, T2>::Person(T1 name, T2 age)
{
    this->m_name = name;
    this->m_age = age;
}

template<class T1, class T2>
void Person<T1, T2>::showPerson()
{
    cout << this->m_name << " " << this->m_age << endl;
}

int main()
{
    return 0;
}
```

### 类模板分文件编写
```ad-example
title:Example1
collapse:open
方法一
```
```cpp
//.h
template<class T1, class T2>
class Person
{
public:
    Person(T1 name, T2 age);

    void showPerson();
    
    
    T1 m_name;
    T2 m_age;
};

//.cpp
template<class T1, class T2>
Person<T1, T2>::Person(T1 name, T2 age)
{
    this->m_name = name;
    this->m_age = age;
}

template<class T1, class T2>
void Person<T1, T2>::showPerson()
{
    cout << this->m_name << " " << this->m_age << endl;
}
```

```ad-example
title:Example
collapse:open
方法二

.hpp用于单独写模板文件
```

### 类模板与友元
```ad-example
title:Example
collapse:open
```
```cpp

```

## typeid
与name函数配合使用显示模板中的泛型类型的具体类型
```ad-example
title:Example1
collapse:open
```
```cpp

template<class NT, class AT>
void printPerson2(Person<NT, AT>&p)
{
    cout << typeid(NT).name() << endl;
    cout << typeid(AT).name() << endl;
}
/*output:
class std::basic_string<char, struct std::char_traits<char>, class std::allocator<char>>
int
*/

```
