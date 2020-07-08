import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      // redirect 重定向，用于默认页面
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ],
  mode:'history'
})
