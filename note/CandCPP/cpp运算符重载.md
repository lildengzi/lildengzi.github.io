# 简介


# 可重载运算符/不可重载运算符

下面是可重载的运算符列表：

| 双目算术运算符 | \+ (加)，-(减)，\*(乘)，/(除)，% (取模)                                 |
| -------------- | ----------------------------------------------------------------------- |
| 关系运算符     | \=\=(等于)，!= (不等于)，< (小于)，> (大于)，<=(小于等于)，>=(大于等于) |
| 逻辑运算符     | \|\|(逻辑或)，&&(逻辑与)，!(逻辑非)                                     |
| 单目运算符     | \+ (正)，\-(负)，\*(指针)，&(取地址)                                    |
| 自增自减运算符 | \+\+(自增)，\-\-(自减)                                                  | 
| 位运算符       | \| (按位或)，& (按位与)，\~(按位取反)，^(按位异或)，<< (左移)，>>(右移) |
| 赋值运算符     | =, \+=, \-=, \*=, \/= , \%= , &=, \|=, ^=, <<=, >>=                     |
| 空间申请与释放 | new, delete, new\[ \] , delete\[\]                                      |
| 其他运算符     | ()(函数调用)，->(成员访问)，,(逗号)，\[\](下标)                         |
下面是不可重载的运算符列表：

-   `.`：成员访问运算符
-   `.*`, `->*`：成员指针访问运算符
-   `::`：域运算符
-   `sizeof`：长度运算符
-   `?:`：条件运算符
-   `#`： 预处理符号

# 关系运算符重载
以`==`为例
```ad-example
title:Example
collapse:open
```
```cpp
#include <iostream>
using namespace std;

class Person
{
public:
    int m_A;
    int m_B;
    bool operator==(const Person& p1, const Person& p2)
    {
        return ((p1.m_A == p2.m_A) && (p1.m_B == p2.m_B));
    }
};

int main()
{
    Person p1;
    Person p2;
    Person p3;
    p1.m_A = 10;
    p1.m_B = 10;
    p2.m_A = 20;
    p2.m_B = 10;
    p3.m_A = 10;
    p3.m_B = 10;
    
    if(p1 == p2)
    {
        cout << "p1 == p2 is true" << endl;    
    }
    if(p1 == p3)
    {
        cout << "p1 == p3 is true" << endl;
    }
    
    return 0;
}
/*output:
p1 == p3 is true
*/
```

# 算数运算符重载
以`+`为例(详细介绍)
- 自己写普通相加函数 ^a56c77
- 成员运算符重载
- 全局运算符重载 ^961b7d
```ad-important
title:Important
collapse:open
```
```cpp
#include <iostream>
using namespace std;

class Person
{
public:
    
    //成员函数重载
    Person operator+(Person &p)
    {
        Person temp;
        temp.m_A = this->m_A + p.m_A;
        temp.m_B = this->m_B + p.m_B;
        return temp;
    }//Person p3 = p1.operator+(p2); == Person p3 = p1 + p2;
    int m_A;
    int m_B;
};
```

