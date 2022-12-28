<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
      { id: 0, word: 'Customer', list: 1 },
      { id: 1, word: 'Reservation', list: 1 },
      { id: 2, word: 'Clerk', list: 1 },
      { id: 3, word: 'Vehicle', list: 1 },
      { id: 4, word: 'Customer name', list: 1 },
      { id: 5, word: 'Office', list: 1 },
      { id: 6, word: 'Key', list: 1 },
      { id: 7, word: 'Vehicle reservation contract', list: 1 },
      { id: 8, word: 'Reservation number', list: 1 },
      { id: 9, word: 'Vehicle release date', list: 1 },
      { id: 10, word: 'Clerk name', list: 1 },
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
  },
  methods: {
    validate() {
      let final_list = []
      let i = 0;
      for (i = 6; i < 10; i++) {
        final_list.push(this.getList(i))
      }
      console.log(final_list)
      let j = 0;
      let final_string = ''
      for (i = 0; i < final_list.length; i++) {
        let final_word = ''
        for (j = 0; j < final_list[i].length; j++) {
          final_word = final_word + final_list[i][j].word + ' '
        }
        final_string = final_string + final_word + ' '
      }
      console.log(final_string)

      if (final_string.includes('Customer Customer name') && final_string.includes('Reservation Vehicle reservation contract Reservation number Vehicle release date') && final_string.includes('Clerk Office Clerk name') && final_string.includes('Vehicle Key')) {
        alert('Correct')
        this.$router.push('/')
      }
      else {
        alert('Incorrect')
      }
    }
  }
}

</script>

<template>
  <main class="app">
  <header style="padding: 20px">
    <h1>Step 3: Identifying conceptual classes and attributes</h1>
    <p>To identify conceptual classes and related attributes, drag phrases from the bottom and place them in boxes.
      First phrase is the class name.</p>
  </header>
  <div class="flex-horizontal">
    <div class="drop-zone" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(6)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 7)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(7)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 8)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(8)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 9)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(9)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
  </div>
  <main class="flexbox">

    <div class="drop-zone-horizontal" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(1)" :Key="item.id" class="drag-el-horizontal" draggable="true"
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
</main>
</template>

<style scoped>

.app{
  min-height: 100vh;
  background-color: #F9FAFE;
}
.drop-zone {
  display: flex;
  min-width: 35ch;
  margin: 10px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  height: 60%;
  min-height: 30vh;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
}

.drop-zone .drag-el-horizontal:first-of-type {
  background-color: #6D71FA;
  color: white;
}

.flex-horizontal {
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
  background-color: white;
  height: fit-content;
  max-width: fit-content;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  cursor: pointer;
}

.identified {
  max-width: 100%;
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

.drag-el {
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
