<template>
  <div class="baseCSS">
    <div class="header">
      <div class="backBtn">
        <router-link to="/">返回</router-link>
      </div>
      <span
        style="margin-right: 41%;color: gray;font-size: 20px;line-height: 40px">这是  {{demoList[choose].name}}  页面</span>
    </div>
    <OneLogin v-if="choose == 0"></OneLogin>
    <TwoBtn v-else-if="choose ==1"></TwoBtn>
    <ThreePage v-else-if="choose ==2"></ThreePage>
    <FourBtn v-else-if="choose ==3"></FourBtn>
    <FiveAllBtn v-else-if="choose ==4"></FiveAllBtn>
    <SixBtn v-else-if="choose ==5"></SixBtn>
    <SevenClock v-else-if="choose ==6"></SevenClock>
    <EightShare v-else-if="choose ==7"></EightShare>
    <NineMaster v-else-if="choose ==8"></NineMaster>
    <TenShader v-else-if="choose ==9"></TenShader>
    <ElevenSmoke v-else-if="choose ==10"></ElevenSmoke>
    <TwiveRipple v-else-if="choose ==11"></TwiveRipple>
    <ThirteenSendMsg v-else-if="choose ==12"></ThirteenSendMsg>
    <FourTeenDownload v-else-if="choose ==13"></FourTeenDownload>
  </div>
</template>

<script>
  import OneLogin from "./OneLogin";
  import TwoBtn from "./TwoBtn";
  import ThreePage from "./ThreePage";
  import FourBtn from "./FourBtn";
  import FiveAllBtn from "./FiveAllBtn";
  import SixBtn from "./SixBtn";
  import SevenClock from "./SevenClock";
  import EightShare from "./EightShare";
  import NineMaster from "./NineMaster";
  import TenShader from "./TenShader";
  import ElevenSmoke from "./ElevenSmoke";
  import TwiveRipple from "./TwiveRipple";
  import ThirteenSendMsg from "./ThirteenSendMsg";
  import FourTeenDownload from "./FourTeenDownload";

  export default {
    name: "Test",
    data() {
      return {
        choose: 0,
        demoList: [
          {id: 0, name: 'OneLogin'},
          {id: 1, name: 'TwoBtn'},
          {id: 2, name: 'ThreePage'},
          {id: 3, name: 'FourBtn'},
          {id: 4, name: 'FiveAllBtn'},
          {id: 5, name: 'SixBtn'},
          {id: 6, name: 'SevenClock'},
          {id: 7, name: 'EightShare'},
          {id: 8, name: 'NineMaster'},
          {id: 9, name: 'TenShader'},
          {id: 10, name: 'ElevenSmoke'},
          {id: 11, name: 'TwiveRipple'},
          {id: 12, name: 'ThirteenSendMsg'},
          {id: 13, name: 'FourTeenDownload'},
          {id: 11, name: 'TwiveRipple'},
          {id: 11, name: 'TwiveRipple'},
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
        case '3':
          this.choose = FourBtn.id;
          break;
        case '4':
          this.choose = FiveAllBtn.id;
          break;
        case '5':
          this.choose = SixBtn.id;
          break;
        case '6':
          this.choose = SevenClock.id;
          break;
        case '7':
          this.choose = EightShare.id;
          break;
        case '8':
          this.choose = NineMaster.id;
          break;
        case '9':
          this.choose = TenShader.id;
          break;
        case '10':
          this.choose = ElevenSmoke.id;
          break;
        case '11':
          this.choose = TwiveRipple.id;
          break;
        case '12':
          this.choose = ThirteenSendMsg.id;
          break;
        case '13':
          this.choose = FourTeenDownload.id;
          break;
        default:
          this.choose = 0
      }
    },
    components: {
      SixBtn,
      OneLogin,
      TwoBtn,
      ThreePage,
      FourBtn,
      FiveAllBtn,
      SevenClock,
      EightShare,
      NineMaster,
      TenShader,
      ElevenSmoke,
      TwiveRipple,
      ThirteenSendMsg,
      FourTeenDownload,
    }
  }
</script>

<style scoped>
  .baseCSS {
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

  a {
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
