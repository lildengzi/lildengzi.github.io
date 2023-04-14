# 容器
container
跟镜像形成类似类和对象的关系
容器可以进行各种操作
镜像文件通过`docker run`命令分配新容器
就可以开始运行

# 镜像
image
相当于一个root文件系统
配置好的dockerfile文件执行`docker build`变成镜像

# 定制镜像文件
dockerfile
镜像文件就像是菜单
菜->配置文件
```ad-example
title:Example
collapse:open
# dockerfile
Debian11.0

MySQL5.7

Go1.19
```

# dockerhub
镜像hub类似github
推
`docker push`
拉
`docker pull`

# 配置docker镜像加速器
- ustc:<https://docker.mirrors.ustc.edu.cn/>
教程:[Docker 配置国内镜像加速器](https://blog.csdn.net/elong490/article/details/114627211)

# linux类
默认自动开启
`systemctl enable docker`
默认开关
`systemctl [start | restart | stop] docker`

# docker命令
## 镜像相关
查看本地镜像
`docker images`
查看本地镜像id
`docker images -q`
删除镜像
`docker rmi id名`

```ad-warning
title:warning
collapse:open
删除所有镜像
```
```
docker rmi `docker images -q`
```

网络查找镜像
`docker search`

## 容器相关
```ad-important
title:Important
collapse:open
建立容器
```
`docker run -it --name=container1 centos:7`
- 选项:-it表示暂时创建容器退出销毁
- --name:为容器设置名字
- 后面添加想要的内容

`docker run -id --name=container2 ...`
- -i:保持容器运行。通常与-t使用,容器创建后自动进入容器，退出后，容器自动关闭
- -t:为容器分配伪输入终端，通常与-i同时使用
- -d:后台运行容器。需要使用docker exec进入容器，退出后，容器不会关闭
- -it:交互式容器。-id:守护式容器
- --name:

查看容器
`docker ps`
查看所有容器
`docker ps -a`
删除容器(可能需要先删除)
`docker rm 容器名`
进入容器
`docker exec 参数`
停止容器
`docker stop 容器名
启动容器
`docker start 容器名`
查看容器信息
`docker inspect 容器名`

###### 待补充

# 数据卷
- 数据卷是宿主机的一个目录或文件
- 当前容器目录和数据卷目录同步后，对方修改会立刻同步
- 一个数据卷可以被多个容器同时挂载
- 一个容器也可以挂载多个数据卷
```ad-important
title:Important
collapse:open
配置数据卷
```
`docker run ... -v 宿主机目录(文件):容器内目录(文件)`
- 注意事项:
1. 目录必须是绝对路径
2. 如果目录不存在会自动创建
3. 可挂载多个数据卷

# docker创建容器实例
[[docker部署实例]]

# dockerfile镜像原理
操作系统最重要的就是文件系统
docker镜像为文件系统做了封装
本质是个分层系统
查看镜像信息
`docker inspect tomcat:latest`

## Docker镜像制作
1. 容器转镜像
`docker commit 容器id 镜像名称:版本号`
