function valid() {
    var inp1 = document.getElementById("ip1").value;
    var inp2 = document.getElementById("ip2").value;
    var inp3 = document.getElementById("ip3").value;
    var inp4 = document.getElementById("ip4").value;
    var inp5 = document.getElementById("ip5").value;
    var inp6 = document.getElementById("ip6").value;

    //below are for cardinality

    var car1 = document.getElementById("inp1").value;
    var car2 = document.getElementById("inp2").value;
    var car3 = document.getElementById("inp3").value;
    var car4 = document.getElementById("inp4").value;
    var car5 = document.getElementById("inp5").value;
    var car6 = document.getElementById("inp6").value;
    var car7 = document.getElementById("inp7").value;
    var car8 = document.getElementById("inp8").value;
    var car9 = document.getElementById("inp9").value;
    var car10 = document.getElementById("inp10").value;
    var car11 = document.getElementById("inp11").value;
    var car12 = document.getElementById("inp12").value;

    var relations_res = inp1 == "gets-keys-from" && inp2 == "books" && inp3 == "makes" && inp4 == "releases" && inp5 == "rents" && inp6 == "completes";
    
    var car_res = (car1 == "1" && car2 == "1" && car3 == "1" && car4 == "1" && car5 == "1" && car6 == "1..*" && car7 == "1" && car8 == "1");
    
    car_res = (car_res) && (car9 == "1" && car10 == "1..*" && car11 == "1" && car12 == "1..*");
    
    var res = car_res && relations_res;
   
    console.log(inp1 + inp2 + inp3);
    
    if (res) {
        document.getElementById("head").innerHTML = "Good Job";
        document.getElementById("body").innerHTML = "You got all the relations and cardinality right";
        document.getElementById("link").innerHTML = "Go next";
        document.querySelector(".popup").style.display = "block";
        console.log("Valid");
        window.open(methods.html);
    }
    else {
        document.getElementById("head").innerHTML = "Try again";
        document.getElementById("body").innerHTML = "The relations and cardinality don't seem to be right<br>Check if the relation names exactly match as given";
        document.querySelector(".popup").style.display = "block";
        console.log(inp1 + inp2 + inp3);
        console.log("Invalid");
    }
}