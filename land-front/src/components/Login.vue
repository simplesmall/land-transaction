<template>
  <div class="login">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <Aside/>
        <el-container>
          <BreadCrumb></BreadCrumb>

          <el-main>
            <h1>登录页</h1>
            <input type="button" value="获取数据" @click="getData">
            <input type="button" value="更改数据" @click="setData">
            <el-row>
              <el-button round>圆角按钮</el-button>
              <el-button type="primary" round>主要按钮</el-button>
              <el-button type="success" round>成功按钮</el-button>
              <el-button type="info" round>信息按钮</el-button>
              <el-button type="warning" round>警告按钮</el-button>
              <el-button type="danger" round>危险按钮</el-button>
            </el-row>
            <hr>
            <input type="button" value="state" @click="showState">
            <input type="button" value="mutations" @click="involkeMut">
            <input type="button" value="actions" @click="involkeAct">
            <input type="button" value="getters" @click="involkeGet">
            {{msg}}
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from "../views/Header";
  import Aside from "../views/Aside";
  import BreadCrumb from "../views/BreadCrumb";
  import Footer from "../views/Footer";

  export default {
    name: 'Login',
    data() {
      return {
        msg: null,
        name: '来自前端的数据'
      }
    },
    methods: {
      involkeGet() {
        console.log(this.$store.getters.testGet)
      },
      involkeAct() {
        this.$store.dispatch('setTestAct', 234)
      },
      involkeMut() {
        this.$store.commit('setTest', 123)
      },
      showState() {
        console.log(this.$store.state.test)
      },
      getData() {
        this.$axios.get('/get').then((response) => {
          this.msg = response.data
        }).catch((error) => {
          console.log("出错咯~~~" + error)
        })
      },
      setData() {
        this.$axios.post('/set', "name=简简单单才是真").then(response => {
          console.log(response)
          this.msg = response.data.name
        }).catch(error => {
          console.log(error)
        })
      }
    },
    mounted() {

    },
    components: {
      Header,
      Aside,
      BreadCrumb,
      Footer
    }
  }
</script>

<style scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-container:nth-child(1) {
    height: 100vh;
  }

  .el-submenu {
    margin-left: -20px;
  }
</style>
