# 封装案例
```ad-example
```
```cpp
//设计一个圆类
const double PI = 3.14

class Circle
{
//访问权限：
public:
	//属性
	int m_r;
	//方法
	double calculateC()
	{
		return 2 * PI * m_r;
	}
};

int main()
{
	//创建对象
	Circle c1;
	c1.m_r = 10;
	cout << c1.calculateC() << endl;//output:62.8
	
	return 0;
}
```

```ad-example
title:Example2
```
```cpp
//设计一个学生类
class Student
{
public:
	int m_number;
	std::string m_name;
	
	//有风险
	void setStu()
	{
		cin >> m_number >> m_name;
	}
	
	//一般用这种方法
	void setName(std::string name)
	{
		m_name = name;
	}
	
	void setNumber(int num)
	{
		m_number = num;
	}
	
	void findStu()
	{
		cout << m_number << m_name << endl;
	}
};

int main()
{
	Student stu1;
	stu1.m_name = "张三";
	stu1.m_number = 1;
	stu1.findStu();//output:张三1
	Student stu2;
	stu2.m_name = "李四";
	stu2.m_number = 2;
	stu2.findStu();//output:李四2
	
	//或者:
	Student stu3;
	stu3.setName("王五");
	stu3.setNumber(1);
	stu3.findStu();//output:王五3
	return 0;
}
```

## 设计案例
```ad-example
```text
练习案例1:设计立方体类设计立方体类(Cube)
求出立方体的面积和体积
分别用全局函数和成员函数判断两个立方体是否相等
```
```cpp
class Cube
{
public:
	void setL(int l){m_L = l;}
	void setW(int w){m_W = w;}
	void setH(int h){m_H = h;}
	void getL(){return m_L;}
	void getW(){return m_W;}
	void getH(){return m_H;}
	int calculateS(){return (2 * (m_L * m_W + m_L * m_H + m_W * m_H));}
	int calculateV(){return (m_L * m_W * m_H);}
	bool isSame(Cube &cu)
	{
		if(this->m_L ==cu.getL() && this->m_W ==cu.getW() && this->m_H ==cu.getH())return true;
		else false;
	}
private:
	int m_L;
	int m_W;
	int m_H;
};

bool isSame(Cube &cu1, Cube &cu2)
{
	if(cu1.getL() == cHu2.getL() && cu1.getW() == cu2.getW() && cu1.getH() == cu2.getH() )return true;
	else false;
}

int main()
{
	Cube c1;
	c1.setL(10);
	c1.setW(10);
	c1.setH(10);
	cout << c1.calculateS() << endl;//output:600
	cout << c1.calculateV() << endl;//output:1000
	Cube c2;
	c2.setL(10);
	c2.setW(10);
	c2.setH(10);
	cout << c2.calculateS() << endl;//output:600
	cout << c2.calculateV() << endl;//output:1000
	cout << isSame(c1, c2) << endl;
}
```

```ad-example
```text
练习案例二:点和圆关系
求点和园关系
```
```cpp
class Point
{
public:
	void setX(int x){m_X = x;}
	void setY(int y){m_Y = y;}
	int getX(){return m_X;}
	int getY(){return m_Y;}
	
private:
	int m_X;
	int m_Y;
};

class Circle
{
public:
	void setCenter(Point center){m_center = center;}
	void setR(int r){m_R = r;}
	Point getCenter(){return m_center;}
	int getR(){return m_R;}
	
private:
	int m_R;
	Point m_center;
};

void isInCircle(Circle &c, Point &p)
{
	int distance1 = 
	pow((c.getCenter().getX() - p.getX()), 2) + 
	pow((c.getCenter().getY() - p.getY()), 2);//(x_c - x_p)^2 + (y_c - y_p)^2
	int distance2 = pow(c.getR(), 2);//r^2
	if(distance1 == distance2)
	{cout << "点在圆上" << endl;}
	else if(distance1 > distance2)
	{cout << "点在圆内" << endl;}
	else{cout << "点在圆外" << endl;}
}

int main()
{
	Circle c1;
	c1.setR(10);
	Point center;
	center.setX(10);
	center.setY(0);
	Point point;
	point.setX(10);
	point.setY(10);
	isInCircle(c1, point);//output:点在圆上
}
```
