<template>
  <div>
    <p>购买商品数量：{{ count }}</p>

    <!-- 1.绑定事件
  语法：v-on：事件名="代码" -->
    <button v-on:click="count = count++">加一</button>
    <!-- 语法：v-on：事件名="methods里函数名" -->
    <button v-on:click="sub">减一</button>
    <!-- 语法：v-on：事件名="methods里函数名(值)" -->
    <button v-on:click="add(5)">加五</button>
    <!-- 语法：@事件名="methods里函数名" -->
    <button @click="addFunc(5)">加五</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    sub() {
      this.count--;
    }
    ,
    add(num) {
      this.count += num;
    },
    addFunc(num) {
      this.count += num;
    }
  }
}
</script>

<style></style>
