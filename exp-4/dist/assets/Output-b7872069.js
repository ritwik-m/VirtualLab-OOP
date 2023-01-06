import{_ as d,o as c,c as p,a as s,n,F as y,p as _,e as r}from"./index-388cddd6.js";const u="/assets/image1-fe97e4bd.png",m="/assets/image2-48fa74c4.png",b="/assets/image3-ecfabae5.png",v="/assets/image4-ec05d7bb.png",x="/assets/image5-634cc085.png",h="/assets/image6-484891ce.png",g="/assets/image7-8c9b2abe.png";const f={methods:{validate_one(){this.display[0]="none",this.display[1]="block"},validate_two(){this.display[1]="none",this.display[2]="block"},validate_three(){this.display[2]="none",this.display[3]="block"},validate_four(){this.display[3]="none",this.display[4]="block"},validate_five(){this.display[4]="none",this.display[5]="block"},validate_six(){this.display[5]="none",this.display[6]="block"}},data(){return{id:"container",class:"wrapper",button_text:"Incorrect. Try again.",button_text_right:"Next",correct:!1,valid:[!1,!1],display:["block","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}},o=a=>(_("data-v-ccb83a3e"),a=a(),r(),a),C={class:"row"},k=o(()=>s("div",{class:"column"},[s("div",{class:"codebox"},[s("pre",null,`
import java.util.Scanner;

public class TestDriver {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Customer[] cobj= new Customer[3];
		cobj[0]=new Customer("ABC", "abc@gmail.com");
		cobj[1]=new Customer("DEF", 8654678976L);
		cobj[2]=new Customer("GHI", "ghi@gmail.com", 1234567890L);
		cobj[0].setCity("Coimbatore");
		cobj[1].setCity("Coimbatore");
		cobj[2].setCity("Chennai");
		}
	}

    `)])],-1)),w={class:"column"},j=o(()=>s("img",{style:{"max-width":"650px"},src:u},null,-1)),N=[j],I=o(()=>s("img",{style:{"max-width":"650px"},src:m},null,-1)),S=[I],B=o(()=>s("img",{style:{"max-width":"650px"},src:b},null,-1)),O=[B],D=o(()=>s("img",{style:{"max-width":"650px"},src:v},null,-1)),F=[D],T=o(()=>s("img",{style:{"max-width":"650px"},src:x},null,-1)),A=[T],E=o(()=>s("img",{style:{"max-width":"650px"},src:h},null,-1)),L=[E],z=o(()=>s("img",{style:{"max-width":"650px"},src:g},null,-1)),G=[z],H={style:{display:"flex","justify-content":"center","align-items":"center"}};function V(a,t,q,J,e,i){return c(),p(y,null,[s("main",null,[s("div",C,[k,s("div",w,[s("div",{class:"codebox",style:n({display:e.display[0]})},N,4),s("div",{class:"codebox",style:n({display:e.display[1]})},S,4),s("div",{class:"codebox",style:n({display:e.display[2]})},O,4),s("div",{class:"codebox",style:n({display:e.display[3]})},F,4),s("div",{class:"codebox",style:n({display:e.display[4]})},A,4),s("div",{class:"codebox",style:n({display:e.display[5]})},L,4),s("div",{class:"codebox",style:n({display:e.display[6]})},G,4)])])]),s("footer",H,[s("button",{class:"button-9",onClick:t[0]||(t[0]=l=>i.validate_one()),style:n({display:e.display[0]})},"Next",4),s("button",{class:"button-9",onClick:t[1]||(t[1]=l=>i.validate_two()),style:n({display:e.display[1]})},"Next",4),s("button",{class:"button-9",onClick:t[2]||(t[2]=l=>i.validate_three()),style:n({display:e.display[2]})},"Next",4),s("button",{class:"button-9",onClick:t[3]||(t[3]=l=>i.validate_four()),style:n({display:e.display[3]})},"Next",4),s("button",{class:"button-9",onClick:t[4]||(t[4]=l=>i.validate_five()),style:n({display:e.display[4]})},"Next",4),s("button",{class:"button-9",onClick:t[5]||(t[5]=l=>i.validate_six()),style:n({display:e.display[5]})},"Next",4),s("button",{class:"button-9",onClick:t[6]||(t[6]=l=>a.$router.push("/completion")),style:n({display:e.display[6]})},"Next",4)])],64)}const M=d(f,[["render",V],["__scopeId","data-v-ccb83a3e"]]);export{M as default};
