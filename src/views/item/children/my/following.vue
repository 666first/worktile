<template>
    <el-tabs v-model="activeName">
      <el-tab-pane label="活动任务" name="first"  class="none">
         <i class="el-icon-document"></i>
          沒有任務
      </el-tab-pane>
      <el-tab-pane label="完成任务" name="second" class="none">
          <i class="el-icon-document"></i>
          沒有任務
      </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
 data() {
    return {
      activeName: "first"
    };
  },
}
</script>

<style lang="scss" scoped>
.el-tabs {
  width: 100%;
  height: 100%;
  .none {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    bottom: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    color: #ccc;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    i {
      margin-bottom: 10px;
      font-size: 80px;
    }
  }
}
</style>