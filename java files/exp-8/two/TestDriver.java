import java.util.Scanner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {
		// TODO Auto-generated method stub
		
		//RentalSystem rentalSystem = new RentalSystem();
		//Singleton Pattern Demo
		RentalSystem rentalSystem = RentalSystem.getRentalSystem();
		
		rentalSystem.clerkobj=new Clerk[1];
		rentalSystem.clerkobj[0]=new Person.PersonBuilder("EFG")
				.withEmail("efg@gmail.com")
				.withCity("Coimbatore")
				.buildClerk();
		
		rentalSystem.cobj= new Customer[3];
		rentalSystem.cobj[0]=new Person.PersonBuilder("ABC")
				.withEmail("abc@gmail.com")
				.withCity("Coimbatore")
				.buildCustomer();
		rentalSystem.cobj[1]=new Person.PersonBuilder("DEF")
				.withPhone(8654678976L)
				.withCity("Coimbatore")
				.buildCustomer();
		rentalSystem.cobj[2]=new Person.PersonBuilder("GHI")
				.withEmail("ghi@gmail.com")
				.withPhone(1234567890L)
				.withCity("Chennai")
				.buildCustomer();
		
		rentalSystem.vobj = new Vehicle[1];
		rentalSystem.vobj[0]=new Vehicle(1234);
		
		rentalSystem.robj=new Reservation[1];
		rentalSystem.robj[0]= new Reservation(rentalSystem.cobj[0],rentalSystem.vobj[0]);
		SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
	    Date d = sdformat.parse("2022-02-29");
		rentalSystem.robj[0].setBookingDate(d);
		rentalSystem.robj[0].setContractStatus("Reservation not released");
		
		rentalSystem.visitOffice(rentalSystem.robj[0]);
	}	
}
