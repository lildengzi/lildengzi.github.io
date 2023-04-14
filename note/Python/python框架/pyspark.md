定义:Apache Spark是用于**大规模数据**（large-scala data）处理的**统一（unified适用面广）分析引擎**。

# RDD
RDD是一种分布式内存抽象，其使得程序员能够在大规模集群中做内存运算，并且有一定的容错方式。而这也是整个Spark的核心数据结构，Spark整个平台都围绕看RDD进行.

![[Pasted image 20230221214457.png]]

在计算层面，Spark相比较MR(MapReduce)有巨大的性能优势，但至今仍有许多计算工具基于MR构架，比如非常成熟的Hive

Spark仅做计算，而Hadoop生态圈不仅有计算(MR)也有存储（HDFS）和资源管理调度（YARN)，HDFS和YARN仍是许多大数据体系的核心架构。

- 四大特点:快，通用，易用，多种运行方式

