import{_ as i,a as u,b as d}from"./PostFooter.Idqh2wUU.js";import{_ as f}from"./P_.l-z-1zef.js";import{r as x,e as h,c as v,a as o,w as I,b as w,t as e,f as a,o as B,d as b}from"./entry.45KnjWs2.js";import"./_plugin-vue_export-helper.x3n3nnut.js";import"./blog.config.HbUBIUh5.js";const y={class:"font-bold text-2xl select-none"},D=17074944e5,g={__name:"2",setup(N){const n=x("?");function r(t){return{day:parseInt(t/1e3/3600/24),hour:parseInt(t/1e3/3600%24),min:parseInt(t/1e3/60%60),sec:Math.trunc(t/1e3%60)}}const c=setInterval(()=>{const t=Date.now(),s=D-t;n.value=r(s),s<=0&&(n.value="🧨🧨🧨新年快乐🧨🧨🧨",clearInterval(c))},1e3);return h(()=>{clearInterval(c)}),(t,s)=>{const p=i,_=u,l=f,m=d;return B(),v("div",null,[o(p),o(_,{size:"h1",text:"emm"}),o(l,null,{default:I(()=>[b("测试页")]),_:1}),o(_,{size:"h2",text:"春节倒计时"}),w("div",y,e(a(n).day)+"天"+e(a(n).hour)+"时"+e(a(n).min)+"分"+e(a(n).sec)+"秒",1),o(m)])}}};export{g as default};
