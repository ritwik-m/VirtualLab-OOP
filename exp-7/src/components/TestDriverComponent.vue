 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwikm) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

<script>
export default {
  methods: {
    validate_one() {
      if (this.one == "Person[]" && this.two == "Person[5]") {
        this.button_value = this.button_text_right;
        this.display[0] = "none";
        this.display[1] = "block";
        this.completed[0] = true;
        console.log("one_correct")
      }

      else {
        this.button_value = this.button_text;
        btn1.style.backgroundColor = "red";
      }
    },

    validate_two() {
      if (this.three == "Customer" && this.four == "ABC" && this.five == "abc@gmail.com") {
        this.button_value = this.button_text_right;
        
        this.display[1] = "none";
        this.display[2] = "block";
        this.completed[1] = true;
      }
      else {
        this.button_value = this.button_text;
        btn2.style.backgroundColor = "red";
      }
    },

    validate_three() {
      if (this.six == "Clerk" && this.seven == "EFG" && this.eight == "efg@gmail.com") {
        this.button_value = this.button_text_right;
        
        this.display[2] = "none";
        this.display[3] = "block";
        this.completed[2] = true;

      }
      else {
        this.button_value = this.button_text;
        btn2.style.backgroundColor = "red";
      }
    },
    validate_four(){
      if (this.nine == "Person" && this.ten == "PQR" && this.eleven == "pqr@gmail.com"){
        this.button_value = this.button_text_right;
        
        this.display[3] = "none";
        this.display[4] = "block";
        this.completed[3] = true;
      }
      else{
        this.button_value = this.button_text;
        btn4.style.backgroundColor = "red";
      }
    },
    validate_five(){
      if (this.twelve === "setCity" && this.thirteen === "Coimbatore"){
        this.button_value = this.button_text_right;
        
        this.display[4] = "none";
        this.display[5] = "block";
        this.completed[4] = true;
      }
      else{
        this.button_value = this.button_text;
        btn5.style.backgroundColor = "red";
      }
    },
    validate_six(){
      if (this.fourteen === "Vehicle" && this.fifteen === "Vehicle" && this.sixteen === "1234"){
        this.button_value = this.button_text_right;
        
        this.display[5] = "none";
        this.display[6] = "block";
        this.completed[5] = true;
      }
      else{
        this.button_value = this.button_text;
        btn6.style.backgroundColor = "red";
      }
    },
    validate_seven(){
      if (this.seventeen === "Reservation" && this.eighteen === "Reservation" && this.nineteen === "Customer"){
        this.button_value = this.button_text_right;
        
        this.display[6] = "none";
        this.display[7] = "block";
        this.completed[6] = true;
      }
      else{
        this.button_value = this.button_text;
        btn7.style.backgroundColor = "red";
      }
    },
    validate_eight(){
      if (this.twenty === "setBookingDate" && this.twentyone === "Date()"){
        this.button_value = this.button_text_right;
        
        this.display[7] = "none";
        this.display[8] = "block"
        this.completed[7] = true;
      }
      else{
        this.button_value = this.button_text;
        btn8.style.backgroundColor = "red";
      }
    }
    

  },
  data() {
    return {
      id: 'container',
      class: 'wrapper',
      button_value: 'Next',
      button_text: "Incorrect. Try again",
      button_text_right: "Next",
      correct: false,
      display: ["block", "none", "none", "none", "none","none","none","none", "none"],
      completed: [false,false,false,false,false,false,false,false]
    }
  }

}

