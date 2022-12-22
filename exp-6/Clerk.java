public class Clerk extends Person{

    private String address;
    private String phoneNumber;
    private String email;
    private String department;
    private String position;

    public Clerk(String name) {
        super(name);
    }

    public Clerk(String name, String address, String phoneNumber, String email, String department, String position) {
        super(name);
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.department = department;
        this.position = position;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void requestVehicle(Customer cObj){
        System.out.println("Vehicle requested by " + cObj.getName());
    }

    public void signContract(Customer cObj){
        System.out.println("Contract signed by " + cObj.getName());
    }
}
