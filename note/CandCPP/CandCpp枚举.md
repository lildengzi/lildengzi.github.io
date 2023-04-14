# enum介绍


# enum
`enum 枚举名{ `
`     标识符[=整型常数],` 
`     标识符[=整型常数],` 
`...` 
`     标识符[=整型常数]`
`} 枚举变量;`
主要用法
```c
enum week
{
	MON,
	TUES,
	WED,
	THURS,
	FRI,
	SAT,
	SUN
}

//此时MON默认为0，TUES默认为1，以此类推
int main()
{
	switch(week)
	{
	case MON:/*body*/break;
	case TUES:/*body*/break;
	case WED:/*body*/break;
	case THURS:/*body*/break;
	case FRI:/*body*/break;
	case SAT:/*body*/break;
	case SUN:/*body*/break;
	}
}
```

赋值方法
```cpp
//全部赋值
enum week{ Mon = 1, Tues = 2, Wed = 3, Thurs = 4, Fri = 5, Sat = 6, Sun = 7 };
//默认赋值，依次为0~6
enum week
{
	MON,
	TUES,
	WED,
	THURS,
	FRI,
	SAT,
	SUN
}
//起始赋值，后面默认往下排,等效于第一种
enum week{ Mon = 1, Tues, Wed, Thurs, Fri, Sat, Sun };
//枚举是一种类型，他可以定义变量
enum week a, b, c;
//也可以在定义枚举类型的同时定义变量：
enum week{ Mon = 1, Tues, Wed, Thurs, Fri, Sat, Sun } a, b, c;
//有了枚举变量，就可以把列表中的值赋给它：
enum week{ Mon = 1, Tues, Wed, Thurs, Fri, Sat, Sun };
enum week a = Mon, b = Wed, c = Sat;
//或者：
enum week{ Mon = 1, Tues, Wed, Thurs, Fri, Sat, Sun } a = Mon, b = Wed, c = Sat;
```

# class enum
```cpp

```
