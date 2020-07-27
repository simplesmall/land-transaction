const mutations={
  setTest(state,param){
    console.log("执行了mutations")
    state.test = param
  }
}
export default mutations
