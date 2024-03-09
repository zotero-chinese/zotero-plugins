<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleMenuSelect">
        <el-menu-item index="0">
            <img src="/favicon.ico" alt="Zotero Chinese logo" />
            <h1>Zotero 中文社区</h1>
        </el-menu-item>
        <div class="flex-grow" />
        <el-link href="/"><el-menu-item index="1">插件商店</el-menu-item></el-link>
        <el-link href="/charts.html"><el-menu-item index="2">插件排行榜 </el-menu-item></el-link>
        <el-link href="https://zotero-chinese.com/user-guide/" target="_blank"><el-menu-item index="3"
                class="external-link">百科全书</el-menu-item></el-link>
        <el-sub-menu index="4">
            <template #title>更多资料</template>
            <el-menu-item index="2-1" disabled>插件开发手册</el-menu-item>
            <el-menu-item index="2-2" disabled>item two</el-menu-item>
            <el-menu-item index="2-3" disabled>关于</el-menu-item>
        </el-sub-menu>
        <el-link href="https://github.com/zotero-chinese/zotero-plugins"><el-menu-item index="2">
                <el-icon :size="20">
                    <GitHubIcon />
                </el-icon>
            </el-menu-item></el-link>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GitHubIcon from "./icons/GitHubIcon.vue"

export default defineComponent({
    name: "NavBar",
    components: { GitHubIcon },

    data() {
        return {
            activeIndex: "1",
        };
    },

    methods: {
        handleMenuSelect(index: string) {
            // Handle menu item selection here
            if (index.startsWith('http')) {
                window.open(index, '_blank');
            } else if (index.startsWith("/")) {
                window.open(`./${index}`, '_blank')
            } else {
                this.activeIndex = index;
            }
        }
    },
});
</script>

<style>
.flex-grow {
    flex-grow: 1;
}

.external-link {
    cursor: pointer;
}
</style>
