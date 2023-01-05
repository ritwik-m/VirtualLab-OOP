import java.util.Scanner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestDriver {
	
	public static void main(String[] args) throws ParseException {
		// TODO Auto-generated method stub
		Person[] cobj= new Person[5];
		
		cobj[0]=new Customer("ABC", "abc@gmail.com");//upcasting
		cobj[1]=new Customer("DEF", 8654678976L);//upcasting
		cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);//upcasting
		cobj[3]=new Clerk("EFG","efg@gmail.com");//upcasting
		cobj[4]=new Person("PQR","pqr@gmail.com"); //static binding
		
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		cobj[3].setCity("Coimbatore");
		
		Vehicle vobj=new Vehicle(1234);
		
		//Downcasting required from Person to Customer
		Reservation robj1= new Reservation((Customer)cobj[0],vobj);
		robj1.setBookingDate(new Date());	
	}	
}
