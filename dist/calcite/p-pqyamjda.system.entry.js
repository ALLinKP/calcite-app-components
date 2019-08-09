var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,a){function o(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n["throw"](t))}catch(t){a(t)}}function c(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,s)}c((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(o[0]===6&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}if(a[2])i.ops.pop();i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t];r=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-9fc8a10d.system.js","./p-9391ba3d.system.js","./p-ab241233.system.js","./p-ea33384c.system.js"],function(t){"use strict";var e,i,n,r,a,o,s,c,l,u,h;return{setters:[function(t){e=t.r;i=t.c;n=t.h;r=t.H;a=t.g},function(t){o=t.g},function(t){s=t.S;c=t.E;l=t.R;u=t.L},function(t){h=t.g}],execute:function(){var f=t("calcite_tab_title",function(){function t(t){e(this,t);this.isActive=false;this.guid="calcite-tab-title-"+h();this.calciteTabsActivate=i(this,"calciteTabsActivate",7);this.calciteTabsFocusNext=i(this,"calciteTabsFocusNext",7);this.calciteTabsFocusPrevious=i(this,"calciteTabsFocusPrevious",7);this.calciteTabTitleRegister=i(this,"calciteTabTitleRegister",7);this.calciteTabTitleUnregister=i(this,"calciteTabTitleUnregister",7)}t.prototype.componentWillLoad=function(){if(this.tab&&this.isActive){this.calciteTabsActivate.emit({tab:this.tab})}};t.prototype.render=function(){var t=this.el.id||this.guid;return n(r,{id:t,"aria-controls":this.controls,"aria-expanded":this.isActive?"true":"false",role:"tab",tabindex:"0"},n("a",null,n("slot",null)))};t.prototype.componentDidLoad=function(){this.calciteTabTitleRegister.emit()};t.prototype.componentDidUnload=function(){this.calciteTabTitleUnregister.emit()};t.prototype.tabChangeHandler=function(t){var e=this;if(this.tab){this.isActive=this.tab===t.detail.tab}else{this.getTabIndex().then(function(i){e.isActive=i===t.detail.tab})}};t.prototype.onClick=function(){this.calciteTabsActivate.emit({tab:this.tab})};t.prototype.keyDownHandler=function(t){switch(t.keyCode){case s:case c:this.calciteTabsActivate.emit({tab:this.tab});t.preventDefault();break;case l:if(o(this.el)==="ltr"){this.calciteTabsFocusNext.emit()}else{this.calciteTabsFocusPrevious.emit()}break;case u:if(o(this.el)==="ltr"){this.calciteTabsFocusPrevious.emit()}else{this.calciteTabsFocusNext.emit()}break}};t.prototype.getTabIndex=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,Promise.resolve(Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el))]})})};t.prototype.getTabIdentifier=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.tab?Promise.resolve(this.tab):this.getTabIndex()]})})};t.prototype.updateAriaInfo=function(t,e){if(t===void 0){t=[]}if(e===void 0){e=[]}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(i){this.controls=t[e.indexOf(this.el.id)]||null;return[2,Promise.resolve()]})})};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host{-ms-flex:0 1 var(--calcite-tabs-tab-basis);flex:0 1 var(--calcite-tabs-tab-basis);outline:none}:host(:active) a,:host(:focus) a,:host(:hover) a{outline:none;text-decoration:none;color:var(--calcite-tabs-color-active);border-bottom-color:var(--calcite-tabs-border-hover)}:host([is-active]) a{color:var(--calcite-tabs-color-active);border-bottom-color:var(--calcite-tabs-border-active)}a{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:.875rem;line-height:1.5;padding:.5rem 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid transparent;cursor:pointer;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;color:var(--calcite-tabs-color);outline:none;width:100%;display:block;text-align:var(--calcite-tabs-tab-text-align)}"},enumerable:true,configurable:true});return t}())}}});