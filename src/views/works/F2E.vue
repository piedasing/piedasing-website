<template lang="pug">
  section#f2e(
    class="container mx-auto px-1 pt-3"
  )
    .row
      .left--side.col-12.col-md-2
        Tab(
          :nowTab="nowTab"
          @change-tab="nowTab = $event"
        )
      .right--side.col-12.col-md-10(
        class="pt-5 md:pt-0 md:pl-5"
      )
        template(v-if="nowTab === 'design'")
          iframe(
            class="w-full block"
            style="height: calc(100vh - 250px);"
            :src="nowDesignPaper.src"
          )
        template(v-else-if="nowTab === 'demo'")
          template(v-for="field in schema")
            component(
              :is="field.fieldName"
            )
</template>

<script>
import Tab from "@/components/Tab";
import F2E from "@/components/f2e/index.js";
import { f2eAPI } from "@/httpService";

export default {
  name: "F2E",
  components: {
    Tab,
    ...F2E
  },
  data() {
    return {
      nowTab: "design",
      schema: [{ fieldName: "Week1" }],
      designPapers: [
        { id: 1, src: "" }
      ]
    };
  },
  computed: {
    nowDesignPaper () {
      const id = this.$route.params.id
      return this.designPapers[parseInt(id) - 1]
    }
  },
  methods: {
    async initDesignPaper() {
      const { getDesignPapers } = f2eAPI
      try {
        this.$apiLoading(true)
        const res = await getDesignPapers()
        this.designPapers = res.data.data
      } catch (err) {
        throw err
      } finally {
        this.$apiLoading(false)
      }
    }
  },
  mounted () {
    this.initDesignPaper()
  }
};
</script>

<style lang="scss">

</style>
