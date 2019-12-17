<template>
  <div>
    <div class="header">
      <div>
       <i class="el-icon-s-data"></i>工时视图
      </div>
      <div class="list">
        <ul>
          <li class="active">工时明细</li>
          <li>工时汇总</li>
          <li>工时统计</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="每日工时明细" name="first">
          
        </el-tab-pane>
        <el-tab-pane label="成员工时明细" name="second">
          
        </el-tab-pane>
        <el-tab-pane label="项目工时明细" name="three">
         
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeName:'first'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    background: #fff;
    display: flex;
    box-sizing: border-box;
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    border-bottom:  1px solid #ccc;
    overflow: hidden;
    .el-icon-s-custom{
      color:#18bfa4
    }
    .list{
      flex: auto;
      
      ul{
        float: left;
        margin-left:50%;
        transform: translate(-50%,0);
        overflow: hidden;
        li{
          float: left;
          box-sizing: border-box;
          margin: 0 10px;
          height: 50px;
          padding: 0 10px;
          font-size: 14px;
          cursor: pointer;
           &:hover{
            color: #18bfa4;
            border-bottom: 3px solid #18bfa4;
          } 
          &.active{
            color: #18bfa4;
            border-bottom: 3px solid #18bfa4;
          }
        }
       
       
      }
      
    }
  }
  .content{
    text-align: left;
    
  }
  
</style>