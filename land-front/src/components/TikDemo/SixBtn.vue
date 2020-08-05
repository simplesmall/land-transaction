<template>
    <div class="wrapper">
      <div class="dialog">
        <p>你想怎么操作?</p>
        <label>
          <input type="radio" name="like">
          <span class="devote">捐赠</span>
        </label>
        <label>
          <input type="radio" name="coll">
          <span class="collection">收藏</span>
        </label>
      </div>
    </div>
</template>

<script>
  export default {
    name: "SixBtn",
    id: 5,
  }
</script>

<style scoped>
  .wrapper {
    height: calc(100vh - 40px);
    width: 100%;
    background-color: #262626;
    margin: 0;
    padding: 0;
  }

  .dialog {
    position: absolute;
    top:30%;
    left: 35%;
    width: 250px;
    background: #000;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    /*transform: translate(-50%,50%);*/
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,1);
  }
  .dialog:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.05);
    transform: skewX(-3deg);
    pointer-events: none;
  }
  .dialog p{
    margin: 15px 0;
    padding: 0;
    color: #fff;
    font-size: 20px;
  }
  .dialog label{
    position: relative;
    cursor: pointer;
  }
  .dialog label input{
    display: none;
  }
  .dialog label span{
    position: relative;
    display: inline-block;
    margin: 20px 10px;
    padding: 5px;
    width: 50px;
    background: #000;
    border: 1px solid #444;
    color: #444;
    border-radius: 4px;
  }
  .dialog label input:checked ~ span{
    color: #fff;
    border: 1px solid #008eff;
  }
  .dialog label input:checked ~ span:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background: #008eff;
    z-index: -1;
    filter: blur(10px);
  }
  .dialog label input:checked ~ span:after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #008eff;
    z-index: -1;
    filter: blur(15px);
  }
  .dialog label input:checked ~ span.devote{
    color: #62ff00;
    border-color: #62ff00;
    box-shadow: inset 0 0 10px #62ff00;
  }
  .dialog label input:checked ~ span.devote:before,
  .dialog label input:checked ~ span.devote:after{
    background: #62ff00;
  }
  .dialog label input:checked ~ span.collection{
    color: red;
    border-color: red;
    box-shadow: inset 0 0 10px #ff0000;
  }
  .dialog label input:checked ~ span.collection:before,
  .dialog label input:checked ~ span.collection:after{
    background: #ff0000;
  }

</style>
