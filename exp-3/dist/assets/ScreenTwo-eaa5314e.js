import{_,r as b,o as l,c as d,a as r,n as D,w as a,F as u,b as f,t as p,p as m,d as S}from"./index-28a372bd.js";const w={setup(){const s=b([{id:12,word:"visitOffice():void",list:13},{id:10,word:"getName():String",list:13},{id:6,word:"setName(name:String):void",list:13},{id:31,word:"getName():String",list:13},{id:4,word:"setName(name:String):void",list:13},{id:7,word:"requestVehicle(cObj:Customer):String",list:13},{id:13,word:"signContract(cObj:Customer):void",list:13},{id:1,word:"locateReservation(cName:String):String",list:13},{id:5,word:"releaseContract():String",list:13},{id:15,word:"updateKeyStatus(processedBy:String):void",list:13}]);return{getList:t=>s.value.filter(g=>g.list===t),startDrag:(t,g)=>{console.log(g),t.dataTransfer.setData("itemID",g.id),t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move"},onDrop:(t,g)=>{t.preventDefault();const o=t.dataTransfer.getData("itemID"),n=s.value.find(h=>h.id===parseInt(o));n.list=g}}},data(){return{valid:[!1,!1,!1,!1],validated:!1}},methods:{validate(){this.validated=!0;for(let t=0;t<4;t++)this.valid[t]=!1;let s="",e="",v="",i="";for(let t=0;t<this.getList(1).length;t++)s=s+this.getList(1)[t].word;for(let t=0;t<this.getList(2).length;t++)e=e+this.getList(2)[t].word;for(let t=0;t<this.getList(3).length;t++)v=v+this.getList(3)[t].word;for(let t=0;t<this.getList(4).length;t++)i=i+this.getList(4)[t].word;s.includes("visitOffice():void")&&s.includes("getName():String")&&s.includes("setName(name:String):void")&&(this.valid[0]=!0),e.includes("getName():String")&&e.includes("setName(name:String):void")&&e.includes("requestVehicle(cObj:Customer):String")&&e.includes("signContract(cObj:Customer):void")&&(this.valid[1]=!0),v.includes("updateKeyStatus(processedBy:String):void")&&(this.valid[2]=!0),i.includes("locateReservation(cName:String):String")&&i.includes("releaseContract():String")&&(this.valid[3]=!0),console.log(this.validated),console.log(s),console.log(e),console.log(v),console.log(i)}}},c=s=>(m("data-v-edab5b24"),s=s(),S(),s),z=c(()=>r("header",{style:{padding:"20px"}},[r("h1",null,"Step 2: Classifying functions into classes"),r("p",null,"To classify functions into classes, drag functions from the right corner and drop them into the class boxes. ")],-1)),x={class:"flex"},L={class:"flex-horizontal"},y={class:"flex-horizontal"},C={class:"outer-box"},N=c(()=>r("h3",null,"Customer",-1)),k=["onDragstart"],I={class:"outer-box"},T=c(()=>r("h3",null,"Clerk",-1)),O=["onDragstart"],B={class:"flex-horizontal"},j={class:"outer-box"},V=c(()=>r("h3",null,"Vehicle",-1)),R=["onDragstart"],q={class:"outer-box"},E=c(()=>r("h3",null,"Reservation",-1)),F=["onDragstart"],K={class:"outer-box"},M=c(()=>r("h3",null,"Methods",-1)),A={class:"unidentified drag-el-horizontal",draggable:"false"},G=["onDragstart"],H={id:"buttons",class:"relative"};function J(s,e,v,i,t,g){return l(),d(u,null,[z,r("main",null,[r("div",x,[r("div",L,[r("div",null,[r("div",y,[r("div",C,[N,r("div",{class:D(["unidentified drag-el-horizontal",{correct:t.validated&&t.valid[0],incorrect:t.validated&&!t.valid[0]}]),draggable:"false"},[r("div",{class:"drop-zone",onDrop:e[0]||(e[0]=o=>i.onDrop(o,1)),onDragenter:e[1]||(e[1]=a(()=>{},["prevent"])),onDragover:e[2]||(e[2]=a(()=>{},["prevent"]))},[(l(!0),d(u,null,f(i.getList(1),o=>(l(),d("div",{key:o.id,class:"unidentified drag-el-horizontal",draggable:"true",onDragstart:n=>i.startDrag(n,o)},[r("p",null,p(o.word),1)],40,k))),128))],32)],2)]),r("div",I,[T,r("div",{class:D(["unidentified drag-el-horizontal",{correct:t.validated&&t.valid[1],incorrect:t.validated&&!t.valid[1]}]),draggable:"false"},[r("div",{class:"drop-zone",onDrop:e[3]||(e[3]=o=>i.onDrop(o,2)),onDragenter:e[4]||(e[4]=a(()=>{},["prevent"])),onDragover:e[5]||(e[5]=a(()=>{},["prevent"]))},[(l(!0),d(u,null,f(i.getList(2),o=>(l(),d("div",{key:o.id,class:"unidentified drag-el-horizontal",draggable:"true",onDragstart:n=>i.startDrag(n,o)},[r("p",null,p(o.word),1)],40,O))),128))],32)],2)])]),r("div",B,[r("div",j,[V,r("div",{class:D(["unidentified drag-el-horizontal",{correct:t.validated&&t.valid[2],incorrect:t.validated&&!t.valid[2]}]),draggable:"false"},[r("div",{class:"drop-zone",onDrop:e[6]||(e[6]=o=>i.onDrop(o,3)),onDragenter:e[7]||(e[7]=a(()=>{},["prevent"])),onDragover:e[8]||(e[8]=a(()=>{},["prevent"]))},[(l(!0),d(u,null,f(i.getList(3),o=>(l(),d("div",{key:o.id,class:"unidentified drag-el-horizontal",draggable:"true",onDragstart:n=>i.startDrag(n,o)},[r("p",null,p(o.word),1)],40,R))),128))],32)],2)]),r("div",q,[E,r("div",{class:D(["unidentified drag-el-horizontal",{correct:t.validated&&t.valid[3],incorrect:t.validated&&!t.valid[3]}]),draggable:"false"},[r("div",{class:"drop-zone",onDrop:e[9]||(e[9]=o=>i.onDrop(o,4)),onDragenter:e[10]||(e[10]=a(()=>{},["prevent"])),onDragover:e[11]||(e[11]=a(()=>{},["prevent"]))},[(l(!0),d(u,null,f(i.getList(4),o=>(l(),d("div",{key:o.id,class:"unidentified drag-el-horizontal",draggable:"true",onDragstart:n=>i.startDrag(n,o)},[r("p",null,p(o.word),1)],40,F))),128))],32)],2)])])])]),r("div",null,[r("div",K,[M,r("div",A,[r("div",{class:"drop-zone",onDrop:e[12]||(e[12]=o=>i.onDrop(o,13)),onDragenter:e[13]||(e[13]=a(()=>{},["prevent"])),onDragover:e[14]||(e[14]=a(()=>{},["prevent"]))},[(l(!0),d(u,null,f(i.getList(13),o=>(l(),d("div",{key:o.id,class:"unidentified drag-el-horizontal",draggable:"true",onDragstart:n=>i.startDrag(n,o)},[r("p",null,p(o.word),1)],40,G))),128))],32)])])])])]),r("footer",null,[r("div",H,[r("button",{class:"navitem",onClick:e[15]||(e[15]=o=>g.validate())},"Next")])])],64)}const Q=_(w,[["render",J],["__scopeId","data-v-edab5b24"]]);export{Q as default};
