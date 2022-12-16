
function validate() {
    var firstbox = document.getElementById("one");
    var secondbox = document.getElementById("two");
    var thirdbox = document.getElementById("three");
    var fourthbox = document.getElementById("four");
    var fifthbox = document.getElementById("five");
    var sixthbox = document.getElementById("six");
    var seventhbox = document.getElementById("seven");
    var eightbox = document.getElementById("eight");
    var ninthbox = document.getElementById("nine");
    var tenthbox = document.getElementById("ten");
    var eleventhbox = document.getElementById("eleven");
    var twelfthbox = document.getElementById("twelve");
    var d1 = "String"; //datatype1
    var d2 = "int";
    var d3 = "long";
    var d4 = "void";
    var access1 = "public";
    var access2 = "private";
    var cust = "Customer"

    
    if(firstbox.value == "class" && secondbox.value == "Customer"){
        document.getElementById("btn").innerHTML = "Correct. Next";
        document.getElementById("btn").style.backgroundColor = "green";
        return add1();
    }

    else if(thirdbox.value == d1 && fourthbox.value == "custName"){
        document.getElementById("btn").innerHTML = "Correct. Next";
        document.getElementById("btn").style.backgroundColor = "green";
        return add2(); //calling next addition of contents
    }

    else if(fifthbox.value == d2 && sixthbox.value == "customerID"){
        document.getElementById("btn").innerHTML = "Correct. Next";
        document.getElementById("btn").style.backgroundColor = "green";
        return add3(); //calling next addition of contents
    }

    else if(seventhbox.value == d1 && eightbox.value == "email" && ninthbox.value == d3 && tenthbox.value == "phone" && eleventhbox.value == d1 && twelfthbox.value == "city"){
        document.getElementById("btn").innerHTML = "Correct. Next";
        document.getElementById("btn").style.backgroundColor = "green";
        return add4(); //calling next addition of contents
    }

    else{
        document.getElementById("btn").innerHTML = "Wrong. Try again";
        document.getElementById("btn").style.backgroundColor = "red";
        return false;

    }

}

function add1(){
    document.getElementById("cue").innerHTML = `Now add First attribute - "custName" that is private.`
    document.getElementById("codebox").innerHTML = `public class Customer{
        <br>
        &emsp; private <input spellcheck="false" id="three" maxlength="6" style="width: 50px;"> 
        <input spellcheck="false" id="four" maxlength="8" style="width: 80px;">;<br>}
        <input hidden spellcheck="false" id="one" maxlength="5" style="width: 50px;"> 
        <input hidden spellcheck="false" id="two" maxlength="8" style="width: 70px;">`;
}

function add2(){
    document.getElementById("cue").innerHTML = `Now add attribute - "customerID" that is private.`
    document.getElementById("codebox").innerHTML = `public class Customer{
        <br>
        &emsp; private String custName;<br>&emsp;
        private <input spellcheck="false" id="five" maxlength="3" style="width: 30px;"> 
        <input spellcheck="false" id="six" maxlength="10" style="width: 75px;">;<br>}
        <input hidden spellcheck="false" id="one" maxlength="5" style="width: 50px;"> 
        <input hidden spellcheck="false" id="two" maxlength="8" style="width: 70px;">
        <input hidden spellcheck="false" id="three" maxlength="6" style="width: 50px;"> 
        <input hidden spellcheck="false" id="four" maxlength="4" style="width: 45px;">`;
}

function add3(){
    document.getElementById("cue").innerHTML = `Now add the other attributes as per class diagram.`
    document.getElementById("codebox").innerHTML = `public class Customer{
        <br>
        &emsp; private String custName;<br>&emsp;
        private int customerID;<br>&emsp;
        private 
        <input spellcheck="false" id="seven" maxlength="6" style="width: 50px;"> 
        <input spellcheck="false" id="eight" maxlength="5" style="width: 50px;">;  //email attribute<br>&emsp;
        private
        <input spellcheck="false" id="nine" maxlength="4" style="width: 40px;"> 
        <input spellcheck="false" id="ten" maxlength="5" style="width: 45px;">;  //phone attribute<br>&emsp;
        private
        <input spellcheck="false" id="eleven" maxlength="6" style="width: 50px;"> 
        <input spellcheck="false" id="twelve" maxlength="4" style="width: 35px;">;  //city attribute<br>&emsp;
    }
        <input hidden spellcheck="false" id="one" maxlength="5" style="width: 50px;"> 
        <input hidden spellcheck="false" id="two" maxlength="8" style="width: 70px;">
        <input hidden spellcheck="false" id="three" maxlength="6" style="width: 50px;"> 
        <input hidden spellcheck="false" id="four" maxlength="4" style="width: 45px;">
        <input hidden spellcheck="false" id="five" maxlength="6" style="width: 50px;">
        <input hidden spellcheck="false" id="six" maxlength="6" style="width: 50px;">`;
}
