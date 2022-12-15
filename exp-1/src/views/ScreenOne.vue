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
        <div class="aplha">
          <h3>{{ item.alpha }}</h3>
        </div>
        <div class="cardtext">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
      <div class="drag-el">
        <div class="aplha" style="text-align: center; width: 100%; color: white;">
        <h3> START </h3>
      </div>
      </div>
      <div v-for="item in getList(2)" :key="item.alpha" class="drag-el" draggable="true"
        @dragstart="startDrag($event, item)">
        <div class="aplha">
          <h3>{{ item.alpha }}</h3>
        </div>
        <div class="cardtext">
          <p>{{ item.content }}</p>
        </div>
      </div>
      <div class="drag-el">
        <div class="aplha" style="text-align: center; color: white; width: 100%;">
        <h3> END </h3>
      </div>
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
  height: 90%;
  min-height: 70vh;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  border-radius: 10px;
  padding: 10px;
}

.drag-el {
  padding: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  position: relative;
}

.drag-el .aplha {
  width: fit-content;
  height: 50%;
  position: relative;
  top: 0;
  right: 20;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  background-color: #6D71FA;
  color: white;
}

.drag-el .cardtext{
  width: 100%;
  position: relative;
  left: 0px;
  border-radius: 10px;
  height: 100%;
  padding: 20px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  background-color: #fff;
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
