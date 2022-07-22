/**
 * 事件总线
 */

// const listeners = {}
//
// export default {
// 		// 事件名称  绑定函数
// 	$on(eventName, handler) {
// 		if (!listeners[eventName]) {
// 			listeners[eventName] = new Set();
// 		}
// 		listeners[eventName].add(handler)
// 	},
// 	$off(eventName, handler) {
// 		if (!listeners[eventName]) return;
// 		listeners[eventName].delete(handler)
// 	},
// 		 // 要调用的事件名称  数据
// 	$emit(eventName, ...args) {
// 		if (!listeners[eventName] || listeners[eventName].size < 1) return;
// 		for (const fn of listeners[eventName]) { // 与被调用的事件名称绑定的所有函数，都将被一一调用
// 			fn(...args);
// 		}
// 	}
// }

import Vue from 'vue';

export default new Vue({});