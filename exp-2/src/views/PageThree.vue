<template>
    <main>
        <div class="codebox">
            <img style= "max-width: 800px;" src="..\..\assets\Frame 1.png"/>
        </div>
        <div class="codebox" style="max-width: 300px;">
            <ul>
                <li>1 : requestVehicle</li>
                <li>2 : locateReservation(customer 1)</li>
                <li>4 [Wait for Vehicle] :</li>
                <li>3 [Vehicle on Trip] :</li>
                <li>6 : initiateContract</li>
                <li>5 [Vehicle available] :</li>
                <li>7 : SignContract</li>
                <li>8 : releaseContract</li>
                <li>9 [Reservation released] :</li>
                <li>10 : updateKeyStatus</li>
                <li>11 [To Give Key] :</li>
                <li>12 [Key HandedOver] :</li>
            </ul>

        </div>
    </main>
</template>

<script>
export default{

}
</script>

<style scoped>
.codebox {
  max-width: 800px;
  padding: 25px;
  border-radius: 10px;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}
</style>