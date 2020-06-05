(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/pdf-util/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"},on:{drop:function(t){return t.preventDefault(),e.dropFiles(t)},dragover:function(e){e.preventDefault()}}},[r("a",{staticClass:"github-fork-ribbon",attrs:{href:"https://github.com/Steve2955/pdf-util","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"}},[e._v("Fork me on GitHub")]),e._m(0),r("div",{staticClass:"container px-3"},[r("div",{staticClass:"box mt-4"},[e.files.length?r("div",e._l(e.files,(function(t,n){return r("p",{key:n,staticClass:"my-2"},[e._v(e._s(t.name))])})),0):r("div",[r("img",{staticClass:"mt-5 mb-2",attrs:{src:n("57a3"),height:"100px",width:"100px"}}),r("p",{staticClass:"mb-5"},[e._v("Drop PDFs here or click below")])]),r("b-button",{attrs:{size:"is-medium",type:"is-primary",rounded:"",expanded:""},on:{click:e.addFile}},[e._v("Add PDFs")])],1),r("b-button",{attrs:{size:"is-medium",type:"is-primary",rounded:"",expanded:"",outlined:"",loading:e.isLoading,disabled:0==e.files.length},on:{click:e.mergePDF}},[e._v("Merge PDFs")])],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero is-primary is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v(" pdf-util ")]),n("h2",{staticClass:"subtitle"},[e._v(" Merge PDFs directly in your browser without sending them to some server ")])])])])}],o=(n("4160"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),s=n("36d5"),c=n.n(s),u=n("e198"),l=n("aeb1"),d=n.n(l),f={name:"App",data:function(){return{files:[],isLoading:!1}},methods:{addFile:function(){var e=this;c()({multiple:!0,accept:".pdf"}).then((function(t){return t.forEach((function(t){return e.readFile(t)}))}))},dropFiles:function(e){var t=this,n=e.dataTransfer.files;n.forEach((function(e){return t.readFile(e)}))},readFile:function(e){var t=this,n=new FileReader;n.onload=function(){t.files.push({name:e.name,lastModified:e.lastModified,size:e.size,data:n.result})},n.onerror=function(e){return console.log(e)},n.readAsArrayBuffer(e)},mergePDF:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,u["PDFDocument"].create();case 3:t=e.sent,n=0;case 5:if(!(n<this.files.length)){e.next=22;break}return e.next=8,u["PDFDocument"].load(this.files[n].data);case 8:return r=e.sent,e.next=11,t.copyPages(r,r.getPageIndices());case 11:i=e.sent,a=0;case 13:if(!(a<i.length)){e.next=19;break}return e.next=16,t.addPage(i[a]);case 16:a++,e.next=13;break;case 19:n++,e.next=5;break;case 22:return e.next=24,t.save();case 24:o=e.sent,d()(o,"merged.pdf","application/pdf"),this.isLoading=!1;case 27:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},p=f,b=(n("5c0b"),n("2877")),h=Object(b["a"])(p,i,a,!1,null,null,null),v=h.exports,m=n("289d");n("5abe"),n("7475"),n("ab0d");r["a"].use(m["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},"57a3":function(e,t,n){e.exports=n.p+"img/pdf-box.7fb1ccbb.svg"},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},7475:function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.63490cb7.js.map