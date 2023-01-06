// <!--Designed & Developed by:
// Nirmal K (@cyberwizard1001)⁶
// Nitin Ravi (@nitinravi)
// Ritwik M (@ritwikm) &
// Nalinadevi K 
// for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

package Reservation;

public class Main {
    public static void main(String[] args) {
        //create a new customer
        Customer customer = new Customer(1, "soorya.s27@gmail.com", "Soorya");
        customer.setCity("Erode");
        customer.setPhone(1234567890);

        //create a new vehicle
        Vehicle vehicle = new Vehicle("Maruti", "800");

        //create a new reservation
        Reservation reservation = new Reservation(customer, vehicle, "Not Released", null);

        Reservation.addReservation(reservation);

        //show the reservation
        System.out.println(reservation.locateReservation("Soorya"));

        //release the contract
        reservation.releaseContract("Soorya");

        //show the reservation
        System.out.println(reservation.locateReservation("Soorya"));

    }
}
