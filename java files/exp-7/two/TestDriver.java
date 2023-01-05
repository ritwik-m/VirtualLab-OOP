import java.util.Scanner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {
		// TODO Auto-generated method stub
		
		RentalSystem rentalSystem = new RentalSystem();
		
		rentalSystem.clerkobj=new Clerk[1];
		rentalSystem.clerkobj[0]=new Clerk("EFG", "efg@gmail.com");
		
		rentalSystem.cobj= new Customer[3];
		rentalSystem.cobj[0]=new Customer("ABC", "abc@gmail.com");
		rentalSystem.cobj[1]=new Customer("DEF", 8654678976L);
		rentalSystem.cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);
		rentalSystem.cobj[0].setCity("Coimbatore");
		rentalSystem.cobj[1].setCity("Coimbatore");
		rentalSystem.cobj[2].setCity("Chennai");
		
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
