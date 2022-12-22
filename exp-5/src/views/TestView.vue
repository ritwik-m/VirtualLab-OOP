<template>

<div id="app">
    <div v-html= "validate()"></div>
    <div class="live-code">
        <span>
            class <input type="text"> extends Consumer {
                <br>
                <input type="text">() {
                    <br>
                    <input type="text">
                    <br>
                }
                <br>
            }
        </span>
    </div>
</div>

</template>


<script>

export default{
    data: () => {
        return{
            code: [`<h1>Test</h1>`,`<h2>Test</h2>`],
            lineCounter: 0
        }
    },

    methods: {
        addLine() {
            this.lineCounter++;
            this.validate();
        },

        validate(){
            return this.render(1);
        },

        render(j){
            let html = "";
            for(let i=0;i<=j;i++){
                html += this.code[i];
            }
            return html;
        }
    }
  
}



</script>