<template>
  <div class="wrapper">
    <div class="center">
      <h1>Software Skills</h1>

      <div v-for="(item,index) in skillList" :key="index" class="skillBox">
        <div class="language"><p>{{item.language}} </p> <p>{{item.percent}}%</p></div>
        <div class="skill">
          <div class="skill_level" style="width: 90%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NineMaster",
    id: 8,
    data(){
      return{
        skillList:[
          {language:'HTML5',percent:89},
          {language:'jquery',percent:80},
          {language:'VUE',percent:90},
        ]
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    height: calc(100vh - 40px);
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #262626;
  }

  .center{
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    background: #333;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0,0,0,.5);
  }

  h1{
    margin: 0;
    padding: 0;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .skillBox{
    box-sizing: border-box;
    width: 100%;
    margin: 20px 0;
  }

  .skillBox p{
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 10px;
    padding: 0;
    text-align: left;
  }

  .skillBox p:nth-child(2){
    float: right;
    position: relative;
    top: -25px;
  }

  .skill{
    background: #262626;
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid #0fffb7;
    border-radius: 2px;
  }

  .skill_level{
    background: #0fffb7;
    width: 100%;
    height: 10px;
  }

</style>
