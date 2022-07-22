# mixin中的self-center原理：

一、代码含义
transform:translate(-50%,-50%); 的作用是往左和上移动自身长宽的50%。

二、简单的例子
再理解代码含义后，不难想到，可以与 top:50%;left:50%; 结合，使其达到居中的位置。

![img](https://i0.hdslb.com/bfs/article/247d4ba4389670269e59962663a48024c633ea19.png@942w_278h_progressive.webp)

![img](https://i0.hdslb.com/bfs/article/145f9b2dec759ce725c686f5be45ba087096a069.png@273w_257h_progressive.webp)



![img](https://i0.hdslb.com/bfs/article/664f6867644d6221e097c64e7346200ce01187fd.png@942w_278h_progressive.webp)

![img](https://i0.hdslb.com/bfs/article/be18d1112b84f50e5b8886d01b53aca89fa0a9cd.png@269w_272h_progressive.webp)

三、例子解析
在这串代码中，居中的div是中间放置数字1的小矩形。

用relative使中间的小矩形相对于大正方形处于相对定位。

使用 top:50%;left:50%; 让小矩形处于以左上角为原点的中心位置。

再使用 transform:translate(-50%,-50%); 让小矩形往左上移动自身长宽的50%。

# CSSmodule的功能：

1. 能将样式表文件模块化导出 

```javascript
import styles from './styles/message.less';
console.log(styles) // {}
```

如果未开启cssmodule，则导出的css模块会是一个空对象；

如果开启cssmodule，则能模块化导出`less`文件

2. 能有效避免类名重复

假设在`message.less`文件有：

```css
.message{
	// css样式
}
```

紧接上一步的步骤，给`div`加上`.message`样式：

```javascript
const div = document.createElement('div');
div.innerText = 'muggle hit daye';
div.className = styles.message;
console.log(styles) // {message: 'cK2j_v6VcPgjTrTcQHAn'}
```

在网页可以看到，`div`的类名被做了放重复处理：

![image-20220502192649758](/Users/wabicai/Library/Application Support/typora-user-images/image-20220502192649758.png)

## 如何使用CSSmodule：

需要将样式文件命名为`xxx.module.ooo`

`xxx`为文件名

`ooo`为样式文件后缀名，可以是`css`、`less`
