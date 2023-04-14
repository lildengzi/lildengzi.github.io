  
# demo1

一、爬取中国天气网某城市天气数据  
  
爬取中国天气网某城市天气数据，可以使用Python的爬虫框架Scrapy。Scrapy是一个快速，高效，可扩展的爬虫框架，可以让我们快速地爬取网页并提取所需的数据。  
  
1.1 安装Scrapy  
  
安装Scrapy非常简单，只需要在命令行中输入以下命令：  
  
Copy code  
pip install scrapy  
1.2 创建Scrapy项目  
  
创建Scrapy项目的命令如下：  
  
Copy code  
scrapy startproject weather  
这个命令将创建一个名为weather的目录，其中包含了一个默认的Scrapy项目。  
  
1.3 创建Spider  
  
在Scrapy中，爬虫叫做Spider。要创建一个Spider，我们需要在Scrapy项目中创建一个Spider文件。我们可以使用以下命令创建一个名为weather_spider.py的文件：  
  
Copy code  
scrapy genspider weather_spider www.weather.com.cn  
这个命令将创建一个名为weather_spider.py的文件，并且将其链接到www.weather.com.cn。  
  
1.4 编写Spider  
  
现在，我们需要编辑weather_spider.py文件来实现爬取天气数据的功能。以下是weather_spider.py文件的示例代码：  
```python
scss  
Copy code  
import scrapy  
from weather.items import WeatherItem  
  
class WeatherSpider(scrapy.Spider):  
    name = 'weather_spider'  
    allowed_domains = ['www.weather.com.cn']  
    start_urls = ['http://www.weather.com.cn/weather/101010100.shtml']  
    def parse(self, response):  
        item = WeatherItem()  
        item['city'] = response.xpath('//div[@id="7d"]/ul![](file:///C:\Users\25808\AppData\Roaming\Tencent\QQTempSys\)A[Y)I~](ZC9Z[3Y)IDK7LK.gif)[@class="on"]/a/text()').extract()  
        item['date'] = response.xpath('//div[@id="7d"]/ul![](file:///C:\Users\25808\AppData\Roaming\Tencent\QQTempSys\)A[Y)I~](ZC9Z[3Y)IDK7LK.gif)[position()>1]/h1/text()').extract()  
        item['weather'] = response.xpath('//div[@id="7d"]/ul![](file:///C:\Users\25808\AppData\Roaming\Tencent\QQTempSys\)A[Y)I~](ZC9Z[3Y)IDK7LK.gif)[position()>1]/p[@class="wea"]/text()').extract()  
        item['temperature'] = response.xpath('//div[@id="7d"]/ul![](file:///C:\Users\25808\AppData\Roaming\Tencent\QQTempSys\)A[Y)I~](ZC9Z[3Y)IDK7LK.gif)[position()>1]/p[@class="tem"]/span/text()').extract()  
        yield item  
```

在这个代码中，我们首先导入了Scrapy和自定义的WeatherItem。然后，我们创建了一个名为WeatherSpider的Spider，并设置了它的名称、允许的域和起始URL。在parse()函数中，我们使用XPath表达式来提取网页中的城市、日期、天气和温度数据，并将数据保存在WeatherItem对象中。最后，我们使用yield语句返回该对象，以便Scrapy可以将其存储在数据存储器中。  
  
1.5 编写Item  
  
在Scrapy中，Item用于定义要从网页中提取的数据。

在我们的示例代码中，我们使用了WeatherItem来定义要提取的数据。以下是weather/items.py文件的示例代码：

```python
import scrapy  
class WeatherItem(scrapy.Item):     
    city = scrapy.Field()     
    date = scrapy.Field()     
    weather = scrapy.Field()     
    temperature = scrapy.Field()
```
在这个代码中，我们首先导入Scrapy。然后，我们创建了一个名为WeatherItem的类，并定义了四个字段：city、date、weather和temperature。这些字段将用于存储从网页中提取的城市、日期、天气和温度数据。

1.6 运行Spider

现在，我们已经编写了Spider和Item，可以运行我们的Spider来爬取天气数据。要运行Spider，我们可以使用以下命令：
```python
scrapy crawl weather_spider -o weather.json
```

