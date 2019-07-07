import Vue from "vue";

// console.log管理
Vue.prototype.$log = function(...args) {
  if (process.env.NODE_ENV !== "production") {
    console.log(...args);
  }
};
