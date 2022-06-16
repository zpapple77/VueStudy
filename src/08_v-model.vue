<template>
  <!--  语法: v-model="vue数据变量"
 双向数据绑定  value属性-vue变量
   数据变化 -> 视图自动同步
   视图变化 -> 数据自动同步 -->
  <div>
    <span>用户名：</span>
    <input type="text" v-model="username"/>
    <span>密码：</span>
    <input type="password" v-model="pass"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:"",
      pass:""
    }
  }
}
</script>

<style></style>
