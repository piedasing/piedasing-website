<template lang="pug">
  ul.tabs
    template(v-for="tab in tabs")
      li.tab--item
        a.tab--link(
          href="javascript:;"
          :class="{'active': tab.name === nowTab}"
          @click="changeTab(tab.name)"
        ) {{ tab.label }}
</template>

<script>
export default {
  name: "Tab",
  props: {
    nowTab: {
      type: String,
      default: "design"
    }
  },
  data () {
    return {
      tabs: [
        { name: "design", label: "設計稿" },
        { name: "demo", label: "DEMO" }
      ]
    }
  },
  methods: {
    changeTab(tab = 'design') {
      this.$emit('change-tab', tab)
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  .tab--item {
    .tab--link {
      display: block;
      line-height: 2;
      box-shadow: 0 0 1px 1px $color-gray-light;
      margin-bottom: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &.active, &:hover {
        background-color: $color-active;
        color: #fff;
      }
    }
  }
}
</style>
