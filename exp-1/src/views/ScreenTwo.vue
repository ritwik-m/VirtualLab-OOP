

<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
      { id: 0, word: 'A', list: 1 },
      { id: 1, word: 'customer', list: 1 },
      { id: 2, word: 'comes', list: 1 },
      { id: 3, word: 'to', list: 1 },
      { id: 4, word: 'the', list: 1 },
      { id: 5, word: 'office', list: 1 },
      { id: 6, word: 'to', list: 1 },
      { id: 7, word: 'acquire', list: 1 },
      { id: 8, word: 'a', list: 1 },
      { id: 9, word: 'vehicle', list: 1 },
      { id: 10, word: 'The', list: 2 },
      { id: 11, word: 'clerk', list: 2 },
      { id: 12, word: 'locates', list: 2 },
      { id: 13, word: 'the', list: 2 },
      { id: 14, word: 'vehicle', list: 2 },
      { id: 15, word: 'reservation', list: 2 },
      { id: 16, word: 'contract', list: 2 },
      { id: 17, word: 'by', list: 2 },
      { id: 18, word: 'means', list: 2 },
      { id: 19, word: 'of', list: 2 },
      { id: 20, word: 'the', list: 2 },
      { id: 21, word: 'reservation', list: 2 },
      { id: 22, word: 'number', list: 2 },
      { id: 23, word: 'and', list: 2 },
      { id: 24, word: 'or', list: 2 },
      { id: 25, word: 'customer', list: 2 },
      { id: 26, word: 'name', list: 2 },
      { id: 27, word: 'The', list: 3 },
      { id: 28, word: 'customer', list: 3 },
      { id: 29, word: 'signs', list: 3 },
      { id: 30, word: 'the', list: 3 },
      { id: 31, word: 'contract', list: 3 },
      { id: 32, word: 'and', list: 3 },
      { id: 33, word: 'the', list: 3 },
      { id: 34, word: 'clerk', list: 3 },
      { id: 35, word: 'gives', list: 3 },
      { id: 36, word: 'the', list: 3 },
      { id: 37, word: 'key', list: 3 },
      { id: 38, word: 'to', list: 3 },
      { id: 39, word: 'the', list: 3 },
      { id: 40, word: 'customer', list: 3 },
      { id: 41, word: 'The', list: 4},
      { id: 42, word: 'clerk', list: 4},
      { id: 43, word: 'then', list: 4},
      { id: 44, word: 'marks', list: 4},
      { id: 45, word: 'the', list: 4},
      { id: 46, word: 'contract', list: 4},
      { id: 47, word: 'active', list: 4},
      { id: 48, word: 'by', list: 4},
      { id: 49, word: 'entering', list: 4},
      { id: 50, word: 'the', list: 4},
      { id: 51, word: 'vehicle', list: 4},
      { id: 52, word: 'release', list: 4},
      { id: 53, word: 'date', list: 4},
      { id: 54, word: 'today\'s', list: 4},
      { id: 55, word: 'date', list: 4},
      { id: 56, word: 'onto', list: 4},
      { id: 57, word: 'the', list: 4},
      { id: 58, word: 'vehicle', list: 4},
      { id: 59, word: 'reservation', list: 4},
      { id: 60, word: 'contract', list: 4},
      { id: 61, word: 'The', list: 5},
      { id: 62, word: 'use', list: 5},
      { id: 63, word: 'case', list: 5},
      { id: 64, word: 'terminates', list: 5},
      { id: 65, word: 'at', list: 5},
      { id: 66, word: 'this', list: 5},
      { id: 67, word: 'point', list: 5},    
    ])

    //TODO: Errors for Wrong elements 
    //TODO: Errors for Missing phrases
    //TODO: remove space between identified words


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
  methods:{
    validate(){
      let final_list = []
      let i = 0;
      let j = 0;
      for (i = 6; i < 16; i++){
        final_list.push(this.getList(i))
      }
      console.log(final_list)
      for(j = 0; j < final_list.length; j++){
        let word = ''
        for (i = 0; i < final_list[j].length;i++){
          word = word + final_list[j][i].word + ' '
        }
        final_list[j] = word
      }

      let final_string = final_list.join(' ')

      if(!final_string.includes('customer')){
        this.valid = false
        console.log('Customer not found')
      }

      if(!final_string.includes('clerk')){
        this.valid = false
        console.log('Clerk not found')
      }

      if(!final_string.includes('office')){
        this.valid = false
        console.log('Office not found')
      }


      if(!final_string.includes('vehicle')){
        this.valid = false
        console.log('Vehicle not found')
      }

      if(!final_string.includes('reservation')){
        this.valid = false
        console.log('Reservation not found')
      }

      if(!final_string.includes('customer name')){
        this.valid = false
        console.log('Customer name not found')
      }

      if(!final_string.includes('key')){
        this.valid = false
        console.log('Key not found')
      }

      if(!final_string.includes('vehicle reservation contract')){
        this.valid = false
        console.log('Vehicle reservation contract not found')
      }

      if(!final_string.includes('reservation number')){
        this.valid = false
        console.log('Reservation number not found')
      }

      if(!final_string.includes('vehicle release date')){
        this.valid = false
        console.log('Vehicle release date not found')
      }

  
      if(this.valid){
        this.$router.push('/screen-three')
      }
      else{
        alert('There\'s some mistake')
        console.log('There\'s some mistake')
      }

      console.log(final_string)
    }
  }
}
</script>

