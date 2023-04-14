# mysql部署
- 容器不能和外部网络通信
- 外部机器和宿主机可以直接通信
- 宿主机和容器可以直接通信
- 端口映射:当容器中的网络服务需要被外部机器访问时，可以将容器中端口映射到宿主机端口，简介提供访问服务

```ad-example
title:Example
collapse:open
## 部署mysql
```
搜索mysql
`docker search mysql`
拉取镜像
`docker pull mysql`
创建并进入目录
`mkdir ~/mysql`
`cd ~/mysql`
配置容器
```shell
docker run -id \ 
-p 3307:3306 \ # 创建端口映射
--name=c_mysql \ # 名字随便起
-v $PWD/conf:/etc/mysql/conf.d \ # 配置环境变量映射到宿主机
-v $PWD/logs:/logs \ # 同上
-v $PWD/data:/var/lib/mysql \ # 同上
-e MYSQL_ROOT_PASSWORD=123456 \ # 密码随便配
mysql
```

进入容器指令
`docker exec -it c_mysql /bin/bash`

```ad-example
title:Example2
collapse:open
# 部署tomcat
```
搜索mysql
`docker search tomcat`
拉取镜像
`docker pull tomcat`
创建并进入目录
`mkdir ~/tomcat`
`cd ~/tomcat`
配置容器
```shell
docker run -id --name=c_tomcat \
-p 8080:8080 \
-v $PWD:/usr/local/tomcat/webapps \
tomcat
```
配置好后tomcat文件夹就可以放置html文件网站

```ad-example
title:Example3
collapse:open
# 部署Nginx
```
搜索
拉取
创建并进入目录
配置容器
```shell
docker run -id --name=c_nginx \
-p 80:80 \
-v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf \
-v $PWD/logs:/var/log/nginx \
-v $PWD/html:/usr/share/nginx/html \
nginx
```

