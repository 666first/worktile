<template>
  <div id="app">
    <router-view name="leftBar"></router-view>
    <router-view class="mainview"/>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
    }
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
  background: #eee;
}

.mainview{
  position: fixed;
  left: 80px;
  top: 0;
  bottom: 0;
  right: 0;
  background: #eee;
}
</style>

