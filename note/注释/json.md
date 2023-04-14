一种轻量级数据交互格式
JSON 语法是 JavaScript 对象表示语法的子集。

-   数据在名称/值对中
-   数据由逗号 , 分隔
-   使用斜杆 \\ 来转义字符
-   大括号 {} 保存对象
-   中括号 \[\] 保存数组，数组可以包含多个对象

格式
```json
[
	{
		"name":"张大山",
		"age":11
	},
	{
		"name":"王大锤",
		"age":15
	},
	{
		"name":"赵小虎",
		"age":14
	}
]
```

# qt(map)ToJson
```cpp
    //定义json变量
    QJsonObject rootObj;
    QMap<QString, QStringList>::iterator iter = data.begin();
    do
    {   //判断key不为空时
        if(!iter.key().isEmpty())
        {   //定义json数组
            QJsonArray array;
            //将
            for(int i = 0; i < iter.value().size(); i++)
                array.append(QJsonValue(iter.value()[i]));
            rootObj.insert(iter.key(), array);
            iter++;
        }
    }while(iter != data.end());//当读到最后一位
    //
    QJsonDocument doc;
    //
    doc.setObject(rootObj);
    //文件写入操作
    QFile file("sheet.json");
    //判断文件存在
    if(file.exists())
        file.remove();
        
    file.open(QFile::ReadWrite);
    file.write(doc.toJson());
    file.close();
```

# pythonToJson
### dumps
`json.dump(json数据, ensure_ascii = 布尔)`
模块： `json`
功能：将pythonstr格式转为json格式
```python
import json
# 相当于列表嵌套字典
data = 
[
	{
		"name":"张大山",
		"age":11
	},
	{
		"name":"王大锤",
		"age":15
	},
	{
		"name":"赵小虎",
		"age":14
	}
]

json_str = json.dumps(data, ensure_ascii=False) 
# ensure_ascii为False时代表不使用ascii码的方法转换字符,而是原字符直接输出
print(json_str)
# output:
# [{"name":"张大山", "age":11}, {"name":"王大锤", "age":15}, {"name":"赵小虎", "age":14}]
```


```python
import json
dictionary = {"name":"张大山", "age":11}
json_str = json.dumps(dictionary, ensure_ascii = False)
print(json_str)
# output:{"name":"张大山", "age":11}
```

### load
`json.load(数据)`
模块：`json`
功能：将json格式转化为pythonstr格式
```python
import json
dictionary = '{"name":"张大山", "age":11}'
l = json.load(dictionary)
# output:{"name":"张大山", "age":11}
```
