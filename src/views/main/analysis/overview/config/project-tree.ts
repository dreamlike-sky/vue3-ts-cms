export const projectCode = `
├─ public
│  └─ favicon.ico
├─ src
│  ├─ assets
│  │  ├─ base.css
│  │  ├─ css
│  │  │  ├─ base.less
│  │  │  └─ index.less
│  │  ├─ img
│  │  │  ├─ login-bg.svg
│  │  │  └─ logo.svg
│  │  └─ main.css
│  ├─ base-ui
│  │  ├─ breadcrumb
│  │  │  ├─ index.ts
│  │  │  ├─ src
│  │  │  │  └─ breadcrumb.vue
│  │  │  └─ types
│  │  │     └─ index.ts
│  │  ├─ card
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ card.vue
│  │  ├─ count-up
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ count-up.vue
│  │  ├─ descriptions
│  │  │  ├─ index.ts
│  │  │  ├─ src
│  │  │  │  └─ descriptions.vue
│  │  │  └─ types
│  │  │     └─ index.ts
│  │  ├─ echart
│  │  │  ├─ data
│  │  │  │  └─ china.json
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ base-echart.vue
│  │  ├─ form
│  │  │  ├─ index.ts
│  │  │  ├─ src
│  │  │  │  └─ form.vue
│  │  │  └─ types
│  │  │     └─ index.ts
│  │  ├─ table
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ table.vue
│  │  └─ text-link
│  │     ├─ index.ts
│  │     └─ src
│  │        └─ text-link.vue
│  ├─ components
│  │  ├─ nav-header
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ nav-header.vue
│  │  │     └─ user-info.vue
│  │  ├─ nav-menu
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ nav-menu.vue
│  │  ├─ page-content
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ page-content.vue
│  │  ├─ page-echarts
│  │  │  ├─ index.ts
│  │  │  ├─ src
│  │  │  │  ├─ bar-echart.vue
│  │  │  │  ├─ line-echart.vue
│  │  │  │  ├─ map-echart.vue
│  │  │  │  ├─ pie-echart.vue
│  │  │  │  └─ rose-echart.vue
│  │  │  ├─ types
│  │  │  │  └─ index.ts
│  │  │  └─ utils
│  │  │     ├─ convert-data.ts
│  │  │     └─ coordinate-data.ts
│  │  ├─ page-modal
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ page-modal.vue
│  │  ├─ page-search
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ page-search.vue
│  │  └─ statistical-panel
│  │     ├─ index.ts
│  │     └─ src
│  │        └─ statistical-panel.vue
│  ├─ global
│  │  ├─ index.ts
│  │  ├─ register-element.ts
│  │  └─ register-properties.ts
│  ├─ hooks
│  │  ├── useEcharts.ts
│  │  ├── usePageModal.ts
│  │  ├── usePageSearch.ts
│  │  └── usePermission.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ main
│  │     ├─ analysis
│  │     │  ├─ dashboard
│  │     │  │  └─ dashboard.ts
│  │     │  └─ overview
│  │     │     └─ overview.ts
│  │     ├─ product
│  │     │  ├─ category
│  │     │  │  └─ category.ts
│  │     │  └─ goods
│  │     │     └─ goods.ts
│  │     ├─ story
│  │     │  ├─ chat
│  │     │  │  └─ chat.ts
│  │     │  └─ list
│  │     │     └─ list.ts
│  │     └─ system
│  │        ├─ department
│  │        │  └─ department.ts
│  │        ├─ menu
│  │        │  └─ menu.ts
│  │        ├─ role
│  │        │  └─ role.ts
│  │        └─ user
│  │           └─ user.ts
│  ├─ service
│  │  ├─ axios-demo.ts
│  │  ├─ index.ts
│  │  ├─ login
│  │  │  ├─ login.ts
│  │  │  └─ types.ts
│  │  ├─ main
│  │  │  ├─ analysis
│  │  │  │  └─ dashboard.ts
│  │  │  └─ system
│  │  │     └─ system.ts
│  │  ├─ request
│  │  │  ├─ config.ts
│  │  │  ├─ index.ts
│  │  │  └─ type.ts
│  │  └─ types.ts
│  ├─ stores
│  │  ├─ index.ts
│  │  ├─ login
│  │  │  ├─ login.ts
│  │  │  └─ types.ts
│  │  ├─ main
│  │  │  ├─ analysis
│  │  │  │  ├─ dashboard.ts
│  │  │  │  └─ types.ts
│  │  │  └─ system
│  │  │     ├─ system.ts
│  │  │     └─ types.ts
│  │  └─ types.ts
│  ├─ utils
│  │  ├─ cache.ts
│  │  ├─ date-format.ts
│  │  └─ map-menus.ts
│  ├─ views
│  │  ├─ login
│  │  │  ├─ config
│  │  │  │  ├─ account-config.ts
│  │  │  │  └─ phone-config.ts
│  │  │  ├─ cpns
│  │  │  │  ├─ login-account.vue
│  │  │  │  ├─ login-panel.vue
│  │  │  │  └─ login-phone.vue
│  │  │  ├─ hook
│  │  │  └─ login.vue
│  │  ├─ main
│  │  │  ├─ analysis
│  │  │  │  ├─ dashboard
│  │  │  │  │  ├─ cpns
│  │  │  │  │  │  ├─ data.ts
│  │  │  │  │  │  └─ mock-data.ts
│  │  │  │  │  └─ dashboard.vue
│  │  │  │  └─ overview
│  │  │  │     ├─ config
│  │  │  │     │  ├─ dependencies.ts
│  │  │  │     │  ├─ dev-dependencies.ts
│  │  │  │     │  ├─ index.ts
│  │  │  │     │  └─ technology-stacks.ts
│  │  │  │     └─ overview.vue
│  │  │  ├─ product
│  │  │  │  ├─ category
│  │  │  │  │  └─ category.vue
│  │  │  │  └─ goods
│  │  │  │     ├─ config
│  │  │  │     │  └─ content.config.ts
│  │  │  │     └─ goods.vue
│  │  │  ├─ story
│  │  │  │  ├─ chat
│  │  │  │  │  └─ chat.vue
│  │  │  │  └─ list
│  │  │  │     └─ list.vue
│  │  │  └─ system
│  │  │  │  ├─ department
│  │  │  │  │  └─ department.vue
│  │  │  │  ├─ menu
│  │  │  │  │  ├─ config
│  │  │  │  │  │  └─ content.config.ts
│  │  │  │  │  └─ menu.vue
│  │  │  │  ├─ role
│  │  │  │  │  ├─ config
│  │  │  │  │  │  ├─ content.config.ts
│  │  │  │  │  │  ├─ modal.config.ts
│  │  │  │  │  │  └─ search.config.ts
│  │  │  │  │  └─ role.vue
│  │  │  │  └─ user
│  │  │  │     ├─ config
│  │  │  │     │  ├─ content.config.ts
│  │  │  │     │  ├─ modal.config.ts
│  │  │  │     │  └─ search.config.ts
│  │  │  │     └─ user.vue
│  │  │  └─ main.vue
│  │  └─ not-found
│  │     └─ not-found.vue
│  ├─ App.vue
│  ├─ auto-import.d.ts
│  ├─ components.d.ts
│  ├─ env.d.ts
│  ├─ main.ts
│  └─ shims-vue.d.ts
├─ commitlint.config.js
├─ package-lock.json
├─ package.json
├─ tsconfig.config.json
├─ tsconfig.json
└─ vite.config.ts`
