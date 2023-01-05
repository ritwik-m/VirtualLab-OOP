
public class Person {
	private String name;
	private String email;
	private long phone;
	private String city;

	public Person()
	{
		
	}
	
	public Person(String name, String email) {
		this.name = name;
		this.setEmail(email);
	}
	
	public Person(String name, long phone) {
		this.name = name;
		this.setPhone(phone);
	}
	
	public Person(String name, String email, long phone) {
		this.name = name;
		this.email =email;
		this.setPhone(phone);
	}

	public String getName() {
		return name;
	}
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {		
		if(phone >= 0000000000L && phone <= 9999999999L)
			this.phone = phone;
		else
			this.phone = 9999999999L;
		
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

}
