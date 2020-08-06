<template>
  <div>
    <div class="wrapper">
      <div class="board">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NineMaster",
    id: 8
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: calc(100vh - 40px);
    background: #262626;
    margin: 0;
    padding: 0;
  }
  .board{
    position: absolute;
    width: 40%;
    height: 200px;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
