<template>
    <div class="header">
      <div>
        <i :class="data.icon"></i>
        {{data.title}}
      </div>
      <div class="list">
        <el-menu :default-active="data.list[0].path" class="el-menu-demo" mode="horizontal" :router="true">
          <el-menu-item v-for="(item,index) in data.list" :key='index' :index="item.path">{{item.title}}</el-menu-item>
        </el-menu>
      </div>
    </div>
</template>

<script>
export default {
  props:['data']
};
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  display: flex;
  box-sizing: border-box;
  padding: 0 30px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  .el-icon-s-custom {
    color: #18bfa4;
  }
  .list {
    flex: auto;

    ul {
      float: left;
      margin-left: 50%;
      transform: translate(-50%, 0);
      overflow: hidden;
      li:hover {
          color: #18bfa4;
          border-bottom: 3px solid #18bfa4;
      }
    }
  }
}
.el-menu--horizontal>.el-menu-item{
  height: 50px;
  line-height: 50px;
  &.is-active {
    border-bottom: 2px solid #18bfa4;
    color: #18bfa4;
  }
}
</style>
