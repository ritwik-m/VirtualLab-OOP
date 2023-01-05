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
	
	public String toString()
	{
		return "[ID: "+ getEmpID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
	
}
