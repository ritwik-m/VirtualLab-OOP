<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
      { id: 0, word: 'customerName', list: 1 },
      { id: 1, word: 'clerkName', list: 1 },
      { id: 13, word: 'regNum', list: 1 },
      { id: 14, word: 'keyStatus', list: 1 },
      { id: 4, word: 'customerObj', list: 1 },
      { id: 5, word: 'vehicleObj', list: 1 },
      { id: 6, word: 'contractStatus', list: 1 },
      { id: 7, word: 'releaseDate', list: 1 },
      { id: 8, word: 'String', list: 13 },
      { id: 9, word: 'Date', list: 13 },
      { id: 10, word: 'Customer', list: 13 },
      { id: 11, word: 'Vehicle', list: 13 },
      { id: 12, word: 'int', list: 13 },
    ])

    const getList = (list) => {
      return items.value.filter((item) => item.list === list)
    }

    const startDrag = (event, item) => {
      console.log(item)
      if (item.list === 13) {
        console.log(13)
        event.dataTransfer.dropEffect = 'copy'
        event.dataTransfer.effectAllowed = 'copy'
      }

      else {
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
      }
      event.dataTransfer.setData('itemID', item.id)
    }

    const onDrop = (event, list) => {
      event.preventDefault();
      const itemID = event.dataTransfer.getData('itemID');
      const idx = items.value.findIndex((item) => item.id === parseInt(itemID));

      ///Ignore if dropping in same list
      if (items.value[idx].list === list) return;

      /// if duplicated item, delete 
      if (items.value[idx].duplicateOf === list) {
        items.value.splice(idx, 1);
        return;
      }

      ///duplicate items that belong to list 13
      if (items.value[idx].list === 13)
        items.value.push({
          id: items.value.length,
          word: items.value[idx].word,
          list: list,
          duplicateOf: items.value[idx].list
        });

      else items.value[idx].list = list;
    }

    return {
      getList,
      startDrag,
      onDrop
    }
  },
  data() {
    return {
      valid: [false, false, false, false],
      validated: false

    }
  },
  methods: {
    validate() {
      this.validated = true;

      for (let i = 0; i < 4; i++) {
        this.valid[i] = false
      }

      let customer = []
      let vehicle = []
      let clerk = []
      let reservation = []
      let i = 0;

      if (this.getList(5).length != this.getList(6).length) {
        console.log('The number of variables and datatypes should match.')
        var x = document.getElementById("snackbar");
        x.innerHTML = "The number of variables and datatypes should match.";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }

      if (this.getList(7).length != this.getList(8).length) {
        console.log('The number of variables and datatypes should match.')
        var x = document.getElementById("snackbar");
        x.innerHTML = "The number of variables and datatypes should match.";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }

      if (this.getList(9).length != this.getList(10).length) {
        console.log('The number of variables and datatypes should match.')
        var x = document.getElementById("snackbar");
        x.innerHTML = "The number of variables and datatypes should match.";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }

      if (this.getList(11).length != this.getList(12).length) {
        console.log('The number of variables and datatypes should match.')
        var x = document.getElementById("snackbar");
        x.innerHTML = "The number of variables and datatypes should match.";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }

      else {
        for (i = 0; i < this.getList(5).length; i++) {
          customer.push(this.getList(5)[i].word + ' ' + this.getList(6)[i].word)
        }

        for (i = 0; i < this.getList(7).length; i++) {
          clerk.push(this.getList(7)[i].word + ' ' + this.getList(8)[i].word)
        }

        for (i = 0; i < this.getList(9).length; i++) {
          vehicle.push(this.getList(9)[i].word + ' ' + this.getList(10)[i].word)
        }

        for (i = 0; i < this.getList(11).length; i++) {
          reservation.push(this.getList(11)[i].word + ' ' + this.getList(12)[i].word)
        }

        console.log(customer)
        console.log(clerk)
        console.log(vehicle)
        console.log(reservation)
      }

      {
        if (customer.includes("customerName String")) {
          this.valid[0] = true;
          console.log(this.valid[0])
        }

        if (clerk.includes("clerkName String")) {
          this.valid[1] = true;

        }

        if (vehicle.includes("regNum int") && vehicle.includes("keyStatus String")) {
          this.valid[2] = true;
        }

        if (reservation.includes("customerObj Customer") && reservation.includes("vehicleObj Vehicle") && reservation.includes("contractStatus String") && reservation.includes("releaseDate Date")) {
          this.valid[3] = true;
        }
      }

      {

        if (this.valid[0] && this.valid[1] && this.valid[2] && this.valid[3]) {
          var x = document.getElementById("snackbar");
        x.innerHTML = "You have successfully completed the exercise";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        }

        else if (this.valid[0] == false) {
          var x = document.getElementById("snackbar");
        x.innerHTML = "There is a type mismatch / missing entry in Customer";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        }

        else if (this.valid[1] == false) {
          var x = document.getElementById("snackbar");
        x.innerHTML = "There is a type mismatch / missing entry in Clerk";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        }

        else if (this.valid[2] == false) {
          var x = document.getElementById("snackbar");
        x.innerHTML = "There is a type mismatch / missing entry in Vehicle";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        }

        else if (this.valid[3] == false) {
          var x = document.getElementById("snackbar");
        x.innerHTML = "There is a type mismatch / missing entry in Reservation";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        }
      }
    }
  }
}
</script>


