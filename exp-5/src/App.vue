 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwikm) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

<template>
  <main class="app">
    <nav>
    <router-link to="/">Screen One</router-link> |
    <router-link to="/screen-two">Screen Two</router-link> |
    <router-link to="/screen-three">Screen Three</router-link> |
    <router-link to="/screen-four">Screen Four</router-link>
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
