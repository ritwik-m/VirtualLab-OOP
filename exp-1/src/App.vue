<template>
  <div id="app">
    <header style="padding: 20px">
      <h1>Step 1: Identifying the correct sequence of actions</h1>
      <p>To map a real life scenario to code, it has to be listed in sequence. Drag and drop the sentences listed below onto the blanks in the timeline given below to continue.</p>
    </header>
    <main class="flexbox">
      
      <cardBoard id="board-1" class="boardTheSecond">
        <cardForBoard id="card-1" draggable="true">
          <h2>Card One</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          </cardForBoard>
        <cardForBoard id="card-2" draggable="true">
          <h2>Card Two</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </cardForBoard>
        <cardForBoard id="card-3" draggable="true">
          <h2>Card Three</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </cardForBoard>
        <cardForBoard id="card-4" draggable="true">
          <h2>Card Four</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          </cardForBoard> 
        </cardBoard>
        
        <cardBoard id="board-2">

        </cardBoard>
    </main>

    <div id="buttons">
      <!-- <button class="button button4" on-press="validate()">Validate</button> -->
      <input type="submit" value="VERIFY" class="button button4" v-on:click="validate()">
    </div>

  </div>
</template>

<script>
import cardBoard from './components/Board.vue'
import cardForBoard from './components/Card.vue'

export default {
  name: 'App',
  components: {
    cardBoard,
    cardForBoard
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: #f5f5f5;
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

.flexbox .board{
  display: flex;
  flex-direction: column;

  width: 30%;
  height: 100%;
  min-height:100vh;

  background-color: #313131;

  padding: 15px;
}

.flexbox .boardTheSecond{
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;

  background-color: #ebeaea;
  margin-right: 1.5rem;
}

.flexbox .board .card{
  padding: 15px 25px;
  background-color: #f5f5f5;
  width: 90%;
  cursor: pointer;
  margin-bottom: 15px;
}

.flexbox .board .card p{
  display: hidden;
}

.flexbox .boardTheSecond .card{
  padding: 15px;
  width: 95%;
  background-color: #f5f5f5;
  cursor: pointer;
  margin-bottom: 15px;
}

#buttons {
  width: 50px;
  margin: 0;
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
