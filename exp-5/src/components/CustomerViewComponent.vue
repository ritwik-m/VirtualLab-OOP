<template>
    <div class="codebox">
    <pre>
      public class Customer {
        
        private final int customerID;
        private String email;
        private String custName;
        private long phone;
        private String city;
        private static int customerCount=0; 
        
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
            return "[ID: "+ getcustomerID()+ ", Name: "+getcustName()+
                    ", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
        }
    }
    
    </pre>
</div>
    </template>
    
    <script>
    
    </script>
    
    
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