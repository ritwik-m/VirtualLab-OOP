

<script>
export default {

  methods: {
    validate_one() {
      if (this.one == "class" && this.two == "Customer") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[0] = "none";
        this.display[1] = "inherit";
        //Mention 'using java syntax'
      }

      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },

    validate_two() {
      if (this.three == "String" && this.four == "custName") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[1] = "none";
        this.display[2] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },

    validate_three() {
      if (this.five == "int" && this.six == "customerID") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[2] = "none";
        this.display[3] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },
    validate_four() {
      if (this.seven == "String" && this.eight == "email") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[3] = "none";
        this.display[4] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },
    validate_five() {
      if (this.nine == "long" && this.ten == "phone") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[4] = "none";
        this.display[5] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },
    validate_six() {
      if (this.eleven == "String" && this.twelve == "city") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[5] = "none";
        this.display[6] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },
    validate_seven() {
      if (this.thirteen == "static" && this.fourteen == "int" && this.fifteen == "customerCount=0") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[6] = "none";
        this.display[7] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },
    validate_eight() {
      if (this.sixteen == "customerCount++" && this.seventeen == "this") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[7] = "none";
        this.display[8] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },
    validate_nine() {
      if (this.eighteen == "String custName" && this.nineteen == "String email" && this.twenty == "this" && this.t1 == "this") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[8] = "none";
        this.display[9] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },
    validate_ten() {
      if (this.t2 == "String custName" && this.t3 == "long phone" && this.t4 == "this" && this.t5 == `setPhone(phone)`) {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[9] = "none";
        this.display[10] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },

    validate_eleven() {
      if (this.t6 == "getcustName" && this.t7 == "return custName") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[10] = "none";
        this.display[11] = "inherit";
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },

    validate_twelve() {
      if (this.t8 == "void" && this.t9 == "setPhone" && this.t10 == "long phone" && this.t11 == "if" && this.t12 == "this.phone" && this.t13 == "else" && this.t14 == "this.phone") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        this.display[11] = "none";
        this.display[12] = "inherit";
        this.cue = `Congratulations you have successfully completed learning to implement classes. The final code for the class is given below.`;
      }
      else {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Incorrect. Try again";
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }
    },
  },
  data() {
    return {
      id: 'container',
      class: 'wrapper',
      button_value: 'Next',
      correct: false,
      valid: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      display: ["inherit", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",]
    }
  }

}

</script>

