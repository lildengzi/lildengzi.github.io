## 继承

单继承:
`class 子类:继承方式[默认:私有] 父类`
多继承:
`class 子类:继承方式[默认:私有] 父类, 继承方式[默认:私有] 父类,...`
```ad-example
```
```cpp
class BaseClass
{
public:
    void topPage()
    {cout << "顶部页面" << endl;}
    void bottomPage()
    {cout << "底部页面" << endl;}
    void leftPage()
    {cout << "左侧页面" << endl;}
    void rightPage()
    {cout << "右侧页面" << endl;}
};

class Java:public BaseClass
{
    void centerPage()
    {cout << "Java页面" << endl;}
};

class Cpp:public BaseClass
{
    void centerPage()
    {cout << "Cpp页面" << endl;}
};

class Python:public BasePage
{
    void centerPage()
    {cout << "Python页面" << endl;}
};

int main()
{
    Java java;
    Cpp cpp;
    Python python;
    java.centerPage();
    cpp.centerPage();
    python.centerPage();
    /*output:
    Java页面
    Cpp页面
    Python页面
    */
}
```

```ad-example
title:example2
```
```cpp
class Base1
{
    
};

class Base2
{
    
};

class son
{
    
};
```

## 继承方式
![[继承方式图解]]

## 继承中的对象模型
- 子类会全部继承来自父类的对象，即使是私有的
- 私有的成员只是被隐藏了，但还是会继承下去
```ad-example
```
```cpp
class Base
{
public:
    int m_A;
protected:
    int m_B;
private:
    int m_C;
};

class Son:public Base
{
public:
    int m_D;
};

int main()
{
    cout << sizeof(Son) << endl;
    //output:16
}
```

## 继承中的构造和析构
父类->子构->子析->父析
```ad-example
```
```cpp
class Base
{
    Base()
    {cout << "Base构造函数调用" << endl;}
    ~Base()
    {cout << "Base析构函数调用" << endl;}
};

class Son:public Base
{
    Son()
    {cout << "Son构造函数调用" << endl;}
    ~Son()
    {cout << "Son析构函数调用" << endl;}
};

int main()
{
    Son son;
    /*output:
    Base构造函数调用
    Son构造函数调用
    Son析构函数调用
    Base析构函数调用
    */
}
```

# 父类子类同名成员处理
### 名字屏蔽

## 同名静态成员处理
# 菱形继承问题