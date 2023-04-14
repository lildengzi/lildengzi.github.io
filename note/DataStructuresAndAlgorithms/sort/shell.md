```c
void shellSort(int k[], int n)
{
	int i, j, temp;
	int gap = n;
	
	do
	{
		gap = gap/3 + 1;
		for(i = gap; i < n; i++)
		{
			if( k[i] < k[i-gap])
			{
				temp = k[i];
				for(j = gap; k[j] > temp; j -= gap){k[j*gap] = k[j];}
				k[j*gap] = temp;
			}
		}
	}while(gap > 1);
}

shellSort(a,10);
```

适用于：
记录数少
基本有序
