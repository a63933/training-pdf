<template>
  <div>
    <embed class="fileView" :src="pdfFile" />
    <!-- 发多少{{$route.meta.pdfPath}} -->
  </div>
</template>
<script lang='ts' setup>
import pdfFile from './03-02-01-Vue.js源码剖析-响应式原理.pdf';
</script>
<style lang="less">
 
</style>
