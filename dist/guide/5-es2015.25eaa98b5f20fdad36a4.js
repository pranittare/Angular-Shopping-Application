(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cAcB:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var e=u("pMnS"),o=u("4BU0");class r{}var s=t.nb({encapsulation:0,styles:[['.lds-roller[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-roller;animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-roller;transform-origin:32px 32px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#d3661e;margin:-3px 0 0 -3px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-36ms;animation-delay:-36ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after{top:50px;left:50px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after{top:54px;left:45px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-108ms;animation-delay:-108ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after{top:57px;left:39px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-144ms;animation-delay:-144ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after{top:58px;left:32px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after{top:57px;left:25px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-216ms;animation-delay:-216ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after{top:54px;left:19px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-252ms;animation-delay:-252ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after{top:50px;left:14px}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-288ms;animation-delay:-288ms}.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after{top:45px;left:10px}@-webkit-keyframes lds-roller{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes lds-roller{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}']],data:{}});function a(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","lds-roller"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}var d=u("s7LF");class c{constructor(l){this.viewContainerRef=l}}var b=u("SVse"),g=u("VYMa");class p{constructor(l,n,u){this.authService=l,this.router=n,this.componentFactoryResolver=u,this.isLoginMode=!0,this.isLoading=!1,this.error=null}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(l){if(!l.valid)return;const n=l.value.email,u=l.value.password;let t;this.isLoading=!0,(t=this.isLoginMode?this.authService.login(n,u):this.authService.signup(n,u)).subscribe(l=>{console.log(l),this.isLoading=!1,this.router.navigate(["/recipes"])},l=>{console.log(l),this.error=l,this.showErrorAlert(l),this.isLoading=!1}),l.reset()}onHandleError(){this.error=null}showErrorAlert(l){const n=this.componentFactoryResolver.resolveComponentFactory(g.a),u=this.alertHost.viewContainerRef;u.clear();const t=u.createComponent(n);t.instance.message=l,this.closeSub=t.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),u.clear()})}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe()}}var m=u("qXBG"),h=u("iInd"),v=t.nb({encapsulation:2,styles:[],data:{}});function C(l){return t.Gb(0,[(l()(),t.eb(0,null,null,0))],null,null)}function f(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[["style","text-align: center"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"app-loading-spinner",[],null,null,null,a,s)),t.ob(2,49152,null,0,r,[],null,null)],null,null)}function M(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,e=l.component;return"submit"===n&&(i=!1!==t.Ab(l,2).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Ab(l,2).onReset()&&i),"ngSubmit"===n&&(i=!1!==e.onSubmit(t.Ab(l,2))&&i),i},null,null)),t.ob(1,16384,null,0,d.D,[],null,null),t.ob(2,4210688,[["authForm",4]],0,d.t,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Cb(2048,null,d.b,null,[d.t]),t.ob(4,16384,null,0,d.s,[[4,d.b]],null,null),(l()(),t.pb(5,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["E-mail"])),(l()(),t.pb(8,0,null,null,8,"input",[["class","form-control"],["email",""],["id","email"],["name","email"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Ab(l,9)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Ab(l,9).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Ab(l,9)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Ab(l,9)._compositionEnd(u.target.value)&&i),i},null,null)),t.ob(9,16384,null,0,d.c,[t.B,t.k,[2,d.a]],null,null),t.ob(10,16384,null,0,d.y,[],{required:[0,"required"]},null),t.ob(11,16384,null,0,d.d,[],{email:[0,"email"]},null),t.Cb(1024,null,d.o,function(l,n){return[l,n]},[d.y,d.d]),t.Cb(1024,null,d.p,function(l){return[l]},[d.c]),t.ob(14,671744,null,0,d.u,[[2,d.b],[6,d.o],[8,null],[6,d.p]],{name:[0,"name"],model:[1,"model"]},null),t.Cb(2048,null,d.q,null,[d.u]),t.ob(16,16384,null,0,d.r,[[4,d.q]],null,null),(l()(),t.pb(17,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Password"])),(l()(),t.pb(20,0,null,null,8,"input",[["class","form-control"],["id","password"],["minlength","6"],["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Ab(l,21)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Ab(l,21).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Ab(l,21)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Ab(l,21)._compositionEnd(u.target.value)&&i),i},null,null)),t.ob(21,16384,null,0,d.c,[t.B,t.k,[2,d.a]],null,null),t.ob(22,16384,null,0,d.y,[],{required:[0,"required"]},null),t.ob(23,540672,null,0,d.n,[],{minlength:[0,"minlength"]},null),t.Cb(1024,null,d.o,function(l,n){return[l,n]},[d.y,d.n]),t.Cb(1024,null,d.p,function(l){return[l]},[d.c]),t.ob(26,671744,null,0,d.u,[[2,d.b],[6,d.o],[8,null],[6,d.p]],{name:[0,"name"],model:[1,"model"]},null),t.Cb(2048,null,d.q,null,[d.u]),t.ob(28,16384,null,0,d.r,[[4,d.q]],null,null),(l()(),t.pb(29,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Fb(31,null,[""," "])),(l()(),t.Fb(-1,null,[" | "])),(l()(),t.pb(33,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onSwitchMode()&&t),t},null,null)),(l()(),t.Fb(34,null,[" Switch to "," "]))],function(l,n){l(n,10,0,""),l(n,11,0,""),l(n,14,0,"email",""),l(n,22,0,""),l(n,23,0,"6"),l(n,26,0,"password","")},function(l,n){var u=n.component;l(n,0,0,t.Ab(n,4).ngClassUntouched,t.Ab(n,4).ngClassTouched,t.Ab(n,4).ngClassPristine,t.Ab(n,4).ngClassDirty,t.Ab(n,4).ngClassValid,t.Ab(n,4).ngClassInvalid,t.Ab(n,4).ngClassPending),l(n,8,0,t.Ab(n,10).required?"":null,t.Ab(n,16).ngClassUntouched,t.Ab(n,16).ngClassTouched,t.Ab(n,16).ngClassPristine,t.Ab(n,16).ngClassDirty,t.Ab(n,16).ngClassValid,t.Ab(n,16).ngClassInvalid,t.Ab(n,16).ngClassPending),l(n,20,0,t.Ab(n,22).required?"":null,t.Ab(n,23).minlength?t.Ab(n,23).minlength:null,t.Ab(n,28).ngClassUntouched,t.Ab(n,28).ngClassTouched,t.Ab(n,28).ngClassPristine,t.Ab(n,28).ngClassDirty,t.Ab(n,28).ngClassValid,t.Ab(n,28).ngClassInvalid,t.Ab(n,28).ngClassPending),l(n,30,0,!t.Ab(n,2).valid),l(n,31,0,u.isLoginMode?"Login":"SignUp"),l(n,34,0,u.isLoginMode?"SignUp":"Login")})}function y(l){return t.Gb(0,[t.Db(671088640,1,{alertHost:0}),(l()(),t.eb(16777216,null,null,1,null,C)),t.ob(2,16384,[[1,4]],0,c,[t.M],null,null),(l()(),t.pb(3,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,4,"div",[["class","col-xs-12 col-md-6 col-md-offset-3"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,f)),t.ob(6,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,M)),t.ob(8,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,6,0,u.isLoading),l(n,8,0,!u.isLoading)},null)}function P(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-auth",[],null,null,null,y,v)),t.ob(1,180224,null,0,p,[m.a,h.k,t.j],null,null)],null,null)}var A=t.lb("app-auth",p,P,{},{},[]),_=u("PCNd");u.d(n,"AuthModuleNgFactory",function(){return O});var O=t.mb(i,[],function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[e.a,o.a,A]],[3,t.j],t.v]),t.zb(4608,b.k,b.j,[t.s,[2,b.q]]),t.zb(4608,d.B,d.B,[]),t.zb(1073742336,b.b,b.b,[]),t.zb(1073742336,d.A,d.A,[]),t.zb(1073742336,d.m,d.m,[]),t.zb(1073742336,h.o,h.o,[[2,h.t],[2,h.k]]),t.zb(1073742336,_.a,_.a,[]),t.zb(1073742336,i,i,[]),t.zb(1024,h.i,function(){return[[{path:"",component:p}]]},[])])})}}]);