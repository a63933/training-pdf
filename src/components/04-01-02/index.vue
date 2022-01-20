<template>
  <div>
    <embed class="fileView" :src="pdfFile" />
    <!-- 发多少{{$route.meta.pdfPath}} -->
  </div>
</template>
<script lang='ts' setup>
import pdfFile from './Virtual DOM 及 Diff 算法.pdf';
</script>
<style lang="less">
 
</style>
