#include <iostream>
using namespace std;
#include<sstream>

void test()
{   
    //流操作
    stringstream ss;
    string str[100];
    //数字
    int num;
    //进制
    int base;
    //存放每位数结果数组
    int temp[100]{0};
    //结果
    int result;
    cin>>num;
    cin>>base;
    if(base==2)
    {
        
    }
    else if(base==8)
    {
        int i = 0;
		while (num!=0)
		{
			temp[i] = num % 8;
			num /= 8;
			i++;
		}
        i--;
		while (i >= 0)
		{
			result += (int)(temp[i] * pow(10 , i));
			i--;
		}
        cout<< result <<endl;
    }
    else if(base==16)
    {
        int i = 0;
        while (num!=0)
        {
            temp[i]=num%16;
            num/=16;
            ss<<temp[i];
            ss>>str[i];
            if(temp[i]==10)
            {
                str[i]=="A";
            }
            else if(temp[i]==11)
            {
                str[i]=="B";
            }
            else if(temp[i]==12)
            {
                str[i]=="C";
            }
            else if(temp[i]==13)
            {
                str[i]=="D";
            }
            else if(temp[i]==14)
            {
                str[i]=="E";
            }
            else if(temp[i]==15)
            {
                str[i]=="F";
            }
            i++;
        }
        i--;
        while (i>=0)
        {
            cout<<str[i];
        }
        
    }
}

int main()
{
    test();
    return 0;
}