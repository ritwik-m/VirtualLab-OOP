<template>
    <main class="app">
        <div class="codebox">
            <pre>
import java.util.*;
import java.text.*;

public class Clerk extends Person{
	private final int empID;
	private static int employeeCount=0;
	
	public Clerk()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Clerk(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Clerk(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Clerk(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getEmpID() {
		return empID;
	}
	
	public String toString()
	{
		return "[ID: "+ getEmpID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
	
}



      
      </pre>
        </div>
    </main>
</template>
      
<script>

</script>
      
      
<style scoped>
.app {
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


.codebox {
    margin: 30px;
    height: fit-content;
    width: 90%;
    padding: 25px;
    border-radius: 10px;
    background-color: #F9FAFE;
    box-shadow: 2px 3px 10px 2px #D7DFFF;
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