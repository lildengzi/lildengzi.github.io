# 多态案例
```ad-example
title:Example
collapse:open
```
```cpp
class Animal
{
public:
    virtual void speak()//虚函数    //多态核心1virtual 地址晚绑定——运行阶段绑定
        {cout << "动物在说话" << endl;}
};

class Cat:public Animal
{
public:
    void speak()
        {cout << "小猫在说话" << endl;}//地址早绑定——编译阶段绑定
};

class Dog:public Animal
{
public:
    void speak()
        {cout << "小狗在说话" << endl;}
};

void doSpeak(Animal &animal)
    {animal.speak();}///多态核心2Animal &animal = [cat/dog];

int main()
{
    Cat cat;
    Dog dog;
    doSpeak(cat);
    dospeak(dog);
    //output:小猫在说话
    //小狗在说话
    return 0;
}
```


```ad-example
title:不利用多态
collapse:open
设计计算器
```
```cpp
#include<iostream>
enum TYPE
{
    ADD,
    DEC,
    MULT,
    DIV
};

class Calculator
{
public:
    int getResult(std::string oper)
    {
        switch(oper)
        {
        case '+':return m_num1 + m_num2;
        case '-':return m_num1 - m_num2;
        case '*':return m_num1 * m_num2;
        case '/':return m_num1 / m_num2;
        default:break;
        }
    }

private:
    int m_num1, m_num2;
};

int main()
{
    Calculator c;
    c.m_num1 = 10;
    c.m_num2 = 10;
    cout << c.m_num1 << '+' << c.m_num2 << '=' << c.getResult("+") << endl;
    //output:10+10=20
    return 0;
}
```

```ad-example
title:利用多态
collapse:open
设计计算器
```
```cpp
#include <iostream>

class AbstractCalculator
{
public:
    virtual int getResult(){return 0;}
    int m_num1;
    int m_num2;
};

class addCalculator :public AbstractCalculator
{
public:
    int getResult(){return m_num1 + m_num2;}
    
};

class subCalculator :public AbstractCalculator
{
public:
    int getResult(){return m_num1 - m_num2;}
    
};

class multCalculator :public AbstractCalculator
{
public:
    int getResult(){return m_num1 * m_num2;}
    
};

class divCalculator :public AbstractCalculator
{
public:
    int getResult(){return m_num1 / m_num2;}
    
};

int main()
{
    AbstractCalculator *abc = new addCalculator;
    abc->m_num1 = 100;
    abc->m_num2 = 100;
    cout << abc->getResult() << endl;
    delete abc;
    
    abc = new subCalculator;
    abc->m_num1 = 100;
    abc->m_num2 = 100;
    cout << abc->getResult() << endl;
    delete abc;
    
    abc = new multCalculator;
    abc->m_num1 = 100;
    abc->m_num2 = 100;
    cout << abc->getResult() << endl;
    delete abc;
    
    abc = new divCalculator;
    abc->m_num1 = 100;
    abc->m_num2 = 100;
    cout << abc->getResult() << endl;
    delete abc;
    /*output:
    200
    0
    10000
    1
    */
}
```

