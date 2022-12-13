<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
      { id: 0, alpha: 'A', content: 'A customer comes to the office to acquire a vehicle', list: 1 },
      { id: 1, alpha: 'B', content: 'The clerk locates the vehicle reservation contract by means of the reservation', list: 1 },
      { id: 2, alpha: 'C', content: 'The customer signs the contract and the clerk gives the keys to the vehicle.', list: 1 },
      { id: 3, alpha: 'D', content: 'The clerk then marks the the contract active by entering the vehicle release data (today\'s date) onto the vehicle reservation contract.', list: 1 },
      { id: 4, alpha: 'E', content: 'The use case terminates at ths point.', list: 1 }
    ])

    const getList = (list) => {
      return items.value.filter((item) => item.list === list)
    }

    const startDrag = (event, item) => {
      console.log(item)
      event.dataTransfer.setData('itemID', item.id)
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = 'move'
    }

    const onDrop = (event, list) => {
      event.preventDefault()
      const itemID = event.dataTransfer.getData('itemID')
      const item = items.value.find((item) => item.id === parseInt(itemID))
      item.list = list
    }

    return {
      getList,
      startDrag,
      onDrop
    }
  },
  methods: {
    shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    },
    validate() {
      if (this.getList(2).length == 5) {
        this.$router.push('/screen-two')
      }
      else {
        alert("Please drag all the sentences to the timeline")
      }
    }
  },
}
</script>

<template class="app">
  <header style="padding: 20px">
    <h1>Step 1: Identifying the correct sequence of actions</h1>
    <p>To map a real life scenario to code, it has to be listed in sequence. Drag and drop the sentences listed below
      onto the blanks in the timeline given below to continue.</p>
  </header>
  <main class="flexbox">
    <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true"
        @dragstart="startDrag($event, item)">
        <h3>{{ item.alpha }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent style="max-width: 30ch;">
      <div class="drag-el" style="text-align: center;">
        <h3> START </h3>
      </div>
      <div v-for="item in getList(2)" :key="item.alpha" class="drag-el" draggable="true"
        @dragstart="startDrag($event, item)" style="text-align: center;">
        <h3>{{ item.alpha }}</h3>
      </div>
      <div class="drag-el" style="text-align: center;">
        <h3> END </h3>
      </div>
    </div>
  </main>
  <footer>
    <div id="buttons" class="relative">
      <button class="navitem" @click="validate()">Next</button>
    </div>
  </footer>
</template>

<style scoped>
.drop-zone {
  width: 50%;
  margin: 25px;
  background-color: #ecf0f1;
  height: 90%;
  min-height: 70vh;
  padding: 10px;
}

.drag-el {
  padding: 5px;
  background-color: aquamarine;
  margin: 10px;
}

.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;

}

.flexbox {
  display: flex;
  justify-content: space-evenly;

  height: 100%;
  width: 100%;

  overflow: hidden;

  margin: 0 10;
  padding: 15px
}

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
  background-color: #fff;
}

.navitem {
  width: 100px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border: none;
  background-color: #E8562A;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}

.navitem:hover {
  background-color: #fff;
  color: #E8562A;
  border: 1px solid #E8562A;
  cursor: pointer;
  font-weight: bold;
}
</style>
