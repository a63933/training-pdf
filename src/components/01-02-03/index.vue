<template>
  <div>
    <embed class="fileView" :src="pdfFile" />
    <!-- 发多少{{$route.meta.pdfPath}} -->
  </div>
</template>
<script lang='ts' setup>
import pdfFile from './01-02-03-JavaScript性能优化.pdf';
</script>
<style lang="less">
 
</style>
