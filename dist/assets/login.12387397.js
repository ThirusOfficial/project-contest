import"./nhost.f3e5aa6b.js";import{i as r,b as o,c as a}from"./auth.9e2c3c44.js";const n=document.getElementById("form"),t=n.querySelector("button");window.onload=async()=>{await r()&&(window.location.href=o)};const c=async i=>{i.preventDefault();const e=new FormData(n),s=Object.fromEntries(e.entries());t.innerHTML="Signin in...",await a(s)!==null&&(window.location.href=o),alert("Incorrect email or password"),t.innerHTML="Sign In"};n.addEventListener("submit",c);
