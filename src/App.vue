<script>
  import AppMain from './components/AppMain.vue'

  export default{
    data(){
      return {
        navLinks: [
          { route: "home", label: "Home"},
          { route: "about", label: "About me"},
          { route: "projects", label: "Projects"}
        ]
      }
    }
  }
</script>

<template>
  <header>
    <template v-for="link in navLinks">
      <router-link :to="{name: link.route}">{{ link.label }}</router-link>
    </template>
  </header>

  <router-view></router-view>


</template>

<style scoped>
 header{
  width:100%;
  background: pink;
  color: white;
  padding: 1em;
 }
 header a {
  color: white;
  margin: 1rem;
 }
</style>
