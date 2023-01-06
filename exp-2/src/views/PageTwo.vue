<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
      
      
      { id: 15, word: '[to give keys]', list: 13 },
      { id: 1, word: 'locateReservation', list: 13 },
      { id: 3, word: '[vehicle available]', list: 13 },
      { id: 5, word: 'releaseContract', list: 13 },
      { id: 6, word: 'updateKeyStatus', list: 13 },
      { id: 3, word: 'initiateContract', list: 13 },
      { id: 13, word: '[key handed over]', list: 13 },
      { id: 7, word: '[wait for Vehicle]', list: 13 },
      { id: 2, word: 'requestVehicle', list: 13 },
      { id: 9, word: '[vehicle on trip]', list: 13 },
      { id: 4, word: 'signContract', list: 13 },
      { id: 4, word: '[reservation released]', list: 13 },
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
  data() {
    return {
      valid: true
    }
  },
  methods: {
    validate() {
      let acquire = ''
      let signs = ''
      let locate = ''
      let mark = ''
      let give = ''
      let vehicle = ''
      
      for (let i = 0; i< this.getList(1).length; i++) {
        acquire = acquire + this.getList(1)[i].word
      }

      for (let i = 0; i< this.getList(2).length; i++) {
        signs = signs + this.getList(2)[i].word
      }

      for (let i = 0; i< this.getList(3).length; i++) {
        locate = locate + this.getList(3)[i].word
      }

      for (let i = 0; i< this.getList(4).length; i++) {
        mark = mark + this.getList(4)[i].word
      }

      for (let i = 0; i< this.getList(5).length; i++) {
        give = give + (this.getList(5)[i].word)
      }

      for (let i = 0; i< this.getList(6).length; i++) {
        vehicle = vehicle + this.getList(6)[i].word
      }

      console.log(acquire)
      console.log(signs)
      console.log(locate)
      console.log(mark)
      console.log(give)
      console.log(vehicle)

      if (acquire === 'requestVehicle[wait for Vehicle]' && signs === 'signContract' && locate === 'locateReservation' && mark === 'initiateContractreleaseContractupdateKeyStatus[key handed over]' && give === '[to give keys]' && vehicle === '[vehicle on trip][vehicle available][reservation released]') {
        console.log('success')
        alert('Success')
        this.$router.push('/page-three')
      } else {
        alert('Please try again')
      }


    }
  }
}
</script>


