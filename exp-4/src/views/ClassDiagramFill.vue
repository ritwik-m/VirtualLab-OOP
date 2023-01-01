<template>
    <main>
        <div class="row">
            <div class="column">
                <div class="codebox" :style="{ display: display[0] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 1.png" />
                </div>
                <div class="codebox" :style="{ display: display[1] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 2.png" />
            </div>
            <div class="codebox" :style="{ display: display[2] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 3.png" />
            </div>
            <div class="codebox" :style="{ display: display[3] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 4.png" />
            </div>
            <div class="codebox" :style="{ display: display[4] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 5.png" />
            </div>
            <div class="codebox" :style="{ display: display[5] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 6.png" />
            </div>
            <div class="codebox" :style="{ display: display[6] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 7.png" />
            </div>
            <div class="codebox" :style="{ display: display[7] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 8.png" />
            </div>
            <div class="codebox" :style="{ display: display[8] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 9.png" />
            </div>
            <div class="codebox" :style="{ display: display[9] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 10.png" />
            </div>
            <div class="codebox" :style="{ display: display[10] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 11.png" />
            </div>
            <div class="codebox" :style="{ display: display[11] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 12.png" />
            </div>
            <div class="codebox" :style="{ display: display[12] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 13.png" />
            </div>
            <div class="codebox" :style="{ display: display[13] }">
                    <img style="max-width: 800px;" src="..\assets\Screen 14.png" />
            </div>
        </div>
        <div class="column" style="margin-left: 100px">
            <div class="row">
                <div class="codebox" style="max-width: 300px;">
                    Content goes here...
                </div>
            </div>
            <div class="row" style="margin-top:35px">
                <div style="max-width: 350px;" :style="{ display: display[0] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_one()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[1] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_two()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[2] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_three()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[3] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_four()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[4] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_five()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[5] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_six()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[6] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_seven()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[7] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_eight()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[8] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_nine()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[9] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_ten()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[10] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_eleven()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[11] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_twelve()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[12] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_thirteen()"> Next </button>
                </div>
                <div style="max-width: 350px;" :style="{ display: display[13] }">
                    <br>
                    <br>
                    <button class="button-9" id="btn1" @click="validate_fourteen()"> Next </button>
                </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default{
    methods: {
        validate_one(){
            this.display[0] = "none";
            this.display[1] = "block";
        },
        validate_two(){
            this.display[1] = "none";
            this.display[2] = "block";
        },
        validate_three(){
            this.display[2] = "none";
            this.display[3] = "block";
        },
        validate_four(){
            this.display[3] = "none";
            this.display[4] = "block";
        },
        validate_five(){
            this.display[4] = "none";
            this.display[5] = "block";
        },
        validate_six(){
            this.display[5] = "none";
            this.display[6] = "block";
        },
        validate_seven(){
            this.display[6] = "none";
            this.display[7] = "block";
        },
        validate_eight(){
            this.display[7] = "none";
            this.display[8] = "block";
        },
        validate_nine(){
            this.display[8] = "none";
            this.display[9] = "block";
        },
        validate_ten(){
            this.display[9] = "none";
            this.display[10] = "block";
        },
        validate_eleven(){
            this.display[10] = "none";
            this.display[11] = "block";
        },
        validate_twelve(){
            this.display[11] = "none";
            this.display[12] = "block";
        },
        validate_thirteen(){
            this.display[12] = "none";
            this.display[13] = "block";
        },
        validate_fourteen(){
            this.display[13] = "none";
            this.display[14] = "block";
        },

    },
    data() {
    return {
        id: 'container',
        class: 'wrapper',
        button_text: "Incorrect. Try again.",
        button_text_right: "Next",
        correct: false,
        valid: [false, false],
        display: ["block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
    }
}
}


</script>

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

.row {
    display: flex;
}

.column {
    flex: 50%;
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
  height: 100%;
  width: 100%;
  padding: 25px;
  border-radius: 10px;
  margin: 25px;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

input {
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