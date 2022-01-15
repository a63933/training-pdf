<template>
  <div class="container">
    <div class="pageNav">
      <PageNav />
    </div>
    <div class="pageView">
      <router-view></router-view>
    </div>
    <!-- <embed class="fileView" :src="aa" /> -->
  </div>
</template>

<script lang="ts" setup>
import PageNav from '@/components/pageNav.vue';
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  vertical-align: top;
}
div.container{
  display: flex;
  height: 100vh;
  div.pageNav{
    width: 160px;
    box-sizing: border-box;
    background-color: #fff;
  }
  div.pageView{
    width: calc(100vw - 160px);
  }
}
.fileView{
  width: calc(100vw - 160px);
  height: 100vh;
}
</style>