![[#^a56c77]]
```ad-example
title:Example
collapse:open
```
```cpp
//自己写成员函数
Person personAddPerson(Person &p)
{
    Person temp;
    temp.m_A = this->m_A + p.m_A;
    temp.m_B = this->m_B + p.m_B;
    return temp;
}//Person p3 = p1.personAddPerson(p2);
```

![[#^961b7d]]
```ad-example
title:Example2
collapse:open
```
```cpp
Person operator+(Person &p1, Person &p2)
{
    Person temp;
    temp.m_A = this->m_A + p.m_A;
    temp.m_B = this->m_B + p.m_B;
    return temp;
}//Person p3 = operator(p1, p2); == Person p3 = p1 + p2;
```

```ad-example
title:Example3
collapse:open
```
```cpp
Person operator+(Person &p1, int num)
{
    Person temp;
    temp.m_A = p1.m_A + num;
    temp.m_B = p1.m_B + num;
    return temp;
}//Person p3 = operator(p1, p2); == Person p3 = p1 + p2;
```

```ad-success
title:Success
collapse:open
```
```cpp
int main()
{
    Person p1;
    p1.m_A = 10;
    p1.m_B = 10;
    
    Person p3 = p1 + p2;
    Person p4 = p1 + 10;
    
    cout << p3.m_A << " " << p3.m_B << endl;
    cout << p4.m_A << " " << p4.m_B << endl;
    //output:
    //20 20
    //20 20
    return 0;
}
```

# 位运算符重载
以`<<`为例
```ad-important
title:Important
collapse:open
```
```cpp
#include <iostream>
using namespace std;

class Person
{
    friend ostream& operator<<(ostream& out, Person& p);
    
private:
    int m_A;
    int m_B;
};
```

```ad-warning
title:warning
collapse:open
无法链式编程
```
```cpp
void operator<<(ostream& out, Person& p)
{
    out << "m_A=" << p.m_A << " " << "m_B=" << p.m_B;
}

int main()
{
    Person p;
    p.m_A = 10;
    p.m_B = 10;
    
    cout << p;//加<< endl报错
    //output:
    //m_A=10 m_B=10
    return 0;
}
```

> [!success] 
```cpp
ostream& operator<<(ostream& out, Person& p)
{
    out << "m_A=" << p.m_A << " " << "m_B=" << p.m_B;
    return out;
}

int main()
{
    Person p;
    p.m_A = 10;
    p.m_B = 10;
    
    cout << p << endl;
    //output:
    //m_A=10 m_B=10
    //
    return 0;
}
```

# 赋值运算符重载
以`=`为例
```ad-example
title:Example
collapse:open
```
```cpp
#include <iostream>
using namespace std;

class Person
{
public:
    int m_A;
    Person& operator=(const int &b)
    {
        this->m_A = b;
        return *this;
    }
};

int main()
{
    Person p;
    int c = 3;
    p = c;
    cout << p.m_A << endl;
    system("pause");
    return 0;
}
/*output:
3
*/
```
如果类中有属性指向堆区，编译器默认的赋值运算符重载会出现深浅拷贝的问题
```ad-warning
title:warning
collapse:open
```
```cpp
class Person{
public:
    int a = new int(10);
};

int main()
{
    Person p;
    Person p2 = p;//ERROR
    return 0;
}
```

```ad-success
title:Success
collapse:open
```
```cpp
class Person{
public:
    int a = new int(10);
    Person operator=(const Person& p)
    {
        Person temp;
        temp.a = new int(10);
        return temp;
    }
};

int main()
{
    Person p;
    Person p2 = p;
    cout << p2.a << endl;
    return 0;
}
/*output:
0
*/
```

# 自增自减运算符重载
以`++`为例
```ad-important
title:Important-
collapse:open
```
```cpp
#include<iostream>
using namespace std;

class MyInteger
{
    friend ostream& operator<<(ostream &out, MyInteger &Int);
private:
    int m_int;
public:
    MyInteger(){m_int = 0;}
    //前置版本
    MyInteger& operator++()
    {
        this->m_int++;
        return *this;
    }
    //后置版本
    MyInteger& operator++(int)
    {
        MyInteger temp = *this;
        this->m_int++;
        return temp;
    }
};

  

ostream& operator<<(ostream &out, MyInteger &Int)
{
    out << Int.m_int;
    return out;
}

int main()
{
    MyInteger myInt;
    cout << myInt << endl;
    cout << ++myInt << endl;
    myInt++;
    cout << myInt << endl;
    
    system("pause");
    return 0;
}
/*output:
0
1
2*/
```

```ad-warning
title:warning
collapse:open
非必要不要使用后置版本
```

# 下标运算符重载
1. 可修改
`返回值类型 operator[](参数);
`2. 不可修改
`返回值类型 operator[](参数);`
```ad-example
title:Example4
collapse:open
```
```cpp
#include <iostream>
using namespace std;

class MyString
{
public:
    string a = "abcde";
    const char& operator[](int i) const
    {
        return this->a[i];
    }
};

class MyString2
{
public:
    string a;
    char &operator[]()
    {
        return this->ia[i];
    }
};

int main()
{
    Mystring str1;
    Mystring2 str2;
    cout << str1[1] << " " << str2[1] << endl;
    //ERROR str1[1] = 'n';
    str2[1] = 'c';
    cout << str2[1] <<endl;
}
/*output:
b b
c
*/
```

# 函数运算符重载
- 又称仿函数,函数对象
- 没有固定写法
```ad-important
title:Important
collapse:open
```
```cpp
#include <iostream>
using namespace std;

class MyFunc
{
public:
    void operator()(string text)
    {
        cout << text << endl;
    }
};
```

```ad-example
title:Example
collapse:open
```
```cpp
int main()
{
    MyFunc myfunc;
    myfunc("Hello World");
    
    return 0;
}
/*output:
Hello World
*/
```

# new/delete运算符重载
回顾一下:
new/delete做了两件事
1. 调用构造析构
2. 申请内存空间
```ad-important
title:Important
collapse:open
`void* operator new(size_t size);`

参数类型必须是szie_t, 返回值必须是void*

`void delete operator delete(void* ptr);`

参数类型必须是void*, 返回值必须是void
```

```ad-example
title:Example-
collapse:open
```
```cpp
class Person{
public:
    int m_age;
    int m_high;
    
    Person(int age, int high): m_age(age), m_high(high){cout << "构造" << endl;}
    ~Person(){cout << "析构" << endl;}
};

void* operator new(sizt_t size)
{
    cout << "调用" << size << "字节" << endl;
    void* ptr = malloc(size);
    cout << "申请到的内存地址" << ptr << endl;
    return ptr;
}

void operator delelte(void* ptr)
{
    cout << "调用重载delete" << endl;
    if(ptr == 0)return;
    free(ptr);
}

int main()
{
    int *p1 = new int(3);
    cout << (void*)p1 << " " << *p1 << endl;
    delete p1;    
    Person *p2 = new Person(18, 170);
    cout << p2 << " " << p2->m_age << " " << p2->m_high << endl;
    delete p2;
    return 0;
}
/*output:
调用4字节
申请到的内存地址000xafbbd
000xafbbd 3
调用重载delete
调用8字节
申请到的内存地址000x8083bd
构造
000x8083bd 18 170
析构
调用重载delete
*/
```

```ad-tip
为一个类重载new和delete时，尽管不必显式使用static,但实际上仍在创建static成员函数
```

# 转换函数(类型重载)
`operator 数据类型();`
能将对象直接赋值给相应的类型的变量的值
```ad-example
title:Example
collapse:open
```
```cpp
#include <iostream>
using namespace std;

class Person{
public:
    int a;
    double b;
    string str;
    Person()
    {
        a = 0;
        b = 1.0;
        str = "Hello World";
    }
    operator int()
    {
        return a;
    }
    operator double()
    {
        return b;
    }
    operator string()
    {
        return str;
    }
};

int main()
{
    Person p1;
    int a = p1;
    double b = p1;
    string str = p1;
    
    cout << a << " " << b << " " << str << " " << endl;
    return 0;
}
/*output:
0 1.0 Hello World 
*/
```
