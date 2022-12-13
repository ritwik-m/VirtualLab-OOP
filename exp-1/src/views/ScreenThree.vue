<template>
    <main class="flexbox">
        <board_component>
            <card_component v-for="card in cards" :key="card" :card="card" :draggable="true" :content="card">
                <p>{{ card }}</p>
            </card_component>
        </board_component>
    </main>
</template>


<script>
import card_component from '@/components/card_component.vue';
import board_component from '@/components/board_component.vue';

export default{
    components: {
        card_component,
        board_component
    },
    data(){
        return{
            cards: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        }
    },
    
}
</script>

<style scoped>
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
