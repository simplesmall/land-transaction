<template>
  <div  style="background:#f5f5f5;">
    <div class="wrapper">
      <div class="header">
        SEND A MESSAGE
      </div>
      <div class="form">
        <form>
          <p>HELLO JOE,</p>
          <label for="email">Your Message:</label>
          <textarea name="message" id="message" value="Your Message"></textarea>

          <p>BEST,</p>
          <label for="name">Name:</label>
          <input type="text" name="name" value="" id="name" />

          <label for="email">Email:</label>
          <input type="text" name="email" value="" id="email" />

          <input type="submit" name="submit" value="NOW, I SEND THANKS!" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ThirteenSendMsg",
    id: 12
  }
</script>

<style scoped>
  div, h1, h2, form, fieldset, input, textarea, footer, p{
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
  }
  .wrapper {
    width: 530px;
    margin: 0px auto 0;
    height: calc(100vh - 48px);
    background: #f5f5f5;
  }
  .header{
    padding-top: 20px;
    font-size: 35px;
    margin-bottom: 20px;
    color: black;
    font-family: Tahoma;
  }
  .form{
    overflow: hidden;
    height: 447px;
    position: relative;
    top:0px;
    transition:  all 1s ease-in-out .3s;
  }
  p{
    font-family: tahoma;
    font-size: 24px;
    color: #757575;
  }
  .form:before{
    content: '';
    position: absolute;
    bottom: 128px;
    left: 0px;
    background: url("../../assets/project_img/before.png");
    width: 530px;
    height: 317px;
  }
  .form:after{
    content: '';
    position: absolute;
    bottom: -56px;
    left: 0;
    background: url("../../assets/project_img/after.png");
    width: 530px;
    height: 317px;
  }
  .form:hover{
    height: 777px;
    top: -200px;
  }
  form{
    background: url('../../assets/project_img/letter_bg.png');
    position: relative;
    top: 200px;
    overflow: hidden;
    height: 200px;
    width: 400px;
    margin: 0px auto;
    padding: 20px;
    border: 1px solid white;
    border-right: 3px;
    transition: all 1s ease-in-out .3s;
  }
  .form:hover form{
    height: 530px;
  }
  label{
    margin: 11px 20px 0 0 ;
    font-size: 15px;
    color: gray;
    text-transform: uppercase;
  }
  input[type=text], textarea{
    font: 14px normal uppercase, arial, serif;
    color: dimgray;
    background: none;
    width: 380px;
    height: 37px;
    padding: 0px 10px;
    margin: 0 0 10px 0;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
  }
  textarea{
    height: 80px;
    padding-top: 14px;
  }
  textarea:focus,
  input[type=text]:focus{
    background: url('../../assets/project_img/letter_bg.png');
  }
  .form input[type=submit]{
    position: relative;
    font-family: tahoma;
    font-size: 24px;
    color: gray;
    width: 300px;
    text-align: center;
    opacity: 0;
    background: none;
    cursor: pointer;
    border-radius: 3px;
    transition: opacity 0.7s ease-in-out 0s;
  }
  .form:hover input[type=submit]{
    z-index: 1;
    opacity: 1;
    transition: opacity 0.5s ease-in-out 1.3s;
  }

</style>
