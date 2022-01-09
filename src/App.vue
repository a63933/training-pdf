<template>
  <div class="container">
    <embed class="fileView" :src="aa" />
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
.fileView{
  width: 100vw;
  height: 100vh;
}
</style>