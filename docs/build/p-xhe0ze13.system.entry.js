System.register(["./p-20b75fa1.system.js","./p-b690b19b.system.js"],function(t){"use strict";var e,i,n,s,r;return{setters:[function(t){e=t.r;i=t.h;n=t.H;s=t.g},function(t){r=t.x}],execute:function(){function o(){return typeof Storage!=="undefined"}function l(t){if(!t||!o()){return null}return localStorage.getItem(t)}function u(t,e){if(!t||!o()){return}localStorage.setItem(t,e)}var c={close:"close",content:"content",link:"link"};var a=function(){function t(t){e(this,t);this.dismissible=true;this.dismissed=l(this.el.tagName.toLowerCase()+"-"+this.storageId)!==null}t.prototype.hideTip=function(){this.dismissed=true;if(this.storageId){u(this.el.tagName.toLowerCase()+"-"+this.storageId,"dismissed")}};t.prototype.render=function(){var t=this;return i(n,{hidden:this.dismissed},i("slot",{name:"heading"}),this.dismissible?i("div",{class:c.close,onClick:function(){return t.hideTip()}},i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i("path",{d:r}))):null,i("div",{class:c.content},i("slot",{name:"thumbnail"}),i("div",null,i("slot",null),this.el.querySelector("[slot=link]")?i("p",{class:c.link},i("slot",{name:"link"})):null)))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}:host{position:relative;display:block;padding:24px 12px;background-color:#fff;color:#6e6e6e;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}:host([hidden]){display:none}.close,.title{font-size:24px}.close{position:absolute;top:0;right:0;width:24px;height:24px;margin:24px 12px;cursor:pointer}:host-context([dir=rtl]) .close{right:auto;left:0}.content{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.content>:last-child{margin-left:12px;margin-right:auto}:host-context([dir=rtl]) .content>:last-child{margin-right:12px;margin-left:auto}"},enumerable:true,configurable:true});return t}();t("calcite_tip",a)}}});