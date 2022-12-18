package CarRental;

public class Customer extends Person{

    public void visitOffice(Clerk clerk) {
        clerk.requestVehicle(this);
        clerk.signContract(this);
    }
}
