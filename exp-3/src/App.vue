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
          <Board>
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
              <Card id = "card-24" draggable="true">
                <p>Date</p>
              </Card>
          </Board>
          <br>
          <Board>
            <p1>Methods:</p1>
            <Card id="card-11" draggable="true"><p>visitOffice(): void</p></Card>
            <Card id="card-12" draggable="true"><p>getName(): String</p></Card>
            <Card id="card-13" draggable="true"><p>setName(name: String): void</p></Card>
            <Card id="card-14" draggable="true"><p>getName(): String</p></Card>
            <Card id="card-15" draggable="true"><p>setName(name: String): void</p></Card>
            <Card id="card-16" draggable="true"><p>requestVehicle(customerObj: Customer): String</p></Card>
            <Card id="card-17" draggable="true"><p>signContract(customerObj: Customer): void</p></Card>
            <Card id="card-18" draggable="true"><p>locateReservation(cName: String): String</p></Card>
            <Card id="card-19" draggable="true"><p>releaseContract(): String</p></Card>
            <Card id="card-20" draggable="true"><p>updateKeyStatus(processedBy: String): void</p></Card>
          </Board>

      </main>
      
  </div>

  <div>
    <main class="flexbox">
      <Board id="board-1">
              <p1>Customer</p1>
              <Board id="boardx">
                <Card id="card-c1" draggable="false">
                  <p>1</p>
                </Card>
              </Board>
              <h3 style="color:white">methods:</h3>
              <Board id="boards1">
                <Card id="card-c10" draggable="false">
                  <p>2</p>
                  
              </Card>
            </Board>
              <Board id="boards2">
                <Card id="card-c11" draggable="false">
                  
                  <p>3</p>
              </Card>
              </Board>
              <Board id="boards3">
                <Card id="card-c12" draggable="false">
                  <p>4</p>
              </Card>
              </Board>
          
