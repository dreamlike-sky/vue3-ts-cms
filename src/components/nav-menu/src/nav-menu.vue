<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
// import { useStore as useVuexStore } from '@/store' // Vuex
import loginStore from '@/stores/login/login' // Pinia
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // store
    // const store = useVuexStore() // Vuex
    // const userMenus = computed(() => store.state.login.userMenus) // Vuex
    const store = loginStore() // Pinia
    const userMenus = computed(() => store.$state.userMenus) // Pinia

    // router
    const router = useRouter()
    // route
    const route = useRoute()
    const currentPath = route.path
    // data
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')

    // event handle
    // item: IMenuItem
    const handleMenuItemClick = (item: any) => {
      // console.log(item)
      router.push({
        path: item.url ?? '/not-found'
      })
    }

    return {
      userMenus,
      handleMenuItemClick,
      defaultValue
    }
  }
})
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!collapse">Vue3+TS</span>
    </div>
    <!-- @open="handleOpen"
      @close="handleClose" -->
    <!-- default-active ==> 传入子导航的index值，达到点击路由就可以引起高亮(默认激活) -->
    <!-- :unique-opened="true" ==> 动态监听只允许展开一个菜单 -->
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :unique-opened="true"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <!-- :index="item.id" 给标签一个标识，因为类型问题需要与空字符串进行拼接，不然会报错 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <!-- 因为获取到的是旧版的标签名称，需要去除前面8个字符串(el-icon-) -->
                <component v-if="item.icon" :is="item.icon.substring(8)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleMenuItemClick(subitem)">
                <el-icon>
                  <component v-if="subitem.icon" :is="subitem.icon.substring(8)"></component>
                </el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <el-icon>
              <component v-if="item.icon" :is="item.icon.substring(8)"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none; // 去除1px的白色线条

    // 目录
    // !important，作用是提高指定样式规则的应用优先权(优先级)。
    .el-sub-menu {
      background-color: #001529 !important;
      // 二级菜单(默认背景)
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
    }
    :deep(.el-sub-menu__title) {
      background-color: #001529 !important;
    }

    .el-menu-item:hover {
      color: #fff !important;
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0b2745 !important;
    }
  }
}
// :not(.el-menu--collapse) --> 设置菜单栏展开时的样式
.el-menu-vertical:not(.el-menu--collapse) {
  // border: 0 !important; // 去除菜单栏的右侧白边
  height: calc(100% - 48px);
}
</style>