<template class="app">
  <header style="padding: 20px">
    <h1>Step 2: Identifying noun phrases</h1>
    <p>To identify noun phrases, drag words from the scenario description sentences and drop them into the noun phrase
      boxes. Some boxes take multiple words.</p>
  </header>
  <div style="padding: 0; margin-left: 25ch;">
    <h3 style="margin-left: 15px; margin-bottom: 0">Sample: </h3>
    <img src="../assets/sample-1.png" alt="Sample image" class="image">
  </div>
  <div class="flexbox">
  <div class="flex-horizontal">
    <h2>Noun phrases</h2>
    <div class="identify-box drop-zone" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(6)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 7)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(7)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 8)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(8)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 9)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(9)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 10)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(10)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 11)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(11)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 12)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(12)" :key="item.id" class="identified drag-el-horizontal" draggable="true" 
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 13)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(13)" :key="item.id" class="identified drag-el-horizontal" draggable="true" 
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 14)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(14)" :key="item.id" class="identified drag-el-horizontal" draggable="true" 
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    <div class="identify-box drop-zone" @drop="onDrop($event, 15)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(15)" :key="item.id" class="identified drag-el-horizontal" draggable="true" 
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
  </div>
  <main class="flex">
    <h2>Sentences</h2>
    <div class="to-identify drop-zone-horizontal" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(1)" :key="item.id" class="unidentified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="to-identify drop-zone-horizontal" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(2)" :key="item.id" class="unidentified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="to-identify drop-zone-horizontal" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(3)" :key="item.id" class="unidentified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="to-identify drop-zone-horizontal" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(4)" :key="item.id" class="unidentified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="to-identify drop-zone-horizontal" @drop="onDrop($event, 5)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(5)" :key="item.id" class="unidentified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
  </main>
</div>
  <footer>
    <div id="buttons" class="relative">
      <button class="navitem" @click="validate()">Next</button>
    </div>
  </footer>
</template>

<style scoped>

.image{
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 15%;
  height: auto;
  padding: 0;
}

.identify-box{
  background-color: #fff;
  border-radius: 5px;
}

.to-identify{
  background-color: #F9FAFE;
  margin: 5px;
}
.identified{
  background-color: #6D71FA;
  color: white;
  border-radius:0px;
}

.unidentified{
  background-color: #fff;
  color: black;
  margin: 5px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.drop-zone {
  display: flex;
  /* width: fit-content; */
  min-width: 20ch;
  max-width: 60ch;
  align-items: center;
  justify-content: center;
  margin: 5px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  max-height: fit-content;
  min-height: 8vh;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px;
}

.flex-horizontal{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  justify-content:space-evenly;
}

.drag-el-horizontal {
  padding-left: 2vh;
  padding-right: 2vh;
  height: fit-content;
  max-width: fit-content;
  cursor: pointer;
  border-radius: inherit;
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

.drag-el-horizontal:nth-last-child(){
  margin-bottom: 0;
}

.drag-el:nth-last-child(){
  margin-bottom: 0;
}

.flexbox {
  display: flex;
  justify-content: space-evenly;

  height: 100%;
  width: 100%;

  overflow: hidden;

  margin: 0;
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
