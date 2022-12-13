function allowdrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data).cloneNode(true));
}
function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function validate() {
    var cust1 = document.getElementById("c1").innerText;
    var cust2 = document.getElementById("c2").innerText;
    var customer_valid = cust1 == "cname" && cust2 == "String";

    var clerk1 = document.getElementById("cl1").innerText;
    var clerk2 = document.getElementById("cl2").innerText;
    var clerk_valid = clerk1 == "rname" && clerk2 == "String";

    var re1 = document.getElementById("r1").innerText;
    var re2 = document.getElementById("r2").innerText;
    var re3 = document.getElementById("r3").innerText;
    var re4 = document.getElementById("r4").innerText;
    var re5 = document.getElementById("r5").innerText;
    var re6 = document.getElementById("r6").innerText;
    var re7 = document.getElementById("r7").innerText;
    var re8 = document.getElementById("r8").innerText;

    var row1_res = (re1 == "customerObj" && re2 == "Customer") || (re1 == "vehicleObj" && re2 == "Vehicle") || (re1 == "contractStatus" && re2 == "String") || (re1 == "releaseDate" && re2 == "Date");
    var row2_res = (re3 == "customerObj" && re4 == "Customer") || (re3 == "vehicleObj" && re4 == "Vehicle") || (re3 == "contractStatus" && re4 == "String") || (re3 == "releaseDate" && re4 == "Date");
    var row3_res = (re5 == "customerObj" && re6 == "Customer") || (re5 == "vehicleObj" && re6 == "Vehicle") || (re5 == "contractStatus" && re6 == "String") || (re5 == "releaseDate" && re6 == "Date");
    var row4_res = (re7 == "customerObj" && re8 == "Customer") || (re7 == "vehicleObj" && re8 == "Vehicle") || (re7 == "contractStatus" && re8 == "String") || (re7 == "releaseDate" && re8 == "Date");
    var reservation_valid = row1_res && row2_res && row3_res && row4_res;

    var ve1 = document.getElementById("v1").innerText;
    var ve2 = document.getElementById("v2").innerText;
    var ve3 = document.getElementById("v3").innerText;
    var ve4 = document.getElementById("v4").innerText;

    var veh_row1_res = (ve1 == "regNum" && ve2 == "int") || (ve1 == "keyStatus" && ve2 == "String");
    var veh_row2_res = (ve3 == "regNum" && ve4 == "int") || (ve3 == "keyStatus" && ve4 == "String");

    var vehicle_valid = veh_row1_res && veh_row2_res;


    if (customer_valid && clerk_valid && reservation_valid) {
        console.log("three valid");
        window.alert("valid");
        window.open("relations.html");
    }
    else {
        window.alert("invalid");
        console.log(clerk1);
        console.log(clerk2);
        console.log(clerk_valid);
    }
}