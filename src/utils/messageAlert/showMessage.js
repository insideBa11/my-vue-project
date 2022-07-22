import styles from '@/utils/messageAlert/message.module.less'
import getComponentsRootDom from '@/utils/messageAlert/getComponentsRootDom'
import Icon from "@/components/Icon";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
// content, type, duration, container
export default function (options={}) {
	// 判断参数是否有值，若没有则使用默认值
	const content = options.content || "";
	const type = options.type || "info";
	const duration = options.duration || 2000;
	const container = options.container || document.body;

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

	// 如果有回调函数，则最后运行回调函数
	if(options.callback) options.callback()

}
