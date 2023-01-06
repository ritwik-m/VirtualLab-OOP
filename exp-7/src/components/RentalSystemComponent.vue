<script>
export default {
  methods: {
    validate_one() {
      if (this.one ==  "public" && this.two == "Customer[]" && this.three == "public" && this.four == "Clerk[]" && this.five == "public" && this.six == "Vehicle[]" && this.seven == "public" && this.eight == "Reservation[]") {
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
        if(this.nine === "Clerk"){
            this.button_value = this.button_text_right;
            this.display[1] = "none";
            this.display[2] = "block";
            console.log("two_correct")
        }

        else{
            this.button_value = this.button_text;
            btn2.style.backgroundColor = "red";
        }
    },

    validate_three(){
        if(this.ten === "clerkObj[0]"){
            this.button_value = this.button_text_right;
            this.display[2] = "none";
            this.display[3] = "block";
            console.log("three_correct")
        }

        else{
            this.button_value = this.button_text;
            btn3.style.backgroundColor = "red";
        }
    },

    validate_four(){
        if(this.eleven === "Reservation"){
            this.button_value = this.button_text_right;
            this.display[3] = "none";
            this.display[4] = "block";
            console.log("four_correct")
        }

        else{
            this.button_value = this.button_text;
            btn4.style.backgroundColor = "red";
        }
    },

    validate_five(){
        if(this.twelve === "assignClerk()"){
            this.button_value = this.button_text_right;
            this.display[4] = "none";
            this.display[5] = "block";
            console.log("five_correct")
        }

        else{
            this.button_value = this.button_text;
            btn5.style.backgroundColor = "red";
        }
    },
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
      completed: [false,false,false]
    }
  }

}

</script>
<template>
    <main class="app">
      <div class = "column" style="position:fixed; top: 30%; left: 70%;">
        <div class="column">
          <div class="codebox">
            <ul style="line-height: 125%;">
              <li :class="{completed: completed[0]}">Initiate object arrays of Customer, Clerk, Vehicle and Reservation classes.</li>
              <li :class="{completed: completed[1]}">Write a method that assigns the 0th element of the Clerk array called assignClerk</li>
              <li :class="{completed: completed[2]}">Write a method visitOffice that checks for clerk availability, verifies vehicle 
                status and signs contract if vehicle is available</li>
            </ul>
          </div>
        </div>
      </div>
    <div class="row">
            
            <div class="column">
              <h1 style="padding: 25px; padding-bottom: 0px;">Enter your code here .</h1>
              <p style="padding: 25px; padding-top: 0px">Follow instructions provided in the comments</p>
      
              <div class="codebox" :style="{ display: display[0] }">
                <pre>
import java.text.ParseException;

public class RentalSystem {
</pre>&emsp;
                <input spellcheck="false" maxlength="6" style="width: 90px;" v-model='one'>   
                <input spellcheck="false" id="two" maxlength="10" style="width: 95px;" v-model="two"> cobj;
                <br>&emsp;
                <input spellcheck="false" maxlength="6" style="width: 90px;" v-model='three'>   
                <input spellcheck="false" id="two" maxlength="7" style="width: 80px;" v-model="four"> clerkobj;
                <br>&emsp;
                <input spellcheck="false" maxlength="6" style="width: 90px;" v-model='five'>   
                <input spellcheck="false" id="two" maxlength="9" style="width: 90px;" v-model="six"> vobj;
                <br>&emsp;
                <input spellcheck="false" maxlength="6" style="width: 90px;" v-model='seven'>   
                <input spellcheck="false" id="two" maxlength="14" style="width: 120px;" v-model="eight"> robj;
                 <p id="comment">//Create arrays of Customer, Clerk, Vehicle and Reservation objects</p><br>
                } <br><button class="button-9" id="btn1" @click="validate_one()"> {{ button_value }} </button>
              </div>
      
              <div class="codebox" :style="{ display: display[1] }">
                <pre>
import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Clerk[] clerkobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
                </pre>
                <br>&emsp;&emsp;&emsp;public
                <input spellcheck="false" maxlength="7" style="width: 90px;" v-model='nine'> assignClerk(){"
                <p id="comment">//Create a method assignClerk() which returns an object of type Clerk</p><br>
                }   
                <br><button class="button-9" id="btn2" @click="validate_two()"> {{ button_value }} </button>
              </div>

              <div class="codebox" id="codebox" :style="{ display: display[2] }">
                <pre>
import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Clerk[] clerkobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Clerk assignClerk()
	{
                </pre>
                <br>&emsp;&emsp;&emsp;return this.
                <input spellcheck="false" maxlength="11" style="width: 110px;" v-model='ten'>;
                <p id="comment">//Return 0th object of the clerkObj array</p><br>
                } 
                <br><button class="button-9" id="btn3" @click="validate_three()"> {{ button_value }} </button>
                
              </div>

              <div class="codebox" id="codebox" :style="{ display: display[3] }">
                <pre>
import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Clerk[] clerkobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Clerk assignClerk()
	{   
        return this.clerkObj[0];
    }
                </pre>
                <br>&emsp;&emsp;&emsp;public void visitOffice(
                <input spellcheck="false" maxlength="11" style="width: 110px;" v-model='eleven  '> res) throws ParseException{
                <p id="comment">//Pass an object of Reservation as parameter</p><br>
                } 
                <br><button class="button-9" id="btn4" @click="validate_four()"> {{ button_value }} </button>
                
              </div>
              

              <div class="codebox" :style="{ display: display[4] }">
                <pre>
import java.text.ParseException;

public class RentalSystem {
    public Customer[] cobj;
	public Clerk[] clerkobj;
	public Vehicle[] vobj;
	public Reservation[] robj;

    public Clerk assignClerk()
	{   
        return this.clerkObj[0];
    }

    public void visitOffice(Reservation res) throws ParseException{
                </pre>
                <br>&emsp;&emsp;&emsp;Clerk cl = 
                <input spellcheck="false" maxlength="13" style="width: 110px;" v-model='twelve'>;
                <p id="comment">//Call a function to assign a clerk object to the cl variable</p><br>
                } 
                <br><button class="button-9" id="btn5" @click="validate_five()"> {{ button_value }} </button>
                
            </div>

            <div class="codebox" :style="{display: display[5]}" style="width: 100ch;">
                <pre>                    
import java.text.ParseException;

public class RentalSystem {
	public Customer[] cobj;
	public Clerk[] clerkobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
	
	public Clerk assignClerk()
	{
		return this.clerkobj[0];
	}
	
	public void visitOffice(Reservation res) throws ParseException
	{
		Clerk cl = assignClerk();
		if(cl !=null)
		{
			if (cl.requestVehicle(res).compareTo("initiate contract")==0)
			{
				System.out.println("Vehicle is available, initiating contract..");
				System.out.println(cl.signContract(res));
			}
			else
				System.out.println("Vehicle is on trip, please wait");
		}
		else 
			System.out.println("wait for clerk");
	}
}

                </pre>
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
