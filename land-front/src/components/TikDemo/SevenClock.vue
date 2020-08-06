<template>
  <div class="content">
    <div class="number">
      <div class="time">
        {{hour}}:{{minites}}
      </div>
      <div class="seconds">{{seconds}}</div>
    </div>
    <!--    外圆  -->
    <div class="wrapper">
      <!-- 内圆 -->
      <div class="outer">
        <!--  运动的针    -->
        <div class="wheel">
          <div class="circleNode">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SevenClock",
    id: 6,
    data() {
      return {
        time: new Date(),
        timer: null
      }
    },
    computed: {
      hour: function () {
        let hour = this.time.getHours()
        return hour > 9 ? hour : '0' + hour
      },
      minites: function () {
        let minit = this.time.getMinutes()
        return minit > 9 ? minit : '0' + minit
      },
      seconds: function () {
        let second = this.time.getSeconds()
        return second > 9 ? second : '0' + second
      }
    },
    mounted() {
      this.timer = setInterval(this.updateTime, 1000)
    },
    methods: {
      updateTime() {
        this.time = new Date()
      }
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>
  .seconds {
    z-index: 2;
    font-size: 25px;
    color: deeppink;
  }

  .time {
    z-index: 2;
    font-size: 50px;
    color: deeppink;
  }

  .left-hidder {
    width: 150px;
    height: 300px;
    background: lightpink;
    position: absolute;
    left: -20px;
    top: -20px;
    transform: rotate(45deg);
    transform-origin: right center;
    transition: 10s;
  }

  .right-hidder {
    width: 150px;
    height: 300px;
    background: cyan;
    position: absolute;
    top: -20px;
    left: 130px;
    transform-origin: left center;
    transform: rotate(30deg);
    transition: 4s;
  }

  .circleNode {
    width: 20px;
    height: 20px;
    background: deeppink;
    border-radius: 50%;
  }

  .wheel {
    width: 20px;
    height: 150px;
    background: transparent;
    position: absolute;
    top: -20px;
    left: 120px;
    border-radius: 15px;
    transform-origin: center bottom;
  }

  .content {
    width: 100%;
    height: calc(100vh - 40px);
    display: flex;
  }

  .number {
    line-height: 50px;
    text-align: center;
    margin-top: 200px;
    margin-right: -60%;
    margin-left: 34%;
    z-index: 3;
    width: 125px;
    height: 100px;
  }

  .wrapper {
    margin: 100px 30%;
    align-content: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    background: #ebebef;
    border-radius: 50%;
    -webkit-animation: circle 60s infinite linear;
  }

  @-webkit-keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .outer {
    position: relative;
    display: flex;
    left: 20px;
    top: 20px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background-color: white;
  }

</style>
