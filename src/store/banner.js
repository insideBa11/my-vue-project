import {getBanners} from "@/api/banner";

export default {
    namespaced: true,
    state: {
        data: [],
        isLoading: false,
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        changeIsLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        async asyncSetData(ctx) {
            if (ctx.state.data.length === 0) {
                ctx.commit("changeIsLoading", true);
                const resp = await getBanners();
                ctx.commit("setData", resp);
                ctx.commit("changeIsLoading", false);
            }
        }
    }
}