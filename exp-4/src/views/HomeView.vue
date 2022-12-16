<script>
export default {

  methods: {
    validate_one() {
      if (this.one == "class" && this.two == "Customer") {
        this.button_value = "Correct. Next"
        btn.style.backgroundColor = "green";
      }
      else{
        this.button_value = "Incorrect. Try again"
        btn.style.backgroundColor = "red";
      }
    }

  },
  data() {
    return {
      id: 'container',
      class: 'wrapper',
      one: "",
      message: '',
      button_value: 'Next'
    }
  }

}

</script>

<template class="app">

  <main>

    <div class="row">
      <div class="column">
        <h1 style="padding: 25px;">Fill in the Java code for the following updated Customer class.</h1>
        <h2 style="padding: 25px;">You only have to fill in the spaces provided.</h2>
        <img src="src/assets/class1.png" id="picID" style="padding-left: 150px; height: 450px;">
      </div>
      <div class="column">
        <h1 style="padding: 25px;">Enter your code here .</h1>
        <p id="cue" style="font-weight: bold; padding: 10px; text-decoration: underline;">Create class named Customer
        </p>
        <div class="codebox" id="codebox">
          public
          <input spellcheck="false" maxlength="5" style="width: 50px;" v-model="one">
          <input spellcheck="false" id="two" maxlength="8" style="width: 70px;" v-model="two">{<br>
          }<!-- 
                <input hidden spellcheck="false" id="three" maxlength="6" style="width: 50px;"> 
                <input hidden spellcheck="false" id="four" maxlength="4" style="width: 45px;">
                <input hidden spellcheck="false" id="five" maxlength="6" style="width: 50px;"> 
                <input hidden spellcheck="false" id="six" maxlength="4" style="width: 45px;">
                <input hidden spellcheck="false" id="seven" maxlength="4" style="width: 45px;">
                <input hidden spellcheck="false" id="eight" maxlength="4" style="width: 45px">
                <input hidden spellcheck="false" id="nine" maxlength="4" style="width: 45px">
                <input hidden spellcheck="false" id="ten" maxlength="4" style="width: 45px">
                <input hidden spellcheck="false" id="eleven" maxlength="4" style="width:45px">
                <input hidden spellcheck="false" id="twelve" maxlength="4" style="width : 45px">{
                    <br>
                    &emsp;} -->
        </div>
        <button class="button-9" id="btn" @click="validate_one()"> {{ button_value }} </button>
      </div>
    </div>
  </main>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
   url(.\fonts\Montserrat-VariableFont_wght.ttf) format("truetype");
}

h1,h2,p {
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


.codebox {
  height: 80%;
  width: 90%;
  background-color: aliceblue;
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
