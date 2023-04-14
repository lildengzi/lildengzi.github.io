# linux目录结构
window中盘符有C、D盘
路径层级用`\`表示
Linux只有一个根目录`/`,所有文件都在它下面
路径层级用`/`表示

# linux快捷键
| 功能                     | 快捷键                | 描述                                                   |
| ------------------------ | --------------------- | ------------------------------------------------------ |
| 强制停止/重输            | ctrl+c                | 强制停止linux某些程序的运行/退出当前命令输入，重新输入 |
| 退出/登出                | ctrl+d                | 退出账户/退出程序(vi/vim不适用)                        |
| 根据输入内容匹配历史命令 | ctrl+r                |                                                        |
| 跳到开头                 | ctrl+a                |                                                        |
| 跳到结尾                 | ctrl+e                |                                                        |
| 左跳一个单词             | ctrl+ <-              |                                                        |
| 右跳一个单词             | ctrl+ ->              |                                                        |
| 清空终端内容             | ctrl+l                |                                                        |
| 复制                     | ctrl+Shift+c          |                                                        |
| 粘贴                     | ctrl+Shift+v          |                                                        |
| 切换命令行/图形          | ctrl + Alt + F1~F6/F7 | f1~f6命令行f7图形(ubuntu)                                                       |

# 权限
dddd
## root
root用户(超级管理员)
拥有最大系统操作权限，而普通用户在许多地方的权限都是受限的
`su [-] [用户名]`
su:switch user
- \-符号是可选的表示是否在切换用户后加载环境变量
- 参数:用户名，省略就是默认root
- exit退回上一个用
如:`su -root`

或者
`sudo 其他命令`
暂时用root权限

## 用户和用户组
linux权限管控级别
- 针对用户的权限控制
- 针对用户组的权限控制
以下需要root:
```shell
# 创建
groupadd 用户组名

# 删除
groupdel 用户组名

# 创建用户
useradd [-g -d] 用户名
# 选项：-g指定用户组，默认创建同名组并加入
# 选项：-d指定用户HOME路径，默认在/home/用户名

# 删除用户
userdel [-r] 用户名
# 选项：-r，删除用户及home目录，不用-r,home保留

# 查看用户组
id [用户名]
# 默认查看自身

# 修改用户组
usermod -aG 用户组 用户名
# 指定用户加入用户组

# 查看用户
getent passwd
# 用户组
getent group
```
getent用户七项信息，组信息:
用户名:密码(x):用户ID:组ID:描述信息(xx):HOME目录:执行终端(xx默认bash)
组名称:组认证(x):组ID

## 认识权限信息
`ls -l`显示权限细节
1. 左边`-rw-`，表示文件、文件夹权限控制信息
2. 中间`r--`，表示文件、文件夹所属用户
3. 右边`r--`，表示文件、文件夹所属用户组
![[Pasted image 20230204162642.png]]
- 序号一:十个槽位
![[10槽代表信息]]
举例:drwxr-xr-x,表示:
- d表示这是一个文件夹
- 所属用户/用户组/其他权限中:\-为无权限,r为读,w为写,x为执行权限(将文件作为程序执行)

## 文件/文件夹权限
`chmod [-R] 权限 文件或文件夹`
注:只有文件、文件夹所属用户或root权限可以修改
- -R:对文件夹内的全部内容应用同样的操作
```ad-example
title:Example1
collapse:open
`chmod u=rwx,g=rx,o=x hello.txt`将文件权限修改为:`rwxr-x--x`
```

```ad-example
title:Example2
collapse:open
`chmod -R u=rwx,g=rx,o=x test`文件夹test全部内容权限设置为:`rwxr-x--x`
```
- ugo分别表示user,group,other

## 用户/用户组权限
`chown [-R] [用户][:][用户组] 文件或文件夹`
```ad-example
title:Example1
collapse:open
`chown root hello.txt`,将hello.txt所属用户改为root

`chown :root hello.txt`,将hello.txt所属用户组改为root

`chown root:test hello.txt`,将hello.txt所属用户改为root,用户组改为test

