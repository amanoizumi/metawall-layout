import{m as a}from"./index.51d85300.js";import{a as i}from"./js.cookie.b6205acc.js";const{VITE_APP_URL:r}={BASE_URL:"/metawall-layout/",MODE:"production",DEV:!1,PROD:!0},p=a.create({baseURL:`${r}/api/posts`}),n=()=>a.create({baseURL:`${r}/api/posts`,headers:{Authorization:`Bearer ${i.get("token")}`}}),m=(t="",s="")=>{let o="",e=[];return(t!==""||s!=="")&&(o+="?"),t==="asc"&&e.push(`timeSort=${t}`),s!==""&&e.push(`q=${s}`),o+=e.join("&"),p.get(o)},P=t=>p.get(`/${t}`),h=t=>n().post("/",t),R=(t,s)=>n().post(`/${t}/comments`,s);export{m as a,R as b,P as c,h as d};