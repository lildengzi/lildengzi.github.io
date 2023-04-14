```c
void insertSort(int k[], int n)
{
	int i, j, temp;
	for(i = 1; i < n; i++)
	{
		if( k[i] < k[i-1] )
		{
			temp = k[i];
			for(j = i-1; k[j] > temp; j--)
			{k[j+1] = k[j];}
			k[j+1] = temp;
		}
		
	}
}

insertSort(a,10);
```