package Reservation;

import java.util.Date;

public class Reservation {
    //declaring all attributes of the reservation class

    private final Customer customer; //Here the aggregation relationship between the Reservation class and the customer class is established

    private final Vehicle vehicle; //Here the aggregation relationship between the Reservation class and the vehicle class is established

    private String contractStatus;
    private Date releaseDate;


    //Parameterized constructor of the reservation class using customer and vehicle class objects.
    public Reservation(Customer customer, Vehicle vehicle, String contractStatus, Date releaseDate) {
        this.customer = customer;
        this.vehicle = vehicle;
        this.contractStatus = contractStatus;
        this.releaseDate = releaseDate;
    }

    //Method to locate any reservation for a customer
    public Reservation locateReservation(String cName) {

        if (reservation.customer.getCustomerName().equals(cName)) {
            return reservation;
        }
    
        else{
            System.out.println("No reservation found for " + cName);
            return null;
        }

    }

    //Method to release a contract of a customer's reservation
    public void releaseContract(String cName) {
        Reservation reservation = locateReservation(cName);
        if (reservation != null) {
            reservation.contractStatus = "Released";
            reservation.releaseDate = new Date();
        }
    }

    @Override
    public String toString() {
        return "Reservation: " + "Customer: " + customer.getCustomerName() + ", Vehicle: " + vehicle.vehicleName + ", Contract Status: " + contractStatus + ", Release Date: " + releaseDate;
    }

}
