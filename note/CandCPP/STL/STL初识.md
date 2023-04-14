1. 容器
    - [[vector]]
    - [[string]]
    - [[其他容器]]
    - [[map]]
    - [[list]]
    - [[set]]
2. 算法
    - [[STL自带运算仿函数]]
    - [[常用遍历算法]]
    - [[常用查找算法]]
    - [[常用排序算法]]
    - [[常用拷贝和替换算法]]
    - [[常用算术生成算法]]
    - [[常用集合算法]]

- STL:(**Standard Template Library,标准模板库**)
- STL广义上分为:容器(**container**), (**algorithm**),(**iterator**)
- 容器和算法通过迭代器无缝衔接
- STL由模板实现

STL分为六大组件
- 容器
- 算法
- 迭代器
- 仿函数
- 适配器
- 空间配置器

# 容器
存放数据，连接数据的东西
STL容器就是将最广泛的数据结构实现出来
序列式容器
关联式容器

# 算法
数据加工
质变算法:改变数据
非质变算法:不更改数据

# 迭代器
容器和算法的桥梁，将数据批量交给算法处理
每个容器有专属的迭代器
迭代器由指针实现
```ad-example
title:Example
collapse:open
```
```cpp
#include<iostream>
#include <vector>
#include <algorithm>

int print(int val)
{
    cout << val << endl;
}

int main()
{
    std::vector<int>v;
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    v.push_back(40);

    std::vector<int>::iterator itBegin = v.begin();
    std::vector<int>::iterator itEnd = v.end();//最后一个元素的下一个位置

    //第一种遍历方式
    while(itBegin != itEnd)
    {
        cout << *itBegin << endl;
        itBegin++;
    }

    //第二种
    for(std::vector<int>::iterator it = v.begin(); it != v.end(); it++)
    {
        cout << *it << endl;
    }

    //第三种
    for_each(v.begin(), v.end(), print);

    return 0;
}
```

```ad-quote
- 容器还可以存储自定义类型
- 容器可以嵌套容器
```
