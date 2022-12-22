<script>
import { ref } from 'vue'
export default {
    setup() {
        const items = ref([
            { id: 6, word: 'visitOffice():void', list: 13 },
            { id: 7, word: 'getName():String', list: 13 },
            { id: 8, word: 'setName(name:String):void', list: 13 },
            { id: 9, word: 'getName():String', list: 13 },
            { id: 10, word: 'setName(name:String):void', list: 13 },
            { id: 11, word: 'requestVehicle(cObj:Customer):String', list: 13 },
            { id: 12, word: 'signContract(cObj:Customer):void', list: 13 },
            { id: 13, word: 'locateReservation(cName:String):String', list: 13 },
            { id: 14, word: 'releaseContract():String', list: 13 },
            { id: 15, word: 'updateKeyStatus(processedBy:String):void', list: 13 },
        ])

        const getList = (list) => {
            return items.value.filter((item) => item.list === list)
        }

        const startDrag = (event, item) => {
            console.log(item)
            event.dataTransfer.setData('itemID', item.id)
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.dropEffect = 'move'
        }

        const onDrop = (event, list) => {
            event.preventDefault()
            const itemID = event.dataTransfer.getData('itemID')
            const item = items.value.find((item) => item.id === parseInt(itemID))
            item.list = list
        }

        return {
            getList,
            startDrag,
            onDrop
        }
    },
    data() {
        return {
            valid: true
        }
    },
    methods: {
        validate() {
            let customer = ''
            let clerk = ''
            let vehicle = ''
            let reservation = ''

            for (let i = 0; i < this.getList(1).length; i++) {
                customer = customer + this.getList(1)[i].word
            }

            for (let i = 0; i < this.getList(2).length; i++) {
                clerk = clerk + this.getList(2)[i].word
            }

            for (let i = 0; i < this.getList(3).length; i++) {
                vehicle = vehicle + this.getList(3)[i].word
            }

            for (let i = 0; i < this.getList(4).length; i++) {
                reservation = reservation + this.getList(4)[i].word
            }

            if (customer === "visitOffice():voidgetName():StringsetName(name:String):void"
                && clerk === "getName():StringsetName(name:String):voidrequestVehicle(cObj:Customer):StringsignContract(cObj:Customer):void"
                && vehicle === "updateKeyStatus(processedBy:String):void"
                && reservation === "locateReservation(cName:String):StringreleaseContract():String") {
                alert("Success!")
                this.$router.push('/screen-three')
            }

            else {
                alert("Please drag all the functions into the class boxes")
            }

            console.log(customer)
            console.log(clerk)
            console.log(vehicle)
            console.log(reservation)


        }
    }
}
</script>


<template class="app">
    <header style="padding: 20px">
        <h1>Step 2: Classifying functions into classes</h1>
        <p>To classofy functions into classes, drag functions from the right corner and drop them into the class boxes.
        </p>
    </header>
    <main>
        <div class="flex">
            <div class="flex-horizontal">
                <div>
                    <div class="flex-horizontal">
                        <div class="outer-box">
                            <h3>Customer</h3>
                            <div class="unidentified drag-el-horizontal" draggable="false">

                                <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
                                    <div v-for="item in getList(1)" :key="item.id"
                                        class="unidentified drag-el-horizontal" draggable="true"
                                        @dragstart="startDrag($event, item)">
                                        <p>{{ item.word }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="outer-box">
                            <h3>Clerk</h3>
                            <div class="unidentified drag-el-horizontal" draggable="false">

                                <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
                                    <div v-for="item in getList(2)" :key="item.id"
                                        class="unidentified drag-el-horizontal" draggable="true"
                                        @dragstart="startDrag($event, item)">
                                        <p>{{ item.word }}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="flex-horizontal">
                        <div class="outer-box">
                            <h3>Vehicle</h3>

                            <div class="unidentified drag-el-horizontal" draggable="false">

                                <div class="drop-zone" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
                                    <div v-for="item in getList(3)" :key="item.id"
                                        class="unidentified drag-el-horizontal" draggable="true"
                                        @dragstart="startDrag($event, item)">
                                        <p>{{ item.word }}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="outer-box">
                            <h3>Reservation</h3>

                            <div class="unidentified drag-el-horizontal" draggable="false">

                                <div class="drop-zone" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
                                    <div v-for="item in getList(4)" :key="item.id"
                                        class="unidentified drag-el-horizontal" draggable="true"
                                        @dragstart="startDrag($event, item)">
                                        <p>{{ item.word }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div class="outer-box">
                    <h3>Methods</h3>

                    <div class="unidentified drag-el-horizontal" draggable="false">
                        <div class="drop-zone" @drop="onDrop($event, 13)" @dragenter.prevent @dragover.prevent>
                            <div v-for="item in getList(13)" :key="item.id" class="unidentified drag-el-horizontal"
                                draggable="true" @dragstart="startDrag($event, item)">
                                <p>{{ item.word }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
    <footer>
        <div id="buttons" class="relative">
            <button class="navitem">Back</button>
            <button class="navitem" @click="validate()">Next</button>
        </div>
    </footer>
</template>

<style scoped>
.image {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 15%;
    height: auto;
    padding: 0;
}

.identify-box {
    background-color: #fff;
}

.identified {
    box-shadow: 2px 3px 10px 2px #D7DFFF;
    background-color: #6D71FA;
    color: white;
}

.unidentified {
    background-color: #fff;
    color: black;
    box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.flex-between {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    width: auto;
    gap: 10px;
    background-color: #F9FAFE;
}

.drop-zone {
    display: flex;
    /* width: fit-content; */
    min-width: 30ch;
    max-width: 600px;
    margin: 5px;
    height: fit-content;
    /* box-shadow: 2px 3px 10px 2px #D7DFFF; */
    max-height: fit-content;
    min-height: 8vh;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
}


.flex-horizontal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
}

.flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.outer-box {
    padding: 20px;
    background-color: #F9FAFE;
    /* box-shadow: 1px 2px 5px 1px #D7DFFF; */
    max-width: 600px;
    min-width: fit-content;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

}

.drag-el-horizontal {
    padding-left: 2vh;
    padding-right: 2vh;
    border-radius: 10px;
    margin: 5px;
    padding-top: 1vh;
    padding-bottom: 1vh;
    height: fit-content;
    max-width: inherit;
    /* box-shadow: 2px 3px 10px 2px #D7DFFF; */
    cursor: pointer;
}

.drop-zone-horizontal {
    display: flex;
    max-width: 1000px;
    min-width: 700px;
    margin: 10px;
    margin-bottom: 25px;
    box-shadow: 2px 3px 10px 2px #D7DFFF;
    background-color: #F9FAFE;
    min-height: 10vh;
    border-radius: 10px;
    max-height: fit-content;
    overflow: auto;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
}

.drag-el-horizontal:nth-last-child() {
    margin-bottom: 0;
}

.drag-el:nth-last-child() {
    margin-bottom: 0;
}

.flexbox {
    display: flex;
    justify-content: space-between;

    height: 100%;
    width: 98%;

    overflow: hidden;

    margin: 15px;
    padding: 15px
}

#buttons {
    margin: 0;
    text-align: center;
}

.relative {
    padding: 10px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
}

.navitem {
    width: 100px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border: none;
    background-color: #E8562A;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
}

.navitem:hover {
    background-color: #fff;
    color: #E8562A;
    border: 1px solid #E8562A;
    cursor: pointer;
    font-weight: bold;
}
</style>

