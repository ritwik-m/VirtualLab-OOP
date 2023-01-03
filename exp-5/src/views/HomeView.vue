<script>
import CustomerView from '../components/CustomerViewComponent.vue'
import ReservationView from '../components/ReservationViewComponent.vue'
import VehicleView from '../components/VehicleViewComponent.vue'
import InstructionsView from '../components/InstructionsViewComponent.vue'
import ReservationSystemView from '../components/ReservationSystemViewComponent.vue'
import ClassView from '../components/ClassDiagramView.vue'

export default {
  components: {
    CustomerView,
    ReservationView,
    VehicleView,
    InstructionsView,
    ReservationSystemView,
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
  <button @click="componentSelect='CustomerView'">Customer Class</button>
  <button @click="componentSelect='ReservationView'">Reservation Class</button>
  <button @click="componentSelect='VehicleView'">Vehicle Class</button>
  <button @click="componentSelect='ReservationSystemView'">Reservation System Class</button>
  <button @click="componentSelect='ClassView'">Class diagram</button>
  <KeepAlive>
    <component v-bind:is="componentSelect" />
  </KeepAlive>
  </main>
  <footer>
        <div id="buttons" class="relative">
            <button class="navitem">Back</button>
            <button class="navitem" @click="validate()" :hidden="oneValidate">Next</button>
        </div>
    </footer> 
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