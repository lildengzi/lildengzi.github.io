# vector介绍
- 和数组相似，称为**单端数组**
- 数组是静态空间，但是vector可以动态扩展

# vector构造函数
- `vector<T>v;` //默认构造
- `vector(v.begin(), v.end());` //迭代器构造
- `vector(n, elem);` //重复元素构造
- `vector(const vector& vec);` //拷贝构造
```ad-example
title:Example
collapse:open
```
```cpp
#include <vector>
#include <iostream>
using namespace std;

void print(vector<int>& v)
{
    for(vector<int>::iterator it = v.begin(); it != v.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
    vector<int>v1;
    
    for(int i = 0; i < 10; i++)
    {
        v1.push_back(i);
    }
    print(v1);
    
    vector<int>v2(v1.begin(), v1.end());
    print(v2);
    vector<int>v3(10, 100);
    print(v3);
    vector<int>v4(v3);
    print(v4);
    
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 8 9
100 100 100 100 100 100 100 100 100 100
100 100 100 100 100 100 100 100 100 100

*/
```

# vector赋值
- `vector& operator=(const vector& vec);` //拷贝赋值
- `assign(beg, end);` //拷贝赋值
- `assign(n, elem);` //重复元素赋值
```ad-example
title:Example-
collapse:open
```
```cpp
#include <vector>
#include <iostream>
using namespace std;

void print(vector<int>& v)
{
    for(vector<int>::iterator it = v.begin(); it != v.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
    vector<int>v1;
    
    for(int i = 0; i < 10; i++)
    {
        v1.push_back(i);
    }
    print(v1);
    
    vector<int>v2;
    v2 = v1;
    print(v2);
    
    vector<int>v3;
    v3.assign(v1.begin(), v1.end());
    print(v3);
    
    vector<int>v4;
    v3.assign(10, 100);
    print(v4);
    
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 8 9
100 100 100 100 100 100 100 100 100 100

*/
```

# vector容量大小
- `empty();` 是否为空
- `capacity();` 容量
- `size();` 元素量
- `resize(int num);` 重新指定大小
- `resize(int num, elem);` 多余的元素用elem填充
```ad-example
title:Example
collapse:open
```
```cpp
#include <vector>
#include <iostream>
using namespace std;

void print(vector<int>& v)
{
    for(vector<int>::iterator it = v.begin(); it != v.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
    vector<int>v1;
    
    for(int i = 0; i < 10; i++)
    {
        v1.push_back(i);
    }
    print(v1);
    
    if(v1.empty())
    {
        cout << "空" << endl;
    }
    else
    {
        cout << "非空" << endl;
        cout << v1.capacity() << " " << v1.size() << endl;
    }
    
    v1.resize(15);
    print(v1);
    
    v1.resize(5);
    print(v1);
    
    v1.resize(10, 10);
    print(v1);
    
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9
非空
13 10
0 1 2 3 4 5 6 7 8 9 0 0 0 0 0
0 1 2 3 4
0 1 2 3 4 5 10 10 10 10 10

*/
```

# vector插入删除
- `push_back(ele);` //插入元素,自动开辟空间
- `pop_back();` //删除最后的元素
- `insert(const_iterator pos, ele);` //ele从pos位置插入(从0开始数)
- `insert(const_iterator pos, int count, ele);` //ele从pos位置插入count次(从0开始数)
- `erase(const_iterator pos);` //删除pos位元素(从0开始数)
- `erase(const_iterator start, const_iterator end);` //删除pos位元素(from start to end)
- `clear();` //全清
```ad-example
title:Example-
collapse:open
```
```cpp
#include <vector>
#include <iostream>
using namespace std;

void print(vector<int>& v)
{
    for(vector<int>::iterator it = v.begin(); it != v.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
    vector<int>v1;
    
    for(int i = 0; i < 10; i++)
    {
        v1.push_back(i);
    }
    print(v1);
    
    v1.pop_back();
    print(v1);
    
    v1.insert(v1.begin(), 100);
    print(v1);
    
    v1.insert(v1.begin(), 2, 200);
    print(v1);
    
    v1.erase(v1.begin());
    print(v1);
    
    v1.erase(v1.begin(), v1.end()); //v1.clear();
    print(v1);
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 8
100 0 1 2 3 4 5 6 7 8
200 200 100 0 1 2 3 4 5 6 7 8
200 100 0 1 2 3 4 5 6 7 8


*/
```

