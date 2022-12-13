
function validate() {
    var firstbox = document.getElementById("one");
    var secondbox = document.getElementById("two");
    var thirdbox = document.getElementById("three");
    var fourthbox = document.getElementById("four");
    
    if(firstbox.value == "class" && secondbox.value == "Customer"){
        document.getElementById("btn").innerHTML = "Correct. Next";
        document.getElementById("btn").style.backgroundColor = "green";
        return add1();
    }

    else if(thirdbox.value == "String" && fourthbox.value == "name"){
        document.getElementById("btn").innerHTML = "Correct. Next";
        document.getElementById("btn").style.backgroundColor = "green";
    }

    else{
        document.getElementById("btn").innerHTML = "Wrong. Try again";
        document.getElementById("btn").style.backgroundColor = "red";
        return false;

    }

}

function add1(){
    console.log("working");
    document.getElementById("cue").innerHTML = "Now add First attribute name that is private."
    document.getElementById("codebox").innerHTML = `public class Customer{
        <br>
        &emsp; private <input spellcheck="false" id="three" maxlength="6" style="width: 50px;"> 
        <input spellcheck="false" id="four" maxlength="4" style="width: 45px;">;<br>}
        <input hidden spellcheck="false" id="one" maxlength="5" style="width: 50px;"> 
        <input hidden spellcheck="false" id="two" maxlength="8" style="width: 70px;">`;
}
