import java.text.ParseException;

public class RentalSystem {
	public Customer[] cobj;
	public Clerk[] clerkobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
	
	//Singleton pattern
	private static RentalSystem rentObj= new RentalSystem();
	
	//Made private to create singleton object
	private RentalSystem() {}
	
	//Singleton pattern
	public static RentalSystem getRentalSystem()
	{
		return rentObj;
	}
	
	public Clerk assignClerk()
	{
		return this.clerkobj[0];
	}
	
	public void visitOffice(Reservation res) throws ParseException
	{
		Clerk cl = assignClerk();
		if(cl !=null)
		{
			if (cl.requestVehicle(res).compareTo("initiate contract")==0)
			{
				System.out.println("Vehicle is available, initiating contract..");
				System.out.println(cl.signContract(res));
			}
			else
				System.out.println("Vehicle is on trip, please wait");
		}
		else 
			System.out.println("wait for clerk");
	}
}
