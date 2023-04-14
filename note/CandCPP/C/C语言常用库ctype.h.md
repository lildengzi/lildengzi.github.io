# 目录
| 函数名    | 返回值 | 说明 |
| --------- | ------ | ---- |
| `tolower` |        |      |
| `toupper` |        |      |
|           |        |      |

# 大小写转换tolower/toupper
`int tolower(int c);`
`int toupper(int c);`
```ad-example
title:Example
collapse:open
```
```c
#include<stdio.h>
#include<ctype.h>

int main()
{
    printf("%c", tolower('A'));
    printf("%c", touppper('a'));
    //output:aA
    return 0;
}
```
