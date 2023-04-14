# $$常用逻辑结构1$$  

做题一般分四部分  
定义->输入->计算->比较->输出

目录：
1. 得到一个数的每一位数[跳转](#计算一个数的每位数)
2. 定义长度可变数组[跳转](#长度可变数组)
3. 数倒序输出[跳转](#倒序输出)
4. 数字交换[跳转](#数字交换)
4. 数字字符串转数字[跳转](#字符串转数字)
5. 数组从小到大排列[跳转](#数字排列)
6. 数字比较大小[跳转](#数字比较大小)
4. 字符串操作[跳转](#字符串操作)
7. 矩阵变换[跳转](#矩阵变换)
4. 
其中计算、比较常用的逻辑结构记录  
# 计算一个数的每位数
```c
int a[1000];
int x;//x为输入的数
scanf("%d",&x);
for(int i = 0;x != 0;i++)
{
    a[i]=x%10;//a[0]~a[i]依次存入x的个位至~i位
    x/=10;
}
```
or:
```c
int dg1,dg2,dg3,dg4;//代替数组
scanf("%d",&x);
dg1=x%10;
dg2=x/10 % 10;
dg3=x/100 % 10;
dg4=x/1000 % 10;
······
```
# 长度可变数组 
```c
#include<malloc.h>
int n;
int* p = NULL;	//申请的内存地址指针
	scanf("%d",&n);输入元素个数
	p = (int*)malloc(n*sizeof(int));//分配内存空间 
    for(i=0;i<n;i++)
    {
		scanf("%d",&p[i]);
	} 

    if(p!=NULL)
    {
		free(p);//释放硬盘空间
		p = NULL;
	} 
```

# 倒序输出
输入输出整数
```c
int result = 0,x;
scanf("%d",&x);
while(x!=0)
{
    result = result*10 + x%10; 
    x/=10;
}
printf("%d",result);
```
or:
```c
int n,a,b = 0;
scanf("%d",&n);
while(n>0)
{
    a=n%10;
    n/=10;//n=n/10;
    b=b*10 + a;
}
```
输入输出小数方法1
```c
float result,a;
int temp;
scanf("%f",&a);
int i = 0;
for(;a==(int)a;i++)
{
    a*=10;//将a转换成整数
}

for(;temp != 0;)//计算部分
{
    temp=a%10;
    temp/=10;
    result=result*10 + temp;
}

for(;i==0;i--)
{
    a/=10;//转换回来
}
```
输出小数方法2
```c
//相当于把小数当成字符串
char ch[100];
//#include<string>
//string ch;
for(int i = 0;i<100;i++)
scanf("%s",&ch[i]);
//scanf("%s",&ch);
```
数组倒序 O(2n):
```c
int a[100]{0};
int j;
int i = 0;
for(; i<100; i++)
{
    a[i]=i;
}
for(int j = i;j>0;j--)
{
    a[i - j]=j;
}

```
数组倒序2 O(n): 
```c
    int a[10]={10,100,20,43,54,15,6,77,82,91};
    int i,t;
    for(i=0;i<10/2;i++)
    {
        t=a[i];
        a[i]=a[10-1-i];//值交换
        a[N-1-i]=t;
    }
```
自带函数倒序
```cpp
#include <algorithm>
char ch[]="123456";
getline(cin,ch);
reverse(ch.begin(),ch.end());
//for(int i =ch.size()-1;i >= 0; i--)
//{
    //cout<<ch[i];
//}
```

# 数字交换 
最简单:
```c
int a,b,temp;
temp=a;
a=b;
b=temp;
```
位运算方法:
```c
int a,b;
a=a^b;
b=a^b;
a=a^b;
```
[返回顶部](#top)
# 字符串转数字 
c++
```cpp
#include <sstream>
int a;
string b;
stringstream ss;
ss<<b;
ss>>a;
```
# 数字排列
c++ 
```c
#include <algorithm>
int a[100];
for(int i = 0;i<100;i++)
cin>>a[];
sort(a,a+100);//sort(首地址,末地址后一位)
//默认从小到大排列
```
# 数字比较大小
```c
int a,b,c;
int max(int x,int y)
{
    return x>y?x:y;
}
int main()
{
    max(max(a,b),c);//链式编程思想，无限套
}
```
# 字符串操作
删除字符串特定字符并输出结果
```cpp
#include <cstring>
#define N 50

char str[N];
char a;
char ans[N];

void dele()
{
	int len2 = 0;
	for (int i = 0; i < N; i++) {
		if (str[i] != a)
			ans[len2++] = str[i];
	}
}

int main()
{	gets(str);
	scanf("%c",&a);
	dele();
	printf("%s",ans);
	return 0;
}
```
查找字符串出现次数
```cpp
#include <iostream>
using namespace std;
#include <string>
#define N 100
string str[N];
int n = 0;
string ans;
int main()
{
	for (int i = 0; i < N; i++)
	{
		cin >> str[i];
		if (getchar() == '\n')break;
	}
	cin >> ans;
	for (int i = 0; i < N; i++)
	{
		if (ans == str[i])n++;
	}
	
	cout<<ans<<" "<< n<<endl;
	return 0;
}
```
# 矩阵变换  
记录头尾  
使用场景:能记录开始、结束的位置 
```c

```
# 秒数转化时间t=HH:MM:SS
```c
#include <stdio.h>  
#include <stdlib.h>  
int b[100000][3];  
int main()
{  
    int i,n=0,a;  
    scanf("%d",&n);  
        for(i=0;i<n;i++)  
        {  
            scanf("%d",&a);  
            b[i][0]=a%60;
            a/=60;  
            b[i][1]=a%60;  
            b[i][2]=a/=60;    
        }  
    for(i=0;i<n;i++)  
    {  
        printf("%02d:%02d:%02d\n",b[i][2],b[i][1],b[i][0]);  
    }  
    return 0;  
}
```