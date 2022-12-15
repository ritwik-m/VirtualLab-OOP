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
      { id: 40, word: 'vehicle', list: 3 },
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
  methods:{
    validate(){
      let final_list = []
      let i = 0;
      for (i = 6; i < 13; i++){
        final_list.push(this.getList(i))
      }
      console.log(final_list)
      this.$router.push('/screen-three')
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
  <div style="padding: 0;">
    <h3 style="margin-left: 15px; margin-bottom: 0">Sample: </h3>
    <img src="../assets/sample-1.png" alt="Sample image" class="image">
  </div>
  <div class="flex-horizontal">
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
  </div>
  <main class="flex">
    <div style="height: 60px">

    </div>
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
  <footer>
    <div id="buttons" class="relative">
      <button class="navitem">Back</button>
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
}

.to-identify{
  background-color: #F9FAFE;
}
.identified{
  background-color: #6D71FA;
  color: white;
}

.unidentified{
  background-color: #fff;
  color: black;
}

.drop-zone {
  display: flex;
  min-width: 18ch;
  margin: 10px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  height: 20%;
  min-height: 10vh;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
}

.flex-horizontal{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.drag-el-horizontal {
  padding-left: 3vh;
  padding-right: 3vh;
  border-radius: 10px;
  margin: 10px;
  height: fit-content;
  max-width: fit-content;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  cursor: pointer;
}

.drop-zone-horizontal {
  display: flex;
  width: 95%;
  margin: 10px;
  margin-bottom: 25px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  background-color: #F9FAFE;
  height: 50%;
  min-height: fit-content;
  border-radius: 10px;
  max-height: fit-content;
  overflow: clip;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
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
