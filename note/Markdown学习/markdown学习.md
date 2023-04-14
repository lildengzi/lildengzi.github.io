# $$markdown基础语法$$
* [[#标题用法]]
* [[#字体定义用法]]
* [[#空行]]
* [[#单行代码]]
* [[#分割线用法]]
* [[#列表]]
* [[#引用]]
* [[#超链接]]
* [[#图片]]
* [[#表格]]
* [其他](#Latex)

# 标题用法
用法一
`# 标题名`
井号加空格，最多六级
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题  
###### 六级标题

用法二
`---`
`===`
分割线形式
标题
---
标题
===

用法三
`<h1></h1>`
html格式，支持无限延伸，但是七级以后没有区别
<h1>一级标题</h1>
<h2>二级标题</h2>
<h7>七级标题</h7>


# 字体定义用法
`*字*`
`_字_`
用一二三对$*$`_` 分别代表斜体粗体斜加粗
我不是码神  //原样
**我不是码神**  //粗体
__我不是码神__  //粗体二
*我不是码神*  //斜体
_我不是码神_  //斜体二
***我不是码神***  //斜加粗
_**我不是码神**_  //斜加粗二

`<u>下划线体</u>`
`<ins>下划线</ins>`
<u>下划线</u>
<ins>也是下划线</ins>
`<del>删除线</del>`
`~~删除线~~`
<del>删除线</del>
~~也是删除线~~

使用 `<font>` 的标签的修改文字前景色
`<font color="red">字</font>`
<font color="red">红色</font>
<font color="green">绿色</font>
<font color="blue">蓝色</font>

<font color="rgb(200, 100, 100)">使用 rgb 颜色值</font>

<font color="#FF00BB">使用十六进制颜色值</font>

使用 `style` 属性修改文字的背景色
`<font style="background: red">字</font>`
<font style="background: red">红色</font>
<font style="background: green">绿色</font>
<font style="background: blue">蓝色</font>

<font style="background: rgb(200,100,100)">使用 rgb 颜色值</font>

<font style="background: #FF00BB">使用十六进制颜色值</font>


html格式二，使用 `<font>` 标签的修改字号

这里是默认正文字号

<font size="1">1号字 最小</font>

<font size="2">2号字</font>

<font size="3">3号字 默认</font>

<font size="4">4号字</font>

<font size="5">5号字</font>

<font size="6">6号字</font>

<font size="7">7号字 最大</font>

使用 `<big>` 或 `<small>` 标签的修改字号

这段文字里既包含<big>放大了的文字</big>，也包含<small>缩小了的文字</small>

# 空行
`<br>`

<br>
<br>
<br>

# 单行代码
用\`\`完成
`for i in range(1,10):`

# 代码块
用\`\`\`或\~\~\~成对完成，并附加语言
```c
#include<stdio.h>

int main()
{
	printf("Hello World");
	return 0;
}
```

# 分割线用法
`***`
`---`
`___`
分割区域

---
***
___
html格式
<hr>

```mark-down分割线
***
___
---

html格式
<hr/>
```

# 列表
```markdown
有序列表
1. 
2. 
3. 

无序列表
* 
* 
* 
+ 
+ 
+ 
- 
- 

嵌套
* 第一层
	* 第二层
	* 1
		* 第三层
		* 1
		* 2
			* 第四层
			* 1
			* 2
			* 3
				* 第五层
```

* 第一层
	* 第二层
	* 1
		* 第三层
		* 1
		* 2
			* 第四层
			* 1
			* 2
			* 3
				* 第五层 

# 引用
`>`
区块化
> hahah
> a

嵌套（可无限嵌套）
>> asdf
>> > asf
>> > > sf
>> > > > sadf
>> > > > > sfg
>> > > 
>> > > asd
>> 
>> asdf
>
>sdf

# 超链接
格式:\[链接名\]\(链接\)
[666](#标题)
[bilibili](https://www.bilibili.com/video/BV1qW4y1a7fU/?p=67&spm_id_from=pageDriver&vd_source=2a69587a0c68da0eda79348afcabbd08)
直接使用链接
<https://www.runoob.com>
全局超链接（阅读中可用）
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）
双\[\[\]\]号链接
[[markdown目录]]
  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/

# 图片
`![名](链接)`
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)

# 表格
```mark-down
|||
|--|--|
|||
```
| 定义一 | 定义二 |
| ------ | ------ |
| 1      | 2      |

# Latex
行内显示
`$$`一对
$f(x)=x^2_1+12$
块内显示
`$$$$`两对
$$f(x)=x^2_1+12$$

# 任务列表
`- [ ] 任务`
- [ ] 任务一
- [ ] 任务二
- [ ] 任务三

# 注释
<!-- 正文看不见 -->

# 上下标
`<sub></sub>`
哈哈哈<sub>下标</sub>
`<sup></sup>`
哈哈哈<sup>上标</sup>

# 脚注
`[^脚注]`
这里有一个脚注[^脚注ID1]。

这里有一个脚注[^脚注ID2]。


[^脚注ID1]: 此处是 **脚注** 的 *文本内容*。
[^脚注ID2]: 此处是 **脚注** 的 *文本内容*。

此外markdown还支持许多html内容