<template>
  <header style="padding: 20px">
    <h1>Step 1: Associating variables and datatypes</h1>
    <p>Map the elements and respective datatypes to their classes by dragging and dropping.</p>
  </header>
  <main>
    <div id="snackbar">Some text some message..</div>

    <div class="flexbox">
      <div class="flex-between sticky">
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
            <div class="identify-box drop-zone"
              :class="{ correct: (validated && valid[0]), incorrect: (validated && !valid[0]) }"
              @drop="onDrop($event, 5)" @dragenter.prevent @dragover.prevent>
              <div v-for="item in getList(5)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
                @dragstart="startDrag($event, item)">
                <p>{{ item.word }}</p>
              </div>
            </div>
          </div>
          <div class="outer-box">
            <p>Datatype</p>
            <div class="identify-box drop-zone"
              :class="{ correct: (validated && valid[0]), incorrect: (validated && !valid[0]) }"
              @drop="onDrop($event, 6)" @dragenter.prevent @dragover.prevent>
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
              <div class="identify-box drop-zone"
                :class="{ correct: (validated && valid[1]), incorrect: (validated && !valid[1]) }"
                @drop="onDrop($event, 7)" @dragenter.prevent @dragover.prevent>
                <div v-for="item in getList(7)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
                  @dragstart="startDrag($event, item)">
                  <p>{{ item.word }}</p>
                </div>
              </div>
            </div>
            <div class="outer-box">
              <p>Datatype</p>
              <div class="identify-box drop-zone"
                :class="{ correct: (validated && valid[1]), incorrect: (validated && !valid[1]) }"
                @drop="onDrop($event, 8)" @dragenter.prevent @dragover.prevent>
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
              <div class="identify-box drop-zone"
                :class="{ correct: (validated && valid[2]), incorrect: (validated && !valid[2]) }"
                @drop="onDrop($event, 9)" @dragenter.prevent @dragover.prevent>
                <div v-for="item in getList(9)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
                  @dragstart="startDrag($event, item)">
                  <p>{{ item.word }}</p>
                </div>
              </div>
            </div>
            <div class="outer-box">
              <p>Datatype</p>
              <div class="identify-box drop-zone"
                :class="{ correct: (validated && valid[2]), incorrect: (validated && !valid[2]) }"
                @drop="onDrop($event, 10)" @dragenter.prevent @dragover.prevent>
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
              <div class="identify-box drop-zone" @drop="onDrop($event, 11)"
                :class="{ correct: (validated && valid[3]), incorrect: (validated && !valid[3]) }" @dragenter.prevent
                @dragover.prevent>
                <div v-for="item in getList(11)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
                  @dragstart="startDrag($event, item)">
                  <p>{{ item.word }}</p>
                </div>
              </div>
            </div>
            <div class="outer-box">
              <p>Datatype</p>
              <div class="identify-box drop-zone"
                :class="{ correct: (validated && valid[3]), incorrect: (validated && !valid[3]) }"
                @drop="onDrop($event, 12)" @dragenter.prevent @dragover.prevent>
                <div v-for="item in getList(12)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
                  @dragstart="startDrag($event, item)">
                  <p>{{ item.word }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="flex-between sticky">
        <h3>Datatypes</h3>
        <div class="identify-box drop-zone" @drop="onDrop($event, 13)" @dragenter.prevent @dragover.prevent>
          <div v-for="item in getList(13)" :key="item.id" class="to-identify drag-el-horizontal" draggable="true"
            @dragstart="startDrag($event, item)">
            <p>{{ item.word }}</p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div id="buttons" class="relative">
        <button class="navitem" @click="validate()">Next</button>
      </div>
    </footer>
  </main>
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
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.to-identify {
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;

}

.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  align-self: flex-start;
}

.identified {
  background-color: #6D71FA;
  color: white;
}

h3 {
  margin-bottom: 0px;
}

.unidentified {
  background-color: #fff;
  color: black;
}

.incorrect {
  border: 1px solid #CB3434;
}

.correct {
  border: 1px solid #32A962;
}

.flex-between {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  align-self: flex-start;
  width: auto;
  gap: 10px;
  border: #32A962 1px solid;
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
  min-height: 7vh;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
}

.outer-box {
  padding: 5px;
  background-color: #F9FAFE;
  /* box-shadow: 1px 2px 5px 1px #D7DFFF; */
  max-width: 600px;
  min-width: fit-content;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.flex-horizontal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
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

.drag-el-horizontal:nth-last-child() {
  margin-bottom: 0;
}

.drag-el:nth-last-child() {
  margin-bottom: 0;
}

.flexbox {
  display: flex;
  justify-content: space-between;

  /* height: 100%; */
  /* width: 98%; */

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
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>

