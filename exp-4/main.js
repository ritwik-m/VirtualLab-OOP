function validate() {
    var ans = document.getElementById('code0').value
    let check1 = ans.includes("public class Customer")
    let check2 = ans.includes("public void visitOffice();")
    let check3 = ans.includes("public String getName();")
    let check4 = ans.includes("public void setName(String name);")
    let check5 = ans.includes("String name;")

    let check6 = ans.includes("public class Clerk")
    let check7 = ans.includes("String name;")
    let check8 = ans.includes("public String getName();")
    let check9 = ans.includes("public void setName(String name);")
    let check10 = ans.includes("public String requestVehicle();")
    let check11 = ans.includes("public void SignContract();")

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

    else if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true && check6 == true && check7 == true && check8 == true && check9 == true && check10 == true && check11 == true) {

        document.getElementById("head").innerHTML = "Good Job!";
        document.getElementById("body").innerHTML = "You got both the classes right. Try the next two.";

        document.querySelector(".popup").style.display = "block";
        return false
    }

    else if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true) {

        document.getElementById("head").innerHTML = "Almost there!";
        document.getElementById("body").innerHTML = "You got the first class right. Try again.";
        document.querySelector(".popup").style.display = "block";

        document.getElementById('code0').focus();
        return false;
    }

    else if (check6 == true && check7 == true && check8 == true && check9 == true && check10 == true && check11 == true) {
        
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