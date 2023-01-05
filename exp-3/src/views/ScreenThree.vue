<script>
export default {

    methods: {
        validate_one() {
            var first = document.getElementById('cardinality1')
            if (this.one == "Gets-keys-from" && first.value == "1") {
                this.display[0] = "none";
                this.display[1] = "block";
                this.valid[0] = true;
            }

            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect answer";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_two() {
            var second = document.getElementById('cardinality2')
            if (this.two == "Makes" && second.value == "2") {
                this.display[1] = "none";
                this.display[2] = "block";
                this.valid[1] = true;
            }

            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect answer";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_three() {
            var third = document.getElementById('cardinality3')
            if (this.three == "Books" && third.value == "1") {
                this.display[2] = "none";
                this.display[3] = "block";
                this.valid[2] = true;
            }

            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect answer";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_four() {
            var fourth = document.getElementById('cardinality4')
            if (this.four == "Releases" && fourth.value == "1") {
                this.display[3] = "none";
                this.display[4] = "block";
                this.valid[3] = true;
            }

            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect answer";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_five() {
            var fifth = document.getElementById('cardinality5')
            if (this.five == "Completes" && fifth.value == "2") {
                this.display[4] = "none";
                this.display[5] = "block";
                this.valid[4] = true;
            }

            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect answer";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_six() {
            var sixth = document.getElementById('cardinality6')
            if (this.six == "Rents" && sixth.value == "2") {
                this.display[5] = "none";
                this.display[6] = "block";
                this.valid[5] = true;
            }

            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect answer";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
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
            valid: [false, false, false, false, false, false],
            display: ["block", "none", "none", "none", "none", "none", "none"]
        }
    }

}

</script>

<template>
    <main>
        <div id="snackbar">Some text some message..</div>

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


            </div>
            <div class="column" style="margin-left: 100px">
                <div class="row">
                    <div class="codebox" style="max-width: 300px;">
                        <ul>
                            <li :class="{ completed: valid[5] }">Rents</li>
                            <li :class="{ completed: valid[2] }">Books</li>
                            <li :class="{ completed: valid[3] }">Releases</li>
                            <li :class="{ completed: valid[4] }">Completes</li>
                            <li :class="{ completed: valid[1] }">Makes</li>
                            <li :class="{ completed: valid[0] }">Gets-keys-from</li>

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
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[0] }">
                        Enter the correct relationship and cardinality from the list above for completing the Class
                        diagram
                        <br>
                        <br>
                        1. <input v-model="one">
                        <select id="cardinality1" style="margin-left: 5px;">
                            <option value=""></option>
                            <option value="1">one-one</option>
                            <option value="2">one-many</option>
                        </select>
                        <button class="button-9" id="btn1" @click="validate_one()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[1] }">
                        Enter the correct relationship and cardinality from the list above for completing the Class
                        diagram
                        <br>
                        <br>
                        2. <input v-model="two">
                        <select id="cardinality2" style="margin-left: 5px;">
                            <option value=""></option>
                            <option value="1">one-one</option>
                            <option value="2">one-many</option>
                        </select>
                        <button class="button-9" id="btn2" @click="validate_two()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[2] }">
                        Enter the correct relationship and cardinality from the list above for completing the Class
                        diagram
                        <br>
                        <br>
                        3. <input v-model="three">
                        <select id="cardinality3" style="margin-left: 5px;">
                            <option value=""></option>
                            <option value="1">one-one</option>
                            <option value="2">one-many</option>
                        </select>
                        <button class="button-9" id="btn3" @click="validate_three()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[3] }">
                        Enter the correct relationship and cardinality from the list above for completing the Class
                        diagram
                        <br>
                        <br>
                        4. <input v-model="four">
                        <select id="cardinality4" style="margin-left: 5px;">
                            <option value=""></option>
                            <option value="1">one-one</option>
                            <option value="2">one-many</option>
                        </select>
                        <button class="button-9" @click="validate_four()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[4] }">
                        Enter the correct relationship and cardinality from the list above for completing the Class
                        diagram
                        <br>
                        <br>
                        5. <input v-model="five">
                        <select id="cardinality5" style="margin-left: 5px;">
                            <option value=""></option>
                            <option value="1">one-one</option>
                            <option value="2">one-many</option>
                        </select>
                        <button class="button-9" id="btn1" @click="validate_five()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[5] }">
                        Enter the correct relationship and cardinality from the list above for completing the Class
                        diagram
                        <br>
                        <br>
                        6. <input v-model="six">
                        <select id="cardinality6" style="margin-left: 5px;">
                            <option value=""></option>
                            <option value="1">one-one</option>
                            <option value="2">one-many</option>
                        </select>
                        <button class="button-9" id="btn1" @click="validate_six()"> Validate </button>
                    </div>
                    <!--Display that the experiment is complete-->
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[6] }">
                        <h1>Experiment Complete</h1>
                        <br>
                        <br>
                        <button class="button-9" @click="$router.push('/completion')"> Next </button>
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

.completed {
    color: cadetblue;
    text-decoration: line-through;
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

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>