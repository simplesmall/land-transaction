<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in demoList" :key="index">
        <div class="swiper-slide" >
          <div class="card">
            <div class="sliderText" :style="item.slideTextColor">
              <h3>{{index+1}}-{{item.name}}</h3>
            </div>
            <div class="demo-img">
              <img :src="item.imgUrl">
            </div>
            <div class="content">
              <p>1. 请左右滑动选择不同卡片。如果你要获取源码，请记住图片上方的编号与名字。</p>
              <p>2. 点击“获取源码”获取该项目源码。</p>
              <p>3. 点击“效果演示”查看效果预览。</p>
              <p>4. 点击“查看视频”一起打卡学习~</p><br>
              <router-link :to="'/demo/'+index">效果演示</router-link>
              <router-link :to="'/code/'+index">代码查看</router-link>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "ShowDemo",
    data(){
      return{
        demoList:[
          {name:'Login', slideTextColor:'background: #2196f3;', imgUrl:require("../assets/img/01-login.jpg"), demoUrl:'0'},
          {name:'Button', slideTextColor: 'background: #e91e63;', imgUrl:require("../assets/img/02-button.jpg"), demoUrl:'1'},
          {name:'Page', slideTextColor: 'background: #c3d41a;', imgUrl:require("../assets/img/03-Page.jpg"), demoUrl:'2'},
          {name:'Button', slideTextColor: 'background: #ff9800;', imgUrl:require("../assets/img/04-button.jpg"), demoUrl:'3'},
          {name:'Button', slideTextColor: 'background: #c33ada;', imgUrl:require("../assets/img/05-All-Button.jpg"), demoUrl:'4'},
          {name:'Button', slideTextColor: 'background: #2196f3;', imgUrl:require("../assets/img/06-Button.jpg"), demoUrl:'5'},
          {name:'Clock', slideTextColor: 'background: #e91e63;', imgUrl:require("../assets/img/07-Clock.jpg"), demoUrl:'6'},
          {name:'Share', slideTextColor: 'background: #c3d41a;', imgUrl:require("../assets/img/08-Share.jpg"), demoUrl:'7'},
          {name:'SkillMaster', slideTextColor: 'background: #ff9800;', imgUrl:require("../assets/img/09-skills-meter.jpg"), demoUrl:'8'},
          {name:'Shader', slideTextColor: 'background: #c33ada;', imgUrl:require("../assets/img/10-3D-Shader.jpg"), demoUrl:'9'},
          {name:'Smoke', slideTextColor: 'background: #2196f3;', imgUrl:require("../assets/img/11-Text-Smoke.jpg"), demoUrl:'10'},
          {name:'Ripple', slideTextColor: 'background: #e91e63;', imgUrl:require("../assets/img/12-Water-Ripple.jpg"), demoUrl:'11'},
          {name:'SendMessage', slideTextColor: 'background: #c3d41a;', imgUrl:require("../assets/img/13-SendMessage.jpg"), demoUrl:'12'},
          {name:'Download', slideTextColor: 'background: #ff9800;', imgUrl:require("../assets/img/14-Download.jpg"), demoUrl:'13'},
        ],
        swiperOption: {
          effect:'coverflow',
          grabCursor:true,
          centeredSlides:true,
          slidesPerView:'auto',
          coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows : true,
          },

          pagination: {
            el: '.swiper-pagination',
          },
          // loop: true,
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev'
          // }
        },
      }
    }
  }
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #383838;
  }
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
</style>
