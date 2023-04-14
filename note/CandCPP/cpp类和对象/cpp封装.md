# 封装
意义一:
- 将属性和行为作为一个整体，表现生活中的事物
- 类中的属性和行为 我们统一称为 成员
	- 属性    成员属性  成员变量
	- 行为    成员函数  成员方法
意义二:
- 加属性和行为加以权限控制
- 访问权限有三种
	- public    共有权限  的成员类内可以访问  类外也可以访问
	- protected    保护权限  的成员类内可以访问  类外不可访问  子类可访问父类的保护权限
	- private    私有权限  的成员类内可以访问  类外不可访问  子类不可访问父类的私有权限
```ad-example
```
```cpp
class Person
{
public://权限
	string name;//成员变量
protected://权限
	string car;
private://权限
	int password;
public:
	void func()
	{
		name = "张三";
		car = "track";
		password = 123456;
	}
};

class Son:Person
{
	car = "gucci";//可访
	password = "李四";//不可访
};
int main()
{
	Person per;//对象
	per.car;//protected权限类外无法访问
	per.password;//private权限类外无法访问
	return 0;
}
```
[[cpp封装案例#封装案例]]

# 成员属性私有化
对内设置私有，对外提供接口
优点1:将所有成员属性设置为私有，可以自己控制读写权限
优点2:对于写权限，我们可以检测数据的有效性
```ad-example
```
```cpp
class Person
{
public:
	//设置名字可读可写
	//写
	void setPersonName(string name)
	{
		m_name = name;
	}
	//读
	string getPersonName()
	{
		return m_name;
	}
	//设置年龄只读
	void getAge()
	{
		m_age = 0;
		return m_age;
	}
	//设置情人只写
	void setLover(string lover)
	{
		m_lover = lover;
	}
	
private:
	//名 可读可写
	string m_name;
	//年纪  可读
	int m_age;
	//情人  可写
	string m_lover;
};

int main()
{
	Person p1;
	p1.setPersonName("张三");
	cout << p1.getPersonName() << endl;
	cout << p1.getAge() << endl;//没有设置setAge写入权限
	p1.setLover("泰勒");//没有设置get Lover读取权限
}
```
