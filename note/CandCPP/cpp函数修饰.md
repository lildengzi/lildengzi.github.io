# const修饰成员函数
常函数
- 成员函数后加const后我们称这个函数为常函数
- 常函数不可以修改成员函数属性
- 成员函数声明是加关键字mutable后,在常函数中依然可以修改
```ad-error
```
```cpp
class Person
{
public:
    //this本质是指针常量  指针指向不可修改Person* const this;
    void showPerson() const//常函数//const Person* const this
    {
        m_A = 100;//无法通过编译
    }
    
    void func();
    int m_A;
};
```

```ad-example
```
```cpp
class Person
{
    void showPerson() const
    {
        this->m_B = 100;//可修改
    }
    
    mutable int m_B;
};
```

# final修饰成员函数
