
public class Customer extends Person{
	
	private final int customerID;
	private static int customerCount=0; 
	
	public Customer(PersonBuilder builder) {
		super(builder);
		customerCount++;
		this.customerID=customerCount;		
	}
	
	public int getcustomerID() {
		return customerID;
	}
	
	public String toString()
	{
		return "[ID: "+ getcustomerID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
}
