!(function(){var ay=Object.defineProperty,ly=Object.defineProperties;var cy=Object.getOwnPropertyDescriptors;var vc=Object.getOwnPropertySymbols;var Kd=Object.prototype.hasOwnProperty,Jd=Object.prototype.propertyIsEnumerable;var jd=Math.pow,Ju=(ve,ne,Pt)=>ne in ve?ay(ve,ne,{enumerable:!0,configurable:!0,writable:!0,value:Pt}):ve[ne]=Pt,yi=(ve,ne)=>{for(var Pt in ne||(ne={}))Kd.call(ne,Pt)&&Ju(ve,Pt,ne[Pt]);if(vc)for(var Pt of vc(ne))Jd.call(ne,Pt)&&Ju(ve,Pt,ne[Pt]);return ve},ea=(ve,ne)=>ly(ve,cy(ne));var Qd=(ve,ne)=>{var Pt={};for(var W in ve)Kd.call(ve,W)&&ne.indexOf(W)<0&&(Pt[W]=ve[W]);if(ve!=null&&vc)for(var W of vc(ve))ne.indexOf(W)<0&&Jd.call(ve,W)&&(Pt[W]=ve[W]);return Pt};var tp=(ve,ne,Pt)=>Ju(ve,typeof ne!="symbol"?ne+"":ne,Pt);var to=(ve,ne,Pt)=>new Promise((W,pe)=>{var Ne=kt=>{try{gt(Pt.next(kt))}catch(re){pe(re)}},Ae=kt=>{try{gt(Pt.throw(kt))}catch(re){pe(re)}},gt=kt=>kt.done?W(kt.value):Promise.resolve(kt.value).then(Ne,Ae);gt((Pt=Pt.apply(ve,ne)).next())});(self.webpackChunkhezhijian249=self.webpackChunkhezhijian249||[]).push([[9891],{58401:function(ve,ne,Pt){"use strict";Pt.d(ne,{F:function(){return zt}});var W=Pt(86499),pe=Pt(67294),Ne=Pt(8410);function Ae(){const[,Lt]=pe.useReducer(Xt=>Xt+1,0);return Lt}var gt=Pt(29691);const kt=["xxl","xl","lg","md","sm","xs"],re=Lt=>({xs:`(max-width: ${Lt.screenXSMax}px)`,sm:`(min-width: ${Lt.screenSM}px)`,md:`(min-width: ${Lt.screenMD}px)`,lg:`(min-width: ${Lt.screenLG}px)`,xl:`(min-width: ${Lt.screenXL}px)`,xxl:`(min-width: ${Lt.screenXXL}px)`}),oe=Lt=>{const Xt=Lt,Se=[].concat(kt).reverse();return Se.forEach((me,he)=>{const Ft=me.toUpperCase(),Kt=`screen${Ft}Min`,it=`screen${Ft}`;if(!(Xt[Kt]<=Xt[it]))throw new Error(`${Kt}<=${it} fails : !(${Xt[Kt]}<=${Xt[it]})`);if(he<Se.length-1){const Z=`screen${Ft}Max`;if(!(Xt[it]<=Xt[Z]))throw new Error(`${it}<=${Z} fails : !(${Xt[it]}<=${Xt[Z]})`);const N=`screen${Se[he+1].toUpperCase()}Min`;if(!(Xt[Z]<=Xt[N]))throw new Error(`${Z}<=${N} fails : !(${Xt[Z]}<=${Xt[N]})`)}}),Lt};function xe(){const[,Lt]=(0,gt.ZP)(),Xt=re(oe(Lt));return pe.useMemo(()=>{const Se=new Map;let me=-1,he={};return{matchHandlers:{},dispatch(Ft){return he=Ft,Se.forEach(Kt=>Kt(he)),Se.size>=1},subscribe(Ft){return Se.size||this.register(),me+=1,Se.set(me,Ft),Ft(he),me},unsubscribe(Ft){Se.delete(Ft),Se.size||this.unregister()},unregister(){Object.keys(Xt).forEach(Ft=>{const Kt=Xt[Ft],it=this.matchHandlers[Kt];it==null||it.mql.removeListener(it==null?void 0:it.listener)}),Se.clear()},register(){Object.keys(Xt).forEach(Ft=>{const Kt=Xt[Ft],it=tt=>{let{matches:N}=tt;this.dispatch(Object.assign(Object.assign({},he),{[Ft]:N}))},Z=window.matchMedia(Kt);Z.addListener(it),this.matchHandlers[Kt]={mql:Z,listener:it},it(Z)})},responsiveMap:Xt}},[Lt])}const de=(Lt,Xt)=>{if(Xt&&typeof Xt=="object")for(let Se=0;Se<kt.length;Se++){const me=kt[Se];if(Lt[me]&&Xt[me]!==void 0)return Xt[me]}};function Le(){let Lt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const Xt=(0,pe.useRef)({}),Se=Ae(),me=xe();return(0,Ne.Z)(()=>{const he=me.subscribe(Ft=>{Xt.current=Ft,Lt&&Se()});return()=>me.unsubscribe(he)},[]),Xt.current}var ze=Le;function ie(){return ze()}var Vt={useBreakpoint:ie},zt=function(){var Xt=Vt.useBreakpoint();return(0,pe.useMemo)(function(){return(0,W.f)(Xt)},[Xt])}},61169:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{StyleProvider:function(){return W.V9},ThemeProvider:function(){return W.f6},createGlobalStyle:function(){return W.vJ},createInstance:function(){return W.Fs},createStyles:function(){return W.kc},createStylish:function(){return W.Yz},css:function(){return W.iv},cx:function(){return W.cx},extractStaticStyle:function(){return W.Y2},injectGlobal:function(){return W.hi},keyframes:function(){return W.F4},setupStyled:function(){return W.Us},styleManager:function(){return W.Rr},useAntdStylish:function(){return pe.n},useAntdTheme:function(){return Ne.A},useAntdToken:function(){return Ae.S},useResponsive:function(){return gt.F},useTheme:function(){return W.Fg},useThemeMode:function(){return kt.r}});var W=Pt(44242),pe=Pt(34306),Ne=Pt(59369),Ae=Pt(23497),gt=Pt(58401),kt=Pt(8694)},16941:function(ve,ne,Pt){var W=Pt(51474),pe=Pt(64045),Ne=Pt(67294),Ae=Pt(2177);function gt(it){return it&&it.__esModule?it.default:it}function kt(it,Z,tt,N){Object.defineProperty(it,Z,{get:tt,set:N,enumerable:!0,configurable:!0})}function re(it,Z){return Object.keys(Z).forEach(function(tt){tt==="default"||tt==="__esModule"||it.hasOwnProperty(tt)||Object.defineProperty(it,tt,{enumerable:!0,get:function(){return Z[tt]}})}),it}kt(ve.exports,"Sortable",()=>$882b6d93070905b3$re_export$Sortable),kt(ve.exports,"Direction",()=>$882b6d93070905b3$re_export$Direction),kt(ve.exports,"DOMRect",()=>$882b6d93070905b3$re_export$DOMRect),kt(ve.exports,"GroupOptions",()=>$882b6d93070905b3$re_export$GroupOptions),kt(ve.exports,"MoveEvent",()=>$882b6d93070905b3$re_export$MoveEvent),kt(ve.exports,"Options",()=>$882b6d93070905b3$re_export$Options),kt(ve.exports,"PullResult",()=>$882b6d93070905b3$re_export$PullResult),kt(ve.exports,"PutResult",()=>$882b6d93070905b3$re_export$PutResult),kt(ve.exports,"SortableEvent",()=>$882b6d93070905b3$re_export$SortableEvent),kt(ve.exports,"SortableOptions",()=>$882b6d93070905b3$re_export$SortableOptions),kt(ve.exports,"Utils",()=>$882b6d93070905b3$re_export$Utils),kt(ve.exports,"ReactSortable",()=>Ft);function oe(it){it.parentElement!==null&&it.parentElement.removeChild(it)}function xe(it,Z,tt){const N=it.children[tt]||null;it.insertBefore(Z,N)}function de(it){Le(it),ze(it)}function Le(it){it.forEach(Z=>oe(Z.element))}function ze(it){it.forEach(Z=>{xe(Z.parentElement,Z.element,Z.oldIndex)})}function ie(it,Z){const tt=Xt(it),N={parentElement:it.from};let et=[];switch(tt){case"normal":et=[{element:it.item,newIndex:it.newIndex,oldIndex:it.oldIndex,parentElement:it.from}];break;case"swap":const ot=yi({element:it.item,oldIndex:it.oldIndex,newIndex:it.newIndex},N),ae=yi({element:it.swapItem,oldIndex:it.newIndex,newIndex:it.oldIndex},N);et=[ot,ae];break;case"multidrag":et=it.oldIndicies.map((tn,an)=>yi({element:tn.multiDragElement,oldIndex:tn.index,newIndex:it.newIndicies[an].index},N));break}return Se(et,Z)}function Vt(it,Z){const tt=zt(it,Z);return Lt(it,tt)}function zt(it,Z){const tt=[...Z];return it.concat().reverse().forEach(N=>tt.splice(N.oldIndex,1)),tt}function Lt(it,Z,tt,N){const et=[...Z];return it.forEach(_t=>{const St=N&&tt&&N(_t.item,tt);et.splice(_t.newIndex,0,St||_t.item)}),et}function Xt(it){return it.oldIndicies&&it.oldIndicies.length>0?"multidrag":it.swapItem?"swap":"normal"}function Se(it,Z){return it.map(N=>ea(yi({},N),{item:Z[N.oldIndex]})).sort((N,et)=>N.oldIndex-et.oldIndex)}function me(it){const Nr=it,{list:Z,setList:tt,children:N,tag:et,style:_t,className:St,clone:ot,onAdd:ae,onChange:tn,onChoose:an,onClone:Ce,onEnd:gn,onFilter:fi,onRemove:Hn,onSort:He,onStart:Ki,onUnchoose:fr,onUpdate:di,onMove:Ur,onSpill:ms,onSelect:Pi,onDeselect:eo}=Nr;return Qd(Nr,["list","setList","children","tag","style","className","clone","onAdd","onChange","onChoose","onClone","onEnd","onFilter","onRemove","onSort","onStart","onUnchoose","onUpdate","onMove","onSpill","onSelect","onDeselect"])}const he={dragging:null};class Ft extends Ne.Component{constructor(Z){super(Z),this.ref=(0,Ne.createRef)();const tt=[...Z.list].map(N=>Object.assign(N,{chosen:!1,selected:!1}));Z.setList(tt,this.sortable,he),gt(Ae)(!Z.plugins,`
Plugins prop is no longer supported.
Instead, mount it with "Sortable.mount(new MultiDrag())"
Please read the updated README.md at https://github.com/SortableJS/react-sortablejs.
      `)}componentDidMount(){if(this.ref.current===null)return;const Z=this.makeOptions();gt(W).create(this.ref.current,Z)}componentDidUpdate(Z){Z.disabled!==this.props.disabled&&this.sortable&&this.sortable.option("disabled",this.props.disabled)}render(){const{tag:Z,style:tt,className:N,id:et}=this.props,_t={style:tt,className:N,id:et},St=!Z||Z===null?"div":Z;return(0,Ne.createElement)(St,yi({ref:this.ref},_t),this.getChildren())}getChildren(){const{children:Z,dataIdAttr:tt,selectedClass:N="sortable-selected",chosenClass:et="sortable-chosen",dragClass:_t="sortable-drag",fallbackClass:St="sortable-falback",ghostClass:ot="sortable-ghost",swapClass:ae="sortable-swap-highlight",filter:tn="sortable-filter",list:an}=this.props;if(!Z||Z==null)return null;const Ce=tt||"data-id";return Ne.Children.map(Z,(gn,fi)=>{if(gn===void 0)return;const Hn=an[fi]||{},{className:He}=gn.props,Ki=typeof tn=="string"&&{[tn.replace(".","")]:!!Hn.filtered},fr=gt(pe)(He,yi({[N]:Hn.selected,[et]:Hn.chosen},Ki));return(0,Ne.cloneElement)(gn,{[Ce]:gn.key,className:fr})})}get sortable(){const Z=this.ref.current;if(Z===null)return null;const tt=Object.keys(Z).find(N=>N.includes("Sortable"));return tt?Z[tt]:null}makeOptions(){const Z=["onAdd","onChoose","onDeselect","onEnd","onRemove","onSelect","onSpill","onStart","onUnchoose","onUpdate"],tt=["onChange","onClone","onFilter","onSort"],N=me(this.props);Z.forEach(_t=>N[_t]=this.prepareOnHandlerPropAndDOM(_t)),tt.forEach(_t=>N[_t]=this.prepareOnHandlerProp(_t));const et=(_t,St)=>{const{onMove:ot}=this.props,ae=_t.willInsertAfter||-1;if(!ot)return ae;const tn=ot(_t,St,this.sortable,he);return typeof tn=="undefined"?!1:tn};return ea(yi({},N),{onMove:et})}prepareOnHandlerPropAndDOM(Z){return tt=>{this.callOnHandlerProp(tt,Z),this[Z](tt)}}prepareOnHandlerProp(Z){return tt=>{this.callOnHandlerProp(tt,Z)}}callOnHandlerProp(Z,tt){const N=this.props[tt];N&&N(Z,this.sortable,he)}onAdd(Z){const{list:tt,setList:N,clone:et}=this.props,_t=[...he.dragging.props.list],St=ie(Z,_t);Le(St);const ot=Lt(St,tt,Z,et).map(ae=>Object.assign(ae,{selected:!1}));N(ot,this.sortable,he)}onRemove(Z){const{list:tt,setList:N}=this.props,et=Xt(Z),_t=ie(Z,tt);ze(_t);let St=[...tt];if(Z.pullMode!=="clone")St=zt(_t,St);else{let ot=_t;switch(et){case"multidrag":ot=_t.map((ae,tn)=>ea(yi({},ae),{element:Z.clones[tn]}));break;case"normal":ot=_t.map(ae=>ea(yi({},ae),{element:Z.clone}));break;case"swap":default:gt(Ae)(!0,`mode "${et}" cannot clone. Please remove "props.clone" from <ReactSortable/> when using the "${et}" plugin`)}Le(ot),_t.forEach(ae=>{const tn=ae.oldIndex,an=this.props.clone(ae.item,Z);St.splice(tn,1,an)})}St=St.map(ot=>Object.assign(ot,{selected:!1})),N(St,this.sortable,he)}onUpdate(Z){const{list:tt,setList:N}=this.props,et=ie(Z,tt);Le(et),ze(et);const _t=Vt(et,tt);return N(_t,this.sortable,he)}onStart(){he.dragging=this}onEnd(){he.dragging=null}onChoose(Z){const{list:tt,setList:N}=this.props,et=tt.map((_t,St)=>{let ot=_t;return St===Z.oldIndex&&(ot=Object.assign(_t,{chosen:!0})),ot});N(et,this.sortable,he)}onUnchoose(Z){const{list:tt,setList:N}=this.props,et=tt.map((_t,St)=>{let ot=_t;return St===Z.oldIndex&&(ot=Object.assign(ot,{chosen:!1})),ot});N(et,this.sortable,he)}onSpill(Z){const{removeOnSpill:tt,revertOnSpill:N}=this.props;tt&&!N&&oe(Z.item)}onSelect(Z){const{list:tt,setList:N}=this.props,et=tt.map(_t=>Object.assign(_t,{selected:!1}));Z.newIndicies.forEach(_t=>{const St=_t.index;if(St===-1){console.log(`"${Z.type}" had indice of "${_t.index}", which is probably -1 and doesn't usually happen here.`),console.log(Z);return}et[St].selected=!0}),N(et,this.sortable,he)}onDeselect(Z){const{list:tt,setList:N}=this.props,et=tt.map(_t=>Object.assign(_t,{selected:!1}));Z.newIndicies.forEach(_t=>{const St=_t.index;St!==-1&&(et[St].selected=!0)}),N(et,this.sortable,he)}}tp(Ft,"defaultProps",{clone:Z=>Z});var Kt={};re(ve.exports,Kt)},64045:function(ve,ne){var Pt,W;(function(){"use strict";var pe={}.hasOwnProperty;function Ne(){for(var Ae=[],gt=0;gt<arguments.length;gt++){var kt=arguments[gt];if(kt){var re=typeof kt;if(re==="string"||re==="number")Ae.push(kt);else if(Array.isArray(kt)){if(kt.length){var oe=Ne.apply(null,kt);oe&&Ae.push(oe)}}else if(re==="object")if(kt.toString===Object.prototype.toString)for(var xe in kt)pe.call(kt,xe)&&kt[xe]&&Ae.push(xe);else Ae.push(kt.toString())}}return Ae.join(" ")}ve.exports?(Ne.default=Ne,ve.exports=Ne):(Pt=[],W=function(){return Ne}.apply(ne,Pt),W!==void 0&&(ve.exports=W))})()},51474:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{MultiDrag:function(){return xc},Sortable:function(){return le},Swap:function(){return Ya}});function W(E,v){var x=Object.keys(E);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(E);v&&(S=S.filter(function(D){return Object.getOwnPropertyDescriptor(E,D).enumerable})),x.push.apply(x,S)}return x}function pe(E){for(var v=1;v<arguments.length;v++){var x=arguments[v]!=null?arguments[v]:{};v%2?W(Object(x),!0).forEach(function(S){Ae(E,S,x[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(x)):W(Object(x)).forEach(function(S){Object.defineProperty(E,S,Object.getOwnPropertyDescriptor(x,S))})}return E}function Ne(E){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ne=function(v){return typeof v}:Ne=function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},Ne(E)}function Ae(E,v,x){return v in E?Object.defineProperty(E,v,{value:x,enumerable:!0,configurable:!0,writable:!0}):E[v]=x,E}function gt(){return gt=Object.assign||function(E){for(var v=1;v<arguments.length;v++){var x=arguments[v];for(var S in x)Object.prototype.hasOwnProperty.call(x,S)&&(E[S]=x[S])}return E},gt.apply(this,arguments)}function kt(E,v){if(E==null)return{};var x={},S=Object.keys(E),D,O;for(O=0;O<S.length;O++)D=S[O],!(v.indexOf(D)>=0)&&(x[D]=E[D]);return x}function re(E,v){if(E==null)return{};var x=kt(E,v),S,D;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(E);for(D=0;D<O.length;D++)S=O[D],!(v.indexOf(S)>=0)&&Object.prototype.propertyIsEnumerable.call(E,S)&&(x[S]=E[S])}return x}function oe(E){return xe(E)||de(E)||Le(E)||ie()}function xe(E){if(Array.isArray(E))return ze(E)}function de(E){if(typeof Symbol!="undefined"&&E[Symbol.iterator]!=null||E["@@iterator"]!=null)return Array.from(E)}function Le(E,v){if(E){if(typeof E=="string")return ze(E,v);var x=Object.prototype.toString.call(E).slice(8,-1);if(x==="Object"&&E.constructor&&(x=E.constructor.name),x==="Map"||x==="Set")return Array.from(E);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return ze(E,v)}}function ze(E,v){(v==null||v>E.length)&&(v=E.length);for(var x=0,S=new Array(v);x<v;x++)S[x]=E[x];return S}function ie(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vt="1.15.3";function zt(E){if(typeof window!="undefined"&&window.navigator)return!!navigator.userAgent.match(E)}var Lt=zt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Xt=zt(/Edge/i),Se=zt(/firefox/i),me=zt(/safari/i)&&!zt(/chrome/i)&&!zt(/android/i),he=zt(/iP(ad|od|hone)/i),Ft=zt(/chrome/i)&&zt(/android/i),Kt={capture:!1,passive:!1};function it(E,v,x){E.addEventListener(v,x,!Lt&&Kt)}function Z(E,v,x){E.removeEventListener(v,x,!Lt&&Kt)}function tt(E,v){if(v){if(v[0]===">"&&(v=v.substring(1)),E)try{if(E.matches)return E.matches(v);if(E.msMatchesSelector)return E.msMatchesSelector(v);if(E.webkitMatchesSelector)return E.webkitMatchesSelector(v)}catch(x){return!1}return!1}}function N(E){return E.host&&E!==document&&E.host.nodeType?E.host:E.parentNode}function et(E,v,x,S){if(E){x=x||document;do{if(v!=null&&(v[0]===">"?E.parentNode===x&&tt(E,v):tt(E,v))||S&&E===x)return E;if(E===x)break}while(E=N(E))}return null}var _t=/\s+/g;function St(E,v,x){if(E&&v)if(E.classList)E.classList[x?"add":"remove"](v);else{var S=(" "+E.className+" ").replace(_t," ").replace(" "+v+" "," ");E.className=(S+(x?" "+v:"")).replace(_t," ")}}function ot(E,v,x){var S=E&&E.style;if(S){if(x===void 0)return document.defaultView&&document.defaultView.getComputedStyle?x=document.defaultView.getComputedStyle(E,""):E.currentStyle&&(x=E.currentStyle),v===void 0?x:x[v];!(v in S)&&v.indexOf("webkit")===-1&&(v="-webkit-"+v),S[v]=x+(typeof x=="string"?"":"px")}}function ae(E,v){var x="";if(typeof E=="string")x=E;else do{var S=ot(E,"transform");S&&S!=="none"&&(x=S+" "+x)}while(!v&&(E=E.parentNode));var D=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return D&&new D(x)}function tn(E,v,x){if(E){var S=E.getElementsByTagName(v),D=0,O=S.length;if(x)for(;D<O;D++)x(S[D],D);return S}return[]}function an(){var E=document.scrollingElement;return E||document.documentElement}function Ce(E,v,x,S,D){if(!(!E.getBoundingClientRect&&E!==window)){var O,k,j,st,mt,vt,Ct;if(E!==window&&E.parentNode&&E!==an()?(O=E.getBoundingClientRect(),k=O.top,j=O.left,st=O.bottom,mt=O.right,vt=O.height,Ct=O.width):(k=0,j=0,st=window.innerHeight,mt=window.innerWidth,vt=window.innerHeight,Ct=window.innerWidth),(v||x)&&E!==window&&(D=D||E.parentNode,!Lt))do if(D&&D.getBoundingClientRect&&(ot(D,"transform")!=="none"||x&&ot(D,"position")!=="static")){var ce=D.getBoundingClientRect();k-=ce.top+parseInt(ot(D,"border-top-width")),j-=ce.left+parseInt(ot(D,"border-left-width")),st=k+O.height,mt=j+O.width;break}while(D=D.parentNode);if(S&&E!==window){var qe=ae(D||E),Ee=qe&&qe.a,$e=qe&&qe.d;qe&&(k/=$e,j/=Ee,Ct/=Ee,vt/=$e,st=k+vt,mt=j+Ct)}return{top:k,left:j,bottom:st,right:mt,width:Ct,height:vt}}}function gn(E,v,x){for(var S=di(E,!0),D=Ce(E)[v];S;){var O=Ce(S)[x],k=void 0;if(x==="top"||x==="left"?k=D>=O:k=D<=O,!k)return S;if(S===an())break;S=di(S,!1)}return!1}function fi(E,v,x,S){for(var D=0,O=0,k=E.children;O<k.length;){if(k[O].style.display!=="none"&&k[O]!==le.ghost&&(S||k[O]!==le.dragged)&&et(k[O],x.draggable,E,!1)){if(D===v)return k[O];D++}O++}return null}function Hn(E,v){for(var x=E.lastElementChild;x&&(x===le.ghost||ot(x,"display")==="none"||v&&!tt(x,v));)x=x.previousElementSibling;return x||null}function He(E,v){var x=0;if(!E||!E.parentNode)return-1;for(;E=E.previousElementSibling;)E.nodeName.toUpperCase()!=="TEMPLATE"&&E!==le.clone&&(!v||tt(E,v))&&x++;return x}function Ki(E){var v=0,x=0,S=an();if(E)do{var D=ae(E),O=D.a,k=D.d;v+=E.scrollLeft*O,x+=E.scrollTop*k}while(E!==S&&(E=E.parentNode));return[v,x]}function fr(E,v){for(var x in E)if(E.hasOwnProperty(x)){for(var S in v)if(v.hasOwnProperty(S)&&v[S]===E[x][S])return Number(x)}return-1}function di(E,v){if(!E||!E.getBoundingClientRect)return an();var x=E,S=!1;do if(x.clientWidth<x.scrollWidth||x.clientHeight<x.scrollHeight){var D=ot(x);if(x.clientWidth<x.scrollWidth&&(D.overflowX=="auto"||D.overflowX=="scroll")||x.clientHeight<x.scrollHeight&&(D.overflowY=="auto"||D.overflowY=="scroll")){if(!x.getBoundingClientRect||x===document.body)return an();if(S||v)return x;S=!0}}while(x=x.parentNode);return an()}function Ur(E,v){if(E&&v)for(var x in v)v.hasOwnProperty(x)&&(E[x]=v[x]);return E}function ms(E,v){return Math.round(E.top)===Math.round(v.top)&&Math.round(E.left)===Math.round(v.left)&&Math.round(E.height)===Math.round(v.height)&&Math.round(E.width)===Math.round(v.width)}var Pi;function eo(E,v){return function(){if(!Pi){var x=arguments,S=this;x.length===1?E.call(S,x[0]):E.apply(S,x),Pi=setTimeout(function(){Pi=void 0},v)}}}function na(){clearTimeout(Pi),Pi=void 0}function Nr(E,v,x){E.scrollLeft+=v,E.scrollTop+=x}function no(E){var v=window.Polymer,x=window.jQuery||window.Zepto;return v&&v.dom?v.dom(E).cloneNode(!0):x?x(E).clone(!0)[0]:E.cloneNode(!0)}function Or(E,v){ot(E,"position","absolute"),ot(E,"top",v.top),ot(E,"left",v.left),ot(E,"width",v.width),ot(E,"height",v.height)}function io(E){ot(E,"position",""),ot(E,"top",""),ot(E,"left",""),ot(E,"width",""),ot(E,"height","")}function ia(E,v,x){var S={};return Array.from(E.children).forEach(function(D){var O,k,j,st;if(!(!et(D,v.draggable,E,!1)||D.animated||D===x)){var mt=Ce(D);S.left=Math.min((O=S.left)!==null&&O!==void 0?O:1/0,mt.left),S.top=Math.min((k=S.top)!==null&&k!==void 0?k:1/0,mt.top),S.right=Math.max((j=S.right)!==null&&j!==void 0?j:-1/0,mt.right),S.bottom=Math.max((st=S.bottom)!==null&&st!==void 0?st:-1/0,mt.bottom)}}),S.width=S.right-S.left,S.height=S.bottom-S.top,S.x=S.left,S.y=S.top,S}var mn="Sortable"+new Date().getTime();function Ha(){var E=[],v;return{captureAnimationState:function(){if(E=[],!!this.options.animation){var S=[].slice.call(this.el.children);S.forEach(function(D){if(!(ot(D,"display")==="none"||D===le.ghost)){E.push({target:D,rect:Ce(D)});var O=pe({},E[E.length-1].rect);if(D.thisAnimationDuration){var k=ae(D,!0);k&&(O.top-=k.f,O.left-=k.e)}D.fromRect=O}})}},addAnimationState:function(S){E.push(S)},removeAnimationState:function(S){E.splice(fr(E,{target:S}),1)},animateAll:function(S){var D=this;if(!this.options.animation){clearTimeout(v),typeof S=="function"&&S();return}var O=!1,k=0;E.forEach(function(j){var st=0,mt=j.target,vt=mt.fromRect,Ct=Ce(mt),ce=mt.prevFromRect,qe=mt.prevToRect,Ee=j.rect,$e=ae(mt,!0);$e&&(Ct.top-=$e.f,Ct.left-=$e.e),mt.toRect=Ct,mt.thisAnimationDuration&&ms(ce,Ct)&&!ms(vt,Ct)&&(Ee.top-Ct.top)/(Ee.left-Ct.left)===(vt.top-Ct.top)/(vt.left-Ct.left)&&(st=Wa(Ee,ce,qe,D.options)),ms(Ct,vt)||(mt.prevFromRect=vt,mt.prevToRect=Ct,st||(st=D.options.animation),D.animate(mt,Ee,Ct,st)),st&&(O=!0,k=Math.max(k,st),clearTimeout(mt.animationResetTimer),mt.animationResetTimer=setTimeout(function(){mt.animationTime=0,mt.prevFromRect=null,mt.fromRect=null,mt.prevToRect=null,mt.thisAnimationDuration=null},st),mt.thisAnimationDuration=st)}),clearTimeout(v),O?v=setTimeout(function(){typeof S=="function"&&S()},k):typeof S=="function"&&S(),E=[]},animate:function(S,D,O,k){if(k){ot(S,"transition",""),ot(S,"transform","");var j=ae(this.el),st=j&&j.a,mt=j&&j.d,vt=(D.left-O.left)/(st||1),Ct=(D.top-O.top)/(mt||1);S.animatingX=!!vt,S.animatingY=!!Ct,ot(S,"transform","translate3d("+vt+"px,"+Ct+"px,0)"),this.forRepaintDummy=Ga(S),ot(S,"transition","transform "+k+"ms"+(this.options.easing?" "+this.options.easing:"")),ot(S,"transform","translate3d(0,0,0)"),typeof S.animated=="number"&&clearTimeout(S.animated),S.animated=setTimeout(function(){ot(S,"transition",""),ot(S,"transform",""),S.animated=!1,S.animatingX=!1,S.animatingY=!1},k)}}}}function Ga(E){return E.offsetWidth}function Wa(E,v,x,S){return Math.sqrt(Math.pow(v.top-E.top,2)+Math.pow(v.left-E.left,2))/Math.sqrt(Math.pow(v.top-x.top,2)+Math.pow(v.left-x.left,2))*S.animation}var dr=[],ro={initializeByDefault:!0},Fr={mount:function(v){for(var x in ro)ro.hasOwnProperty(x)&&!(x in v)&&(v[x]=ro[x]);dr.forEach(function(S){if(S.pluginName===v.pluginName)throw"Sortable: Cannot mount plugin ".concat(v.pluginName," more than once")}),dr.push(v)},pluginEvent:function(v,x,S){var D=this;this.eventCanceled=!1,S.cancel=function(){D.eventCanceled=!0};var O=v+"Global";dr.forEach(function(k){x[k.pluginName]&&(x[k.pluginName][O]&&x[k.pluginName][O](pe({sortable:x},S)),x.options[k.pluginName]&&x[k.pluginName][v]&&x[k.pluginName][v](pe({sortable:x},S)))})},initializePlugins:function(v,x,S,D){dr.forEach(function(j){var st=j.pluginName;if(!(!v.options[st]&&!j.initializeByDefault)){var mt=new j(v,x,v.options);mt.sortable=v,mt.options=v.options,v[st]=mt,gt(S,mt.defaults)}});for(var O in v.options)if(v.options.hasOwnProperty(O)){var k=this.modifyOption(v,O,v.options[O]);typeof k!="undefined"&&(v.options[O]=k)}},getEventProperties:function(v,x){var S={};return dr.forEach(function(D){typeof D.eventProperties=="function"&&gt(S,D.eventProperties.call(x[D.pluginName],v))}),S},modifyOption:function(v,x,S){var D;return dr.forEach(function(O){v[O.pluginName]&&O.optionListeners&&typeof O.optionListeners[x]=="function"&&(D=O.optionListeners[x].call(v[O.pluginName],S))}),D}};function Br(E){var v=E.sortable,x=E.rootEl,S=E.name,D=E.targetEl,O=E.cloneEl,k=E.toEl,j=E.fromEl,st=E.oldIndex,mt=E.newIndex,vt=E.oldDraggableIndex,Ct=E.newDraggableIndex,ce=E.originalEvent,qe=E.putSortable,Ee=E.extraEventProperties;if(v=v||x&&x[mn],!!v){var $e,bn=v.options,gi="on"+S.charAt(0).toUpperCase()+S.substr(1);window.CustomEvent&&!Lt&&!Xt?$e=new CustomEvent(S,{bubbles:!0,cancelable:!0}):($e=document.createEvent("Event"),$e.initEvent(S,!0,!0)),$e.to=k||x,$e.from=j||x,$e.item=D||x,$e.clone=O,$e.oldIndex=st,$e.newIndex=mt,$e.oldDraggableIndex=vt,$e.newDraggableIndex=Ct,$e.originalEvent=ce,$e.pullMode=qe?qe.lastPutMode:void 0;var Pn=pe(pe({},Ee),Fr.getEventProperties(S,v));for(var Jn in Pn)$e[Jn]=Pn[Jn];x&&x.dispatchEvent($e),bn[gi]&&bn[gi].call(v,$e)}}var ra=["evt"],Wn=function(v,x){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},D=S.evt,O=re(S,ra);Fr.pluginEvent.bind(le)(v,x,pe({dragEl:Mt,parentEl:rn,ghostEl:ye,rootEl:ln,nextEl:pi,lastDownEl:Ji,cloneEl:Ye,cloneHidden:mi,dragStarted:si,putSortable:We,activeSortable:le.active,originalEvent:D,oldIndex:_n,oldDraggableIndex:gs,newIndex:Xn,newDraggableIndex:ii,hideGhostForTarget:bs,unhideGhostForTarget:Hr,cloneNowHidden:function(){mi=!0},cloneNowShown:function(){mi=!1},dispatchSortableEvent:function(j){Dn({sortable:x,name:j,originalEvent:D})}},O))};function Dn(E){Br(pe({putSortable:We,cloneEl:Ye,targetEl:Mt,rootEl:ln,oldIndex:_n,oldDraggableIndex:gs,newIndex:Xn,newDraggableIndex:ii},E))}var Mt,rn,ye,ln,pi,Ji,Ye,mi,_n,Xn,gs,ii,so,We,Ii=!1,oo=!1,ri=[],pr,Mn,_s,vs,mr,xs,si,Rn,Di,ji=!1,gr=!1,Li,Ln,ys=[],Ms=!1,Un=[],zr=typeof document!="undefined",kr=he,Qi=Xt||Lt?"cssFloat":"float",_r=zr&&!Ft&&!he&&"draggable"in document.createElement("div"),Ss=function(){if(zr){if(Lt)return!1;var E=document.createElement("x");return E.style.cssText="pointer-events:auto",E.style.pointerEvents==="auto"}}(),Vr=function(v,x){var S=ot(v),D=parseInt(S.width)-parseInt(S.paddingLeft)-parseInt(S.paddingRight)-parseInt(S.borderLeftWidth)-parseInt(S.borderRightWidth),O=fi(v,0,x),k=fi(v,1,x),j=O&&ot(O),st=k&&ot(k),mt=j&&parseInt(j.marginLeft)+parseInt(j.marginRight)+Ce(O).width,vt=st&&parseInt(st.marginLeft)+parseInt(st.marginRight)+Ce(k).width;if(S.display==="flex")return S.flexDirection==="column"||S.flexDirection==="column-reverse"?"vertical":"horizontal";if(S.display==="grid")return S.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(O&&j.float&&j.float!=="none"){var Ct=j.float==="left"?"left":"right";return k&&(st.clear==="both"||st.clear===Ct)?"vertical":"horizontal"}return O&&(j.display==="block"||j.display==="flex"||j.display==="table"||j.display==="grid"||mt>=D&&S[Qi]==="none"||k&&S[Qi]==="none"&&mt+vt>D)?"vertical":"horizontal"},sa=function(v,x,S){var D=S?v.left:v.top,O=S?v.right:v.bottom,k=S?v.width:v.height,j=S?x.left:x.top,st=S?x.right:x.bottom,mt=S?x.width:x.height;return D===j||O===st||D+k/2===j+mt/2},ao=function(v,x){var S;return ri.some(function(D){var O=D[mn].options.emptyInsertThreshold;if(!(!O||Hn(D))){var k=Ce(D),j=v>=k.left-O&&v<=k.right+O,st=x>=k.top-O&&x<=k.bottom+O;if(j&&st)return S=D}}),S},Xa=function(v){function x(O,k){return function(j,st,mt,vt){var Ct=j.options.group.name&&st.options.group.name&&j.options.group.name===st.options.group.name;if(O==null&&(k||Ct))return!0;if(O==null||O===!1)return!1;if(k&&O==="clone")return O;if(typeof O=="function")return x(O(j,st,mt,vt),k)(j,st,mt,vt);var ce=(k?j:st).options.group.name;return O===!0||typeof O=="string"&&O===ce||O.join&&O.indexOf(ce)>-1}}var S={},D=v.group;(!D||Ne(D)!="object")&&(D={name:D}),S.name=D.name,S.checkPull=x(D.pull,!0),S.checkPut=x(D.put),S.revertClone=D.revertClone,v.group=S},bs=function(){!Ss&&ye&&ot(ye,"display","none")},Hr=function(){!Ss&&ye&&ot(ye,"display","")};zr&&!Ft&&document.addEventListener("click",function(E){if(oo)return E.preventDefault(),E.stopPropagation&&E.stopPropagation(),E.stopImmediatePropagation&&E.stopImmediatePropagation(),oo=!1,!1},!0);var Mi=function(v){if(Mt){v=v.touches?v.touches[0]:v;var x=ao(v.clientX,v.clientY);if(x){var S={};for(var D in v)v.hasOwnProperty(D)&&(S[D]=v[D]);S.target=S.rootEl=x,S.preventDefault=void 0,S.stopPropagation=void 0,x[mn]._onDragOver(S)}}},Es=function(v){Mt&&Mt.parentNode[mn]._isOutsideThisEl(v.target)};function le(E,v){if(!(E&&E.nodeType&&E.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(E));this.el=E,this.options=v=gt({},v),E[mn]=this;var x={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(E.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Vr(E,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(k,j){k.setData("Text",j.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:le.supportPointer!==!1&&"PointerEvent"in window&&!me,emptyInsertThreshold:5};Fr.initializePlugins(this,E,x);for(var S in x)!(S in v)&&(v[S]=x[S]);Xa(v);for(var D in this)D.charAt(0)==="_"&&typeof this[D]=="function"&&(this[D]=this[D].bind(this));this.nativeDraggable=v.forceFallback?!1:_r,this.nativeDraggable&&(this.options.touchStartThreshold=1),v.supportPointer?it(E,"pointerdown",this._onTapStart):(it(E,"mousedown",this._onTapStart),it(E,"touchstart",this._onTapStart)),this.nativeDraggable&&(it(E,"dragover",this),it(E,"dragenter",this)),ri.push(this.el),v.store&&v.store.get&&this.sort(v.store.get(this)||[]),gt(this,Ha())}le.prototype={constructor:le,_isOutsideThisEl:function(v){!this.el.contains(v)&&v!==this.el&&(Rn=null)},_getDirection:function(v,x){return typeof this.options.direction=="function"?this.options.direction.call(this,v,x,Mt):this.options.direction},_onTapStart:function(v){if(v.cancelable){var x=this,S=this.el,D=this.options,O=D.preventOnFilter,k=v.type,j=v.touches&&v.touches[0]||v.pointerType&&v.pointerType==="touch"&&v,st=(j||v).target,mt=v.target.shadowRoot&&(v.path&&v.path[0]||v.composedPath&&v.composedPath()[0])||st,vt=D.filter;if(go(S),!Mt&&!(/mousedown|pointerdown/.test(k)&&v.button!==0||D.disabled)&&!mt.isContentEditable&&!(!this.nativeDraggable&&me&&st&&st.tagName.toUpperCase()==="SELECT")&&(st=et(st,D.draggable,S,!1),!(st&&st.animated)&&Ji!==st)){if(_n=He(st),gs=He(st,D.draggable),typeof vt=="function"){if(vt.call(this,v,st,this)){Dn({sortable:x,rootEl:mt,name:"filter",targetEl:st,toEl:S,fromEl:S}),Wn("filter",x,{evt:v}),O&&v.cancelable&&v.preventDefault();return}}else if(vt&&(vt=vt.split(",").some(function(Ct){if(Ct=et(mt,Ct.trim(),S,!1),Ct)return Dn({sortable:x,rootEl:Ct,name:"filter",targetEl:st,fromEl:S,toEl:S}),Wn("filter",x,{evt:v}),!0}),vt)){O&&v.cancelable&&v.preventDefault();return}D.handle&&!et(mt,D.handle,S,!1)||this._prepareDragStart(v,j,st)}}},_prepareDragStart:function(v,x,S){var D=this,O=D.el,k=D.options,j=O.ownerDocument,st;if(S&&!Mt&&S.parentNode===O){var mt=Ce(S);if(ln=O,Mt=S,rn=Mt.parentNode,pi=Mt.nextSibling,Ji=S,so=k.group,le.dragged=Mt,pr={target:Mt,clientX:(x||v).clientX,clientY:(x||v).clientY},mr=pr.clientX-mt.left,xs=pr.clientY-mt.top,this._lastX=(x||v).clientX,this._lastY=(x||v).clientY,Mt.style["will-change"]="all",st=function(){if(Wn("delayEnded",D,{evt:v}),le.eventCanceled){D._onDrop();return}D._disableDelayedDragEvents(),!Se&&D.nativeDraggable&&(Mt.draggable=!0),D._triggerDragStart(v,x),Dn({sortable:D,name:"choose",originalEvent:v}),St(Mt,k.chosenClass,!0)},k.ignore.split(",").forEach(function(vt){tn(Mt,vt.trim(),Gr)}),it(j,"dragover",Mi),it(j,"mousemove",Mi),it(j,"touchmove",Mi),it(j,"mouseup",D._onDrop),it(j,"touchend",D._onDrop),it(j,"touchcancel",D._onDrop),Se&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Mt.draggable=!0),Wn("delayStart",this,{evt:v}),k.delay&&(!k.delayOnTouchOnly||x)&&(!this.nativeDraggable||!(Xt||Lt))){if(le.eventCanceled){this._onDrop();return}it(j,"mouseup",D._disableDelayedDrag),it(j,"touchend",D._disableDelayedDrag),it(j,"touchcancel",D._disableDelayedDrag),it(j,"mousemove",D._delayedDragTouchMoveHandler),it(j,"touchmove",D._delayedDragTouchMoveHandler),k.supportPointer&&it(j,"pointermove",D._delayedDragTouchMoveHandler),D._dragStartTimer=setTimeout(st,k.delay)}else st()}},_delayedDragTouchMoveHandler:function(v){var x=v.touches?v.touches[0]:v;Math.max(Math.abs(x.clientX-this._lastX),Math.abs(x.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Mt&&Gr(Mt),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var v=this.el.ownerDocument;Z(v,"mouseup",this._disableDelayedDrag),Z(v,"touchend",this._disableDelayedDrag),Z(v,"touchcancel",this._disableDelayedDrag),Z(v,"mousemove",this._delayedDragTouchMoveHandler),Z(v,"touchmove",this._delayedDragTouchMoveHandler),Z(v,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(v,x){x=x||v.pointerType=="touch"&&v,!this.nativeDraggable||x?this.options.supportPointer?it(document,"pointermove",this._onTouchMove):x?it(document,"touchmove",this._onTouchMove):it(document,"mousemove",this._onTouchMove):(it(Mt,"dragend",this),it(ln,"dragstart",this._onDragStart));try{document.selection?xr(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(S){}},_dragStarted:function(v,x){if(Ii=!1,ln&&Mt){Wn("dragStarted",this,{evt:x}),this.nativeDraggable&&it(document,"dragover",Es);var S=this.options;!v&&St(Mt,S.dragClass,!1),St(Mt,S.ghostClass,!0),le.active=this,v&&this._appendGhost(),Dn({sortable:this,name:"start",originalEvent:x})}else this._nulling()},_emulateDragOver:function(){if(Mn){this._lastX=Mn.clientX,this._lastY=Mn.clientY,bs();for(var v=document.elementFromPoint(Mn.clientX,Mn.clientY),x=v;v&&v.shadowRoot&&(v=v.shadowRoot.elementFromPoint(Mn.clientX,Mn.clientY),v!==x);)x=v;if(Mt.parentNode[mn]._isOutsideThisEl(v),x)do{if(x[mn]){var S=void 0;if(S=x[mn]._onDragOver({clientX:Mn.clientX,clientY:Mn.clientY,target:v,rootEl:x}),S&&!this.options.dragoverBubble)break}v=x}while(x=N(x));Hr()}},_onTouchMove:function(v){if(pr){var x=this.options,S=x.fallbackTolerance,D=x.fallbackOffset,O=v.touches?v.touches[0]:v,k=ye&&ae(ye,!0),j=ye&&k&&k.a,st=ye&&k&&k.d,mt=kr&&Ln&&Ki(Ln),vt=(O.clientX-pr.clientX+D.x)/(j||1)+(mt?mt[0]-ys[0]:0)/(j||1),Ct=(O.clientY-pr.clientY+D.y)/(st||1)+(mt?mt[1]-ys[1]:0)/(st||1);if(!le.active&&!Ii){if(S&&Math.max(Math.abs(O.clientX-this._lastX),Math.abs(O.clientY-this._lastY))<S)return;this._onDragStart(v,!0)}if(ye){k?(k.e+=vt-(_s||0),k.f+=Ct-(vs||0)):k={a:1,b:0,c:0,d:1,e:vt,f:Ct};var ce="matrix(".concat(k.a,",").concat(k.b,",").concat(k.c,",").concat(k.d,",").concat(k.e,",").concat(k.f,")");ot(ye,"webkitTransform",ce),ot(ye,"mozTransform",ce),ot(ye,"msTransform",ce),ot(ye,"transform",ce),_s=vt,vs=Ct,Mn=O}v.cancelable&&v.preventDefault()}},_appendGhost:function(){if(!ye){var v=this.options.fallbackOnBody?document.body:ln,x=Ce(Mt,!0,kr,!0,v),S=this.options;if(kr){for(Ln=v;ot(Ln,"position")==="static"&&ot(Ln,"transform")==="none"&&Ln!==document;)Ln=Ln.parentNode;Ln!==document.body&&Ln!==document.documentElement?(Ln===document&&(Ln=an()),x.top+=Ln.scrollTop,x.left+=Ln.scrollLeft):Ln=an(),ys=Ki(Ln)}ye=Mt.cloneNode(!0),St(ye,S.ghostClass,!1),St(ye,S.fallbackClass,!0),St(ye,S.dragClass,!0),ot(ye,"transition",""),ot(ye,"transform",""),ot(ye,"box-sizing","border-box"),ot(ye,"margin",0),ot(ye,"top",x.top),ot(ye,"left",x.left),ot(ye,"width",x.width),ot(ye,"height",x.height),ot(ye,"opacity","0.8"),ot(ye,"position",kr?"absolute":"fixed"),ot(ye,"zIndex","100000"),ot(ye,"pointerEvents","none"),le.ghost=ye,v.appendChild(ye),ot(ye,"transform-origin",mr/parseInt(ye.style.width)*100+"% "+xs/parseInt(ye.style.height)*100+"%")}},_onDragStart:function(v,x){var S=this,D=v.dataTransfer,O=S.options;if(Wn("dragStart",this,{evt:v}),le.eventCanceled){this._onDrop();return}Wn("setupClone",this),le.eventCanceled||(Ye=no(Mt),Ye.removeAttribute("id"),Ye.draggable=!1,Ye.style["will-change"]="",this._hideClone(),St(Ye,this.options.chosenClass,!1),le.clone=Ye),S.cloneId=xr(function(){Wn("clone",S),!le.eventCanceled&&(S.options.removeCloneOnHide||ln.insertBefore(Ye,Mt),S._hideClone(),Dn({sortable:S,name:"clone"}))}),!x&&St(Mt,O.dragClass,!0),x?(oo=!0,S._loopId=setInterval(S._emulateDragOver,50)):(Z(document,"mouseup",S._onDrop),Z(document,"touchend",S._onDrop),Z(document,"touchcancel",S._onDrop),D&&(D.effectAllowed="move",O.setData&&O.setData.call(S,D,Mt)),it(document,"drop",S),ot(Mt,"transform","translateZ(0)")),Ii=!0,S._dragStartId=xr(S._dragStarted.bind(S,x,v)),it(document,"selectstart",S),si=!0,me&&ot(document.body,"user-select","none")},_onDragOver:function(v){var x=this.el,S=v.target,D,O,k,j=this.options,st=j.group,mt=le.active,vt=so===st,Ct=j.sort,ce=We||mt,qe,Ee=this,$e=!1;if(Ms)return;function bn(Qr,$a){Wn(Qr,Ee,pe({evt:v,isOwner:vt,axis:qe?"vertical":"horizontal",revert:k,dragRect:D,targetRect:O,canSort:Ct,fromSortable:ce,target:S,completed:Pn,onMove:function(ts,Sc){return vr(ln,x,Mt,D,ts,Ce(ts),v,Sc)},changed:Jn},$a))}function gi(){bn("dragOverAnimationCapture"),Ee.captureAnimationState(),Ee!==ce&&ce.captureAnimationState()}function Pn(Qr){return bn("dragOverCompleted",{insertion:Qr}),Qr&&(vt?mt._hideClone():mt._showClone(Ee),Ee!==ce&&(St(Mt,We?We.options.ghostClass:mt.options.ghostClass,!1),St(Mt,j.ghostClass,!0)),We!==Ee&&Ee!==le.active?We=Ee:Ee===le.active&&We&&(We=null),ce===Ee&&(Ee._ignoreWhileAnimating=S),Ee.animateAll(function(){bn("dragOverAnimationComplete"),Ee._ignoreWhileAnimating=null}),Ee!==ce&&(ce.animateAll(),ce._ignoreWhileAnimating=null)),(S===Mt&&!Mt.animated||S===x&&!S.animated)&&(Rn=null),!j.dragoverBubble&&!v.rootEl&&S!==document&&(Mt.parentNode[mn]._isOutsideThisEl(v.target),!Qr&&Mi(v)),!j.dragoverBubble&&v.stopPropagation&&v.stopPropagation(),$e=!0}function Jn(){Xn=He(Mt),ii=He(Mt,j.draggable),Dn({sortable:Ee,name:"change",toEl:x,newIndex:Xn,newDraggableIndex:ii,originalEvent:v})}if(v.preventDefault!==void 0&&v.cancelable&&v.preventDefault(),S=et(S,j.draggable,x,!0),bn("dragOver"),le.eventCanceled)return $e;if(Mt.contains(v.target)||S.animated&&S.animatingX&&S.animatingY||Ee._ignoreWhileAnimating===S)return Pn(!1);if(oo=!1,mt&&!j.disabled&&(vt?Ct||(k=rn!==ln):We===this||(this.lastPutMode=so.checkPull(this,mt,Mt,v))&&st.checkPut(this,mt,Mt,v))){if(qe=this._getDirection(v,S)==="vertical",D=Ce(Mt),bn("dragOverValid"),le.eventCanceled)return $e;if(k)return rn=ln,gi(),this._hideClone(),bn("revert"),le.eventCanceled||(pi?ln.insertBefore(Mt,pi):ln.appendChild(Mt)),Pn(!0);var Ke=Hn(x,j.draggable);if(!Ke||ho(v,qe,this)&&!Ke.animated){if(Ke===Mt)return Pn(!1);if(Ke&&x===v.target&&(S=Ke),S&&(O=Ce(S)),vr(ln,x,Mt,D,S,O,v,!!S)!==!1)return gi(),Ke&&Ke.nextSibling?x.insertBefore(Mt,Ke.nextSibling):x.appendChild(Mt),rn=x,Jn(),Pn(!0)}else if(Ke&&uo(v,qe,this)){var Ni=fi(x,0,j,!0);if(Ni===Mt)return Pn(!1);if(S=Ni,O=Ce(S),vr(ln,x,Mt,D,S,O,v,!1)!==!1)return gi(),x.insertBefore(Mt,Ni),rn=x,Jn(),Pn(!0)}else if(S.parentNode===x){O=Ce(S);var Oi=0,Sr,As=Mt.parentNode!==x,oi=!sa(Mt.animated&&Mt.toRect||D,S.animated&&S.toRect||O,qe),Cs=qe?"top":"left",rr=gn(S,"top","top")||gn(Mt,"top","top"),br=rr?rr.scrollTop:void 0;Rn!==S&&(Sr=O[Cs],ji=!1,gr=!oi&&j.invertSwap||As),Oi=fo(v,S,O,qe,oi?1:j.swapThreshold,j.invertedSwapThreshold==null?j.swapThreshold:j.invertedSwapThreshold,gr,Rn===S);var Fi;if(Oi!==0){var sr=He(Mt);do sr-=Oi,Fi=rn.children[sr];while(Fi&&(ot(Fi,"display")==="none"||Fi===ye))}if(Oi===0||Fi===S)return Pn(!1);Rn=S,Di=Oi;var jr=S.nextElementSibling,Bi=!1;Bi=Oi===1;var Rs=vr(ln,x,Mt,D,S,O,v,Bi);if(Rs!==!1)return(Rs===1||Rs===-1)&&(Bi=Rs===1),Ms=!0,setTimeout(co,30),gi(),Bi&&!jr?x.appendChild(Mt):S.parentNode.insertBefore(Mt,Bi?jr:S),rr&&Nr(rr,0,br-rr.scrollTop),rn=Mt.parentNode,Sr!==void 0&&!gr&&(Li=Math.abs(Sr-Ce(S)[Cs])),Jn(),Pn(!0)}if(x.contains(Mt))return Pn(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Z(document,"mousemove",this._onTouchMove),Z(document,"touchmove",this._onTouchMove),Z(document,"pointermove",this._onTouchMove),Z(document,"dragover",Mi),Z(document,"mousemove",Mi),Z(document,"touchmove",Mi)},_offUpEvents:function(){var v=this.el.ownerDocument;Z(v,"mouseup",this._onDrop),Z(v,"touchend",this._onDrop),Z(v,"pointerup",this._onDrop),Z(v,"touchcancel",this._onDrop),Z(document,"selectstart",this)},_onDrop:function(v){var x=this.el,S=this.options;if(Xn=He(Mt),ii=He(Mt,S.draggable),Wn("drop",this,{evt:v}),rn=Mt&&Mt.parentNode,Xn=He(Mt),ii=He(Mt,S.draggable),le.eventCanceled){this._nulling();return}Ii=!1,gr=!1,ji=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Wr(this.cloneId),Wr(this._dragStartId),this.nativeDraggable&&(Z(document,"drop",this),Z(x,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),me&&ot(document.body,"user-select",""),ot(Mt,"transform",""),v&&(si&&(v.cancelable&&v.preventDefault(),!S.dropBubble&&v.stopPropagation()),ye&&ye.parentNode&&ye.parentNode.removeChild(ye),(ln===rn||We&&We.lastPutMode!=="clone")&&Ye&&Ye.parentNode&&Ye.parentNode.removeChild(Ye),Mt&&(this.nativeDraggable&&Z(Mt,"dragend",this),Gr(Mt),Mt.style["will-change"]="",si&&!Ii&&St(Mt,We?We.options.ghostClass:this.options.ghostClass,!1),St(Mt,this.options.chosenClass,!1),Dn({sortable:this,name:"unchoose",toEl:rn,newIndex:null,newDraggableIndex:null,originalEvent:v}),ln!==rn?(Xn>=0&&(Dn({rootEl:rn,name:"add",toEl:rn,fromEl:ln,originalEvent:v}),Dn({sortable:this,name:"remove",toEl:rn,originalEvent:v}),Dn({rootEl:rn,name:"sort",toEl:rn,fromEl:ln,originalEvent:v}),Dn({sortable:this,name:"sort",toEl:rn,originalEvent:v})),We&&We.save()):Xn!==_n&&Xn>=0&&(Dn({sortable:this,name:"update",toEl:rn,originalEvent:v}),Dn({sortable:this,name:"sort",toEl:rn,originalEvent:v})),le.active&&((Xn==null||Xn===-1)&&(Xn=_n,ii=gs),Dn({sortable:this,name:"end",toEl:rn,originalEvent:v}),this.save()))),this._nulling()},_nulling:function(){Wn("nulling",this),ln=Mt=rn=ye=pi=Ye=Ji=mi=pr=Mn=si=Xn=ii=_n=gs=Rn=Di=We=so=le.dragged=le.ghost=le.clone=le.active=null,Un.forEach(function(v){v.checked=!0}),Un.length=_s=vs=0},handleEvent:function(v){switch(v.type){case"drop":case"dragend":this._onDrop(v);break;case"dragenter":case"dragover":Mt&&(this._onDragOver(v),lo(v));break;case"selectstart":v.preventDefault();break}},toArray:function(){for(var v=[],x,S=this.el.children,D=0,O=S.length,k=this.options;D<O;D++)x=S[D],et(x,k.draggable,this.el,!1)&&v.push(x.getAttribute(k.dataIdAttr)||mo(x));return v},sort:function(v,x){var S={},D=this.el;this.toArray().forEach(function(O,k){var j=D.children[k];et(j,this.options.draggable,D,!1)&&(S[O]=j)},this),x&&this.captureAnimationState(),v.forEach(function(O){S[O]&&(D.removeChild(S[O]),D.appendChild(S[O]))}),x&&this.animateAll()},save:function(){var v=this.options.store;v&&v.set&&v.set(this)},closest:function(v,x){return et(v,x||this.options.draggable,this.el,!1)},option:function(v,x){var S=this.options;if(x===void 0)return S[v];var D=Fr.modifyOption(this,v,x);typeof D!="undefined"?S[v]=D:S[v]=x,v==="group"&&Xa(S)},destroy:function(){Wn("destroy",this);var v=this.el;v[mn]=null,Z(v,"mousedown",this._onTapStart),Z(v,"touchstart",this._onTapStart),Z(v,"pointerdown",this._onTapStart),this.nativeDraggable&&(Z(v,"dragover",this),Z(v,"dragenter",this)),Array.prototype.forEach.call(v.querySelectorAll("[draggable]"),function(x){x.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ri.splice(ri.indexOf(this.el),1),this.el=v=null},_hideClone:function(){if(!mi){if(Wn("hideClone",this),le.eventCanceled)return;ot(Ye,"display","none"),this.options.removeCloneOnHide&&Ye.parentNode&&Ye.parentNode.removeChild(Ye),mi=!0}},_showClone:function(v){if(v.lastPutMode!=="clone"){this._hideClone();return}if(mi){if(Wn("showClone",this),le.eventCanceled)return;Mt.parentNode==ln&&!this.options.group.revertClone?ln.insertBefore(Ye,Mt):pi?ln.insertBefore(Ye,pi):ln.appendChild(Ye),this.options.group.revertClone&&this.animate(Mt,Ye),ot(Ye,"display",""),mi=!1}}};function lo(E){E.dataTransfer&&(E.dataTransfer.dropEffect="move"),E.cancelable&&E.preventDefault()}function vr(E,v,x,S,D,O,k,j){var st,mt=E[mn],vt=mt.options.onMove,Ct;return window.CustomEvent&&!Lt&&!Xt?st=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(st=document.createEvent("Event"),st.initEvent("move",!0,!0)),st.to=v,st.from=E,st.dragged=x,st.draggedRect=S,st.related=D||v,st.relatedRect=O||Ce(v),st.willInsertAfter=j,st.originalEvent=k,E.dispatchEvent(st),vt&&(Ct=vt.call(mt,st,k)),Ct}function Gr(E){E.draggable=!1}function co(){Ms=!1}function uo(E,v,x){var S=Ce(fi(x.el,0,x.options,!0)),D=ia(x.el,x.options,ye),O=10;return v?E.clientX<D.left-O||E.clientY<S.top&&E.clientX<S.right:E.clientY<D.top-O||E.clientY<S.bottom&&E.clientX<S.left}function ho(E,v,x){var S=Ce(Hn(x.el,x.options.draggable)),D=ia(x.el,x.options,ye),O=10;return v?E.clientX>D.right+O||E.clientY>S.bottom&&E.clientX>S.left:E.clientY>D.bottom+O||E.clientX>S.right&&E.clientY>S.top}function fo(E,v,x,S,D,O,k,j){var st=S?E.clientY:E.clientX,mt=S?x.height:x.width,vt=S?x.top:x.left,Ct=S?x.bottom:x.right,ce=!1;if(!k){if(j&&Li<mt*D){if(!ji&&(Di===1?st>vt+mt*O/2:st<Ct-mt*O/2)&&(ji=!0),ji)ce=!0;else if(Di===1?st<vt+Li:st>Ct-Li)return-Di}else if(st>vt+mt*(1-D)/2&&st<Ct-mt*(1-D)/2)return po(v)}return ce=ce||k,ce&&(st<vt+mt*O/2||st>Ct-mt*O/2)?st>vt+mt/2?1:-1:0}function po(E){return He(Mt)<He(E)?1:-1}function mo(E){for(var v=E.tagName+E.className+E.src+E.href+E.textContent,x=v.length,S=0;x--;)S+=v.charCodeAt(x);return S.toString(36)}function go(E){Un.length=0;for(var v=E.getElementsByTagName("input"),x=v.length;x--;){var S=v[x];S.checked&&Un.push(S)}}function xr(E){return setTimeout(E,0)}function Wr(E){return clearTimeout(E)}zr&&it(document,"touchmove",function(E){(le.active||Ii)&&E.cancelable&&E.preventDefault()}),le.utils={on:it,off:Z,css:ot,find:tn,is:function(v,x){return!!et(v,x,v,!1)},extend:Ur,throttle:eo,closest:et,toggleClass:St,clone:no,index:He,nextTick:xr,cancelNextTick:Wr,detectDirection:Vr,getChild:fi,expando:mn},le.get=function(E){return E[mn]},le.mount=function(){for(var E=arguments.length,v=new Array(E),x=0;x<E;x++)v[x]=arguments[x];v[0].constructor===Array&&(v=v[0]),v.forEach(function(S){if(!S.prototype||!S.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(S));S.utils&&(le.utils=pe(pe({},le.utils),S.utils)),Fr.mount(S)})},le.create=function(E,v){return new le(E,v)},le.version=Vt;var vn=[],tr,Xr,Yr=!1,qr,$r,yr,er;function _o(){function E(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var v in this)v.charAt(0)==="_"&&typeof this[v]=="function"&&(this[v]=this[v].bind(this))}return E.prototype={dragStarted:function(x){var S=x.originalEvent;this.sortable.nativeDraggable?it(document,"dragover",this._handleAutoScroll):this.options.supportPointer?it(document,"pointermove",this._handleFallbackAutoScroll):S.touches?it(document,"touchmove",this._handleFallbackAutoScroll):it(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(x){var S=x.originalEvent;!this.options.dragOverBubble&&!S.rootEl&&this._handleAutoScroll(S)},drop:function(){this.sortable.nativeDraggable?Z(document,"dragover",this._handleAutoScroll):(Z(document,"pointermove",this._handleFallbackAutoScroll),Z(document,"touchmove",this._handleFallbackAutoScroll),Z(document,"mousemove",this._handleFallbackAutoScroll)),ws(),nr(),na()},nulling:function(){yr=Xr=tr=Yr=er=qr=$r=null,vn.length=0},_handleFallbackAutoScroll:function(x){this._handleAutoScroll(x,!0)},_handleAutoScroll:function(x,S){var D=this,O=(x.touches?x.touches[0]:x).clientX,k=(x.touches?x.touches[0]:x).clientY,j=document.elementFromPoint(O,k);if(yr=x,S||this.options.forceAutoScrollFallback||Xt||Lt||me){Zr(x,this.options,j,S);var st=di(j,!0);Yr&&(!er||O!==qr||k!==$r)&&(er&&ws(),er=setInterval(function(){var mt=di(document.elementFromPoint(O,k),!0);mt!==st&&(st=mt,nr()),Zr(x,D.options,mt,S)},10),qr=O,$r=k)}else{if(!this.options.bubbleScroll||di(j,!0)===an()){nr();return}Zr(x,this.options,di(j,!1),!1)}}},gt(E,{pluginName:"scroll",initializeByDefault:!0})}function nr(){vn.forEach(function(E){clearInterval(E.pid)}),vn=[]}function ws(){clearInterval(er)}var Zr=eo(function(E,v,x,S){if(v.scroll){var D=(E.touches?E.touches[0]:E).clientX,O=(E.touches?E.touches[0]:E).clientY,k=v.scrollSensitivity,j=v.scrollSpeed,st=an(),mt=!1,vt;Xr!==x&&(Xr=x,nr(),tr=v.scroll,vt=v.scrollFn,tr===!0&&(tr=di(x,!0)));var Ct=0,ce=tr;do{var qe=ce,Ee=Ce(qe),$e=Ee.top,bn=Ee.bottom,gi=Ee.left,Pn=Ee.right,Jn=Ee.width,Ke=Ee.height,Ni=void 0,Oi=void 0,Sr=qe.scrollWidth,As=qe.scrollHeight,oi=ot(qe),Cs=qe.scrollLeft,rr=qe.scrollTop;qe===st?(Ni=Jn<Sr&&(oi.overflowX==="auto"||oi.overflowX==="scroll"||oi.overflowX==="visible"),Oi=Ke<As&&(oi.overflowY==="auto"||oi.overflowY==="scroll"||oi.overflowY==="visible")):(Ni=Jn<Sr&&(oi.overflowX==="auto"||oi.overflowX==="scroll"),Oi=Ke<As&&(oi.overflowY==="auto"||oi.overflowY==="scroll"));var br=Ni&&(Math.abs(Pn-D)<=k&&Cs+Jn<Sr)-(Math.abs(gi-D)<=k&&!!Cs),Fi=Oi&&(Math.abs(bn-O)<=k&&rr+Ke<As)-(Math.abs($e-O)<=k&&!!rr);if(!vn[Ct])for(var sr=0;sr<=Ct;sr++)vn[sr]||(vn[sr]={});(vn[Ct].vx!=br||vn[Ct].vy!=Fi||vn[Ct].el!==qe)&&(vn[Ct].el=qe,vn[Ct].vx=br,vn[Ct].vy=Fi,clearInterval(vn[Ct].pid),(br!=0||Fi!=0)&&(mt=!0,vn[Ct].pid=setInterval(function(){S&&this.layer===0&&le.active._onTouchMove(yr);var jr=vn[this.layer].vy?vn[this.layer].vy*j:0,Bi=vn[this.layer].vx?vn[this.layer].vx*j:0;typeof vt=="function"&&vt.call(le.dragged.parentNode[mn],Bi,jr,E,yr,vn[this.layer].el)!=="continue"||Nr(vn[this.layer].el,Bi,jr)}.bind({layer:Ct}),24))),Ct++}while(v.bubbleScroll&&ce!==st&&(ce=di(ce,!1)));Yr=mt}},30),vo=function(v){var x=v.originalEvent,S=v.putSortable,D=v.dragEl,O=v.activeSortable,k=v.dispatchSortableEvent,j=v.hideGhostForTarget,st=v.unhideGhostForTarget;if(x){var mt=S||O;j();var vt=x.changedTouches&&x.changedTouches.length?x.changedTouches[0]:x,Ct=document.elementFromPoint(vt.clientX,vt.clientY);st(),mt&&!mt.el.contains(Ct)&&(k("spill"),this.onSpill({dragEl:D,putSortable:S}))}};function Kr(){}Kr.prototype={startIndex:null,dragStart:function(v){var x=v.oldDraggableIndex;this.startIndex=x},onSpill:function(v){var x=v.dragEl,S=v.putSortable;this.sortable.captureAnimationState(),S&&S.captureAnimationState();var D=fi(this.sortable.el,this.startIndex,this.options);D?this.sortable.el.insertBefore(x,D):this.sortable.el.appendChild(x),this.sortable.animateAll(),S&&S.animateAll()},drop:vo},gt(Kr,{pluginName:"revertOnSpill"});function Jr(){}Jr.prototype={onSpill:function(v){var x=v.dragEl,S=v.putSortable,D=S||this.sortable;D.captureAnimationState(),x.parentNode&&x.parentNode.removeChild(x),D.animateAll()},drop:vo},gt(Jr,{pluginName:"removeOnSpill"});var Yn;function Ya(){function E(){this.defaults={swapClass:"sortable-swap-highlight"}}return E.prototype={dragStart:function(x){var S=x.dragEl;Yn=S},dragOverValid:function(x){var S=x.completed,D=x.target,O=x.onMove,k=x.activeSortable,j=x.changed,st=x.cancel;if(k.options.swap){var mt=this.sortable.el,vt=this.options;if(D&&D!==mt){var Ct=Yn;O(D)!==!1?(St(D,vt.swapClass,!0),Yn=D):Yn=null,Ct&&Ct!==Yn&&St(Ct,vt.swapClass,!1)}j(),S(!0),st()}},drop:function(x){var S=x.activeSortable,D=x.putSortable,O=x.dragEl,k=D||this.sortable,j=this.options;Yn&&St(Yn,j.swapClass,!1),Yn&&(j.swap||D&&D.options.swap)&&O!==Yn&&(k.captureAnimationState(),k!==S&&S.captureAnimationState(),qa(O,Yn),k.animateAll(),k!==S&&S.animateAll())},nulling:function(){Yn=null}},gt(E,{pluginName:"swap",eventProperties:function(){return{swapItem:Yn}}})}function qa(E,v){var x=E.parentNode,S=v.parentNode,D,O;!x||!S||x.isEqualNode(v)||S.isEqualNode(E)||(D=He(E),O=He(v),x.isEqualNode(S)&&D<O&&O++,x.insertBefore(v,x.children[D]),S.insertBefore(E,S.children[O]))}var be=[],zn=[],ir,Kn,Si=!1,Sn=!1,Ui=!1,sn,Mr,xo;function xc(){function E(v){for(var x in this)x.charAt(0)==="_"&&typeof this[x]=="function"&&(this[x]=this[x].bind(this));v.options.avoidImplicitDeselect||(v.options.supportPointer?it(document,"pointerup",this._deselectMultiDrag):(it(document,"mouseup",this._deselectMultiDrag),it(document,"touchend",this._deselectMultiDrag))),it(document,"keydown",this._checkKeyDown),it(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,setData:function(D,O){var k="";be.length&&Kn===v?be.forEach(function(j,st){k+=(st?", ":"")+j.textContent}):k=O.textContent,D.setData("Text",k)}}}return E.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(x){var S=x.dragEl;sn=S},delayEnded:function(){this.isMultiDrag=~be.indexOf(sn)},setupClone:function(x){var S=x.sortable,D=x.cancel;if(this.isMultiDrag){for(var O=0;O<be.length;O++)zn.push(no(be[O])),zn[O].sortableIndex=be[O].sortableIndex,zn[O].draggable=!1,zn[O].style["will-change"]="",St(zn[O],this.options.selectedClass,!1),be[O]===sn&&St(zn[O],this.options.chosenClass,!1);S._hideClone(),D()}},clone:function(x){var S=x.sortable,D=x.rootEl,O=x.dispatchSortableEvent,k=x.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||be.length&&Kn===S&&(oa(!0,D),O("clone"),k()))},showClone:function(x){var S=x.cloneNowShown,D=x.rootEl,O=x.cancel;this.isMultiDrag&&(oa(!1,D),zn.forEach(function(k){ot(k,"display","")}),S(),xo=!1,O())},hideClone:function(x){var S=this,D=x.sortable,O=x.cloneNowHidden,k=x.cancel;this.isMultiDrag&&(zn.forEach(function(j){ot(j,"display","none"),S.options.removeCloneOnHide&&j.parentNode&&j.parentNode.removeChild(j)}),O(),xo=!0,k())},dragStartGlobal:function(x){var S=x.sortable;!this.isMultiDrag&&Kn&&Kn.multiDrag._deselectMultiDrag(),be.forEach(function(D){D.sortableIndex=He(D)}),be=be.sort(function(D,O){return D.sortableIndex-O.sortableIndex}),Ui=!0},dragStarted:function(x){var S=this,D=x.sortable;if(this.isMultiDrag){if(this.options.sort&&(D.captureAnimationState(),this.options.animation)){be.forEach(function(k){k!==sn&&ot(k,"position","absolute")});var O=Ce(sn,!1,!0,!0);be.forEach(function(k){k!==sn&&Or(k,O)}),Sn=!0,Si=!0}D.animateAll(function(){Sn=!1,Si=!1,S.options.animation&&be.forEach(function(k){io(k)}),S.options.sort&&Ts()})}},dragOver:function(x){var S=x.target,D=x.completed,O=x.cancel;Sn&&~be.indexOf(S)&&(D(!1),O())},revert:function(x){var S=x.fromSortable,D=x.rootEl,O=x.sortable,k=x.dragRect;be.length>1&&(be.forEach(function(j){O.addAnimationState({target:j,rect:Sn?Ce(j):k}),io(j),j.fromRect=k,S.removeAnimationState(j)}),Sn=!1,yc(!this.options.removeCloneOnHide,D))},dragOverCompleted:function(x){var S=x.sortable,D=x.isOwner,O=x.insertion,k=x.activeSortable,j=x.parentEl,st=x.putSortable,mt=this.options;if(O){if(D&&k._hideClone(),Si=!1,mt.animation&&be.length>1&&(Sn||!D&&!k.options.sort&&!st)){var vt=Ce(sn,!1,!0,!0);be.forEach(function(ce){ce!==sn&&(Or(ce,vt),j.appendChild(ce))}),Sn=!0}if(!D)if(Sn||Ts(),be.length>1){var Ct=xo;k._showClone(S),k.options.animation&&!xo&&Ct&&zn.forEach(function(ce){k.addAnimationState({target:ce,rect:Mr}),ce.fromRect=Mr,ce.thisAnimationDuration=null})}else k._showClone(S)}},dragOverAnimationCapture:function(x){var S=x.dragRect,D=x.isOwner,O=x.activeSortable;if(be.forEach(function(j){j.thisAnimationDuration=null}),O.options.animation&&!D&&O.multiDrag.isMultiDrag){Mr=gt({},S);var k=ae(sn,!0);Mr.top-=k.f,Mr.left-=k.e}},dragOverAnimationComplete:function(){Sn&&(Sn=!1,Ts())},drop:function(x){var S=x.originalEvent,D=x.rootEl,O=x.parentEl,k=x.sortable,j=x.dispatchSortableEvent,st=x.oldIndex,mt=x.putSortable,vt=mt||this.sortable;if(S){var Ct=this.options,ce=O.children;if(!Ui)if(Ct.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),St(sn,Ct.selectedClass,!~be.indexOf(sn)),~be.indexOf(sn))be.splice(be.indexOf(sn),1),ir=null,Br({sortable:k,rootEl:D,name:"deselect",targetEl:sn,originalEvent:S});else{if(be.push(sn),Br({sortable:k,rootEl:D,name:"select",targetEl:sn,originalEvent:S}),S.shiftKey&&ir&&k.el.contains(ir)){var qe=He(ir),Ee=He(sn);if(~qe&&~Ee&&qe!==Ee){var $e,bn;for(Ee>qe?(bn=qe,$e=Ee):(bn=Ee,$e=qe+1);bn<$e;bn++)~be.indexOf(ce[bn])||(St(ce[bn],Ct.selectedClass,!0),be.push(ce[bn]),Br({sortable:k,rootEl:D,name:"select",targetEl:ce[bn],originalEvent:S}))}}else ir=sn;Kn=vt}if(Ui&&this.isMultiDrag){if(Sn=!1,(O[mn].options.sort||O!==D)&&be.length>1){var gi=Ce(sn),Pn=He(sn,":not(."+this.options.selectedClass+")");if(!Si&&Ct.animation&&(sn.thisAnimationDuration=null),vt.captureAnimationState(),!Si&&(Ct.animation&&(sn.fromRect=gi,be.forEach(function(Ke){if(Ke.thisAnimationDuration=null,Ke!==sn){var Ni=Sn?Ce(Ke):gi;Ke.fromRect=Ni,vt.addAnimationState({target:Ke,rect:Ni})}})),Ts(),be.forEach(function(Ke){ce[Pn]?O.insertBefore(Ke,ce[Pn]):O.appendChild(Ke),Pn++}),st===He(sn))){var Jn=!1;be.forEach(function(Ke){if(Ke.sortableIndex!==He(Ke)){Jn=!0;return}}),Jn&&(j("update"),j("sort"))}be.forEach(function(Ke){io(Ke)}),vt.animateAll()}Kn=vt}(D===O||mt&&mt.lastPutMode!=="clone")&&zn.forEach(function(Ke){Ke.parentNode&&Ke.parentNode.removeChild(Ke)})}},nullingGlobal:function(){this.isMultiDrag=Ui=!1,zn.length=0},destroyGlobal:function(){this._deselectMultiDrag(),Z(document,"pointerup",this._deselectMultiDrag),Z(document,"mouseup",this._deselectMultiDrag),Z(document,"touchend",this._deselectMultiDrag),Z(document,"keydown",this._checkKeyDown),Z(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(x){if(!(typeof Ui!="undefined"&&Ui)&&Kn===this.sortable&&!(x&&et(x.target,this.options.draggable,this.sortable.el,!1))&&!(x&&x.button!==0))for(;be.length;){var S=be[0];St(S,this.options.selectedClass,!1),be.shift(),Br({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:S,originalEvent:x})}},_checkKeyDown:function(x){x.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(x){x.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},gt(E,{pluginName:"multiDrag",utils:{select:function(x){var S=x.parentNode[mn];!S||!S.options.multiDrag||~be.indexOf(x)||(Kn&&Kn!==S&&(Kn.multiDrag._deselectMultiDrag(),Kn=S),St(x,S.options.selectedClass,!0),be.push(x))},deselect:function(x){var S=x.parentNode[mn],D=be.indexOf(x);!S||!S.options.multiDrag||!~D||(St(x,S.options.selectedClass,!1),be.splice(D,1))}},eventProperties:function(){var x=this,S=[],D=[];return be.forEach(function(O){S.push({multiDragElement:O,index:O.sortableIndex});var k;Sn&&O!==sn?k=-1:Sn?k=He(O,":not(."+x.options.selectedClass+")"):k=He(O),D.push({multiDragElement:O,index:k})}),{items:oe(be),clones:[].concat(zn),oldIndicies:S,newIndicies:D}},optionListeners:{multiDragKey:function(x){return x=x.toLowerCase(),x==="ctrl"?x="Control":x.length>1&&(x=x.charAt(0).toUpperCase()+x.substr(1)),x}}})}function yc(E,v){be.forEach(function(x,S){var D=v.children[x.sortableIndex+(E?Number(S):0)];D?v.insertBefore(x,D):v.appendChild(x)})}function oa(E,v){zn.forEach(function(x,S){var D=v.children[x.sortableIndex+(E?Number(S):0)];D?v.insertBefore(x,D):v.appendChild(x)})}function Ts(){be.forEach(function(E){E!==sn&&E.parentNode&&E.parentNode.removeChild(E)})}le.mount(new _o),le.mount(Jr,Kr),ne.default=le},2177:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{default:function(){return Ne}});var W=!0,pe="Invariant failed";function Ne(Ae,gt){if(!Ae){if(W)throw new Error(pe);var kt=typeof gt=="function"?gt():gt,re=kt?pe+": "+kt:pe;throw new Error(re)}}},99477:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{ACESFilmicToneMapping:function(){return dr},AddEquation:function(){return Ft},AddOperation:function(){return ia},AdditiveAnimationBlendMode:function(){return Mr},AdditiveBlending:function(){return Xt},AgXToneMapping:function(){return Fr},AlphaFormat:function(){return ys},AlwaysCompare:function(){return Mc},AlwaysDepth:function(){return Ur},AlwaysStencilFunc:function(){return br},AmbientLight:function(){return md},AnimationAction:function(){return Id},AnimationClip:function(){return za},AnimationLoader:function(){return ex},AnimationMixer:function(){return Px},AnimationObjectGroup:function(){return Cx},AnimationUtils:function(){return Jv},ArcCurve:function(){return If},ArrayCamera:function(){return ef},ArrowHelper:function(){return jx},AttachedBindMode:function(){return ra},Audio:function(){return Cd},AudioAnalyser:function(){return vx},AudioContext:function(){return zu},AudioListener:function(){return mx},AudioLoader:function(){return fx},AxesHelper:function(){return Qx},BackSide:function(){return ie},BasicDepthPacking:function(){return oa},BasicShadowMap:function(){return oe},BatchedMesh:function(){return Sf},Bone:function(){return uu},BooleanKeyframeTrack:function(){return Ys},Box2:function(){return Bx},Box3:function(){return li},Box3Helper:function(){return Kx},BoxGeometry:function(){return Ns},BoxHelper:function(){return Zx},BufferAttribute:function(){return pn},BufferGeometry:function(){return Ve},BufferGeometryLoader:function(){return yd},ByteType:function(){return _s},Cache:function(){return Pr},Camera:function(){return pl},CameraHelper:function(){return $x},CanvasTexture:function(){return Mv},CapsuleGeometry:function(){return Wl},CatmullRomCurve3:function(){return Df},CineonToneMapping:function(){return Wa},CircleGeometry:function(){return Xl},ClampToEdgeWrapping:function(){return Ye},Clock:function(){return wd},Color:function(){return Ht},ColorKeyframeTrack:function(){return Lu},ColorManagement:function(){return en},CompressedArrayTexture:function(){return xv},CompressedCubeTexture:function(){return yv},CompressedTexture:function(){return kl},CompressedTextureLoader:function(){return nx},ConeGeometry:function(){return Yl},ConstantAlphaFactor:function(){return Ki},ConstantColorFactor:function(){return Hn},Controls:function(){return ey},CubeCamera:function(){return wh},CubeReflectionMapping:function(){return Mt},CubeRefractionMapping:function(){return rn},CubeTexture:function(){return ga},CubeTextureLoader:function(){return ix},CubeUVReflectionMapping:function(){return pi},CubicBezierCurve:function(){return Mu},CubicBezierCurve3:function(){return Uf},CubicInterpolant:function(){return rd},CullFaceBack:function(){return gt},CullFaceFront:function(){return kt},CullFaceFrontBack:function(){return re},CullFaceNone:function(){return Ae},Curve:function(){return qi},CurvePath:function(){return Of},CustomBlending:function(){return he},CustomToneMapping:function(){return ro},CylinderGeometry:function(){return jo},Cylindrical:function(){return Fx},Data3DTexture:function(){return Cc},DataArrayTexture:function(){return Za},DataTexture:function(){return lr},DataTextureLoader:function(){return rx},DataUtils:function(){return Hp},DecrementStencilOp:function(){return gi},DecrementWrapStencilOp:function(){return Jn},DefaultLoadingManager:function(){return ad},DepthFormat:function(){return Qi},DepthStencilFormat:function(){return _r},DepthTexture:function(){return Qc},DetachedBindMode:function(){return Wn},DirectionalLight:function(){return pd},DirectionalLightHelper:function(){return qx},DiscreteInterpolant:function(){return sd},DisplayP3ColorSpace:function(){return j},DodecahedronGeometry:function(){return ql},DoubleSide:function(){return Vt},DstAlphaFactor:function(){return tn},DstColorFactor:function(){return Ce},DynamicCopyUsage:function(){return op},DynamicDrawUsage:function(){return Sc},DynamicReadUsage:function(){return ip},EdgesGeometry:function(){return Ff},EllipseCurve:function(){return Vl},EqualCompare:function(){return jr},EqualDepth:function(){return eo},EqualStencilFunc:function(){return Sr},EquirectangularReflectionMapping:function(){return ye},EquirectangularRefractionMapping:function(){return ln},Euler:function(){return wi},EventDispatcher:function(){return ar},ExtrudeGeometry:function(){return tc},FileLoader:function(){return Dr},Float16BufferAttribute:function(){return $p},Float32BufferAttribute:function(){return Qt},FloatType:function(){return Rn},Fog:function(){return bl},FogExp2:function(){return Sl},FramebufferTexture:function(){return vv},FrontSide:function(){return ze},Frustum:function(){return _a},GLBufferAttribute:function(){return Ux},GLSL1:function(){return lp},GLSL3:function(){return bc},GreaterCompare:function(){return Rs},GreaterDepth:function(){return Nr},GreaterEqualCompare:function(){return $a},GreaterEqualDepth:function(){return na},GreaterEqualStencilFunc:function(){return rr},GreaterStencilFunc:function(){return oi},GridHelper:function(){return Xx},Group:function(){return Xo},HalfFloatType:function(){return Di},HemisphereLight:function(){return ld},HemisphereLightHelper:function(){return Wx},IcosahedronGeometry:function(){return ec},ImageBitmapLoader:function(){return hx},ImageLoader:function(){return ka},ImageUtils:function(){return rh},IncrementStencilOp:function(){return bn},IncrementWrapStencilOp:function(){return Pn},InstancedBufferAttribute:function(){return Ko},InstancedBufferGeometry:function(){return xd},InstancedInterleavedBuffer:function(){return Lx},InstancedMesh:function(){return xf},Int16BufferAttribute:function(){return Yp},Int32BufferAttribute:function(){return qp},Int8BufferAttribute:function(){return Gp},IntType:function(){return xs},InterleavedBuffer:function(){return El},InterleavedBufferAttribute:function(){return Vs},Interpolant:function(){return Na},InterpolateDiscrete:function(){return zn},InterpolateLinear:function(){return ir},InterpolateSmooth:function(){return Kn},InvertStencilOp:function(){return Ke},KeepStencilOp:function(){return Ee},KeyframeTrack:function(){return $i},LOD:function(){return cf},LatheGeometry:function(){return Ra},Layers:function(){return nl},LessCompare:function(){return sr},LessDepth:function(){return ms},LessEqualCompare:function(){return Bi},LessEqualDepth:function(){return Pi},LessEqualStencilFunc:function(){return As},LessStencilFunc:function(){return Oi},Light:function(){return fs},LightProbe:function(){return vd},Line:function(){return us},Line3:function(){return zx},LineBasicMaterial:function(){return hi},LineCurve:function(){return Su},LineCurve3:function(){return Nf},LineDashedMaterial:function(){return ed},LineLoop:function(){return Af},LineSegments:function(){return cr},LinearDisplayP3ColorSpace:function(){return st},LinearFilter:function(){return We},LinearInterpolant:function(){return Du},LinearMipMapLinearFilter:function(){return pr},LinearMipMapNearestFilter:function(){return oo},LinearMipmapLinearFilter:function(){return ri},LinearMipmapNearestFilter:function(){return Ii},LinearSRGBColorSpace:function(){return k},LinearToneMapping:function(){return Ha},LinearTransfer:function(){return mt},Loader:function(){return xi},LoaderUtils:function(){return Bu},LoadingManager:function(){return Uu},LoopOnce:function(){return Ya},LoopPingPong:function(){return be},LoopRepeat:function(){return qa},LuminanceAlphaFormat:function(){return kr},LuminanceFormat:function(){return zr},MOUSE:function(){return pe},Material:function(){return ei},MaterialLoader:function(){return lc},MathUtils:function(){return wp},Matrix2:function(){return Wu},Matrix3:function(){return Fe},Matrix4:function(){return Me},MaxEquation:function(){return tt},Mesh:function(){return On},MeshBasicMaterial:function(){return os},MeshDepthMaterial:function(){return nu},MeshDistanceMaterial:function(){return iu},MeshLambertMaterial:function(){return Qf},MeshMatcapMaterial:function(){return td},MeshNormalMaterial:function(){return jf},MeshPhongMaterial:function(){return Kf},MeshPhysicalMaterial:function(){return Zf},MeshStandardMaterial:function(){return Ru},MeshToonMaterial:function(){return Jf},MinEquation:function(){return Z},MirroredRepeatWrapping:function(){return mi},MixOperation:function(){return io},MultiplyBlending:function(){return me},MultiplyOperation:function(){return Or},NearestFilter:function(){return _n},NearestMipMapLinearFilter:function(){return so},NearestMipMapNearestFilter:function(){return gs},NearestMipmapLinearFilter:function(){return ii},NearestMipmapNearestFilter:function(){return Xn},NeutralToneMapping:function(){return Br},NeverCompare:function(){return Fi},NeverDepth:function(){return di},NeverStencilFunc:function(){return Ni},NoBlending:function(){return zt},NoColorSpace:function(){return D},NoToneMapping:function(){return mn},NormalAnimationBlendMode:function(){return sn},NormalBlending:function(){return Lt},NotEqualCompare:function(){return Qr},NotEqualDepth:function(){return no},NotEqualStencilFunc:function(){return Cs},NumberKeyframeTrack:function(){return Oa},Object3D:function(){return Je},ObjectLoader:function(){return cx},ObjectSpaceNormalMap:function(){return S},OctahedronGeometry:function(){return La},OneFactor:function(){return et},OneMinusConstantAlphaFactor:function(){return fr},OneMinusConstantColorFactor:function(){return He},OneMinusDstAlphaFactor:function(){return an},OneMinusDstColorFactor:function(){return gn},OneMinusSrcAlphaFactor:function(){return ae},OneMinusSrcColorFactor:function(){return St},OrthographicCamera:function(){return _l},P3Primaries:function(){return ce},PCFShadowMap:function(){return xe},PCFSoftShadowMap:function(){return de},PMREMGenerator:function(){return Jc},Path:function(){return Ca},PerspectiveCamera:function(){return qn},Plane:function(){return ls},PlaneGeometry:function(){return Vo},PlaneHelper:function(){return Jx},PointLight:function(){return dd},PointLightHelper:function(){return Hx},Points:function(){return Rf},PointsMaterial:function(){return mu},PolarGridHelper:function(){return Yx},PolyhedronGeometry:function(){return hs},PositionalAudio:function(){return _x},PropertyBinding:function(){return je},PropertyMixer:function(){return Pd},QuadraticBezierCurve:function(){return bu},QuadraticBezierCurve3:function(){return Eu},Quaternion:function(){return _i},QuaternionKeyframeTrack:function(){return Fa},QuaternionLinearInterpolant:function(){return od},RED_GREEN_RGTC2_Format:function(){return Jr},RED_RGTC1_Format:function(){return vo},REVISION:function(){return W},RGBADepthPacking:function(){return Ts},RGBAFormat:function(){return Un},RGBAIntegerFormat:function(){return bs},RGBA_ASTC_10x10_Format:function(){return yr},RGBA_ASTC_10x5_Format:function(){return Yr},RGBA_ASTC_10x6_Format:function(){return qr},RGBA_ASTC_10x8_Format:function(){return $r},RGBA_ASTC_12x10_Format:function(){return er},RGBA_ASTC_12x12_Format:function(){return _o},RGBA_ASTC_4x4_Format:function(){return po},RGBA_ASTC_5x4_Format:function(){return mo},RGBA_ASTC_5x5_Format:function(){return go},RGBA_ASTC_6x5_Format:function(){return xr},RGBA_ASTC_6x6_Format:function(){return Wr},RGBA_ASTC_8x5_Format:function(){return vn},RGBA_ASTC_8x6_Format:function(){return tr},RGBA_ASTC_8x8_Format:function(){return Xr},RGBA_BPTC_Format:function(){return nr},RGBA_ETC2_EAC_Format:function(){return fo},RGBA_PVRTC_2BPPV1_Format:function(){return co},RGBA_PVRTC_4BPPV1_Format:function(){return Gr},RGBA_S3TC_DXT1_Format:function(){return Mi},RGBA_S3TC_DXT3_Format:function(){return Es},RGBA_S3TC_DXT5_Format:function(){return le},RGBDepthPacking:function(){return E},RGBFormat:function(){return Ms},RGBIntegerFormat:function(){return Xa},RGB_BPTC_SIGNED_Format:function(){return ws},RGB_BPTC_UNSIGNED_Format:function(){return Zr},RGB_ETC1_Format:function(){return uo},RGB_ETC2_Format:function(){return ho},RGB_PVRTC_2BPPV1_Format:function(){return vr},RGB_PVRTC_4BPPV1_Format:function(){return lo},RGB_S3TC_DXT1_Format:function(){return Hr},RGDepthPacking:function(){return v},RGFormat:function(){return sa},RGIntegerFormat:function(){return ao},RawShaderMaterial:function(){return $f},Ray:function(){return Co},Raycaster:function(){return Nx},Rec709Primaries:function(){return Ct},RectAreaLight:function(){return gd},RedFormat:function(){return Ss},RedIntegerFormat:function(){return Vr},ReinhardToneMapping:function(){return Ga},RenderTarget:function(){return sh},RepeatWrapping:function(){return Ji},ReplaceStencilOp:function(){return $e},ReverseSubtractEquation:function(){return it},RingGeometry:function(){return nc},SIGNED_RED_GREEN_RGTC2_Format:function(){return Yn},SIGNED_RED_RGTC1_Format:function(){return Kr},SRGBColorSpace:function(){return O},SRGBTransfer:function(){return vt},Scene:function(){return nf},ShaderChunk:function(){return ke},ShaderLib:function(){return Yi},ShaderMaterial:function(){return Xi},ShadowMaterial:function(){return qf},Shape:function(){return Gs},ShapeGeometry:function(){return ic},ShapePath:function(){return ty},ShapeUtils:function(){return ur},ShortType:function(){return vs},Skeleton:function(){return Pl},SkeletonHelper:function(){return Vx},SkinnedMesh:function(){return mf},Source:function(){return Is},Sphere:function(){return Qn},SphereGeometry:function(){return Ua},Spherical:function(){return Ox},SphericalHarmonics3:function(){return _d},SplineCurve:function(){return wu},SpotLight:function(){return hd},SpotLightHelper:function(){return kx},Sprite:function(){return af},SpriteMaterial:function(){return ou},SrcAlphaFactor:function(){return ot},SrcAlphaSaturateFactor:function(){return fi},SrcColorFactor:function(){return _t},StaticCopyUsage:function(){return sp},StaticDrawUsage:function(){return ts},StaticReadUsage:function(){return np},StereoCamera:function(){return dx},StreamCopyUsage:function(){return ap},StreamDrawUsage:function(){return ep},StreamReadUsage:function(){return rp},StringKeyframeTrack:function(){return qs},SubtractEquation:function(){return Kt},SubtractiveBlending:function(){return Se},TOUCH:function(){return Ne},TangentSpaceNormalMap:function(){return x},TetrahedronGeometry:function(){return rc},Texture:function(){return wn},TextureLoader:function(){return sx},TextureUtils:function(){return K0},TorusGeometry:function(){return sc},TorusKnotGeometry:function(){return oc},Triangle:function(){return Ti},TriangleFanDrawMode:function(){return yc},TriangleStripDrawMode:function(){return xc},TrianglesDrawMode:function(){return xo},TubeGeometry:function(){return ac},UVMapping:function(){return Dn},Uint16BufferAttribute:function(){return Vc},Uint32BufferAttribute:function(){return Hc},Uint8BufferAttribute:function(){return Wp},Uint8ClampedBufferAttribute:function(){return Xp},Uniform:function(){return Hu},UniformsGroup:function(){return Dx},UniformsLib:function(){return It},UniformsUtils:function(){return Sh},UnsignedByteType:function(){return Mn},UnsignedInt248Type:function(){return Li},UnsignedInt5999Type:function(){return Ln},UnsignedIntType:function(){return si},UnsignedShort4444Type:function(){return ji},UnsignedShort5551Type:function(){return gr},UnsignedShortType:function(){return mr},VSMShadowMap:function(){return Le},Vector2:function(){return ut},Vector3:function(){return I},Vector4:function(){return cn},VectorKeyframeTrack:function(){return Ba},VideoTexture:function(){return _v},WebGL3DRenderTarget:function(){return Dp},WebGLArrayRenderTarget:function(){return Ip},WebGLCoordinateSystem:function(){return or},WebGLCubeRenderTarget:function(){return Th},WebGLMultipleRenderTargets:function(){return ny},WebGLRenderTarget:function(){return Vi},WebGLRenderer:function(){return ov},WebGLUtils:function(){return tf},WebGPUCoordinateSystem:function(){return aa},WireframeGeometry:function(){return Wf},WrapAroundEnding:function(){return Ui},ZeroCurvatureEnding:function(){return Si},ZeroFactor:function(){return N},ZeroSlopeEnding:function(){return Sn},ZeroStencilOp:function(){return qe},createCanvasElement:function(){return th}});const W="168",pe={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ne={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ae=0,gt=1,kt=2,re=3,oe=0,xe=1,de=2,Le=3,ze=0,ie=1,Vt=2,zt=0,Lt=1,Xt=2,Se=3,me=4,he=5,Ft=100,Kt=101,it=102,Z=103,tt=104,N=200,et=201,_t=202,St=203,ot=204,ae=205,tn=206,an=207,Ce=208,gn=209,fi=210,Hn=211,He=212,Ki=213,fr=214,di=0,Ur=1,ms=2,Pi=3,eo=4,na=5,Nr=6,no=7,Or=0,io=1,ia=2,mn=0,Ha=1,Ga=2,Wa=3,dr=4,ro=5,Fr=6,Br=7,ra="attached",Wn="detached",Dn=300,Mt=301,rn=302,ye=303,ln=304,pi=306,Ji=1e3,Ye=1001,mi=1002,_n=1003,Xn=1004,gs=1004,ii=1005,so=1005,We=1006,Ii=1007,oo=1007,ri=1008,pr=1008,Mn=1009,_s=1010,vs=1011,mr=1012,xs=1013,si=1014,Rn=1015,Di=1016,ji=1017,gr=1018,Li=1020,Ln=35902,ys=1021,Ms=1022,Un=1023,zr=1024,kr=1025,Qi=1026,_r=1027,Ss=1028,Vr=1029,sa=1030,ao=1031,Xa=1032,bs=1033,Hr=33776,Mi=33777,Es=33778,le=33779,lo=35840,vr=35841,Gr=35842,co=35843,uo=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,xr=37811,Wr=37812,vn=37813,tr=37814,Xr=37815,Yr=37816,qr=37817,$r=37818,yr=37819,er=37820,_o=37821,nr=36492,ws=36494,Zr=36495,vo=36283,Kr=36284,Jr=36285,Yn=36286,Ya=2200,qa=2201,be=2202,zn=2300,ir=2301,Kn=2302,Si=2400,Sn=2401,Ui=2402,sn=2500,Mr=2501,xo=0,xc=1,yc=2,oa=3200,Ts=3201,E=3202,v=3203,x=0,S=1,D="",O="srgb",k="srgb-linear",j="display-p3",st="display-p3-linear",mt="linear",vt="srgb",Ct="rec709",ce="p3",qe=0,Ee=7680,$e=7681,bn=7682,gi=7683,Pn=34055,Jn=34056,Ke=5386,Ni=512,Oi=513,Sr=514,As=515,oi=516,Cs=517,rr=518,br=519,Fi=512,sr=513,jr=514,Bi=515,Rs=516,Qr=517,$a=518,Mc=519,ts=35044,Sc=35048,ep=35040,np=35045,ip=35049,rp=35041,sp=35046,op=35050,ap=35042,lp="100",bc="300 es",or=2e3,aa=2001;class ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ju=1234567;const Ps=Math.PI/180,yo=180/Math.PI;function bi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]+"-"+jn[t&255]+jn[t>>8&255]+"-"+jn[t>>16&15|64]+jn[t>>24&255]+"-"+jn[e&63|128]+jn[e>>8&255]+"-"+jn[e>>16&255]+jn[e>>24&255]+jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]).toLowerCase()}function En(s,t,e){return Math.max(t,Math.min(e,s))}function Ec(s,t){return(s%t+t)%t}function cp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function up(s,t,e){return s!==t?(e-s)/(t-s):0}function la(s,t,e){return(1-e)*s+e*t}function hp(s,t,e,n){return la(s,t,1-Math.exp(-e*n))}function fp(s,t=1){return t-Math.abs(Ec(s,t*2)-t)}function dp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function pp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function mp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function gp(s,t){return s+Math.random()*(t-s)}function _p(s){return s*(.5-Math.random())}function vp(s){s!==void 0&&(ju=s);let t=ju+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xp(s){return s*Ps}function yp(s){return s*yo}function Mp(s){return(s&s-1)===0&&s!==0}function Sp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ep(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wp={DEG2RAD:Ps,RAD2DEG:yo,generateUUID:bi,clamp:En,euclideanModulo:Ec,mapLinear:cp,inverseLerp:up,lerp:la,damp:hp,pingpong:fp,smoothstep:dp,smootherstep:pp,randInt:mp,randFloat:gp,randFloatSpread:_p,seededRandom:vp,degToRad:xp,radToDeg:yp,isPowerOfTwo:Mp,ceilPowerOfTwo:Sp,floorPowerOfTwo:bp,setQuaternionFromProperEuler:Ep,normalize:Oe,denormalize:ai};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(t,e,n,i,r,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],M=i[1],y=i[4],b=i[7],F=i[2],R=i[5],L=i[8];return r[0]=o*_+a*M+l*F,r[3]=o*g+a*y+l*R,r[6]=o*p+a*b+l*L,r[1]=c*_+u*M+h*F,r[4]=c*g+u*y+h*R,r[7]=c*p+u*b+h*L,r[2]=f*_+d*M+m*F,r[5]=f*g+d*y+m*R,r[8]=f*p+d*b+m*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=e*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wc.makeScale(t,e)),this}rotate(t){return this.premultiply(wc.makeRotation(-t)),this}translate(t,e){return this.premultiply(wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Fe;function Qu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const Tp={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Mo(s,t){return new Tp[s](t)}function ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function th(){const s=ca("canvas");return s.style.display="block",s}const eh={};function So(s){s in eh||(eh[s]=!0,console.warn(s))}function Ap(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const nh=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ua={[k]:{transfer:mt,primaries:Ct,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[O]:{transfer:vt,primaries:Ct,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[st]:{transfer:mt,primaries:ce,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(ih),fromReference:s=>s.applyMatrix3(nh)},[j]:{transfer:vt,primaries:ce,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(ih),fromReference:s=>s.applyMatrix3(nh).convertLinearToSRGB()}},Cp=new Set([k,st]),en={enabled:!0,_workingColorSpace:k,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Cp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ua[t].toReference,i=ua[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ua[s].primaries},getTransfer:function(s){return s===D?mt:ua[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(ua[t].luminanceCoefficients)}};function bo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Tc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Eo;class rh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Eo===void 0&&(Eo=ca("canvas")),Eo.width=t.width,Eo.height=t.height;const n=Eo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Eo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bo(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bo(e[n]/255)*255):e[n]=bo(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rp=0;class Is{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ac(i[o].image)):r.push(Ac(i[o]))}else r=Ac(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ac(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?rh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pp=0;class wn extends ar{constructor(t=wn.DEFAULT_IMAGE,e=wn.DEFAULT_MAPPING,n=Ye,i=Ye,r=We,o=ri,a=Un,l=Mn,c=wn.DEFAULT_ANISOTROPY,u=D){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=bi(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dn)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ji:t.x=t.x-Math.floor(t.x);break;case Ye:t.x=t.x<0?0:1;break;case mi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ji:t.y=t.y-Math.floor(t.y);break;case Ye:t.y=t.y<0?0:1;break;case mi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null,wn.DEFAULT_MAPPING=Dn,wn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,e=0,n=0,i=1){cn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(d+1)/2,F=(p+1)/2,R=(u+f)/4,L=(h+_)/4,B=(m+g)/4;return y>b&&y>F?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=R/n,r=L/n):b>F?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=R/i,r=B/i):F<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(F),n=L/r,i=B/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sh extends ar{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new cn(0,0,t,e),this.scissorTest=!1,this.viewport=new cn(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Is(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends sh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Za extends wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ip extends Vi{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Za(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Cc extends wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dp extends Vi{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Cc(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class _i{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==m){let g=1-a;const p=l*f+c*d+u*m+h*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const F=Math.sqrt(y),R=Math.atan2(F,p*M);g=Math.sin(g*R)/F,a=Math.sin(a*R)/F}const b=a*M;if(l=l*g+f*b,c=c*g+d*b,u=u*g+m*b,h=h*g+_*b,g===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rc.copy(this).projectOnVector(t),this.sub(Rc)}reflect(t){return this.sub(Rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new I,oh=new _i;class li{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ka.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(t.matrixWorld),this.union(Ka)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ha),Ja.subVectors(this.max,ha),wo.subVectors(t.a,ha),To.subVectors(t.b,ha),Ao.subVectors(t.c,ha),es.subVectors(To,wo),ns.subVectors(Ao,To),Ds.subVectors(wo,Ao);let e=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Ds.z,Ds.y,es.z,0,-es.x,ns.z,0,-ns.x,Ds.z,0,-Ds.x,-es.y,es.x,0,-ns.y,ns.x,0,-Ds.y,Ds.x,0];return!Pc(e,wo,To,Ao,Ja)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,wo,To,Ao,Ja))?!1:(ja.crossVectors(es,ns),e=[ja.x,ja.y,ja.z],Pc(e,wo,To,Ao,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Er),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Er=[new I,new I,new I,new I,new I,new I,new I,new I],Hi=new I,Ka=new li,wo=new I,To=new I,Ao=new I,es=new I,ns=new I,Ds=new I,ha=new I,Ja=new I,ja=new I,Ls=new I;function Pc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ls.fromArray(s,r);const a=i.x*Math.abs(Ls.x)+i.y*Math.abs(Ls.y)+i.z*Math.abs(Ls.z),l=t.dot(Ls),c=e.dot(Ls),u=n.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lp=new li,fa=new I,Ic=new I;class Qn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fa.subVectors(t,this.center);const e=fa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fa.copy(t.center).add(Ic)),this.expandByPoint(fa.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new I,Dc=new I,Qa=new I,is=new I,Lc=new I,tl=new I,Uc=new I;class Co{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wr.copy(this.origin).addScaledVector(this.direction,e),wr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dc.copy(t).add(e).multiplyScalar(.5),Qa.copy(e).sub(t).normalize(),is.copy(this.origin).sub(Dc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qa),a=is.dot(this.direction),l=-is.dot(Qa),c=is.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Dc).addScaledVector(Qa,f),d}intersectSphere(t,e){wr.subVectors(t.center,this.origin);const n=wr.dot(this.direction),i=wr.dot(wr)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wr)!==null}intersectTriangle(t,e,n,i,r){Lc.subVectors(e,t),tl.subVectors(n,t),Uc.crossVectors(Lc,tl);let o=this.direction.dot(Uc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,t);const l=a*this.direction.dot(tl.crossVectors(is,tl));if(l<0)return null;const c=a*this.direction.dot(Lc.cross(is));if(c<0||l+c>o)return null;const u=-a*is.dot(Uc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,i,r,o,a,l,c,u,h,f,d,m,_,g){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,f,d,m,_,g)}set(t,e,n,i,r,o,a,l,c,u,h,f,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ro.setFromMatrixColumn(t,0).length(),r=1/Ro.setFromMatrixColumn(t,1).length(),o=1/Ro.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Up,t,Np)}lookAt(t,e,n){const i=this.elements;return Ei.subVectors(t,e),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),rs.crossVectors(n,Ei),rs.lengthSq()===0&&(Math.abs(n.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),rs.crossVectors(n,Ei)),rs.normalize(),el.crossVectors(Ei,rs),i[0]=rs.x,i[4]=el.x,i[8]=Ei.x,i[1]=rs.y,i[5]=el.y,i[9]=Ei.y,i[2]=rs.z,i[6]=el.z,i[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],y=n[7],b=n[11],F=n[15],R=i[0],L=i[4],B=i[8],A=i[12],T=i[1],z=i[5],K=i[9],Y=i[13],J=i[2],lt=i[6],Q=i[10],xt=i[14],nt=i[3],Bt=i[7],Yt=i[11],qt=i[15];return r[0]=o*R+a*T+l*J+c*nt,r[4]=o*L+a*z+l*lt+c*Bt,r[8]=o*B+a*K+l*Q+c*Yt,r[12]=o*A+a*Y+l*xt+c*qt,r[1]=u*R+h*T+f*J+d*nt,r[5]=u*L+h*z+f*lt+d*Bt,r[9]=u*B+h*K+f*Q+d*Yt,r[13]=u*A+h*Y+f*xt+d*qt,r[2]=m*R+_*T+g*J+p*nt,r[6]=m*L+_*z+g*lt+p*Bt,r[10]=m*B+_*K+g*Q+p*Yt,r[14]=m*A+_*Y+g*xt+p*qt,r[3]=M*R+y*T+b*J+F*nt,r[7]=M*L+y*z+b*lt+F*Bt,r[11]=M*B+y*K+b*Q+F*Yt,r[15]=M*A+y*Y+b*xt+F*qt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+g*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=h*g*c-_*f*c+_*l*d-a*g*d-h*l*p+a*f*p,y=m*f*c-u*g*c-m*l*d+o*g*d+u*l*p-o*f*p,b=u*_*c-m*h*c+m*a*d-o*_*d-u*a*p+o*h*p,F=m*h*l-u*_*l-m*a*f+o*_*f+u*a*g-o*h*g,R=e*M+n*y+i*b+r*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=M*L,t[1]=(_*f*r-h*g*r-_*i*d+n*g*d+h*i*p-n*f*p)*L,t[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*p+n*l*p)*L,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*L,t[4]=y*L,t[5]=(u*g*r-m*f*r+m*i*d-e*g*d-u*i*p+e*f*p)*L,t[6]=(m*l*r-o*g*r-m*i*c+e*g*c+o*i*p-e*l*p)*L,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*d+e*l*d)*L,t[8]=b*L,t[9]=(m*h*r-u*_*r-m*n*d+e*_*d+u*n*p-e*h*p)*L,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*p+e*a*p)*L,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*L,t[12]=F*L,t[13]=(u*_*i-m*h*i+m*n*f-e*_*f-u*n*g+e*h*g)*L,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*L,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,_=o*u,g=o*h,p=a*h,M=l*c,y=l*u,b=l*h,F=n.x,R=n.y,L=n.z;return i[0]=(1-(_+p))*F,i[1]=(d+b)*F,i[2]=(m-y)*F,i[3]=0,i[4]=(d-b)*R,i[5]=(1-(f+p))*R,i[6]=(g+M)*R,i[7]=0,i[8]=(m+y)*L,i[9]=(g-M)*L,i[10]=(1-(f+_))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ro.set(i[0],i[1],i[2]).length();const o=Ro.set(i[4],i[5],i[6]).length(),a=Ro.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Gi.copy(this);const c=1/r,u=1/o,h=1/a;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=u,Gi.elements[5]*=u,Gi.elements[6]*=u,Gi.elements[8]*=h,Gi.elements[9]*=h,Gi.elements[10]*=h,e.setFromRotationMatrix(Gi),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=or){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===or)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===aa)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=or){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),f=(e+t)*c,d=(n+i)*u;let m,_;if(a===or)m=(o+r)*h,_=-2*h;else if(a===aa)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ro=new I,Gi=new Me,Up=new I(0,0,0),Np=new I(1,1,1),rs=new I,el=new I,Ei=new I,ah=new Me,lh=new _i;class wi{constructor(t=0,e=0,n=0,i=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Op=0;const ch=new I,Po=new _i,Tr=new Me,il=new I,da=new I,Fp=new I,Bp=new _i,uh=new I(1,0,0),hh=new I(0,1,0),fh=new I(0,0,1),dh={type:"added"},zp={type:"removed"},Io={type:"childadded",child:null},Nc={type:"childremoved",child:null};class Je extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new I,e=new wi,n=new _i,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new Fe}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Po.setFromAxisAngle(t,e),this.quaternion.multiply(Po),this}rotateOnWorldAxis(t,e){return Po.setFromAxisAngle(t,e),this.quaternion.premultiply(Po),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?il.copy(t):il.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(da,il,this.up):Tr.lookAt(il,da,this.up),this.quaternion.setFromRotationMatrix(Tr),i&&(Tr.extractRotation(i.matrixWorld),Po.setFromRotationMatrix(Tr),this.quaternion.premultiply(Po.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),Io.child=t,this.dispatchEvent(Io),Io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zp),Nc.child=t,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),Io.child=t,this.dispatchEvent(Io),Io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Je.DEFAULT_UP=new I(0,1,0),Je.DEFAULT_MATRIX_AUTO_UPDATE=!0,Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new I,Ar=new I,Oc=new I,Cr=new I,Do=new I,Lo=new I,ph=new I,Fc=new I,Bc=new I,zc=new I;class Ti{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Wi.subVectors(t,e),i.cross(Wi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Wi.subVectors(i,e),Ar.subVectors(n,e),Oc.subVectors(t,e);const o=Wi.dot(Wi),a=Wi.dot(Ar),l=Wi.dot(Oc),c=Ar.dot(Ar),u=Ar.dot(Oc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cr.x),l.addScaledVector(o,Cr.y),l.addScaledVector(a,Cr.z),l)}static isFrontFacing(t,e,n,i){return Wi.subVectors(n,e),Ar.subVectors(t,e),Wi.cross(Ar).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Wi.cross(Ar).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ti.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Do.subVectors(i,n),Lo.subVectors(r,n),Fc.subVectors(t,n);const l=Do.dot(Fc),c=Lo.dot(Fc);if(l<=0&&c<=0)return e.copy(n);Bc.subVectors(t,i);const u=Do.dot(Bc),h=Lo.dot(Bc);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Do,o);zc.subVectors(t,r);const d=Do.dot(zc),m=Lo.dot(zc);if(m>=0&&d<=m)return e.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Lo,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return ph.subVectors(r,i),a=(h-u)/(h-u+(d-m)),e.copy(i).addScaledVector(ph,a);const p=1/(g+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Do,o).addScaledVector(Lo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},rl={h:0,s:0,l:0};function kc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=O){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,en.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=en.workingColorSpace){return this.r=t,this.g=e,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=en.workingColorSpace){if(t=Ec(t,1),e=En(e,0,1),n=En(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kc(o,r,t+1/3),this.g=kc(o,r,t),this.b=kc(o,r,t-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(t,e=O){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=O){const n=mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}copyLinearToSRGB(t){return this.r=Tc(t.r),this.g=Tc(t.g),this.b=Tc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=O){return en.fromWorkingColorSpace(ti.copy(this),t),Math.round(En(ti.r*255,0,255))*65536+Math.round(En(ti.g*255,0,255))*256+Math.round(En(ti.b*255,0,255))}getHexString(t=O){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=en.workingColorSpace){en.fromWorkingColorSpace(ti.copy(this),e);const n=ti.r,i=ti.g,r=ti.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=en.workingColorSpace){return en.fromWorkingColorSpace(ti.copy(this),e),t.r=ti.r,t.g=ti.g,t.b=ti.b,t}getStyle(t=O){en.fromWorkingColorSpace(ti.copy(this),t);const e=ti.r,n=ti.g,i=ti.b;return t!==O?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(rl);const n=la(ss.h,rl.h,e),i=la(ss.s,rl.s,e),r=la(ss.l,rl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Ht;Ht.NAMES=mh;let kp=0;class ei extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Lt,this.side=ze,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ot,this.blendDst=ae,this.blendEquation=Ft,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=br,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ee,this.stencilZFail=Ee,this.stencilZPass=Ee,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lt&&(n.blending=this.blending),this.side!==ze&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ot&&(n.blendSrc=this.blendSrc),this.blendDst!==ae&&(n.blendDst=this.blendDst),this.blendEquation!==Ft&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==br&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ee&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ee&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ee&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class os extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rr=Vp();function Vp(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function vi(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=En(s,-65504,65504),Rr.floatView[0]=s;const t=Rr.uint32View[0],e=t>>23&511;return Rr.baseTable[e]+((t&8388607)>>Rr.shiftTable[e])}function pa(s){const t=s>>10;return Rr.uint32View[0]=Rr.mantissaTable[Rr.offsetTable[t]+(s&1023)]+Rr.exponentTable[t],Rr.floatView[0]}const Hp={toHalfFloat:vi,fromHalfFloat:pa},Nn=new I,sl=new ut;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ts,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return So("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sl.fromBufferAttribute(this,e),sl.applyMatrix3(t),this.setXY(e,sl.x,sl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix3(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix4(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.applyNormalMatrix(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.transformDirection(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ts&&(t.usage=this.usage),t}}class Gp extends pn{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Wp extends pn{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Xp extends pn{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Yp extends pn{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Vc extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qp extends pn{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Hc extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $p extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=pa(this.array[t*this.itemSize]);return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=vi(e),this}getY(t){let e=pa(this.array[t*this.itemSize+1]);return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=vi(e),this}getZ(t){let e=pa(this.array[t*this.itemSize+2]);return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=vi(e),this}getW(t){let e=pa(this.array[t*this.itemSize+3]);return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=vi(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=vi(e),this.array[t+1]=vi(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=vi(e),this.array[t+1]=vi(n),this.array[t+2]=vi(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=vi(e),this.array[t+1]=vi(n),this.array[t+2]=vi(i),this.array[t+3]=vi(r),this}}class Qt extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zp=0;const zi=new Me,Gc=new Je,Uo=new I,Ai=new li,ma=new li,Gn=new I;class Ve extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?Hc:Vc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,e,n){return zi.makeTranslation(t,e,n),this.applyMatrix4(zi),this}scale(t,e,n){return zi.makeScale(t,e,n),this.applyMatrix4(zi),this}lookAt(t){return Gc.lookAt(t),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(Gn.addVectors(Ai.min,ma.min),Ai.expandByPoint(Gn),Gn.addVectors(Ai.max,ma.max),Ai.expandByPoint(Gn)):(Ai.expandByPoint(ma.min),Ai.expandByPoint(ma.max))}Ai.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Gn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Gn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gn.fromBufferAttribute(a,c),l&&(Uo.fromBufferAttribute(t,c),Gn.add(Uo)),i=Math.max(i,n.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new I,l[B]=new I;const c=new I,u=new I,h=new I,f=new ut,d=new ut,m=new ut,_=new I,g=new I;function p(B,A,T){c.fromBufferAttribute(n,B),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,T),f.fromBufferAttribute(r,B),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,T),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const z=1/(d.x*m.y-m.x*d.y);isFinite(z)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(z),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(z),a[B].add(_),a[A].add(_),a[T].add(_),l[B].add(g),l[A].add(g),l[T].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let B=0,A=M.length;B<A;++B){const T=M[B],z=T.start,K=T.count;for(let Y=z,J=z+K;Y<J;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const y=new I,b=new I,F=new I,R=new I;function L(B){F.fromBufferAttribute(i,B),R.copy(F);const A=a[B];y.copy(A),y.sub(F.multiplyScalar(F.dot(A))).normalize(),b.crossVectors(R,A);const z=b.dot(l[B])<0?-1:1;o.setXYZW(B,y.x,y.y,y.z,z)}for(let B=0,A=M.length;B<A;++B){const T=M[B],z=T.start,K=T.count;for(let Y=z,J=z+K;Y<J;Y+=3)L(t.getX(Y+0)),L(t.getX(Y+1)),L(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Gn.fromBufferAttribute(t,e),Gn.normalize(),t.setXYZ(e,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new Me,Us=new Co,ol=new Qn,_h=new I,No=new I,Oo=new I,Fo=new I,Wc=new I,al=new I,ll=new ut,cl=new ut,ul=new ut,vh=new I,xh=new I,yh=new I,hl=new I,fl=new I;class On extends Je{constructor(t=new Ve,e=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){al.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Wc.fromBufferAttribute(h,t),o?al.addScaledVector(Wc,u):al.addScaledVector(Wc.sub(e),u))}e.add(al)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(r),Us.copy(t.ray).recast(t.near),!(ol.containsPoint(Us.origin)===!1&&(Us.intersectSphere(ol,_h)===null||Us.origin.distanceToSquared(_h)>jd(t.far-t.near,2)))&&(gh.copy(r).invert(),Us.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Us)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=M,F=y;b<F;b+=3){const R=a.getX(b),L=a.getX(b+1),B=a.getX(b+2);i=dl(this,p,t,n,c,u,h,R,L,B),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const M=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);i=dl(this,o,t,n,c,u,h,M,y,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=M,F=y;b<F;b+=3){const R=b,L=b+1,B=b+2;i=dl(this,p,t,n,c,u,h,R,L,B),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const M=g,y=g+1,b=g+2;i=dl(this,o,t,n,c,u,h,M,y,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Kp(s,t,e,n,i,r,o,a){let l;if(t.side===ie?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ze,a),l===null)return null;fl.copy(a),fl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(fl);return c<e.near||c>e.far?null:{distance:c,point:fl.clone(),object:s}}function dl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,No),s.getVertexPosition(l,Oo),s.getVertexPosition(c,Fo);const u=Kp(s,t,e,n,No,Oo,Fo,hl);if(u){i&&(ll.fromBufferAttribute(i,a),cl.fromBufferAttribute(i,l),ul.fromBufferAttribute(i,c),u.uv=Ti.getInterpolation(hl,No,Oo,Fo,ll,cl,ul,new ut)),r&&(ll.fromBufferAttribute(r,a),cl.fromBufferAttribute(r,l),ul.fromBufferAttribute(r,c),u.uv1=Ti.getInterpolation(hl,No,Oo,Fo,ll,cl,ul,new ut)),o&&(vh.fromBufferAttribute(o,a),xh.fromBufferAttribute(o,l),yh.fromBufferAttribute(o,c),u.normal=Ti.getInterpolation(hl,No,Oo,Fo,vh,xh,yh,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Ti.getNormal(No,Oo,Fo,h.normal),u.face=h}return u}class Ns extends Ve{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function m(_,g,p,M,y,b,F,R,L,B,A){const T=b/L,z=F/B,K=b/2,Y=F/2,J=R/2,lt=L+1,Q=B+1;let xt=0,nt=0;const Bt=new I;for(let Yt=0;Yt<Q;Yt++){const qt=Yt*z-Y;for(let Ge=0;Ge<lt;Ge++){const on=Ge*T-K;Bt[_]=on*M,Bt[g]=qt*y,Bt[p]=J,c.push(Bt.x,Bt.y,Bt.z),Bt[_]=0,Bt[g]=0,Bt[p]=R>0?1:-1,u.push(Bt.x,Bt.y,Bt.z),h.push(Ge/L),h.push(1-Yt/B),xt+=1}}for(let Yt=0;Yt<B;Yt++)for(let qt=0;qt<L;qt++){const Ge=f+qt+lt*Yt,on=f+qt+lt*(Yt+1),rt=f+(qt+1)+lt*(Yt+1),bt=f+(qt+1)+lt*Yt;l.push(Ge,on,bt),l.push(on,rt,bt),nt+=6}a.addGroup(d,nt,A),d+=nt,f+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ci(s){const t={};for(let e=0;e<s.length;e++){const n=Bo(s[e]);for(const i in n)t[i]=n[i]}return t}function Jp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:en.workingColorSpace}const Sh={clone:Bo,merge:ci};var jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bo(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pl extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=or}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new I,bh=new ut,Eh=new ut;class qn extends pl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Eh),e.subVectors(Eh,bh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zo=-90,ko=1;class wh extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qn(zo,ko,t,e);i.layers=this.layers,this.add(i);const r=new qn(zo,ko,t,e);r.layers=this.layers,this.add(r);const o=new qn(zo,ko,t,e);o.layers=this.layers,this.add(o);const a=new qn(zo,ko,t,e);a.layers=this.layers,this.add(a);const l=new qn(zo,ko,t,e);l.layers=this.layers,this.add(l);const c=new qn(zo,ko,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===or)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ga extends wn{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Mt,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Th extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ga(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ns(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:Bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ie,blending:zt});r.uniforms.tEquirect.value=e;const o=new On(i,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=We),new wh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Xc=new I,tm=new I,em=new Fe;class ls{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xc.subVectors(n,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||em.getNormalMatrix(t),i=this.coplanarPoint(Xc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new Qn,ml=new I;class _a{constructor(t=new ls,e=new ls,n=new ls,i=new ls,r=new ls,o=new ls){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=or){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],_=i[10],g=i[11],p=i[12],M=i[13],y=i[14],b=i[15];if(n[0].setComponents(l-r,f-c,g-d,b-p).normalize(),n[1].setComponents(l+r,f+c,g+d,b+p).normalize(),n[2].setComponents(l+o,f+u,g+m,b+M).normalize(),n[3].setComponents(l-o,f-u,g-m,b-M).normalize(),n[4].setComponents(l-a,f-h,g-_,b-y).normalize(),e===or)n[5].setComponents(l+a,f+h,g+_,b+y).normalize();else if(e===aa)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ml.x=i.normal.x>0?t.max.x:t.min.x,ml.y=i.normal.y>0?t.max.y:t.min.y,ml.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ml)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ah(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function nm(s){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(s.bindBuffer(c,a),h.count===-1&&f.length===0&&s.bufferSubData(c,0,u),f.length!==0){for(let d=0,m=f.length;d<m;d++){const _=f[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Vo extends Ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const M=p*f-o;for(let y=0;y<c;y++){const b=y*h-r;m.push(b,-M,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,b=M+c*(p+1),F=M+1+c*(p+1),R=M+1+c*p;d.push(y,b,R),d.push(b,F,R)}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.widthSegments,t.heightSegments)}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ke={alphahash_fragment:im,alphahash_pars_fragment:rm,alphamap_fragment:sm,alphamap_pars_fragment:om,alphatest_fragment:am,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:um,batching_pars_vertex:hm,batching_vertex:fm,begin_vertex:dm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:vm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:Em,color_vertex:wm,common:Tm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Pm,emissivemap_fragment:Im,emissivemap_pars_fragment:Dm,colorspace_fragment:Lm,colorspace_pars_fragment:Um,envmap_fragment:Nm,envmap_common_pars_fragment:Om,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Zm,envmap_vertex:zm,fog_vertex:km,fog_pars_vertex:Vm,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:qm,lights_pars_begin:$m,lights_toon_fragment:Km,lights_toon_pars_fragment:Jm,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:tg,lights_physical_pars_fragment:eg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:rg,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:ug,map_particle_fragment:hg,map_particle_pars_fragment:fg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:xg,normal_fragment_begin:yg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:Eg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Rg,opaque_fragment:Pg,packing:Ig,premultiplied_alpha_fragment:Dg,project_vertex:Lg,dithering_fragment:Ug,dithering_pars_fragment:Ng,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Vg,skinbase_vertex:Hg,skinning_pars_vertex:Gg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:Yg,specularmap_pars_fragment:qg,tonemapping_fragment:$g,tonemapping_pars_fragment:Zg,transmission_fragment:Kg,transmission_pars_fragment:Jg,uv_pars_fragment:jg,uv_pars_vertex:Qg,uv_vertex:t_,worldpos_vertex:e_,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},It={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Yi={basic:{uniforms:ci([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:ci([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:ci([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:ci([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:ci([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:ci([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:ci([It.points,It.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:ci([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:ci([It.common,It.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:ci([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:ci([It.sprite,It.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:ci([It.common,It.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:ci([It.lights,It.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yi.physical={uniforms:ci([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const gl={r:0,b:0,g:0},Fs=new wi,n_=new Me;function i_(s,t,e,n,i,r,o){const a=new Ht(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const b=m(M);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){const b=m(y);b&&(b.isCubeTexture||b.mapping===pi)?(u===void 0&&(u=new On(new Ns(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Bo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Fs.copy(y.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n_.makeRotationFromEuler(Fs)),u.material.toneMapped=en.getTransfer(b.colorSpace)!==vt,(h!==b||f!==b.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new On(new Vo(2,2),new Xi({name:"BackgroundMaterial",uniforms:Bo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=en.getTransfer(b.colorSpace)!==vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(gl,Mh(s)),n.buffers.color.setClear(gl.r,gl.g,gl.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:g}}function r_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(T,z,K,Y,J){let lt=!1;const Q=h(Y,K,z);r!==Q&&(r=Q,c(r.object)),lt=d(T,Y,K,J),lt&&m(T,Y,K,J),J!==null&&t.update(J,s.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,b(T,z,K,Y),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return s.createVertexArray()}function c(T){return s.bindVertexArray(T)}function u(T){return s.deleteVertexArray(T)}function h(T,z,K){const Y=K.wireframe===!0;let J=n[T.id];J===void 0&&(J={},n[T.id]=J);let lt=J[z.id];lt===void 0&&(lt={},J[z.id]=lt);let Q=lt[Y];return Q===void 0&&(Q=f(l()),lt[Y]=Q),Q}function f(T){const z=[],K=[],Y=[];for(let J=0;J<e;J++)z[J]=0,K[J]=0,Y[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:Y,object:T,attributes:{},index:null}}function d(T,z,K,Y){const J=r.attributes,lt=z.attributes;let Q=0;const xt=K.getAttributes();for(const nt in xt)if(xt[nt].location>=0){const Yt=J[nt];let qt=lt[nt];if(qt===void 0&&(nt==="instanceMatrix"&&T.instanceMatrix&&(qt=T.instanceMatrix),nt==="instanceColor"&&T.instanceColor&&(qt=T.instanceColor)),Yt===void 0||Yt.attribute!==qt||qt&&Yt.data!==qt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==Y}function m(T,z,K,Y){const J={},lt=z.attributes;let Q=0;const xt=K.getAttributes();for(const nt in xt)if(xt[nt].location>=0){let Yt=lt[nt];Yt===void 0&&(nt==="instanceMatrix"&&T.instanceMatrix&&(Yt=T.instanceMatrix),nt==="instanceColor"&&T.instanceColor&&(Yt=T.instanceColor));const qt={};qt.attribute=Yt,Yt&&Yt.data&&(qt.data=Yt.data),J[nt]=qt,Q++}r.attributes=J,r.attributesNum=Q,r.index=Y}function _(){const T=r.newAttributes;for(let z=0,K=T.length;z<K;z++)T[z]=0}function g(T){p(T,0)}function p(T,z){const K=r.newAttributes,Y=r.enabledAttributes,J=r.attributeDivisors;K[T]=1,Y[T]===0&&(s.enableVertexAttribArray(T),Y[T]=1),J[T]!==z&&(s.vertexAttribDivisor(T,z),J[T]=z)}function M(){const T=r.newAttributes,z=r.enabledAttributes;for(let K=0,Y=z.length;K<Y;K++)z[K]!==T[K]&&(s.disableVertexAttribArray(K),z[K]=0)}function y(T,z,K,Y,J,lt,Q){Q===!0?s.vertexAttribIPointer(T,z,K,J,lt):s.vertexAttribPointer(T,z,K,Y,J,lt)}function b(T,z,K,Y){_();const J=Y.attributes,lt=K.getAttributes(),Q=z.defaultAttributeValues;for(const xt in lt){const nt=lt[xt];if(nt.location>=0){let Bt=J[xt];if(Bt===void 0&&(xt==="instanceMatrix"&&T.instanceMatrix&&(Bt=T.instanceMatrix),xt==="instanceColor"&&T.instanceColor&&(Bt=T.instanceColor)),Bt!==void 0){const Yt=Bt.normalized,qt=Bt.itemSize,Ge=t.get(Bt);if(Ge===void 0)continue;const on=Ge.buffer,rt=Ge.type,bt=Ge.bytesPerElement,Jt=rt===s.INT||rt===s.UNSIGNED_INT||Bt.gpuType===xs;if(Bt.isInterleavedBufferAttribute){const Ut=Bt.data,ge=Ut.stride,De=Bt.offset;if(Ut.isInstancedInterleavedBuffer){for(let Re=0;Re<nt.locationSize;Re++)p(nt.location+Re,Ut.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Re=0;Re<nt.locationSize;Re++)g(nt.location+Re);s.bindBuffer(s.ARRAY_BUFFER,on);for(let Re=0;Re<nt.locationSize;Re++)y(nt.location+Re,qt/nt.locationSize,rt,Yt,ge*bt,(De+qt/nt.locationSize*Re)*bt,Jt)}else{if(Bt.isInstancedBufferAttribute){for(let Ut=0;Ut<nt.locationSize;Ut++)p(nt.location+Ut,Bt.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let Ut=0;Ut<nt.locationSize;Ut++)g(nt.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,on);for(let Ut=0;Ut<nt.locationSize;Ut++)y(nt.location+Ut,qt/nt.locationSize,rt,Yt,qt*bt,qt/nt.locationSize*Ut*bt,Jt)}}else if(Q!==void 0){const Yt=Q[xt];if(Yt!==void 0)switch(Yt.length){case 2:s.vertexAttrib2fv(nt.location,Yt);break;case 3:s.vertexAttrib3fv(nt.location,Yt);break;case 4:s.vertexAttrib4fv(nt.location,Yt);break;default:s.vertexAttrib1fv(nt.location,Yt)}}}}M()}function F(){B();for(const T in n){const z=n[T];for(const K in z){const Y=z[K];for(const J in Y)u(Y[J].object),delete Y[J];delete z[K]}delete n[T]}}function R(T){if(n[T.id]===void 0)return;const z=n[T.id];for(const K in z){const Y=z[K];for(const J in Y)u(Y[J].object),delete Y[J];delete z[K]}delete n[T.id]}function L(T){for(const z in n){const K=n[z];if(K[T.id]===void 0)continue;const Y=K[T.id];for(const J in Y)u(Y[J].object),delete Y[J];delete K[T.id]}}function B(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function s_(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];for(let _=0;_<f.length;_++)e.update(m,n,f[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Un&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Mn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Rn&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:b,maxSamples:F}}function a_(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ls,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{const M=r?0:n,y=M*4;let b=p.clippingState||null;l.value=b,b=u(m,f,y,d);for(let F=0;F!==y;++F)b[F]=e[F];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,b=d;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function l_(s){let t=new WeakMap;function e(o,a){return a===ye?o.mapping=Mt:a===ln&&(o.mapping=rn),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ye||a===ln)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Th(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class _l extends pl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ho=4,Ch=[.125,.215,.35,.446,.526,.582],Bs=20,Yc=new _l,Rh=new Ht;let qc=null,$c=0,Zc=0,Kc=!1;const zs=(1+Math.sqrt(5))/2,Go=1/zs,Ph=[new I(-zs,Go,0),new I(zs,Go,0),new I(-Go,0,zs),new I(Go,0,zs),new I(0,zs,-Go),new I(0,zs,Go),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Jc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qc,$c,Zc),this._renderer.xr.enabled=Kc,t.scissorTest=!1,vl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mt||t.mapping===rn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Di,format:Un,colorSpace:k,depthBuffer:!1},i=Ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c_(r)),this._blurMaterial=u_(r,t,e)}return i}_compileMaterial(t){const e=new On(this._lodPlanes[0],t);this._renderer.compile(e,Yc)}_sceneToCubeUV(t,e,n,i){const a=new qn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rh),u.toneMapping=mn,u.autoClear=!1;const d=new os({name:"PMREM.Background",side:ie,depthWrite:!1,depthTest:!1}),m=new On(new Ns,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Rh),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;vl(i,M*y,p>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Mt||t.mapping===rn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new On(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;vl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Yc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ph[(i-r-1)%Ph.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new On(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Bs-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Bs;g>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bs}`);const p=[];let M=0;for(let L=0;L<Bs;++L){const B=L/_,A=Math.exp(-B*B/2);p.push(A),L===0?M+=A:L<g&&(M+=2*A)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const b=this._sizeLods[i],F=3*b*(i>y-Ho?i-y+Ho:0),R=4*(this._cubeSize-b);vl(e,F,R,3*b,2*b),l.setRenderTarget(e),l.render(h,Yc)}}function c_(s){const t=[],e=[],n=[];let i=s;const r=s-Ho+1+Ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ho?l=Ch[o-s+Ho-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*d),y=new Float32Array(g*m*d),b=new Float32Array(p*m*d);for(let R=0;R<d;R++){const L=R%3*2/3-1,B=R>2?0:-1,A=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];M.set(A,_*m*R),y.set(f,g*m*R);const T=[R,R,R,R,R,R];b.set(T,p*m*R)}const F=new Ve;F.setAttribute("position",new pn(M,_)),F.setAttribute("uv",new pn(y,g)),F.setAttribute("faceIndex",new pn(b,p)),t.push(F),i>Ho&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ih(s,t,e){const n=new Vi(s,t,e);return n.texture.mapping=pi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vl(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function u_(s,t,e){const n=new Float32Array(Bs),i=new I(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Dh(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Lh(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ye||l===ln,u=l===Mt||l===rn;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Jc(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Jc(s)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function f_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&So("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function d_(s,t,e,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)t.update(f[m],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let y=0,b=M.length;y<b;y+=3){const F=M[y+0],R=M[y+1],L=M[y+2];f.push(F,R,R,L,L,F)}}else if(m!==void 0){const M=m.array;_=m.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const F=y+0,R=y+1,L=y+2;f.push(F,R,R,L,L,F)}}else return;const g=new(Qu(f)?Hc:Vc)(f,1);g.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function p_(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function h(f,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function m_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function g_(s,t,e){const n=new WeakMap,i=new cn;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let A=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let b=a.attributes.position.count*y,F=1;b>t.maxTextureSize&&(F=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*F*4*h),L=new Za(R,b,F,h);L.type=Rn,L.needsUpdate=!0;const B=y*4;for(let T=0;T<h;T++){const z=g[T],K=p[T],Y=M[T],J=b*F*4*T;for(let lt=0;lt<z.count;lt++){const Q=lt*B;d===!0&&(i.fromBufferAttribute(z,lt),R[J+Q+0]=i.x,R[J+Q+1]=i.y,R[J+Q+2]=i.z,R[J+Q+3]=0),m===!0&&(i.fromBufferAttribute(K,lt),R[J+Q+4]=i.x,R[J+Q+5]=i.y,R[J+Q+6]=i.z,R[J+Q+7]=0),_===!0&&(i.fromBufferAttribute(Y,lt),R[J+Q+8]=i.x,R[J+Q+9]=i.y,R[J+Q+10]=i.z,R[J+Q+11]=Y.itemSize===4?i.w:1)}}f={count:h,texture:L,size:new ut(b,F)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function __(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Qc extends wn{constructor(t,e,n,i,r,o,a,l,c,u=Qi){if(u!==Qi&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qi&&(n=si),n===void 0&&u===_r&&(n=Li),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uh=new wn,Nh=new Qc(1,1),Oh=new Za,Fh=new Cc,Bh=new ga,zh=[],kh=[],Vh=new Float32Array(16),Hh=new Float32Array(9),Gh=new Float32Array(4);function Wo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=zh[i];if(r===void 0&&(r=new Float32Array(i),zh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function kn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Vn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xl(s,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function v_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function x_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;s.uniform2fv(this.addr,t),Vn(e,t)}}function y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(kn(e,t))return;s.uniform3fv(this.addr,t),Vn(e,t)}}function M_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;s.uniform4fv(this.addr,t),Vn(e,t)}}function S_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(kn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Vn(e,t)}else{if(kn(e,n))return;Gh.set(n),s.uniformMatrix2fv(this.addr,!1,Gh),Vn(e,n)}}function b_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(kn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Vn(e,t)}else{if(kn(e,n))return;Hh.set(n),s.uniformMatrix3fv(this.addr,!1,Hh),Vn(e,n)}}function E_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(kn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Vn(e,t)}else{if(kn(e,n))return;Vh.set(n),s.uniformMatrix4fv(this.addr,!1,Vh),Vn(e,n)}}function w_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function T_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;s.uniform2iv(this.addr,t),Vn(e,t)}}function A_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kn(e,t))return;s.uniform3iv(this.addr,t),Vn(e,t)}}function C_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;s.uniform4iv(this.addr,t),Vn(e,t)}}function R_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function P_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;s.uniform2uiv(this.addr,t),Vn(e,t)}}function I_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kn(e,t))return;s.uniform3uiv(this.addr,t),Vn(e,t)}}function D_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;s.uniform4uiv(this.addr,t),Vn(e,t)}}function L_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Nh.compareFunction=Bi,r=Nh):r=Uh,e.setTexture2D(t||r,i)}function U_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fh,i)}function N_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bh,i)}function O_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oh,i)}function F_(s){switch(s){case 5126:return v_;case 35664:return x_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return E_;case 5124:case 35670:return w_;case 35667:case 35671:return T_;case 35668:case 35672:return A_;case 35669:case 35673:return C_;case 5125:return R_;case 36294:return P_;case 36295:return I_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return O_}}function B_(s,t){s.uniform1fv(this.addr,t)}function z_(s,t){const e=Wo(t,this.size,2);s.uniform2fv(this.addr,e)}function k_(s,t){const e=Wo(t,this.size,3);s.uniform3fv(this.addr,e)}function V_(s,t){const e=Wo(t,this.size,4);s.uniform4fv(this.addr,e)}function H_(s,t){const e=Wo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function G_(s,t){const e=Wo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function W_(s,t){const e=Wo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function X_(s,t){s.uniform1iv(this.addr,t)}function Y_(s,t){s.uniform2iv(this.addr,t)}function q_(s,t){s.uniform3iv(this.addr,t)}function $_(s,t){s.uniform4iv(this.addr,t)}function Z_(s,t){s.uniform1uiv(this.addr,t)}function K_(s,t){s.uniform2uiv(this.addr,t)}function J_(s,t){s.uniform3uiv(this.addr,t)}function j_(s,t){s.uniform4uiv(this.addr,t)}function Q_(s,t,e){const n=this.cache,i=t.length,r=xl(e,i);kn(n,r)||(s.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Uh,r[o])}function t0(s,t,e){const n=this.cache,i=t.length,r=xl(e,i);kn(n,r)||(s.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Fh,r[o])}function e0(s,t,e){const n=this.cache,i=t.length,r=xl(e,i);kn(n,r)||(s.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Bh,r[o])}function n0(s,t,e){const n=this.cache,i=t.length,r=xl(e,i);kn(n,r)||(s.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function i0(s){switch(s){case 5126:return B_;case 35664:return z_;case 35665:return k_;case 35666:return V_;case 35674:return H_;case 35675:return G_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return Y_;case 35668:case 35672:return q_;case 35669:case 35673:return $_;case 5125:return Z_;case 36294:return K_;case 36295:return J_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}class r0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=F_(e.type)}}class s0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i0(e.type)}}class o0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function Wh(s,t){s.seq.push(t),s.map[t.id]=t}function a0(s,t,e){const n=s.name,i=n.length;for(tu.lastIndex=0;;){const r=tu.exec(n),o=tu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wh(e,c===void 0?new r0(a,s,t):new s0(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new o0(a),Wh(e,h)),e=h}}}class yl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);a0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Xh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const l0=37297;let c0=0;function u0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function h0(s){const t=en.getPrimaries(en.workingColorSpace),e=en.getPrimaries(s);let n;switch(t===e?n="":t===ce&&e===Ct?n="LinearDisplayP3ToLinearSRGB":t===Ct&&e===ce&&(n="LinearSRGBToLinearDisplayP3"),s){case k:case st:return[n,"LinearTransferOETF"];case O:case j:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Yh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+u0(s.getShaderSource(t),o)}else return i}function f0(s,t){const e=h0(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function d0(s,t){let e;switch(t){case Ha:e="Linear";break;case Ga:e="Reinhard";break;case Wa:e="Cineon";break;case dr:e="ACESFilmic";break;case Fr:e="AgX";break;case Br:e="Neutral";break;case ro:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ml=new I;function p0(){en.getLuminanceCoefficients(Ml);const s=Ml.x.toFixed(4),t=Ml.y.toFixed(4),e=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function g0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function va(s){return s!==""}function qh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(s){return s.replace(v0,y0)}const x0=new Map;function y0(s,t){let e=ke[t];if(e===void 0){const n=x0.get(t);if(n!==void 0)e=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return eu(e)}const M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(s){return s.replace(M0,S0)}function S0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function b0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xe?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===de?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Le&&(t="SHADOWMAP_TYPE_VSM"),t}function E0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mt:case rn:t="ENVMAP_TYPE_CUBE";break;case pi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function w0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rn:t="ENVMAP_MODE_REFRACTION";break}return t}function T0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Or:t="ENVMAP_BLENDING_MULTIPLY";break;case io:t="ENVMAP_BLENDING_MIX";break;case ia:t="ENVMAP_BLENDING_ADD";break}return t}function A0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function C0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=b0(e),c=E0(e),u=w0(e),h=T0(e),f=A0(e),d=m0(e),m=g0(r),_=i.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(va).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(va).join(`
`),p.length>0&&(p+=`
`)):(g=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),p=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?ke.tonemapping_pars_fragment:"",e.toneMapping!==mn?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,f0("linearToOutputTexel",e.outputColorSpace),p0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(va).join(`
`)),o=eu(o),o=qh(o,e),o=$h(o,e),a=eu(a),a=qh(a,e),a=$h(a,e),o=Zh(o),a=Zh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+g+o,b=M+p+a,F=Xh(i,i.VERTEX_SHADER,y),R=Xh(i,i.FRAGMENT_SHADER,b);i.attachShader(_,F),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function L(z){if(s.debug.checkShaderErrors){const K=i.getProgramInfoLog(_).trim(),Y=i.getShaderInfoLog(F).trim(),J=i.getShaderInfoLog(R).trim();let lt=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(lt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,F,R);else{const xt=Yh(i,F,"vertex"),nt=Yh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+K+`
`+xt+`
`+nt)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Y===""||J==="")&&(Q=!1);Q&&(z.diagnostics={runnable:lt,programLog:K,vertexShader:{log:Y,prefix:g},fragmentShader:{log:J,prefix:p}})}i.deleteShader(F),i.deleteShader(R),B=new yl(i,_),A=_0(i,_)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,l0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=R,this}let R0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new I0(t),e.set(t,n)),n}}class I0{constructor(t){this.id=R0++,this.code=t,this.usedTimes=0}}function D0(s,t,e,n,i,r,o){const a=new nl,l=new P0,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,T,z,K,Y){const J=K.fog,lt=Y.geometry,Q=A.isMeshStandardMaterial?K.environment:null,xt=(A.isMeshStandardMaterial?e:t).get(A.envMap||Q),nt=xt&&xt.mapping===pi?xt.image.height:null,Bt=m[A.type];A.precision!==null&&(d=i.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const Yt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,qt=Yt!==void 0?Yt.length:0;let Ge=0;lt.morphAttributes.position!==void 0&&(Ge=1),lt.morphAttributes.normal!==void 0&&(Ge=2),lt.morphAttributes.color!==void 0&&(Ge=3);let on,rt,bt,Jt;if(Bt){const un=Yi[Bt];on=un.vertexShader,rt=un.fragmentShader}else on=A.vertexShader,rt=A.fragmentShader,l.update(A),bt=l.getVertexShaderID(A),Jt=l.getFragmentShaderID(A);const Ut=s.getRenderTarget(),ge=Y.isInstancedMesh===!0,De=Y.isBatchedMesh===!0,Re=!!A.map,nn=!!A.matcap,P=!!xt,wt=!!A.aoMap,yt=!!A.lightMap,Ot=!!A.bumpMap,at=!!A.normalMap,_e=!!A.displacementMap,Nt=!!A.emissiveMap,Zt=!!A.metalnessMap,U=!!A.roughnessMap,w=A.anisotropy>0,q=A.clearcoat>0,ft=A.dispersion>0,ht=A.iridescence>0,pt=A.sheen>0,fe=A.transmission>0,Dt=w&&!!A.anisotropyMap,$t=q&&!!A.clearcoatMap,Be=q&&!!A.clearcoatNormalMap,Et=q&&!!A.clearcoatRoughnessMap,Wt=ht&&!!A.iridescenceMap,Ze=ht&&!!A.iridescenceThicknessMap,Ie=pt&&!!A.sheenColorMap,jt=pt&&!!A.sheenRoughnessMap,Ue=!!A.specularMap,Xe=!!A.specularColorMap,yn=!!A.specularIntensityMap,V=fe&&!!A.transmissionMap,Tt=fe&&!!A.thicknessMap,ct=!!A.gradientMap,dt=!!A.alphaMap,Rt=A.alphaTest>0,we=!!A.alphaHash,Qe=!!A.extensions;let Fn=mn;A.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Fn=s.toneMapping);const $n={shaderID:Bt,shaderType:A.type,shaderName:A.name,vertexShader:on,fragmentShader:rt,defines:A.defines,customVertexShaderID:bt,customFragmentShaderID:Jt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:De,batchingColor:De&&Y._colorsTexture!==null,instancing:ge,instancingColor:ge&&Y.instanceColor!==null,instancingMorph:ge&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ut===null?s.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:k,alphaToCoverage:!!A.alphaToCoverage,map:Re,matcap:nn,envMap:P,envMapMode:P&&xt.mapping,envMapCubeUVHeight:nt,aoMap:wt,lightMap:yt,bumpMap:Ot,normalMap:at,displacementMap:f&&_e,emissiveMap:Nt,normalMapObjectSpace:at&&A.normalMapType===S,normalMapTangentSpace:at&&A.normalMapType===x,metalnessMap:Zt,roughnessMap:U,anisotropy:w,anisotropyMap:Dt,clearcoat:q,clearcoatMap:$t,clearcoatNormalMap:Be,clearcoatRoughnessMap:Et,dispersion:ft,iridescence:ht,iridescenceMap:Wt,iridescenceThicknessMap:Ze,sheen:pt,sheenColorMap:Ie,sheenRoughnessMap:jt,specularMap:Ue,specularColorMap:Xe,specularIntensityMap:yn,transmission:fe,transmissionMap:V,thicknessMap:Tt,gradientMap:ct,opaque:A.transparent===!1&&A.blending===Lt&&A.alphaToCoverage===!1,alphaMap:dt,alphaTest:Rt,alphaHash:we,combine:A.combine,mapUv:Re&&_(A.map.channel),aoMapUv:wt&&_(A.aoMap.channel),lightMapUv:yt&&_(A.lightMap.channel),bumpMapUv:Ot&&_(A.bumpMap.channel),normalMapUv:at&&_(A.normalMap.channel),displacementMapUv:_e&&_(A.displacementMap.channel),emissiveMapUv:Nt&&_(A.emissiveMap.channel),metalnessMapUv:Zt&&_(A.metalnessMap.channel),roughnessMapUv:U&&_(A.roughnessMap.channel),anisotropyMapUv:Dt&&_(A.anisotropyMap.channel),clearcoatMapUv:$t&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:jt&&_(A.sheenRoughnessMap.channel),specularMapUv:Ue&&_(A.specularMap.channel),specularColorMapUv:Xe&&_(A.specularColorMap.channel),specularIntensityMapUv:yn&&_(A.specularIntensityMap.channel),transmissionMapUv:V&&_(A.transmissionMap.channel),thicknessMapUv:Tt&&_(A.thicknessMap.channel),alphaMapUv:dt&&_(A.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(at||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!lt.attributes.uv&&(Re||dt),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fn,decodeVideoTexture:Re&&A.map.isVideoTexture===!0&&en.getTransfer(A.map.colorSpace)===vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Vt,flipSided:A.side===ie,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Qe&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&A.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return $n.vertexUv1s=c.has(1),$n.vertexUv2s=c.has(2),$n.vertexUv3s=c.has(3),c.clear(),$n}function p(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)T.push(z),T.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(M(T,A),y(T,A),T.push(s.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function M(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function y(A,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.transmission&&a.enable(14),T.sheen&&a.enable(15),T.opaque&&a.enable(16),T.pointsUvs&&a.enable(17),T.decodeVideoTexture&&a.enable(18),T.alphaToCoverage&&a.enable(19),A.push(a.mask)}function b(A){const T=m[A.type];let z;if(T){const K=Yi[T];z=Sh.clone(K.uniforms)}else z=A.uniforms;return z}function F(A,T){let z;for(let K=0,Y=u.length;K<Y;K++){const J=u[K];if(J.cacheKey===T){z=J,++z.usedTimes;break}}return z===void 0&&(z=new C0(s,T,A,r),u.push(z)),z}function R(A){if(--A.usedTimes===0){const T=u.indexOf(A);u[T]=u[u.length-1],u.pop(),A.destroy()}}function L(A){l.remove(A)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:F,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:B}}function L0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function U0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Jh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function jh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,m,_,g){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},s[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||U0),n.length>1&&n.sort(f||Jh),i.length>1&&i.sort(f||Jh)}function u(){for(let h=t,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function N0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new jh,s.set(n,[o])):i>=r.length?(o=new jh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function O0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function F0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let B0=0;function z0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function k0(s){const t=new O0,e=F0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Me,o=new Me;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,M=0,y=0,b=0,F=0,R=0,L=0;c.sort(z0);for(let A=0,T=c.length;A<T;A++){const z=c[A],K=z.color,Y=z.intensity,J=z.distance,lt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=K.r*Y,h+=K.g*Y,f+=K.b*Y;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(z.sh.coefficients[Q],Y);L++}else if(z.isDirectionalLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const xt=z.shadow,nt=e.get(z);nt.shadowIntensity=xt.intensity,nt.shadowBias=xt.bias,nt.shadowNormalBias=xt.normalBias,nt.shadowRadius=xt.radius,nt.shadowMapSize=xt.mapSize,n.directionalShadow[d]=nt,n.directionalShadowMap[d]=lt,n.directionalShadowMatrix[d]=z.shadow.matrix,M++}n.directional[d]=Q,d++}else if(z.isSpotLight){const Q=t.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(K).multiplyScalar(Y),Q.distance=J,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,n.spot[_]=Q;const xt=z.shadow;if(z.map&&(n.spotLightMap[F]=z.map,F++,xt.updateMatrices(z),z.castShadow&&R++),n.spotLightMatrix[_]=xt.matrix,z.castShadow){const nt=e.get(z);nt.shadowIntensity=xt.intensity,nt.shadowBias=xt.bias,nt.shadowNormalBias=xt.normalBias,nt.shadowRadius=xt.radius,nt.shadowMapSize=xt.mapSize,n.spotShadow[_]=nt,n.spotShadowMap[_]=lt,b++}_++}else if(z.isRectAreaLight){const Q=t.get(z);Q.color.copy(K).multiplyScalar(Y),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),n.rectArea[g]=Q,g++}else if(z.isPointLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){const xt=z.shadow,nt=e.get(z);nt.shadowIntensity=xt.intensity,nt.shadowBias=xt.bias,nt.shadowNormalBias=xt.normalBias,nt.shadowRadius=xt.radius,nt.shadowMapSize=xt.mapSize,nt.shadowCameraNear=xt.camera.near,nt.shadowCameraFar=xt.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=lt,n.pointShadowMatrix[m]=z.shadow.matrix,y++}n.point[m]=Q,m++}else if(z.isHemisphereLight){const Q=t.get(z);Q.skyColor.copy(z.color).multiplyScalar(Y),Q.groundColor.copy(z.groundColor).multiplyScalar(Y),n.hemi[p]=Q,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const B=n.hash;(B.directionalLength!==d||B.pointLength!==m||B.spotLength!==_||B.rectAreaLength!==g||B.hemiLength!==p||B.numDirectionalShadows!==M||B.numPointShadows!==y||B.numSpotShadows!==b||B.numSpotMaps!==F||B.numLightProbes!==L)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+F-R,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,B.directionalLength=d,B.pointLength=m,B.spotLength=_,B.rectAreaLength=g,B.hemiLength=p,B.numDirectionalShadows=M,B.numPointShadows=y,B.numSpotShadows=b,B.numSpotMaps=F,B.numLightProbes=L,n.version=B0++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),h++}else if(y.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Qh(s){const t=new k0(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function V0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Qh(s),t.set(i,[a])):r>=o.length?(a=new Qh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class nu extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oa,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iu extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W0(s,t,e){let n=new _a;const i=new ut,r=new ut,o=new cn,a=new nu({depthPacking:Ts}),l=new iu,c={},u=e.maxTextureSize,h={[ze]:ie,[ie]:ze,[Vt]:Vt},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:H0,fragmentShader:G0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ve;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new On(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xe;let p=this.type;this.render=function(R,L,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const A=s.getRenderTarget(),T=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),K=s.state;K.setBlending(zt),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Y=p!==Le&&this.type===Le,J=p===Le&&this.type!==Le;for(let lt=0,Q=R.length;lt<Q;lt++){const xt=R[lt],nt=xt.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",xt,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;i.copy(nt.mapSize);const Bt=nt.getFrameExtents();if(i.multiply(Bt),r.copy(nt.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Bt.x),i.x=r.x*Bt.x,nt.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Bt.y),i.y=r.y*Bt.y,nt.mapSize.y=r.y)),nt.map===null||Y===!0||J===!0){const qt=this.type!==Le?{minFilter:_n,magFilter:_n}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Vi(i.x,i.y,qt),nt.map.texture.name=xt.name+".shadowMap",nt.camera.updateProjectionMatrix()}s.setRenderTarget(nt.map),s.clear();const Yt=nt.getViewportCount();for(let qt=0;qt<Yt;qt++){const Ge=nt.getViewport(qt);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),K.viewport(o),nt.updateMatrices(xt,qt),n=nt.getFrustum(),b(L,B,nt.camera,xt,this.type)}nt.isPointLightShadow!==!0&&this.type===Le&&M(nt,B),nt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(A,T,z)};function M(R,L){const B=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Vi(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(L,null,B,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(L,null,B,d,_,null)}function y(R,L,B,A){let T=null;const z=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)T=z;else if(T=B.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const K=T.uuid,Y=L.uuid;let J=c[K];J===void 0&&(J={},c[K]=J);let lt=J[Y];lt===void 0&&(lt=T.clone(),J[Y]=lt,L.addEventListener("dispose",F)),T=lt}if(T.visible=L.visible,T.wireframe=L.wireframe,A===Le?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:h[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=s.properties.get(T);K.light=B}return T}function b(R,L,B,A,T){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Le)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const Y=t.update(R),J=R.material;if(Array.isArray(J)){const lt=Y.groups;for(let Q=0,xt=lt.length;Q<xt;Q++){const nt=lt[Q],Bt=J[nt.materialIndex];if(Bt&&Bt.visible){const Yt=y(R,Bt,A,T);R.onBeforeShadow(s,R,L,B,Y,Yt,nt),s.renderBufferDirect(B,null,Y,Yt,R,nt),R.onAfterShadow(s,R,L,B,Y,Yt,nt)}}}else if(J.visible){const lt=y(R,J,A,T);R.onBeforeShadow(s,R,L,B,Y,lt,null),s.renderBufferDirect(B,null,Y,lt,R,null),R.onAfterShadow(s,R,L,B,Y,lt,null)}}const K=R.children;for(let Y=0,J=K.length;Y<J;Y++)b(K[Y],L,B,A,T)}function F(R){R.target.removeEventListener("dispose",F);for(const B in c){const A=c[B],T=R.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}function X0(s){function t(){let V=!1;const Tt=new cn;let ct=null;const dt=new cn(0,0,0,0);return{setMask:function(Rt){ct!==Rt&&!V&&(s.colorMask(Rt,Rt,Rt,Rt),ct=Rt)},setLocked:function(Rt){V=Rt},setClear:function(Rt,we,Qe,Fn,$n){$n===!0&&(Rt*=Fn,we*=Fn,Qe*=Fn),Tt.set(Rt,we,Qe,Fn),dt.equals(Tt)===!1&&(s.clearColor(Rt,we,Qe,Fn),dt.copy(Tt))},reset:function(){V=!1,ct=null,dt.set(-1,0,0,0)}}}function e(){let V=!1,Tt=null,ct=null,dt=null;return{setTest:function(Rt){Rt?Jt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(Rt){Tt!==Rt&&!V&&(s.depthMask(Rt),Tt=Rt)},setFunc:function(Rt){if(ct!==Rt){switch(Rt){case di:s.depthFunc(s.NEVER);break;case Ur:s.depthFunc(s.ALWAYS);break;case ms:s.depthFunc(s.LESS);break;case Pi:s.depthFunc(s.LEQUAL);break;case eo:s.depthFunc(s.EQUAL);break;case na:s.depthFunc(s.GEQUAL);break;case Nr:s.depthFunc(s.GREATER);break;case no:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=Rt}},setLocked:function(Rt){V=Rt},setClear:function(Rt){dt!==Rt&&(s.clearDepth(Rt),dt=Rt)},reset:function(){V=!1,Tt=null,ct=null,dt=null}}}function n(){let V=!1,Tt=null,ct=null,dt=null,Rt=null,we=null,Qe=null,Fn=null,$n=null;return{setTest:function(un){V||(un?Jt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(un){Tt!==un&&!V&&(s.stencilMask(un),Tt=un)},setFunc:function(un,Lr,hr){(ct!==un||dt!==Lr||Rt!==hr)&&(s.stencilFunc(un,Lr,hr),ct=un,dt=Lr,Rt=hr)},setOp:function(un,Lr,hr){(we!==un||Qe!==Lr||Fn!==hr)&&(s.stencilOp(un,Lr,hr),we=un,Qe=Lr,Fn=hr)},setLocked:function(un){V=un},setClear:function(un){$n!==un&&(s.clearStencil(un),$n=un)},reset:function(){V=!1,Tt=null,ct=null,dt=null,Rt=null,we=null,Qe=null,Fn=null,$n=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,m=!1,_=null,g=null,p=null,M=null,y=null,b=null,F=null,R=new Ht(0,0,0),L=0,B=!1,A=null,T=null,z=null,K=null,Y=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,Q=0;const xt=s.getParameter(s.VERSION);xt.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(xt)[1]),lt=Q>=1):xt.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(xt)[1]),lt=Q>=2);let nt=null,Bt={};const Yt=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),Ge=new cn().fromArray(Yt),on=new cn().fromArray(qt);function rt(V,Tt,ct,dt){const Rt=new Uint8Array(4),we=s.createTexture();s.bindTexture(V,we),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<ct;Qe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Tt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Tt+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return we}const bt={};bt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Jt(s.DEPTH_TEST),r.setFunc(Pi),Ot(!1),at(gt),Jt(s.CULL_FACE),wt(zt);function Jt(V){c[V]!==!0&&(s.enable(V),c[V]=!0)}function Ut(V){c[V]!==!1&&(s.disable(V),c[V]=!1)}function ge(V,Tt){return u[V]!==Tt?(s.bindFramebuffer(V,Tt),u[V]=Tt,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Tt),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Tt),!0):!1}function De(V,Tt){let ct=f,dt=!1;if(V){ct=h.get(Tt),ct===void 0&&(ct=[],h.set(Tt,ct));const Rt=V.textures;if(ct.length!==Rt.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let we=0,Qe=Rt.length;we<Qe;we++)ct[we]=s.COLOR_ATTACHMENT0+we;ct.length=Rt.length,dt=!0}}else ct[0]!==s.BACK&&(ct[0]=s.BACK,dt=!0);dt&&s.drawBuffers(ct)}function Re(V){return d!==V?(s.useProgram(V),d=V,!0):!1}const nn={[Ft]:s.FUNC_ADD,[Kt]:s.FUNC_SUBTRACT,[it]:s.FUNC_REVERSE_SUBTRACT};nn[Z]=s.MIN,nn[tt]=s.MAX;const P={[N]:s.ZERO,[et]:s.ONE,[_t]:s.SRC_COLOR,[ot]:s.SRC_ALPHA,[fi]:s.SRC_ALPHA_SATURATE,[Ce]:s.DST_COLOR,[tn]:s.DST_ALPHA,[St]:s.ONE_MINUS_SRC_COLOR,[ae]:s.ONE_MINUS_SRC_ALPHA,[gn]:s.ONE_MINUS_DST_COLOR,[an]:s.ONE_MINUS_DST_ALPHA,[Hn]:s.CONSTANT_COLOR,[He]:s.ONE_MINUS_CONSTANT_COLOR,[Ki]:s.CONSTANT_ALPHA,[fr]:s.ONE_MINUS_CONSTANT_ALPHA};function wt(V,Tt,ct,dt,Rt,we,Qe,Fn,$n,un){if(V===zt){m===!0&&(Ut(s.BLEND),m=!1);return}if(m===!1&&(Jt(s.BLEND),m=!0),V!==he){if(V!==_||un!==B){if((g!==Ft||y!==Ft)&&(s.blendEquation(s.FUNC_ADD),g=Ft,y=Ft),un)switch(V){case Lt:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xt:s.blendFunc(s.ONE,s.ONE);break;case Se:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case me:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Lt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Se:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case me:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,M=null,b=null,F=null,R.set(0,0,0),L=0,_=V,B=un}return}Rt=Rt||Tt,we=we||ct,Qe=Qe||dt,(Tt!==g||Rt!==y)&&(s.blendEquationSeparate(nn[Tt],nn[Rt]),g=Tt,y=Rt),(ct!==p||dt!==M||we!==b||Qe!==F)&&(s.blendFuncSeparate(P[ct],P[dt],P[we],P[Qe]),p=ct,M=dt,b=we,F=Qe),(Fn.equals(R)===!1||$n!==L)&&(s.blendColor(Fn.r,Fn.g,Fn.b,$n),R.copy(Fn),L=$n),_=V,B=!1}function yt(V,Tt){V.side===Vt?Ut(s.CULL_FACE):Jt(s.CULL_FACE);let ct=V.side===ie;Tt&&(ct=!ct),Ot(ct),V.blending===Lt&&V.transparent===!1?wt(zt):wt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),i.setMask(V.colorWrite);const dt=V.stencilWrite;o.setTest(dt),dt&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Nt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Jt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(V){A!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),A=V)}function at(V){V!==Ae?(Jt(s.CULL_FACE),V!==T&&(V===gt?s.cullFace(s.BACK):V===kt?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),T=V}function _e(V){V!==z&&(lt&&s.lineWidth(V),z=V)}function Nt(V,Tt,ct){V?(Jt(s.POLYGON_OFFSET_FILL),(K!==Tt||Y!==ct)&&(s.polygonOffset(Tt,ct),K=Tt,Y=ct)):Ut(s.POLYGON_OFFSET_FILL)}function Zt(V){V?Jt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function U(V){V===void 0&&(V=s.TEXTURE0+J-1),nt!==V&&(s.activeTexture(V),nt=V)}function w(V,Tt,ct){ct===void 0&&(nt===null?ct=s.TEXTURE0+J-1:ct=nt);let dt=Bt[ct];dt===void 0&&(dt={type:void 0,texture:void 0},Bt[ct]=dt),(dt.type!==V||dt.texture!==Tt)&&(nt!==ct&&(s.activeTexture(ct),nt=ct),s.bindTexture(V,Tt||bt[V]),dt.type=V,dt.texture=Tt)}function q(){const V=Bt[nt];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ft(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(V){Ge.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ge.copy(V))}function jt(V){on.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),on.copy(V))}function Ue(V,Tt){let ct=l.get(Tt);ct===void 0&&(ct=new WeakMap,l.set(Tt,ct));let dt=ct.get(V);dt===void 0&&(dt=s.getUniformBlockIndex(Tt,V.name),ct.set(V,dt))}function Xe(V,Tt){const dt=l.get(Tt).get(V);a.get(Tt)!==dt&&(s.uniformBlockBinding(Tt,dt,V.__bindingPointIndex),a.set(Tt,dt))}function yn(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},nt=null,Bt={},u={},h=new WeakMap,f=[],d=null,m=!1,_=null,g=null,p=null,M=null,y=null,b=null,F=null,R=new Ht(0,0,0),L=0,B=!1,A=null,T=null,z=null,K=null,Y=null,Ge.set(0,0,s.canvas.width,s.canvas.height),on.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Jt,disable:Ut,bindFramebuffer:ge,drawBuffers:De,useProgram:Re,setBlending:wt,setMaterial:yt,setFlipSided:Ot,setCullFace:at,setLineWidth:_e,setPolygonOffset:Nt,setScissorTest:Zt,activeTexture:U,bindTexture:w,unbindTexture:q,compressedTexImage2D:ft,compressedTexImage3D:ht,texImage2D:Wt,texImage3D:Ze,updateUBOMapping:Ue,uniformBlockBinding:Xe,texStorage2D:Be,texStorage3D:Et,texSubImage2D:pt,texSubImage3D:fe,compressedTexSubImage2D:Dt,compressedTexSubImage3D:$t,scissor:Ie,viewport:jt,reset:yn}}function Y0(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function q0(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function $0(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function ru(s,t,e,n){const i=Z0(n);switch(e){case ys:return s*t;case zr:return s*t;case kr:return s*t*2;case Ss:return s*t/i.components*i.byteLength;case Vr:return s*t/i.components*i.byteLength;case sa:return s*t*2/i.components*i.byteLength;case ao:return s*t*2/i.components*i.byteLength;case Ms:return s*t*3/i.components*i.byteLength;case Un:return s*t*4/i.components*i.byteLength;case bs:return s*t*4/i.components*i.byteLength;case Hr:case Mi:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Es:case le:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vr:case co:return Math.max(s,16)*Math.max(t,8)/4;case lo:case Gr:return Math.max(s,8)*Math.max(t,8)/2;case uo:case ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vn:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case tr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Yr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case qr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $r:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case er:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _o:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case nr:case ws:case Zr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vo:case Kr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jr:case Yn:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Z0(s){switch(s){case Mn:case _s:return{byteLength:1,components:1};case mr:case vs:case Di:return{byteLength:2,components:1};case ji:case gr:return{byteLength:2,components:4};case si:case xs:case Rn:return{byteLength:4,components:1};case Ln:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const K0={contain:Y0,cover:q0,fill:$0,getByteLength:ru};function J0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(U){}function m(U,w){return d?new OffscreenCanvas(U,w):ca("canvas")}function _(U,w,q){let ft=1;const ht=Zt(U);if((ht.width>q||ht.height>q)&&(ft=q/Math.max(ht.width,ht.height)),ft<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){const pt=Math.floor(ft*ht.width),fe=Math.floor(ft*ht.height);h===void 0&&(h=m(pt,fe));const Dt=w?m(pt,fe):h;return Dt.width=pt,Dt.height=fe,Dt.getContext("2d").drawImage(U,0,0,pt,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+pt+"x"+fe+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),U;return U}function g(U){return U.generateMipmaps&&U.minFilter!==_n&&U.minFilter!==We}function p(U){s.generateMipmap(U)}function M(U,w,q,ft,ht=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=w;if(w===s.RED&&(q===s.FLOAT&&(pt=s.R32F),q===s.HALF_FLOAT&&(pt=s.R16F),q===s.UNSIGNED_BYTE&&(pt=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(pt=s.R8UI),q===s.UNSIGNED_SHORT&&(pt=s.R16UI),q===s.UNSIGNED_INT&&(pt=s.R32UI),q===s.BYTE&&(pt=s.R8I),q===s.SHORT&&(pt=s.R16I),q===s.INT&&(pt=s.R32I)),w===s.RG&&(q===s.FLOAT&&(pt=s.RG32F),q===s.HALF_FLOAT&&(pt=s.RG16F),q===s.UNSIGNED_BYTE&&(pt=s.RG8)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(pt=s.RG8UI),q===s.UNSIGNED_SHORT&&(pt=s.RG16UI),q===s.UNSIGNED_INT&&(pt=s.RG32UI),q===s.BYTE&&(pt=s.RG8I),q===s.SHORT&&(pt=s.RG16I),q===s.INT&&(pt=s.RG32I)),w===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),w===s.RGBA){const fe=ht?mt:en.getTransfer(ft);q===s.FLOAT&&(pt=s.RGBA32F),q===s.HALF_FLOAT&&(pt=s.RGBA16F),q===s.UNSIGNED_BYTE&&(pt=fe===vt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function y(U,w){let q;return U?w===null||w===si||w===Li?q=s.DEPTH24_STENCIL8:w===Rn?q=s.DEPTH32F_STENCIL8:w===mr&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===si||w===Li?q=s.DEPTH_COMPONENT24:w===Rn?q=s.DEPTH_COMPONENT32F:w===mr&&(q=s.DEPTH_COMPONENT16),q}function b(U,w){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==_n&&U.minFilter!==We?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function F(U){const w=U.target;w.removeEventListener("dispose",F),L(w),w.isVideoTexture&&u.delete(w)}function R(U){const w=U.target;w.removeEventListener("dispose",R),A(w)}function L(U){const w=n.get(U);if(w.__webglInit===void 0)return;const q=U.source,ft=f.get(q);if(ft){const ht=ft[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&B(U),Object.keys(ft).length===0&&f.delete(q)}n.remove(U)}function B(U){const w=n.get(U);s.deleteTexture(w.__webglTexture);const q=U.source,ft=f.get(q);delete ft[w.__cacheKey],o.memory.textures--}function A(U){const w=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(w.__webglFramebuffer[ft]))for(let ht=0;ht<w.__webglFramebuffer[ft].length;ht++)s.deleteFramebuffer(w.__webglFramebuffer[ft][ht]);else s.deleteFramebuffer(w.__webglFramebuffer[ft]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ft])}else{if(Array.isArray(w.__webglFramebuffer))for(let ft=0;ft<w.__webglFramebuffer.length;ft++)s.deleteFramebuffer(w.__webglFramebuffer[ft]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ft=0;ft<w.__webglColorRenderbuffer.length;ft++)w.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ft]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=U.textures;for(let ft=0,ht=q.length;ft<ht;ft++){const pt=n.get(q[ft]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(q[ft])}n.remove(U)}let T=0;function z(){T=0}function K(){const U=T;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),T+=1,U}function Y(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function J(U,w){const q=n.get(U);if(U.isVideoTexture&&_e(U),U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{on(q,U,w);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function lt(U,w){const q=n.get(U);if(U.version>0&&q.__version!==U.version){on(q,U,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function Q(U,w){const q=n.get(U);if(U.version>0&&q.__version!==U.version){on(q,U,w);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function xt(U,w){const q=n.get(U);if(U.version>0&&q.__version!==U.version){rt(q,U,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}const nt={[Ji]:s.REPEAT,[Ye]:s.CLAMP_TO_EDGE,[mi]:s.MIRRORED_REPEAT},Bt={[_n]:s.NEAREST,[Xn]:s.NEAREST_MIPMAP_NEAREST,[ii]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[Ii]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},Yt={[Fi]:s.NEVER,[Mc]:s.ALWAYS,[sr]:s.LESS,[Bi]:s.LEQUAL,[jr]:s.EQUAL,[$a]:s.GEQUAL,[Rs]:s.GREATER,[Qr]:s.NOTEQUAL};function qt(U,w){if(w.type===Rn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===We||w.magFilter===Ii||w.magFilter===ii||w.magFilter===ri||w.minFilter===We||w.minFilter===Ii||w.minFilter===ii||w.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,nt[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,nt[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,nt[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Bt[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Bt[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Yt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_n||w.minFilter!==ii&&w.minFilter!==ri||w.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ge(U,w){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",F));const ft=w.source;let ht=f.get(ft);ht===void 0&&(ht={},f.set(ft,ht));const pt=Y(w);if(pt!==U.__cacheKey){ht[pt]===void 0&&(ht[pt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ht[pt].usedTimes++;const fe=ht[U.__cacheKey];fe!==void 0&&(ht[U.__cacheKey].usedTimes--,fe.usedTimes===0&&B(w)),U.__cacheKey=pt,U.__webglTexture=ht[pt].texture}return q}function on(U,w,q){let ft=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ft=s.TEXTURE_3D);const ht=Ge(U,w),pt=w.source;e.bindTexture(ft,U.__webglTexture,s.TEXTURE0+q);const fe=n.get(pt);if(pt.version!==fe.__version||ht===!0){e.activeTexture(s.TEXTURE0+q);const Dt=en.getPrimaries(en.workingColorSpace),$t=w.colorSpace===D?null:en.getPrimaries(w.colorSpace),Be=w.colorSpace===D||Dt===$t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Et=_(w.image,!1,i.maxTextureSize);Et=Nt(w,Et);const Wt=r.convert(w.format,w.colorSpace),Ze=r.convert(w.type);let Ie=M(w.internalFormat,Wt,Ze,w.colorSpace,w.isVideoTexture);qt(ft,w);let jt;const Ue=w.mipmaps,Xe=w.isVideoTexture!==!0,yn=fe.__version===void 0||ht===!0,V=pt.dataReady,Tt=b(w,Et);if(w.isDepthTexture)Ie=y(w.format===_r,w.type),yn&&(Xe?e.texStorage2D(s.TEXTURE_2D,1,Ie,Et.width,Et.height):e.texImage2D(s.TEXTURE_2D,0,Ie,Et.width,Et.height,0,Wt,Ze,null));else if(w.isDataTexture)if(Ue.length>0){Xe&&yn&&e.texStorage2D(s.TEXTURE_2D,Tt,Ie,Ue[0].width,Ue[0].height);for(let ct=0,dt=Ue.length;ct<dt;ct++)jt=Ue[ct],Xe?V&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,jt.width,jt.height,Wt,Ze,jt.data):e.texImage2D(s.TEXTURE_2D,ct,Ie,jt.width,jt.height,0,Wt,Ze,jt.data);w.generateMipmaps=!1}else Xe?(yn&&e.texStorage2D(s.TEXTURE_2D,Tt,Ie,Et.width,Et.height),V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et.width,Et.height,Wt,Ze,Et.data)):e.texImage2D(s.TEXTURE_2D,0,Ie,Et.width,Et.height,0,Wt,Ze,Et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xe&&yn&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,Ie,Ue[0].width,Ue[0].height,Et.depth);for(let ct=0,dt=Ue.length;ct<dt;ct++)if(jt=Ue[ct],w.format!==Un)if(Wt!==null)if(Xe){if(V)if(w.layerUpdates.size>0){const Rt=ru(jt.width,jt.height,w.format,w.type);for(const we of w.layerUpdates){const Qe=jt.data.subarray(we*Rt/jt.data.BYTES_PER_ELEMENT,(we+1)*Rt/jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,we,jt.width,jt.height,1,Wt,Qe,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,jt.width,jt.height,Et.depth,Wt,jt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,Ie,jt.width,jt.height,Et.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,jt.width,jt.height,Et.depth,Wt,Ze,jt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,Ie,jt.width,jt.height,Et.depth,0,Wt,Ze,jt.data)}else{Xe&&yn&&e.texStorage2D(s.TEXTURE_2D,Tt,Ie,Ue[0].width,Ue[0].height);for(let ct=0,dt=Ue.length;ct<dt;ct++)jt=Ue[ct],w.format!==Un?Wt!==null?Xe?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,jt.width,jt.height,Wt,jt.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,Ie,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?V&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,jt.width,jt.height,Wt,Ze,jt.data):e.texImage2D(s.TEXTURE_2D,ct,Ie,jt.width,jt.height,0,Wt,Ze,jt.data)}else if(w.isDataArrayTexture)if(Xe){if(yn&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,Ie,Et.width,Et.height,Et.depth),V)if(w.layerUpdates.size>0){const ct=ru(Et.width,Et.height,w.format,w.type);for(const dt of w.layerUpdates){const Rt=Et.data.subarray(dt*ct/Et.data.BYTES_PER_ELEMENT,(dt+1)*ct/Et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,Et.width,Et.height,1,Wt,Ze,Rt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Wt,Ze,Et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,Et.width,Et.height,Et.depth,0,Wt,Ze,Et.data);else if(w.isData3DTexture)Xe?(yn&&e.texStorage3D(s.TEXTURE_3D,Tt,Ie,Et.width,Et.height,Et.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Wt,Ze,Et.data)):e.texImage3D(s.TEXTURE_3D,0,Ie,Et.width,Et.height,Et.depth,0,Wt,Ze,Et.data);else if(w.isFramebufferTexture){if(yn)if(Xe)e.texStorage2D(s.TEXTURE_2D,Tt,Ie,Et.width,Et.height);else{let ct=Et.width,dt=Et.height;for(let Rt=0;Rt<Tt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,Ie,ct,dt,0,Wt,Ze,null),ct>>=1,dt>>=1}}else if(Ue.length>0){if(Xe&&yn){const ct=Zt(Ue[0]);e.texStorage2D(s.TEXTURE_2D,Tt,Ie,ct.width,ct.height)}for(let ct=0,dt=Ue.length;ct<dt;ct++)jt=Ue[ct],Xe?V&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Wt,Ze,jt):e.texImage2D(s.TEXTURE_2D,ct,Ie,Wt,Ze,jt);w.generateMipmaps=!1}else if(Xe){if(yn){const ct=Zt(Et);e.texStorage2D(s.TEXTURE_2D,Tt,Ie,ct.width,ct.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,Ze,Et)}else e.texImage2D(s.TEXTURE_2D,0,Ie,Wt,Ze,Et);g(w)&&p(ft),fe.__version=pt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function rt(U,w,q){if(w.image.length!==6)return;const ft=Ge(U,w),ht=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+q);const pt=n.get(ht);if(ht.version!==pt.__version||ft===!0){e.activeTexture(s.TEXTURE0+q);const fe=en.getPrimaries(en.workingColorSpace),Dt=w.colorSpace===D?null:en.getPrimaries(w.colorSpace),$t=w.colorSpace===D||fe===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const Be=w.isCompressedTexture||w.image[0].isCompressedTexture,Et=w.image[0]&&w.image[0].isDataTexture,Wt=[];for(let dt=0;dt<6;dt++)!Be&&!Et?Wt[dt]=_(w.image[dt],!0,i.maxCubemapSize):Wt[dt]=Et?w.image[dt].image:w.image[dt],Wt[dt]=Nt(w,Wt[dt]);const Ze=Wt[0],Ie=r.convert(w.format,w.colorSpace),jt=r.convert(w.type),Ue=M(w.internalFormat,Ie,jt,w.colorSpace),Xe=w.isVideoTexture!==!0,yn=pt.__version===void 0||ft===!0,V=ht.dataReady;let Tt=b(w,Ze);qt(s.TEXTURE_CUBE_MAP,w);let ct;if(Be){Xe&&yn&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,Ue,Ze.width,Ze.height);for(let dt=0;dt<6;dt++){ct=Wt[dt].mipmaps;for(let Rt=0;Rt<ct.length;Rt++){const we=ct[Rt];w.format!==Un?Ie!==null?Xe?V&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,0,0,we.width,we.height,Ie,we.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,0,0,we.width,we.height,Ie,jt,we.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,Ue,we.width,we.height,0,Ie,jt,we.data)}}}else{if(ct=w.mipmaps,Xe&&yn){ct.length>0&&Tt++;const dt=Zt(Wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,Ue,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Et){Xe?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Wt[dt].width,Wt[dt].height,Ie,jt,Wt[dt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Ue,Wt[dt].width,Wt[dt].height,0,Ie,jt,Wt[dt].data);for(let Rt=0;Rt<ct.length;Rt++){const Qe=ct[Rt].image[dt].image;Xe?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,0,0,Qe.width,Qe.height,Ie,jt,Qe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,Ue,Qe.width,Qe.height,0,Ie,jt,Qe.data)}}else{Xe?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ie,jt,Wt[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Ue,Ie,jt,Wt[dt]);for(let Rt=0;Rt<ct.length;Rt++){const we=ct[Rt];Xe?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,0,0,Ie,jt,we.image[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,Ue,Ie,jt,we.image[dt])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),pt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function bt(U,w,q,ft,ht,pt){const fe=r.convert(q.format,q.colorSpace),Dt=r.convert(q.type),$t=M(q.internalFormat,fe,Dt,q.colorSpace);if(!n.get(w).__hasExternalTextures){const Et=Math.max(1,w.width>>pt),Wt=Math.max(1,w.height>>pt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,pt,$t,Et,Wt,w.depth,0,fe,Dt,null):e.texImage2D(ht,pt,$t,Et,Wt,0,fe,Dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),at(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,ht,n.get(q).__webglTexture,0,Ot(w)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,ht,n.get(q).__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(U,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const ft=w.depthTexture,ht=ft&&ft.isDepthTexture?ft.type:null,pt=y(w.stencilBuffer,ht),fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Ot(w);at(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,pt,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,pt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,pt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,U)}else{const ft=w.textures;for(let ht=0;ht<ft.length;ht++){const pt=ft[ht],fe=r.convert(pt.format,pt.colorSpace),Dt=r.convert(pt.type),$t=M(pt.internalFormat,fe,Dt,pt.colorSpace),Be=Ot(w);q&&at(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,$t,w.width,w.height):at(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be,$t,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,$t,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const ft=n.get(w.depthTexture).__webglTexture,ht=Ot(w);if(w.depthTexture.format===Qi)at(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0);else if(w.depthTexture.format===_r)at(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function ge(U){const w=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ft){const ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ft.removeEventListener("dispose",ht)};ft.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=ft}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ut(w.__webglFramebuffer,U)}else if(q){w.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ft]),w.__webglDepthbuffer[ft]===void 0)w.__webglDepthbuffer[ft]=s.createRenderbuffer(),Jt(w.__webglDepthbuffer[ft],U,!1);else{const ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=w.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,pt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Jt(w.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function De(U,w,q){const ft=n.get(U);w!==void 0&&bt(ft.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&ge(U)}function Re(U){const w=U.texture,q=n.get(U),ft=n.get(w);U.addEventListener("dispose",R);const ht=U.textures,pt=U.isWebGLCubeRenderTarget===!0,fe=ht.length>1;if(fe||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=w.version,o.memory.textures++),pt){q.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Dt]=[];for(let $t=0;$t<w.mipmaps.length;$t++)q.__webglFramebuffer[Dt][$t]=s.createFramebuffer()}else q.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Dt=0;Dt<w.mipmaps.length;Dt++)q.__webglFramebuffer[Dt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(fe)for(let Dt=0,$t=ht.length;Dt<$t;Dt++){const Be=n.get(ht[Dt]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&at(U)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Dt=0;Dt<ht.length;Dt++){const $t=ht[Dt];q.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Dt]);const Be=r.convert($t.format,$t.colorSpace),Et=r.convert($t.type),Wt=M($t.internalFormat,Be,Et,$t.colorSpace,U.isXRRenderTarget===!0),Ze=Ot(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Wt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,q.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Jt(q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),qt(s.TEXTURE_CUBE_MAP,w);for(let Dt=0;Dt<6;Dt++)if(w.mipmaps&&w.mipmaps.length>0)for(let $t=0;$t<w.mipmaps.length;$t++)bt(q.__webglFramebuffer[Dt][$t],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,$t);else bt(q.__webglFramebuffer[Dt],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);g(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(fe){for(let Dt=0,$t=ht.length;Dt<$t;Dt++){const Be=ht[Dt],Et=n.get(Be);e.bindTexture(s.TEXTURE_2D,Et.__webglTexture),qt(s.TEXTURE_2D,Be),bt(q.__webglFramebuffer,U,Be,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),g(Be)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Dt,ft.__webglTexture),qt(Dt,w),w.mipmaps&&w.mipmaps.length>0)for(let $t=0;$t<w.mipmaps.length;$t++)bt(q.__webglFramebuffer[$t],U,w,s.COLOR_ATTACHMENT0,Dt,$t);else bt(q.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,Dt,0);g(w)&&p(Dt),e.unbindTexture()}U.depthBuffer&&ge(U)}function nn(U){const w=U.textures;for(let q=0,ft=w.length;q<ft;q++){const ht=w[q];if(g(ht)){const pt=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=n.get(ht).__webglTexture;e.bindTexture(pt,fe),p(pt),e.unbindTexture()}}}const P=[],wt=[];function yt(U){if(U.samples>0){if(at(U)===!1){const w=U.textures,q=U.width,ft=U.height;let ht=s.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(U),Dt=w.length>1;if(Dt)for(let $t=0;$t<w.length;$t++)e.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let $t=0;$t<w.length;$t++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[$t]);const Be=n.get(w[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,q,ft,0,0,q,ft,ht,s.NEAREST),l===!0&&(P.length=0,wt.length=0,P.push(s.COLOR_ATTACHMENT0+$t),U.depthBuffer&&U.resolveDepthBuffer===!1&&(P.push(pt),wt.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let $t=0;$t<w.length;$t++){e.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,fe.__webglColorRenderbuffer[$t]);const Be=n.get(w[$t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,Be,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ot(U){return Math.min(i.maxSamples,U.samples)}function at(U){const w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _e(U){const w=o.render.frame;u.get(U)!==w&&(u.set(U,w),U.update())}function Nt(U,w){const q=U.colorSpace,ft=U.format,ht=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==k&&q!==D&&(en.getTransfer(q)===vt?(ft!==Un||ht!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Zt(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=lt,this.setTexture3D=Q,this.setTextureCube=xt,this.rebindTextures=De,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=at}function tf(s,t){function e(n,i=D){let r;const o=en.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===ji)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ln)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_s)return s.BYTE;if(n===vs)return s.SHORT;if(n===mr)return s.UNSIGNED_SHORT;if(n===xs)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===Di)return s.HALF_FLOAT;if(n===ys)return s.ALPHA;if(n===Ms)return s.RGB;if(n===Un)return s.RGBA;if(n===zr)return s.LUMINANCE;if(n===kr)return s.LUMINANCE_ALPHA;if(n===Qi)return s.DEPTH_COMPONENT;if(n===_r)return s.DEPTH_STENCIL;if(n===Ss)return s.RED;if(n===Vr)return s.RED_INTEGER;if(n===sa)return s.RG;if(n===ao)return s.RG_INTEGER;if(n===bs)return s.RGBA_INTEGER;if(n===Hr||n===Mi||n===Es||n===le)if(o===vt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===le)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===le)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===vr||n===Gr||n===co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===ho||n===fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===ho)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===xr||n===Wr||n===vn||n===tr||n===Xr||n===Yr||n===qr||n===$r||n===yr||n===er||n===_o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vn)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$r)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yr)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===er)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nr||n===ws||n===Zr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nr)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ws)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===Kr||n===Jr||n===Yn)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yn)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class ef extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xo extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new wn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xi({vertexShader:Q0,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new On(new Vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends ar{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=new ev,g=e.getContextAttributes();let p=null,M=null;const y=[],b=[],F=new ut;let R=null;const L=new qn;L.layers.enable(1),L.viewport=new cn;const B=new qn;B.layers.enable(2),B.viewport=new cn;const A=[L,B],T=new ef;T.layers.enable(1),T.layers.enable(2);let z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let bt=y[rt];return bt===void 0&&(bt=new su,y[rt]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(rt){let bt=y[rt];return bt===void 0&&(bt=new su,y[rt]=bt),bt.getGripSpace()},this.getHand=function(rt){let bt=y[rt];return bt===void 0&&(bt=new su,y[rt]=bt),bt.getHandSpace()};function Y(rt){const bt=b.indexOf(rt.inputSource);if(bt===-1)return;const Jt=y[bt];Jt!==void 0&&(Jt.update(rt.inputSource,rt.frame,c||o),Jt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function J(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",lt);for(let rt=0;rt<y.length;rt++){const bt=b[rt];bt!==null&&(b[rt]=null,y[rt].disconnect(bt))}z=null,K=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,M=null,on.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=function(rt){return to(this,null,function*(){if(i=rt,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",J),i.addEventListener("inputsourceschange",lt),g.xrCompatible!==!0&&(yield e.makeXRCompatible()),R=t.getPixelRatio(),t.getSize(F),i.renderState.layers===void 0){const bt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,bt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Vi(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let bt=null,Jt=null,Ut=null;g.depth&&(Ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=g.stencil?_r:Qi,Jt=g.stencil?Li:si);const ge={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(ge),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Vi(f.textureWidth,f.textureHeight,{format:Un,type:Mn,depthTexture:new Qc(f.textureWidth,f.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield i.requestReferenceSpace(a),on.setContext(i),on.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function lt(rt){for(let bt=0;bt<rt.removed.length;bt++){const Jt=rt.removed[bt],Ut=b.indexOf(Jt);Ut>=0&&(b[Ut]=null,y[Ut].disconnect(Jt))}for(let bt=0;bt<rt.added.length;bt++){const Jt=rt.added[bt];let Ut=b.indexOf(Jt);if(Ut===-1){for(let De=0;De<y.length;De++)if(De>=b.length){b.push(Jt),Ut=De;break}else if(b[De]===null){b[De]=Jt,Ut=De;break}if(Ut===-1)break}const ge=y[Ut];ge&&ge.connect(Jt)}}const Q=new I,xt=new I;function nt(rt,bt,Jt){Q.setFromMatrixPosition(bt.matrixWorld),xt.setFromMatrixPosition(Jt.matrixWorld);const Ut=Q.distanceTo(xt),ge=bt.projectionMatrix.elements,De=Jt.projectionMatrix.elements,Re=ge[14]/(ge[10]-1),nn=ge[14]/(ge[10]+1),P=(ge[9]+1)/ge[5],wt=(ge[9]-1)/ge[5],yt=(ge[8]-1)/ge[0],Ot=(De[8]+1)/De[0],at=Re*yt,_e=Re*Ot,Nt=Ut/(-yt+Ot),Zt=Nt*-yt;if(bt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Zt),rt.translateZ(Nt),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ge[10]===-1)rt.projectionMatrix.copy(bt.projectionMatrix),rt.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{const U=Re+Nt,w=nn+Nt,q=at-Zt,ft=_e+(Ut-Zt),ht=P*nn/w*U,pt=wt*nn/w*U;rt.projectionMatrix.makePerspective(q,ft,ht,pt,U,w),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function Bt(rt,bt){bt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(bt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(i===null)return;let bt=rt.near,Jt=rt.far;_.texture!==null&&(_.depthNear>0&&(bt=_.depthNear),_.depthFar>0&&(Jt=_.depthFar)),T.near=B.near=L.near=bt,T.far=B.far=L.far=Jt,(z!==T.near||K!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,K=T.far);const Ut=rt.parent,ge=T.cameras;Bt(T,Ut);for(let De=0;De<ge.length;De++)Bt(ge[De],Ut);ge.length===2?nt(T,L,B):T.projectionMatrix.copy(L.projectionMatrix),Yt(rt,T,Ut)};function Yt(rt,bt,Jt){Jt===null?rt.matrix.copy(bt.matrixWorld):(rt.matrix.copy(Jt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(bt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(bt.projectionMatrix),rt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=yo*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(rt){l=rt,f!==null&&(f.fixedFoveation=rt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=rt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let qt=null;function Ge(rt,bt){if(u=bt.getViewerPose(c||o),m=bt,u!==null){const Jt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ut=!1;Jt.length!==T.cameras.length&&(T.cameras.length=0,Ut=!0);for(let De=0;De<Jt.length;De++){const Re=Jt[De];let nn=null;if(d!==null)nn=d.getViewport(Re);else{const wt=h.getViewSubImage(f,Re);nn=wt.viewport,De===0&&(t.setRenderTargetTextures(M,wt.colorTexture,f.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(M))}let P=A[De];P===void 0&&(P=new qn,P.layers.enable(De),P.viewport=new cn,A[De]=P),P.matrix.fromArray(Re.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Re.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(nn.x,nn.y,nn.width,nn.height),De===0&&(T.matrix.copy(P.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ut===!0&&T.cameras.push(P)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const De=h.getDepthInformation(Jt[0]);De&&De.isValid&&De.texture&&_.init(t,De,i.renderState)}}for(let Jt=0;Jt<y.length;Jt++){const Ut=b[Jt],ge=y[Jt];Ut!==null&&ge!==void 0&&ge.update(Ut,bt,c||o)}qt&&qt(rt,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),m=null}const on=new Ah;on.setAnimationLoop(Ge),this.setAnimationLoop=function(rt){qt=rt},this.dispose=function(){}}}const ks=new wi,iv=new Me;function rv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Mh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ie&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ie&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,b=M.envMapRotation;y&&(g.envMap.value=y,ks.copy(b),ks.x*=-1,ks.y*=-1,ks.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),g.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(ks)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ie&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function c(M,y){let b=i[M.id];b===void 0&&(m(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",g));const F=y.program;n.updateUBOMapping(M,F);const R=t.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function u(M){const y=h();M.__bindingPointIndex=y;const b=s.createBuffer(),F=M.__size,R=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,F,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=i[M.id],b=M.uniforms,F=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let R=0,L=b.length;R<L;R++){const B=Array.isArray(b[R])?b[R]:[b[R]];for(let A=0,T=B.length;A<T;A++){const z=B[A];if(d(z,R,A,F)===!0){const K=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let J=0;for(let lt=0;lt<Y.length;lt++){const Q=Y[lt],xt=_(Q);typeof Q=="number"||typeof Q=="boolean"?(z.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,K+J,z.__data)):Q.isMatrix3?(z.__data[0]=Q.elements[0],z.__data[1]=Q.elements[1],z.__data[2]=Q.elements[2],z.__data[3]=0,z.__data[4]=Q.elements[3],z.__data[5]=Q.elements[4],z.__data[6]=Q.elements[5],z.__data[7]=0,z.__data[8]=Q.elements[6],z.__data[9]=Q.elements[7],z.__data[10]=Q.elements[8],z.__data[11]=0):(Q.toArray(z.__data,J),J+=xt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,y,b,F){const R=M.value,L=y+"_"+b;if(F[L]===void 0)return typeof R=="number"||typeof R=="boolean"?F[L]=R:F[L]=R.clone(),!0;{const B=F[L];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return F[L]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function m(M){const y=M.uniforms;let b=0;const F=16;for(let L=0,B=y.length;L<B;L++){const A=Array.isArray(y[L])?y[L]:[y[L]];for(let T=0,z=A.length;T<z;T++){const K=A[T],Y=Array.isArray(K.value)?K.value:[K.value];for(let J=0,lt=Y.length;J<lt;J++){const Q=Y[J],xt=_(Q),nt=b%F,Bt=nt%xt.boundary,Yt=nt+Bt;b+=Bt,Yt!==0&&F-Yt<xt.storage&&(b+=F-Yt),K.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=xt.storage}}}const R=b%F;return R>0&&(b+=F-R),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class ov{constructor(t={}){const{canvas:e=th(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=O,this.toneMapping=mn,this.toneMappingExposure=1;const y=this;let b=!1,F=0,R=0,L=null,B=-1,A=null;const T=new cn,z=new cn;let K=null;const Y=new Ht(0);let J=0,lt=e.width,Q=e.height,xt=1,nt=null,Bt=null;const Yt=new cn(0,0,lt,Q),qt=new cn(0,0,lt,Q);let Ge=!1;const on=new _a;let rt=!1,bt=!1;const Jt=new Me,Ut=new I,ge=new cn,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function nn(){return L===null?xt:1}let P=n;function wt(C,H){return e.getContext(C,H)}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${W}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),P===null){const H="webgl2";if(P=wt(H,C),P===null)throw wt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let yt,Ot,at,_e,Nt,Zt,U,w,q,ft,ht,pt,fe,Dt,$t,Be,Et,Wt,Ze,Ie,jt,Ue,Xe,yn;function V(){yt=new f_(P),yt.init(),Ue=new tf(P,yt),Ot=new o_(P,yt,t,Ue),at=new X0(P),_e=new m_(P),Nt=new L0,Zt=new J0(P,yt,at,Nt,Ot,Ue,_e),U=new l_(y),w=new h_(y),q=new nm(P),Xe=new r_(P,q),ft=new d_(P,q,_e,Xe),ht=new __(P,ft,q,_e),Ze=new g_(P,Ot,Zt),Be=new a_(Nt),pt=new D0(y,U,w,yt,Ot,Xe,Be),fe=new rv(y,Nt),Dt=new N0,$t=new V0(yt),Wt=new i_(y,U,w,at,ht,f,l),Et=new W0(y,ht,Ot),yn=new sv(P,_e,Ot,at),Ie=new s_(P,yt,_e),jt=new p_(P,yt,_e),_e.programs=pt.programs,y.capabilities=Ot,y.extensions=yt,y.properties=Nt,y.renderLists=Dt,y.shadowMap=Et,y.state=at,y.info=_e}V();const Tt=new nv(y,P);this.xr=Tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=yt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=yt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(C){C!==void 0&&(xt=C,this.setSize(lt,Q,!1))},this.getSize=function(C){return C.set(lt,Q)},this.setSize=function(C,H,X=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=C,Q=H,e.width=Math.floor(C*xt),e.height=Math.floor(H*xt),X===!0&&(e.style.width=C+"px",e.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(lt*xt,Q*xt).floor()},this.setDrawingBufferSize=function(C,H,X){lt=C,Q=H,xt=X,e.width=Math.floor(C*X),e.height=Math.floor(H*X),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Yt)},this.setViewport=function(C,H,X,$){C.isVector4?Yt.set(C.x,C.y,C.z,C.w):Yt.set(C,H,X,$),at.viewport(T.copy(Yt).multiplyScalar(xt).round())},this.getScissor=function(C){return C.copy(qt)},this.setScissor=function(C,H,X,$){C.isVector4?qt.set(C.x,C.y,C.z,C.w):qt.set(C,H,X,$),at.scissor(z.copy(qt).multiplyScalar(xt).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(C){at.setScissorTest(Ge=C)},this.setOpaqueSort=function(C){nt=C},this.setTransparentSort=function(C){Bt=C},this.getClearColor=function(C){return C.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(C=!0,H=!0,X=!0){let $=0;if(C){let G=!1;if(L!==null){const At=L.texture.format;G=At===bs||At===ao||At===Vr}if(G){const At=L.texture.type,Gt=At===Mn||At===si||At===mr||At===Li||At===ji||At===gr,te=Wt.getClearColor(),ee=Wt.getClearAlpha(),Te=te.r,Pe=te.g,se=te.b;Gt?(d[0]=Te,d[1]=Pe,d[2]=se,d[3]=ee,P.clearBufferuiv(P.COLOR,0,d)):(m[0]=Te,m[1]=Pe,m[2]=se,m[3]=ee,P.clearBufferiv(P.COLOR,0,m))}else $|=P.COLOR_BUFFER_BIT}H&&($|=P.DEPTH_BUFFER_BIT),X&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Dt.dispose(),$t.dispose(),Nt.dispose(),U.dispose(),w.dispose(),ht.dispose(),Xe.dispose(),yn.dispose(),pt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",hr),Tt.removeEventListener("sessionend",Gd),Qs.stop()};function ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=_e.autoReset,H=Et.enabled,X=Et.autoUpdate,$=Et.needsUpdate,G=Et.type;V(),_e.autoReset=C,Et.enabled=H,Et.autoUpdate=X,Et.needsUpdate=$,Et.type=G}function Rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function we(C){const H=C.target;H.removeEventListener("dispose",we),Qe(H)}function Qe(C){Fn(C),Nt.remove(C)}function Fn(C){const H=Nt.get(C).programs;H!==void 0&&(H.forEach(function(X){pt.releaseProgram(X)}),C.isShaderMaterial&&pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,X,$,G,At){H===null&&(H=De);const Gt=G.isMesh&&G.matrixWorld.determinant()<0,te=iy(C,H,X,$,G);at.setMaterial($,Gt);let ee=X.index,Te=1;if($.wireframe===!0){if(ee=ft.getWireframeAttribute(X),ee===void 0)return;Te=2}const Pe=X.drawRange,se=X.attributes.position;let hn=Pe.start*Te,An=(Pe.start+Pe.count)*Te;At!==null&&(hn=Math.max(hn,At.start*Te),An=Math.min(An,(At.start+At.count)*Te)),ee!==null?(hn=Math.max(hn,0),An=Math.min(An,ee.count)):se!=null&&(hn=Math.max(hn,0),An=Math.min(An,se.count));const Cn=An-hn;if(Cn<0||Cn===1/0)return;Xe.setup(G,$,te,X,ee);let Ci,fn=Ie;if(ee!==null&&(Ci=q.get(ee),fn=jt,fn.setIndex(Ci)),G.isMesh)$.wireframe===!0?(at.setLineWidth($.wireframeLinewidth*nn()),fn.setMode(P.LINES)):fn.setMode(P.TRIANGLES);else if(G.isLine){let ue=$.linewidth;ue===void 0&&(ue=1),at.setLineWidth(ue*nn()),G.isLineSegments?fn.setMode(P.LINES):G.isLineLoop?fn.setMode(P.LINE_LOOP):fn.setMode(P.LINE_STRIP)}else G.isPoints?fn.setMode(P.POINTS):G.isSprite&&fn.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)fn.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))fn.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ue=G._multiDrawStarts,Zn=G._multiDrawCounts,dn=G._multiDrawCount,Zi=ee?q.get(ee).bytesPerElement:1,ta=Nt.get($).currentProgram.getUniforms();for(let Ri=0;Ri<dn;Ri++)ta.setValue(P,"_gl_DrawID",Ri),fn.render(ue[Ri]/Zi,Zn[Ri])}else if(G.isInstancedMesh)fn.renderInstances(hn,Cn,G.count);else if(X.isInstancedBufferGeometry){const ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Zn=Math.min(X.instanceCount,ue);fn.renderInstances(hn,Cn,Zn)}else fn.render(hn,Cn)};function $n(C,H,X){C.transparent===!0&&C.side===Vt&&C.forceSinglePass===!1?(C.side=ie,C.needsUpdate=!0,_c(C,H,X),C.side=ze,C.needsUpdate=!0,_c(C,H,X),C.side=Vt):_c(C,H,X)}this.compile=function(C,H,X=null){X===null&&(X=C),g=$t.get(X),g.init(H),M.push(g),X.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),C!==X&&C.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const $=new Set;return C.traverse(function(G){const At=G.material;if(At)if(Array.isArray(At))for(let Gt=0;Gt<At.length;Gt++){const te=At[Gt];$n(te,X,G),$.add(te)}else $n(At,X,G),$.add(At)}),M.pop(),g=null,$},this.compileAsync=function(C,H,X=null){const $=this.compile(C,H,X);return new Promise(G=>{function At(){if($.forEach(function(Gt){Nt.get(Gt).currentProgram.isReady()&&$.delete(Gt)}),$.size===0){G(C);return}setTimeout(At,10)}yt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let un=null;function Lr(C){un&&un(C)}function hr(){Qs.stop()}function Gd(){Qs.start()}const Qs=new Ah;Qs.setAnimationLoop(Lr),typeof self!="undefined"&&Qs.setContext(self),this.setAnimationLoop=function(C){un=C,Tt.setAnimationLoop(C),C===null?Qs.stop():Qs.start()},Tt.addEventListener("sessionstart",hr),Tt.addEventListener("sessionend",Gd),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(H),H=Tt.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,H,L),g=$t.get(C,M.length),g.init(H),M.push(g),Jt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),on.setFromProjectionMatrix(Jt),bt=this.localClippingEnabled,rt=Be.init(this.clippingPlanes,bt),_=Dt.get(C,p.length),_.init(),p.push(_),Tt.enabled===!0&&Tt.isPresenting===!0){const At=y.xr.getDepthSensingMesh();At!==null&&qu(At,H,-1/0,y.sortObjects)}qu(C,H,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(nt,Bt),Re=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Re&&Wt.addToRenderList(_,C),this.info.render.frame++,rt===!0&&Be.beginShadows();const X=g.state.shadowsArray;Et.render(X,C,H),rt===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,G=_.transmissive;if(g.setupLights(),H.isArrayCamera){const At=H.cameras;if(G.length>0)for(let Gt=0,te=At.length;Gt<te;Gt++){const ee=At[Gt];Xd($,G,C,ee)}Re&&Wt.render(C);for(let Gt=0,te=At.length;Gt<te;Gt++){const ee=At[Gt];Wd(_,C,ee,ee.viewport)}}else G.length>0&&Xd($,G,C,H),Re&&Wt.render(C),Wd(_,C,H);L!==null&&(Zt.updateMultisampleRenderTarget(L),Zt.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(y,C,H),Xe.resetDefaultState(),B=-1,A=null,M.pop(),M.length>0?(g=M[M.length-1],rt===!0&&Be.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function qu(C,H,X,$){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||on.intersectsSprite(C)){$&&ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Jt);const Gt=ht.update(C),te=C.material;te.visible&&_.push(C,Gt,te,X,ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||on.intersectsObject(C))){const Gt=ht.update(C),te=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ge.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ge.copy(Gt.boundingSphere.center)),ge.applyMatrix4(C.matrixWorld).applyMatrix4(Jt)),Array.isArray(te)){const ee=Gt.groups;for(let Te=0,Pe=ee.length;Te<Pe;Te++){const se=ee[Te],hn=te[se.materialIndex];hn&&hn.visible&&_.push(C,Gt,hn,X,ge.z,se)}}else te.visible&&_.push(C,Gt,te,X,ge.z,null)}}const At=C.children;for(let Gt=0,te=At.length;Gt<te;Gt++)qu(At[Gt],H,X,$)}function Wd(C,H,X,$){const G=C.opaque,At=C.transmissive,Gt=C.transparent;g.setupLightsView(X),rt===!0&&Be.setGlobalState(y.clippingPlanes,X),$&&at.viewport(T.copy($)),G.length>0&&gc(G,H,X),At.length>0&&gc(At,H,X),Gt.length>0&&gc(Gt,H,X),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Xd(C,H,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Vi(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Di:Mn,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:en.workingColorSpace}));const At=g.state.transmissionRenderTarget[$.id],Gt=$.viewport||T;At.setSize(Gt.z,Gt.w);const te=y.getRenderTarget();y.setRenderTarget(At),y.getClearColor(Y),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Re&&Wt.render(X);const ee=y.toneMapping;y.toneMapping=mn;const Te=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),rt===!0&&Be.setGlobalState(y.clippingPlanes,$),gc(C,X,$),Zt.updateMultisampleRenderTarget(At),Zt.updateRenderTargetMipmap(At),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let se=0,hn=H.length;se<hn;se++){const An=H[se],Cn=An.object,Ci=An.geometry,fn=An.material,ue=An.group;if(fn.side===Vt&&Cn.layers.test($.layers)){const Zn=fn.side;fn.side=ie,fn.needsUpdate=!0,Yd(Cn,X,$,Ci,fn,ue),fn.side=Zn,fn.needsUpdate=!0,Pe=!0}}Pe===!0&&(Zt.updateMultisampleRenderTarget(At),Zt.updateRenderTargetMipmap(At))}y.setRenderTarget(te),y.setClearColor(Y,J),Te!==void 0&&($.viewport=Te),y.toneMapping=ee}function gc(C,H,X){const $=H.isScene===!0?H.overrideMaterial:null;for(let G=0,At=C.length;G<At;G++){const Gt=C[G],te=Gt.object,ee=Gt.geometry,Te=$===null?Gt.material:$,Pe=Gt.group;te.layers.test(X.layers)&&Yd(te,H,X,ee,Te,Pe)}}function Yd(C,H,X,$,G,At){C.onBeforeRender(y,H,X,$,G,At),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(y,H,X,$,C,At),G.transparent===!0&&G.side===Vt&&G.forceSinglePass===!1?(G.side=ie,G.needsUpdate=!0,y.renderBufferDirect(X,H,$,G,C,At),G.side=ze,G.needsUpdate=!0,y.renderBufferDirect(X,H,$,G,C,At),G.side=Vt):y.renderBufferDirect(X,H,$,G,C,At),C.onAfterRender(y,H,X,$,G,At)}function _c(C,H,X){H.isScene!==!0&&(H=De);const $=Nt.get(C),G=g.state.lights,At=g.state.shadowsArray,Gt=G.state.version,te=pt.getParameters(C,G.state,At,H,X),ee=pt.getProgramCacheKey(te);let Te=$.programs;$.environment=C.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(C.isMeshStandardMaterial?w:U).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Te===void 0&&(C.addEventListener("dispose",we),Te=new Map,$.programs=Te);let Pe=Te.get(ee);if(Pe!==void 0){if($.currentProgram===Pe&&$.lightsStateVersion===Gt)return $d(C,te),Pe}else te.uniforms=pt.getUniforms(C),C.onBeforeCompile(te,y),Pe=pt.acquireProgram(te,ee),Te.set(ee,Pe),$.uniforms=te.uniforms;const se=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(se.clippingPlanes=Be.uniform),$d(C,te),$.needsLights=sy(C),$.lightsStateVersion=Gt,$.needsLights&&(se.ambientLightColor.value=G.state.ambient,se.lightProbe.value=G.state.probe,se.directionalLights.value=G.state.directional,se.directionalLightShadows.value=G.state.directionalShadow,se.spotLights.value=G.state.spot,se.spotLightShadows.value=G.state.spotShadow,se.rectAreaLights.value=G.state.rectArea,se.ltc_1.value=G.state.rectAreaLTC1,se.ltc_2.value=G.state.rectAreaLTC2,se.pointLights.value=G.state.point,se.pointLightShadows.value=G.state.pointShadow,se.hemisphereLights.value=G.state.hemi,se.directionalShadowMap.value=G.state.directionalShadowMap,se.directionalShadowMatrix.value=G.state.directionalShadowMatrix,se.spotShadowMap.value=G.state.spotShadowMap,se.spotLightMatrix.value=G.state.spotLightMatrix,se.spotLightMap.value=G.state.spotLightMap,se.pointShadowMap.value=G.state.pointShadowMap,se.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Pe,$.uniformsList=null,Pe}function qd(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=yl.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function $d(C,H){const X=Nt.get(C);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function iy(C,H,X,$,G){H.isScene!==!0&&(H=De),Zt.resetTextureUnits();const At=H.fog,Gt=$.isMeshStandardMaterial?H.environment:null,te=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:k,ee=($.isMeshStandardMaterial?w:U).get($.envMap||Gt),Te=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),se=!!X.morphAttributes.position,hn=!!X.morphAttributes.normal,An=!!X.morphAttributes.color;let Cn=mn;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Cn=y.toneMapping);const Ci=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fn=Ci!==void 0?Ci.length:0,ue=Nt.get($),Zn=g.state.lights;if(rt===!0&&(bt===!0||C!==A)){const ki=C===A&&$.id===B;Be.setState($,C,ki)}let dn=!1;$.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==Zn.state.version||ue.outputColorSpace!==te||G.isBatchedMesh&&ue.batching===!1||!G.isBatchedMesh&&ue.batching===!0||G.isBatchedMesh&&ue.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ue.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ue.instancing===!1||!G.isInstancedMesh&&ue.instancing===!0||G.isSkinnedMesh&&ue.skinning===!1||!G.isSkinnedMesh&&ue.skinning===!0||G.isInstancedMesh&&ue.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ue.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ue.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ue.instancingMorph===!1&&G.morphTexture!==null||ue.envMap!==ee||$.fog===!0&&ue.fog!==At||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==Be.numPlanes||ue.numIntersection!==Be.numIntersection)||ue.vertexAlphas!==Te||ue.vertexTangents!==Pe||ue.morphTargets!==se||ue.morphNormals!==hn||ue.morphColors!==An||ue.toneMapping!==Cn||ue.morphTargetsCount!==fn)&&(dn=!0):(dn=!0,ue.__version=$.version);let Zi=ue.currentProgram;dn===!0&&(Zi=_c($,H,G));let ta=!1,Ri=!1,$u=!1;const Bn=Zi.getUniforms(),ps=ue.uniforms;if(at.useProgram(Zi.program)&&(ta=!0,Ri=!0,$u=!0),$.id!==B&&(B=$.id,Ri=!0),ta||A!==C){Bn.setValue(P,"projectionMatrix",C.projectionMatrix),Bn.setValue(P,"viewMatrix",C.matrixWorldInverse);const ki=Bn.map.cameraPosition;ki!==void 0&&ki.setValue(P,Ut.setFromMatrixPosition(C.matrixWorld)),Ot.logarithmicDepthBuffer&&Bn.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Bn.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Ri=!0,$u=!0)}if(G.isSkinnedMesh){Bn.setOptional(P,G,"bindMatrix"),Bn.setOptional(P,G,"bindMatrixInverse");const ki=G.skeleton;ki&&(ki.boneTexture===null&&ki.computeBoneTexture(),Bn.setValue(P,"boneTexture",ki.boneTexture,Zt))}G.isBatchedMesh&&(Bn.setOptional(P,G,"batchingTexture"),Bn.setValue(P,"batchingTexture",G._matricesTexture,Zt),Bn.setOptional(P,G,"batchingIdTexture"),Bn.setValue(P,"batchingIdTexture",G._indirectTexture,Zt),Bn.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&Bn.setValue(P,"batchingColorTexture",G._colorsTexture,Zt));const Zu=X.morphAttributes;if((Zu.position!==void 0||Zu.normal!==void 0||Zu.color!==void 0)&&Ze.update(G,X,Zi),(Ri||ue.receiveShadow!==G.receiveShadow)&&(ue.receiveShadow=G.receiveShadow,Bn.setValue(P,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ps.envMap.value=ee,ps.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(ps.envMapIntensity.value=H.environmentIntensity),Ri&&(Bn.setValue(P,"toneMappingExposure",y.toneMappingExposure),ue.needsLights&&ry(ps,$u),At&&$.fog===!0&&fe.refreshFogUniforms(ps,At),fe.refreshMaterialUniforms(ps,$,xt,Q,g.state.transmissionRenderTarget[C.id]),yl.upload(P,qd(ue),ps,Zt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(yl.upload(P,qd(ue),ps,Zt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Bn.setValue(P,"center",G.center),Bn.setValue(P,"modelViewMatrix",G.modelViewMatrix),Bn.setValue(P,"normalMatrix",G.normalMatrix),Bn.setValue(P,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ki=$.uniformsGroups;for(let Ku=0,oy=ki.length;Ku<oy;Ku++){const Zd=ki[Ku];yn.update(Zd,Zi),yn.bind(Zd,Zi)}}return Zi}function ry(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function sy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,H,X){Nt.get(C.texture).__webglTexture=H,Nt.get(C.depthTexture).__webglTexture=X;const $=Nt.get(C);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){const X=Nt.get(C);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,X=0){L=C,F=H,R=X;let $=!0,G=null,At=!1,Gt=!1;if(C){const ee=Nt.get(C);if(ee.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(P.FRAMEBUFFER,null),$=!1;else if(ee.__webglFramebuffer===void 0)Zt.setupRenderTarget(C);else if(ee.__hasExternalTextures)Zt.rebindTextures(C,Nt.get(C.texture).__webglTexture,Nt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const se=C.depthTexture;if(ee.__boundDepthTexture!==se){if(se!==null&&Nt.has(se)&&(C.width!==se.image.width||C.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Zt.setupDepthRenderbuffer(C)}}const Te=C.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Gt=!0);const Pe=Nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[H])?G=Pe[H][X]:G=Pe[H],At=!0):C.samples>0&&Zt.useMultisampledRTT(C)===!1?G=Nt.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?G=Pe[X]:G=Pe,T.copy(C.viewport),z.copy(C.scissor),K=C.scissorTest}else T.copy(Yt).multiplyScalar(xt).floor(),z.copy(qt).multiplyScalar(xt).floor(),K=Ge;if(at.bindFramebuffer(P.FRAMEBUFFER,G)&&$&&at.drawBuffers(C,G),at.viewport(T),at.scissor(z),at.setScissorTest(K),At){const ee=Nt.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,ee.__webglTexture,X)}else if(Gt){const ee=Nt.get(C.texture),Te=H||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ee.__webglTexture,X||0,Te)}B=-1},this.readRenderTargetPixels=function(C,H,X,$,G,At,Gt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=Nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(te=te[Gt]),te){at.bindFramebuffer(P.FRAMEBUFFER,te);try{const ee=C.texture,Te=ee.format,Pe=ee.type;if(!Ot.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-$&&X>=0&&X<=C.height-G&&P.readPixels(H,X,$,G,Ue.convert(Te),Ue.convert(Pe),At)}finally{const ee=L!==null?Nt.get(L).__webglFramebuffer:null;at.bindFramebuffer(P.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=function(C,H,X,$,G,At,Gt){return to(this,null,function*(){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=Nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(te=te[Gt]),te){at.bindFramebuffer(P.FRAMEBUFFER,te);try{const ee=C.texture,Te=ee.format,Pe=ee.type;if(!Ot.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=C.width-$&&X>=0&&X<=C.height-G){const se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,se),P.bufferData(P.PIXEL_PACK_BUFFER,At.byteLength,P.STREAM_READ),P.readPixels(H,X,$,G,Ue.convert(Te),Ue.convert(Pe),0),P.flush();const hn=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);yield Ap(P,hn,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,At)}finally{P.deleteBuffer(se),P.deleteSync(hn)}return At}}finally{const ee=L!==null?Nt.get(L).__webglFramebuffer:null;at.bindFramebuffer(P.FRAMEBUFFER,ee)}}})},this.copyFramebufferToTexture=function(C,H=null,X=0){C.isTexture!==!0&&(So("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1]);const $=Math.pow(2,-X),G=Math.floor(C.image.width*$),At=Math.floor(C.image.height*$),Gt=H!==null?H.x:0,te=H!==null?H.y:0;Zt.setTexture2D(C,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Gt,te,G,At),at.unbindTexture()},this.copyTextureToTexture=function(C,H,X=null,$=null,G=0){C.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1],H=arguments[2],G=arguments[3]||0,X=null);let At,Gt,te,ee,Te,Pe;X!==null?(At=X.max.x-X.min.x,Gt=X.max.y-X.min.y,te=X.min.x,ee=X.min.y):(At=C.image.width,Gt=C.image.height,te=0,ee=0),$!==null?(Te=$.x,Pe=$.y):(Te=0,Pe=0);const se=Ue.convert(H.format),hn=Ue.convert(H.type);Zt.setTexture2D(H,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);const An=P.getParameter(P.UNPACK_ROW_LENGTH),Cn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ci=P.getParameter(P.UNPACK_SKIP_PIXELS),fn=P.getParameter(P.UNPACK_SKIP_ROWS),ue=P.getParameter(P.UNPACK_SKIP_IMAGES),Zn=C.isCompressedTexture?C.mipmaps[G]:C.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Zn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Zn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,te),P.pixelStorei(P.UNPACK_SKIP_ROWS,ee),C.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,G,Te,Pe,At,Gt,se,hn,Zn.data):C.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,G,Te,Pe,Zn.width,Zn.height,se,Zn.data):P.texSubImage2D(P.TEXTURE_2D,G,Te,Pe,At,Gt,se,hn,Zn),P.pixelStorei(P.UNPACK_ROW_LENGTH,An),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Cn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ci),P.pixelStorei(P.UNPACK_SKIP_ROWS,fn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ue),G===0&&H.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(C,H,X=null,$=null,G=0){C.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,C=arguments[2],H=arguments[3],G=arguments[4]||0);let At,Gt,te,ee,Te,Pe,se,hn,An;const Cn=C.isCompressedTexture?C.mipmaps[G]:C.image;X!==null?(At=X.max.x-X.min.x,Gt=X.max.y-X.min.y,te=X.max.z-X.min.z,ee=X.min.x,Te=X.min.y,Pe=X.min.z):(At=Cn.width,Gt=Cn.height,te=Cn.depth,ee=0,Te=0,Pe=0),$!==null?(se=$.x,hn=$.y,An=$.z):(se=0,hn=0,An=0);const Ci=Ue.convert(H.format),fn=Ue.convert(H.type);let ue;if(H.isData3DTexture)Zt.setTexture3D(H,0),ue=P.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Zt.setTexture2DArray(H,0),ue=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);const Zn=P.getParameter(P.UNPACK_ROW_LENGTH),dn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zi=P.getParameter(P.UNPACK_SKIP_PIXELS),ta=P.getParameter(P.UNPACK_SKIP_ROWS),Ri=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Cn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Cn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,Te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe),C.isDataTexture||C.isData3DTexture?P.texSubImage3D(ue,G,se,hn,An,At,Gt,te,Ci,fn,Cn.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(ue,G,se,hn,An,At,Gt,te,Ci,Cn.data):P.texSubImage3D(ue,G,se,hn,An,At,Gt,te,Ci,fn,Cn),P.pixelStorei(P.UNPACK_ROW_LENGTH,Zn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zi),P.pixelStorei(P.UNPACK_SKIP_ROWS,ta),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ri),G===0&&H.generateMipmaps&&P.generateMipmap(ue),at.unbindTexture()},this.initRenderTarget=function(C){Nt.get(C).__webglFramebuffer===void 0&&Zt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Zt.setTextureCube(C,0):C.isData3DTexture?Zt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Zt.setTexture2DArray(C,0):Zt.setTexture2D(C,0),at.unbindTexture()},this.resetState=function(){F=0,R=0,L=null,at.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===j?"display-p3":"srgb",e.unpackColorSpace=en.workingColorSpace===st?"display-p3":"srgb"}}class Sl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new Sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nf extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class El{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ts,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return So("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ui=new I;class Vs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ui.fromBufferAttribute(this,e),ui.applyMatrix4(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ui.fromBufferAttribute(this,e),ui.applyNormalMatrix(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ui.fromBufferAttribute(this,e),ui.transformDirection(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ou extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yo;const xa=new I,qo=new I,$o=new I,Zo=new ut,ya=new ut,rf=new Me,wl=new I,Ma=new I,Tl=new I,sf=new ut,au=new ut,of=new ut;class af extends Je{constructor(t=new ou){if(super(),this.isSprite=!0,this.type="Sprite",Yo===void 0){Yo=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new El(e,5);Yo.setIndex([0,1,2,0,2,3]),Yo.setAttribute("position",new Vs(n,3,0,!1)),Yo.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=Yo,this.material=t,this.center=new ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qo.setFromMatrixScale(this.matrixWorld),rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$o.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qo.multiplyScalar(-$o.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Al(wl.set(-.5,-.5,0),$o,o,qo,i,r),Al(Ma.set(.5,-.5,0),$o,o,qo,i,r),Al(Tl.set(.5,.5,0),$o,o,qo,i,r),sf.set(0,0),au.set(1,0),of.set(1,1);let a=t.ray.intersectTriangle(wl,Ma,Tl,!1,xa);if(a===null&&(Al(Ma.set(-.5,.5,0),$o,o,qo,i,r),au.set(0,1),a=t.ray.intersectTriangle(wl,Tl,Ma,!1,xa),a===null))return;const l=t.ray.origin.distanceTo(xa);l<t.near||l>t.far||e.push({distance:l,point:xa.clone(),uv:Ti.getInterpolation(xa,wl,Ma,Tl,sf,au,of,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Al(s,t,e,n,i,r){Zo.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ya.x=r*Zo.x-i*Zo.y,ya.y=i*Zo.x+r*Zo.y):ya.copy(Zo),s.copy(t),s.x+=ya.x,s.y+=ya.y,s.applyMatrix4(rf)}const Cl=new I,lf=new I;class cf extends Je{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Cl.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Cl);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Cl.setFromMatrixPosition(t.matrixWorld),lf.setFromMatrixPosition(this.matrixWorld);const n=Cl.distanceTo(lf)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const uf=new I,hf=new cn,ff=new cn,av=new I,df=new Me,Rl=new I,lu=new Qn,pf=new Me,cu=new Co;class mf extends On{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ra,this.bindMatrix=new Me,this.bindMatrixInverse=new Me,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new li),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Rl),this.boundingBox.expandByPoint(Rl)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Rl),this.boundingSphere.expandByPoint(Rl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lu.copy(this.boundingSphere),lu.applyMatrix4(i),t.ray.intersectsSphere(lu)!==!1&&(pf.copy(i).invert(),cu.copy(t.ray).applyMatrix4(pf),!(this.boundingBox!==null&&cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,cu)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new cn,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ra?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wn?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;hf.fromBufferAttribute(i.attributes.skinIndex,t),ff.fromBufferAttribute(i.attributes.skinWeight,t),uf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=ff.getComponent(r);if(o!==0){const a=hf.getComponent(r);df.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(av.copy(uf).applyMatrix4(df),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class uu extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lr extends wn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=_n,u=_n,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gf=new Me,lv=new Me;class Pl{constructor(t=[],e=[]){this.uuid=bi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Me)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Me;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:lv;gf.multiplyMatrices(a,e[r]),gf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new lr(e,t,t,Un,Rn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new uu),this.bones.push(o),this.boneInverses.push(new Me().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ko extends pn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Jo=new Me,_f=new Me,Il=[],vf=new li,cv=new Me,Sa=new On,ba=new Qn;class xf extends On{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Jo),vf.copy(t.boundingBox).applyMatrix4(Jo),this.boundingBox.union(vf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Jo),ba.copy(t.boundingSphere).applyMatrix4(Jo),this.boundingSphere.union(ba)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),t.ray.intersectsSphere(ba)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Jo),_f.multiplyMatrices(n,Jo),Sa.matrixWorld=_f,Sa.raycast(t,Il);for(let o=0,a=Il.length;o<a;o++){const l=Il[o];l.instanceId=r,l.object=this,e.push(l)}Il.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(i*this.count),i,this.count,Ss,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function uv(s,t){return s.z-t.z}function hv(s,t){return t.z-s.z}class fv{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const o=i[this.index];r.push(o),this.index++,o.start=t.start,o.count=t.count,o.z=e,o.index=n}reset(){this.list.length=0,this.index=0}}const cs=new Me,hu=new Me,dv=new Me,pv=new Ht(1,1,1),yf=new Me,fu=new _a,Dl=new li,Hs=new Qn,Ea=new I,Mf=new I,mv=new I,du=new fv,ni=new On,Ll=[];function gv(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}class Sf extends On{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,i){super(new Ve,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new lr(e,t,t,Un,Rn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new lr(e,t,t,Vr,si);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new lr(e,t,t,Un,Rn);n.colorSpace=en.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new pn(u,l,c);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new pn(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.boundingBox,e=this._drawInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,cs),this.getBoundingBoxAt(r,Dl).applyMatrix4(cs),t.union(Dl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,cs),this.getBoundingSphereAt(r,Hs).applyMatrix4(cs),t.union(Hs)}}addInstance(t){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:t});const e=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;dv.toArray(i,e*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(pv.toArray(r.image.data,e*4),r.needsUpdate=!0),e}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=t.getIndex(),u=c!==null;if(u&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._geometryCount;return this._geometryCount++,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new li,sphereInitialized:!1,sphere:new Qn}),this.setGeometryAt(h,t),h}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(i&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.vertexCount;for(const d in n.attributes){const m=e.getAttribute(d),_=n.getAttribute(d);gv(m,_,l);const g=m.itemSize;for(let p=m.count,M=c;p<M;p++){const y=l+p;for(let b=0;b<g;b++)_.setComponent(y,b,0)}_.needsUpdate=!0,_.addUpdateRange(l*g,c*g)}if(i){const d=a.indexStart;for(let m=0;m<o.count;m++)r.setX(d+m,l+o.getX(m));for(let m=o.count,_=a.indexCount;m<_;m++)r.setX(d+m,l);r.needsUpdate=!0,r.addUpdateRange(d,a.indexCount)}const u=this._bounds[t];e.boundingBox!==null?(u.box.copy(e.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,e.boundingSphere!==null?(u.sphere.copy(e.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[t],f=e.getAttribute("position");return h.count=i?o.count:f.count,this._visibilityChanged=!0,t}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const o=r.index,a=r.attributes.position,l=this._drawRanges[t];for(let c=l.start,u=l.start+l.count;c<u;c++){let h=c;o&&(h=o.getX(h)),i.expandByPoint(Ea.fromBufferAttribute(a,h))}n.boxInitialized=!0}return e.copy(i),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(t,Dl),Dl.getCenter(i.center);const o=r.index,a=r.attributes.position,l=this._drawRanges[t];let c=0;for(let u=l.start,h=l.start+l.count;u<h;u++){let f=u;o&&(f=o.getX(f)),Ea.fromBufferAttribute(a,f),c=Math.max(c,i.center.distanceToSquared(Ea))}i.radius=Math.sqrt(c),n.sphereInitialized=!0}return e.copy(i),e}setMatrixAt(t,e){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._drawInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,i=this._drawInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}raycast(t,e){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,o=this.geometry;ni.material=this.material,ni.geometry.index=o.index,ni.geometry.attributes=o.attributes,ni.geometry.boundingBox===null&&(ni.geometry.boundingBox=new li),ni.geometry.boundingSphere===null&&(ni.geometry.boundingSphere=new Qn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=i[c];ni.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,ni.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,ni.geometry.boundingBox),this.getBoundingSphereAt(c,ni.geometry.boundingSphere),ni.raycast(t,Ll);for(let h=0,f=Ll.length;h<f;h++){const d=Ll[h];d.object=this,d.batchId=a,e.push(d)}Ll.length=0}ni.material=null,ni.geometry.index=null,ni.geometry.attributes={},ni.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>yi({},e)),this._reservedRanges=t._reservedRanges.map(e=>yi({},e)),this._drawInfo=t._drawInfo.map(e=>yi({},e)),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled,d=this._indirectTexture,m=d.image.data;f&&(yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),fu.setFromProjectionMatrix(yf,t.coordinateSystem));let _=0;if(this.sortObjects){hu.copy(this.matrixWorld).invert(),Ea.setFromMatrixPosition(n.matrixWorld).applyMatrix4(hu),Mf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(hu);for(let M=0,y=l.length;M<y;M++)if(l[M].visible&&l[M].active){const b=l[M].geometryIndex;this.getMatrixAt(M,cs),this.getBoundingSphereAt(b,Hs).applyMatrix4(cs);let F=!1;if(f&&(F=!fu.intersectsSphere(Hs)),!F){const R=mv.subVectors(Hs.center,Ea).dot(Mf);du.push(h[b],R,M)}}const g=du.list,p=this.customSort;p===null?g.sort(r.transparent?hv:uv):p.call(this,g,n);for(let M=0,y=g.length;M<y;M++){const b=g[M];c[_]=b.start*a,u[_]=b.count,m[_]=b.index,_++}du.reset()}else for(let g=0,p=l.length;g<p;g++)if(l[g].visible&&l[g].active){const M=l[g].geometryIndex;let y=!1;if(f&&(this.getMatrixAt(g,cs),this.getBoundingSphereAt(M,Hs).applyMatrix4(cs),y=!fu.intersectsSphere(Hs)),!y){const b=h[M];c[_]=b.start*a,u[_]=b.count,m[_]=g,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}}class hi extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ul=new I,Nl=new I,bf=new Me,wa=new Co,Ol=new Qn,pu=new I,Ef=new I;class us extends Je{constructor(t=new Ve,e=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ul.fromBufferAttribute(e,i-1),Nl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ul.distanceTo(Nl);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(i),Ol.radius+=r,t.ray.intersectsSphere(Ol)===!1)return;bf.copy(i).invert(),wa.copy(t.ray).applyMatrix4(bf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=u.getX(_),M=u.getX(_+1),y=Fl(this,t,wa,l,p,M);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=Fl(this,t,wa,l,_,g);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=Fl(this,t,wa,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Fl(this,t,wa,l,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fl(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Ul.fromBufferAttribute(o,i),Nl.fromBufferAttribute(o,r),e.distanceSqToSegment(Ul,Nl,pu,Ef)>n)return;pu.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(pu);if(!(l<t.near||l>t.far))return{distance:l,point:Ef.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const wf=new I,Tf=new I;class cr extends us{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)wf.fromBufferAttribute(e,i),Tf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wf.distanceTo(Tf);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Af extends us{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class mu extends ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cf=new Me,gu=new Co,Bl=new Qn,zl=new I;class Rf extends Je{constructor(t=new Ve,e=new mu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(i),Bl.radius+=r,t.ray.intersectsSphere(Bl)===!1)return;Cf.copy(i).invert(),gu.copy(t.ray).applyMatrix4(Cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);zl.fromBufferAttribute(h,g),Pf(zl,g,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)zl.fromBufferAttribute(h,m),Pf(zl,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pf(s,t,e,n,i,r,o){const a=gu.distanceSqToPoint(s);if(a<e){const l=new I;gu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class _v extends wn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:We,this.magFilter=r!==void 0?r:We,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class vv extends wn{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=_n,this.minFilter=_n,this.generateMipmaps=!1,this.needsUpdate=!0}}class kl extends wn{constructor(t,e,n,i,r,o,a,l,c,u,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class xv extends kl{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ye,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yv extends kl{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Mt),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Mv extends wn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ut:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],r=[],o=[],a=new I,l=new Me;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(En(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(En(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Vl extends qi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class If extends Vl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _u(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Hl=new I,vu=new _u,xu=new _u,yu=new _u;class Df extends qi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Hl.subVectors(i[0],i[1]).add(i[0]),c=Hl);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Hl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Hl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),vu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,_,g),xu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,_,g),yu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),xu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),yu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(vu.calc(l),xu.calc(l),yu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lf(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Sv(s,t){const e=1-s;return e*e*t}function bv(s,t){return 2*(1-s)*s*t}function Ev(s,t){return s*s*t}function Ta(s,t,e,n){return Sv(s,t)+bv(s,e)+Ev(s,n)}function wv(s,t){const e=1-s;return e*e*e*t}function Tv(s,t){const e=1-s;return 3*e*e*s*t}function Av(s,t){return 3*(1-s)*s*s*t}function Cv(s,t){return s*s*s*t}function Aa(s,t,e,n,i){return wv(s,t)+Tv(s,e)+Av(s,n)+Cv(s,i)}class Mu extends qi{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Aa(t,i.x,r.x,o.x,a.x),Aa(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uf extends qi{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Aa(t,i.x,r.x,o.x,a.x),Aa(t,i.y,r.y,o.y,a.y),Aa(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Su extends qi{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends qi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends qi{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ta(t,i.x,r.x,o.x),Ta(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eu extends qi{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ta(t,i.x,r.x,o.x),Ta(t,i.y,r.y,o.y),Ta(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends qi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Lf(a,l.x,c.x,u.x,h.x),Lf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ut().fromArray(i))}return this}}var Gl=Object.freeze({__proto__:null,ArcCurve:If,CatmullRomCurve3:Df,CubicBezierCurve:Mu,CubicBezierCurve3:Uf,EllipseCurve:Vl,LineCurve:Su,LineCurve3:Nf,QuadraticBezierCurve:bu,QuadraticBezierCurve3:Eu,SplineCurve:wu});class Of extends qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Gl[i.type]().fromJSON(i))}return this}}class Ca extends Of{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Su(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new bu(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Mu(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Vl(t,e,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ra extends Ve{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=En(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new I,f=new ut,d=new I,m=new I,_=new I;let g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let M=0;M<=e;M++){const y=n+M*u*i,b=Math.sin(y),F=Math.cos(y);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*b,h.y=t[R].y,h.z=t[R].x*F,o.push(h.x,h.y,h.z),f.x=M/e,f.y=R/(t.length-1),a.push(f.x,f.y);const L=l[3*R+0]*b,B=l[3*R+1],A=l[3*R+0]*F;c.push(L,B,A)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const b=y+M*t.length,F=b,R=b+t.length,L=b+t.length+1,B=b+1;r.push(F,R,B),r.push(L,B,R)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.points,t.segments,t.phiStart,t.phiLength)}}class Wl extends Ra{constructor(t=1,e=1,n=4,i=8){const r=new Ca;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Wl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Xl extends Ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,u=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jo extends Ve{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function M(){const b=new I,F=new I;let R=0;const L=(e-t)/n;for(let B=0;B<=r;B++){const A=[],T=B/r,z=T*(e-t)+t;for(let K=0;K<=i;K++){const Y=K/i,J=Y*l+a,lt=Math.sin(J),Q=Math.cos(J);F.x=z*lt,F.y=-T*n+g,F.z=z*Q,h.push(F.x,F.y,F.z),b.set(lt,L,Q).normalize(),f.push(b.x,b.y,b.z),d.push(Y,1-T),A.push(m++)}_.push(A)}for(let B=0;B<i;B++)for(let A=0;A<r;A++){const T=_[A][B],z=_[A+1][B],K=_[A+1][B+1],Y=_[A][B+1];u.push(T,z,Y),u.push(z,K,Y),R+=6}c.addGroup(p,R,0),p+=R}function y(b){const F=m,R=new ut,L=new I;let B=0;const A=b===!0?t:e,T=b===!0?1:-1;for(let K=1;K<=i;K++)h.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),m++;const z=m;for(let K=0;K<=i;K++){const J=K/i*l+a,lt=Math.cos(J),Q=Math.sin(J);L.x=A*Q,L.y=g*T,L.z=A*lt,h.push(L.x,L.y,L.z),f.push(0,T,0),R.x=lt*.5+.5,R.y=Q*.5*T+.5,d.push(R.x,R.y),m++}for(let K=0;K<i;K++){const Y=F+K,J=z+K;b===!0?u.push(J,J+1,Y):u.push(J+1,J,Y),B+=3}c.addGroup(p,B,b===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yl extends jo{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Yl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hs extends Ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new I,b=new I,F=new I;for(let R=0;R<e.length;R+=3)d(e[R+0],y),d(e[R+1],b),d(e[R+2],F),l(y,b,F,M)}function l(M,y,b,F){const R=F+1,L=[];for(let B=0;B<=R;B++){L[B]=[];const A=M.clone().lerp(b,B/R),T=y.clone().lerp(b,B/R),z=R-B;for(let K=0;K<=z;K++)K===0&&B===R?L[B][K]=A:L[B][K]=A.clone().lerp(T,K/z)}for(let B=0;B<R;B++)for(let A=0;A<2*(R-B)-1;A++){const T=Math.floor(A/2);A%2===0?(f(L[B][T+1]),f(L[B+1][T]),f(L[B][T])):(f(L[B][T+1]),f(L[B+1][T+1]),f(L[B+1][T]))}}function c(M){const y=new I;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(M),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function u(){const M=new I;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const b=g(M)/2/Math.PI+.5,F=p(M)/Math.PI+.5;o.push(b,1-F)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],b=o[M+2],F=o[M+4],R=Math.max(y,b,F),L=Math.min(y,b,F);R>.9&&L<.1&&(y<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),F<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,y){const b=M*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function m(){const M=new I,y=new I,b=new I,F=new I,R=new ut,L=new ut,B=new ut;for(let A=0,T=0;A<r.length;A+=9,T+=6){M.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),b.set(r[A+6],r[A+7],r[A+8]),R.set(o[T+0],o[T+1]),L.set(o[T+2],o[T+3]),B.set(o[T+4],o[T+5]),F.copy(M).add(y).add(b).divideScalar(3);const z=g(F);_(R,T+0,M,z),_(L,T+2,y,z),_(B,T+4,b,z)}}function _(M,y,b,F){F<0&&M.x===1&&(o[y]=M.x-1),b.x===0&&b.z===0&&(o[y]=F/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.vertices,t.indices,t.radius,t.details)}}class ql extends hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ql(t.radius,t.detail)}}const $l=new I,Zl=new I,Tu=new I,Kl=new Ti;class Ff extends Ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Ps*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:p}=Kl;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Kl.getNormal(Tu),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const y=(M+1)%3,b=h[M],F=h[y],R=Kl[u[M]],L=Kl[u[y]],B=`${b}_${F}`,A=`${F}_${b}`;A in f&&f[A]?(Tu.dot(f[A].normal)<=r&&(d.push(R.x,R.y,R.z),d.push(L.x,L.y,L.z)),f[A]=null):B in f||(f[B]={index0:c[M],index1:c[y],normal:Tu.clone()})}}for(const m in f)if(f[m]){const{index0:_,index1:g}=f[m];$l.fromBufferAttribute(a,_),Zl.fromBufferAttribute(a,g),d.push($l.x,$l.y,$l.z),d.push(Zl.x,Zl.y,Zl.z)}this.setAttribute("position",new Qt(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gs extends Ca{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ca().fromJSON(i))}return this}}const Rv={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Bf(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=Uv(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let m=e;m<i;m+=e)h=s[m],f=s[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Pa(r,o,e,a,l,d,0),o}};function Bf(s,t,e,n,i){let r,o;if(i===Xv(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Vf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Vf(r,s[r],s[r+1],o);return o&&Jl(o,o.next)&&(Da(o),o=o.next),o}function Ws(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Jl(e,e.next)||xn(e.prev,e,e.next)===0)){if(Da(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pa(s,t,e,n,i,r,o){if(!s)return;!o&&r&&zv(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Iv(s,n,i,r):Pv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Da(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Dv(Ws(s),t,e),Pa(s,t,e,n,i,r,2)):o===2&&Lv(s,t,e,n,i,r):Pa(Ws(s),t,e,n,i,r,1);break}}}function Pv(s){const t=s.prev,e=s,n=s.next;if(xn(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Qo(i,a,r,l,o,c,m.x,m.y)&&xn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Iv(s,t,e,n){const i=s.prev,r=s,o=s.next;if(xn(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,p=Au(d,m,t,e,n),M=Au(_,g,t,e,n);let y=s.prevZ,b=s.nextZ;for(;y&&y.z>=p&&b&&b.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Qo(a,u,l,h,c,f,y.x,y.y)&&xn(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=_&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Qo(a,u,l,h,c,f,b.x,b.y)&&xn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Qo(a,u,l,h,c,f,y.x,y.y)&&xn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=M;){if(b.x>=d&&b.x<=_&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Qo(a,u,l,h,c,f,b.x,b.y)&&xn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Dv(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Jl(i,r)&&zf(i,n,n.next,r)&&Ia(i,r)&&Ia(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Da(n),Da(n.next),n=s=r),n=n.next}while(n!==s);return Ws(n)}function Lv(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hv(o,a)){let l=kf(o,a);o=Ws(o,o.next),l=Ws(l,l.next),Pa(o,t,e,n,i,r,0),Pa(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Uv(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Bf(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Vv(c));for(i.sort(Nv),r=0;r<i.length;r++)e=Ov(i[r],e);return e}function Nv(s,t){return s.x-t.x}function Ov(s,t){const e=Fv(s,t);if(!e)return t;const n=kf(e,s);return Ws(n,n.next),Ws(e,e.next)}function Fv(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Qo(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ia(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&Bv(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function Bv(s,t){return xn(s.prev,s,t.prev)<0&&xn(t.next,s,s.next)<0}function zv(s,t,e,n){let i=s;do i.z===0&&(i.z=Au(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,kv(i)}function kv(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Au(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Vv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Qo(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Hv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Gv(s,t)&&(Ia(s,t)&&Ia(t,s)&&Wv(s,t)&&(xn(s.prev,s,t.prev)||xn(s,t.prev,t))||Jl(s,t)&&xn(s.prev,s,s.next)>0&&xn(t.prev,t,t.next)>0)}function xn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Jl(s,t){return s.x===t.x&&s.y===t.y}function zf(s,t,e,n){const i=Ql(xn(s,t,e)),r=Ql(xn(s,t,n)),o=Ql(xn(e,n,s)),a=Ql(xn(e,n,t));return!!(i!==r&&o!==a||i===0&&jl(s,e,t)||r===0&&jl(s,n,t)||o===0&&jl(e,s,n)||a===0&&jl(e,t,n))}function jl(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ql(s){return s>0?1:s<0?-1:0}function Gv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&zf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ia(s,t){return xn(s.prev,s,s.next)<0?xn(s,t,s.next)>=0&&xn(s,s.prev,t)>=0:xn(s,t,s.prev)<0||xn(s,s.next,t)<0}function Wv(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function kf(s,t){const e=new Cu(s.i,s.x,s.y),n=new Cu(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vf(s,t,e,n){const i=new Cu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Da(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Cu(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xv(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ur{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ur.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Hf(t),Gf(n,t);let o=t.length;e.forEach(Hf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Gf(n,e[l]);const a=Rv.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Hf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Gf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class tc extends Ve{constructor(t=new Gs([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Qt(i,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Yv;let y,b=!1,F,R,L,B;p&&(y=p.getSpacedPoints(u),b=!0,f=!1,F=p.computeFrenetFrames(u,!1),R=new I,L=new I,B=new I),f||(g=0,d=0,m=0,_=0);const A=a.extractPoints(c);let T=A.shape;const z=A.holes;if(!ur.isClockWise(T)){T=T.reverse();for(let P=0,wt=z.length;P<wt;P++){const yt=z[P];ur.isClockWise(yt)&&(z[P]=yt.reverse())}}const Y=ur.triangulateShape(T,z),J=T;for(let P=0,wt=z.length;P<wt;P++){const yt=z[P];T=T.concat(yt)}function lt(P,wt,yt){return wt||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(wt,yt)}const Q=T.length,xt=Y.length;function nt(P,wt,yt){let Ot,at,_e;const Nt=P.x-wt.x,Zt=P.y-wt.y,U=yt.x-P.x,w=yt.y-P.y,q=Nt*Nt+Zt*Zt,ft=Nt*w-Zt*U;if(Math.abs(ft)>Number.EPSILON){const ht=Math.sqrt(q),pt=Math.sqrt(U*U+w*w),fe=wt.x-Zt/ht,Dt=wt.y+Nt/ht,$t=yt.x-w/pt,Be=yt.y+U/pt,Et=(($t-fe)*w-(Be-Dt)*U)/(Nt*w-Zt*U);Ot=fe+Nt*Et-P.x,at=Dt+Zt*Et-P.y;const Wt=Ot*Ot+at*at;if(Wt<=2)return new ut(Ot,at);_e=Math.sqrt(Wt/2)}else{let ht=!1;Nt>Number.EPSILON?U>Number.EPSILON&&(ht=!0):Nt<-Number.EPSILON?U<-Number.EPSILON&&(ht=!0):Math.sign(Zt)===Math.sign(w)&&(ht=!0),ht?(Ot=-Zt,at=Nt,_e=Math.sqrt(q)):(Ot=Nt,at=Zt,_e=Math.sqrt(q/2))}return new ut(Ot/_e,at/_e)}const Bt=[];for(let P=0,wt=J.length,yt=wt-1,Ot=P+1;P<wt;P++,yt++,Ot++)yt===wt&&(yt=0),Ot===wt&&(Ot=0),Bt[P]=nt(J[P],J[yt],J[Ot]);const Yt=[];let qt,Ge=Bt.concat();for(let P=0,wt=z.length;P<wt;P++){const yt=z[P];qt=[];for(let Ot=0,at=yt.length,_e=at-1,Nt=Ot+1;Ot<at;Ot++,_e++,Nt++)_e===at&&(_e=0),Nt===at&&(Nt=0),qt[Ot]=nt(yt[Ot],yt[_e],yt[Nt]);Yt.push(qt),Ge=Ge.concat(qt)}for(let P=0;P<g;P++){const wt=P/g,yt=d*Math.cos(wt*Math.PI/2),Ot=m*Math.sin(wt*Math.PI/2)+_;for(let at=0,_e=J.length;at<_e;at++){const Nt=lt(J[at],Bt[at],Ot);Ut(Nt.x,Nt.y,-yt)}for(let at=0,_e=z.length;at<_e;at++){const Nt=z[at];qt=Yt[at];for(let Zt=0,U=Nt.length;Zt<U;Zt++){const w=lt(Nt[Zt],qt[Zt],Ot);Ut(w.x,w.y,-yt)}}}const on=m+_;for(let P=0;P<Q;P++){const wt=f?lt(T[P],Ge[P],on):T[P];b?(L.copy(F.normals[0]).multiplyScalar(wt.x),R.copy(F.binormals[0]).multiplyScalar(wt.y),B.copy(y[0]).add(L).add(R),Ut(B.x,B.y,B.z)):Ut(wt.x,wt.y,0)}for(let P=1;P<=u;P++)for(let wt=0;wt<Q;wt++){const yt=f?lt(T[wt],Ge[wt],on):T[wt];b?(L.copy(F.normals[P]).multiplyScalar(yt.x),R.copy(F.binormals[P]).multiplyScalar(yt.y),B.copy(y[P]).add(L).add(R),Ut(B.x,B.y,B.z)):Ut(yt.x,yt.y,h/u*P)}for(let P=g-1;P>=0;P--){const wt=P/g,yt=d*Math.cos(wt*Math.PI/2),Ot=m*Math.sin(wt*Math.PI/2)+_;for(let at=0,_e=J.length;at<_e;at++){const Nt=lt(J[at],Bt[at],Ot);Ut(Nt.x,Nt.y,h+yt)}for(let at=0,_e=z.length;at<_e;at++){const Nt=z[at];qt=Yt[at];for(let Zt=0,U=Nt.length;Zt<U;Zt++){const w=lt(Nt[Zt],qt[Zt],Ot);b?Ut(w.x,w.y+y[u-1].y,y[u-1].x+yt):Ut(w.x,w.y,h+yt)}}}rt(),bt();function rt(){const P=i.length/3;if(f){let wt=0,yt=Q*wt;for(let Ot=0;Ot<xt;Ot++){const at=Y[Ot];ge(at[2]+yt,at[1]+yt,at[0]+yt)}wt=u+g*2,yt=Q*wt;for(let Ot=0;Ot<xt;Ot++){const at=Y[Ot];ge(at[0]+yt,at[1]+yt,at[2]+yt)}}else{for(let wt=0;wt<xt;wt++){const yt=Y[wt];ge(yt[2],yt[1],yt[0])}for(let wt=0;wt<xt;wt++){const yt=Y[wt];ge(yt[0]+Q*u,yt[1]+Q*u,yt[2]+Q*u)}}n.addGroup(P,i.length/3-P,0)}function bt(){const P=i.length/3;let wt=0;Jt(J,wt),wt+=J.length;for(let yt=0,Ot=z.length;yt<Ot;yt++){const at=z[yt];Jt(at,wt),wt+=at.length}n.addGroup(P,i.length/3-P,1)}function Jt(P,wt){let yt=P.length;for(;--yt>=0;){const Ot=yt;let at=yt-1;at<0&&(at=P.length-1);for(let _e=0,Nt=u+g*2;_e<Nt;_e++){const Zt=Q*_e,U=Q*(_e+1),w=wt+Ot+Zt,q=wt+at+Zt,ft=wt+at+U,ht=wt+Ot+U;De(w,q,ft,ht)}}}function Ut(P,wt,yt){l.push(P),l.push(wt),l.push(yt)}function ge(P,wt,yt){Re(P),Re(wt),Re(yt);const Ot=i.length/3,at=M.generateTopUV(n,i,Ot-3,Ot-2,Ot-1);nn(at[0]),nn(at[1]),nn(at[2])}function De(P,wt,yt,Ot){Re(P),Re(wt),Re(Ot),Re(wt),Re(yt),Re(Ot);const at=i.length/3,_e=M.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);nn(_e[0]),nn(_e[1]),nn(_e[3]),nn(_e[1]),nn(_e[2]),nn(_e[3])}function Re(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function nn(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Gl[i.type]().fromJSON(i)),new tc(n,t.options)}}const Yv={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new ut(r,o),new ut(a,l),new ut(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-h),new ut(f,1-m),new ut(_,1-p)]:[new ut(a,1-l),new ut(u,1-h),new ut(d,1-m),new ut(g,1-p)]}};function qv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ec extends hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ec(t.radius,t.detail)}}class La extends hs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class nc extends Ve{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,d=new I,m=new ut;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=r+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const M=p+g,y=M,b=M+n+1,F=M+n+2,R=M+1;a.push(y,b,R),a.push(b,F,R)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ic extends Ve{constructor(t=new Gs([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(i,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function c(u){const h=i.length/3,f=u.extractPoints(e);let d=f.shape;const m=f.holes;ur.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];ur.isClockWise(M)===!0&&(m[g]=M.reverse())}const _=ur.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){const M=d[g];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=_.length;g<p;g++){const M=_[g],y=M[0]+h,b=M[1]+h,F=M[2]+h;n.push(y,b,F),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $v(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new ic(n,t.curveSegments)}}function $v(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Ua extends Ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let b=0;p===0&&o===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let F=0;F<=e;F++){const R=F/e;h.x=-t*Math.cos(i+R*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(i+R*r)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(R+b,1-y),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const y=u[p][M+1],b=u[p][M],F=u[p+1][M],R=u[p+1][M+1];(p!==0||o>0)&&d.push(y,b,R),(p!==n-1||l<Math.PI)&&d.push(b,F,R)}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rc extends hs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rc(t.radius,t.detail)}}class sc extends Ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new I,h=new I,f=new I;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const _=m/i*r,g=d/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,M=(i+1)*d+m;o.push(_,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class oc extends Ve{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],h=new I,f=new I,d=new I,m=new I,_=new I,g=new I,p=new I;for(let y=0;y<=n;++y){const b=y/n*r*Math.PI*2;M(b,r,o,t,d),M(b+.01,r,o,t,m),g.subVectors(m,d),p.addVectors(m,d),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let F=0;F<=i;++F){const R=F/i*Math.PI*2,L=-e*Math.cos(R),B=e*Math.sin(R);h.x=d.x+(L*p.x+B*_.x),h.y=d.y+(L*p.y+B*_.y),h.z=d.z+(L*p.z+B*_.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(y/n),u.push(F/i)}}for(let y=1;y<=n;y++)for(let b=1;b<=i;b++){const F=(i+1)*(y-1)+(b-1),R=(i+1)*y+(b-1),L=(i+1)*y+b,B=(i+1)*(y-1)+b;a.push(F,R,B),a.push(R,L,B)}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2));function M(y,b,F,R,L){const B=Math.cos(y),A=Math.sin(y),T=F/b*y,z=Math.cos(T);L.x=R*(2+z)*.5*B,L.y=R*(2+z)*A*.5,L.z=R*Math.sin(T)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class ac extends Ve{constructor(t=new Eu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new ut;let u=new I;const h=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function _(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),M(),p()}function g(y){u=t.getPointAt(y/e,u);const b=o.normals[y],F=o.binormals[y];for(let R=0;R<=i;R++){const L=R/i*Math.PI*2,B=Math.sin(L),A=-Math.cos(L);l.x=A*b.x+B*F.x,l.y=A*b.y+B*F.y,l.z=A*b.z+B*F.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let b=1;b<=i;b++){const F=(i+1)*(y-1)+(b-1),R=(i+1)*y+(b-1),L=(i+1)*y+b,B=(i+1)*(y-1)+b;m.push(F,R,B),m.push(R,L,B)}}function M(){for(let y=0;y<=e;y++)for(let b=0;b<=i;b++)c.x=y/e,c.y=b/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ac(new Gl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Wf extends Ve{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new I,r=new I;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,d=h.count;for(let m=f,_=f+d;m<_;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),M=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,M),Xf(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Xf(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Qt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Xf(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Yf=Object.freeze({__proto__:null,BoxGeometry:Ns,CapsuleGeometry:Wl,CircleGeometry:Xl,ConeGeometry:Yl,CylinderGeometry:jo,DodecahedronGeometry:ql,EdgesGeometry:Ff,ExtrudeGeometry:tc,IcosahedronGeometry:ec,LatheGeometry:Ra,OctahedronGeometry:La,PlaneGeometry:Vo,PolyhedronGeometry:hs,RingGeometry:nc,ShapeGeometry:ic,SphereGeometry:Ua,TetrahedronGeometry:rc,TorusGeometry:sc,TorusKnotGeometry:oc,TubeGeometry:ac,WireframeGeometry:Wf});class qf extends ei{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ht(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class $f extends Xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ru extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zf extends Ru{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Kf extends ei{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jf extends ei{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class jf extends ei{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Qf extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class td extends ei{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ht(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ed extends hi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Xs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function nd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function id(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Pu(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Iu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function Zv(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*i;if(!(m<e||m>=n)){h.push(c.times[d]);for(let _=0;_<u;++_)f.push(c.values[d*u+_])}}h.length!==0&&(c.times=Xs(h,c.times.constructor),c.values=Xs(f,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function Kv(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=a.times.length-1;let _;if(r<=a.times[0]){const p=u,M=h-u;_=a.values.slice(p,M)}else if(r>=a.times[m]){const p=m*h+u,M=p+h-u;_=a.values.slice(p,M)}else{const p=a.createInterpolant(),M=u,y=h-u;p.evaluate(r),_=p.resultBuffer.slice(M,y)}l==="quaternion"&&new _i().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let p=0;p<g;++p){const M=p*d+f;if(l==="quaternion")_i.multiplyQuaternionsFlat(c.values,M,_,0,c.values,M);else{const y=d-f*2;for(let b=0;b<y;++b)c.values[M+b]-=_[b]}}}return s.blendMode=Mr,s}const Jv={convertArray:Xs,isTypedArray:nd,getKeyframeOrder:id,sortedArray:Pu,flattenJSON:Iu,subclip:Zv,makeClipAdditive:Kv};class Na{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rd extends Na{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Si,endingEnd:Si}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sn:r=t,a=2*e-n;break;case Ui:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sn:o=t,l=2*n-e;break;case Ui:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,M=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*_+.5*m,b=d*g-d*_;for(let F=0;F!==a;++F)r[F]=p*o[u+F]+M*o[c+F]+y*o[l+F]+b*o[h+F];return r}}class Du extends Na{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class sd extends Na{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class $i{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xs(e,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xs(t.times,Array),values:Xs(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zn:e=this.InterpolantFactoryMethodDiscrete;break;case ir:e=this.InterpolantFactoryMethodLinear;break;case Kn:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zn;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return Kn}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&nd(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kn,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const _=e[h+m];if(_!==e[f+m]||_!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}$i.prototype.TimeBufferType=Float32Array,$i.prototype.ValueBufferType=Float32Array,$i.prototype.DefaultInterpolation=ir;class Ys extends $i{constructor(t,e,n){super(t,e,n)}}Ys.prototype.ValueTypeName="bool",Ys.prototype.ValueBufferType=Array,Ys.prototype.DefaultInterpolation=zn,Ys.prototype.InterpolantFactoryMethodLinear=void 0,Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Lu extends $i{}Lu.prototype.ValueTypeName="color";class Oa extends $i{}Oa.prototype.ValueTypeName="number";class od extends Na{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)_i.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Fa extends $i{InterpolantFactoryMethodLinear(t){return new od(this.times,this.values,this.getValueSize(),t)}}Fa.prototype.ValueTypeName="quaternion",Fa.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends $i{constructor(t,e,n){super(t,e,n)}}qs.prototype.ValueTypeName="string",qs.prototype.ValueBufferType=Array,qs.prototype.DefaultInterpolation=zn,qs.prototype.InterpolantFactoryMethodLinear=void 0,qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ba extends $i{}Ba.prototype.ValueTypeName="vector";class za{constructor(t="",e=-1,n=[],i=sn){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Qv(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push($i.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=id(l);l=Pu(l,1,u),c=Pu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Oa(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,_){if(d.length!==0){const g=[],p=[];Iu(d,g,p,m),g.length!==0&&_.push(new h(f,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let M=0;M!==f[m].morphTargets.length;++M){const y=f[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Oa(".morphTargetInfluence["+_+"]",g,p))}l=d.length*o}else{const d=".bones["+e[h].name+"]";n(Ba,d+".position",f,"pos",i),n(Fa,d+".quaternion",f,"rot",i),n(Ba,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oa;case"vector":case"vector2":case"vector3":case"vector4":return Ba;case"color":return Lu;case"quaternion":return Fa;case"bool":case"boolean":return Ys;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Qv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=jv(s.type);if(s.times===void 0){const e=[],n=[];Iu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Pr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Uu{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const ad=new Uu;class xi{constructor(t){this.manager=t!==void 0?t:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ir={};class tx extends Error{constructor(t,e){super(t),this.response=e}}class Dr extends xi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Pr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ir[t]!==void 0){Ir[t].push({onLoad:e,onProgress:n,onError:i});return}Ir[t]=[],Ir[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ir[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){M();function M(){h.read().then(({done:y,value:b})=>{if(y)p.close();else{_+=b.byteLength;const F=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let R=0,L=u.length;R<L;R++){const B=u[R];B.onProgress&&B.onProgress(F)}p.enqueue(b),M()}},y=>{p.error(y)})}}});return new Response(g)}else throw new tx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Pr.add(t,c);const u=Ir[t];delete Ir[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ir[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ir[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ex extends xi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Dr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=za.parse(t[n]);e.push(i)}return e}}class nx extends xi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=[],a=new kl,l=new Dr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(h){l.load(t[h],function(f){const d=r.parse(f,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(a.minFilter=We),a.image=o,a.format=d.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let h=0,f=t.length;h<f;++h)u(h);else l.load(t,function(h){const f=r.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let m=0;m<d;m++){o[m]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+_]),o[m].format=f.format,o[m].width=f.width,o[m].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=We),a.format=f.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}}class ka extends xi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Pr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ca("img");function l(){u(),Pr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ix extends xi{constructor(t){super(t)}load(t,e,n,i){const r=new ga;r.colorSpace=O;const o=new ka(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class rx extends xi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new lr,a=new Dr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ye,o.wrapT=c.wrapT!==void 0?c.wrapT:Ye,o.magFilter=c.magFilter!==void 0?c.magFilter:We,o.minFilter=c.minFilter!==void 0?c.minFilter:We,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ri),c.mipmapCount===1&&(o.minFilter=We),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class sx extends xi{constructor(t){super(t)}load(t,e,n,i){const r=new wn,o=new ka(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class fs extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ld extends fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Nu=new Me,cd=new I,ud=new I;class Ou{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(cd),ud.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ud),e.updateMatrixWorld(),Nu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ox extends Ou{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=yo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class hd extends fs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ox}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const fd=new Me,Va=new I,Fu=new I;class ax extends Ou{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new cn(2,1,1,1),new cn(0,1,1,1),new cn(3,1,1,1),new cn(1,1,1,1),new cn(3,0,1,1),new cn(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Va.setFromMatrixPosition(t.matrixWorld),n.position.copy(Va),Fu.copy(n.position),Fu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fu),n.updateMatrixWorld(),i.makeTranslation(-Va.x,-Va.y,-Va.z),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}}class dd extends fs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ax}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lx extends Ou{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new lx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class md extends fs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class gd extends fs{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class _d{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new I)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class vd extends fs{constructor(t=new _d,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class lc extends xi{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,o=new Dr(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=lc.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Ht().setHex(o.value);break;case"v2":i.uniforms[r].value=new ut().fromArray(o.value);break;case"v3":i.uniforms[r].value=new I().fromArray(o.value);break;case"v4":i.uniforms[r].value=new cn().fromArray(o.value);break;case"m3":i.uniforms[r].value=new Fe().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Me().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ut().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:qf,SpriteMaterial:ou,RawShaderMaterial:$f,ShaderMaterial:Xi,PointsMaterial:mu,MeshPhysicalMaterial:Zf,MeshStandardMaterial:Ru,MeshPhongMaterial:Kf,MeshToonMaterial:Jf,MeshNormalMaterial:jf,MeshLambertMaterial:Qf,MeshDepthMaterial:nu,MeshDistanceMaterial:iu,MeshBasicMaterial:os,MeshMatcapMaterial:td,LineDashedMaterial:ed,LineBasicMaterial:hi,Material:ei};return new e[t]}}class Bu{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(n){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class xd extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class yd extends xi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Dr(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(d,m){if(e[m]!==void 0)return e[m];const g=d.interleavedBuffers[m],p=r(d,g.buffer),M=Mo(g.type,p),y=new El(M,g.stride);return y.uuid=g.uuid,e[m]=y,y}function r(d,m){if(n[m]!==void 0)return n[m];const g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const o=t.isInstancedBufferGeometry?new xd:new Ve,a=t.data.index;if(a!==void 0){const d=Mo(a.type,a.array);o.setIndex(new pn(d,1))}const l=t.data.attributes;for(const d in l){const m=l[d];let _;if(m.isInterleavedBufferAttribute){const g=i(t.data,m.data);_=new Vs(g,m.itemSize,m.offset,m.normalized)}else{const g=Mo(m.type,m.array),p=m.isInstancedBufferAttribute?Ko:pn;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(d,_)}const c=t.data.morphAttributes;if(c)for(const d in c){const m=c[d],_=[];for(let g=0,p=m.length;g<p;g++){const M=m[g];let y;if(M.isInterleavedBufferAttribute){const b=i(t.data,M.data);y=new Vs(b,M.itemSize,M.offset,M.normalized)}else{const b=Mo(M.type,M.array);y=new pn(b,M.itemSize,M.normalized)}M.name!==void 0&&(y.name=M.name),_.push(y)}o.morphAttributes[d]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let d=0,m=h.length;d!==m;++d){const _=h[d];o.addGroup(_.start,_.count,_.materialIndex)}const f=t.data.boundingSphere;if(f!==void 0){const d=new I;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new Qn(d,f.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}class cx extends xi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=this.path===""?Bu.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new Dr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+t+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}loadAsync(t,e){return to(this,null,function*(){const n=this,i=this.path===""?Bu.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new Dr(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=yield r.loadAsync(t,e),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return yield n.parseAsync(a)})}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),u=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),e!==void 0){let h=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&e(c)}return c}parseAsync(t){return to(this,null,function*(){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=yield this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l})}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new Gs().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new Pl().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new yd;for(let r=0,o=t.length;r<o;r++){let a;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in Yf?a=Yf[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new lc;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=za.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:Mo(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new Uu(e);r=new ka(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=t.length;c<u;c++){const h=t[c],f=h.url;if(Array.isArray(f)){const d=[];for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new lr(p.data,p.width,p.height)))}i[h.uuid]=new Is(d)}else{const d=a(h.url);i[h.uuid]=new Is(d)}}}return i}parseImagesAsync(t){return to(this,null,function*(){const e=this,n={};let i;function r(o){return to(this,null,function*(){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return yield i.loadAsync(l)}else return o.data?{data:Mo(o.type,o.data),width:o.width,height:o.height}:null})}if(t!==void 0&&t.length>0){i=new ka(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const l=t[o],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=yield r(d);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new lr(m.data,m.width,m.height)))}n[l.uuid]=new Is(u)}else{const u=yield r(l.url);n[l.uuid]=new Is(u)}}}return n})}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=e[a.image],c=l.data;let u;Array.isArray(c)?(u=new ga,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new lr:u=new wn,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,ux)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Md),u.wrapT=n(a.wrap[1],Md)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Sd)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Sd)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(t,e,n,i,r){let o;function a(f){return e[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),e[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let m=0,_=f.length;m<_;m++){const g=f[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function c(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(t.type){case"Scene":o=new nf,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new Ht(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new bl(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Sl(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new qn(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new _l(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new md(t.color,t.intensity);break;case"DirectionalLight":o=new pd(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new dd(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new gd(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new hd(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new ld(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new vd().fromJSON(t);break;case"SkinnedMesh":u=a(t.geometry),h=l(t.material),o=new mf(u,h),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":u=a(t.geometry),h=l(t.material),o=new On(u,h);break;case"InstancedMesh":u=a(t.geometry),h=l(t.material);const f=t.count,d=t.instanceMatrix,m=t.instanceColor;o=new xf(u,h,f),o.instanceMatrix=new Ko(new Float32Array(d.array),16),m!==void 0&&(o.instanceColor=new Ko(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=a(t.geometry),h=l(t.material),o=new Sf(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(_=>{const g=new li;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const p=new Qn;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=c(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid));break;case"LOD":o=new cf;break;case"Line":o=new us(a(t.geometry),l(t.material));break;case"LineLoop":o=new Af(a(t.geometry),l(t.material));break;case"LineSegments":o=new cr(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new Rf(a(t.geometry),l(t.material));break;case"Sprite":o=new af(l(t.material));break;case"Group":o=new Xo;break;case"Bone":o=new uu;break;default:o=new Je}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const f=t.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],e,n,i,r))}if(t.animations!==void 0){const f=t.animations;for(let d=0;d<f.length;d++){const m=f[d];o.animations.push(r[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const f=t.levels;for(let d=0;d<f.length;d++){const m=f[d],_=o.getObjectByProperty("uuid",m.object);_!==void 0&&o.addLevel(_,m.distance,m.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new Je}})}}const ux={UVMapping:Dn,CubeReflectionMapping:Mt,CubeRefractionMapping:rn,EquirectangularReflectionMapping:ye,EquirectangularRefractionMapping:ln,CubeUVReflectionMapping:pi},Md={RepeatWrapping:Ji,ClampToEdgeWrapping:Ye,MirroredRepeatWrapping:mi},Sd={NearestFilter:_n,NearestMipmapNearestFilter:Xn,NearestMipmapLinearFilter:ii,LinearFilter:We,LinearMipmapNearestFilter:Ii,LinearMipmapLinearFilter:ri};class hx extends xi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Pr.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pr.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Pr.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Pr.add(t,l),r.manager.itemStart(t)}}let cc;class zu{static getContext(){return cc===void 0&&(cc=new(window.AudioContext||window.webkitAudioContext)),cc}static setContext(t){cc=t}}class fx extends xi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Dr(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0);zu.getContext().decodeAudioData(c,function(h){e(h)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(t)}}}const bd=new Me,Ed=new Me,$s=new Me;class dx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new qn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new qn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,$s.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(Ps*e.fov*.5)/e.zoom;let a,l;Ed.elements[12]=-i,bd.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,$s.elements[0]=2*e.near/(l-a),$s.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy($s),a=-o*e.aspect-r,l=o*e.aspect-r,$s.elements[0]=2*e.near/(l-a),$s.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy($s)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Ed),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(bd)}}class wd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Td();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Td(){return(typeof performance=="undefined"?Date:performance).now()}const Zs=new I,Ad=new _i,px=new I,Ks=new I;class mx extends Je{constructor(){super(),this.type="AudioListener",this.context=zu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new wd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Zs,Ad,px),Ks.set(0,0,-1).applyQuaternion(Ad),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Zs.x,i),e.positionY.linearRampToValueAtTime(Zs.y,i),e.positionZ.linearRampToValueAtTime(Zs.z,i),e.forwardX.linearRampToValueAtTime(Ks.x,i),e.forwardY.linearRampToValueAtTime(Ks.y,i),e.forwardZ.linearRampToValueAtTime(Ks.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Zs.x,Zs.y,Zs.z),e.setOrientation(Ks.x,Ks.y,Ks.z,n.x,n.y,n.z)}}class Cd extends Je{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Js=new I,Rd=new _i,gx=new I,js=new I;class _x extends Cd{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Js,Rd,gx),js.set(0,0,1).applyQuaternion(Rd);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Js.x,n),e.positionY.linearRampToValueAtTime(Js.y,n),e.positionZ.linearRampToValueAtTime(Js.z,n),e.orientationX.linearRampToValueAtTime(js.x,n),e.orientationY.linearRampToValueAtTime(js.y,n),e.orientationZ.linearRampToValueAtTime(js.z,n)}else e.setPosition(Js.x,Js.y,Js.z),e.setOrientation(js.x,js.y,js.z)}}class vx{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Pd{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){_i.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;_i.multiplyQuaternionsFlat(t,o,t,e,t,n),_i.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const ku="\\[\\]\\.:\\/",xx=new RegExp("["+ku+"]","g"),Vu="[^"+ku+"]",yx="[^"+ku.replace("\\.","")+"]",Mx=/((?:WC+[\/:])*)/.source.replace("WC",Vu),Sx=/(WCOD+)?/.source.replace("WCOD",yx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),Ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),wx=new RegExp("^"+Mx+Sx+bx+Ex+"$"),Tx=["material","materials","bones","map"];class Ax{constructor(t,e,n){const i=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class je{constructor(t,e,n){this.path=e,this.parsedPath=n||je.parseTrackName(e),this.node=je.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new je.Composite(t,e,n):new je(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xx,"")}static parseTrackName(t){const e=wx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=je.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=Ax,je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray],je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=bi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=t.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let m=e[d];if(m===void 0){m=l++,e[d]=m,t.push(f);for(let _=0,g=o;_!==g;++_)r[_].push(new je(f,n[_],i[_]))}else if(m<c){a=t[m];const _=--c,g=t[_];e[g.uuid]=m,t[m]=g,e[d]=_,t[_]=f;for(let p=0,M=o;p!==M;++p){const y=r[p],b=y[_];let F=y[m];y[m]=b,F===void 0&&(F=new je(f,n[p],i[p])),y[_]=F}}else t[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=e[c];if(u!==void 0&&u>=r){const h=r++,f=t[h];e[f.uuid]=u,t[u]=f,e[c]=h,t[h]=l;for(let d=0,m=i;d!==m;++d){const _=n[d],g=_[h],p=_[u];_[u]=g,_[h]=p}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,h=e[u];if(h!==void 0)if(delete e[u],h<r){const f=--r,d=t[f],m=--o,_=t[m];e[d.uuid]=h,t[h]=d,e[_.uuid]=f,t[f]=_,t.pop();for(let g=0,p=i;g!==p;++g){const M=n[g],y=M[f],b=M[m];M[h]=y,M[f]=b,M.pop()}}else{const f=--o,d=t[f];f>0&&(e[d.uuid]=h),t[h]=d,t.pop();for(let m=0,_=i;m!==_;++m){const g=n[m];g[h]=g[f],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(h);for(let f=u,d=l.length;f!==d;++f){const m=l[f];h[f]=new je(m,t,e)}return h}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=t[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class Id{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:Si,endingEnd:Si};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qa,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Mr:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case sn:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===be;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Ya){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Sn,i.endingEnd=Sn):(t?i.endingStart=this.zeroSlopeAtStart?Sn:Si:i.endingStart=Ui,e?i.endingEnd=this.zeroSlopeAtEnd?Sn:Si:i.endingEnd=Ui)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const Rx=new Float32Array(1);class Px extends ar{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let m=u[d];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;m=new Pd(je.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Du(new Float32Array(2),new Float32Array(2),1,Rx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?za.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=sn),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Id(this,o,e,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?za.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Hu{constructor(t){this.value=t}clone(){return new Hu(this.value.clone===void 0?this.value:this.value.clone())}}let Ix=0;class Dx extends ar{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ix++}),this.name="",this.usage=ts,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class Lx extends El{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Ux{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Dd=new Me;class Nx{constructor(t,e,n=0,i=1/0){this.ray=new Co(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dd),this}intersectObject(t,e=!0,n=[]){return Gu(t,this,n,e),n.sort(Ld),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Gu(t[i],this,n,e);return n.sort(Ld),n}}function Ld(s,t){return s.distance-t.distance}function Gu(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Gu(r[o],t,e,!0)}}class Ox{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(En(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fx{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class Wu{constructor(t,e,n,i){Wu.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const Ud=new ut;class Bx{constructor(t=new ut(1/0,1/0),e=new ut(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ud.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ud).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nd=new I,uc=new I;class zx{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Nd.subVectors(t,this.start),uc.subVectors(this.end,this.start);const n=uc.dot(uc);let r=uc.dot(Nd)/n;return e&&(r=En(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Od=new I;class kx extends Je{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Ve,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Qt(i,3));const r=new hi({fog:!1,toneMapped:!1});this.cone=new cr(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Od.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Od),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ds=new I,hc=new Me,Xu=new Me;class Vx extends cr{constructor(t){const e=Fd(t),n=new Ve,i=[],r=[],o=new Ht(0,0,1),a=new Ht(0,1,0);for(let c=0;c<e.length;c++){const u=e[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Qt(i,3)),n.setAttribute("color",new Qt(r,3));const l=new hi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Xu.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(hc.multiplyMatrices(Xu,a.matrixWorld),ds.setFromMatrixPosition(hc),i.setXYZ(o,ds.x,ds.y,ds.z),hc.multiplyMatrices(Xu,a.parent.matrixWorld),ds.setFromMatrixPosition(hc),i.setXYZ(o+1,ds.x,ds.y,ds.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Fd(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Fd(s.children[e]));return t}class Hx extends On{constructor(t,e,n){const i=new Ua(e,4,2),r=new os({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Gx=new I,Bd=new Ht,zd=new Ht;class Wx extends Je{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new La(e);i.rotateY(Math.PI*.5),this.material=new os({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new pn(o,3)),this.add(new On(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Bd.copy(this.light.color),zd.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?Bd:zd;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(Gx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Xx extends cr{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ht(n),i=new Ht(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,m=-a;f<=e;f++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=f===r?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Ve;u.setAttribute("position",new Qt(l,3)),u.setAttribute("color",new Qt(c,3));const h=new hi({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yx extends cr{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new Ht(r),o=new Ht(o);const a=[],l=[];if(e>1)for(let h=0;h<e;h++){const f=h/e*(Math.PI*2),d=Math.sin(f)*t,m=Math.cos(f)*t;a.push(0,0,0),a.push(d,0,m);const _=h&1?r:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const f=h&1?r:o,d=t-t/n*h;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*d,p=Math.cos(_)*d;a.push(g,0,p),l.push(f.r,f.g,f.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*d,p=Math.cos(_)*d,a.push(g,0,p),l.push(f.r,f.g,f.b)}}const c=new Ve;c.setAttribute("position",new Qt(a,3)),c.setAttribute("color",new Qt(l,3));const u=new hi({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const kd=new I,fc=new I,Vd=new I;class qx extends Je{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Ve;i.setAttribute("position",new Qt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new hi({fog:!1,toneMapped:!1});this.lightPlane=new us(i,r),this.add(this.lightPlane),i=new Ve,i.setAttribute("position",new Qt([0,0,0,0,0,1],3)),this.targetLine=new us(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),kd.setFromMatrixPosition(this.light.matrixWorld),fc.setFromMatrixPosition(this.light.target.matrixWorld),Vd.subVectors(fc,kd),this.lightPlane.lookAt(fc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(fc),this.targetLine.scale.z=Vd.length()}}const dc=new I,Tn=new pl;class $x extends cr{constructor(t){const e=new Ve,n=new hi({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,_){l(m),l(_)}function l(m){i.push(0,0,0),r.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}e.setAttribute("position",new Qt(i,3)),e.setAttribute("color",new Qt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new Ht(16755200),u=new Ht(16711680),h=new Ht(43775),f=new Ht(16777215),d=new Ht(3355443);this.setColors(c,u,h,f,d)}setColors(t,e,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;Tn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),In("c",e,t,Tn,0,0,-1),In("t",e,t,Tn,0,0,1),In("n1",e,t,Tn,-n,-i,-1),In("n2",e,t,Tn,n,-i,-1),In("n3",e,t,Tn,-n,i,-1),In("n4",e,t,Tn,n,i,-1),In("f1",e,t,Tn,-n,-i,1),In("f2",e,t,Tn,n,-i,1),In("f3",e,t,Tn,-n,i,1),In("f4",e,t,Tn,n,i,1),In("u1",e,t,Tn,n*.7,i*1.1,-1),In("u2",e,t,Tn,-n*.7,i*1.1,-1),In("u3",e,t,Tn,0,i*2,-1),In("cf1",e,t,Tn,-n,0,1),In("cf2",e,t,Tn,n,0,1),In("cf3",e,t,Tn,0,-i,1),In("cf4",e,t,Tn,0,i,1),In("cn1",e,t,Tn,-n,0,-1),In("cn2",e,t,Tn,n,0,-1),In("cn3",e,t,Tn,0,-i,-1),In("cn4",e,t,Tn,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function In(s,t,e,n,i,r,o){dc.set(i,r,o).unproject(n);const a=t[s];if(a!==void 0){const l=e.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],dc.x,dc.y,dc.z)}}const pc=new li;class Zx extends cr{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Ve;r.setIndex(new pn(n,1)),r.setAttribute("position",new pn(i,3)),super(r,new hi({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&pc.setFromObject(this.object),pc.isEmpty())return;const e=pc.min,n=pc.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kx extends cr{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ve;r.setIndex(new pn(n,1)),r.setAttribute("position",new Qt(i,3)),super(r,new hi({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jx extends us{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ve;o.setAttribute("position",new Qt(r,3)),o.computeBoundingSphere(),super(o,new hi({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ve;l.setAttribute("position",new Qt(a,3)),l.computeBoundingSphere(),this.add(new On(l,new os({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Hd=new I;let mc,Yu;class jx extends Je{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",mc===void 0&&(mc=new Ve,mc.setAttribute("position",new Qt([0,0,0,0,1,0],3)),Yu=new jo(0,.5,1,5,1),Yu.translate(0,-.5,0)),this.position.copy(e),this.line=new us(mc,new hi({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new On(Yu,new os({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Hd.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Hd,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Qx extends cr{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ve;i.setAttribute("position",new Qt(e,3)),i.setAttribute("color",new Qt(n,3));const r=new hi({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new Ht,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ty{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ca,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const M=[];for(let y=0,b=p.length;y<b;y++){const F=p[y],R=new Gs;R.curves=F.curves,M.push(R)}return M}function n(p,M){const y=M.length;let b=!1;for(let F=y-1,R=0;R<y;F=R++){let L=M[F],B=M[R],A=B.x-L.x,T=B.y-L.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(L=M[R],A=-A,B=M[F],T=-T),p.y<L.y||p.y>B.y)continue;if(p.y===L.y){if(p.x===L.x)return!0}else{const z=T*(p.x-L.x)-A*(p.y-L.y);if(z===0)return!0;if(z<0)continue;b=!b}}else{if(p.y!==L.y)continue;if(B.x<=p.x&&p.x<=L.x||L.x<=p.x&&p.x<=B.x)return!0}}return b}const i=ur.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Gs,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],m=0,_;f[m]=void 0,d[m]=[];for(let p=0,M=r.length;p<M;p++)a=r[p],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new Gs,p:_},f[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:_[0]});if(!f[0])return e(r);if(f.length>1){let p=!1,M=0;for(let y=0,b=f.length;y<b;y++)h[y]=[];for(let y=0,b=f.length;y<b;y++){const F=d[y];for(let R=0;R<F.length;R++){const L=F[R];let B=!0;for(let A=0;A<f.length;A++)n(L.p,f[A].p)&&(y!==A&&M++,B?(B=!1,h[A].push(L)):p=!0);B&&h[y].push(L)}}M>0&&p===!1&&(d=h)}let g;for(let p=0,M=f.length;p<M;p++){l=f[p].s,c.push(l),g=d[p];for(let y=0,b=g.length;y<b;y++)l.holes.push(g[y].h)}return c}}class ey extends ar{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class ny extends Vi{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,ea(yi({},i),{count:n})),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:W}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=W)},69365:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{OrbitControls:function(){return ze}});var W=Pt(99477);const pe={type:"change"},Ne={type:"start"},Ae={type:"end"},gt=new W.Ray,kt=new W.Plane,re=Math.cos(70*W.MathUtils.DEG2RAD),oe=new W.Vector3,xe=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Le=1e-6;class ze extends W.Controls{constructor(N,et=null){super(N,et),this.state=de.NONE,this.enabled=!0,this.target=new W.Vector3,this.cursor=new W.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:W.MOUSE.ROTATE,MIDDLE:W.MOUSE.DOLLY,RIGHT:W.MOUSE.PAN},this.touches={ONE:W.TOUCH.ROTATE,TWO:W.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W.Vector3,this._lastQuaternion=new W.Quaternion,this._lastTargetPosition=new W.Vector3,this._quat=new W.Quaternion().setFromUnitVectors(N.up,new W.Vector3(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new W.Spherical,this._sphericalDelta=new W.Spherical,this._scale=1,this._panOffset=new W.Vector3,this._rotateStart=new W.Vector2,this._rotateEnd=new W.Vector2,this._rotateDelta=new W.Vector2,this._panStart=new W.Vector2,this._panEnd=new W.Vector2,this._panDelta=new W.Vector2,this._dollyStart=new W.Vector2,this._dollyEnd=new W.Vector2,this._dollyDelta=new W.Vector2,this._dollyDirection=new W.Vector3,this._mouse=new W.Vector2,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vt.bind(this),this._onPointerDown=ie.bind(this),this._onPointerUp=zt.bind(this),this._onContextMenu=Kt.bind(this),this._onMouseWheel=Se.bind(this),this._onKeyDown=me.bind(this),this._onTouchStart=he.bind(this),this._onTouchMove=Ft.bind(this),this._onMouseDown=Lt.bind(this),this._onMouseMove=Xt.bind(this),this._interceptControlDown=it.bind(this),this._interceptControlUp=Z.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(N){N.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=N}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pe),this.update(),this.state=de.NONE}update(N=null){const et=this.object.position;oe.copy(et).sub(this.target),oe.applyQuaternion(this._quat),this._spherical.setFromVector3(oe),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(N)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let _t=this.minAzimuthAngle,St=this.maxAzimuthAngle;isFinite(_t)&&isFinite(St)&&(_t<-Math.PI?_t+=xe:_t>Math.PI&&(_t-=xe),St<-Math.PI?St+=xe:St>Math.PI&&(St-=xe),_t<=St?this._spherical.theta=Math.max(_t,Math.min(St,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(_t+St)/2?Math.max(_t,this._spherical.theta):Math.min(St,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let ot=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const ae=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),ot=ae!=this._spherical.radius}if(oe.setFromSpherical(this._spherical),oe.applyQuaternion(this._quatInverse),et.copy(this.target).add(oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let ae=null;if(this.object.isPerspectiveCamera){const tn=oe.length();ae=this._clampDistance(tn*this._scale);const an=tn-ae;this.object.position.addScaledVector(this._dollyDirection,an),this.object.updateMatrixWorld(),ot=!!an}else if(this.object.isOrthographicCamera){const tn=new W.Vector3(this._mouse.x,this._mouse.y,0);tn.unproject(this.object);const an=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),ot=an!==this.object.zoom;const Ce=new W.Vector3(this._mouse.x,this._mouse.y,0);Ce.unproject(this.object),this.object.position.sub(Ce).add(tn),this.object.updateMatrixWorld(),ae=oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(ae).add(this.object.position):(gt.origin.copy(this.object.position),gt.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gt.direction))<re?this.object.lookAt(this.target):(kt.setFromNormalAndCoplanarPoint(this.object.up,this.target),gt.intersectPlane(kt,this.target))))}else if(this.object.isOrthographicCamera){const ae=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),ae!==this.object.zoom&&(this.object.updateProjectionMatrix(),ot=!0)}return this._scale=1,this._performCursorZoom=!1,ot||this._lastPosition.distanceToSquared(this.object.position)>Le||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Le||this._lastTargetPosition.distanceToSquared(this.target)>Le?(this.dispatchEvent(pe),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(N){return N!==null?xe/60*this.autoRotateSpeed*N:xe/60/60*this.autoRotateSpeed}_getZoomScale(N){const et=Math.abs(N*.01);return Math.pow(.95,this.zoomSpeed*et)}_rotateLeft(N){this._sphericalDelta.theta-=N}_rotateUp(N){this._sphericalDelta.phi-=N}_panLeft(N,et){oe.setFromMatrixColumn(et,0),oe.multiplyScalar(-N),this._panOffset.add(oe)}_panUp(N,et){this.screenSpacePanning===!0?oe.setFromMatrixColumn(et,1):(oe.setFromMatrixColumn(et,0),oe.crossVectors(this.object.up,oe)),oe.multiplyScalar(N),this._panOffset.add(oe)}_pan(N,et){const _t=this.domElement;if(this.object.isPerspectiveCamera){const St=this.object.position;oe.copy(St).sub(this.target);let ot=oe.length();ot*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*N*ot/_t.clientHeight,this.object.matrix),this._panUp(2*et*ot/_t.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(N*(this.object.right-this.object.left)/this.object.zoom/_t.clientWidth,this.object.matrix),this._panUp(et*(this.object.top-this.object.bottom)/this.object.zoom/_t.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(N){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(N){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(N,et){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const _t=this.domElement.getBoundingClientRect(),St=N-_t.left,ot=et-_t.top,ae=_t.width,tn=_t.height;this._mouse.x=St/ae*2-1,this._mouse.y=-(ot/tn)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(N){return Math.max(this.minDistance,Math.min(this.maxDistance,N))}_handleMouseDownRotate(N){this._rotateStart.set(N.clientX,N.clientY)}_handleMouseDownDolly(N){this._updateZoomParameters(N.clientX,N.clientX),this._dollyStart.set(N.clientX,N.clientY)}_handleMouseDownPan(N){this._panStart.set(N.clientX,N.clientY)}_handleMouseMoveRotate(N){this._rotateEnd.set(N.clientX,N.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const et=this.domElement;this._rotateLeft(xe*this._rotateDelta.x/et.clientHeight),this._rotateUp(xe*this._rotateDelta.y/et.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(N){this._dollyEnd.set(N.clientX,N.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(N){this._panEnd.set(N.clientX,N.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(N){this._updateZoomParameters(N.clientX,N.clientY),N.deltaY<0?this._dollyIn(this._getZoomScale(N.deltaY)):N.deltaY>0&&this._dollyOut(this._getZoomScale(N.deltaY)),this.update()}_handleKeyDown(N){let et=!1;switch(N.code){case this.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?this._rotateUp(xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),et=!0;break;case this.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?this._rotateUp(-xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),et=!0;break;case this.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?this._rotateLeft(xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),et=!0;break;case this.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?this._rotateLeft(-xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),et=!0;break}et&&(N.preventDefault(),this.update())}_handleTouchStartRotate(N){if(this._pointers.length===1)this._rotateStart.set(N.pageX,N.pageY);else{const et=this._getSecondPointerPosition(N),_t=.5*(N.pageX+et.x),St=.5*(N.pageY+et.y);this._rotateStart.set(_t,St)}}_handleTouchStartPan(N){if(this._pointers.length===1)this._panStart.set(N.pageX,N.pageY);else{const et=this._getSecondPointerPosition(N),_t=.5*(N.pageX+et.x),St=.5*(N.pageY+et.y);this._panStart.set(_t,St)}}_handleTouchStartDolly(N){const et=this._getSecondPointerPosition(N),_t=N.pageX-et.x,St=N.pageY-et.y,ot=Math.sqrt(_t*_t+St*St);this._dollyStart.set(0,ot)}_handleTouchStartDollyPan(N){this.enableZoom&&this._handleTouchStartDolly(N),this.enablePan&&this._handleTouchStartPan(N)}_handleTouchStartDollyRotate(N){this.enableZoom&&this._handleTouchStartDolly(N),this.enableRotate&&this._handleTouchStartRotate(N)}_handleTouchMoveRotate(N){if(this._pointers.length==1)this._rotateEnd.set(N.pageX,N.pageY);else{const _t=this._getSecondPointerPosition(N),St=.5*(N.pageX+_t.x),ot=.5*(N.pageY+_t.y);this._rotateEnd.set(St,ot)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const et=this.domElement;this._rotateLeft(xe*this._rotateDelta.x/et.clientHeight),this._rotateUp(xe*this._rotateDelta.y/et.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(N){if(this._pointers.length===1)this._panEnd.set(N.pageX,N.pageY);else{const et=this._getSecondPointerPosition(N),_t=.5*(N.pageX+et.x),St=.5*(N.pageY+et.y);this._panEnd.set(_t,St)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(N){const et=this._getSecondPointerPosition(N),_t=N.pageX-et.x,St=N.pageY-et.y,ot=Math.sqrt(_t*_t+St*St);this._dollyEnd.set(0,ot),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const ae=(N.pageX+et.x)*.5,tn=(N.pageY+et.y)*.5;this._updateZoomParameters(ae,tn)}_handleTouchMoveDollyPan(N){this.enableZoom&&this._handleTouchMoveDolly(N),this.enablePan&&this._handleTouchMovePan(N)}_handleTouchMoveDollyRotate(N){this.enableZoom&&this._handleTouchMoveDolly(N),this.enableRotate&&this._handleTouchMoveRotate(N)}_addPointer(N){this._pointers.push(N.pointerId)}_removePointer(N){delete this._pointerPositions[N.pointerId];for(let et=0;et<this._pointers.length;et++)if(this._pointers[et]==N.pointerId){this._pointers.splice(et,1);return}}_isTrackingPointer(N){for(let et=0;et<this._pointers.length;et++)if(this._pointers[et]==N.pointerId)return!0;return!1}_trackPointer(N){let et=this._pointerPositions[N.pointerId];et===void 0&&(et=new W.Vector2,this._pointerPositions[N.pointerId]=et),et.set(N.pageX,N.pageY)}_getSecondPointerPosition(N){const et=N.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[et]}_customWheelEvent(N){const et=N.deltaMode,_t={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(et){case 1:_t.deltaY*=16;break;case 2:_t.deltaY*=100;break}return N.ctrlKey&&!this._controlActive&&(_t.deltaY*=10),_t}}function ie(tt){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(tt.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(tt)&&(this._addPointer(tt),tt.pointerType==="touch"?this._onTouchStart(tt):this._onMouseDown(tt)))}function Vt(tt){this.enabled!==!1&&(tt.pointerType==="touch"?this._onTouchMove(tt):this._onMouseMove(tt))}function zt(tt){switch(this._removePointer(tt),this._pointers.length){case 0:this.domElement.releasePointerCapture(tt.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ae),this.state=de.NONE;break;case 1:const N=this._pointers[0],et=this._pointerPositions[N];this._onTouchStart({pointerId:N,pageX:et.x,pageY:et.y});break}}function Lt(tt){let N;switch(tt.button){case 0:N=this.mouseButtons.LEFT;break;case 1:N=this.mouseButtons.MIDDLE;break;case 2:N=this.mouseButtons.RIGHT;break;default:N=-1}switch(N){case W.MOUSE.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(tt),this.state=de.DOLLY;break;case W.MOUSE.ROTATE:if(tt.ctrlKey||tt.metaKey||tt.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(tt),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(tt),this.state=de.ROTATE}break;case W.MOUSE.PAN:if(tt.ctrlKey||tt.metaKey||tt.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(tt),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(tt),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Ne)}function Xt(tt){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(tt);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(tt);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(tt);break}}function Se(tt){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(tt.preventDefault(),this.dispatchEvent(Ne),this._handleMouseWheel(this._customWheelEvent(tt)),this.dispatchEvent(Ae))}function me(tt){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(tt)}function he(tt){switch(this._trackPointer(tt),this._pointers.length){case 1:switch(this.touches.ONE){case W.TOUCH.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(tt),this.state=de.TOUCH_ROTATE;break;case W.TOUCH.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(tt),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case W.TOUCH.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(tt),this.state=de.TOUCH_DOLLY_PAN;break;case W.TOUCH.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(tt),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Ne)}function Ft(tt){switch(this._trackPointer(tt),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(tt),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(tt),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(tt),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(tt),this.update();break;default:this.state=de.NONE}}function Kt(tt){this.enabled!==!1&&tt.preventDefault()}function it(tt){tt.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z(tt){tt.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}},71711:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{TextGeometry:function(){return pe}});var W=Pt(99477);class pe extends W.ExtrudeGeometry{constructor(Ae,gt={}){const kt=gt.font;if(kt===void 0)super();else{const re=kt.generateShapes(Ae,gt.size);gt.depth===void 0&&gt.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),gt.depth=gt.depth!==void 0?gt.depth:gt.height!==void 0?gt.height:50,gt.bevelThickness===void 0&&(gt.bevelThickness=10),gt.bevelSize===void 0&&(gt.bevelSize=8),gt.bevelEnabled===void 0&&(gt.bevelEnabled=!1),super(re,gt)}this.type="TextGeometry"}}},97157:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{Font:function(){return Ne},FontLoader:function(){return pe}});var W=Pt(99477);class pe extends W.Loader{constructor(re){super(re)}load(re,oe,xe,de){const Le=this,ze=new W.FileLoader(this.manager);ze.setPath(this.path),ze.setRequestHeader(this.requestHeader),ze.setWithCredentials(this.withCredentials),ze.load(re,function(ie){const Vt=Le.parse(JSON.parse(ie));oe&&oe(Vt)},xe,de)}parse(re){return new Ne(re)}}class Ne{constructor(re){this.isFont=!0,this.type="Font",this.data=re}generateShapes(re,oe=100){const xe=[],de=Ae(re,oe,this.data);for(let Le=0,ze=de.length;Le<ze;Le++)xe.push(...de[Le].toShapes());return xe}}function Ae(kt,re,oe){const xe=Array.from(kt),de=re/oe.resolution,Le=(oe.boundingBox.yMax-oe.boundingBox.yMin+oe.underlineThickness)*de,ze=[];let ie=0,Vt=0;for(let zt=0;zt<xe.length;zt++){const Lt=xe[zt];if(Lt===`
`)ie=0,Vt-=Le;else{const Xt=gt(Lt,de,ie,Vt,oe);ie+=Xt.offsetX,ze.push(Xt.path)}}return ze}function gt(kt,re,oe,xe,de){const Le=de.glyphs[kt]||de.glyphs["?"];if(!Le){console.error('THREE.Font: character "'+kt+'" does not exists in font family '+de.familyName+".");return}const ze=new W.ShapePath;let ie,Vt,zt,Lt,Xt,Se,me,he;if(Le.o){const Ft=Le._cachedOutline||(Le._cachedOutline=Le.o.split(" "));for(let Kt=0,it=Ft.length;Kt<it;)switch(Ft[Kt++]){case"m":ie=Ft[Kt++]*re+oe,Vt=Ft[Kt++]*re+xe,ze.moveTo(ie,Vt);break;case"l":ie=Ft[Kt++]*re+oe,Vt=Ft[Kt++]*re+xe,ze.lineTo(ie,Vt);break;case"q":zt=Ft[Kt++]*re+oe,Lt=Ft[Kt++]*re+xe,Xt=Ft[Kt++]*re+oe,Se=Ft[Kt++]*re+xe,ze.quadraticCurveTo(Xt,Se,zt,Lt);break;case"b":zt=Ft[Kt++]*re+oe,Lt=Ft[Kt++]*re+xe,Xt=Ft[Kt++]*re+oe,Se=Ft[Kt++]*re+xe,me=Ft[Kt++]*re+oe,he=Ft[Kt++]*re+xe,ze.bezierCurveTo(Xt,Se,me,he,zt,Lt);break}}return{offsetX:Le.ha*re,path:ze}}},22201:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{Flow:function(){return de},InstancedFlow:function(){return ze},getUniforms:function(){return oe},initSplineTexture:function(){return gt},modifyShader:function(){return xe},updateSplineTexture:function(){return kt}});var W=Pt(99477);const pe=4,Ne=1024,Ae=4;function gt(ie=1){const Vt=new Uint16Array(Ne*Ae*ie*pe),zt=new W.DataTexture(Vt,Ne,Ae*ie,W.RGBAFormat,W.HalfFloatType);return zt.wrapS=W.RepeatWrapping,zt.wrapY=W.RepeatWrapping,zt.magFilter=W.LinearFilter,zt.minFilter=W.LinearFilter,zt.needsUpdate=!0,zt}function kt(ie,Vt,zt=0){const Lt=Math.floor(Ne*(Ae/4));Vt.arcLengthDivisions=Lt/2,Vt.updateArcLengths();const Xt=Vt.getSpacedPoints(Lt),Se=Vt.computeFrenetFrames(Lt,!0);for(let me=0;me<Lt;me++){const he=Math.floor(me/Ne),Ft=me%Ne;let Kt=Xt[me];re(ie,Ft,Kt.x,Kt.y,Kt.z,0+he+Ae*zt),Kt=Se.tangents[me],re(ie,Ft,Kt.x,Kt.y,Kt.z,1+he+Ae*zt),Kt=Se.normals[me],re(ie,Ft,Kt.x,Kt.y,Kt.z,2+he+Ae*zt),Kt=Se.binormals[me],re(ie,Ft,Kt.x,Kt.y,Kt.z,3+he+Ae*zt)}ie.needsUpdate=!0}function re(ie,Vt,zt,Lt,Xt,Se){const me=ie.image,{data:he}=me,Ft=pe*Ne*Se;he[Vt*pe+Ft+0]=W.DataUtils.toHalfFloat(zt),he[Vt*pe+Ft+1]=W.DataUtils.toHalfFloat(Lt),he[Vt*pe+Ft+2]=W.DataUtils.toHalfFloat(Xt),he[Vt*pe+Ft+3]=W.DataUtils.toHalfFloat(1)}function oe(ie){return{spineTexture:{value:ie},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:161},spineLength:{type:"f",value:400},flow:{type:"i",value:1}}}function xe(ie,Vt,zt=1){ie.__ok||(ie.__ok=!0,ie.onBeforeCompile=Lt=>{if(Lt.__modified)return;Lt.__modified=!0,Object.assign(Lt.uniforms,Vt);const Xt=`
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;

		float textureLayers = ${Ae*zt}.;
		float textureStacks = ${Ae/4}.;

		${Lt.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
void main() {
#include <beginnormal_vertex>

vec4 worldPos = modelMatrix * vec4(position, 1.);

bool bend = flow > 0;
float xWeight = bend ? 0. : 1.;

#ifdef USE_INSTANCING
float pathOffsetFromInstanceMatrix = instanceMatrix[3][2];
float spineLengthFromInstanceMatrix = instanceMatrix[3][0];
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
float mt = (spinePortion * pathSegment + pathOffset + pathOffsetFromInstanceMatrix)*textureStacks;
#else
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
float mt = (spinePortion * pathSegment + pathOffset)*textureStacks;
#endif

mt = mod(mt, textureStacks);
float rowOffset = floor(mt);

#ifdef USE_INSTANCING
rowOffset += instanceMatrix[3][1] * ${Ae}.;
#endif

vec3 spinePos = texture2D(spineTexture, vec2(mt, (0. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 a =        texture2D(spineTexture, vec2(mt, (1. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 b =        texture2D(spineTexture, vec2(mt, (2. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 c =        texture2D(spineTexture, vec2(mt, (3. + rowOffset + 0.5) / textureLayers)).xyz;
mat3 basis = mat3(a, b, c);

vec3 transformed = basis
	* vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
	+ spinePos;

vec3 transformedNormal = normalMatrix * (basis * objectNormal);
			`).replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`);Lt.vertexShader=Xt})}class de{constructor(Vt,zt=1){const Lt=Vt.clone(),Xt=gt(zt),Se=oe(Xt);Lt.traverse(function(me){if(me instanceof W.Mesh||me instanceof W.InstancedMesh)if(Array.isArray(me.material)){const he=[];for(const Ft of me.material){const Kt=Ft.clone();xe(Kt,Se,zt),he.push(Kt)}me.material=he}else me.material=me.material.clone(),xe(me.material,Se,zt)}),this.curveArray=new Array(zt),this.curveLengthArray=new Array(zt),this.object3D=Lt,this.splineTexure=Xt,this.uniforms=Se}updateCurve(Vt,zt){if(Vt>=this.curveArray.length)throw Error("Index out of range for Flow");const Lt=zt.getLength();this.uniforms.spineLength.value=Lt,this.curveLengthArray[Vt]=Lt,this.curveArray[Vt]=zt,kt(this.splineTexure,zt,Vt)}moveAlongCurve(Vt){this.uniforms.pathOffset.value+=Vt}}const Le=new W.Matrix4;class ze extends de{constructor(Vt,zt,Lt,Xt){const Se=new W.InstancedMesh(Lt,Xt,Vt);Se.instanceMatrix.setUsage(W.DynamicDrawUsage),Se.frustumCulled=!1,super(Se,zt),this.offsets=new Array(Vt).fill(0),this.whichCurve=new Array(Vt).fill(0)}writeChanges(Vt){Le.makeTranslation(this.curveLengthArray[this.whichCurve[Vt]],this.whichCurve[Vt],this.offsets[Vt]),this.object3D.setMatrixAt(Vt,Le),this.object3D.instanceMatrix.needsUpdate=!0}moveIndividualAlongCurve(Vt,zt){this.offsets[Vt]+=zt,this.writeChanges(Vt)}setCurve(Vt,zt){if(isNaN(zt))throw Error("curve index being set is Not a Number (NaN)");this.whichCurve[Vt]=zt,this.writeChanges(Vt)}}},42644:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{Sky:function(){return pe}});var W=Pt(99477);class pe extends W.Mesh{constructor(){const Ae=pe.SkyShader,gt=new W.ShaderMaterial({name:Ae.name,uniforms:W.UniformsUtils.clone(Ae.uniforms),vertexShader:Ae.vertexShader,fragmentShader:Ae.fragmentShader,side:W.BackSide,depthWrite:!1});super(new W.BoxGeometry(1,1,1),gt),this.isSky=!0}}pe.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new W.Vector3},up:{value:new W.Vector3(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`}},73660:function(ve,ne,Pt){"use strict";Pt.r(ne),Pt.d(ne,{Water:function(){return pe}});var W=Pt(99477);class pe extends W.Mesh{constructor(Ae,gt={}){super(Ae),this.isWater=!0;const kt=this,re=gt.textureWidth!==void 0?gt.textureWidth:512,oe=gt.textureHeight!==void 0?gt.textureHeight:512,xe=gt.clipBias!==void 0?gt.clipBias:0,de=gt.alpha!==void 0?gt.alpha:1,Le=gt.time!==void 0?gt.time:0,ze=gt.waterNormals!==void 0?gt.waterNormals:null,ie=gt.sunDirection!==void 0?gt.sunDirection:new W.Vector3(.70707,.70707,0),Vt=new W.Color(gt.sunColor!==void 0?gt.sunColor:16777215),zt=new W.Color(gt.waterColor!==void 0?gt.waterColor:8355711),Lt=gt.eye!==void 0?gt.eye:new W.Vector3(0,0,0),Xt=gt.distortionScale!==void 0?gt.distortionScale:20,Se=gt.side!==void 0?gt.side:W.FrontSide,me=gt.fog!==void 0?gt.fog:!1,he=new W.Plane,Ft=new W.Vector3,Kt=new W.Vector3,it=new W.Vector3,Z=new W.Matrix4,tt=new W.Vector3(0,0,-1),N=new W.Vector4,et=new W.Vector3,_t=new W.Vector3,St=new W.Vector4,ot=new W.Matrix4,ae=new W.PerspectiveCamera,tn=new W.WebGLRenderTarget(re,oe),an={name:"MirrorShader",uniforms:W.UniformsUtils.merge([W.UniformsLib.fog,W.UniformsLib.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new W.Matrix4},sunColor:{value:new W.Color(8355711)},sunDirection:{value:new W.Vector3(.70707,.70707,0)},eye:{value:new W.Vector3},waterColor:{value:new W.Color(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},Ce=new W.ShaderMaterial({name:an.name,uniforms:W.UniformsUtils.clone(an.uniforms),vertexShader:an.vertexShader,fragmentShader:an.fragmentShader,lights:!0,side:Se,fog:me});Ce.uniforms.mirrorSampler.value=tn.texture,Ce.uniforms.textureMatrix.value=ot,Ce.uniforms.alpha.value=de,Ce.uniforms.time.value=Le,Ce.uniforms.normalSampler.value=ze,Ce.uniforms.sunColor.value=Vt,Ce.uniforms.waterColor.value=zt,Ce.uniforms.sunDirection.value=ie,Ce.uniforms.distortionScale.value=Xt,Ce.uniforms.eye.value=Lt,kt.material=Ce,kt.onBeforeRender=function(gn,fi,Hn){if(Kt.setFromMatrixPosition(kt.matrixWorld),it.setFromMatrixPosition(Hn.matrixWorld),Z.extractRotation(kt.matrixWorld),Ft.set(0,0,1),Ft.applyMatrix4(Z),et.subVectors(Kt,it),et.dot(Ft)>0)return;et.reflect(Ft).negate(),et.add(Kt),Z.extractRotation(Hn.matrixWorld),tt.set(0,0,-1),tt.applyMatrix4(Z),tt.add(it),_t.subVectors(Kt,tt),_t.reflect(Ft).negate(),_t.add(Kt),ae.position.copy(et),ae.up.set(0,1,0),ae.up.applyMatrix4(Z),ae.up.reflect(Ft),ae.lookAt(_t),ae.far=Hn.far,ae.updateMatrixWorld(),ae.projectionMatrix.copy(Hn.projectionMatrix),ot.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),ot.multiply(ae.projectionMatrix),ot.multiply(ae.matrixWorldInverse),he.setFromNormalAndCoplanarPoint(Ft,Kt),he.applyMatrix4(ae.matrixWorldInverse),N.set(he.normal.x,he.normal.y,he.normal.z,he.constant);const He=ae.projectionMatrix;St.x=(Math.sign(N.x)+He.elements[8])/He.elements[0],St.y=(Math.sign(N.y)+He.elements[9])/He.elements[5],St.z=-1,St.w=(1+He.elements[10])/He.elements[14],N.multiplyScalar(2/N.dot(St)),He.elements[2]=N.x,He.elements[6]=N.y,He.elements[10]=N.z+1-xe,He.elements[14]=N.w,Lt.setFromMatrixPosition(Hn.matrixWorld);const Ki=gn.getRenderTarget(),fr=gn.xr.enabled,di=gn.shadowMap.autoUpdate;kt.visible=!1,gn.xr.enabled=!1,gn.shadowMap.autoUpdate=!1,gn.setRenderTarget(tn),gn.state.buffers.depth.setMask(!0),gn.autoClear===!1&&gn.clear(),gn.render(fi,ae),kt.visible=!0,gn.xr.enabled=fr,gn.shadowMap.autoUpdate=di,gn.setRenderTarget(Ki);const Ur=Hn.viewport;Ur!==void 0&&gn.state.viewport(Ur)}}}}}]);
}());