<template>
  <div>
    <!-- 2.值->标签原生属性上 -->
    <!-- 语法：v-bind：原生属性名="vue变量" -->
     <a v-bind:href="url">点击去掘金</a>
     <!-- 语法：：原生属性名="vue变量" -->
     <img :src="imgUrl" >
  </div>
</template>

<script>
export default {
  data(){
    return{
      url:'https://juejin.cn/',
      imgUrl:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
    }
  }
}
</script>

<style>

</style>