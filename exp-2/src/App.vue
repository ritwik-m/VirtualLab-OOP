<template>
  <nav>
    <router-link to="/">Screen Zero</router-link> |
    <router-link to="/screen-one">Screen One</router-link> |
    <router-link to="/screen-two">Screen Two</router-link> |
    <router-link to="/screen-three">Screen Three</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