<template class="app">
  <header style="padding: 20px">
    <h1>Step 3: Finetuning verb phrases</h1>
    <p>To identify verb phrases, drag words from the scenario description sentences and drop them into the noun phrase
      boxes. Some boxes take multiple words.</p>
  </header>
  <main>
    <div class="flex">
    <div class="flex-horizontal">
      <div class="outer-box">

        <div class="flex-boxes">
     
        <div class="flex-between">
          <h3>Customer</h3>
          <div class="unidentified drag-el-horizontal" draggable="false">
            <p style="font-weight: 500; padding-left: 15px; font-size:medium;">Acquire a vehicle</p>

            <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(1)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
                @dragstart="startDrag($event, item)">
                <p>{{ item.word }}</p>
              </div>
            </div>
          </div>
          <div class="unidentified drag-el-horizontal" draggable="false">
            <p style="font-weight: 500; padding-left: 15px; font-size:medium;">Signs contract</p>

            <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(2)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
                @dragstart="startDrag($event, item)">
                <p>{{ item.word }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="flex-boxes">
      <div class="outer-box">

        <h3>Clerk</h3>
        <div class="flex-between">
          <div class="unidentified drag-el-horizontal" draggable="false">
            <p style="font-weight: 500; padding-left: 15px; font-size:medium;">Locates the vehicle</p>

            <div class="drop-zone" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(3)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
                @dragstart="startDrag($event, item)">
                <p>{{ item.word }}</p>
              </div>
            </div>
          </div>
          <div class="unidentified drag-el-horizontal" draggable="false">
            <p style="font-weight: 500; padding-left: 15px; font-size:medium;">Marks the contract active</p>

            <div class="drop-zone" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(4)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
                @dragstart="startDrag($event, item)">
                <p>{{ item.word }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="outer-box">
        <h3>Vehicle</h3>
        <div class="flex-between">
          <div class="unidentified drag-el-horizontal" draggable="false">
            <p style="font-weight: 500; padding-left: 15px; font-size:medium;">Give the keys</p>
            <div class="drop-zone" @drop="onDrop($event, 5)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(5)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
                @dragstart="startDrag($event, item)">
                <p>{{ item.word }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div class="outer-box">
        <h3>Reservation</h3>
        <div class="flex-between">
          <div class="unidentified drag-el-horizontal" draggable="false">
            <p style="font-weight: 500; padding-left: 15px; font-size:medium;">Vehicle type is not available</p>
            <div class="drop-zone" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(6)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
                @dragstart="startDrag($event, item)">
                <p>{{ item.word }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="outer-box">
        <h3>Fine Tuned Verbs</h3>
        <div class="flex-between">
          <div class="unidentified drag-el-horizontal" draggable="false">
            <div class="drop-zone" @drop="onDrop($event, 13)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(13)" :key="item.id" class="unidentified drag-el-horizontal" draggable="true"
                @dragstart="startDrag($event, item)">
                <p>{{ item.word }}</p>
              </div>
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
.image {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 15%;
  height: auto;
  padding: 0;
}

.identify-box {
  background-color: #fff;
}

.identified {
  background-color: #6D71FA;
  color: white;
}

.unidentified {
  background-color: #fff;
  color: black;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.flex-between {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  width: auto;
  gap: 10px;
  background-color: #F9FAFE;
}

.drop-zone {
  display: flex;
  /* width: fit-content; */
  min-width: 30ch;
  max-width: 600px;
  margin: 5px;
  height: fit-content;
  /* box-shadow: 2px 3px 10px 2px #D7DFFF; */
  max-height: fit-content;
  min-height: 8vh;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 10px;
  padding: 5px;
}

.drop-zone-no-shadow {
  display: flex;
  min-width: 30ch;
  max-width: 60ch;
  margin: 5px;
  height: fit-content;
  max-height: fit-content;
  min-height: 5vh;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 10px;
  padding: 5px;
}

.flex-horizontal {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.flex{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.flex-boxes{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.outer-box {
  padding: 20px;
  background-color: #F9FAFE;
  /* box-shadow: 1px 2px 5px 1px #D7DFFF; */
  max-width: 600px;
  height: fit-content;
  min-width: fit-content;
  border-radius: 10px;

}

.drag-el-horizontal {
  padding-left: 2vh;
  padding-right: 2vh;
  border-radius: 10px;
  margin: 5px;
  padding-top: 1vh;
  padding-bottom: 1vh;
  height: fit-content;
  max-width: inherit;
  /* box-shadow: 2px 3px 10px 2px #D7DFFF; */
  cursor: pointer;
}

.drop-zone-horizontal {
  display: flex;
  max-width: 1000px;
  min-width: 700px;
  margin: 10px;
  margin-bottom: 25px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  background-color: #F9FAFE;
  min-height: 10vh;
  border-radius: 10px;
  max-height: fit-content;
  overflow: auto;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
}

.drag-el-horizontal:nth-last-child() {
  margin-bottom: 0;
}

.drag-el:nth-last-child() {
  margin-bottom: 0;
}

.flexbox {
  display: flex;
  justify-content: space-between;

  height: 100%;
  width: 98%;

  overflow: hidden;

  margin: 15px;
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
}

.navitem {
  width: 100px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border: none;
  background-color: #272971;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: normal;
  font-size: large;
}

.navitem:hover {
  background-color: #fff;
  color: #272971;
  border: 1px solid #272971;
  cursor: pointer;
  font-weight: bold;
}

</style>

