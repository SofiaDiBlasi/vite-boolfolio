<script>
  import AppMain from './components/AppMain.vue'

  export default{
    data(){
      return {
        navLinks: [
          { label: "Home", to: {name: "home"}},
          { label: "About me", to: {name: "about"}},
          { label: "Projects", to: {name: "projects"}},
          { label: "Error", to: {name: "error", params: {code: "404"}} }
        ]
      }
    }
  }
</script>

<template>
  <header>
    <template v-for="link in navLinks">
      <router-link :to="link.to">{{ link.label }}</router-link>
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