# vector数据存取
- `at(int idx);`
- `operator[];`
- `front();` //获取首位元素
- `back();` //获取末位元素
```ad-example
title:Example
collapse:open
```
```cpp
#include <vector>
#include <iostream>
using namespace std;

void print(vector<int>& v)
{
    for(vector<int>::iterator it = v.begin(); it != v.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
    vector<int>v1;
    
    for(int i = 0; i < 10; i++)
    {
        v1.push_back(i);
    }
    print(v1);
    for(int i = 0; i < v1.size(); i++)
    {
        cout << v1[i] << " ";
    }
    cout << endl;
    for(int i = 0; i < v1.size(); i++)
    {
        cout << v1.at(i) << " ";
    }
    cout << endl;
    cout << v1.front() << endl;
    cout << v1.back() << endl;
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 8 9
0
9

*/
```

# vector互换容器
- `swap(vec);` //将`vec`与本身元素呼唤
- `emplace_back();` //
```ad-example
title:Example
collapse:open
```
```cpp
#include <vector>
#include <iostream>
using namespace std;

void print(vector<int>& v)
{
    for(vector<int>::iterator it = v.begin(); it != v.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
    vector<int>v1;
    vector<int>v2;
    
    for(int i = 0; i < 10; i++)
    {
        v1.push_back(i);
    }
    print(v1);
    
    for(int i = 10; i > 0; i++)
    {
        v2.push_back(i);
    }
    print(v2);
    
    v1.swap(v2);
    print(v1);
    print(v2);
    return 0;
}
/*output:
0 1 2 3 4 5 6 7 8 9
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
0 1 2 3 4 5 6 7 8 9

*/
```

```ad-important
title:Important
collapse:open
巧妙利用swap可以收缩内存空间

`vector<int>(v).swap(v);`
- `vector<int>(v)` 匿名对象
- `.swap(v);` 与现存的v交换
```
```cpp
void test()
{
    vector<int>v;
    
    for(int i = 0; i < 100000; i++)
    {
        v.push_back(i);
    }
    cout << v.capacity() << endl;
    cout << v.size() << endl;
    
    v.resize(3);
    cout << v.capacity() << endl;
    cout << size() << endl;
    
    vector<int>(v).swap(v);
    cout << v.capacity() << endl;
    cout << size() << endl;
}
/*output:
130855
100000
130855
3
3
3
*/
```

# vector预留空间
- `reserve(int len);` //预留len长度，预留位置不初始化，元素不可访问呢
```ad-example
title:Example-
collapse:open
如果一次性赋值非常多数据，直接赋值会导致vector频繁开辟空间，如果直接一次预留大量空间，会节省vector开辟空间的开销
```
```cpp
#include <vector>
#include <iostream>
using namespace std;

void print(vector<int>& v)
{
    for(vector<int>::iterator it = v.begin(); it != v.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
    vector<int>v1;
    int num = 0;
    int *p = nullptr;
    for(int i = 0; i < 100000; i++)
    {
        v1.push_back(i);
        if(p != &v1[0])
        {
            p = &v1[0];
            num++;
        }
    }
    cout << num << endl;
    
    vector<int>v2;
    v2.reserve(100000);
    int num2 = 0;
    int *p2 = nullptr;
    for(int i = 0; i < 100000; i++)
    {
        v1.push_back(i);
        if(p2 != &v2[0])
        {
            p2 = &v2[0];
            num2++;
        }
    }
    cout << num2 << endl;
    return 0;
}
/*output:
30
1
*/
```
