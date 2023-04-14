# 算数仿函数介绍
- 函数实现四则运算，关系运算，逻辑运算
- negate是一元运算，其他都是二元运算

## 算数仿函数原型
包含头文件
`#include <functional>`
例
- `template<class T>T plus<T>` //add
- `template<class T>T minus<T>` //minu
- `template<class T>T multiplies<T>` //mult
- `template<class T>T divides<T>` //div
- `template<class T>T modulus<T>` //mod
- `template<class T>T negate<T>` //绝对值
```ad-example
title:Example
collapse:open
```
```cpp
#include <iostream>
#include <functional> // stl内置仿函数库
using namespace std;

int main()
{
    negate<int>n;
    
    cout << n(50) << endl;
    return 0;
}
/*output:
-50

*/
```

# 关系仿函数介绍

## 关系仿函数原型

# 逻辑仿函数介绍

## 逻辑仿函数原型
