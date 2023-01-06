// <!--Designed & Developed by:
// Nirmal K (@cyberwizard1001)⁶
// Nitin Ravi (@nitinravi)
// Ritwik M (@ritwikm) &
// Nalinadevi K 
// for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

package Reservation;

public class Customer {

    private final int customerID;
    private String email;
    private final String customerName;
    private long phone;
    private String city;

    public Customer(int customerID, String email, String customerName) {
        this.customerID = customerID;
        this.email = email;
        this.customerName = customerName;
    }

    public Customer(int customerID, String customerName, long phone) {
        this.customerID = customerID;
        this.customerName = customerName;
        this.phone = phone;
    }

    public Customer(int customerID, String email, String customerName, long phone) {
        this.customerID = customerID;
        this.email = email;
        this.customerName = customerName;
        this.phone = phone;
    }

    public int getCustomerID() {
        return customerID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCustomerName() {
        return customerName;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Customer data:\n"
                + "Customer ID: "
                + customerID + "\n "
                + "Customer Name: "
                + customerName + "\n "
                + "Email: "
                + email + "\n "
                + "Phone: "
                + phone + "\n "
                + "City: "
                + city + "\n ";
    }
}
