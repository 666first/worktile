<style lang="scss" scoped>
.left-tab {
  width: 240px;
  position: fixed;
  left: 80px;
  top: 0;
  bottom: 0;
  background: rgba(253, 253, 253, 0.95);
}
.header {
  height: 50px;
  display: flex;
}
.left-tab .header .title {
  float: left;
  margin: 0 20px;
  color: #333;
  line-height: 50px;
  flex-grow: 1;
  font-size: 16px;
  text-align: left;
}
.left-tab .header .title2 {
  float: right;
  margin: 0 20px;
  line-height: 50px;
}
.left-tab .header .title1 i {
  font-weight: 600;
  font-size: 18px;
}
.left-tab .header .title2 i {
  font-weight: 600;
  font-size: 18px;
}
.left-tab .header .title2 i:hover {
  color: #42b999;
}
</style>
<template>
  <div>
    <div class="left-tab">
      <div class="header">
        <span class="title">
          信息
          <i class="iconfont">
            &#xe632;
          </i>
        </span>
        <span class="title2">
          <i class="iconfont">
            &#xe62f;
          </i>
        </span>
      </div>
      <div class="footer">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

