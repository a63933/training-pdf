<template>
  <div class="container">
    <div class="pageNav">
      导航栏
    </div>
    <div class="pageView">
      <router-view></router-view>
    </div>
    <!-- <embed class="fileView" :src="aa" /> -->
  </div>
</template>

<script lang="ts" setup>
import aa from '@/assets/aa.pdf'
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
    width: 100px;
    box-sizing: border-box;
    background-color: #eee;
  }
  div.pageView{
    width: calc(100vw - 100px);
  }
}
.fileView{
  width: calc(100vw - 100px);
  height: 100vh;
}
</style>