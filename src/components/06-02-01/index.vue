<template>
  <div>
    <embed class="fileView" :src="pdfFile" />
    <!-- 发多少{{$route.meta.pdfPath}} -->
  </div>
</template>
<script lang='ts' setup>
import pdfFile from './React Native.pdf';
</script>
<style lang="less">
 
</style>
