<template lang="pug">
  #week1.week
    .row(
      class="flex-no-wrap"
    )
      //- todo input
      .left--side.col-12.col-md-8(
        class="text-left px-5 py-5"
      )
        .input(
          class="inline-block relative mb-5"
        )
          input(
            type="text"
            class="text-sm p-2"
            v-model="value"
            @keypress.enter="addTodo"
          )
          .icon(
            class="flex items-center h-full absolute top-0 right-0 mr-1"
          )
            i.fas.fa-plus
        //- todo list
        ul.todo--list
          template(v-for="(todo, index) in todoList")
            li.todo(
              class="flex flex-wrap items-center justify-between"
              :class="{'active': activeIndex === index}"
            )
              label.label(
                class="flex items-center text-xl"
              )
                input.is--completed(
                  type="radio"
                  class="mr-1"
                  v-model="todo.isCompleted"
                )
                strong {{ todo.content }}
              .remain--time(
                v-if="index === 0"
                class="w-full font-bold"
              ) {{ remainTime }}
              .play--button(
                v-else
                class="ml-5"
              )
                .icon
                  i.fas.fa-play
      .right--side.col-12.col-md-4(
        class="relative"
      )
        template(v-if="!isCounting")
          .play--button(
            class="flex justify-center items-center rounded-full"
            @click="countDown"
          )
            .icon
              i.fas.fa-play(v-show="remainTime === '25:00'")
        template(v-else)
          .play--button(
            class="flex justify-center items-center rounded-full"
            @click="stopCount"
          )
            .icon
              i.fas.fa-pause(v-show="remainTime !== '25:00'")
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "week",
  data() {
    return {
      value: "",
      todoList: [],
      remainTime: "25:00",
      isCounting: false,
      timer: null,
      activeIndex: 0
    };
  },
  methods: {
    addTodo() {
      if (this.value.length <= 0) {
        return;
      }
      this.todoList.push({
        id: Math.floor(new Date()),
        content: this.value.trim(),
        isCompleted: false
      });
      this.value = "";
    },
    countDown() {
      this.timer = setInterval(() => {
        if (this.remainTime !== "00:00" && this.timer) {
          this.isCounting = true
          this.remainTime = dayjs(`2019-01-01T00:${this.remainTime}`)
            .subtract(1, "seconds")
            .format("mm:ss");
        } else {
          clearInterval(this.timer);
          this.isCounting = false
        }
      }, 1000);
    },
    stopCount() {
      this.timer = null
    }
  }
};
</script>

<style lang="scss" scoped>
$pink: #ff4384;
#week1 {
  input {
    background-color: transparent;
  }
  .left--side {
    background-color: #ffedf7;
    // todo input
    .input {
      background-color: #fff;
      input,
      .icon {
        color: $pink;
      }
    }
    // todo list
    .is--completed {
      width: 40px;
      height: 40px;
    }
    .remain--time {
      color: $pink;
      font-size: 6rem;
    }
    .todo {
      padding-right: 15vw;
      &.active {
        margin-top: 5rem;
        margin-bottom: 5rem;
      }
    }
  }
  .right--side {
    min-height: 75vh;
    background-color: #003164;
    .play--button {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateX(-50%) translateY(-50%);
      background-color: $pink;
      color: #fff;
      width: 30vw;
      height: 30vw;
      cursor: pointer;
    }
  }
}
</style>
