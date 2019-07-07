import Vue from "vue";
import Vuex from "vuex";

import ui from "./modules/ui";

Vue.use(Vuex);

const types = {
  ISLOADING: "ISLOADING",
  WINDOWSIZE: "WINDOWSIZE"
};

const rootStore = {
  state: {
    isLoading: false,
    windowSize: {
      width: 0,
      height: 0
    }
  },
  getters: {
    isLoading: state => state.isLoading,
    getWindowSize: state => state.windowSize
  },
  actions: {
    apiLoading({ commit }, status) {
      this._vm.$log("action: apiloading", status);
      commit(types.ISLOADING, status);
    },
    setWindowSize({ commit }, data) {
      commit(types.WINDOWSIZE, data);
    }
  },
  mutations: {
    /**
     * 呼叫api的時候，切換loading效果
     * @param {Boolean} status
     */
    [types.ISLOADING](state, status) {
      state.isLoading = status;
    },
    /**
     * 取得螢幕寬高
     * @param {Object} data
     * @param {Number} data.width
     * @param {Number} data.height
     */
    [types.WINDOWSIZE](state, data) {
      state.windowSize = {
        ...data
      };
    }
  }
};

export default new Vuex.Store({
  ...rootStore,
  modules: {
    ui
  },
  // 嚴格模式，禁止直接修改 state
  strict: false
});
