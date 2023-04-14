# 构造函数和析构函数
对象的初始化和清理是两个非常重要的问题
	一个对象或者变量没有初始状态问题很大
	同样使用一个完整对象或变量，没有及时清理，也会造成一定安全问题

C++利用构造和析构函数解决上述问题，这两个函数由编译器自动调用，完成对象初始化和清理工作。
对象的初始化和析构是必须要做的，如果我们不提供，编译器会提供空实现（什么也没有）的构造和析构
- 构造函数:主要作用在于创建对象时为对象属性赋值，构造函数为编译器自动调用，无需手动调用
- 析构函数:主要作用在于对象销毁前自动调用，执行一些清理操作
 ```ad-important
```
```cpp
class Person
{
public:
	Person();
	~Person();
};
```

## 构造函数
`类名(){/*body*/}`
1. 构造函数，没有返回值也不写void
2. 函数名称与类名相同
3. 构造函数可以有参数，因此可以发生重载
4. 编译器自动调用，无需手动调用，而且只会调用一次

## 析构函数
`~类名(){/*body*/}`
1. 析构函数，没有返回值也不写void
2. 函数名称与类名相同，还要加一个符号~
3. 析构函数不可以有参数，因此不可以发生重载
4. 编译器自动调用，无需手动调用，而且只会调用一次
 ```ad-example
```
```cpp
//from important
Person::Person()
{
	cout << "Person构造函数调用" << endl;
}

Person::~Person()
{
	cout << "Person析构函数调用" << endl;
}

int main()
{
	Person p;
	return 0;
	//output:
	//Person构造函数调用
	//Person析构函数调用
	//
}
```

## 编译器默认类函数
```ad-summary
title:Summary
collapse:open
1. 默认构造函数
2. 默认构造函数
3. 默认拷贝构造函数,对属性值拷贝
4. 赋值运算符operator=,对属性值拷贝
```

## 函数分类以及调用
两种分类方式:
- 按参数分:有参无参构造
- 按类型分:普通拷贝构造
### 三种调用方式
```ad-important
```
```cpp
class Person
{
public:
	Person(){cout << "Person无参构造函数调用" << endl;}//普通
	Person(int a){age = a; cout << "Person有参构造函数调用" << endl;}//有参
	Person(const Person &p)
	{this->age = p.age; cout << "Person拷贝构造函数调用" << endl;}//拷贝
	~Person(){cout << "Person析构函数调用" << endl;}
	
	int age;
};
```

### 括号法
```ad-example
```
```cpp
//from important
int main()
{
	//默认调用
	Person p1;
	Person p2(10);
	Person p3(p2);
	/*output:
	Person无参构造函数调用
	Person有参构造函数调用
	Person拷贝构造函数调用
	Person析构函数调用
	Person析构函数调用
	Person析构函数调用
	*/
}
```
不要加括号，否则
```ad-error
```
```cpp
//from important
int main()
{
	Person p1();
//    |    |
  //void func();
	//调用默认构造函数时不加()
	//因为这样编译器会认为是一个函数的声明，不会认为是在创建对象
}
```

### 显示法
```ad-example
```
```cpp
//from important
int main()
{
	Person p1;
	Person p2 = Person(10);
	Person p3 = Person(p2);
	/*output:
	Person无参构造函数调用
	Person有参构造函数调用
	Person拷贝构造函数调用
	Person析构函数调用
	Person析构函数调用
	Person析构函数调用
	*/
}
```
匿名对象:
```ad-warning
```
```cpp
//from important

int main()
{
	//注意事项一
	//这是一个匿名对象  特点:对象创建执行结束后，系统会立即回收掉匿名对象
	Person(10);
	cout << "Hello World" << endl;
	/*output:
	Person有参构造函数调用
	Person析构函数调用
	Hello World
	*/
	
	//注意事项二
	//不要利用拷贝构造函数初始化匿名对象  编译器会认为Person(p3) == Person p3;对象声明,且不会析构
	Person(p3);//错误
	
}
```

