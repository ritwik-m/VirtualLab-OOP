import{_ as o,o as n,c as s,p as c,a,b as t}from"./index-1e9f2017.js";const i={},r=e=>(c("data-v-302d8922"),e=e(),a(),e),l=r(()=>t("div",{class:"flex"},[t("div",{class:"codebox"},[t("pre",null,`import java.util.Scanner;
import java.util.Date;

public class TestDriver {

	public static void main(String[] args) {
		Customer[] cobj= new Customer[3];
		cobj[0]=new Customer("ABC", "abc@gmail.com");
		cobj[1]=new Customer("DEF", 8654678976L);
		cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		Vehicle vobj=new Vehicle(1234);
		Reservation robj= new Reservation(cobj[0],vobj);
		robj.setBookingDate(new Date());
		robj.getVehicleObj().updateKeyStatus();
		}
	}
                `)]),t("div",{class:"outbox"},[t("p",null,"Process finished with exit code 0")])],-1)),d=[l];function u(e,_){return n(),s("main",null,d)}const b=o(i,[["render",u],["__scopeId","data-v-302d8922"]]);export{b as default};
