public class Customer extends Person{

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
}
