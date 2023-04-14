#include<stdio.h>
    int n, m;
	int t, k;
	/// @brief 
	scanf("%d %d %d %d", &n, &m, &t, &k);
	int x[20][20]={1};
	int a, b, c, d;
int main()
{
	//找出k矩形的最左上角(a,b)和最右下角(c,d)
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < m; j++)
		{
			scanf("%d", &x[i][j]);
			if (x[i][j] == k)//最后一个k出现的位置即最右下角
			{
				c = i;
				d = j;
			}
		}
	}
	int flag = 0;
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < m; j++)
		{
			if (x[i][j] == k)
			{
				a = i;
				b = j;
				flag = 1;
				break;//第一个k出现的位置即最左上角
			}
		}
		if (flag == 1)
			break;
	}
 
	//printf("%d,%d,%d,%d", a, b, c, d);
 
	int count=0;
	int num[50], z = 1;
	for (int i = 0; i < t; i++)//num数组表示1到t
	{
		num[i] = z;
		z++;
	}
	for (int i = a; i <= c; i++)
	{
		for (int j = b; j <= d; j++)
		{
			if (x[i - 1][j] != k && x[i - 1][j] != 0&& i-1>=0)
            //添加的最后一个&&使其不越界
			{
				num[x[i - 1][j]-1] = 0;//出现过的数字就涂为0
			}
			if (x[i + 1][j] != k && x[i + 1][j] != 0 &&i+1<n)
			{
				num[x[i + 1][j]-1] = 0;
			}
			if (x[i ][j-1] != k && x[i ][j-1] != 0 &&j-1>=0)
			{
				num[x[i ][j-1]-1] = 0;
			}
			if (x[i][j + 1] != k && x[i][j + 1] != 0 &&j+1<m)
			{
				num[x[i ][j+1]-1] = 0;
			}
		}
	}
	for (int i = 0; i < t; i++)//最后统计0的个数
	{
		//printf("%d ", num[i]);
		if (num[i] == 0)
			count++;
	}
 
	printf("%d", count);
	return 0;
}