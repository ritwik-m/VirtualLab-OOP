package CarRental;

public class Clerk extends Person{

    public void requestVehicle(Customer customer) {
        System.out.println("Hello " + customer.getName() + ", I am " + this.getName() + ". A vehicle has been requested for you.");
    }

    public void signContract(Customer customer) {
        System.out.println("Hello " + customer.getName() + ", I am " + this.getName() + ". A contract has been signed for the vehicle, thank you.");
    }

}
