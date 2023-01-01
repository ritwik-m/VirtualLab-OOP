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

      for(let i=0;i<5;i++){
        this.valid[i] = false
      }

      this.validated = true;
      // let i = 0
      for (let i = 2; i < 7; i++) {
        final_list.push(this.getList(i))
      }
      console.log(final_list)

      if(final_list.length!=5){
        alert("Please drag all the sentences into the timeline")
        this.validated=false;
        return
      }

      if(final_list[0][0].id == 0){
        this.valid[0] = true
        console.log(final_list[0][0].id)
      }

      else{
        this.valid[0] = false
      }

      if(final_list[1][0].id == 6){
        this.valid[1] = true
      }

      else{
        this.valid[1] = false
      }

      if(final_list[2][0].id == 4){
        this.valid[2] = true
      }

      else{
        this.valid[2] = false
      }

      if(final_list[3][0].id == 5){
        this.valid[3] = true
      }

      else{
        this.valid[3] = false
      }

      if(final_list[4][0].id == 2){
        this.valid[4] = true
      }

      else{
        this.valid[4] = false
      }

      if(this.valid[0] && this.valid[1] && this.valid[2] && this.valid[3] && this.valid[4]){
        alert("Correct")
        this.$router.push('/screen-two')
      }

      else{
        alert("Incorrect, try again!")
      }

    },
  },
  data() {
    return {
      valid: [false,false,false,false,false],
      validated: false
    }
  }
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
            <div class="aplha unidentified">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flexbox">
        <div class="drop-zone-single" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(2)" :key="item.alpha" class="drag-el" draggable="true" id="1-box"
            @dragstart="startDrag($event, item)">
            <div class="aplha" :class="{ alphaCorrect: (validated && valid[0]), alphainCorrect: (validated && !valid[0]), unidentified: !validated }">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext" :class="{ textCorrect: (validated && valid[0]), textIncorrect: (validated && !valid[0]), unidentified: !validated }">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(3)" :key="item.alpha" class="drag-el" draggable="true" id="2-box"
            @dragstart="startDrag($event, item)">
            <div class="aplha" :class="{ alphaCorrect: (validated && valid[1]), alphainCorrect: (validated && !valid[1]), unidentified: !validated }">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext" :class="{ textCorrect: (validated && valid[1]), textIncorrect: (validated && !valid[1]), unidentified: !validated }">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(4)" :key="item.alpha" class="drag-el" draggable="true" id="3-box"
            @dragstart="startDrag($event, item)">
            <div class="aplha" :class="{ alphaCorrect: (validated && valid[2]), alphainCorrect: (validated && !valid[2]), unidentified: !validated }">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext" :class="{ textCorrect: (validated && valid[2]), textIncorrect: (validated && !valid[2]), unidentified: !validated }">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 5)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(5)" :key="item.alpha" class="drag-el" draggable="true" id="4-box"
            @dragstart="startDrag($event, item)">
            <div class="aplha" :class="{ alphaCorrect: (validated && valid[3]), alphainCorrect: (validated && !valid[3]), unidentified: !validated }">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext" :class="{ textCorrect: (validated && valid[3]), textIncorrect: (validated && !valid[3]), unidentified: !validated }">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="drop-zone-single" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(6)" :key="item.alpha" class="drag-el" draggable="true" id="5-box"
            @dragstart="startDrag($event, item)">
            <div class="aplha" :class="{ alphaCorrect: (validated && valid[4]), alphainCorrect: (validated && !valid[4]), unidentified: !validated }">
              <h3>{{ item.alpha }}</h3>
            </div>
            <div class="cardtext" :class="{ textCorrect: (validated && valid[4]), textIncorrect: (validated && !valid[4]), unidentified: !validated }">
              <p>{{ item.content }}</p>
            </div>
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
  gap: 10px;
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
  color: white;
  z-index: 66;
}


.textIncorrect{
  color: #CB3434;
  border: #CB3434 1px solid;
}

.drag-el .cardtext {
  width: 100%;
  position: relative;
  left: 0px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  background-color: #fff;
}


.textCorrect{
  border: solid 1px #098248;
  color: #098248;
}

.unidentified{
  background-color: #6D71FA;
}

.alphaCorrect{
  background-color: #098248;
}

.alphainCorrect{
  background-color: #CB3434;
}


.flex-parent {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
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
