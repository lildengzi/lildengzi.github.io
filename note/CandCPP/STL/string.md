# string介绍
本质
- string是c++风格字符串，本质是一个类

string和char\*区别:
- 一个指针一个char\*类型容器

有很多方便的方法
string是安全的自动管理内存

# string构造函数
- `string();`
- `string(const char* s);`
- `string(const string& str);`
- `string(int n, char c);`
```ad-example
title:Example
collapse:open
```
```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string s1; //默认构造
    const char* str = "Hello World";
    string s2(str);
    
    string s3(s2);
    
    string s4(10, 'a');
    cout << s2 << endl;
    cout << s3 << endl;
    cout << s4 << endl;
    return 0;
}
/*output:
Hello world
Hello world
aaaaaaaaaa
*/
```

# string赋值
- `string& operator=(const char* s);`
- `string& operator=(const string &s);`
- `string& operator=(char c);`
- `string& assign(const char* s);`
- `string& assign(const char* s, int n);`
- `string& assign(const string &s);`
- `string& assign(int n, char c);`
```ad-example
title:Example
collapse:open
```
```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string str1 = "Hello World";
    
    string str2;
    string str1 = str2;
    
    string str3 = 'a';
    
    string str4;
    str4.assign("hello c++");
    
    string str5;
    str5.assign("hello c++", 5);
    
    string str6;
    str6.assign(str5);
    
    string str7;
    str7.assign(10, 'w');
    cout << str1 << endl;
    cout << str2 << endl;
    cout << str3 << endl;
    cout << str4 << endl;
    cout << str5 << endl;
    cout << str6 << endl;
    cout << str7 << endl;
    return 0;
}
/*output:
Hello world
Hello world
a
hello c++
hello
hello
wwwwwwwwww
*/
```

# string拼接/追加
字符串拼接
- `string& operator+=(const char* str);`
- `string& operator+=(const char c);`
- `string& operator+=(const string& str);`
- `string& append(const char* s);`
- `string& append(const char* s, int n);`
- `string& append(const string& s);`
- `string& append(const string& s, int pos, int n);`
```ad-example
title:Example
collapse:open
```
```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string str1 = "我";
    string str1 += "爱玩游戏";
    cout << str1 << endl;
    str1 += ':';
    cout << str1 << endl;
    string str2 = "LOL DNF";
    str1 += str2;
    cout << str1 << endl;
    
    string str3 = "I";
    str3.append(" love ");
    cout << str3 << endl;
    str3.append("game abcde", 4);
    cout << str3 << endl;
    str3.append(str2);
    cout << str3 << endl;
    str3.append(str2, 0, 3);
    cout << str3 << endl;
    
    return 0;
}
/*output:
我爱玩游戏
我爱玩游戏:
我爱玩游戏:LOL DNF
I love
I love game
I love gameLOL DNF
I love gameLOL
*/
```

# string查找和替换
从左往右
- `int find(const string& str, int pos = 0) const;`
- `int find(const char* s, int pos = 0) const;`
- `int find(const char* s, int pos, int n) const;`
- `int find(const char c, int pos = 0) const;`
从右往左
- `int rfind(const string& str, int pos = 0) const;`
- `int rfind(const char* s, int pos = npos) const;`
- `int rfind(const char* s, int pos, int n) const;`
- `int rfind(const char c, int pos = 0) const;`
替代
- `string& replace(int pos, int n, const string& str);`
- `string& replace(int pos, int n, const char* s);`
```ad-example
title:Example
collapse:open
```
```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string str1 = "abcdefgde";
    int pos = str1.find("de");
    int rpos = str1.rfind("de");
    cout << pos << endl; //没有找到输出-1,找到输出索引从0开始
    cout << rpos << endl;
    str1.replace(1, 3, "1111");
    cout << str1 << endl;
    return 0;
}
/*output:
3
7
a1111efgde
*/
```

# string比较
根据ascii值一个一个比较
- `int compare(const string& s) const;`
- `int compare(const char* s) const;`
```ad-example
title:Example-
collapse:open
```
```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string str1 = "hello";
    string str2 = "hello";
    string str3 = "hellp";
    
    cout << str1.compare(str2) << endl;
    cout << str1.compare(str3) << endl;
    cout << str3.compare(str1) << endl;
    return 0;
}
/*output:
0
<0的数
>0的数
*/
```

# string长度
- `int length();` 获取长度从一开始到末位
- `int size();` 获取元素长度
> [!example] 
```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string str = "123456";
    cout << str.length() << " " << str.size() << endl;
    return 0;
}
/*output:
6 6
*/
```

# string字符存取
- `char& operator[](int n);`
- `char& at(int n);`
```ad-example
title:Example
collapse:open
```
```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string str1 = "hello";
    for(int i = 0; i < str1.size(); i++)
    {
        cout << str1[i] << " ";
    }
    cout << endl;
    for(int i = 0; i < str1.size(); i++)
    {
        cout << str1.at(i) << " ";
    }
    str1[0] = 'x';
    cout << str1 << endl;
    return 0;
}
/*output:
h e l l o
h e l l o
xello
*/
```

# string插入和删除
- `string& insert(int pos, const char* s);`
- `string& insert(int pos, const string& str);`
- `string& insert(int pos, int n, char c);`
- `string& erase(int pos, int n, npos);`
```ad-example
title:Example-
collapse:open
```
```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string str1 = "hello";
    str1.insert(1, "111");
    cout << str1 << endl;
    
    str1.erase(1, 3);
    return 0;
}
/*output:
h111ello
hello
*/
```

# string字串截取
- `string substr(int pos = 0, int n = npos) const;`
```ad-example
title:Example
collapse:open
```
```cpp
#include<iostream>
#include<string>
using namespace std;

int main()
{
    string str = "hello c++";
    string email = "2580862656@11.com";
    string subStr = str.substr(0, 4); //闭区间
    
    cout << subStr << endl;
    cout << email.substr(0, email.find('@')) << endl;
    return 0;
}
/*output:
hello
2580862656
*/
```
