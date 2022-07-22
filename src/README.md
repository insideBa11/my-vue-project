# Avatar

![image-20220422195707318](/Users/wabicai/Library/Application Support/typora-user-images/image-20220422195707318.png)

## 属性

| 属性名 | 含义               | 类型   | 必填 | 默认值 |
| ------ | ------------------ | ------ | ---- | ------ |
| url    | 头像图片路径       | String | 是   | 无     |
| size   | 头像尺寸，宽高相等 | Number | 否   | 150    |

# Icon

<img src="http://mdrs.yuanjin.tech/img/20201130153927.png" alt="image-20201130153927256" style="zoom:50%;" />

图标组件

使用的图标源来自于「阿里巴巴矢量库」

## 属性

| 属性名 | 含义     | 类型   | 必填 | 默认值 |
| ------ | -------- | ------ | ---- | ------ |
| type   | 图标类型 | String | 是   | 无     |

有效的图标类型：

![image-20220422195817834](/Users/wabicai/Library/Application Support/typora-user-images/image-20220422195817834.png)

[如何引入](https://blog.csdn.net/m0_58398070/article/details/124219024?spm=1001.2014.3001.5501)

# Pager

<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;" />

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
| ------------- | ---------- | ------ | ---- | ------ |
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名 | 含义     | 事件参数 | 参数类型 |
| ------ | -------- | -------- | -------- |
| change | 页码变化 | 新的页码 | Number   |

# BGM

| 属性名 | 含义                         | 类型   | 必填 | 默认值 |
| ------ | ---------------------------- | ------ | ---- | ------ |
| top    | 当前组件距离浏览器上沿的距离 | Number | 否   | 200    |
| right  | 当前组件距离浏览器右沿的距离 | Number | 否   | -90    |

## 使用此组件时需要自定义一个运动指令：

```javascript
  directives: {
    drag: function (el) {
      let dragBox = el;
      dragBox.onmousedown = e => {
        //算出鼠标相对元素的位置
        let disY = e.clientY - dragBox.offsetTop;
        document.onmousemove = e => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let top = e.clientY - disY;
          //移动当前元素
          dragBox.style.top = top + "px";
        };
        document.onmouseup = e => {
          //鼠标弹起来的时候不再移动
          document.onmousemove = null;
          //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
          document.onmouseup = null;
        };
      };
    }
  },
```

![image-20220422201603068](/Users/wabicai/Library/Application Support/typora-user-images/image-20220422201603068.png)

# 弹出消息

应用场景：在评论之后弹出评论成功/评论失败。

![image-20220503185825552](/Users/wabicai/Library/Application Support/typora-user-images/image-20220503185825552.png)

![image-20220503185812982](/Users/wabicai/Library/Application Support/typora-user-images/image-20220503185812982.png)

## 接收参数

| 参数名称  | 参数类型 | 参数含义                                                   |
| :-------- | -------- | ---------------------------------------------------------- |
| content   | String   | 弹出的消息内容                                             |
| type      | String   | Icon的类型                                                 |
| duration  | Number   | 弹出框存在多久                                             |
| container | HTML     | 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中 |

## 函数主体思路

1. 将传入的参数type，传入函数`getComponentsRootDom`中，得到对应的Icon图标；

   ```javascript
   const IconDom = getComponentsRootDom(Icon, {type}); // 得到Icon组件渲染的Dom元素const div = document.createElement('div');
   ```

    - **getComponentsRootDom**

        - ```javascript
       export default function(comp, props) {
       	const vm = new Vue({
       		render: (h) => h(comp, { props }),
       	});
       	vm.$mount();
       	return vm.$el;
       }

2. 将`content`和第一步得到的`Icon`一起传入`div`中，再将`div`加入到容器中

```javascript
div.innerHTML = `<div class="${styles.msgContainer}">${IconDom.outerHTML}${content}</div>`；
container.appendChild(div);
```

3. 强制重排

```javascript
	// 浏览器强行渲染
	// 因为gui线程和js线程的互斥性，需要强制让浏览器重排
	div.clientHeight; // 导致reflow
```

4. 等`opacity`变为0时，移除`div`

```javascript
	const hide = new Promise((resolve, reject) => {
		setTimeout(function () {
			div.style.opacity = 0;
			div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
			resolve();
		}, duration)
	})

	hide.then(() => {
		setTimeout(function (){
			div.remove();
		},400)
	})
```

## 完整代码

```javascript
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function (content, type, duration, container) {
	// 判断参数是否有值，若没有则使用默认值
	type = type === '' ? 'info' : type;
	duration = duration === '' ? 2000 : duration;
	container = container === '' ? document.body : container;

	const div = document.createElement('div');
	const IconDom = getComponentsRootDom(Icon, {type}); // 得到Icon组件渲染的Dom元素

	div.className = styles.message;
	div.innerHTML = `<div class="${styles.msgContainer}">${IconDom.outerHTML}${content}</div>`

	// 容器的position是否改动过
	if (getComputedStyle(container).position === "static") {
		container.style.position = "relative";
	}

	// 将div加入到容器中
	container.appendChild(div);

	// 浏览器强行渲染
	// 因为gui线程和js线程的互斥性，需要强制让浏览器重排
	div.clientHeight; // 导致reflow

	div.style.opacity = 1;
	div.style.transform = `translate(-50%, -50%)`;

	const hide = new Promise((resolve, reject) => {
		setTimeout(function () {
			div.style.opacity = 0;
			div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
			resolve();
		}, duration)
	})

	hide.then(() => {
		setTimeout(function (){
			div.remove();
		},400)
	})

}
```

### getComponentsRootDom

```javascript
import Vue from "vue";
/**
	获取某个组件渲染的Dom根元素
 */
export default function(comp, props) {
	const vm = new Vue({
		render: (h) => h(comp, { props }),
	});
	vm.$mount();
	return vm.$el;
}
```

# 组件生命周期