```ad-example
title:Example
collapse:open
制作饮品
```
```cpp
class AbstractDrinking
{
public:
    virtual void boil() = 0; /// 煮水
    virtual void brew() = 0; /// 冲泡
    virtual void pourInCup() = 0; /// 倒入杯中
    virtual void putSomething() = 0; /// 加入辅料
    void makeDrink()
    {
        boil();
        brew();
        pourInCup();
        putSomething();
    }
};

class Coffee: public AbstractDrinking
{
public:
    void boil() /// 煮水
    {
        cout << "煮农夫山泉" << endl;
    }
    void brew() /// 冲泡
    {
        cout << "冲泡咖啡" << endl;
    }
    void pourInCup() /// 倒入杯中
    {
        cout << "倒入杯中" << endl;
    }
    void putSomething() /// 加入辅料
    {
        cout << "加入糖和牛奶" << endl;
    }
    void makeDrink()
    {
        boil();
        brew();
        pourInCup();
        putSomething();
    }
};

class Tea: public AbstractDrinking
{
public:
    void boil() /// 煮水
    {
        cout << "煮农夫山泉" << endl;
    }
    void brew() /// 冲泡
    {
        cout << "冲泡茶" << endl;
    }
    void pourInCup() /// 倒入杯中
    {
        cout << "倒入杯中" << endl;
    }
    void putSomething() /// 加入辅料
    {
        cout << "加入枸杞" << endl;
    }
    void makeDrink()
    {
        boil();
        brew();
        pourInCup();
        putSomething();
    }
};

//制作函数
void doWork(AbstractDrinking* abs)
{
    abs->makeDrink();
    delete abs;
}

int main()
{
    doWork(new Coffee);
    /*output:
    煮农夫山泉
    冲泡咖啡
    倒入杯中
    加入糖和牛奶*/
    cout << "-------------" << endl;
    doWork(new Tea);
    /*output:
    -------------
    煮农夫山泉
    冲泡茶
    倒入杯中
    加入枸杞
    */
    return 0;
}
```

```ad-example
title:Example
collapse:open
多态电脑
```
```cpp
#include <iostream>
using namespace std;

class CPU
{
public:
    virtual void calculate() = 0;
};

class GPU
{
public:
    virtual void display() = 0;
};

class RAM
{
public:
    virtual void storage() = 0;
};

class Computer
{
public:
    Computer(CPU* cpu, GPU* gpu, RAM* ram)
    {
        m_cpu = cpu;
        m_gpu = gpu;
        m_ram = ram;
    }

    void work()
    {
        m_cpu->calculate();
        m_gpu->display();
        m_ram->storage();
    }
    
    ~Computer()
    {
        if(m_cpu != NULL)
        {
            delete m_cpu;
            m_cpu = NULL;
        }
        
        if(m_gpu != NULL)
        {
            delete m_gpu;
            m_gpu = NULL;
        }
        
        if(m_ram != NULL)
        {
            delete m_ram;
            m_ram = NULL;
        }
    }
    
private:
    CPU* m_cpu;
    GPU* m_gpu;
    RAM* m_ram;
};

//Inter
class IntelCPU: public CPU
{
public:
    virtual void calcutale(){cout << "IntelCPUstartCalculate" << endl;}
};

class IntelGPU: public GPU
{
public:
    virtual void display(){cout << "IntelGPUstartDisplay" << endl;}
};

class IntelRAM: public RAM
{
public:
    virtual void storage(){cout << "IntelRAMstartStorage" << endl;}
};

//Lenovo
class LenovoCPU: public CPU
{
public:
    virtual void calcutale(){cout << "LenovoCPUstartCalculate" << endl;}
};

class LenovoGPU: public GPU
{
public:
    virtual void display(){cout << "LenovoGPUstartDisplay" << endl;}
};

class LenovoRAM: public RAM
{
public:
    virtual void storage(){cout << "LenovoGPUstartStorage" << endl;}
};

void test01()
{
    
    CPU* intelcpu = new IntelCPU;
    GPU* intelgpu = new IntelGPU;
    RAM* intelram = new IntelRAM;
    
    //组装第一台电脑
    Computer* computer1 = new Computer(intelcpu, intelgpu, intelram);
    conputer1->work();
    delete conputer1;
    
    //组装第二台电脑
    Computer* computer2 = new Computer(
    new LenovoCPU, new LenovoGPU, new LenovoRAM
    );
    conputer2->work();
    delete conputer2;
    
    //组装第三台电脑
    Computer* computer3 = new Computer(
    new LenovoCPU, new IntelGPU, new LenovoRAM
    );
    conputer3->work();
    delete conputer3;
}

int main()
{
    test01();
    return 0;
}
```

