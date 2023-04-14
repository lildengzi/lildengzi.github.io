# 判断质数
```ad-example
title:Example
collapse:open
```
```c
int prime_number(int num)
{
    int i, k;
    if (num >= 2)
    {
        k = sqrt(num);
        for (i = 2; i <= k; i++)
        {
            if (num % i == 0)
                break;
        }
        if (i >= k + 1)
            return 1;
        else
            return 0;
    }
    else
        return 0;
}

```

# 