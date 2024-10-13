!(function(){var Rd=Object.defineProperty,Bd=Object.defineProperties;var Hd=Object.getOwnPropertyDescriptors;var $a=Object.getOwnPropertySymbols;var Ad=Object.prototype.hasOwnProperty,zd=Object.prototype.propertyIsEnumerable;var Ia=(B,F,s)=>F in B?Rd(B,F,{enumerable:!0,configurable:!0,writable:!0,value:s}):B[F]=s,In=(B,F)=>{for(var s in F||(F={}))Ad.call(F,s)&&Ia(B,s,F[s]);if($a)for(var s of $a(F))zd.call(F,s)&&Ia(B,s,F[s]);return B},ja=(B,F)=>Bd(B,Hd(F));var Ln=(B,F,s)=>new Promise((C,j)=>{var G=L=>{try{a(s.next(L))}catch(ce){j(ce)}},A=L=>{try{a(s.throw(L))}catch(ce){j(ce)}},a=L=>L.done?C(L.value):Promise.resolve(L.value).then(G,A);a((s=s.apply(B,F)).next())});(self.webpackChunkhezhijian249=self.webpackChunkhezhijian249||[]).push([[6796],{58401:function(B,F,s){"use strict";s.d(F,{F:function(){return Ie}});var C=s(86499),j=s(67294),G=s(8410);function A(){const[,re]=j.useReducer(ae=>ae+1,0);return re}var a=s(29691);const L=["xxl","xl","lg","md","sm","xs"],ce=re=>({xs:`(max-width: ${re.screenXSMax}px)`,sm:`(min-width: ${re.screenSM}px)`,md:`(min-width: ${re.screenMD}px)`,lg:`(min-width: ${re.screenLG}px)`,xl:`(min-width: ${re.screenXL}px)`,xxl:`(min-width: ${re.screenXXL}px)`}),Se=re=>{const ae=re,je=[].concat(L).reverse();return je.forEach((He,pt)=>{const Ae=He.toUpperCase(),xt=`screen${Ae}Min`,et=`screen${Ae}`;if(!(ae[xt]<=ae[et]))throw new Error(`${xt}<=${et} fails : !(${ae[xt]}<=${ae[et]})`);if(pt<je.length-1){const c=`screen${Ae}Max`;if(!(ae[et]<=ae[c]))throw new Error(`${et}<=${c} fails : !(${ae[et]}<=${ae[c]})`);const Dt=`screen${je[pt+1].toUpperCase()}Min`;if(!(ae[c]<=ae[Dt]))throw new Error(`${c}<=${Dt} fails : !(${ae[c]}<=${ae[Dt]})`)}}),re};function N(){const[,re]=(0,a.ZP)(),ae=ce(Se(re));return j.useMemo(()=>{const je=new Map;let He=-1,pt={};return{matchHandlers:{},dispatch(Ae){return pt=Ae,je.forEach(xt=>xt(pt)),je.size>=1},subscribe(Ae){return je.size||this.register(),He+=1,je.set(He,Ae),Ae(pt),He},unsubscribe(Ae){je.delete(Ae),je.size||this.unregister()},unregister(){Object.keys(ae).forEach(Ae=>{const xt=ae[Ae],et=this.matchHandlers[xt];et==null||et.mql.removeListener(et==null?void 0:et.listener)}),je.clear()},register(){Object.keys(ae).forEach(Ae=>{const xt=ae[Ae],et=Gt=>{let{matches:Dt}=Gt;this.dispatch(Object.assign(Object.assign({},pt),{[Ae]:Dt}))},c=window.matchMedia(xt);c.addListener(et),this.matchHandlers[xt]={mql:c,listener:et},et(c)})},responsiveMap:ae}},[re])}const z=(re,ae)=>{if(ae&&typeof ae=="object")for(let je=0;je<L.length;je++){const He=L[je];if(re[He]&&ae[He]!==void 0)return ae[He]}};function Y(){let re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const ae=(0,j.useRef)({}),je=A(),He=N();return(0,G.Z)(()=>{const pt=He.subscribe(Ae=>{ae.current=Ae,re&&je()});return()=>He.unsubscribe(pt)},[]),ae.current}var We=Y;function bt(){return We()}var ft={useBreakpoint:bt},Ie=function(){var ae=ft.useBreakpoint();return(0,j.useMemo)(function(){return(0,C.f)(ae)},[ae])}},98787:function(B,F,s){"use strict";s.d(F,{o2:function(){return a},yT:function(){return L}});var C=s(74902),j=s(8796);const G=j.i.map(ce=>`${ce}-inverse`),A=["success","processing","error","default","warning"];function a(ce){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat((0,C.Z)(G),(0,C.Z)(j.i)).includes(ce):j.i.includes(ce)}function L(ce){return A.includes(ce)}},99291:function(B,F,s){"use strict";s.d(F,{Z:function(){return Wt}});var C=s(67294),j=s(95480),G=s(93967),A=s.n(G),a=function(w,x){var m={};for(var I in w)Object.prototype.hasOwnProperty.call(w,I)&&x.indexOf(I)<0&&(m[I]=w[I]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,I=Object.getOwnPropertySymbols(w);O<I.length;O++)x.indexOf(I[O])<0&&Object.prototype.propertyIsEnumerable.call(w,I[O])&&(m[I[O]]=w[I[O]]);return m};const L={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},ce=C.createContext({}),Se=(()=>{let w=0;return function(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return w+=1,`${x}${w}`}})(),N=null;var z=null,Y=s(89705),We=s(66680),bt=s(98423),ft=s(33603),Ie=s(96159),re=s(53124),ae=s(35792),He=(0,C.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),pt=function(w,x){var m={};for(var I in w)Object.prototype.hasOwnProperty.call(w,I)&&x.indexOf(I)<0&&(m[I]=w[I]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,I=Object.getOwnPropertySymbols(w);O<I.length;O++)x.indexOf(I[O])<0&&Object.prototype.propertyIsEnumerable.call(w,I[O])&&(m[I[O]]=w[I[O]]);return m},xt=w=>{const{prefixCls:x,className:m,dashed:I}=w,O=pt(w,["prefixCls","className","dashed"]),{getPrefixCls:q}=C.useContext(re.E_),ue=q("menu",x),ne=A()({[`${ue}-item-divider-dashed`]:!!I},m);return C.createElement(j.iz,Object.assign({className:ne},O))},et=s(50344),c=s(68866),Dt=w=>{var x;const{className:m,children:I,icon:O,title:q,danger:ue}=w,{prefixCls:ne,firstLevel:oe,direction:Ne,disableMenuItemTitleTooltip:De,inlineCollapsed:Fe}=C.useContext(He),ct=Mt=>{const lt=I==null?void 0:I[0],$t=C.createElement("span",{className:`${ne}-title-content`},I);return(!O||C.isValidElement(I)&&I.type==="span")&&I&&Mt&&oe&&typeof lt=="string"?C.createElement("div",{className:`${ne}-inline-collapsed-noicon`},lt.charAt(0)):$t},{siderCollapsed:Ve}=C.useContext(ce);let Te=q;typeof q=="undefined"?Te=oe?I:"":q===!1&&(Te="");const _e={title:Te};!Ve&&!Fe&&(_e.title=null,_e.open=!1);const tt=(0,et.Z)(I).length;let Pe=C.createElement(j.ck,Object.assign({},(0,bt.Z)(w,["title","icon","danger"]),{className:A()({[`${ne}-item-danger`]:ue,[`${ne}-item-only-child`]:(O?tt+1:tt)===1},m),title:typeof q=="string"?q:void 0}),(0,Ie.Tm)(O,{className:A()(C.isValidElement(O)?(x=O.props)===null||x===void 0?void 0:x.className:"",`${ne}-item-icon`)}),ct(Fe));return De||(Pe=C.createElement(c.Z,Object.assign({},_e,{placement:Ne==="rtl"?"left":"right",overlayClassName:`${ne}-inline-collapsed-tooltip`}),Pe)),Pe},un=s(42550),gn=function(w,x){var m={};for(var I in w)Object.prototype.hasOwnProperty.call(w,I)&&x.indexOf(I)<0&&(m[I]=w[I]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,I=Object.getOwnPropertySymbols(w);O<I.length;O++)x.indexOf(I[O])<0&&Object.prototype.propertyIsEnumerable.call(w,I[O])&&(m[I[O]]=w[I[O]]);return m};const Zt=C.createContext(null),Ue=null;var Bt=Zt,we=s(25446),tn=s(10274),Jt=s(14747),Cn=s(33507),hn=s(67771),jn=s(50438),En=s(83559),Tn=s(83262),Sn=w=>{const{componentCls:x,motionDurationSlow:m,horizontalLineHeight:I,colorSplit:O,lineWidth:q,lineType:ue,itemPaddingInline:ne}=w;return{[`${x}-horizontal`]:{lineHeight:I,border:0,borderBottom:`${(0,we.bf)(q)} ${ue} ${O}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${x}-item, ${x}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:ne},[`> ${x}-item:hover,
        > ${x}-item-active,
        > ${x}-submenu ${x}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${x}-item, ${x}-submenu-title`]:{transition:[`border-color ${m}`,`background ${m}`].join(",")},[`${x}-submenu-arrow`]:{display:"none"}}}},ie=w=>{let{componentCls:x,menuArrowOffset:m,calc:I}=w;return{[`${x}-rtl`]:{direction:"rtl"},[`${x}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${x}-rtl${x}-vertical,
    ${x}-submenu-rtl ${x}-vertical`]:{[`${x}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,we.bf)(I(m).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,we.bf)(m)})`}}}}};const xe=w=>Object.assign({},(0,Jt.oN)(w));var de=(w,x)=>{const{componentCls:m,itemColor:I,itemSelectedColor:O,groupTitleColor:q,itemBg:ue,subMenuItemBg:ne,itemSelectedBg:oe,activeBarHeight:Ne,activeBarWidth:De,activeBarBorderWidth:Fe,motionDurationSlow:ct,motionEaseInOut:Ve,motionEaseOut:Te,itemPaddingInline:_e,motionDurationMid:tt,itemHoverColor:Pe,lineType:Mt,colorSplit:lt,itemDisabledColor:$t,dangerItemColor:At,dangerItemHoverColor:Ct,dangerItemSelectedColor:zt,dangerItemActiveBg:It,dangerItemSelectedBg:Qe,popupBg:Lt,itemHoverBg:Ft,itemActiveBg:Vt,menuSubMenuBg:kt,horizontalItemSelectedColor:dt,horizontalItemSelectedBg:qt,horizontalItemBorderRadius:on,horizontalItemHoverBg:Yt}=w;return{[`${m}-${x}, ${m}-${x} > ${m}`]:{color:I,background:ue,[`&${m}-root:focus-visible`]:Object.assign({},xe(w)),[`${m}-item-group-title`]:{color:q},[`${m}-submenu-selected`]:{[`> ${m}-submenu-title`]:{color:O}},[`${m}-item, ${m}-submenu-title`]:{color:I,[`&:not(${m}-item-disabled):focus-visible`]:Object.assign({},xe(w))},[`${m}-item-disabled, ${m}-submenu-disabled`]:{color:`${$t} !important`},[`${m}-item:not(${m}-item-selected):not(${m}-submenu-selected)`]:{[`&:hover, > ${m}-submenu-title:hover`]:{color:Pe}},[`&:not(${m}-horizontal)`]:{[`${m}-item:not(${m}-item-selected)`]:{"&:hover":{backgroundColor:Ft},"&:active":{backgroundColor:Vt}},[`${m}-submenu-title`]:{"&:hover":{backgroundColor:Ft},"&:active":{backgroundColor:Vt}}},[`${m}-item-danger`]:{color:At,[`&${m}-item:hover`]:{[`&:not(${m}-item-selected):not(${m}-submenu-selected)`]:{color:Ct}},[`&${m}-item:active`]:{background:It}},[`${m}-item a`]:{"&, &:hover":{color:"inherit"}},[`${m}-item-selected`]:{color:O,[`&${m}-item-danger`]:{color:zt},"a, a:hover":{color:"inherit"}},[`& ${m}-item-selected`]:{backgroundColor:oe,[`&${m}-item-danger`]:{backgroundColor:Qe}},[`&${m}-submenu > ${m}`]:{backgroundColor:kt},[`&${m}-popup > ${m}`]:{backgroundColor:Lt},[`&${m}-submenu-popup > ${m}`]:{backgroundColor:Lt},[`&${m}-horizontal`]:Object.assign(Object.assign({},x==="dark"?{borderBottom:0}:{}),{[`> ${m}-item, > ${m}-submenu`]:{top:Fe,marginTop:w.calc(Fe).mul(-1).equal(),marginBottom:0,borderRadius:on,"&::after":{position:"absolute",insetInline:_e,bottom:0,borderBottom:`${(0,we.bf)(Ne)} solid transparent`,transition:`border-color ${ct} ${Ve}`,content:'""'},"&:hover, &-active, &-open":{background:Yt,"&::after":{borderBottomWidth:Ne,borderBottomColor:dt}},"&-selected":{color:dt,backgroundColor:qt,"&:hover":{backgroundColor:qt},"&::after":{borderBottomWidth:Ne,borderBottomColor:dt}}}}),[`&${m}-root`]:{[`&${m}-inline, &${m}-vertical`]:{borderInlineEnd:`${(0,we.bf)(Fe)} ${Mt} ${lt}`}},[`&${m}-inline`]:{[`${m}-sub${m}-inline`]:{background:ne},[`${m}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,we.bf)(De)} solid ${O}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${tt} ${Te}`,`opacity ${tt} ${Te}`].join(","),content:'""'},[`&${m}-item-danger`]:{"&::after":{borderInlineEndColor:zt}}},[`${m}-selected, ${m}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${tt} ${Ve}`,`opacity ${tt} ${Ve}`].join(",")}}}}}};const ye=w=>{const{componentCls:x,itemHeight:m,itemMarginInline:I,padding:O,menuArrowSize:q,marginXS:ue,itemMarginBlock:ne,itemWidth:oe,itemPaddingInline:Ne}=w,De=w.calc(q).add(O).add(ue).equal();return{[`${x}-item`]:{position:"relative",overflow:"hidden"},[`${x}-item, ${x}-submenu-title`]:{height:m,lineHeight:(0,we.bf)(m),paddingInline:Ne,overflow:"hidden",textOverflow:"ellipsis",marginInline:I,marginBlock:ne,width:oe},[`> ${x}-item,
            > ${x}-submenu > ${x}-submenu-title`]:{height:m,lineHeight:(0,we.bf)(m)},[`${x}-item-group-list ${x}-submenu-title,
            ${x}-submenu-title`]:{paddingInlineEnd:De}}};var Ee=w=>{const{componentCls:x,iconCls:m,itemHeight:I,colorTextLightSolid:O,dropdownWidth:q,controlHeightLG:ue,motionEaseOut:ne,paddingXL:oe,itemMarginInline:Ne,fontSizeLG:De,motionDurationFast:Fe,motionDurationSlow:ct,paddingXS:Ve,boxShadowSecondary:Te,collapsedWidth:_e,collapsedIconSize:tt}=w,Pe={height:I,lineHeight:(0,we.bf)(I),listStylePosition:"inside",listStyleType:"disc"};return[{[x]:{"&-inline, &-vertical":Object.assign({[`&${x}-root`]:{boxShadow:"none"}},ye(w))},[`${x}-submenu-popup`]:{[`${x}-vertical`]:Object.assign(Object.assign({},ye(w)),{boxShadow:Te})}},{[`${x}-submenu-popup ${x}-vertical${x}-sub`]:{minWidth:q,maxHeight:`calc(100vh - ${(0,we.bf)(w.calc(ue).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${x}-inline`]:{width:"100%",[`&${x}-root`]:{[`${x}-item, ${x}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${ct}`,`background ${ct}`,`padding ${Fe} ${ne}`].join(","),[`> ${x}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${x}-sub${x}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${x}-submenu > ${x}-submenu-title`]:Pe,[`& ${x}-item-group-title`]:{paddingInlineStart:oe}},[`${x}-item`]:Pe}},{[`${x}-inline-collapsed`]:{width:_e,[`&${x}-root`]:{[`${x}-item, ${x}-submenu ${x}-submenu-title`]:{[`> ${x}-inline-collapsed-noicon`]:{fontSize:De,textAlign:"center"}}},[`> ${x}-item,
          > ${x}-item-group > ${x}-item-group-list > ${x}-item,
          > ${x}-item-group > ${x}-item-group-list > ${x}-submenu > ${x}-submenu-title,
          > ${x}-submenu > ${x}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,we.bf)(w.calc(De).div(2).equal())} - ${(0,we.bf)(Ne)})`,textOverflow:"clip",[`
            ${x}-submenu-arrow,
            ${x}-submenu-expand-icon
          `]:{opacity:0},[`${x}-item-icon, ${m}`]:{margin:0,fontSize:tt,lineHeight:(0,we.bf)(I),"+ span":{display:"inline-block",opacity:0}}},[`${x}-item-icon, ${m}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${x}-item-icon, ${m}`]:{display:"none"},"a, a:hover":{color:O}},[`${x}-item-group-title`]:Object.assign(Object.assign({},Jt.vS),{paddingInline:Ve})}}]};const ke=w=>{const{componentCls:x,motionDurationSlow:m,motionDurationMid:I,motionEaseInOut:O,motionEaseOut:q,iconCls:ue,iconSize:ne,iconMarginInlineEnd:oe}=w;return{[`${x}-item, ${x}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${m}`,`background ${m}`,`padding calc(${m} + 0.1s) ${O}`].join(","),[`${x}-item-icon, ${ue}`]:{minWidth:ne,fontSize:ne,transition:[`font-size ${I} ${q}`,`margin ${m} ${O}`,`color ${m}`].join(","),"+ span":{marginInlineStart:oe,opacity:1,transition:[`opacity ${m} ${O}`,`margin ${m}`,`color ${m}`].join(",")}},[`${x}-item-icon`]:Object.assign({},(0,Jt.Ro)()),[`&${x}-item-only-child`]:{[`> ${ue}, > ${x}-item-icon`]:{marginInlineEnd:0}}},[`${x}-item-disabled, ${x}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${x}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},gt=w=>{const{componentCls:x,motionDurationSlow:m,motionEaseInOut:I,borderRadius:O,menuArrowSize:q,menuArrowOffset:ue}=w;return{[`${x}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:w.margin,width:q,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${m} ${I}, opacity ${m}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:w.calc(q).mul(.6).equal(),height:w.calc(q).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:O,transition:[`background ${m} ${I}`,`transform ${m} ${I}`,`top ${m} ${I}`,`color ${m} ${I}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,we.bf)(w.calc(ue).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,we.bf)(ue)})`}}}}},_=w=>{const{antCls:x,componentCls:m,fontSize:I,motionDurationSlow:O,motionDurationMid:q,motionEaseInOut:ue,paddingXS:ne,padding:oe,colorSplit:Ne,lineWidth:De,zIndexPopup:Fe,borderRadiusLG:ct,subMenuItemBorderRadius:Ve,menuArrowSize:Te,menuArrowOffset:_e,lineType:tt,groupTitleLineHeight:Pe,groupTitleFontSize:Mt}=w;return[{"":{[m]:Object.assign(Object.assign({},(0,Jt.dF)()),{"&-hidden":{display:"none"}})},[`${m}-submenu-hidden`]:{display:"none"}},{[m]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,Jt.Wf)(w)),(0,Jt.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:I,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${O} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${m}-item`]:{flex:"none"}},[`${m}-item, ${m}-submenu, ${m}-submenu-title`]:{borderRadius:w.itemBorderRadius},[`${m}-item-group-title`]:{padding:`${(0,we.bf)(ne)} ${(0,we.bf)(oe)}`,fontSize:Mt,lineHeight:Pe,transition:`all ${O}`},[`&-horizontal ${m}-submenu`]:{transition:[`border-color ${O} ${ue}`,`background ${O} ${ue}`].join(",")},[`${m}-submenu, ${m}-submenu-inline`]:{transition:[`border-color ${O} ${ue}`,`background ${O} ${ue}`,`padding ${q} ${ue}`].join(",")},[`${m}-submenu ${m}-sub`]:{cursor:"initial",transition:[`background ${O} ${ue}`,`padding ${O} ${ue}`].join(",")},[`${m}-title-content`]:{display:"inline-flex",alignItems:"center",transition:`color ${O}`,"> a:first-child":{flexGrow:1},[`> ${x}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${m}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:w.padding,fontSize:w.fontSizeSM,color:w.colorTextDescription}},[`${m}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${m}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:Ne,borderStyle:tt,borderWidth:0,borderTopWidth:De,marginBlock:De,padding:0,"&-dashed":{borderStyle:"dashed"}}}),ke(w)),{[`${m}-item-group`]:{[`${m}-item-group-list`]:{margin:0,padding:0,[`${m}-item, ${m}-submenu-title`]:{paddingInline:`${(0,we.bf)(w.calc(I).mul(2).equal())} ${(0,we.bf)(oe)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:Fe,borderRadius:ct,boxShadow:"none",transformOrigin:"0 0",[`&${m}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${m}`]:Object.assign(Object.assign(Object.assign({borderRadius:ct},ke(w)),gt(w)),{[`${m}-item, ${m}-submenu > ${m}-submenu-title`]:{borderRadius:Ve},[`${m}-submenu-title::after`]:{transition:`transform ${O} ${ue}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:w.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:w.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:w.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:w.paddingXS}}}),gt(w)),{[`&-inline-collapsed ${m}-submenu-arrow,
        &-inline ${m}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,we.bf)(_e)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,we.bf)(w.calc(_e).mul(-1).equal())})`}},[`${m}-submenu-open${m}-submenu-inline > ${m}-submenu-title > ${m}-submenu-arrow`]:{transform:`translateY(${(0,we.bf)(w.calc(Te).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,we.bf)(w.calc(_e).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,we.bf)(_e)})`}}})},{[`${x}-layout-header`]:{[m]:{lineHeight:"inherit"}}}]},Ge=w=>{var x,m,I;const{colorPrimary:O,colorError:q,colorTextDisabled:ue,colorErrorBg:ne,colorText:oe,colorTextDescription:Ne,colorBgContainer:De,colorFillAlter:Fe,colorFillContent:ct,lineWidth:Ve,lineWidthBold:Te,controlItemBgActive:_e,colorBgTextHover:tt,controlHeightLG:Pe,lineHeight:Mt,colorBgElevated:lt,marginXXS:$t,padding:At,fontSize:Ct,controlHeightSM:zt,fontSizeLG:It,colorTextLightSolid:Qe,colorErrorHover:Lt}=w,Ft=(x=w.activeBarWidth)!==null&&x!==void 0?x:0,Vt=(m=w.activeBarBorderWidth)!==null&&m!==void 0?m:Ve,kt=(I=w.itemMarginInline)!==null&&I!==void 0?I:w.marginXXS,dt=new tn.C(Qe).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:w.zIndexPopupBase+50,radiusItem:w.borderRadiusLG,itemBorderRadius:w.borderRadiusLG,radiusSubMenuItem:w.borderRadiusSM,subMenuItemBorderRadius:w.borderRadiusSM,colorItemText:oe,itemColor:oe,colorItemTextHover:oe,itemHoverColor:oe,colorItemTextHoverHorizontal:O,horizontalItemHoverColor:O,colorGroupTitle:Ne,groupTitleColor:Ne,colorItemTextSelected:O,itemSelectedColor:O,colorItemTextSelectedHorizontal:O,horizontalItemSelectedColor:O,colorItemBg:De,itemBg:De,colorItemBgHover:tt,itemHoverBg:tt,colorItemBgActive:ct,itemActiveBg:_e,colorSubItemBg:Fe,subMenuItemBg:Fe,colorItemBgSelected:_e,itemSelectedBg:_e,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:Ft,colorActiveBarHeight:Te,activeBarHeight:Te,colorActiveBarBorderSize:Ve,activeBarBorderWidth:Vt,colorItemTextDisabled:ue,itemDisabledColor:ue,colorDangerItemText:q,dangerItemColor:q,colorDangerItemTextHover:q,dangerItemHoverColor:q,colorDangerItemTextSelected:q,dangerItemSelectedColor:q,colorDangerItemBgActive:ne,dangerItemActiveBg:ne,colorDangerItemBgSelected:ne,dangerItemSelectedBg:ne,itemMarginInline:kt,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:Pe,groupTitleLineHeight:Mt,collapsedWidth:Pe*2,popupBg:lt,itemMarginBlock:$t,itemPaddingInline:At,horizontalLineHeight:`${Pe*1.15}px`,iconSize:Ct,iconMarginInlineEnd:zt-Ct,collapsedIconSize:It,groupTitleFontSize:Ct,darkItemDisabledColor:new tn.C(Qe).setAlpha(.25).toRgbString(),darkItemColor:dt,darkDangerItemColor:q,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:Qe,darkItemSelectedBg:O,darkDangerItemSelectedBg:q,darkItemHoverBg:"transparent",darkGroupTitleColor:dt,darkItemHoverColor:Qe,darkDangerItemHoverColor:Lt,darkDangerItemSelectedColor:Qe,darkDangerItemActiveBg:q,itemWidth:Ft?`calc(100% + ${Vt}px)`:`calc(100% - ${kt*2}px)`}};var Ke=function(w){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return(0,En.I$)("Menu",O=>{const{colorBgElevated:q,controlHeightLG:ue,fontSize:ne,darkItemColor:oe,darkDangerItemColor:Ne,darkItemBg:De,darkSubMenuItemBg:Fe,darkItemSelectedColor:ct,darkItemSelectedBg:Ve,darkDangerItemSelectedBg:Te,darkItemHoverBg:_e,darkGroupTitleColor:tt,darkItemHoverColor:Pe,darkItemDisabledColor:Mt,darkDangerItemHoverColor:lt,darkDangerItemSelectedColor:$t,darkDangerItemActiveBg:At,popupBg:Ct,darkPopupBg:zt}=O,It=O.calc(ne).div(7).mul(5).equal(),Qe=(0,Tn.IX)(O,{menuArrowSize:It,menuHorizontalHeight:O.calc(ue).mul(1.15).equal(),menuArrowOffset:O.calc(It).mul(.25).equal(),menuSubMenuBg:q,calc:O.calc,popupBg:Ct}),Lt=(0,Tn.IX)(Qe,{itemColor:oe,itemHoverColor:Pe,groupTitleColor:tt,itemSelectedColor:ct,itemBg:De,popupBg:zt,subMenuItemBg:Fe,itemActiveBg:"transparent",itemSelectedBg:Ve,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:_e,itemDisabledColor:Mt,dangerItemColor:Ne,dangerItemHoverColor:lt,dangerItemSelectedColor:$t,dangerItemActiveBg:At,dangerItemSelectedBg:Te,menuSubMenuBg:Fe,horizontalItemSelectedColor:ct,horizontalItemSelectedBg:Ve});return[_(Qe),Sn(Qe),Ee(Qe),de(Qe,"light"),de(Lt,"dark"),ie(Qe),(0,Cn.Z)(Qe),(0,hn.oN)(Qe,"slide-up"),(0,hn.oN)(Qe,"slide-down"),(0,jn._y)(Qe,"zoom-big")]},Ge,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:m,unitless:{groupTitleLineHeight:!0}})(w,x)},Ye=s(87263),le=w=>{var x;const{popupClassName:m,icon:I,title:O,theme:q}=w,ue=C.useContext(He),{prefixCls:ne,inlineCollapsed:oe,theme:Ne}=ue,De=(0,j.Xl)();let Fe;if(!I)Fe=oe&&!De.length&&O&&typeof O=="string"?C.createElement("div",{className:`${ne}-inline-collapsed-noicon`},O.charAt(0)):C.createElement("span",{className:`${ne}-title-content`},O);else{const Te=C.isValidElement(O)&&O.type==="span";Fe=C.createElement(C.Fragment,null,(0,Ie.Tm)(I,{className:A()(C.isValidElement(I)?(x=I.props)===null||x===void 0?void 0:x.className:"",`${ne}-item-icon`)}),Te?O:C.createElement("span",{className:`${ne}-title-content`},O))}const ct=C.useMemo(()=>Object.assign(Object.assign({},ue),{firstLevel:!1}),[ue]),[Ve]=(0,Ye.Cn)("Menu");return C.createElement(He.Provider,{value:ct},C.createElement(j.Wd,Object.assign({},(0,bt.Z)(w,["icon"]),{title:Fe,popupClassName:A()(ne,m,`${ne}-${q||Ne}`),popupStyle:Object.assign({zIndex:Ve},w.popupStyle)})))},yt=function(w,x){var m={};for(var I in w)Object.prototype.hasOwnProperty.call(w,I)&&x.indexOf(I)<0&&(m[I]=w[I]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,I=Object.getOwnPropertySymbols(w);O<I.length;O++)x.indexOf(I[O])<0&&Object.prototype.propertyIsEnumerable.call(w,I[O])&&(m[I[O]]=w[I[O]]);return m};function Ot(w){return w===null||w===!1}const Kt={item:Dt,submenu:le,divider:xt};var an=(0,C.forwardRef)((w,x)=>{var m;const I=C.useContext(Bt),O=I||{},{getPrefixCls:q,getPopupContainer:ue,direction:ne,menu:oe}=C.useContext(re.E_),Ne=q(),{prefixCls:De,className:Fe,style:ct,theme:Ve="light",expandIcon:Te,_internalDisableMenuItemTitleTooltip:_e,inlineCollapsed:tt,siderCollapsed:Pe,rootClassName:Mt,mode:lt,selectable:$t,onClick:At,overflowedIndicatorPopupClassName:Ct}=w,zt=yt(w,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),It=(0,bt.Z)(zt,["collapsedWidth"]);(m=O.validator)===null||m===void 0||m.call(O,{mode:lt});const Qe=(0,We.Z)(function(){var jt;At==null||At.apply(void 0,arguments),(jt=O.onClick)===null||jt===void 0||jt.call(O)}),Lt=O.mode||lt,Ft=$t!=null?$t:O.selectable,Vt=C.useMemo(()=>Pe!==void 0?Pe:tt,[tt,Pe]),kt={horizontal:{motionName:`${Ne}-slide-up`},inline:(0,ft.Z)(Ne),other:{motionName:`${Ne}-zoom-big`}},dt=q("menu",De||O.prefixCls),qt=(0,ae.Z)(dt),[on,Yt,ln]=Ke(dt,qt,!I),_t=A()(`${dt}-${Ve}`,oe==null?void 0:oe.className,Fe),ht=C.useMemo(()=>{var jt,sn;if(typeof Te=="function"||Ot(Te))return Te||null;if(typeof O.expandIcon=="function"||Ot(O.expandIcon))return O.expandIcon||null;if(typeof(oe==null?void 0:oe.expandIcon)=="function"||Ot(oe==null?void 0:oe.expandIcon))return(oe==null?void 0:oe.expandIcon)||null;const vn=(jt=Te!=null?Te:O==null?void 0:O.expandIcon)!==null&&jt!==void 0?jt:oe==null?void 0:oe.expandIcon;return(0,Ie.Tm)(vn,{className:A()(`${dt}-submenu-expand-icon`,C.isValidElement(vn)?(sn=vn.props)===null||sn===void 0?void 0:sn.className:void 0)})},[Te,O==null?void 0:O.expandIcon,oe==null?void 0:oe.expandIcon,dt]),Xt=C.useMemo(()=>({prefixCls:dt,inlineCollapsed:Vt||!1,direction:ne,firstLevel:!0,theme:Ve,mode:Lt,disableMenuItemTitleTooltip:_e}),[dt,Vt,ne,_e,Ve]);return on(C.createElement(Bt.Provider,{value:null},C.createElement(He.Provider,{value:Xt},C.createElement(j.ZP,Object.assign({getPopupContainer:ue,overflowedIndicator:C.createElement(Y.Z,null),overflowedIndicatorPopupClassName:A()(dt,`${dt}-${Ve}`,Ct),mode:Lt,selectable:Ft,onClick:Qe},It,{inlineCollapsed:Vt,style:Object.assign(Object.assign({},oe==null?void 0:oe.style),ct),className:_t,prefixCls:dt,direction:ne,defaultMotions:kt,expandIcon:ht,ref:x,rootClassName:A()(Mt,Yt,O.rootClassName,ln,qt),_internalComponents:Kt})))))});const Pt=(0,C.forwardRef)((w,x)=>{const m=(0,C.useRef)(null),I=C.useContext(ce);return(0,C.useImperativeHandle)(x,()=>({menu:m.current,focus:O=>{var q;(q=m.current)===null||q===void 0||q.focus(O)}})),C.createElement(an,Object.assign({ref:m},w,I))});Pt.Item=Dt,Pt.SubMenu=le,Pt.Divider=xt,Pt.ItemGroup=j.BW;var Wt=Pt},33507:function(B,F){"use strict";const s=C=>({[C.componentCls]:{[`${C.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${C.motionDurationMid} ${C.motionEaseInOut},
        opacity ${C.motionDurationMid} ${C.motionEaseInOut} !important`}},[`${C.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${C.motionDurationMid} ${C.motionEaseInOut},
        opacity ${C.motionDurationMid} ${C.motionEaseInOut} !important`}}});F.Z=s},8796:function(B,F,s){"use strict";s.d(F,{i:function(){return C}});const C=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},98719:function(B,F,s){"use strict";s.d(F,{Z:function(){return j}});var C=s(8796);function j(G,A){return C.i.reduce((a,L)=>{const ce=G[`${L}1`],Se=G[`${L}3`],N=G[`${L}6`],z=G[`${L}7`];return Object.assign(Object.assign({},a),A(L,{lightColor:ce,lightBorderColor:Se,darkColor:N,textColor:z}))},{})}},68866:function(B,F,s){"use strict";s.d(F,{Z:function(){return Sn}});var C=s(67294),j=s(93967),G=s.n(j),A=s(92419),a=s(21770),L=s(15382),ce=s(87263),Se=s(33603),N=s(25446);function z(W){const{sizePopupArrow:ie,borderRadiusXS:xe,borderRadiusOuter:D}=W,de=ie/2,ye=0,$e=de,Ee=D*1/Math.sqrt(2),ke=de-D*(1-1/Math.sqrt(2)),gt=de-xe*(1/Math.sqrt(2)),_=D*(Math.sqrt(2)-1)+xe*(1/Math.sqrt(2)),Ge=2*de-gt,Ke=_,Ye=2*de-Ee,Ht=ke,le=2*de-ye,yt=$e,Ot=de*Math.sqrt(2)+D*(Math.sqrt(2)-2),Kt=D*(Math.sqrt(2)-1),nn=`polygon(${Kt}px 100%, 50% ${Kt}px, ${2*de-Kt}px 100%, ${Kt}px 100%)`,an=`path('M ${ye} ${$e} A ${D} ${D} 0 0 0 ${Ee} ${ke} L ${gt} ${_} A ${xe} ${xe} 0 0 1 ${Ge} ${Ke} L ${Ye} ${Ht} A ${D} ${D} 0 0 0 ${le} ${yt} Z')`;return{arrowShadowWidth:Ot,arrowPath:an,arrowPolygon:nn}}const Y=(W,ie,xe)=>{const{sizePopupArrow:D,arrowPolygon:de,arrowPath:ye,arrowShadowWidth:$e,borderRadiusXS:Ee,calc:ke}=W;return{pointerEvents:"none",width:D,height:D,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:D,height:ke(D).div(2).equal(),background:ie,clipPath:{_multi_value_:!0,value:[de,ye]},content:'""'},"&::after":{content:'""',position:"absolute",width:$e,height:$e,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${(0,N.bf)(Ee)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:xe,zIndex:0,background:"transparent"}}},We=8;function bt(W){const{contentRadius:ie,limitVerticalRadius:xe}=W,D=ie>12?ie+2:12;return{arrowOffsetHorizontal:D,arrowOffsetVertical:xe?We:D}}function ft(W,ie){return W?ie:{}}function Ie(W,ie,xe){const{componentCls:D,boxShadowPopoverArrow:de,arrowOffsetVertical:ye,arrowOffsetHorizontal:$e}=W,{arrowDistance:Ee=0,arrowPlacement:ke={left:!0,right:!0,top:!0,bottom:!0}}=xe||{};return{[D]:Object.assign(Object.assign(Object.assign(Object.assign({[`${D}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},Y(W,ie,de)),{"&:before":{background:ie}})]},ft(!!ke.top,{[[`&-placement-top > ${D}-arrow`,`&-placement-topLeft > ${D}-arrow`,`&-placement-topRight > ${D}-arrow`].join(",")]:{bottom:Ee,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${D}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":$e,[`> ${D}-arrow`]:{left:{_skip_check_:!0,value:$e}}},"&-placement-topRight":{"--arrow-offset-horizontal":`calc(100% - ${(0,N.bf)($e)})`,[`> ${D}-arrow`]:{right:{_skip_check_:!0,value:$e}}}})),ft(!!ke.bottom,{[[`&-placement-bottom > ${D}-arrow`,`&-placement-bottomLeft > ${D}-arrow`,`&-placement-bottomRight > ${D}-arrow`].join(",")]:{top:Ee,transform:"translateY(-100%)"},[`&-placement-bottom > ${D}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":$e,[`> ${D}-arrow`]:{left:{_skip_check_:!0,value:$e}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":`calc(100% - ${(0,N.bf)($e)})`,[`> ${D}-arrow`]:{right:{_skip_check_:!0,value:$e}}}})),ft(!!ke.left,{[[`&-placement-left > ${D}-arrow`,`&-placement-leftTop > ${D}-arrow`,`&-placement-leftBottom > ${D}-arrow`].join(",")]:{right:{_skip_check_:!0,value:Ee},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${D}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${D}-arrow`]:{top:ye},[`&-placement-leftBottom > ${D}-arrow`]:{bottom:ye}})),ft(!!ke.right,{[[`&-placement-right > ${D}-arrow`,`&-placement-rightTop > ${D}-arrow`,`&-placement-rightBottom > ${D}-arrow`].join(",")]:{left:{_skip_check_:!0,value:Ee},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${D}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${D}-arrow`]:{top:ye},[`&-placement-rightBottom > ${D}-arrow`]:{bottom:ye}}))}}function re(W,ie,xe,D){if(D===!1)return{adjustX:!1,adjustY:!1};const de=D&&typeof D=="object"?D:{},ye={};switch(W){case"top":case"bottom":ye.shiftX=ie.arrowOffsetHorizontal*2+xe,ye.shiftY=!0,ye.adjustY=!0;break;case"left":case"right":ye.shiftY=ie.arrowOffsetVertical*2+xe,ye.shiftX=!0,ye.adjustX=!0;break}const $e=Object.assign(Object.assign({},ye),de);return $e.shiftX||($e.adjustX=!0),$e.shiftY||($e.adjustY=!0),$e}const ae={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},je={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},He=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function pt(W){const{arrowWidth:ie,autoAdjustOverflow:xe,arrowPointAtCenter:D,offset:de,borderRadius:ye,visibleFirst:$e}=W,Ee=ie/2,ke={};return Object.keys(ae).forEach(gt=>{const _=D&&je[gt]||ae[gt],Ge=Object.assign(Object.assign({},_),{offset:[0,0],dynamicInset:!0});switch(ke[gt]=Ge,He.has(gt)&&(Ge.autoArrow=!1),gt){case"top":case"topLeft":case"topRight":Ge.offset[1]=-Ee-de;break;case"bottom":case"bottomLeft":case"bottomRight":Ge.offset[1]=Ee+de;break;case"left":case"leftTop":case"leftBottom":Ge.offset[0]=-Ee-de;break;case"right":case"rightTop":case"rightBottom":Ge.offset[0]=Ee+de;break}const Ke=bt({contentRadius:ye,limitVerticalRadius:!0});if(D)switch(gt){case"topLeft":case"bottomLeft":Ge.offset[0]=-Ke.arrowOffsetHorizontal-Ee;break;case"topRight":case"bottomRight":Ge.offset[0]=Ke.arrowOffsetHorizontal+Ee;break;case"leftTop":case"rightTop":Ge.offset[1]=-Ke.arrowOffsetHorizontal*2+Ee;break;case"leftBottom":case"rightBottom":Ge.offset[1]=Ke.arrowOffsetHorizontal*2-Ee;break}Ge.overflow=re(gt,Ke,ie,xe),$e&&(Ge.htmlRegion="visibleFirst")}),ke}var Ae=s(96159),xt=s(27288),et=s(43945),c=s(53124),Gt=s(29691),Dt=s(14747),un=s(50438),gn=s(98719),Zt=s(83262),Ue=s(83559);const Bt=W=>{const{componentCls:ie,tooltipMaxWidth:xe,tooltipColor:D,tooltipBg:de,tooltipBorderRadius:ye,zIndexPopup:$e,controlHeight:Ee,boxShadowSecondary:ke,paddingSM:gt,paddingXS:_}=W;return[{[ie]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Dt.Wf)(W)),{position:"absolute",zIndex:$e,display:"block",width:"max-content",maxWidth:xe,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":de,[`${ie}-inner`]:{minWidth:"1em",minHeight:Ee,padding:`${(0,N.bf)(W.calc(gt).div(2).equal())} ${(0,N.bf)(_)}`,color:D,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:de,borderRadius:ye,boxShadow:ke,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${ie}-inner`]:{borderRadius:W.min(ye,We)}},[`${ie}-content`]:{position:"relative"}}),(0,gn.Z)(W,(Ge,Ke)=>{let{darkColor:Ye}=Ke;return{[`&${ie}-${Ge}`]:{[`${ie}-inner`]:{backgroundColor:Ye},[`${ie}-arrow`]:{"--antd-arrow-background-color":Ye}}}})),{"&-rtl":{direction:"rtl"}})},Ie(W,"var(--antd-arrow-background-color)"),{[`${ie}-pure`]:{position:"relative",maxWidth:"none",margin:W.sizePopupArrow}}]},we=W=>Object.assign(Object.assign({zIndexPopup:W.zIndexPopupBase+70},bt({contentRadius:W.borderRadius,limitVerticalRadius:!0})),z((0,Zt.IX)(W,{borderRadiusOuter:Math.min(W.borderRadiusOuter,4)})));var tn=function(W){let ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return(0,Ue.I$)("Tooltip",D=>{const{borderRadius:de,colorTextLightSolid:ye,colorBgSpotlight:$e}=D,Ee=(0,Zt.IX)(D,{tooltipMaxWidth:250,tooltipColor:ye,tooltipBorderRadius:de,tooltipBg:$e});return[Bt(Ee),(0,un._y)(D,"zoom-big-fast")]},we,{resetStyle:!1,injectStyle:ie})(W)},Jt=s(98787);function Cn(W,ie){const xe=(0,Jt.o2)(ie),D=G()({[`${W}-${ie}`]:ie&&xe}),de={},ye={};return ie&&!xe&&(de.background=ie,ye["--antd-arrow-background-color"]=ie),{className:D,overlayStyle:de,arrowStyle:ye}}var jn=W=>{const{prefixCls:ie,className:xe,placement:D="top",title:de,color:ye,overlayInnerStyle:$e}=W,{getPrefixCls:Ee}=C.useContext(c.E_),ke=Ee("tooltip",ie),[gt,_,Ge]=tn(ke),Ke=Cn(ke,ye),Ye=Ke.arrowStyle,Ht=Object.assign(Object.assign({},$e),Ke.overlayStyle),le=G()(_,Ge,ke,`${ke}-pure`,`${ke}-placement-${D}`,xe,Ke.className);return gt(C.createElement("div",{className:le,style:Ye},C.createElement("div",{className:`${ke}-arrow`}),C.createElement(A.G,Object.assign({},W,{className:_,prefixCls:ke,overlayInnerStyle:Ht}),de)))},En=function(W,ie){var xe={};for(var D in W)Object.prototype.hasOwnProperty.call(W,D)&&ie.indexOf(D)<0&&(xe[D]=W[D]);if(W!=null&&typeof Object.getOwnPropertySymbols=="function")for(var de=0,D=Object.getOwnPropertySymbols(W);de<D.length;de++)ie.indexOf(D[de])<0&&Object.prototype.propertyIsEnumerable.call(W,D[de])&&(xe[D[de]]=W[D[de]]);return xe};const Mn=C.forwardRef((W,ie)=>{var xe,D;const{prefixCls:de,openClassName:ye,getTooltipContainer:$e,overlayClassName:Ee,color:ke,overlayInnerStyle:gt,children:_,afterOpenChange:Ge,afterVisibleChange:Ke,destroyTooltipOnHide:Ye,arrow:Ht=!0,title:le,overlay:yt,builtinPlacements:Ot,arrowPointAtCenter:Kt=!1,autoAdjustOverflow:nn=!0}=W,an=!!Ht,[,Pt]=(0,Gt.ZP)(),{getPopupContainer:Wt,getPrefixCls:w,direction:x}=C.useContext(c.E_),m=(0,xt.ln)("Tooltip"),I=C.useRef(null),O=()=>{var ht;(ht=I.current)===null||ht===void 0||ht.forceAlign()};C.useImperativeHandle(ie,()=>{var ht;return{forceAlign:O,forcePopupAlign:()=>{m.deprecated(!1,"forcePopupAlign","forceAlign"),O()},nativeElement:(ht=I.current)===null||ht===void 0?void 0:ht.nativeElement}});const[q,ue]=(0,a.Z)(!1,{value:(xe=W.open)!==null&&xe!==void 0?xe:W.visible,defaultValue:(D=W.defaultOpen)!==null&&D!==void 0?D:W.defaultVisible}),ne=!le&&!yt&&le!==0,oe=ht=>{var Xt,jt;ue(ne?!1:ht),ne||((Xt=W.onOpenChange)===null||Xt===void 0||Xt.call(W,ht),(jt=W.onVisibleChange)===null||jt===void 0||jt.call(W,ht))},Ne=C.useMemo(()=>{var ht,Xt;let jt=Kt;return typeof Ht=="object"&&(jt=(Xt=(ht=Ht.pointAtCenter)!==null&&ht!==void 0?ht:Ht.arrowPointAtCenter)!==null&&Xt!==void 0?Xt:Kt),Ot||pt({arrowPointAtCenter:jt,autoAdjustOverflow:nn,arrowWidth:an?Pt.sizePopupArrow:0,borderRadius:Pt.borderRadius,offset:Pt.marginXXS,visibleFirst:!0})},[Kt,Ht,Ot,Pt]),De=C.useMemo(()=>le===0?le:yt||le||"",[yt,le]),Fe=C.createElement(L.Z,{space:!0},typeof De=="function"?De():De),{getPopupContainer:ct,placement:Ve="top",mouseEnterDelay:Te=.1,mouseLeaveDelay:_e=.1,overlayStyle:tt,rootClassName:Pe}=W,Mt=En(W,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),lt=w("tooltip",de),$t=w(),At=W["data-popover-inject"];let Ct=q;!("open"in W)&&!("visible"in W)&&ne&&(Ct=!1);const zt=C.isValidElement(_)&&!(0,Ae.M2)(_)?_:C.createElement("span",null,_),It=zt.props,Qe=!It.className||typeof It.className=="string"?G()(It.className,ye||`${lt}-open`):It.className,[Lt,Ft,Vt]=tn(lt,!At),kt=Cn(lt,ke),dt=kt.arrowStyle,qt=Object.assign(Object.assign({},gt),kt.overlayStyle),on=G()(Ee,{[`${lt}-rtl`]:x==="rtl"},kt.className,Pe,Ft,Vt),[Yt,ln]=(0,ce.Cn)("Tooltip",Mt.zIndex),_t=C.createElement(A.Z,Object.assign({},Mt,{zIndex:Yt,showArrow:an,placement:Ve,mouseEnterDelay:Te,mouseLeaveDelay:_e,prefixCls:lt,overlayClassName:on,overlayStyle:Object.assign(Object.assign({},dt),tt),getTooltipContainer:ct||$e||Wt,ref:I,builtinPlacements:Ne,overlay:Fe,visible:Ct,onVisibleChange:oe,afterVisibleChange:Ge!=null?Ge:Ke,overlayInnerStyle:qt,arrowContent:C.createElement("span",{className:`${lt}-arrow-content`}),motion:{motionName:(0,Se.m)($t,"zoom-big-fast",W.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!Ye}),Ct?(0,Ae.Tm)(zt,{className:Qe}):zt);return Lt(C.createElement(et.Z.Provider,{value:ln},_t))});Mn._InternalPanelDoNotUseOrYouWillBeFired=jn;var Sn=Mn},43590:function(B,F,s){"use strict";s.r(F),s.d(F,{default:function(){return Dd}});var C=s(88425),j=s(78788),G=s(64063),A=s.n(G),a=s(67294),L=s(4942),ce=s(91),Se=s(93967),N=s.n(Se),z=s(27288),Y=s(53124),We=s(16474),bt=s(94423),ft=s(48311),Ie=s(66968),re=s(83559);const ae=e=>{const{componentCls:t,colorText:n,fontSize:o,lineHeight:r,fontFamily:i}=e;return{[t]:{color:n,fontSize:o,lineHeight:r,fontFamily:i,[`&${t}-rtl`]:{direction:"rtl"}}}},je=()=>({});var He=(0,re.I$)("App",ae,je);const pt=()=>a.useContext(Ie.Z),Ae=e=>{const{prefixCls:t,children:n,className:o,rootClassName:r,message:i,notification:l,style:d,component:u="div"}=e,{direction:p,getPrefixCls:f}=(0,a.useContext)(Y.E_),g=f("app",t),[S,v,y]=He(g),b=N()(v,g,o,r,y,{[`${g}-rtl`]:p==="rtl"}),$=(0,a.useContext)(Ie.J),h=a.useMemo(()=>({message:Object.assign(Object.assign({},$.message),i),notification:Object.assign(Object.assign({},$.notification),l)}),[i,l,$.message,$.notification]),[R,H]=(0,We.Z)(h.message),[k,M]=(0,ft.Z)(h.notification),[E,P]=(0,bt.Z)(),T=a.useMemo(()=>({message:R,notification:k,modal:E}),[R,k,E]);(0,z.ln)("App")(!(y&&u===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const Z=u===!1?a.Fragment:u,K={className:b,style:d};return S(a.createElement(Ie.Z.Provider,{value:T},a.createElement(Ie.J.Provider,{value:h},a.createElement(Z,Object.assign({},u===!1?void 0:K),P,H,M,n))))};Ae.useApp=pt;var xt=Ae,et=s(25212),c=s(85893),Gt=["children"];function Dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dt(Object(n),!0).forEach(function(o){(0,L.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var gn=function(e){var t=e.children,n=(0,ce.Z)(e,Gt);return(0,c.jsx)(et.f,un(un({},n),{},{children:(0,c.jsx)(xt,{children:t})}))},Zt=s(74902),Ue=s(97582),Bt=s(23279),we=s.n(Bt);function tn(e){var t=(0,a.useRef)(e);return t.current=e,t}var Jt=tn,Cn=function(e){return e!==null&&typeof e=="object"},hn=function(e){return typeof e=="function"},jn=function(e){return typeof e=="string"},En=function(e){return typeof e=="boolean"},Tn=function(e){return typeof e=="number"},Mn=function(e){return typeof e=="undefined"},Sn=!1,W=Sn,ie=function(e){W&&(hn(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=Jt(e);(0,a.useEffect)(function(){return function(){t.current()}},[])},xe=ie;function D(e,t){var n;W&&(hn(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var o=Jt(e),r=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,i=(0,a.useMemo)(function(){return we()(function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return o.current.apply(o,(0,Ue.ev)([],(0,Ue.CR)(l),!1))},r,t)},[]);return xe(function(){i.cancel()}),{run:i,cancel:i.cancel,flush:i.flush}}var de=D,ye=function(e){return function(t,n){var o=(0,a.useRef)(!1);e(function(){return function(){o.current=!1}},[]),e(function(){if(!o.current)o.current=!0;else return t()},n)}},$e=null,Ee=ye(a.useEffect);function ke(e,t,n){var o=(0,Ue.CR)((0,a.useState)({}),2),r=o[0],i=o[1],l=de(function(){i({})},n).run;(0,a.useEffect)(function(){return l()},t),Ee(e,[r])}var gt=ke,_=s(1320),Ge=s(61688);const Ke=()=>{},Ye=Ke(),Ht=Object,le=e=>e===Ye,yt=e=>typeof e=="function",Ot=(e,t)=>In(In({},e),t),Kt=e=>yt(e.then),nn=new WeakMap;let an=0;const Pt=e=>{const t=typeof e,n=e&&e.constructor,o=n==Date;let r,i;if(Ht(e)===e&&!o&&n!=RegExp){if(r=nn.get(e),r)return r;if(r=++an+"~",nn.set(e,r),n==Array){for(r="@",i=0;i<e.length;i++)r+=Pt(e[i])+",";nn.set(e,r)}if(n==Ht){r="#";const l=Ht.keys(e).sort();for(;!le(i=l.pop());)le(e[i])||(r+=i+":"+Pt(e[i])+",");nn.set(e,r)}}else r=o?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return r},Wt=new WeakMap,w={},x={},m="undefined",I=typeof window!=m,O=typeof document!=m,q=()=>I&&typeof window.requestAnimationFrame!=m,ue=(e,t)=>{const n=Wt.get(e);return[()=>!le(t)&&e.get(t)||w,o=>{if(!le(t)){const r=e.get(t);t in x||(x[t]=r),n[5](t,Ot(r,o),r||w)}},n[6],()=>!le(t)&&t in x?x[t]:!le(t)&&e.get(t)||w]};let ne=!0;const oe=()=>ne,[Ne,De]=I&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[Ke,Ke],Fe=()=>{const e=O&&document.visibilityState;return le(e)||e!=="hidden"},ct=e=>(O&&document.addEventListener("visibilitychange",e),Ne("focus",e),()=>{O&&document.removeEventListener("visibilitychange",e),De("focus",e)}),Ve=e=>{const t=()=>{ne=!0,e()},n=()=>{ne=!1};return Ne("online",t),Ne("offline",n),()=>{De("online",t),De("offline",n)}},Te={isOnline:oe,isVisible:Fe},_e={initFocus:ct,initReconnect:Ve},tt=!a.useId,Pe=!I||"Deno"in window,Mt=e=>q()?window.requestAnimationFrame(e):setTimeout(e,1),lt=Pe?a.useEffect:a.useLayoutEffect,$t=typeof navigator!="undefined"&&navigator.connection,At=!Pe&&$t&&(["slow-2g","2g"].includes($t.effectiveType)||$t.saveData),Ct=e=>{if(yt(e))try{e=e()}catch(n){e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Pt(e):"",[e,t]};let zt=0;const It=()=>++zt,Qe=0,Lt=1,Ft=2;var kt={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:Qe,MUTATE_EVENT:Ft,RECONNECT_EVENT:Lt};function dt(...e){return Ln(this,null,function*(){const[t,n,o,r]=e,i=Ot({populateCache:!0,throwOnError:!0},typeof r=="boolean"?{revalidate:r}:r||{});let l=i.populateCache;const d=i.rollbackOnError;let u=i.optimisticData;const p=S=>typeof d=="function"?d(S):d!==!1,f=i.throwOnError;if(yt(n)){const S=n,v=[],y=t.keys();for(const b of y)!/^\$(inf|sub)\$/.test(b)&&S(t.get(b)._k)&&v.push(b);return Promise.all(v.map(g))}return g(n);function g(S){return Ln(this,null,function*(){const[v]=Ct(S);if(!v)return;const[y,b]=ue(t,v),[$,h,R,H]=Wt.get(t),k=()=>{const J=$[v];return(yt(i.revalidate)?i.revalidate(y().data,S):i.revalidate!==!1)&&(delete R[v],delete H[v],J&&J[0])?J[0](Ft).then(()=>y().data):y().data};if(e.length<3)return k();let M=o,E;const P=It();h[v]=[P,0];const T=!le(u),Z=y(),K=Z.data,X=Z._c,U=le(X)?K:X;if(T&&(u=yt(u)?u(U,K):u,b({data:u,_c:U})),yt(M))try{M=M(U)}catch(J){E=J}if(M&&Kt(M))if(M=yield M.catch(J=>{E=J}),P!==h[v][0]){if(E)throw E;return M}else E&&T&&p(E)&&(l=!0,b({data:U,_c:Ye}));if(l&&!E)if(yt(l)){const J=l(M,U);b({data:J,error:Ye,_c:Ye})}else b({data:M,error:Ye,_c:Ye});if(h[v][1]=It(),Promise.resolve(k()).then(()=>{b({_c:Ye})}),E){if(f)throw E;return}return M})}})}const qt=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},on=(e,t)=>{if(!Wt.has(e)){const n=Ot(_e,t),o={},r=dt.bind(Ye,e);let i=Ke;const l={},d=(f,g)=>{const S=l[f]||[];return l[f]=S,S.push(g),()=>S.splice(S.indexOf(g),1)},u=(f,g,S)=>{e.set(f,g);const v=l[f];if(v)for(const y of v)y(g,S)},p=()=>{if(!Wt.has(e)&&(Wt.set(e,[o,{},{},{},r,u,d]),!Pe)){const f=n.initFocus(setTimeout.bind(Ye,qt.bind(Ye,o,Qe))),g=n.initReconnect(setTimeout.bind(Ye,qt.bind(Ye,o,Lt)));i=()=>{f&&f(),g&&g(),Wt.delete(e)}}};return p(),[e,r,p,i]}return[e,Wt.get(e)[4]]},Yt=(e,t,n,o,r)=>{const i=n.errorRetryCount,l=r.retryCount,d=~~((Math.random()+.5)*(1<<(l<8?l:8)))*n.errorRetryInterval;!le(i)&&l>i||setTimeout(o,d,r)},ln=(e,t)=>Pt(e)==Pt(t),[_t,ht]=on(new Map),Xt=Ot({onLoadingSlow:Ke,onSuccess:Ke,onError:Ke,onErrorRetry:Yt,onDiscarded:Ke,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:At?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:At?5e3:3e3,compare:ln,isPaused:()=>!1,cache:_t,mutate:ht,fallback:{}},Te),jt=(e,t)=>{const n=Ot(e,t);if(t){const{use:o,fallback:r}=e,{use:i,fallback:l}=t;o&&i&&(n.use=o.concat(i)),r&&l&&(n.fallback=Ot(r,l))}return n},sn=(0,a.createContext)({}),vn=e=>{const{value:t}=e,n=(0,a.useContext)(sn),o=yt(t),r=(0,a.useMemo)(()=>o?t(n):t,[o,n,t]),i=(0,a.useMemo)(()=>o?r:jt(n,r),[o,n,r]),l=r&&r.provider,d=(0,a.useRef)(Ye);l&&!d.current&&(d.current=on(l(i.cache||_t),r));const u=d.current;return u&&(i.cache=u[0],i.mutate=u[1]),lt(()=>{if(u)return u[2]&&u[2](),u[3]},[]),(0,a.createElement)(sn.Provider,Ot(e,{value:i}))},no="$inf$",Zn=I&&window.__SWR_DEVTOOLS_USE__,Ea=Zn?window.__SWR_DEVTOOLS_USE__:[],Ta=()=>{Zn&&(window.__SWR_DEVTOOLS_REACT__=a)},oo=e=>yt(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],Ma=()=>Ot(Xt,(0,a.useContext)(sn)),Ld=(e,t)=>{const[n,o]=Ct(e),[,,,r]=Wt.get(_t);if(r[n])return r[n];const i=t(o);return r[n]=i,i},ka=e=>(t,n,o)=>e(t,n&&((...i)=>{const[l]=Ct(t),[,,,d]=Wt.get(_t);if(l.startsWith(no))return n(...i);const u=d[l];return le(u)?n(...i):(delete d[l],u)}),o),Na=Ea.concat(ka),Da=e=>function(...n){const o=Ma(),[r,i,l]=oo(n),d=jt(o,l);let u=e;const{use:p}=d,f=(p||[]).concat(Na);for(let g=f.length;g--;)u=f[g](u);return u(r,i||d.fetcher||null,d)},Pa=(e,t,n)=>{const o=t[e]||(t[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r>=0&&(o[r]=o[o.length-1],o.pop())}},Zd=(e,t)=>(...n)=>{const[o,r,i]=oo(n),l=(i.use||[]).concat(t);return e(o,r,ja(In({},i),{use:l}))};Ta();const Wd=e=>serialize(e)[0],ro=a.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)}),Wn={dedupe:!0},Ra=(e,t,n)=>{const{cache:o,compare:r,suspense:i,fallbackData:l,revalidateOnMount:d,revalidateIfStale:u,refreshInterval:p,refreshWhenHidden:f,refreshWhenOffline:g,keepPreviousData:S}=n,[v,y,b,$]=Wt.get(o),[h,R]=Ct(e),H=(0,a.useRef)(!1),k=(0,a.useRef)(!1),M=(0,a.useRef)(h),E=(0,a.useRef)(t),P=(0,a.useRef)(n),T=()=>P.current,Z=()=>T().isVisible()&&T().isOnline(),[K,X,U,J]=ue(o,h),ee=(0,a.useRef)({}).current,te=le(l)?n.fallback[h]:l,Oe=(Ce,ge)=>{for(const ot in ee){const Le=ot;if(Le==="data"){if(!r(Ce[Le],ge[Le])&&(!le(Ce[Le])||!r(be,ge[Le])))return!1}else if(ge[Le]!==Ce[Le])return!1}return!0},Q=(0,a.useMemo)(()=>{const Ce=!h||!t?!1:le(d)?T().isPaused()||i?!1:le(u)?!0:u:d,ge=Be=>{const rt=Ot(Be);return delete rt._k,Ce?In({isValidating:!0,isLoading:!0},rt):rt},ot=K(),Le=J(),Nt=ge(ot),se=ot===Le?Nt:ge(Le);let fe=Nt;return[()=>{const Be=ge(K());return Oe(Be,fe)?(fe.data=Be.data,fe.isLoading=Be.isLoading,fe.isValidating=Be.isValidating,fe.error=Be.error,fe):(fe=Be,Be)},()=>se]},[o,h]),he=(0,Ge.useSyncExternalStore)((0,a.useCallback)(Ce=>U(h,(ge,ot)=>{Oe(ot,ge)||Ce()}),[o,h]),Q[0],Q[1]),nt=!H.current,Me=v[h]&&v[h].length>0,pe=he.data,ze=le(pe)?te:pe,Je=he.error,vt=(0,a.useRef)(ze),be=S?le(pe)?vt.current:pe:ze,ve=Me&&!le(Je)?!1:nt&&!le(d)?d:T().isPaused()?!1:i?le(ze)?!1:u:le(ze)||u,me=!!(h&&t&&nt&&ve),St=le(he.isValidating)?me:he.isValidating,st=le(he.isLoading)?me:he.isLoading,qe=(0,a.useCallback)(Ce=>Ln(this,null,function*(){const ge=E.current;if(!h||!ge||k.current||T().isPaused())return!1;let ot,Le,Nt=!0;const se=Ce||{},fe=!b[h]||!se.dedupe,Be=()=>tt?!k.current&&h===M.current&&H.current:h===M.current,rt={isValidating:!1,isLoading:!1},Ze=()=>{X(rt)},at=()=>{const it=b[h];it&&it[1]===Le&&delete b[h]},Tt={isValidating:!0};le(K().data)&&(Tt.isLoading=!0);try{if(fe&&(X(Tt),n.loadingTimeout&&le(K().data)&&setTimeout(()=>{Nt&&Be()&&T().onLoadingSlow(h,n)},n.loadingTimeout),b[h]=[ge(R),It()]),[ot,Le]=b[h],ot=yield ot,fe&&setTimeout(at,n.dedupingInterval),!b[h]||b[h][1]!==Le)return fe&&Be()&&T().onDiscarded(h),!1;rt.error=Ye;const it=y[h];if(!le(it)&&(Le<=it[0]||Le<=it[1]||it[1]===0))return Ze(),fe&&Be()&&T().onDiscarded(h),!1;const wt=K().data;rt.data=r(wt,ot)?wt:ot,fe&&Be()&&T().onSuccess(ot,h,n)}catch(it){at();const wt=T(),{shouldRetryOnError:pn}=wt;wt.isPaused()||(rt.error=it,fe&&Be()&&(wt.onError(it,h,wt),(pn===!0||yt(pn)&&pn(it))&&(!T().revalidateOnFocus||!T().revalidateOnReconnect||Z())&&wt.onErrorRetry(it,h,wt,Pd=>{const to=v[h];to&&to[0]&&to[0](kt.ERROR_REVALIDATE_EVENT,Pd)},{retryCount:(se.retryCount||0)+1,dedupe:!0})))}return Nt=!1,Ze(),!0}),[h,o]),Re=(0,a.useCallback)((...Ce)=>dt(o,M.current,...Ce),[]);if(lt(()=>{E.current=t,P.current=n,le(pe)||(vt.current=pe)}),lt(()=>{if(!h)return;const Ce=qe.bind(Ye,Wn);let ge=0;const Le=Pa(h,v,(Nt,se={})=>{if(Nt==kt.FOCUS_EVENT){const fe=Date.now();T().revalidateOnFocus&&fe>ge&&Z()&&(ge=fe+T().focusThrottleInterval,Ce())}else if(Nt==kt.RECONNECT_EVENT)T().revalidateOnReconnect&&Z()&&Ce();else{if(Nt==kt.MUTATE_EVENT)return qe();if(Nt==kt.ERROR_REVALIDATE_EVENT)return qe(se)}});return k.current=!1,M.current=h,H.current=!0,X({_k:R}),ve&&(le(ze)||Pe?Ce():Mt(Ce)),()=>{k.current=!0,Le()}},[h]),lt(()=>{let Ce;function ge(){const Le=yt(p)?p(K().data):p;Le&&Ce!==-1&&(Ce=setTimeout(ot,Le))}function ot(){!K().error&&(f||T().isVisible())&&(g||T().isOnline())?qe(Wn).then(ge):ge()}return ge(),()=>{Ce&&(clearTimeout(Ce),Ce=-1)}},[p,f,g,h]),(0,a.useDebugValue)(be),i&&le(ze)&&h){if(!tt&&Pe)throw new Error("Fallback data is required when using suspense in SSR.");E.current=t,P.current=n,k.current=!1;const Ce=$[h];if(!le(Ce)){const ge=Re(Ce);ro(ge)}if(le(Je)){const ge=qe(Wn);le(be)||(ge.status="fulfilled",ge.value=!0),ro(ge)}else throw Je}return{mutate:Re,get data(){return ee.data=!0,be},get error(){return ee.error=!0,Je},get isValidating(){return ee.isValidating=!0,St},get isLoading(){return ee.isLoading=!0,st}}},Fd=Ht.defineProperty(vn,"defaultValue",{value:Xt}),Ba=Da(Ra);var ao={frontmatter:{},toc:[],texts:[]},Ha=function(){var t=(0,_.AC)(),n=(0,j.MZ)(),o=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ao;return n.meta&&Object.keys(n.meta).forEach(function(l){var d,u;(u=(d=i)[l])!==null&&u!==void 0||(d[l]=n.meta[l])}),i};Ba(n.id,j.lZ,{fallback:ao,onSuccess:function(i){t.setState({routeMeta:o(i)})}})},Aa=["setLoading"],za=["setLoading"],La=typeof window!="undefined",io={},Za=function(t,n){(0,a.useEffect)(function(){a.startTransition(function(){t()})},n)},Wa=function(t,n){gt(function(){t()},n,{wait:32,maxWait:96})},Fa=typeof a.startTransition=="function"?Za:Wa,bn=function(t,n,o){var r=(0,_.AC)(),i=o||function(l,d){return r.setState((0,L.Z)({},l,d))};!La&&!io[t]&&(i(t,n),io[t]=!0),Fa(function(){i(t,n)},[n])},Va={"zh-CN":"\u9996\u9875","en-US":"Home"},Xa=function(t){return{title:Va[t],link:"/",activePath:"/"}},Ua=(0,a.memo)(function(){var e=(0,j.WF)(),t=(0,j.tx)(),n=(0,j.zh)(),o=(0,j.OK)(),r=(0,j.TH)(),i=(0,j.bU)(),l=(0,_.AC)();return Ha(),bn("siteData",e,function(){var d=e.setLoading,u=(0,ce.Z)(e,Aa),p=l.getState(),f=p.siteData,g=f.setLoading,S=(0,ce.Z)(f,za);A()(u,S)||l.setState({siteData:e})}),bn("sidebar",t),bn("location",r),bn("tabMeta",n),bn("locale",i),bn("navData",o,function(){var d=e.themeConfig.hideHomeNav?o:[Xa(i.id)].concat((0,Zt.Z)(o));l.setState({navData:d})}),null}),xn=s(58401),ut=s(17542),Ga=s(50238),Ka=s(48954),Ya=["children","className","prefixCls"];function lo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function so(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lo(Object(n),!0).forEach(function(o){(0,L.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lo(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var _a=(0,a.forwardRef)(function(e,t){var n=e.children,o=e.className,r=e.prefixCls,i=(0,ce.Z)(e,Ya);return(0,c.jsx)(Ga.Z,so(so({ref:t,internalClassName:"".concat((0,Ka.Gn)(r),"-center"),className:o},i),{},{align:"center",justify:"center",children:n}))}),cn=_a,co=s(48054),wn=s(93538),mt=s(87462),Qa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ja=Qa,Ut=s(42135),qa=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Ja}))},ei=a.forwardRef(qa),ti=ei,ni={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},oi=ni,ri=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:oi}))},ai=a.forwardRef(ri),uo=ai,V=s(30168),Et=s(44242),fo,mo,po,go,ii=(0,Et.kc)(function(e){var t=e.token,n=e.css;return{container:n(fo||(fo=(0,V.Z)([`
    background: `,`;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,`;
    }
  `])),t.colorBgContainer,t.colorFillTertiary),nav:n(mo||(mo=(0,V.Z)([`
    color: `,`;
    font-size: 12px;
  `])),t.colorTextTertiary),title:n(po||(po=(0,V.Z)([`
    font-size: 16px;
  `]))),alignmentEnd:n(go||(go=(0,V.Z)([`
    justify-content: flex-end;
  `])))}}),li=function(t){var n=t.title,o=t.link,r=t.type,i=ii(),l=i.styles,d=i.cx,u=(0,j.YB)(),p=(0,a.useMemo)(function(){switch(r){case"prev":return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ti,{})," ",u.formatMessage({id:"content.footer.actions.previous"})]});case"next":return(0,c.jsxs)(c.Fragment,{children:[u.formatMessage({id:"content.footer.actions.next"})," ",(0,c.jsx)(uo,{})]})}},[r]);return(0,c.jsx)(j.rU,{to:o,children:(0,c.jsxs)(ut.D,{className:l.container,gap:8,children:[(0,c.jsx)(ut.D,{horizontal:!0,gap:4,className:d(l.nav,r==="next"&&l.alignmentEnd),children:p}),(0,c.jsx)(ut.D,{horizontal:!0,className:d(l.title,r==="next"&&l.alignmentEnd),children:n})]})})},ho=(0,a.memo)(li);function vo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function bo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vo(Object(n),!0).forEach(function(o){(0,L.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vo(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var si=function(){var t=(0,_.HX)(wn.e9,A()),n=t.prev,o=t.next,r=(0,xn.F)(),i=r.mobile;return(0,c.jsxs)(ut.D,{horizontal:!i,gap:i?12:0,distribution:"space-between",style:{margin:i?12:0},children:[n?(0,c.jsx)(ho,bo({type:"prev"},n)):(0,c.jsx)("div",{}),o?(0,c.jsx)(ho,bo({type:"next"},o)):(0,c.jsx)("div",{})]})},ci=(0,a.memo)(si),xo,di=(0,Et.kc)(function(e){var t=e.token,n=e.responsive,o=e.isDarkMode,r=e.css;return{content:r(xo||(xo=(0,V.Z)([`
    min-height: 400px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;

    padding: 24px 48px;
    border-radius: 10px;
    background-color: `,`;
    box-shadow: `,`;

    &:has([data-page-tabs='true']) {
      padding-top: 8px;
    }

    `,` {
      padding: 8px 16px;
      border-radius: 0;
    }

    .markdown {
      color: `,`;

      h1,
      h2,
      h3 {
        color: `,`;
      }
      p {
        line-height: 1.8;
      }

      // hyperlink
      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;

        opacity: `,`;
      }

      > [data-code-type='highlighter'] {
        pre {
          margin: 8px 0 !important;
        }
      }
      // inline code
      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        //FIXME: \u7B49\u4E0B\u4E00\u7248 token \u4F18\u5316\u5347\u7EA7
        color: `,`;
        background: `,`;
        border-radius: 4px;
      }

      // pre tag
      pre {
        font-size: 14px;
        padding-left: 24px;
        padding-right: 24px;
      }

      // table
      table {
        width: 100%;
        border-spacing: 1px;
      }

      th {
        background: `,`;
      }

      tr {
      }
      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
        border-bottom: 1px solid `,`;
      }

      // blockquote
      blockquote {
        font-style: italic;

        margin: 16px 0;
        padding: 0 12px;
        color: `,`;
        border-left: 3px solid `,`;
      }

      // list
      ul li {
        line-height: 1.8;
      }

      // anchor of headings
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          margin-inline-start: -24px;
          color: `,`;
          // hide phantom blank node
          font-size: 0;
          text-align: right;
          line-height: inherit;

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            content: '#';
            color: `,`;
            font-size: 20px;
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    }
  `])),t.colorBgContainer,t.boxShadowTertiary,n.mobile,o?t.colorTextSecondary:t.colorText,t.colorText,t.colorLink,t.colorLinkHover,t.colorLinkActive,o?.8:1,o?t["cyan-7"]:t.colorPrimaryText,o?t["cyan-1"]:t.colorPrimaryBg,t.colorFillTertiary,t.colorBorderSecondary,t.colorTextDescription,t.colorBorder,t.colorText,t.colorTextTertiary)}}),ui=function(t){var n=t.children,o=(0,_.HX)(function(p){return p.siteData.loading}),r=di(),i=r.styles,l=r.cx,d=(0,xn.F)(),u=d.mobile;return(0,c.jsxs)(ut.D,{width:"100%",gap:u?0:24,children:[(0,c.jsxs)("div",{className:l("dumi-antd-style-content",i.content),children:[(0,c.jsx)(co.Z,{active:!0,paragraph:!0,loading:o}),(0,c.jsx)("div",{style:{display:o?"none":void 0},children:n})]}),(0,c.jsx)(ci,{})]})},fi=(0,a.memo)(ui),Xe=s(25446),fn=s(14747),On=s(83262);const mi=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:o,lineWidth:r,textPaddingInline:i,orientationMargin:l,verticalMarginInline:d}=e;return{[t]:Object.assign(Object.assign({},(0,fn.Wf)(e)),{borderBlockStart:`${(0,Xe.bf)(r)} solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,Xe.bf)(r)} solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,Xe.bf)(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,Xe.bf)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,Xe.bf)(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:i},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${(0,Xe.bf)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:o,borderStyle:"dotted",borderWidth:`${(0,Xe.bf)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},pi=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS});var gi=(0,re.I$)("Divider",e=>{const t=(0,On.IX)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[mi(t)]},pi,{unitless:{orientationMargin:!0}}),hi=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},vi=e=>{const{getPrefixCls:t,direction:n,divider:o}=a.useContext(Y.E_),{prefixCls:r,type:i="horizontal",orientation:l="center",orientationMargin:d,className:u,rootClassName:p,children:f,dashed:g,variant:S="solid",plain:v,style:y}=e,b=hi(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),$=t("divider",r),[h,R,H]=gi($),k=!!f,M=l==="left"&&d!=null,E=l==="right"&&d!=null,P=N()($,o==null?void 0:o.className,R,H,`${$}-${i}`,{[`${$}-with-text`]:k,[`${$}-with-text-${l}`]:k,[`${$}-dashed`]:!!g,[`${$}-${S}`]:S!=="solid",[`${$}-plain`]:!!v,[`${$}-rtl`]:n==="rtl",[`${$}-no-default-orientation-margin-left`]:M,[`${$}-no-default-orientation-margin-right`]:E},u,p),T=a.useMemo(()=>typeof d=="number"?d:/^\d+$/.test(d)?Number(d):d,[d]),Z=Object.assign(Object.assign({},M&&{marginLeft:T}),E&&{marginRight:T});return h(a.createElement("div",Object.assign({className:P,style:Object.assign(Object.assign({},o==null?void 0:o.style),y)},b,{role:"separator"}),f&&i!=="vertical"&&a.createElement("span",{className:`${$}-inner-text`,style:Z},f)))},Rt=s(1413),bi=function(t){var n=t.prefixCls,o=t.icon,r=t.title,i=t.items,l=i===void 0?[]:i,d=t.style,u=t.className;return a.createElement("div",{className:N()("".concat(n,"-column"),u),style:d},(r||o)&&a.createElement("h2",null,o&&a.createElement("span",{className:"".concat(n,"-column-icon")},o),r),l.map(function(p,f){var g=p.LinkComponent||"a";return a.createElement("div",{className:N()("".concat(n,"-item"),p.className),style:p.style,key:f},a.createElement(g,{href:p.url,to:typeof g!="string"?p.url:void 0,target:p.openExternal?"_blank":void 0,rel:p.openExternal?"noopener noreferrer":void 0},p.icon&&a.createElement("span",{className:"".concat(n,"-item-icon")},p.icon),p.title),p.description&&a.createElement(a.Fragment,null,a.createElement("span",{className:"".concat(n,"-item-separator")},"-"),a.createElement("span",{className:"".concat(n,"-item-description")},p.description)))}))},xi=bi,yi=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],Ci=function(t){var n=t.prefixCls,o=n===void 0?"rc-footer":n,r=t.className,i=t.style,l=t.bottom,d=t.columns,u=t.maxColumnsPerRow,p=t.backgroundColor,f=t.columnLayout,g=t.theme,S=g===void 0?"dark":g,v=(0,ce.Z)(t,yi),y=N()("".concat(o),r,(0,L.Z)({},"".concat(o,"-").concat(S),!!S)),b=typeof u=="number"&&u>0;return a.createElement("footer",(0,Rt.Z)((0,Rt.Z)({},v),{},{className:y,style:(0,Rt.Z)((0,Rt.Z)({},i),{},{backgroundColor:p})}),a.createElement("section",{className:"".concat(o,"-container")},d&&d.length>0&&a.createElement("section",{className:"".concat(o,"-columns"),style:{justifyContent:f,flexWrap:b?"wrap":void 0}},d.map(function($,h){var R=$.title,H=$.icon,k=$.style,M=$.className,E=$.items,P=E===void 0?[]:E,T=(0,Rt.Z)({},k);return b&&(T.flex="0 0 ".concat(100/(u+1)+.1,"%")),a.createElement(xi,{key:h,prefixCls:o,title:R,icon:H,items:P,style:T,className:M})}))),l&&a.createElement("section",{className:"".concat(o,"-bottom")},a.createElement("div",{className:"".concat(o,"-bottom-container")},l)))},Si=Ci,yo,Co,wi=(0,Et.kc)(function(e,t){var n=e.css,o=e.responsive,r=e.token,i="rc-footer";return{container:n(yo||(yo=(0,V.Z)([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),r.colorSplit,r.colorTextDescription,o.mobile),footer:n(Co||(Co=(0,V.Z)([`
      color: `,`;
      font-size: 14px;
      line-height: 1.5;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: `,`;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          h2 {
            position: relative;
            margin: 0 auto;
            color: `,`;
            font-weight: 500;
            font-size: 16px;
          }

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 22px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.5em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 16px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.4em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 0.85);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 0.85);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),r.colorTextSecondary,r.colorBgLayout,i,r.colorTextTertiary,r.colorLinkHover,i,r.contentMaxWidth,t?"0":"60px 0 20px",r.colorText,t?"transparent":r.colorBorderSecondary,o.mobile,i)}}),Oi=function(t){var n=t.columns,o=t.bottom,r=t.theme,i=!n||(n==null?void 0:n.length)===0,l=wi(i),d=l.styles;return(0,c.jsx)("div",{className:d.container,children:(0,c.jsx)(Si,{theme:r,className:d.footer,columns:n,bottom:o})})},$i=Oi,So=function(t){return t.siteData.themeConfig.name},Fn=function(t){var n,o;return((n=t.siteData.themeConfig)===null||n===void 0||(n=n.socialLinks)===null||n===void 0?void 0:n.github)||((o=t.siteData.themeConfig)===null||o===void 0?void 0:o.github)},Ii=function(t){var n=t.siteData.themeConfig.logo;return n?(n.startsWith("http"),n):n||""},ji={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 01-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 016.8-17.2z"}}]},name:"medium",theme:"outlined"},Ei=ji,Ti=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Ei}))},Mi=a.forwardRef(Ti),ki=Mi,Ni={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"},Di=Ni,Pi=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Di}))},Ri=a.forwardRef(Pi),Bi=Ri,Hi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}}]},name:"zhihu",theme:"outlined"},Ai=Hi,zi=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Ai}))},Li=a.forwardRef(zi),wo=Li,Zi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},Wi=Zi,Fi=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Wi}))},Vi=a.forwardRef(Fi),Xi=Vi,Ui={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"}}]},name:"history",theme:"outlined"},Gi=Ui,Ki=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Gi}))},Yi=a.forwardRef(Ki),_i=Yi,Qi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 00-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0026 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 01-49.8 62.2A355.92 355.92 0 01651.1 840a355 355 0 01-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 01-113.3-76.3A353.06 353.06 0 01184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 01138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 00892 694z"}}]},name:"issues-close",theme:"outlined"},Ji=Qi,qi=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Ji}))},el=a.forwardRef(qi),tl=el,nl=function(t){var n=t.github,o={title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Umi",description:"React \u5E94\u7528\u5F00\u53D1\u6846\u67B6",url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:"\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177",url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:"\u5FAE\u524D\u7AEF\u6846\u67B6",url:"https://qiankun.umijs.org",openExternal:!0}]},r={title:"\u793E\u533A",items:[{icon:(0,c.jsx)(ki,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,c.jsx)(Bi,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"Ant Design \u8BED\u96C0\u4E13\u680F",url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,c.jsx)(wo,{style:{color:"#056de8"}}),title:"Ant Design \u77E5\u4E4E\u4E13\u680F",url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,c.jsx)(wo,{style:{color:"#056de8"}}),title:"\u4F53\u9A8C\u79D1\u6280\u4E13\u680F",url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:"SEE Conf-\u8682\u8681\u4F53\u9A8C\u79D1\u6280\u5927\u4F1A",url:"https://seeconf.antfin.com/",openExternal:!0}]},i={icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"\u66F4\u591A\u4EA7\u54C1",items:[{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"\u8BED\u96C0",url:"https://yuque.com",description:"\u77E5\u8BC6\u521B\u4F5C\u4E0E\u5206\u4EAB\u5DE5\u5177",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:"\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:"\u4F01\u4E1A\u7EA7 Node.js \u6846\u67B6",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:"Sketch \u5DE5\u5177\u96C6",url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:"\u8682\u8681\u4F53\u9A8C\u79D1\u6280",url:"https://xtech.antfin.com/",openExternal:!0}]},l={title:"\u5E2E\u52A9",items:[n?{icon:(0,c.jsx)(Xi,{}),title:"GitHub",url:n,openExternal:!0}:void 0,{icon:(0,c.jsx)(_i,{}),title:"\u66F4\u65B0\u65E5\u5FD7",url:"/changelog",LinkComponent:j.rU},n?{icon:(0,c.jsx)(tl,{}),title:"\u8BA8\u8BBA",url:"".concat(n,"/issues"),openExternal:!0}:void 0].filter(Boolean)};return[o,r,l,i]},Oo,$o,ol=(0,Et.kc)(function(e){var t=e.css,n=e.responsive,o=e.token,r="rc-footer";return{container:t(Oo||(Oo=(0,V.Z)([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),o.colorSplit,o.colorTextDescription,n.mobile),footer:t($o||($o=(0,V.Z)([`
      color: `,`;
      font-size: 14px;
      line-height: 1.5;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: 60px 0 20px;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          //margin-bottom: 60px;

          h2 {
            position: relative;
            margin: 0 auto;
            color: `,`;
            font-weight: 500;
            font-size: 16px;
          }

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 22px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.5em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 16px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.4em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 0.85);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 0.85);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),o.colorTextSecondary,o.colorBgLayout,r,o.colorTextTertiary,o.colorLinkHover,r,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,n.mobile,r)}}),rl=function(){var t=(0,_.HX)(function(y){return y.siteData}),n=t.themeConfig,o=t.pkg,r=(0,_.HX)(Fn),i=ol(),l=i.styles,d=i.theme,u=(0,xn.F)(),p=u.mobile;if(!n.footer)return null;var f=n.footerConfig,g=f!=null&&f.columns?f.columns:nl({github:r||o.homepage}),S=(f==null?void 0:f.bottom)||n.footer,v=(f==null?void 0:f.copyright)||"Copyright \xA9 2022-".concat(new Date().getFullYear());return(0,c.jsx)($i,{theme:(f==null?void 0:f.theme)||d.appearance,columns:g,bottom:p?(0,c.jsxs)(cn,{className:l.container,children:[v,(0,c.jsx)(ut.D,{align:"center",horizontal:!0,dangerouslySetInnerHTML:{__html:S}})]}):(0,c.jsxs)(cn,{horizontal:!0,children:[v,(0,c.jsx)(vi,{type:"vertical"}),(0,c.jsx)("span",{dangerouslySetInnerHTML:{__html:S}})]})})},Io=rl,Qt=s(97685),kn=s(29487),al=s(27286);function Nn(e){var t=e.pathname,n=e.current,o=e.target,r="base"in n?t.replace(n.base.replace(/\/$/,""),"")||"/":t.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(r).replace(/([^/])\/$/,"$1"):"".concat(r).concat(o.suffix)}var il={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","de-DE":"\u{1F1E9}\u{1F1EA}","pt-BR":"\u{1F1E7}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}"},jo={"zh-CN":"\u4E2D","en-US":"EN"},ll=function(t){var n=t.locale,o=t.current,r=(0,j.TH)(),i=r.pathname,l=(0,a.useState)(function(){return Nn({pathname:i,current:o,target:n})}),d=(0,Qt.Z)(l,2),u=d[0],p=d[1];return(0,a.useEffect)(function(){p(Nn({pathname:i,current:o,target:n}))},[i,o.id,n.id]),(0,c.jsx)(j.rU,{to:u,children:(0,c.jsx)(kn.ZP,{style:{minWidth:34,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:jo[n.id]})})},sl=function(){var t=(0,_.HX)(function(o){return o.siteData.locales}),n=(0,_.HX)(function(o){return o.locale});return t.length<=1?null:t.length>2?(0,c.jsx)(al.Z,{value:t.findIndex(function(o){return o.id===n.id}),onChange:function(r){console.log(Nn({pathname:location.pathname,current:n,target:t[r]})),j.m8.push(Nn({pathname:location.pathname,current:n,target:t[r]}))},options:t.map(function(o){return{value:o.id,label:jo[o.id]}}),renderItem:function(r,i){return"".concat(il[t[i].id]," ").concat(t[i].name)},style:{height:32,minWidth:32,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}):(0,c.jsx)(ll,{locale:t.find(function(o){var r=o.id;return r!==n.id}),current:n})},cl=(0,a.memo)(sl),Eo=s(76248),mn=s(96486),dl=function(t){var n,o=t.routeMeta.frontmatter;if(t.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var r=["/api","/components"].concat((0,Zt.Z)(((n=t.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return r.some(function(i){return t.location.pathname.startsWith(i)})};function ul(e,t){var n={camel:function(){return(0,mn.camelCase)(e)},pascal:function(){return(0,mn.upperFirst)((0,mn.camelCase)(e))},kebab:function(){return(0,mn.kebabCase)(e)},snake:function(){return(0,mn.snakeCase)(e)},default:function(){return e}};return(n[t]||n.default)()}var fl=function(t){var n,o,r,i,l,d,u,p,f=Fn(t),g=((n=t.routeMeta)===null||n===void 0?void 0:n.frontmatter)||{},S=(o=t.locale)===null||o===void 0?void 0:o.id,v=function(U){if(f)return U.replace("{github}",f).replace("{atomId}",g.atomId||"").replace(/\{atomId\.([^}]+)}/g,function(J,ee){return ul(g.atomId||"",ee)}).replace("{title}",g.title).replace("{locale}",S)},y=function(U){return U===!1?!1:typeof U=="string"},b=((r=t.siteData)===null||r===void 0||(r=r.themeConfig)===null||r===void 0?void 0:r.apiHeader)||{},$=b.pkg,h=$===void 0?(i=t.siteData)===null||i===void 0||(i=i.pkg)===null||i===void 0?void 0:i.name:$,R=b.sourceUrl,H=b.docUrl,k=((l=g.apiHeader)===null||l===void 0?void 0:l.pkg)||h,M=g.atomId||g.title,E=((d=g.apiHeader)===null||d===void 0?void 0:d.defaultImport)||!1,P=((u=g.apiHeader)===null||u===void 0?void 0:u.sourceUrl)||R,T=y(P)?v(P):void 0,Z=((p=g.apiHeader)===null||p===void 0?void 0:p.docUrl)||H,K=y(Z)?v(Z):void 0;return{title:g.title,description:g.description,pkg:k,defaultImport:E,componentName:M,sourceUrl:T,docUrl:K}},To=function(t){var n=t.routeMeta.frontmatter;return(0,mn.merge)({},n.token,t.siteData.themeConfig.siteToken)},ml={apiHeader:fl,flattenSidebar:wn.gt,token:To,logo:Ii},Mo,pl=(0,Et.kc)(function(e){var t=e.css,n=e.responsive,o=e.token;return t(Mo||(Mo=(0,V.Z)([`
    display: inline-flex;
    align-items: center;
    font-family: AliPuHui, `,`;
    color: `,`;
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    gap: 10px;

    `,` {
      font-size: 18px;
    }
  `])),o.fontFamily,o.colorText,n.mobile)}),gl=function(){var t=(0,_.HX)(function(f){return f.siteData.themeConfig},A()),n=(0,_.HX)(function(f){return f.locale},A()),o=(0,_.HX)(ml.logo,Eo.X),r=pl(),i=r.styles,l=r.cx,d=t.name,u=t.hideNameOnHeader,p=u===void 0?!1:u;return t&&(0,c.jsxs)(j.rU,{className:l(i),to:"base"in n?n.base:"/",children:[!!o&&(0,c.jsx)("img",{src:o,alt:t.name,height:32}),!p&&d]})},ko=(0,a.memo)(gl),hl=s(43378),vl={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},bl=vl,xl=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:bl}))},yl=a.forwardRef(xl),No=yl,Cl=Object.defineProperty,Do=Object.getOwnPropertySymbols,Sl=Object.prototype.hasOwnProperty,wl=Object.prototype.propertyIsEnumerable,Po=(e,t,n)=>t in e?Cl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ol=(e,t)=>{for(var n in t||(t={}))Sl.call(t,n)&&Po(e,n,t[n]);if(Do)for(var n of Do(t))wl.call(t,n)&&Po(e,n,t[n]);return e};const Ro=e=>a.createElement("svg",Ol({viewBox:"0 0 1024 1024"},e),a.createElement("path",{d:"m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}));var Xd="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=",$l=function(e,t,n,o){function r(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function d(f){try{p(o.next(f))}catch(g){l(g)}}function u(f){try{p(o.throw(f))}catch(g){l(g)}}function p(f){f.done?i(f.value):r(f.value).then(d,u)}p((o=o.apply(e,t||[])).next())})};function Dn(e){let t=0,n=0,o=e;do t+=o.offsetTop||0,n+=o.offsetLeft||0,o=o.offsetParent;while(o);return{top:t,left:n}}class Il{constructor(t){this.element=t}getHorizontalScroll(){return this.element.scrollLeft}getVerticalScroll(){return this.element.scrollTop}getMaxHorizontalScroll(){return this.element.scrollWidth-this.element.clientWidth}getMaxVerticalScroll(){return this.element.scrollHeight-this.element.clientHeight}getHorizontalElementScrollOffset(t,n){return Dn(t).left-Dn(n).left}getVerticalElementScrollOffset(t,n){return Dn(t).top-Dn(n).top}scrollTo(t,n){this.element.scrollLeft=t,this.element.scrollTop=n}}class jl{constructor(){this.element=window}getHorizontalScroll(){return window.scrollX||document.documentElement.scrollLeft}getVerticalScroll(){return window.scrollY||document.documentElement.scrollTop}getMaxHorizontalScroll(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth}getMaxVerticalScroll(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight}getHorizontalElementScrollOffset(t){return(window.scrollX||document.documentElement.scrollLeft)+t.getBoundingClientRect().left}getVerticalElementScrollOffset(t){return(window.scrollY||document.documentElement.scrollTop)+t.getBoundingClientRect().top}scrollTo(t,n){window.scrollTo(t,n)}}const rn={elements:[],cancelMethods:[],add:(e,t)=>{rn.elements.push(e),rn.cancelMethods.push(t)},remove:(e,t)=>{const n=rn.elements.indexOf(e);n>-1&&(t&&rn.cancelMethods[n](),rn.elements.splice(n,1),rn.cancelMethods.splice(n,1))}},Bo=typeof window!="undefined",El={cancelOnUserAction:!0,easing:e=>--e*e*e+1,elementToScroll:Bo?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function Tl(e,t={}){return $l(this,void 0,void 0,function*(){if(Bo){if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."}else return new Promise(k=>{k(!1)});let n,o,r,i=Object.assign(Object.assign({},El),t);const l=i.elementToScroll===window,d=!!i.elementToScroll.nodeName;if(!l&&!d)throw"Element to scroll needs to be either window or DOM element.";const u=l?document.documentElement:i.elementToScroll;getComputedStyle(u).getPropertyValue("scroll-behavior")==="smooth"&&console.warn(`${u.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);const f=l?new jl:new Il(i.elementToScroll);if(e instanceof Element){if(r=e,d&&(!i.elementToScroll.contains(r)||i.elementToScroll.isSameNode(r)))throw"options.elementToScroll has to be a parent of scrollToElement";n=f.getHorizontalElementScrollOffset(r,i.elementToScroll),o=f.getVerticalElementScrollOffset(r,i.elementToScroll)}else if(typeof e=="number")n=f.getHorizontalScroll(),o=e;else if(Array.isArray(e)&&e.length===2)n=e[0]===null?f.getHorizontalScroll():e[0],o=e[1]===null?f.getVerticalScroll():e[1];else throw`Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;n+=i.horizontalOffset,o+=i.verticalOffset;const g=f.getMaxHorizontalScroll(),S=f.getHorizontalScroll();n>g&&(n=g);const v=n-S,y=f.getMaxVerticalScroll(),b=f.getVerticalScroll();o>y&&(o=y);const $=o-b,h=Math.abs(Math.round(v/1e3*i.speed)),R=Math.abs(Math.round($/1e3*i.speed));let H=h>R?h:R;return H<i.minDuration?H=i.minDuration:H>i.maxDuration&&(H=i.maxDuration),new Promise((k,M)=>{v===0&&$===0&&k(!0),rn.remove(f.element,!0);let E;const P=()=>{U(),cancelAnimationFrame(E),k(!1)};rn.add(f.element,P);const T=te=>te.preventDefault(),Z=i.cancelOnUserAction?P:T,K=i.cancelOnUserAction?{passive:!0}:{passive:!1},X=["wheel","touchstart","keydown","mousedown"],U=()=>{X.forEach(te=>{f.element.removeEventListener(te,Z,K)})};X.forEach(te=>{f.element.addEventListener(te,Z,K)});const J=Date.now(),ee=()=>{var te=Date.now()-J,Oe=te/H;const Q=Math.round(S+v*i.easing(Oe)),he=Math.round(b+$*i.easing(Oe));te<H&&(Q!==n||he!==o)?(f.scrollTo(Q,he),E=requestAnimationFrame(ee)):(f.scrollTo(n,o),cancelAnimationFrame(E),U(),rn.remove(f.element,!1),k(!0))};E=requestAnimationFrame(ee)})})}var Ml=Tl;function Vn(e,t){return Pl(e)||Dl(e,t)||Nl(e,t)||kl()}function kl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nl(e,t){if(e){if(typeof e=="string")return Ho(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ho(e,t)}}function Ho(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Dl(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,i,l,d=[],u=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(d.push(o.value),d.length!==t);u=!0);}catch(f){p=!0,r=f}finally{try{if(!u&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(p)throw r}}return d}}function Pl(e){if(Array.isArray(e))return e}var Rl=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),a.createElement("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),a.createElement("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"}))},Bl=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"}))},Hl=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"}))},Al=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"}))},zl={title:Rl,page:Bl,content:Hl,demo:Al},Ao=function(t){return a.createElement(a.Fragment,null,t.texts.map(function(n,o){return a.createElement(a.Fragment,{key:o},n.highlighted?a.createElement("mark",null,n.text):n.text)}))},Ll=function(t){var n=(0,a.useCallback)(function(){var d=0,u=[];return t.forEach(function(p){p.title&&u.push({type:"title",value:{title:p.title}}),p.hints.forEach(function(f){u.push({type:"hint",activeIndex:d++,value:f})})}),[u,d]},[t]),o=(0,a.useState)(n),r=Vn(o,2),i=r[0],l=r[1];return(0,a.useEffect)(function(){l(n)},[t]),i},Zl=function(t){var n=Ll(t.data),o=Vn(n,2),r=o[0],i=o[1],l=(0,a.useState)(-1),d=Vn(l,2),u=d[0],p=d[1],f=(0,j.TH)(),g=f.pathname,S=function(b){var $;($=t.onItemSelect)===null||$===void 0||$.call(t,b);var h=new URL(b==null?void 0:b.link,location.origin);(h==null?void 0:h.pathname)===g&&!h.hash&&setTimeout(function(){Ml(0,{maxDuration:300})},1)};(0,a.useEffect)(function(){var y=function($){if($.key==="ArrowDown")p((u+1)%i);else if($.key==="ArrowUp")p((u+i-1)%i);else if($.key==="Enter"&&u>=0){var h=r.find(function(R){return R.type==="hint"&&R.activeIndex===u}).value;j.m8.push(h.link),S==null||S(h),document.activeElement.blur()}["Escape","Enter"].includes($.key)&&p(-1)};return document.addEventListener("keydown",y),function(){return document.removeEventListener("keydown",y)}});var v=null;return t.loading?v=a.createElement("div",{className:"dumi-default-search-empty"},a.createElement(Ro,null),a.createElement(j._H,{id:"search.loading"})):t.data.length?v=a.createElement("dl",null,r.map(function(y,b){return y.type==="title"?a.createElement("dt",{key:String(b)},y.value.title):a.createElement("dd",{key:String(b)},a.createElement(j.rU,{to:y.value.link,"data-active":u===y.activeIndex||void 0,onClick:function(){return S==null?void 0:S(y.value)}},a.createElement(zl[y.value.type]),a.createElement("h4",null,a.createElement(Ao,{texts:y.value.highlightTitleTexts})),a.createElement("p",null,a.createElement(Ao,{texts:y.value.highlightTexts}))))})):v=a.createElement("div",{className:"dumi-default-search-empty"},a.createElement(Ro,null),a.createElement(j._H,{id:"search.not.found"})),a.createElement("div",{className:"dumi-default-search-result",onMouseEnter:function(){return p(-1)},onMouseDownCapture:function(b){return b.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()}},v)},zo=Zl,Lo=(0,a.forwardRef)(function(e,t){var n=(0,j.YB)(),o=(0,a.useRef)(!1),r=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,function(){return r.current}),(0,c.jsx)("input",{className:e.className,onCompositionStart:function(){return o.current=!0},onCompositionEnd:function(l){o.current=!1,e.onChange(l.currentTarget.value)},onFocus:e.onFocus,onBlur:e.onBlur,onKeyDown:function(l){["ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),l.key==="Escape"&&!o.current&&l.currentTarget.blur()},onChange:function(l){setTimeout(function(){o.current||e.onChange(l.target.value)},1)},placeholder:n.formatMessage({id:"header.search.placeholder"}),ref:r})}),Zo,Wo,Fo,Wl=(0,Et.kc)(function(e){var t=e.token,n=e.css;return{modal:n(Zo||(Zo=(0,V.Z)([`
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `]))),mask:n(Wo||(Wo=(0,V.Z)([`
      background-color: `,`;
      width: 100%;
      height: 100%;
    `])),t.colorBgMask),content:n(Fo||(Fo=(0,V.Z)([`
      position: absolute;
      top: 60px;
      background-color: `,`;
      width: 500px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: inset 1px 1px 0 0 hsla(0deg, 0%, 100%, 50%), 0 3px 8px 0 #555a64;
      border-radius: 8px;
      max-height: calc(100% - 120px);
      display: flex;
      flex-direction: column;
    `])),t.colorBgElevated)}}),Fl=function(t){var n=Wl(),o=n.styles;return(0,a.useEffect)(function(){if(t.visible)document.body.style.overflow="hidden";else{var r;document.body.style.overflow="",(r=t.onClose)===null||r===void 0||r.call(t)}},[t.visible]),t.visible?(0,c.jsxs)("div",{className:o.modal,children:[(0,c.jsx)("div",{className:o.mask,onClick:t.onMaskClick}),(0,c.jsx)("div",{className:o.content,children:t.children})]}):null},Vo,Xo,Uo,Go,Ko,Vl=(0,Et.kc)(function(e){var t=e.token,n=e.responsive,o=e.css,r=e.cx;return{container:o(Vo||(Vo=(0,V.Z)([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),shortcut:r("site-header-shortcut",o(Xo||(Xo=(0,V.Z)([`
        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        display: inline-block;
        padding: 4px 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        background-color: `,`;
        border-radius: 11px;
        border: 1px solid `,`;
        transform: translateY(-50%);
        transition: all 0.3s;
        pointer-events: none;

        `,` {
          display: none;
        }
      `])),t.colorTextDescription,t.colorFillSecondary,t.colorBorderSecondary,n.mobile)),popover:o(Uo||(Uo=(0,V.Z)([`
      position: absolute;
      top: 100%;
      inset-inline-end: 0;
      display: flex;
      flex-direction: column;
      width: 540px;
      max-height: 460px;
      margin-top: 18px;
      background-color: `,`;
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 20%);

      &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        inset-inline-end: 100px;
        display: inline-block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
      }

      > section {
        flex: 1;
        min-height: 60px;
        overflow: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        border-radius: inherit;
      }
    `])),t.colorBgElevated),svg:r(o(Go||(Go=(0,V.Z)([`
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,`;
        transform: translateY(-50%);
      `])),t.colorTextPlaceholder)),input:o(Ko||(Ko=(0,V.Z)([`
      width: 280px;
      height: `,`px;
      padding: 0;
      padding-inline-start: 40px;
      padding-inline-end: 12px;
      color: `,`;
      font-size: 14px;
      border: 1px solid `,`;
      border-radius: 20px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.3s;
      background-color: transparent;

      &:focus {
        border-color: `,`;
        background: `,`;

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }

      &::-webkit-input-placeholder {
        color: `,`;
      }
    `])),t.controlHeightLG,t.colorTextSecondary,t.colorBorder,t.colorBorderSecondary,t.colorBgElevated,t.colorTextPlaceholder)}}),Xn,Yo=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(Xn=navigator)===null||Xn===void 0?void 0:Xn.platform:""),Xl=function(t){return["TEXTAREA","INPUT"].includes(t.tagName)||t.contentEditable==="true"},Ul=function(){var t=Vl(),n=t.styles,o=(0,a.useState)(!1),r=(0,Qt.Z)(o,2),i=r[0],l=r[1],d=(0,a.useRef)(null),u=(0,a.useRef)(null),p=(0,a.useState)("\u2318"),f=(0,Qt.Z)(p,2),g=f[0],S=f[1],v=(0,j.OO)(),y=v.keywords,b=v.setKeywords,$=v.result,h=v.loading,R=(0,a.useState)(!1),H=(0,Qt.Z)(R,2),k=H[0],M=H[1];return(0,a.useEffect)(function(){Yo||S("Ctrl");var E=function(T){if(((Yo?T.metaKey:T.ctrlKey)&&T.key==="k"||T.key==="/"&&!Xl(T.target))&&(T.preventDefault(),d.current)){var Z=d.current.getBoundingClientRect(),K=Z.top,X=Z.bottom,U=Z.left,J=Z.right,ee=K>=0&&U>=0&&X<=window.innerHeight&&J<=window.innerWidth;ee?d.current.focus():(b(""),M(!0),setTimeout(function(){var te;(te=u.current)===null||te===void 0||te.focus()}))}T.key==="Escape"&&(T.preventDefault(),M(!1))};return document.addEventListener("keydown",E),function(){return document.removeEventListener("keydown",E)}},[]),(0,c.jsxs)("div",{className:n.container,children:[(0,c.jsx)(No,{className:n.svg}),(0,c.jsx)(Lo,{onFocus:function(){return l(!0)},onBlur:function(){setTimeout(function(){l(!1)},1)},onChange:function(P){return b(P)},ref:d,className:n.input}),(0,c.jsxs)("span",{className:n.shortcut,children:[g," K"]}),y.trim()&&i&&($.length||!h)&&!k&&(0,c.jsx)("div",{className:n.popover,children:(0,c.jsx)("section",{children:(0,c.jsx)(zo,{data:$,loading:h})})}),(0,c.jsxs)(Fl,{visible:k,onMaskClick:function(){M(!1)},onClose:function(){return b("")},children:[(0,c.jsxs)("div",{style:{position:"relative"},children:[(0,c.jsx)(No,{className:n.svg}),(0,c.jsx)(Lo,{className:n.input,onFocus:function(){return l(!0)},onBlur:function(){setTimeout(function(){l(!1)},1)},onChange:function(P){return b(P)},ref:u})]}),(0,c.jsx)(zo,{data:$,loading:h,onItemSelect:function(){M(!1)}})]})]})},Gl=Ul,Kl=s(54535),_o=s(8410),Yl=a.createContext(null),Qo=a.createContext({}),Jo=Yl,Un=s(29372),$n=s(15105),Pn=s(64217),_l=s(42550),Ql=["prefixCls","className","containerRef"],Jl=function(t){var n=t.prefixCls,o=t.className,r=t.containerRef,i=(0,ce.Z)(t,Ql),l=a.useContext(Qo),d=l.panel,u=(0,_l.x1)(d,r);return a.createElement("div",(0,mt.Z)({className:N()("".concat(n,"-content"),o),role:"dialog",ref:u},(0,Pn.Z)(t,{aria:!0}),{"aria-modal":"true"},i))},ql=Jl,qo=s(80334);function er(e){return typeof e=="string"&&String(Number(e))===e?((0,qo.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}function Ud(e){warning(!("wrapperClassName"in e),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!e.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var tr={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function es(e,t){var n,o,r,i=e.prefixCls,l=e.open,d=e.placement,u=e.inline,p=e.push,f=e.forceRender,g=e.autoFocus,S=e.keyboard,v=e.classNames,y=e.rootClassName,b=e.rootStyle,$=e.zIndex,h=e.className,R=e.id,H=e.style,k=e.motion,M=e.width,E=e.height,P=e.children,T=e.mask,Z=e.maskClosable,K=e.maskMotion,X=e.maskClassName,U=e.maskStyle,J=e.afterOpenChange,ee=e.onClose,te=e.onMouseEnter,Oe=e.onMouseOver,Q=e.onMouseLeave,he=e.onClick,nt=e.onKeyDown,Me=e.onKeyUp,pe=e.styles,ze=e.drawerRender,Je=a.useRef(),vt=a.useRef(),be=a.useRef();a.useImperativeHandle(t,function(){return Je.current});var ve=function(at){var Tt=at.keyCode,it=at.shiftKey;switch(Tt){case $n.Z.TAB:{if(Tt===$n.Z.TAB){if(!it&&document.activeElement===be.current){var wt;(wt=vt.current)===null||wt===void 0||wt.focus({preventScroll:!0})}else if(it&&document.activeElement===vt.current){var pn;(pn=be.current)===null||pn===void 0||pn.focus({preventScroll:!0})}}break}case $n.Z.ESC:{ee&&S&&(at.stopPropagation(),ee(at));break}}};a.useEffect(function(){if(l&&g){var Ze;(Ze=Je.current)===null||Ze===void 0||Ze.focus({preventScroll:!0})}},[l]);var me=a.useState(!1),St=(0,Qt.Z)(me,2),st=St[0],qe=St[1],Re=a.useContext(Jo),Ce;typeof p=="boolean"?Ce=p?{}:{distance:0}:Ce=p||{};var ge=(n=(o=(r=Ce)===null||r===void 0?void 0:r.distance)!==null&&o!==void 0?o:Re==null?void 0:Re.pushDistance)!==null&&n!==void 0?n:180,ot=a.useMemo(function(){return{pushDistance:ge,push:function(){qe(!0)},pull:function(){qe(!1)}}},[ge]);a.useEffect(function(){if(l){var Ze;Re==null||(Ze=Re.push)===null||Ze===void 0||Ze.call(Re)}else{var at;Re==null||(at=Re.pull)===null||at===void 0||at.call(Re)}},[l]),a.useEffect(function(){return function(){var Ze;Re==null||(Ze=Re.pull)===null||Ze===void 0||Ze.call(Re)}},[]);var Le=T&&a.createElement(Un.ZP,(0,mt.Z)({key:"mask"},K,{visible:l}),function(Ze,at){var Tt=Ze.className,it=Ze.style;return a.createElement("div",{className:N()("".concat(i,"-mask"),Tt,v==null?void 0:v.mask,X),style:(0,Rt.Z)((0,Rt.Z)((0,Rt.Z)({},it),U),pe==null?void 0:pe.mask),onClick:Z&&l?ee:void 0,ref:at})}),Nt=typeof k=="function"?k(d):k,se={};if(st&&ge)switch(d){case"top":se.transform="translateY(".concat(ge,"px)");break;case"bottom":se.transform="translateY(".concat(-ge,"px)");break;case"left":se.transform="translateX(".concat(ge,"px)");break;default:se.transform="translateX(".concat(-ge,"px)");break}d==="left"||d==="right"?se.width=er(M):se.height=er(E);var fe={onMouseEnter:te,onMouseOver:Oe,onMouseLeave:Q,onClick:he,onKeyDown:nt,onKeyUp:Me},Be=a.createElement(Un.ZP,(0,mt.Z)({key:"panel"},Nt,{visible:l,forceRender:f,onVisibleChanged:function(at){J==null||J(at)},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),function(Ze,at){var Tt=Ze.className,it=Ze.style,wt=a.createElement(ql,(0,mt.Z)({id:R,containerRef:at,prefixCls:i,className:N()(h,v==null?void 0:v.content),style:(0,Rt.Z)((0,Rt.Z)({},H),pe==null?void 0:pe.content)},(0,Pn.Z)(e,{aria:!0}),fe),P);return a.createElement("div",(0,mt.Z)({className:N()("".concat(i,"-content-wrapper"),v==null?void 0:v.wrapper,Tt),style:(0,Rt.Z)((0,Rt.Z)((0,Rt.Z)({},se),it),pe==null?void 0:pe.wrapper)},(0,Pn.Z)(e,{data:!0})),ze?ze(wt):wt)}),rt=(0,Rt.Z)({},b);return $&&(rt.zIndex=$),a.createElement(Jo.Provider,{value:ot},a.createElement("div",{className:N()(i,"".concat(i,"-").concat(d),y,(0,L.Z)((0,L.Z)({},"".concat(i,"-open"),l),"".concat(i,"-inline"),u)),style:rt,tabIndex:-1,ref:Je,onKeyDown:ve},Le,a.createElement("div",{tabIndex:0,ref:vt,style:tr,"aria-hidden":"true","data-sentinel":"start"}),Be,a.createElement("div",{tabIndex:0,ref:be,style:tr,"aria-hidden":"true","data-sentinel":"end"})))}var ts=a.forwardRef(es),ns=ts,os=function(t){var n=t.open,o=n===void 0?!1:n,r=t.prefixCls,i=r===void 0?"rc-drawer":r,l=t.placement,d=l===void 0?"right":l,u=t.autoFocus,p=u===void 0?!0:u,f=t.keyboard,g=f===void 0?!0:f,S=t.width,v=S===void 0?378:S,y=t.mask,b=y===void 0?!0:y,$=t.maskClosable,h=$===void 0?!0:$,R=t.getContainer,H=t.forceRender,k=t.afterOpenChange,M=t.destroyOnClose,E=t.onMouseEnter,P=t.onMouseOver,T=t.onMouseLeave,Z=t.onClick,K=t.onKeyDown,X=t.onKeyUp,U=t.panelRef,J=a.useState(!1),ee=(0,Qt.Z)(J,2),te=ee[0],Oe=ee[1],Q=a.useState(!1),he=(0,Qt.Z)(Q,2),nt=he[0],Me=he[1];(0,_o.Z)(function(){Me(!0)},[]);var pe=nt?o:!1,ze=a.useRef(),Je=a.useRef();(0,_o.Z)(function(){pe&&(Je.current=document.activeElement)},[pe]);var vt=function(st){var qe;if(Oe(st),k==null||k(st),!st&&Je.current&&!((qe=ze.current)!==null&&qe!==void 0&&qe.contains(Je.current))){var Re;(Re=Je.current)===null||Re===void 0||Re.focus({preventScroll:!0})}},be=a.useMemo(function(){return{panel:U}},[U]);if(!H&&!te&&!pe&&M)return null;var ve={onMouseEnter:E,onMouseOver:P,onMouseLeave:T,onClick:Z,onKeyDown:K,onKeyUp:X},me=(0,Rt.Z)((0,Rt.Z)({},t),{},{open:pe,prefixCls:i,placement:d,autoFocus:p,keyboard:g,width:v,mask:b,maskClosable:h,inline:R===!1,afterOpenChange:vt,ref:ze},ve);return a.createElement(Qo.Provider,{value:be},a.createElement(Kl.Z,{open:pe||H||te,autoDestroy:!1,getContainer:R,autoLock:b&&(pe||te)},a.createElement(ns,me)))},rs=os,as=rs,is=s(15382),ls=s(87263),Gn=s(33603),ss=s(43945),cs=s(16569),yn=s(69760),nr=e=>{var t,n;const{prefixCls:o,title:r,footer:i,extra:l,loading:d,onClose:u,headerStyle:p,bodyStyle:f,footerStyle:g,children:S,classNames:v,styles:y}=e,{drawer:b}=a.useContext(Y.E_),$=a.useCallback(M=>a.createElement("button",{type:"button",onClick:u,"aria-label":"Close",className:`${o}-close`},M),[u]),[h,R]=(0,yn.Z)((0,yn.w)(e),(0,yn.w)(b),{closable:!0,closeIconRender:$}),H=a.useMemo(()=>{var M,E;return!r&&!h?null:a.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(M=b==null?void 0:b.styles)===null||M===void 0?void 0:M.header),p),y==null?void 0:y.header),className:N()(`${o}-header`,{[`${o}-header-close-only`]:h&&!r&&!l},(E=b==null?void 0:b.classNames)===null||E===void 0?void 0:E.header,v==null?void 0:v.header)},a.createElement("div",{className:`${o}-header-title`},R,r&&a.createElement("div",{className:`${o}-title`},r)),l&&a.createElement("div",{className:`${o}-extra`},l))},[h,R,l,p,o,r]),k=a.useMemo(()=>{var M,E;if(!i)return null;const P=`${o}-footer`;return a.createElement("div",{className:N()(P,(M=b==null?void 0:b.classNames)===null||M===void 0?void 0:M.footer,v==null?void 0:v.footer),style:Object.assign(Object.assign(Object.assign({},(E=b==null?void 0:b.styles)===null||E===void 0?void 0:E.footer),g),y==null?void 0:y.footer)},i)},[i,g,o]);return a.createElement(a.Fragment,null,H,a.createElement("div",{className:N()(`${o}-body`,v==null?void 0:v.body,(t=b==null?void 0:b.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(n=b==null?void 0:b.styles)===null||n===void 0?void 0:n.body),f),y==null?void 0:y.body)},d?a.createElement(co.Z,{active:!0,title:!1,paragraph:{rows:5},className:`${o}-body-skeleton`}):S),k)};const ds=e=>{const t="100%";return{left:`translateX(-${t})`,right:`translateX(${t})`,top:`translateY(-${t})`,bottom:`translateY(${t})`}[e]},or=(e,t)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":t}),"&-leave":Object.assign(Object.assign({},t),{"&-active":e})}),rr=(e,t)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}},or({opacity:e},{opacity:1})),us=(e,t)=>[rr(.7,t),or({transform:ds(e)},{transform:"none"})];var fs=e=>{const{componentCls:t,motionDurationSlow:n}=e;return{[t]:{[`${t}-mask-motion`]:rr(0,n),[`${t}-panel-motion`]:["left","right","top","bottom"].reduce((o,r)=>Object.assign(Object.assign({},o),{[`&-${r}`]:us(r,n)}),{})}}};const ms=e=>{const{borderRadiusSM:t,componentCls:n,zIndexPopup:o,colorBgMask:r,colorBgElevated:i,motionDurationSlow:l,motionDurationMid:d,paddingXS:u,padding:p,paddingLG:f,fontSizeLG:g,lineHeightLG:S,lineWidth:v,lineType:y,colorSplit:b,marginXS:$,colorIcon:h,colorIconHover:R,colorBgTextHover:H,colorBgTextActive:k,colorText:M,fontWeightStrong:E,footerPaddingBlock:P,footerPaddingInline:T,calc:Z}=e,K=`${n}-content-wrapper`;return{[n]:{position:"fixed",inset:0,zIndex:o,pointerEvents:"none",color:M,"&-pure":{position:"relative",background:i,display:"flex",flexDirection:"column",[`&${n}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${n}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${n}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${n}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${n}-mask`]:{position:"absolute",inset:0,zIndex:o,background:r,pointerEvents:"auto"},[K]:{position:"absolute",zIndex:o,maxWidth:"100vw",transition:`all ${l}`,"&-hidden":{display:"none"}},[`&-left > ${K}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${K}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${K}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${K}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${n}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:i,pointerEvents:"auto"},[`${n}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,Xe.bf)(p)} ${(0,Xe.bf)(f)}`,fontSize:g,lineHeight:S,borderBottom:`${(0,Xe.bf)(v)} ${y} ${b}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${n}-extra`]:{flex:"none"},[`${n}-close`]:Object.assign({display:"inline-flex",width:Z(g).add(u).equal(),height:Z(g).add(u).equal(),borderRadius:t,justifyContent:"center",alignItems:"center",marginInlineEnd:$,color:h,fontWeight:E,fontSize:g,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${d}`,textRendering:"auto","&:hover":{color:R,backgroundColor:H,textDecoration:"none"},"&:active":{backgroundColor:k}},(0,fn.Qy)(e)),[`${n}-title`]:{flex:1,margin:0,fontWeight:e.fontWeightStrong,fontSize:g,lineHeight:S},[`${n}-body`]:{flex:1,minWidth:0,minHeight:0,padding:f,overflow:"auto",[`${n}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${n}-footer`]:{flexShrink:0,padding:`${(0,Xe.bf)(P)} ${(0,Xe.bf)(T)}`,borderTop:`${(0,Xe.bf)(v)} ${y} ${b}`},"&-rtl":{direction:"rtl"}}}},ps=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding});var ar=(0,re.I$)("Drawer",e=>{const t=(0,On.IX)(e,{});return[ms(t),fs(t)]},ps),ir=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Yd=null,gs={distance:180},lr=e=>{var t;const{rootClassName:n,width:o,height:r,size:i="default",mask:l=!0,push:d=gs,open:u,afterOpenChange:p,onClose:f,prefixCls:g,getContainer:S,style:v,className:y,visible:b,afterVisibleChange:$,maskStyle:h,drawerStyle:R,contentWrapperStyle:H}=e,k=ir(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:M,getPrefixCls:E,direction:P,drawer:T}=a.useContext(Y.E_),Z=E("drawer",g),[K,X,U]=ar(Z),J=S===void 0&&M?()=>M(document.body):S,ee=N()({"no-mask":!l,[`${Z}-rtl`]:P==="rtl"},n,X,U),te=a.useMemo(()=>o!=null?o:i==="large"?736:378,[o,i]),Oe=a.useMemo(()=>r!=null?r:i==="large"?736:378,[r,i]),Q={motionName:(0,Gn.m)(Z,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},he=ve=>({motionName:(0,Gn.m)(Z,`panel-motion-${ve}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),nt=(0,cs.H)(),[Me,pe]=(0,ls.Cn)("Drawer",k.zIndex),{classNames:ze={},styles:Je={}}=k,{classNames:vt={},styles:be={}}=T||{};return K(a.createElement(is.Z,{form:!0,space:!0},a.createElement(ss.Z.Provider,{value:pe},a.createElement(as,Object.assign({prefixCls:Z,onClose:f,maskMotion:Q,motion:he},k,{classNames:{mask:N()(ze.mask,vt.mask),content:N()(ze.content,vt.content),wrapper:N()(ze.wrapper,vt.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},Je.mask),h),be.mask),content:Object.assign(Object.assign(Object.assign({},Je.content),R),be.content),wrapper:Object.assign(Object.assign(Object.assign({},Je.wrapper),H),be.wrapper)},open:u!=null?u:b,mask:l,push:d,width:te,height:Oe,style:Object.assign(Object.assign({},T==null?void 0:T.style),v),className:N()(T==null?void 0:T.className,y),rootClassName:ee,getContainer:J,afterOpenChange:p!=null?p:$,panelRef:nt,zIndex:Me}),a.createElement(nr,Object.assign({prefixCls:Z},k,{onClose:f}))))))},hs=e=>{const{prefixCls:t,style:n,className:o,placement:r="right"}=e,i=ir(e,["prefixCls","style","className","placement"]),{getPrefixCls:l}=a.useContext(Y.E_),d=l("drawer",t),[u,p,f]=ar(d),g=N()(d,`${d}-pure`,`${d}-${r}`,p,f,o);return u(a.createElement("div",{className:g,style:n},a.createElement(nr,Object.assign({prefixCls:d},i))))};lr._InternalPanelDoNotUseOrYouWillBeFired=hs;var vs=lr,bs=s(99291),en=s(52062),sr,cr,dr,ur,fr,mr,pr,xs=(0,Et.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.cx,r=e.css,i=6;return{rect:r(sr||(sr=(0,V.Z)([`
      background: `,`;

      width: 100%;
    `])),(0,en.m4)(t.colorBgContainer,.8)),icon:o("site-burger-icon",r(cr||(cr=(0,V.Z)([`
        position: relative;

        &,
        &::before,
        &::after {
          display: inline-block;
          height: 2px;
          background: `,`;

          width: 16px;

          transition: all 150ms ease;
        }

        &::before,
        &::after {
          position: absolute;
          left: 0;

          content: '';
        }

        &::before {
          top: `,`px;
        }

        &::after {
          top: -`,`px;
        }
      `])),t.colorTextSecondary,i,i)),active:r(dr||(dr=(0,V.Z)([`
      &::before,
      &::after {
        background: `,`;
      }
      & {
        background: transparent;
      }

      &::before {
        top: 0;
        transform: rotate(-135deg);
      }

      &::after {
        top: 0;
        transform: rotate(135deg);
      }
    `])),t.colorText),container:r(ur||(ur=(0,V.Z)([`
      width: `,`px;
      height: `,`px;
      border-radius: `,`px;
      cursor: pointer;
    `])),t.controlHeight,t.controlHeight,t.borderRadius),drawerRoot:r(fr||(fr=(0,V.Z)([`
      top: `,`px;

      :focus-visible {
        outline: none;
      }

      .`,`-drawer {
        &-mask {
          background: transparent;
          backdrop-filter: blur(7px);
          background: `,`;
        }

        &-content-wrapper {
          box-shadow: none;
        }
      }
    `])),t.headerHeight+1,n,(0,en.m4)(t.colorBgBase,.5)),drawer:r(mr||(mr=(0,V.Z)([`
      &.`,`-drawer-content {
        background: transparent;
      }

      .`,`-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `])),n,n),menu:r(pr||(pr=(0,V.Z)([`
      background: transparent;
      border-inline-end: transparent !important;

      > .`,"-menu-item-only-child,.",`-menu-submenu-title {
        background: `,`;
        border-radius: 0;
        margin: 0;
        width: 100%;
        &:active {
          margin-inline: 4px;
          border-radius: `,`px;
        }
      }

      .`,"-menu-sub.",`-menu-inline {
        //background: transparent !important;
        background: `,` !important;
      }
    `])),n,n,(0,en.m4)(t.colorBgContainer,.8),t.borderRadius,n,n,(0,en.m4)(t.colorBgContainer,.2))}}),ys=function(){var t=(0,a.useState)(!1),n=(0,Qt.Z)(t,2),o=n[0],r=n[1],i=xs(),l=i.styles,d=i.cx,u=(0,_.HX)(function(S){return S.navData},A()),p=(0,_.HX)(function(S){return S.sidebar},A()),f=(0,_.HX)(wn.K1),g=(0,_.HX)(function(S){return S.location.pathname});return(0,c.jsxs)(cn,{className:l.container,onClick:function(){r(!o)},children:[(0,c.jsx)("div",{className:d(l.icon,o?l.active:"")}),(0,c.jsxs)(vs,{open:o,placement:"left",closeIcon:null,rootClassName:l.drawerRoot,className:l.drawer,width:"100vw",headerStyle:{display:"none"},bodyStyle:{padding:0},children:[(0,c.jsx)("div",{style:{height:24},className:l.rect}),(0,c.jsx)(bs.Z,{mode:"inline",selectedKeys:(0,mn.uniq)([f,"s-".concat(g)]),openKeys:[f],className:l.menu,items:u.map(function(S){return{label:(0,c.jsx)(j.rU,{to:S.link,children:S.title}),key:S.activePath||S.link,children:(S.activePath||S.link)===f&&(p==null?void 0:p.map(function(v){return!v.link&&{label:v.title,type:"group",children:v.children.map(function(y){return{label:(0,c.jsx)(j.rU,{to:y.link,onClick:function(){r(!1)},children:y.title}),key:"s-".concat(y.link)}})}}))}})}),(0,c.jsx)("div",{style:{flex:1},className:l.rect})]})]})},Cs=ys,Ss={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"},ws=Ss,Os=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:ws}))},$s=a.forwardRef(Os),Is=$s,js=s(68866),Es=function(){var t=(0,_.HX)(Fn);return t?(0,c.jsx)(js.Z,{arrow:!1,title:"Github",children:(0,c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,c.jsx)(kn.ZP,{icon:(0,c.jsx)(Is,{})})})}):null},Ts=(0,a.memo)(Es),Ms=s(15806),gr=s(96201),hr,vr,br,xr,ks=(0,Et.kc)(function(e){var t=e.css,n=e.responsive,o=e.token;return{header:t(hr||(hr=(0,V.Z)([`
    top: 0;
    position: sticky;
    background-color: transparent;
    backdrop-filter: blur(6px);
    z-index: `,`;
    border-bottom: 1px solid `,`;

    grid-area: head;
    align-self: stretch;

    `,` {
      background: `,`;
    }
  `])),o.zIndexPopupBase-50,o.colorSplit,n.mobile,o.colorBgContainer),content:t(vr||(vr=(0,V.Z)([`
    padding: 0 24px;
    height: 64px;

    `,` {
      padding: 0 12px;
    }
  `])),n.mobile),left:t(br||(br=(0,V.Z)([""]))),right:t(xr||(xr=(0,V.Z)([`
    flex: 1;
    display: flex;
    justify-content: space-between;

    &-aside {
      display: flex;
      align-items: center;

      `,` {
        margin: 8px 16px;
        padding-top: 24px;
        justify-content: center;
        border-top: 1px solid `,`;
      }
    }
  `])),n.mobile,o.colorBorder)}}),yr=function(){var t=(0,_.HX)(function(l){return l.siteData.themeConfig.prefersColor.switch}),n=(0,gr.f)(function(l){return l.themeMode}),o=(0,j.OI)(),r=(0,Qt.Z)(o,3),i=r[2];return(0,a.useEffect)(function(){return i(n)},[n]),t?(0,c.jsx)(Ms.Z,{value:n,onChange:function(d){gr.f.setState({themeMode:d})}}):null},Ns=function(){var t=(0,_.HX)(function(l){return!!l.routeMeta.frontmatter}),n=(0,xn.F)(),o=n.mobile,r=ks(),i=r.styles;return t?(0,c.jsx)("div",{className:i.header,children:(0,c.jsx)(ut.D,{horizontal:!0,distribution:"space-between",align:"center",width:"auto",className:i.content,children:o?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ut.D,{children:(0,c.jsx)(Cs,{})}),(0,c.jsx)(ut.D,{horizontal:!0,className:i.left,children:(0,c.jsx)(ko,{})}),(0,c.jsx)(ut.D,{children:(0,c.jsx)(yr,{})})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ut.D,{horizontal:!0,className:i.left,children:(0,c.jsx)(ko,{})}),(0,c.jsx)(ut.D,{style:{marginLeft:48,alignSelf:"end"},children:(0,c.jsx)(hl.Z,{})}),(0,c.jsxs)("section",{className:i.right,children:[(0,c.jsx)("div",{}),(0,c.jsxs)(ut.D,{gap:16,horizontal:!0,align:"center",className:"dumi-default-header-right-aside",children:[(0,c.jsx)(Gl,{}),(0,c.jsx)(cl,{}),(0,c.jsx)(Ts,{}),(0,c.jsx)(yr,{})]})]})]})})}):null},Cr=(0,a.memo)(Ns),Ds=s(92109),Ps={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},Rs=Ps,Bs=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Rs}))},Hs=a.forwardRef(Bs),As=Hs,zs={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},Ls=zs,Zs=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Ls}))},Ws=a.forwardRef(Zs),Fs=Ws,Kn=s(88929),Vs={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},Xs=Vs,Us=function(t,n){return a.createElement(Ut.Z,(0,mt.Z)({},t,{ref:n,icon:Xs}))},Gs=a.forwardRef(Us),Ks=Gs,Ys=s(71002),_s=s(21770),Sr=s(50344),wr=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.forceRender,r=e.className,i=e.style,l=e.children,d=e.isActive,u=e.role,p=e.classNames,f=e.styles,g=a.useState(d||o),S=(0,Qt.Z)(g,2),v=S[0],y=S[1];return a.useEffect(function(){(o||d)&&y(!0)},[o,d]),v?a.createElement("div",{ref:t,className:N()("".concat(n,"-content"),(0,L.Z)((0,L.Z)({},"".concat(n,"-content-active"),d),"".concat(n,"-content-inactive"),!d),r),style:i,role:u},a.createElement("div",{className:N()("".concat(n,"-content-box"),p==null?void 0:p.body),style:f==null?void 0:f.body},l)):null});wr.displayName="PanelContent";var Qs=wr,Js=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],qs=a.forwardRef(function(e,t){var n=e.showArrow,o=n===void 0?!0:n,r=e.headerClass,i=e.isActive,l=e.onItemClick,d=e.forceRender,u=e.className,p=e.classNames,f=p===void 0?{}:p,g=e.styles,S=g===void 0?{}:g,v=e.prefixCls,y=e.collapsible,b=e.accordion,$=e.panelKey,h=e.extra,R=e.header,H=e.expandIcon,k=e.openMotion,M=e.destroyInactivePanel,E=e.children,P=(0,ce.Z)(e,Js),T=y==="disabled",Z=y==="header",K=y==="icon",X=h!=null&&typeof h!="boolean",U=function(){l==null||l($)},J=function(nt){(nt.key==="Enter"||nt.keyCode===$n.Z.ENTER||nt.which===$n.Z.ENTER)&&U()},ee=typeof H=="function"?H(e):a.createElement("i",{className:"arrow"});ee&&(ee=a.createElement("div",{className:"".concat(v,"-expand-icon"),onClick:["header","icon"].includes(y)?U:void 0},ee));var te=N()((0,L.Z)((0,L.Z)((0,L.Z)({},"".concat(v,"-item"),!0),"".concat(v,"-item-active"),i),"".concat(v,"-item-disabled"),T),u),Oe=N()(r,(0,L.Z)((0,L.Z)((0,L.Z)({},"".concat(v,"-header"),!0),"".concat(v,"-header-collapsible-only"),Z),"".concat(v,"-icon-collapsible-only"),K),f.header),Q={className:Oe,"aria-expanded":i,"aria-disabled":T,onKeyDown:J,style:S.header};return!Z&&!K&&(Q.onClick=U,Q.role=b?"tab":"button",Q.tabIndex=T?-1:0),a.createElement("div",(0,mt.Z)({},P,{ref:t,className:te}),a.createElement("div",Q,o&&ee,a.createElement("span",{className:"".concat(v,"-header-text"),onClick:y==="header"?U:void 0},R),X&&a.createElement("div",{className:"".concat(v,"-extra")},h)),a.createElement(Un.ZP,(0,mt.Z)({visible:i,leavedClassName:"".concat(v,"-content-hidden")},k,{forceRender:d,removeOnLeave:M}),function(he,nt){var Me=he.className,pe=he.style;return a.createElement(Qs,{ref:nt,prefixCls:v,className:Me,classNames:f,style:pe,styles:S,isActive:i,forceRender:d,role:b?"tabpanel":void 0},E)}))}),Or=qs,ec=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],tc=function(t,n){var o=n.prefixCls,r=n.accordion,i=n.collapsible,l=n.destroyInactivePanel,d=n.onItemClick,u=n.activeKey,p=n.openMotion,f=n.expandIcon;return t.map(function(g,S){var v=g.children,y=g.label,b=g.key,$=g.collapsible,h=g.onItemClick,R=g.destroyInactivePanel,H=(0,ce.Z)(g,ec),k=String(b!=null?b:S),M=$!=null?$:i,E=R!=null?R:l,P=function(K){M!=="disabled"&&(d(K),h==null||h(K))},T=!1;return r?T=u[0]===k:T=u.indexOf(k)>-1,a.createElement(Or,(0,mt.Z)({},H,{prefixCls:o,key:k,panelKey:k,isActive:T,accordion:r,openMotion:p,expandIcon:f,header:y,collapsible:M,onItemClick:P,destroyInactivePanel:E}),v)})},nc=function(t,n,o){if(!t)return null;var r=o.prefixCls,i=o.accordion,l=o.collapsible,d=o.destroyInactivePanel,u=o.onItemClick,p=o.activeKey,f=o.openMotion,g=o.expandIcon,S=t.key||String(n),v=t.props,y=v.header,b=v.headerClass,$=v.destroyInactivePanel,h=v.collapsible,R=v.onItemClick,H=!1;i?H=p[0]===S:H=p.indexOf(S)>-1;var k=h!=null?h:l,M=function(T){k!=="disabled"&&(u(T),R==null||R(T))},E={key:S,panelKey:S,header:y,headerClass:b,isActive:H,prefixCls:r,destroyInactivePanel:$!=null?$:d,openMotion:f,accordion:i,children:t.props.children,onItemClick:M,expandIcon:g,collapsible:k};return typeof t.type=="string"?t:(Object.keys(E).forEach(function(P){typeof E[P]=="undefined"&&delete E[P]}),a.cloneElement(t,E))};function oc(e,t,n){return Array.isArray(e)?tc(e,n):(0,Sr.Z)(t).map(function(o,r){return nc(o,r,n)})}var rc=oc;function ac(e){var t=e;if(!Array.isArray(t)){var n=(0,Ys.Z)(t);t=n==="number"||n==="string"?[t]:[]}return t.map(function(o){return String(o)})}var ic=a.forwardRef(function(e,t){var n=e.prefixCls,o=n===void 0?"rc-collapse":n,r=e.destroyInactivePanel,i=r===void 0?!1:r,l=e.style,d=e.accordion,u=e.className,p=e.children,f=e.collapsible,g=e.openMotion,S=e.expandIcon,v=e.activeKey,y=e.defaultActiveKey,b=e.onChange,$=e.items,h=N()(o,u),R=(0,_s.Z)([],{value:v,onChange:function(Z){return b==null?void 0:b(Z)},defaultValue:y,postState:ac}),H=(0,Qt.Z)(R,2),k=H[0],M=H[1],E=function(Z){return M(function(){if(d)return k[0]===Z?[]:[Z];var K=k.indexOf(Z),X=K>-1;return X?k.filter(function(U){return U!==Z}):[].concat((0,Zt.Z)(k),[Z])})};(0,qo.ZP)(!p,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var P=rc($,p,{prefixCls:o,accordion:d,openMotion:g,expandIcon:S,collapsible:f,destroyInactivePanel:i,onItemClick:E,activeKey:k});return a.createElement("div",(0,mt.Z)({ref:t,className:h,style:l,role:d?"tablist":void 0},(0,Pn.Z)(e,{aria:!0,data:!0})),P)}),$r=Object.assign(ic,{Panel:Or}),Ir=$r,_d=$r.Panel,Rn=s(98423),Yn=s(96159),lc=s(98675),sc=a.forwardRef((e,t)=>{const{getPrefixCls:n}=a.useContext(Y.E_),{prefixCls:o,className:r,showArrow:i=!0}=e,l=n("collapse",o),d=N()({[`${l}-no-arrow`]:!i},r);return a.createElement(Ir.Panel,Object.assign({ref:t},e,{prefixCls:l,className:d}))}),cc=s(33507);const dc=e=>{const{componentCls:t,contentBg:n,padding:o,headerBg:r,headerPadding:i,collapseHeaderPaddingSM:l,collapseHeaderPaddingLG:d,collapsePanelBorderRadius:u,lineWidth:p,lineType:f,colorBorder:g,colorText:S,colorTextHeading:v,colorTextDisabled:y,fontSizeLG:b,lineHeight:$,lineHeightLG:h,marginSM:R,paddingSM:H,paddingLG:k,paddingXS:M,motionDurationSlow:E,fontSizeIcon:P,contentPadding:T,fontHeight:Z,fontHeightLG:K}=e,X=`${(0,Xe.bf)(p)} ${f} ${g}`;return{[t]:Object.assign(Object.assign({},(0,fn.Wf)(e)),{backgroundColor:r,border:X,borderRadius:u,"&-rtl":{direction:"rtl"},[`& > ${t}-item`]:{borderBottom:X,"&:last-child":{[`
            &,
            & > ${t}-header`]:{borderRadius:`0 0 ${(0,Xe.bf)(u)} ${(0,Xe.bf)(u)}`}},[`> ${t}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:i,color:v,lineHeight:$,cursor:"pointer",transition:`all ${E}, visibility 0s`,[`> ${t}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${t}-expand-icon`]:{height:Z,display:"flex",alignItems:"center",paddingInlineEnd:R},[`${t}-arrow`]:Object.assign(Object.assign({},(0,fn.Ro)()),{fontSize:P,transition:`transform ${E}`,svg:{transition:`transform ${E}`}}),[`${t}-header-text`]:{marginInlineEnd:"auto"}},[`${t}-icon-collapsible-only`]:{cursor:"unset",[`${t}-expand-icon`]:{cursor:"pointer"}}},[`${t}-content`]:{color:S,backgroundColor:n,borderTop:X,[`& > ${t}-content-box`]:{padding:T},"&-hidden":{display:"none"}},"&-small":{[`> ${t}-item`]:{[`> ${t}-header`]:{padding:l,paddingInlineStart:M,[`> ${t}-expand-icon`]:{marginInlineStart:e.calc(H).sub(M).equal()}},[`> ${t}-content > ${t}-content-box`]:{padding:H}}},"&-large":{[`> ${t}-item`]:{fontSize:b,lineHeight:h,[`> ${t}-header`]:{padding:d,paddingInlineStart:o,[`> ${t}-expand-icon`]:{height:K,marginInlineStart:e.calc(k).sub(o).equal()}},[`> ${t}-content > ${t}-content-box`]:{padding:k}}},[`${t}-item:last-child`]:{borderBottom:0,[`> ${t}-content`]:{borderRadius:`0 0 ${(0,Xe.bf)(u)} ${(0,Xe.bf)(u)}`}},[`& ${t}-item-disabled > ${t}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:y,cursor:"not-allowed"}},[`&${t}-icon-position-end`]:{[`& > ${t}-item`]:{[`> ${t}-header`]:{[`${t}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:R}}}}})}},uc=e=>{const{componentCls:t}=e,n=`> ${t}-item > ${t}-header ${t}-arrow`;return{[`${t}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},fc=e=>{const{componentCls:t,headerBg:n,paddingXXS:o,colorBorder:r}=e;return{[`${t}-borderless`]:{backgroundColor:n,border:0,[`> ${t}-item`]:{borderBottom:`1px solid ${r}`},[`
        > ${t}-item:last-child,
        > ${t}-item:last-child ${t}-header
      `]:{borderRadius:0},[`> ${t}-item:last-child`]:{borderBottom:0},[`> ${t}-item > ${t}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${t}-item > ${t}-content > ${t}-content-box`]:{paddingTop:o}}}},mc=e=>{const{componentCls:t,paddingSM:n}=e;return{[`${t}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${t}-item`]:{borderBottom:0,[`> ${t}-content`]:{backgroundColor:"transparent",border:0,[`> ${t}-content-box`]:{paddingBlock:n}}}}}},pc=e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer});var gc=(0,re.I$)("Collapse",e=>{const t=(0,On.IX)(e,{collapseHeaderPaddingSM:`${(0,Xe.bf)(e.paddingXS)} ${(0,Xe.bf)(e.paddingSM)}`,collapseHeaderPaddingLG:`${(0,Xe.bf)(e.padding)} ${(0,Xe.bf)(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[dc(t),fc(t),mc(t),uc(t),(0,cc.Z)(t)]},pc),hc=Object.assign(a.forwardRef((e,t)=>{const{getPrefixCls:n,direction:o,collapse:r}=a.useContext(Y.E_),{prefixCls:i,className:l,rootClassName:d,style:u,bordered:p=!0,ghost:f,size:g,expandIconPosition:S="start",children:v,expandIcon:y}=e,b=(0,lc.Z)(X=>{var U;return(U=g!=null?g:X)!==null&&U!==void 0?U:"middle"}),$=n("collapse",i),h=n(),[R,H,k]=gc($),M=a.useMemo(()=>S==="left"?"start":S==="right"?"end":S,[S]),E=y!=null?y:r==null?void 0:r.expandIcon,P=a.useCallback(function(){let X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const U=typeof E=="function"?E(X):a.createElement(Ks,{rotate:X.isActive?90:void 0,"aria-label":X.isActive?"expanded":"collapsed"});return(0,Yn.Tm)(U,()=>{var J;return{className:N()((J=U==null?void 0:U.props)===null||J===void 0?void 0:J.className,`${$}-arrow`)}})},[E,$]),T=N()(`${$}-icon-position-${M}`,{[`${$}-borderless`]:!p,[`${$}-rtl`]:o==="rtl",[`${$}-ghost`]:!!f,[`${$}-${b}`]:b!=="middle"},r==null?void 0:r.className,l,d,H,k),Z=Object.assign(Object.assign({},(0,Gn.Z)(h)),{motionAppear:!1,leavedClassName:`${$}-content-hidden`}),K=a.useMemo(()=>v?(0,Sr.Z)(v).map((X,U)=>{var J,ee;if(!((J=X.props)===null||J===void 0)&&J.disabled){const te=(ee=X.key)!==null&&ee!==void 0?ee:String(U),{disabled:Oe,collapsible:Q}=X.props,he=Object.assign(Object.assign({},(0,Rn.Z)(X.props,["disabled"])),{key:te,collapsible:Q!=null?Q:Oe?"disabled":void 0});return(0,Yn.Tm)(X,he)}return X}):null,[v]);return R(a.createElement(Ir,Object.assign({ref:t,openMotion:Z},(0,Rn.Z)(e,["rootClassName"]),{expandIcon:P,prefixCls:$,className:T,style:Object.assign(Object.assign({},r==null?void 0:r.style),u)}),K))}),{Panel:sc}),jr=hc,_n=s(66680);const Er=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Tr=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Qn=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return Tr(n.overflowY,t)||Tr(n.overflowX,t)||(o=>{const r=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch(l){return null}})(o);return!!r&&(r.clientHeight<o.scrollHeight||r.clientWidth<o.scrollWidth)})(e)}return!1},Bn=(e,t,n,o,r,i,l,d)=>i<e&&l>t||i>e&&l<t?0:i<=e&&d<=n||l>=t&&d>=n?i-e-o:l>t&&d<n||i<e&&d>n?l-t+r:0,vc=e=>{const t=e.parentElement;return t==null?e.getRootNode().host||null:t},Mr=(e,t)=>{var n,o,r,i;if(typeof document=="undefined")return[];const{scrollMode:l,block:d,inline:u,boundary:p,skipOverflowHiddenElements:f}=t,g=typeof p=="function"?p:Oe=>Oe!==p;if(!Er(e))throw new TypeError("Invalid target");const S=document.scrollingElement||document.documentElement,v=[];let y=e;for(;Er(y)&&g(y);){if(y=vc(y),y===S){v.push(y);break}y!=null&&y===document.body&&Qn(y)&&!Qn(document.documentElement)||y!=null&&Qn(y,f)&&v.push(y)}const b=(o=(n=window.visualViewport)==null?void 0:n.width)!=null?o:innerWidth,$=(i=(r=window.visualViewport)==null?void 0:r.height)!=null?i:innerHeight,{scrollX:h,scrollY:R}=window,{height:H,width:k,top:M,right:E,bottom:P,left:T}=e.getBoundingClientRect(),{top:Z,right:K,bottom:X,left:U}=(Oe=>{const Q=window.getComputedStyle(Oe);return{top:parseFloat(Q.scrollMarginTop)||0,right:parseFloat(Q.scrollMarginRight)||0,bottom:parseFloat(Q.scrollMarginBottom)||0,left:parseFloat(Q.scrollMarginLeft)||0}})(e);let J=d==="start"||d==="nearest"?M-Z:d==="end"?P+X:M+H/2-Z+X,ee=u==="center"?T+k/2-U+K:u==="end"?E+K:T-U;const te=[];for(let Oe=0;Oe<v.length;Oe++){const Q=v[Oe],{height:he,width:nt,top:Me,right:pe,bottom:ze,left:Je}=Q.getBoundingClientRect();if(l==="if-needed"&&M>=0&&T>=0&&P<=$&&E<=b&&M>=Me&&P<=ze&&T>=Je&&E<=pe)return te;const vt=getComputedStyle(Q),be=parseInt(vt.borderLeftWidth,10),ve=parseInt(vt.borderTopWidth,10),me=parseInt(vt.borderRightWidth,10),St=parseInt(vt.borderBottomWidth,10);let st=0,qe=0;const Re="offsetWidth"in Q?Q.offsetWidth-Q.clientWidth-be-me:0,Ce="offsetHeight"in Q?Q.offsetHeight-Q.clientHeight-ve-St:0,ge="offsetWidth"in Q?Q.offsetWidth===0?0:nt/Q.offsetWidth:0,ot="offsetHeight"in Q?Q.offsetHeight===0?0:he/Q.offsetHeight:0;if(S===Q)st=d==="start"?J:d==="end"?J-$:d==="nearest"?Bn(R,R+$,$,ve,St,R+J,R+J+H,H):J-$/2,qe=u==="start"?ee:u==="center"?ee-b/2:u==="end"?ee-b:Bn(h,h+b,b,be,me,h+ee,h+ee+k,k),st=Math.max(0,st+R),qe=Math.max(0,qe+h);else{st=d==="start"?J-Me-ve:d==="end"?J-ze+St+Ce:d==="nearest"?Bn(Me,ze,he,ve,St+Ce,J,J+H,H):J-(Me+he/2)+Ce/2,qe=u==="start"?ee-Je-be:u==="center"?ee-(Je+nt/2)+Re/2:u==="end"?ee-pe+me+Re:Bn(Je,pe,nt,be,me+Re,ee,ee+k,k);const{scrollLeft:Le,scrollTop:Nt}=Q;st=ot===0?0:Math.max(0,Math.min(Nt+st/ot,Q.scrollHeight-he/ot+Ce)),qe=ge===0?0:Math.max(0,Math.min(Le+qe/ge,Q.scrollWidth-nt/ge+Re)),J+=Nt-st,ee+=Le-qe}te.push({el:Q,top:st,left:qe})}return te},bc=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function xc(e,t){if(!e.isConnected||!(r=>{let i=r;for(;i&&i.parentNode;){if(i.parentNode===document)return!0;i=i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}return!1})(e))return;const n=(r=>{const i=window.getComputedStyle(r);return{top:parseFloat(i.scrollMarginTop)||0,right:parseFloat(i.scrollMarginRight)||0,bottom:parseFloat(i.scrollMarginBottom)||0,left:parseFloat(i.scrollMarginLeft)||0}})(e);if((r=>typeof r=="object"&&typeof r.behavior=="function")(t))return t.behavior(Mr(e,t));const o=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:r,top:i,left:l}of Mr(e,bc(t))){const d=i-n.top+n.bottom,u=l-n.left+n.right;r.scroll({top:d,left:u,behavior:o})}}function Jn(e){return e!=null&&e===e.window}var kr=e=>{var t,n;if(typeof window=="undefined")return 0;let o=0;return Jn(e)?o=e.pageYOffset:e instanceof Document?o=e.documentElement.scrollTop:(e instanceof HTMLElement||e)&&(o=e.scrollTop),e&&!Jn(e)&&typeof o!="number"&&(o=(n=((t=e.ownerDocument)!==null&&t!==void 0?t:e).documentElement)===null||n===void 0?void 0:n.scrollTop),o},Hn=s(75164);function yc(e,t,n,o){const r=n-t;return e/=o/2,e<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t}function Cc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:n=()=>window,callback:o,duration:r=450}=t,i=n(),l=kr(i),d=Date.now(),u=()=>{const f=Date.now()-d,g=yc(f>r?r:f,l,e,r);Jn(i)?i.scrollTo(window.pageXOffset,g):i instanceof Document||i.constructor.name==="HTMLDocument"?i.documentElement.scrollTop=g:i.scrollTop=g,f<r?(0,Hn.Z)(u):typeof o=="function"&&o()};(0,Hn.Z)(u)}var Nr=s(9220);function Sc(e){let t;const n=r=>()=>{t=null,e.apply(void 0,(0,Zt.Z)(r))},o=function(){if(t==null){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];t=(0,Hn.Z)(n(i))}};return o.cancel=()=>{Hn.Z.cancel(t),t=null},o}var Dr=Sc;const wc=e=>{const{componentCls:t}=e;return{[t]:{position:"fixed",zIndex:e.zIndexPopup}}},Oc=e=>({zIndexPopup:e.zIndexBase+10});var $c=(0,re.I$)("Affix",wc,Oc);function An(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Pr(e,t,n){if(n!==void 0&&Math.round(t.top)>Math.round(e.top)-n)return n+t.top}function Rr(e,t,n){if(n!==void 0&&Math.round(t.bottom)<Math.round(e.bottom)+n){const o=window.innerHeight-t.bottom;return n+o}}const Br=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function Ic(){return typeof window!="undefined"?window:null}const Hr=0,Ar=1;var jc=a.forwardRef((e,t)=>{var n;const{style:o,offsetTop:r,offsetBottom:i,prefixCls:l,className:d,rootClassName:u,children:p,target:f,onChange:g}=e,{getPrefixCls:S,getTargetContainer:v}=a.useContext(Y.E_),y=S("affix",l),[b,$]=a.useState(!1),[h,R]=a.useState(),[H,k]=a.useState(),M=a.useRef(Hr),E=a.useRef(null),P=a.useRef(),T=a.useRef(null),Z=a.useRef(null),K=a.useRef(null),X=(n=f!=null?f:v)!==null&&n!==void 0?n:Ic,U=i===void 0&&r===void 0?0:r,J=()=>{if(M.current!==Ar||!Z.current||!T.current||!X)return;const be=X();if(be){const ve={status:Hr},me=An(T.current);if(me.top===0&&me.left===0&&me.width===0&&me.height===0)return;const St=An(be),st=Pr(me,St,U),qe=Rr(me,St,i);st!==void 0?(ve.affixStyle={position:"fixed",top:st,width:me.width,height:me.height},ve.placeholderStyle={width:me.width,height:me.height}):qe!==void 0&&(ve.affixStyle={position:"fixed",bottom:qe,width:me.width,height:me.height},ve.placeholderStyle={width:me.width,height:me.height}),ve.lastAffix=!!ve.affixStyle,b!==ve.lastAffix&&(g==null||g(ve.lastAffix)),M.current=ve.status,R(ve.affixStyle),k(ve.placeholderStyle),$(ve.lastAffix)}},ee=()=>{var be;M.current=Ar,J()},te=Dr(()=>{ee()}),Oe=Dr(()=>{if(X&&h){const be=X();if(be&&T.current){const ve=An(be),me=An(T.current),St=Pr(me,ve,U),st=Rr(me,ve,i);if(St!==void 0&&h.top===St||st!==void 0&&h.bottom===st)return}}ee()}),Q=()=>{const be=X==null?void 0:X();be&&(Br.forEach(ve=>{var me;P.current&&((me=E.current)===null||me===void 0||me.removeEventListener(ve,P.current)),be==null||be.addEventListener(ve,Oe)}),E.current=be,P.current=Oe)},he=()=>{K.current&&(clearTimeout(K.current),K.current=null);const be=X==null?void 0:X();Br.forEach(ve=>{var me;be==null||be.removeEventListener(ve,Oe),P.current&&((me=E.current)===null||me===void 0||me.removeEventListener(ve,P.current))}),te.cancel(),Oe.cancel()};a.useImperativeHandle(t,()=>({updatePosition:te})),a.useEffect(()=>(K.current=setTimeout(Q),()=>he()),[]),a.useEffect(()=>{Q()},[f,h]),a.useEffect(()=>{te()},[f,r,i]);const[nt,Me,pe]=$c(y),ze=N()(u,Me,y,pe),Je=N()({[ze]:h});let vt=(0,Rn.Z)(e,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return nt(a.createElement(Nr.Z,{onResize:te},a.createElement("div",Object.assign({style:o,className:d,ref:T},vt),h&&a.createElement("div",{style:H,"aria-hidden":"true"}),a.createElement("div",{className:Je,ref:Z,style:h},a.createElement(Nr.Z,{onResize:te},p)))))}),Ec=s(35792),zr=a.createContext(void 0),Lr=e=>{const{href:t,title:n,prefixCls:o,children:r,className:i,target:l,replace:d}=e,u=a.useContext(zr),{registerLink:p,unregisterLink:f,scrollTo:g,onClick:S,activeLink:v,direction:y}=u||{};a.useEffect(()=>(p==null||p(t),()=>{f==null||f(t)}),[t]);const b=M=>{S==null||S(M,{title:n,href:t}),g==null||g(t),d&&(M.preventDefault(),window.location.replace(t))},{getPrefixCls:$}=a.useContext(Y.E_),h=$("anchor",o),R=v===t,H=N()(`${h}-link`,i,{[`${h}-link-active`]:R}),k=N()(`${h}-link-title`,{[`${h}-link-title-active`]:R});return a.createElement("div",{className:H},a.createElement("a",{className:k,href:t,title:typeof n=="string"?n:"",target:l,onClick:b},n),y!=="horizontal"?r:null)};const Tc=e=>{const{componentCls:t,holderOffsetBlock:n,motionDurationSlow:o,lineWidthBold:r,colorPrimary:i,lineType:l,colorSplit:d,calc:u}=e;return{[`${t}-wrapper`]:{marginBlockStart:u(n).mul(-1).equal(),paddingBlockStart:n,[t]:Object.assign(Object.assign({},(0,fn.Wf)(e)),{position:"relative",paddingInlineStart:r,[`${t}-link`]:{paddingBlock:e.linkPaddingBlock,paddingInline:`${(0,Xe.bf)(e.linkPaddingInlineStart)} 0`,"&-title":Object.assign(Object.assign({},fn.vS),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${t}-link-title`]:{color:e.colorPrimary},[`${t}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${t}-wrapper-horizontal)`]:{[t]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${(0,Xe.bf)(r)} ${l} ${d}`,content:'" "'},[`${t}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${o} ease-in-out`,width:r,backgroundColor:i,[`&${t}-ink-visible`]:{display:"inline-block"}}}},[`${t}-fixed ${t}-ink ${t}-ink`]:{display:"none"}}}},Mc=e=>{const{componentCls:t,motionDurationSlow:n,lineWidthBold:o,colorPrimary:r}=e;return{[`${t}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`${(0,Xe.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,content:'" "'},[t]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${t}-link:first-of-type`]:{paddingInline:0},[`${t}-ink`]:{position:"absolute",bottom:0,transition:`left ${n} ease-in-out, width ${n} ease-in-out`,height:o,backgroundColor:r}}}}},kc=e=>({linkPaddingBlock:e.paddingXXS,linkPaddingInlineStart:e.padding});var Nc=(0,re.I$)("Anchor",e=>{const{fontSize:t,fontSizeLG:n,paddingXXS:o,calc:r}=e,i=(0,On.IX)(e,{holderOffsetBlock:o,anchorPaddingBlockSecondary:r(o).div(2).equal(),anchorTitleBlock:r(t).div(14).mul(3).equal(),anchorBallSize:r(n).div(2).equal()});return[Tc(i),Mc(i)]},kc);function Dc(){return window}function Zr(e,t){if(!e.getClientRects().length)return 0;const n=e.getBoundingClientRect();return n.width||n.height?t===window?n.top-e.ownerDocument.documentElement.clientTop:n.top-t.getBoundingClientRect().top:n.top}const Wr=/#([\S ]+)$/;var Pc=e=>{var t;const{rootClassName:n,prefixCls:o,className:r,style:i,offsetTop:l,affix:d=!0,showInkInFixed:u=!1,children:p,items:f,direction:g="vertical",bounds:S,targetOffset:v,onClick:y,onChange:b,getContainer:$,getCurrentAnchor:h,replace:R}=e,[H,k]=a.useState([]),[M,E]=a.useState(null),P=a.useRef(M),T=a.useRef(null),Z=a.useRef(null),K=a.useRef(!1),{direction:X,anchor:U,getTargetContainer:J,getPrefixCls:ee}=a.useContext(Y.E_),te=ee("anchor",o),Oe=(0,Ec.Z)(te),[Q,he,nt]=Nc(te,Oe),Me=(t=$!=null?$:J)!==null&&t!==void 0?t:Dc,pe=JSON.stringify(H),ze=(0,_n.Z)(se=>{H.includes(se)||k(fe=>[].concat((0,Zt.Z)(fe),[se]))}),Je=(0,_n.Z)(se=>{H.includes(se)&&k(fe=>fe.filter(Be=>Be!==se))}),vt=()=>{var se;const fe=(se=T.current)===null||se===void 0?void 0:se.querySelector(`.${te}-link-title-active`);if(fe&&Z.current){const{style:Be}=Z.current,rt=g==="horizontal";Be.top=rt?"":`${fe.offsetTop+fe.clientHeight/2}px`,Be.height=rt?"":`${fe.clientHeight}px`,Be.left=rt?`${fe.offsetLeft}px`:"",Be.width=rt?`${fe.clientWidth}px`:"",rt&&xc(fe,{scrollMode:"if-needed",block:"nearest"})}},be=function(se){let fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Be=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const rt=[],Ze=Me();return se.forEach(at=>{const Tt=Wr.exec(at==null?void 0:at.toString());if(!Tt)return;const it=document.getElementById(Tt[1]);if(it){const wt=Zr(it,Ze);wt<=fe+Be&&rt.push({link:at,top:wt})}}),rt.length?rt.reduce((Tt,it)=>it.top>Tt.top?it:Tt).link:""},ve=(0,_n.Z)(se=>{if(P.current===se)return;const fe=typeof h=="function"?h(se):se;E(fe),P.current=fe,b==null||b(se)}),me=a.useCallback(()=>{if(K.current)return;const se=be(H,v!==void 0?v:l||0,S);ve(se)},[pe,v,l]),St=a.useCallback(se=>{ve(se);const fe=Wr.exec(se);if(!fe)return;const Be=document.getElementById(fe[1]);if(!Be)return;const rt=Me(),Ze=kr(rt),at=Zr(Be,rt);let Tt=Ze+at;Tt-=v!==void 0?v:l||0,K.current=!0,Cc(Tt,{getContainer:Me,callback(){K.current=!1}})},[v,l]),st=N()(he,nt,Oe,n,`${te}-wrapper`,{[`${te}-wrapper-horizontal`]:g==="horizontal",[`${te}-rtl`]:X==="rtl"},r,U==null?void 0:U.className),qe=N()(te,{[`${te}-fixed`]:!d&&!u}),Re=N()(`${te}-ink`,{[`${te}-ink-visible`]:M}),Ce=Object.assign(Object.assign({maxHeight:l?`calc(100vh - ${l}px)`:"100vh"},U==null?void 0:U.style),i),ge=se=>Array.isArray(se)?se.map(fe=>a.createElement(Lr,Object.assign({replace:R},fe,{key:fe.key}),g==="vertical"&&ge(fe.children))):null,ot=a.createElement("div",{ref:T,className:st,style:Ce},a.createElement("div",{className:qe},a.createElement("span",{className:Re,ref:Z}),"items"in e?ge(f):p));a.useEffect(()=>{const se=Me();return me(),se==null||se.addEventListener("scroll",me),()=>{se==null||se.removeEventListener("scroll",me)}},[pe]),a.useEffect(()=>{typeof h=="function"&&ve(h(P.current||""))},[h]),a.useEffect(()=>{vt()},[g,h,pe,M]);const Le=a.useMemo(()=>({registerLink:ze,unregisterLink:Je,scrollTo:St,activeLink:M,onClick:y,direction:g}),[M,y,St,g]),Nt=d&&typeof d=="object"?d:void 0;return Q(a.createElement(zr.Provider,{value:Le},d?a.createElement(jc,Object.assign({offsetTop:l,target:Me},Nt),ot):ot))};const Fr=Pc;Fr.Link=Lr;var Vr=Fr,Rc=s(76010),Xr,Ur,Gr,Kr,Bc=(0,Et.kc)(function(e){var t=e.token,n=e.stylish,o=e.prefixCls,r=e.responsive,i=e.css,l=36;return{container:i(Xr||(Xr=(0,V.Z)([`
      grid-area: toc;
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;
      z-index: 10;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),t.tocWidth,r.mobile,t.headerHeight+1,t.colorTextDescription),mobileCtn:i(Ur||(Ur=(0,V.Z)([`
      position: sticky;
      top: `,`px;

      height: `,`px;
      width: 100%;
      z-index: 200;
      background: transparent;
      background: `,`;
    `])),t.headerHeight+1,l,(0,en.m4)(t.colorBgContainer,.8)),expand:i(Gr||(Gr=(0,V.Z)([`
      backdrop-filter: blur(6px);
      border-radius: 0;
      border-bottom: 1px solid `,`;

      box-shadow: `,`;
      width: 100%;
      z-index: 201;
      background: `,`;

      .`,`-collapse-header {
        padding: 8px 16px !important;
      }
    `])),t.colorSplit,t.boxShadowSecondary,(0,en.m4)(t.colorBgContainer,.8),o),anchor:i(Kr||(Kr=(0,V.Z)([`
      `,`
    `])),n.blur)}}),Hc=(0,a.memo)(function(e){var t=e.items,n=e.activeKey,o=e.onChange,r=(0,Rc.Z)("",{value:n,onChange:o}),i=(0,Qt.Z)(r,2),l=i[0],d=i[1],u=Bc(),p=u.styles,f=(0,xn.F)(),g=f.mobile,S=(0,Et.Fg)(),v=t.find(function(b){return b.id===l}),y=(0,a.useMemo)(function(){return t.map(function(b){var $;return{href:"#".concat(b.id),title:b.title,key:b.id,children:($=b.children)===null||$===void 0?void 0:$.map(function(h){return{href:"#".concat(h.id),title:h==null?void 0:h.title,key:h.id}})}})},[t]);return((t==null?void 0:t.length)===0?null:g?(0,c.jsx)(Kn.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,c.jsx)("div",{className:p.mobileCtn,children:(0,c.jsx)(jr,{bordered:!1,ghost:!0,expandIconPosition:"end",expandIcon:function($){var h=$.isActive;return h?(0,c.jsx)(As,{}):(0,c.jsx)(Fs,{})},className:p.expand,children:(0,c.jsx)(jr.Panel,{forceRender:!0,header:v?v.title:"\u76EE\u5F55",children:(0,c.jsx)(Kn.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,c.jsx)(Vr,{onChange:function($){d($.replace("#",""))},targetOffset:S.headerHeight+12,items:y})})},"toc")})})}):(0,c.jsxs)("div",{className:p.container,children:[(0,c.jsx)("h4",{children:"Table of Contents"}),(0,c.jsx)(Vr,{items:y,className:p.anchor,targetOffset:S.headerHeight+12})]}))||null}),Ac=Hc,zc=(0,a.memo)(function(){var e=(0,_.HX)(wn.TL,A());return(0,c.jsx)(Ac,{items:e})}),Lc=zc,Zc=s(72081),Yr,_r,Qr,Wc=(0,Et.kc)(function(e,t){var n=e.css,o=e.cx,r=e.responsive,i=e.token,l=t.hideToc,d=t.hideSidebar;return{layout:n(Yr||(Yr=(0,V.Z)([`
      background-color: `,`;
      background-image: linear-gradient(
        180deg,
        `,` 0%,
        rgba(255, 255, 255, 0) 10%
      );
      display: grid;
      grid-template-columns: `,"px 1fr ",`;
      grid-template-rows: `,`px auto 1fr auto;
      grid-template-areas:
        'head head head'
        '`," title ",`'
        '`," main ",`'
        '`,` footer footer';
      min-height: 100vh;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),i.colorBgLayout,i.colorBgContainer,i.sidebarWidth,l?"":"".concat(i.tocWidth+24,"px"),i.headerHeight,d?"title":"sidebar",l?"title":".",d?"main":"sidebar",l?"main":"toc",d?"footer":"sidebar",r.mobile),toc:n(_r||(_r=(0,V.Z)([`
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),i.tocWidth,r.mobile,i.headerHeight+1,i.colorTextDescription),content:o(n(Qr||(Qr=(0,V.Z)([`
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `]))),n(r({desktop:{maxWidth:i.contentMaxWidth},mobile:{margin:0}})))}}),Fc=(0,a.memo)(function(){var e=(0,j.pC)(),t=(0,xn.F)(),n=t.mobile,o=(0,_.HX)(function(S){return S.routeMeta.frontmatter},A()),r=(0,_.HX)(dl),i=(0,_.HX)(So),l=(0,_.HX)(function(S){return(0,wn.TL)(S).length===0}),d=o.sidebar===!1,u=o.toc===!1||l,p=Wc({hideToc:u,hideSidebar:d}),f=p.styles,g=p.theme;return(0,c.jsxs)("div",{className:f.layout,children:[(0,c.jsx)(j.ql,{children:o.title&&(0,c.jsxs)("title",{children:[o.title," - ",i]})}),(0,c.jsx)(Cr,{}),u?null:(0,c.jsx)(Lc,{}),n||d?null:(0,c.jsx)(Ds.Z,{}),r?(0,c.jsx)(ut.D,{style:{gridArea:"title",paddingBlock:n?24:void 0},children:(0,c.jsx)(cn,{children:(0,c.jsx)(ut.D,{style:{maxWidth:g.contentMaxWidth,width:"100%"},children:(0,c.jsx)(ut.D,{style:{paddingBlock:0,paddingInline:n?16:48},children:(0,c.jsx)(Zc.Z,{})})})})}):null,(0,c.jsx)(ut.D,{style:{zIndex:10,gridArea:"main",margin:n?0:24,marginBottom:n?0:48},children:(0,c.jsx)(cn,{width:"100%",children:(0,c.jsx)(ut.D,{className:f.content,children:(0,c.jsx)(ut.D,{horizontal:!0,children:(0,c.jsx)(fi,{children:e})})})})}),(0,c.jsx)(Io,{})]})}),Vc=Fc,Jr=s(98787),Xc=s(36728),Uc=s(10274);const Gc=e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:r,calc:i}=e,l=i(o).sub(n).equal(),d=i(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},(0,fn.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,Xe.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:d,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},qn=e=>{const{lineWidth:t,fontSizeIcon:n,calc:o}=e,r=e.fontSizeSM;return(0,On.IX)(e,{tagFontSize:r,tagLineHeight:(0,Xe.bf)(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(n).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},eo=e=>({defaultBg:new Uc.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var qr=(0,re.I$)("Tag",e=>{const t=qn(e);return Gc(t)},eo),Kc=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},Yc=a.forwardRef((e,t)=>{const{prefixCls:n,style:o,className:r,checked:i,onChange:l,onClick:d}=e,u=Kc(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:p,tag:f}=a.useContext(Y.E_),g=h=>{l==null||l(!i),d==null||d(h)},S=p("tag",n),[v,y,b]=qr(S),$=N()(S,`${S}-checkable`,{[`${S}-checkable-checked`]:i},f==null?void 0:f.className,r,y,b);return v(a.createElement("span",Object.assign({},u,{ref:t,style:Object.assign(Object.assign({},o),f==null?void 0:f.style),className:$,onClick:g})))}),_c=s(98719);const Qc=e=>(0,_c.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:r,lightColor:i,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:i,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var Jc=(0,re.bk)(["Tag","preset"],e=>{const t=qn(e);return Qc(t)},eo);function qc(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const zn=(e,t,n)=>{const o=qc(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var ed=(0,re.bk)(["Tag","status"],e=>{const t=qn(e);return[zn(t,"success","Success"),zn(t,"processing","Info"),zn(t,"error","Error"),zn(t,"warning","Warning")]},eo),td=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const ea=a.forwardRef((e,t)=>{const{prefixCls:n,className:o,rootClassName:r,style:i,children:l,icon:d,color:u,onClose:p,bordered:f=!0,visible:g}=e,S=td(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:v,direction:y,tag:b}=a.useContext(Y.E_),[$,h]=a.useState(!0),R=(0,Rn.Z)(S,["closeIcon","closable"]);a.useEffect(()=>{g!==void 0&&h(g)},[g]);const H=(0,Jr.o2)(u),k=(0,Jr.yT)(u),M=H||k,E=Object.assign(Object.assign({backgroundColor:u&&!M?u:void 0},b==null?void 0:b.style),i),P=v("tag",n),[T,Z,K]=qr(P),X=N()(P,b==null?void 0:b.className,{[`${P}-${u}`]:M,[`${P}-has-color`]:u&&!M,[`${P}-hidden`]:!$,[`${P}-rtl`]:y==="rtl",[`${P}-borderless`]:!f},o,r,Z,K),U=he=>{he.stopPropagation(),p==null||p(he),!he.defaultPrevented&&h(!1)},[,J]=(0,yn.Z)((0,yn.w)(e),(0,yn.w)(b),{closable:!1,closeIconRender:he=>{const nt=a.createElement("span",{className:`${P}-close-icon`,onClick:U},he);return(0,Yn.wm)(he,nt,Me=>({onClick:pe=>{var ze;(ze=Me==null?void 0:Me.onClick)===null||ze===void 0||ze.call(Me,pe),U(pe)},className:N()(Me==null?void 0:Me.className,`${P}-close-icon`)}))}}),ee=typeof S.onClick=="function"||l&&l.type==="a",te=d||null,Oe=te?a.createElement(a.Fragment,null,te,l&&a.createElement("span",null,l)):l,Q=a.createElement("span",Object.assign({},R,{ref:t,className:X,style:E}),Oe,J,H&&a.createElement(Jc,{key:"preset",prefixCls:P}),k&&a.createElement(ed,{key:"status",prefixCls:P}));return T(ee?a.createElement(Xc.Z,{component:"Tag"},Q):Q)});ea.CheckableTag=Yc;var nd=ea,ta,na,oa,ra,aa,ia,la,sa,ca,da,od=(0,Et.kc)(function(e,t){var n=e.token,o=e.prefixCls,r=e.responsive,i=e.css,l=e.stylish,d=e.isDarkMode,u=e.cx,p=t.rowNum,f=t.hasLink,g="".concat(o,"-features"),S="".concat(g,"-cover"),v="".concat(g,"-description"),y="".concat(g,"-title"),b="".concat(g,"-img"),$=20,h=function(k){return i(ta||(ta=(0,V.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),k,k,k*(22/24))},R=i(na||(na=(0,V.Z)([`
      transition: all `," ",`;
    `])),n.motionDurationSlow,n.motionEaseInOutCirc);return{cell:i(oa||(oa=(0,V.Z)([`
        overflow: hidden;
      `]))),container:i(ra||(ra=(0,V.Z)([`
        `,`;

        z-index: 1;
        padding: 24px;
        border-radius: 24px;

        background: linear-gradient(
          135deg,
          `,`,
          `,`
        );

        position: relative;

        &:hover {
          scale: 1.03;

          background: linear-gradient(
            135deg,
            `,`,
            `,`
          );

          box-shadow: inset 0 0 0 1px `,", ",`;

          .`,` {
            height: `,`px;
            width: 100%;
            padding: 0;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),R,n.colorFillContent,n.colorFillQuaternary,(0,en.$n)(.5,n.colorFillContent),(0,en.$n)(.5,n.colorFillQuaternary),n.colorBorder,n.boxShadowSecondary,S,$*p,b,h(100),v,y,f?14:20),title:u(y,R,i(aa||(aa=(0,V.Z)([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),n.lineHeightHeading3,n.colorText)),desc:u(v,R,i(ia||(ia=(0,V.Z)([`
          color: `,`;

          pointer-events: none;
          quotient {
            color: `,`;
            display: block;
            margin: 12px 0;
            padding-left: 12px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              left: 0;
              display: block;
              border-radius: 2px;
              width: 4px;
              height: 100%;
              background: `,`;
            }
          }
        `])),n.colorTextSecondary,n.colorTextDescription,d?n.colorPrimary:n.colorPrimaryBgHover)),imgContainer:u(S,R,i(la||(la=(0,V.Z)([`
          background: `,`;
          border-radius: 8px;
          opacity: 0.8;

          `,`;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(135deg, `,", ",`);
          }

          &[image-style='light'] {
            background: `,`;
          }

          &[image-style='soon'] {
            opacity: 0.5;
            background: linear-gradient(
              135deg,
              `,`,
              `,` 50%,
              `,`
            );
          }
        `])),n.colorFillContent,h(24),n.gradientColor1,n.gradientColor2,n.colorBgContainer,(0,en.m4)(n.gradientColor2,.3),(0,en.m4)(n.gradientColor2,.3),(0,en.m4)(n.gradientColor1,.3))),img:u(b,R,i(sa||(sa=(0,V.Z)([`
          `,`;
          color: `,`;
        `])),h(20),n.colorWhite)),link:i(ca||(ca=(0,V.Z)([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),R,l.resetLinkColor,n.colorTextDescription,n.colorPrimaryHover),blur:i(da||(da=(0,V.Z)([`
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        `,`;
        scale: 2;
        opacity: `,`;
        `,` {
          display: none;
        }
      `])),l.heroBlurBall,d?.05:.08,r.mobile)}}),rd=function(t){var n=t.image,o=t.className,r=t.title,i=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return n.startsWith("http")||i.test(n)?(0,c.jsx)("img",{className:o,src:n,alt:r}):(0,c.jsx)(cn,{className:o,children:n})},ad=function(t){var n=t.imageType,o=t.row,r=t.column,i=t.hero,l=t.description,d=t.image,u=t.title,p=t.link,f=t.imageStyle,g=t.openExternal,S=o||7,v=od({rowNum:S,hasLink:!!p}),y=v.styles,b=v.theme;return(0,c.jsxs)("div",{className:y.container,style:{gridRow:"span ".concat(S),gridColumn:"span ".concat(r||1),cursor:p?"pointer":"default"},onClick:function(){p&&(g?window.open(p):j.m8.push(p))},children:[(0,c.jsxs)("div",{className:y.cell,children:[d&&(0,c.jsx)(cn,{"image-style":n,className:y.imgContainer,style:f,children:(0,c.jsx)(rd,{className:y.img,image:d,title:u})}),u&&(0,c.jsxs)(ut.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:y.title,children:[u,n==="soon"?(0,c.jsx)(nd,{color:b.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),l&&(0,c.jsx)("p",{dangerouslySetInnerHTML:{__html:l},className:y.desc}),p&&(0,c.jsx)("div",{className:y.link,children:(0,c.jsxs)(j.rU,{to:p,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,c.jsx)(uo,{})]})})]}),i&&(0,c.jsx)("div",{className:y.blur})]})},id=ad,ua,fa,ld=(0,Et.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.responsive,r=e.css,i=e.cx,l="".concat(n,"-features");return{container:i(l,r(ua||(ua=(0,V.Z)([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),t.contentMaxWidth,o({mobile:r(fa||(fa=(0,V.Z)([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}});function ma(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function sd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ma(Object(n),!0).forEach(function(o){(0,L.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ma(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var cd=function(t){var n=t.items,o=t.style,r=ld(),i=r.styles;return n!=null&&n.length?(0,c.jsx)("div",{className:i.container,style:o,children:n.map(function(l){return(0,c.jsx)(id,sd({},l),l.title)})}):null},dd=cd,pa=function(t){return!!t.routeMeta.frontmatter.hero},ud=function(t){var n,o;return!!((n=t.routeMeta.frontmatter.hero)!==null&&n!==void 0&&n.showCustomContent)||!!((o=t.siteData.themeConfig.hero)!==null&&o!==void 0&&o.showCustomContent)},dn=function(t,n){if(n)return n[t.locale.id]?n[t.locale.id]:n},fd=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((o=dn(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||dn(t,t.siteData.themeConfig.title)||t.siteData.themeConfig.name},md=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((o=dn(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||dn(t,t.siteData.themeConfig.description)},pd=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((o=dn(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||dn(t,t.siteData.themeConfig.actions)},gd=function(t){var n;return pa(t)?((n=dn(t,t.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||dn(t,t.siteData.themeConfig.features)||t.routeMeta.frontmatter.features||[]:[]},hd=function(){var t=(0,_.HX)(gd,Eo.X);return t!=null&&t.length?(0,c.jsx)(dd,{items:t,style:{margin:"0 16px"}}):null},vd=hd,ga,bd=(0,Et.kc)(function(e){var t=e.css,n=e.stylish;return{button:t(ga||(ga=(0,V.Z)([`
      border: none;

      `,`
      `,`

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `])),n.heroButtonGradient,n.heroGradientFlow)}}),xd=function(t){var n=t.children,o=bd(),r=o.styles;return(0,c.jsx)(kn.ZP,{size:"large",shape:"round",type:"primary",className:r.button,children:n})},yd=xd,ha,va,ba,xa,ya,Ca,Sa,Cd=(0,Et.kc)(function(e){var t=e.css,n=e.responsive,o=e.token,r=e.stylish,i=e.isDarkMode;return{container:t(ha||(ha=(0,V.Z)([`
    position: relative;
    text-align: center;
    box-sizing: border-box;

    + * {
      position: relative;
    }

    > p {
      margin: 32px;
      color: `,`;
      font-size: 20px;
      line-height: 1.6;

      `,`
    }
  `])),o.colorTextSecondary,n({mobile:{fontSize:16}})),titleContainer:t(va||(va=(0,V.Z)([`
    position: relative;
  `]))),title:t(ba||(ba=(0,V.Z)([`
    font-size: 68px;
    z-index: 10;
    color: transparent;
    margin: 0;
    font-family: AliPuHui, `,`;

    `,`

    b {
      position: relative;
      z-index: 5;
      `,`;
      `,`

      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `])),o.fontFamily,n({mobile:{fontSize:40}}),r.heroGradient,r.heroGradientFlow),titleShadow:t(xa||(xa=(0,V.Z)([`
    position: absolute;
    z-index: 0;
    color: `,`;

    top: 0;
    left: 0;
    font-size: 68px;
    font-family: AliPuHui, `,`;
    font-weight: bold;
    `,`

    `,`

    b {
      color: transparent;
    }
  `])),i?o.colorWhite:o.colorTextBase,o.fontFamily,n({mobile:{fontSize:40}}),r.heroTextShadow),desc:t(ya||(ya=(0,V.Z)([`
    font-size: `,`px;
    color: `,`;

    `,` {
      font-size: `,`px;
      margin: 24px 16px;
    }
  `])),o.fontSizeHeading3,o.colorTextSecondary,n.mobile,o.fontSizeHeading5),actions:t(Ca||(Ca=(0,V.Z)([`
    margin-top: 48px;
    display: flex;
    justify-content: center;

    `,`
  `])),n({mobile:{marginTop:24}})),canvas:t(Sa||(Sa=(0,V.Z)([`
    z-index: 10;
    pointer-events: none;
    position: absolute;
    top: -250px;
    left: 50%;
    transform: translateX(-50%) scale(1.5);
    width: 600px;
    height: 400px;
    opacity: 0.2;
    `,`

    `,` {
      width: 200px;
      height: 300px;
    }
  `])),r.heroBlurBall,n.mobile)}}),Sd=function(t){var n=t.title,o=t.description,r=t.actions,i=Cd(),l=i.styles,d=i.cx;return(0,c.jsxs)(ut.D,{horizontal:!0,distribution:"center",className:l.container,children:[(0,c.jsx)("div",{className:l.canvas}),(0,c.jsxs)(cn,{children:[n&&(0,c.jsxs)("div",{className:l.titleContainer,children:[(0,c.jsx)("h1",{className:l.title,dangerouslySetInnerHTML:{__html:n}}),(0,c.jsx)("div",{className:d(l.titleShadow),dangerouslySetInnerHTML:{__html:n}})]}),o&&(0,c.jsx)("p",{className:l.desc,dangerouslySetInnerHTML:{__html:o}}),!!(r!=null&&r.length)&&(0,c.jsx)(Kn.ZP,{theme:{token:{fontSize:16,controlHeight:40}},children:(0,c.jsx)(ut.D,{horizontal:!0,gap:24,className:l.actions,children:r.map(function(u,p){var f=u.text,g=u.link,S=u.openExternal,v=/^(https?:)?\/\//i.test(g),y=p===0?(0,c.jsx)(yd,{children:f}):(0,c.jsx)(kn.ZP,{size:"large",shape:"round",type:"default",children:f});return v?(0,c.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:y},"".concat(f,"-").concat(p)):(0,c.jsx)(j.rU,{to:g,target:S?"_blank":void 0,rel:"noreferrer",children:y},f)})})})]})]})},wd=Sd,Od=function(){var t=(0,_.HX)(fd),n=(0,_.HX)(md),o=(0,_.HX)(pd);return(0,c.jsx)(wd,{title:t,actions:o,description:n})},$d=Od,wa,Id=(0,Et.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.css,r=e.cx,i="".concat(n,"-home-contents");return{container:r(i,o(wa||(wa=(0,V.Z)([`
        width: 100%;
        max-width: `,`px;
        padding: 0 16px;
        box-sizing: border-box;
      `])),t.contentMaxWidth))}}),jd=(0,a.memo)(function(){var e=(0,_.HX)(So),t=(0,j.pC)(),n=(0,_.HX)(ud),o=Id(),r=o.styles;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(j.ql,{children:(0,c.jsx)("title",{children:e})}),(0,c.jsxs)(ut.D,{align:"center",gap:80,children:[(0,c.jsx)(Cr,{}),(0,c.jsx)($d,{}),(0,c.jsx)(vd,{}),n&&(0,c.jsx)("div",{className:r.container,children:t}),(0,c.jsx)(Io,{})]})]})}),Ed=jd,Oa,Td=(0,Et.vJ)(Oa||(Oa=(0,V.Z)([`
  body {
    margin: 0;
    padding: 0;
    background-color: `,`;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: normal;
    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: bold;
    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),
    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
    font-display: swap;
  }

  /* \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u6837\u5F0F */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    background-color: transparent; // \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u80CC\u666F\u8272

    &-thumb {
      background-color: `,`; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u80CC\u666F\u8272
      border-radius: 4px; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u5706\u89D2\u534A\u5F84
    }

    &-corner {
      display: none;
    }
  }
`])),function(e){return e.theme.colorBgLayout},function(e){var t=e.theme;return t.colorFill}),Md=(0,a.memo)(function(){var e=(0,j.YB)(),t=(0,j.TH)(),n=t.hash,o=(0,_.HX)(function(l){return l.routeMeta.frontmatter}),r=(0,_.HX)(pa),i=(0,_.HX)(function(l){return l.siteData.loading});return(0,a.useEffect)(function(){var l=n.replace("#","");l&&setTimeout(function(){var d=document.getElementById(decodeURIComponent(l));d&&(d.scrollIntoView(),window.scrollBy({top:-80}))},1)},[i,n]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(j.ql,{children:[(0,c.jsx)("html",{lang:e.locale.replace(/-.+$/,"")}),o.title&&(0,c.jsx)("meta",{property:"og:title",content:o.title}),o.description&&(0,c.jsx)("meta",{name:"description",content:o.description}),o.description&&(0,c.jsx)("meta",{property:"og:description",content:o.description}),o.keywords&&(0,c.jsx)("meta",{name:"keywords",content:o.keywords.join(",")}),o.keywords&&(0,c.jsx)("meta",{property:"og:keywords",content:o.keywords.join(",")})]}),r?(0,c.jsx)(Ed,{}):(0,c.jsx)(Vc,{})]})});s.g.__ANTD_CACHE__=C.Y.cache;var kd=function(t){var n=t.children,o=(0,_.HX)(To,A());return(0,c.jsx)(gn,{cache:C.Y.cache,token:o,children:n})},Nd=(0,a.memo)(function(e){var t=e.initState;return(0,c.jsxs)(_.zt,{createStore:function(){return(0,_.MT)(t)},children:[(0,c.jsx)(Ua,{}),(0,c.jsxs)(kd,{children:[(0,c.jsx)(Td,{}),(0,c.jsx)(Md,{})]})]})}),Dd=function(){var e=(0,j.WF)(),t=(0,j.tx)(),n=(0,j.eL)(),o=(0,j.zh)(),r=(0,j.OK)(),i=(0,j.TH)(),l=(0,j.bU)(),d=(0,a.useMemo)(function(){return{siteData:e,navData:r,locale:l,location:i,routeMeta:n,tabMeta:o,sidebar:t}},[]);return(0,c.jsx)(Nd,{initState:d})}},93538:function(B,F,s){"use strict";s.d(F,{K1:function(){return A},TL:function(){return a},e9:function(){return ce},gt:function(){return L}});var C=s(4942);function j(Se,N){var z=Object.keys(Se);if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(Se);N&&(Y=Y.filter(function(We){return Object.getOwnPropertyDescriptor(Se,We).enumerable})),z.push.apply(z,Y)}return z}function G(Se){for(var N=1;N<arguments.length;N++){var z=arguments[N]!=null?arguments[N]:{};N%2?j(Object(z),!0).forEach(function(Y){(0,C.Z)(Se,Y,z[Y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Se,Object.getOwnPropertyDescriptors(z)):j(Object(z)).forEach(function(Y){Object.defineProperty(Se,Y,Object.getOwnPropertyDescriptor(z,Y))})}return Se}var A=function(N){if(N.location.pathname==="/")return"/";var z=N.navData.filter(function(Y){return Y.link!=="/"}).find(function(Y){return N.location.pathname.startsWith(Y.activePath||Y.link)});return(z==null?void 0:z.activePath)||(z==null?void 0:z.link)||""},a=function(N){var z,Y,We=N.routeMeta,bt=We.toc,ft=We.frontmatter;return(z=N.tabMeta)!==null&&z!==void 0&&z.toc&&(bt=N.tabMeta.toc),(Y=N.tabMeta)!==null&&Y!==void 0&&Y.frontmatter&&(ft=N.tabMeta.frontmatter),bt.reduce(function(Ie,re){var ae=function(pt){if(!ft.tocDepth||typeof ft.tocDepth=="number"&&ft.tocDepth>pt-1)return!0};if(re.depth===2&&ae(2))Ie.push(G({},re));else if(re.depth===3&&ae(3)){var je=Ie[Ie.length-1];je&&(je.children=je.children||[],je.children.push(G({},re)))}return Ie},[])},L=function(N){var z;return((z=N.sidebar)===null||z===void 0?void 0:z.map(function(Y){return Y.children}).flat())||[]},ce=function(N){var z=L(N),Y=N.location.pathname,We=z.findIndex(function(bt){return bt.link===Y});return{prev:z[We-1],currentIndex:We,next:z[We+1]}}},40123:function(B,F,s){"use strict";var C=s(67294),j=function(){return C.createElement(C.Fragment,null)};F.Z=j},62705:function(B,F,s){var C=s(55639),j=C.Symbol;B.exports=j},44239:function(B,F,s){var C=s(62705),j=s(89607),G=s(2333),A="[object Null]",a="[object Undefined]",L=C?C.toStringTag:void 0;function ce(Se){return Se==null?Se===void 0?a:A:L&&L in Object(Se)?j(Se):G(Se)}B.exports=ce},27561:function(B,F,s){var C=s(67990),j=/^\s+/;function G(A){return A&&A.slice(0,C(A)+1).replace(j,"")}B.exports=G},31957:function(B,F,s){var C=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g;B.exports=C},89607:function(B,F,s){var C=s(62705),j=Object.prototype,G=j.hasOwnProperty,A=j.toString,a=C?C.toStringTag:void 0;function L(ce){var Se=G.call(ce,a),N=ce[a];try{ce[a]=void 0;var z=!0}catch(We){}var Y=A.call(ce);return z&&(Se?ce[a]=N:delete ce[a]),Y}B.exports=L},2333:function(B){var F=Object.prototype,s=F.toString;function C(j){return s.call(j)}B.exports=C},55639:function(B,F,s){var C=s(31957),j=typeof self=="object"&&self&&self.Object===Object&&self,G=C||j||Function("return this")();B.exports=G},67990:function(B){var F=/\s/;function s(C){for(var j=C.length;j--&&F.test(C.charAt(j)););return j}B.exports=s},23279:function(B,F,s){var C=s(13218),j=s(7771),G=s(14841),A="Expected a function",a=Math.max,L=Math.min;function ce(Se,N,z){var Y,We,bt,ft,Ie,re,ae=0,je=!1,He=!1,pt=!0;if(typeof Se!="function")throw new TypeError(A);N=G(N)||0,C(z)&&(je=!!z.leading,He="maxWait"in z,bt=He?a(G(z.maxWait)||0,N):bt,pt="trailing"in z?!!z.trailing:pt);function Ae(Ue){var Bt=Y,we=We;return Y=We=void 0,ae=Ue,ft=Se.apply(we,Bt),ft}function xt(Ue){return ae=Ue,Ie=setTimeout(Gt,N),je?Ae(Ue):ft}function et(Ue){var Bt=Ue-re,we=Ue-ae,tn=N-Bt;return He?L(tn,bt-we):tn}function c(Ue){var Bt=Ue-re,we=Ue-ae;return re===void 0||Bt>=N||Bt<0||He&&we>=bt}function Gt(){var Ue=j();if(c(Ue))return Dt(Ue);Ie=setTimeout(Gt,et(Ue))}function Dt(Ue){return Ie=void 0,pt&&Y?Ae(Ue):(Y=We=void 0,ft)}function un(){Ie!==void 0&&clearTimeout(Ie),ae=0,Y=re=We=Ie=void 0}function gn(){return Ie===void 0?ft:Dt(j())}function Zt(){var Ue=j(),Bt=c(Ue);if(Y=arguments,We=this,re=Ue,Bt){if(Ie===void 0)return xt(re);if(He)return clearTimeout(Ie),Ie=setTimeout(Gt,N),Ae(re)}return Ie===void 0&&(Ie=setTimeout(Gt,N)),ft}return Zt.cancel=un,Zt.flush=gn,Zt}B.exports=ce},13218:function(B){function F(s){var C=typeof s;return s!=null&&(C=="object"||C=="function")}B.exports=F},37005:function(B){function F(s){return s!=null&&typeof s=="object"}B.exports=F},33448:function(B,F,s){var C=s(44239),j=s(37005),G="[object Symbol]";function A(a){return typeof a=="symbol"||j(a)&&C(a)==G}B.exports=A},7771:function(B,F,s){var C=s(55639),j=function(){return C.Date.now()};B.exports=j},14841:function(B,F,s){var C=s(27561),j=s(13218),G=s(33448),A=NaN,a=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,ce=/^0o[0-7]+$/i,Se=parseInt;function N(z){if(typeof z=="number")return z;if(G(z))return A;if(j(z)){var Y=typeof z.valueOf=="function"?z.valueOf():z;z=j(Y)?Y+"":Y}if(typeof z!="string")return z===0?z:+z;z=C(z);var We=L.test(z);return We||ce.test(z)?Se(z.slice(2),We?2:8):a.test(z)?A:+z}B.exports=N},96446:function(B,F,s){var C=s(37923);function j(G){if(Array.isArray(G))return C(G)}B.exports=j,B.exports.__esModule=!0,B.exports.default=B.exports},96936:function(B){function F(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}B.exports=F,B.exports.__esModule=!0,B.exports.default=B.exports},88619:function(B){function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}B.exports=F,B.exports.__esModule=!0,B.exports.default=B.exports},19632:function(B,F,s){var C=s(96446),j=s(96936),G=s(96263),A=s(88619);function a(L){return C(L)||j(L)||G(L)||A()}B.exports=a,B.exports.__esModule=!0,B.exports.default=B.exports},76248:function(B,F,s){"use strict";s.d(F,{X:function(){return C}});function C(G,A){if(Object.is(G,A))return!0;if(typeof G!="object"||G===null||typeof A!="object"||A===null)return!1;if(G instanceof Map&&A instanceof Map){if(G.size!==A.size)return!1;for(const[L,ce]of G)if(!Object.is(ce,A.get(L)))return!1;return!0}if(G instanceof Set&&A instanceof Set){if(G.size!==A.size)return!1;for(const L of G)if(!A.has(L))return!1;return!0}const a=Object.keys(G);if(a.length!==Object.keys(A).length)return!1;for(const L of a)if(!Object.prototype.hasOwnProperty.call(A,L)||!Object.is(G[L],A[L]))return!1;return!0}var j=(G,A)=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`."),C(G,A))}}]);
}());