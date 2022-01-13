<template>
  <div>
    <!-- <embed class="fileView" :src="asyncProgramming" /> -->
    发多少{{$route.meta.pdfPath}}
  </div>
</template>
<script lang='ts' setup>
import {useRoute} from 'vue-router'
const $route = useRoute();
console.log(`${$route.meta.pdfPath}`)
// import asyncProgramming from `${$route.meta.pdfPath}`
</script>
<style lang="less">
 
</style>
