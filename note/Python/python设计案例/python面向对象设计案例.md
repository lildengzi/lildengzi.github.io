# 类设计案例
```python
# 设计一个闹钟类
class Clock:
	id = None
	price = None
	
	def ring(self):
		import winsound
		winsound.Beep(2000, 3000) # 发出响声

# 构建两个闹钟并让其工作
clock1 = Clock()
clock1.id = "003032"
clock1.price = 19.99
print(f"闹钟id:{clock1.id}, 价格:{clock1.price}")
clock1.ring() # 工作

clock2 = Clock()
clock2.id = "003033"
clock2.price = 21.99
print(f"闹钟id:{clock2.id}, 价格:{clock2.price}")
clock2.ring()
```

# 封装设计案例
```python
class Phone:
	__is_5g_enable = False
	
	#
	def __check_5g(self):
		if self.__is_5g_enable:
			print("5g开启")
		else:
			print("5g关闭")
	
	#
	def call_by_5g(self):
		self.__check_5g()
		print("通话中")

phone = Phone()
phone.call_by_5g() # output:5g关闭 通话中
```

# 继承设计案例
单继承
```python
class Phone:
	IMEI = None # 序列号
	producer = 'HM' # 厂商
	
	#
	def call_by_5g(self):
		print("5g通话")

class Phone2022(Phone): # python继承语法
	face_id = "10001"
	
	#
	def call_by_6g(self):
		print("6g通话")

phone = Phone2022()
print(phone.producer) # output:HM    继承的东西可直接使用
phone.call_by_5g() # output:5g通话    
phone.call_by_6g() # output:6g通话
```
多继承
```python
class Phone:
	IMEI = None # 序列号
	producer = 'XM' # 厂商
	
	#
	def call_by_5g(self):
		print("5g通话")

class Phone2022(Phone): # python继承语法
	face_id = "10001"
	
	#
	def call_by_6g(self):
		print("6g通话")

class NFCReader:
	nfc_type = "第五代"
	producer = "HM"
	
	#
	def read_card(self):
		print("NFC读")
	
	#
	def write_card(self):
		print("NFC写")

class RemoteControl:
	rc_type = "红外遥控"
	
	def control(self):
		print("红外遥控开启")

class Myphone(Phone, NFCReader, RemoteControl):
	pass # output:继承后跳过

phone = Phone()
phone.call_by_5g() # output:5g通话
phone.read_card() # output:NFC读
phone.write_card() # output:NFC写
phone.control() # output:红外遥控开启
print(phone.producer) # output:XM    多继承左优先
```

# 多态设计案例
```python
# 类似cpp中的virtual
class Animal:
	def speak(self):
		pass

class Dog(Animal):
	def speak(self):
		print("wangwang")

class Cat(Animal):
	def speak(self):
		print("miaomiao")

def sound(animal: Animal):
	animal.speak()

dog = Dog()
cat = Cat()
sound(dog)
sound(cat)
# output:
# wangwang
# miaomiao
```
抽象类
```python
class AC:
	def cool_wind(self):
		pass
	
	#
	def hot_wind(self):
		pass
	
	#
	def swing_l_r(self):
		pass

class Midea_AC(AC):
	def cool_wind(self):
		print("美的冷风")
	
	#
	def hot_wind(self):
		print("美的热风")
	
	#
	def swing_l_r(self):
		print("美的摇头")

class Gree_AC(AC):
	def cool_wind(self):
		print("格力冷风")
	
	#
	def hot_wind(self):
		print("格力热风")
	
	#
	def swing_l_r(self):
		print("格力摇头")
```
