// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
// 组件的按需自动导入插件
import Components from 'unplugin-vue-components/vite'
// 导入自动导入组件时需要的方法
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 自动导入图标
import Icons from 'unplugin-icons/vite'
// 导入自动导入图标时需要的方法
import IconsResolver from 'unplugin-icons/resolver'

import { resolve as _resolve } from 'path'
const resolve = (p: string) => _resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig({
  // 根目录
  root: './',
  base: './',
  // 静态资源服务路径，开发环境配置，生产环境需要删除
  publicDir: resolve('public'),
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      // 自动导入 vue 的 api
      imports: ['vue'],
      resolvers: [
        // 自动导入 Element 组件
        ElementPlusResolver(),
        // 自动导入 Element 图标
        IconsResolver({
          // 用于解析组件名称的前缀
          prefix: 'Icon'
        })
      ],
      // 自动导入到目标文件
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      resolvers: [
        // 自动注册 Element 组件
        ElementPlusResolver(),
        // 自动注册 Element 图标
        IconsResolver({
          // 将集合名称图标化以允许解析
          enabledCollections: ['ep']
        })
      ],
      // 自动注册到目标文件
      dts: 'src/components.d.ts',
      // 只为全局组件注册类型
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView']
        }
      ],
      // 包含的文件后缀名
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    Icons({
      // 检测到使用时自动安装图标源程序包
      autoInstall: true
    })
  ],
  resolve: {
    // 设置文件系统路径的别名
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // }
    alias: {
      // 设置 @ 指向 src 目录
      '@': resolve('./src')
      // 设置 views 指向 ./src/views 目录
      // views: resolve('./src/views'),
      // components: resolve('./src/components')
    }
    // 省略文件后缀
    // extensions: [".js", ".ts", ".json", ".jsx", ".tsx"]
  },
  // 开启 server 服务
  server: {
    // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
    port: 8000,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: true,
    // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
    open: false,
    // 为开发服务器配置自定义代理规则
    proxy: {
      '/api': {
        // 后台服务地址(http://152.136.185.210:4000)
        target: 'http://152.136.185.210:5000',
        // 允许不同源
        changeOrigin: true,
        // 支持https
        secure: true,
        // 将127.0.0.1:8000/api的请求url替换成127.0.0.1:3000
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    // 为开发服务器配置 CORS(跨域解决方案) ，配置为允许跨域
    cors: true
  },
  // 打包配置
  build: {
    // 设置最终构建的浏览器兼容目标：modules(默认)
    target: 'esnext',
    // 指定输出路径(相对于项目根目录)：dist(默认)
    outDir: './build',
    // 构建后是否生成映射文件
    sourcemap: false,
    // 小于此阈值的导入或引用资源将内联为base64编码，以避免额外的http请求：4096(4kb)(默认)
    assetsInlineLimit: 4096,
    // 规定触发警告的chunk大小(以 kbs 为单位)：500
    chunkSizeWarningLimit: 1000,
    // Vite2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
    minify: 'terser',
    // 在打包代码时移除console.log、debugger和注释
    terserOptions: {
      //打包后移除console和注释
      compress: {
        drop_console: false,
        drop_debugger: false,
        pure_funcs: ['console.log']
      },
      format: {
        // 删除注释
        comments: false
      }
    }
    // 指定生成静态资源的存放路径(相对于 build.outDir)：assets(默认)
    // assetsDir: 'assets',
    // rollupOptions: {
    //   output: {
    //     // 分解大块js,
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         return id
    //           .toString()
    //           .split('node_modules/')[1]
    //           .split('/')[0]
    //           .toString()
    //       }
    //     }
    //   }
    // }
  }
})
