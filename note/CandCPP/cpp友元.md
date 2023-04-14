# 友元介绍

# 类作友元
`friend 友元名;` 声明在类中将私有的东西允许友元访问
```ad-example
title:Example
collapse:open
```
```cpp
class Person{
    //全局函数做友元
    friend void output(const Person &p);
    //类做友元
    friend class Person2;
    //成员函数做友元
    friend Person3::outputPer3(const Peroson &p);
    
    void outputPerson2(const Person2 &p)
    {
        p.age = 18;
        p.name = "123";
        cout << p.age << " " << p.name << endl;
    }
    
private:
    int a;
    string b;
};

class Person2{
private:
    int age;
    string name;
};

class Person3{
private:
    void outputMe()
    {
        cout << "Hello World" << endl;
    }
};

void output(const Person &p)
{
    p.a = 100;
    p.b = "HelloWorld";
    cout << p.a << " " << p.b << endl;
}

int main()
{
    Person p;
    Perosn2 p2;
    p.output();
    p.outputPerson2();
    p.outputPer3();
    return 0;
}
/*output:
100 HelloWorld
18 123
Hello World
*/
```

# 全局函数做友元

# 成员函数作友元
> [!warning] 
> - A类将B类的成员函数作为友元时B类必须要声明在A类前
> - 该成员函数必须类外实现

> [!example] 
```cpp
#include <iostream>
using namespace std;

class Person1;
class Person2
{
private:
    int age;
public:
    void func();
};

class Person2{
public:
};
int main
```
