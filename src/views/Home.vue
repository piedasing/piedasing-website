<template lang="pug">
  section#home(
    class="container mx-auto px-1 py-3"
  )
    template(v-for="carte in cartes")
      Carte(
        v-bind="carte"
      )
</template>

<script>
import Carte from '@/components/Carte'
import { cardAPI } from '@/httpService'

export default {
  name: "home",
  components: {
    Carte
  },
  data() {
    return {
      cartes: []
    };
  },
  methods: {
    async initData() {
      const { getCarteList } = cardAPI
      try {
        this.$apiLoading(true)
        const res = await getCarteList()
        this.cartes = res.data.data
      } catch (err) {
        throw err
      } finally {
        this.$apiLoading(false)
      }
    }
  },
  mounted() {
    this.initData()
  }
};
</script>
