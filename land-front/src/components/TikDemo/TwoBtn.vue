<template>
  <div class="wrapper">
    <label class="centerLabel">
      <input type="checkbox" name="">
      <span class="btn"></span>
      <i class="fa fa-power-off"></i>
    </label>
  </div>
</template>

<script>

  export default {
    name: "TwoBtn",
    id: 1
  }
</script>

<style scoped>
  .wrapper {
    width: auto;
    height: calc(100vh - 40px);
    background-color: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .centerLabel {
    position: relative;
    width: 80px;
    height: 80px;
    cursor: pointer;
    background-color: red;
    border-radius: 50%;
  }

  .centerLabel .btn {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: #1b1b1b;
    border-radius: 50%;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 1),
    inset 0 -2px 5px rgba(0, 0, 0, 1),
    inset 0 2px 2px rgba(255, 255, 255, 0.5),
    0 0 0 2px #000,
    0 0 0 5px #0c0c0c,
    0 0 0 5.5px #080808;
  }

  .centerLabel input[type="checkbox"]:checked ~ .btn {
    box-shadow: 0 0 0 rgba(0, 0, 0, 1),
    inset 0 -2px 5px rgba(0, 0, 0, 1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    0 0 0 2px #000,
    0 0 0 5px #0c0c0c,
    0 0 0 5.5px #00a1ff;
  }

  .centerLabel input[type='checkbox'] {
    -webkit-appearance: none;
  }

  .centerLabel .fa {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 2.5em;
    color: #0c0c0c;
  }

  .centerLabel input[type="checkbox"]:checked ~ .fa {
    color: #00ffe7;
    text-shadow: 0 0 15px #00a1ff,
    0 0 15px #00a1ff;
  }
</style>
