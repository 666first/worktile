<template>
<div class="nav">
    <el-menu background-color="#22d7bb" :router="true" text-color="#fff" active-text-color="#fff" :default-active="active" @select="change">
        <el-menu-item index="/"> 消息 </el-menu-item>
        <el-menu-item index="/item">项目</el-menu-item>
        <el-menu-item index="/calendar">日历</el-menu-item>
        <el-menu-item index="/meshdisk">网盘</el-menu-item>
        <el-menu-item index="/briefing">简报</el-menu-item>
    </el-menu>
</div>
</template>
<script>
export default {
  data(){
    return{
      active:'/'
    }
  },
  created(){
    this.active = localStorage.getItem('bar-active') 
  },
  methods:{
    change(key){
      console.log(key);
      localStorage.setItem('bar-active',key)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  
  background: #22d7bb;
  .el-menu-item{
    padding: 0 !important;
    height: 80px;
    line-height: 80px;
  }
  .el-menu-item.is-active{
    background: #18bfa4 !important;
  }
}
</style>
