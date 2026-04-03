/*灰度直方图*/
#include<stdio.h>
int main()
{
	int m,n;//行数，列数 
	int i,j,h;//行循环数，列循环数,灰度值循环数 
	int iSum;//总和 
	int iArray[256][256];
	scanf("%d%d",&n,&m);
	
	/*输入数组*/ 
	for(i=0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
			scanf("%d",&iArray[i][j]);
		}
	}
	
	/*统计*/
	for(h=0;h<=15;h++)
	{
		iSum=0;
		for(i=0;i<m;i++)
		{
			for(j=0;j<n;j++)
			{
				if(iArray[i][j]==h)
				{
					iSum++;
				}
			}
		}
		
		/*输出*/ 
		if(iSum!=0)
		{
			printf("%d %d\n",h,iSum);
		}
	} 
	
	return 0;
} 
