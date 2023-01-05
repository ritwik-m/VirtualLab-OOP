<script>
import PersonView from "../components/PersonViewComponent.vue";
import ClerkView from "../components/ClerkViewComponent.vue";
import CustomerView from "../components/CustomerViewComponent.vue";
import ReservationView from "../components/ReservationViewComponent.vue";
import VehicleView from "../components/VehicleViewComponent.vue";
import InstructionsView from "../components/InstructionsViewComponent.vue";
import ReservationSystemView from "../components/TestDriverComponent.vue";
import ClassView from "../components/ClassDiagramViewComponent.vue";

export default {
  components: {
    CustomerView,
    ReservationView,
    VehicleView,
    InstructionsView,
    ReservationSystemView,
    ClassView,
    PersonView,
    ClerkView
  },
  data() {
    return {
      componentSelect: "InstructionsView",
      testdriver_completed: false,
    };
  },
  methods: {
    testDriverCallBack(value){
      console.log("Test driver callback triggered", value);
      this.testdriver_completed = true;
    }
  },
};
</script>

<template>
  <main class="app">
    <button @click="componentSelect = 'InstructionsView'">Instructions</button>
    <button @click="componentSelect = 'PersonView'">Person Class</button>
    <button @click="componentSelect = 'CustomerView'">Customer Class</button>
    <button @click="componentSelect = 'ClerkView'">Clerk Class</button>
    <button @click="componentSelect = 'ReservationView'">
      Reservation Class
    </button>
    <button @click="componentSelect = 'VehicleView'">Vehicle Class</button>
    <button @click="componentSelect = 'ReservationSystemView'">
      Test Driver Class
    </button>
    <button @click="componentSelect = 'ClassView'">Class diagram</button>
    <KeepAlive>
      <component
        v-bind:is="componentSelect"
        @testdriver-complete="testDriverCallBack"
      />
    </KeepAlive>
  </main>
  <footer v-show="(testdriver_completed)">
    <div id="buttons" class="relative">
      <button class="navitem" @click="$router.push('/abstraction-view')">Next</button>
    </div>
  </footer>
</template>

<style>
.app {
  background-color: #f9fafe;
  min-height: 1024px;
}

button {
  margin-top: 30px;
  border: none;
  padding: 20px;
  margin-left: 5px;
  background-color: #2c3e50;
  color: white;
}

button:first-of-type {
  margin-left: 30px;
}
</style>
