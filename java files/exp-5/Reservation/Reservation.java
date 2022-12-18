package Reservation;

import java.util.ArrayList;
import java.util.Date;

public class Reservation {
    private final Customer customer;
    private final Vehicle vehicle;
    private String contractStatus;
    private Date releaseDate;

    public Reservation(Customer customer, Vehicle vehicle, String contractStatus, Date releaseDate) {
        this.customer = customer;
        this.vehicle = vehicle;
        this.contractStatus = contractStatus;
        this.releaseDate = releaseDate;
    }

    static ArrayList<Reservation> reservations = new ArrayList<>();

    public static void addReservation(Reservation reservation) {
        reservations.add(reservation);
    }

    public Reservation locateReservation(String cName) {

        for (Reservation reservation : reservations) {
            if (reservation.customer.getCustomerName().equals(cName)) {
                return reservation;
            }
        }

        System.out.println("No reservation found for " + cName);
        return null;

    }

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
