<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="活动任务" name="first">
      <div>
        <div>
          收件箱
          <el-progress :percentage="50"></el-progress>
        </div>
        <ul>
          <li>
            <el-button type="danger">
              <i class="el-icon-circle-close"></i> 未完成
            </el-button>
            <p>任务未完成</p>
          </li>
          <li>
            <el-button type="success">
              <i class="el-icon-circle-check"></i> 已完成
            </el-button>
            <p>任务已完成</p>
          </li>
        </ul>
        <div>+点击添加新任务</div>
      </div>

      <div>
        <div>
          今天要做
          <el-progress :percentage="50"></el-progress>
        </div>
        <ul>
          <li>
            <el-button type="danger">
              <i class="el-icon-circle-close"></i> 未完成
            </el-button>
            <p>任务未完成</p>
          </li>
          <li>
            <el-button type="success">
              <i class="el-icon-circle-check"></i> 已完成
            </el-button>
            <p>任务已完成</p>
          </li>
        </ul>
        <div>+点击添加新任务</div>
      </div>

      <div>
        <div>
          下一步要做
          <el-progress :percentage="50"></el-progress>
        </div>
        <ul>
          <li>
            <el-button type="danger">
              <i class="el-icon-circle-close"></i> 未完成
            </el-button>
            <p>任务未完成</p>
          </li>
          <li>
            <el-button type="success">
              <i class="el-icon-circle-check"></i> 已完成
            </el-button>
            <p>任务已完成</p>
          </li>
        </ul>
        <div>+点击添加新任务</div>
      </div>

      <div>
        <div>
          以后要做
          <el-progress :percentage="50"></el-progress>
        </div>
        <ul>
          <li>
            <el-button type="danger">
              <i class="el-icon-circle-close"></i> 未完成
            </el-button>
            <p>任务未完成</p>
          </li>
          <li>
            <el-button type="success">
              <i class="el-icon-circle-check"></i> 已完成
            </el-button>
            <p>任务已完成</p>
          </li>
        </ul>
        <div>+点击添加新任务</div>
      </div>
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
  }
};
</script>

<style lang="scss" scoped>
.el-tabs {
  width: 100%;
  height: 100%;
  .el-tab-pane {
    display: flex;
    align-items: flex-start;
    & > div {
      flex: none;
      margin: 20px 0 0 20px;
      background: #fff;
      width: 280px;
      min-width: 280px;
      height: auto;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0 20px;
      & > div {
        padding: 10px 0;
      }
      & > div:nth-last-child(1) {
        font-size: 14px;
        cursor: pointer;
      }
      ul li {
        box-sizing: border-box;
        padding: 20px 10px;
        margin: 10px 0;
        box-shadow: 0px 5px 10px #ccc;
        cursor: pointer;
        .el-button {
          padding: 5px 10px;
        }
        p {
          margin: 20px 0 10px;
        }
      }
    }
  }
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