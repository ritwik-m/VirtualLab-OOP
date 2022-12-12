<template>
  <div id="home">
    <header style="padding: 20px">
      <h1>Step 1: Identifying the correct sequence of actions</h1>
      <p>To map a real life scenario to code, it has to be listed in sequence. Drag and drop the sentences listed below
        onto the blanks in the timeline given below to continue.</p>
    </header>
    <main class="flexbox">

      <board_component id="board-1" class="first_board">
        <card_component v-for="(item, index) in items_left" draggable="true" :key="index" :id="item.alpha" :content="item.content">
          <h2>{{item.alpha}}</h2>
          <p>{{item.content}}</p>
        </card_component> 
      </board_component>

      <board_component id="board-2">

      </board_component>
    </main>

    <div id="buttons">
      <input type="submit" value="VERIFY" class="button button4" v-on:click="validate()">
    </div>

  </div>
</template>

<script>
import board_component from './../components/board_component.vue'
import card_component from './../components/card_component.vue'

export default {
  name: 'App',
  components: {
    board_component,
    card_component
  },
  data() {
    return {
      items_left: [{ alpha: 'A', content: 'Card One' }, { alpha: 'B', content: 'Card Two' }, { alpha: 'C', content: 'Card Three' }, { alpha: 'D', content: 'Card Four' }],
    }
  },
  methods: {
    validate() {
      alert("Hello");
    }
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

.flexbox .board {
  display: flex;
  flex-direction: column;

  width: 30%;
  height: 100%;
  min-height: 100vh;

  background-color: #313131;

  padding: 15px;
}

.flexbox .first_board {
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;

  background-color: #ebeaea;
  margin-right: 1.5rem;
}

.flexbox .board .card {
  padding: 15px 25px;
  background-color: #f5f5f5;
  width: 90%;
  cursor: pointer;
  margin-bottom: 15px;
}

.flexbox .board .card p {
  display: hidden;
}

.flexbox .first_board .card {
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
