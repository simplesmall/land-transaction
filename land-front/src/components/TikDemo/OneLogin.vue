<template>
    <div class="container">
      <form class="login center">
        <h2 style="margin-bottom: 20px;">登录框</h2>
          <input type="text" class="center control" placeholder="user name">
          <input type="text" class="center control" placeholder="password">
          <label style="float: left;">
            <input type="checkbox" name="remember me" id="">
            remember me
          </label>
          <input type="button" class="btn" value="login">
      </form>
    </div>
</template>

<script>
  export default {
    name: "OneLogin",
    id:0
  }
</script>

<style scoped>
  body {
    background-color: #EBEBEF;
    margin: 0;
    padding: 0;
  }

  .container {
    margin-top: 80px;
  }

  .login {
    max-width: 380px;
    margin: 0 auto;
    background-color: #fff;
    padding: 15px 40px 50px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
  ;
  }

  .center {
    text-align: center;
  }

  .control {
    width: 100%;
    height:calc(1.5em + .75rem + 2px);
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  input::placeholder{
    color: #ced4da;
  }
  input:focus{
  }

  .btn {
    background: blue;
    margin-top: 20px;
    width: 100%;
    color: white;
    font-size: 24px;
  }

  .btn:hover {
    background: rgb(86, 142, 206);
    color: pink;
  }
</style>
