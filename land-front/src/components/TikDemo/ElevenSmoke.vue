<template>
  <div>
    <section>
      <video src="../../assets/video/smoke.mp4" autoplay muted loop></video>
      <h1>
        <span>点</span>
        <span>赞</span>
        <span>投</span>
        <span>币</span>
        <span>关</span>
        <span>注</span>
        <span>收</span>
        <span>藏</span>
      </h1>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ElevenSmoke",
    id: 10
  }
</script>

<style scoped>
  video {
    width: 100%;
    /*heigh:calc(100vh - 40px)*/
    heigh: 100%;
  }

  section {
    width: 100%;
    height: calc(100vh - 48px);
    overflow: hidden;
  }

  section:before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: calc(100vh - 48px);
    background: linear-gradient(to right, #f00, #f00, #0f0, #0ff, #ff0, #0ff);
    mix-blend-mode: color;
    pointer-events: none;
  }

  section h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 70px;
    font-family: sans-serif;
    /*letter-spacing: 0.1em;*/
  }

  h1 span {
    user-select: none;
    opacity: 0;
    display: inline-block;
    animation: animate 1s linear both;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotateY(90deg);
      filter: blur(10px);
    }
    100%{
      opacity: 1;
      transform: rotateY(0deg);
      filter: blur(0);
    }
  }
  h1 span:nth-child(1){
    animation-delay: 1s;
  }
  h1 span:nth-child(2){
    animation-delay: 1.5s;
  }
  h1 span:nth-child(3){
    animation-delay: 2s;
  }
  h1 span:nth-child(4){
    animation-delay: 2.5s;
  }
  h1 span:nth-child(5){
    animation-delay: 3s;
  }
  h1 span:nth-child(6){
    animation-delay: 3.5s;
  }
  h1 span:nth-child(7){
    animation-delay: 4s;
  }
  h1 span:nth-child(8){
    animation-delay: 4.5s;
  }
</style>
