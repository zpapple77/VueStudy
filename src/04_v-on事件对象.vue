<template>
  <div>
    <!-- a标签 去百度 -->
    <a @click="one" href="https://www.baidu.com">百度</a>
    <hr />
    <!-- a标签 去淘宝 -->
    <a @click="two(10,$event)" href="https://www.taobao.com">淘宝</a>
  </div>
</template>

<script>
export default {
  methods: {
    // 如果事件触发，无传值，可以直接获取事件对象
    one(e) {
      e.preventDefault();
    },
    // 如果事件触发，有传值，需要手动传入$event
    two(num,e){
      e.preventDefault()
    }
  }
}
</script>

<style></style>
