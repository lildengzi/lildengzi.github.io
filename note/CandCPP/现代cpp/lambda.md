# Lambda匿名函数介绍(since c++11)  


`[]` 默认表达式所有作用域内成员参数函数都可以调用，值传递 
`[=]` 表达式所有作用域内成员参数函数都可以调用，值传递  
`[&]` 表达式所有作用域内成员参数函数都可以调用，引用转递  
`[this]` 可用Lambda所在类的成员变量  
`[变量]` 显式捕获变量，默认值传递

- 值传递不会改变变量本身的值，引用传递会  
- btn是一个指针，即使是值传递，指针所指的地址不变，并且并不是直接修改该指针所指的地址（内容），因此不需要mutable  

# Lambda表达式
- 基本表达:`[传递方式[, 函数对象参数]](形参包)->返回值{函数体;};`
```ad-important
title:Important
collapse:open
```
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int>v;
    for (int i = 0; i < 10; i++)
    {
        v.push_back(i);
    }
    
    for_each(v.begin(), v.end(), [=](int val){cout << val << " ";});
  
    system("pause");
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9
*/
```

