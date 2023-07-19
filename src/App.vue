<script>
  import AppMain from './components/AppMain.vue'

  export default{
    data(){
      
    }
  }
</script>

<template>
  <header>
    <a href="/">Home</a>
    <br>
    <a href="/about-me">About me<menu type="context"></menu></a>
    <a href="/projects">Projects</a>
  </header>

  <router-view></router-view>


</template>

<style scoped>
</style>
