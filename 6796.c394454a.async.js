!(function(){var Rd=Object.defineProperty,Bd=Object.defineProperties;var Hd=Object.getOwnPropertyDescriptors;var wa=Object.getOwnPropertySymbols;var Ad=Object.prototype.hasOwnProperty,zd=Object.prototype.propertyIsEnumerable;var Oa=(B,F,s)=>F in B?Rd(B,F,{enumerable:!0,configurable:!0,writable:!0,value:s}):B[F]=s,In=(B,F)=>{for(var s in F||(F={}))Ad.call(F,s)&&Oa(B,s,F[s]);if(wa)for(var s of wa(F))zd.call(F,s)&&Oa(B,s,F[s]);return B},$a=(B,F)=>Bd(B,Hd(F));var An=(B,F,s)=>new Promise((y,I)=>{var U=L=>{try{a(s.next(L))}catch(se){I(se)}},A=L=>{try{a(s.throw(L))}catch(se){I(se)}},a=L=>L.done?y(L.value):Promise.resolve(L.value).then(U,A);a((s=s.apply(B,F)).next())});(self.webpackChunkhezhijian249=self.webpackChunkhezhijian249||[]).push([[6796],{58401:function(B,F,s){"use strict";s.d(F,{F:function(){return Ee}});var y=s(86499),I=s(67294),U=s(8410);function A(){const[,oe]=I.useReducer(re=>re+1,0);return oe}var a=s(29691);const L=["xxl","xl","lg","md","sm","xs"],se=oe=>({xs:`(max-width: ${oe.screenXSMax}px)`,sm:`(min-width: ${oe.screenSM}px)`,md:`(min-width: ${oe.screenMD}px)`,lg:`(min-width: ${oe.screenLG}px)`,xl:`(min-width: ${oe.screenXL}px)`,xxl:`(min-width: ${oe.screenXXL}px)`}),ye=oe=>{const re=oe,Te=[].concat(L).reverse();return Te.forEach((Be,mt)=>{const He=Be.toUpperCase(),yt=`screen${He}Min`,et=`screen${He}`;if(!(re[yt]<=re[et]))throw new Error(`${yt}<=${et} fails : !(${re[yt]}<=${re[et]})`);if(mt<Te.length-1){const c=`screen${He}Max`;if(!(re[et]<=re[c]))throw new Error(`${et}<=${c} fails : !(${re[et]}<=${re[c]})`);const Mt=`screen${Te[mt+1].toUpperCase()}Min`;if(!(re[c]<=re[Mt]))throw new Error(`${c}<=${Mt} fails : !(${re[c]}<=${re[Mt]})`)}}),oe};function N(){const[,oe]=(0,a.ZP)(),re=se(ye(oe));return I.useMemo(()=>{const Te=new Map;let Be=-1,mt={};return{matchHandlers:{},dispatch(He){return mt=He,Te.forEach(yt=>yt(mt)),Te.size>=1},subscribe(He){return Te.size||this.register(),Be+=1,Te.set(Be,He),He(mt),Be},unsubscribe(He){Te.delete(He),Te.size||this.unregister()},unregister(){Object.keys(re).forEach(He=>{const yt=re[He],et=this.matchHandlers[yt];et==null||et.mql.removeListener(et==null?void 0:et.listener)}),Te.clear()},register(){Object.keys(re).forEach(He=>{const yt=re[He],et=Ut=>{let{matches:Mt}=Ut;this.dispatch(Object.assign(Object.assign({},mt),{[He]:Mt}))},c=window.matchMedia(yt);c.addListener(et),this.matchHandlers[yt]={mql:c,listener:et},et(c)})},responsiveMap:re}},[oe])}const z=(oe,re)=>{if(re&&typeof re=="object")for(let Te=0;Te<L.length;Te++){const Be=L[Te];if(oe[Be]&&re[Be]!==void 0)return re[Be]}};function _(){let oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const re=(0,I.useRef)({}),Te=A(),Be=N();return(0,U.Z)(()=>{const mt=Be.subscribe(He=>{re.current=He,oe&&Te()});return()=>Be.unsubscribe(mt)},[]),re.current}var Fe=_;function ht(){return Fe()}var dt={useBreakpoint:ht},Ee=function(){var re=dt.useBreakpoint();return(0,I.useMemo)(function(){return(0,y.f)(re)},[re])}},98787:function(B,F,s){"use strict";s.d(F,{o2:function(){return a},yT:function(){return L}});var y=s(74902),I=s(8796);const U=I.i.map(se=>`${se}-inverse`),A=["success","processing","error","default","warning"];function a(se){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat((0,y.Z)(U),(0,y.Z)(I.i)).includes(se):I.i.includes(se)}function L(se){return A.includes(se)}},99291:function(B,F,s){"use strict";s.d(F,{Z:function(){return Yt}});var y=s(67294),I=s(95480),U=s(93967),A=s.n(U),a=function(C,b){var m={};for(var j in C)Object.prototype.hasOwnProperty.call(C,j)&&b.indexOf(j)<0&&(m[j]=C[j]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,j=Object.getOwnPropertySymbols(C);O<j.length;O++)b.indexOf(j[O])<0&&Object.prototype.propertyIsEnumerable.call(C,j[O])&&(m[j[O]]=C[j[O]]);return m};const L={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},se=y.createContext({}),ye=(()=>{let C=0;return function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return C+=1,`${b}${C}`}})(),N=null;var z=null,_=s(89705),Fe=s(56790),ht=s(98423),dt=s(33603),Ee=s(96159),oe=s(53124),re=s(35792),Be=(0,y.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),mt=function(C,b){var m={};for(var j in C)Object.prototype.hasOwnProperty.call(C,j)&&b.indexOf(j)<0&&(m[j]=C[j]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,j=Object.getOwnPropertySymbols(C);O<j.length;O++)b.indexOf(j[O])<0&&Object.prototype.propertyIsEnumerable.call(C,j[O])&&(m[j[O]]=C[j[O]]);return m},yt=C=>{const{prefixCls:b,className:m,dashed:j}=C,O=mt(C,["prefixCls","className","dashed"]),{getPrefixCls:q}=y.useContext(oe.E_),ue=q("menu",b),ie=A()({[`${ue}-item-divider-dashed`]:!!j},m);return y.createElement(I.iz,Object.assign({className:ie},O))},et=s(50344),c=s(68866),Mt=C=>{var b;const{className:m,children:j,icon:O,title:q,danger:ue}=C,{prefixCls:ie,firstLevel:ee,direction:Ve,disableMenuItemTitleTooltip:Xe,inlineCollapsed:je}=y.useContext(Be),st=bt=>{const Nt=y.createElement("span",{className:`${ie}-title-content`},j);return(!O||y.isValidElement(j)&&j.type==="span")&&j&&bt&&ee&&typeof j=="string"?y.createElement("div",{className:`${ie}-inline-collapsed-noicon`},j.charAt(0)):Nt},{siderCollapsed:Ue}=y.useContext(se);let Me=q;typeof q=="undefined"?Me=ee?j:"":q===!1&&(Me="");const _e={title:Me};!Ue&&!je&&(_e.title=null,_e.open=!1);const it=(0,et.Z)(j).length;let Qe=y.createElement(I.ck,Object.assign({},(0,ht.Z)(C,["title","icon","danger"]),{className:A()({[`${ie}-item-danger`]:ue,[`${ie}-item-only-child`]:(O?it+1:it)===1},m),title:typeof q=="string"?q:void 0}),(0,Ee.Tm)(O,{className:A()(y.isValidElement(O)?(b=O.props)===null||b===void 0?void 0:b.className:"",`${ie}-item-icon`)}),st(je));return Xe||(Qe=y.createElement(c.Z,Object.assign({},_e,{placement:Ve==="rtl"?"left":"right",overlayClassName:`${ie}-inline-collapsed-tooltip`}),Qe)),Qe},ln=function(C,b){var m={};for(var j in C)Object.prototype.hasOwnProperty.call(C,j)&&b.indexOf(j)<0&&(m[j]=C[j]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,j=Object.getOwnPropertySymbols(C);O<j.length;O++)b.indexOf(j[O])<0&&Object.prototype.propertyIsEnumerable.call(C,j[O])&&(m[j[O]]=C[j[O]]);return m};const sn=y.createContext(null),Ft=null;var Ae=sn,be=s(25446),Gt=s(10274),zt=s(14747),mn=s(33507),pn=s(67771),yn=s(50438),jn=s(83559),Cn=s(83262),Sn=C=>{const{componentCls:b,motionDurationSlow:m,horizontalLineHeight:j,colorSplit:O,lineWidth:q,lineType:ue,itemPaddingInline:ie}=C;return{[`${b}-horizontal`]:{lineHeight:j,border:0,borderBottom:`${(0,be.bf)(q)} ${ue} ${O}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${b}-item, ${b}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:ie},[`> ${b}-item:hover,
        > ${b}-item-active,
        > ${b}-submenu ${b}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${b}-item, ${b}-submenu-title`]:{transition:[`border-color ${m}`,`background ${m}`].join(",")},[`${b}-submenu-arrow`]:{display:"none"}}}},Z=C=>{let{componentCls:b,menuArrowOffset:m,calc:j}=C;return{[`${b}-rtl`]:{direction:"rtl"},[`${b}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${b}-rtl${b}-vertical,
    ${b}-submenu-rtl ${b}-vertical`]:{[`${b}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,be.bf)(j(m).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,be.bf)(m)})`}}}}};const ae=C=>Object.assign({},(0,zt.oN)(C));var D=(C,b)=>{const{componentCls:m,itemColor:j,itemSelectedColor:O,groupTitleColor:q,itemBg:ue,subMenuItemBg:ie,itemSelectedBg:ee,activeBarHeight:Ve,activeBarWidth:Xe,activeBarBorderWidth:je,motionDurationSlow:st,motionEaseInOut:Ue,motionEaseOut:Me,itemPaddingInline:_e,motionDurationMid:it,itemHoverColor:Qe,lineType:bt,colorSplit:Nt,itemDisabledColor:ut,dangerItemColor:Dt,dangerItemHoverColor:Rt,dangerItemSelectedColor:$t,dangerItemActiveBg:Bt,dangerItemSelectedBg:ke,popupBg:Ht,itemHoverBg:Vt,itemActiveBg:At,menuSubMenuBg:Lt,horizontalItemSelectedColor:Ne,horizontalItemSelectedBg:Zt,horizontalItemBorderRadius:en,horizontalItemHoverBg:tn}=C;return{[`${m}-${b}, ${m}-${b} > ${m}`]:{color:j,background:ue,[`&${m}-root:focus-visible`]:Object.assign({},ae(C)),[`${m}-item-group-title`]:{color:q},[`${m}-submenu-selected`]:{[`> ${m}-submenu-title`]:{color:O}},[`${m}-item, ${m}-submenu-title`]:{color:j,[`&:not(${m}-item-disabled):focus-visible`]:Object.assign({},ae(C))},[`${m}-item-disabled, ${m}-submenu-disabled`]:{color:`${ut} !important`},[`${m}-item:not(${m}-item-selected):not(${m}-submenu-selected)`]:{[`&:hover, > ${m}-submenu-title:hover`]:{color:Qe}},[`&:not(${m}-horizontal)`]:{[`${m}-item:not(${m}-item-selected)`]:{"&:hover":{backgroundColor:Vt},"&:active":{backgroundColor:At}},[`${m}-submenu-title`]:{"&:hover":{backgroundColor:Vt},"&:active":{backgroundColor:At}}},[`${m}-item-danger`]:{color:Dt,[`&${m}-item:hover`]:{[`&:not(${m}-item-selected):not(${m}-submenu-selected)`]:{color:Rt}},[`&${m}-item:active`]:{background:Bt}},[`${m}-item a`]:{"&, &:hover":{color:"inherit"}},[`${m}-item-selected`]:{color:O,[`&${m}-item-danger`]:{color:$t},"a, a:hover":{color:"inherit"}},[`& ${m}-item-selected`]:{backgroundColor:ee,[`&${m}-item-danger`]:{backgroundColor:ke}},[`&${m}-submenu > ${m}`]:{backgroundColor:Lt},[`&${m}-popup > ${m}`]:{backgroundColor:Ht},[`&${m}-submenu-popup > ${m}`]:{backgroundColor:Ht},[`&${m}-horizontal`]:Object.assign(Object.assign({},b==="dark"?{borderBottom:0}:{}),{[`> ${m}-item, > ${m}-submenu`]:{top:je,marginTop:C.calc(je).mul(-1).equal(),marginBottom:0,borderRadius:en,"&::after":{position:"absolute",insetInline:_e,bottom:0,borderBottom:`${(0,be.bf)(Ve)} solid transparent`,transition:`border-color ${st} ${Ue}`,content:'""'},"&:hover, &-active, &-open":{background:tn,"&::after":{borderBottomWidth:Ve,borderBottomColor:Ne}},"&-selected":{color:Ne,backgroundColor:Zt,"&:hover":{backgroundColor:Zt},"&::after":{borderBottomWidth:Ve,borderBottomColor:Ne}}}}),[`&${m}-root`]:{[`&${m}-inline, &${m}-vertical`]:{borderInlineEnd:`${(0,be.bf)(je)} ${bt} ${Nt}`}},[`&${m}-inline`]:{[`${m}-sub${m}-inline`]:{background:ie},[`${m}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,be.bf)(Xe)} solid ${O}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${it} ${Me}`,`opacity ${it} ${Me}`].join(","),content:'""'},[`&${m}-item-danger`]:{"&::after":{borderInlineEndColor:$t}}},[`${m}-selected, ${m}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${it} ${Ue}`,`opacity ${it} ${Ue}`].join(",")}}}}}};const de=C=>{const{componentCls:b,itemHeight:m,itemMarginInline:j,padding:O,menuArrowSize:q,marginXS:ue,itemMarginBlock:ie,itemWidth:ee,itemPaddingInline:Ve}=C,Xe=C.calc(q).add(O).add(ue).equal();return{[`${b}-item`]:{position:"relative",overflow:"hidden"},[`${b}-item, ${b}-submenu-title`]:{height:m,lineHeight:(0,be.bf)(m),paddingInline:Ve,overflow:"hidden",textOverflow:"ellipsis",marginInline:j,marginBlock:ie,width:ee},[`> ${b}-item,
            > ${b}-submenu > ${b}-submenu-title`]:{height:m,lineHeight:(0,be.bf)(m)},[`${b}-item-group-list ${b}-submenu-title,
            ${b}-submenu-title`]:{paddingInlineEnd:Xe}}};var Oe=C=>{const{componentCls:b,iconCls:m,itemHeight:j,colorTextLightSolid:O,dropdownWidth:q,controlHeightLG:ue,motionEaseOut:ie,paddingXL:ee,itemMarginInline:Ve,fontSizeLG:Xe,motionDurationFast:je,motionDurationSlow:st,paddingXS:Ue,boxShadowSecondary:Me,collapsedWidth:_e,collapsedIconSize:it}=C,Qe={height:j,lineHeight:(0,be.bf)(j),listStylePosition:"inside",listStyleType:"disc"};return[{[b]:{"&-inline, &-vertical":Object.assign({[`&${b}-root`]:{boxShadow:"none"}},de(C))},[`${b}-submenu-popup`]:{[`${b}-vertical`]:Object.assign(Object.assign({},de(C)),{boxShadow:Me})}},{[`${b}-submenu-popup ${b}-vertical${b}-sub`]:{minWidth:q,maxHeight:`calc(100vh - ${(0,be.bf)(C.calc(ue).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${b}-inline`]:{width:"100%",[`&${b}-root`]:{[`${b}-item, ${b}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${st}`,`background ${st}`,`padding ${je} ${ie}`].join(","),[`> ${b}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${b}-sub${b}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${b}-submenu > ${b}-submenu-title`]:Qe,[`& ${b}-item-group-title`]:{paddingInlineStart:ee}},[`${b}-item`]:Qe}},{[`${b}-inline-collapsed`]:{width:_e,[`&${b}-root`]:{[`${b}-item, ${b}-submenu ${b}-submenu-title`]:{[`> ${b}-inline-collapsed-noicon`]:{fontSize:Xe,textAlign:"center"}}},[`> ${b}-item,
          > ${b}-item-group > ${b}-item-group-list > ${b}-item,
          > ${b}-item-group > ${b}-item-group-list > ${b}-submenu > ${b}-submenu-title,
          > ${b}-submenu > ${b}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,be.bf)(C.calc(Xe).div(2).equal())} - ${(0,be.bf)(Ve)})`,textOverflow:"clip",[`
            ${b}-submenu-arrow,
            ${b}-submenu-expand-icon
          `]:{opacity:0},[`${b}-item-icon, ${m}`]:{margin:0,fontSize:it,lineHeight:(0,be.bf)(j),"+ span":{display:"inline-block",opacity:0}}},[`${b}-item-icon, ${m}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${b}-item-icon, ${m}`]:{display:"none"},"a, a:hover":{color:O}},[`${b}-item-group-title`]:Object.assign(Object.assign({},zt.vS),{paddingInline:Ue})}}]};const Ie=C=>{const{componentCls:b,motionDurationSlow:m,motionDurationMid:j,motionEaseInOut:O,motionEaseOut:q,iconCls:ue,iconSize:ie,iconMarginInlineEnd:ee}=C;return{[`${b}-item, ${b}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${m}`,`background ${m}`,`padding calc(${m} + 0.1s) ${O}`].join(","),[`${b}-item-icon, ${ue}`]:{minWidth:ie,fontSize:ie,transition:[`font-size ${j} ${q}`,`margin ${m} ${O}`,`color ${m}`].join(","),"+ span":{marginInlineStart:ee,opacity:1,transition:[`opacity ${m} ${O}`,`margin ${m}`,`color ${m}`].join(",")}},[`${b}-item-icon`]:Object.assign({},(0,zt.Ro)()),[`&${b}-item-only-child`]:{[`> ${ue}, > ${b}-item-icon`]:{marginInlineEnd:0}}},[`${b}-item-disabled, ${b}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${b}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},De=C=>{const{componentCls:b,motionDurationSlow:m,motionEaseInOut:j,borderRadius:O,menuArrowSize:q,menuArrowOffset:ue}=C;return{[`${b}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:C.margin,width:q,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${m} ${j}, opacity ${m}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:C.calc(q).mul(.6).equal(),height:C.calc(q).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:O,transition:[`background ${m} ${j}`,`transform ${m} ${j}`,`top ${m} ${j}`,`color ${m} ${j}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,be.bf)(C.calc(ue).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,be.bf)(ue)})`}}}}},vt=C=>{const{antCls:b,componentCls:m,fontSize:j,motionDurationSlow:O,motionDurationMid:q,motionEaseInOut:ue,paddingXS:ie,padding:ee,colorSplit:Ve,lineWidth:Xe,zIndexPopup:je,borderRadiusLG:st,subMenuItemBorderRadius:Ue,menuArrowSize:Me,menuArrowOffset:_e,lineType:it,groupTitleLineHeight:Qe,groupTitleFontSize:bt}=C;return[{"":{[m]:Object.assign(Object.assign({},(0,zt.dF)()),{"&-hidden":{display:"none"}})},[`${m}-submenu-hidden`]:{display:"none"}},{[m]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,zt.Wf)(C)),(0,zt.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:j,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${O} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${m}-item`]:{flex:"none"}},[`${m}-item, ${m}-submenu, ${m}-submenu-title`]:{borderRadius:C.itemBorderRadius},[`${m}-item-group-title`]:{padding:`${(0,be.bf)(ie)} ${(0,be.bf)(ee)}`,fontSize:bt,lineHeight:Qe,transition:`all ${O}`},[`&-horizontal ${m}-submenu`]:{transition:[`border-color ${O} ${ue}`,`background ${O} ${ue}`].join(",")},[`${m}-submenu, ${m}-submenu-inline`]:{transition:[`border-color ${O} ${ue}`,`background ${O} ${ue}`,`padding ${q} ${ue}`].join(",")},[`${m}-submenu ${m}-sub`]:{cursor:"initial",transition:[`background ${O} ${ue}`,`padding ${O} ${ue}`].join(",")},[`${m}-title-content`]:{transition:`color ${O}`,[`> ${b}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${m}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${m}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:Ve,borderStyle:it,borderWidth:0,borderTopWidth:Xe,marginBlock:Xe,padding:0,"&-dashed":{borderStyle:"dashed"}}}),Ie(C)),{[`${m}-item-group`]:{[`${m}-item-group-list`]:{margin:0,padding:0,[`${m}-item, ${m}-submenu-title`]:{paddingInline:`${(0,be.bf)(C.calc(j).mul(2).equal())} ${(0,be.bf)(ee)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:je,borderRadius:st,boxShadow:"none",transformOrigin:"0 0",[`&${m}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${m}`]:Object.assign(Object.assign(Object.assign({borderRadius:st},Ie(C)),De(C)),{[`${m}-item, ${m}-submenu > ${m}-submenu-title`]:{borderRadius:Ue},[`${m}-submenu-title::after`]:{transition:`transform ${O} ${ue}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:C.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:C.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:C.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:C.paddingXS}}}),De(C)),{[`&-inline-collapsed ${m}-submenu-arrow,
        &-inline ${m}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,be.bf)(_e)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,be.bf)(C.calc(_e).mul(-1).equal())})`}},[`${m}-submenu-open${m}-submenu-inline > ${m}-submenu-title > ${m}-submenu-arrow`]:{transform:`translateY(${(0,be.bf)(C.calc(Me).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,be.bf)(C.calc(_e).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,be.bf)(_e)})`}}})},{[`${b}-layout-header`]:{[m]:{lineHeight:"inherit"}}}]},J=C=>{var b,m,j;const{colorPrimary:O,colorError:q,colorTextDisabled:ue,colorErrorBg:ie,colorText:ee,colorTextDescription:Ve,colorBgContainer:Xe,colorFillAlter:je,colorFillContent:st,lineWidth:Ue,lineWidthBold:Me,controlItemBgActive:_e,colorBgTextHover:it,controlHeightLG:Qe,lineHeight:bt,colorBgElevated:Nt,marginXXS:ut,padding:Dt,fontSize:Rt,controlHeightSM:$t,fontSizeLG:Bt,colorTextLightSolid:ke,colorErrorHover:Ht}=C,Vt=(b=C.activeBarWidth)!==null&&b!==void 0?b:0,At=(m=C.activeBarBorderWidth)!==null&&m!==void 0?m:Ue,Lt=(j=C.itemMarginInline)!==null&&j!==void 0?j:C.marginXXS,Ne=new Gt.C(ke).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:C.zIndexPopupBase+50,radiusItem:C.borderRadiusLG,itemBorderRadius:C.borderRadiusLG,radiusSubMenuItem:C.borderRadiusSM,subMenuItemBorderRadius:C.borderRadiusSM,colorItemText:ee,itemColor:ee,colorItemTextHover:ee,itemHoverColor:ee,colorItemTextHoverHorizontal:O,horizontalItemHoverColor:O,colorGroupTitle:Ve,groupTitleColor:Ve,colorItemTextSelected:O,itemSelectedColor:O,colorItemTextSelectedHorizontal:O,horizontalItemSelectedColor:O,colorItemBg:Xe,itemBg:Xe,colorItemBgHover:it,itemHoverBg:it,colorItemBgActive:st,itemActiveBg:_e,colorSubItemBg:je,subMenuItemBg:je,colorItemBgSelected:_e,itemSelectedBg:_e,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:Vt,colorActiveBarHeight:Me,activeBarHeight:Me,colorActiveBarBorderSize:Ue,activeBarBorderWidth:At,colorItemTextDisabled:ue,itemDisabledColor:ue,colorDangerItemText:q,dangerItemColor:q,colorDangerItemTextHover:q,dangerItemHoverColor:q,colorDangerItemTextSelected:q,dangerItemSelectedColor:q,colorDangerItemBgActive:ie,dangerItemActiveBg:ie,colorDangerItemBgSelected:ie,dangerItemSelectedBg:ie,itemMarginInline:Lt,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:Qe,groupTitleLineHeight:bt,collapsedWidth:Qe*2,popupBg:Nt,itemMarginBlock:ut,itemPaddingInline:Dt,horizontalLineHeight:`${Qe*1.15}px`,iconSize:Rt,iconMarginInlineEnd:$t-Rt,collapsedIconSize:Bt,groupTitleFontSize:Rt,darkItemDisabledColor:new Gt.C(ke).setAlpha(.25).toRgbString(),darkItemColor:Ne,darkDangerItemColor:q,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:ke,darkItemSelectedBg:O,darkDangerItemSelectedBg:q,darkItemHoverBg:"transparent",darkGroupTitleColor:Ne,darkItemHoverColor:ke,darkDangerItemHoverColor:Ht,darkDangerItemSelectedColor:ke,darkDangerItemActiveBg:q,itemWidth:Vt?`calc(100% + ${At}px)`:`calc(100% - ${Lt*2}px)`}};var Ke=function(C){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return(0,jn.I$)("Menu",O=>{const{colorBgElevated:q,controlHeightLG:ue,fontSize:ie,darkItemColor:ee,darkDangerItemColor:Ve,darkItemBg:Xe,darkSubMenuItemBg:je,darkItemSelectedColor:st,darkItemSelectedBg:Ue,darkDangerItemSelectedBg:Me,darkItemHoverBg:_e,darkGroupTitleColor:it,darkItemHoverColor:Qe,darkItemDisabledColor:bt,darkDangerItemHoverColor:Nt,darkDangerItemSelectedColor:ut,darkDangerItemActiveBg:Dt,popupBg:Rt,darkPopupBg:$t}=O,Bt=O.calc(ie).div(7).mul(5).equal(),ke=(0,Cn.IX)(O,{menuArrowSize:Bt,menuHorizontalHeight:O.calc(ue).mul(1.15).equal(),menuArrowOffset:O.calc(Bt).mul(.25).equal(),menuSubMenuBg:q,calc:O.calc,popupBg:Rt}),Ht=(0,Cn.IX)(ke,{itemColor:ee,itemHoverColor:Qe,groupTitleColor:it,itemSelectedColor:st,itemBg:Xe,popupBg:$t,subMenuItemBg:je,itemActiveBg:"transparent",itemSelectedBg:Ue,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:_e,itemDisabledColor:bt,dangerItemColor:Ve,dangerItemHoverColor:Nt,dangerItemSelectedColor:ut,dangerItemActiveBg:Dt,dangerItemSelectedBg:Me,menuSubMenuBg:je,horizontalItemSelectedColor:st,horizontalItemSelectedBg:Ue});return[vt(ke),Sn(ke),Oe(ke),D(ke,"light"),D(Ht,"dark"),Z(ke),(0,mn.Z)(ke),(0,pn.oN)(ke,"slide-up"),(0,pn.oN)(ke,"slide-down"),(0,yn._y)(ke,"zoom-big")]},J,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:m,unitless:{groupTitleLineHeight:!0}})(C,b)},Ye=s(87263),Et=C=>{var b;const{popupClassName:m,icon:j,title:O,theme:q}=C,ue=y.useContext(Be),{prefixCls:ie,inlineCollapsed:ee,theme:Ve}=ue,Xe=(0,I.Xl)();let je;if(!j)je=ee&&!Xe.length&&O&&typeof O=="string"?y.createElement("div",{className:`${ie}-inline-collapsed-noicon`},O.charAt(0)):y.createElement("span",{className:`${ie}-title-content`},O);else{const Me=y.isValidElement(O)&&O.type==="span";je=y.createElement(y.Fragment,null,(0,Ee.Tm)(j,{className:A()(y.isValidElement(j)?(b=j.props)===null||b===void 0?void 0:b.className:"",`${ie}-item-icon`)}),Me?O:y.createElement("span",{className:`${ie}-title-content`},O))}const st=y.useMemo(()=>Object.assign(Object.assign({},ue),{firstLevel:!1}),[ue]),[Ue]=(0,Ye.Cn)("Menu");return y.createElement(Be.Provider,{value:st},y.createElement(I.Wd,Object.assign({},(0,ht.Z)(C,["icon"]),{title:je,popupClassName:A()(ie,m,`${ie}-${q||Ve}`),popupStyle:{zIndex:Ue}})))},ce=function(C,b){var m={};for(var j in C)Object.prototype.hasOwnProperty.call(C,j)&&b.indexOf(j)<0&&(m[j]=C[j]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,j=Object.getOwnPropertySymbols(C);O<j.length;O++)b.indexOf(j[O])<0&&Object.prototype.propertyIsEnumerable.call(C,j[O])&&(m[j[O]]=C[j[O]]);return m};function pt(C){return C===null||C===!1}const kt={item:Mt,submenu:Et,divider:yt};var qt=(0,y.forwardRef)((C,b)=>{var m;const j=y.useContext(Ae),O=j||{},{getPrefixCls:q,getPopupContainer:ue,direction:ie,menu:ee}=y.useContext(oe.E_),Ve=q(),{prefixCls:Xe,className:je,style:st,theme:Ue="light",expandIcon:Me,_internalDisableMenuItemTitleTooltip:_e,inlineCollapsed:it,siderCollapsed:Qe,rootClassName:bt,mode:Nt,selectable:ut,onClick:Dt,overflowedIndicatorPopupClassName:Rt}=C,$t=ce(C,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),Bt=(0,ht.Z)($t,["collapsedWidth"]);(m=O.validator)===null||m===void 0||m.call(O,{mode:Nt});const ke=(0,Fe.zX)(function(){var Ct;Dt==null||Dt.apply(void 0,arguments),(Ct=O.onClick)===null||Ct===void 0||Ct.call(O)}),Ht=O.mode||Nt,Vt=ut!=null?ut:O.selectable,At=y.useMemo(()=>Qe!==void 0?Qe:it,[it,Qe]),Lt={horizontal:{motionName:`${Ve}-slide-up`},inline:(0,dt.Z)(Ve),other:{motionName:`${Ve}-zoom-big`}},Ne=q("menu",Xe||O.prefixCls),Zt=(0,re.Z)(Ne),[en,tn,gn]=Ke(Ne,Zt,!j),hn=A()(`${Ne}-${Ue}`,ee==null?void 0:ee.className,je),nn=y.useMemo(()=>{var Ct,Wt;if(typeof Me=="function"||pt(Me))return Me||null;if(typeof O.expandIcon=="function"||pt(O.expandIcon))return O.expandIcon||null;if(typeof(ee==null?void 0:ee.expandIcon)=="function"||pt(ee==null?void 0:ee.expandIcon))return(ee==null?void 0:ee.expandIcon)||null;const cn=(Ct=Me!=null?Me:O==null?void 0:O.expandIcon)!==null&&Ct!==void 0?Ct:ee==null?void 0:ee.expandIcon;return(0,Ee.Tm)(cn,{className:A()(`${Ne}-submenu-expand-icon`,y.isValidElement(cn)?(Wt=cn.props)===null||Wt===void 0?void 0:Wt.className:void 0)})},[Me,O==null?void 0:O.expandIcon,ee==null?void 0:ee.expandIcon,Ne]),xt=y.useMemo(()=>({prefixCls:Ne,inlineCollapsed:At||!1,direction:ie,firstLevel:!0,theme:Ue,mode:Ht,disableMenuItemTitleTooltip:_e}),[Ne,At,ie,_e,Ue]);return en(y.createElement(Ae.Provider,{value:null},y.createElement(Be.Provider,{value:xt},y.createElement(I.ZP,Object.assign({getPopupContainer:ue,overflowedIndicator:y.createElement(_.Z,null),overflowedIndicatorPopupClassName:A()(Ne,`${Ne}-${Ue}`,Rt),mode:Ht,selectable:Vt,onClick:ke},Bt,{inlineCollapsed:At,style:Object.assign(Object.assign({},ee==null?void 0:ee.style),st),className:hn,prefixCls:Ne,direction:ie,defaultMotions:Lt,expandIcon:nn,ref:b,rootClassName:A()(bt,tn,O.rootClassName,gn,Zt),_internalComponents:kt})))))});const Kt=(0,y.forwardRef)((C,b)=>{const m=(0,y.useRef)(null),j=y.useContext(se);return(0,y.useImperativeHandle)(b,()=>({menu:m.current,focus:O=>{var q;(q=m.current)===null||q===void 0||q.focus(O)}})),y.createElement(qt,Object.assign({ref:m},C,j))});Kt.Item=Mt,Kt.SubMenu=Et,Kt.Divider=yt,Kt.ItemGroup=I.BW;var Yt=Kt},33507:function(B,F){"use strict";const s=y=>({[y.componentCls]:{[`${y.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${y.motionDurationMid} ${y.motionEaseInOut},
        opacity ${y.motionDurationMid} ${y.motionEaseInOut} !important`}},[`${y.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${y.motionDurationMid} ${y.motionEaseInOut},
        opacity ${y.motionDurationMid} ${y.motionEaseInOut} !important`}}});F.Z=s},8796:function(B,F,s){"use strict";s.d(F,{i:function(){return y}});const y=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},98719:function(B,F,s){"use strict";s.d(F,{Z:function(){return I}});var y=s(8796);function I(U,A){return y.i.reduce((a,L)=>{const se=U[`${L}1`],ye=U[`${L}3`],N=U[`${L}6`],z=U[`${L}7`];return Object.assign(Object.assign({},a),A(L,{lightColor:se,lightBorderColor:ye,darkColor:N,textColor:z}))},{})}},68866:function(B,F,s){"use strict";s.d(F,{Z:function(){return En}});var y=s(67294),I=s(93967),U=s.n(I),A=s(92419),a=s(21770),L=s(15382),se=s(87263),ye=s(33603),N=s(25446);function z(Z){const{sizePopupArrow:ae,borderRadiusXS:Ce,borderRadiusOuter:D}=Z,de=ae/2,Se=0,Oe=de,Ie=D*1/Math.sqrt(2),De=de-D*(1-1/Math.sqrt(2)),vt=de-Ce*(1/Math.sqrt(2)),J=D*(Math.sqrt(2)-1)+Ce*(1/Math.sqrt(2)),Ke=2*de-vt,Ye=J,tt=2*de-Ie,Et=De,ce=2*de-Se,pt=Oe,kt=de*Math.sqrt(2)+D*(Math.sqrt(2)-2),Qt=D*(Math.sqrt(2)-1),qt=`polygon(${Qt}px 100%, 50% ${Qt}px, ${2*de-Qt}px 100%, ${Qt}px 100%)`,Kt=`path('M ${Se} ${Oe} A ${D} ${D} 0 0 0 ${Ie} ${De} L ${vt} ${J} A ${Ce} ${Ce} 0 0 1 ${Ke} ${Ye} L ${tt} ${Et} A ${D} ${D} 0 0 0 ${ce} ${pt} Z')`;return{arrowShadowWidth:kt,arrowPath:Kt,arrowPolygon:qt}}const _=(Z,ae,Ce)=>{const{sizePopupArrow:D,arrowPolygon:de,arrowPath:Se,arrowShadowWidth:Oe,borderRadiusXS:Ie,calc:De}=Z;return{pointerEvents:"none",width:D,height:D,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:D,height:De(D).div(2).equal(),background:ae,clipPath:{_multi_value_:!0,value:[de,Se]},content:'""'},"&::after":{content:'""',position:"absolute",width:Oe,height:Oe,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${(0,N.bf)(Ie)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:Ce,zIndex:0,background:"transparent"}}},Fe=8;function ht(Z){const{contentRadius:ae,limitVerticalRadius:Ce}=Z,D=ae>12?ae+2:12;return{arrowOffsetHorizontal:D,arrowOffsetVertical:Ce?Fe:D}}function dt(Z,ae){return Z?ae:{}}function Ee(Z,ae,Ce){const{componentCls:D,boxShadowPopoverArrow:de,arrowOffsetVertical:Se,arrowOffsetHorizontal:Oe}=Z,{arrowDistance:Ie=0,arrowPlacement:De={left:!0,right:!0,top:!0,bottom:!0}}=Ce||{};return{[D]:Object.assign(Object.assign(Object.assign(Object.assign({[`${D}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},_(Z,ae,de)),{"&:before":{background:ae}})]},dt(!!De.top,{[[`&-placement-top > ${D}-arrow`,`&-placement-topLeft > ${D}-arrow`,`&-placement-topRight > ${D}-arrow`].join(",")]:{bottom:Ie,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${D}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":Oe,[`> ${D}-arrow`]:{left:{_skip_check_:!0,value:Oe}}},"&-placement-topRight":{"--arrow-offset-horizontal":`calc(100% - ${(0,N.bf)(Oe)})`,[`> ${D}-arrow`]:{right:{_skip_check_:!0,value:Oe}}}})),dt(!!De.bottom,{[[`&-placement-bottom > ${D}-arrow`,`&-placement-bottomLeft > ${D}-arrow`,`&-placement-bottomRight > ${D}-arrow`].join(",")]:{top:Ie,transform:"translateY(-100%)"},[`&-placement-bottom > ${D}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":Oe,[`> ${D}-arrow`]:{left:{_skip_check_:!0,value:Oe}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":`calc(100% - ${(0,N.bf)(Oe)})`,[`> ${D}-arrow`]:{right:{_skip_check_:!0,value:Oe}}}})),dt(!!De.left,{[[`&-placement-left > ${D}-arrow`,`&-placement-leftTop > ${D}-arrow`,`&-placement-leftBottom > ${D}-arrow`].join(",")]:{right:{_skip_check_:!0,value:Ie},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${D}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${D}-arrow`]:{top:Se},[`&-placement-leftBottom > ${D}-arrow`]:{bottom:Se}})),dt(!!De.right,{[[`&-placement-right > ${D}-arrow`,`&-placement-rightTop > ${D}-arrow`,`&-placement-rightBottom > ${D}-arrow`].join(",")]:{left:{_skip_check_:!0,value:Ie},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${D}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${D}-arrow`]:{top:Se},[`&-placement-rightBottom > ${D}-arrow`]:{bottom:Se}}))}}function oe(Z,ae,Ce,D){if(D===!1)return{adjustX:!1,adjustY:!1};const de=D&&typeof D=="object"?D:{},Se={};switch(Z){case"top":case"bottom":Se.shiftX=ae.arrowOffsetHorizontal*2+Ce,Se.shiftY=!0,Se.adjustY=!0;break;case"left":case"right":Se.shiftY=ae.arrowOffsetVertical*2+Ce,Se.shiftX=!0,Se.adjustX=!0;break}const Oe=Object.assign(Object.assign({},Se),de);return Oe.shiftX||(Oe.adjustX=!0),Oe.shiftY||(Oe.adjustY=!0),Oe}const re={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},Te={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},Be=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function mt(Z){const{arrowWidth:ae,autoAdjustOverflow:Ce,arrowPointAtCenter:D,offset:de,borderRadius:Se,visibleFirst:Oe}=Z,Ie=ae/2,De={};return Object.keys(re).forEach(vt=>{const J=D&&Te[vt]||re[vt],Ke=Object.assign(Object.assign({},J),{offset:[0,0],dynamicInset:!0});switch(De[vt]=Ke,Be.has(vt)&&(Ke.autoArrow=!1),vt){case"top":case"topLeft":case"topRight":Ke.offset[1]=-Ie-de;break;case"bottom":case"bottomLeft":case"bottomRight":Ke.offset[1]=Ie+de;break;case"left":case"leftTop":case"leftBottom":Ke.offset[0]=-Ie-de;break;case"right":case"rightTop":case"rightBottom":Ke.offset[0]=Ie+de;break}const Ye=ht({contentRadius:Se,limitVerticalRadius:!0});if(D)switch(vt){case"topLeft":case"bottomLeft":Ke.offset[0]=-Ye.arrowOffsetHorizontal-Ie;break;case"topRight":case"bottomRight":Ke.offset[0]=Ye.arrowOffsetHorizontal+Ie;break;case"leftTop":case"rightTop":Ke.offset[1]=-Ye.arrowOffsetHorizontal*2+Ie;break;case"leftBottom":case"rightBottom":Ke.offset[1]=Ye.arrowOffsetHorizontal*2-Ie;break}Ke.overflow=oe(vt,Ye,ae,Ce),Oe&&(Ke.htmlRegion="visibleFirst")}),De}var He=s(96159),yt=s(27288),et=s(43945),c=s(53124),Ut=s(29691),Mt=s(14747),ln=s(50438),sn=s(98719),Ft=s(83262),Ae=s(83559);const be=Z=>{const{componentCls:ae,tooltipMaxWidth:Ce,tooltipColor:D,tooltipBg:de,tooltipBorderRadius:Se,zIndexPopup:Oe,controlHeight:Ie,boxShadowSecondary:De,paddingSM:vt,paddingXS:J}=Z;return[{[ae]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Mt.Wf)(Z)),{position:"absolute",zIndex:Oe,display:"block",width:"max-content",maxWidth:Ce,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":de,[`${ae}-inner`]:{minWidth:"1em",minHeight:Ie,padding:`${(0,N.bf)(Z.calc(vt).div(2).equal())} ${(0,N.bf)(J)}`,color:D,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:de,borderRadius:Se,boxShadow:De,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${ae}-inner`]:{borderRadius:Z.min(Se,Fe)}},[`${ae}-content`]:{position:"relative"}}),(0,sn.Z)(Z,(Ke,Ye)=>{let{darkColor:tt}=Ye;return{[`&${ae}-${Ke}`]:{[`${ae}-inner`]:{backgroundColor:tt},[`${ae}-arrow`]:{"--antd-arrow-background-color":tt}}}})),{"&-rtl":{direction:"rtl"}})},Ee(Z,"var(--antd-arrow-background-color)"),{[`${ae}-pure`]:{position:"relative",maxWidth:"none",margin:Z.sizePopupArrow}}]},Gt=Z=>Object.assign(Object.assign({zIndexPopup:Z.zIndexPopupBase+70},ht({contentRadius:Z.borderRadius,limitVerticalRadius:!0})),z((0,Ft.IX)(Z,{borderRadiusOuter:Math.min(Z.borderRadiusOuter,4)})));var zt=function(Z){let ae=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return(0,Ae.I$)("Tooltip",D=>{const{borderRadius:de,colorTextLightSolid:Se,colorBgSpotlight:Oe}=D,Ie=(0,Ft.IX)(D,{tooltipMaxWidth:250,tooltipColor:Se,tooltipBorderRadius:de,tooltipBg:Oe});return[be(Ie),(0,ln._y)(D,"zoom-big-fast")]},Gt,{resetStyle:!1,injectStyle:ae})(Z)},mn=s(98787);function pn(Z,ae){const Ce=(0,mn.o2)(ae),D=U()({[`${Z}-${ae}`]:ae&&Ce}),de={},Se={};return ae&&!Ce&&(de.background=ae,Se["--antd-arrow-background-color"]=ae),{className:D,overlayStyle:de,arrowStyle:Se}}var jn=Z=>{const{prefixCls:ae,className:Ce,placement:D="top",title:de,color:Se,overlayInnerStyle:Oe}=Z,{getPrefixCls:Ie}=y.useContext(c.E_),De=Ie("tooltip",ae),[vt,J,Ke]=zt(De),Ye=pn(De,Se),tt=Ye.arrowStyle,Et=Object.assign(Object.assign({},Oe),Ye.overlayStyle),ce=U()(J,Ke,De,`${De}-pure`,`${De}-placement-${D}`,Ce,Ye.className);return vt(y.createElement("div",{className:ce,style:tt},y.createElement("div",{className:`${De}-arrow`}),y.createElement(A.G,Object.assign({},Z,{className:J,prefixCls:De,overlayInnerStyle:Et}),de)))},Cn=function(Z,ae){var Ce={};for(var D in Z)Object.prototype.hasOwnProperty.call(Z,D)&&ae.indexOf(D)<0&&(Ce[D]=Z[D]);if(Z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var de=0,D=Object.getOwnPropertySymbols(Z);de<D.length;de++)ae.indexOf(D[de])<0&&Object.prototype.propertyIsEnumerable.call(Z,D[de])&&(Ce[D[de]]=Z[D[de]]);return Ce};const Sn=y.forwardRef((Z,ae)=>{var Ce,D;const{prefixCls:de,openClassName:Se,getTooltipContainer:Oe,overlayClassName:Ie,color:De,overlayInnerStyle:vt,children:J,afterOpenChange:Ke,afterVisibleChange:Ye,destroyTooltipOnHide:tt,arrow:Et=!0,title:ce,overlay:pt,builtinPlacements:kt,arrowPointAtCenter:Qt=!1,autoAdjustOverflow:qt=!0}=Z,Kt=!!Et,[,Yt]=(0,Ut.ZP)(),{getPopupContainer:C,getPrefixCls:b,direction:m}=y.useContext(c.E_),j=(0,yt.ln)("Tooltip"),O=y.useRef(null),q=()=>{var xt;(xt=O.current)===null||xt===void 0||xt.forceAlign()};y.useImperativeHandle(ae,()=>{var xt;return{forceAlign:q,forcePopupAlign:()=>{j.deprecated(!1,"forcePopupAlign","forceAlign"),q()},nativeElement:(xt=O.current)===null||xt===void 0?void 0:xt.nativeElement}});const[ue,ie]=(0,a.Z)(!1,{value:(Ce=Z.open)!==null&&Ce!==void 0?Ce:Z.visible,defaultValue:(D=Z.defaultOpen)!==null&&D!==void 0?D:Z.defaultVisible}),ee=!ce&&!pt&&ce!==0,Ve=xt=>{var Ct,Wt;ie(ee?!1:xt),ee||((Ct=Z.onOpenChange)===null||Ct===void 0||Ct.call(Z,xt),(Wt=Z.onVisibleChange)===null||Wt===void 0||Wt.call(Z,xt))},Xe=y.useMemo(()=>{var xt,Ct;let Wt=Qt;return typeof Et=="object"&&(Wt=(Ct=(xt=Et.pointAtCenter)!==null&&xt!==void 0?xt:Et.arrowPointAtCenter)!==null&&Ct!==void 0?Ct:Qt),kt||mt({arrowPointAtCenter:Wt,autoAdjustOverflow:qt,arrowWidth:Kt?Yt.sizePopupArrow:0,borderRadius:Yt.borderRadius,offset:Yt.marginXXS,visibleFirst:!0})},[Qt,Et,kt,Yt]),je=y.useMemo(()=>ce===0?ce:pt||ce||"",[pt,ce]),st=y.createElement(L.Z,{space:!0},typeof je=="function"?je():je),{getPopupContainer:Ue,placement:Me="top",mouseEnterDelay:_e=.1,mouseLeaveDelay:it=.1,overlayStyle:Qe,rootClassName:bt}=Z,Nt=Cn(Z,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),ut=b("tooltip",de),Dt=b(),Rt=Z["data-popover-inject"];let $t=ue;!("open"in Z)&&!("visible"in Z)&&ee&&($t=!1);const Bt=y.isValidElement(J)&&!(0,He.M2)(J)?J:y.createElement("span",null,J),ke=Bt.props,Ht=!ke.className||typeof ke.className=="string"?U()(ke.className,Se||`${ut}-open`):ke.className,[Vt,At,Lt]=zt(ut,!Rt),Ne=pn(ut,De),Zt=Ne.arrowStyle,en=Object.assign(Object.assign({},vt),Ne.overlayStyle),tn=U()(Ie,{[`${ut}-rtl`]:m==="rtl"},Ne.className,bt,At,Lt),[gn,hn]=(0,se.Cn)("Tooltip",Nt.zIndex),nn=y.createElement(A.Z,Object.assign({},Nt,{zIndex:gn,showArrow:Kt,placement:Me,mouseEnterDelay:_e,mouseLeaveDelay:it,prefixCls:ut,overlayClassName:tn,overlayStyle:Object.assign(Object.assign({},Zt),Qe),getTooltipContainer:Ue||Oe||C,ref:O,builtinPlacements:Xe,overlay:st,visible:$t,onVisibleChange:Ve,afterVisibleChange:Ke!=null?Ke:Ye,overlayInnerStyle:en,arrowContent:y.createElement("span",{className:`${ut}-arrow-content`}),motion:{motionName:(0,ye.m)(Dt,"zoom-big-fast",Z.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!tt}),$t?(0,He.Tm)(Bt,{className:Ht}):Bt);return Vt(y.createElement(et.Z.Provider,{value:hn},nn))});Sn._InternalPanelDoNotUseOrYouWillBeFired=jn;var En=Sn},43590:function(B,F,s){"use strict";s.r(F),s.d(F,{default:function(){return Dd}});var y=s(849),I=s(47918),U=s(64063),A=s.n(U),a=s(67294),L=s(4942),se=s(91),ye=s(93967),N=s.n(ye),z=s(27288),_=s(53124),Fe=s(16474),ht=s(94423),dt=s(48311),Ee=s(66968),oe=s(83559);const re=e=>{const{componentCls:t,colorText:n,fontSize:o,lineHeight:r,fontFamily:i}=e;return{[t]:{color:n,fontSize:o,lineHeight:r,fontFamily:i}}},Te=()=>({});var Be=(0,oe.I$)("App",re,Te);const mt=()=>a.useContext(Ee.Z),He=e=>{const{prefixCls:t,children:n,className:o,rootClassName:r,message:i,notification:l,style:d,component:u="div"}=e,{getPrefixCls:p}=(0,a.useContext)(_.E_),f=p("app",t),[g,S,x]=Be(f),w=N()(S,f,o,r,x),h=(0,a.useContext)(Ee.J),$=a.useMemo(()=>({message:Object.assign(Object.assign({},h.message),i),notification:Object.assign(Object.assign({},h.notification),l)}),[i,l,h.message,h.notification]),[v,R]=(0,Fe.Z)($.message),[H,k]=(0,dt.Z)($.notification),[T,M]=(0,ht.Z)(),P=a.useMemo(()=>({message:v,notification:H,modal:T}),[v,H,T]);(0,z.ln)("App")(!(x&&u===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const E=u===!1?a.Fragment:u,W={className:w,style:d};return g(a.createElement(Ee.Z.Provider,{value:P},a.createElement(Ee.J.Provider,{value:$},a.createElement(E,Object.assign({},u===!1?void 0:W),M,R,k,n))))};He.useApp=mt;var yt=He,et=s(25212),c=s(85893),Ut=["children"];function Mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mt(Object(n),!0).forEach(function(o){(0,L.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var sn=function(e){var t=e.children,n=(0,se.Z)(e,Ut);return(0,c.jsx)(et.f,ln(ln({},n),{},{children:(0,c.jsx)(yt,{children:t})}))},Ft=s(74902),Ae=s(97582),be=s(23279),Gt=s.n(be);function zt(e){var t=(0,a.useRef)(e);return t.current=e,t}var mn=zt,pn=function(e){return e!==null&&typeof e=="object"},yn=function(e){return typeof e=="function"},jn=function(e){return typeof e=="string"},Cn=function(e){return typeof e=="boolean"},qn=function(e){return typeof e=="number"},Sn=function(e){return typeof e=="undefined"},En=!1,Z=En,ae=function(e){Z&&(yn(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=mn(e);(0,a.useEffect)(function(){return function(){t.current()}},[])},Ce=ae;function D(e,t){var n;Z&&(yn(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var o=mn(e),r=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,i=(0,a.useMemo)(function(){return Gt()(function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return o.current.apply(o,(0,Ae.ev)([],(0,Ae.CR)(l),!1))},r,t)},[]);return Ce(function(){i.cancel()}),{run:i,cancel:i.cancel,flush:i.flush}}var de=D,Se=function(e){return function(t,n){var o=(0,a.useRef)(!1);e(function(){return function(){o.current=!1}},[]),e(function(){if(!o.current)o.current=!0;else return t()},n)}},Oe=null,Ie=Se(a.useEffect);function De(e,t,n){var o=(0,Ae.CR)((0,a.useState)({}),2),r=o[0],i=o[1],l=de(function(){i({})},n).run;(0,a.useEffect)(function(){return l()},t),Ie(e,[r])}var vt=De,J=s(1320),Ke=s(61688);const Ye=()=>{},tt=Ye(),Et=Object,ce=e=>e===tt,pt=e=>typeof e=="function",kt=(e,t)=>In(In({},e),t),Qt=e=>pt(e.then),qt=new WeakMap;let Kt=0;const Yt=e=>{const t=typeof e,n=e&&e.constructor,o=n==Date;let r,i;if(Et(e)===e&&!o&&n!=RegExp){if(r=qt.get(e),r)return r;if(r=++Kt+"~",qt.set(e,r),n==Array){for(r="@",i=0;i<e.length;i++)r+=Yt(e[i])+",";qt.set(e,r)}if(n==Et){r="#";const l=Et.keys(e).sort();for(;!ce(i=l.pop());)ce(e[i])||(r+=i+":"+Yt(e[i])+",");qt.set(e,r)}}else r=o?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return r},C=new WeakMap,b={},m={},j="undefined",O=typeof window!=j,q=typeof document!=j,ue=()=>O&&typeof window.requestAnimationFrame!=j,ie=(e,t)=>{const n=C.get(e);return[()=>!ce(t)&&e.get(t)||b,o=>{if(!ce(t)){const r=e.get(t);t in m||(m[t]=r),n[5](t,kt(r,o),r||b)}},n[6],()=>!ce(t)&&t in m?m[t]:!ce(t)&&e.get(t)||b]};let ee=!0;const Ve=()=>ee,[Xe,je]=O&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[Ye,Ye],st=()=>{const e=q&&document.visibilityState;return ce(e)||e!=="hidden"},Ue=e=>(q&&document.addEventListener("visibilitychange",e),Xe("focus",e),()=>{q&&document.removeEventListener("visibilitychange",e),je("focus",e)}),Me=e=>{const t=()=>{ee=!0,e()},n=()=>{ee=!1};return Xe("online",t),Xe("offline",n),()=>{je("online",t),je("offline",n)}},_e={isOnline:Ve,isVisible:st},it={initFocus:Ue,initReconnect:Me},Qe=!a.useId,bt=!O||"Deno"in window,Nt=e=>ue()?window.requestAnimationFrame(e):setTimeout(e,1),ut=bt?a.useEffect:a.useLayoutEffect,Dt=typeof navigator!="undefined"&&navigator.connection,Rt=!bt&&Dt&&(["slow-2g","2g"].includes(Dt.effectiveType)||Dt.saveData),$t=e=>{if(pt(e))try{e=e()}catch(n){e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Yt(e):"",[e,t]};let Bt=0;const ke=()=>++Bt,Ht=0,Vt=1,At=2;var Ne={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:Ht,MUTATE_EVENT:At,RECONNECT_EVENT:Vt};function Zt(...e){return An(this,null,function*(){const[t,n,o,r]=e,i=kt({populateCache:!0,throwOnError:!0},typeof r=="boolean"?{revalidate:r}:r||{});let l=i.populateCache;const d=i.rollbackOnError;let u=i.optimisticData;const p=S=>typeof d=="function"?d(S):d!==!1,f=i.throwOnError;if(pt(n)){const S=n,x=[],w=t.keys();for(const h of w)!/^\$(inf|sub)\$/.test(h)&&S(t.get(h)._k)&&x.push(h);return Promise.all(x.map(g))}return g(n);function g(S){return An(this,null,function*(){const[x]=$t(S);if(!x)return;const[w,h]=ie(t,x),[$,v,R,H]=C.get(t),k=()=>{const Y=$[x];return(pt(i.revalidate)?i.revalidate(w().data,S):i.revalidate!==!1)&&(delete R[x],delete H[x],Y&&Y[0])?Y[0](At).then(()=>w().data):w().data};if(e.length<3)return k();let T=o,M;const P=ke();v[x]=[P,0];const E=!ce(u),W=w(),G=W.data,X=W._c,K=ce(X)?G:X;if(E&&(u=pt(u)?u(K,G):u,h({data:u,_c:K})),pt(T))try{T=T(K)}catch(Y){M=Y}if(T&&Qt(T))if(T=yield T.catch(Y=>{M=Y}),P!==v[x][0]){if(M)throw M;return T}else M&&E&&p(M)&&(l=!0,h({data:K,_c:tt}));if(l&&!M)if(pt(l)){const Y=l(T,K);h({data:Y,error:tt,_c:tt})}else h({data:T,error:tt,_c:tt});if(v[x][1]=ke(),Promise.resolve(k()).then(()=>{h({_c:tt})}),M){if(f)throw M;return}return T})}})}const en=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},tn=(e,t)=>{if(!C.has(e)){const n=kt(it,t),o={},r=Zt.bind(tt,e);let i=Ye;const l={},d=(f,g)=>{const S=l[f]||[];return l[f]=S,S.push(g),()=>S.splice(S.indexOf(g),1)},u=(f,g,S)=>{e.set(f,g);const x=l[f];if(x)for(const w of x)w(g,S)},p=()=>{if(!C.has(e)&&(C.set(e,[o,{},{},{},r,u,d]),!bt)){const f=n.initFocus(setTimeout.bind(tt,en.bind(tt,o,Ht))),g=n.initReconnect(setTimeout.bind(tt,en.bind(tt,o,Vt)));i=()=>{f&&f(),g&&g(),C.delete(e)}}};return p(),[e,r,p,i]}return[e,C.get(e)[4]]},gn=(e,t,n,o,r)=>{const i=n.errorRetryCount,l=r.retryCount,d=~~((Math.random()+.5)*(1<<(l<8?l:8)))*n.errorRetryInterval;!ce(i)&&l>i||setTimeout(o,d,r)},hn=(e,t)=>Yt(e)==Yt(t),[nn,xt]=tn(new Map),Ct=kt({onLoadingSlow:Ye,onSuccess:Ye,onError:Ye,onErrorRetry:gn,onDiscarded:Ye,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Rt?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Rt?5e3:3e3,compare:hn,isPaused:()=>!1,cache:nn,mutate:xt,fallback:{}},_e),Wt=(e,t)=>{const n=kt(e,t);if(t){const{use:o,fallback:r}=e,{use:i,fallback:l}=t;o&&i&&(n.use=o.concat(i)),r&&l&&(n.fallback=kt(r,l))}return n},cn=(0,a.createContext)({}),Ia=e=>{const{value:t}=e,n=(0,a.useContext)(cn),o=pt(t),r=(0,a.useMemo)(()=>o?t(n):t,[o,n,t]),i=(0,a.useMemo)(()=>o?r:Wt(n,r),[o,n,r]),l=r&&r.provider,d=(0,a.useRef)(tt);l&&!d.current&&(d.current=tn(l(i.cache||nn),r));const u=d.current;return u&&(i.cache=u[0],i.mutate=u[1]),ut(()=>{if(u)return u[2]&&u[2](),u[3]},[]),(0,a.createElement)(cn.Provider,kt(e,{value:i}))},ja="$inf$",eo=O&&window.__SWR_DEVTOOLS_USE__,Ea=eo?window.__SWR_DEVTOOLS_USE__:[],Ta=()=>{eo&&(window.__SWR_DEVTOOLS_REACT__=a)},to=e=>pt(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],Ma=()=>kt(Ct,(0,a.useContext)(cn)),Ld=(e,t)=>{const[n,o]=$t(e),[,,,r]=C.get(nn);if(r[n])return r[n];const i=t(o);return r[n]=i,i},ka=e=>(t,n,o)=>e(t,n&&((...i)=>{const[l]=$t(t),[,,,d]=C.get(nn);if(l.startsWith(ja))return n(...i);const u=d[l];return ce(u)?n(...i):(delete d[l],u)}),o),Na=Ea.concat(ka),Da=e=>function(...n){const o=Ma(),[r,i,l]=to(n),d=Wt(o,l);let u=e;const{use:p}=d,f=(p||[]).concat(Na);for(let g=f.length;g--;)u=f[g](u);return u(r,i||d.fetcher||null,d)},Pa=(e,t,n)=>{const o=t[e]||(t[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r>=0&&(o[r]=o[o.length-1],o.pop())}},Zd=(e,t)=>(...n)=>{const[o,r,i]=to(n),l=(i.use||[]).concat(t);return e(o,r,$a(In({},i),{use:l}))};Ta();const Wd=e=>serialize(e)[0],no=a.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)}),zn={dedupe:!0},Ra=(e,t,n)=>{const{cache:o,compare:r,suspense:i,fallbackData:l,revalidateOnMount:d,revalidateIfStale:u,refreshInterval:p,refreshWhenHidden:f,refreshWhenOffline:g,keepPreviousData:S}=n,[x,w,h,$]=C.get(o),[v,R]=$t(e),H=(0,a.useRef)(!1),k=(0,a.useRef)(!1),T=(0,a.useRef)(v),M=(0,a.useRef)(t),P=(0,a.useRef)(n),E=()=>P.current,W=()=>E().isVisible()&&E().isOnline(),[G,X,K,Y]=ie(o,v),te=(0,a.useRef)({}).current,Q=ce(l)?n.fallback[v]:l,$e=(xe,pe)=>{for(const nt in te){const Ze=nt;if(Ze==="data"){if(!r(xe[Ze],pe[Ze])&&(!ce(xe[Ze])||!r(ve,pe[Ze])))return!1}else if(pe[Ze]!==xe[Ze])return!1}return!0},ne=(0,a.useMemo)(()=>{const xe=!v||!t?!1:ce(d)?E().isPaused()||i?!1:ce(u)?!0:u:d,pe=Re=>{const ot=kt(Re);return delete ot._k,xe?In({isValidating:!0,isLoading:!0},ot):ot},nt=G(),Ze=Y(),Tt=pe(nt),le=nt===Ze?Tt:pe(Ze);let fe=Tt;return[()=>{const Re=pe(G());return $e(Re,fe)?(fe.data=Re.data,fe.isLoading=Re.isLoading,fe.isValidating=Re.isValidating,fe.error=Re.error,fe):(fe=Re,Re)},()=>le]},[o,v]),we=(0,Ke.useSyncExternalStore)((0,a.useCallback)(xe=>K(v,(pe,nt)=>{$e(nt,pe)||xe()}),[o,v]),ne[0],ne[1]),St=!H.current,ze=x[v]&&x[v].length>0,he=we.data,Le=ce(he)?Q:he,Je=we.error,gt=(0,a.useRef)(Le),ve=S?ce(he)?gt.current:he:Le,ge=ze&&!ce(Je)?!1:St&&!ce(d)?d:E().isPaused()?!1:i?ce(Le)?!1:u:ce(Le)||u,me=!!(v&&t&&St&&ge),wt=ce(we.isValidating)?me:we.isValidating,lt=ce(we.isLoading)?me:we.isLoading,qe=(0,a.useCallback)(xe=>An(this,null,function*(){const pe=M.current;if(!v||!pe||k.current||E().isPaused())return!1;let nt,Ze,Tt=!0;const le=xe||{},fe=!h[v]||!le.dedupe,Re=()=>Qe?!k.current&&v===T.current&&H.current:v===T.current,ot={isValidating:!1,isLoading:!1},We=()=>{X(ot)},rt=()=>{const at=h[v];at&&at[1]===Ze&&delete h[v]},jt={isValidating:!0};ce(G().data)&&(jt.isLoading=!0);try{if(fe&&(X(jt),n.loadingTimeout&&ce(G().data)&&setTimeout(()=>{Tt&&Re()&&E().onLoadingSlow(v,n)},n.loadingTimeout),h[v]=[pe(R),ke()]),[nt,Ze]=h[v],nt=yield nt,fe&&setTimeout(rt,n.dedupingInterval),!h[v]||h[v][1]!==Ze)return fe&&Re()&&E().onDiscarded(v),!1;ot.error=tt;const at=w[v];if(!ce(at)&&(Ze<=at[0]||Ze<=at[1]||at[1]===0))return We(),fe&&Re()&&E().onDiscarded(v),!1;const Ot=G().data;ot.data=r(Ot,nt)?Ot:nt,fe&&Re()&&E().onSuccess(nt,v,n)}catch(at){rt();const Ot=E(),{shouldRetryOnError:fn}=Ot;Ot.isPaused()||(ot.error=at,fe&&Re()&&(Ot.onError(at,v,Ot),(fn===!0||pt(fn)&&fn(at))&&(!E().revalidateOnFocus||!E().revalidateOnReconnect||W())&&Ot.onErrorRetry(at,v,Ot,Pd=>{const Jn=x[v];Jn&&Jn[0]&&Jn[0](Ne.ERROR_REVALIDATE_EVENT,Pd)},{retryCount:(le.retryCount||0)+1,dedupe:!0})))}return Tt=!1,We(),!0}),[v,o]),Pe=(0,a.useCallback)((...xe)=>Zt(o,T.current,...xe),[]);if(ut(()=>{M.current=t,P.current=n,ce(he)||(gt.current=he)}),ut(()=>{if(!v)return;const xe=qe.bind(tt,zn);let pe=0;const Ze=Pa(v,x,(Tt,le={})=>{if(Tt==Ne.FOCUS_EVENT){const fe=Date.now();E().revalidateOnFocus&&fe>pe&&W()&&(pe=fe+E().focusThrottleInterval,xe())}else if(Tt==Ne.RECONNECT_EVENT)E().revalidateOnReconnect&&W()&&xe();else{if(Tt==Ne.MUTATE_EVENT)return qe();if(Tt==Ne.ERROR_REVALIDATE_EVENT)return qe(le)}});return k.current=!1,T.current=v,H.current=!0,X({_k:R}),ge&&(ce(Le)||bt?xe():Nt(xe)),()=>{k.current=!0,Ze()}},[v]),ut(()=>{let xe;function pe(){const Ze=pt(p)?p(G().data):p;Ze&&xe!==-1&&(xe=setTimeout(nt,Ze))}function nt(){!G().error&&(f||E().isVisible())&&(g||E().isOnline())?qe(zn).then(pe):pe()}return pe(),()=>{xe&&(clearTimeout(xe),xe=-1)}},[p,f,g,v]),(0,a.useDebugValue)(ve),i&&ce(Le)&&v){if(!Qe&&bt)throw new Error("Fallback data is required when using suspense in SSR.");M.current=t,P.current=n,k.current=!1;const xe=$[v];if(!ce(xe)){const pe=Pe(xe);no(pe)}if(ce(Je)){const pe=qe(zn);ce(ve)||(pe.status="fulfilled",pe.value=!0),no(pe)}else throw Je}return{mutate:Pe,get data(){return te.data=!0,ve},get error(){return te.error=!0,Je},get isValidating(){return te.isValidating=!0,wt},get isLoading(){return te.isLoading=!0,lt}}},Fd=Et.defineProperty(Ia,"defaultValue",{value:Ct}),Ba=Da(Ra);var oo={frontmatter:{},toc:[],texts:[]},Ha=function(){var t=(0,J.AC)(),n=(0,I.MZ)(),o=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:oo;return n.meta&&Object.keys(n.meta).forEach(function(l){var d,u;(u=(d=i)[l])!==null&&u!==void 0||(d[l]=n.meta[l])}),i};Ba(n.id,I.lZ,{fallback:oo,onSuccess:function(i){t.setState({routeMeta:o(i)})}})},Aa=["setLoading"],za=["setLoading"],La=typeof window!="undefined",ro={},Za=function(t,n){(0,a.useEffect)(function(){a.startTransition(function(){t()})},n)},Wa=function(t,n){vt(function(){t()},n,{wait:32,maxWait:96})},Fa=typeof a.startTransition=="function"?Za:Wa,vn=function(t,n,o){var r=(0,J.AC)(),i=o||function(l,d){return r.setState((0,L.Z)({},l,d))};!La&&!ro[t]&&(i(t,n),ro[t]=!0),Fa(function(){i(t,n)},[n])},Va={"zh-CN":"\u9996\u9875","en-US":"Home"},Xa=function(t){return{title:Va[t],link:"/",activePath:"/"}},Ua=(0,a.memo)(function(){var e=(0,I.WF)(),t=(0,I.tx)(),n=(0,I.zh)(),o=(0,I.OK)(),r=(0,I.TH)(),i=(0,I.bU)(),l=(0,J.AC)();return Ha(),vn("siteData",e,function(){var d=e.setLoading,u=(0,se.Z)(e,Aa),p=l.getState(),f=p.siteData,g=f.setLoading,S=(0,se.Z)(f,za);A()(u,S)||l.setState({siteData:e})}),vn("sidebar",t),vn("location",r),vn("tabMeta",n),vn("locale",i),vn("navData",o,function(){var d=e.themeConfig.hideHomeNav?o:[Xa(i.id)].concat((0,Ft.Z)(o));l.setState({navData:d})}),null}),bn=s(58401),ct=s(17542),Ga=s(50238),Ka=s(48954),Ya=["children","className","prefixCls"];function ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function io(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ao(Object(n),!0).forEach(function(o){(0,L.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ao(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var _a=(0,a.forwardRef)(function(e,t){var n=e.children,o=e.className,r=e.prefixCls,i=(0,se.Z)(e,Ya);return(0,c.jsx)(Ga.Z,io(io({ref:t,internalClassName:"".concat((0,Ka.Gn)(r),"-center"),className:o},i),{},{align:"center",justify:"center",children:n}))}),rn=_a,lo=s(21687),wn=s(93538),ft=s(87462),Qa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ja=Qa,Xt=s(42135),qa=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Ja}))},ei=a.forwardRef(qa),ti=ei,ni={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},oi=ni,ri=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:oi}))},ai=a.forwardRef(ri),so=ai,V=s(30168),It=s(44242),co,uo,fo,mo,ii=(0,It.kc)(function(e){var t=e.token,n=e.css;return{container:n(co||(co=(0,V.Z)([`
    background: `,`;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,`;
    }
  `])),t.colorBgContainer,t.colorFillTertiary),nav:n(uo||(uo=(0,V.Z)([`
    color: `,`;
    font-size: 12px;
  `])),t.colorTextTertiary),title:n(fo||(fo=(0,V.Z)([`
    font-size: 16px;
  `]))),alignmentEnd:n(mo||(mo=(0,V.Z)([`
    justify-content: flex-end;
  `])))}}),li=function(t){var n=t.title,o=t.link,r=t.type,i=ii(),l=i.styles,d=i.cx,u=(0,I.YB)(),p=(0,a.useMemo)(function(){switch(r){case"prev":return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ti,{})," ",u.formatMessage({id:"content.footer.actions.previous"})]});case"next":return(0,c.jsxs)(c.Fragment,{children:[u.formatMessage({id:"content.footer.actions.next"})," ",(0,c.jsx)(so,{})]})}},[r]);return(0,c.jsx)(I.rU,{to:o,children:(0,c.jsxs)(ct.D,{className:l.container,gap:8,children:[(0,c.jsx)(ct.D,{horizontal:!0,gap:4,className:d(l.nav,r==="next"&&l.alignmentEnd),children:p}),(0,c.jsx)(ct.D,{horizontal:!0,className:d(l.title,r==="next"&&l.alignmentEnd),children:n})]})})},po=(0,a.memo)(li);function go(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function ho(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?go(Object(n),!0).forEach(function(o){(0,L.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):go(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var si=function(){var t=(0,J.HX)(wn.e9,A()),n=t.prev,o=t.next,r=(0,bn.F)(),i=r.mobile;return(0,c.jsxs)(ct.D,{horizontal:!i,gap:i?12:0,distribution:"space-between",style:{margin:i?12:0},children:[n?(0,c.jsx)(po,ho({type:"prev"},n)):(0,c.jsx)("div",{}),o?(0,c.jsx)(po,ho({type:"next"},o)):(0,c.jsx)("div",{})]})},ci=(0,a.memo)(si),vo,di=(0,It.kc)(function(e){var t=e.token,n=e.responsive,o=e.isDarkMode,r=e.css;return{content:r(vo||(vo=(0,V.Z)([`
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
  `])),t.colorBgContainer,t.boxShadowTertiary,n.mobile,o?t.colorTextSecondary:t.colorText,t.colorText,t.colorLink,t.colorLinkHover,t.colorLinkActive,o?.8:1,o?t["cyan-7"]:t.colorPrimaryText,o?t["cyan-1"]:t.colorPrimaryBg,t.colorFillTertiary,t.colorBorderSecondary,t.colorTextDescription,t.colorBorder,t.colorText,t.colorTextTertiary)}}),ui=function(t){var n=t.children,o=(0,J.HX)(function(p){return p.siteData.loading}),r=di(),i=r.styles,l=r.cx,d=(0,bn.F)(),u=d.mobile;return(0,c.jsxs)(ct.D,{width:"100%",gap:u?0:24,children:[(0,c.jsxs)("div",{className:l("dumi-antd-style-content",i.content),children:[(0,c.jsx)(lo.Z,{active:!0,paragraph:!0,loading:o}),(0,c.jsx)("div",{style:{display:o?"none":void 0},children:n})]}),(0,c.jsx)(ci,{})]})},fi=(0,a.memo)(ui),Ge=s(25446),dn=s(14747),On=s(83262);const mi=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:o,lineWidth:r,textPaddingInline:i,orientationMargin:l,verticalMarginInline:d}=e;return{[t]:Object.assign(Object.assign({},(0,dn.Wf)(e)),{borderBlockStart:`${(0,Ge.bf)(r)} solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,Ge.bf)(r)} solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,Ge.bf)(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,Ge.bf)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,Ge.bf)(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:i},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${(0,Ge.bf)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:o,borderStyle:"dotted",borderWidth:`${(0,Ge.bf)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},pi=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS});var gi=(0,oe.I$)("Divider",e=>{const t=(0,On.IX)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[mi(t)]},pi,{unitless:{orientationMargin:!0}}),hi=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},vi=e=>{const{getPrefixCls:t,direction:n,divider:o}=a.useContext(_.E_),{prefixCls:r,type:i="horizontal",orientation:l="center",orientationMargin:d,className:u,rootClassName:p,children:f,dashed:g,variant:S="solid",plain:x,style:w}=e,h=hi(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),$=t("divider",r),[v,R,H]=gi($),k=!!f,T=l==="left"&&d!=null,M=l==="right"&&d!=null,P=N()($,o==null?void 0:o.className,R,H,`${$}-${i}`,{[`${$}-with-text`]:k,[`${$}-with-text-${l}`]:k,[`${$}-dashed`]:!!g,[`${$}-${S}`]:S!=="solid",[`${$}-plain`]:!!x,[`${$}-rtl`]:n==="rtl",[`${$}-no-default-orientation-margin-left`]:T,[`${$}-no-default-orientation-margin-right`]:M},u,p),E=a.useMemo(()=>typeof d=="number"?d:/^\d+$/.test(d)?Number(d):d,[d]),W=Object.assign(Object.assign({},T&&{marginLeft:E}),M&&{marginRight:E});return v(a.createElement("div",Object.assign({className:P,style:Object.assign(Object.assign({},o==null?void 0:o.style),w)},h,{role:"separator"}),f&&i!=="vertical"&&a.createElement("span",{className:`${$}-inner-text`,style:W},f)))},Pt=s(1413),bi=function(t){var n=t.prefixCls,o=t.icon,r=t.title,i=t.items,l=i===void 0?[]:i,d=t.style,u=t.className;return a.createElement("div",{className:N()("".concat(n,"-column"),u),style:d},(r||o)&&a.createElement("h2",null,o&&a.createElement("span",{className:"".concat(n,"-column-icon")},o),r),l.map(function(p,f){var g=p.LinkComponent||"a";return a.createElement("div",{className:N()("".concat(n,"-item"),p.className),style:p.style,key:f},a.createElement(g,{href:p.url,to:typeof g!="string"?p.url:void 0,target:p.openExternal?"_blank":void 0,rel:p.openExternal?"noopener noreferrer":void 0},p.icon&&a.createElement("span",{className:"".concat(n,"-item-icon")},p.icon),p.title),p.description&&a.createElement(a.Fragment,null,a.createElement("span",{className:"".concat(n,"-item-separator")},"-"),a.createElement("span",{className:"".concat(n,"-item-description")},p.description)))}))},xi=bi,yi=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],Ci=function(t){var n=t.prefixCls,o=n===void 0?"rc-footer":n,r=t.className,i=t.style,l=t.bottom,d=t.columns,u=t.maxColumnsPerRow,p=t.backgroundColor,f=t.columnLayout,g=t.theme,S=g===void 0?"dark":g,x=(0,se.Z)(t,yi),w=N()("".concat(o),r,(0,L.Z)({},"".concat(o,"-").concat(S),!!S)),h=typeof u=="number"&&u>0;return a.createElement("footer",(0,Pt.Z)((0,Pt.Z)({},x),{},{className:w,style:(0,Pt.Z)((0,Pt.Z)({},i),{},{backgroundColor:p})}),a.createElement("section",{className:"".concat(o,"-container")},d&&d.length>0&&a.createElement("section",{className:"".concat(o,"-columns"),style:{justifyContent:f,flexWrap:h?"wrap":void 0}},d.map(function($,v){var R=$.title,H=$.icon,k=$.style,T=$.className,M=$.items,P=M===void 0?[]:M,E=(0,Pt.Z)({},k);return h&&(E.flex="0 0 ".concat(100/(u+1)+.1,"%")),a.createElement(xi,{key:v,prefixCls:o,title:R,icon:H,items:P,style:E,className:T})}))),l&&a.createElement("section",{className:"".concat(o,"-bottom")},a.createElement("div",{className:"".concat(o,"-bottom-container")},l)))},Si=Ci,bo,xo,wi=(0,It.kc)(function(e,t){var n=e.css,o=e.responsive,r=e.token,i="rc-footer";return{container:n(bo||(bo=(0,V.Z)([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),r.colorSplit,r.colorTextDescription,o.mobile),footer:n(xo||(xo=(0,V.Z)([`
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
    `])),r.colorTextSecondary,r.colorBgLayout,i,r.colorTextTertiary,r.colorLinkHover,i,r.contentMaxWidth,t?"0":"60px 0 20px",r.colorText,t?"transparent":r.colorBorderSecondary,o.mobile,i)}}),Oi=function(t){var n=t.columns,o=t.bottom,r=t.theme,i=!n||(n==null?void 0:n.length)===0,l=wi(i),d=l.styles;return(0,c.jsx)("div",{className:d.container,children:(0,c.jsx)(Si,{theme:r,className:d.footer,columns:n,bottom:o})})},$i=Oi,yo=function(t){return t.siteData.themeConfig.name},Ln=function(t){var n,o;return((n=t.siteData.themeConfig)===null||n===void 0||(n=n.socialLinks)===null||n===void 0?void 0:n.github)||((o=t.siteData.themeConfig)===null||o===void 0?void 0:o.github)},Ii=function(t){var n=t.siteData.themeConfig.logo;return n?(n.startsWith("http"),n):n||""},ji={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 01-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 016.8-17.2z"}}]},name:"medium",theme:"outlined"},Ei=ji,Ti=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Ei}))},Mi=a.forwardRef(Ti),ki=Mi,Ni={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"},Di=Ni,Pi=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Di}))},Ri=a.forwardRef(Pi),Bi=Ri,Hi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}}]},name:"zhihu",theme:"outlined"},Ai=Hi,zi=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Ai}))},Li=a.forwardRef(zi),Co=Li,Zi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},Wi=Zi,Fi=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Wi}))},Vi=a.forwardRef(Fi),Xi=Vi,Ui={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"}}]},name:"history",theme:"outlined"},Gi=Ui,Ki=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Gi}))},Yi=a.forwardRef(Ki),_i=Yi,Qi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 00-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0026 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 01-49.8 62.2A355.92 355.92 0 01651.1 840a355 355 0 01-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 01-113.3-76.3A353.06 353.06 0 01184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 01138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 00892 694z"}}]},name:"issues-close",theme:"outlined"},Ji=Qi,qi=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Ji}))},el=a.forwardRef(qi),tl=el,nl=function(t){var n=t.github,o={title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Umi",description:"React \u5E94\u7528\u5F00\u53D1\u6846\u67B6",url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:"\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177",url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:"\u5FAE\u524D\u7AEF\u6846\u67B6",url:"https://qiankun.umijs.org",openExternal:!0}]},r={title:"\u793E\u533A",items:[{icon:(0,c.jsx)(ki,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,c.jsx)(Bi,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"Ant Design \u8BED\u96C0\u4E13\u680F",url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,c.jsx)(Co,{style:{color:"#056de8"}}),title:"Ant Design \u77E5\u4E4E\u4E13\u680F",url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,c.jsx)(Co,{style:{color:"#056de8"}}),title:"\u4F53\u9A8C\u79D1\u6280\u4E13\u680F",url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:"SEE Conf-\u8682\u8681\u4F53\u9A8C\u79D1\u6280\u5927\u4F1A",url:"https://seeconf.antfin.com/",openExternal:!0}]},i={icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"\u66F4\u591A\u4EA7\u54C1",items:[{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"\u8BED\u96C0",url:"https://yuque.com",description:"\u77E5\u8BC6\u521B\u4F5C\u4E0E\u5206\u4EAB\u5DE5\u5177",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:"\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:"\u4F01\u4E1A\u7EA7 Node.js \u6846\u67B6",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:"Sketch \u5DE5\u5177\u96C6",url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:"\u8682\u8681\u4F53\u9A8C\u79D1\u6280",url:"https://xtech.antfin.com/",openExternal:!0}]},l={title:"\u5E2E\u52A9",items:[n?{icon:(0,c.jsx)(Xi,{}),title:"GitHub",url:n,openExternal:!0}:void 0,{icon:(0,c.jsx)(_i,{}),title:"\u66F4\u65B0\u65E5\u5FD7",url:"/changelog",LinkComponent:I.rU},n?{icon:(0,c.jsx)(tl,{}),title:"\u8BA8\u8BBA",url:"".concat(n,"/issues"),openExternal:!0}:void 0].filter(Boolean)};return[o,r,l,i]},So,wo,ol=(0,It.kc)(function(e){var t=e.css,n=e.responsive,o=e.token,r="rc-footer";return{container:t(So||(So=(0,V.Z)([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),o.colorSplit,o.colorTextDescription,n.mobile),footer:t(wo||(wo=(0,V.Z)([`
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
    `])),o.colorTextSecondary,o.colorBgLayout,r,o.colorTextTertiary,o.colorLinkHover,r,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,n.mobile,r)}}),rl=function(){var t=(0,J.HX)(function(w){return w.siteData}),n=t.themeConfig,o=t.pkg,r=(0,J.HX)(Ln),i=ol(),l=i.styles,d=i.theme,u=(0,bn.F)(),p=u.mobile;if(!n.footer)return null;var f=n.footerConfig,g=f!=null&&f.columns?f.columns:nl({github:r||o.homepage}),S=(f==null?void 0:f.bottom)||n.footer,x=(f==null?void 0:f.copyright)||"Copyright \xA9 2022-".concat(new Date().getFullYear());return(0,c.jsx)($i,{theme:(f==null?void 0:f.theme)||d.appearance,columns:g,bottom:p?(0,c.jsxs)(rn,{className:l.container,children:[x,(0,c.jsx)(ct.D,{align:"center",horizontal:!0,dangerouslySetInnerHTML:{__html:S}})]}):(0,c.jsxs)(rn,{horizontal:!0,children:[x,(0,c.jsx)(vi,{type:"vertical"}),(0,c.jsx)("span",{dangerouslySetInnerHTML:{__html:S}})]})})},Oo=rl,_t=s(97685),Tn=s(22543),al=s(27286);function Mn(e){var t=e.pathname,n=e.current,o=e.target,r="base"in n?t.replace(n.base.replace(/\/$/,""),"")||"/":t.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(r).replace(/([^/])\/$/,"$1"):"".concat(r).concat(o.suffix)}var il={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","de-DE":"\u{1F1E9}\u{1F1EA}","pt-BR":"\u{1F1E7}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}"},$o={"zh-CN":"\u4E2D","en-US":"EN"},ll=function(t){var n=t.locale,o=t.current,r=(0,I.TH)(),i=r.pathname,l=(0,a.useState)(function(){return Mn({pathname:i,current:o,target:n})}),d=(0,_t.Z)(l,2),u=d[0],p=d[1];return(0,a.useEffect)(function(){p(Mn({pathname:i,current:o,target:n}))},[i,o.id,n.id]),(0,c.jsx)(I.rU,{to:u,children:(0,c.jsx)(Tn.ZP,{style:{minWidth:34,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:$o[n.id]})})},sl=function(){var t=(0,J.HX)(function(o){return o.siteData.locales}),n=(0,J.HX)(function(o){return o.locale});return t.length<=1?null:t.length>2?(0,c.jsx)(al.Z,{value:t.findIndex(function(o){return o.id===n.id}),onChange:function(r){console.log(Mn({pathname:location.pathname,current:n,target:t[r]})),I.m8.push(Mn({pathname:location.pathname,current:n,target:t[r]}))},options:t.map(function(o){return{value:o.id,label:$o[o.id]}}),renderItem:function(r,i){return"".concat(il[t[i].id]," ").concat(t[i].name)},style:{height:32,minWidth:32,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}):(0,c.jsx)(ll,{locale:t.find(function(o){var r=o.id;return r!==n.id}),current:n})},cl=(0,a.memo)(sl),Io=s(76248),un=s(96486),dl=function(t){var n,o=t.routeMeta.frontmatter;if(t.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var r=["/api","/components"].concat((0,Ft.Z)(((n=t.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return r.some(function(i){return t.location.pathname.startsWith(i)})};function ul(e,t){var n={camel:function(){return(0,un.camelCase)(e)},pascal:function(){return(0,un.upperFirst)((0,un.camelCase)(e))},kebab:function(){return(0,un.kebabCase)(e)},snake:function(){return(0,un.snakeCase)(e)},default:function(){return e}};return(n[t]||n.default)()}var fl=function(t){var n,o,r,i,l,d,u,p,f=Ln(t),g=((n=t.routeMeta)===null||n===void 0?void 0:n.frontmatter)||{},S=(o=t.locale)===null||o===void 0?void 0:o.id,x=function(K){if(f)return K.replace("{github}",f).replace("{atomId}",g.atomId||"").replace(/\{atomId\.([^}]+)}/g,function(Y,te){return ul(g.atomId||"",te)}).replace("{title}",g.title).replace("{locale}",S)},w=function(K){return K===!1?!1:typeof K=="string"},h=((r=t.siteData)===null||r===void 0||(r=r.themeConfig)===null||r===void 0?void 0:r.apiHeader)||{},$=h.pkg,v=$===void 0?(i=t.siteData)===null||i===void 0||(i=i.pkg)===null||i===void 0?void 0:i.name:$,R=h.sourceUrl,H=h.docUrl,k=((l=g.apiHeader)===null||l===void 0?void 0:l.pkg)||v,T=g.atomId||g.title,M=((d=g.apiHeader)===null||d===void 0?void 0:d.defaultImport)||!1,P=((u=g.apiHeader)===null||u===void 0?void 0:u.sourceUrl)||R,E=w(P)?x(P):void 0,W=((p=g.apiHeader)===null||p===void 0?void 0:p.docUrl)||H,G=w(W)?x(W):void 0;return{title:g.title,description:g.description,pkg:k,defaultImport:M,componentName:T,sourceUrl:E,docUrl:G}},jo=function(t){var n=t.routeMeta.frontmatter;return(0,un.merge)({},n.token,t.siteData.themeConfig.siteToken)},ml={apiHeader:fl,flattenSidebar:wn.gt,token:jo,logo:Ii},Eo,pl=(0,It.kc)(function(e){var t=e.css,n=e.responsive,o=e.token;return t(Eo||(Eo=(0,V.Z)([`
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
  `])),o.fontFamily,o.colorText,n.mobile)}),gl=function(){var t=(0,J.HX)(function(f){return f.siteData.themeConfig},A()),n=(0,J.HX)(function(f){return f.locale},A()),o=(0,J.HX)(ml.logo,Io.X),r=pl(),i=r.styles,l=r.cx,d=t.name,u=t.hideNameOnHeader,p=u===void 0?!1:u;return t&&(0,c.jsxs)(I.rU,{className:l(i),to:"base"in n?n.base:"/",children:[!!o&&(0,c.jsx)("img",{src:o,alt:t.name,height:32}),!p&&d]})},To=(0,a.memo)(gl),hl=s(43378),vl={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},bl=vl,xl=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:bl}))},yl=a.forwardRef(xl),Mo=yl,Cl=Object.defineProperty,ko=Object.getOwnPropertySymbols,Sl=Object.prototype.hasOwnProperty,wl=Object.prototype.propertyIsEnumerable,No=(e,t,n)=>t in e?Cl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ol=(e,t)=>{for(var n in t||(t={}))Sl.call(t,n)&&No(e,n,t[n]);if(ko)for(var n of ko(t))wl.call(t,n)&&No(e,n,t[n]);return e};const Do=e=>a.createElement("svg",Ol({viewBox:"0 0 1024 1024"},e),a.createElement("path",{d:"m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}));var Xd="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=",$l=function(e,t,n,o){function r(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function d(f){try{p(o.next(f))}catch(g){l(g)}}function u(f){try{p(o.throw(f))}catch(g){l(g)}}function p(f){f.done?i(f.value):r(f.value).then(d,u)}p((o=o.apply(e,t||[])).next())})};function kn(e){let t=0,n=0,o=e;do t+=o.offsetTop||0,n+=o.offsetLeft||0,o=o.offsetParent;while(o);return{top:t,left:n}}class Il{constructor(t){this.element=t}getHorizontalScroll(){return this.element.scrollLeft}getVerticalScroll(){return this.element.scrollTop}getMaxHorizontalScroll(){return this.element.scrollWidth-this.element.clientWidth}getMaxVerticalScroll(){return this.element.scrollHeight-this.element.clientHeight}getHorizontalElementScrollOffset(t,n){return kn(t).left-kn(n).left}getVerticalElementScrollOffset(t,n){return kn(t).top-kn(n).top}scrollTo(t,n){this.element.scrollLeft=t,this.element.scrollTop=n}}class jl{constructor(){this.element=window}getHorizontalScroll(){return window.scrollX||document.documentElement.scrollLeft}getVerticalScroll(){return window.scrollY||document.documentElement.scrollTop}getMaxHorizontalScroll(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth}getMaxVerticalScroll(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight}getHorizontalElementScrollOffset(t){return(window.scrollX||document.documentElement.scrollLeft)+t.getBoundingClientRect().left}getVerticalElementScrollOffset(t){return(window.scrollY||document.documentElement.scrollTop)+t.getBoundingClientRect().top}scrollTo(t,n){window.scrollTo(t,n)}}const on={elements:[],cancelMethods:[],add:(e,t)=>{on.elements.push(e),on.cancelMethods.push(t)},remove:(e,t)=>{const n=on.elements.indexOf(e);n>-1&&(t&&on.cancelMethods[n](),on.elements.splice(n,1),on.cancelMethods.splice(n,1))}},Po=typeof window!="undefined",El={cancelOnUserAction:!0,easing:e=>--e*e*e+1,elementToScroll:Po?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function Tl(e,t={}){return $l(this,void 0,void 0,function*(){if(Po){if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."}else return new Promise(k=>{k(!1)});let n,o,r,i=Object.assign(Object.assign({},El),t);const l=i.elementToScroll===window,d=!!i.elementToScroll.nodeName;if(!l&&!d)throw"Element to scroll needs to be either window or DOM element.";const u=l?document.documentElement:i.elementToScroll;getComputedStyle(u).getPropertyValue("scroll-behavior")==="smooth"&&console.warn(`${u.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);const f=l?new jl:new Il(i.elementToScroll);if(e instanceof Element){if(r=e,d&&(!i.elementToScroll.contains(r)||i.elementToScroll.isSameNode(r)))throw"options.elementToScroll has to be a parent of scrollToElement";n=f.getHorizontalElementScrollOffset(r,i.elementToScroll),o=f.getVerticalElementScrollOffset(r,i.elementToScroll)}else if(typeof e=="number")n=f.getHorizontalScroll(),o=e;else if(Array.isArray(e)&&e.length===2)n=e[0]===null?f.getHorizontalScroll():e[0],o=e[1]===null?f.getVerticalScroll():e[1];else throw`Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;n+=i.horizontalOffset,o+=i.verticalOffset;const g=f.getMaxHorizontalScroll(),S=f.getHorizontalScroll();n>g&&(n=g);const x=n-S,w=f.getMaxVerticalScroll(),h=f.getVerticalScroll();o>w&&(o=w);const $=o-h,v=Math.abs(Math.round(x/1e3*i.speed)),R=Math.abs(Math.round($/1e3*i.speed));let H=v>R?v:R;return H<i.minDuration?H=i.minDuration:H>i.maxDuration&&(H=i.maxDuration),new Promise((k,T)=>{x===0&&$===0&&k(!0),on.remove(f.element,!0);let M;const P=()=>{K(),cancelAnimationFrame(M),k(!1)};on.add(f.element,P);const E=Q=>Q.preventDefault(),W=i.cancelOnUserAction?P:E,G=i.cancelOnUserAction?{passive:!0}:{passive:!1},X=["wheel","touchstart","keydown","mousedown"],K=()=>{X.forEach(Q=>{f.element.removeEventListener(Q,W,G)})};X.forEach(Q=>{f.element.addEventListener(Q,W,G)});const Y=Date.now(),te=()=>{var Q=Date.now()-Y,$e=Q/H;const ne=Math.round(S+x*i.easing($e)),we=Math.round(h+$*i.easing($e));Q<H&&(ne!==n||we!==o)?(f.scrollTo(ne,we),M=requestAnimationFrame(te)):(f.scrollTo(n,o),cancelAnimationFrame(M),K(),on.remove(f.element,!1),k(!0))};M=requestAnimationFrame(te)})})}var Ml=Tl;function Zn(e,t){return Pl(e)||Dl(e,t)||Nl(e,t)||kl()}function kl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nl(e,t){if(e){if(typeof e=="string")return Ro(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ro(e,t)}}function Ro(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Dl(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,i,l,d=[],u=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(d.push(o.value),d.length!==t);u=!0);}catch(f){p=!0,r=f}finally{try{if(!u&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(p)throw r}}return d}}function Pl(e){if(Array.isArray(e))return e}var Rl=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),a.createElement("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),a.createElement("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"}))},Bl=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"}))},Hl=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"}))},Al=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"}))},zl={title:Rl,page:Bl,content:Hl,demo:Al},Bo=function(t){return a.createElement(a.Fragment,null,t.texts.map(function(n,o){return a.createElement(a.Fragment,{key:o},n.highlighted?a.createElement("mark",null,n.text):n.text)}))},Ll=function(t){var n=(0,a.useCallback)(function(){var d=0,u=[];return t.forEach(function(p){p.title&&u.push({type:"title",value:{title:p.title}}),p.hints.forEach(function(f){u.push({type:"hint",activeIndex:d++,value:f})})}),[u,d]},[t]),o=(0,a.useState)(n),r=Zn(o,2),i=r[0],l=r[1];return(0,a.useEffect)(function(){l(n)},[t]),i},Zl=function(t){var n=Ll(t.data),o=Zn(n,2),r=o[0],i=o[1],l=(0,a.useState)(-1),d=Zn(l,2),u=d[0],p=d[1],f=(0,I.TH)(),g=f.pathname,S=function(h){var $;($=t.onItemSelect)===null||$===void 0||$.call(t,h);var v=new URL(h==null?void 0:h.link,location.origin);(v==null?void 0:v.pathname)===g&&!v.hash&&setTimeout(function(){Ml(0,{maxDuration:300})},1)};(0,a.useEffect)(function(){var w=function($){if($.key==="ArrowDown")p((u+1)%i);else if($.key==="ArrowUp")p((u+i-1)%i);else if($.key==="Enter"&&u>=0){var v=r.find(function(R){return R.type==="hint"&&R.activeIndex===u}).value;I.m8.push(v.link),S==null||S(v),document.activeElement.blur()}["Escape","Enter"].includes($.key)&&p(-1)};return document.addEventListener("keydown",w),function(){return document.removeEventListener("keydown",w)}});var x=null;return t.loading?x=a.createElement("div",{className:"dumi-default-search-empty"},a.createElement(Do,null),a.createElement(I._H,{id:"search.loading"})):t.data.length?x=a.createElement("dl",null,r.map(function(w,h){return w.type==="title"?a.createElement("dt",{key:String(h)},w.value.title):a.createElement("dd",{key:String(h)},a.createElement(I.rU,{to:w.value.link,"data-active":u===w.activeIndex||void 0,onClick:function(){return S==null?void 0:S(w.value)}},a.createElement(zl[w.value.type]),a.createElement("h4",null,a.createElement(Bo,{texts:w.value.highlightTitleTexts})),a.createElement("p",null,a.createElement(Bo,{texts:w.value.highlightTexts}))))})):x=a.createElement("div",{className:"dumi-default-search-empty"},a.createElement(Do,null),a.createElement(I._H,{id:"search.not.found"})),a.createElement("div",{className:"dumi-default-search-result",onMouseEnter:function(){return p(-1)},onMouseDownCapture:function(h){return h.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()}},x)},Ho=Zl,Ao=(0,a.forwardRef)(function(e,t){var n=(0,I.YB)(),o=(0,a.useRef)(!1),r=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,function(){return r.current}),(0,c.jsx)("input",{className:e.className,onCompositionStart:function(){return o.current=!0},onCompositionEnd:function(l){o.current=!1,e.onChange(l.currentTarget.value)},onFocus:e.onFocus,onBlur:e.onBlur,onKeyDown:function(l){["ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),l.key==="Escape"&&!o.current&&l.currentTarget.blur()},onChange:function(l){setTimeout(function(){o.current||e.onChange(l.target.value)},1)},placeholder:n.formatMessage({id:"header.search.placeholder"}),ref:r})}),zo,Lo,Zo,Wl=(0,It.kc)(function(e){var t=e.token,n=e.css;return{modal:n(zo||(zo=(0,V.Z)([`
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `]))),mask:n(Lo||(Lo=(0,V.Z)([`
      background-color: `,`;
      width: 100%;
      height: 100%;
    `])),t.colorBgMask),content:n(Zo||(Zo=(0,V.Z)([`
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
    `])),t.colorBgElevated)}}),Fl=function(t){var n=Wl(),o=n.styles;return(0,a.useEffect)(function(){if(t.visible)document.body.style.overflow="hidden";else{var r;document.body.style.overflow="",(r=t.onClose)===null||r===void 0||r.call(t)}},[t.visible]),t.visible?(0,c.jsxs)("div",{className:o.modal,children:[(0,c.jsx)("div",{className:o.mask,onClick:t.onMaskClick}),(0,c.jsx)("div",{className:o.content,children:t.children})]}):null},Wo,Fo,Vo,Xo,Uo,Vl=(0,It.kc)(function(e){var t=e.token,n=e.responsive,o=e.css,r=e.cx;return{container:o(Wo||(Wo=(0,V.Z)([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),shortcut:r("site-header-shortcut",o(Fo||(Fo=(0,V.Z)([`
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
      `])),t.colorTextDescription,t.colorFillSecondary,t.colorBorderSecondary,n.mobile)),popover:o(Vo||(Vo=(0,V.Z)([`
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
    `])),t.colorBgElevated),svg:r(o(Xo||(Xo=(0,V.Z)([`
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,`;
        transform: translateY(-50%);
      `])),t.colorTextPlaceholder)),input:o(Uo||(Uo=(0,V.Z)([`
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
    `])),t.controlHeightLG,t.colorTextSecondary,t.colorBorder,t.colorBorderSecondary,t.colorBgElevated,t.colorTextPlaceholder)}}),Wn,Go=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(Wn=navigator)===null||Wn===void 0?void 0:Wn.platform:""),Xl=function(t){return["TEXTAREA","INPUT"].includes(t.tagName)||t.contentEditable==="true"},Ul=function(){var t=Vl(),n=t.styles,o=(0,a.useState)(!1),r=(0,_t.Z)(o,2),i=r[0],l=r[1],d=(0,a.useRef)(null),u=(0,a.useRef)(null),p=(0,a.useState)("\u2318"),f=(0,_t.Z)(p,2),g=f[0],S=f[1],x=(0,I.OO)(),w=x.keywords,h=x.setKeywords,$=x.result,v=x.loading,R=(0,a.useState)(!1),H=(0,_t.Z)(R,2),k=H[0],T=H[1];return(0,a.useEffect)(function(){Go||S("Ctrl");var M=function(E){if(((Go?E.metaKey:E.ctrlKey)&&E.key==="k"||E.key==="/"&&!Xl(E.target))&&(E.preventDefault(),d.current)){var W=d.current.getBoundingClientRect(),G=W.top,X=W.bottom,K=W.left,Y=W.right,te=G>=0&&K>=0&&X<=window.innerHeight&&Y<=window.innerWidth;te?d.current.focus():(h(""),T(!0),setTimeout(function(){var Q;(Q=u.current)===null||Q===void 0||Q.focus()}))}E.key==="Escape"&&(E.preventDefault(),T(!1))};return document.addEventListener("keydown",M),function(){return document.removeEventListener("keydown",M)}},[]),(0,c.jsxs)("div",{className:n.container,children:[(0,c.jsx)(Mo,{className:n.svg}),(0,c.jsx)(Ao,{onFocus:function(){return l(!0)},onBlur:function(){setTimeout(function(){l(!1)},1)},onChange:function(P){return h(P)},ref:d,className:n.input}),(0,c.jsxs)("span",{className:n.shortcut,children:[g," K"]}),w.trim()&&i&&($.length||!v)&&!k&&(0,c.jsx)("div",{className:n.popover,children:(0,c.jsx)("section",{children:(0,c.jsx)(Ho,{data:$,loading:v})})}),(0,c.jsxs)(Fl,{visible:k,onMaskClick:function(){T(!1)},onClose:function(){return h("")},children:[(0,c.jsxs)("div",{style:{position:"relative"},children:[(0,c.jsx)(Mo,{className:n.svg}),(0,c.jsx)(Ao,{className:n.input,onFocus:function(){return l(!0)},onBlur:function(){setTimeout(function(){l(!1)},1)},onChange:function(P){return h(P)},ref:u})]}),(0,c.jsx)(Ho,{data:$,loading:v,onItemSelect:function(){T(!1)}})]})]})},Gl=Ul,Kl=s(54535),Ko=s(8410),Yl=a.createContext(null),Yo=a.createContext({}),_o=Yl,Fn=s(29372),$n=s(15105),Nn=s(64217),_l=s(42550),Ql=["prefixCls","className","containerRef"],Jl=function(t){var n=t.prefixCls,o=t.className,r=t.containerRef,i=(0,se.Z)(t,Ql),l=a.useContext(Yo),d=l.panel,u=(0,_l.x1)(d,r);return a.createElement("div",(0,ft.Z)({className:N()("".concat(n,"-content"),o),role:"dialog",ref:u},(0,Nn.Z)(t,{aria:!0}),{"aria-modal":"true"},i))},ql=Jl,Qo=s(80334);function Jo(e){return typeof e=="string"&&String(Number(e))===e?((0,Qo.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}function Ud(e){warning(!("wrapperClassName"in e),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!e.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var qo={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function es(e,t){var n,o,r,i=e.prefixCls,l=e.open,d=e.placement,u=e.inline,p=e.push,f=e.forceRender,g=e.autoFocus,S=e.keyboard,x=e.classNames,w=e.rootClassName,h=e.rootStyle,$=e.zIndex,v=e.className,R=e.id,H=e.style,k=e.motion,T=e.width,M=e.height,P=e.children,E=e.mask,W=e.maskClosable,G=e.maskMotion,X=e.maskClassName,K=e.maskStyle,Y=e.afterOpenChange,te=e.onClose,Q=e.onMouseEnter,$e=e.onMouseOver,ne=e.onMouseLeave,we=e.onClick,St=e.onKeyDown,ze=e.onKeyUp,he=e.styles,Le=e.drawerRender,Je=a.useRef(),gt=a.useRef(),ve=a.useRef();a.useImperativeHandle(t,function(){return Je.current});var ge=function(rt){var jt=rt.keyCode,at=rt.shiftKey;switch(jt){case $n.Z.TAB:{if(jt===$n.Z.TAB){if(!at&&document.activeElement===ve.current){var Ot;(Ot=gt.current)===null||Ot===void 0||Ot.focus({preventScroll:!0})}else if(at&&document.activeElement===gt.current){var fn;(fn=ve.current)===null||fn===void 0||fn.focus({preventScroll:!0})}}break}case $n.Z.ESC:{te&&S&&(rt.stopPropagation(),te(rt));break}}};a.useEffect(function(){if(l&&g){var We;(We=Je.current)===null||We===void 0||We.focus({preventScroll:!0})}},[l]);var me=a.useState(!1),wt=(0,_t.Z)(me,2),lt=wt[0],qe=wt[1],Pe=a.useContext(_o),xe;typeof p=="boolean"?xe=p?{}:{distance:0}:xe=p||{};var pe=(n=(o=(r=xe)===null||r===void 0?void 0:r.distance)!==null&&o!==void 0?o:Pe==null?void 0:Pe.pushDistance)!==null&&n!==void 0?n:180,nt=a.useMemo(function(){return{pushDistance:pe,push:function(){qe(!0)},pull:function(){qe(!1)}}},[pe]);a.useEffect(function(){if(l){var We;Pe==null||(We=Pe.push)===null||We===void 0||We.call(Pe)}else{var rt;Pe==null||(rt=Pe.pull)===null||rt===void 0||rt.call(Pe)}},[l]),a.useEffect(function(){return function(){var We;Pe==null||(We=Pe.pull)===null||We===void 0||We.call(Pe)}},[]);var Ze=E&&a.createElement(Fn.ZP,(0,ft.Z)({key:"mask"},G,{visible:l}),function(We,rt){var jt=We.className,at=We.style;return a.createElement("div",{className:N()("".concat(i,"-mask"),jt,x==null?void 0:x.mask,X),style:(0,Pt.Z)((0,Pt.Z)((0,Pt.Z)({},at),K),he==null?void 0:he.mask),onClick:W&&l?te:void 0,ref:rt})}),Tt=typeof k=="function"?k(d):k,le={};if(lt&&pe)switch(d){case"top":le.transform="translateY(".concat(pe,"px)");break;case"bottom":le.transform="translateY(".concat(-pe,"px)");break;case"left":le.transform="translateX(".concat(pe,"px)");break;default:le.transform="translateX(".concat(-pe,"px)");break}d==="left"||d==="right"?le.width=Jo(T):le.height=Jo(M);var fe={onMouseEnter:Q,onMouseOver:$e,onMouseLeave:ne,onClick:we,onKeyDown:St,onKeyUp:ze},Re=a.createElement(Fn.ZP,(0,ft.Z)({key:"panel"},Tt,{visible:l,forceRender:f,onVisibleChanged:function(rt){Y==null||Y(rt)},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),function(We,rt){var jt=We.className,at=We.style,Ot=a.createElement(ql,(0,ft.Z)({id:R,containerRef:rt,prefixCls:i,className:N()(v,x==null?void 0:x.content),style:(0,Pt.Z)((0,Pt.Z)({},H),he==null?void 0:he.content)},(0,Nn.Z)(e,{aria:!0}),fe),P);return a.createElement("div",(0,ft.Z)({className:N()("".concat(i,"-content-wrapper"),x==null?void 0:x.wrapper,jt),style:(0,Pt.Z)((0,Pt.Z)((0,Pt.Z)({},le),at),he==null?void 0:he.wrapper)},(0,Nn.Z)(e,{data:!0})),Le?Le(Ot):Ot)}),ot=(0,Pt.Z)({},h);return $&&(ot.zIndex=$),a.createElement(_o.Provider,{value:nt},a.createElement("div",{className:N()(i,"".concat(i,"-").concat(d),w,(0,L.Z)((0,L.Z)({},"".concat(i,"-open"),l),"".concat(i,"-inline"),u)),style:ot,tabIndex:-1,ref:Je,onKeyDown:ge},Ze,a.createElement("div",{tabIndex:0,ref:gt,style:qo,"aria-hidden":"true","data-sentinel":"start"}),Re,a.createElement("div",{tabIndex:0,ref:ve,style:qo,"aria-hidden":"true","data-sentinel":"end"})))}var ts=a.forwardRef(es),ns=ts,os=function(t){var n=t.open,o=n===void 0?!1:n,r=t.prefixCls,i=r===void 0?"rc-drawer":r,l=t.placement,d=l===void 0?"right":l,u=t.autoFocus,p=u===void 0?!0:u,f=t.keyboard,g=f===void 0?!0:f,S=t.width,x=S===void 0?378:S,w=t.mask,h=w===void 0?!0:w,$=t.maskClosable,v=$===void 0?!0:$,R=t.getContainer,H=t.forceRender,k=t.afterOpenChange,T=t.destroyOnClose,M=t.onMouseEnter,P=t.onMouseOver,E=t.onMouseLeave,W=t.onClick,G=t.onKeyDown,X=t.onKeyUp,K=t.panelRef,Y=a.useState(!1),te=(0,_t.Z)(Y,2),Q=te[0],$e=te[1],ne=a.useState(!1),we=(0,_t.Z)(ne,2),St=we[0],ze=we[1];(0,Ko.Z)(function(){ze(!0)},[]);var he=St?o:!1,Le=a.useRef(),Je=a.useRef();(0,Ko.Z)(function(){he&&(Je.current=document.activeElement)},[he]);var gt=function(lt){var qe;if($e(lt),k==null||k(lt),!lt&&Je.current&&!((qe=Le.current)!==null&&qe!==void 0&&qe.contains(Je.current))){var Pe;(Pe=Je.current)===null||Pe===void 0||Pe.focus({preventScroll:!0})}},ve=a.useMemo(function(){return{panel:K}},[K]);if(!H&&!Q&&!he&&T)return null;var ge={onMouseEnter:M,onMouseOver:P,onMouseLeave:E,onClick:W,onKeyDown:G,onKeyUp:X},me=(0,Pt.Z)((0,Pt.Z)({},t),{},{open:he,prefixCls:i,placement:d,autoFocus:p,keyboard:g,width:x,mask:h,maskClosable:v,inline:R===!1,afterOpenChange:gt,ref:Le},ge);return a.createElement(Yo.Provider,{value:ve},a.createElement(Kl.Z,{open:he||H||Q,autoDestroy:!1,getContainer:R,autoLock:h&&(he||Q)},a.createElement(ns,me)))},rs=os,as=rs,is=s(15382),ls=s(87263),Vn=s(33603),ss=s(43945),cs=s(16569),xn=s(69760),er=e=>{var t,n;const{prefixCls:o,title:r,footer:i,extra:l,loading:d,onClose:u,headerStyle:p,bodyStyle:f,footerStyle:g,children:S,classNames:x,styles:w}=e,{drawer:h}=a.useContext(_.E_),$=a.useCallback(T=>a.createElement("button",{type:"button",onClick:u,"aria-label":"Close",className:`${o}-close`},T),[u]),[v,R]=(0,xn.Z)((0,xn.w)(e),(0,xn.w)(h),{closable:!0,closeIconRender:$}),H=a.useMemo(()=>{var T,M;return!r&&!v?null:a.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(T=h==null?void 0:h.styles)===null||T===void 0?void 0:T.header),p),w==null?void 0:w.header),className:N()(`${o}-header`,{[`${o}-header-close-only`]:v&&!r&&!l},(M=h==null?void 0:h.classNames)===null||M===void 0?void 0:M.header,x==null?void 0:x.header)},a.createElement("div",{className:`${o}-header-title`},R,r&&a.createElement("div",{className:`${o}-title`},r)),l&&a.createElement("div",{className:`${o}-extra`},l))},[v,R,l,p,o,r]),k=a.useMemo(()=>{var T,M;if(!i)return null;const P=`${o}-footer`;return a.createElement("div",{className:N()(P,(T=h==null?void 0:h.classNames)===null||T===void 0?void 0:T.footer,x==null?void 0:x.footer),style:Object.assign(Object.assign(Object.assign({},(M=h==null?void 0:h.styles)===null||M===void 0?void 0:M.footer),g),w==null?void 0:w.footer)},i)},[i,g,o]);return a.createElement(a.Fragment,null,H,a.createElement("div",{className:N()(`${o}-body`,x==null?void 0:x.body,(t=h==null?void 0:h.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(n=h==null?void 0:h.styles)===null||n===void 0?void 0:n.body),f),w==null?void 0:w.body)},d?a.createElement(lo.Z,{active:!0,title:!1,paragraph:{rows:5},className:`${o}-body-skeleton`}):S),k)};const ds=e=>{const t="100%";return{left:`translateX(-${t})`,right:`translateX(${t})`,top:`translateY(-${t})`,bottom:`translateY(${t})`}[e]},tr=(e,t)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":t}),"&-leave":Object.assign(Object.assign({},t),{"&-active":e})}),nr=(e,t)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}},tr({opacity:e},{opacity:1})),us=(e,t)=>[nr(.7,t),tr({transform:ds(e)},{transform:"none"})];var fs=e=>{const{componentCls:t,motionDurationSlow:n}=e;return{[t]:{[`${t}-mask-motion`]:nr(0,n),[`${t}-panel-motion`]:["left","right","top","bottom"].reduce((o,r)=>Object.assign(Object.assign({},o),{[`&-${r}`]:us(r,n)}),{})}}};const ms=e=>{const{borderRadiusSM:t,componentCls:n,zIndexPopup:o,colorBgMask:r,colorBgElevated:i,motionDurationSlow:l,motionDurationMid:d,paddingXS:u,padding:p,paddingLG:f,fontSizeLG:g,lineHeightLG:S,lineWidth:x,lineType:w,colorSplit:h,marginXS:$,colorIcon:v,colorIconHover:R,colorBgTextHover:H,colorBgTextActive:k,colorText:T,fontWeightStrong:M,footerPaddingBlock:P,footerPaddingInline:E,calc:W}=e,G=`${n}-content-wrapper`;return{[n]:{position:"fixed",inset:0,zIndex:o,pointerEvents:"none",color:T,"&-pure":{position:"relative",background:i,display:"flex",flexDirection:"column",[`&${n}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${n}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${n}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${n}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${n}-mask`]:{position:"absolute",inset:0,zIndex:o,background:r,pointerEvents:"auto"},[G]:{position:"absolute",zIndex:o,maxWidth:"100vw",transition:`all ${l}`,"&-hidden":{display:"none"}},[`&-left > ${G}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${G}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${G}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${G}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${n}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:i,pointerEvents:"auto"},[`${n}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,Ge.bf)(p)} ${(0,Ge.bf)(f)}`,fontSize:g,lineHeight:S,borderBottom:`${(0,Ge.bf)(x)} ${w} ${h}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${n}-extra`]:{flex:"none"},[`${n}-close`]:Object.assign({display:"inline-flex",width:W(g).add(u).equal(),height:W(g).add(u).equal(),borderRadius:t,justifyContent:"center",alignItems:"center",marginInlineEnd:$,color:v,fontWeight:M,fontSize:g,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${d}`,textRendering:"auto","&:hover":{color:R,backgroundColor:H,textDecoration:"none"},"&:active":{backgroundColor:k}},(0,dn.Qy)(e)),[`${n}-title`]:{flex:1,margin:0,fontWeight:e.fontWeightStrong,fontSize:g,lineHeight:S},[`${n}-body`]:{flex:1,minWidth:0,minHeight:0,padding:f,overflow:"auto",[`${n}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${n}-footer`]:{flexShrink:0,padding:`${(0,Ge.bf)(P)} ${(0,Ge.bf)(E)}`,borderTop:`${(0,Ge.bf)(x)} ${w} ${h}`},"&-rtl":{direction:"rtl"}}}},ps=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding});var or=(0,oe.I$)("Drawer",e=>{const t=(0,On.IX)(e,{});return[ms(t),fs(t)]},ps),rr=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Yd=null,gs={distance:180},ar=e=>{var t;const{rootClassName:n,width:o,height:r,size:i="default",mask:l=!0,push:d=gs,open:u,afterOpenChange:p,onClose:f,prefixCls:g,getContainer:S,style:x,className:w,visible:h,afterVisibleChange:$,maskStyle:v,drawerStyle:R,contentWrapperStyle:H}=e,k=rr(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:T,getPrefixCls:M,direction:P,drawer:E}=a.useContext(_.E_),W=M("drawer",g),[G,X,K]=or(W),Y=S===void 0&&T?()=>T(document.body):S,te=N()({"no-mask":!l,[`${W}-rtl`]:P==="rtl"},n,X,K),Q=a.useMemo(()=>o!=null?o:i==="large"?736:378,[o,i]),$e=a.useMemo(()=>r!=null?r:i==="large"?736:378,[r,i]),ne={motionName:(0,Vn.m)(W,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},we=ge=>({motionName:(0,Vn.m)(W,`panel-motion-${ge}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),St=(0,cs.H)(),[ze,he]=(0,ls.Cn)("Drawer",k.zIndex),{classNames:Le={},styles:Je={}}=k,{classNames:gt={},styles:ve={}}=E||{};return G(a.createElement(is.Z,{form:!0,space:!0},a.createElement(ss.Z.Provider,{value:he},a.createElement(as,Object.assign({prefixCls:W,onClose:f,maskMotion:ne,motion:we},k,{classNames:{mask:N()(Le.mask,gt.mask),content:N()(Le.content,gt.content),wrapper:N()(Le.wrapper,gt.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},Je.mask),v),ve.mask),content:Object.assign(Object.assign(Object.assign({},Je.content),R),ve.content),wrapper:Object.assign(Object.assign(Object.assign({},Je.wrapper),H),ve.wrapper)},open:u!=null?u:h,mask:l,push:d,width:Q,height:$e,style:Object.assign(Object.assign({},E==null?void 0:E.style),x),className:N()(E==null?void 0:E.className,w),rootClassName:te,getContainer:Y,afterOpenChange:p!=null?p:$,panelRef:St,zIndex:ze}),a.createElement(er,Object.assign({prefixCls:W},k,{onClose:f}))))))},hs=e=>{const{prefixCls:t,style:n,className:o,placement:r="right"}=e,i=rr(e,["prefixCls","style","className","placement"]),{getPrefixCls:l}=a.useContext(_.E_),d=l("drawer",t),[u,p,f]=or(d),g=N()(d,`${d}-pure`,`${d}-${r}`,p,f,o);return u(a.createElement("div",{className:g,style:n},a.createElement(er,Object.assign({prefixCls:d},i))))};ar._InternalPanelDoNotUseOrYouWillBeFired=hs;var vs=ar,bs=s(99291),Jt=s(52062),ir,lr,sr,cr,dr,ur,fr,xs=(0,It.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.cx,r=e.css,i=6;return{rect:r(ir||(ir=(0,V.Z)([`
      background: `,`;

      width: 100%;
    `])),(0,Jt.m4)(t.colorBgContainer,.8)),icon:o("site-burger-icon",r(lr||(lr=(0,V.Z)([`
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
      `])),t.colorTextSecondary,i,i)),active:r(sr||(sr=(0,V.Z)([`
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
    `])),t.colorText),container:r(cr||(cr=(0,V.Z)([`
      width: `,`px;
      height: `,`px;
      border-radius: `,`px;
      cursor: pointer;
    `])),t.controlHeight,t.controlHeight,t.borderRadius),drawerRoot:r(dr||(dr=(0,V.Z)([`
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
    `])),t.headerHeight+1,n,(0,Jt.m4)(t.colorBgBase,.5)),drawer:r(ur||(ur=(0,V.Z)([`
      &.`,`-drawer-content {
        background: transparent;
      }

      .`,`-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `])),n,n),menu:r(fr||(fr=(0,V.Z)([`
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
    `])),n,n,(0,Jt.m4)(t.colorBgContainer,.8),t.borderRadius,n,n,(0,Jt.m4)(t.colorBgContainer,.2))}}),ys=function(){var t=(0,a.useState)(!1),n=(0,_t.Z)(t,2),o=n[0],r=n[1],i=xs(),l=i.styles,d=i.cx,u=(0,J.HX)(function(S){return S.navData},A()),p=(0,J.HX)(function(S){return S.sidebar},A()),f=(0,J.HX)(wn.K1),g=(0,J.HX)(function(S){return S.location.pathname});return(0,c.jsxs)(rn,{className:l.container,onClick:function(){r(!o)},children:[(0,c.jsx)("div",{className:d(l.icon,o?l.active:"")}),(0,c.jsxs)(vs,{open:o,placement:"left",closeIcon:null,rootClassName:l.drawerRoot,className:l.drawer,width:"100vw",headerStyle:{display:"none"},bodyStyle:{padding:0},children:[(0,c.jsx)("div",{style:{height:24},className:l.rect}),(0,c.jsx)(bs.Z,{mode:"inline",selectedKeys:(0,un.uniq)([f,"s-".concat(g)]),openKeys:[f],className:l.menu,items:u.map(function(S){return{label:(0,c.jsx)(I.rU,{to:S.link,children:S.title}),key:S.activePath||S.link,children:(S.activePath||S.link)===f&&(p==null?void 0:p.map(function(x){return!x.link&&{label:x.title,type:"group",children:x.children.map(function(w){return{label:(0,c.jsx)(I.rU,{to:w.link,onClick:function(){r(!1)},children:w.title}),key:"s-".concat(w.link)}})}}))}})}),(0,c.jsx)("div",{style:{flex:1},className:l.rect})]})]})},Cs=ys,Ss={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"},ws=Ss,Os=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:ws}))},$s=a.forwardRef(Os),Is=$s,js=s(68866),Es=function(){var t=(0,J.HX)(Ln);return t?(0,c.jsx)(js.Z,{arrow:!1,title:"Github",children:(0,c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,c.jsx)(Tn.ZP,{icon:(0,c.jsx)(Is,{})})})}):null},Ts=(0,a.memo)(Es),Ms=s(15806),mr=s(96201),pr,gr,hr,vr,ks=(0,It.kc)(function(e){var t=e.css,n=e.responsive,o=e.token;return{header:t(pr||(pr=(0,V.Z)([`
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
  `])),o.zIndexPopupBase-50,o.colorSplit,n.mobile,o.colorBgContainer),content:t(gr||(gr=(0,V.Z)([`
    padding: 0 24px;
    height: 64px;

    `,` {
      padding: 0 12px;
    }
  `])),n.mobile),left:t(hr||(hr=(0,V.Z)([""]))),right:t(vr||(vr=(0,V.Z)([`
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
  `])),n.mobile,o.colorBorder)}}),br=function(){var t=(0,J.HX)(function(l){return l.siteData.themeConfig.prefersColor.switch}),n=(0,mr.f)(function(l){return l.themeMode}),o=(0,I.OI)(),r=(0,_t.Z)(o,3),i=r[2];return(0,a.useEffect)(function(){return i(n)},[n]),t?(0,c.jsx)(Ms.Z,{value:n,onChange:function(d){mr.f.setState({themeMode:d})}}):null},Ns=function(){var t=(0,J.HX)(function(l){return!!l.routeMeta.frontmatter}),n=(0,bn.F)(),o=n.mobile,r=ks(),i=r.styles;return t?(0,c.jsx)("div",{className:i.header,children:(0,c.jsx)(ct.D,{horizontal:!0,distribution:"space-between",align:"center",width:"auto",className:i.content,children:o?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ct.D,{children:(0,c.jsx)(Cs,{})}),(0,c.jsx)(ct.D,{horizontal:!0,className:i.left,children:(0,c.jsx)(To,{})}),(0,c.jsx)(ct.D,{children:(0,c.jsx)(br,{})})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ct.D,{horizontal:!0,className:i.left,children:(0,c.jsx)(To,{})}),(0,c.jsx)(ct.D,{style:{marginLeft:48,alignSelf:"end"},children:(0,c.jsx)(hl.Z,{})}),(0,c.jsxs)("section",{className:i.right,children:[(0,c.jsx)("div",{}),(0,c.jsxs)(ct.D,{gap:16,horizontal:!0,align:"center",className:"dumi-default-header-right-aside",children:[(0,c.jsx)(Gl,{}),(0,c.jsx)(cl,{}),(0,c.jsx)(Ts,{}),(0,c.jsx)(br,{})]})]})]})})}):null},xr=(0,a.memo)(Ns),Ds=s(92109),Ps={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},Rs=Ps,Bs=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Rs}))},Hs=a.forwardRef(Bs),As=Hs,zs={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},Ls=zs,Zs=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Ls}))},Ws=a.forwardRef(Zs),Fs=Ws,Xn=s(88929),Vs={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},Xs=Vs,Us=function(t,n){return a.createElement(Xt.Z,(0,ft.Z)({},t,{ref:n,icon:Xs}))},Gs=a.forwardRef(Us),Ks=Gs,Ys=s(71002),_s=s(21770),yr=s(50344),Cr=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.forceRender,r=e.className,i=e.style,l=e.children,d=e.isActive,u=e.role,p=a.useState(d||o),f=(0,_t.Z)(p,2),g=f[0],S=f[1];return a.useEffect(function(){(o||d)&&S(!0)},[o,d]),g?a.createElement("div",{ref:t,className:N()("".concat(n,"-content"),(0,L.Z)((0,L.Z)({},"".concat(n,"-content-active"),d),"".concat(n,"-content-inactive"),!d),r),style:i,role:u},a.createElement("div",{className:"".concat(n,"-content-box")},l)):null});Cr.displayName="PanelContent";var Qs=Cr,Js=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],qs=a.forwardRef(function(e,t){var n=e.showArrow,o=n===void 0?!0:n,r=e.headerClass,i=e.isActive,l=e.onItemClick,d=e.forceRender,u=e.className,p=e.prefixCls,f=e.collapsible,g=e.accordion,S=e.panelKey,x=e.extra,w=e.header,h=e.expandIcon,$=e.openMotion,v=e.destroyInactivePanel,R=e.children,H=(0,se.Z)(e,Js),k=f==="disabled",T=f==="header",M=f==="icon",P=x!=null&&typeof x!="boolean",E=function(){l==null||l(S)},W=function(Q){(Q.key==="Enter"||Q.keyCode===$n.Z.ENTER||Q.which===$n.Z.ENTER)&&E()},G=typeof h=="function"?h(e):a.createElement("i",{className:"arrow"});G&&(G=a.createElement("div",{className:"".concat(p,"-expand-icon"),onClick:["header","icon"].includes(f)?E:void 0},G));var X=N()((0,L.Z)((0,L.Z)((0,L.Z)({},"".concat(p,"-item"),!0),"".concat(p,"-item-active"),i),"".concat(p,"-item-disabled"),k),u),K=N()(r,(0,L.Z)((0,L.Z)((0,L.Z)({},"".concat(p,"-header"),!0),"".concat(p,"-header-collapsible-only"),T),"".concat(p,"-icon-collapsible-only"),M)),Y={className:K,"aria-expanded":i,"aria-disabled":k,onKeyDown:W};return!T&&!M&&(Y.onClick=E,Y.role=g?"tab":"button",Y.tabIndex=k?-1:0),a.createElement("div",(0,ft.Z)({},H,{ref:t,className:X}),a.createElement("div",Y,o&&G,a.createElement("span",{className:"".concat(p,"-header-text"),onClick:f==="header"?E:void 0},w),P&&a.createElement("div",{className:"".concat(p,"-extra")},x)),a.createElement(Fn.ZP,(0,ft.Z)({visible:i,leavedClassName:"".concat(p,"-content-hidden")},$,{forceRender:d,removeOnLeave:v}),function(te,Q){var $e=te.className,ne=te.style;return a.createElement(Qs,{ref:Q,prefixCls:p,className:$e,style:ne,isActive:i,forceRender:d,role:g?"tabpanel":void 0},R)}))}),Sr=qs,ec=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],tc=function(t,n){var o=n.prefixCls,r=n.accordion,i=n.collapsible,l=n.destroyInactivePanel,d=n.onItemClick,u=n.activeKey,p=n.openMotion,f=n.expandIcon;return t.map(function(g,S){var x=g.children,w=g.label,h=g.key,$=g.collapsible,v=g.onItemClick,R=g.destroyInactivePanel,H=(0,se.Z)(g,ec),k=String(h!=null?h:S),T=$!=null?$:i,M=R!=null?R:l,P=function(G){T!=="disabled"&&(d(G),v==null||v(G))},E=!1;return r?E=u[0]===k:E=u.indexOf(k)>-1,a.createElement(Sr,(0,ft.Z)({},H,{prefixCls:o,key:k,panelKey:k,isActive:E,accordion:r,openMotion:p,expandIcon:f,header:w,collapsible:T,onItemClick:P,destroyInactivePanel:M}),x)})},nc=function(t,n,o){if(!t)return null;var r=o.prefixCls,i=o.accordion,l=o.collapsible,d=o.destroyInactivePanel,u=o.onItemClick,p=o.activeKey,f=o.openMotion,g=o.expandIcon,S=t.key||String(n),x=t.props,w=x.header,h=x.headerClass,$=x.destroyInactivePanel,v=x.collapsible,R=x.onItemClick,H=!1;i?H=p[0]===S:H=p.indexOf(S)>-1;var k=v!=null?v:l,T=function(E){k!=="disabled"&&(u(E),R==null||R(E))},M={key:S,panelKey:S,header:w,headerClass:h,isActive:H,prefixCls:r,destroyInactivePanel:$!=null?$:d,openMotion:f,accordion:i,children:t.props.children,onItemClick:T,expandIcon:g,collapsible:k};return typeof t.type=="string"?t:(Object.keys(M).forEach(function(P){typeof M[P]=="undefined"&&delete M[P]}),a.cloneElement(t,M))};function oc(e,t,n){return Array.isArray(e)?tc(e,n):(0,yr.Z)(t).map(function(o,r){return nc(o,r,n)})}var rc=oc;function ac(e){var t=e;if(!Array.isArray(t)){var n=(0,Ys.Z)(t);t=n==="number"||n==="string"?[t]:[]}return t.map(function(o){return String(o)})}var ic=a.forwardRef(function(e,t){var n=e.prefixCls,o=n===void 0?"rc-collapse":n,r=e.destroyInactivePanel,i=r===void 0?!1:r,l=e.style,d=e.accordion,u=e.className,p=e.children,f=e.collapsible,g=e.openMotion,S=e.expandIcon,x=e.activeKey,w=e.defaultActiveKey,h=e.onChange,$=e.items,v=N()(o,u),R=(0,_s.Z)([],{value:x,onChange:function(W){return h==null?void 0:h(W)},defaultValue:w,postState:ac}),H=(0,_t.Z)(R,2),k=H[0],T=H[1],M=function(W){return T(function(){if(d)return k[0]===W?[]:[W];var G=k.indexOf(W),X=G>-1;return X?k.filter(function(K){return K!==W}):[].concat((0,Ft.Z)(k),[W])})};(0,Qo.ZP)(!p,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var P=rc($,p,{prefixCls:o,accordion:d,openMotion:g,expandIcon:S,collapsible:f,destroyInactivePanel:i,onItemClick:M,activeKey:k});return a.createElement("div",(0,ft.Z)({ref:t,className:v,style:l,role:d?"tablist":void 0},(0,Nn.Z)(e,{aria:!0,data:!0})),P)}),wr=Object.assign(ic,{Panel:Sr}),Or=wr,_d=wr.Panel,Dn=s(98423),Un=s(96159),lc=s(98675),sc=a.forwardRef((e,t)=>{const{getPrefixCls:n}=a.useContext(_.E_),{prefixCls:o,className:r,showArrow:i=!0}=e,l=n("collapse",o),d=N()({[`${l}-no-arrow`]:!i},r);return a.createElement(Or.Panel,Object.assign({ref:t},e,{prefixCls:l,className:d}))}),cc=s(33507);const dc=e=>{const{componentCls:t,contentBg:n,padding:o,headerBg:r,headerPadding:i,collapseHeaderPaddingSM:l,collapseHeaderPaddingLG:d,collapsePanelBorderRadius:u,lineWidth:p,lineType:f,colorBorder:g,colorText:S,colorTextHeading:x,colorTextDisabled:w,fontSizeLG:h,lineHeight:$,lineHeightLG:v,marginSM:R,paddingSM:H,paddingLG:k,paddingXS:T,motionDurationSlow:M,fontSizeIcon:P,contentPadding:E,fontHeight:W,fontHeightLG:G}=e,X=`${(0,Ge.bf)(p)} ${f} ${g}`;return{[t]:Object.assign(Object.assign({},(0,dn.Wf)(e)),{backgroundColor:r,border:X,borderRadius:u,"&-rtl":{direction:"rtl"},[`& > ${t}-item`]:{borderBottom:X,"&:last-child":{[`
            &,
            & > ${t}-header`]:{borderRadius:`0 0 ${(0,Ge.bf)(u)} ${(0,Ge.bf)(u)}`}},[`> ${t}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:i,color:x,lineHeight:$,cursor:"pointer",transition:`all ${M}, visibility 0s`,[`> ${t}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${t}-expand-icon`]:{height:W,display:"flex",alignItems:"center",paddingInlineEnd:R},[`${t}-arrow`]:Object.assign(Object.assign({},(0,dn.Ro)()),{fontSize:P,transition:`transform ${M}`,svg:{transition:`transform ${M}`}}),[`${t}-header-text`]:{marginInlineEnd:"auto"}},[`${t}-icon-collapsible-only`]:{cursor:"unset",[`${t}-expand-icon`]:{cursor:"pointer"}}},[`${t}-content`]:{color:S,backgroundColor:n,borderTop:X,[`& > ${t}-content-box`]:{padding:E},"&-hidden":{display:"none"}},"&-small":{[`> ${t}-item`]:{[`> ${t}-header`]:{padding:l,paddingInlineStart:T,[`> ${t}-expand-icon`]:{marginInlineStart:e.calc(H).sub(T).equal()}},[`> ${t}-content > ${t}-content-box`]:{padding:H}}},"&-large":{[`> ${t}-item`]:{fontSize:h,lineHeight:v,[`> ${t}-header`]:{padding:d,paddingInlineStart:o,[`> ${t}-expand-icon`]:{height:G,marginInlineStart:e.calc(k).sub(o).equal()}},[`> ${t}-content > ${t}-content-box`]:{padding:k}}},[`${t}-item:last-child`]:{borderBottom:0,[`> ${t}-content`]:{borderRadius:`0 0 ${(0,Ge.bf)(u)} ${(0,Ge.bf)(u)}`}},[`& ${t}-item-disabled > ${t}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:w,cursor:"not-allowed"}},[`&${t}-icon-position-end`]:{[`& > ${t}-item`]:{[`> ${t}-header`]:{[`${t}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:R}}}}})}},uc=e=>{const{componentCls:t}=e,n=`> ${t}-item > ${t}-header ${t}-arrow`;return{[`${t}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},fc=e=>{const{componentCls:t,headerBg:n,paddingXXS:o,colorBorder:r}=e;return{[`${t}-borderless`]:{backgroundColor:n,border:0,[`> ${t}-item`]:{borderBottom:`1px solid ${r}`},[`
        > ${t}-item:last-child,
        > ${t}-item:last-child ${t}-header
      `]:{borderRadius:0},[`> ${t}-item:last-child`]:{borderBottom:0},[`> ${t}-item > ${t}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${t}-item > ${t}-content > ${t}-content-box`]:{paddingTop:o}}}},mc=e=>{const{componentCls:t,paddingSM:n}=e;return{[`${t}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${t}-item`]:{borderBottom:0,[`> ${t}-content`]:{backgroundColor:"transparent",border:0,[`> ${t}-content-box`]:{paddingBlock:n}}}}}},pc=e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer});var gc=(0,oe.I$)("Collapse",e=>{const t=(0,On.IX)(e,{collapseHeaderPaddingSM:`${(0,Ge.bf)(e.paddingXS)} ${(0,Ge.bf)(e.paddingSM)}`,collapseHeaderPaddingLG:`${(0,Ge.bf)(e.padding)} ${(0,Ge.bf)(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[dc(t),fc(t),mc(t),uc(t),(0,cc.Z)(t)]},pc),hc=Object.assign(a.forwardRef((e,t)=>{const{getPrefixCls:n,direction:o,collapse:r}=a.useContext(_.E_),{prefixCls:i,className:l,rootClassName:d,style:u,bordered:p=!0,ghost:f,size:g,expandIconPosition:S="start",children:x,expandIcon:w}=e,h=(0,lc.Z)(X=>{var K;return(K=g!=null?g:X)!==null&&K!==void 0?K:"middle"}),$=n("collapse",i),v=n(),[R,H,k]=gc($),T=a.useMemo(()=>S==="left"?"start":S==="right"?"end":S,[S]),M=w!=null?w:r==null?void 0:r.expandIcon,P=a.useCallback(function(){let X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const K=typeof M=="function"?M(X):a.createElement(Ks,{rotate:X.isActive?90:void 0,"aria-label":X.isActive?"expanded":"collapsed"});return(0,Un.Tm)(K,()=>{var Y;return{className:N()((Y=K==null?void 0:K.props)===null||Y===void 0?void 0:Y.className,`${$}-arrow`)}})},[M,$]),E=N()(`${$}-icon-position-${T}`,{[`${$}-borderless`]:!p,[`${$}-rtl`]:o==="rtl",[`${$}-ghost`]:!!f,[`${$}-${h}`]:h!=="middle"},r==null?void 0:r.className,l,d,H,k),W=Object.assign(Object.assign({},(0,Vn.Z)(v)),{motionAppear:!1,leavedClassName:`${$}-content-hidden`}),G=a.useMemo(()=>x?(0,yr.Z)(x).map((X,K)=>{var Y,te;if(!((Y=X.props)===null||Y===void 0)&&Y.disabled){const Q=(te=X.key)!==null&&te!==void 0?te:String(K),{disabled:$e,collapsible:ne}=X.props,we=Object.assign(Object.assign({},(0,Dn.Z)(X.props,["disabled"])),{key:Q,collapsible:ne!=null?ne:$e?"disabled":void 0});return(0,Un.Tm)(X,we)}return X}):null,[x]);return R(a.createElement(Or,Object.assign({ref:t,openMotion:W},(0,Dn.Z)(e,["rootClassName"]),{expandIcon:P,prefixCls:$,className:E,style:Object.assign(Object.assign({},r==null?void 0:r.style),u)}),G))}),{Panel:sc}),$r=hc,Gn=s(56790);const Ir=e=>typeof e=="object"&&e!=null&&e.nodeType===1,jr=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Kn=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return jr(n.overflowY,t)||jr(n.overflowX,t)||(o=>{const r=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch(l){return null}})(o);return!!r&&(r.clientHeight<o.scrollHeight||r.clientWidth<o.scrollWidth)})(e)}return!1},Pn=(e,t,n,o,r,i,l,d)=>i<e&&l>t||i>e&&l<t?0:i<=e&&d<=n||l>=t&&d>=n?i-e-o:l>t&&d<n||i<e&&d>n?l-t+r:0,vc=e=>{const t=e.parentElement;return t==null?e.getRootNode().host||null:t},Er=(e,t)=>{var n,o,r,i;if(typeof document=="undefined")return[];const{scrollMode:l,block:d,inline:u,boundary:p,skipOverflowHiddenElements:f}=t,g=typeof p=="function"?p:$e=>$e!==p;if(!Ir(e))throw new TypeError("Invalid target");const S=document.scrollingElement||document.documentElement,x=[];let w=e;for(;Ir(w)&&g(w);){if(w=vc(w),w===S){x.push(w);break}w!=null&&w===document.body&&Kn(w)&&!Kn(document.documentElement)||w!=null&&Kn(w,f)&&x.push(w)}const h=(o=(n=window.visualViewport)==null?void 0:n.width)!=null?o:innerWidth,$=(i=(r=window.visualViewport)==null?void 0:r.height)!=null?i:innerHeight,{scrollX:v,scrollY:R}=window,{height:H,width:k,top:T,right:M,bottom:P,left:E}=e.getBoundingClientRect(),{top:W,right:G,bottom:X,left:K}=($e=>{const ne=window.getComputedStyle($e);return{top:parseFloat(ne.scrollMarginTop)||0,right:parseFloat(ne.scrollMarginRight)||0,bottom:parseFloat(ne.scrollMarginBottom)||0,left:parseFloat(ne.scrollMarginLeft)||0}})(e);let Y=d==="start"||d==="nearest"?T-W:d==="end"?P+X:T+H/2-W+X,te=u==="center"?E+k/2-K+G:u==="end"?M+G:E-K;const Q=[];for(let $e=0;$e<x.length;$e++){const ne=x[$e],{height:we,width:St,top:ze,right:he,bottom:Le,left:Je}=ne.getBoundingClientRect();if(l==="if-needed"&&T>=0&&E>=0&&P<=$&&M<=h&&T>=ze&&P<=Le&&E>=Je&&M<=he)return Q;const gt=getComputedStyle(ne),ve=parseInt(gt.borderLeftWidth,10),ge=parseInt(gt.borderTopWidth,10),me=parseInt(gt.borderRightWidth,10),wt=parseInt(gt.borderBottomWidth,10);let lt=0,qe=0;const Pe="offsetWidth"in ne?ne.offsetWidth-ne.clientWidth-ve-me:0,xe="offsetHeight"in ne?ne.offsetHeight-ne.clientHeight-ge-wt:0,pe="offsetWidth"in ne?ne.offsetWidth===0?0:St/ne.offsetWidth:0,nt="offsetHeight"in ne?ne.offsetHeight===0?0:we/ne.offsetHeight:0;if(S===ne)lt=d==="start"?Y:d==="end"?Y-$:d==="nearest"?Pn(R,R+$,$,ge,wt,R+Y,R+Y+H,H):Y-$/2,qe=u==="start"?te:u==="center"?te-h/2:u==="end"?te-h:Pn(v,v+h,h,ve,me,v+te,v+te+k,k),lt=Math.max(0,lt+R),qe=Math.max(0,qe+v);else{lt=d==="start"?Y-ze-ge:d==="end"?Y-Le+wt+xe:d==="nearest"?Pn(ze,Le,we,ge,wt+xe,Y,Y+H,H):Y-(ze+we/2)+xe/2,qe=u==="start"?te-Je-ve:u==="center"?te-(Je+St/2)+Pe/2:u==="end"?te-he+me+Pe:Pn(Je,he,St,ve,me+Pe,te,te+k,k);const{scrollLeft:Ze,scrollTop:Tt}=ne;lt=nt===0?0:Math.max(0,Math.min(Tt+lt/nt,ne.scrollHeight-we/nt+xe)),qe=pe===0?0:Math.max(0,Math.min(Ze+qe/pe,ne.scrollWidth-St/pe+Pe)),Y+=Tt-lt,te+=Ze-qe}Q.push({el:ne,top:lt,left:qe})}return Q},bc=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function xc(e,t){if(!e.isConnected||!(r=>{let i=r;for(;i&&i.parentNode;){if(i.parentNode===document)return!0;i=i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}return!1})(e))return;const n=(r=>{const i=window.getComputedStyle(r);return{top:parseFloat(i.scrollMarginTop)||0,right:parseFloat(i.scrollMarginRight)||0,bottom:parseFloat(i.scrollMarginBottom)||0,left:parseFloat(i.scrollMarginLeft)||0}})(e);if((r=>typeof r=="object"&&typeof r.behavior=="function")(t))return t.behavior(Er(e,t));const o=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:r,top:i,left:l}of Er(e,bc(t))){const d=i-n.top+n.bottom,u=l-n.left+n.right;r.scroll({top:d,left:u,behavior:o})}}function Yn(e){return e!=null&&e===e.window}var Tr=e=>{var t,n;if(typeof window=="undefined")return 0;let o=0;return Yn(e)?o=e.pageYOffset:e instanceof Document?o=e.documentElement.scrollTop:(e instanceof HTMLElement||e)&&(o=e.scrollTop),e&&!Yn(e)&&typeof o!="number"&&(o=(n=((t=e.ownerDocument)!==null&&t!==void 0?t:e).documentElement)===null||n===void 0?void 0:n.scrollTop),o},Rn=s(75164);function yc(e,t,n,o){const r=n-t;return e/=o/2,e<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t}function Cc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:n=()=>window,callback:o,duration:r=450}=t,i=n(),l=Tr(i),d=Date.now(),u=()=>{const f=Date.now()-d,g=yc(f>r?r:f,l,e,r);Yn(i)?i.scrollTo(window.pageXOffset,g):i instanceof Document||i.constructor.name==="HTMLDocument"?i.documentElement.scrollTop=g:i.scrollTop=g,f<r?(0,Rn.Z)(u):typeof o=="function"&&o()};(0,Rn.Z)(u)}var Mr=s(9220);function Sc(e){let t;const n=r=>()=>{t=null,e.apply(void 0,(0,Ft.Z)(r))},o=function(){if(t==null){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];t=(0,Rn.Z)(n(i))}};return o.cancel=()=>{Rn.Z.cancel(t),t=null},o}var kr=Sc;const wc=e=>{const{componentCls:t}=e;return{[t]:{position:"fixed",zIndex:e.zIndexPopup}}},Oc=e=>({zIndexPopup:e.zIndexBase+10});var $c=(0,oe.I$)("Affix",wc,Oc);function Bn(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Nr(e,t,n){if(n!==void 0&&Math.round(t.top)>Math.round(e.top)-n)return n+t.top}function Dr(e,t,n){if(n!==void 0&&Math.round(t.bottom)<Math.round(e.bottom)+n){const o=window.innerHeight-t.bottom;return n+o}}const Pr=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function Ic(){return typeof window!="undefined"?window:null}const Rr=0,Br=1;var jc=a.forwardRef((e,t)=>{var n;const{style:o,offsetTop:r,offsetBottom:i,prefixCls:l,className:d,rootClassName:u,children:p,target:f,onChange:g}=e,{getPrefixCls:S,getTargetContainer:x}=a.useContext(_.E_),w=S("affix",l),[h,$]=a.useState(!1),[v,R]=a.useState(),[H,k]=a.useState(),T=a.useRef(Rr),M=a.useRef(null),P=a.useRef(),E=a.useRef(null),W=a.useRef(null),G=a.useRef(null),X=(n=f!=null?f:x)!==null&&n!==void 0?n:Ic,K=i===void 0&&r===void 0?0:r,Y=()=>{if(T.current!==Br||!W.current||!E.current||!X)return;const ve=X();if(ve){const ge={status:Rr},me=Bn(E.current);if(me.top===0&&me.left===0&&me.width===0&&me.height===0)return;const wt=Bn(ve),lt=Nr(me,wt,K),qe=Dr(me,wt,i);lt!==void 0?(ge.affixStyle={position:"fixed",top:lt,width:me.width,height:me.height},ge.placeholderStyle={width:me.width,height:me.height}):qe!==void 0&&(ge.affixStyle={position:"fixed",bottom:qe,width:me.width,height:me.height},ge.placeholderStyle={width:me.width,height:me.height}),ge.lastAffix=!!ge.affixStyle,h!==ge.lastAffix&&(g==null||g(ge.lastAffix)),T.current=ge.status,R(ge.affixStyle),k(ge.placeholderStyle),$(ge.lastAffix)}},te=()=>{var ve;T.current=Br,Y()},Q=kr(()=>{te()}),$e=kr(()=>{if(X&&v){const ve=X();if(ve&&E.current){const ge=Bn(ve),me=Bn(E.current),wt=Nr(me,ge,K),lt=Dr(me,ge,i);if(wt!==void 0&&v.top===wt||lt!==void 0&&v.bottom===lt)return}}te()}),ne=()=>{const ve=X==null?void 0:X();ve&&(Pr.forEach(ge=>{var me;P.current&&((me=M.current)===null||me===void 0||me.removeEventListener(ge,P.current)),ve==null||ve.addEventListener(ge,$e)}),M.current=ve,P.current=$e)},we=()=>{G.current&&(clearTimeout(G.current),G.current=null);const ve=X==null?void 0:X();Pr.forEach(ge=>{var me;ve==null||ve.removeEventListener(ge,$e),P.current&&((me=M.current)===null||me===void 0||me.removeEventListener(ge,P.current))}),Q.cancel(),$e.cancel()};a.useImperativeHandle(t,()=>({updatePosition:Q})),a.useEffect(()=>(G.current=setTimeout(ne),()=>we()),[]),a.useEffect(()=>{ne()},[f,v]),a.useEffect(()=>{Q()},[f,r,i]);const[St,ze,he]=$c(w),Le=N()(u,ze,w,he),Je=N()({[Le]:v});let gt=(0,Dn.Z)(e,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return St(a.createElement(Mr.Z,{onResize:Q},a.createElement("div",Object.assign({style:o,className:d,ref:E},gt),v&&a.createElement("div",{style:H,"aria-hidden":"true"}),a.createElement("div",{className:Je,ref:W,style:v},a.createElement(Mr.Z,{onResize:Q},p)))))}),Ec=s(35792),Hr=a.createContext(void 0),Ar=e=>{const{href:t,title:n,prefixCls:o,children:r,className:i,target:l,replace:d}=e,u=a.useContext(Hr),{registerLink:p,unregisterLink:f,scrollTo:g,onClick:S,activeLink:x,direction:w}=u||{};a.useEffect(()=>(p==null||p(t),()=>{f==null||f(t)}),[t]);const h=T=>{S==null||S(T,{title:n,href:t}),g==null||g(t),d&&(T.preventDefault(),window.location.replace(t))},{getPrefixCls:$}=a.useContext(_.E_),v=$("anchor",o),R=x===t,H=N()(`${v}-link`,i,{[`${v}-link-active`]:R}),k=N()(`${v}-link-title`,{[`${v}-link-title-active`]:R});return a.createElement("div",{className:H},a.createElement("a",{className:k,href:t,title:typeof n=="string"?n:"",target:l,onClick:h},n),w!=="horizontal"?r:null)};const Tc=e=>{const{componentCls:t,holderOffsetBlock:n,motionDurationSlow:o,lineWidthBold:r,colorPrimary:i,lineType:l,colorSplit:d,calc:u}=e;return{[`${t}-wrapper`]:{marginBlockStart:u(n).mul(-1).equal(),paddingBlockStart:n,[t]:Object.assign(Object.assign({},(0,dn.Wf)(e)),{position:"relative",paddingInlineStart:r,[`${t}-link`]:{paddingBlock:e.linkPaddingBlock,paddingInline:`${(0,Ge.bf)(e.linkPaddingInlineStart)} 0`,"&-title":Object.assign(Object.assign({},dn.vS),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${t}-link-title`]:{color:e.colorPrimary},[`${t}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${t}-wrapper-horizontal)`]:{[t]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${(0,Ge.bf)(r)} ${l} ${d}`,content:'" "'},[`${t}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${o} ease-in-out`,width:r,backgroundColor:i,[`&${t}-ink-visible`]:{display:"inline-block"}}}},[`${t}-fixed ${t}-ink ${t}-ink`]:{display:"none"}}}},Mc=e=>{const{componentCls:t,motionDurationSlow:n,lineWidthBold:o,colorPrimary:r}=e;return{[`${t}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`${(0,Ge.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,content:'" "'},[t]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${t}-link:first-of-type`]:{paddingInline:0},[`${t}-ink`]:{position:"absolute",bottom:0,transition:`left ${n} ease-in-out, width ${n} ease-in-out`,height:o,backgroundColor:r}}}}},kc=e=>({linkPaddingBlock:e.paddingXXS,linkPaddingInlineStart:e.padding});var Nc=(0,oe.I$)("Anchor",e=>{const{fontSize:t,fontSizeLG:n,paddingXXS:o,calc:r}=e,i=(0,On.IX)(e,{holderOffsetBlock:o,anchorPaddingBlockSecondary:r(o).div(2).equal(),anchorTitleBlock:r(t).div(14).mul(3).equal(),anchorBallSize:r(n).div(2).equal()});return[Tc(i),Mc(i)]},kc);function Dc(){return window}function zr(e,t){if(!e.getClientRects().length)return 0;const n=e.getBoundingClientRect();return n.width||n.height?t===window?n.top-e.ownerDocument.documentElement.clientTop:n.top-t.getBoundingClientRect().top:n.top}const Lr=/#([\S ]+)$/;var Pc=e=>{var t;const{rootClassName:n,prefixCls:o,className:r,style:i,offsetTop:l,affix:d=!0,showInkInFixed:u=!1,children:p,items:f,direction:g="vertical",bounds:S,targetOffset:x,onClick:w,onChange:h,getContainer:$,getCurrentAnchor:v,replace:R}=e,[H,k]=a.useState([]),[T,M]=a.useState(null),P=a.useRef(T),E=a.useRef(null),W=a.useRef(null),G=a.useRef(!1),{direction:X,anchor:K,getTargetContainer:Y,getPrefixCls:te}=a.useContext(_.E_),Q=te("anchor",o),$e=(0,Ec.Z)(Q),[ne,we,St]=Nc(Q,$e),ze=(t=$!=null?$:Y)!==null&&t!==void 0?t:Dc,he=JSON.stringify(H),Le=(0,Gn.zX)(le=>{H.includes(le)||k(fe=>[].concat((0,Ft.Z)(fe),[le]))}),Je=(0,Gn.zX)(le=>{H.includes(le)&&k(fe=>fe.filter(Re=>Re!==le))}),gt=()=>{var le;const fe=(le=E.current)===null||le===void 0?void 0:le.querySelector(`.${Q}-link-title-active`);if(fe&&W.current){const{style:Re}=W.current,ot=g==="horizontal";Re.top=ot?"":`${fe.offsetTop+fe.clientHeight/2}px`,Re.height=ot?"":`${fe.clientHeight}px`,Re.left=ot?`${fe.offsetLeft}px`:"",Re.width=ot?`${fe.clientWidth}px`:"",ot&&xc(fe,{scrollMode:"if-needed",block:"nearest"})}},ve=function(le){let fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Re=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const ot=[],We=ze();return le.forEach(rt=>{const jt=Lr.exec(rt==null?void 0:rt.toString());if(!jt)return;const at=document.getElementById(jt[1]);if(at){const Ot=zr(at,We);Ot<=fe+Re&&ot.push({link:rt,top:Ot})}}),ot.length?ot.reduce((jt,at)=>at.top>jt.top?at:jt).link:""},ge=(0,Gn.zX)(le=>{if(P.current===le)return;const fe=typeof v=="function"?v(le):le;M(fe),P.current=fe,h==null||h(le)}),me=a.useCallback(()=>{if(G.current)return;const le=ve(H,x!==void 0?x:l||0,S);ge(le)},[he,x,l]),wt=a.useCallback(le=>{ge(le);const fe=Lr.exec(le);if(!fe)return;const Re=document.getElementById(fe[1]);if(!Re)return;const ot=ze(),We=Tr(ot),rt=zr(Re,ot);let jt=We+rt;jt-=x!==void 0?x:l||0,G.current=!0,Cc(jt,{getContainer:ze,callback(){G.current=!1}})},[x,l]),lt=N()(we,St,$e,n,`${Q}-wrapper`,{[`${Q}-wrapper-horizontal`]:g==="horizontal",[`${Q}-rtl`]:X==="rtl"},r,K==null?void 0:K.className),qe=N()(Q,{[`${Q}-fixed`]:!d&&!u}),Pe=N()(`${Q}-ink`,{[`${Q}-ink-visible`]:T}),xe=Object.assign(Object.assign({maxHeight:l?`calc(100vh - ${l}px)`:"100vh"},K==null?void 0:K.style),i),pe=le=>Array.isArray(le)?le.map(fe=>a.createElement(Ar,Object.assign({replace:R},fe,{key:fe.key}),g==="vertical"&&pe(fe.children))):null,nt=a.createElement("div",{ref:E,className:lt,style:xe},a.createElement("div",{className:qe},a.createElement("span",{className:Pe,ref:W}),"items"in e?pe(f):p));a.useEffect(()=>{const le=ze();return me(),le==null||le.addEventListener("scroll",me),()=>{le==null||le.removeEventListener("scroll",me)}},[he]),a.useEffect(()=>{typeof v=="function"&&ge(v(P.current||""))},[v]),a.useEffect(()=>{gt()},[g,v,he,T]);const Ze=a.useMemo(()=>({registerLink:Le,unregisterLink:Je,scrollTo:wt,activeLink:T,onClick:w,direction:g}),[T,w,wt,g]),Tt=d&&typeof d=="object"?d:void 0;return ne(a.createElement(Hr.Provider,{value:Ze},d?a.createElement(jc,Object.assign({offsetTop:l,target:ze},Tt),nt):nt))};const Zr=Pc;Zr.Link=Ar;var Wr=Zr,Rc=s(76010),Fr,Vr,Xr,Ur,Bc=(0,It.kc)(function(e){var t=e.token,n=e.stylish,o=e.prefixCls,r=e.responsive,i=e.css,l=36;return{container:i(Fr||(Fr=(0,V.Z)([`
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
    `])),t.tocWidth,r.mobile,t.headerHeight+1,t.colorTextDescription),mobileCtn:i(Vr||(Vr=(0,V.Z)([`
      position: sticky;
      top: `,`px;

      height: `,`px;
      width: 100%;
      z-index: 200;
      background: transparent;
      background: `,`;
    `])),t.headerHeight+1,l,(0,Jt.m4)(t.colorBgContainer,.8)),expand:i(Xr||(Xr=(0,V.Z)([`
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
    `])),t.colorSplit,t.boxShadowSecondary,(0,Jt.m4)(t.colorBgContainer,.8),o),anchor:i(Ur||(Ur=(0,V.Z)([`
      `,`
    `])),n.blur)}}),Hc=(0,a.memo)(function(e){var t=e.items,n=e.activeKey,o=e.onChange,r=(0,Rc.Z)("",{value:n,onChange:o}),i=(0,_t.Z)(r,2),l=i[0],d=i[1],u=Bc(),p=u.styles,f=(0,bn.F)(),g=f.mobile,S=(0,It.Fg)(),x=t.find(function(h){return h.id===l}),w=(0,a.useMemo)(function(){return t.map(function(h){var $;return{href:"#".concat(h.id),title:h.title,key:h.id,children:($=h.children)===null||$===void 0?void 0:$.map(function(v){return{href:"#".concat(v.id),title:v==null?void 0:v.title,key:v.id}})}})},[t]);return((t==null?void 0:t.length)===0?null:g?(0,c.jsx)(Xn.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,c.jsx)("div",{className:p.mobileCtn,children:(0,c.jsx)($r,{bordered:!1,ghost:!0,expandIconPosition:"end",expandIcon:function($){var v=$.isActive;return v?(0,c.jsx)(As,{}):(0,c.jsx)(Fs,{})},className:p.expand,children:(0,c.jsx)($r.Panel,{forceRender:!0,header:x?x.title:"\u76EE\u5F55",children:(0,c.jsx)(Xn.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,c.jsx)(Wr,{onChange:function($){d($.replace("#",""))},targetOffset:S.headerHeight+12,items:w})})},"toc")})})}):(0,c.jsxs)("div",{className:p.container,children:[(0,c.jsx)("h4",{children:"Table of Contents"}),(0,c.jsx)(Wr,{items:w,className:p.anchor,targetOffset:S.headerHeight+12})]}))||null}),Ac=Hc,zc=(0,a.memo)(function(){var e=(0,J.HX)(wn.TL,A());return(0,c.jsx)(Ac,{items:e})}),Lc=zc,Zc=s(72081),Gr,Kr,Yr,Wc=(0,It.kc)(function(e,t){var n=e.css,o=e.cx,r=e.responsive,i=e.token,l=t.hideToc,d=t.hideSidebar;return{layout:n(Gr||(Gr=(0,V.Z)([`
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
    `])),i.colorBgLayout,i.colorBgContainer,i.sidebarWidth,l?"":"".concat(i.tocWidth+24,"px"),i.headerHeight,d?"title":"sidebar",l?"title":".",d?"main":"sidebar",l?"main":"toc",d?"footer":"sidebar",r.mobile),toc:n(Kr||(Kr=(0,V.Z)([`
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
    `])),i.tocWidth,r.mobile,i.headerHeight+1,i.colorTextDescription),content:o(n(Yr||(Yr=(0,V.Z)([`
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `]))),n(r({desktop:{maxWidth:i.contentMaxWidth},mobile:{margin:0}})))}}),Fc=(0,a.memo)(function(){var e=(0,I.pC)(),t=(0,bn.F)(),n=t.mobile,o=(0,J.HX)(function(S){return S.routeMeta.frontmatter},A()),r=(0,J.HX)(dl),i=(0,J.HX)(yo),l=(0,J.HX)(function(S){return(0,wn.TL)(S).length===0}),d=o.sidebar===!1,u=o.toc===!1||l,p=Wc({hideToc:u,hideSidebar:d}),f=p.styles,g=p.theme;return(0,c.jsxs)("div",{className:f.layout,children:[(0,c.jsx)(I.ql,{children:o.title&&(0,c.jsxs)("title",{children:[o.title," - ",i]})}),(0,c.jsx)(xr,{}),u?null:(0,c.jsx)(Lc,{}),n||d?null:(0,c.jsx)(Ds.Z,{}),r?(0,c.jsx)(ct.D,{style:{gridArea:"title",paddingBlock:n?24:void 0},children:(0,c.jsx)(rn,{children:(0,c.jsx)(ct.D,{style:{maxWidth:g.contentMaxWidth,width:"100%"},children:(0,c.jsx)(ct.D,{style:{paddingBlock:0,paddingInline:n?16:48},children:(0,c.jsx)(Zc.Z,{})})})})}):null,(0,c.jsx)(ct.D,{style:{zIndex:10,gridArea:"main",margin:n?0:24,marginBottom:n?0:48},children:(0,c.jsx)(rn,{width:"100%",children:(0,c.jsx)(ct.D,{className:f.content,children:(0,c.jsx)(ct.D,{horizontal:!0,children:(0,c.jsx)(fi,{children:e})})})})}),(0,c.jsx)(Oo,{})]})}),Vc=Fc,_r=s(98787),Xc=s(36728),Uc=s(10274);const Gc=e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:r,calc:i}=e,l=i(o).sub(n).equal(),d=i(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},(0,dn.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,Ge.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:d,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},_n=e=>{const{lineWidth:t,fontSizeIcon:n,calc:o}=e,r=e.fontSizeSM;return(0,On.IX)(e,{tagFontSize:r,tagLineHeight:(0,Ge.bf)(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(n).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},Qn=e=>({defaultBg:new Uc.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var Qr=(0,oe.I$)("Tag",e=>{const t=_n(e);return Gc(t)},Qn),Kc=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},Yc=a.forwardRef((e,t)=>{const{prefixCls:n,style:o,className:r,checked:i,onChange:l,onClick:d}=e,u=Kc(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:p,tag:f}=a.useContext(_.E_),g=v=>{l==null||l(!i),d==null||d(v)},S=p("tag",n),[x,w,h]=Qr(S),$=N()(S,`${S}-checkable`,{[`${S}-checkable-checked`]:i},f==null?void 0:f.className,r,w,h);return x(a.createElement("span",Object.assign({},u,{ref:t,style:Object.assign(Object.assign({},o),f==null?void 0:f.style),className:$,onClick:g})))}),_c=s(98719);const Qc=e=>(0,_c.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:r,lightColor:i,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:i,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var Jc=(0,oe.bk)(["Tag","preset"],e=>{const t=_n(e);return Qc(t)},Qn);function qc(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const Hn=(e,t,n)=>{const o=qc(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var ed=(0,oe.bk)(["Tag","status"],e=>{const t=_n(e);return[Hn(t,"success","Success"),Hn(t,"processing","Info"),Hn(t,"error","Error"),Hn(t,"warning","Warning")]},Qn),td=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Jr=a.forwardRef((e,t)=>{const{prefixCls:n,className:o,rootClassName:r,style:i,children:l,icon:d,color:u,onClose:p,bordered:f=!0,visible:g}=e,S=td(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:x,direction:w,tag:h}=a.useContext(_.E_),[$,v]=a.useState(!0),R=(0,Dn.Z)(S,["closeIcon","closable"]);a.useEffect(()=>{g!==void 0&&v(g)},[g]);const H=(0,_r.o2)(u),k=(0,_r.yT)(u),T=H||k,M=Object.assign(Object.assign({backgroundColor:u&&!T?u:void 0},h==null?void 0:h.style),i),P=x("tag",n),[E,W,G]=Qr(P),X=N()(P,h==null?void 0:h.className,{[`${P}-${u}`]:T,[`${P}-has-color`]:u&&!T,[`${P}-hidden`]:!$,[`${P}-rtl`]:w==="rtl",[`${P}-borderless`]:!f},o,r,W,G),K=we=>{we.stopPropagation(),p==null||p(we),!we.defaultPrevented&&v(!1)},[,Y]=(0,xn.Z)((0,xn.w)(e),(0,xn.w)(h),{closable:!1,closeIconRender:we=>{const St=a.createElement("span",{className:`${P}-close-icon`,onClick:K},we);return(0,Un.wm)(we,St,ze=>({onClick:he=>{var Le;(Le=ze==null?void 0:ze.onClick)===null||Le===void 0||Le.call(ze,he),K(he)},className:N()(ze==null?void 0:ze.className,`${P}-close-icon`)}))}}),te=typeof S.onClick=="function"||l&&l.type==="a",Q=d||null,$e=Q?a.createElement(a.Fragment,null,Q,l&&a.createElement("span",null,l)):l,ne=a.createElement("span",Object.assign({},R,{ref:t,className:X,style:M}),$e,Y,H&&a.createElement(Jc,{key:"preset",prefixCls:P}),k&&a.createElement(ed,{key:"status",prefixCls:P}));return E(te?a.createElement(Xc.Z,{component:"Tag"},ne):ne)});Jr.CheckableTag=Yc;var nd=Jr,qr,ea,ta,na,oa,ra,aa,ia,la,sa,od=(0,It.kc)(function(e,t){var n=e.token,o=e.prefixCls,r=e.responsive,i=e.css,l=e.stylish,d=e.isDarkMode,u=e.cx,p=t.rowNum,f=t.hasLink,g="".concat(o,"-features"),S="".concat(g,"-cover"),x="".concat(g,"-description"),w="".concat(g,"-title"),h="".concat(g,"-img"),$=20,v=function(k){return i(qr||(qr=(0,V.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),k,k,k*(22/24))},R=i(ea||(ea=(0,V.Z)([`
      transition: all `," ",`;
    `])),n.motionDurationSlow,n.motionEaseInOutCirc);return{cell:i(ta||(ta=(0,V.Z)([`
        overflow: hidden;
      `]))),container:i(na||(na=(0,V.Z)([`
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
      `])),R,n.colorFillContent,n.colorFillQuaternary,(0,Jt.$n)(.5,n.colorFillContent),(0,Jt.$n)(.5,n.colorFillQuaternary),n.colorBorder,n.boxShadowSecondary,S,$*p,h,v(100),x,w,f?14:20),title:u(w,R,i(oa||(oa=(0,V.Z)([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),n.lineHeightHeading3,n.colorText)),desc:u(x,R,i(ra||(ra=(0,V.Z)([`
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
        `])),n.colorTextSecondary,n.colorTextDescription,d?n.colorPrimary:n.colorPrimaryBgHover)),imgContainer:u(S,R,i(aa||(aa=(0,V.Z)([`
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
        `])),n.colorFillContent,v(24),n.gradientColor1,n.gradientColor2,n.colorBgContainer,(0,Jt.m4)(n.gradientColor2,.3),(0,Jt.m4)(n.gradientColor2,.3),(0,Jt.m4)(n.gradientColor1,.3))),img:u(h,R,i(ia||(ia=(0,V.Z)([`
          `,`;
          color: `,`;
        `])),v(20),n.colorWhite)),link:i(la||(la=(0,V.Z)([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),R,l.resetLinkColor,n.colorTextDescription,n.colorPrimaryHover),blur:i(sa||(sa=(0,V.Z)([`
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
      `])),l.heroBlurBall,d?.05:.08,r.mobile)}}),rd=function(t){var n=t.image,o=t.className,r=t.title,i=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return n.startsWith("http")||i.test(n)?(0,c.jsx)("img",{className:o,src:n,alt:r}):(0,c.jsx)(rn,{className:o,children:n})},ad=function(t){var n=t.imageType,o=t.row,r=t.column,i=t.hero,l=t.description,d=t.image,u=t.title,p=t.link,f=t.imageStyle,g=t.openExternal,S=o||7,x=od({rowNum:S,hasLink:!!p}),w=x.styles,h=x.theme;return(0,c.jsxs)("div",{className:w.container,style:{gridRow:"span ".concat(S),gridColumn:"span ".concat(r||1),cursor:p?"pointer":"default"},onClick:function(){p&&(g?window.open(p):I.m8.push(p))},children:[(0,c.jsxs)("div",{className:w.cell,children:[d&&(0,c.jsx)(rn,{"image-style":n,className:w.imgContainer,style:f,children:(0,c.jsx)(rd,{className:w.img,image:d,title:u})}),u&&(0,c.jsxs)(ct.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:w.title,children:[u,n==="soon"?(0,c.jsx)(nd,{color:h.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),l&&(0,c.jsx)("p",{dangerouslySetInnerHTML:{__html:l},className:w.desc}),p&&(0,c.jsx)("div",{className:w.link,children:(0,c.jsxs)(I.rU,{to:p,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,c.jsx)(so,{})]})})]}),i&&(0,c.jsx)("div",{className:w.blur})]})},id=ad,ca,da,ld=(0,It.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.responsive,r=e.css,i=e.cx,l="".concat(n,"-features");return{container:i(l,r(ca||(ca=(0,V.Z)([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),t.contentMaxWidth,o({mobile:r(da||(da=(0,V.Z)([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}});function ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function sd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ua(Object(n),!0).forEach(function(o){(0,L.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ua(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var cd=function(t){var n=t.items,o=t.style,r=ld(),i=r.styles;return n!=null&&n.length?(0,c.jsx)("div",{className:i.container,style:o,children:n.map(function(l){return(0,c.jsx)(id,sd({},l),l.title)})}):null},dd=cd,fa=function(t){return!!t.routeMeta.frontmatter.hero},ud=function(t){var n,o;return!!((n=t.routeMeta.frontmatter.hero)!==null&&n!==void 0&&n.showCustomContent)||!!((o=t.siteData.themeConfig.hero)!==null&&o!==void 0&&o.showCustomContent)},an=function(t,n){if(n)return n[t.locale.id]?n[t.locale.id]:n},fd=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((o=an(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||an(t,t.siteData.themeConfig.title)||t.siteData.themeConfig.name},md=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((o=an(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||an(t,t.siteData.themeConfig.description)},pd=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((o=an(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||an(t,t.siteData.themeConfig.actions)},gd=function(t){var n;return fa(t)?((n=an(t,t.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||an(t,t.siteData.themeConfig.features)||t.routeMeta.frontmatter.features||[]:[]},hd=function(){var t=(0,J.HX)(gd,Io.X);return t!=null&&t.length?(0,c.jsx)(dd,{items:t,style:{margin:"0 16px"}}):null},vd=hd,ma,bd=(0,It.kc)(function(e){var t=e.css,n=e.stylish;return{button:t(ma||(ma=(0,V.Z)([`
      border: none;

      `,`
      `,`

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `])),n.heroButtonGradient,n.heroGradientFlow)}}),xd=function(t){var n=t.children,o=bd(),r=o.styles;return(0,c.jsx)(Tn.ZP,{size:"large",shape:"round",type:"primary",className:r.button,children:n})},yd=xd,pa,ga,ha,va,ba,xa,ya,Cd=(0,It.kc)(function(e){var t=e.css,n=e.responsive,o=e.token,r=e.stylish,i=e.isDarkMode;return{container:t(pa||(pa=(0,V.Z)([`
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
  `])),o.colorTextSecondary,n({mobile:{fontSize:16}})),titleContainer:t(ga||(ga=(0,V.Z)([`
    position: relative;
  `]))),title:t(ha||(ha=(0,V.Z)([`
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
  `])),o.fontFamily,n({mobile:{fontSize:40}}),r.heroGradient,r.heroGradientFlow),titleShadow:t(va||(va=(0,V.Z)([`
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
  `])),i?o.colorWhite:o.colorTextBase,o.fontFamily,n({mobile:{fontSize:40}}),r.heroTextShadow),desc:t(ba||(ba=(0,V.Z)([`
    font-size: `,`px;
    color: `,`;

    `,` {
      font-size: `,`px;
      margin: 24px 16px;
    }
  `])),o.fontSizeHeading3,o.colorTextSecondary,n.mobile,o.fontSizeHeading5),actions:t(xa||(xa=(0,V.Z)([`
    margin-top: 48px;
    display: flex;
    justify-content: center;

    `,`
  `])),n({mobile:{marginTop:24}})),canvas:t(ya||(ya=(0,V.Z)([`
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
  `])),r.heroBlurBall,n.mobile)}}),Sd=function(t){var n=t.title,o=t.description,r=t.actions,i=Cd(),l=i.styles,d=i.cx;return(0,c.jsxs)(ct.D,{horizontal:!0,distribution:"center",className:l.container,children:[(0,c.jsx)("div",{className:l.canvas}),(0,c.jsxs)(rn,{children:[n&&(0,c.jsxs)("div",{className:l.titleContainer,children:[(0,c.jsx)("h1",{className:l.title,dangerouslySetInnerHTML:{__html:n}}),(0,c.jsx)("div",{className:d(l.titleShadow),dangerouslySetInnerHTML:{__html:n}})]}),o&&(0,c.jsx)("p",{className:l.desc,dangerouslySetInnerHTML:{__html:o}}),!!(r!=null&&r.length)&&(0,c.jsx)(Xn.ZP,{theme:{token:{fontSize:16,controlHeight:40}},children:(0,c.jsx)(ct.D,{horizontal:!0,gap:24,className:l.actions,children:r.map(function(u,p){var f=u.text,g=u.link,S=u.openExternal,x=/^(https?:)?\/\//i.test(g),w=p===0?(0,c.jsx)(yd,{children:f}):(0,c.jsx)(Tn.ZP,{size:"large",shape:"round",type:"default",children:f});return x?(0,c.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:w},"".concat(f,"-").concat(p)):(0,c.jsx)(I.rU,{to:g,target:S?"_blank":void 0,rel:"noreferrer",children:w},f)})})})]})]})},wd=Sd,Od=function(){var t=(0,J.HX)(fd),n=(0,J.HX)(md),o=(0,J.HX)(pd);return(0,c.jsx)(wd,{title:t,actions:o,description:n})},$d=Od,Ca,Id=(0,It.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.css,r=e.cx,i="".concat(n,"-home-contents");return{container:r(i,o(Ca||(Ca=(0,V.Z)([`
        width: 100%;
        max-width: `,`px;
        padding: 0 16px;
        box-sizing: border-box;
      `])),t.contentMaxWidth))}}),jd=(0,a.memo)(function(){var e=(0,J.HX)(yo),t=(0,I.pC)(),n=(0,J.HX)(ud),o=Id(),r=o.styles;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(I.ql,{children:(0,c.jsx)("title",{children:e})}),(0,c.jsxs)(ct.D,{align:"center",gap:80,children:[(0,c.jsx)(xr,{}),(0,c.jsx)($d,{}),(0,c.jsx)(vd,{}),n&&(0,c.jsx)("div",{className:r.container,children:t}),(0,c.jsx)(Oo,{})]})]})}),Ed=jd,Sa,Td=(0,It.vJ)(Sa||(Sa=(0,V.Z)([`
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
`])),function(e){return e.theme.colorBgLayout},function(e){var t=e.theme;return t.colorFill}),Md=(0,a.memo)(function(){var e=(0,I.YB)(),t=(0,I.TH)(),n=t.hash,o=(0,J.HX)(function(l){return l.routeMeta.frontmatter}),r=(0,J.HX)(fa),i=(0,J.HX)(function(l){return l.siteData.loading});return(0,a.useEffect)(function(){var l=n.replace("#","");l&&setTimeout(function(){var d=document.getElementById(decodeURIComponent(l));d&&(d.scrollIntoView(),window.scrollBy({top:-80}))},1)},[i,n]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(I.ql,{children:[(0,c.jsx)("html",{lang:e.locale.replace(/-.+$/,"")}),o.title&&(0,c.jsx)("meta",{property:"og:title",content:o.title}),o.description&&(0,c.jsx)("meta",{name:"description",content:o.description}),o.description&&(0,c.jsx)("meta",{property:"og:description",content:o.description}),o.keywords&&(0,c.jsx)("meta",{name:"keywords",content:o.keywords.join(",")}),o.keywords&&(0,c.jsx)("meta",{property:"og:keywords",content:o.keywords.join(",")})]}),r?(0,c.jsx)(Ed,{}):(0,c.jsx)(Vc,{})]})});s.g.__ANTD_CACHE__=y.Y.cache;var kd=function(t){var n=t.children,o=(0,J.HX)(jo,A());return(0,c.jsx)(sn,{cache:y.Y.cache,token:o,children:n})},Nd=(0,a.memo)(function(e){var t=e.initState;return(0,c.jsxs)(J.zt,{createStore:function(){return(0,J.MT)(t)},children:[(0,c.jsx)(Ua,{}),(0,c.jsxs)(kd,{children:[(0,c.jsx)(Td,{}),(0,c.jsx)(Md,{})]})]})}),Dd=function(){var e=(0,I.WF)(),t=(0,I.tx)(),n=(0,I.eL)(),o=(0,I.zh)(),r=(0,I.OK)(),i=(0,I.TH)(),l=(0,I.bU)(),d=(0,a.useMemo)(function(){return{siteData:e,navData:r,locale:l,location:i,routeMeta:n,tabMeta:o,sidebar:t}},[]);return(0,c.jsx)(Nd,{initState:d})}},93538:function(B,F,s){"use strict";s.d(F,{K1:function(){return A},TL:function(){return a},e9:function(){return se},gt:function(){return L}});var y=s(4942);function I(ye,N){var z=Object.keys(ye);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(ye);N&&(_=_.filter(function(Fe){return Object.getOwnPropertyDescriptor(ye,Fe).enumerable})),z.push.apply(z,_)}return z}function U(ye){for(var N=1;N<arguments.length;N++){var z=arguments[N]!=null?arguments[N]:{};N%2?I(Object(z),!0).forEach(function(_){(0,y.Z)(ye,_,z[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ye,Object.getOwnPropertyDescriptors(z)):I(Object(z)).forEach(function(_){Object.defineProperty(ye,_,Object.getOwnPropertyDescriptor(z,_))})}return ye}var A=function(N){if(N.location.pathname==="/")return"/";var z=N.navData.filter(function(_){return _.link!=="/"}).find(function(_){return N.location.pathname.startsWith(_.activePath||_.link)});return(z==null?void 0:z.activePath)||(z==null?void 0:z.link)||""},a=function(N){var z,_,Fe=N.routeMeta,ht=Fe.toc,dt=Fe.frontmatter;return(z=N.tabMeta)!==null&&z!==void 0&&z.toc&&(ht=N.tabMeta.toc),(_=N.tabMeta)!==null&&_!==void 0&&_.frontmatter&&(dt=N.tabMeta.frontmatter),ht.reduce(function(Ee,oe){var re=function(mt){if(!dt.tocDepth||typeof dt.tocDepth=="number"&&dt.tocDepth>mt-1)return!0};if(oe.depth===2&&re(2))Ee.push(U({},oe));else if(oe.depth===3&&re(3)){var Te=Ee[Ee.length-1];Te&&(Te.children=Te.children||[],Te.children.push(U({},oe)))}return Ee},[])},L=function(N){var z;return((z=N.sidebar)===null||z===void 0?void 0:z.map(function(_){return _.children}).flat())||[]},se=function(N){var z=L(N),_=N.location.pathname,Fe=z.findIndex(function(ht){return ht.link===_});return{prev:z[Fe-1],currentIndex:Fe,next:z[Fe+1]}}},40123:function(B,F,s){"use strict";var y=s(67294),I=function(){return y.createElement(y.Fragment,null)};F.Z=I},62705:function(B,F,s){var y=s(55639),I=y.Symbol;B.exports=I},44239:function(B,F,s){var y=s(62705),I=s(89607),U=s(2333),A="[object Null]",a="[object Undefined]",L=y?y.toStringTag:void 0;function se(ye){return ye==null?ye===void 0?a:A:L&&L in Object(ye)?I(ye):U(ye)}B.exports=se},27561:function(B,F,s){var y=s(67990),I=/^\s+/;function U(A){return A&&A.slice(0,y(A)+1).replace(I,"")}B.exports=U},31957:function(B,F,s){var y=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g;B.exports=y},89607:function(B,F,s){var y=s(62705),I=Object.prototype,U=I.hasOwnProperty,A=I.toString,a=y?y.toStringTag:void 0;function L(se){var ye=U.call(se,a),N=se[a];try{se[a]=void 0;var z=!0}catch(Fe){}var _=A.call(se);return z&&(ye?se[a]=N:delete se[a]),_}B.exports=L},2333:function(B){var F=Object.prototype,s=F.toString;function y(I){return s.call(I)}B.exports=y},55639:function(B,F,s){var y=s(31957),I=typeof self=="object"&&self&&self.Object===Object&&self,U=y||I||Function("return this")();B.exports=U},67990:function(B){var F=/\s/;function s(y){for(var I=y.length;I--&&F.test(y.charAt(I)););return I}B.exports=s},23279:function(B,F,s){var y=s(13218),I=s(7771),U=s(14841),A="Expected a function",a=Math.max,L=Math.min;function se(ye,N,z){var _,Fe,ht,dt,Ee,oe,re=0,Te=!1,Be=!1,mt=!0;if(typeof ye!="function")throw new TypeError(A);N=U(N)||0,y(z)&&(Te=!!z.leading,Be="maxWait"in z,ht=Be?a(U(z.maxWait)||0,N):ht,mt="trailing"in z?!!z.trailing:mt);function He(Ae){var be=_,Gt=Fe;return _=Fe=void 0,re=Ae,dt=ye.apply(Gt,be),dt}function yt(Ae){return re=Ae,Ee=setTimeout(Ut,N),Te?He(Ae):dt}function et(Ae){var be=Ae-oe,Gt=Ae-re,zt=N-be;return Be?L(zt,ht-Gt):zt}function c(Ae){var be=Ae-oe,Gt=Ae-re;return oe===void 0||be>=N||be<0||Be&&Gt>=ht}function Ut(){var Ae=I();if(c(Ae))return Mt(Ae);Ee=setTimeout(Ut,et(Ae))}function Mt(Ae){return Ee=void 0,mt&&_?He(Ae):(_=Fe=void 0,dt)}function ln(){Ee!==void 0&&clearTimeout(Ee),re=0,_=oe=Fe=Ee=void 0}function sn(){return Ee===void 0?dt:Mt(I())}function Ft(){var Ae=I(),be=c(Ae);if(_=arguments,Fe=this,oe=Ae,be){if(Ee===void 0)return yt(oe);if(Be)return clearTimeout(Ee),Ee=setTimeout(Ut,N),He(oe)}return Ee===void 0&&(Ee=setTimeout(Ut,N)),dt}return Ft.cancel=ln,Ft.flush=sn,Ft}B.exports=se},13218:function(B){function F(s){var y=typeof s;return s!=null&&(y=="object"||y=="function")}B.exports=F},37005:function(B){function F(s){return s!=null&&typeof s=="object"}B.exports=F},33448:function(B,F,s){var y=s(44239),I=s(37005),U="[object Symbol]";function A(a){return typeof a=="symbol"||I(a)&&y(a)==U}B.exports=A},7771:function(B,F,s){var y=s(55639),I=function(){return y.Date.now()};B.exports=I},14841:function(B,F,s){var y=s(27561),I=s(13218),U=s(33448),A=NaN,a=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,se=/^0o[0-7]+$/i,ye=parseInt;function N(z){if(typeof z=="number")return z;if(U(z))return A;if(I(z)){var _=typeof z.valueOf=="function"?z.valueOf():z;z=I(_)?_+"":_}if(typeof z!="string")return z===0?z:+z;z=y(z);var Fe=L.test(z);return Fe||se.test(z)?ye(z.slice(2),Fe?2:8):a.test(z)?A:+z}B.exports=N},96446:function(B,F,s){var y=s(37923);function I(U){if(Array.isArray(U))return y(U)}B.exports=I,B.exports.__esModule=!0,B.exports.default=B.exports},96936:function(B){function F(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}B.exports=F,B.exports.__esModule=!0,B.exports.default=B.exports},88619:function(B){function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}B.exports=F,B.exports.__esModule=!0,B.exports.default=B.exports},19632:function(B,F,s){var y=s(96446),I=s(96936),U=s(96263),A=s(88619);function a(L){return y(L)||I(L)||U(L)||A()}B.exports=a,B.exports.__esModule=!0,B.exports.default=B.exports},76248:function(B,F,s){"use strict";s.d(F,{X:function(){return y}});function y(U,A){if(Object.is(U,A))return!0;if(typeof U!="object"||U===null||typeof A!="object"||A===null)return!1;if(U instanceof Map&&A instanceof Map){if(U.size!==A.size)return!1;for(const[L,se]of U)if(!Object.is(se,A.get(L)))return!1;return!0}if(U instanceof Set&&A instanceof Set){if(U.size!==A.size)return!1;for(const L of U)if(!A.has(L))return!1;return!0}const a=Object.keys(U);if(a.length!==Object.keys(A).length)return!1;for(const L of a)if(!Object.prototype.hasOwnProperty.call(A,L)||!Object.is(U[L],A[L]))return!1;return!0}var I=(U,A)=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`."),y(U,A))}}]);
}());