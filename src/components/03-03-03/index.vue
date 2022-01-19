<template>
  <div>
    <embed class="fileView" :src="pdfFile" />
    <!-- 发多少{{$route.meta.pdfPath}} -->
  </div>
</template>
<script lang='ts' setup>
import pdfFile from './3-3-3-nuxtjs基础.pdf';
</script>
<style lang="less">
 
</style>
