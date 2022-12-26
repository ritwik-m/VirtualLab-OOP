<script>
import CustomerView from '../components/CustomerViewComponent.vue'
import ReservationView from '../components/ReservationViewComponent.vue'
import VehicleView from '../components/VehicleViewComponent.vue'
import InstructionsView from '../components/InstructionsViewComponent.vue'
import RegistrationView from '../components/RegistrationSystemViewComponent.vue'
import ClassView from '../components/ClassDiagramView.vue'

export default {
  components: {
    CustomerView,
    ReservationView,
    VehicleView,
    InstructionsView,
    RegistrationView,
    ClassView
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
  <button @click="componentSelect='InstructionsView'">Instructions</button>
  <button @click="componentSelect='CustomerView'">Customer View</button>
  <button @click="componentSelect='ReservationView'">Reservation View</button>
  <button @click="componentSelect='VehicleView'">Vehicle View</button>
  <button @click="componentSelect='RegistrationView'">Registration System View</button>
  <button @click="componentSelect='ClassView'">Class diagram</button>
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
  margin-top: 30px;
  border: none;
  padding: 20px;
  margin-left: 5px;
  background-color: #2c3e50;
  color: white;
}

button:first-of-type{
  margin-left: 30px;
}
</style>