<template>
  <div class="login">
    <h1>登录页</h1>
    <input type="button" value="获取数据" @click="getData">
    <input type="button" value="更改数据" @click="setData">
    <hr>
    <input type="button" value="state" @click="showState">
    <input type="button" value="mutations" @click="involkeMut">
    <input type="button" value="actions" @click="involkeAct">
    <input type="button" value="getters" @click="involkeGet">
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
      involkeGet(){
        console.log(this.$store.getters.testGet)
      },
      involkeAct(){
        this.$store.dispatch('setTestAct',234)
      },
      involkeMut(){
        this.$store.commit('setTest',123)
      },
      showState(){
        console.log(this.$store.state.test)
      },
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
