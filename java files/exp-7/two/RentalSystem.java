import java.text.ParseException;

public class RentalSystem {
	public Customer[] cobj;
	public Clerk[] clerkobj;
	public Vehicle[] vobj;
	public Reservation[] robj;
	
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
