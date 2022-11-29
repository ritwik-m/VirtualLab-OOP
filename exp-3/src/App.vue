<template>
  <div id="app">
    <main class="flexbox">
      <Board id="board-0">
        <p1>Attributes</p1>
        <Card id="card-0" draggable="true">
          <p>name:</p>
        </Card>
        <Card id="card-1" draggable="true">
          <p>name:</p>
        </Card>
        <Card id="card-2" draggable="true">
          <p>customerObj: Customer</p>
        </Card>
        <Card id="card-3" draggable="true">
          <p>vehicleObj: vehicle</p>
        </Card>
        <Card id="card-4" draggable="true">
          <p>contractStatus: </p>
        </Card>
        <Card id="card-5" draggable="true">
          <p>releaseDate: </p>
        </Card>
        <Card id="card-6" draggable="true">
          <p>regNum: </p>
        </Card>
        <Card id="card-7" draggable="true">
          <p>keyStatus: </p>
        </Card>
      </Board>
      <Board id="board-1">
        <p1>Data Types</p1>
        <Card id="card-8" draggable="true">
          <p>int</p>
        </Card>
        <Card id="card-9" draggable="true">
          <p>String</p>
        </Card>
        <Card id="card-21" draggable="true">
          <p>String</p>
        </Card>
        <Card id="card-22" draggable="true">
          <p>String</p>
        </Card>
        <Card id="card-23" draggable="true">
          <p>String</p>
        </Card>
        <Card id="card-24" draggable="true">
          <p>Date</p>
        </Card>
      </Board>
      <br>
      

    </main>

  </div>

  <div>
    <main class="flexbox">
      <Board id="board-2">
        <p1>Customer</p1>
        <Board id="boardx">
          <Card id="card-c1" draggable="false">
            
          </Card>
        </Board>
        

      </Board>
      <Board id="board-2">
        <p1>Clerk</p1>
        <Board id="boardx2">
          <Card id="card-c2" draggable="false">
          </Card>
        </Board>
        
      </Board>
    </main>
  </div>

  <div>
    <main class="flexbox">
      <Board id="board-3">
        <p1>Reservation</p1>
        <Board id="boardx3">
          <Card id="card-c3" draggable="false">
          </Card>
        </Board>
        <Board id="boardx4">
          <Card id="card-c1" draggable="false">
          </Card>
        </Board>
        <Board id="boardx1">
          <Card id="card-c1" draggable="false">
          </Card>
        </Board>
        <Board id="boardx10">
          <Card id="card-c1" draggable="false">
          </Card>
        </Board>
        
      </Board>
      <Board id="board-4">
        <p1>Vehicle</p1>
        <Board id="boardx5">
          <Card id="card-c1" draggable="false">
          </Card>
        </Board>
        <Board id="boardx6">
          <Card id="card-c1" draggable="false">
          </Card>
        </Board>
        
      </Board>
    </main>
  </div>

  <div id="buttons">
    <!-- <button class="button button4" on-press="validate()">Validate</button> -->
    <input type="submit" class="button button4" v-on:click="validate()">
  </div>
</template>

<script>
import Board from './components/Board'
import Card from './components/Card'
export default {

  name: 'app',
  components: {
    Board,
    Card
  },
  methods: {
    validate() {
      //add validation
    }
  }
}

/* Use this for validation(link it to the button)
var card0 = document.getElementByID("card-0")
var card9 = document.getElementByID("card-9")
var b1 = document.getElementByID("boardxfinal").contains(card0)
var b2 = document.getElementByID("boardxfinal").contains(card9)

if (b1==true && b2 == true){
  alert("Validation correct")
  v1.contains(document.getElementById("card-0")) && v1.contains(document.getElementById("card-9")) && v2 && z.contains(document.getElementById("card-1")) && z.contains(document.getElementById("card-21")) && var3 &&v4 &&v5 &&v6
}
else{
  alert("Invalid. Try again!")
}
 && var3 && v4 && v5 && v6 && l && m && n && o && p && q && p1 && p2 && p3 && v2)
 l&& m && n && o &&p &&q
*/
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p1 {
  color: rgb(164, 196, 240);
  padding-bottom: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
  margin-top: 15px;
  text-align: center;
  text-decoration: underline;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

p {
  color: black;
}

body {
  background-color: rgb(200, 219, 228);
  font-family: Arial, Helvetica, sans-serif;
}

.flexbox {
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 33%;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
}

.flexbox .board {
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 250px;
  background-color: #313131;
  padding-right: 10px;
  padding-left: 10px;
  margin: auto;
  border-radius: 25px;
}

#boardx,
#boardx2,
#boardx3,
#boardx4,
#boardx5,
#boardx6,
#boardx1,
#boardx7,
#boardx8,
#boardx9,
#boardx10,
#boards1,
#boards2,
#boards3,
#boards4,
#boards5,
#boards6,
#boards7,
#boards8,
#boards9,
#boards10,
#boards11 {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  background-color: #3b3b3b;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 12px;
}


.flexbox .board .card {
  padding: 10px 10px;
  background-color: #F3F3F3;
  cursor: pointer;
  margin-bottom: 12px;
  border-radius: 0px;
}

#card-c1,#card-c2,#card-c3{
  background-color: #3c343400;
  height: 1px;
  width: 1px;
}

#board-1{
  max-width: 150px;
}

#board-0{
  max-width: 250px;
}

#buttons {
  width: 50px;
  margin: auto;
  text-align: center;
}

.button {
  border: none;
  color: white;
  padding: 13px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 50px 20px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5%;
}

.button4 {
  background-color: white;
  color: black;
  border: 2px solid #017047;
}

.button4:hover {
  background-color: #017047;
  color: white;
}
</style>