public class Customer extends Person{
	
	private final int customerID;
	private static int customerCount=0; 
	
	public Customer()
	{
		super();
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		super(custName, email);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, long phone) {
		super(custName, phone);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email, long phone) {
		super(custName, email, phone);
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
