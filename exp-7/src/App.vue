 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwikm) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

<template>
  <main class="app">
    <nav>
    <router-link to="/">Diagram completion</router-link> |
    <router-link to="/up-down-cast">Up down cast</router-link> |
    <router-link to="/abstraction">Abstraction</router-link> | 
    <router-link to="/method-completion">Method completion</router-link> |
    <router-link to="/method-completion-execution">Method completion execution</router-link>
  </nav>
  <router-view/>
  </main> 
</template>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F9FAFE;
}

*{
  background-color: #F9FAFE;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
