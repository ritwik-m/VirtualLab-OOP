<template>
  <div id="app">
    <img
        style="width: 100%; height:auto; max-width:1000px; align-self: center; justify-content: center; align-items: center;"
        v-bind:src="require('../assets/class_diag.png')"/>
  </div>
  <footer>
    <div id="buttons" class="relative">
      <button class="navitem" @click="next()">Next</button>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    next(){
      this.$router.push('/completion')
    }
  }
}
</script>


<style scoped>

#buttons {
  margin: 0;
  text-align: center;
}

.relative {
  padding: 10px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

.navitem {
  width: 100px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border: none;
  background-color: #272971;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: normal;
  font-size: large;
}

.navitem:hover {
  background-color: #fff;
  color: #272971;
  border: 1px solid #272971;
  cursor: pointer;
  font-weight: bold;
}

.app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>