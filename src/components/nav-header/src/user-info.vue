<script lang="ts">
import { defineComponent, computed } from 'vue'
import loginStore from '@/stores/login/login'
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = loginStore()
    const name = computed(() => store.$state.userInfo.name)

    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    return {
      name,
      handleExitClick
    }
  }
})
</script>

<template>
  <div class="user-info">
    <div class="user-icon">
      <el-icon :size="18"><ChatDotRound /></el-icon>
      <el-icon :size="18"><CollectionTag /></el-icon>
      <el-icon :size="18">
        <el-badge is-dot class="item"><Bell /></el-badge>
      </el-icon>
    </div>
    <el-dropdown popper-class="dropdown">
      <span class="el-dropdown-link">
        <!-- <el-avatar
          :size="28"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        /> -->
        <el-avatar
          :size="28"
          src="https://img2.baidu.com/it/u=576052440,1908633305&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
        />
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item disabled>{{ name }}</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item divided icon="SwitchButton" @click="handleExitClick">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<!-- 在修改element-plus原本的样式的时候，特殊样式要使用全局样式，所以需要去除scoped局部样式 -->
<style scoped lang="less">
.user-info {
  display: flex;
  .user-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-icon {
      cursor: pointer;
      margin-right: 20px;

      .el-badge {
        // 使用全局样式时无法使用 :deep() --> 深度选择
        // 不是子元素 :deep() 就无法使用，它会直接找到子元素修改样式
        :deep(.el-badge__content) {
          width: 5px;
          height: 5px;
          background-color: red;
        }
      }
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    grid-gap: 0.5rem;
    gap: 0.5rem;
  }
}

// 去除小箭头，全局样式
// .el-popper__arrow::before {
//   content: none !important;
// }
// 局部样式不生效，必须在全局样式下修改
// :deep(.el-popper__arrow::before) {
//   content: none !important;
// }

// 鼠标悬浮样式
// :focus --> 选择获得焦点的输入字段
// :last-child --> 其父元素的最后一个子元素
:deep(.el-dropdown-menu__item:focus:last-child) {
  background-color: var(--el-color-warning-light-9);
  color: var(--el-color-warning);
  // background-color: #fdf6ec;
  // color: #e6a23c;
}
:deep(.el-dropdown-menu__item) {
  justify-content: center;
}
</style>
<!-- 全局样式 -->
<style lang="less">
/* 去除小箭头 */
/* .el-popper__arrow::before {
  content: none;
} */
.el-popper[data-popper-placement^='bottom'] > .el-popper__arrow {
  /* visibility: hidden; */
  top: 2px;
}

/* 调整浮动窗口位置，这种修改方式对页面不友好 */
/* .dropdown {
  inset: 42px auto auto calc(100% - 125px) !important;
} */
</style>
