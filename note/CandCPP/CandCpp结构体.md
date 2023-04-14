# 结构体介绍
尽管函数很有用，但是面对体量极其庞大的工程，阅读几乎是不可能的，所以就要有结构化编程

# 结构体
`struct 类型名{/*body*/}结构体变量;`
允许用户用自己定义的类型存储不同的数据
```c
struct tag
{
	成员;
}变量;
```

```ad-example
```
```c
struct Student
{
	int age;
	char *name;
	int score;
};
```

# 结构体用法
结构体也可以创建数组，指针和函数
```ad-example
title:Example
collapse:open
```
```c
struct Student
{
    int age;
}stu[10], //结构体数组
*stu2; //结构体指针
```

C与C++的结构体不同

# 共用体/联合体

```ad-example
title:Example
collapse:open
```
```c
union Student{
    int age;
};
```

基本内容除基本输入输出方式改变以外，CPP操作基本与C相同
详情见[C/C++基础语法](https://www.runoob.com)
