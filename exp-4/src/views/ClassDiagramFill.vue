<template>
    <main>
        <div class="row">
            <div class="column">
                <div class="codebox" :style="{ display: display[0] }">
                    <img style="max-width: 800px;" src="..\..\assets\screen1.png" />
                </div>
                <div class="codebox" :style="{ display: display[1] }">
                    <img style="max-width: 800px;" src="..\..\assets\screen2.png" />
            </div>
        </div>
        <div class="column" style="margin-left: 100px">
            <div class="row">
                <div class="codebox" style="max-width: 300px;">
                    Instructions here
                </div>
            </div>
            <div class="row" style="margin-top:35px">
                <div class="codebox" style="max-width: 350px;" :style="{ display: display[0] }">
                    Enter the correct answer from the list above for completing the sequence diagram
                    <br>
                    <br>
                    1. <input v-model="one">
                    <button class="button-9" id="btn1" @click="validate_one()"> Validate </button>
                </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default{
    data() {
    return {
        id: 'container',
        class: 'wrapper',
        button_text: "Incorrect. Try again.",
        button_text_right: "Next",
        correct: false,
        valid: [false, false],
        display: ["block", "none"]
    }
}
}


</script>