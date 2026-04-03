#include<iostream>
#include<windows.h>
using namespace std;
int main()
{
    int a=0,b=0,x=0,y=0;
    float a1=0,b1=0,x1=0,y1=0;
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_RED);    //首页提示
    cout<<"欢迎使用腾讯连点器"<<endl;
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_GREEN);  //系统提示
    cout<<"请您分别输入您要点击的次数"<<endl;
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_BLUE);   //用户输入
    cin>>a1;
    if((int)a1-a1==0)
    {
        a=a1;
    }
    else
    {
        for(int i=0;i<999;i++)
        {
            SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_RED);
            cout<<"您输入的数不符合设定，请重新输入一个正整数作为点击的次数"<<endl;
            SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_BLUE);
            cin>>a1;
            if((int)a1-a1==0)
            {
                a=a1;break;
            }
        }
    }
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_GREEN);
    cout<<"请您输入您要点击的速度（毫秒\\下）"<<endl;
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_BLUE);   
    cin>>a1;
    if((int)b1-b1==0)
    {
        b=b1;
    }
    else
    {
        for(int i=0;i<999;i++)
        {
            SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_RED);
            cout<<"您输入的数不符合设定，请重新输入一个正整数作为点击的速度"<<endl;
            SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_BLUE);
            cin>>b1;
            if((int)b1-b1==0)
            {
                b=b1;break;
            }
        }
    }
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_GREEN);
    cout<<"请您输入点击位置的横坐标"<<endl;
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_BLUE); 
    cin>>x1;
    if((int)x1-x1==0)
    {
        x=x1;
    }
    else
    {
        for(int i=0;i<999;i++)
        {
            SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_RED);
            cout<<"您输入的数不符合设定，请重新输入一个正整数作为点击的横坐标"<<endl;
            SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_BLUE);
            cin>>x1;
            if((int)x1-x1==0)
            {
                x=x1;break;
            }
        }
    }
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_GREEN); 
     cout<<"请您输入点击位置的纵坐标"<<endl;
     SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_BLUE); 
    cin>>y1;
    if((int)y1-y1==0)
    {
        y=y1;
    }
    else
    {
        for(int i=0;i<999;i++)
        {
            SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_RED);
            cout<<"您输入的数不符合设定，请重新输入一个正整数作为点击的纵坐标"<<endl;
            SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_BLUE);
            cin>>y1;
            if((int)y1-y1==0)
            {
                y=y1;break;
            }
        }
    }
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), FOREGROUND_INTENSITY | FOREGROUND_RED);
    cout<<"系统开始执行指令"<<endl;
    for(int i=a;i>0;i--)
    {
        ::SetCursorPos(a,b);
        mouse_event(MOUSEEVENTF_LEFTDOWN|MOUSEEVENTF_LEFTUP,0,0,0,0);
        Sleep(y);
    }
    system("pause");
    return 0;
}