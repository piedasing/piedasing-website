<template lang="pug">
  .card(
    class="my-2 xl:my-3 px-1 xl:px-3"
  )
    .card--header(
      class="py-3"
    )
      strong {{ topic }}
    .card--body(
      class="relative"
    )
      .card--bg
      //- 週數
      .week--num(
        class="text-xl absolute bottom-0 right-0 px-1 py-1"
      ) WEEK{{ id }}
    .card--footer(
      class="py-3"
    )
      //- 技能標籤
      .skill--tag(
        class="flex flex-wrap items-center mb-3 px-2 pb-1"
      )
        strong(
          class="mr-1"
        ) SKILL:
        template(v-for="tag in tags")
          span.tag(
            class="mr-1 mb-1 px-2 py-1"
          ) {{ tag }}
      //- 查看更多
      .see--more
        router-link.block(
          class="rounded-full py-2"
          :to="`/works/f2e/${id}`"
        ) SEE MORE
</template>

<script>
export default {
  name: "Card",
  props: {
    id: {
      type: Number,
      default: 0
    },
    topic: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  > div {
    outline: 1px solid #000;
  }
  .card--header {
    background-color: #fff;
  }
  // 卡片背景圖
  .card--bg {
    @include size(100%, 200px);
    @include bg(cover, "~@/assets/logo-bg.png");
  }
  // 週數
  .week--num {
    color: #FFF;
    font-weight: bold;
    background-color: rgb(218, 100, 100);
  }
  // 技能標籤
  .skill--tag {
    text-align: left;
    border-bottom: 1px solid #000;
    .tag {
      background-color: #42b983;
      color: #fff;
      border-radius: 10px;
    }
  }
  // 查看更多按鈕
  .see--more > a {
    background-color: rgb(122, 122, 209);
    color: #fff;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: #fff;
      color: rgb(74, 74, 192);
      border: 1px solid rgb(74, 74, 192);
    }
  }
}
</style>
