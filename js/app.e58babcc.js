(function(e){function t(t){for(var o,a,c=t[0],s=t[1],u=t[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02e4":function(e,t,n){},"07bb":function(e,t,n){},"2ec2":function(e,t,n){e.exports=n.p+"img/sample2.d87c1b99.png"},"46dc":function(e,t,n){e.exports=n.p+"img/sample4.aa9ee97e.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",[n("common-header")],1),n("el-main",[n("router-view")],1)],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"logo",attrs:{src:e.logo},on:{click:function(t){return e.routeTo("/")}}}),n("div",{staticClass:"nav"},[n("span",{on:{click:function(t){return e.routeTo("/")}}},[e._v("首页")]),n("span",{on:{click:function(t){return e.routeTo("/download")}}},[e._v("下载")]),e._m(0),e._m(1)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"https://github.com/hitchao/Jvedio/wiki"}},[e._v("使用说明")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"https://github.com/hitchao/Jvedio/issues"}},[e._v("反馈")])])}],s={data:function(){return{logo:n("cf05"),activeIndex:0}},methods:{routeTo:function(e){this.$router.push({path:e})}}},u=s,l=(n("8c96"),n("2877")),f=Object(l["a"])(u,a,c,!1,null,"a42fa14c",null),p=f.exports,d={name:"Main",components:{CommonHeader:p}},v=d,g=(n("98f6"),n("b0a0"),Object(l["a"])(v,r,i,!1,null,"3494d51a",null)),h=g.exports,m=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"title"},[e._v("Jvedio-本地视频管理")]),e._m(0),n("el-carousel",{attrs:{height:"500px",interval:5e3,arrow:"always",trigger:"click"}},e._l(e.sample_list,(function(e){return n("el-carousel-item",{key:e},[n("el-image",{staticStyle:{height:"500px"},attrs:{src:e,fit:"scale-down"}})],1)})),1)],1)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"desc"},[n("span",[e._v("\n            Jvedio 是本地视频管理软件，支持扫描本地视频并导入软件，建立视频库， 提取出视频的"),n("b",[e._v("唯一识别码")]),e._v("，自动分类视频， 添加标签管理视频，使用人工智能识别演员，支持翻译信息， 基于 FFmpeg\n            截取视频图片，Window 桌面端流畅美观的应用软件\n        ")])])}],w={data:function(){return{sample_list:[n("ea8e"),n("2ec2"),n("89fb"),n("46dc")]}}},y=w,x=(n("89b7"),Object(l["a"])(y,b,_,!1,null,"097d3a75",null)),j=x.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},e._l(e.config.files,(function(t,o){return n("div",{staticClass:"card"},[n("p",[e._v("Jvedio for "+e._s(t.device))]),n("el-divider"),t.enable?e._e():n("div",[n("p",[e._v("敬请期待")])]),t.enable?n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"200px"},attrs:{src:e.window_logo}}),n("p",{staticStyle:{"font-size":"20px",margin:"5px","font-weight":"bold"}},[e._v(e._s(t.version))]),n("p",{staticStyle:{"font-size":"10px",margin:"5px"}},[e._v(e._s(t.date))]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.downloadApp(o)}}},[e._v("下载")])],1):e._e()],1)})),0)},k=[],S=(n("7f7f"),n("bc3a")),C=n.n(S),$={data:function(){return{window_logo:n("a8f4"),config:{}}},methods:{downloadApp:function(e){location.href="/files/"+this.config.files[e].name},loadConfig:function(){var e=this;C.a.request({url:"/files/config.json",method:"get"}).then((function(t){e.config=t.data}))}},created:function(){this.loadConfig()}},E=$,J=(n("ea4f"),Object(l["a"])(E,O,k,!1,null,"bf069fc6",null)),P=J.exports;o["default"].use(m["a"]);var T=m["a"].prototype.push;m["a"].prototype.push=function(e){return T.call(this,e).catch((function(e){return e}))};var A=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:j},{path:"/download",name:"download",component:P}]}),M=n("2f62");o["default"].use(M["a"]);var F=new M["a"].Store({state:{},mutations:{},actions:{}}),N=n("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var q=n("5c96"),z=n.n(q);n("0fae"),n("5aea");o["default"].use(z.a),o["default"].config.productionTip=!1,new o["default"]({router:A,store:F,render:function(e){return e(h)}}).$mount("#app")},"5aea":function(e,t,n){},"618d":function(e,t,n){},"89b7":function(e,t,n){"use strict";n("618d")},"89fb":function(e,t,n){e.exports=n.p+"img/sample3.9ad4e19c.png"},"8c96":function(e,t,n){"use strict";n("02e4")},"98f6":function(e,t,n){"use strict";n("d61a")},a8f4:function(e,t,n){e.exports=n.p+"img/Windows.92ac741b.png"},b0a0:function(e,t,n){"use strict";n("07bb")},bf49:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.554d4c2a.png"},d61a:function(e,t,n){},ea4f:function(e,t,n){"use strict";n("bf49")},ea8e:function(e,t,n){e.exports=n.p+"img/sample1.80d379df.png"}});
//# sourceMappingURL=app.e58babcc.js.map