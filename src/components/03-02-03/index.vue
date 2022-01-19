<template>
  <div>
    <embed class="fileView" :src="pdfFile" />
    <!-- 发多少{{$route.meta.pdfPath}} -->
  </div>
</template>
<script lang='ts' setup>
import pdfFile from './03-02-03-Vue.js源码剖析-模板编译和组件化.pdf';
</script>
<style lang="less">
 
</style>
