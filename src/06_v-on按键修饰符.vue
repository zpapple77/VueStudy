<template>
  <div>
    <input type="text" @keydown.enter="enterFn" />
    <hr />
    <input type="text" @keydown.esc="escFn" />
  </div>
</template>

<script>
export default {
  methods: {
    enterFn() {
      console.log('enter回车按键了')
    },
    escFn() {
      console.log('esc按键了')
    },
  },
}
</script>

<style></style>
