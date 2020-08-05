<template>
  <div>
    <div class="wrapper">
      <ul>
        <li class="prev"><span></span></li>
        <li class="next"><span></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FourBtn",
    id: 3
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: calc(100vh - 40px);
    background-color: #EBEBEF;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    position: absolute;
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: none;
    float: left;
    margin: 0 10px;
    width: 80px;
    height: 80px;
    background: #262626;
    color: white;
    border-radius: 50%;
    line-height: 80px;
    transition: .5s;
  }

  ul li:hover {
    background: #0070ff;
  }

  ul li span {
    position: absolute;
    transform: rotate(45deg);
    width: 20px;
    height: 20px;
    border: 4px solid #fff;
    transition: .5s;
  }

  ul li.next span {
    border-left: none;
    border-bottom: none;
    top:30%;
    right: 20%;
  }
  ul li.next:hover span{
    right: 16%;
  }
  ul li.next span::before{
    content: "";
    position: absolute;
    right: 0%;
    transform: rotate(-45deg)  scaleX(0);
    width: 38px;
    height: 4px;
    background: #fff;
    transform-origin: right;
    /*transform: rotate(-45deg) translate(0,25px) scaleX(0);*/
    transition: .5s;
  }
  ul li.next:hover span::before{
    transform: rotate(-45deg)  scaleX(1);
  }
  ul li.prev span {
    border-left: none;
    border-top: none;
    transform: rotate(135deg);
    top:30%;
    left: 20%;
  }
  ul li.prev:hover span{
    left: 16%;
  }
  ul li.prev span::before{
    content: "";
    position: absolute;
    left: -77%;
    top: 105%;
    width: 38px;
    height: 4px;
    background: #fff;
    transform-origin: right;
    transition: .5s;
    transform: rotate(45deg) scaleX(0);
  }
  ul li.prev:hover span::before{
    transform:rotate(45deg)  scaleX(1);
  }

</style>
