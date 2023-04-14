# PROJECT
指定工程的名字和支持的语言，可支持所有语言
`PROJECT(HELLO)`  指定工程名并支持所有语言 **推荐**
`PROJECT(HELLO C)` 指定工程名并支持C语言
`PROJECT(HELLO C CXX)`  指定工程名并支持C/C++语言

隐式定义了两个CMAKE变量
\<projectname\>\_BINARY_DIR,
\<projectname\>\_SOURCE_DIR,
```ad-question
title:Question
collapse:open
如果改变工程名字，两个变量名也会改变

解决:再定义两个预定义变量:PROJECT_BINARY_DIR和PROJECT_SOURCE_DIR
```

# SET
用于显示的指定变量的
`SET(SRC_LIST main.cpp)`    SRC_LIST变量包含main.cpp
也可以如SET(SRC_LIST main.cpp t2.cpp t3.cpp)

# MESSAGE
像终端输出用户自定义信息
主要包含三种信息:
- SEND_ERROR, 产生错误, 生成过程被跳过
- STATUS, 输出前缀为--的信息
- FATAL_ERROR, 立即终止所有cmake过程

# ADD_EXECUTABLE
生成可执行文件
`ADD_EXECUTABLE(hello ${SRC_LIST})`
也可以写`ADD_EXECUTABLE(hello main.cpp)`

# 一个简化cmake小demo
```cmake
PROJECT(HELLO)
ADD_EXECUTABLE(hello main.cpp)
```
**注意**:工程名HELLO和可执行文件hello没有关系
