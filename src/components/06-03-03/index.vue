<template>
  <div>
    <embed class="fileView" :src="pdfFile" />
    <!-- 发多少{{$route.meta.pdfPath}} -->
  </div>
</template>
<script lang='ts' setup>
import pdfFile from './Flutter 之 Mac 环境搭建.pdf';
</script>
<style lang="less">
 
</style>
