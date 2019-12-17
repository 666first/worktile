<template>
  <div>
    <item-header :data="my"></item-header>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
// import header from "../../../../components/item.vue"
export default {
  data() {
    return {
        my:{
            icon: "el-icon-s-data",
            title: "工时视图",
            list: [{title:"工时明细",path:"/item/gongshi/mingxi"},{title:"工时汇总",path:"/item/gongshi/huizong"},{title:"工时统计",path:"/item/gongshi/tongji"}]
        }
     
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
