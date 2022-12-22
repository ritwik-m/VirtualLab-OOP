<script>
export default {

  methods: {
    validate_one() {
      if (this.one == "Customer" && this.two == "extends") {
        this.button_value = this.button_text_right;
        btn2.style.backgroundColor = "green";
        this.display[0] = "none";
        this.display[1] = "inherit";
      }

      else {
        this.button_value = this.button_text;
        btn1.style.backgroundColor = "red";
      }
    },

    validate_two() {
      if (this.three == "super(name)") {
        this.button_value = this.button_text_right;
        btn2.style.backgroundColor = "green";
        this.display[1] = "none";
        this.display[2] = "inherit";
      }
      else {
        this.button_value = this.button_text;
        btn2.style.backgroundColor = "red";
      }
    },

    
  },
  data() {
    return {
      id: 'container',
      class: 'wrapper',
      button_value: 'Next',
      button_text: "Incorrect. Try again",
      button_text_right: "Correct. Next",
      correct: false,
      display: ["inherit", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",]
    }
  }

}

</script>

<template class="app">

  <main>

    <div class="row" style="font-family: Montserrat">
      <div class="column">
        <h1 style="padding: 25px;">Fill in the Java code for the following updated Customer class.</h1>
        <h2 style="padding: 25px;">You only have to fill in the spaces provided.</h2>

        <div
          style="margin-left: 15%; height: 500px; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[0] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark0>Class Customer</mark0>
          </div>
          <div style="height : 150px; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            - address: String
            <br>
            - phoneNumber: String
            <br>
            - email: String
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getAddress(): String
            <br>
            + setAddress(): void
            <br>
            + getPhoneNumber(): String
            <br>
            + setPhone(): void
            <br>
            + getEmail(): String
            <br>            
            + setEmail(): void
            <br>
            + visitOffice(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: 500px; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[1] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : 150px; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            - address: String
            <br>
            - phoneNumber: String
            <br>
            - email: String
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getAddress(): String
            <br>
            + setAddress(): void
            <br>
            + getPhoneNumber(): String
            <br>
            + setPhone(): void
            <br>
            + getEmail(): String
            <br>            
            + setEmail(): void
            <br>
            + visitOffice(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: 500px; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[2] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : 150px; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- address: String</mark1>
            <br>
            <mark1>- phoneNumber: String</mark1>
            <br>
            <mark1>- email: String</mark1>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getAddress(): String</mark1>
            <br>
            <mark1>+ setAddress(): void</mark1>
            <br>
            <mark1>+ getPhoneNumber(): String</mark1>
            <br>
            <mark1>+ setPhone(): void</mark1>
            <br>
            <mark1>+ getEmail(): String</mark1>
            <br>            
            <mark1>+ setEmail(): void</mark1>
            <br>
            <mark1>+ visitOffice(): void</mark1>
          </div>
        </div>



      </div>
      <div class="column">
        <h1 style="padding: 25px;">Enter your code here .</h1>

        <div class="codebox" id="codebox" :style="{ display: display[0] }">
          public class
          <input spellcheck="false" maxlength="8" style="width: 90px;" v-model='one'>
          <input spellcheck="false" id="two" maxlength="7" style="width: 85px;" v-model="two"> Person{ <p id="comment">//Create
            a class "Customer" that inherits "Person" class</p><br>
          } <br><button class="button-9" id="btn1" @click="validate_one()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[1] }">
        <pre>public class Customer extends Person{

private String address;
private String phoneNumber;
private String email;</pre>
        <br>&emsp;public Customer(String name, String address, String phoneNumber, String email){
          <br>&emsp;&emsp;
          <input spellcheck="false" id="three" maxlength="11" style="width: 110px;" v-model="three">;
          <br>&emsp;&emsp;this.address = address;
          <br>&emsp;&emsp;this.phoneNumber = phoneNumber;
          <br>&emsp;&emsp;this.email = email;
          <br>&emsp;
        };<p id="comment">
            //Using the correct keyword, obtain the value of parent class' constructor for "name" attribute</p>
          <br>}<br>
          <button class="button-9" id="btn2" @click="validate_two()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[2] }">
        <pre>public class Customer extends Person{

private String address;
private String phoneNumber;
private String email;

public Customer(String name, String address, String phoneNumber, String email){
    super(name);
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

public String getAddress(){
    return address;
}

public void setAddress(String address){
    this.address = address;
}

public String getPhoneNumber(){
    return phoneNumber;
}

public void setPhoneNumber(String phoneNumber){
    this.phoneNumber = phoneNumber;
}

public String getEmail(){
    return email;
}

public void setEmail(String email){
    this.email = email;
}

public void visitOffice(){
    System.out.println("Customer " + getName() + " is visiting the office.");
}
}</pre>

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