<template>

  <main class="app">
    <div id="snackbar">Error Message.</div>


    <div class="row" style="font-family: 'Montserrat' sans-serif;">
      <div class="column">
        <h1 style="padding: 25px; padding-bottom: 0px;">Fill in the Java code for the following updated Customer class.
        </h1>
        <p style="padding: 25px; padding-top: 0px;">You only have to fill in the spaces provided.</p>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[0] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark0>Class Customer</mark0>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            - custName: String
            <br>
            - customerID: int
            <br>
            - email: String
            <br>
            - phone: long
            <br>
            - city: String
            <br>
            - customerCount: static int
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[1] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark0>- custName: String</mark0>
            <br>
            - customerID: int
            <br>
            - email: String
            <br>
            - phone: long
            <br>
            - city: String
            <br>
            - customerCount: static int
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[2] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark0>- customerID: int</mark0>
            <br>
            - email: String
            <br>
            - phone: long
            <br>
            - city: String
            <br>
            - customerCount: static int
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[3] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark0>- email: String</mark0>
            <br>
            - phone: long
            <br>
            - city: String
            <br>
            - customerCount: static int
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[4] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark0>- phone: long</mark0>
            <br>
            - city: String
            <br>
            - customerCount: static int
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[5] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark0>- city: String</mark0>
            <br>
            - customerCount: static int
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[6] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark0>- customerCount: static int</mark0>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[7] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- customerCount: static int</mark1>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[8] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- customerCount: static int</mark1>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[9] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- customerCount: static int</mark1>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getcustName(): String
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[10] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- customerCount: static int</mark1>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark0>+ getcustName(): String</mark0>
            <br>
            + getcustomerID(): int
            <br>
            + getEmail(): String
            <br>
            + getPhone(): long
            <br>
            + getCity(): String
            <br>
            + setEmail(): void
            <br>
            + setPhone(): void
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[11] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- customerCount: static int</mark1>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getcustName(): String</mark1>
            <br>
            <mark1>+ getcustomerID(): int</mark1>
            <br>
            <mark1>+ getEmail(): String</mark1>
            <br>
            <mark1>+ getPhone(): long</mark1>
            <br>
            <mark1>+ getCity(): String</mark1>
            <br>
            <mark1>+ setEmail(): void</mark1>
            <br>
            <mark0>+ setPhone(): void</mark0>
            <br>
            + setCity(): void
          </div>
        </div>

        <div
          style="margin-left: 15%; height: fit-content; width: 250px; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
          :style="{ display: display[12] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Customer</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- custName: String</mark1>
            <br>
            <mark1>- customerID: int</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- customerCount: static int</mark1>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getcustName(): String</mark1>
            <br>
            <mark1>+ getcustomerID(): int</mark1>
            <br>
            <mark1>+ getEmail(): String</mark1>
            <br>
            <mark1>+ getPhone(): long</mark1>
            <br>
            <mark1>+ getCity(): String</mark1>
            <br>
            <mark1>+ setEmail(): void</mark1>
            <br>
            <mark1>+ setPhone(): void</mark1>
            <br>
            <mark1>+ setCity(): void</mark1>
          </div>
        </div>



      </div>
      <div class="column">
        <h1 style="padding: 25px; padding-left: 0px;">Enter your code here .</h1>
        <p style="padding-bottom: 25px">Follow instructions provided in the comments</p>
        <div class="codebox" id="codebox" :style="{ display: display[0] }">
          public
          <input spellcheck="false" maxlength="5" style="width: 70px;" v-model='one'>
          <input spellcheck="false" id="two" maxlength="8" style="width: 90px;" v-model="two">{ <p id="comment">//Create
            a class "Customer"</p><br>
          } <br><button class="button-9" id="btn1" @click="validate_one()"> {{ button_value }} </button>
        </div>
        <div class="codebox" id="codebox" :style="{ display: display[1] }">
          public class Customer{
          <br>&emsp;private

          <input spellcheck="false" id="three" maxlength="6" style="width: 75px;" v-model="three">
          <input spellcheck="false" id="four" maxlength="8" style="width: 90px;" v-model="four">;<p id="comment">
            //Create new attribute "custName"</p>
          <br>}<br>
          <button class="button-9" id="btn2" @click="validate_two()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[2] }">
          public class Customer{
          <br>&emsp;private String custName;
          <br>&emsp;private
          <input spellcheck="false" id="five" maxlength="3" style="width: 40px;" v-model="five">
          <input spellcheck="false" id="six" maxlength="11" style="width: 110px;" v-model="six">;
          <p id="comment">//Create new attribute "customerID"</p>
          <br>}<br>
          <button class="button-9" id="btn3" @click="validate_three()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[3] }">
          public class Customer{
          <br>&emsp;private String custName;
          <br>&emsp;private int customerID;
          <br>&emsp;private
          <input spellcheck="false" id="seven" maxlength="6" style="width: 65px;" v-model="seven">
          <input spellcheck="false" id="eight" maxlength="5" style="width: 60px;" v-model="eight">;
          <p id="comment">//Create new attribute "email"</p>
          <br>}<br>
          <button class="button-9" id="btn4" @click="validate_four()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[4] }">
          public class Customer{
          <br>&emsp;private String custName;
          <br>&emsp;private int customerID;
          <br>&emsp;private String email;
          <br>&emsp;private
          <input spellcheck="false" id="nine" maxlength="4" style="width: 50px;" v-model="nine">
          <input spellcheck="false" id="ten" maxlength="5" style="width: 65px;" v-model="ten">;
          <p id="comment">//Create new attribute "phone" of type long</p>
          <br>}<br>
          <button class="button-9" id="btn5" @click="validate_five()"> {{ button_value }} </button>

        </div>

        <div class="codebox" id="codebox" :style="{ display: display[5] }">
          public class Customer{
          <br>&emsp;private String custName;
          <br>&emsp;private int customerID;
          <br>&emsp;private String email;
          <br>&emsp;private long phone;
          <br>&emsp;private
          <input spellcheck="false" id="eleven" maxlength="6" style="width: 65px;" v-model="eleven">
          <input spellcheck="false" id="twelve" maxlength="4" style="width: 50px;" v-model="twelve">;
          <p id="comment">//Create new attribute "city"</p>
          <br>}<br>
          <button class="button-9" id="btn6" @click="validate_six()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[6] }">
          public class Customer{
          <br>&emsp;private String custName;
          <br>&emsp;private int customerID;
          <br>&emsp;private String email;
          <br>&emsp;private long phone;
          <br>&emsp;private String city;
          <br>&emsp;public
          <input spellcheck="false" id="thirteen" maxlength="6" style="width: 65px;" v-model="thirteen">
          <input spellcheck="false" id="fourteen" maxlength="3" style="width: 40px;" v-model="fourteen">
          <input spellcheck="false" id="fifteen" maxlength="15" style="width: 135px;" v-model="fifteen">;
          <p id="comment">//Create new static attribute "customerCount" of type int and set value to 0</p>
          <br>}<br>
          <button class="button-9" id="btn7" @click="validate_seven()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[7] }">
          <pre>public class Customer {
	
	private int customerID;
	private String email;
	private String custName;
	private long phone;
	private String city;
	public static int customerCount=0; </pre>
          <br><br>
          <p id="comment">//Increment customerCount by 1 in default constructor and assign it to customerID</p>
          &emsp;public Customer()<br>&emsp;{<br>&emsp;&emsp;
          <input spellcheck="false" id="sixteen" maxlength="15" style="width: 135px;" v-model="sixteen">;
          <br>&emsp;&emsp;
          <input spellcheck="false" id="seventeen" maxlength="4" style="width: 45px;" v-model="seventeen">.customerID =
          customerCount;
          <br>&emsp;&emsp;}
          <br>}<br>
          <button class="button-9" id="btn8" @click="validate_eight()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[8] }">
          <pre>public class Customer {
	
	private int customerID;
	private String email;
	private String custName;
	private long phone;
	private String city;
	public static int customerCount=0; 
	
	public Customer()
	{
		customerCount++;
		this.customerID=customerCount;
	}</pre>

          <br>
          <p id="comment">//Add parameterized constructor with parameters 1.custName and 2.email and assign values using
            "this operator"</p>
          <br>&emsp;public Customer(
          <input spellcheck="false" id="eighteen" maxlength="15" style="width: 130px;" v-model="eighteen">,
          <input spellcheck="false" id="nineteen" maxlength="12" style="width: 100px;" v-model="nineteen">){
          <br>&emsp;&emsp;
          <input spellcheck="false" id="twenty" maxlength="4" style="width: 45px;" v-model="twenty">.custName =
          custName;
          <br>&emsp;&emsp;
          <input spellcheck="false" id="t1" maxlength="4" style="width: 45px;" v-model="t1">.email = email;
          <br>&emsp;&emsp;}
          <br>}<br>
          <button class="button-9" id="btn9" @click="validate_nine()"> {{ button_value }} </button>
        </div>


        <div class="codebox" id="codebox" :style="{ display: display[9] }">
          <pre>public class Customer {
	
	private int customerID;
	private String email;
	private String custName;
	private long phone;
	private String city;
	public static int customerCount=0; 
	
	public Customer()
	{
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		this();
		this.custName = custName;
		this.email=email;
	}</pre>

          <br><br>
          <p id="comment">//Add parameterized constructor with parameters 1.custName and 2.phone and assign values
            //using "this operator".<br>
            //Now assume a method "setPhone" exists to assign value to phone.</p>
          &emsp;public Customer(
          <input spellcheck="false" id="t2" maxlength="15" style="width: 130px;" v-model="t2">,
          <input spellcheck="false" id="t3" maxlength="10" style="width: 95px;" v-model="t3">){
          <br>&emsp;&emsp;
          <input spellcheck="false" id="t4" maxlength="4" style="width: 45px;" v-model="t4">.custName = custName;
          <br>&emsp;&emsp;
          this.<input spellcheck="false" id="t5" maxlength="15" style="width: 130px;" v-model="t5">;
          <br>&emsp;&emsp;}
          <br>}<br>
          <button class="button-9" id="btn10" @click="validate_ten()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[10] }">
          <pre>public class Customer {
	
	private int customerID;
	private String email;
	private String custName;
	private long phone;
	private String city;
	public static int customerCount=0; 
	
	public Customer()
	{
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		this();
		this.custName = custName;
		this.email=email;
	}
	
	public Customer(String custName, long phone) {
		this();
		this.custName = custName;
		this.setPhone(phone);
	}
	
	public Customer(String custName, String email, long phone) {
		this();
		this.custName = custName;
		this.email=email;
		this.setPhone(phone);
	}</pre>
          <br><br>
          <p id="comment">//Create a getter method for custName and return the value.</p>
          &emsp;public String
          <input spellcheck="false" id="t6" maxlength="11" style="width: 110px;" v-model="t6">() {
          <br>&emsp;&emsp;
          <input spellcheck="false" id="t7" maxlength="15" style="width: 130px;" v-model="t7">;
          <br>&emsp;&emsp;}
          <br>}<br>
          <button class="button-9" id="btn11" @click="validate_eleven()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[11] }">
          <pre>public class Customer {
	
	private int customerID;
	private String email;
	private String custName;
	private long phone;
	private String city;
	public static int customerCount=0; 
	
	public Customer()
	{
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		this();
		this.custName = custName;
		this.email=email;
	}
	
	public Customer(String custName, long phone) {
		this();
		this.custName = custName;
		this.setPhone(phone);
	}
	
	public Customer(String custName, String email, long phone) {
		this();
		this.custName = custName;
		this.email=email;
		this.setPhone(phone);
	}

	public String getcustName() {
		return custName;
	}
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}</pre>
          <br><br>
          <p id="comment">//Create a setter method for phone as setPhone</p>
          &emsp;public
          <input spellcheck="false" id="t8" maxlength="4" style="width: 50px;" v-model="t8">
          <input spellcheck="false" id="t9" maxlength="8" style="width: 85px;" v-model="t9">(
          <input spellcheck="false" id="t10" maxlength="10" style="width: 95px;" v-model="t10">) {


          <br>&emsp;&emsp;
          <input spellcheck="false" id="t11" maxlength="2" style="width: 30px;" v-model="t11">(phone >= 0000000000L &&
          phone &lt;= 9999999999L)
          <br>&emsp;&emsp;&emsp;<input spellcheck="false" id="t12" maxlength="10" style="width: 90px;" v-model="t12"> =
          phone;
          <br>&emsp;&emsp;
          <input spellcheck="false" id="t13" maxlength="4" style="width: 50px;" v-model="t13">
          <br>&emsp;&emsp;&emsp;<input spellcheck="false" id="t14" maxlength="10" style="width: 90px;" v-model="t14"> =
          9999999999L;
          <br>}<br>
          <button class="button-9" id="btn12" @click="validate_twelve()"> {{ button_value }} </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[12] }">
          <pre>
public class Customer {
	
	private int customerID;
	private String email;
	private String custName;
	private long phone;
	private String city;
	public static int customerCount=0; 
	
	public Customer()
	{
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		this();
		this.custName = custName;
		this.email=email;
	}
	
	public Customer(String custName, long phone) {
		this();
		this.custName = custName;
		this.setPhone(phone);
	}
	
	public Customer(String custName, String email, long phone) {
		this();
		this.custName = custName;
		this.email=email;
		this.setPhone(phone);
	}

	public String getcustName() {
		return custName;
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
	
	public int getcustomerID() {
		return customerID;
	}
	
	public String toString()
	{
          return "[ID: "+ getcustomerID()+ ",
          Name: "+getcustName()+
          ", Email: "+getEmail()+", Phone: "+getPhone()+
          ", City: "+getCity()+" ]";
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

.app {
  min-height: 1000px;
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

#snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
}

#snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}
</style>
