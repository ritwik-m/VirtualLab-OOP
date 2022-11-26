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
                <Card id="card-10" draggable="true">
                    <p>void</p>
                </Card>
            </Board>
  
        </main>
        
    </div>
  
    <div>
      <main class="flexbox">
        <Board id="board-1">
                <p1>Customer</p1>
                <Board id="boardxfinal">
                  <Card id="card-c1" draggable="false">
                    <p>1</p>
                </Card>
                </Board>
            </Board>
  
            <Board id="board-2">
                <p1>Clerk</p1>
            </Board>
          </main>
        </div>
  
    <div>
      <main class="flexbox"><Board id="board-3">
                <p1>Reservation</p1>             
            </Board>
            <Board id="board-4">
                <p1>Vehicle</p1>           
            </Board>
          </main>
        </div>
  
  <div id="buttons">
    <button class="button button4">Validate</button>
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
    }
  }
  /* Use this for validation(link it to the button)
  var card0 = document.getElementByID("card-0")
  var card9 = document.getElementByID("card-9")
  var b1 = document.getElementByID("boardxfinal").contains(card0)
  var b2 = document.getElementByID("boardxfinal").contains(card9)
  
  if (b1==true && b2 == true){
    alert("Validation correct")
  }
  else{
    alert("Invalid. Try again!")
  }
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
  }
  
  #boardx{
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 320px;
    background-color: #3b3b3b;
    padding-right: 10px;
    padding-left: 10px;
    margin: auto;
  }
  
  #boardxfinal{
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 320px;
    background-color: #3b3b3b;
    padding-right: 10px;
    padding-left: 10px;
    margin: auto;
    margin-bottom: 10px;
    border-bottom-style: solid;
    border-width: 3px;
    border-color: #F3F3F3;
  }
  
  .flexbox .board .card {
     padding: 15px 25px;
     background-color: #F3F3F3;
     cursor: pointer;
     margin-bottom: 10px;
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