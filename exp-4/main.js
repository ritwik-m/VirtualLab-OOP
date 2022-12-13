
function validate() {
    var firstbox = document.getElementById("one");
    var secondbox = document.getElementById("two");
    
    if(firstbox.value == "class" && secondbox.value == "Customer"){
        document.getElementById("btn").innerHTML = "Correct. Next";

        document.getElementById("btn").style.backgroundColor = "green";
    }

    else{
        document.getElementById("btn").innerHTML = "Wrong. Try again";
        document.getElementById("btn").style.backgroundColor = "red";
        return false;

    }

}

