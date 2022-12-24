<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
      {id: 0, word: 'cName', list: 1},
      { id: 1, word: 'rName', list: 1 },
      { id: 2, word: 'regNum', list: 1 },
      { id: 3, word: 'keyStatus', list: 1 },
      { id: 4, word: 'customerObj', list: 1 },
      { id: 5, word: 'vehicleObj', list: 1 },
      { id: 6, word: 'contractStatus', list: 1 },
      { id: 7, word: 'releaseDate', list: 1 },
      { id: 8, word: 'String', list: 13},
      { id: 9, word: 'Date', list: 13},
      { id: 10, word: 'Customer', list: 13},
      {id: 11, word: 'Vehicle', list: 13},
      {id: 12, word: 'int', list: 13},
      { id: 13, word: 'String', list: 13},
      { id: 14, word: 'String', list: 13},
    ])

    const getList = (list) => {
      return items.value.filter((item) => item.list === list)
    }

    const startDrag = (event, item) => {
      console.log(item)
      if(item.list === 13){
        console.log(13)
        event.dataTransfer.dropEffect = 'copy'
        event.dataTransfer.effectAllowed = 'copy'
      }

      else{
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
      }
      event.dataTransfer.setData('itemID', item.id)
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
      for (i = 6; i < 12; i++){
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

      if(!final_string.includes('locates the vehicle')){
        this.valid = false
        console.log('Locate the vehicle not found')
      }

      if(!final_string.includes('marks the contract active')){
        this.valid = false
        console.log('Marks the contract active not found')
      }

      if(!final_string.includes('acquire a vehicle')){
        this.valid = false
        console.log('Acquire a vehicle not found')
      }


      if(!final_string.includes('signs the contract')){
        this.valid = false
        console.log('Signs the contract not found')
      }

      if(!final_string.includes('gives the key')){
        this.valid = false
        console.log('Gives the keys not found')
      }

      if(!final_string.includes('vehicle type is not available')){
        this.valid = false
        console.log('Vehicle type is not available name not found')
      }

     
      if(this.valid){
        alert('Correct')
        this.$router.push('/screen-three')
      }
      else{
        console.log('There\'s some mistake')
      }

      console.log(final_string)
    }
  }
}
</script>


<template class="app">
    <header style="padding: 20px">
    <h1>Step 1: Associating functions and return types</h1>
    <p>Map the elements and respective datatypes to their classes by dragging and dropping.</p>
  </header>
    <main>
        <div class="flexbox">
            <div class="flex-between">
              <h3>Variables</h3>
    <div class="identify-box drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(1)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
  </div>

    <div class="flex-between">
        <h3>Customer</h3>
        <div class="flex-horizontal">
          <div class="outer-box">
            <p>Variable</p>
        <div class="identify-box drop-zone" @drop="onDrop($event, 5)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(5)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
        </div>
      </div>
      <div class="outer-box">
            <p>Datatype</p>
        <div class="identify-box drop-zone" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(6)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
    </div>
    </div>
    <div style="height: 50px;"></div>
    <div>
    <h3>Clerk</h3>
    <div class="flex-horizontal">
      <div class="outer-box">
            <p>Variable</p>
        <div class="identify-box drop-zone" @drop="onDrop($event, 7)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(7)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
        </div>
        </div>
        <div class="outer-box">
            <p>Datatype</p>
        <div class="identify-box drop-zone" @drop="onDrop($event, 8)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(8)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
        </div>
    </div>
</div>
<div style="height: 50px;"></div>
<div>
    <h3>Vehicle</h3>
    <div class="flex-horizontal">
      <div class="outer-box">
            <p>Variable</p>
        <div class="identify-box drop-zone" @drop="onDrop($event, 9)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(9)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
        </div>
      </div>
      <div class="outer-box">
            <p>Variable</p>
        <div class="identify-box drop-zone" @drop="onDrop($event, 10)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(10)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
      </div>
    </div>
</div>
<div style="height: 50px;"></div>
<div>
    <h3>Reservation</h3>
 
    <div class="flex-horizontal">
      <div class="outer-box">
            <p>Variable</p>
        <div class="identify-box drop-zone" @drop="onDrop($event, 11)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(11)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
        </div>
      </div>
      <div class="outer-box">
            <p>Variable</p>
        <div class="identify-box drop-zone" @drop="onDrop($event, 12)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(12)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
      </div>
    </div>
</div>

    </div>
    <div class="flex-between">
        <h3>Variables</h3>
    <div class="identify-box drop-zone" @drop="onDrop($event, 13)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(13)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
        </div>
    </div>
</div>
  </div>
    </main>
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
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.to-identify{
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
 
}
.identified{
  background-color: #6D71FA;
  color: white;
}

h3{
  margin-bottom: 0px;
}

.unidentified{
  background-color: #fff;
  color: black;
}

.flex-between{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    width: auto;
    gap: 10px;
}

.drop-zone {
  display: flex;
  /* width: fit-content; */
  min-width: 20ch;
  max-width: 60ch;
  margin: 5px;
  height: fit-content;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  max-height: fit-content;
  min-height: 10vh;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 10px;
  padding: 5px;
}

.outer-box{
  padding: 5px;
    background-color: #F9FAFE;
    box-shadow: 1px 2px 5px 1px #D7DFFF;
    max-width: 600px;
    min-width: fit-content;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.flex-horizontal{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-start;
}

.drag-el-horizontal {
  padding-left: 1vh;
  padding-right: 1vh;
  border-radius: 5px;
  margin: 5px;
  text-align: center;
  height: fit-content;
  max-width: inherit;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
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
  border-radius: 5px;
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

