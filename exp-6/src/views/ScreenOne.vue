<script>
export default {

  methods: {
    validate_one() {
      if (this.one == "class" && this.two == "Person") {
        this.button_value = this.button_text_right;
        btn2.style.backgroundColor = "green";
        this.display[0] = "none";
        this.display[1] = "inherit";
      }

      else {
        this.button_value = this.button_text;
        btn1.style.backgroundColor = "red";
      }
    },
    validate_two() {
      if (this.three == "String" && this.four == "name") {
        this.button_value = this.button_text_right;
        btn3.style.backgroundColor = "green";
        this.display[1] = "none";
        this.display[2] = "inherit";
      }

      else {
        this.button_value = this.button_text;
        btn2.style.backgroundColor = "red";
      }
    },

    validate_three() {
      if (this.five == "String" && this.six == "name" && this.seven == "this.name") {
        this.button_value = this.button_text_right;
        btn4.style.backgroundColor = "green";
        this.display[2] = "none";
        this.display[3] = "inherit";
      }

      else {
        this.button_value = this.button_text;
        btn3.style.backgroundColor = "red";
      }
    },

    validate_four() {
      if (this.eight == "String" && this.nine == "getName" && this.ten == "name") {
        this.button_value = this.button_text_right;
        btn5.style.backgroundColor = "green";
        this.display[3] = "none";
        this.display[4] = "inherit";
      }

      else {
        this.button_value = this.button_text;
        btn4.style.backgroundColor = "red";
      }
    },

    validate_five() {
      if (this.eleven == "setName" && this.twelve == "String" && this.thirteen == "name" && this.fourteen == "this.name") {
        this.button_value = this.button_text_right;
        btn5.style.backgroundColor = "green";
        this.display[4] = "none";
        this.display[5] = "inherit";
      }

      else {
        this.button_value = this.button_text;
        btn5.style.backgroundColor = "red";
      }
    },
  },
  data() {
    return {
      id: 'container',
      class: 'wrapper',
      button_value: 'Next',
      button_text: "Incorrect. Try again",
      button_text_right: "Correct. Next",
      correct: false,
      display: ["inherit", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",]
    }
  }

}

</script>

<template class="app">

  <main>

    <div class="row" style="font-family: Montserrat">
      <div class="column">
        <h1 style="padding: 25px;">Fill in the Java code for the following Person class.</h1>
        <h2 style="padding: 25px;">You only have to fill in the spaces provided.</h2>

        <div
          style="margin-left: 15%; height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[0] }">
          <div style="height : fit-content; border-bottom: 1px solid black; text-align: center; padding: 15px;">
            <mark0>Class Person</mark0>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            - name: String
            <br>
          </div>
          <div style="padding: 15px; line-height: 50px;">
            + getName(): String
            <br>
            + setName(): void
            <br>
          </div>
        </div>

        <div
          style="margin-left: 15%; height: 200px; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[1] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : 60px; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark0>- name: String</mark0>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getName(): String
            <br>
            + setName(): void
            <br>
          </div>
        </div>

        <div
          style="margin-left: 15%; height: 200px; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[2] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : 60px; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getName(): String
            <br>
            + setName(): void
            <br>
          </div>
        </div>

        <div
          style="margin-left: 15%; height: 200px; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[3] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : 60px; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark0>+ getName(): String</mark0>
            <br>
            + setName(): void
            <br>
          </div>
        </div>

        <div
          style="margin-left: 15%; height: 200px; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[4] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : 60px; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getName(): String</mark1>
            <br>
            <mark0>+ setName(): void</mark0>
            <br>
          </div>
        </div>

        <div
          style="margin-left: 15%; height: 200px; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[5] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : 60px; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getName(): String</mark1>
            <br>
            <mark1>+ setName(): void</mark1>
            <br>
          </div>
        </div>

      </div>
      <div class="column">
        <h1 style="padding: 25px;">Enter your code here .</h1>

        <div class="codebox" id="codebox" :style="{ display: display[0] }">
          public
          <input spellcheck="false" maxlength="5" style="width: 55px;" v-model='one'>
          <input spellcheck="false" id="two" maxlength="6" style="width: 70px;" v-model="two">{ <p id="comment">//Create
            a class "Person"</p><br>
          } <br><button class="button-9" id="btn1" @click="validate_one()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[1] }">
          public class Person{
          <br>&emsp;public
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='three'>
          <input spellcheck="false" id="three" maxlength="4" style="width: 60px;" v-model='four'>; 
          <p id="comment">//Create a "name" attribute of type String</p><br>
          } <br><button class="button-9" id="btn2" @click="validate_two()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[2] }">
          <pre>public class Person {

public String name;

</pre>    &emsp;public Person(
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='five'>
          <input spellcheck="false" id="three" maxlength="4" style="width: 60px;" v-model='six'>){
          <br>&emsp;&emsp;
          <input spellcheck="false" id="four" maxlength="9" style="width: 100px;" v-model='seven'> = name;
          <br>&emsp;}
          <p id="comment">//Create a default constructor using name</p><br>
          } <br><button class="button-9" id="btn3" @click="validate_three()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[3] }">
          <pre>public class Person {

public String name;

public Person(String name){
    this.name = name;
}
</pre>    &emsp;public
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='eight'>
          <input spellcheck="false" id="three" maxlength="7" style="width: 85px;" v-model='nine'>)(){
          <br>&emsp;&emsp;return
          <input spellcheck="false" id="four" maxlength="4" style="width: 60px;" v-model='ten'>;
          <br>&emsp;}
          <p id="comment">//Create a getName method to get the name value</p><br>
          } <br><button class="button-9" id="btn4" @click="validate_four()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[4] }">
          <pre>public class Person {

public String name;

public Person(String name){
    this.name = name;
}

public String getName(){
    return name;
}
</pre>    &emsp;public void
          <input spellcheck="false" maxlength="7" style="width: 85px;" v-model='eleven'>(
          <input spellcheck="false" maxlength="6" style="width: 75px;" v-model='twelve'>)
          <input spellcheck="false" maxlength="4" style="width: 60px;" v-model='thirteen'>){
          <br>&emsp;&emsp;
          <input spellcheck="false" maxlength="9" style="width: 100px;" v-model='fourteen'> = name;
          <br>&emsp;}
          <p id="comment">//Create a setName method</p><br>
          } <br><button class="button-9" id="btn5" @click="validate_five()"> {{ button_value }} </button>
        </div>

      </div>
    </div>
  </main>
</template>


<style scoped>
* {
  box-sizing: border-box;
  background-color: #F9FAFE;
}

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(.\fonts\Montserrat-VariableFont_wght.ttf) format("truetype");

  /* add a terminal font here - inconsolata? */
}

h1,
h2,
p {
  font-family: 'Montserrat', sans-serif;
  color: rgb(0, 3, 40);
}

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

mark1 {
  background-color: rgb(176, 230, 183);
  box-shadow: 1px 6px 15px 2px rgb(160, 222, 159);
  color: black;
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

mark0 {
  box-shadow: 1px 6px 15px 2px rgb(249, 255, 191);
  background-color: rgb(231, 238, 162);
  color: black;
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

#comment {
  margin-left: 15px;
  font-style: italic;
  color: gray;
  font-size: small;
}


.codebox {
  height: 80%;
  width: 90%;
  padding: 25px;
  border-radius: 10px;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

input{
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  color: black;
}

/* CSS */
.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s, box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 200px;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}
</style>

