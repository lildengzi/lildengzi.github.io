#include <iostream>
using namespace std;
//冒泡排序

int main()
{
    int a[10] = { 4,2,8,0,5,7,1,3,9 };
    //O(logn)
    for (int i = 0; i < 9 - 1; i++)
    {
        for (int j = 0; j < 9 - 1 - i; j++)
        {
            if (a[j] > a[j + 1])
            {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < 9; i++)
    {
        cout << a[i] << " ";
    }
}