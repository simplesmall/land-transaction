<template>
  <div class="login">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <div class="avatarEdge">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 17px;margin: 5px;   background-color: lightgrey;}">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
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

    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .avatarEdge {
    width: 200px;
    height: 70px;
    background-color: #EBEEEB;
  }

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
