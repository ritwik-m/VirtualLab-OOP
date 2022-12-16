function allowdrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function valid() {
    var customer = document.getElementById("customer");
    var clerk = document.getElementById("clerk");
    var reservation = document.getElementById("reserve");
    var vehicle = document.getElementById("vehicle");

    var cust_valid = customer.contains(document.getElementById("meth1")) && (customer.contains(document.getElementById("meth2")) || customer.contains(document.getElementById("meth4"))) &&
        (customer.contains(document.getElementById("meth3")) || customer.contains(document.getElementById("meth5")));

    var celrk_valid = clerk.contains(document.getElementById("meth6")) && clerk.contains(document.getElementById("meth7")) && (clerk.contains(document.getElementById("meth2")) || clerk.contains(document.getElementById("meth4"))) &&
        (clerk.contains(document.getElementById("meth3")) || clerk.contains(document.getElementById("meth5")));


    var reservation_valid = reservation.contains(document.getElementById("meth8")) && reservation.contains(document.getElementById("meth9"))

    var vehicle_valid = vehicle.contains(document.getElementById("meth10"))

    if (cust_valid && celrk_valid && reservation_valid && vehicle_valid) {
        document.getElementById("head").innerHTML = "Good Job";
        document.getElementById("body").innerHTML = "You got all the class methods right<br> You have successfully completed this experiment";
        document.querySelector(".popup").style.display = "block";
    }

    else{
        document.getElementById("head").innerHTML = "Try again";
        document.getElementById("body").innerHTML = "The methods don't seem to match the right classes.";
        document.querySelector(".popup").style.display = "block";
    }
}