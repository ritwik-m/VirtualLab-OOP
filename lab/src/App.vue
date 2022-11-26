<template>
    <div id="app">
        <main class="flexbox">
            <Board id="board-0">
                <p>Attributes and Data Types</p>
                <Card id="card-0" draggable="true">
                    <p>Card one</p>
                </Card>
            </Board>
            <Board id="board-1">
                <p>Customer</p>
                <Card id="card-1" draggable="true">
                    <p>Card two</p>
                </Card>
            </Board>
            <Board id="board-2">
                <p>Clerk</p>
                <Card id="card-2" draggable="true">
                    <p>Card three</p>
                </Card>
            </Board>
            <Board id="board-3">
                <p>Reservation</p>
                <Card id="card-3" draggable="true">
                    <p>Card four</p>
                </Card>
            </Board>
            <Board id="board-4">
                <p>Vehicle</p>
                <Card id="card-4" draggable="true">
                    <p>Card five</p>
                </Card>
            </Board>
        </main>
    </div>
</template>
<script>
export default {

    name: 'app',
    components: {
        Board,
        Card
    }
}

</script>
<style>
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body {
     background-color: #F3F3F3;
 }

 .flexbox {
     display: flex;
     justify-content: space-between;
     width: 100%;
     max-width: 768px;
     height: 100vh;
     overflow: hidden;
     margin: 0 auto;
     padding: 15px;
 }

 .flexbox .board {
     display: flex;
     flex-direction: column;
     width: 20%;
     max-width: 300px;
     background-color: #313131;
     padding: 15px;
 }

 .flexbox .board .card {
     padding: 15px 25px;
     background-color: #F3F3F3;
     cursor: pointer;
     margin-bottom: 15px;
 }
</style>