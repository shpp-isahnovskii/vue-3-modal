import{d as A,$ as Z,o as f,P,Q as s,W as t,u as o,i as G,a as l,V as S,c as g,F as w,a5 as E,Y as C,aw as M,ax as N,e as te,n as se,E as ee,U as T,a3 as oe,K as ne,ar as ie}from"./@vue.5550c4f5.js";import{d as ce,s as F,c as de}from"./pinia.04893f58.js";import{E as re,a as H,b as ue,c as W,d as _e,e as pe,f as B,g as le,h as Y,i as J,j as me,k as fe,l as ve,m as he,n as be,o as ge,p as ke}from"./element-plus.49b2acaa.js";import"./lodash-es.a286bec7.js";import"./@vueuse.5b958af2.js";import"./@element-plus.261d43b3.js";import"./@popperjs.36402333.js";import"./@ctrl.fd318bfa.js";import"./dayjs.46f97078.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.5fd0284c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))v(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&v(h)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function v(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}})();const R=ce("inviteForm",{state:()=>({isFormSubmitted:!1,toAllCompanies:!0,generalInfoRef:{name:"Jon",lastName:"Doe",email:"jondoe@gmail.com",phone:"+38 044 111 22 33",position:"Developer",companies:["general"]},locationInfoRef:{mainLocation:"usa",checkedOffices:["Berlin","Venice Office","USA Office"]},documentsInfoRef:{classes:[],departments:[],dcf:[]},permissions:{access:[],management:[],admin:!1}}),getters:{formData:_=>({toAllCompanies:_.toAllCompanies,..._.generalInfoRef,..._.locationInfoRef,..._.documentsInfoRef,..._.permissions})},actions:{submitInviteForm(){console.log("good job!"),console.log(this.formData),this.isFormSubmitted=!0},resetInviteForm(){this.$reset(),this.isFormSubmitted=!1}}});const O=(_,n)=>{const a=_.__vccOpts||_;for(const[v,i]of n)a[v]=i;return a},ye={__name:"GeneralInfo",setup(_,{expose:n}){const{generalInfoRef:a}=F(R()),v=[{label:"Precoro",value:"general"},{label:"Precoro Development",value:"dev"},{label:"Precoro Mobile",value:"mobile"},{label:"Precoro Design",value:"design"}],i=A(),c=(V,d,p)=>{if(d.length===0){p(new Error("Please input the missing data"));return}p()},h=Z({name:[{validator:c,trigger:"blur"},{min:3,message:"Length should more then 3",trigger:"blur"}],lastName:[{validator:c,trigger:"blur"},{min:3,message:"Length should more then 3",trigger:"blur"}],email:[{validator:c,trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:"blur"}],phone:[{validator:c,trigger:"blur"}],position:[{validator:c,trigger:"blur"}],companies:[{validator:c,trigger:"blur"}]});function I(){return new Promise(V=>{if(!i.value)return V(!1);i.value.validate(d=>V(d))})}return n({isValid:I}),(V,d)=>{const p=re,r=H,e=ue,b=W;return f(),P(b,{"label-position":"top",model:o(a),rules:h,ref_key:"validationRef",ref:i},{default:s(()=>[t(r,{label:"First Name",prop:"name"},{default:s(()=>[t(p,{modelValue:o(a).name,"onUpdate:modelValue":d[0]||(d[0]=u=>o(a).name=u),size:"large"},null,8,["modelValue"])]),_:1}),t(r,{label:"Last Name",prop:"lastName"},{default:s(()=>[t(p,{modelValue:o(a).lastName,"onUpdate:modelValue":d[1]||(d[1]=u=>o(a).lastName=u),size:"large"},null,8,["modelValue"])]),_:1}),t(r,{label:"Email Address",prop:"email"},{default:s(()=>[t(p,{modelValue:o(a).email,"onUpdate:modelValue":d[2]||(d[2]=u=>o(a).email=u),size:"large"},null,8,["modelValue"])]),_:1}),t(r,{label:"Phone Number",prop:"phone"},{default:s(()=>[t(p,{modelValue:o(a).phone,"onUpdate:modelValue":d[3]||(d[3]=u=>o(a).phone=u),size:"large"},null,8,["modelValue"])]),_:1}),t(r,{label:"Position",prop:"position"},{default:s(()=>[t(p,{modelValue:o(a).position,"onUpdate:modelValue":d[4]||(d[4]=u=>o(a).position=u),size:"large"},null,8,["modelValue"])]),_:1}),t(r,{label:"Available Companies",prop:"companies"},{default:s(()=>[t(e,{modelValue:o(a).companies,"onUpdate:modelValue":d[5]||(d[5]=u=>o(a).companies=u),options:v,placeholder:"Please select",size:"large",multiple:"","collapse-tags":"","collapse-tags-tooltip":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}},Ve=O(ye,[["__scopeId","data-v-de0fcd3a"]]);const L=_=>(M("data-v-12239588"),_=_(),N(),_),Ce=L(()=>l("div",{class:"el-collapse-header"},"Precoro",-1)),Ae={class:"el-collapse-items-selected"},Ie=L(()=>l("div",{class:"el-collapse-header"},"Precoro Development",-1)),$e=L(()=>l("div",{class:"el-collapse-items-selected"},"5 selected",-1)),Se=L(()=>l("div",null,"Not disabled but Empty :)",-1)),we=L(()=>l("div",{class:"el-collapse-header"},"Procurement",-1)),xe=L(()=>l("div",{class:"el-collapse-items-selected"},"2 selected",-1)),Pe=L(()=>l("div",null,"Hi ;)",-1)),Ue={__name:"LocationInfo",setup(_){const{locationInfoRef:n}=F(R()),a=[{value:"usa",label:"Main Precoro US"},{value:"ua",label:"Main Precoro UA"},{value:"pl",label:"Main Precoro PL"}],v=A(!1),i=A(!0),c=["Berlin","Poland Office","Venice Office","Mexico","USA Office","Ukraine Kiyv Lukivska 7 Main Office","Canada"],h=r=>{n.value.checkedOffices=r?c:[],i.value=!1},I=r=>{const e=r.length;v.value=e===c.length,i.value=e>0&&e<c.length},V=Z({mainLocation:[{required:!0,message:"Please check your main location",trigger:"change"}]}),d=G(()=>n.value.checkedOffices.length),p=A("1");return(r,e)=>{const b=_e,u=pe,$=H,k=B,x=le,m=W,U=Y,K=J;return f(),P(K,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=y=>p.value=y),accordion:""},{default:s(()=>[t(U,{name:"1"},{title:s(()=>[Ce,l("div",Ae,S(o(d))+" selected ",1)]),default:s(()=>[t(m,{"label-position":"top",model:o(n),rules:V},{default:s(()=>[t($,{label:"Main Location",prop:"mainLocation"},{default:s(()=>[t(u,{modelValue:o(n).mainLocation,"onUpdate:modelValue":e[0]||(e[0]=y=>o(n).mainLocation=y),placeholder:"Your base location",size:"large"},{default:s(()=>[(f(),g(w,null,E(a,y=>t(b,{key:y.value,value:y.value,label:y.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),t(k,{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=y=>v.value=y),indeterminate:i.value,onChange:h},{default:s(()=>[C("Select All Locations ")]),_:1},8,["modelValue","indeterminate"]),t($,{label:"Available locations",class:"locations-wrapper"},{default:s(()=>[t(x,{modelValue:o(n).checkedOffices,"onUpdate:modelValue":e[2]||(e[2]=y=>o(n).checkedOffices=y),onChange:I},{default:s(()=>[(f(),g(w,null,E(c,y=>t(k,{key:y,label:y},null,8,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(U,{name:"2"},{title:s(()=>[Ie,$e]),default:s(()=>[Se]),_:1}),t(U,{name:"3"},{title:s(()=>[we,xe]),default:s(()=>[Pe]),_:1})]),_:1},8,["modelValue"])}}},Ee=O(Ue,[["__scopeId","data-v-12239588"]]);const Le={class:"checkbox-tree__wrapper"},De={__name:"CheckboxTree",props:{data:{default:[]},nodeKey:{default:"label"},checkAllAction:{default:void 0},nodeProps:{children:"children",label:"label"}},emits:["update:Tree"],setup(_,{emit:n}){const a=_,v=A(),i=A(!1),c=A(a.nodeKey);te(()=>a.checkAllAction,e=>{e!==void 0&&(i.value=e,I(e))});const h=a.data.map(e=>e[a.nodeKey]),I=e=>{v.value.setCheckedKeys(e===!0?h:[]),V(e)},V=e=>{n("update:Tree",{status:e,data:v.value.getCheckedKeys()})},d=()=>{if(v.value.getCheckedKeys().length===p){V(!0),i.value=!0;return}if(i.value){V(!1),i.value=!1;return}V(!1)},p=r(a.data,a.nodeKey).length;function r(e,b,u=[]){return e.forEach($=>{$.children?u=r($.children,b,[$[b],...u]):u=[$[b],...u]}),u}return(e,b)=>{const u=B,$=me;return f(),g("div",Le,[t(u,{class:"check-box__select-all",modelValue:i.value,"onUpdate:modelValue":b[0]||(b[0]=k=>i.value=k),onChange:I},{default:s(()=>[C("Select All ")]),_:1},8,["modelValue"]),t($,{"node-key":c.value,ref_key:"dataRef",ref:v,data:a.data,props:a.nodeProps,onCheck:d,"show-checkbox":""},null,8,["node-key","data","props"])])}}},j=O(De,[["__scopeId","data-v-9557e08a"]]),Fe=[{id:1,label:"Class 1",children:[{id:11,label:"Subclass 1-1",children:[{id:111,label:"Subclass 1-1-1"},{id:112,label:"Subclass 1-1-2"}]},{id:12,label:"Subclass 1-2",children:[{id:121,label:"Subclass 1-2-1"},{id:122,label:"Subclass 1-2-2"}]}]},{id:2,label:"Class 2",children:[{id:21,label:"Subclass 2-1",children:[{id:211,label:"Subclass  2-1-1"},{id:212,label:"Subclass  2-1-2"}]}]},{id:3,label:"Class 3"},{id:4,label:"Class 4"}],Re=[{id:1,label:"Developers",children:[{id:11,label:"Second Sub-Developers",children:[{id:111,label:"3d Sub-Developers",children:[{id:1111,label:"iOS & Android Devs"},{id:1114,label:"4th Sub-Developers"}]}]}]},{id:2,label:"Class 3"},{id:3,label:"Class 4"}],Oe=[{id:1,label:"Class 1",children:[{id:11,label:"Subclass 1-1",children:[{id:111,label:"Subclass 1-1-1"},{id:112,label:"Subclass 1-1-2"}]},{id:12,label:"Subclass 1-2",children:[{id:121,label:"Subclass 1-2-1"},{id:122,label:"Subclass 1-2-2"}]}]},{id:2,label:"Class 2",children:[{id:21,label:"Subclass 2-1",children:[{id:211,label:"Subclass  2-1-1"},{id:212,label:"Subclass  2-1-2"}]}]},{id:3,label:"Class 3"},{id:4,label:"Class 4"}];const D=_=>(M("data-v-87326e7d"),_=_(),N(),_),Te=D(()=>l("div",{class:"el-collapse-header"},"Precoro",-1)),Me={class:"el-collapse-items-selected"},Ne=D(()=>l("div",{class:"el-collapse-header"},"Precoro Development",-1)),Be=D(()=>l("div",{class:"el-collapse-items-selected"},"5 selected",-1)),Ke=D(()=>l("div",null,"I hate this page :c",-1)),ze=D(()=>l("div",{class:"el-collapse-header"},"Procurement",-1)),je=D(()=>l("div",{class:"el-collapse-items-selected"},"2 selected",-1)),qe=D(()=>l("div",null,"I'm dead x_x",-1)),Ge={__name:"DocumentsInfo",setup(_){const{documentsInfoRef:n}=F(R()),a=A({classes:!1,departments:!1,dcf:!1}),v=A(void 0),i=G({get(){return Object.values(a.value).every(d=>d===!0)},set(d){c(d)}}),c=d=>{Object.keys(a.value).forEach(p=>{a.value[p]=d}),v.value=d,se(()=>{v.value=void 0})},h=(d,p)=>{n.value[d]=p.data,a.value[d]=p.status},I=G(()=>Object.values(n.value).flat(1).length),V=A("1");return(d,p)=>{const r=B,e=H,b=W,u=Y,$=J;return f(),P($,{modelValue:V.value,"onUpdate:modelValue":p[4]||(p[4]=k=>V.value=k),accordion:""},{default:s(()=>[t(u,{name:"1"},{title:s(()=>[Te,l("div",Me,S(o(I))+" selected ",1)]),default:s(()=>[t(b,{"label-position":"top"},{default:s(()=>[t(e,null,{default:s(()=>[t(r,{modelValue:o(i),"onUpdate:modelValue":p[0]||(p[0]=k=>ee(i)?i.value=k:null),onChange:c},{default:s(()=>[C("Select All Document Custom Fields ")]),_:1},8,["modelValue"])]),_:1}),t(e,{label:"Available Document Custom Fields",class:"documents__wrapper"},{default:s(()=>[t(e,{label:"Classes",class:"checklist-tree__wrapper"},{default:s(()=>[t(j,{data:o(Fe),checkAllAction:v.value,"onUpdate:Tree":p[1]||(p[1]=k=>h("classes",k))},null,8,["data","checkAllAction"])]),_:1}),t(e,{label:"Departments",class:"checklist-tree__wrapper"},{default:s(()=>[t(j,{data:o(Re),checkAllAction:v.value,"onUpdate:Tree":p[2]||(p[2]=k=>h("departments",k))},null,8,["data","checkAllAction"])]),_:1}),t(e,{label:"DCF 3",class:"checklist-tree__wrapper"},{default:s(()=>[t(j,{data:o(Oe),checkAllAction:v.value,"onUpdate:Tree":p[3]||(p[3]=k=>h("dcf",k))},null,8,["data","checkAllAction"])]),_:1})]),_:1})]),_:1})]),_:1}),t(u,{name:"2"},{title:s(()=>[Ne,Be]),default:s(()=>[Ke]),_:1}),t(u,{name:"3"},{title:s(()=>[ze,je]),default:s(()=>[qe]),_:1})]),_:1},8,["modelValue"])}}},He=O(Ge,[["__scopeId","data-v-87326e7d"]]),We=[{name:"Warehouse requests",status:{view:!1,create:!1,approve:!1,pay:!1}},{name:"Purchase requests",status:{view:!0,create:!1,approve:!1,pay:!1}},{name:"Request for proposals",status:{view:!0,create:!1,approve:!1,pay:null}},{name:"Purchase orders",status:{view:!0,create:!1,approve:!1,pay:null}},{name:"Receipts",status:{view:!0,create:!1,approve:!1,pay:null}},{name:"Invoices",status:{view:!0,create:!1,approve:!1,pay:!1}},{name:"Expenses",status:{view:!0,create:!1,approve:!1,pay:!1}}],q=["Configuration","Suppliers and items","Budgets","Warehouse manager","Reports"];const Ye=l("div",{class:"el-collapse-header"},"Precoro",-1),Je=l("div",{class:"el-collapse-items-selected"},"View Only",-1),Qe={class:"content-wrapper"},Xe={class:"el-table"},Ze=l("thead",{class:"el-table__header"},[l("tr",{class:"el-row"},[l("th",{class:"el-cell"},"Access to:"),l("th",{class:"el-cell"},"View only"),l("th",{class:"el-cell"},"Create"),l("th",{class:"el-cell"},"Approve"),l("th",{class:"el-cell"},"Pay")])],-1),el={class:"el-table__body"},ll={class:"el-row"},al=l("td",{class:"el-cell el__bold"},"All Bellow",-1),tl={class:"el-cell"},sl={class:"el-cell"},ol={class:"el-cell"},nl={class:"el-cell"},il={class:"el-cell el-cell__name"},cl={class:"el-checklist"},dl=l("div",{class:"el-checkbox__header"},"Management:",-1),rl={class:"info-section-wrapper"},ul=l("span",{class:"info__text"},"The user becomes a ",-1),_l=l("span",{class:"info__text"}," if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.",-1),pl=l("div",{class:"el-collapse-header"},"Precoro Development",-1),ml=l("div",{class:"el-collapse-items-selected"},"Create, Approve",-1),fl=l("div",null,"No, not today -_-",-1),vl=l("div",{class:"el-collapse-header"},"Procurement",-1),hl=l("div",{class:"el-collapse-items-selected"},"Admin (Full Access)",-1),bl=l("div",null,"Hi again ^-^",-1),gl={__name:"RolesInfo",setup(_){const{permissions:n}=F(R());n.value.access=We;const a=A({view:!1,create:!1,approve:!1,pay:!1}),v=(r,e)=>{h(r,e),a.value[r]=e},i=(r,e)=>{if(e===!1&&a.value[r]===!0){a.value[r]=!1;return}e===!0&&!c(r)&&(a.value[r]=!0)},c=r=>n.value.access.find(e=>e.status[r]===!1),h=(r,e)=>{n.value.access.forEach((b,u)=>{n.value.access[u].status[r]!==null&&(n.value.access[u].status[r]=e)})},I=A(!1),V=r=>{n.value.management=r===!0?q:[]},d=r=>{I.value=r.length===q.length},p=A("1");return(r,e)=>{const b=B,u=le,$=fe,k=Y,x=J;return f(),P(x,{modelValue:p.value,"onUpdate:modelValue":e[11]||(e[11]=m=>p.value=m),accordion:""},{default:s(()=>[t(k,{name:"1"},{title:s(()=>[Ye,Je]),default:s(()=>[l("div",Qe,[l("table",Xe,[Ze,l("tbody",el,[l("tr",ll,[al,l("td",tl,[t(b,{modelValue:a.value.view,"onUpdate:modelValue":e[0]||(e[0]=m=>a.value.view=m),onChange:e[1]||(e[1]=m=>v("view",m))},null,8,["modelValue"])]),l("td",sl,[t(b,{modelValue:a.value.create,"onUpdate:modelValue":e[2]||(e[2]=m=>a.value.create=m),onChange:e[3]||(e[3]=m=>v("create",m))},null,8,["modelValue"])]),l("td",ol,[t(b,{modelValue:a.value.approve,"onUpdate:modelValue":e[4]||(e[4]=m=>a.value.approve=m),onChange:e[5]||(e[5]=m=>v("approve",m))},null,8,["modelValue"])]),l("td",nl,[t(b,{modelValue:a.value.pay,"onUpdate:modelValue":e[6]||(e[6]=m=>a.value.pay=m),onChange:e[7]||(e[7]=m=>v("pay",m))},null,8,["modelValue"])])]),(f(!0),g(w,null,E(o(n).access,(m,U)=>(f(),g("tr",{key:U,class:"el-row"},[l("td",il,S(m.name),1),(f(!0),g(w,null,E(m.status,(K,y)=>(f(),g("td",{key:y,class:"el-cell"},[K!==null?(f(),P(b,{key:0,modelValue:o(n).access[U].status[y],"onUpdate:modelValue":z=>o(n).access[U].status[y]=z,onChange:z=>i(y,z)},null,8,["modelValue","onUpdate:modelValue","onChange"])):T("",!0)]))),128))]))),128))])]),l("div",cl,[dl,t(b,{class:"el__bold",modelValue:I.value,"onUpdate:modelValue":e[8]||(e[8]=m=>I.value=m),onChange:V},{default:s(()=>[C("All Bellow")]),_:1},8,["modelValue"]),t(u,{modelValue:o(n).management,"onUpdate:modelValue":e[9]||(e[9]=m=>o(n).management=m),onChange:d},{default:s(()=>[(f(!0),g(w,null,E(o(q),m=>(f(),P(b,{key:m,label:m},{default:s(()=>[C(S(m),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),t(b,{modelValue:o(n).admin,"onUpdate:modelValue":e[10]||(e[10]=m=>o(n).admin=m),class:"el-checkbox__admin-access"},{default:s(()=>[C("Admin (Full Access)")]),_:1},8,["modelValue"])])]),l("div",rl,[ul,t($,{type:"primary",underline:!1},{default:s(()=>[C("Power User ")]),_:1}),_l])]),_:1}),t(k,{name:"2"},{title:s(()=>[pl,ml]),default:s(()=>[fl]),_:1}),t(k,{name:"3"},{title:s(()=>[vl,hl]),default:s(()=>[bl]),_:1})]),_:1},8,["modelValue"])}}};const ae=_=>(M("data-v-cf4982e6"),_=_(),N(),_),kl={key:0},yl={key:1},Vl={key:0,class:"modal-overlay"},Cl={class:"modal-content"},Al=ae(()=>l("h3",{class:"content-header"},"Invite User",-1)),Il={class:"bottom-section"},$l={key:0,class:"switch-wrapper"},Sl=ae(()=>l("div",{class:"text-line"},"Active in all companies",-1)),wl={__name:"InviteForm",setup(_){const{toAllCompanies:n,isFormSubmitted:a,resetInviteForm:v,submitInviteForm:i}=F(R()),c=A(!0),h=A("first"),I=A(null),V=async()=>{switch(h.value){case"first":await I.value.isValid()&&(h.value="second");break;case"second":h.value="third";break;case"third":h.value="fourth";break;default:p(),c.value=!1}},d=()=>{a?v():(c.value=!c.value,h.value="first")},p=()=>{i()};return(r,e)=>{const b=ve,u=he,$=be,k=ge;return f(),g(w,null,[t(b,{onClick:d},{default:s(()=>[o(a)?(f(),g("span",kl,"Reset Form")):(f(),g("span",yl,"Modal Form"))]),_:1}),(f(),P(oe,{to:"body"},[c.value?(f(),g("div",Vl,[l("div",Cl,[l("div",{class:"close-modal",onClick:e[0]||(e[0]=x=>c.value=!1)}),Al,t($,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=x=>h.value=x),class:"invite-form"},{default:s(()=>[t(u,{label:"Main Info",name:"first",class:"form-item"},{default:s(()=>[t(Ve,{ref_key:"generalInfoRef",ref:I},null,512)]),_:1}),t(u,{label:"Available Locations",name:"second",class:"form-item"},{default:s(()=>[t(Ee)]),_:1}),t(u,{label:"Available Documents Custom Fields",name:"third",class:"form-item"},{default:s(()=>[t(He)]),_:1}),t(u,{label:"Roles",name:"fourth",class:"form-item"},{default:s(()=>[t(gl)]),_:1})]),_:1},8,["modelValue"]),l("div",Il,[h.value==="first"?(f(),g("div",$l,[t(k,{modelValue:o(n),"onUpdate:modelValue":e[2]||(e[2]=x=>ee(n)?n.value=x:null)},null,8,["modelValue"]),Sl])):T("",!0),t(b,{type:"primary",round:"",class:"next-button",onClick:V},{default:s(()=>[C(S(h.value!=="fourth"?"Next Step":"Invite User"),1)]),_:1})])])])):T("",!0)]))],64)}}},xl=O(wl,[["__scopeId","data-v-cf4982e6"]]),Pl="Hi. This test task was designed by Precoro team. I have spent a week for development and a day on refactoring. At the last page, after clicking invite, all data will be in the console and some core fields be here.";const Q=_=>(M("data-v-8a460a19"),_=_(),N(),_),Ul={class:"page-header"},El={key:0},Ll={key:1},Dl={class:"page-content"},Fl={class:"invite-form__article"},Rl=Q(()=>l("div",{class:"invite-form__header"},"General",-1)),Ol={class:"invite-form__data"},Tl={class:"invite-form__data"},Ml={class:"invite-form__data"},Nl={class:"invite-form__data"},Bl={class:"invite-form__data"},Kl={class:"invite-form__data"},zl={key:0},jl={class:"invite-form__article"},ql=Q(()=>l("div",{class:"invite-form__header"},"Location",-1)),Gl={class:"invite-form__data"},Hl={class:"invite-form__data"},Wl={class:"invite-form__wrapper"},Yl=Q(()=>l("div",null,null,-1)),Jl={__name:"TheMainPage",setup(_){const{isFormSubmitted:n,formData:a}=F(R());return(v,i)=>(f(),g("div",{class:ne(["page-wrapper",{"invite-form__wrapper":o(n)}])},[l("h2",Ul,[o(n)?(f(),g("span",El,"Invite Info")):(f(),g("span",Ll,"Some Text"))]),l("div",Dl,[o(n)?(f(),g(w,{key:1},[l("div",Fl,[Rl,l("div",Ol,[C(" Name: "),l("span",null,S(o(a).name),1)]),l("div",Tl,[C(" Last name: "),l("span",null,S(o(a).lastName),1)]),l("div",Ml,[C(" Email: "),l("span",null,S(o(a).email),1)]),l("div",Nl,[C(" Phone: "),l("span",null,S(o(a).phone),1)]),l("div",Bl,[C(" Position: "),l("span",null,S(o(a).position),1)]),l("div",Kl,[C(" Companies: "),(f(!0),g(w,null,E(o(a).companies,(c,h)=>(f(),g("span",{key:h},S(c),1))),128)),o(a).companies.length?T("",!0):(f(),g("span",zl," none "))])]),l("div",jl,[ql,l("div",Gl,[C(" Main location: "),l("span",null,S(o(a).mainLocation),1)]),l("div",Hl,[C(" Available offices: "),(f(!0),g(w,null,E(o(a).checkedOffices,(c,h)=>(f(),g("span",{key:h},S(c),1))),128))]),l("div",null,[l("div",Wl,[C(" Admin: "),l("span",null,S(o(a).admin),1)])])]),Yl],64)):(f(),g(w,{key:0},[C(S(o(Pl)),1)],64))]),t(xl)],2))}},Ql=O(Jl,[["__scopeId","data-v-8a460a19"]]),Xl={__name:"App",setup(_){return(n,a)=>(f(),P(Ql))}};const X=ie(Xl);X.use(ke);X.use(de());X.mount("#app");
