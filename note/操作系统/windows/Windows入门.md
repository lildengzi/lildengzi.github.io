- [[cmd案例]]
- [[windows快捷键]]

## powershell
cmd是powershell的子集

# cmd跟powershell
说明
- 不区分大小写
- 按上下键可查看历史命令
- Tab自动补全
- /?或/help查看命令，代表可选的\[\]
- 命令基本格式  `命令 参数列表`

## 基本命令
| 命令  | 功能 | 举例        |
| ----- | ---- | ----------- |
| `echo`  | 显示 |             |
| `pause` | 暂停 | pause > nul |
| `cls`   | 清屏 | 退出        | 

## 常用命令
| 命令     | 功能          | 举例                        |
| -------- | ------------- | --------------------------- |
| `type`     | 显示文件内容  | type 1.txt                  |
| `find`     | 查找字符串    | find "abc" 2.txt            |
| `fc`       | 比较文件内容  | fc 1.txt 2.txt              |
| `date`     | 显示/修改日期 | date \[/T         \| date\] |
| `time`     | 显示/修改时间 | time \[/T         \| date\] |
| `ping`     | 网络连接测试  | ping ww.baidu.com           |
| `ipconfig` | TCP/IP信息    |                             |
| `set /a`   | 计算表达式    | set /a 6%4                  |
| `shutdown` | 关机          | shutdown /s /t 60           | 

## 多命令
| 命令 | 功能                                           | 举例 |
| ---- | ---------------------------------------------- | ---- |
| &    | 按顺序执行命令，不管是否成功                   |      |
| &&   | 按顺序执行命令，如果命令失败则停止执行后续命令 |      |
| \|\| | 按顺序执行命令，如果命令成功则停止执行后续命令 |      |

## 重定向
| 命令 | 功能 | 举例 |
| ---- | ---- | ---- |
| >    | 输出重定向     |      |
| >>   | 追加重定向     |      |
| <     | 输入重定向     |      |

## 管道
前一个命令输出为后一个命令的输入

## 文件操作命令
路径分隔符`\`
当前目录`.`
上级目录`..`

| 命令        | 功能               | 举例                |
| ----------- | ------------------ | ------------------- |
| `dir`         | 显示文件夹的内容   | dir /A              |
| `tree`        | 显示文件夹树形结构 | tree /F             |
| `盘符:`       | 进入指定磁盘       | c:                  |
| `cd`          | 目录               |                     |
| `mkdir`或`md`   | 目录               |                     |
| `rmdir`或`rd`   | 目录               |                     |
| `del`         | 删除文件           | del 1.txt           |
| `rename`或`ren` | 重命名             | rename a.txt        |
| `copy`        | 复制文件           | copy a\\1.txt 2.txt |
| `move`        | 移动文件/重命名    | move a\\1.txt 2.txt |

## 批处理
```powershell
@echo off
......
pause
```

## 运行方式
- 双击运行
- cmd运行（可以传参）

## 变量
```powershell
# 设置变量
set 变量名 = 变量
set /a 变量名 = 表达式

# 取消变量
set 变量名=

# 打印变量
set 变量名

# 列出变量
set

# 引用变量
%变量名%

# 输入变量值
set /p 变量名 = 提示文字
```

## 预定义变量
| 变量名       | 值                 |
| ------------ | ------------------ |
| `%cd%`         | 当前目录           |
| `%date%`       | 当前日期           |
| `%time%`       | 当前时间           |
| `%random%`     | 0~32367            |
| `%path%`       | 环境变量           |
| `%errorlevel%` | 上一个命令的返回值 |
| `%0、%1、%2`   | 参数。%0表示命令名 | 

## 调用
`call 可执行文件 [参数列表]`

## 条件
```powershell
if [not] 条件 (
    语句块
)else (
    语句块
)

# 条件：
errorlevel number # 上一个程序返回值大于等于number则为true
string1 == string2 # 相同则为true
exist filename # 文件存在为true
[/I] string1 compare-op string2 # 比较数值或字符串
    # /I 忽略大小写
    # compare-op包括
    # equ 等于
    # neq 不等于
    # lss 小于
    # leq 小于等于
    # gtr 大于
    # geq 大于等于
defined variable # 如果定义了变量则为true
```

## 跳转
```powershell
goto label
:label
```

## 循环
```powershell
for %%i in (set) do (
    语句块
)

# 循环变量用%%指定，只能是单字母
# set表示文件集合（可为空文件），元素间以逗号或空格分隔，支持通配符

for %%i in (*.*) do (echo %%i) # 显示当前目录所有文件文件名
for %%i
```

### 循环扩展
```powershell
# 只遍历文件夹
for /d %%i in (set) do 
# 例
for /d %%i in (*) do
# 打印当前目录所有文件夹名

# 
```

###### 待补充

## 通配符(正则)
`?`单字符
`*`任意字符


## CMD 常用命令总结

**小技巧：**

-   输入 `help`，查看帮助；
-   Tab 键，自动补全；
-   上/下方向键，查看历史命令；
-   右键窗口标题栏 -> 属性，可以修改外观样式。

### 关机、重启、注销、休眠、定时

-   关机：`shutdown /s`
-   重启：`shutdown /r`
-   注销：`shutdown /l`
-   休眠：`shutdown /h /f`
-   取消关机：`shutdown /a`
-   定时关机：`shutdown /s /t 3600`（3600 秒后关机）

### 目录操作

**切换目录，进入指定文件夹：**

-   切换磁盘：`d:`（进入 d 盘）
-   切换磁盘和目录：`cd /d d:/test`（进入 d 盘 test 文件夹）
-   进入文件夹：`cd \test1\test2`（进入 test2 文件夹）
-   返回根目录：`cd \`
-   回到上级目录：`cd ..`
-   新建文件夹：`md test`

**显示目录内容：**

-   显示目录中文件列表：`dir`
-   显示目录结构：`tree d:\test`（d 盘 test 目录）
-   显示当前目录位置：`cd`
-   显示指定磁盘的当前目录位置：`cd d:`

### 网络操作

-   延迟和丢包率：`ping ip/域名`
-   Ping 测试 5 次：`ping ip/域名 -n 5`
-   清除本地 DNS 缓存：`ipconfig /flushdns`
-   路由追踪：`tracert ip/域名`

### 进程/服务操作

**进程管理：**

-   显示当前正在运行的进程：`tasklist`
-   运行程序或命令：`start 程序名`
-   结束进程，按名称：`taskkill /im notepad.exe`（关闭记事本）
-   结束进程，按 PID：`taskkill /pid 1234`（关闭 PID 为 1234 的进程）

**服务管理：**

-   显示当前正在运行的服务：`net start`
-   启动指定服务：`net start 服务名`
-   停止指定服务：`net stop 服务名`

