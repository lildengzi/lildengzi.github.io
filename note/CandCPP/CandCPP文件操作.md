# C语言文件操作
C语言操作文件的主要函数和类型:
`fread(void *_Buffer, size_t _ElementSize, size_t _ElementCount, FILE *_Stream);` 读取操作
`fwrite(void *_Buffer, size_t _ElementSize, size_t _ElementCount, FILE *_Stream);` 写入操作
`FILE *fp;` 光标指针:创建一个在文件内的伪光标，默认在文件首位

## 读取文件
1. 创建光标指针
`FILE *fp = NULL;`
2. 打开文件 (并赋值给光标指针)
`fp = fopen(文件名, 读写方式);`
3. 读取数据
`fwrite(void *_Buffer, size_t _ElementSize, size_t _ElementCount, FILE *_Stream);`
4. 关闭文件
`fclose(文件名, );`
## 写入文件


# C++文件操作
C++操作文件的三大类:
ofstream:写操作
istream:读操作
fstream:读写操作

## 读写文本文件
1. 包含头文件
`#include<fstream>`
2. 创建流对象
`ifstream ifs;`
`ofstream ofs;`
3. 打开文件
`ifs.open("文件路径", "打开方式");`
`ofs.open("文件路径", "打开方式");`
4. 写入
四种读取方式
`ofs << "写入数据";`
5. 关闭文件
`ifs.close();`
`ofs.close();`

文件打开方式:
| 打开方式      | 解释                     |
| ------------- | ------------------------ |
| `ios::in`     | 为读文件而打开文件       |
| `ios::on`     | 为写文件而打开文件       |
| `ios::ate`    | 初始位置:文件尾          |
| `ios::app`    | 追加写文件               |
| `ios::trnuc`  | 如果文件存在先删除再创建 |
| `ios::binary` | 二进制方式               | 
注:文件打开方式可配合使用
例:用二进制写文件`ios::out | ios::binary`

```ad-example
title:Example
collapse:open
```
```cpp
#include<fstream>

int main()
{
    ofstream ofs;
    ofs.open("test.txt", ios::out);
    
    ofs << "666" << endl;
    ofs << "114514" << endl;
    ofs << "18" << endl;
    
    ofs.close();
    return 0;
}

//test.txt
//666
//114514
//18
```

```ad-example
title:Example2
collapse:open
```
```cpp
//test.txt
//666
//114514
//18

#include<fstream>
#include<string>
int main()
{
    ifstream ifs;
    ifs.open("test.txt", ios::in);
    
    if(!ifs.is_open())
    {
        cout << fail << endl;
        return;
    }
    
    //四种读数据方法
    //1.
    char buf[1024] = {0};
    while(ifs >> buf){cout << buf << endl;}//空格会被当回车
    
    //2.
    char buf[1024] = {0};
    while(ifs.getline(buf, sizeof(buf)/*1024*/)){cout << buf << endl;}
    
    //3.
    string buf;
    while (getline(ifs, buf)){cout << buf << endl;}
    
    //4.(不推荐)
    char c;
    while((c = ifs.get()) != EOF){cout << c << endl;}//EOF:文件尾部
    
    ifs.close();
    return 0;
}


```

```ad-example
title:Better
collapse:open
`ofstream ofs("test.txt", ios::out | ios::binary);`
```

```ad-summary
title:Summary2
collapse:open
- 利用`is_open()`判断是否成功打开文件
- 推荐用第二第三种
```

## 读写二进制文件
二进制方式写文件
函数原型:`ostream write(const char* buffer, int len);`
参数解释:字符buffer指向内存中一段存储空间。len是读写的字节数
二进制方式读文件
函数原型:`istream read(char *buffer, int len);`
```ad-example
title:Example
collapse:open
```
```cpp
#include<iostream>
#include<fstream>

class Person
{
public:
    
    char m_name[64];
    int m_age;
};

int main()
{
    ofstream ofs("test.txt", ios::out | ios::binary);
    Person p = {"张三", 18};
    ofs.write((const char *)&p, sizeof(Person));
    ofs.close();
    return 0;
}

//test.txt//乱码
//65edhy6'3;w.d,gm5
```

```ad-example
title:Example
collapse:open
```
```cpp
#include<iostream>
#include<fstream>

class Person
{
public:
    char m_name[64];
    int m_age;
}

int main()
{
    ifstream ifs;
    ifs.open("person.txt", ios::in | ios::binary);
    if(!ifs.is_open())
    {
        cout << "error" << endl;
        return;
    }

    Person p;
    ifs.read((char*)&p, sizeof(Person));
    
    cout << m_name << " " << m_age << endl;
    ifs.close();
    return 0;
}
```
