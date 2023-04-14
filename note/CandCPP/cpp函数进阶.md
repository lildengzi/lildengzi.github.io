# 函数高级
cpp中函数参数可以设默认值,c不能
## 默认参数
不加默认值(c实现)
```cpp
int func(int a, int b, int c)
{
	return a + b + c;
}

int main()
{
	cout << func(10, 20, 30) << endl;//output:60
}
```
加默认值
```cpp
int func(int a, int b = 20, int c = 30)
{
	return a + b + c;
}

int main()
{
	cout << func(10) << endl;//output:60
}
```
更多例子
```cpp
int func(int a, int b = 20, int c = 30)
{
	return a + b + c;
}

int main()
{
	cout << func(10, 30) << endl;//output:70
	//如果传了数值，函数就会使用传的值，如果没有，那么用默认值
}
```
1. 注:如果某个位置已有默认值，往后都需要有默认值
```cpp
int func(int a, int b = 20, int c, int d)//错误
{
	return a + b + c;
}

int func2(int a, int b = 20, int c = 30, int d)//错误
{
	return a + b + c;
}
```
正确:
```cpp
int func2(int a, int b = 20, int c = 30, int d = 40)//正确
{
	return a + b + c;
}
```
2. 如果函数声明已有默认参数，实现就不再需要默认参数
```cpp
int func(int a = 10, int b = 20);

int func(int a = 10, int b = 20)
{
	cout << a << " " << b << endl;//报错:重定义
}
```

## 占位参数
用于函数重载，没有实际作用
```cpp
void func(int a, int)
{
	
}

int main()
{
	func(10, 10/*任意整型*/);
}
```
占位参数也可以有默认参数，但一点用都没有
```cpp
void func(int a, int = 10)
{
	
}

int main()
{
	func(10);//这就可以不用传，但更没意义了
}
```

## 函数重载
作用:函数名可以相同，提高复用性
满足条件:
* 同一作用域下(同一文件)
* 函数名相同
* 函数参数类型不同，个数不同，顺序不同
注意事项:
* 返回值不能做重载条件
* 引用作重载条件
* 函数重载与函数默认参数
[[cpp函数重载案例]]

# 函数对象(仿函数)
- 函数对象使用时，可以像普通函数一样调用，可以有参数， 可以有返回值
- 函数对象超出普通函数的概念，函数对象可以有自己的状态
- 函数对象可以作为参数传递
```ad-example
title:Example
collapse:open
```
```cpp
class Myfunc
{
public:
    Myfunc()
    {
        count = 0;
    }
    
    int operator()(int a, int b)
    {
            return a + b;
    }
    void operator()(string test)
    {
        cout << test << endl;
        count++;
    }
    
    int count;
};

void doPrint(Myfunc& mp, string test)
{
    mp(test);
}
int main()
{
    Myfunc myfunc;
    cout << myfunc(10, 10) << endl;
    
    Myfunc func2;
    func2("hello");
    func2("hello");
    func2("hello");
    cout << func2.count << endl;
    
    doPrint(func2, "Hello");
    return 0;
}
/*output:
20
hello
3

*/
```

# 谓词
- 一个函数满足仿函数并且返回类型是`bool`时，称为谓词
- 接收一个参数称一元谓词，以此类推
```ad-example
title:Example
collapse:open
```
```cpp
class GreaterFive
{
public:
    bool operator(int val)
    {
        return val > 5;
    }
};

void test()
{
    vector<int>v;
    for(int i = 0; i < 10; i++)
    {
        v.push_back(i);
    }
    
    vector<int>::iterator it = find_if(v.begin(), v.end(), GreaterFive());//谓词使用
    if(it == v.end())
    {
        cout << "没有找到" << endl;
    }
    else
    {
        cout << "找到了" << *it << endl;
    }
}
/*output:
找到了6
*/
```

