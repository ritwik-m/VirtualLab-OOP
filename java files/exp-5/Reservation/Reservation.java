// <!--Designed & Developed by:
// Nirmal K (@cyberwizard1001)⁶
// Nitin Ravi (@nitinravi)
// Ritwik M (@ritwikm) &
// Nalinadevi K 
// for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->


package Reservation;

import java.util.Date;

public class Reservation {
    //1. Create the class "Reservation"

    //2.  Declare all attributes of the reservation class(Customer obj, contractStatus, releaseDate)

    private final Customer customer; //Here the aggregation relationship between the Reservation class and the customer class is established
    private String contractStatus;
    private Date releaseDate;


    //3. Create a Parameterized constructor of the reservation class using customer object and releaseDate.
    public Reservation(Customer customer, Date releaseDate) {
        this.customer = customer;
        this.releaseDate = releaseDate;
    }


    //4. Create an arraylist of reservations
     static ArrayList<Reservation> reservations = new ArrayList<>();

    //5. Create an addReservation method with reservation object as parameter to add a reservation
    public static void addReservation(Reservation reservation) {
        reservations.add(reservation);
    }


    //6. Create a locateReservation Method to locate any reservation for a customer (cName is parameter)
    public Reservation locateReservation(String cName) {

        for (Reservation reservation : reservations) {
            //7. Write logic for comparing cName against reservation's Customer name to be equal
            if (reservation.customer.getCustomerName().equals(cName)) {
                return reservation;
            }

            else{
            System.out.println("No reservation found for " + cName);
            return null;
        }
        }
    }

    //8. Write a Method "releaseContract" to release a contract of a customer's reservation
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
