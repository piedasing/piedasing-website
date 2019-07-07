<template lang="pug">
  .carte(
    class="flex md:inline-flex items-center flex-col md:flex-row md:rounded-full my-5 py-5 md:py-0"
    :class="type"
  )
    a.circle--pic(
      class="block rounded-full"
      :style="getPic(id)"
    )
    .profile(
      class="text-left px-5 pt-2"
    )
      | {{ name }}
      br
      | {{ job }}
      br
      //- | 相關連結:
      //- br
      template(v-for="link in contact")
        | {{ link.name }}:
        a.link(
          :href="link"
          target="_blank"
          class="block text-xs pl-3"
        ) {{ link.src }}
</template>

<script>
export default {
  name: "Carte",
  props: {
    id: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: "left"
    },
    name: {
      type: String,
      default: ""
    },
    job: {
      type: String,
      default: ""
    },
    contact: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      images: [require("@/assets/coder.png"), require("@/assets/profile.jpg")]
    };
  },
  computed: {
    getPic() {
      return function(id) {
        return { "background-image": `url('${this.images[id - 1]}')` };
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.carte {
  border: 1px solid rgba(0, 0, 0, 0.5);
  &.left {
    padding-right: 2rem;
  }
  &.right {
    justify-content: flex-end;
    padding-left: 2rem;
    .circle--pic {
      order: 1;
    }
  }
  .circle--pic {
    @include size(200px);
    @include bg(cover);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  .link {
    color: #00f;
    word-break: break-all;
    line-height: 1.8;
    &:hover {
      color: lighten(#00f, 15%);
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 768px) {
  .carte {
    &.left {
      padding-right: 0;
    }
    &.right {
      padding-left: 0;
    }
  }
}
</style>
