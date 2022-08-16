(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{10167:function(n,e,o){"use strict";o.d(e,{Z:function(){return s}});o(67294);var r=o(41120),t=o(85893),i=(0,r.Z)({clearfix:{"&:after,&:before":{display:"table",content:'" "'},"&:after":{clear:"both"}}});function s(){var n=i();return(0,t.jsx)("div",{className:n.clearfix})}},48783:function(n,e,o){"use strict";o.d(e,{Z:function(){return y}});var r=o(16835),t=o(67294),i=o(45697),s=o.n(i),a=o(41120),c=o(22829),l=o(17812),f=o(92863),p=o(80366),u=o(59499),d=o(25714);function h(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,r)}return o}function m(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?h(Object(o),!0).forEach((function(e){(0,u.Z)(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}var g={root:m(m({},d.Df),{},{position:"relative",padding:"20px 15px",lineHeight:"20px",marginBottom:"20px",fontSize:"14px",backgroundColor:"white",color:"#555555",borderRadius:"0px",maxWidth:"100%",minWidth:"auto",boxShadow:"0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"}),info:m({backgroundColor:"#00d3ee",color:"#ffffff"},d.ur),success:m({backgroundColor:"#5cb860",color:"#ffffff"},d.TI),warning:m({backgroundColor:"#ffa21a",color:"#ffffff"},d.D6),danger:m({backgroundColor:"#f55a4e",color:"#ffffff"},d.iW),primary:m({backgroundColor:"#af2cc5",color:"#ffffff"},d.kY),message:{padding:"0",display:"block",maxWidth:"89%","&,& *":{letterSpacing:"normal"}},close:{width:"14px",height:"14px"},iconButton:{width:"24px",height:"24px",float:"right",fontSize:"1.5rem",fontWeight:"500",lineHeight:"1",position:"absolute",right:"-4px",top:"0",padding:"0"},icon:{display:"block",float:"left",marginRight:"1.071rem"},container:m(m({},d.nC),{},{position:"relative"})},b=o(85893),x=(0,a.Z)(g);function y(n){var e=n.message,o=n.color,i=n.close,s=n.icon,a=x(),u=[];void 0!==i&&(u=[(0,b.jsx)(l.Z,{className:a.iconButton,"aria-label":"Close",color:"inherit",onClick:function(){y(null)},children:(0,b.jsx)(p.Z,{className:a.close})},"close")]);var d=null;switch(typeof s){case"object":d=(0,b.jsx)(n.icon,{className:a.icon});break;case"string":d=(0,b.jsx)(f.Z,{className:a.icon,children:n.icon});break;default:d=null}var h=t.useState((0,b.jsx)(c.Z,{message:(0,b.jsxs)("div",{children:[d,e,void 0!==i?u:null]}),classes:{root:a.root+" "+a[o],message:a.message+" "+a.container}})),m=(0,r.Z)(h,2),g=m[0],y=m[1];return g}y.propTypes={message:s().node.isRequired,color:s().oneOf(["info","success","warning","danger","primary"]),close:s().bool,icon:s().oneOfType([s().object,s().string])}},11798:function(n,e,o){"use strict";o.r(e);var r=o(92777),t=o(82262),i=o(45959),s=o(63553),a=o(37247),c=o(67294),l=o(6201),f=o(9240),p=o(78252),u=o(41959),d=o(21727),h=o(48783),m=o(10167),g=o(88810),b=o(85893);function x(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,r=(0,a.Z)(n);if(e){var t=(0,a.Z)(this).constructor;o=Reflect.construct(r,arguments,t)}else o=r.apply(this,arguments);return(0,s.Z)(this,o)}}var y=function(n){(0,i.Z)(o,n);var e=x(o);function o(){return(0,r.Z)(this,o),e.apply(this,arguments)}return(0,t.Z)(o,[{key:"render",value:function(){var n=this.props.classes;return(0,b.jsxs)(g.Z,{children:[(0,b.jsx)("h1",{children:"Notifications / Snackbars"}),(0,b.jsx)("h2",{children:"Styles"}),(0,b.jsxs)("p",{children:["You will find all the styles for these components in",(0,b.jsx)("br",{}),(0,b.jsx)("code",{children:"src/assets/jss/nextjs-material-kit/components/snackbarContentStyle.js"}),"."]}),(0,b.jsx)("p",{children:"We restyled the classic Material UI SnackbarContent and gave it a more attractive look."}),(0,b.jsxs)("div",{className:n.bdExample,children:[(0,b.jsx)(h.Z,{message:(0,b.jsxs)("span",{children:[(0,b.jsx)("b",{children:"INFO ALERT:"})," You've got some friends nearby, stop looking at your phone and find them..."]}),close:!0,color:"info",icon:"info_outline"}),(0,b.jsx)(h.Z,{message:(0,b.jsxs)("span",{children:[(0,b.jsx)("b",{children:"SUCCESS ALERT:"})," You've got some friends nearby, stop looking at your phone and find them..."]}),close:!0,color:"success",icon:u.Z}),(0,b.jsx)(h.Z,{message:(0,b.jsxs)("span",{children:[(0,b.jsx)("b",{children:"WARNING ALERT:"})," You've got some friends nearby, stop looking at your phone and find them..."]}),close:!0,color:"warning",icon:d.Z}),(0,b.jsx)(h.Z,{message:(0,b.jsxs)("span",{children:[(0,b.jsx)("b",{children:"DANGER ALERT:"})," You've got some friends nearby, stop looking at your phone and find them..."]}),close:!0,color:"danger",icon:"info_outline"}),(0,b.jsx)(m.Z,{})]}),(0,b.jsx)(l.Z,{language:"jsx",style:f.Z,children:'import React from "react";\n// @material-ui/icons\nimport Check from "@material-ui/icons/Check";\nimport Warning from "@material-ui/icons/Warning";\n// core components\nimport SnackbarContent from "/components/Snackbar/SnackbarContent.js";\nimport Clearfix from "/components/Clearfix/Clearfix.js";\n\nexport default function Notifications(){\n  return (\n    <div>\n      <SnackbarContent\n        message={\n            <span>\n              <b>INFO ALERT:</b> You\'ve got some friends nearby, stop looking\n              at your phone and find them...\n            </span>\n        }\n        close\n        color="info"\n        icon="info_outline"\n      />\n      <SnackbarContent\n        message={\n          <span>\n            <b>SUCCESS ALERT:</b> You\'ve got some friends nearby, stop looking\n            at your phone and find them...\n          </span>\n        }\n        close\n        color="success"\n        icon={Check}\n      />\n      <SnackbarContent\n        message={\n          <span>\n            <b>WARNING ALERT:</b> You\'ve got some friends nearby, stop looking\n            at your phone and find them...\n          </span>\n        }\n        close\n        color="warning"\n        icon={Warning}\n      />\n      <SnackbarContent\n        message={\n          <span>\n            <b>DANGER ALERT:</b> You\'ve got some friends nearby, stop looking\n            at your phone and find them...\n          </span>\n        }\n        close\n        color="danger"\n        icon="info_outline"\n      />\n      <Clearfix />\n    </div>\n  );\n}'}),(0,b.jsx)("h2",{children:"Props"}),(0,b.jsx)(l.Z,{language:"jsx",style:f.Z,children:'SnackbarContent.propTypes = {\n  message: PropTypes.node.isRequired,\n  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),\n  close: PropTypes.bool,\n  icon: PropTypes.func\n};'}),(0,b.jsxs)("p",{children:["Beside these props, you can check out the"," ",(0,b.jsx)("a",{href:"https://material-ui-next.com/demos/snackbars/?ref=creativetim",target:"_blank",children:"official material-ui documentation"}),"."]})]})}}]),o}(c.Component);e.default=(0,p.Z)({bdExample:{padding:"1.5rem",margin:"1rem -15px",position:"relative",marginRight:"0",marginBottom:"-8px",marginLeft:"0",borderWidth:".2rem",border:"solid rgb(245, 242, 240)"}})(y)},32021:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/notifications",function(){return o(11798)}])}},function(n){n.O(0,[2827,1964,4149,8810,9774,2888,179],(function(){return e=32021,n(n.s=e);var e}));var e=n.O();_N_E=e}]);