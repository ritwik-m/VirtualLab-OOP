
public class PersonFactory {
	
	public Person getPerson(String personType, String name, String email)
	{
		 if(personType == null){  
             return null;  
            }  
          if(personType.equalsIgnoreCase("CUSTOMER")) {  
                 return new Customer(name,email);  
               }   
           else if(personType.equalsIgnoreCase("CLERK")){  
                return new Clerk(name, email);  
            }   
          return null;
	}
	
	public Person getPerson(String personType, String name, long phone)
	{
		 if(personType == null){  
             return null;  
            }  
          if(personType.equalsIgnoreCase("CUSTOMER")) {  
                 return new Customer(name,phone);  
               }   
           else if(personType.equalsIgnoreCase("CLERK")){  
                return new Clerk(name, phone);  
            }   
          return null;
	}
	
	public Person getPerson(String personType, String name, String email, long phone)
	{
		 if(personType == null){  
             return null;  
            }  
          if(personType.equalsIgnoreCase("CUSTOMER")) {  
                 return new Customer(name,email,phone);  
               }   
           else if(personType.equalsIgnoreCase("CLERK")){  
                return new Clerk(name, email, phone);  
            }   
          return null;
	}

}
