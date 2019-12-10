<template>
  <div>
    <div class="header">
      <div class="hleft">个人网盘</div>
      <div class="hright">
        <div><b>+</b>新建</div>
        <div>上传文件</div><span>↓</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
  width: 100%;
  height: 50px;
  .hleft {
    margin-left: 15px;
  }
  .hright {
    display: flex;
    margin-right: 15px;
    & > div:nth-child(1) {
      padding: 3px 20px;
      font-size: 14px;
      color: #22d7bb;
      background-color: transparent;
      background-image: none;
      border: 1px solid #22d7bb;
      border-radius: 5px;
      margin-right: 10px;
      line-height: 20px;
    }
    & > div:nth-child(1):hover {
      background: #22d7bb;
      color: #fff;
      transition: all 0.3s;
    }
    & > div:nth-child(2) {
      padding: 3px 10px;
      font-size: 14px;
      color: #fff;
      background-color: #22d7bb;
      border: 1px solid #22d7bb;
      border-radius: 26px 0 0 26px;
      line-height: 20px;
      text-align: right;
    }
    span {
      padding: 3px 10px;
      background-color: #22d7bb;
      line-height: 20px;
      border-radius: 0 50% 50% 0;
    }
  }
}
</style>