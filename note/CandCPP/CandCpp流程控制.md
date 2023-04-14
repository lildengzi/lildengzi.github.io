[图解](obsidian://open?vault=note&file=CwithCPP%2FC%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD%E9%80%BB%E8%BE%91%E5%9B%BE.canvas)
# 条件/循环
### if
`if(布尔值){/*body*/}`
一个判断语句的开始
`else if(布尔值){/*body*/}`
一个中间判断
`else{/*body*/}`
结束判断
如果()内的值为1，则执行花括号内的语句
```c
if ()
{
	/*body*/
}
else if()
{
	/*body*/
}
else if()
{
	/*body*/
}
else
{
	/*body*/
}
```

### switch
`switch(判断条件){/*body*/}`
`case 判断类型:/*body*/;`
`break;`
`default:默认情况`
根据条件选择一个常量表达式进入并依次执行直至结束(一般会用break结束)
```c
switch(条件)
{
case 情况:break;
case 2:break;
case 3:break;
case 4:break;
...
default:break;
}
```

### goto
`标签:`
`goto:标签`
`标签:`
C 语言中的 **goto** 语句允许把控制无条件转移到同一函数内的被标记的语句。
**注意：在任何编程语言中，都不建议使用 goto 语句。因为它使得程序的控制流难以跟踪，使程序难以理解和难以修改。任何使用 goto 语句的程序可以改写成不需要使用 goto 语句的写法。**
```c
label:/*body*/

//goto语句将跳回标签处执行
goto label;
```

### while
`while(布尔值){/*body*/}`
循环语句，当括号内语句返回值为假时结束循环
```c
int i = 0;
while(i < 10)
{
	printf("%d", i++);
	//output:0123456789
}
```

### for
`for(定义;布尔值;循环结束时执行语句){/*body*/}`
循环语句，当括号内中间语句返回值为假时结束循环
基本用法
```c
for(int i = 0; i < 10; i++)
{
	printf("%d", i);
	//output:0123456789
}
```

### do-while
`do{/*body*/}while(布尔值);`
与while基本相同，唯一差别就是do{}while会预先执行一遍，无论括号返回值真假
```c
int i = 0;
do{
printf("%d", i);
}while(i)
//output:0
```

### continue
`continue;`
跳过此次循环
```c
for(int i = 0; i < 10; i++)
{
	if(i % 2 == 0)continue;
	printf("%d ", i);
	//output:1 3 5 7 9
}
```

### break
`break;`
结束循环
```c
for(int i = 0; i < 10; i++)
{
	if(i== 4)break;
	printf("%d ", i);
	//output:1 2 3
}
```
