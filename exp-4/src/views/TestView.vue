<template>
    <main>

        <div class="one_style" :style="{display: display[0]}"> 
            <input type="text" v-model="text" placeholder="Enter text here" />
            <p>{{ text }}</p>
            <button :class="{'correct': correct}" @click="one()">{{button_text}}</button>
        </div>
        

    </main>
</template>



<script>
export default {
    name: "TestView",
    data() {
        return {
            text: "",
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