<template>
  <div>
    <div class="wrapper">
      <ul>
        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EightShare",
    id: 7
  }
</script>

<style scoped>
  ul{
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    width: 320px;
    height: 60px;
  }
  .wrapper {
    margin: 200px auto;
    width: 320px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  ul:before{
    content: '\f1e0';
    font-family: fontAwesome;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#ff00ff,#8a2be2);
    border-radius: 30px;
    text-align: center;
    line-height: 60px;
    color: #FFF;
    font-size: 30px;
    margin: 0 2px;
    transition: 0.5s;
    z-index: 1;
  }
  ul:hover:before{
    width: 60px;
  }
  ul li {
    list-style: none;
    position: absolute;
    transition: 1s;
  }
  ul li a{
    display: block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #262626;
    color: #FFF;
    margin: 0 2px;
    border-radius: 50%;
    font-size: 30px;
    transition: 1s;
  }
  ul li:nth-child(1) a{
    background: #3b5999;
  }
  ul li:nth-child(2) a{
    background: #55acee;
  }
  ul li:nth-child(3) a{
    background: #dd4b39;
  }
  ul li:nth-child(4) a{
    background: #0077b5;
  }
  ul li:nth-child(5) a{
    background: #e4405f;
  }
  ul:hover li:nth-child(1) a{
    transform: translateX(64px) rotate(360deg);
    transition-delay: 0.8s;
  }
  ul:hover li:nth-child(2) a{
    transform: translateX(128px) rotate(360deg);
    transition-delay: 0.6s;
  }
  ul:hover li:nth-child(3) a{
    transform: translateX(192px) rotate(360deg);
    transition-delay: 0.4s;
  }
  ul:hover li:nth-child(4) a{
    transform: translateX(256px) rotate(360deg);
    transition-delay: 0.2s;
  }
  ul:hover li:nth-child(5) a{
    transform: translateX(320px) rotate(360deg);
    transition-delay: 0s;
  }
</style>
