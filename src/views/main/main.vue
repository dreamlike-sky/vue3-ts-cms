<script lang="ts">
import { defineComponent, ref } from 'vue'
import navMenu from '@/components/nav-menu'
import navHeader from '@/components/nav-header'
export default defineComponent({
  components: {
    navMenu,
    navHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      // console.log(isFold)
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <!-- <div class="page-info"> -->
          <router-view></router-view>
          <!-- </div> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  // .page-info { // xxxxx
  //   background-color: #fff;
  //   border-radius: 5px;
  // }
}

.el-header,
.el-footer {
  padding: 0 5px;
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  // x 轴方向溢出隐藏
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  background-color: #001529;
  transition: width 0.3s linear;
  // cursor(光标): pointer(手指)
  // cursor: pointer;
  cursor: auto; // 默认，浏览器设置的光标
  // scrollbar-width --> 滚动条宽度
  scrollbar-width: none; /* firefox(火狐浏览器) */

  // IE浏览器无法设置浏览器的宽度、高度，只能隐藏，并不影响滑动
  // -ms-overflow-style: none; /* IE 10+ */

  // & --> 在Sass中可以使用&与伪元素、伪类配合使用，用&替代元素自身。
  // ::-webkit-scrollbar --> 伪类选择器影响了一个元素的滚动条的样式
  &::-webkit-scrollbar {
    display: none; // 隐藏显示滚动条
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
