// 第1.1步 导入Vue 然后才能使用Vue.use()
import Vue from 'vue'
// 第1.2步 导入路由
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 第2步 安装路由
Vue.use(Router)

// 第3步 创建Router对象router
const router = new Router({
  // 第7步 routes[] 配置路由和组件之间的映射关系
  routes:[
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWorld
    }
  ]
})

// 第4步 将router对象传入到Vue实例中
export default router

// // 简写
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
