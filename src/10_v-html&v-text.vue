<template>
  <div>
    <!-- v-text把值当成普通字符串显示, v-html把值当做html解析 -->
    <p v-text="str"></p>
    <p v-html="str">{{10+20}}</p>
    <!-- v-text/html会覆盖插值表达式 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      str: '<span>hello</span>'
    }
  }
}
</script>

<style>

</style>