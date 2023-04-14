# new
`类型 *指针变量 = new 类型函数;`
c++中利用new操作符在堆区开启内存空间
堆区开辟数据，由程序员手动开辟，手动释放，释放利用操作符
new返回该数据类型指针
```ad-example
title:Example
collapse:open
```
```cpp
int* cpp = new int(10);
cout << *cpp << endl; //output:10

//数组开辟
int* arr = new int[10];
cout << *arr << endl;
for(int i = 0; i < 10; i++)
{
	arr[i] = i + 100;
}
for(int i = 0; i < 10; i++)
{
	cout << arr[i] << endl;
}
/*output:
100
101
102
103
104
105
106
107
108
109*/
```

# delete/delete\[\]
`delete 指针变量`
如果想释放堆区数据利用关键字(运算符)`delete`
释放一连串内存用`delete[]`
```cpp
//书接上文
delete p;
cout << *p << endl; //output:ERROR

//释放数组要加中括号
delete[] arr;
```

```ad-summary
title:Summary
collapse:open
在c++中，使用new时,编译器做了两件事

- 调用标准函数库为operator new()分配内存
- 调用构造函数初始化内存

delete相同
```

# c和cpp内存分配操作区别
> [!note] 
> malloc和free是函数，new和delete是操作符
malloc申请的空间不会初始化，new可以初始化
malloc申请空间时需要手动计算空间大小并传递，new不需要
malloc的返回值为void*，使用时必须强转来接收，new不需要
malloc申请失败时返回NULL，new申请失败会抛异常
申请自定义类型的对象时，malloc/free不会调用构造函数和析构函数，而new会申请空间后调用构造函数，delete会调用析构函数后再释放空间

# 手写内存池
## 介绍
重载`new`/`delete`运算符主要应用是实现内存池，内存池在高性能服务器中很常用
内存池:
1. 像系统申请预先分配的大片内存空间
2. 提升分配的归还速度
3. 减少内存碎片
