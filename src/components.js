import mian from "./components/item.vue"

export default (Vue)=>{
  //第一个参数是页面使用的名字，第二个参数是import引入来的名字
	Vue.component("item-header",mian)
}