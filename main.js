(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var c=r.length-1;c>-1&&!t;)t=r[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"hamburger.jpg",n=()=>{const e=document.createElement("h2"),n=document.createElement("p"),r=new Image;r.src=t,r.classList.add("hamburger-img"),r.classList.add("scale-in-center"),r.setAttribute("alt","man with hamburger"),r.setAttribute("width","640"),r.setAttribute("height","427"),e.textContent="The best burgers in Town!",n.textContent="Slices, buns and meats",content.appendChild(e),content.appendChild(r),content.appendChild(n)},r=document.getElementById("content"),c=document.querySelectorAll(".menubtn");function a(){r.textContent=""}function o(e){console.log(e.target.value);for(let e=0;e<c.length;e++)c[e].className=c[e].className.replace(" active-btn","");e.currentTarget.className+=" active-btn","menu"===e.target.value&&(a(),(()=>{const e=document.createElement("h2"),t=document.createElement("p");e.textContent="Menu",t.textContent="We got some good hamburgers. Our specials are very special.",content.appendChild(e),content.appendChild(t)})()),"home"===e.target.value&&(a(),n()),"about"===e.target.value&&(a(),(()=>{const e=document.createElement("h2"),t=document.createElement("p");e.textContent="About us",t.textContent="We have been flippin hamburgers since the early 90's.",content.appendChild(e),content.appendChild(t)})())}n(),c.forEach((e=>{e.addEventListener("click",o)}))})();