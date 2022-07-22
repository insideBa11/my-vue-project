import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import './components/Icon/icon-file/iconfont.js' // Icon的js文件
import './styles/global.less'
import './mock'
import store from './store'

// 注册全局指令
import vloading from './directives/Loading'

Vue.directive('loading', vloading)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')

// store.dispatch('banners/asyncSetData');