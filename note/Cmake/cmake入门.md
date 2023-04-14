# cmake是什么
用于高级编译配置工具
当多个人用不同语言开发一个项目，最终输出一个可执行文件或者共享库(dll, so)等，这时cmake作用就大了

# cmake配置
本机已有vscode或qt
linux自带

```ad-example
title:Example
collapse:open
```
```cpp
//1. 步骤1写一个hello world
//main.cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World" << endl;
    return 0;
}
```

```cmake
//2. 写CmakeLists.txt
//CmakeLists.txt
PROJECT(HELLO)
SET(SRC_LIST main.cpp)
MESSAGE(STATUS "This is BINARY dir" ${HELLO_BINARY_DIR})
MESSAGE(STATUS "This is SOURCE dir" ${HELLO_SOURCE_DIR})
ADD_EXEUTABLE(hello ${SRC_LIST})
```

```cmake
cmake .
make 
```
最终生成名为HELLO的可执行程序
