<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 20px;margin: 5px; }">
      <el-breadcrumb-item v-for="(item,index) in pathList" :key="index" :to="item.path">
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "BreadCrumb",
    data(){
      return{
        pathList:[
          {name:'体育活动',path:'/'},
          {name:'数学竞赛',path:'test'},
          {name:'随便一下',path:'123'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
