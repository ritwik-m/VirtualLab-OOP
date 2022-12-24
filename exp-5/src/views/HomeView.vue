<script>
import CustomerView from '../components/CustomerViewComponent.vue'
import ReservationView from '../components/ReservationViewComponent.vue'
import VehicleView from '../components/VehicleViewComponent.vue'
import InstructionsView from '../components/InstructionsViewComponent.vue'

export default {
  components: {
    CustomerView,
    ReservationView,
    VehicleView,
    InstructionsView
  },
  data(){
    return {
      componentSelect: "InstructionsView"
    }
  }
}
</script>

<template class="app">
  <button @click="componentSelect='CustomerView'">Customer View</button>
  <button @click="componentSelect='ReservationView'">Reservation View</button>
  <button @click="componentSelect='VehicleView'">Vehicle View</button>
  <KeepAlive>
    <component v-bind:is="componentSelect" />
  </KeepAlive>
  
</template>

<style>


.app{
  background-color: #F9FAFE;
}

button{
  border: none;
  padding: 20px;
  background-color: #2c3e50;
  margin-left: 30px;
  color: white;
}
</style>