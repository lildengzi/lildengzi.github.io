> [!important] 
> cpp工程文件中，一个类包含一个头文件和一个源文件
```cpp
//Point.h
#pragma once
#inlude<iostream>

class Point
{
public:
	void setX(int x);
	void setY(int y);
	int getX();
	int getY();
	
private:
	int m_X;
	int m_Y;
};

//Point.cpp
#include"Point.h"

void Point::setX(int x){m_X = x;}
void Point::setY(int y){m_Y = y;}
int Point::getX(){return m_X;}
int Point::getY(){return m_Y;}

//Circle.h
#include"Point.h"

class Circle
{
public:
	void setCenter(Point center);
	void setR(int r);
	Point getCenter();
	int getR();
	
private:
	int m_R;
	Point m_center;
};

//Circle.cpp
#include"Circle.h"

void Circle::setCenter(Point center){m_center = center;}
void Circle::setR(int r){m_R = r;}
Point Circle::getCenter(){return m_center;}
int Circle::getR(){return m_R;}

//main.cpp
#include"Circle.h"

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

```ad-summary
title:Summary
collapse:open
# 源代码的组织

头文件(*.h):c/c++头文件,函数/类/结构体/模板的声明, 内联函数/#define/const定义的常量

源文件(*.cpp):具体定义

主程序(main):核心框架
```
