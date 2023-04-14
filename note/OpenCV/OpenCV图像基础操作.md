# 图像io
## 读取并显示
- `img imread(路径, 读取方式)`
显示
- `imshow(窗口名字, 图片)`
- `waitKey(0)` 延迟出现,必须有否则难出现
```ad-example
title:Example
collapse:open
```
```python
import cv2 as cv  
 
# 灰度图读取  
img = cv.imread("C:\\Users\\25808\\Pictures\\Saved Pictures\\code.png", -1)  
  
cv.imshow('image', img)  
cv.waitKey(0)
```

matplotlib读取
```ad-example
title:Example
collapse:open
```
```python
import cv2 as cv  
import matplotlib.pyplot as plt  
  
img = cv.imread("C:\\Users\\25808\\Pictures\\Saved Pictures\\code.png", 1)  
  
plt.imshow(img[:, :, ::-1])  
plt.show()
```

```ad-summary
title:Summary
collapse:open
- 1:彩色图读取
- 0:灰度图读取
- \-1:alpha通道加载图像
```

## 保存
- `imwrite(保存路径, 图片)`
```ad-example
title:Example
collapse:open
```
```python
import cv2 as cv  
import matplotlib.pyplot as plt  
  
img = cv.imread("C:\\Users\\25808\\Pictures\\Saved Pictures\\code.png", 1)  

cv.imwrite("C:\\Users\\25808\\Pictures\\Saved Pictures\\lib.png", img)
```

# 图像绘制
```ad-example
title:Example
collapse:open
```
```python
import cv2 as cv  
import matplotlib.pyplot as plt  
import numpy as np  
  
img = np.zeros((512, 512, 3), np.uint8)  
  
cv.line(img, (0, 0), (511, 511), (255, 0, 0), 5)  
cv.rectangle(img, (384, 0), (510, 128), (0, 255, 0), 3)  
cv.circle(img, (447, 63), 63, (0, 0, 255), -1)  
font = cv.FONT_HERSHEY_SIMPLEX  
cv.putText(img, 'OpenCV', (10, 500), font, 4, (255, 255, 255), 2, cv.LINE_AA)  
  
plt.imshow(img[:, :, ::-1])  
plt.title('匹配结果'), plt.xticks([]), plt.yticks([])  
plt.show()
```
运行结果
![[Pasted image 20230311171930.png]]

# 获取修改图中像素点
