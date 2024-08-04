#include <stdio.h>

// 交换数组中下标为 i 和 j 的元素
void swap(int arr[], int i, int j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 快速排序
void quick_sort(int arr[], int left, int right) 
{
  if (left >= right) {return;}

  int pivot = arr[left];
  int i = left;
  int j = right;

  while (i < j) 
  {
    while (i < j && arr[j] >= pivot) {j--;}
    while (i < j && arr[i] <= pivot) {i++;}
    swap(arr, i, j);
  }
  
  arr[left] = arr[i];
  arr[i] = pivot;

  quick_sort(arr, left, i - 1);
  quick_sort(arr, i + 1, right);
}

int main() {
  int arr[] = {3, 6, 8, 10, 1, 2, 1};
  int n = sizeof(arr) / sizeof(int);

  quick_sort(arr, 0, n - 1);

  for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
  }

  return 0;
}
