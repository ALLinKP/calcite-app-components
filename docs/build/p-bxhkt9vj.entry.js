import{r as t,c as s,h as e,H as l,g as i}from"./p-06107f9b.js";import{C as a}from"./p-8bd4e6e9.js";import{g as c}from"./p-88b03842.js";import{g as o}from"./p-cd1553e2.js";import{c as n}from"./p-840e89a3.js";const r=class{constructor(e){t(this,e),this.collapsible=!1,this.disabled=!1,this.open=!1,this.loading=!1,this.textExpand="Expand",this.textCollapse="Collapse",this.onHeaderClick=t=>{const s=this.el.shadowRoot.querySelector("slot[name=control]"),e=s&&s.assignedNodes()[0];if(e&&e.contains(t.target))return t.stopPropagation(),void t.preventDefault();this.open=!this.open,this.calciteBlockToggle.emit()},this.calciteBlockToggle=s(this,"calciteBlockToggle",7)}render(){const{collapsible:t,disabled:s,el:i,heading:c,loading:o,open:n,summary:r,textCollapse:h,textExpand:d}=this,g=n?h:d,p=o?e("calcite-loader",{inline:!0,"is-active":!0}):e("slot",{name:"control"}),b=i.querySelector("[slot=icon]"),u=e("header",{class:"header"},b?e("div",{class:"icon"},e("slot",{name:"icon"})):null,e("div",{class:"title"},e("h3",{class:"heading"},c),r?e("div",{class:"summary"},r):null),p),m=i.querySelector("[slot=control]"),x=i.children.length>(m?1:0),E=e("div",{class:"header-container"},t?e("button",{"aria-label":g,class:"toggle",onClick:this.onHeaderClick,title:g},u,m?null:e("calcite-icon",{scale:"s",icon:n?"chevron-up":"chevron-down"})):u);return e(l,{tabIndex:s?-1:null},e("article",{"aria-expanded":t?n.toString():null,"aria-busy":o},E,e("div",{class:"content",hidden:!x||!n},e(a,{loading:o,disabled:s},e("slot",null)))))}get el(){return i(this)}static get style(){return":root{--calcite-app-line-height:1.4;--calcite-app-base-font-size:16px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-3:1.5rem;--calcite-app-font-size-2:1.125rem;--calcite-app-font-size-1:1rem;--calcite-app-font-size-0:0.875rem;--calcite-app-font-size--1:0.75rem;--calcite-app-font-weight:400;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);}.heading{font-weight:var(--calcite-app-font-weight-demi);}h1.heading{font-size:var(--calcite-app-font-size-3);}h2.heading{font-size:var(--calcite-app-font-size-2);}h3.heading{font-size:var(--calcite-app-font-size-1);}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);}:root{--calcite-app-side-spacing:1rem;--calcite-app-cap-spacing:1rem;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:1rem;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-footer-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-4px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 8px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1--press:0 0 8px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-hover:0 0 32px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-press:0 0 16px 0 rgba(0,0,0,0.32);}:root{--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8);}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out;}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}:host{background-color:var(--calcite-app-background);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-size:var(--calcite-app-font-size-0);}:host *{-webkit-box-sizing:border-box;box-sizing:border-box;}:host([hidden]){display:none;}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground);}.heading{padding:0;margin:0;}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);}:host{display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;border-radius:var(--calcite-app-border-radius);margin:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-quarter) 0;-webkit-box-shadow:0 1px 0 var(--calcite-app-border);box-shadow:0 1px 0 var(--calcite-app-border);}.header{-ms-flex-positive:1;flex-grow:1;}.header-container > .header{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-three-quarters);}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;}:host([disabled]) .header-container{opacity:var(--calcite-app-disabled-opacity);}calcite-loader[inline]{color:var(--calcite-app-foreground-subtle);}.title{-ms-flex-positive:1;flex-grow:1;margin:0;}.header .title .heading{padding:0 0 var(--calcite-app-cap-spacing-quarter);}.summary{font-size:var(--calcite-app-font-size--1);padding:0 0 var(--calcite-app-cap-spacing-quarter);}.toggle{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-three-quarters);background-color:transparent;border:none;cursor:pointer;display:-ms-flexbox;display:flex;font-family:var(--calcite-app-font-family);-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0;text-align:unset;width:100%;color:var(--calcite-app-foreground);}.toggle:focus{outline-offset:var(--calcite-app-outline-inset);}.icon{margin-right:var(--calcite-app-side-spacing-third);}.toggle-icon{fill:currentColor;-ms-flex:0 0 var(--calcite-app-icon-size);flex:0 0 var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half);}.content{padding:0 var(--calcite-app-side-spacing-three-quarters) var(--calcite-app-cap-spacing-half);position:relative;}"}},h=class{constructor(e){t(this,e),this.open=!1,this.textExpand="Expand",this.textCollapse="Collapse",this.toggleDisplay="button",this.guid=`calcite-block-section-${o()}`,this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.calciteBlockSectionToggle=s(this,"calciteBlockSectionToggle",7)}render(){const{el:t,guid:s,open:l,text:i,textCollapse:a,textExpand:o,toggleDisplay:r}=this,h=c(t),d=l?"caret-down":"rtl"===h?"caret-left":"caret-right",g=l?a:o,p=`${s}__label`,b="switch"===r?e("label",{"aria-label":g,class:n("toggle","toggle--switch"),id:p},i,e("calcite-switch",{"aria-labelledby":p,switched:l,onChange:this.toggleSection,scale:"s"})):e("calcite-action",{"aria-label":g,class:"toggle",onClick:this.toggleSection,text:i,textEnabled:!0,compact:!0},e("calcite-icon",{scale:"s",icon:d}));return e("section",{"aria-expanded":l.toString()},b,e("div",{class:"content",hidden:!l},e("slot",null)))}get el(){return i(this)}static get style(){return":root{--calcite-app-line-height:1.4;--calcite-app-base-font-size:16px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-3:1.5rem;--calcite-app-font-size-2:1.125rem;--calcite-app-font-size-1:1rem;--calcite-app-font-size-0:0.875rem;--calcite-app-font-size--1:0.75rem;--calcite-app-font-weight:400;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);}.heading{font-weight:var(--calcite-app-font-weight-demi);}h1.heading{font-size:var(--calcite-app-font-size-3);}h2.heading{font-size:var(--calcite-app-font-size-2);}h3.heading{font-size:var(--calcite-app-font-size-1);}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);}:root{--calcite-app-side-spacing:1rem;--calcite-app-cap-spacing:1rem;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:1rem;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-footer-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-4px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 8px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1--press:0 0 8px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-hover:0 0 32px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-press:0 0 16px 0 rgba(0,0,0,0.32);}:root{--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8);}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out;}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}:host{background-color:var(--calcite-app-background);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-size:var(--calcite-app-font-size-0);}:host *{-webkit-box-sizing:border-box;box-sizing:border-box;}:host([hidden]){display:none;}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground);}.heading{padding:0;margin:0;}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);}:host{border-bottom:1px solid var(--calcite-app-border);display:block;}:host(:last-child){border-bottom:none;}.toggle--switch{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:var(--calcite-app-cap-spacing-half) 0;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;}.toggle--switch calcite-switch{margin:var(--calcite-app-cap-spacing-third) 0 0 var(--calcite-app-side-spacing-half);}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:var(--calcite-app-side-spacing-half);}"}};export{r as calcite_block,h as calcite_block_section};