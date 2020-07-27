const actions = {
  setTestAct(context,param){
    context.commit('setTest',param)
    console.log("执行了actions")
  }
}
export default  actions
