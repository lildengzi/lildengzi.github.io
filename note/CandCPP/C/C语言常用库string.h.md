# 目录
| 关键字   | 返回值 | 说明           |
| -------- | ------ | -------------- |
| `strcmp` | `int`  |                |
| `strrev` |        | 对源字符串操作 |
| `strstr` |        |                |
| `strlen` | `int`  |                |

# strcmp
如果str1的ascii码总值大于str2，返回正整数，相等返回0小于str2返回负数
 - n:比较前n个字节
- `int strcmp(str1, str2, int n);`
```ad-important
title:Important
collapse:open
```
```c
#include<string.h>

str1 = XD001;
str2 = XD002;
strcmp(str1, str2);
//return <0
```

# strrev
字符串逆序
- `strrev(str);`
```ad-important
title:Important
collapse:open
```
```cpp
#include <string.h>

str1 = "123456789";
strrev(str1);
printf("%s", str1);
//output:987654321
```

# strstr(gcc特有)
str1中查找str2
- `strstr(str1, str2);`
```ad-important
title:Important
collapse:open
```
```cpp
#include <string.h>

str1 = "12345678987654321";
str2 = "6789";
strstr(str1, str2);
//output:
```

# strlen
返回字符串长度
- `int strlen(str);`
```ad-important
title:Important
collapse:open
```
```cpp
#include<stdio.h>

int main()
{
    printf("%d", strlen("123456"));
    return 0;
}
//output:6
```

# 