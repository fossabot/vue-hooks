(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{310:function(t,e,n){var r=n(1),o=n(4),i=n(100),u=[].slice,c=function(t){return function(e,n){var r=arguments.length>2,o=r?u.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return G})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return C})),n.d(e,"g",(function(){return w})),n.d(e,"h",(function(){return E})),n.d(e,"i",(function(){return R})),n.d(e,"j",(function(){return P})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return _})),n.d(e,"m",(function(){return I})),n.d(e,"n",(function(){return V}));n(168),n(99),n(68),n(169),n(45),n(98),n(27),n(310);var r=n(0),o=n(97);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function i(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r}r.a.use(o.c);var u=function(t){return null==t},c=function(){function t(t){this._m=t}return t.prototype.getRawMatrix=function(){return this._m},t.prototype.getRawMatrixColNum=function(){try{return this._m[0].length}catch(t){throw new Error("矩阵列不能为空")}},t.prototype.getRawMatrixRowNum=function(){return this._m.length},t.prototype.transpose=function(){for(var t=this.getRawMatrixColNum(),e=this.getRawMatrixRowNum(),n=Array.from({length:t}).map((function(){return Array.from({length:e})})),r=0;r<t;r++)for(var o=0;o<e;o++)n[r][o]=this._m[o][r];return n},t}();function s(t,e,n){if(void 0===n&&(n=function(t){return t.join("-")}),e<0)return[];if(1===e)return t.map((function(t){return n([t])}));var r=[];return function t(o,i,u){if(u.length!==e)for(var c=i;c<o.length;c++)u.push(o[c]),t(o,c+1,u),u.pop();else r.push(n(u))}(t,0,[]),r}var a={skuCodeJoiner:"$",specCodeJoiner:"#",getSkuList:function(t){return t},getSkuSpecList:function(t){return t.spuSpecValues},getSkuId:function(t){return t.skuId},getSpecId:function(t){return t.specId},getSpecTitle:function(t){return t.specName},getspecValueId:function(t){return t.specValueId},getspecValue:function(t){return t.specValueRemark}};var p,f=function(){function t(t){this.hooks=[],this.selectedSpec=Array.from({length:t})}return t.prototype.selectSpec=function(t,e){var n=this;this.selectedSpec[t]=e,this.checkIsGenASku()&&this.hooks.forEach((function(t){t(n.getSpecsJoin())}))},t.prototype.cancelSpec=function(t){this.selectedSpec[t]=null},t.prototype.sepcIsSelected=function(t,e){var n;return!(!this.selectedSpec[t]||(null===(n=this.selectedSpec[t])||void 0===n?void 0:n.specJoinQue)!==e.specJoinQue)},t.prototype.getSpecsJoinWith=function(t,e){return this.selectedSpec.reduce((function(n,r,o){return o===t?n?""+n+a.specCodeJoiner+e.specJoinQue:e.specJoinQue:n?r?""+n+a.specCodeJoiner+r.specJoinQue:n:r?r.specJoinQue:""}),"")},t.prototype.combineHook=function(t){this.hooks.push(t)},t.prototype.checkIsGenASku=function(){return!this.selectedSpec.some(u)},t.prototype.getSpecsJoin=function(){return this.selectedSpec.map((function(t){return null==t?void 0:t.specJoinQue})).join(a.specCodeJoiner)},t}(),l=function(){function t(t){this.skuId="",this.toltalSpecCombine=[],this.code=t,this._combineCode()}return t.prototype._combineCode=function(){var t=this.code.split(a.skuCodeJoiner);this.skuId=t[0];for(var e=t[1].split(a.specCodeJoiner),n=e.length,r=1;r<=n;r++){var o=s(e,r,(function(t){return t.join(a.specCodeJoiner)}));this.toltalSpecCombine=i(this.toltalSpecCombine,o)}},t}();!function(t){t.PENDING="pending",t.DISABLED="disabled",t.SELECTED="selected"}(p||(p={}));var d,v=function(){function t(t){this.pathDict=[],this.specGroup=t,this._initPathDict(),this._initSkuPending()}return t.prototype._initPathDict=function(){var t=this;this.specGroup.eachSkuIdJoinSpecsId((function(e){var n=new l(e);t.pathDict=i(t.pathDict,n.toltalSpecCombine)}))},t.prototype._initSkuPending=function(){var t=this.specGroup.specLines.length;this.skuPending=new f(t)},t.prototype.specTap=function(t){t.status!==p.DISABLED&&(this._changeSpecStatus(t),this._checkOtherSpecStatus())},t.prototype.onSkuCombined=function(t){var e=this;this.skuPending.combineHook((function(n){var r,o;e.specGroup.skuIdJoinSpecsId.forEach((function(t){var e;t.includes(n)&&(e=t.split(a.skuCodeJoiner),r=e[0],o=e[1])})),t(r,o)}))},t.prototype._changeSpecStatus=function(t){t.status===p.PENDING?(this.specGroup.setSpecStatusByPosition(t.row,t.col,p.SELECTED),this.skuPending.selectSpec(t.row,this.specGroup.getSpec(t.row,t.col))):t.status===p.SELECTED&&(this.specGroup.setSpecStatusByPosition(t.row,t.col,p.PENDING),this.skuPending.cancelSpec(t.row))},t.prototype._checkOtherSpecStatus=function(){var t=this;this.specGroup.eachSpec((function(e,n,r){if(!t.skuPending.sepcIsSelected(n,e)){var o=t.skuPending.getSpecsJoinWith(n,e);t._isInPathDict(o)?t.specGroup.setSpecStatusByPosition(e.row,e.col,p.PENDING):t._disableSpec(n,r)}}))},t.prototype._isInPathDict=function(t){return this.pathDict.includes(t)},t.prototype._disableSpec=function(t,e){this.specGroup.setSpecStatusByPosition(t,e,p.DISABLED)},t}(),h=function(){function t(t,e,n){this.status=p.PENDING,this.row=e,this.col=n,this.specValue=a.getspecValue(t),this.specId=a.getSpecId(t),this.specValueId=a.getspecValueId(t)}return Object.defineProperty(t.prototype,"specJoinQue",{get:function(){return this.specValueId?this.specId+"-"+this.specValueId:""+this.specId},enumerable:!1,configurable:!0}),t.prototype.setStatus=function(t){this.status=t},t}(),g=function(){function t(t,e){this.specLineTitle="",this.specs=[],this.row=e,this.specLineTitle=a.getSpecTitle(t[0]),this._init(t)}return t.prototype._init=function(t){var e=this;t.map((function(t,n){if(!e._specIsRepeact(t)){var r=new h(t,e.row,n);e.specs.push(r)}}))},t.prototype._specIsRepeact=function(t){return this.specs.findIndex((function(e){return e.specId+"-"+e.specValueId==a.getSpecId(t)+"-"+a.getspecValueId(t)}))>-1},t}(),S=function(){function t(t){this._skuSpecsList=[],this._skuIdJoinSpecsId=[],this.specLines=[],this._skuList=a.getSkuList(t),this._setup()}return Object.defineProperty(t.prototype,"skuSpecsList",{get:function(){return this._skuSpecsList},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"skuIdJoinSpecsId",{get:function(){return this._skuIdJoinSpecsId},enumerable:!1,configurable:!0}),t.prototype._setup=function(){this._createSkuSpecsList();var t=this._transposeSkuSpecsList();this._createSpecLines(t)},t.prototype._createSkuSpecsList=function(){var t=this;this._skuSpecsList=this._skuList.map((function(e){var n=a.getSkuSpecList(e);return t._createSkuIdJoinSpecsId(e,n),n}))},t.prototype._createSkuIdJoinSpecsId=function(t,e){var n=""+a.getSkuId(t)+a.skuCodeJoiner;n+=e.map((function(t){var e=a.getSpecId(t),n=a.getspecValueId(t);return n?e+"-"+n:e})).join(a.specCodeJoiner),this._skuIdJoinSpecsId.push(n)},t.prototype._transposeSkuSpecsList=function(){return new c(this._skuSpecsList).transpose()},t.prototype._createSpecLines=function(t){for(var e=0;e<t.length;e++){var n=new g(t[e],e);this.specLines.push(n)}},t.prototype.eachSpec=function(t){this.specLines.forEach((function(e,n){e.specs.forEach((function(e,r){t(e,n,r)}))}))},t.prototype.getSpec=function(t,e){return this.specLines[t].specs[e]},t.prototype.setSpecStatusByPosition=function(t,e,n){this.specLines[t].specs[e].setStatus(n)},t.prototype.eachSkuIdJoinSpecsId=function(t){this._skuIdJoinSpecsId.forEach((function(e){t(e)}))},t}();function b(t,e){e&&function(t){a=function(t,e){var n={};for(var r in e)n[r]=e[r];for(var r in t)Object.prototype.hasOwnProperty.call(n,r)||(n[r]=t[r]);return n}(a,t)}(e);var n=new S(t);return new v(n)}function m(t,e){var n=b(t,e),r=Object(o.j)(n.specGroup.specLines);return{specTap:function(t){n.specTap(t),r.value=n.specGroup.specLines.concat()},skuList:r}}function y(t,e){var n="number"==typeof e?e:0,r=null;function o(){r&&clearTimeout(r)}return{run:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];o(),r=setTimeout((function(){t.apply(void 0,e)}),n)},cancel:o}}function k(t,e){void 0===e&&(e=0);var n=null;return Object(o.b)((function(r,o){return{get:function(){return r(),t},set:function(r){n&&clearTimeout(n),n=setTimeout((function(){t=r,o()}),e)}}}))}function _(t,e){var n="number"==typeof e?e:0,r=null;return{run:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];r||(r=setTimeout((function(){t.apply(void 0,e),r=null}),n))},cancel:function(){r&&clearTimeout(r)}}}function I(t,e){void 0===e&&(e=0);var n=null;return Object(o.b)((function(r,o){return{get:function(){return r(),t},set:function(r){n||(t=r,o(),n=setTimeout((function(){n=null}),e))}}}))}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function O(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r}function j(t,e){var n=function(t,e){var n=t>0?t-1:e.length+t;return n>=e.length&&(n=e.length-1),n<0&&(n=0),n}(t,e);return{_before:e.slice(0,n),_after:e.slice(n+1),_current:e[n]}}function w(t){var e=Object(o.i)(t),n=Object(o.i)(0),r=Object(o.i)(0),i=d.USER,u={past:[],future:[]};function c(t,e){void 0===e&&(e=!1),u.past=e?t:O(u.past,t)}function s(t,e){void 0===e&&(e=!1),u.future=e?t:O(t,u.future)}function a(t){if(void 0===t&&(t=0),0!==t)return i=d.GO,t>0?function(t){if(void 0===t&&(t=1),!(u.future.length<=0)){var n=j(t,u.future),r=n._after,o=n._current,i=n._before;c(O([e.value],i)),s(r,!0),e.value=o}}(t):function(t){if(void 0===t&&(t=-1),!(u.past.length<=0)){var n=j(t,u.past),r=n._after,o=n._current;c(n._before,!0),s(O(r,[e.value])),e.value=o}}(t)}var p=Object(o.k)(e,(function(t,e){i===d.USER?c([e]):i=d.USER,n.value=u.past.length,r.value=u.future.length}),{flush:"sync"});return Object(o.d)()&&Object(o.g)((function(){return p()})),{current:e,go:a,forward:function(){return a(1)},back:function(){return a(-1)},backLength:Object(o.a)((function(){return n.value})),forwardLength:Object(o.a)((function(){return r.value}))}}function L(t,e,n){var r=Object(o.i)();var i=function(){try{var r=t.getItem(e);return r?JSON.parse(r):n}catch(t){console.warn(t)}}();return i&&(r.value=i),Object(o.k)(r,(function(n){var r;void 0===(r=n)?t.removeItem(e):t.setItem(e,JSON.stringify(r))}),{flush:"post",deep:!0}),r}!function(t){t[t.GO=0]="GO",t[t.USER=1]="USER"}(d||(d={}));var D="undefined"!=typeof window;function J(){var t={};return{getItem:function(e){return t[e]},setItem:function(e,n){return t[e]=n},removeItem:function(e){return delete t[e]},clear:function(){return t={}},length:Object.keys(t).length,key:function(e){return Object.keys(t)[e]}}}function E(t,e){return L(D?localStorage:J(),t,e)}function P(t,e){return L(D?sessionStorage:J(),t,e)}function C(t,e,n){var r,i=Object(o.i)(null);return Object(o.f)((function(){r=(null==n?void 0:n.dom)?"function"==typeof(null==n?void 0:n.dom)?null==n?void 0:n.dom():Object(o.e)(null==n?void 0:n.dom)?n.dom.value:null==n?void 0:n.dom:window,i.value&&(r=i.value),r.addEventListener(t,e,{capture:null==n?void 0:n.capture,once:null==n?void 0:n.once,passive:null==n?void 0:n.passive})})),Object(o.g)((function(){r.removeEventListener(t,e,{capture:null==n?void 0:n.capture})})),i}function T(t,e){var n=Object(o.i)(null);return C("click",(function(r){var o=("function"==typeof e?e():e)||n.value;o&&!o.contains(r.target)&&t(r)}),{capture:!1}),n}function R(t){void 0===t&&(t=D?document:void 0);var e=Object(o.h)({x:0,y:0}),n=Object(o.i)(null);function r(t){void 0!==t&&(t===document?t.scrollingElement&&(e.x=t.scrollingElement.scrollLeft,e.x=t.scrollingElement.scrollTop):(e.x=t.scrollLeft,e.y=t.scrollTop))}var i=_((function(t){t.target&&r(t.target)}),100).run;return Object(o.d)()&&(Object(o.f)((function(){var e=("function"==typeof t?t():t)||n.value;e&&(r(e),e.addEventListener("scroll",i))})),Object(o.g)((function(){}))),[Object(o.a)((function(){return e})),n]}function G(){return function(t){return void 0===t?{draggable:"true",key:function(t){return JSON.stringify(t)},onDragStart:function(t){return function(e){var n;null===(n=e.dataTransfer)||void 0===n||n.setData("custom",JSON.stringify(t))}}}:{draggable:"true",key:JSON.stringify(t),onDragStart:function(e){var n;null===(n=e.dataTransfer)||void 0===n||n.setData("custom",JSON.stringify(t))}}}}function N(t,e){return{onDragOver:function(t){t.preventDefault()},onDragEnter:function(t){t.preventDefault(),e.value=!0},onDragLeave:function(t){t.preventDefault(),e.value=!1},onDrop:function(n){n.preventDefault(),e.value=!1,t(n.dataTransfer,n)},onPaste:function(e){e.preventDefault(),t(e.clipboardData,e)}}}function x(t){void 0===t&&(t={});var e=Object(o.i)(!1);return[N((function(e,n){var r=null==e?void 0:e.getData("text/uri-list"),o=null==e?void 0:e.getData("custom");o&&(null==t?void 0:t.onDom)?t.onDom(o,n):r&&(null==t?void 0:t.onUri)?t.onUri(r,n):e.files&&e.files.length>0&&(null==t?void 0:t.onFiles)?t.onFiles(O(Array.from(e.files)),n):e.items&&e.items.length>0&&(null==t?void 0:t.onText)&&e.items[0].getAsString((function(e){t.onText(e,n)}))}),e),Object(o.a)((function(){return e.value}))]}function V(t,e){var n=e.itemHeight,r=e.overscan,i=void 0===r?5:r,u=Object(o.i)(null),c=Object(o.i)(0),s=Object(o.i)(0);function a(){return Object(o.e)(t)?t.value:t}var p=Object(o.h)({start:0,end:10}),f=Object(o.a)((function(){return a().slice(p.start,p.end).map((function(t,e){return{data:t,index:e+p.start}}))})),l={};function d(t){if(l[t])return l[t];var e=0;return e="number"==typeof n?t*n:a().slice(0,t).reduce((function(t,e,r){return t+n(r)}),0),l[t]=e,e}function v(){var t=u.value;if(t){var e=function(t){if("number"==typeof n)return 1+(t/n|0);for(var e=0,r=0,o=a().length,i=0;i<o;i++)if((e+=n(i))>=t){r=i;break}return r+1}(t.scrollTop),r=function(t){if("number"==typeof n)return Math.ceil(t/n);for(var e=0,r=0,o=a().length,u=p.start+i;u<o;u++)if((e+=n(u))>t){r=u;break}return r-p.start}(t.clientHeight),o=e-i,s=e+r+i,f=a().length;if(s>=f&&p.end===f)return;p.start=o<0?0:o,p.end=s>f?f:s,c.value=d(p.start)}}var h=_(v,80).run;return Object(o.d)()&&Object(o.f)((function(){Object(o.l)((function(){var t=d(a().length);t!==s.value&&(s.value=t)})),v()})),{list:f,wrapperProps:Object(o.h)({style:{width:"100%",boxSizing:"border-box",height:Object(o.a)((function(){return s.value+"px"})),paddingTop:Object(o.a)((function(){return c.value+"px"}))}}),containeRef:u,containeProps:{onScroll:function(t){t.preventDefault(),h()},style:{overflowY:"auto"}},scrollTo:function(t){u.value&&(t<0&&(t=0),t>a().length&&(t=a().length),u.value.scrollTop=d(t),v())}}}},328:function(t,e,n){},363:function(t,e,n){"use strict";var r=n(328);n.n(r).a},404:function(t,e,n){"use strict";n.r(e);var r=n(311),o=n(97),i={name:"use-history-travel",setup:function(){var t=Object(o.h)([]),e=Object(r.g)("initial value"),n=e.current,i=e.backLength,u=e.forwardLength,c=e.back,s=e.forward,a=e.go;t.push(n.value);var p=Object(o.i)(""),f=Object(o.i)(0);return{current:n,backLength:i,forwardLength:u,back:c,forward:s,go:a,allData:t,inputRef:p,add:function(){n.value=p.value,p.value="",t.push(n.value)},goRef:f}}},u=(n(363),n(26)),c=Object(u.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"add"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputRef,expression:"inputRef"}],attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.inputRef},on:{input:function(e){e.target.composing||(t.inputRef=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.add}},[t._v("添加")])]),t._v(" "),n("ul",{staticClass:"list"},[n("h4",[t._v("历史记录")]),t._v(" "),t._l(t.allData,(function(e,r){return n("li",{key:r,class:{current:e==t.current}},[t._v(t._s(e))])}))],2),t._v(" "),n("div",{staticClass:"operate"},[n("button",{on:{click:t.forward}},[t._v("前进")]),t._v(" "),n("button",{on:{click:t.back}},[t._v("后退")])]),t._v(" "),n("div",{staticClass:"operate"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.goRef,expression:"goRef"}],attrs:{type:"number"},domProps:{value:t.goRef},on:{input:function(e){e.target.composing||(t.goRef=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(){return t.go(+t.goRef)}}},[t._v("Go")])]),t._v(" "),n("div",{staticClass:"info"},[n("span",{staticClass:"block"},[t._v("可前进步数："+t._s(t.forwardLength))]),t._v(" "),n("span",{staticClass:"block"},[t._v("可后退步数："+t._s(t.backLength))])])])}),[],!1,null,"60792ce6",null);e.default=c.exports}}]);