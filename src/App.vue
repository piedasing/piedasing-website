<template lang="pug">
  #app
    Header
    //-
    router-view
    //- 等待API完成的loading特效
    Loading(
      :active.sync="isLoading"
      :is-full-page="true"
      :loader="'spinner'"
      :background-color="'rgba(0,0,0, 1)'"
      :color="'#5F358C'"
    )
</template>

<script>
import Header from "@/components/Header";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading"
    })
  },
  methods: {
    ...mapActions({
      setWindowSize: "setWindowSize"
    }),
    initWindowSize() {
      const ww = document.querySelector("#app").clientWidth;
      const wh = document.querySelector("#app").clientHeight;
      this.setWindowSize({
        width: ww,
        height: wh
      });
    }
  },
  mounted() {
    this.initWindowSize();

    window.addEventListener("resize", this.initWindowSize);
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";

#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 5rem;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