这个命令将运行名为weather_spider的Spider，并将结果存储在名为weather.json的文件中。

1.7 存储数据到MySQL数据库

将爬取的天气数据存储到MySQL数据库中，我们可以使用Python的MySQL连接库PyMySQL。以下是存储数据到MySQL数据库的示例代码：
```python
# 省略
```

在这个代码中，我们首先使用json库读取之前爬取的天气数据文件weather.json。然后，我们使用PyMySQL库连接到MySQL数据库。接下来，我们遍历所有天气数据，并将数据插入到名为weather的表中。

二、使用Spark SQL对天气数据进行分析

略

# demo2

引言

天气预报在我们日常生活中具有很重要的意义。而要获取准确的天气预报数据，我们需要从官方网站或相关数据源中获取。然而，手动获取数据的方式非常耗时且容易出错。因此，本文将介绍如何使用Python爬虫从中国天气网获取某个城市的天气数据，并将其存储在MySQL数据库中。然后，使用Spark SQL对这些数据进行分析。最后，使用FineBI连接数据库进行可视化展示。本文的目标是展示一个完整的数据处理流程，其中包括数据获取，存储，处理和可视化。

难点

本文涉及到的主要难点如下：

1.  数据获取和存储：如何使用Python爬虫从中国天气网获取特定城市的天气数据，并将其存储在MySQL数据库中。
    
2.  数据分析：如何使用Spark SQL对天气数据进行分析，以获取有用的信息。
    
3.  数据可视化：如何使用FineBI连接MySQL数据库并创建仪表板以可视化天气数据。
    

代码实现

下面将逐一介绍如何实现以上难点。

数据获取和存储

我们将使用Python爬虫从中国天气网获取某城市的天气数据，并将其存储在MySQL数据库中。

1.  爬取数据

首先，我们需要安装Python的requests和BeautifulSoup4库。requests库用于从网站中获取数据，而BeautifulSoup4库用于解析网页数据。

pythonCopy code

`import requests from bs4 import BeautifulSoup  # 爬取网页数据 url = 'http://www.weather.com.cn/weather/101280601.shtml' response = requests.get(url) soup = BeautifulSoup(response.content, 'html.parser')`

