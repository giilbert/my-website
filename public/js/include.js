(()=>{"use strict";function e(e,n){let l=IncludeJS.includes.length;IncludeJS.finished=0;let d=new XMLHttpRequest;d.open("GET",e),d.setRequestHeader("Cache-Control","no-cache"),d.setRequestHeader("pragma","no-cache"),d.onerror=()=>console.error,d.onload=()=>{if(4==d.readyState&&200==d.status){let e=d.responseText;n.outerHTML=e,IncludeJS.finished++,IncludeJS.finished==l&&IncludeJS.onloadCallbacks.forEach((e=>e()))}else n.innerHTML=d.status},d.send()}window.addEventListener("load",(n=>{IncludeJS.includes=document.getElementsByTagName("include");for(let n=0;n<IncludeJS.includes.length;n++)null!==IncludeJS.includes[n].getAttribute("onload")&&e(IncludeJS.includes[n].innerHTML,IncludeJS.includes[n]);document.getElementsByTagName("head")[0].innerHTML+="\n    \x3c!-- IncludeJS style  DO NOT EDIT --\x3e\n    <style>include { display: none; }</style>\n    "})),window.IncludeJS={VERSION:"0.0.1",onload:function(e){IncludeJS.onloadCallbacks.push(e)},onloadCallbacks:[]},console.log("IncludeJS version "+IncludeJS.VERSION)})();