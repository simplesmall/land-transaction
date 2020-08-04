<template>
  <div class="baseCSS">
    <div class="header">
      <div class="backBtn"><router-link to="/">返回</router-link></div>
      <span style="margin-right: 41%;color: gray;font-size: 20px;line-height: 40px">这是  {{demoList[choose].name}}  页面</span>
    </div>
    <OneLogin v-if="choose == 0"></OneLogin>
    <TwoBtn v-else-if="choose ==1"></TwoBtn>
    <ThreePage v-else-if="choose ==2"></ThreePage>
  </div>
</template>

<script>
  import OneLogin from "./OneLogin";
  import TwoBtn from "./TwoBtn";
  import ThreePage from "./ThreePage";

  export default {
    name: "Test",
    data() {
      return {
        choose: 0,
        demoList:[
          {id:0,name:'OneLogin'},
          {id:1,name:'TwoBtn'},
          {id:2,name:'ThreePage'},
          {id:3,name:'TwoBtn'},
          {id:4,name:'TwoBtn'},
          {id:5,name:'TwoBtn'},
          {id:6,name:'TwoBtn'},
          {id:7,name:'TwoBtn'},
        ]
      }
    },
    created() {
    },
    mounted() {
      switch (this.$route.params.id) {
        case '0':
          this.choose = OneLogin.id;
          break;
        case '1':
          this.choose = TwoBtn.id;
          break;
        case '2':
          this.choose = ThreePage.id;
          break
        default:
          this.choose = 0
      }
    },
    components: {
      OneLogin,
      TwoBtn,
      ThreePage
    }
  }
</script>

<style scoped>
  .baseCSS{
    margin: 0;
    padding: 0;
  }
  .header {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 40px;
    background-color: cyan;
    color: #e91e63;
    font-size: 24px;
  }

  a{
    text-decoration: none;
  }
  .backBtn {
    margin: auto auto auto 5px;
    width: 40px;
    height: 36px;
    background-color: hotpink;
    font-size: 16px;
    line-height: 40px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }

  .backBtn:hover {
    background-color: deeppink;
    color: black;
  }
</style>
