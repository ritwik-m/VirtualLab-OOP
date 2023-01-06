import{_,o as v,c as g,p as y,a as C,b as t,r as j,n as p,d as n,w as c,v as h,t as b,e as s,f as a,g as x,h as k,K as D,i as N,F as V}from"./index-1e9f2017.js";const O={},R=e=>(y("data-v-287e039c"),e=e(),C(),e),I={class:"app"},$=R(()=>t("div",{class:"codebox"},[t("pre",null,`public class Customer {
	
	private final int customerID;
	private String email;
	private String custName;
	private long phone;
	private String city;
	private static int customerCount=0; 
	
	public Customer()
	{
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String custName, String email) {
		this();
		this.custName = custName;
		this.email=email;
	}
	
	public Customer(String custName, long phone) {
		this();
		this.custName = custName;
		this.setPhone(phone);
	}
	
	public Customer(String custName, String email, long phone) {
		this();
		this.custName = custName;
		this.email=email;
		this.setPhone(phone);
	}

	public String getcustName() {
		return custName;
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
	
	public int getcustomerID() {
		return customerID;
	}
	
	public String toString()
	{
		return "[ID: "+ getcustomerID()+ ", Name: "+getcustName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
}

      
      `)],-1)),T=[$];function F(e,i){return v(),g("main",I,T)}const E=_(O,[["render",F],["__scopeId","data-v-287e039c"]]);const B={methods:{correct(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_four(){if(this.eight=="String"&&this.nine=="customerName"&&this.ten=="long"&&this.eleven=="phone"&&this.twelve=="Vehicle"&&this.thirteen=="vehicleObj"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[0]="none",this.display[1]="block"}else this.incorrect()},validate_five(){if(this.fourteen=="new"&&this.fifteen=="customerName"&&this.sixteen=="phone"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[1]="none",this.display[2]="block"}else this.incorrect()},validate_six(){this.button_value="Next",this.display[2]="none",this.display[3]="block"},validate_seven(){this.button_value="Next",this.display[3]="none",this.display[4]="block",this.$emit("reservationComplete",!0)}},data(){return{id:"container",class:"wrapper",button_value:"Next",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["block","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}},l=e=>(y("data-v-5b35b997"),e=e(),C(),e),U={class:"app"},L=l(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),K={class:"row"},H={class:"column"},M=l(()=>t("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Enter your code here .",-1)),A=l(()=>t("p",{style:{padding:"25px","padding-top":"0px"}},"Follow instructions provided in the comments",-1)),P=l(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;

      `,-1)),J=l(()=>t("br",null,null,-1)),G=l(()=>t("p",{id:"comment"},"//Create a constructor for Reservation class with by passing Customer parameters and Vehicle object to establish composition",-1)),z=l(()=>t("br",null,null,-1)),W=l(()=>t("br",null,null,-1)),q=l(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(String customerName, long phone, Vehicle vehicleObj) {
    `,-1)),Q=l(()=>t("br",null,null,-1)),X=l(()=>t("br",null,null,-1)),Y=l(()=>t("br",null,null,-1)),Z=l(()=>t("br",null,null,-1)),tt=l(()=>t("br",null,null,-1)),et=l(()=>t("p",{id:"comment"},"//Assign new Customer object with customerName and phone values to customerObj - enforcing composition",-1)),nt=l(()=>t("br",null,null,-1)),lt=l(()=>t("br",null,null,-1)),ot=l(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(String customerName, long phone, Vehicle vehicleObj) {
		this.customerObj = new Customer(customerName, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public Reservation(String customerName, String email, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}
    `,-1)),it=l(()=>t("br",null,null,-1)),st=l(()=>t("br",null,null,-1)),at=l(()=>t("p",{id:"comment",style:{"font-weight":"bold"}},"//Here the second constructor using customerName and email is created similarly - enforcing composition",-1)),rt=l(()=>t("br",null,null,-1)),ut=l(()=>t("br",null,null,-1)),ct=l(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(String customerName, long phone, Vehicle vehicleObj) {
		this.customerObj = new Customer(customerName, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public Reservation(String customerName, String email, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

  public Reservation(String customerName, String email, long phone, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}
    `,-1)),dt=l(()=>t("br",null,null,-1)),ht=l(()=>t("br",null,null,-1)),pt=l(()=>t("p",{id:"comment",style:{"font-weight":"bold"}},"//Here the third constructor using customerName email and phone is created similarly - enforcing composition",-1)),mt=l(()=>t("br",null,null,-1)),bt=l(()=>t("br",null,null,-1)),vt=l(()=>t("pre",null,`import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	

	public Reservation(String customerName, long phone, Vehicle vehicleObj) {
		this.customerObj = new Customer(customerName, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public Reservation(String customerName, String email, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public Reservation(String customerName, String email, long phone, Vehicle vehicleObj){
		this.customerObj = new Customer(customerName, email, phone);
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public String getContractStatus() {
		return contractStatus;
	}

	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}
	
	public String releaseContract(){
		if(bookingDate.compareTo(releaseDate)==0 && vehicleObj.getKeyStatus().compareTo("available")==0)
			return vehicleObj.updateKeyStatus();
		else
			return "Vehicle not avaible";
	}

	public Customer getCustomerObj() {
		return customerObj;
	}

	public Vehicle getVehicleObj() {
		return vehicleObj;
	}

	public int getReservationID() {
		return reservationID;
	}
	
}

      `,-1)),_t=l(()=>t("br",null,null,-1)),gt={class:"column",style:{position:"relative",left:"5%",width:"fit-content"}},yt={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Ct={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},ft=l(()=>t("br",null,null,-1)),St=l(()=>t("br",null,null,-1)),wt=l(()=>t("br",null,null,-1)),jt=l(()=>t("br",null,null,-1)),xt=l(()=>t("br",null,null,-1)),kt=l(()=>t("br",null,null,-1)),Dt={style:{padding:"15px","line-height":"40px"}},Nt=l(()=>t("br",null,null,-1)),Vt=l(()=>t("br",null,null,-1)),Ot=l(()=>t("br",null,null,-1)),Rt=l(()=>t("br",null,null,-1)),It=l(()=>t("br",null,null,-1)),$t=l(()=>t("br",null,null,-1)),Tt={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Ft={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},Et=l(()=>t("br",null,null,-1)),Bt=l(()=>t("br",null,null,-1)),Ut=l(()=>t("br",null,null,-1)),Lt=l(()=>t("br",null,null,-1)),Kt=l(()=>t("br",null,null,-1)),Ht=l(()=>t("br",null,null,-1)),Mt={style:{padding:"15px","line-height":"40px"}},At=l(()=>t("br",null,null,-1)),Pt=l(()=>t("br",null,null,-1)),Jt=l(()=>t("br",null,null,-1)),Gt=l(()=>t("br",null,null,-1)),zt=l(()=>t("br",null,null,-1)),Wt=l(()=>t("br",null,null,-1)),qt={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Qt={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},Xt=l(()=>t("br",null,null,-1)),Yt=l(()=>t("br",null,null,-1)),Zt=l(()=>t("br",null,null,-1)),te=l(()=>t("br",null,null,-1)),ee=l(()=>t("br",null,null,-1)),ne=l(()=>t("br",null,null,-1)),le={style:{padding:"15px","line-height":"40px"}},oe=l(()=>t("br",null,null,-1)),ie=l(()=>t("br",null,null,-1)),se=l(()=>t("br",null,null,-1)),ae=l(()=>t("br",null,null,-1)),re=l(()=>t("br",null,null,-1)),ue=l(()=>t("br",null,null,-1)),ce={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},de={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},he=l(()=>t("br",null,null,-1)),pe=l(()=>t("br",null,null,-1)),me=l(()=>t("br",null,null,-1)),be=l(()=>t("br",null,null,-1)),ve=l(()=>t("br",null,null,-1)),_e=l(()=>t("br",null,null,-1)),ge={style:{padding:"15px","line-height":"40px"}},ye=l(()=>t("br",null,null,-1)),Ce=l(()=>t("br",null,null,-1)),fe=l(()=>t("br",null,null,-1)),Se=l(()=>t("br",null,null,-1)),we=l(()=>t("br",null,null,-1)),je=l(()=>t("br",null,null,-1)),xe={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},ke={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},De=l(()=>t("br",null,null,-1)),Ne=l(()=>t("br",null,null,-1)),Ve=l(()=>t("br",null,null,-1)),Oe=l(()=>t("br",null,null,-1)),Re=l(()=>t("br",null,null,-1)),Ie=l(()=>t("br",null,null,-1)),$e={style:{padding:"15px","line-height":"40px"}},Te=l(()=>t("br",null,null,-1)),Fe=l(()=>t("br",null,null,-1)),Ee=l(()=>t("br",null,null,-1)),Be=l(()=>t("br",null,null,-1)),Ue=l(()=>t("br",null,null,-1)),Le=l(()=>t("br",null,null,-1));function Ke(e,i,S,w,r,m){const o=j("mark1"),f=j("mark0");return v(),g("main",U,[L,t("div",K,[t("div",H,[M,A,t("div",{class:"codebox",id:"codebox",style:p({display:r.display[0]})},[P,n("    public Reservation( "),c(t("input",{spellcheck:"false",maxlength:"6",style:{width:"85px"},"onUpdate:modelValue":i[0]||(i[0]=d=>e.eight=d)},null,512),[[h,e.eight]]),c(t("input",{spellcheck:"false",maxlength:"12",style:{width:"105px"},"onUpdate:modelValue":i[1]||(i[1]=d=>e.nine=d)},null,512),[[h,e.nine]]),n(", "),c(t("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":i[2]||(i[2]=d=>e.ten=d)},null,512),[[h,e.ten]]),c(t("input",{spellcheck:"false",maxlength:"5",style:{width:"70px"},"onUpdate:modelValue":i[3]||(i[3]=d=>e.eleven=d)},null,512),[[h,e.eleven]]),n(", "),c(t("input",{spellcheck:"false",maxlength:"7",style:{width:"90px"},"onUpdate:modelValue":i[4]||(i[4]=d=>e.twelve=d)},null,512),[[h,e.twelve]]),c(t("input",{spellcheck:"false",maxlength:"10",style:{width:"100px"},"onUpdate:modelValue":i[5]||(i[5]=d=>e.thirteen=d)},null,512),[[h,e.thirteen]]),n(",) "),J,n("  "),G,z,n(" } "),W,t("button",{class:"button-9",id:"btn4",onClick:i[6]||(i[6]=d=>m.validate_four())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[1]})},[q,n("        this.customerObj = "),c(t("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":i[7]||(i[7]=d=>e.fourteen=d)},null,512),[[h,e.fourteen]]),n(" Customer("),c(t("input",{spellcheck:"false",maxlength:"12",style:{width:"120px"},"onUpdate:modelValue":i[8]||(i[8]=d=>e.fifteen=d)},null,512),[[h,e.fifteen]]),n(", "),c(t("input",{spellcheck:"false",maxlength:"5",style:{width:"70px"},"onUpdate:modelValue":i[9]||(i[9]=d=>e.sixteen=d)},null,512),[[h,e.sixteen]]),n("); "),Q,n("       this.vehicleObj = vehicleObj; "),X,n("       reservationCount++; "),Y,n("       this.reservationID=reservationCount;        "),Z,n("   "),tt,n(" } "),et,nt,n(" } "),lt,t("button",{class:"button-9",id:"btn5",onClick:i[10]||(i[10]=d=>m.validate_five())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[2]})},[ot,it,n("   "),st,n(" } "),at,rt,n(" } "),ut,t("button",{class:"button-9",id:"btn6",onClick:i[11]||(i[11]=d=>m.validate_six())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[3]})},[ct,dt,n("   "),ht,n(" } "),pt,mt,n(" } "),bt,t("button",{class:"button-9",id:"btn7",onClick:i[12]||(i[12]=d=>m.validate_seven())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[4]})},[vt,n(),_t],4)]),t("div",gt,[t("div",{style:p([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[0]}])},[t("div",yt,[s(o,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",Ct,[s(o,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),ft,s(o,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),St,s(o,null,{default:a(()=>[n("-vehicleObj: vehicle")]),_:1}),wt,s(o,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),jt,s(o,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),xt,s(o,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),kt,s(o,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",Dt,[s(f,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),Nt,n(" +Reservation(String customerName, String email, Vehicle vehicleObj) "),Vt,n(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),Ot,n(" +setContractStatus(String contractStatus): void "),Rt,n(" +getContractStatus(): String "),It,n(" +releaseContract(): String "),$t,n(" +getReleaseDate(): Date ")])],4),t("div",{style:p([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[1]}])},[t("div",Tt,[s(o,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",Ft,[s(o,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),Et,s(o,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),Bt,s(o,null,{default:a(()=>[n("-vehicleObj: vehicle")]),_:1}),Ut,s(o,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),Lt,s(o,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),Kt,s(o,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),Ht,s(o,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",Mt,[s(f,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),At,n(" +Reservation(String customerName, String email, Vehicle vehicleObj) "),Pt,n(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),Jt,n(" +setContractStatus(String contractStatus): void "),Gt,n(" +getContractStatus(): String "),zt,n(" +releaseContract(): String "),Wt,n(" +getReleaseDate(): Date ")])],4),t("div",{style:p([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[2]}])},[t("div",qt,[s(o,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",Qt,[s(o,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),Xt,s(o,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),Yt,s(o,null,{default:a(()=>[n("-vehicleObj: vehicle")]),_:1}),Zt,s(o,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),te,s(o,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),ee,s(o,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),ne,s(o,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",le,[s(o,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),oe,s(f,null,{default:a(()=>[n("+Reservation(String customerName, String email, Vehicle vehicleObj)")]),_:1}),ie,n(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),se,n(" +setContractStatus(String contractStatus): void "),ae,n(" +getContractStatus(): String "),re,n(" +releaseContract(): String "),ue,n(" +getReleaseDate(): Date ")])],4),t("div",{style:p([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[3]}])},[t("div",ce,[s(o,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",de,[s(o,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),he,s(o,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),pe,s(o,null,{default:a(()=>[n("-vehicleObj: vehicle")]),_:1}),me,s(o,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),be,s(o,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),ve,s(o,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),_e,s(o,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",ge,[s(o,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),ye,s(o,null,{default:a(()=>[n("+Reservation(String customerName, String email, Vehicle vehicleObj)")]),_:1}),Ce,s(f,null,{default:a(()=>[n("+Reservation(String customerName, String email, long phone, Vehicle vehicleObj)")]),_:1}),fe,n(" +setContractStatus(String contractStatus): void "),Se,n(" +getContractStatus(): String "),we,n(" +releaseContract(): String "),je,n(" +getReleaseDate(): Date ")])],4),t("div",{style:p([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[4]}])},[t("div",xe,[s(o,null,{default:a(()=>[n("Class Reservation")]),_:1})]),t("div",ke,[s(o,null,{default:a(()=>[n("-reservationID: int ")]),_:1}),De,s(o,null,{default:a(()=>[n("-customerObj: Customer")]),_:1}),Ne,s(o,null,{default:a(()=>[n("-vehicleObj: vehicle")]),_:1}),Ve,s(o,null,{default:a(()=>[n("-contractStatus: String")]),_:1}),Oe,s(o,null,{default:a(()=>[n("+booking Date: Date")]),_:1}),Re,s(o,null,{default:a(()=>[n("-releaseDate: Date")]),_:1}),Ie,s(o,null,{default:a(()=>[n("-reservationCount: int")]),_:1})]),t("div",$e,[s(o,null,{default:a(()=>[n("+Reservation(String customerName, long phone, Vehicle vehicleObj)")]),_:1}),Te,s(o,null,{default:a(()=>[n("+Reservation(String customerName, String email, Vehicle vehicleObj)")]),_:1}),Fe,s(o,null,{default:a(()=>[n("+Reservation(String customerName, String email, long phone, Vehicle vehicleObj)")]),_:1}),Ee,s(o,null,{default:a(()=>[n("+setContractStatus(String contractStatus): void")]),_:1}),Be,s(o,null,{default:a(()=>[n("+getContractStatus(): String")]),_:1}),Ue,s(o,null,{default:a(()=>[n("+releaseContract(): String")]),_:1}),Le,s(o,null,{default:a(()=>[n("+getReleaseDate(): Date")]),_:1})])],4)])])])}const He=_(B,[["render",Ke],["__scopeId","data-v-5b35b997"]]);const Me={},Ae=e=>(y("data-v-e5b160b0"),e=e(),C(),e),Pe={class:"app"},Je=Ae(()=>t("div",{class:"codebox"},[t("pre",null,`
public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
	}
	
	public String updateKeyStatus()
	{
		this.keyStatus="not available";
		return this.keyStatus;
	}

	public String getKeyStatus() {
		return keyStatus;
	}

	public void setKeyStatus(String keyStatus) {
		this.keyStatus = keyStatus;
	}

	public int getRegNum() {
		return regNum;
	}
	
}

    `)],-1)),Ge=[Je];function ze(e,i){return v(),g("main",Pe,Ge)}const We=_(Me,[["render",ze],["__scopeId","data-v-e5b160b0"]]);const qe={},Qe=e=>(y("data-v-7678512a"),e=e(),C(),e),Xe={class:"app"},Ye=Qe(()=>t("div",{class:"box"},[t("h1",null,"Instructions"),t("ol",null,[t("li",{class:""},"To combine the different classes as shown in the diagram, we will be creating a Reservation System class."),t("li",{class:"arrow"},"Customer, Reservation and Vehicle classes have been implemented and are to be referred to."),t("li",{class:"arrow"},"Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar.")])],-1)),Ze=[Ye];function tn(e,i){return v(),g("main",Xe,Ze)}const en=_(qe,[["render",tn],["__scopeId","data-v-7678512a"]]);const nn={methods:{correct(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){if(this.one=="Vehicle"&&this.two=="5678"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[0]="none",this.display[1]="inherit"}else this.incorrect()},validate_two(){if(this.three=="Reservation"&&this.four=="rObjComposition"&&this.five=="vobj"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[1]="none",this.display[2]="inherit"}else this.incorrect()},validate_three(){if(this.six=="getCustomerObj"&&this.seven=="setCity"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[2]="none",this.display[3]="inherit"}else this.incorrect()},validate_four(){if(this.eight=="setBookingDate"&&this.nine=="new"&&this.ten=="Date()"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[3]="none",this.display[4]="inherit"}else this.incorrect()},validate_five(){if(this.eleven=="getVehicleObj"&&this.twelve=="updateKeyStatus"){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),this.display[4]="none",this.display[5]="inherit",this.$emit("reservationSystemComplete",!0)}else this.incorrect()}},data(){return{id:"container",class:"wrapper",button_value:"Next",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["inherit","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}},u=e=>(y("data-v-ee090a99"),e=e(),C(),e),ln={class:"app"},on=u(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),sn=u(()=>t("div",{class:"column",style:{position:"fixed",top:"30%",left:"60%"}},[t("div",{class:"column"},[t("div",{class:"codebox"},[t("h5",null,"Composition: "),t("p",null,"Write a demo class that creates a vehicle object with a registration number. Create a reservation object that does a reservation of the vehicle for current date by providing customerName, email and/or phone number. Later set the city as Coimbatore. Also release the vehicle.")])])],-1)),an={class:"row"},rn={class:"column"},un=u(()=>t("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Enter your code here .",-1)),cn=u(()=>t("p",{style:{padding:"25px","padding-top":"0px"}},"Follow instructions provided in the comments",-1)),dn=u(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {`,-1)),hn=u(()=>t("p",{id:"comment"},"//Create a Vehicle object with regNum 5678",-1)),pn=u(()=>t("br",null,null,-1)),mn=u(()=>t("br",null,null,-1)),bn=u(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

    public static void main(String[] args) {
      Vehicle vobj = new Vehicle(5678);
                `,-1)),vn=u(()=>t("br",null,null,-1)),_n=u(()=>t("p",{id:"comment"},'//Create a new Reservation object "rObjComposition" and pass vobj',-1)),gn=u(()=>t("br",null,null,-1)),yn=u(()=>t("br",null,null,-1)),Cn=u(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Vehicle vobj = new Vehicle(5678);
		Reservation rObjComposition = new Reservation("JKL", 999999999, vobj);
      
      `,-1)),fn=u(()=>t("br",null,null,-1)),Sn=u(()=>t("br",null,null,-1)),wn=u(()=>t("p",{id:"comment"},'//Get the customer object and set the City to "Coimbatore"',-1)),jn=u(()=>t("br",null,null,-1)),xn=u(()=>t("br",null,null,-1)),kn=u(()=>t("br",null,null,-1)),Dn=u(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Vehicle vobj = new Vehicle(5678);
		Reservation rObjComposition = new Reservation("JKL", 999999999, vobj);
		rObjComposition.getCustomerObj().setCity("Coimbatore");
      `,-1)),Nn=u(()=>t("br",null,null,-1)),Vn=u(()=>t("p",{id:"comment"},"//Call the method to set a booking date as new Date()",-1)),On=u(()=>t("br",null,null,-1)),Rn=u(()=>t("br",null,null,-1)),In=u(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Vehicle vobj = new Vehicle(5678);
		Reservation rObjComposition = new Reservation("JKL", 999999999, vobj);
		rObjComposition.getCustomerObj().setCity("Coimbatore");
		rObjComposition.setBookingDate(new Date());
      `,-1)),$n=u(()=>t("br",null,null,-1)),Tn=u(()=>t("br",null,null,-1)),Fn=u(()=>t("p",{id:"comment"},"//Get the Vehicle Object and call the method to update key status",-1)),En=u(()=>t("br",null,null,-1)),Bn=u(()=>t("br",null,null,-1)),Un=u(()=>t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Vehicle vobj = new Vehicle(5678);
		Reservation rObjComposition = new Reservation("JKL", 999999999, vobj);
		rObjComposition.getCustomerObj().setCity("Coimbatore");
		rObjComposition.setBookingDate(new Date());
		rObjComposition.getVehicleObj().updateKeyStatus();
		}
	}
      `,-1)),Ln=[Un];function Kn(e,i,S,w,r,m){return v(),g("main",ln,[on,sn,t("div",an,[t("div",rn,[un,cn,t("div",{class:"codebox",id:"codebox",style:p({display:r.display[0]})},[dn,n("  "),c(t("input",{spellcheck:"false",maxlength:"7",style:{width:"80px"},"onUpdate:modelValue":i[0]||(i[0]=o=>e.one=o)},null,512),[[h,e.one]]),n(" vobj = new Vehicle( "),c(t("input",{spellcheck:"false",id:"two",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":i[1]||(i[1]=o=>e.two=o)},null,512),[[h,e.two]]),n(") "),hn,pn,n(" } "),mn,t("button",{class:"button-9",id:"btn1",onClick:i[2]||(i[2]=o=>m.validate_one())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[1]})},[bn,vn,n("    "),c(t("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":i[3]||(i[3]=o=>e.three=o)},null,512),[[h,e.three]]),c(t("input",{spellcheck:"false",maxlength:"15",style:{width:"130px"},"onUpdate:modelValue":i[4]||(i[4]=o=>e.four=o)},null,512),[[h,e.four]]),n(' = new Reservation("JKL", 999999999, '),c(t("input",{spellcheck:"false",maxlength:"4",style:{width:"50px"},"onUpdate:modelValue":i[5]||(i[5]=o=>e.five=o)},null,512),[[h,e.five]]),n("); "),_n,gn,n(" } "),yn,t("button",{class:"button-9",id:"btn2",onClick:i[6]||(i[6]=o=>m.validate_two())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[2]})},[Cn,fn,n("   rObjComposition. "),c(t("input",{spellcheck:"false",maxlength:"14",style:{width:"125px"},"onUpdate:modelValue":i[7]||(i[7]=o=>e.six=o)},null,512),[[h,e.six]]),n("(). "),c(t("input",{spellcheck:"false",maxlength:"7",style:{width:"70px"},"onUpdate:modelValue":i[8]||(i[8]=o=>e.seven=o)},null,512),[[h,e.seven]]),n('("Coimbatore"); '),Sn,n("  "),wn,jn,n(" } "),xn,n(" } "),kn,t("button",{class:"button-9",id:"btn3",onClick:i[9]||(i[9]=o=>m.validate_three())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[3]})},[Dn,n("     rObjComposition. "),c(t("input",{spellcheck:"false",maxlength:"14",style:{width:"130px"},"onUpdate:modelValue":i[10]||(i[10]=o=>e.eight=o)},null,512),[[h,e.eight]]),n("( "),c(t("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":i[11]||(i[11]=o=>e.nine=o)},null,512),[[h,e.nine]]),c(t("input",{spellcheck:"false",maxlength:"6",style:{width:"65px"},"onUpdate:modelValue":i[12]||(i[12]=o=>e.ten=o)},null,512),[[h,e.ten]]),n("); "),Nn,n(" } "),Vn,On,n(" } "),Rn,t("button",{class:"button-9",id:"btn4",onClick:i[13]||(i[13]=o=>m.validate_four())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[4]})},[In,n("    rObjComposition. "),c(t("input",{spellcheck:"false",maxlength:"13",style:{width:"120px"},"onUpdate:modelValue":i[14]||(i[14]=o=>e.eleven=o)},null,512),[[h,e.eleven]]),n("(). "),c(t("input",{spellcheck:"false",maxlength:"15",style:{width:"140px"},"onUpdate:modelValue":i[15]||(i[15]=o=>e.twelve=o)},null,512),[[h,e.twelve]]),n("(); "),$n,n("   "),Tn,n(" } "),Fn,En,n(" } "),Bn,t("button",{class:"button-9",id:"btn5",onClick:i[16]||(i[16]=o=>m.validate_five())},b(r.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:r.display[5]})},Ln,4)])])])}const Hn=_(nn,[["render",Kn],["__scopeId","data-v-ee090a99"]]),Mn="/assets/compositionans-3472726d.png";const An={},Pn=e=>(y("data-v-91edb50c"),e=e(),C(),e),Jn={class:"app"},Gn=Pn(()=>t("div",{class:"codebox",style:{"align-items":"center","justify-content":"center",display:"flex"}},[t("img",{src:Mn})],-1)),zn=[Gn];function Wn(e,i){return v(),g("main",Jn,zn)}const qn=_(An,[["render",Wn],["__scopeId","data-v-91edb50c"]]);const Qn={components:{CustomerView2:E,ReservationView2:He,VehicleView2:We,InstructionsView2:en,ReservationSystemView2:Hn,ClassView2:qn},data(){return{componentSelect:"InstructionsView2",reservation_complete:!1,reservation_system_complete:!1}},methods:{reservationCallback(e){console.log("Event reservation triggered",e),this.reservation_complete=!0},reservationSystemCallBack(e){console.log("Event reservation system triggered",e),this.reservation_system_complete=!0}}},Xn={class:"app"},Yn={id:"buttons",class:"relative"};function Zn(e,i,S,w,r,m){return v(),g(V,null,[t("main",Xn,[t("button",{onClick:i[0]||(i[0]=o=>r.componentSelect="InstructionsView2")},"Instructions"),t("button",{onClick:i[1]||(i[1]=o=>r.componentSelect="CustomerView2")},"Customer Class"),t("button",{onClick:i[2]||(i[2]=o=>r.componentSelect="ReservationView2")},"Reservation Class"),t("button",{onClick:i[3]||(i[3]=o=>r.componentSelect="VehicleView2")},"Vehicle Class"),t("button",{onClick:i[4]||(i[4]=o=>r.componentSelect="ReservationSystemView2")},"Reservation System Class"),t("button",{onClick:i[5]||(i[5]=o=>r.componentSelect="ClassView2")},"Class diagram"),(v(),x(D,null,[(v(),x(k(r.componentSelect),{onReservationComplete:m.reservationCallback,onReservationSystemComplete:m.reservationSystemCallBack},null,40,["onReservationComplete","onReservationSystemComplete"]))],1024))]),c(t("footer",null,[t("div",Yn,[t("button",{class:"navitem",onClick:i[6]||(i[6]=o=>e.$router.push("/screen-four"))},"Next")])],512),[[N,r.reservation_complete&&r.reservation_system_complete]])],64)}const el=_(Qn,[["render",Zn]]);export{el as default};
