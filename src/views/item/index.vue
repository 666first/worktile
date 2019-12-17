<template>
  <div>
    <div class="item_nav">
      <div class="item_title">
        项目 <i class="fr el-icon-suitcase-1"></i>
      </div>
      <div class="sousuo">
        <i class="el-icon-search"></i>
        <input type="text"  placeholder="搜索任务名称，编号"/>
      </div>
      <el-menu background-color="#fff" :router="true" text-color="#000" active-text-color="#18bfa4" :default-active="active" @select="change">
        <el-submenu  index="/item/menu">
          <template slot="title">
            <span>工作</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/item/my"><i class="el-icon-s-custom"></i>我的任务</el-menu-item>
            <el-menu-item index="/item/gongshi"><i class="el-icon-s-data"></i>工时视图</el-menu-item>
            <el-menu-item index="/item/tongji"><i class="el-icon-notebook-1"></i>统计报表</el-menu-item>
            <el-menu-item index="/item/time"><i class="el-icon-time"></i>时间视图</el-menu-item>
            <el-menu-item index="/item/renyuan"><i class="el-icon-user-solid"></i>人员视图</el-menu-item>
            <el-menu-item index="/item/rili"><i class="el-icon-date"></i>日历视图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/item/shili">
          <template slot="title">
            <span>项目</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/item/shili"><i class="el-icon-receiving"></i>示例项目</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/item/peizhi"><i class="el-icon-setting"></i>配置中心</el-menu-item>
        <el-menu-item index="/item/huishou"><i class="el-icon-delete"></i>回收站</el-menu-item>
      </el-menu>
    </div>
    <router-view class="itemview"></router-view>
  </div>
</template>

<script>
export default {
data(){
    return{
      active:'/item/my'
    }
  },
  created(){
    this.active = localStorage.getItem('item-active') 
  },
  methods:{
    change(key){
      console.log(key);
      localStorage.setItem('item-active',key)
    }
  }
}
</script>

<style lang="scss" scoped>
.item_title{
  box-sizing: border-box;
  padding: 20px;
  text-align: left;
  .fr{
    float: right;
  }
}
.sousuo{
  box-sizing: border-box;
  padding:7px 10px;
  width: 90%;
  margin: 0 auto;
  border-radius: 40px;
  background: #fff;
  border:1px solid #89d8cb;
  text-align: left;
  input{
    outline: none;
    border:none;
    font-size: 12px;
    width: 120px;
    box-sizing: border-box;
    padding-left: 5px;
    color:#aaa;
  }
}
.item_nav{
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  width:200px ;
  background: #fff;
  .el-submenu{
    text-align: left;
    i{
      color: #18bfa4;
    }
  }
  .el-menu-item{
    text-align: left;
  }
  .el-menu-item.is-active{
    background: #89d8cb !important;
  }
}
.itemview{
  position: absolute;
  right: 0;
  bottom: 0;
  left:200px;
  top:0;
  font-size: 16px;
  border-left: 1px solid #eee;
 
}
</style>
<style lang="scss">
  .itemview .content {
      text-align: left;
      position: absolute;
      top: 50px;
      left: 0;
      bottom: 0;
      right: 0;  
  }
  .el-tabs__nav-wrap{
    box-sizing: border-box;
    padding-left:30px; 
    background: #fff;
  }
  .el-tabs__item:hover{
    color: #18bfa4;
  }
  .el-tabs__item.is-active{
    color: #18bfa4;
  }
  .el-tabs__active-bar{
   background: #18bfa4;
  }
  .el-tabs__content{
    position: absolute;
    top: 40px;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
  }
</style>