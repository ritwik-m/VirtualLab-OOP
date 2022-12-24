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

<template>
  <button @click="componentSelect='CustomerView'">Customer View</button>
  <button @click="componentSelect='ReservationView'">Reservation View</button>
  <button @click="componentSelect='VehicleView'">Vehicle View</button>
  <KeepAlive>
    <component v-bind:is="componentSelect" />
  </KeepAlive>
  
</template>
