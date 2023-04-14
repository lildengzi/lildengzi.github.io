```c
void bubbleSort(int k[], int n)
{
	int i, j, min, temp;
	for( i = 0;i < n-1; i++ )
	{
		for( j = i+1;j < n; j++ )
		{
			if( k[i] > k[j] )
			{
				temp = k[j];
				k[j] = k[i];
				k[i] = temp;
			}
		}
	}
}

bubbleSort(a,10);
```

