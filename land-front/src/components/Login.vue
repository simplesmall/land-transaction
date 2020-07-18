<template>
  <div class="login">
    <h1>土地交易系统前端</h1>
    <input type="button" value="获取数据" @click="getData">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: null
      }
    },
    methods: {
      getData() {
        this.$axios.get('/test').then((response) => {
          this.msg = response.data
        }).catch((error) => {
          console.log("出错咯~~~" + error)
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
</style>
