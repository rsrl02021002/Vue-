// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 第5步 接收从router/index.js传来的router，导入router，（提示：如果导入的是目录，会自动找index文件，所以index可写可不写）
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 第6步 将router挂载到Vue实例中
  router:router,
  // 简写：
  // router,
  components: { App },
  template: '<App/>'
})
