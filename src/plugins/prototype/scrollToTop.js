import Vue from "vue";

// 捲動至最上方
Vue.prototype.$scrollToTop = function() {
  const rootEl = document.querySelector("#app");
  const time = 100;
  const step = 5 + (rootEl.scrollTop / time) * 10;
  let count = rootEl.scrollTop;
  const timer = setInterval(() => {
    if (count < 1) {
      clearInterval(timer);
    } else {
      rootEl.scrollTop -= step;
      count = rootEl.scrollTop;
    }
  }, 10);
};
