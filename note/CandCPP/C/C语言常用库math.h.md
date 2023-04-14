# 目录
| 函数名    | 返回值 | 说明 |
| --------- | ------ | ---- |
| `tolower` |        |      |
| `toupper` |        |      |
|           |        |      |

# 求绝对值函数abs
`int abs(int n);`
```ad-example
```
```c
#include<math.h>
#include<stdio.h>
int main()
{
    printf("%d", abs(-8));
    //output:8
    return 0;
}
```

# 次方函数pow
`int pow(float x, float y)`
```ad-example
```
```c
#include<stdio.h>
#include<math.h>

int main()
{
    printf("%d", pow(2, 3));
    printf("%d", pow(-2, 4));
    /*output:
    8
    16*/
    return 0;
}
```

# 开平方根函数sqrt
`double sqrt(double n)`
```ad-example
```
```c
#include<stdio.h>
#include<math.h>

int main()
{
    printf("%d", sqrt(9));
    //output:3
    return 0;
}
```

# 