这里以南京市为例，网址为'[http://www.weather.com.cn/weather/101280601.shtml'。在实际应用中，我们需要更改网址以获取所需城市的天气数据。](http://www.weather.com.cn/weather/101280601.shtml'%E3%80%82%E5%9C%A8%E5%AE%9E%E9%99%85%E5%BA%94%E7%94%A8%E4%B8%AD%EF%BC%8C%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E6%9B%B4%E6%94%B9%E7%BD%91%E5%9D%80%E4%BB%A5%E8%8E%B7%E5%8F%96%E6%89%80%E9%9C%80%E5%9F%8E%E5%B8%82%E7%9A%84%E5%A4%A9%E6%B0%94%E6%95%B0%E6%8D%AE%E3%80%82)

2.  解析数据

接下来，我们需要从网页中提取有用的信息，例如当前温度，风向和风速等。我们可以使用BeautifulSoup4库来解析网页数据。

pythonCopy code

`# 解析网页数据 city = soup.select('.crumbs.fl a')[2].text temperature = soup.select('#today .tem span')[0].text weather = soup.select('#today .wea')[0].text wind = soup.select('#today .win i')[0].text + soup.select('#today .win span')[0].text`

这里，我们使用了CSS选择器来从网页中提取所需的数据。city表示城市名称，temperature表示当前温度，weather表示天气状况，wind表示风向和风速。

3.  存储数据

我们将使用Python的MySQLdb库来将天气数据存储在MySQL数据库中。首先，我们需要连接到数据库。

pythonCopy code
```python
import MySQLdb  # 连接数据库 db = MySQLdb.connect(host='

# 存储数据

cursor = db.cursor() sql = "INSERT INTO weather(city, temperature, weather, wind) VALUES('%s', '%s', '%s', '%s')" % (city, temperature, weather, wind) try: cursor.execute(sql) db.commit() except: db.rollback()

makefileCopy code

`这里，我们将城市名称，当前温度，天气状况和风向风速插入到名为weather的MySQL表中。如果插入失败，则回滚操作。  数据分析  在本节中，我们将使用Spark SQL对MySQL数据库中的天气数据进行分析。  1. 数据导入  首先，我们需要将MySQL中的数据导入到Spark中。  ```python from pyspark.sql import SparkSession  
# 创建SparkSession 
spark = SparkSession.builder.appName('WeatherAnalysis').getOrCreate()  
# 将MySQL数据导入到Spark 
jdbc_url = "jdbc:mysql://localhost:3306/weather" 
table_name = "weather" 
user = "root" 
password = "root" 
df = spark.read.format("jdbc").option("url", jdbc_url).option("dbtable", table_name).option("user", user).option("password", password).load()
```

这里，我们使用Spark的JDBC数据源将MySQL中的数据导入到Spark中。我们需要提供MySQL的JDBC URL，表名称，用户名和密码。

2.  数据处理

接下来，我们需要使用Spark SQL对导入的数据进行处理。我们可以使用Spark SQL中的DataFrame和SQL API来完成这个过程。

pythonCopy code

`from pyspark.sql.functions import *  # 获取最高温度，最低温度和平均温度 df.select(max('temperature').alias('max_temperature'), min('temperature').alias('min_temperature'), avg('temperature').alias('avg_temperature')).show()  # 按天气状况分组并计数 df.groupBy('weather').count().show()  # 按风向和风速分组并计数 df.groupBy('wind').count().show()`

这里，我们使用了Spark SQL中的一些函数来计算最高温度，最低温度和平均温度。我们还使用groupBy函数按天气状况，风向和风速分组并计数。

数据可视化

在本节中，我们将使用FineBI连接MySQL数据库，并创建仪表板以可视化天气数据。

1.  连接MySQL数据库

首先，我们需要使用FineBI连接到MySQL数据库。

2.  创建数据集

接下来，我们需要创建一个FineBI数据集来连接到MySQL中的weather表。

3.  创建仪表板

最后，我们可以使用FineBI创建仪表板来可视化天气数据。我们可以使用FineBI提供的各种组件来创建图表，表格和仪表板。

结论

在本文中，我们介绍了如何使用Python爬虫从中国天气网获取某城市的天气数据，并将其存储在MySQL数据库中。然后，我们使用Spark SQL对这些数据进行分析，以获取有用的信息。最后，我们使用FineBI连接MySQL数据库并创建仪表板以可视化天气数据。在这个过程中，我们面临了许多挑战，其中包括：

1.  网站反爬虫机制：中国天气网有反爬虫机制，因此我们需要使用一些技巧来避免被网站禁止访问。
    
2.  数据清洗和处理：爬取到的数据可能包含噪声和缺失值，因此我们需要对数据进行清洗和处理，以使其适用于分析和可视化。
    
3.  数据库连接和操作：将爬取到的数据存储到数据库中需要一些数据库连接和操作技巧。
    
4.  数据分析和可视化：使用Spark SQL进行数据分析和FineBI进行数据可视化需要一些专业技能和经验。
    

代码实现

以下是完整的代码实现。请注意，此代码可能需要进行一些修改，以适应您的特定情况。

pythonCopy code

`# 导入必要的库 import requests from bs4 import BeautifulSoup import pymysql from pyspark.sql import SparkSession from pyspark.sql.functions import *  # 爬取天气数据 def scrape_weather(city):     # 设置请求头     headers = {         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}     # 发送请求     url = 'http://www.weather.com.cn/weather/%s.shtml' % city     response = requests.get(url, headers=headers)     # 解析页面     soup = BeautifulSoup(response.content, 'html.parser')     # 获取天气数据     temperature = soup.select('.tem span')[0].get_text()     weather = soup.select('.wea')[0].get_text()     wind = soup.select('.win i')[0].get_text() + soup.select('.win em')[0].get_text()     return temperature, weather, wind  # 存储数据到MySQL def store_weather(city, temperature, weather, wind):     # 连接数据库     db = pymysql.connect('localhost', 'root', 'root', 'weather', charset='utf8')     # 创建游标     cursor = db.cursor()     # 插入数据     sql = "INSERT INTO weather(city, temperature, weather, wind) VALUES('%s', '%s', '%s', '%s')" % (     city, temperature, weather, wind)     try:         cursor.execute(sql)         db.commit()     except:         db.rollback()     # 关闭数据库连接     db.close()  # 数据分析 def analyze_weather():     # 创建SparkSession     spark = SparkSession.builder.appName('WeatherAnalysis').getOrCreate()     # 将MySQL数据导入到Spark     jdbc_url = "jdbc:mysql://localhost:3306/weather"     table_name = "weather"     user = "root"     password = "root"     df = spark.read.format("jdbc").option("url", jdbc_url).option("dbtable", table_name).option("user", user).option("password", password).load()     # 获取最高温度，最低温度和平均温度     df.select(max('temperature').alias('max_temperature'), min('temperature').alias`('min_temperature'), avg('temperature').alias('avg_temperature')).show() # 获取天气状况的数量 df.groupBy('weather').count().show() # 获取最常见的风向 df.groupBy('wind').count().orderBy(desc('count')).limit(1).show() # 关闭SparkSession spark.stop()

