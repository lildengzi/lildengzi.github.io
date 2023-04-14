

## 多态
多态分类
- 静态多态：函数重载 和 运算符重载 属于静态多态，复用函数名
- 动态多态：派生类 和 基类 实现运行时多态
静态动态多态区别：
- 多态的函数地址早绑定——编译阶段确定函数地址
- 多态的函数地址晚绑定——运行阶段确定函数地址
```ad-important
```
```cpp
class Animal
{
public:
    virtual void speak()//虚函数    //多态核心1virtual 地址晚绑定——运行阶段绑定
        {cout << "动物在说话" << endl;}
};

class Cat:public Animal
{
public:
    void speak()
        {cout << "小猫在说话" << endl;}//地址早绑定——编译阶段绑定
};

class Dog:public Animal
{
public:
    void speak()
        {cout << "小狗在说话" << endl;}
};

void doSpeak(Animal &animal)
    {animal.speak();}///多态核心2Animal &animal = [cat/dog];

int main()
{
    Cat cat;
    Dog dog;
    doSpeak(cat);
    dospeak(dog);
    //output:小猫在说话
    //小狗在说话
    return 0;
}
```

```ad-example
title:Example
collapse:open
```
```cpp
class Animal
{
public:
    void speak()
        {cout << "动物在说话" << endl;}
};

class Cat:public Animal
{
public:
    void speak()
        {cout << "小猫在说话" << endl;}
};

class 

void doSpeak(Animal &animal)
    {animal.speak();}//Animal &animal = cat;

int main()
{
    Cat cat;
    doSpeak(cat);
    //output:动物在说话
    return 0;
}
```

```ad-summary
title:Summary
collapse:open
~~~ad-example
title:Example
collapse:open
- 重载     

同一作用域(同一文件)    

函数名相同    

函数参数类型不同，个数不同，顺序不同    

与函数返回值类型无关    
~~~
<br>
<br>

~~~ad-example
title:Example
collapse:open
- 重写         

通常为子类重写父类虚函数

函数返回值类型  函数名  参数列表  完全相同

- 多态的使用

父类指针或者引用  执行子类对象
~~~
```

## 原理刨析
![[多态原理图解]]

### [[cpp多态案例]]

```ad-summary
title:Summary
collapse:open
多态好处:
- 组织结构逻辑清晰
- 可读性强
- 对于后期的扩展和可维护性高
```

## 纯虚函数和抽象类
纯虚函数
`virtual 返回值类型 函数名(参数列表) = 0;`
抽象类
当类中有了纯虚函数，这个类也称为抽象类
```ad-important
title:抽象类特点
collapse:open
- 无法实例化对象(创建不了)
- 子类必须重写抽象类中的纯虚函数，否则也属于抽象类
```

```ad-important
title:Important
collapse:open
```
```cpp
class Base
{
public:
    //纯虚函数
    virtual void func() = 0;
};
```

```ad-error
title:Error
collapse:open
```
```cpp
//from important
int main()
{
    Base b;
    new Base;//错误,无法实例化对象
}
```

```ad-error
title:Error2
collapse:open
```
```cpp
//from important
class Son :public Base
{
public:
    virtual void func() = 0;
};

int main()
{
    Son s;//错误，子类还未重写
}
```

```ad-success
title:Success
collapse:open
```
```cpp
class Son :public Base
{
public:
    virtual void func(){};//尽管没有写任何东西，但编译器依然认为已重写
};

class Son2 :public son
{
public:
    virtual void func()
        cout << "func()调用" << endl;
};

int main()
{
    Son s;
    Base *base = new Son2;
    
    base->func();
    //output:func()调用
}
```

## 虚析构和纯虚析构
虚析构
`virtual ~类名(){}`
纯虚析构
`virtual ~类名() = 0;`
`类名::类名(){}`
```ad-important
title:Important
collapse:open
虚析构和纯虚析构共性:
- 可以解决父类指针释放子类对象
- 都需要有具体的函数实现

虚析构和纯虚析构区别:
- 如果是纯虚析构，该类属于抽象类，无法实例化对象
```

```ad-warning
title:warning
collapse:open
```
```cpp
class Animal
{
public:
    Animal(string name){cout << "Animalgouzao" << endl;}
    virtual void speak() = 0;
    ~Animal(){cout << "Animalxigou" << endl;}
};

class Cat: public Animal
{
public:
    Cat(string name)
    {
        cout << "Catgouzao" << endl;
        m_name = new string(name);
    }
    
    virtual void speak()
        {cout << m_name << "miao" << endl;}
    
    ~Cat()
    {
        if(m_name != NULL)
        {
            cout << "xigou" << endl;
            delete m_name;
            m_name = NULL;
        }
    }
    
    string *m_name;
};

class Dog: public Animal
{
public:
    Dog(string name){cout << "Doggouzao" << endl;}
    ~Dog(){cout << "Dogxigou" << endl;}
    void speak()
        {cout << "wang" << endl;}
};

int main()
{
    Animal *animal = new Cat("Tom");
    animal->speak();
    delete animal;
    return 0;
}
/*output:
Animalgouzao
Catgouzao
Tommiao
Animalxigou
*/
//没有Cat子类析构
```

```ad-question
title:Question
collapse:open
父类指针在析构时，不会调用子类析构，导致子类如果有堆区属性，出现内存泄漏

解决方法:父类析构改为虚析构
```

```ad-success
title:Success
collapse:open
```
```cpp
//from warning
virtual ~Animal(){...}

//纯虚析构实现
//from warning
virtual ~Animal() = 0;
//outclass
Animal::~Animal()
{cout << "Animalxigou" << endl;}
```

### 使用建议
```ad-summary
title:Summary
collapse:open
建议父类建议纯虚析构
```