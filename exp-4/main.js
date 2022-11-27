function validate()
{
    var ans = document.getElementById('code0').value
    let check1 = ans.includes("public class Customer")
    let check2 = ans.includes("void visitOffice()")
    let check3 = ans.includes("String getName()")
    let check4 = ans.includes("void setName(String name)")
    let check5 = ans.includes("String name")
    /*
    public class Customer {
        String name;

        public void visitOffice();
        public String getName();
        public void setName(String name);
    }
    */
         if(ans == '') 
         {      
        alert("Please reload to get template to fill");
              document.getElementById('code0').focus();
        return false;       
        }
        else if(check1 == true && check2 == true && check3 == true && check4 == true)
         {
            alert("Good job! That's the right answer");
            document.getElementById('code0').focus();
            return true;


            }
        else{
            alert("All the methods and attributes are not declared right. Try again.")
            return false;
         }

}