`chown -R root hello.txt`,将hello.txt所属用户改为root并对文件夹内容应用同样规则
```

## 权限的数字序号记法
- 0:---
- ***1:--x***
- ***2:-w-***
- 3:-wx
- ***4:r--***
- 5:r-x
- 6:rw-
- 7:rwx

# 命令
DDDD
全局指令
| 功能                                   | 快捷键      | 描述 |
| -------------------------------------- | ----------- | ---- |
| 查看历史命令                           | `history`   |      |
| 执行上一次匹配前缀命令                 | `!命令前缀` |      |
| 清屏                                   | `clear`     |      |
| 跟踪进程                               | `tail`      |      |
| 列出目录及文件名                       | `ls`        |      |
| 切换目录                               | `cd`        |      |
| 显示目前的目录                         | `pwd`       |      |
| 创建一个新的目录                       | `mkdir`     |      |
| 删除一个空的目录                       | `rmdir`     |      |
| 复制文件或目录                         | `cp`        |      |
| 删除文件或目录                         | `rm`        |      |
| 移动文件与目录，或修改文件与目录的名称 | `mv`        |      |
| 解压或压缩                             | `tar`       |      |
| 关机                                   | `shutdown`    |      |
| 磁盘空间操作                           | `dudf/df`     |      |
| 显示文件                               | `cat`            |      |

你可以使用 `man [命令]`、`命令 --help` 来查看各个命令的使用文档，如 ：man cp。

## 基础格式
`command [-options] [parameter]`
- command 命令本身
- options \[可选/非必填\]命令的选项，可通过选项控制命令的行为细节
- parameter\[可选/非必填\]命令的参数，多数用于命令的指向目标

## 命令行
DDDD

## vi/vim编辑器
[[vim]]


## 系统控制软件启动与关闭
`systemctl start | stop | status | enable | dusable 服务名`
- start:开
- stop:关
- status:查看状态
- enable:开机自启
- disable:取消开机自启

系统内置
- NetworkManager,主网服务
- network,副网服务
- firewalld,防火墙服务
- sshd,ssh服务

## 软连接
类似windows的快捷方式
`ln -s 参1 参2`
- \-s选项,创建软连接
- 参1：被链
- 参2：要链接的目的地

## 日期时间
`date [-d] [+格式化字符串]`
- %Y 年
- %y 年份后两位数
- %m 月
- %d 日
- %H 时
- %M 分
- %S 秒
- %s 自1970至现在的秒数

## 主机名
dddd
`hostname`
`hostnamectl set-hostname`

# 网络请求和下载

### ping
`ping [-c num] ip或映射`
检查ip地址的链接是否可连
- 选项:-c检查的次数，默认无数次
- 映射可以是网站，主机名等

### wget
`wget [-b] url`
命令行内下载网络文件
- -b:后台下载，会将日志写到wget-logn
- url:下载链接

### curl
`curl [-0] url`
发送http请求、下载文件、获取信息等
- -O:用于下载,默认只是请求

## 包/压缩
打包
`tar -cvf 打包成功的文件名 被打包的文件1 被打包的文件2`
解包
`tar -xvf 解压包`
打包+压缩
`tar -zcvf xxxx[.tar.gz | .tgz]`
解包+解压
`tar -zxvf xxxx[.tar.gz | .tgz] -C 解压目录`

## 软件安装
linux命令行安装
## yum/apt
yum管理包
`yum [-y] [install | remove | search] 软件名称`
apt管理包
`apt [-y] [install | remove | search] 软件名称`
- 选项:-y,自动确认,无需手动安装或卸载
- install:安装
- remove:卸载
- search:搜索
yum命令需要root,sudo提权
yum需要联网(废话)

CentOS(redhat类):`.rpm`
Ubuntu(Debian类):`.deb`

## 端口初识
nmap
`nmap ip地址`
查看ip地址的端口被占用多少

netstat
`netstat -anp | grep 端口号`
查看本机指定端口的占用情况

###### 待补充

# 进程管理

## 查看进程
`ps [-e -f]`
- 选项-e,显示全部
- -f:格式化展示

进程所属
- UID:用户ID
- PID:进程号ID
- PPID:进程的父ID
- C:CPU占用率
- STIME:进程启用时间
- TTY:启用此进程的终端序号
- TIME:进程占用CPU的时间
- CMD:进程对应的启动路径/启动命令

## 关闭进程
`kill [-9] 进程ID`
- 选项-9:强制关闭，但能否关闭还要看进程处理机制

## 主机状态监控
查看系统资源占用
`top`
第一行
`top - 06:45:48 up 13 min,  3 users,  load average: 0.00, 0.01, 0.03`
top:命令名称,xx:xx:xx系统时间, up xx min:启动6分钟, x users: x 个用户登录, load average: 1、5、15分钟负载
`Tasks: 220 total,   1 running, 219 sleeping,   0 stopped,   0 zombie`
Task:xxx 进程, x子进程正运行, xxx 进程睡眠, x 停止进程, x 僵尸进程
`%Cpu(s):  0.0 us,  0.1 sy,  0.0 ni, 99.9 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st`
%Cpu(s): **us:用户cpu使用率, sy:系统CPU使用率**, ni:高优先级进程占用Cpu时间百分比, id:空闲CPU率, wa:IO等待cpu占用率, hi:cpu硬件中断率, si:cpu软件中断率, st:强制等待占用cpu率
`KiB Mem :  3861520 total,  2349032 free,   707056 used,   805432 buff/cache`
物理内存    总量     空闲    使用    buff和cache占用
`KiB Swap:  2097148 total,  2097148 free,        0 used.  2825968 avail Mem
虚拟内存    总量     空闲    使用    buff和cache占用
具体进程`
![[Linux进程]]
- PID:进程id
- USER:进程所属用户
- PR:进程优先级，越小越高
- NI:负值表示高优先级，正表示低优先级
- VIRT:进程使用虚拟内存，单位kb
- RES:进程使用物理内存，单位kb
- SHR:进程使用共享内存，单位kb
- S:进程状态
- %CPU:占用率
- %MEM:占用率
- TIME+:进程使用cpu时间统计，单位10毫秒
- COMMAND:进程命令或名称或文件路径

  选项:
  - -p:只显示某个进程
  - -d:设置刷新时间，默认5~秒
  - -c:显示产生进程的完整命令，默认进程名
  - -n:指定刷新次数后退出，默认不退
  - -b:非交互全屏运行
  - -i:不显示任何闲置/无用进程
  - -u:查找特定用户启动进程

交互选项:
- ?/h:显示在top当中可以输入的命令
- P:以CPU的使用资源排序显示
- M:以内存的使用资源排序显示
- N:以pid排序显示
- T:由进程使用的时间累计排序显示
- k:给某一个pid一个信号,可以用来杀死进程(9)
- r:给某个pid重新定制一个nice值（即优先级)
- q:退出top（用ctrl+c也可以退出top）
###### 待补充

## 磁盘信息监控
`df [-h]`
查看磁盘使用情况
-h,以更加人性化的单位展示

`iostat [-x] [num1] [num2]`
- 选项:-x:显示更多信息
- num1刷新间隔
- num2刷新几次

## 内存信息监控
`free [-h]`
内存使用率

## 网络信息监控
sar
查看网络情况

###### 待补充

## 环境变量

# 文件上传下载
需要安装:`yum -y install lrzsz`
上传、下载    文件传输
`rz、sz`

