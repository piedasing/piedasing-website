<template lang="pug">
  section#works(
    class="container mx-auto"
  )
    h4(
      class="mt-5 mb-3"
    ) The F2E - 第二屆 前端 & UI 修練精神時光屋
    .row
      template(v-for="card in cards.f2e")
        .col-12.col-md-6.col-xl-4
          Card(
            v-bind="card"
          )
</template>

<script>
import Card from "@/components/Card";
import { cardAPI } from "@/httpService";

export default {
  name: "works",
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          topic: "Week1"
        }
      ]
    };
  },
  methods: {
    async initData() {
      const { getCardList } = cardAPI;
      try {
        this.$apiLoading(true)
        const res = await getCardList()
        this.cards = res.data.data
      } catch (err) {
        throw err
      } finally {
        this.$apiLoading(false)
      }
    }
  },
  mounted() {
    this.$scrollToTop();
    this.initData();
  }
};
</script>
