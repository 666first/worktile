<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/item">item</router-link>
      <router-link to="/calendar">calendar</router-link>
      <router-link to="/meshdisk">meshdisk</router-link>
      <router-link to="/briefing">briefing</router-link>
    </div>
    <router-view />
    <!-- <el-col :span="2">
      <div class="nav">
        <el-menu :default-active="activeIndex" background-color="#22d7bb">
          <el-menu-item index="1">
            <router-link to="/">Home</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/item">item</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/calendar">calendar</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/meshdisk">meshdisk</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/briefing">briefing</router-link>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="22">
        <router-view />
    </el-col> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
// .nav{
//   height: 100%;
// }
#nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #42b983;
  width: 80px;
  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    height: 80px;
    line-height: 80px;
    &.router-link-exact-active {
      color: #fff;
      background: #2c3e50;
    }
  }
}
</style>