</script>
<template>
    <main class="app">
      <div class = "column" style="position:fixed; top: 30%; left: 60%;">
        <div class="column">
          <div class="codebox">
            <ul style="line-height: 125%;">
              <li :class="{completed: completed[0]}">Initiate an array of type Person with 5 objects.</li>
              <li :class="{completed: completed[1]}">Using the concept of <b>upcasting</b>, initiate objects 0, 1 and 2 as instances of the class Customer.</li>
              <li :class="{completed: completed[2]}">Using the concept of <b>upcasting</b>, initiate object 3 as an instance of of the ckass Clerk.</li>
              <li :class="{completed: completed[3]}">Initiate object 4 as an instance of class Person using the concept of <b>static binding</b></li>
              <li :class="{completed: completed[4]}">Set the city for each of the objects based on instructions in the comments</li>
              <li :class="{completed: completed[5]}">Create an object <b>vobj</b> of type Vehicle with a regNum value of 1234</li>
              <li :class="{completed: completed[6]}">Create an object <b>robj1</b> of type Reservation passing cobj[0] (with proper typecasting) and vobj as parameters.</li>
              <li :class="{completed: completed[7]}">Set the booking date for robj1 to the current date.</li>
            </ul>
          </div>
        </div>
      </div>
    <div class="row">
            
            <div class="column">
              <h1 style="padding: 25px; padding-bottom: 0px;">Enter your code here .</h1>
              <p style="padding: 25px; padding-top: 0px">Follow instructions provided in the comments</p>
      
              <div class="codebox" id="codebox" :style="{ display: display[0] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {</pre>&emsp;
                <input spellcheck="false" maxlength="8" style="width: 90px;" v-model='one'> cobj = new   
                <input spellcheck="false" id="two" maxlength="9" style="width: 95px;" v-model="two">{ <p id="comment">//Create an array of 
                  time Person with 5 objects</p><br>
                } <br><button class="button-9" id="btn1" @click="validate_one()"> {{ button_value }} </button>
              </div>
      
              <div class="codebox" id="codebox" :style="{ display: display[1] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
        Person[] cobj= new Person[5];
                </pre>
                <br>&emsp;&emsp;&emsp;cobj[0] = new
                <input spellcheck="false" maxlength="8" style="width: 90px;" v-model='three'>("
                <input spellcheck="false" maxlength="3" style="width: 50px;" v-model='four'>", "
                <input spellcheck="false" maxlength="13" style="width: 130px;" v-model='five'>")
                <p id="comment">//Create a new Customer object using name as "ABC" and email "abc@gmail.com"</p><br>
                } <br><button class="button-9" id="btn2" @click="validate_two()"> {{ button_value }} </button>
              </div>

              <div class="codebox" id="codebox" :style="{ display: display[2] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
        Person[] cobj= new Person[5];
        cobj[0] = new Customer("ABC", "abc@gmail.com");
        cobj[1] = new Customer("DEF", 8654678976L);
        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
                </pre>
                <br>&emsp;&emsp;&emsp;cobj[3] = new
                <input spellcheck="false" maxlength="6" style="width: 90px;" v-model='six'>("
                <input spellcheck="false" maxlength="3" style="width: 60px;" v-model='seven'>", "
                <input spellcheck="false" maxlength="13" style="width: 130px;" v-model='eight'>")
                <p id="comment">//Create a new Clerk object using name as "EFG" and email as "efg@gmail.com"</p><br>
                } <br><button class="button-9" id="btn3" @click="validate_three()"> {{ button_value }} </button>
              </div>

              <div class="codebox" id="codebox" :style="{ display: display[3] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
        Person[] cobj= new Person[5];
        cobj[0] = new Customer("ABC", "abc@gmail.com");
        cobj[1] = new Customer("DEF", 8654678976L);
        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
        cobj[3] = new Clerk("EFG", "efg@gmail.com")
                </pre>
                <br>&emsp;&emsp;&emsp;cobj[3] = new
                <input spellcheck="false" maxlength="6" style="width: 60px;" v-model='nine'>("
                <input spellcheck="false" maxlength="3" style="width: 50px;" v-model='ten'>", "
                <input spellcheck="false" maxlength="13" style="width: 130px;" v-model='eleven'>")
                <p id="comment">//Create a new Person object using name as "PQR" and email as "pqr@gmail.com"</p><br>
                } <br><button class="button-9" id="btn4" @click="validate_four()"> {{ button_value }} </button>
              </div>
      
              <div class="codebox" id="codebox" :style="{ display: display[4] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
        Person[] cobj = new Person[5];gmail.com");
        cobj[1] = new Customer("DEF", 8654678976L);
        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
        cobj[3] = new Clerk("EFG", "efg@gmail.com")
        cobj[4] = new Person("PQR", "pqr@gmail.com")
      
      </pre>
          <br>&emsp;&emsp;&emsp;cobj[0].
                <input spellcheck="false" maxlength="7" style="width: 75px;" v-model='twelve'>(
                <input spellcheck="false" maxlength="10" style="width: 110px;" v-model='thirteen'>);
                <br>&emsp;
                <p id="comment">//Set the City of first object to "Coimbatore"</p><br>&emsp;}
                <br>
                } <br><button class="button-9" id="btn5" @click="validate_five()"> {{ button_value }} </button>
              </div>

              <div class="codebox" id="codebox" :style="{ display: display[5] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
        Person[] cobj = new Person[5];
        cobj[0] = new Customer("ABC", "abc@gmail.com");
        cobj[1] = new Customer("DEF", 8654678976L);
        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
        cobj[3] = new Clerk("EFG", "efg@gmail.com")
        cobj[4] = new Person("PQR", "pqr@gmail.com")
        cobj[0].setCity("Coimbatore");
        cobj[1].setCity("Coimbatore");
        cobj[2].setCity("Chennai");
        cobj[3].setCity("Coimbatore");
      </pre>    &emsp;&emsp;&emsp;
                <input spellcheck="false" maxlength="7" style="width: 75px;" v-model='fourteen'> vobj = new
                <input spellcheck="false" maxlength="7" style="width: 75px;" v-model='fifteen'>(
                <input spellcheck="false" maxlength="4" style="width: 60px;" v-model='sixteen'>;)
                
                <br>&emsp;}
                <p id="comment">//Create a new Vehicle object with value "1234"</p><br>
                } <br><button class="button-9" id="btn6" @click="validate_six()"> {{ button_value }} </button>
              </div>


              <div class="codebox" id="codebox" :style="{ display: display[6] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
        Person[] cobj = new Person[5];
        cobj[0] = new Customer("ABC", "abc@gmail.com");
        cobj[1] = new Customer("DEF", 8654678976L);
        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
        cobj[3] = new Clerk("EFG", "efg@gmail.com")
        cobj[4] = new Person("PQR", "pqr@gmail.com")
        cobj[0].setCity("Coimbatore");
        cobj[1].setCity("Coimbatore");
        cobj[2].setCity("Chennai");
        cobj[3].setCity("Coimbatore");

        Vehicle vobj = new Vehicle("1234"); 
      </pre>    &emsp;&emsp;&emsp;
                <!--Reservation robj1= new Reservation((Customer)cobj[0],vobj);-->
                <input spellcheck="false" maxlength="11" style="width: 100px;" v-model='seventeen'> robj = new
                <input spellcheck="false" maxlength="11" style="width: 100px;" v-model='eighteen'>((
                <input spellcheck="false" maxlength="8" style="width: 85px;" v-model='nineteen'>)cobj[0], vobj);
                
                <br>&emsp;}
                <p id="comment">//Use downcasting to pass Person cobj[0] and vobj as parameters to create a Reservation object.</p>
                <p id="comment">//Clue: cobj[0] is of type Person but Reservation only takes Customer objects.</p>
                <br>
                } <br><button class="button-9" id="btn7" @click="validate_seven()"> {{ button_value }} </button>
              </div>


            <div class="codebox" id="codebox" :style="{ display: display[7] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
        Person[] cobj = new Person[5];
        cobj[0] = new Customer("ABC", "abc@gmail.com");
        cobj[1] = new Customer("DEF", 8654678976L);
        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
        cobj[3] = new Clerk("EFG", "efg@gmail.com")
        cobj[4] = new Person("PQR", "pqr@gmail.com")
        cobj[0].setCity("Coimbatore");
        cobj[1].setCity("Coimbatore");
        cobj[2].setCity("Chennai");
        cobj[3].setCity("Coimbatore");

        Vehicle vobj = new Vehicle("1234"); 
        Reservation robj1= new Reservation((Customer)cobj[0],vobj);
      </pre>    &emsp;&emsp;&emsp;
                robj1.<input spellcheck="false" maxlength="14" style="width: 130px;" v-model='twenty'>(new
                <input spellcheck="false" maxlength="8" style="width: 60px;" v-model='twentyone'>);
                
                <br>&emsp;}
                <p id="comment">//Set the booking date for robj1 to today's date</p>
                
                <br>
                } <br><button class="button-9" id="btn8" @click="validate_eight()"> {{ button_value }} </button>
              </div>

              <div class="codebox" id="codebox" :style="{ display: display[8] }">
                <pre>
