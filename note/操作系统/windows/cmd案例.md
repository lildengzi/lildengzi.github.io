## 使用实践

**使用示例 1：**

在资源管理器卡死时，我们可以使用 `taskkill` 命令重启。将下面命令保存为 `ReExplorer.bat`，在需要时双击即可强制重启资源管理器。或直接打开 CMD 运行命令也可以。

```c
taskkill /f /im explorer.exe & start explorer.exe
```

**使用示例 2：**

迅雷会在后台自动运行 ThunderPlatform.exe 进程和 XLServicePlatform 服务，如果当前没有使用迅雷的话显然没必要。

我们可以将如下代码保存为 `killxl.bat`，并放入【启动】目录，开机后会自动运行该脚本，清除这两个进程。

```c
net stop XLServicePlatform
taskkill /F /im ThunderPlatform.exe
```