### 隐式转换法
```ad-example
```
```cpp
//from important
int main()
{
	Person p1 = 10;//Person p1 = Person(10);
	Person p2 = p1;//Person p2 = Person(p1);
	/*output:
	Person有参构造函数调用
	Person拷贝构造函数调用
	Person析构函数调用
	Person析构函数调用
	*/
}
```

# 拷贝函数调用时机
C++中拷贝函数调用时机通常有三种情况
- 使用一个已经创建完毕的对象初始化新对象 ^7c2519
- 值传递的方式给参数传值 ^d70863
- 以值方式返回局部对象 ^32d501
```ad-important
```
```cpp
class Person
{
public:
	Person(){cout << "Person无参构造函数调用" << endl;}//普通
	Person(int a){age = a; cout << "Person有参构造函数调用" << endl;}//有参
	Person(const Person &p)
	{this->age = p.age; cout << "Person拷贝构造函数调用" << endl;}//拷贝
	~Person(){cout << "Person析构函数调用" << endl;}
	
	int age;
};
```

![[#^7c2519]]
```ad-example
```
```cpp
//from important
int main()
{
	Person p1(10);
	Person p2(p1);
	cout << p2.age << endl;
	/*output:
	Person有参构造函数调用
	Person拷贝构造函数调用
	10
	Person析构函数调用
	Person析构函数调用
	*/
}
```

![[#^d70863]]
```ad-example
```
```cpp
//from important
void doWork(Person p_temp)
{
    
}

int main()
{
	Person p;
	doWork(p);//实参传给形参时，相当于拷贝Person p_temp = p;
	/*output:
	Person有参构造函数调用
	Person拷贝构造函数调用
	Person析构函数调用
	Person析构函数调用
	*/
}
```

![[#^32d501]]
```ad-example
```
```cpp
//from important
void doWork2()
{
	Person p1;
	cout << (int*)&p1 << endl;
	return p1;
}

int main()
{
	Person p = doWork2();//拷贝
	cout << (int*)&p << endl;
	/*output:
	Person有参构造函数调用
	010FF894  (随机)
    	Person拷贝构造函数调用（不确定）
    	Person析构函数调用
	010FF894  (随机)
	Person析构函数调用
	*/
}
```

# 构造函数调用规则
默认情况下，编译器至少给一个类添加3个函数
- 默认构造函数（无参，函数体为空，即空实现）
- 默认析构函数（无参，函数体为空，即空实现）
- 默认拷贝构造函数，对属性进行值拷贝 ^76654f

构造函数调用规则如下:
- 如果用户定义有参构造函数，C++不再提供默认无参构造，但是会提供拷贝构造 ^85ece7
- 如果用户定义拷贝构造函数，C++不再提供其他构造函数 ^3d6446

![[#^76654f]]
```ad-important
```
```cpp
class Person
{
public:
	Person(){cout << "Person无参构造函数调用" << endl;}//普通
	Person(int a){age = a; cout << "Person有参构造函数调用" << endl;}//有参
	/*Person(const Person &p)
	{this->age = p.age; cout << "Person拷贝构造函数调用" << endl;}//拷贝*/
	~Person(){cout << "Person析构函数调用" << endl;}
	
	int age;
};
```

```ad-example
```
```cpp
//from important
int main()
{
	Person p;
	p.age = 18;
	
	Person p2(p);
	cout << p2.age << endl;
	/*output:
	Person无参构造函数调用
	18
	Person析构函数调用
	Person析构函数调用
	*/
	//因为编译器默认提供全属性赋值的拷贝构造
}
```

![[#^85ece7]]
```ad-important
```
```cpp
class Person
{
public:
	/*Person(){cout << "Person无参构造函数调用" << endl;}//普通*/
	Person(int a){age = a; cout << "Person有参构造函数调用" << endl;}//有参
	/*Person(const Person &p)
	{this->age = p.age; cout << "Person拷贝构造函数调用" << endl;}//拷贝*/
	~Person(){cout << "Person析构函数调用" << endl;}
	
	int age;
};
```

```ad-error
```
```cpp
//from important
int main()
{
	Person p;//报错
}
```

```ad-example
```
```cpp
//from important
int main()
{
	Person p(18);
	
	Person p2(p);
	cout << p2.age << endl;
	/*output:
	Person有参构造函数调用
	18
	Person析构函数调用
	Person析构函数调用
	*/
}
```

![[#^3d6446]]
```ad-important
```
```cpp
class Person
{
public:
	/*Person(){cout << "Person无参构造函数调用" << endl;}//普通*/
	/*Person(int a){age = a; cout << "Person有参构造函数调用" << endl;}//有参*/
	Person(const Person &p)
	{this->age = p.age; cout << "Person拷贝构造函数调用" << endl;}//拷贝
	~Person(){cout << "Person析构函数调用" << endl;}
	
	int age;
};
```

```ad-error
```
```cpp
//from important
int main()
{
	Person p;
	Person p2(10);
	//错误
}
```

# 深拷贝和浅拷贝
浅拷贝:简单的赋值拷贝操作
深拷贝:在堆区重新申请空间，进行值拷贝操作
```ad-example
```
```cpp
class Person
{
public:
	Person(){cout << "Person无参构造函数调用" << endl;}//普通
	Person(int a, int height)
	{
		age = a; 
		m_height = new int(height); 
		cout << "Person有参构造函数调用" << endl;
	}//有参
	~Person(){cout << "Person析构函数调用" << endl;}
	
	int age;
	int *m_height;
};

int main()
{
	Person p1(18, 160);
	cout << p1.age << " " << *p1.m_height << endl;
	Person p2(p1);
	cout << p2.age << " " << *p2.m_height << endl;
	/*output:
	Person有参构造函数调用
	18 160
	
	Person析构函数调用
	Person析构函数调用"
	*/
}
```

```ad-warning
```
```cpp
class Person
{
public:
	Person(){cout << "Person无参构造函数调用" << endl;}//普通
	Person(int a, int height)
	{
		age = a; 
		m_height = new int(height); 
		cout << "Person有参构造函数调用" << endl;
	}//有参
	~Person()
	{
	if(m_height != nullptr)
	{
		delete m_height;
		m_height = nullptr;
	}
	cout << "Person析构函数调用" << endl;
	}
	
	int age;
	int *m_height;
};

int main()
{
	Person p1(18, 160);
	cout << p1.age << " " << *p1.m_height << endl;
	Person p2(p1);
	cout << p2.age << " " << *p2.m_height << endl;
	//报错
}
```
![[浅拷贝]]

```ad-example
```
```cpp
class Person
{
public:
	Person(){cout << "Person无参构造函数调用" << endl;}//普通
	Person(int a, int height)
	{
		age = a; 
		m_height = new int(height); 
		cout << "Person有参构造函数调用" << endl;
	}//有参
	
	//自己实现拷贝构造函数解决浅拷贝的问题
	Person(const Person& p)
	{
		cout << "Person拷贝构造函数调用" << endl;
		this->age = p.age;
		//深拷贝操作
		m_height = new int(*p.m_height);
	}
	
	~Person()
	{
	if(m_height != nullptr)
	{
		delete m_height;
		m_height = nullptr;
	}
	cout << "Person析构函数调用" << endl;
	}
	
	int age;
	int *m_height;
};

int main()
{
	Person p1(18, 160);
	cout << p1.age << " " << *p1.m_height << endl;
	Person p2(p1);
	cout << p2.age << " " << *p2.m_height << endl;
	/*output:
	Person有参构造函数调用
	18 160
	Person拷贝构造函数调用
	18 160
	Person析构函数调用
	Person析构函数调用
	*/
}
```
![[深拷贝]]
```ad-summary
- 如果有属性在堆区开辟，一定要自己提供拷贝构造函数，防止浅拷贝带来的问题
```

# 初始化列表
`构造函数();属性1(值1),属性2(值2)...{}`
```ad-important
```
```cpp
class Person
{
	Person();
	int m_a;
	int m_b;
	int m_c;
};
```

```ad-example
传统的初始化操作
```
```cpp
//from important
Person::Person(int a, int b, int c)
{
	int m_a = a;
	int m_b = b;
	int m_c = c;
}

int main()
{
	Person p1(1, 2, 3);
	cout << p1.a << endl;
	cout << p1.b <<endl;
	cout << p1.c <<endl;
	//output:1 \n 2 \n 3
}
```

```ad-example
初始化列表属性
```
```cpp
//from important
Person::Person():m_a(1), m_b(2), m_c(3)
{

}

int main()
{
	Person p1;
	cout << p1.a << endl;
	cout << p1.b <<endl;
	cout << p1.c <<endl;
	//output:1 \n 2 \n 3
}
```

```ad-example
```
```cpp
//from important
Person::Person(int a, int b, int c):m_a(a),m_b(b),m_c(c)
{
}

int main()
{
	Person p1(1, 2, 3);
	cout << p1.a << endl;
	cout << p1.b <<endl;
	cout << p1.c <<endl;
	//output:1 \n 2 \n 3
}
```

```ad-error
title:Error
collapse:open
构造初始化列表必须要有空实现而不是声明
```
```cpp
Person::Person(): m_a(1), m_b(2), m_c(3);
```

# 类对象做类成员
C++中成员可以是另一个类的对象，我们应该称该成员为对象成员
```ad-important
```
```cpp
class Phone
{
public:
    Phone(string name)
    {
    m_name = name;
    cout << "Phone构造函数调用" << endl;
    }
    ~Phone()
    {cout << "Phone析构函数调用" << endl;}
    string m_name;
};

class Person
{
public:
    Person(string name, string pname) : m_pername(name), m_phone(pname)//隐式转换法
    {cout << "Person构造函数调用" << endl;}
    ~Person(){cout << "Person析构函数调用" << endl;}
    
    string m_pername; 
    Phone m_phone;
};
```
那么A,B的构造谁先谁后

```ad-example
```
```cpp
//from important
int main()
{
    Person p1("张三", "苹果");
    cout << p.m_pername << " " << p.m_phone.m_name << endl;
    /*output:
    Phone构造函数调用
    Person构造函数调用
    张三 苹果
    Person析构函数调用
    Phone析构函数调用
    */
}
```

# 静态成员
静态成员`static`
- 静态成员变量
    - 所有对象共享一份数据
    - 编译阶段分配内存
    - 类内声明，类外初始化
- 静态成员函数
    - 所有对象共享同一函数
    - 静态成员函数只能访问静态成员变量
类内引用
```ad-important
```
```cpp
class Person
{
public:
    
    int m_B;
    static int m_A;
    
private:
    static int m_B;
};

int Person::m_A = 0;//类外初始化
int Person::m_B = 100;
```

```ad-example
```
```cpp
//from important
int main()
{
    Person p;
    cout << p.m_A << endl;//output:0
    Person p2;
    p2.m_A = 10;
    cout << p.m_A << endl;//output:10
}
```
两种访问方式:
```ad-example
```
```cpp
//from important
int main()
{
    Person p;
    //对象访问
    cout << p.m_A << endl;
    //类名访问
    cout << Person::m_A << endl;
}
```

```ad-error
```
```cpp
int main()
{
    cout << Person::m_B << endl;//访问不到
}
```

# 静态方法
```ad-important
```
```cpp
class Person
{
public:
    static void func()
    {m_A = 100; cout << "静态方法" << endl;}
    
    static int m_A;
private:
    static void func2();
};

int Person::m_A = 0;
```

```ad-example
```
```cpp
//from important
int main()
{
    Person p;
    p.func();
    
    Person::func();//output:
    //100
    //静态方法
}
```

```ad-error
```
```cpp
class Person
{
public:
    static void func()
    {
    m_A = 100; m_B = 200;//报错,静态方法不能访问非静态成员变量
    cout << "静态方法" << endl;
    }
    
    static int m_A;
    int m_B;
};
```

```ad-error
```
```cpp
//from important
int main()
{
    Person::func();//报错
}
```

# 对象的存储
- 只有非静态成员变量才属于类对象
- 成员变量和成员函数分开存储
- 空对象占1字节
```ad-example
```
```cpp
class Person
{
public:
    int age;
    int func();//不占内存
    static int func();//不占内存
    static int s_age;//不占内存
};

class Empty
{
};

int main()
{
    Empty e;
    Person p;
    cout << sizeof(e) << " " << sizeof(p) << endl;
    //output:1 5
}
```

# this指针
**this指针指向被调用的成员函数所属的对象**
this指针是隐含每一个非静态成员函数内的一种指针
this指针可以直接使用
- 形参和成员变量同名时，可用this指针区分
- 在类的非静态成员函数中返回对象本身，可使用return \*this
```ad-important
```
```cpp
class Person
{
public:
    Person(int age)
    {age = age;}
    
    int age;
};
```

```ad-error
```
```cpp
//from important
int main()
{
    Person p(18);
    cout << p.age << endl;
    //output:-855360
}
```

```ad-success
```
```cpp
class Person
{
public:
    Person(int age)
    {this->age = age;}//Person::age = age;
    
    int age;
};

int main()
{
    Person p(18);
    cout << p.age << endl;
    //output:18
}
```

```ad-important
```
```cpp
class Person
{
public:
    Person(int age)
    {this->age = age;}
    
    Person& PersonAddAge(Person &p)//引用可以返回对象本身，非引用会返回新对象
    {
        this->age += p.age;
        return *this;//返回对象本身
    }
    
    int age;
};
```

```ad-example
```
```cpp
//from important
int main()
{
    Person p1(10);
    Person p2(10);

    p2.PersonAddAge(p1);
    cout << p2.age << endl;
    //output:20
    p2.PersonAddAge(p1).PersonAddAge(p1).PersonAddAge(p1);
    cout << p2.age << endl;
    //output:40  链式编程
}
```

# 空指针访问成员函数
空指针可以调用成员函数
```ad-important
```
```cpp
class Person
{
public:
    void showClassName()
    {cout << "this is Person Class" << endl;}
    void showPersonAge()
    {cout << age << endl;}//默认是this->age
    
    int age;
};
```

```ad-example
```
```c
//from important
int main()
{
    Person *p = NULL;
    
    p->showClassName();//正常运行
    //output:this is Person Class
}
```

```ad-error
```
```cpp
//from important
int main()
{
    Person *p = NULL;
    
    p->showPersonAge();//由于p是一个空指针，this识别错误
}
```

```ad-success
```
```cpp
//from important
void showPersonAge()
{
    if(this == NULL)
    {return;}
    cout << age << endl;
}//默认是this->age
```

# 常对象
- 声明对象前加const称该对象为常对象
- 常对象只能调用常函数
- *常对象可以修改静态变量的值*
```ad-error
```
```cpp
//from error,example
int main()
{
    const Person p;//常对象
    p.m_A = 100;//不可改
    p.m_B = 1000;//可改
    p.func();//报错
}
```
还有const修饰成员函数在cpp函数装饰中

# 匿名对象
```ad-example
title:Example
collapse:open
直接调用构造函数,将会创建一个匿名对象
```
```cpp
class Person
{
public:
    int m_A;
};

int main()
{
    Person();//匿名对象
    return 0;
}
```
