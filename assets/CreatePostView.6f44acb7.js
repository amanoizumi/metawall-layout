import{s as _,i as h,j as f,r as s,o as v,c as g,a as e,d as r,w as x,p as V}from"./index.51d85300.js";import{d as w}from"./posts.ee8afe7a.js";import{u as y}from"./user.c2bf0539.js";import"./js.cookie.b6205acc.js";const k=e("div",{class:"border-2 border-black bg-white py-[18px] relative mb-4"},[e("div",{class:"border-2 border-black bg-white absolute inset-0 -z-10 top-2 -left-2 -bottom-2 right-2"}),e("h1",{class:"font-bold text-lg text-center"},"\u5F35\u8CBC\u52D5\u614B")],-1),B={class:"border-2 border-black bg-white rounded-lg p-8"},F={class:"mb-4"},C=e("h2",{class:"mb-1"},"\u8CBC\u6587\u5167\u5BB9",-1),P=e("div",null,[e("button",{type:"button",class:"btn px-8 py-1 bg-black mb-4"}," \u4E0A\u50B3\u5716\u7247 ")],-1),j=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"border-2 border-black rounded-lg bg-[#A8B0B9] w-4/5 py-4 font-bold"}," \u9001\u51FA\u8CBC\u6587 ")],-1),N={__name:"CreatePostView",setup(z){const n=y(),{userData:l}=_(n),c=h(),o=f({}),d=async()=>{const a={user:l.value._id,content:o.value.content};try{await w(a),c.push("/")}catch(t){console.log(t)}};return(a,t)=>{const i=s("VField"),u=s("ErrorMessage"),b=s("VForm");return v(),g("div",null,[k,e("div",B,[r(b,{onSubmit:d},{default:x(({errors:p})=>[e("div",F,[C,r(i,{as:"textarea",class:"input py-3 px-4 resize-none",name:"\u8CBC\u6587\u5167\u5BB9",id:"",cols:"30",rows:"6",placeholder:"\u8F38\u5165\u60A8\u7684\u8CBC\u6587\u5167\u5BB9",rules:"required",modelValue:o.value.content,"onUpdate:modelValue":t[0]||(t[0]=m=>o.value.content=m)},null,8,["modelValue"]),r(u,{class:V({"text-[#F57375] block":p.\u8CBC\u6587\u5167\u5BB9}),name:"\u8CBC\u6587\u5167\u5BB9"},null,8,["class"])]),P,j]),_:1})])])}}};export{N as default};