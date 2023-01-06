<template>
    <main>
        <div class="row">
            <div class="column">
                <div class="codebox">
                    <pre>

import java.util.Scanner;

public class TestDriver {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Customer[] cobj= new Customer[3];
		cobj[0]=new Customer("ABC", "abc@gmail.com");
		cobj[1]=new Customer("DEF", 8654678976L);
		cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		}
	}

    </pre>
                </div>
            </div>
            <div class="column">
                <div class="codebox" :style="{ display: display[0] }">
                    <img style="max-width: 650px;" src="..\assets\image1.png" />
                </div>
                <div class="codebox" :style="{ display: display[1] }">
                    <img style="max-width: 650px;" src="..\assets\image2.png" />
                </div>
                <div class="codebox" :style="{ display: display[2] }">
                    <img style="max-width: 650px;" src="..\assets\image3.png" />
                </div>
                <div class="codebox" :style="{ display: display[3] }">
                    <img style="max-width: 650px;" src="..\assets\image4.png" />
                </div>
                <div class="codebox" :style="{ display: display[4] }">
                    <img style="max-width: 650px;" src="..\assets\image5.png" />
                </div>
                <div class="codebox" :style="{ display: display[5] }">
                    <img style="max-width: 650px;" src="..\assets\image6.png" />
                </div>
                <div class="codebox" :style="{ display: display[6] }">
                    <img style="max-width: 650px;" src="..\assets\image7.png" />
                </div>
            </div>
        </div>
    </main>
    <footer style="display: flex; justify-content: center; align-items: center;">
        <button class="button-9" @click="validate_one()" :style="{ display: display[0] }">Next</button>
        <button class="button-9" @click="validate_two()" :style="{ display: display[1] }">Next</button>
        <button class="button-9" @click="validate_three()" :style="{ display: display[2] }">Next</button>
        <button class="button-9" @click="validate_four()" :style="{ display: display[3] }">Next</button>
        <button class="button-9" @click="validate_five()" :style="{ display: display[4] }">Next</button>
        <button class="button-9" @click="validate_six()" :style="{ display: display[5] }">Next</button>
        <button class="button-9" @click="$router.push('/completion')" :style="{ display: display[6] }">Next</button>
        <!-- @click="$router.push('/completion')" -->
    </footer>
</template>

<script>

export default {
    methods: {
        validate_one() {
                this.display[0] = "none";
                this.display[1] = "block";
        },
        validate_two() {
                this.display[1] = "none";
                this.display[2] = "block";
        },
        validate_three() {
                this.display[2] = "none";
                this.display[3] = "block";
        },
        validate_four() {
                this.display[3] = "none";
                this.display[4] = "block";
        },
        validate_five() {
                this.display[4] = "none";
                this.display[5] = "block";
        },
        validate_six() {
                this.display[5] = "none";
                this.display[6] = "block";
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

.app {
    min-height: 1000px;
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
    height: 80%;
    width: 90%;
    padding: 25px;
    border-radius: 10px;
    background-color: #F9FAFE;
    box-shadow: 2px 3px 10px 2px #D7DFFF;
    margin: 25px;
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


<script>

</script>