# 数组介绍


# 数组
`类型 数组变量名[数据量] [= {数据, 数据, ..., 数据}];`
`类型 数组名[数据量] {数据, 数据, ..., 数据};` C99列表初始化
存储一串数据,数组名就是数组首地址
```c
int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
for(int i = 0; i < 10; i++)
{
	printf("%d",a[i]);
	//output:12345678910
}
```

# 变长数组
变长数组（variable-length array)C语言特有(注意:C++没有)，C语言术语，也简称**VLA**。
是指用整型变量或表达式声明或定义的数组，而不是说数组的长度会随时变化，变长数组在其生存期内的长度同样是固定的。
```ad-example
title:Example
collapse:open
```
```c
int main()
{
    int n;
    scanf("%d", &n);
    int a[n];//C99合法, 在c++这是错误的写法
    
    return 0;
}
```

```ad-warning
title:warning
collapse:open
```
```c
void fun(int n)
{
    int vla[n];
    n += 10;
    printf ("vla takes %d bytes/n", sizeof vla);
}
```
执行的结果是40。虽然n的值在声明了数组vla之后发生了变化，但是vla不会因此而改变大小，因为变长数组一旦被声明，其大小就会保持不变直到生命期结束。