# 数据可视化

def visualize_weather(): # 创建FineBI连接 # ...

# 主函数

if **name** == '**main**': # 爬取天气数据并存储到MySQL中 city = '101010100' # 北京 temperature, weather, wind = scrape_weather(city) store_weather(city, temperature, weather, wind) # 分析天气数据 analyze_weather() # 可视化天气数据 visualize_weather()

markdownCopy code

`难点  以下是在实现这个项目时遇到的一些难点：  1. 反爬虫机制：中国天气网有反爬虫机制，因此我们需要使用一些技巧来避免被网站禁止访问。例如，我们可以设置请求头，限制请求频率，使用代理IP等。  2. 数据清洗和处理：爬取到的数据可能包含噪声和缺失值，因此我们需要对数据进行清洗和处理，以使其适用于分析和可视化。例如，我们可以使用正则表达式来匹配和清洗数据。  3. 数据库连接和操作：将爬取到的数据存储到数据库中需要一些数据库连接和操作技巧。例如，我们可以使用Python的pymysql库来连接和操作MySQL数据库。  4. 数据分析和可视化：使用Spark SQL进行数据分析和FineBI进行数据可视化需要一些专业技能和经验。例如，我们需要了解SQL查询语言和数据可视化工具的使用方法。  结论  在本项目中，我们使用Python爬虫爬取了中国天气网某城市的天气数据，并将其存储在MySQL数据库中。然后，我们使用S`
参考文献

以下是本项目中使用的一些参考文献：

1.  Python官方文档：[https://www.python.org/doc/](https://www.python.org/doc/)
    
2.  BeautifulSoup文档：[https://www.crummy.com/software/BeautifulSoup/bs4/doc/](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
    
3.  Selenium文档：[https://www.selenium.dev/documentation/en/](https://www.selenium.dev/documentation/en/)
    
4.  PyMySQL文档：[https://pymysql.readthedocs.io/en/latest/](https://pymysql.readthedocs.io/en/latest/)
    
5.  Spark SQL文档：[https://spark.apache.org/docs/latest/sql-programming-guide.html](https://spark.apache.org/docs/latest/sql-programming-guide.html)
    
6.  FineBI文档：[https://help.finebi.com/finebi7/zh-CN/doc-view-2841.html](https://help.finebi.com/finebi7/zh-CN/doc-view-2841.html)
    
7.  中国天气网：[http://www.weather.com.cn/](http://www.weather.com.cn/)
    

结语

本项目是一个完整的数据处理、分析和可视化项目，涵盖了Python爬虫、MySQL数据库、Spark SQL和FineBI等多个方面。通过实现这个项目，我们学习了如何使用Python爬虫爬取网站数据，并将其存储到数据库中。然后，我们使用Spark SQL对数据进行分析，获取有关该城市天气的有价值的见解。最后，我们使用FineBI连接数据库进行可视化展示。这个项目对于学习数据处理、分析和可视化技能是非常有价值的。
