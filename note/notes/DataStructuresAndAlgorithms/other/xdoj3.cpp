#include<stdio.h>
int main()
{
	int n,m;
	int a[20][20],b[20][20],c[20][20];
	
	scanf("%d %d",&n,&m);
	
	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
			scanf("%d",&a[i][j]);
			b[i][j] = a[i][j];
			c[i][j] = a[i][j];
		}
	}
	//赋值b，a数组
	for(int j = 0 ; j < m ; j++){
		for(int i = 1 ; i < n-1 ; i++){
			if(a[i][j] == a[i-1][j] && a[i][j] == a[i+1][j]){
				b[i-1][j] = b[i][j] = b[i+1][j] = 0;
			}
		}
	}
	//处理列
	for(int i = 0 ; i < n ; i++){
		for(int j = 1 ; j < m-1 ; j++){
			if(a[i][j] == a[i][j-1] && a[i][j] == a[i][j+1]){
				b[i][j-1] = b[i][j] = b[i][j+1] = 0;
			}
		}
	}
	//处理行
	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
			if(b[i][j] == 0 || c[i][j] == 0){
				a[i][j] = 0;
			}
		}
	}
	//处理a数列
	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
			printf("%d ",a[i][j]);
		}
		printf("\n");
	}
	//输出
	return 0;
}