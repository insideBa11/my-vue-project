import Vue from 'vue';
/*
由于vue与vue-router版本兼容的问题，需要在安装语句后加入需要下载vue-router版本，不然会下载最新的vue-router版本。
npm install --legacy-peer-deps vue-router@3.5.2
 */
import VueRouter from 'vue-router' // 引入的VueRouter是一个构造函数
import routerRules from '@/router/router-rules' // 导入路由匹配规则

// Vue.use() 使用一个vue插件
Vue.use(VueRouter);

// 使用VueRouter创建一个router对象，在router内配置路由规则
const router = new VueRouter({
	// 路由配置
	routes: routerRules,
	// 使用history模式
	mode: 'hash', // 默认为hash模式，
	// base: process.env.BASE_URL,
})

router.afterEach((to, from) => {
	if(to.meta.title){
		document.title = to.meta.title;
	}
})

export default router;