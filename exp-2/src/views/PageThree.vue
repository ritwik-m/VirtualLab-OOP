<script>
export default {

  methods: {
    validate_one() {
      if (this.one == "requestVehicle") {
        this.display[0] = "none";
        this.display[1] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_two() {
      if (this.two == "locateReservation(customer 1)") {
        this.display[1] = "none";
        this.display[2] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_three() {
      if (this.three == "[Vehicle on Trip]") {
        this.display[2] = "none";
        this.display[3] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_four() {
      if (this.four == "[Wait for Vehicle]") {
        this.display[3] = "none";
        this.display[4] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_five() {
      if (this.five == "[Vehicle available]") {
        this.display[4] = "none";
        this.display[5] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_six() {
      if (this.six == "initiateContract") {
        this.display[5] = "none";
        this.display[6] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_seven() {
      if (this.seven == "SignContract") {
        this.display[6] = "none";
        this.display[7] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_eight() {
      if (this.eight == "releaseContract") {
        this.display[7] = "none";
        this.display[8] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_nine() {
      if (this.nine == "[Reservation released]") {
        this.display[8] = "none";
        this.display[9] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_ten() {
      if (this.ten == "updateKeyStatus") {
        this.display[9] = "none";
        this.display[10] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_eleven() {
      if (this.eleven == "[To Give Key]") {
        this.display[10] = "none";
        this.display[11] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },
    validate_twelve() {
      if (this.twelve == "[Key HandedOver]") {
        this.display[11] = "none";
        this.display[12] = "block";
      }

      else {
        this.button_value = this.button_text;
      }
    },

    
  },
  data() {
    return {
      id: 'container',
      class: 'wrapper',
      button_text: "Incorrect. Try again",
      button_text_right: "Next",
      correct: false,
      valid: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      display: ["block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",]
    }
  }

}

</script>

<template>
    <main>
        <div class="row">
            <div class="column">
                <div class="codebox" :style="{ display: display[0] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 1.png" />
                </div>
                <div class="codebox" :style="{ display: display[1] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 2.png" />
                </div>
                <div class="codebox" :style="{ display: display[2] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 3.png" />
                </div>
                <div class="codebox" :style="{ display: display[3] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 4.png" />
                </div>
                <div class="codebox" :style="{ display: display[4] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 5.png" />
                </div>
                <div class="codebox" :style="{ display: display[5] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 6.png" />
                </div>
                <div class="codebox" :style="{ display: display[6] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 7.png" />
                </div>
                <div class="codebox" :style="{ display: display[7] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 8.png" />
                </div>
                <div class="codebox" :style="{ display: display[8] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 9.png" />
                </div>
                <div class="codebox" :style="{ display: display[9] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 10.png" />
                </div>
                <div class="codebox" :style="{ display: display[10] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 11.png" />
                </div>
                <div class="codebox" :style="{ display: display[11] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 12.png" />
                </div>
                <div class="codebox" :style="{ display: display[12] }">
                    <img style="max-width: 800px;" src="..\..\assets\Frame 13.png" />
                </div>

            </div>
            <div class="column" style="margin-left: 100px">
                <div class="row">
                    <div class="codebox" style="max-width: 300px;">
                        <ul>
                            <li>[Vehicle available]</li>
                            <li>releaseContract</li>
                            <li>locateReservation(customer 1)</li>
                            <li>[Vehicle on Trip]</li>
                            <li>[To Give Key]</li>
                            <li>[Reservation released]</li>
                            <li>initiateContract</li>
                            <li>requestVehicle</li>
                            <li>SignContract</li>
                            <li>[Key HandedOver]</li>
                            <li>[Wait for Vehicle]</li>
                            <li>updateKeyStatus</li>
                        </ul>
                    </div>
                    </div>
                    <!-- 1 : requestVehicle
2 : locateReservation(customer 1)
4 [Wait for Vehicle] :
3 [Vehicle on Trip] :
6 : initiateContract
5 [Vehicle available] :
7 : SignContract
8 : releaseContract
9 [Reservation released] :
10 : updateKeyStatus
11 [To Give Key] : 
12 [Key HandedOver] : -->
                    <div class="row" style="margin-top:35px">
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[0] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            1. <input v-model="one">
                            <button class="button-9" id="btn1" @click="validate_one()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[1] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            2. <input v-model="two">
                            <button class="button-9" id="btn2" @click="validate_two()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[2] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            3. <input v-model="three">
                            <button class="button-9" id="btn3" @click="validate_three()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[3] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            4. <input v-model="four">
                            <button class="button-9" @click="validate_four()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[4] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            5. <input v-model="five">
                            <button class="button-9" id="btn1" @click="validate_five()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[5] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            6. <input v-model="six">
                            <button class="button-9" id="btn1" @click="validate_six()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[6] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            7. <input v-model="seven">
                            <button class="button-9" id="btn1" @click="validate_seven()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[7] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            8. <input v-model="eight">
                            <button class="button-9" id="btn1" @click="validate_eight()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[8] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            9. <input v-model="nine">
                            <button class="button-9" id="btn1" @click="validate_nine()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[9] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            10. <input v-model="ten">
                            <button class="button-9" id="btn1" @click="validate_ten()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[10] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            11. <input v-model="eleven">
                            <button class="button-9" id="btn1" @click="validate_eleven()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[11] }" >
                            Enter the correct answer from the list above for completing the sequence diagram
                            <br>
                            <br>
                            12. <input v-model="twelve">
                            <button class="button-9" id="btn1" @click="validate_twelve()"> Validate </button>
                        </div>
                        <div class="codebox" style="max-width: 350px;" :style="{ display: display[12] }">
                            <h1> Congratulations! You have completed the sequence diagram! </h1>
                            <br>
                            <br>
                            <button class="button-9" id="btn1" @click="$router.push('/completion')"> Next </button>
                        </div>
                        

                    </div>
                </div>
            </div>
    </main>
</template>

<style scoped>
.codebox {
    max-width: 800px;
    padding: 25px;
    border-radius: 10px;
    background-color: #F9FAFE;
    box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.row {
    display: flex;
}

.column {
    flex: 50%;
}

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