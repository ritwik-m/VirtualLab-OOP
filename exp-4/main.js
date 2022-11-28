function validate() {
    var ans = document.getElementById('code0').value
    ans = ans.replace(/\s+/g, '');

    let check1 = ans.includes(`publicclassCustomer{Stringname;publicvoidvisitOffice();publicStringgetName();publicvoidsetName(Stringname);}publicclassClerk{Stringname;publicStringgetName();publicvoidsetName(Stringname);publicStringrequestVehicle();publicvoidSignContract();}`)
    let check2 = ans.includes(`publicclassClerk{Stringname;publicStringgetName();publicvoidsetName(Stringname);publicStringrequestVehicle();publicvoidSignContract();}publicclassCustomer{Stringname;publicvoidvisitOffice();publicStringgetName();publicvoidsetName(Stringname);}`)
    let check3 = ans.includes("publicclassCustomer{Stringname;publicvoidvisitOffice();publicStringgetName();publicvoidsetName(Stringname);}")
    let check4 = ans.includes("publicclassClerk{Stringname;publicStringgetName();publicvoidsetName(Stringname);publicStringrequestVehicle();publicvoidSignContract();}")

    /*
    public class Customer {
        String name;

        public void visitOffice();
        public String getName();
        public void setName(String name);

    }

    public class Clerk{
        String name;

        public String getName();
        public void setName(String name);
        public String requestVehicle();
        public void SignContract();
    }
    
    */
    if (ans == '') {
        document.getElementById("head").innerHTML = "Oh no!";
        document.getElementById("body").innerHTML = "The content is empty. Reload the page to get the template back";

        document.querySelector(".popup").style.display = "block";

        document.getElementById('code0').focus();
        return false;
    }

    else if (check1 == true || check2 == true) {

        document.getElementById("head").innerHTML = "Good Job!";
        document.getElementById("body").innerHTML = "You got both the classes right. Try the next two.";

        document.querySelector(".popup").style.display = "block";
        return false
    }

    else if (check3 == true) {

        document.getElementById("head").innerHTML = "Almost there!";
        document.getElementById("body").innerHTML = "You got the first class right. Try again.";
        document.querySelector(".popup").style.display = "block";

        document.getElementById('code0').focus();
        return false;
    }

    else if (check4 == true ) {
        
        document.getElementById("head").innerHTML = "Almost there!";
        document.getElementById("body").innerHTML = "You got the second class right. Try again.";
        document.querySelector(".popup").style.display = "block";

        return false;
    }

    else {
        document.getElementById("head").innerHTML = "Sorry";
        document.getElementById("body").innerHTML = "The methods and attributes declared are incorrect. Try again.";
        document.querySelector(".popup").style.display = "block";

        return false;
    }

}