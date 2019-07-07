import Vue from "vue";

// 設定 api loading 時的效果
Vue.prototype.$apiLoading = function(status) {
  this.$store.dispatch("apiLoading", status);
};

// 設定註冊當前的 step
Vue.prototype.$step = function(step) {
  this.$store.dispatch("setStep", step);
};

// 設定 footer
Vue.prototype.$pageId = function(name) {
  this.$store.dispatch("setPageId", name);
};

// 設定 nav
Vue.prototype.$navbar = function(name) {
  this.$store.dispatch("setNavbar", name);
};

// 設定 daily 當前 tab
Vue.prototype.$daily = function(name) {
  this.$store.dispatch("setDaily", name);
};

// 顯示 / 關閉 modal
Vue.prototype.$modal = function(param) {
  const { name, show } = param;
  this.$store.dispatch("showModal", { name, show });
};
