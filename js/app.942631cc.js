(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-095a3e89":"985fe852","chunk-7886576c":"d3d54e6d","chunk-7bc45a2d":"e40fa95d","chunk-d5c5fcf8":"beb8e533"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-095a3e89":1,"chunk-7886576c":1,"chunk-7bc45a2d":1,"chunk-d5c5fcf8":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-095a3e89":"ac20ab7e","chunk-7886576c":"975ca920","chunk-7bc45a2d":"cd1da27d","chunk-d5c5fcf8":"230f82c8"}[t]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/index.html/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0386":function(t,e,n){"use strict";n("f230")},"15d8":function(t,e,n){},5317:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main"),n("Footer")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("keep-alive",[n("router-view")],1)],1)},i=[],u={name:"Main"},s=u,l=(n("94a3"),n("2877")),f=Object(l["a"])(s,c,i,!1,null,"6a43020f",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header__left"},[t._v(" LOGO ")]),n("div",{staticClass:"header__right"},[n("div",{staticClass:"header__right__links"},[n("router-link",{staticClass:"links",attrs:{to:"/"}},[t._v(" Каталог ")]),n("router-link",{staticClass:"links",attrs:{to:"/contacts"}},[t._v(" Контакты ")]),n("router-link",{staticClass:"links",attrs:{to:"/about-us"}},[t._v(" О нас ")]),n("button",{staticClass:"reg-auth"},[t._v(" Вход / Регистрация ")]),n("router-link",{staticClass:"links",attrs:{to:{name:"Cart",params:{cart_data:t.CART}}}},[t._v(" Корзина "+t._s(t.CART.length)+" ")])],1)])])},h=[],m=n("5530"),_=n("2f62"),v={name:"Header",computed:Object(m["a"])({},Object(_["c"])(["CART"]))},b=v,C=(n("5cd0"),Object(l["a"])(b,p,h,!1,null,"691b54fe",null)),E=C.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__reserved box"},[n("p",{staticClass:"text"},[t._v("© 2021 - All Right Reserved")])]),n("div",{staticClass:"footer__studio box"},[n("p",{staticClass:"text"},[t._v("Web-studio на базе ЦИТ")])]),n("div",{staticClass:"footer__adres box"},[n("p",{staticClass:"text"},[t._v(" Г. Краснодар, Старокорсунский сельский округ, участок 106 ")])]),n("div",{staticClass:"footer__social box"},[t._v("Social link")])])}],y={name:"Footer"},k=y,O=(n("0386"),Object(l["a"])(k,T,g,!1,null,"a6ad1ff0",null)),R=O.exports,A={name:"App",components:{Main:d,Header:E,Footer:R}},S=A,M=(n("034f"),Object(l["a"])(S,a,o,!1,null,null,null)),j=M.exports,w=(n("d81d"),n("a434"),n("bc3a")),x=n.n(w),D=n("5317"),N=n.n(D);r["a"].use(_["a"]);var P=new _["a"].Store({state:{products:[],cart:[]},mutations:{SET_PRODUCTS_TO_STATE:function(t,e){t.products=e},SET_CART:function(t,e){var n=!1;t.cart.map((function(t){t.article===e.article&&(n=!0,t.quantity++)})),n||t.cart.push(Object(m["a"])(Object(m["a"])({},e),{},{quantity:1}))},REMOVE_FROM_CART:function(t,e){t.cart.splice(e,1)},INCREMENT:function(t,e){t.cart[e].quantity++},DECREMENT:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--}},actions:{GET_PRODUCTS_FROM_API:function(t){var e=t.commit;return x()("https://my-json-server.typicode.com/exsem/online-store/products",{method:"GET"}).then((function(t){return e("SET_PRODUCTS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},ADD_TO_CART:function(t,e){var n=t.commit;n("SET_CART",e)},INCREMENT_CART_ITEM:function(t,e){var n=t.commit;n("INCREMENT",e)},DECREMENT_CART_ITEM:function(t,e){var n=t.commit;n("DECREMENT",e)},DELETE_FROM_CART:function(t,e){var n=t.commit;n("REMOVE_FROM_CART",e)}},getters:{PRODUCTS:function(t){return t.products},CART:function(t){return t.cart}},modules:{auth:N.a}}),I=P,q=(n("d3b7"),n("8c4f"));r["a"].use(q["a"]);var F=new q["a"]({mode:"history",routes:[{path:"/",name:"Main",component:function(){return n.e("chunk-7bc45a2d").then(n.bind(null,"556b"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-d5c5fcf8").then(n.bind(null,"f68e"))},props:!0},{path:"/contacts",name:"Contacts",component:function(){return n.e("chunk-095a3e89").then(n.bind(null,"9bdf"))}},{path:"/about-us",name:"about-us",component:function(){return n.e("chunk-7886576c").then(n.bind(null,"a1d1"))}}]}),L=n("5e2b"),H=n("260b");n("ea7b"),n("66ce");r["a"].config.productionTip=!1,r["a"].use(L["c"]),H["a"].initializeApp({apiKey:"AIzaSyDN66-WO-JzTsdZahDqFVqTtrDf_obcWpE",authDomain:"online-store-meat.firebaseapp.com",projectId:"online-store-meat",storageBucket:"online-store-meat.appspot.com",messagingSenderId:"569347661367",appId:"1:569347661367:web:a1f04e4eb5114e4e85a9b2",measurementId:"G-H7H2KEC7NS"}),new r["a"]({router:F,store:I,render:function(t){return t(j)}}).$mount("#app")},"5cd0":function(t,e,n){"use strict";n("b78d")},"85ec":function(t,e,n){},"94a3":function(t,e,n){"use strict";n("15d8")},b78d:function(t,e,n){},f230:function(t,e,n){}});
//# sourceMappingURL=app.942631cc.js.map