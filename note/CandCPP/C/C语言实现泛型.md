# 泛型简介
在c++中泛型能够实现很多高级操作
```ad-example
title:Example
collapse:open
```
```cpp
template<class T>
void swap(T* x, T* y)
{
    T z = *x;
    *x = *y;
    *y = z;
}
```

# C实现
```ad-important
title:Important
collapse:open
C语言实现泛型数据交换
```

## 朴素宏定义法
```c
#define 
```
```ad-summary
title:Summary
collapse:open
1. 运行时盘判定损耗性能
2. 手动难以精准判断类型
3. 耦合性强的宏难以调试
```

## \_Generic关键字(C11)
```c
#define swap(x, y) _Generic((x), \
int *:swap_int(x, y),            \
char *:swap_float(x, y))
```

 