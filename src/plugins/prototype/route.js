import Vue from "vue";

// 切換頁面的route
Vue.prototype.$push = function(path = "") {
  if (path.length === 0) {
    this.$router.go(-1);
  } else {
    this.$router.push({ path });
  }
};

Vue.prototype.$pop = function() {
  this.$router.go(-1);
};

Vue.prototype.$replace = function(path = "") {
  if (path.length === 0) {
    this.$router.go(-1);
  } else {
    this.$router.replace({ path });
  }
};
