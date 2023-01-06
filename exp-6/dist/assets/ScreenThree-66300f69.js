import{_,r as g,o as S,c as f,a as e,n as c,b as l,w as s,d as t,e as u,v as p,t as b,f as v,p as y,g as x}from"./index-7c554b21.js";const k={methods:{incorrect(){var i=document.getElementById("snackbar");i.innerHTML="Inorrect. Try again",i.style.backgroundColor="red",i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3)},validate_one(){if(this.one=="Clerk"&&this.two=="extends"){var i=document.getElementById("snackbar");i.innerHTML="Correct",i.style.backgroundColor="green",i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3),this.display[0]="none",this.display[1]="inherit"}else this.incorrect()},validate_two(){if(this.three=="super(name)"){var i=document.getElementById("snackbar");i.innerHTML="Correct",i.style.backgroundColor="green",i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3),this.display[1]="none",this.display[2]="inherit"}else this.incorrect()},validate_three(){if(this.four==="void"&&this.five==="requestVehicle"&&this.six==="System"&&this.seven==="out"&&this.eight==="println"){var i=document.getElementById("snackbar");i.innerHTML="Correct",i.style.backgroundColor="green",i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3),this.display[2]="none",this.display[3]="inherit"}else this.incorrect();console.log("validate_three")},validate_four(){if(this.nine==="void"&&this.ten==="signContract"&&this.eleven==="System"&&this.twelve==="out"&&this.thirteen==="println"){var i=document.getElementById("snackbar");i.innerHTML="Correct",i.style.backgroundColor="green",i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3),this.display[3]="none",this.display[4]="inherit"}else this.incorrect();console.log("validate_four")}},data(){return{id:"container",class:"wrapper",button_value:"Evaluate",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["inherit","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}},n=i=>(y("data-v-c1000c34"),i=i(),x(),i),N=n(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),w={class:"row",style:{"font-family":"Montserrat"}},C={class:"column"},P=n(()=>e("h1",{style:{"padding-left":"25px"}},"Fill in the Java code for the following Clerk class.",-1)),E=n(()=>e("p",{style:{"padding-left":"25px","padding-bottom":"25px"}},"You only have to fill in the spaces provided.",-1)),F={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},V=v('<div style="height:fit-content;border-bottom:1px solid black;padding:15px;line-height:40px;" data-v-c1000c34> - address: String <br data-v-c1000c34> - phoneNumber: String <br data-v-c1000c34> - email: String <br data-v-c1000c34> - department: String <br data-v-c1000c34> - position: String </div><div style="padding:15px;line-height:60px;" data-v-c1000c34> + getAddress(): String <br data-v-c1000c34> + setAddress(): void <br data-v-c1000c34> + getPhoneNumber(): String <br data-v-c1000c34> + setPhoneNumber(): void <br data-v-c1000c34> + getEmail(): String <br data-v-c1000c34> + setEmail(): void <br data-v-c1000c34> + getDepartment(): String <br data-v-c1000c34> + setDepartment(): void <br data-v-c1000c34> + getPosition(): String <br data-v-c1000c34> + setPosition(): void <br data-v-c1000c34> + requestVehicle(): void <br data-v-c1000c34> + signContract(): void </div>',2),D={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},A=v('<div style="height:fit-content;border-bottom:1px solid black;padding:15px;line-height:60px;" data-v-c1000c34> - address: String <br data-v-c1000c34> - phoneNumber: String <br data-v-c1000c34> - email: String <br data-v-c1000c34> - department: String <br data-v-c1000c34> - position: String </div><div style="padding:15px;line-height:60px;" data-v-c1000c34> + getAddress(): String <br data-v-c1000c34> + setAddress(): void <br data-v-c1000c34> + getPhoneNumber(): String <br data-v-c1000c34> + setPhoneNumber(): void <br data-v-c1000c34> + getEmail(): String <br data-v-c1000c34> + setEmail(): void <br data-v-c1000c34> + getDepartment(): String <br data-v-c1000c34> + setDepartment(): void <br data-v-c1000c34> + getPosition(): String <br data-v-c1000c34> + setPosition(): void <br data-v-c1000c34> + requestVehicle(): void <br data-v-c1000c34> + signContract(): void </div>',2),T={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},U={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"60px"}},q=n(()=>e("br",null,null,-1)),I=n(()=>e("br",null,null,-1)),B=n(()=>e("br",null,null,-1)),M=n(()=>e("br",null,null,-1)),H={style:{padding:"15px","line-height":"60px"}},L=n(()=>e("br",null,null,-1)),R=n(()=>e("br",null,null,-1)),z=n(()=>e("br",null,null,-1)),J=n(()=>e("br",null,null,-1)),Y=n(()=>e("br",null,null,-1)),j=n(()=>e("br",null,null,-1)),G=n(()=>e("br",null,null,-1)),K=n(()=>e("br",null,null,-1)),O=n(()=>e("br",null,null,-1)),Q=n(()=>e("br",null,null,-1)),W=n(()=>e("br",null,null,-1)),X=n(()=>e("div",null,"+ signContract(): void",-1)),Z={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},$={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"60px"}},ee=n(()=>e("br",null,null,-1)),te=n(()=>e("br",null,null,-1)),ne=n(()=>e("br",null,null,-1)),ie=n(()=>e("br",null,null,-1)),le={style:{padding:"15px","line-height":"60px"}},se=n(()=>e("br",null,null,-1)),oe=n(()=>e("br",null,null,-1)),re=n(()=>e("br",null,null,-1)),de=n(()=>e("br",null,null,-1)),ae=n(()=>e("br",null,null,-1)),ue=n(()=>e("br",null,null,-1)),pe=n(()=>e("br",null,null,-1)),ce=n(()=>e("br",null,null,-1)),he=n(()=>e("br",null,null,-1)),be=n(()=>e("br",null,null,-1)),me=n(()=>e("br",null,null,-1)),ge={class:"column"},ve=n(()=>e("h1",null,"Enter your code here .",-1)),_e=n(()=>e("p",{style:{"padding-bottom":"25px"}},"Follow instructions provided in the comments",-1)),Se=n(()=>e("p",{id:"comment"},' //Create a class "Clerk" that inherits "Person" class',-1)),fe=n(()=>e("br",null,null,-1)),ye=n(()=>e("br",null,null,-1)),xe=n(()=>e("pre",null,`public class Clerk extends Person{

    private String address;
    private String phoneNumber;
    private String email;
    private String department;
    private String position;`,-1)),ke=n(()=>e("br",null,null,-1)),Ne=n(()=>e("br",null,null,-1)),we=n(()=>e("br",null,null,-1)),Ce=n(()=>e("br",null,null,-1)),Pe=n(()=>e("br",null,null,-1)),Ee=n(()=>e("br",null,null,-1)),Fe=n(()=>e("br",null,null,-1)),Ve=n(()=>e("br",null,null,-1)),De=n(()=>e("p",{id:"comment"},` //Using the correct keyword, obtain the value of parent class' constructor for the "name" attribute`,-1)),Ae=n(()=>e("br",null,null,-1)),Te=n(()=>e("br",null,null,-1)),Ue=n(()=>e("pre",null,`public class Clerk extends Person{

    private String address;
    private String phoneNumber;
    private String email;
    private String department;
    private String position;

    public Customer(String name, String address, String phoneNumber, String email){
        super(name);
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.department = department;
        this.position = position;
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

    public String getDepartment() {
            return department;
    }

    public void setDepartment(String department) {
            this.department = department;
    }

    public String getPosition() {
            return position;
    }

    public void setPosition(String position) {
            this.position = position;
    }
`,-1)),qe=n(()=>e("p",{id:"comment"}," //Create a function 'requestVehicle()' that allows the clerk to request a vehicle and prints a log message ",-1)),Ie=n(()=>e("br",null,null,-1)),Be=n(()=>e("br",null,null,-1)),Me=n(()=>e("br",null,null,-1)),He=n(()=>e("pre",null,`public class Clerk extends Person{

    private String address;
    private String phoneNumber;
    private String email;
    private String department;
    private String position;

    public Customer(String name, String address, String phoneNumber, String email){
        super(name);
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.department = department;
        this.position = position;
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

    public String getDepartment() {
            return department;
    }

    public void setDepartment(String department) {
            this.department = department;
    }

    public String getPosition() {
            return position;
    }

    public void setPosition(String position) {
            this.position = position;
    }

    public void requestVehicle(){
        System.out.println("Requesting a vehicle");
    }
`,-1)),Le=n(()=>e("p",{id:"comment"}," //Create a function 'signContract()' that allows the clerk to sign a contract and prints a log message ",-1)),Re=n(()=>e("br",null,null,-1)),ze=n(()=>e("br",null,null,-1)),Je=n(()=>e("br",null,null,-1)),Ye=n(()=>e("pre",null,`public class Clerk extends Person{

  private String address;
  private String phoneNumber;
  private String email;
  private String department;
  private String position;

  public Customer(String name, String address, String phoneNumber, String email){
      super(name);
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.department = department;
      this.position = position;
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

  public String getDepartment() {
          return department;
  }

  public void setDepartment(String department) {
          this.department = department;
  }

  public String getPosition() {
          return position;
  }

  public void setPosition(String position) {
          this.position = position;
  }

  public void requestVehicle(){
      System.out.println("Requesting a vehicle");
  }

  public void signContract(){
      System.out.println("Sign contract");
  }
}            
`,-1));function je(i,o,Ge,Ke,a,h){const m=g("mark0"),r=g("mark1");return S(),f("main",null,[N,e("div",w,[e("div",C,[P,E,e("div",{style:c([{"margin-left":"15%",height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:a.display[0]}])},[e("div",F,[l(m,null,{default:s(()=>[t("Class Clerk")]),_:1})]),V],4),e("div",{style:c([{"margin-left":"15%",height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:a.display[1]}])},[e("div",D,[l(r,null,{default:s(()=>[t("Class Clerk")]),_:1})]),A],4),e("div",{style:c([{"margin-left":"15%",height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:a.display[2]}])},[e("div",T,[l(r,null,{default:s(()=>[t("Class Clerk")]),_:1})]),e("div",U,[l(r,null,{default:s(()=>[t("- address: String")]),_:1}),q,l(r,null,{default:s(()=>[t("- phoneNumber: String")]),_:1}),I,l(r,null,{default:s(()=>[t("- email: String")]),_:1}),B,l(r,null,{default:s(()=>[t("- department: String")]),_:1}),M,l(r,null,{default:s(()=>[t("- position: String")]),_:1})]),e("div",H,[l(r,null,{default:s(()=>[t("+ getAddress(): String")]),_:1}),L,l(r,null,{default:s(()=>[t("+ setAddress(): void")]),_:1}),R,l(r,null,{default:s(()=>[t("+ getPhoneNumber(): String")]),_:1}),z,l(r,null,{default:s(()=>[t("+ setPhoneNumber(): void")]),_:1}),J,l(r,null,{default:s(()=>[t("+ getEmail(): String")]),_:1}),Y,l(r,null,{default:s(()=>[t("+ setEmail(): void")]),_:1}),j,l(r,null,{default:s(()=>[t("+ getDepartment(): String")]),_:1}),G,l(r,null,{default:s(()=>[t("+ setDepartment(): void")]),_:1}),K,l(r,null,{default:s(()=>[t("+ getPosition(): void")]),_:1}),O,l(r,null,{default:s(()=>[t("+ setPosition(): void")]),_:1}),Q,l(m,null,{default:s(()=>[t("+ requestVehicle(): void")]),_:1}),W,X])],4),e("div",{style:c([{"margin-left":"15%",height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:a.display[3]}])},[e("div",Z,[l(r,null,{default:s(()=>[t("Class Clerk")]),_:1})]),e("div",$,[l(r,null,{default:s(()=>[t("- address: String")]),_:1}),ee,l(r,null,{default:s(()=>[t("- phoneNumber: String")]),_:1}),te,l(r,null,{default:s(()=>[t("- email: String")]),_:1}),ne,l(r,null,{default:s(()=>[t("- department: String")]),_:1}),ie,l(r,null,{default:s(()=>[t("- position: String")]),_:1})]),e("div",le,[l(r,null,{default:s(()=>[t("+ getAddress(): String")]),_:1}),se,l(r,null,{default:s(()=>[t("+ setAddress(): void")]),_:1}),oe,l(r,null,{default:s(()=>[t("+ getPhoneNumber(): String")]),_:1}),re,l(r,null,{default:s(()=>[t("+ setPhoneNumber(): void")]),_:1}),de,l(r,null,{default:s(()=>[t("+ getEmail(): String")]),_:1}),ae,l(r,null,{default:s(()=>[t("+ setEmail(): void")]),_:1}),ue,l(r,null,{default:s(()=>[t("+ getDepartment(): String")]),_:1}),pe,l(r,null,{default:s(()=>[t("+ setDepartment(): void")]),_:1}),ce,l(r,null,{default:s(()=>[t("+ getPosition(): void")]),_:1}),he,l(r,null,{default:s(()=>[t("+ setPosition(): void")]),_:1}),be,l(r,null,{default:s(()=>[t("+ requestVehicle(): void")]),_:1}),me,l(m,null,{default:s(()=>[t("+ signContract(): void")]),_:1})])],4)]),e("div",ge,[ve,_e,e("div",{class:"codebox",id:"codebox",style:c({display:a.display[0]})},[t(" public class "),u(e("input",{spellcheck:"false",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":o[0]||(o[0]=d=>i.one=d)},null,512),[[p,i.one]]),u(e("input",{spellcheck:"false",id:"two",maxlength:"7",style:{width:"85px"},"onUpdate:modelValue":o[1]||(o[1]=d=>i.two=d)},null,512),[[p,i.two]]),t(" Person{ "),Se,fe,t(" } "),ye,e("button",{class:"button-9",id:"btn1",onClick:o[2]||(o[2]=d=>h.validate_one())},b(a.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:c({display:a.display[1]})},[xe,ke,t(" public Clerk(String name, String address, String phoneNumber, String email, String department, String position){ "),Ne,t("   "),u(e("input",{spellcheck:"false",id:"three",maxlength:"11",style:{width:"110px"},"onUpdate:modelValue":o[3]||(o[3]=d=>i.three=d)},null,512),[[p,i.three]]),t("; "),we,t("  this.address = address; "),Ce,t("  this.phoneNumber = phoneNumber; "),Pe,t("  this.email = email; "),Ee,t("  this.department = department; "),Fe,t("  this.position = position; "),Ve,t("  };"),De,Ae,t("}"),Te,e("button",{class:"button-9",id:"btn2",onClick:o[4]||(o[4]=d=>h.validate_two())},b(a.button_value),1)],4),e("div",{class:"codebox",id:"codebox",style:c({display:a.display[2]})},[Ue,e("div",{id:"codebox",style:c({display:a.display[2]})},[t(" public "),u(e("input",{spellcheck:"false",id:"four",maxlength:"4",style:{width:"90px"},"onUpdate:modelValue":o[5]||(o[5]=d=>i.four=d)},null,512),[[p,i.four]]),u(e("input",{spellcheck:"false",id:"five",maxlength:"14",style:{width:"85px"},"onUpdate:modelValue":o[6]||(o[6]=d=>i.five=d)},null,512),[[p,i.five]]),t(" (){ "),qe,Ie,u(e("input",{spellcheck:"false",id:"six",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":o[7]||(o[7]=d=>i.six=d)},null,512),[[p,i.six]]),t("."),u(e("input",{spellcheck:"false",id:"seven",style:{width:"70px"},maxlength:"3","onUpdate:modelValue":o[8]||(o[8]=d=>i.seven=d)},null,512),[[p,i.seven]]),t("."),u(e("input",{spellcheck:"false",id:"eight",maxlength:"7",style:{width:"80px"},"onUpdate:modelValue":o[9]||(o[9]=d=>i.eight=d)},null,512),[[p,i.eight]]),t('("Requesting a vehicle"); '),Be,t(" } "),Me,e("button",{class:"button-9",id:"btn3",onClick:o[10]||(o[10]=d=>h.validate_three())},b(a.button_value),1)],4)],4),e("div",{class:"codebox",id:"codebox",style:c({display:a.display[3]})},[He,e("div",{id:"codebox",style:c({display:a.display[3]})},[t(" public "),u(e("input",{spellcheck:"false",id:"nine",maxlength:"4",style:{width:"90px"},"onUpdate:modelValue":o[11]||(o[11]=d=>i.nine=d)},null,512),[[p,i.nine]]),u(e("input",{spellcheck:"false",id:"ten",maxlength:"14",style:{width:"85px"},"onUpdate:modelValue":o[12]||(o[12]=d=>i.ten=d)},null,512),[[p,i.ten]]),t(" (){ "),Le,Re,u(e("input",{spellcheck:"false",id:"eleven",maxlength:"6",style:{width:"90px"},"onUpdate:modelValue":o[13]||(o[13]=d=>i.eleven=d)},null,512),[[p,i.eleven]]),t("."),u(e("input",{spellcheck:"false",id:"twelve",style:{width:"70px"},maxlength:"3","onUpdate:modelValue":o[14]||(o[14]=d=>i.twelve=d)},null,512),[[p,i.twelve]]),t("."),u(e("input",{spellcheck:"false",id:"thirteen",maxlength:"7",style:{width:"80px"},"onUpdate:modelValue":o[15]||(o[15]=d=>i.thirteen=d)},null,512),[[p,i.thirteen]]),t('("Sign contract"); '),ze,t(" } "),Je,e("button",{class:"button-9",id:"btn4",onClick:o[16]||(o[16]=d=>h.validate_four())},b(a.button_value),1)],4),e("div",{class:"codebox",style:c({display:a.display[4]})},[Ye,e("button",{class:"button-9",id:"btn5",onClick:o[17]||(o[17]=d=>i.$router.push("/completion"))}," Continue ")],4)],4)])])])}const Qe=_(k,[["render",je],["__scopeId","data-v-c1000c34"]]);export{Qe as default};
