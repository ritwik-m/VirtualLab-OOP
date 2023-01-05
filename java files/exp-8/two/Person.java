
abstract public class Person {
	private String name;
	private String email;
	private long phone;
	private String city;

	public Person(PersonBuilder builder)
	{
		this.name=builder.name;
		this.email=builder.email;
		this.phone=builder.phone;
		this.city=builder.city;
	}

	public String getName() {
		return name;
	}
	
	
	public String getEmail() {
		return email;
	}

	public long getPhone() {
		return phone;
	}

	public String getCity() {
		return city;
	}

	public static class PersonBuilder {
		private String name;
		private String email;
		private long phone;
		private String city;
		
		public PersonBuilder(String name) 
		{
	        this.name = name;
	    }
		
		public PersonBuilder withEmail(String email) {
	        this.email = email;
	        return this;
	    }
		
		public PersonBuilder withPhone(long Phone) {
			if(phone >= 0000000000L && phone <= 9999999999L)
				this.phone = phone;
			else
				this.phone = 9999999999L;
	        return this;
	    }

		public PersonBuilder withCity(String city) {
	        this.city = city;
	        return this;
	    }
		
		public Customer buildCustomer() {
	        return new Customer(this);
	    }
		
		public Clerk buildClerk() {
	        return new Clerk(this);
	    }
		
	}

	
}
