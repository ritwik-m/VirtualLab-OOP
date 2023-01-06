 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwikm) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

<template>
    <main>
        <div id="snackbar">Error Message.</div>

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
                    <ul>
                        <li :class="{completed: valid[0]}">customerID, integer</li>
                        <li :class="{completed: valid[1]}">email, string</li>
                        <li :class="{completed: valid[2]}">phone, long integer</li>
                        <li :class="{completed: valid[3]}">city, string</li>
                        <li :class="{completed: valid[4]}">customerCount, integer</li>
                        <li :class="{completed: valid[5]}">getCustomerID(), integer</li>
                        <li :class="{completed: valid[6]}">getEmail(), string</li>
                        <li :class="{completed: valid[7]}">getPhone(), long integer</li>
                        <li :class="{completed: valid[8]}">getCity(), string</li>
                        <li :class="{completed: valid[9]}">setEmail(), void</li>
                        <li :class="{completed: valid[10]}">setPhone(), void</li>
                        <li :class="{completed: valid[11]}">setCity(), void</li>
                    </ul>
                    

                </div>
            </div>
            <div class="row" style="margin-top:35px">
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[0] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        1. <input v-model="one">
                        <button class="button-9" id="btn1" @click="validate_one()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[1] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        2. <input v-model="two">
                        <button class="button-9" id="btn2" @click="validate_two()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[2] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        3. <input v-model="three">
                        <button class="button-9" id="btn3" @click="validate_three()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[3] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        4. <input v-model="four">
                        <button class="button-9" @click="validate_four()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[4] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        5. <input v-model="five">
                        <button class="button-9" id="btn1" @click="validate_five()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[5] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        6. <input v-model="six">
                        <button class="button-9" id="btn1" @click="validate_six()"> Validate </button>
                    </div>
                    <!--Write codebox divs that request for input from the user as done above for a total of 12 times-->
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[6] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        7. <input v-model="seven">
                        <button class="button-9" id="btn1" @click="validate_seven()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[7] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        8. <input v-model="eight">
                        <button class="button-9" id="btn1" @click="validate_eight()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[8] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        9. <input v-model="nine">
                        <button class="button-9" id="btn1" @click="validate_nine()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[9] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        10. <input v-model="ten">
                        <button class="button-9" id="btn1" @click="validate_ten()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[10] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        11. <input v-model="eleven">
                        <button class="button-9" id="btn1" @click="validate_eleven()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[11] }">
                        Enter the variables in the right order alongwith the mentioned datatype from the list above to complete the class diagram
                        <br>
                        <br>
                        12. <input v-model="twelve">
                        <button class="button-9" id="btn1" @click="validate_twelve()"> Validate </button>
                        </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[12] }">
                        <button class="button-9" @click="$router.push('/output')">Next</button>
                    </div>
            </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    methods: {
        validate_one() {
            if (this.one == "customerID: int") {
                this.display[0] = "none";
                this.display[1] = "block";
                this.valid[0] = true;
            }

            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }

        },
        validate_two() {
            if (this.two == "email: String") {
                this.display[1] = "none";
                this.display[2] = "block";
                this.valid[1] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }

        },
        validate_three() {
            if (this.three == "phone: long") {
                this.display[2] = "none";
                this.display[3] = "block";
                this.valid[2] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_four() {
            if (this.four == "city: String") {
                this.display[3] = "none";
                this.display[4] = "block";
                this.valid[3] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_five() {
            if (this.five == "customerCount: int") {
                this.display[4] = "none";
                this.display[5] = "block";
                this.valid[4] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_six() {
            if (this.six == "getCustomerID(): int") {
                this.display[5] = "none";
                this.display[6] = "block";
                this.valid[5] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_seven() {
            if (this.seven == "getEmail(): String") {
                this.display[6] = "none";
                this.display[7] = "block";
                this.valid[6] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_eight() {
            if (this.eight == "getPhone(): long") {
                this.display[7] = "none";
                this.display[8] = "block";
                this.valid[7] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_nine() {
            if (this.nine == "getCity(): String") {
                this.display[8] = "none";
                this.display[9] = "block";
                this.valid[8] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_ten() {
            if (this.ten == "setEmail(): void") {
                this.display[9] = "none";
                this.display[10] = "block";
                this.valid[9] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_eleven() {
            if (this.eleven == "setPhone(): void") {
                this.display[10] = "none";
                this.display[11] = "block";
                this.valid[10] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_twelve() {
            if (this.twelve == "setCity(): void") {
                this.display[11] = "none";
                this.display[12] = "block";
                this.valid[11] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            };
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

.completed {
    color: cadetblue;
    text-decoration: line-through;
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
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}
</style>