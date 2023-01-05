import java.util.*;
import java.text.*;

public class Clerk extends Person{
	private final int empID;
	private static int employeeCount=0;
	
	public Clerk()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Clerk(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Clerk(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Clerk(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getEmpID() {
		return empID;
	}
	
	public String requestVehicle(Reservation robj) throws ParseException
	{
		SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
	    Date d = sdformat.parse("2022-02-29");
		if(robj.getBookingDate().compareTo(d)==0)
		{
			if(robj.locateReservation().compareTo("Vehicle available")==0)
				return "initiate contract";
			else
				return "wait for vehicle";
		}
		return "Booking date not matching";
	}
	
	public String signContract(Reservation robj)
	{
		System.out.println(robj.releaseContract());
		robj.getVehicleObj().updateKeyStatus();
		return "Vehicle key handedover";
	}
	
	public String toString()
	{
		return "[ID: "+ getEmpID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
	
}
