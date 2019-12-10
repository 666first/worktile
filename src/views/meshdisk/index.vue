<template>
  <div>
    <div id="nav">
      <h3 class="headtitle">网盘</h3>
      <div class="inputbox"><input type="text"
               placeholder="搜索文件、文件夹"></div>
      <router-link to="/meshdisk">企业网盘</router-link>
      <router-link to="/meshdisk/geren">个人网盘</router-link>
      <router-link to="/meshdisk/chengyuan">成员</router-link>
      <router-link to="/meshdisk/biaoqian">标签</router-link>
      <router-link to="/meshdisk/gongxiang">与我共享</router-link>
    </div>
    <router-view class="xianshi" />

  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  .headtitle {
    padding-left: 20px;
    text-align: left;
  }
  .inputbox {
    padding: 0 20px 10px;
    input {
      background-color: #f3f3f3;
      border-radius: 20px;
      line-height: 1.5;
      border: none;
      outline-width: 0;
      text-indent: 1.8em;
    }
    input::-webkit-input-placeholder {
      font-size: 14px;
      color: #aaaaaa;
    }
  }

  position: absolute;
  top: 0;
  left: 80px;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  a {
    display: block;
    width: 100%;
    padding: 8px 10px 8px 20px;
    color: #333;
    text-align: left;
    box-sizing: border-box;
  }
  border-right: 1px solid #eee;
}
.xianshi {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 320px;
  background: #eee;
}
.router-link-exact-active {
  color: #22d7bb;
  background: rgba($color: #22d7bb, $alpha: 0.2);
  border-right: 3px solid #22d7bb;
}
</style>