import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
        Person[] cobj = new Person[5];
        cobj[0] = new Customer("ABC", "abc@gmail.com");
        cobj[1] = new Customer("DEF", 8654678976L);
        cobj[2] = new Customer("GHI", "ghi@gmail.com", 1234567890L);
        cobj[3] = new Clerk("EFG", "efg@gmail.com")
        cobj[4] = new Person("PQR", "pqr@gmail.com")
        cobj[0].setCity("Coimbatore");
        cobj[1].setCity("Coimbatore");
        cobj[2].setCity("Chennai");
        cobj[3].setCity("Coimbatore");

        Vehicle vobj = new Vehicle("1234"); 
        Reservation robj1= new Reservation((Customer)cobj[0],vobj);

        robj1.setBookingDate(new Date());
      </pre>    
      <button class="button-9" id="btn8" @click="$router.push('/abstraction')"> {{ button_value }} </button>
              </div>


            </div>
            </div>
          </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
  background-color: #F9FAFE;
}

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(.\fonts\Montserrat-VariableFont_wght.ttf) format("truetype");

  /* add a terminal font here - inconsolata? */
}

h1,
h2,
p {
  font-family: 'Montserrat', sans-serif;
  color: rgb(0, 3, 40);
}

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.completed{
  color: cadetblue;
  text-decoration: line-through;
}


mark1 {
  background-color: rgb(176, 230, 183);
  box-shadow: 1px 6px 15px 2px rgb(160, 222, 159);
  color: black;
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

mark0 {
  box-shadow: 1px 6px 15px 2px rgb(249, 255, 191);
  background-color: rgb(231, 238, 162);
  color: black;
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

#comment {
  margin-left: 15px;
  font-style: italic;
  color: gray;
  font-size: small;
}


.codebox {
  height: 80%;
  width: 90%;
  margin: 25px;
  padding: 25px;
  border-radius: 10px;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

input{
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  color: black;
}

/* CSS */
.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s, box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 200px;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}
</style>
