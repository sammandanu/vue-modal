(function(t){function e(e){for(var n,o,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/home/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"10ce":function(t,e,i){"use strict";var n=i("9f6d"),s=i.n(n);s.a},2501:function(t,e,i){},"2bce":function(t,e,i){"use strict";var n=i("8b43"),s=i.n(n);s.a},"2ffc":function(t,e,i){},"37cf":function(t,e,i){},"3ce2":function(t,e,i){"use strict";var n=i("37cf"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},["login"!=t.$store.state.page&&"notfound"!=t.$store.state.page?i("Header"):t._e(),i("router-view")],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-component"},[i("div",{staticClass:"main-nav"},[i("div",{staticClass:"container"},[t.$store.state.username?i("div",{staticClass:"username"},[t._v("Hi "+t._s(t.$store.state.username))]):i("div",{staticClass:"username"},[t._v("Hi Lorem")]),i("div",{staticClass:"nav-item-container"},[i("div",{staticClass:"nav-item",on:{click:function(e){return t.toPage("/")}}},[t._v("Project")]),i("div",{staticClass:"nav-item",on:{click:function(e){return t.toPage("/login")}}},[t._v("Logout")])])])]),t.$store.state.project_detail?i("div",{staticClass:"bottom-nav"},[i("div",{staticClass:"container"},[i("div",{staticClass:"project-name"},[t._v("Project / "+t._s(t.$store.state.project_detail))])])]):t._e()])},r=[],c={name:"Header",props:{},methods:{toPage:function(t){"/"==t&&t!=this.$store.state.page?this.$router.push("/"):confirm("Apakah Anda Yakin?")&&(this.$store.state.username=null,this.$router.push("/login"))}}},u=c,l=(i("8a5b"),i("2877")),d=Object(l["a"])(u,o,r,!1,null,"13d278e2",null),p=d.exports,m={components:{Header:p}},f=m,h=(i("5c0b"),Object(l["a"])(f,s,a,!1,null,null,null)),v=h.exports,j=i("8c4f"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"container"},[t.$store.state.projects?i("div",{staticClass:"project-container"},t._l(t.$store.state.projects,(function(e){return i("Project",{key:e.project_id,attrs:{title:e.title,description:e.description},on:{details:function(i){return t.openModal(e.title,e.description,e.file,e.project_uri)}}})})),1):t._e()]),t.projectModal?i("Modal",{attrs:{uri:t.projectUri,title:t.projectTitle,description:t.projectDescription,data:t.projectFile},on:{dismiss:function(e){t.projectModal=!1}}}):t._e()],1)},g=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-component",on:{click:function(e){return t.details()}}},[i("div",{staticClass:"project-container"},[i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{staticClass:"description"},[t._v(t._s(t.description))])])])},k=[],$={name:"Project",props:{title:null,description:null},data:function(){return{user:"Danu"}},methods:{details:function(){this.$emit("details",this.user)}}},C=$,E=(i("10ce"),Object(l["a"])(C,b,k,!1,null,"873b5fb0",null)),P=E.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-component"},[i("div",{staticClass:"modal-container"},[t.title?i("div",{staticClass:"modal-title"},[t._v(t._s(t.title))]):i("div",{staticClass:"modal-title"},[t._v("Loading")]),t.description?i("div",{staticClass:"description"},[t._v(t._s(t.description))]):i("div",{staticClass:"description"},[t._v("Loading..")]),i("div",{staticClass:"files-container"},[i("div",{staticClass:"file-header"},[t._v("File")]),t._l(t.files,(function(e){return i("div",{key:e,staticClass:"file-item-container"},[i("div",{staticClass:"item"},[t._v(t._s(e))]),i("div",{staticClass:"action",on:{click:function(e){return t.toReadme(t.uri)}}},[t._v("View")])])}))],2),i("div",{staticClass:"modal-close",on:{click:function(e){return t.dismiss()}}},[t._v(" Close ")])])])},L=[],O=(i("b64b"),{name:"Modal",props:{uri:null,title:null,description:null,data:null},data:function(){return{files:null}},mounted:function(){this.files=Object.keys(this.data)},methods:{dismiss:function(){this.$emit("dismiss")},toReadme:function(t){this.$router.push("/project/"+t)}}}),x=O,M=(i("5f32"),Object(l["a"])(x,y,L,!1,null,"12e7cdc6",null)),Y=M.exports,q={name:"Home",components:{Project:P,Modal:Y},data:function(){return{projectModal:!1,projectTitle:null,projectDescription:null,projectFile:null,projectUri:null}},mounted:function(){this.$store.state.username||this.$router.push("/login"),this.$store.state.page="home"},methods:{openModal:function(t,e,i,n){this.projectModal=!0,this.projectTitle=t,this.projectDescription=e,this.projectFile=i,this.projectUri=n}},computed:{}},w=q,R=(i("2bce"),Object(l["a"])(w,_,g,!1,null,"4964f199",null)),A=R.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"readme"},[t.data?i("div",{staticClass:"container"},[i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.data)}})]):t._e()])},D=[],H=(i("4160"),i("159b"),{name:"Readme",components:{},data:function(){return{id:null,data:null}},mounted:function(){this.$store.state.username||this.$router.push("/login"),this.uri=this.$route.params.uri,this.$store.state.page="readme",this.getProjectReadme()},methods:{getProjectReadme:function(){this.$store.state.projects.forEach(function(t){t.project_uri==this.uri&&(this.data=t.file.readme,this.$store.state.project_detail=t.title)}.bind(this))}},computed:{},beforeDestroy:function(){this.$store.state.project_detail=null}}),T=H,F=(i("3ce2"),Object(l["a"])(T,S,D,!1,null,"2b97dcf5",null)),N=F.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text"},[t._v("GitHub Username")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.username,expression:"$store.state.username"}],attrs:{maxlength:"25",type:"text"},domProps:{value:t.$store.state.username},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()},input:function(e){e.target.composing||t.$set(t.$store.state,"username",e.target.value)}}}),i("br"),i("button",{on:{click:function(e){return t.submit()}}},[t._v("Login")])])])},B=[],V={name:"Login",components:{},data:function(){return{}},mounted:function(){this.$store.state.page="login"},methods:{submit:function(){this.$store.state.username?this.$router.push("/"):alert("Please Fill Your Username")}},computed:{}},W=V,J=(i("fc00"),Object(l["a"])(W,U,B,!1,null,"0a32ff13",null)),G=J.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Notfound"},[i("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[i("h1",[t._v("404")])])])}],K={name:"Notfound",components:{},mounted:function(){this.$store.state.page="notfound"}},Q=K,X=Object(l["a"])(Q,z,I,!1,null,"59dd6f12",null),Z=X.exports;n["a"].use(j["a"]);var tt=[{path:"/",name:"Home",component:A},{path:"/login",name:"login",component:G},{path:"/project/:uri",name:"readme",component:N},{path:"*",component:Z}],et=j["a"].prototype.push;j["a"].prototype.push=function(t){return et.call(this,t).catch((function(t){return t}))};var it=new j["a"]({mode:"history",base:"/home/",routes:tt}),nt=it,st=i("2f62");n["a"].use(st["a"]);var at=new st["a"].Store({state:{username:null,page:null,projects:[{project_id:1,project_uri:"vue-project",title:"Vue Project",description:"A Simple Vue Project",file:{readme:"<h1>README</h1><h2>What is inside this Vue Project</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><h2>Build</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span>"}},{project_id:2,title:"React Project",project_uri:"react-project",description:"A Simple React Project",file:{readme:"<h1>README</h1><h2>What is inside this React Project</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><h2>Build</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span>"}},{project_id:3,project_uri:"angular-project",title:"Angular Project",description:"A Simple Angular Project",file:{readme:"<h1>README</h1><h2>What is inside this Angular Project</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><h2>Build</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span>"}},{project_id:4,project_uri:"react-native-project",title:"React Native Project",description:"A Simple React Native Project",file:{readme:"<h1>README</h1><h2>What is inside this React native Project</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><h2>Build</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span>"}}],project_detail:null},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:nt,store:at,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"5f32":function(t,e,i){"use strict";var n=i("9a30"),s=i.n(n);s.a},"8a5b":function(t,e,i){"use strict";var n=i("2501"),s=i.n(n);s.a},"8b43":function(t,e,i){},"9a30":function(t,e,i){},"9c0c":function(t,e,i){},"9f6d":function(t,e,i){},fc00:function(t,e,i){"use strict";var n=i("2ffc"),s=i.n(n);s.a}});
//# sourceMappingURL=app.23240590.js.map