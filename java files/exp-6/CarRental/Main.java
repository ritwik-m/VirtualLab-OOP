package CarRental;

public class Main {
    public static void main(String[] args) {
        Customer customer = new Customer();
        customer.setName("Soorya");
        Clerk clerk = new Clerk();
        clerk.setName("John");
        customer.visitOffice(clerk);
    }
}
