<template>
  <div class="Header">
    <div id="logo">
      <div style="width: 50%;margin: 0 auto;line-height: 61px">
<!--        <img src="https://p22.zzzyk.com/2014/1/20140130101810_85.png" alt="" style="object-fit: cover">-->
        LOGO
      </div>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

  .Header{
    display: flex;
  }
  #logo{
    flex-direction: row;
    width: auto;
    flex: 1;
    background: linear-gradient(to left, #ffffff 0%,#C5E7F1 100%);;
  }
  ul {
    margin-left: auto;
    float: right;
  }
</style>
