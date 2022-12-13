<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
      { id: 0, word: 'Customer', list: 1 },
      { id: 1, word: 'Customer name', list: 1 },
      { id: 2, word: 'Clerk', list: 1 },
      { id: 3, word: 'Office', list: 1 },
      { id: 4, word: 'Vehicle', list: 1 },
      { id: 5, word: 'keys', list: 1 },
      { id: 6, word: 'Vehicle reservation contract', list: 1 },
      { id: 7, word: 'Reservation number', list: 1 },
      { id: 8, word: 'Vehicle release date', list: 1 },
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
      onDrop,
  
    }
  }
}
</script>

<template class="app">
  <header style="padding: 20px">
    <h1>Step 3: Identifying conceptual classes and attributes</h1>
    <p>Now that noun phrases have been identified, conceptual class names have to be identified from this list, to
      proceed with grouping of noun phrases.</p>
  </header>
  <div class="flex-horizontal">
    <div class="drop-zone-horizontal" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(6)" :key="item.id" class="drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone-horizontal" @drop="onDrop($event, 7)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(7)" :key="item.id" class="drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone-horizontal" @drop="onDrop($event, 8)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(8)" :key="item.id" class="drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone-horizontal" @drop="onDrop($event, 9)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(9)" :key="item.id" class="drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
  </div>
  <main class="flexbox">

    <div class="drop-zone-horizontal-second" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(1)" :key="item.id" class="drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
  </main>
  <footer>
    <div id="buttons" class="relative">
      <button class="navitem">Back</button>
      <button class="navitem">Next</button>
    </div>
  </footer>
</template>

<style scoped>
.drop-zone {
  width: 90%;
  margin: 25px;
  background-color: #ecf0f1;
  height: 90%;
  min-height: 30vh;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
}

.flex-horizontal {
  display: flex;
  flex-direction: row;
}

.drag-el-horizontal {
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: aquamarine;
  margin: 10px;
  flex-direction: row;
  max-width: fit-content;
  cursor: pointer;
}

.drop-zone-horizontal {
  width: 90%;
  margin: 25px;
  background-color: #ecf0f1;
  height: 50%;
  min-height: 20vh;
  max-height: 20vh;
  overflow: scroll;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
}

.drop-zone-horizontal-second {
  width: 90%;
  margin: 25px;
  background-color: #ecf0f1;
  height: 50%;
  min-height: 20vh;
  max-height: 20vh;
  overflow: scroll;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
}

.drop-zone-horizontal .drag-el-horizontal:first-of-type {
  background-color: rgb(218, 80, 80);
}

.drag-el {
  padding: 5px;
  background-color: aquamarine;
  margin: 10px;
  cursor: pointer;
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
  width: 50px;
  margin: 0;
  text-align: center;
}

.relative {
  padding: 10px;
  position: relative;
  background-color: #fff;
  margin: 10px;
}

.navitem {
  display: inline-block;
  width: 100px;
  height: 100px;
  text-align: center;
  border: gray;
  background-color: #E8562A;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}

.navitem:hover {
  background-color: #fff;
  color: #E8562A;
  cursor: pointer;
  font-weight: bold;
}
</style>
