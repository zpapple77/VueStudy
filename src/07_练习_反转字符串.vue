<template>
  <div>
    <h1>{{ messgae }}</h1>
    <button @click="btn">翻转</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messgae: 'Hello Vue!'
    }
  },
  methods: {
    btn() {
      this.messgae = this.messgae.split('').reverse().join('')
    },
  },
}
</script>

<style></style>
