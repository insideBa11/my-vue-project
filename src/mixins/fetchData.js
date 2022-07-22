// 远程获取数据

// 公共的远程获取数据的代码
export default {
	data() {
		return {
			isLoading: true,
			data: null
		}
	},
	async created() {
		// 具体的组件中，需要提供一个获取远程数据的方法 fetchData
		this.data = await this.fetchData();
		this.isLoading = false;
	}
}