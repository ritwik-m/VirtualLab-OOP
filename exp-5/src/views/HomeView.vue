<script>
import CustomerView from '../components/CustomerViewComponent.vue'
import ReservationView from '../components/ReservationViewComponent.vue'
import VehicleView from '../components/VehicleViewComponent.vue'
import InstructionsView from '../components/InstructionsViewComponent.vue'
import RegistrationView from '../components/RegistrationSystemViewComponent.vue'

export default {
  components: {
    CustomerView,
    ReservationView,
    VehicleView,
    InstructionsView,
    RegistrationView
  },
  data(){
    return {
      componentSelect: "InstructionsView"
    }
  }
}
</script>

<template>
  <main class="app">
  <button @click="componentSelect='CustomerView'">Customer View</button>
  <button @click="componentSelect='ReservationView'">Reservation View</button>
  <button @click="componentSelect='VehicleView'">Vehicle View</button>
  <button @click="componentSelect='RegistrationView'">Registration System View</button>
  <KeepAlive>
    <component v-bind:is="componentSelect" />
  </KeepAlive>
  </main>
  
</template>

<style>


.app{
  background-color: #F9FAFE;
  min-height: 1024px;
}

button{
  border: none;
  padding: 20px;
  background-color: #2c3e50;
  margin-left: 30px;
  color: white;
}
</style>