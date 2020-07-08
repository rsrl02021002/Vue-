<template>
  <div id="app">
<!--    <router-link to="/Home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/About" tag="button" replace>关于</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeClick:function(){
      // 通过代码实现，默认的路由跳转
      // this.$router.push('/Home')
      // 通过代码实现，无历史返回前进的跳转
      this.$router.replace('/Home')
    },
    aboutClick:function(){
      // this.$router.push('/About')
      this.$router.replace('/About')
    }
  }
}
</script>

<style>
  .router-link-active{
    color: red;
  }
</style>
