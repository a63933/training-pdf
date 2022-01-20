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

const linkArr = ref<any[]>([
    {
        to: '/one-one-one',
        text: '函数式编程'
    },
    {
        to: '/one-one-two',
        text: '异步编程'
    },
    {
        to: '/one-two-one',
        text: 'ECMAScript'
    },
    {
        to: '/one-two-two',
        text: 'TypeScript'
    },
    {
        to: '/one-two-three',
        text: 'JavaScript性能优化'
    },
    {
        to: '/one-two-four',
        text: '性能优化'
    },
    {
        to: '/two-one-one',
        text: '前端工程化'
    },
    {
        to: '/two-one-two',
        text: '脚手架工具'
    },
    {
        to: '/two-one-three',
        text: '自动化构建'
    },
    {
        to: '/two-two-one',
        text: '模块化开发'
    },
    {
        to: '/two-two-two',
        text: 'webpack5'
    },
    {
        to: '/two-two-four',
        text: '规范化标准'
    },
    {
        to: '/three-one-one',
        text: 'vue基础笔记'
    },
    {
        to: '/three-two-one',
        text: 'vue源码-响应式原理'
    },
    {
        to: '/three-two-two',
        text: 'vue源码-虚拟DOM'
    },
    {
        to: '/three-two-three',
        text: 'vue源码-模板编译和组件化'
    },
    {
        to: '/three-three-one',
        text: 'vuex'
    },
    {
        to: '/three-three-two',
        text: '服务端渲染基础'
    },
    {
        to: '/three-three-three',
        text: 'nuxtjs基础'
    },
    {
        to: '/three-three-four',
        text: 'nuxtjs综合案例'
    },
    {
        to: '/three-four-one',
        text: '搭建自己的ssr'
    },
    {
        to: '/three-four-three',
        text: '组件化开发'
    },
    {
        to: '/three-five-one',
        text: 'Vue3'
    },
    {
        to: '/three-six-one',
        text: 'vue项目'
    },
    {
        to: '/three-seven-one',
        text: 'vue3项目'
    },
    {
        to: '/four-one-one',
        text: 'React基础回顾'
    },
    {
        to: '/four-one-two',
        text: 'Virtual DOM 及 Diff 算法'
    },
    {
        to: '/four-one-three',
        text: 'fiber'
    },
    {
        to: '/four-two-one',
        text: 'Redux'
    },
    {
        to: '/four-two-two',
        text: 'MobX'
    },
    {
        to: '/four-two-three',
        text: 'MobX6'
    },
])

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
        font-size: 14px;
        box-sizing: border-box;
        padding: 0px 4px;
        height: 30px;
        line-height: 30px;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .router-link-exact-active > .navItem {
        color: orange;
        background: #f1f1f1;
    }
}
</style>
