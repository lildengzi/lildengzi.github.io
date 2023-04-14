利用函数指针实现类方法，指针和void\*实现灵活转换和属性使用
```c
const char* ganFan(Student* stu);
Student construct(Student* stu);
void mistruct(Student* stu);

typedef struct Student{
    int m_age; // 成员属性
    const char* (*m_ganFan)(Student* stu); //成员方法
    Student (*m_Construct)(Student* stu); // 构造
    void (*m_Mistruct)(Student* stu); // 析构
}Student;

m_Construct = construct;
m_Mistruct = mistruct;

Student construct(Student* stu)
{
    stu->age = 0;
    stu->m_ganFan = ganFan;
}

void mistruct(Student* stu)
{
    stu->age = NULL;
    free stu->m_ganFan;
    stu->m_ganFan = NULL;
    free stu->m_Construct;
    stu->m_Construct = NULL;
    free stu->m_Mistruct;
    stu->m_Mistruct = NULL;
}

const char* ganFan(Student* stu)
{
    return "干饭";
}

int main()
{
    Student zhangSan = zhangsan.m_Construct(&zhangsan);
    printf("%s %d",zhangsan.m_ganFan(zhangsan), zhangsan.age);
    zhangsan.m_Mistruct(&zhangsan);
    return 0;
}
```