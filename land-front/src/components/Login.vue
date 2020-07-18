<template>
  <div class="login">
    <h1>土地交易系统前端</h1>
    <input type="button" value="获取数据" @click="getData">
    <input type="button" value="更改数据" @click="setData">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: null,
        name:'来自前端的数据'
      }
    },
    methods: {
      getData() {
        this.$axios.get('/get').then((response) => {
          this.msg = response.data
        }).catch((error) => {
          console.log("出错咯~~~" + error)
        })
      },
      setData(){
        this.$axios.post('/set',"name=简简单单才是真").then(response=>{
          console.log(response)
          this.msg = response.data.name
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
</style>
