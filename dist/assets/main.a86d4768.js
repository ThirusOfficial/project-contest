import{n as s}from"./nhost.f3e5aa6b.js";import{d as i,c as m}from"./helper.f1ad4d29.js";window.onload=async()=>{u()};const u=async()=>{const e=await f();e.length!=0?w(e[0]):y()},n=document.getElementById("form"),o=n.querySelector("button"),c=document.querySelector("#form-section"),r=document.querySelector("#winner-section"),p=async e=>{e.preventDefault();const t=new FormData(n),a=Object.fromEntries(t.entries());o.innerHTML="Processing...";const l=i.gql`
   mutation MyMutation($title: String, $description: String, $link: String) {
      insert_projects(objects: {title: $title, description: $description, link: $link}) {
        affected_rows
      }
    }`,{data:d}=await s.graphql.request(l,a);d.insert_projects.affected_rows==1?g():q()},f=async()=>{const e=i.gql`
      query {
         projects(where: {winner: {_eq: true}}) {
            link
            title
            description
          }
      }`,{data:t}=await s.graphql.request(e);return t.projects?t.projects:[]};n.addEventListener("submit",p);const y=()=>{c.classList.remove("hidden"),r.remove()},w=e=>{r.classList.remove("hidden");const t=m(e);r.appendChild(t),c.remove()},g=()=>{o.outerHTML='<p class="text-green-700">Your project is submitted. Wait for the results \u{1F91E}</p>',n.reset()},q=()=>{alert("Something went wrong. Please try again later"),o.innerHTML="Submit Project"};
