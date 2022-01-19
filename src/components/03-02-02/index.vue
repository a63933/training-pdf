<template>
  <div>
    <embed class="fileView" :src="pdfFile" />
    <!-- 发多少{{$route.meta.pdfPath}} -->
  </div>
</template>
<script lang='ts' setup>
import pdfFile from './03-02-02-Vue.js源码剖析-虚拟 DOM.pdf';
</script>
<style lang="less">
 
</style>
