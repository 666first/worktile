<template>
  <div>
    <item-header :data="my"></item-header>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
        my:{
            icon: "el-icon-s-custom",
            title: "我的任务",
            list: [{title:"我负责的",path:"/item/my/directed"},{title:"我分配的",path:"/item/my/delegated"},{title:"我参与的",path:"/item/my/following"},{title:"我创建的",path:"/item/my/created"},],

        }
     
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
