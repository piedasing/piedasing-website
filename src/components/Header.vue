<template lang="pug">
  .header(
    class="mb-3 py-3"
  )
    .navbar(
      class="container flex items-center mx-auto"
    )
      .row
        .col-12
          .row(
            class="items-center"
          )
            .col-3
              a.logo(
                href="https://www.facebook.com/weicheng.chen.10"
                target="_blank"
                class="flex justify-center items-center"
              )
                img(
                  class="rounded-full mb-2"
                  src="@/assets/profile.jpg"
                )
            .col-9(
              class="text-left pl-2"
            )
              h3(
                class="text-base md:text-xl font-bold m-0"
                style="letter-spacing: 2px;"
              )
                a(
                  href="https://www.facebook.com/weicheng.chen.10"
                  target="_blank"
                ) PieDa(派大)
                | 的前端學習紀錄網
              small(
                class="block mr-5 text-right"
              ) ——— 持續學習，就會進步
        .col-12
          .row
            template(v-for="nav in navbar")
              .col-4
                router-link(
                  class="block mr-0 md:mr-5 md: mb-0"
                  :class="{'active': nowPage === nav.name}"
                  :to="nav.route"
                ) {{ nav.label }}
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      navbar: [
        {
          label: "首頁",
          name: "home",
          route: "/"
        },
        {
          label: "關於我",
          name: "about",
          route: "/about"
        },
        {
          label: "作品區",
          name: "works",
          route: "/works"
        }
      ],
      nowPage: ""
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.nowPage = val.meta.id;
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters({
      getWindowSize: "getWindowSize"
    }),
    isMobile() {
      return this.getWindowSize.width < 768;
    }
  },
  mounted() {
    this.nowPage = this.$route.meta.id;
  }
};
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 0 3px 1px $color-gray-light;
  position: relative;
  .navbar {
    a {
      &.logo {
        img {
          max-height: 100px;
        }
      }
      &:not(.logo) {
        transition: 0.5s;
        &.active,
        &:hover {
          position: relative;
          transform: skewX(-25deg);
          color: $color-active;
          font-weight: bold;
          &:after {
            content: "";
            width: 100%;
            height: 3px;
            background-color: $color-active;
            position: absolute;
            bottom: calc(-1rem + 3px);
            left: 0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .header {
    .navbar {
      a.logo {
        img {
          max-height: 60px;
        }
      }
    }
  }
}
</style>
