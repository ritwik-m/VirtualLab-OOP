<template>
    <main>

        <div class="one_style" :style="{display: display[0]}"> 
            <span>public </span> <input type="text" v-model="text" /> <input type="text" v-model="text_two" />{<br>}
            <button :class="{'correct': correct}" @click="one()">{{button_text}}</button>
        </div>
        <div class="one_style" :style="{display: display[1]}"> 
            <span>public class Customer{</span> 
            <input type="text" v-model="text" />
            <span>}</span>
            <button :class="{'correct': correct}" @click="two()">{{button_text}}</button>
        </div>
        

    </main>
</template>



<script>
export default {
    name: "TestView",
    data() {
        return {
            text: "",
            text_two: "",
            button_text: "Try",
            correct: false,
            display: ["inherit","none","inherit"]
        }
    },
    methods: {
        one() {
            if (this.text == "") {
                alert("Please enter some text")
                this.button_text = "Try Again"
            }
            else if(this.text=="class"){
                alert("Workede")
                this.correct=true
                this.display[0]="none"
                this.display[1]="inherit"
                this.text=""
                this.text_two=""
            }
            else{
                this.button_text="Incorrect. Try Again"

            }
        },
        two(){
            if (this.text == "") {
                alert("Please enter some text")
                this.button_text = "Try Again"
            }
            else if(this.text=="Customer"){
                alert("Workede")
                this.correct=true
                this.display[1]="none"
            }
            else{
                this.button_text="Incorrect. Try Again"

            }
        }
    },
}

</script>



<style scoped>

.correct{
    background-color: green;
}

button{
    background-color: red;
}

.one_style{
    display: inherit; 
}

</style>