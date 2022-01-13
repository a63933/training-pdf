<template>
    <div class="navLib">
        <!-- <router-link to="/one-one-one" v-slot="{ navigate }">
            <div @click="navigate" class="navItem" role="link">函数式编程</div>
        </router-link>
        <router-link to="/one-one-two" v-slot="{ navigate }">
            <div @click="navigate" class="navItem" role="link">异步编程</div>
        </router-link> -->
        <router-link v-for="item in linkArr" :key="item.to" :to="item.to" v-slot="{ navigate }">
            <div @click="navigate" class="navItem" role="link">{{item.text}}</div>
        </router-link>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import listData from '@utils/const.ts';

const linkArr = ref<any[]>(listData.pdfList.map((item: any) => ({
    to: item.path,
    text: item.text
})))

</script>
<style lang="less">
.navLib {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    a{
        text-decoration: none;
    }
    .navItem {
        width: 100%;
        height: 34px;
        line-height: 34px;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .router-link-exact-active >  .navItem {
        color: orange;
    }
}
</style>
