<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
    { id: 5, alpha: ' ', order: 4, content: 'The clerk then marks the contract active by entering the vehicle release data (today\'s date) onto the vehicle reservation contract.', list: 1 },
      { id: 0, alpha: ' ', order: 5, content: 'A customer comes to the office to acquire a vehicle', list: 1 },
      { id: 4, alpha: ' ', order: 2, content: 'The customer signs the contract and the clerk gives the keys to the vehicle.', list: 1 },
      { id: 2, alpha: ' ', order: 1, content: 'The use case terminates at ths point.', list: 1 },
      { id: 6, alpha: ' ', order: 3, content: 'The clerk locates the vehicle reservation contract by means of the reservation number and/or customer name. [Exception: Required vehicle type is not available due to late arrivals.]', list: 1 },
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
    validate() {
      let final_list = []
      let i = 0
      for (let i = 2; i < 7; i++) {
        final_list.push(this.getList(i))
      }
      console.log(final_list)

      let j = 0;
      let final_string = ''
      for (i = 0; i < final_list.length; i++) {
        let final_word = ''
        for (j = 0; j < final_list[i].length; j++) {
          final_word = final_word + final_list[i][j].content + ' '
        }
        final_string = final_string + final_word + ' '
      }
      console.log(final_string)
      let answer = "A customer comes to the office to acquire a vehicle  The clerk locates the vehicle reservation contract by means of the reservation number and/or customer name. [Exception: Required vehicle type is not available due to late arrivals.]  The customer signs the contract and the clerk gives the keys to the vehicle.  The clerk then marks the contract active by entering the vehicle release data (today's date) onto the vehicle reservation contract.  The use case terminates at ths point."
      if (final_string === answer) {
        alert("Correct")
        this.$router.push('/screen-two')
      }

      else {
        alert('No, sorry')
      }
    },
  },
}
</script>

<template class="app">
  <header style="padding: 20px">
    <h1>Step 1: Identifying the correct sequence of actions</h1>
    <p>To map a real life scenario to code, it has to be listed in sequence. Drag and drop the sentences listed below
      onto the blanks in the timeline given below to continue.</p>
  </header>
  <main>
    <div class="flex-parent">
      <div class="flexbox">
        <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(1)" :key="item.order" class="drag-el" draggable="true"
            @dragstart="startDrag($event, item)">
            <div class="aplha">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flexbox">
        <div class="drag-el">
          <div class="aplha" style="text-align: center; width: 100%; color: white;">
            <h3> START </h3>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(2)" :key="item.alpha" class="drag-el" draggable="true"
            @dragstart="startDrag($event, item)">
            <div class="aplha">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(3)" :key="item.alpha" class="drag-el" draggable="true"
            @dragstart="startDrag($event, item)">
            <div class="aplha">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(4)" :key="item.alpha" class="drag-el" draggable="true"
            @dragstart="startDrag($event, item)">
            <div class="aplha">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 5)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(5)" :key="item.alpha" class="drag-el" draggable="true"
            @dragstart="startDrag($event, item)">
            <div class="aplha">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(6)" :key="item.alpha" class="drag-el" draggable="true"
            @dragstart="startDrag($event, item)">
            <div class="aplha">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drag-el">
          <div class="aplha" style="text-align: center; color: white; width: 100%;">
            <h3> END </h3>
          </div>
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: fit-content;
  max-width: 650px;
  margin: 5px;
  min-height: 80vh;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  border-radius: 10px;
  padding: 10px;
}

.drop-zone-single {
  min-width: 500px;
  /* max-width: 650px; */
  margin: 10px;
  min-height: 10vh;
  max-height: fit-content;
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
  width: 20px;
  height: 60px;
  position: relative;
  top: 0;
  right: 20;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  background-color: #6D71FA;
  color: white;
  z-index: 66;
}

.drag-el .cardtext {
  width: 100%;
  position: relative;
  left: 0px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  background-color: #fff;
}

.flex-parent {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.flexbox {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  min-width: 100px;

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
