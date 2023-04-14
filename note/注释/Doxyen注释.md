[[注释规范]]

## 介绍
> 1.Doxygen并不处理所有的注释，doxygen重点关注与程序结构有关的注释，比如：文件、类、结构、函数、全局变量、宏等注释，**而忽略函数内局部变量、代码等的注释**。  
> 2.注释应写在对应的函数或变量前面。JavaDoc风格下，自动会把第一个句号"."前的文本作为简要注释，后面的为详细注释。你也可以用空行把简要注释和详细注释分开。注意要设置JAVADOC_AUTOBRIEF或者QT_AUTOBRIEF设为YES。  
> 3.先从文件开始注释，然后是所在文件的全局函数、结构体、枚举变量、命名空间→命名空间中的类→成员函数和成员变量。  
> 4.Doxygen无法为DLL中定义的类导出文档。

标准Doxyen注释块
Java/C/C++风格
```C
/**
* Description
*/
```

qt风格
```cpp
/*!
* Description
*
*/
```

纯C++风格
```cpp
///
/// Description
///
```

## 项目注释
```c
@exception \<exception-object\> {exception description} 对一个异常对象进行注释。

@warning {warning message } 一些需要注意的事情

@todo { things to be done } 对将要做的事情进行注释，链接到所有TODO 汇总的TODO 列表

@bug 缺陷，链接到所有缺陷汇总的缺陷列表

@see {comment with reference to other items } 一段包含其他部分引用的注释，中间包含对其他代码项的名称，自动产生对其的引用链接。

@relates \<name\> 通常用做把非成员函数的注释文档包含在类的说明文档中。

@since {text} 通常用来说明从什么版本、时间写此部分代码。

@pre { description of the precondition } 用来说明代码项的前提条件。

@post { description of the postcondition } 用来说明代码项之后的使用条件。

@code 在注释中开始说明一段代码，直到@endcode命令。

@endcode 注释中代码段的结束。

@code .. @endcode 包含一段代码

@addtogroup 添加到一个组。

@brief 概要信息

@deprecated 已废弃函数

@details  详细描述

@note 开始一个段落，用来描述一些注意事项

@par 开始一个段落，段落名称描述由你自己指定

@param 标记一个参数的意义

@param[in out] in是不修改的引用传递 out 是可修改

@fn 函数说明

@ingroup 加入到一个组

@return 描述返回意义

@retval 描述返回值意义

@include 包含文件

@var、@enum、@struct、@class 对变量、美剧、结构体、类等进行标注
```

```c
@file
档案的批注说明。

@author
作者的信息

@brief
用于class 或function的批注中，后面为class 或function的简易说明。

@param
格式为

@param arg_name 参数说明
主要用于函式说明中，后面接参数的名字，然后再接关于该参数的说明。\

@return
后面接函数传回值的说明。用于function的批注中。说明该函数的传回值。

@retval
格式为

@retval value 传回值说明
```

## 例子
```c
/**@mainpage  春节12响固件程序
* <table>
* <tr><th>Project  <td>dozen_bangs
* <tr><th>Author   <td>李长条
* <tr><th>Source   <td>D:\workspace\demo_project\examples\dozen_bangs\dozen_bangs-doxygen
* </table>
* @section   项目详细描述
* 不让地球继续流浪。
*
* @section   功能描述  
* -# 破坏
* 
* @section   用法描述 
* -# 用顶针
* 
* @section   固件更新 
* <table>
* <tr><th>Date        <th>H_Version  <th>S_Version  <th>Author    <th>Description  </tr>
* <tr><td>2018/08/17  <td>1.0    <td>S02010041808171   <td>wanghuan  <td>创建初始版本 </tr>
* <tr><td>2019/06/24  <td>1.3    <td>S02010041906241   <td>wanghuan  <td>
* -# 无
* </tr>
* </table>
**********************************************************************************
*/
```

文件注释
```c
/**@file  main.c
* @brief       项目主函数文件
* @details  主要包含协议应用栈程序框架，main函数入口
* @author      李长条
* @date        2018-8-17
* @version     V1.0
* @copyright    Copyright (c) 2050
**********************************************************************************
* @attention
* SDK版本：v2050.0.0
* @par 修改日志:
* <table>
* <tr><th>Date        <th>Version  <th>Author    <th>Description
* <tr><td>2010/02/17  <td>1.0      <td>wanghuan  <td>创建初始版本
* </table>
*
**********************************************************************************
*/
```

函数体注释
```C
/**@brief 注册函数
* @param[in]  *data                上报数据指针
* @param[in]  len                上报数据长度
* @param[in]  report_fail_try_type    上报失败重新注册类型 \n
* @ref NB_REPFAIL_REG_TRY 出错立即重试    \n
* @ref NB_REPFAIL_REG_DELAY_TRY 出错延缓重试，在延迟期间如果正常则重新延缓，适用于高频率上报（上报失败重新注册超时15min） \n
* @ref NB_REPFAIL_REG_NO_TRY 出错不重试
* @return  函数执行结果
* - NB_NOTIFY_SUCCESS      上报成功
* - NB_NOTIFY_FAIL        上报失败
* - NB_IOT_REGIST_FAILED 注册失败返回
* - Others  其他错误
* @par 示例:
* @code
*    int ret = register_all(&data, len, RT_TYPE_T1)
* @endcode
* @see :: xx表
*/
```

模块注释
```c
/**@enum msg_types
* @brief 定义驱动上报应用消息类型
*/

/**@struct info
* @brief 信息结构体 \n
* 定义存储的信息
*/
    typedef struct 结构体名字
    {
       成员1, ///< 简要说明文字 */ 如果不加<，则会认为是成员2的注释
       成员2, ///< 简要说明文字 
       成员3, ///< 简要说明文字 
    }结构体别名；

```

模块注释
```C
/**@defgroup bsp_me3616 Bsp me3616 driver module.
* @{
* @ingroup bsp_drivers
* @brief 使用该驱动之前，先进行驱动句柄的实例注册. \n
* ME3616驱动支持云平台Onenet和OceanConnect \n
* 当使能GPS驱动使能时，支持GPS操作 
*/


/** @} bsp_me3616*/

```

分组注释
```C
/**@name 协议栈用全局参数
* @brief 协议栈参数配置（广播、连接、安全等）相关宏定义，协议栈各模块句柄等全局参数
* @{
*/

/** @} 协议栈用全局参数 */
```