</Board>
          <Board id="board-2">
              <p1>Clerk</p1>
              <Board id="boardx2">
                <Card id="card-c2" draggable="false">
                  <p>1</p>
              </Card>
              </Board>
              <h3 style="color:white">methods:</h3>
              <Board id="boards4">
                <Card id="card-c12" draggable="false">
                  <p>2</p>
              </Card>
              </Board>
              <Board id="boards5">
                <Card id="card-c12" draggable="false">
                  <p>3</p>
              </Card>
              </Board>
              <Board id="boards6">
                <Card id="card-c12" draggable="false">
                  <p>4</p>
              </Card>
              </Board>
              <Board id="boards7">
                <Card id="card-c12" draggable="false">
                  <p>5</p>
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
                  <p>1</p>
              </Card>
              </Board>     
              <Board id="boardx4">
                <Card id="card-c1" draggable="false">
                  <p>2</p>
              </Card>
              </Board>
              <Board id="boardx1">
                <Card id="card-c1" draggable="false">
                  <p>3</p>
              </Card>
              </Board>   
              <Board id="boardx10">
                <Card id="card-c1" draggable="false">
                  <p>4</p>
              </Card>
              </Board>  
              <h3 style="color:white">methods:</h3> 
              <Board id="boards8">
                <Card id="card-c1" draggable="false">
                  <p>5</p>
              </Card>
              </Board>  
              <Board id="boards9">
                <Card id="card-c1" draggable="false">
                  <p>6</p>
              </Card>
              </Board>  
          </Board>
          <Board id="board-4">
              <p1>Vehicle</p1>     
              <Board id="boardx5">
                <Card id="card-c1" draggable="false">
                  <p>1</p>
              </Card>
              </Board>
              <Board id="boardx6">
                <Card id="card-c1" draggable="false">
                  <p>2</p>
              </Card>
              </Board>
              <h3 style="color:white">methods:</h3>
              <Board id="boards10">
                
                <Card id="card-c1" draggable="false">
                  <p>3</p>
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
  methods:{
    validate(){
      var v1=document.getElementById("boardx");
      var x= document.getElementById("boards1");
      var z= document.getElementById("boardx2");
      var y= document.getElementById("boards2");
      var z1 = document.getElementById("boards3");
      var a,b,c,d;
      var e = document.getElementById("boardx3");
      var l = e.contains(document.getElementById("card-2")) || e.contains(document.getElementById("card-3")) || (e.contains(document.getElementById("card-4")) && e.contains(document.getElementById("card-22"))) || (e.contains(document.getElementById("card-5")) && e.contains(document.getElementById("card-24")))
      var f ,g,h,i,j;
      f=document.getElementById("boardx4");
      var m = f.contains(document.getElementById("card-2")) || f.contains(document.getElementById("card-3")) || (f.contains(document.getElementById("card-4")) && f.contains(document.getElementById("card-22"))) || (f.contains(document.getElementById("card-5")) && f.contains(document.getElementById("card-24")))
      g=document.getElementById("boardx1");
      var n = g.contains(document.getElementById("card-2")) || g.contains(document.getElementById("card-3")) || (g.contains(document.getElementById("card-4")) && g.contains(document.getElementById("card-22"))) || (g.contains(document.getElementById("card-5")) && g.contains(document.getElementById("card-24")))
      h=document.getElementById("boardx10");
      var o = h.contains(document.getElementById("card-2")) || h.contains(document.getElementById("card-3")) || (h.contains(document.getElementById("card-4")) && h.contains(document.getElementById("card-22"))) || (h.contains(document.getElementById("card-5")) && h.contains(document.getElementById("card-24")))
      i=document.getElementById("boards8");
      j=document.getElementById("boards9");
      var p = i.contains(document.getElementById("card-18")) || i.contains(document.getElementById("card-19")) 
      var q = j.contains(document.getElementById("card-18")) || j.contains(document.getElementById("card-19")) 
      a=document.getElementById("boards4");
      b=document.getElementById("boards5");
      c=document.getElementById("boards6");
      d=document.getElementById("boards7");
      var var3=(a.contains(document.getElementById("card-14")) || a.contains(document.getElementById("card-15")) ||
      a.contains(document.getElementById("card-17")) || a.contains(document.getElementById("card-16")))
      var v4 =(b.contains(document.getElementById("card-17")) || b.contains(document.getElementById("card-14")) ||
      b.contains(document.getElementById("card-15")) || b.contains(document.getElementById("card-16")))
      var v6 =(c.contains(document.getElementById("card-17")) || c.contains(document.getElementById("card-14")) ||
      c.contains(document.getElementById("card-15")) || c.contains(document.getElementById("card-16")))
      var v5 = d.contains(document.getElementById("card-17")) || d.contains(document.getElementById("card-14")) ||
      d.contains(document.getElementById("card-15")) || d.contains(document.getElementById("card-16"))
      var v2 = (x.contains(document.getElementById('card-11')) || x.contains(document.getElementById('card-12')) || x.contains(document.getElementById('card-13'))) && 
      (y.contains(document.getElementById('card-11')) || y.contains(document.getElementById('card-12')) || y.contains(document.getElementById('card-13'))) &&
      (z1.contains(document.getElementById('card-11')) || z1.contains(document.getElementById('card-12')) || z1.contains(document.getElementById('card-13')))
      var a1 = document.getElementById("boardx5");
      var a2= document.getElementById("boardx6");
      var a3= document.getElementById("boards10");
      var p1= (a1.contains(document.getElementById("card-6")) && a1.contains(document.getElementById("card-8"))) || (a1.contains(document.getElementById("card-7")) && a1.contains(document.getElementById("card-23")))
      var p2 = (a2.contains(document.getElementById("card-6")) && a2.contains(document.getElementById("card-8"))) || (a2.contains(document.getElementById("card-7")) && a2.contains(document.getElementById("card-23")))
      var p3 = (a3.contains(document.getElementById("card-20")))
if (v1.contains(document.getElementById("card-0")) && v1.contains(document.getElementById("card-9")) && v2 && z.contains(document.getElementById("card-1")) && z.contains(document.getElementById("card-21")) && var3 &&v4 &&v5 &&v6&&p1&&p2&&p3&& l&& m && n && o &&p &&q){
  alert("Success");
}
else{
  alert("Invalid. Try again!")
}
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

p1{
  color: #F3F3F3;
  padding-bottom: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
  margin-top: 15px;
  text-align: center;
  text-decoration: underline;
  font-family: Arial, Helvetica, sans-serif;
}

p{
  color: black;
}

body {
   background-color: #F3F3F3;
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
   max-width: 300px;
   background-color: #313131;
   padding-right: 10px;
   padding-left: 10px;
   margin: auto;
   border-radius:25px;
}

#boardx, #boardx2, #boardx3,#boardx4,#boardx5,#boardx6,#boardx1,#boardx7,#boardx8,#boardx9,#boardx10,#boards1, #boards2, #boards3, #boards4, #boards5, #boards6, #boards7, #boards8, #boards9,#boards10,#boards11{
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  background-color: #3b3b3b;
  padding-right: 10px;
  padding-left: 10px;
  margin: auto;
}


.flexbox .board .card {
   padding: 15px 25px;
   background-color: #F3F3F3;
   cursor: pointer;
   margin-bottom: 10px;
   border-radius:15px;
}

#buttons{
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