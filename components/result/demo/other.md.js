webpackJsonp([72],{3:function(n,t,a){"use strict";a(7),a(6)},6:function(n,t){},7:function(n,t){},14:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},24:function(n,t,a){"use strict";function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function e(n){var t=c.createClass({displayName:"TouchableFeedbackComponent",getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},render:function(){return c.createElement(n,o({},this.props,{touchFeedback:this.state.touchFeedback,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}))}});return t}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n};t["default"]=e;var p=a(1),c=s(p);n.exports=t["default"]},25:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function u(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function r(n){return"string"==typeof n}function i(n){return r(n.type)&&x(n.props.children)?m.cloneElement(n,{},n.props.children.split("").join(" ")):r(n)?(x(n)&&(n=n.split("").join(" ")),m.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var k=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},f=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,c=n[Symbol.iterator]();!(s=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(u){e=!0,o=u}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=a(1),m=e(d),h=a(2),b=s(h),y=a(27),g=s(y),v=a(14),T=s(v),O=a(24),j=s(O),w=/^[\u4e00-\u9fa5]{2}$/,x=w.test.bind(w),C=function(n){function t(){c(this,t);for(var a=arguments.length,s=Array(a),e=0;e<a;e++)s[e]=arguments[e];var o=u(this,n.call.apply(n,[this].concat(s)));return o.onClick=function(){o.props.onClick(o)},o}return l(t,n),t.prototype.render=function(){var n,t=(0,T["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),a=f(t,2),s=a[0],e=s.children,o=s.className,c=s.prefixCls,u=s.type,l=s.size,r=s.inline,d=s.disabled,h=s.htmlType,y=s.icon,v=s.loading,O=s.touchFeedback,j=a[1],w=(0,b["default"])((n={},p(n,o,o),p(n,c,!0),p(n,c+"-primary","primary"===u),p(n,c+"-ghost","ghost"===u),p(n,c+"-warning","warning"===u),p(n,c+"-small","small"===l&&r),p(n,c+"-loading",v),p(n,c+"-inline",r),p(n,c+"-disabled",d),p(n,c+"-touchFeedback",O),n)),x=v?"loading":y,C=m.Children.map(e,i);return m.createElement("button",k({},j,{type:h||"button",className:w,disabled:d,onClick:this.onClick}),x?m.createElement(g["default"],{type:x}):null,C)},t}(m.Component);C.propTypes={prefixCls:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),icon:d.PropTypes.bool},C.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},t["default"]=(0,j["default"])(C),n.exports=t["default"]},28:function(n,t,a){"use strict";a(3),a(35),a(29)},29:function(n,t){},130:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function u(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function r(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=a(1),k=e(i),f=a(25),d=s(f),m=a(2),h=s(m),b=function(n){function t(){return c(this,t),u(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.imgUrl,e=t.title,o=t.message,c=t.buttonText,u=t.buttonClick,l=t.buttonType,r=t.className,i=(0,h["default"])((n={},p(n,""+a,!0),p(n,r,r),n));return k.createElement("div",{className:i},k.createElement("div",{className:a+"-pic",style:{backgroundImage:"url("+s+")"}}),""!==e?k.createElement("div",{className:a+"-title"},e):null,""!==o?k.createElement("div",{className:a+"-message"},o):null,""!==c?k.createElement("div",{className:a+"-button"},k.createElement(d["default"],{type:l,onClick:u},c)):null)},t}(k.Component);t["default"]=b,b.defaultProps={prefixCls:"am-result",imgUrl:"",title:"",message:"",buttonText:"",buttonType:"",buttonClick:r},n.exports=t["default"]},131:function(n,t,a){"use strict";a(3),a(28),a(146)},146:function(n,t){},810:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(131),a(130)),o=s(e),p=a(1),c=s(p),u=a(4);s(u);n.exports={content:[],meta:{order:6,title:"\u5176\u4ed6\u81ea\u5b9a\u4e49\u6837\u5f0f",filename:"components/result/demo/other.md",id:"components-result-demo-other"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>other<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u4e3a\u7a7a<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u5c1d\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u793a<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7f51\u7edc\u4e0d\u7ed9\u529b<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u5c1d\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement("div",{className:"other"},c["default"].createElement(o["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png",title:"\u5185\u5bb9\u4e3a\u7a7a",message:"\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848",buttonText:"\u91cd\u65b0\u5c1d\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}),c["default"].createElement(o["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png",title:"\u8b66\u793a",message:"\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848",buttonText:"\u91cd\u65b0\u52a0\u8f7d",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}),c["default"].createElement(o["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png",title:"\u7f51\u7edc\u4e0d\u7ed9\u529b",message:"\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5",buttonText:"\u91cd\u65b0\u5c1d\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}))};return c["default"].createElement(n,null)},style:".other .am-result {\n  border-bottom: 8px solid #e9e9e9;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.other</span> <span class="token class" >.am-result</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >border-bottom</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px solid <span class="token hexcode" >#e9e9e9</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});