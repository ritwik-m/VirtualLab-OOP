import{_ as v,r as h,o as x,c as f,a as e,n as c,b as o,w as i,d as s,e as u,v as p,t as m,f as g,p as y,g as S}from"./index-7c554b21.js";const N={methods:{correct(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},incorrect(){var t=document.getElementById("snackbar");t.innerHTML="Inorrect. Try again",t.style.backgroundColor="red",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){if(this.one=="Customer"&&this.two=="extends"){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3),this.display[0]="none",this.display[1]="inherit"}else this.incorrect()},validate_two(){if(this.three=="super(name)"){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3),this.display[1]="none",this.display[2]="inherit"}else this.incorrect()}},data(){return{id:"container",class:"wrapper",button_value:"Evaluate",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["inherit","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}},n=t=>(y("data-v-9e3cb83d"),t=t(),S(),t),k=n(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),w={class:"row",style:{"font-family":"Montserrat"}},C={class:"column"},F=n(()=>e("h1",{style:{"padding-left":"25px","padding-bottom":"0px"}},"Fill in the Java code for the following updated Customer class.",-1)),E=n(()=>e("p",{style:{"padding-left":"25px"}},"You only have to fill in the spaces provided.",-1)),T={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},P=g('<div style="height:fit-content;border-bottom:1px solid black;padding:15px;line-height:50px;" data-v-9e3cb83d> - address: String <br data-v-9e3cb83d> - phoneNumber: String <br data-v-9e3cb83d> - email: String </div><div style="padding:15px;line-height:50px;" data-v-9e3cb83d> + getAddress(): String <br data-v-9e3cb83d> + setAddress(): void <br data-v-9e3cb83d> + getPhoneNumber(): String <br data-v-9e3cb83d> + setPhone(): void <br data-v-9e3cb83d> + getEmail(): String <br data-v-9e3cb83d> + setEmail(): void <br data-v-9e3cb83d> + visitOffice(): void </div>',2),A={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},I=g('<div style="height:150px;border-bottom:1px solid black;padding:15px;line-height:40px;" data-v-9e3cb83d> - address: String <br data-v-9e3cb83d> - phoneNumber: String <br data-v-9e3cb83d> - email: String </div><div style="padding:15px;line-height:40px;" data-v-9e3cb83d> + getAddress(): String <br data-v-9e3cb83d> + setAddress(): void <br data-v-9e3cb83d> + getPhoneNumber(): String <br data-v-9e3cb83d> + setPhone(): void <br data-v-9e3cb83d> + getEmail(): String <br data-v-9e3cb83d> + setEmail(): void <br data-v-9e3cb83d> + visitOffice(): void </div>',2),D={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},B={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"60px"}},V=n(()=>e("br",null,null,-1)),M=n(()=>e("br",null,null,-1)),H={style:{padding:"15px","line-height":"60px"}},L=n(()=>e("br",null,null,-1)),O=n(()=>e("br",null,null,-1)),U=n(()=>e("br",null,null,-1)),z=n(()=>e("br",null,null,-1)),J=n(()=>e("br",null,null,-1)),Y=n(()=>e("br",null,null,-1)),j={class:"column"},q=n(()=>e("h1",{style:{"padding-left":"0px"}},"Enter your code here .",-1)),G=n(()=>e("p",{style:{"padding-bottom":"25px"}},"Follow instructions provided in the comments",-1)),K=n(()=>e("p",{id:"comment"},' //Create a class "Customer" that inherits "Person" class',-1)),Q=n(()=>e("br",null,null,-1)),R=n(()=>e("br",null,null,-1)),W=n(()=>e("pre",null,`public class Customer extends Person{

    private String address;
    private String phoneNumber;
    private String email;`,-1)),X=n(()=>e("br",null,null,-1)),Z=n(()=>e("br",null,null,-1)),$=n(()=>e("br",null,null,-1)),ee=n(()=>e("br",null,null,-1)),te=n(()=>e("br",null,null,-1)),ne=n(()=>e("br",null,null,-1)),se=n(()=>e("p",{id:"comment"},` //Using the correct keyword, obtain the value of parent class' constructor for "name" attribute`,-1)),oe=n(()=>e("br",null,null,-1)),ie=n(()=>e("br",null,null,-1)),le=n(()=>e("pre",null,`public class Customer extends Person{

      private String address;
      private String phoneNumber;
      private String email;

      public Customer(String name, String address, String phoneNumber, String email){
          super(name);
          this.address = address;
          this.phoneNumber = phoneNumber;
          this.email = email;
      }

      public String getAddress(){
          return address;
      }

      public void setAddress(String address){
          this.address = address;
      }

      public String getPhoneNumber(){
          return phoneNumber;
      }

      public void setPhoneNumber(String phoneNumber){
          this.phoneNumber = phoneNumber;
      }

      public String getEmail(){
          return email;
      }

      public void setEmail(String email){
          this.email = email;
      }

      public void visitOffice(){
          System.out.println("Customer " + getName() + " is visiting the office.");
      }
}`,-1));function de(t,l,re,ae,r,b){const _=h("mark0"),d=h("mark1");return x(),f("main",null,[k,e("div",w,[e("div",C,[F,E,e("div",{style:c([{"margin-left":"15%",height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[0]}])},[e("div",T,[o(_,null,{default:i(()=>[s("Class Customer")]),_:1})]),P],4),e("div",{style:c([{"margin-left":"15%",height:"500px",width:"250px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[1]}])},[e("div",A,[o(d,null,{default:i(()=>[s("Class Customer")]),_:1})]),I],4),e("div",{style:c([{"margin-left":"15%",height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:r.display[2]}])},[e("div",D,[o(d,null,{default:i(()=>[s("Class Customer")]),_:1})]),e("div",B,[o(d,null,{default:i(()=>[s("- address: String")]),_:1}),V,o(d,null,{default:i(()=>[s("- phoneNumber: String")]),_:1}),M,o(d,null,{default:i(()=>[s("- email: String")]),_:1})]),e("div",H,[o(d,null,{default:i(()=>[s("+ getAddress(): String")]),_:1}),L,o(d,null,{default:i(()=>[s("+ setAddress(): void")]),_:1}),O,o(d,null,{default:i(()=>[s("+ getPhoneNumber(): String")]),_:1}),U,o(d,null,{default:i(()=>[s("+ setPhone(): void")]),_:1}),z,o(d,null,{default:i(()=>[s("+ getEmail(): String")]),_:1}),J,o(d,null,{default:i(()=>[s("+ setEmail(): void")]),_:1}),Y,o(d,null,{default:i(()=>[s("+ visitOffice(): void")]),_:1})])],4)]),e("div",j,[q,G,e("div",{class:"codebox",id:"codebox",style:c({display:r.display[0]})},[s(" public class "),u(e("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":l[0]||(l[0]=a=>t.one=a)},null,512),[[p,t.one]]),u(e("input",{spellcheck:"false",id:"two",maxlength:"7",style:{width:"85px"},"onUpdate:modelValue":l[1]||(l[1]=a=>t.two=a)},null,512),[[p,t.two]]),s(" Person{ "),K,Q,s(" } "),R,e("button",{class:"button-9",id:"btn1",onClick:l[2]||(l[2]=a=>b.validate_one())},m(r.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:c({display:r.display[1]})},[W,X,s(" public Customer(String name, String address, String phoneNumber, String email){ "),Z,s("   "),u(e("input",{spellcheck:"false",id:"three",maxlength:"11",style:{width:"110px"},"onUpdate:modelValue":l[3]||(l[3]=a=>t.three=a)},null,512),[[p,t.three]]),s("; "),$,s("  this.address = address; "),ee,s("  this.phoneNumber = phoneNumber; "),te,s("  this.email = email; "),ne,s("  };"),se,oe,s("}"),ie,e("button",{class:"button-9",id:"btn2",onClick:l[4]||(l[4]=a=>b.validate_two())},m(r.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:c({display:r.display[2]})},[le,e("button",{class:"button-9",onClick:l[5]||(l[5]=a=>t.$router.push("/screen-three"))}," Continue ")],4)])])])}const ue=v(N,[["render",de],["__scopeId","data-v-9e3cb83d"]]);export{ue as default};
