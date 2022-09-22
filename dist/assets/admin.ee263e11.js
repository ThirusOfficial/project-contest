import{n as r}from"./nhost.f3e5aa6b.js";import{s as d,a as l,i as u}from"./auth.9e2c3c44.js";import{d as s,c}from"./helper.f1ad4d29.js";const p=document.getElementById("signOutForm"),m=async e=>{e.preventDefault(),await d(),window.location.href=l};p.addEventListener("submit",m);window.onload=async()=>{await u()?await w():window.location.href="login.html"};const w=async()=>{const e=s.gql`
   query MyQuery {
      projects(order_by: {id: desc}) {
         id
        title
        description
        link
        winner
      }
    }
    `,{data:t}=await r.graphql.request(e);t.projects&&(y(t.projects),g(t.projects))},f=async e=>{const t=s.gql`
   mutation MyMutation($id: Int) {
      update_projects(where: {id: {_eq: $id}}, _set: {winner: true}) {
        affected_rows
      }
    }`,{data:n}=await r.graphql.request(t,{id:e});n.update_projects.affected_rows===1&&location.reload()},g=e=>{const t=a(e);e.forEach(n=>{const i=c(n);if(t.length===0){const o=document.createElement("button");o.classList.add("mt-2","rounded","bg-indigo-500","text-white","px-4","py-2","text-sm","font-bold"),o.innerHTML="Select Winner",o.addEventListener("click",()=>f(n.id)),i.append(o)}document.getElementById("projects").append(i)})},y=e=>{const t=a(e);if(t.length!==0){const n=c(t[0]);document.getElementById("winner").append(n),document.querySelector("#winner > p").remove()}},a=e=>e.filter(t=>t.winner===!0);
