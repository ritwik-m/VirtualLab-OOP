<script>
export default {
    methods: {
        validate_one() {
            if (this.one == "abstract") {
                this.button_value = this.button_text_right;
                this.display[0] = "none"
                this.display[1] = "block"
            }

            else {
                this.button_value = this.button_text;
                btn1.style.backgroundColor = "red";
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
            display: ["block", "none"]
        }
    }

}

</script>

<template>
    <main>
        <div class="flex">
        <div class="codebox" id="codebox" :style="{ display: display[0] }">
            <div>
                <input spellcheck="false" type="text" id="input1" v-model="one" maxlength="8"/> public
                class Person {
            </div>


            <pre>
	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	public Person(String name, String email) {
		this.name = name;
		this.setEmail(email);
	}
	
	public Person(String name, long phone) {
		this.name = name;
		this.setPhone(phone);
	}
	
	public Person(String name, String email, long phone) {
		this.name = name;
		this.email =email;
		this.setPhone(phone);
	}

	public String getName() {
		return name;
	}
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {		
		if(phone >= 0000000000L && phone &lt;= 9999999999L)
			this.phone = phone;
		else
			this.phone = 9999999999L;
		
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

}

        </pre>
        <button class="button-9" id="btn1" @click="validate_one">{{button_value}}</button>
        </div>
        <div class="codebox" :style="{display: display[0]}">
            Convert the class Person into an abstract class
        </div>
    </div>


        <div class="flex">
            <div class="codebox" id="codebox" :style="{ display: display[1] }">
                <h3 style="font-family: monospace;">Person.java</h3>
                <p class="comment">//Note that person is now abstract</p>
            <pre>

abstract public class Person {
	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	...
}

        </pre>

        <div>
            <h3 style="font-family: monospace;">Test Driver.java</h3>
            <pre>
...

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {

		
		Person[] cobj= new Person[5];
		
		cobj[0]=new Customer("ABC", "abc@gmail.com"); //upcasting
		cobj[1]=new Customer("DEF", 8654678976L); //upcasting
                cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L); //upcasting
		cobj[3]=new Clerk("EFG","efg@gmail.com"); //upcasting
		cobj[4]=new Person("PQR","pqr@gmail.com"); 
		
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		cobj[3].setCity("Coimbatore");
		
		Vehicle vobj=new Vehicle(1234);
		
		//Downcasting required from Person to Customer
		Reservation robj1= new Reservation((Customer)cobj[0],vobj);
		robj1.setBookingDate(new Date());

	}	
}

            </pre>


        </div>
        
        </div>
        <div class="outbox" :style="{display: display[1]}">
                    <p>OUTPUT</p>   
                   <p style="color: #FF6262;">prog.Java:12: Abstract classes cannot be instantiated. They can only be extended.</p>
                   <p style="color: #FF6262;">&emsp; &emsp; cobj[4]=new Person("PQR","pqr@gmail.com")</p><br>
                    <p style="color: #FF6262;">1 Error</p>

                    <div style="height: 100px; background-color: #202020;"></div>
                    <h4 style="font-family: monospace; color: inherit; background-color: inherit;">EXPLANATION</h4>
                    <p>As stated in the error, abstract classes cannot be instantiated. 
                        To access the attributes and methods defined here, the classes have to be extended. 
                        In our example, Person is being extended by Customer and Clerk.</p>

                        <button class="button-9" id="btn1" @click="$router.push('/abstraction-execution')">{{button_value}}</button>
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

.comment {
  margin-left: 15px;
  font-style: italic;
  color: gray;
  font-size: small;
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

.flex{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-direction: row;
}




.codebox {
    height: 80%;
    width: 50%;
    margin: 25px;
    padding: 25px;
    border-radius: 10px;
    
    box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.outbox {
    height: 80%;
    min-height: 50vh;
    width: 50%;
    margin: 25px;
    padding: 25px;
    border-radius: 10px;
    background-color: #202020;
    color: white;
    font-size: medium;
    font-family: monospace;
    font-weight: bold;
    box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.outbox p{
    background-color: inherit;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
}

input {
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