<template lang="pug">
  #week1.week
    | week1
</template>

<script>
export default {
  name: "week",
  props: {
    nowTab: {
      type: String,
      default: "design"
    }
  }
};
</script>
