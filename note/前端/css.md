# css介绍
CSS:层叠样式表
提供美观性
- sytle内或者单独文件
```ad-important
title:Important
collapse:open
```
```css
p {
    color: red;
}
```
![[前端样式表]]

# css引入方式
- 内嵌式
- 外联式
- 行内式
```ad-example
title:Example
collapse:open
.\my.css

my.html
```
```css
p{
    color: red;
}
```

```html
<!-- 外联式-->
<link rel="stylesheet" href="./my.css">
<!--行内-->
<div style="color: green">这是新标签</div>
```

# 选择器
1. 标签选择器
- 整体性很强
- 无论嵌套多深都能找到对应标签
```ad-example
title:Example
collapse:open
```
```css
p 这是一个标签选择器{
    color: red;
}
```
对应html标签
```html
<p>哈哈哈</p>
```


2. 类选择器
- 标签上需要有类选择器，这样样式才能生效
- 由数字下划线中划线字母组成，不能以数字或者中划线开头
- 一标签可有多个类名，类名之间以空格隔开
- 类名可重复，一个类选择器可以同时选中多个标签
```ad-example
title:Example
collapse:open
```
```css
.class 这是一个类选择器{
    color: red;
}

.size 这是一个类选择器{
    color: red;
}
```
对应html标签
```html
<div class="class">哈哈哈</div>
<div class="class size">哈哈哈</div>
```


3. id选择器
- 所有标签都有id属性
- id属性类似身份证号码
- 一个标签只能有一个id属性
- 一个id只能选中一个标签
```ad-example
title:Example
collapse:open
```
```css
#red 这是一个id选择器{
    color: red;
}

#size 这是一个id选择器{
    color: red;
}
```
对应html标签
```ad-warning
title:warning
collapse:open
```
```html
<div id="red">哈哈哈</div>
<p id="red">哈哈哈</p>
```
网页不会对同时使用多个id的情况报错，但是这么做会有很大的问题

4. 通配符选择器
- 极少使用
- 选中所有标签
```ad-example
title:Example
collapse:open
```
```css
* {
    color: red;
}

```
对应所有html标签
