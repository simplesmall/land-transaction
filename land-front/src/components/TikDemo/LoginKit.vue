<template>
  <div class="swiper-slide">
    <div class="card">
      <div class="sliderText">
        <h3>01-Login</h3>
      </div>
      <div class="demo-img">
        <img src="../assets/img/01-login.jpg">
      </div>
      <div class="content">
        <p>1. 请左右滑动选择不同卡片。如果你要获取源码，请记住图片上方的编号与名字。</p>
        <p>2. 点击“获取源码”获取该项目源码。</p>
        <p>3. 点击“效果演示”查看效果预览。</p>
        <p>4. 点击“查看视频”一起打卡学习~</p><br>
        <a href="https://github.com/local-host-8080/demo-html-css">获取源码</a>
        <a :href="'/demo/'+index">效果演示</a>
        <a href="https://www.bilibili.com/video/av60343435">查看视频</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginKit",
    data(){
      return{
        slideTextColor:'',
        imgUrl:'',
        demoUrl:''
      }
    }
  }
</script>

<style scoped>
  .card{
    position: relative;
    background: #FFF;
    width: 400px;
    height: 700px;
    margin: 0 auto;
  }
  .card .content{
    width: 400px;
    padding: 30px;
    box-sizing: border-box;
  }
  .card .content p{
    margin: 5px;
  }
  .card .demo-img{
    width: 400px;
    box-sizing: border-box;
  }
  .card .demo-img img{
    width: 100%;
  }
  .card .content a{
    display: inline-block;
    margin: 10px 0 0;
    padding: 10px 20px;
    text-decoration: none;
    border: 2px solid #262626;
    color: #262626;
    font-weight: 600;
  }
  .card .sliderText{
    position: relative;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
  }
  .card .sliderText h3{
    color: #FFF;
    font-size: 3em;
  }
  .swiper-slide{
    width: 400px;
    margin: 0 3px;
  }
  .swiper-slide:nth-child(1) .sliderText{
    background: #2196f3;
  }
  .swiper-slide:nth-child(2) .sliderText{
    background: #e91e63;}

</style>
