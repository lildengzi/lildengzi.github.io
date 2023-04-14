###### 目录
1. [[cppnewdelete操作符]]
2. [[cpp引用]]
3. [[cpp函数进阶]]
4. [[cpp友元]]
5. [[#面向对象]]
	* [[#类的基本构成]]
	* [[cpp封装]]
	* [[cpp对象特性]]
	* [[cpp继承]]
	* [[cpp多态]]
6. [[cpp进阶模板编程]]
7. [[cpp异常处理]]
8. [[cpp断言]]
9. [[cpp命名空间]]
10. [[cpp内联函数]]
11. [[cpp运算符重载]]
12. [[cpp常用库]]
13. [[cpp函数修饰]]
14. [[cpp模块导入]]
15. [[cpp并发与多线程]]
16. [[cpp进阶web编程]]

# 原始字面量
`R""`
```ad-example
title:Example
collapse:open
当我们输入一个绝对地址时
`"D:\Repo\vscodeProject\vscCppworking\vscCppworking.code-workspace"`
部分地方会被转义

加R防止转义

`"D:\\Repo\\vscodeProject\\vscCppworking\\vscCppworking.code-workspace"`
\=\=
`R"title(D:\Repo\vscodeProject\vscCppworking\vscCppworking.code-workspace)title"`

```

# 自动类型推导auto
`auto 变量名 [初始化];` 编译器确定变量名类型

```ad-warning
title:warning
collapse:open

- 不要滥用auto

- 
```

# 下标访问
`数字[const char* 字符串]` //正序下标访问
`[数字]字符串` //逆序下标访问
> [!example] 
```cpp
cout << 1["123456"] << endl;
cout << "76543"[3] << endl;
cout << sizeof(0)["abcdefg"] << endl;
//output:
//2
//4
//1
```

# 面向对象
C++面向对象三大特性:
- 封装
- 继承
- 多态
C++认为万事万物皆为对象，对象有其属性和行为

## 类的基本构成
![](https://www.runoob.com/wp-content/uploads/2015/05/cpp-classes-objects-2020-12-10-11.png)
```cpp
class 类型名
{
访问权限:
	变量;
	方法(){/*可以在类内声明，也可以直接实现，一般情况做声明*/};
	...
};
```
例子:
```cpp
class Box
{
public:
	int b_height;
	int wight;
	int length;
	void setheight();
};
```

## c++中的class和struct
C++中`class`和`struct`唯一区别在于默认访问权限不同
- `struct`默认为公有
- `class`默认为私有
- 继承也是默认`struct`公`class`私
```ad-important
```
```cpp
class Person
{
    string name;
};

struct Person2
{
    string name;
};
```

```ad-error
```
```cpp
//from important
int main()
{
    Person p;
    Person2 p2;
    p.name = "张三";//报错
    p2.name = "李四";//编译成功
    return 0;
}
```
