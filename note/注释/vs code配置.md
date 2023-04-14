# 目录
- [[工作区配置]]
- [[#C/C++环境配置]]
- [[#python环境配置]]
- [[#java环境配置]]
- [[#docker环境配置]]
- [[#cmake以及qt环境配置]]
- [[#C#和dotnet]]
- [[#ssh远程连接]]

# vs code下载
浏览器搜索并下载vs code:
地址:<https://code.visualstudio.com/>

下载完成后,建议下载打开扩展下载中文包

# 工作区配置
在任意位置创建文件

右击菜单通过vs code打开

点击左上角file->将工作区另存为->选择你想保存工作区得地方

## 工作区详解
工作区就是以你的指定配置加载
例如:
我在code下载了python, java, c++的环境这样显得很混乱
那么我可以通过工作区来配置特定环境
从git上clone时默认也会创建一个工作区(应该)

# C/C++环境配置
首先在vscode扩展上下载c++(有三个)
![[Pasted image 20230224133047.png]]

然后下载一个编译器(mingw, calng, msvc随便一个,去其他地方找配置教程)
一般情况下
1. 为下载好的编译器配置环境变量
2. vscode添加配置路径
3. 配置launch.json

我只提供**launch.json的配置教程(这也是网上都讲不清楚的教程)**，其他因为太久远我就不说了
- 下载某一个插件
- (mingw)选gdb管道启动
- prelaunchpack
- 调试器



