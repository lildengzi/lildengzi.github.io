# 内存分配介绍
编译器提供的内存是有限的,被称为栈区,如果要大量使用内存空间,必须要程序员手动分配内存
手动分配,

# malloc
- `void* malloc(size_t size)` 
1. 参数size为要分配的字节数，返回值是void\*
2. 通常要强转为我们需要申请空间的类型
3. 开辟成功**返回空间首地址**，失败会返回NULL
4. 申请成功后并不进行初始化，每个数据都是随机值。
> [!important] 
```c
#include<stdio.h>
#include<malloc.h>

int main()
{
    int *p = (int*)malloc(10);//开辟10字节的空间
    return 0;
}
```

# free
- `void free 指针名;`
- 释放用手动申请的内存空间
> [!important] 
```c
#include<stdio.h>
#include<malloc.h>

int main()
{
    int *p = (int*)malloc(10);//开辟10字节的空间
    free p;
    return 0;
}
```

# 其他申请空间方式
## 

