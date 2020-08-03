<template>
  <div>
    <h3>Demo is funny</h3>
    <ui>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
    </ui>
  </div>
</template>

<script>
  export default {
    name: "ShowDemo"
  }
</script>

<style scoped>
  html,body{
    width: 100%;
    overflow-x: scroll;
  }
  ui li{
    width: 300px;
    float: left;
  }

</style>
