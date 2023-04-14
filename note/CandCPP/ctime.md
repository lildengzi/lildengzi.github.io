# clock
```ad-important
title:Important
collapse:open
`clock_t`运行时长类型

`clock()`返回运行时长
```
```cpp
#include<iostream>
#include<ctime>
#include<windows.h>
using namespace std;


int main()
{
    clock_t time = clock();
    Sleep(1000);
    clock_t time2 = clock();
    cout << (time2 - time) / CLOCKS_PER_SEC << endl;
    return 0;
}
/*output:
1
*/
```

# 