(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23ea3dc2"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(n(t))}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),a=r("2d00"),o=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),a=r("d039"),o=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],f=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=s;(f||l)&&n(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?o.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),a=r("7dd0"),o="String Iterator",s=i.set,c=i.getterFor(o);a(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),a=r("9bdd"),o=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,v,p=i(t),b="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,m=void 0!==h,y=u(p),x=0;if(m&&(h=n(h,g>2?arguments[2]:void 0,2)),void 0==y||b==Array&&o(y))for(e=s(p.length),r=new b(e);e>x;x++)v=m?h(p[x],x):p[x],c(r,x,v);else for(l=y.call(p),d=l.next,r=new b;!(f=d.call(l)).done;x++)v=m?a(l,h,[f.value,x],!0):f.value,c(r,x,v);return r.length=x,r}},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),a=function(t){return function(e,r){var a,o,s=String(i(e)),c=n(r),u=s.length;return c<0||c>=u?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===u||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),a=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},8207:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5",on:{drop:function(e){return e.preventDefault(),t.dropFiles(e)},dragover:function(t){t.preventDefault()}}},[n("div",{staticClass:"box mt-4"},[n("img",{staticClass:"mt-5 mb-2",attrs:{src:r("57a3"),height:"100px",width:"100px"}}),t.file?n("div",[n("p",{staticClass:"mb-5"},[t._v(t._s(t.file.name))])]):n("div",[n("p",{staticClass:"mb-5"},[t._v("Drop PDF here or click below")])]),n("b-button",{attrs:{size:"is-medium",type:"is-primary",rounded:"",expanded:""},on:{click:t.addFile}},[t._v("Add PDF")])],1),n("div",{staticClass:"box"},[n("h3",{staticClass:"is-size-5 mb-3"},[t._v("Grid options")]),n("div",{staticClass:"field is-horizontal"},[t._m(0),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("p",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.xC,expression:"xC",modifiers:{number:!0}}],staticClass:"input is-rounded",attrs:{min:"1",max:"10",type:"number",placeholder:"X"},domProps:{value:t.xC},on:{input:function(e){e.target.composing||(t.xC=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])]),n("div",{staticClass:"field is-horizontal"},[t._m(1),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("p",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.yC,expression:"yC",modifiers:{number:!0}}],staticClass:"input is-rounded",attrs:{min:"1",max:"10",type:"number",placeholder:"Y"},domProps:{value:t.yC},on:{input:function(e){e.target.composing||(t.yC=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])])]),n("b-button",{attrs:{size:"is-medium",type:"is-primary",rounded:"",expanded:"",outlined:"",loading:t.isLoading,disabled:!t.file},on:{click:t.gridPDF}},[t._v("Create Grid PDF")])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field-label is-normal"},[r("label",{staticClass:"label"},[t._v("Horizontal Pages")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field-label is-normal"},[r("label",{staticClass:"label"},[t._v("Vertical Pages")])])}],a=(r("b0c0"),r("96cf"),r("1da1"));function o(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function s(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(r.push(o.value),e&&r.length===e)break}catch(c){i=!0,a=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(i)throw a}}return r}}r("a630"),r("fb6a"),r("25f0");function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if(t){if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){return o(t)||s(t,e)||u(t,e)||f()}var d=r("36d5"),v=r.n(d),p=r("e198"),b=r("aeb1"),g=r.n(b),h={name:"Grid",data:function(){return{file:void 0,isLoading:!1,xC:2,yC:2}},methods:{addFile:function(){var t=this;v()({accept:".pdf"}).then((function(e){var r=l(e,1),n=r[0];return t.readFile(n)}))},dropFiles:function(t){var e=l(t.dataTransfer.files,1),r=e[0];this.readFile(r)},readFile:function(t){var e=this,r=new FileReader;r.onload=function(){e.file={name:t.name,lastModified:t.lastModified,size:t.size,data:r.result}},r.onerror=function(t){return console.log(t)},r.readAsArrayBuffer(t)},gridPDF:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r,n,i,a,o,s,c,u,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,e=this.xC,r=this.yC,t.next=4,p["PDFDocument"].create();case 4:return n=t.sent,t.next=7,p["PDFDocument"].load(this.file.data);case 7:return i=t.sent,t.next=10,n.embedPdf(i,i.getPageIndices());case 10:a=t.sent,o=0;case 12:if(!(o<a.length)){t.next=30;break}s=n.addPage(),c=0;case 15:if(!(c<e)){t.next=27;break}u=0;case 17:if(!(u<r)){t.next=24;break}if(!(c+e*u>a.length)){t.next=20;break}return t.abrupt("break",24);case 20:s.drawPage(a[o+c+e*u],{x:c*(s.getWidth()/e),y:s.getHeight()*((r-1)/r)-s.getHeight()/r*u,width:s.getWidth()/e,height:s.getHeight()/r});case 21:u++,t.next=17;break;case 24:c++,t.next=15;break;case 27:o+=e+r,t.next=12;break;case 30:return t.next=32,n.save();case 32:f=t.sent,g()(f,"grid.pdf","application/pdf"),this.isLoading=!1;case 35:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},m=h,y=r("2877"),x=Object(y["a"])(m,n,i,!1,null,null,null);e["default"]=x.exports},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,a(0,r)):t[o]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),v=r("861d"),p=r("825a"),b=r("7b0b"),g=r("fc6a"),h=r("c04e"),m=r("5c6c"),y=r("7c73"),x=r("df75"),w=r("241c"),S=r("057f"),C=r("7418"),A=r("06cf"),O=r("9bf2"),P=r("d1e7"),k=r("9112"),F=r("6eeb"),_=r("5692"),j=r("f772"),D=r("d012"),E=r("90e3"),z=r("b622"),$=r("e538"),N=r("746f"),R=r("d44e"),I=r("69f3"),T=r("b727").forEach,H=j("hidden"),J="Symbol",L="prototype",M=z("toPrimitive"),G=I.set,U=I.getterFor(J),W=Object[L],B=i.Symbol,Q=a("JSON","stringify"),V=A.f,X=O.f,Y=S.f,q=P.f,K=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=i.QObject,it=!nt||!nt[L]||!nt[L].findChild,at=s&&f((function(){return 7!=y(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=V(W,e);n&&delete W[e],X(t,e,r),n&&t!==W&&X(W,e,n)}:X,ot=function(t,e){var r=K[t]=y(B[L]);return G(r,{type:J,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ct=function(t,e,r){t===W&&ct(Z,e,r),p(t);var n=h(e,!0);return p(r),l(K,n)?(r.enumerable?(l(t,H)&&t[H][n]&&(t[H][n]=!1),r=y(r,{enumerable:m(0,!1)})):(l(t,H)||X(t,H,m(1,{})),t[H][n]=!0),at(t,n,r)):X(t,n,r)},ut=function(t,e){p(t);var r=g(e),n=x(r).concat(pt(r));return T(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=h(t,!0),r=q.call(this,e);return!(this===W&&l(K,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(K,e)||l(this,H)&&this[H][e])||r)},dt=function(t,e){var r=g(t),n=h(e,!0);if(r!==W||!l(K,n)||l(Z,n)){var i=V(r,n);return!i||!l(K,n)||l(r,H)&&r[H][n]||(i.enumerable=!0),i}},vt=function(t){var e=Y(g(t)),r=[];return T(e,(function(t){l(K,t)||l(D,t)||r.push(t)})),r},pt=function(t){var e=t===W,r=Y(e?Z:g(t)),n=[];return T(r,(function(t){!l(K,t)||e&&!l(W,t)||n.push(K[t])})),n};if(c||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===W&&r.call(Z,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),at(this,e,m(1,t))};return s&&it&&at(W,e,{configurable:!0,set:r}),ot(e,t)},F(B[L],"toString",(function(){return U(this).tag})),F(B,"withoutSetter",(function(t){return ot(E(t),t)})),P.f=lt,O.f=ct,A.f=dt,w.f=S.f=vt,C.f=pt,$.f=function(t){return ot(z(t),t)},s&&(X(B[L],"description",{configurable:!0,get:function(){return U(this).description}}),o||F(W,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:B}),T(x(rt),(function(t){N(t)})),n({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=B(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(b(t))}}),Q){var bt=!c||f((function(){var t=B();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(n=e,(v(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,Q.apply(null,i)}})}B[L][M]||k(B[L],M,B[L].valueOf),R(B,J),D[H]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),a=r("1c7e"),o=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("e260"),o=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),f=a.values;for(var l in i){var d=n[l],v=d&&d.prototype;if(v){if(v[c]!==f)try{o(v,c,f)}catch(b){v[c]=f}if(v[u]||o(v,u,l),i[l])for(var p in a)if(v[p]!==a[p])try{o(v,p,a[p])}catch(b){v[p]=a[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),a=r("da84"),o=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=a.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var v=d.prototype=f.prototype;v.constructor=d;var p=v.toString,b="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(o(l,t))return"";var r=b?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),a=r("e8b5"),o=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),v=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),b=f("species"),g=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var r,n,f,l=c(this),d=s(l.length),v=o(t,d),p=o(void 0===e?d:e,d);if(a(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?i(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(l,v,p);for(n=new(void 0===r?Array:r)(h(p-v,0)),f=0;v<p;v++,f++)v in l&&u(n,f,l[v]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-23ea3dc2.06c30957.js.map