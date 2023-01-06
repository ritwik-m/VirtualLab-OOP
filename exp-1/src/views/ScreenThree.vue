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
    correct() {
            var x = document.getElementById("snackbar");
            x.innerHTML = "Correct";
            x.style.backgroundColor = "green";
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000)
        },
    incorrect(msg) {
            var x = document.getElementById("snackbar");
            x.innerHTML = msg;
            x.style.backgroundColor = "red";
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000)
        },
    validate() {
      let final_list = []
      let i = 0;
      for (i = 6; i < 10; i++) {
        final_list.push(this.getList(i))
      }
      console.log(final_list)
      for(let i=0;i<final_list.length;i++){
        if(final_list[i].length == 0){
          this.incorrect('Please fill all the boxes');
          return
        }
      }

      // for(let i=0;i<final_list.length;i++){
      //   if(final_list[i][0].word.includes('Customer')){
      //     if(final_list[i][1].word.includes('Customer name')){
      //       this.valid[i] = true
      //     }
      //   }
      //   else if(final_list[i][0].word.includes('Reservation')){
      //     if(final_list[i][1].word.includes('Vehicle reservation contract') && final_list[i][2].word.includes('Reservation number') && final_list[i][3].word.includes('Vehicle release date')){
      //       this.valid[i] = true
      //     }
      //   }
      //   else if(final_list[i][0].word.includes('Clerk')){
      //     if(final_list[i][1].word.includes('Office') && final_list[i][2].word.includes('Clerk name')){
      //       this.valid[i] = true
      //     }
      //   }
      //   else if(final_list[i][0].word.includes('Vehicle')){
      //     if(final_list[i][1].word.includes('Key')){
      //       this.valid[i] = true
      //     }
      //   }
      // }

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
        this.correct();
        this.$router.push('/screen-four')
      }
      else {
        this.incorrect('Incorrect')
      }
    }
  },
  data(){
    return{
      valid: [false, false, false, false],
      validated: false
    }
  }
}

</script>

<template>
  <main class="app">
    <div id="snackbar">Some text some message..</div>

  <header style="padding: 20px">
    <h1>Step 3: Identifying conceptual classes and attributes</h1>
    <p>To identify conceptual classes and related attributes, drag phrases from the bottom and place them in boxes.
      First phrase is the class name.</p>
  </header>
  <div class="flex-horizontal">
    <div class="drop-zone" @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent
    :class="{ correct: (validated && valid[0]), inCorrect: (validated && !valid[0]), unidentified: !validated }">
      <div v-for="item in getList(6)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 7)" @dragenter.prevent @dragover.prevent
    :class="{ correct: (validated && valid[0]), inCorrect: (validated && !valid[0]), unidentified: !validated }">
      <div v-for="item in getList(7)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 8)" @dragenter.prevent @dragover.prevent
    :class="{ correct: (validated && valid[0]), inCorrect: (validated && !valid[0]), unidentified: !validated }">
      <div v-for="item in getList(8)" :key="item.id" class="identified drag-el-horizontal" draggable="true"
        @dragstart="startDrag($event, item)">
        <p>{{ item.word }}</p>
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 9)" @dragenter.prevent @dragover.prevent
    :class="{ correct: (validated && valid[0]), inCorrect: (validated && !valid[0]), unidentified: !validated }">
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


h3 {
  margin-bottom: 0px;
}

.unidentified {
  background-color: #fff;
  color: black;
}

.inCorrect {
  border: 1px solid #CB3434;
}

.correct {
  border: 1px solid #32A962;
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

#snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
}

#snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}

</style>
