import * as types from "./_types.js";

const state = {
  modals: [] // 存放所有開啟中的 model
};

const getters = {
  getModal: state => state.modals
};

const actions = {
  showModal({ commit }, modalInfo) {
    this._vm.$log("action: modal", modalInfo);
    commit(types.SHOWMODAL, modalInfo);
  }
};

const mutations = {
  /**
   * 設定 modal 顯示與關閉
   * @param {Object} modalInfo
   * @param {String} modalInfo.name  -> modal 名稱
   * @param {Boolean} modalInfo.show -> 控制顯示
   */
  [types.SHOWMODAL](state, modalInfo) {
    const { name = "", show = false } = modalInfo;
    if (show) {
      state.modals.push(name);
    } else {
      const indexOfModal = state.modals.indexOf(name);
      state.modals.splice(indexOfModal, 1);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
