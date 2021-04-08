(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-33047d1e":"d2c982f4"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/pdf-util/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"127a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("a",{staticClass:"github-fork-ribbon",attrs:{href:"https://github.com/Steve2955/pdf-util","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"}},[e._v("Fork me on GitHub")]),n("section",{staticClass:"hero is-primary is-bold"},[e._m(0),n("div",{staticClass:"hero-foot"},[n("nav",{staticClass:"tabs is-boxed is-centered"},[n("div",{staticClass:"container"},[n("ul",[n("li",{class:{"is-active":"/"==e.$route.path}},[n("router-link",{attrs:{to:"/"}},[e._v("Merge")])],1),n("li",{class:{"is-active":"/grid"==e.$route.path}},[n("router-link",{attrs:{to:"/grid"}},[e._v("Grid")])],1)])])])])]),n("div",{staticClass:"container px-3"},[n("router-view")],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v(" pdf-util ")]),n("h2",{staticClass:"subtitle"},[e._v(" Merge PDFs and more directly in your browser without sending them to some server ")])])])}],s={name:"App"},o=s,c=(n("5c0b"),n("2877")),u=Object(c["a"])(o,a,i,!1,null,null,null),l=u.exports,d=n("289d"),f=(n("5abe"),n("7475"),n("ab0d"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{on:{drop:function(t){return t.preventDefault(),e.dropFiles(t)},dragover:function(e){e.preventDefault()}}},[r("div",{staticClass:"box mt-4"},[e.files.length?r("draggable",{attrs:{handle:".handle"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},e._l(e.files,(function(t,n){return r("div",{key:n,staticClass:"my-2 px-2 pdf-file-container"},[r("div",{staticClass:"pdf-file-name"},[e._v(" "+e._s(t.name)+" ")]),r("div",{staticClass:"actions"},[r("b-icon",{staticClass:"pointer mx-2 handle",attrs:{icon:"drag-horizontal-variant"}}),r("b-icon",{staticClass:"pointer",attrs:{type:"is-danger",size:"is-small",icon:"delete"},nativeOn:{click:function(t){return e.removeFile(n)}}})],1)])})),0):r("div",[r("img",{staticClass:"mt-5 mb-2",attrs:{src:n("57a3"),height:"100px",width:"100px"}}),r("p",{staticClass:"mb-5"},[e._v("Drop PDFs here or click below")])]),r("b-button",{attrs:{size:"is-medium",type:"is-primary",rounded:"",expanded:""},on:{click:e.addFile}},[e._v("Add PDFs")])],1),r("b-button",{attrs:{size:"is-medium",type:"is-primary",rounded:"",expanded:"",outlined:"",loading:e.isLoading,disabled:0==e.files.length},on:{click:e.mergePDF}},[e._v("Merge PDFs")])],1)},h=[],b=n("1da1"),v=n("668b"),m=(n("96cf"),n("159b"),n("b0c0"),n("a434"),n("36d5")),g=n.n(m),x=n("e198"),y=n("aeb1"),k=n.n(y),w=n("b76a"),P=n.n(w),F={name:"Merge",components:{draggable:P.a},data:function(){return{files:[],isLoading:!1}},methods:{addFile:function(){var e=this;g()({multiple:!0,accept:".pdf"}).then((function(t){return t.forEach((function(t){return e.readFile(t)}))}))},dropFiles:function(e){var t=this,n=e.dataTransfer.files;n.forEach((function(e){return t.readFile(e)}))},readFile:function(e){var t=this,n=new FileReader;n.onload=function(){t.files.push({name:e.name,lastModified:e.lastModified,size:e.size,data:n.result})},n.onerror=function(e){return console.log(e)},n.readAsArrayBuffer(e)},mergePDF:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,o,c,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,x["PDFDocument"].create();case 3:t=e.sent,n=!0,r=!1,e.prev=6,i=Object(v["a"])(this.files);case 8:return e.next=10,i.next();case 10:return s=e.sent,n=s.done,e.next=14,s.value;case 14:if(o=e.sent,n){e.next=27;break}return c=o,e.next=19,x["PDFDocument"].load(c.data);case 19:return u=e.sent,e.next=22,t.copyPages(u,u.getPageIndices());case 22:l=e.sent,l.forEach((function(e){return t.addPage(e)}));case 24:n=!0,e.next=8;break;case 27:e.next=33;break;case 29:e.prev=29,e.t0=e["catch"](6),r=!0,a=e.t0;case 33:if(e.prev=33,e.prev=34,n||null==i.return){e.next=38;break}return e.next=38,i.return();case 38:if(e.prev=38,!r){e.next=41;break}throw a;case 41:return e.finish(38);case 42:return e.finish(33);case 43:return e.next=45,t.save();case 45:d=e.sent,k()(d,"merged.pdf","application/pdf"),this.isLoading=!1;case 48:case"end":return e.stop()}}),e,this,[[6,29,33,43],[34,,38,42]])})));function t(){return e.apply(this,arguments)}return t}(),mosaicPDF:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,o,c,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=2,n=5,e.next=4,x["PDFDocument"].create();case 4:return r=e.sent,e.next=7,x["PDFDocument"].load(this.files[0].data);case 7:return a=e.sent,e.next=10,r.embedPdf(a,a.getPageIndices());case 10:i=e.sent,s=0;case 12:if(!(s<i.length)){e.next=30;break}o=r.addPage(),c=0;case 15:if(!(c<t)){e.next=27;break}u=0;case 17:if(!(u<n)){e.next=24;break}if(!(c+t*u>i.length)){e.next=20;break}return e.abrupt("break",24);case 20:o.drawPage(i[c+t*u],{x:c*(o.getWidth()/t),y:o.getHeight()*((n-1)/n)-o.getHeight()/n*u,width:o.getWidth()/t,height:o.getHeight()/n});case 21:u++,e.next=17;break;case 24:c++,e.next=15;break;case 27:s+=t+n,e.next=12;break;case 30:return e.next=32,r.save();case 32:l=e.sent,k()(l,"merged.pdf","application/pdf");case 34:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeFile:function(e){console.log(e),this.files.splice(e,1)}}},_=F,C=(n("6125"),Object(c["a"])(_,p,h,!1,null,"b1aa0a64",null)),D=C.exports;r["a"].use(f["a"]);var O=[{path:"/",name:"Merge",component:D},{path:"/grid",name:"Grid",component:function(){return n.e("chunk-33047d1e").then(n.bind(null,"8207"))}}],j=new f["a"]({mode:"history",base:"/pdf-util/",routes:O}),M=j;r["a"].use(d["a"]),r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(e){return e(l)}}).$mount("#app")},"57a3":function(e,t,n){e.exports=n.p+"img/pdf-box.7fb1ccbb.svg"},"5c0b":function(e,t,n){"use strict";n("9c0c")},6125:function(e,t,n){"use strict";n("127a")},7475:function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.f9fb9ba0.js.map