import{d as l,j as D,_ as f,k as m,l as S,x as N,y as x,m as s,q as c,s as g,C as b,F as j,v as E}from"./entry.f78ba159.js";import{d as k}from"./delayedVisibility.3f64afea.js";const B=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),_=(t,e)=>(a,n)=>(D(()=>t({...B(a),...n.attrs},n)),()=>{var i,r;return e?(r=(i=n.slots).default)==null?void 0:r.call(i):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},q=l({name:"Title",inheritAttrs:!1,setup:_((t,{slots:e})=>{var a,n,i;return{title:((i=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:i.children)||null}})}),I=l({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:_(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),O=l({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var a,n;return(n=(a=e.slots).default)==null?void 0:n.call(a)}}),A=l({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:_(t=>({htmlAttrs:t}),!0)});const C={},H=t=>(N("data-v-36394d3f"),t=t(),x(),t),M=H(()=>s("div",{class:"headerInner"},[s("h1",null,"Kazuhiro Natori"),s("nav",null,[s("a",{href:"#skills"},"skills"),s("a",{href:"#projects"},"projects"),s("button",{class:"js-contactDialogOpen"},"contact")])],-1)),$=[M];function T(t,e){return m(),S("header",null,$)}const v=f(C,[["render",T],["__scopeId","data-v-36394d3f"]]),w={mounted(){const t=document.getElementById("contactDialog"),e=document.body,a=document.querySelectorAll(".js-contactDialogOpen"),n=document.querySelectorAll(".js-contactDialogClose");function i(o){t[o?"showModal":"close"](),e.style.overflow=o?"hidden":"auto"}function r(o){const d=o.target.closest(".js-contactDialogOpen"),u=o.target.closest(".js-contactDialogClose"),p=o.target.closest(".js-contactDialogInner");d?i(!0):(u||!p)&&i(!1)}a.forEach(o=>o.addEventListener("click",r)),n.forEach(o=>o.addEventListener("click",r)),t.addEventListener("click",r)}};const F={title:"Nuxt3!",name:"default-layout",components:{Nav:v},mixins:[k,w]};function z(t,e,a,n,i,r){const o=q,d=I,u=O,p=A,y=v;return m(),S(j,null,[c(p,{lang:"ja"},{default:g(()=>[c(u,null,{default:g(()=>[c(o,null,{default:g(()=>[E("Kazuhiro Natori ―Front-end Developer")]),_:1}),c(d,{name:"description",content:"Kazuhiro Natori ―Front-end Developer"})]),_:1})]),_:1}),c(y),b(t.$slots,"default")],64)}const K=f(F,[["render",z]]);export{K as default};