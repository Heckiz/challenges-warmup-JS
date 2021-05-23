var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,m=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&o(e,a,t[a]);return e},c=(e,l)=>t(e,a(l));import{r as s,R as p,a as i,b as g}from"./vendor.3a99caff.js";function d(){const[e,t]=s.exports.useState({title:"",content:"",category:"",hashtag:"",imageUrl:""}),a=a=>{t(c(m({},e),{[a.target.name]:a.target.value})),console.log()};return p.createElement("div",{className:"card col-6 mx-auto"},p.createElement("div",{className:"card-header"},"New"),p.createElement("div",{className:"card-body text-center"},p.createElement("form",{className:"form-control",onSubmit:async t=>{t.preventDefault();const a=new FormData;a.append("title",e.title),a.append("content",e.content),a.append("category",e.category),a.append("hashtag",e.hashtag),a.append("imageUrl",e.imageUrl),await i.post("api/posts",a)}},p.createElement("div",null,p.createElement("label",{htmlFor:"postTitle",className:"form-label"},"Title"),p.createElement("input",{className:"mx-1",type:"text",name:"title",id:"postTitle",placeholder:"Title",onChange:a})),p.createElement("div",null,p.createElement("label",{htmlFor:"postContent",className:"form-label"},"Content"),p.createElement("input",{className:"mx-1",type:"text",name:"content",id:"postContent",placeholder:"Content",onChange:a})),p.createElement("div",null,p.createElement("label",{htmlFor:"postCategory",className:"form-label"},"Category"),p.createElement("input",{className:"mx-1",type:"text",name:"category",id:"postCategory",placeholder:"Category",onChange:a})),p.createElement("div",null,p.createElement("label",{htmlFor:"postCategory",className:"form-label"},"#Hashtag"),p.createElement("input",{className:"mx-1",type:"text",name:"hashtag",id:"postHashtag",placeholder:"Hashtag",onChange:a})),p.createElement("div",null,p.createElement("label",{htmlFor:"postImage",className:"form-label"},"Select Design"),p.createElement("input",{className:"mx-1",type:"file",name:"imageUrl",id:"postImage",onChange:a=>{t(c(m({},e),{[a.target.name]:a.target.files[0]}))}})),p.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))))}function u(){return p.createElement("div",{className:""},p.createElement("h1",null,"app"),p.createElement(d,null))}i.defaults.baseURL="http://localhost:3000/",g.render(p.createElement(p.StrictMode,null,p.createElement(u,null)),document.getElementById("root"));