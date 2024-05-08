(self.webpackChunkhezhijian249=self.webpackChunkhezhijian249||[]).push([[1335],{58401:function(A,q,c){"use strict";c.d(q,{F:function(){return ge}});var v=c(86499),I=c(67294),V=c(8410);function Z(){const[,ue]=I.useReducer(oe=>oe+1,0);return ue}var a=c(29691);const U=["xxl","xl","lg","md","sm","xs"],ce=ue=>({xs:`(max-width: ${ue.screenXSMax}px)`,sm:`(min-width: ${ue.screenSM}px)`,md:`(min-width: ${ue.screenMD}px)`,lg:`(min-width: ${ue.screenLG}px)`,xl:`(min-width: ${ue.screenXL}px)`,xxl:`(min-width: ${ue.screenXXL}px)`}),pe=ue=>{const oe=ue,we=[].concat(U).reverse();return we.forEach((Xe,Ve)=>{const Ne=Xe.toUpperCase(),lt=`screen${Ne}Min`,s=`screen${Ne}`;if(!(oe[lt]<=oe[s]))throw new Error(`${lt}<=${s} fails : !(${oe[lt]}<=${oe[s]})`);if(Ve<we.length-1){const _e=`screen${Ne}Max`;if(!(oe[s]<=oe[_e]))throw new Error(`${s}<=${_e} fails : !(${oe[s]}<=${oe[_e]})`);const ut=`screen${we[Ve+1].toUpperCase()}Min`;if(!(oe[_e]<=oe[ut]))throw new Error(`${_e}<=${ut} fails : !(${oe[_e]}<=${oe[ut]})`)}}),ue};function T(){const[,ue]=(0,a.ZP)(),oe=ce(pe(ue));return I.useMemo(()=>{const we=new Map;let Xe=-1,Ve={};return{matchHandlers:{},dispatch(Ne){return Ve=Ne,we.forEach(lt=>lt(Ve)),we.size>=1},subscribe(Ne){return we.size||this.register(),Xe+=1,we.set(Xe,Ne),Ne(Ve),Xe},unsubscribe(Ne){we.delete(Ne),we.size||this.unregister()},unregister(){Object.keys(oe).forEach(Ne=>{const lt=oe[Ne],s=this.matchHandlers[lt];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),we.clear()},register(){Object.keys(oe).forEach(Ne=>{const lt=oe[Ne],s=Mt=>{let{matches:ut}=Mt;this.dispatch(Object.assign(Object.assign({},Ve),{[Ne]:ut}))},_e=window.matchMedia(lt);_e.addListener(s),this.matchHandlers[lt]={mql:_e,listener:s},s(_e)})},responsiveMap:oe}},[ue])}const P=(ue,oe)=>{if(oe&&typeof oe=="object")for(let we=0;we<U.length;we++){const Xe=U[we];if(ue[Xe]&&oe[Xe]!==void 0)return oe[Xe]}};function ae(){let ue=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const oe=(0,I.useRef)({}),we=Z(),Xe=T();return(0,V.Z)(()=>{const Ve=Xe.subscribe(Ne=>{oe.current=Ne,ue&&we()});return()=>Xe.unsubscribe(Ve)},[]),oe.current}var ke=ae;function Qe(){return ke()}var Je={useBreakpoint:Qe},ge=function(){var oe=Je.useBreakpoint();return(0,I.useMemo)(function(){return(0,v.f)(oe)},[oe])}},98787:function(A,q,c){"use strict";c.d(q,{o2:function(){return a},yT:function(){return U}});var v=c(74902),I=c(8796);const V=I.i.map(ce=>`${ce}-inverse`),Z=["success","processing","error","default","warning"];function a(ce){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat((0,v.Z)(V),(0,v.Z)(I.i)).includes(ce):I.i.includes(ce)}function U(ce){return Z.includes(ce)}},68354:function(A,q,c){"use strict";c.d(q,{Z:function(){return cn}});var v=c(67294),I=c(95480),V=c(93967),Z=c.n(V),a=function(b,g){var u={};for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&g.indexOf(S)<0&&(u[S]=b[S]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,S=Object.getOwnPropertySymbols(b);C<S.length;C++)g.indexOf(S[C])<0&&Object.prototype.propertyIsEnumerable.call(b,S[C])&&(u[S[C]]=b[S[C]]);return u};const U={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},ce=v.createContext({}),pe=(()=>{let b=0;return function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return b+=1,`${g}${b}`}})(),T=null;var P=null,ae=c(89705),ke=c(56790),Qe=c(98423),Je=c(33603),ge=c(96159),ue=c(53124),oe=c(35792),we=function(b,g){var u={};for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&g.indexOf(S)<0&&(u[S]=b[S]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,S=Object.getOwnPropertySymbols(b);C<S.length;C++)g.indexOf(S[C])<0&&Object.prototype.propertyIsEnumerable.call(b,S[C])&&(u[S[C]]=b[S[C]]);return u},Ve=b=>{const{prefixCls:g,className:u,dashed:S}=b,C=we(b,["prefixCls","className","dashed"]),{getPrefixCls:F}=v.useContext(ue.E_),_=F("menu",g),K=Z()({[`${_}-item-divider-dashed`]:!!S},u);return v.createElement(I.iz,Object.assign({className:K},C))},Ne=c(50344),lt=c(68866),_e=(0,v.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),ut=b=>{var g;const{className:u,children:S,icon:C,title:F,danger:_}=b,{prefixCls:K,firstLevel:B,direction:be,disableMenuItemTitleTooltip:Ge,inlineCollapsed:de}=v.useContext(_e),Ke=tt=>{const bt=v.createElement("span",{className:`${K}-title-content`},S);return(!C||v.isValidElement(S)&&S.type==="span")&&S&&tt&&B&&typeof S=="string"?v.createElement("div",{className:`${K}-inline-collapsed-noicon`},S.charAt(0)):bt},{siderCollapsed:De}=v.useContext(ce);let Ee=F;typeof F=="undefined"?Ee=B?S:"":F===!1&&(Ee="");const ze={title:Ee};!De&&!de&&(ze.title=null,ze.open=!1);const Ue=(0,Ne.Z)(S).length;let He=v.createElement(I.ck,Object.assign({},(0,Qe.Z)(b,["title","icon","danger"]),{className:Z()({[`${K}-item-danger`]:_,[`${K}-item-only-child`]:(C?Ue+1:Ue)===1},u),title:typeof F=="string"?F:void 0}),(0,ge.Tm)(C,{className:Z()(v.isValidElement(C)?(g=C.props)===null||g===void 0?void 0:g.className:"",`${K}-item-icon`)}),Ke(de));return Ge||(He=v.createElement(lt.Z,Object.assign({},ze,{placement:be==="rtl"?"left":"right",overlayClassName:`${K}-inline-collapsed-tooltip`}),He)),He},tn=c(87263),kt=b=>{var g;const{popupClassName:u,icon:S,title:C,theme:F}=b,_=v.useContext(_e),{prefixCls:K,inlineCollapsed:B,theme:be}=_,Ge=(0,I.Xl)();let de;if(!S)de=B&&!Ge.length&&C&&typeof C=="string"?v.createElement("div",{className:`${K}-inline-collapsed-noicon`},C.charAt(0)):v.createElement("span",{className:`${K}-title-content`},C);else{const Ee=v.isValidElement(C)&&C.type==="span";de=v.createElement(v.Fragment,null,(0,ge.Tm)(S,{className:Z()(v.isValidElement(S)?(g=S.props)===null||g===void 0?void 0:g.className:"",`${K}-item-icon`)}),Ee?C:v.createElement("span",{className:`${K}-title-content`},C))}const Ke=v.useMemo(()=>Object.assign(Object.assign({},_),{firstLevel:!1}),[_]),[De]=(0,tn.Cn)("Menu");return v.createElement(_e.Provider,{value:Ke},v.createElement(I.Wd,Object.assign({},(0,Qe.Z)(b,["icon"]),{title:de,popupClassName:Z()(K,u,`${K}-${F||be}`),popupStyle:{zIndex:De}})))},Ae=function(b,g){var u={};for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&g.indexOf(S)<0&&(u[S]=b[S]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,S=Object.getOwnPropertySymbols(b);C<S.length;C++)g.indexOf(S[C])<0&&Object.prototype.propertyIsEnumerable.call(b,S[C])&&(u[S[C]]=b[S[C]]);return u};function mt(b){return(b||[]).map((g,u)=>{if(g&&typeof g=="object"){const S=g,{label:C,children:F,key:_,type:K}=S,B=Ae(S,["label","children","key","type"]),be=_!=null?_:`tmp-${u}`;return F||K==="group"?K==="group"?v.createElement(I.BW,Object.assign({key:be},B,{title:C}),mt(F)):v.createElement(kt,Object.assign({key:be},B,{title:C}),mt(F)):K==="divider"?v.createElement(Ve,Object.assign({key:be},B)):v.createElement(ut,Object.assign({key:be},B),C)}return null}).filter(g=>g)}function At(b){return v.useMemo(()=>b&&mt(b),[b])}var Xt=function(b,g){var u={};for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&g.indexOf(S)<0&&(u[S]=b[S]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,S=Object.getOwnPropertySymbols(b);C<S.length;C++)g.indexOf(S[C])<0&&Object.prototype.propertyIsEnumerable.call(b,S[C])&&(u[S[C]]=b[S[C]]);return u};const xn=v.createContext(null),ln=null;var yn=xn,Me=c(14947),fn=c(10274),Jt=c(14747),sn=c(33507),nn=c(67771),W=c(50438),re=c(91945),he=c(45503),ie=b=>{const{componentCls:g,motionDurationSlow:u,horizontalLineHeight:S,colorSplit:C,lineWidth:F,lineType:_,itemPaddingInline:K}=b;return{[`${g}-horizontal`]:{lineHeight:S,border:0,borderBottom:`${(0,Me.bf)(F)} ${_} ${C}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${g}-item, ${g}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:K},[`> ${g}-item:hover,
        > ${g}-item-active,
        > ${g}-submenu ${g}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${g}-item, ${g}-submenu-title`]:{transition:[`border-color ${u}`,`background ${u}`].join(",")},[`${g}-submenu-arrow`]:{display:"none"}}}},Ie=b=>{let{componentCls:g,menuArrowOffset:u,calc:S}=b;return{[`${g}-rtl`]:{direction:"rtl"},[`${g}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${g}-rtl${g}-vertical,
    ${g}-submenu-rtl ${g}-vertical`]:{[`${g}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,Me.bf)(S(u).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,Me.bf)(u)})`}}}}};const Ce=b=>Object.assign({},(0,Jt.oN)(b));var G=(b,g)=>{const{componentCls:u,itemColor:S,itemSelectedColor:C,groupTitleColor:F,itemBg:_,subMenuItemBg:K,itemSelectedBg:B,activeBarHeight:be,activeBarWidth:Ge,activeBarBorderWidth:de,motionDurationSlow:Ke,motionEaseInOut:De,motionEaseOut:Ee,itemPaddingInline:ze,motionDurationMid:Ue,itemHoverColor:He,lineType:tt,colorSplit:bt,itemDisabledColor:R,dangerItemColor:Se,dangerItemHoverColor:at,dangerItemSelectedColor:it,dangerItemActiveBg:jt,dangerItemSelectedBg:Le,popupBg:Pt,itemHoverBg:zt,itemActiveBg:xt,menuSubMenuBg:dt,horizontalItemSelectedColor:ft,horizontalItemSelectedBg:It,horizontalItemBorderRadius:Gt,horizontalItemHoverBg:st}=b;return{[`${u}-${g}, ${u}-${g} > ${u}`]:{color:S,background:_,[`&${u}-root:focus-visible`]:Object.assign({},Ce(b)),[`${u}-item-group-title`]:{color:F},[`${u}-submenu-selected`]:{[`> ${u}-submenu-title`]:{color:C}},[`${u}-item, ${u}-submenu-title`]:{color:S,[`&:not(${u}-item-disabled):focus-visible`]:Object.assign({},Ce(b))},[`${u}-item-disabled, ${u}-submenu-disabled`]:{color:`${R} !important`},[`${u}-item:not(${u}-item-selected):not(${u}-submenu-selected)`]:{[`&:hover, > ${u}-submenu-title:hover`]:{color:He}},[`&:not(${u}-horizontal)`]:{[`${u}-item:not(${u}-item-selected)`]:{"&:hover":{backgroundColor:zt},"&:active":{backgroundColor:xt}},[`${u}-submenu-title`]:{"&:hover":{backgroundColor:zt},"&:active":{backgroundColor:xt}}},[`${u}-item-danger`]:{color:Se,[`&${u}-item:hover`]:{[`&:not(${u}-item-selected):not(${u}-submenu-selected)`]:{color:at}},[`&${u}-item:active`]:{background:jt}},[`${u}-item a`]:{"&, &:hover":{color:"inherit"}},[`${u}-item-selected`]:{color:C,[`&${u}-item-danger`]:{color:it},["a, a:hover"]:{color:"inherit"}},[`& ${u}-item-selected`]:{backgroundColor:B,[`&${u}-item-danger`]:{backgroundColor:Le}},[`&${u}-submenu > ${u}`]:{backgroundColor:dt},[`&${u}-popup > ${u}`]:{backgroundColor:Pt},[`&${u}-submenu-popup > ${u}`]:{backgroundColor:Pt},[`&${u}-horizontal`]:Object.assign(Object.assign({},g==="dark"?{borderBottom:0}:{}),{[`> ${u}-item, > ${u}-submenu`]:{top:de,marginTop:b.calc(de).mul(-1).equal(),marginBottom:0,borderRadius:Gt,"&::after":{position:"absolute",insetInline:ze,bottom:0,borderBottom:`${(0,Me.bf)(be)} solid transparent`,transition:`border-color ${Ke} ${De}`,content:'""'},["&:hover, &-active, &-open"]:{background:st,"&::after":{borderBottomWidth:be,borderBottomColor:ft}},["&-selected"]:{color:ft,backgroundColor:It,"&:hover":{backgroundColor:It},"&::after":{borderBottomWidth:be,borderBottomColor:ft}}}}),[`&${u}-root`]:{[`&${u}-inline, &${u}-vertical`]:{borderInlineEnd:`${(0,Me.bf)(de)} ${tt} ${bt}`}},[`&${u}-inline`]:{[`${u}-sub${u}-inline`]:{background:K},[`${u}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,Me.bf)(Ge)} solid ${C}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${Ue} ${Ee}`,`opacity ${Ue} ${Ee}`].join(","),content:'""'},[`&${u}-item-danger`]:{"&::after":{borderInlineEndColor:it}}},[`${u}-selected, ${u}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${Ue} ${De}`,`opacity ${Ue} ${De}`].join(",")}}}}}};const ot=b=>{const{componentCls:g,itemHeight:u,itemMarginInline:S,padding:C,menuArrowSize:F,marginXS:_,itemMarginBlock:K,itemWidth:B}=b,be=b.calc(F).add(C).add(_).equal();return{[`${g}-item`]:{position:"relative",overflow:"hidden"},[`${g}-item, ${g}-submenu-title`]:{height:u,lineHeight:(0,Me.bf)(u),paddingInline:C,overflow:"hidden",textOverflow:"ellipsis",marginInline:S,marginBlock:K,width:B},[`> ${g}-item,
            > ${g}-submenu > ${g}-submenu-title`]:{height:u,lineHeight:(0,Me.bf)(u)},[`${g}-item-group-list ${g}-submenu-title,
            ${g}-submenu-title`]:{paddingInlineEnd:be}}};var rt=b=>{const{componentCls:g,iconCls:u,itemHeight:S,colorTextLightSolid:C,dropdownWidth:F,controlHeightLG:_,motionDurationMid:K,motionEaseOut:B,paddingXL:be,itemMarginInline:Ge,fontSizeLG:de,motionDurationSlow:Ke,paddingXS:De,boxShadowSecondary:Ee,collapsedWidth:ze,collapsedIconSize:Ue}=b,He={height:S,lineHeight:(0,Me.bf)(S),listStylePosition:"inside",listStyleType:"disc"};return[{[g]:{["&-inline, &-vertical"]:Object.assign({[`&${g}-root`]:{boxShadow:"none"}},ot(b))},[`${g}-submenu-popup`]:{[`${g}-vertical`]:Object.assign(Object.assign({},ot(b)),{boxShadow:Ee})}},{[`${g}-submenu-popup ${g}-vertical${g}-sub`]:{minWidth:F,maxHeight:`calc(100vh - ${(0,Me.bf)(b.calc(_).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${g}-inline`]:{width:"100%",[`&${g}-root`]:{[`${g}-item, ${g}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${Ke}`,`background ${Ke}`,`padding ${K} ${B}`,`padding-inline calc(50% - ${(0,Me.bf)(b.calc(de).div(2).equal())} - ${(0,Me.bf)(Ge)})`].join(","),[`> ${g}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${g}-sub${g}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${g}-submenu > ${g}-submenu-title`]:He,[`& ${g}-item-group-title`]:{paddingInlineStart:be}},[`${g}-item`]:He}},{[`${g}-inline-collapsed`]:{width:ze,[`&${g}-root`]:{[`${g}-item, ${g}-submenu ${g}-submenu-title`]:{[`> ${g}-inline-collapsed-noicon`]:{fontSize:de,textAlign:"center"}}},[`> ${g}-item,
          > ${g}-item-group > ${g}-item-group-list > ${g}-item,
          > ${g}-item-group > ${g}-item-group-list > ${g}-submenu > ${g}-submenu-title,
          > ${g}-submenu > ${g}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,Me.bf)(b.calc(de).div(2).equal())} - ${(0,Me.bf)(Ge)})`,textOverflow:"clip",[`
            ${g}-submenu-arrow,
            ${g}-submenu-expand-icon
          `]:{opacity:0},[`${g}-item-icon, ${u}`]:{margin:0,fontSize:Ue,lineHeight:(0,Me.bf)(S),"+ span":{display:"inline-block",opacity:0}}},[`${g}-item-icon, ${u}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${g}-item-icon, ${u}`]:{display:"none"},"a, a:hover":{color:C}},[`${g}-item-group-title`]:Object.assign(Object.assign({},Jt.vS),{paddingInline:De})}}]};const St=b=>{const{componentCls:g,motionDurationSlow:u,motionDurationMid:S,motionEaseInOut:C,motionEaseOut:F,iconCls:_,iconSize:K,iconMarginInlineEnd:B}=b;return{[`${g}-item, ${g}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${u}`,`background ${u}`,`padding ${u} ${C}`].join(","),[`${g}-item-icon, ${_}`]:{minWidth:K,fontSize:K,transition:[`font-size ${S} ${F}`,`margin ${u} ${C}`,`color ${u}`].join(","),"+ span":{marginInlineStart:B,opacity:1,transition:[`opacity ${u} ${C}`,`margin ${u}`,`color ${u}`].join(",")}},[`${g}-item-icon`]:Object.assign({},(0,Jt.Ro)()),[`&${g}-item-only-child`]:{[`> ${_}, > ${g}-item-icon`]:{marginInlineEnd:0}}},[`${g}-item-disabled, ${g}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${g}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},wt=b=>{const{componentCls:g,motionDurationSlow:u,motionEaseInOut:S,borderRadius:C,menuArrowSize:F,menuArrowOffset:_}=b;return{[`${g}-submenu`]:{["&-expand-icon, &-arrow"]:{position:"absolute",top:"50%",insetInlineEnd:b.margin,width:F,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${u} ${S}, opacity ${u}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:b.calc(F).mul(.6).equal(),height:b.calc(F).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:C,transition:[`background ${u} ${S}`,`transform ${u} ${S}`,`top ${u} ${S}`,`color ${u} ${S}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,Me.bf)(b.calc(_).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,Me.bf)(_)})`}}}}},$t=b=>{const{antCls:g,componentCls:u,fontSize:S,motionDurationSlow:C,motionDurationMid:F,motionEaseInOut:_,paddingXS:K,padding:B,colorSplit:be,lineWidth:Ge,zIndexPopup:de,borderRadiusLG:Ke,subMenuItemBorderRadius:De,menuArrowSize:Ee,menuArrowOffset:ze,lineType:Ue,groupTitleLineHeight:He,groupTitleFontSize:tt}=b;return[{"":{[`${u}`]:Object.assign(Object.assign({},(0,Jt.dF)()),{["&-hidden"]:{display:"none"}})},[`${u}-submenu-hidden`]:{display:"none"}},{[u]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,Jt.Wf)(b)),(0,Jt.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:S,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${C} cubic-bezier(0.2, 0, 0, 1) 0s`,["ul, ol"]:{margin:0,padding:0,listStyle:"none"},["&-overflow"]:{display:"flex",[`${u}-item`]:{flex:"none"}},[`${u}-item, ${u}-submenu, ${u}-submenu-title`]:{borderRadius:b.itemBorderRadius},[`${u}-item-group-title`]:{padding:`${(0,Me.bf)(K)} ${(0,Me.bf)(B)}`,fontSize:tt,lineHeight:He,transition:`all ${C}`},[`&-horizontal ${u}-submenu`]:{transition:[`border-color ${C} ${_}`,`background ${C} ${_}`].join(",")},[`${u}-submenu, ${u}-submenu-inline`]:{transition:[`border-color ${C} ${_}`,`background ${C} ${_}`,`padding ${F} ${_}`].join(",")},[`${u}-submenu ${u}-sub`]:{cursor:"initial",transition:[`background ${C} ${_}`,`padding ${C} ${_}`].join(",")},[`${u}-title-content`]:{transition:`color ${C}`,[`> ${g}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${u}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${u}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:be,borderStyle:Ue,borderWidth:0,borderTopWidth:Ge,marginBlock:Ge,padding:0,"&-dashed":{borderStyle:"dashed"}}}),St(b)),{[`${u}-item-group`]:{[`${u}-item-group-list`]:{margin:0,padding:0,[`${u}-item, ${u}-submenu-title`]:{paddingInline:`${(0,Me.bf)(b.calc(S).mul(2).equal())} ${(0,Me.bf)(B)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:de,borderRadius:Ke,boxShadow:"none",transformOrigin:"0 0",[`&${u}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${u}`]:Object.assign(Object.assign(Object.assign({borderRadius:Ke},St(b)),wt(b)),{[`${u}-item, ${u}-submenu > ${u}-submenu-title`]:{borderRadius:De},[`${u}-submenu-title::after`]:{transition:`transform ${C} ${_}`}})},[`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]:{transformOrigin:"100% 0"},[`
          &-placement-leftBottom,
          &-placement-topRight,
          `]:{transformOrigin:"100% 100%"},[`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]:{transformOrigin:"0 100%"},[`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]:{transformOrigin:"0 0"},[`
          &-placement-leftTop,
          &-placement-leftBottom
          `]:{paddingInlineEnd:b.paddingXS},[`
          &-placement-rightTop,
          &-placement-rightBottom
          `]:{paddingInlineStart:b.paddingXS},[`
          &-placement-topRight,
          &-placement-topLeft
          `]:{paddingBottom:b.paddingXS},[`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]:{paddingTop:b.paddingXS}}}),wt(b)),{[`&-inline-collapsed ${u}-submenu-arrow,
        &-inline ${u}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,Me.bf)(ze)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,Me.bf)(b.calc(ze).mul(-1).equal())})`}},[`${u}-submenu-open${u}-submenu-inline > ${u}-submenu-title > ${u}-submenu-arrow`]:{transform:`translateY(${(0,Me.bf)(b.calc(Ee).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,Me.bf)(b.calc(ze).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,Me.bf)(ze)})`}}})},{[`${g}-layout-header`]:{[u]:{lineHeight:"inherit"}}}]},Vt=b=>{var g,u,S;const{colorPrimary:C,colorError:F,colorTextDisabled:_,colorErrorBg:K,colorText:B,colorTextDescription:be,colorBgContainer:Ge,colorFillAlter:de,colorFillContent:Ke,lineWidth:De,lineWidthBold:Ee,controlItemBgActive:ze,colorBgTextHover:Ue,controlHeightLG:He,lineHeight:tt,colorBgElevated:bt,marginXXS:R,padding:Se,fontSize:at,controlHeightSM:it,fontSizeLG:jt,colorTextLightSolid:Le,colorErrorHover:Pt}=b,zt=(g=b.activeBarWidth)!==null&&g!==void 0?g:0,xt=(u=b.activeBarBorderWidth)!==null&&u!==void 0?u:De,dt=(S=b.itemMarginInline)!==null&&S!==void 0?S:b.marginXXS,ft=new fn.C(Le).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:b.zIndexPopupBase+50,radiusItem:b.borderRadiusLG,itemBorderRadius:b.borderRadiusLG,radiusSubMenuItem:b.borderRadiusSM,subMenuItemBorderRadius:b.borderRadiusSM,colorItemText:B,itemColor:B,colorItemTextHover:B,itemHoverColor:B,colorItemTextHoverHorizontal:C,horizontalItemHoverColor:C,colorGroupTitle:be,groupTitleColor:be,colorItemTextSelected:C,itemSelectedColor:C,colorItemTextSelectedHorizontal:C,horizontalItemSelectedColor:C,colorItemBg:Ge,itemBg:Ge,colorItemBgHover:Ue,itemHoverBg:Ue,colorItemBgActive:Ke,itemActiveBg:ze,colorSubItemBg:de,subMenuItemBg:de,colorItemBgSelected:ze,itemSelectedBg:ze,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:zt,colorActiveBarHeight:Ee,activeBarHeight:Ee,colorActiveBarBorderSize:De,activeBarBorderWidth:xt,colorItemTextDisabled:_,itemDisabledColor:_,colorDangerItemText:F,dangerItemColor:F,colorDangerItemTextHover:F,dangerItemHoverColor:F,colorDangerItemTextSelected:F,dangerItemSelectedColor:F,colorDangerItemBgActive:K,dangerItemActiveBg:K,colorDangerItemBgSelected:K,dangerItemSelectedBg:K,itemMarginInline:dt,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:He,groupTitleLineHeight:tt,collapsedWidth:He*2,popupBg:bt,itemMarginBlock:R,itemPaddingInline:Se,horizontalLineHeight:`${He*1.15}px`,iconSize:at,iconMarginInlineEnd:it-at,collapsedIconSize:jt,groupTitleFontSize:at,darkItemDisabledColor:new fn.C(Le).setAlpha(.25).toRgbString(),darkItemColor:ft,darkDangerItemColor:F,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:Le,darkItemSelectedBg:C,darkDangerItemSelectedBg:F,darkItemHoverBg:"transparent",darkGroupTitleColor:ft,darkItemHoverColor:Le,darkDangerItemHoverColor:Pt,darkDangerItemSelectedColor:Le,darkDangerItemActiveBg:F,itemWidth:zt?`calc(100% + ${xt}px)`:`calc(100% - ${dt*2}px)`}};var Ot=function(b){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return(0,re.I$)("Menu",C=>{const{colorBgElevated:F,controlHeightLG:_,fontSize:K,darkItemColor:B,darkDangerItemColor:be,darkItemBg:Ge,darkSubMenuItemBg:de,darkItemSelectedColor:Ke,darkItemSelectedBg:De,darkDangerItemSelectedBg:Ee,darkItemHoverBg:ze,darkGroupTitleColor:Ue,darkItemHoverColor:He,darkItemDisabledColor:tt,darkDangerItemHoverColor:bt,darkDangerItemSelectedColor:R,darkDangerItemActiveBg:Se,popupBg:at,darkPopupBg:it}=C,jt=C.calc(K).div(7).mul(5).equal(),Le=(0,he.TS)(C,{menuArrowSize:jt,menuHorizontalHeight:C.calc(_).mul(1.15).equal(),menuArrowOffset:C.calc(jt).mul(.25).equal(),menuSubMenuBg:F,calc:C.calc,popupBg:at}),Pt=(0,he.TS)(Le,{itemColor:B,itemHoverColor:He,groupTitleColor:Ue,itemSelectedColor:Ke,itemBg:Ge,popupBg:it,subMenuItemBg:de,itemActiveBg:"transparent",itemSelectedBg:De,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:ze,itemDisabledColor:tt,dangerItemColor:be,dangerItemHoverColor:bt,dangerItemSelectedColor:R,dangerItemActiveBg:Se,dangerItemSelectedBg:Ee,menuSubMenuBg:de,horizontalItemSelectedColor:Ke,horizontalItemSelectedBg:De});return[$t(Le),ie(Le),rt(Le),G(Le,"light"),G(Pt,"dark"),Ie(Le),(0,sn.Z)(Le),(0,nn.oN)(Le,"slide-up"),(0,nn.oN)(Le,"slide-down"),(0,W._y)(Le,"zoom-big")]},Vt,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:u,unitless:{groupTitleLineHeight:!0}})(b,g)},Bt=function(b,g){var u={};for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&g.indexOf(S)<0&&(u[S]=b[S]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,S=Object.getOwnPropertySymbols(b);C<S.length;C++)g.indexOf(S[C])<0&&Object.prototype.propertyIsEnumerable.call(b,S[C])&&(u[S[C]]=b[S[C]]);return u};function Ut(b){return b===null||b===!1}var Nt=(0,v.forwardRef)((b,g)=>{var u;const S=v.useContext(yn),C=S||{},{getPrefixCls:F,getPopupContainer:_,direction:K,menu:B}=v.useContext(ue.E_),be=F(),{prefixCls:Ge,className:de,style:Ke,theme:De="light",expandIcon:Ee,_internalDisableMenuItemTitleTooltip:ze,inlineCollapsed:Ue,siderCollapsed:He,items:tt,children:bt,rootClassName:R,mode:Se,selectable:at,onClick:it,overflowedIndicatorPopupClassName:jt}=b,Le=Bt(b,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),Pt=(0,Qe.Z)(Le,["collapsedWidth"]),zt=At(tt)||bt;(u=C.validator)===null||u===void 0||u.call(C,{mode:Se});const xt=(0,ke.zX)(function(){var Yt;it==null||it.apply(void 0,arguments),(Yt=C.onClick)===null||Yt===void 0||Yt.call(C)}),dt=C.mode||Se,ft=at!=null?at:C.selectable,It=v.useMemo(()=>He!==void 0?He:Ue,[Ue,He]),Gt={horizontal:{motionName:`${be}-slide-up`},inline:(0,Je.Z)(be),other:{motionName:`${be}-zoom-big`}},st=F("menu",Ge||C.prefixCls),rn=(0,oe.Z)(st),[pt,Ht,fe]=Ot(st,rn,!S),Zt=Z()(`${st}-${De}`,B==null?void 0:B.className,de),Kt=v.useMemo(()=>{var Yt,pn;if(typeof Ee=="function"||Ut(Ee))return Ee||null;if(typeof C.expandIcon=="function"||Ut(C.expandIcon))return C.expandIcon||null;if(typeof(B==null?void 0:B.expandIcon)=="function"||Ut(B==null?void 0:B.expandIcon))return(B==null?void 0:B.expandIcon)||null;const gn=(Yt=Ee!=null?Ee:C==null?void 0:C.expandIcon)!==null&&Yt!==void 0?Yt:B==null?void 0:B.expandIcon;return(0,ge.Tm)(gn,{className:Z()(`${st}-submenu-expand-icon`,v.isValidElement(gn)?(pn=gn.props)===null||pn===void 0?void 0:pn.className:void 0)})},[Ee,C==null?void 0:C.expandIcon,B==null?void 0:B.expandIcon,st]),Mn=v.useMemo(()=>({prefixCls:st,inlineCollapsed:It||!1,direction:K,firstLevel:!0,theme:De,mode:dt,disableMenuItemTitleTooltip:ze}),[st,It,K,ze,De]);return pt(v.createElement(yn.Provider,{value:null},v.createElement(_e.Provider,{value:Mn},v.createElement(I.ZP,Object.assign({getPopupContainer:_,overflowedIndicator:v.createElement(ae.Z,null),overflowedIndicatorPopupClassName:Z()(st,`${st}-${De}`,jt),mode:dt,selectable:ft,onClick:xt},Pt,{inlineCollapsed:It,style:Object.assign(Object.assign({},B==null?void 0:B.style),Ke),className:Zt,prefixCls:st,direction:K,defaultMotions:Gt,expandIcon:Kt,ref:g,rootClassName:Z()(R,Ht,C.rootClassName,fe,rn)}),zt))))});const $e=(0,v.forwardRef)((b,g)=>{const u=(0,v.useRef)(null),S=v.useContext(ce);return(0,v.useImperativeHandle)(g,()=>({menu:u.current,focus:C=>{var F;(F=u.current)===null||F===void 0||F.focus(C)}})),v.createElement(Nt,Object.assign({ref:u},b,S))});$e.Item=ut,$e.SubMenu=kt,$e.Divider=Ve,$e.ItemGroup=I.BW;var cn=$e},33507:function(A,q){"use strict";const c=v=>({[v.componentCls]:{[`${v.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${v.motionDurationMid} ${v.motionEaseInOut},
        opacity ${v.motionDurationMid} ${v.motionEaseInOut} !important`}},[`${v.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${v.motionDurationMid} ${v.motionEaseInOut},
        opacity ${v.motionDurationMid} ${v.motionEaseInOut} !important`}}});q.Z=c},8796:function(A,q,c){"use strict";c.d(q,{i:function(){return v}});const v=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},98719:function(A,q,c){"use strict";c.d(q,{Z:function(){return I}});var v=c(8796);function I(V,Z){return v.i.reduce((a,U)=>{const ce=V[`${U}1`],pe=V[`${U}3`],T=V[`${U}6`],P=V[`${U}7`];return Object.assign(Object.assign({},a),Z(U,{lightColor:ce,lightBorderColor:pe,darkColor:T,textColor:P}))},{})}},68866:function(A,q,c){"use strict";c.d(q,{Z:function(){return nn}});var v=c(67294),I=c(93967),V=c.n(I),Z=c(92419),a=c(21770),U=c(87263),ce=c(33603),pe=c(14947);function T(W){const{sizePopupArrow:re,borderRadiusXS:he,borderRadiusOuter:k}=W,ie=re/2,xe=0,Ie=ie,Ce=k*1/Math.sqrt(2),Pe=ie-k*(1-1/Math.sqrt(2)),G=ie-he*(1/Math.sqrt(2)),ot=k*(Math.sqrt(2)-1)+he*(1/Math.sqrt(2)),Ze=2*ie-G,rt=ot,St=2*ie-Ce,wt=Pe,$t=2*ie-xe,Vt=Ie,Ot=ie*Math.sqrt(2)+k*(Math.sqrt(2)-2),Bt=k*(Math.sqrt(2)-1),Ut=`polygon(${Bt}px 100%, 50% ${Bt}px, ${2*ie-Bt}px 100%, ${Bt}px 100%)`,on=`path('M ${xe} ${Ie} A ${k} ${k} 0 0 0 ${Ce} ${Pe} L ${G} ${ot} A ${he} ${he} 0 0 1 ${Ze} ${rt} L ${St} ${wt} A ${k} ${k} 0 0 0 ${$t} ${Vt} Z')`;return{arrowShadowWidth:Ot,arrowPath:on,arrowPolygon:Ut}}const P=(W,re,he)=>{const{sizePopupArrow:k,arrowPolygon:ie,arrowPath:xe,arrowShadowWidth:Ie,borderRadiusXS:Ce,calc:Pe}=W;return{pointerEvents:"none",width:k,height:k,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:k,height:Pe(k).div(2).equal(),background:re,clipPath:{_multi_value_:!0,value:[ie,xe]},content:'""'},"&::after":{content:'""',position:"absolute",width:Ie,height:Ie,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${(0,pe.bf)(Ce)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:he,zIndex:0,background:"transparent"}}},ae=8;function ke(W){const{contentRadius:re,limitVerticalRadius:he}=W,k=re>12?re+2:12;return{arrowOffsetHorizontal:k,arrowOffsetVertical:he?ae:k}}function Qe(W,re){return W?re:{}}function Je(W,re,he){const{componentCls:k,boxShadowPopoverArrow:ie,arrowOffsetVertical:xe,arrowOffsetHorizontal:Ie}=W,{arrowDistance:Ce=0,arrowPlacement:Pe={left:!0,right:!0,top:!0,bottom:!0}}=he||{};return{[k]:Object.assign(Object.assign(Object.assign(Object.assign({[`${k}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},P(W,re,ie)),{"&:before":{background:re}})]},Qe(!!Pe.top,{[[`&-placement-top > ${k}-arrow`,`&-placement-topLeft > ${k}-arrow`,`&-placement-topRight > ${k}-arrow`].join(",")]:{bottom:Ce,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${k}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft > ${k}-arrow`]:{left:{_skip_check_:!0,value:Ie}},[`&-placement-topRight > ${k}-arrow`]:{right:{_skip_check_:!0,value:Ie}}})),Qe(!!Pe.bottom,{[[`&-placement-bottom > ${k}-arrow`,`&-placement-bottomLeft > ${k}-arrow`,`&-placement-bottomRight > ${k}-arrow`].join(",")]:{top:Ce,transform:"translateY(-100%)"},[`&-placement-bottom > ${k}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft > ${k}-arrow`]:{left:{_skip_check_:!0,value:Ie}},[`&-placement-bottomRight > ${k}-arrow`]:{right:{_skip_check_:!0,value:Ie}}})),Qe(!!Pe.left,{[[`&-placement-left > ${k}-arrow`,`&-placement-leftTop > ${k}-arrow`,`&-placement-leftBottom > ${k}-arrow`].join(",")]:{right:{_skip_check_:!0,value:Ce},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${k}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${k}-arrow`]:{top:xe},[`&-placement-leftBottom > ${k}-arrow`]:{bottom:xe}})),Qe(!!Pe.right,{[[`&-placement-right > ${k}-arrow`,`&-placement-rightTop > ${k}-arrow`,`&-placement-rightBottom > ${k}-arrow`].join(",")]:{left:{_skip_check_:!0,value:Ce},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${k}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${k}-arrow`]:{top:xe},[`&-placement-rightBottom > ${k}-arrow`]:{bottom:xe}}))}}function ge(W,re,he,k){if(k===!1)return{adjustX:!1,adjustY:!1};const ie=k&&typeof k=="object"?k:{},xe={};switch(W){case"top":case"bottom":xe.shiftX=re.arrowOffsetHorizontal*2+he,xe.shiftY=!0,xe.adjustY=!0;break;case"left":case"right":xe.shiftY=re.arrowOffsetVertical*2+he,xe.shiftX=!0,xe.adjustX=!0;break}const Ie=Object.assign(Object.assign({},xe),ie);return Ie.shiftX||(Ie.adjustX=!0),Ie.shiftY||(Ie.adjustY=!0),Ie}const ue={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},oe={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},we=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function Xe(W){const{arrowWidth:re,autoAdjustOverflow:he,arrowPointAtCenter:k,offset:ie,borderRadius:xe,visibleFirst:Ie}=W,Ce=re/2,Pe={};return Object.keys(ue).forEach(G=>{const ot=k&&oe[G]||ue[G],Ze=Object.assign(Object.assign({},ot),{offset:[0,0],dynamicInset:!0});switch(Pe[G]=Ze,we.has(G)&&(Ze.autoArrow=!1),G){case"top":case"topLeft":case"topRight":Ze.offset[1]=-Ce-ie;break;case"bottom":case"bottomLeft":case"bottomRight":Ze.offset[1]=Ce+ie;break;case"left":case"leftTop":case"leftBottom":Ze.offset[0]=-Ce-ie;break;case"right":case"rightTop":case"rightBottom":Ze.offset[0]=Ce+ie;break}const rt=ke({contentRadius:xe,limitVerticalRadius:!0});if(k)switch(G){case"topLeft":case"bottomLeft":Ze.offset[0]=-rt.arrowOffsetHorizontal-Ce;break;case"topRight":case"bottomRight":Ze.offset[0]=rt.arrowOffsetHorizontal+Ce;break;case"leftTop":case"rightTop":Ze.offset[1]=-rt.arrowOffsetHorizontal-Ce;break;case"leftBottom":case"rightBottom":Ze.offset[1]=rt.arrowOffsetHorizontal+Ce;break}Ze.overflow=ge(G,rt,re,he),Ie&&(Ze.htmlRegion="visibleFirst")}),Pe}var Ve=c(96159),Ne=c(27288),lt=c(43945),s=c(53124),_e=c(4173),Mt=c(29691),ut=c(14747),tn=c(50438),Ft=c(98719),kt=c(45503),Ae=c(91945);const mt=W=>{const{componentCls:re,tooltipMaxWidth:he,tooltipColor:k,tooltipBg:ie,tooltipBorderRadius:xe,zIndexPopup:Ie,controlHeight:Ce,boxShadowSecondary:Pe,paddingSM:G,paddingXS:ot}=W;return[{[re]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ut.Wf)(W)),{position:"absolute",zIndex:Ie,display:"block",width:"max-content",maxWidth:he,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":ie,[`${re}-inner`]:{minWidth:Ce,minHeight:Ce,padding:`${(0,pe.bf)(W.calc(G).div(2).equal())} ${(0,pe.bf)(ot)}`,color:k,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:ie,borderRadius:xe,boxShadow:Pe,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${re}-inner`]:{borderRadius:W.min(xe,ae)}},[`${re}-content`]:{position:"relative"}}),(0,Ft.Z)(W,(Ze,rt)=>{let{darkColor:St}=rt;return{[`&${re}-${Ze}`]:{[`${re}-inner`]:{backgroundColor:St},[`${re}-arrow`]:{"--antd-arrow-background-color":St}}}})),{"&-rtl":{direction:"rtl"}})},Je(W,"var(--antd-arrow-background-color)"),{[`${re}-pure`]:{position:"relative",maxWidth:"none",margin:W.sizePopupArrow}}]},At=W=>Object.assign(Object.assign({zIndexPopup:W.zIndexPopupBase+70},ke({contentRadius:W.borderRadius,limitVerticalRadius:!0})),T((0,kt.TS)(W,{borderRadiusOuter:Math.min(W.borderRadiusOuter,4)})));var Xt=function(W){let re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return(0,Ae.I$)("Tooltip",k=>{const{borderRadius:ie,colorTextLightSolid:xe,colorBgSpotlight:Ie}=k,Ce=(0,kt.TS)(k,{tooltipMaxWidth:250,tooltipColor:xe,tooltipBorderRadius:ie,tooltipBg:Ie});return[mt(Ce),(0,tn._y)(k,"zoom-big-fast")]},At,{resetStyle:!1,injectStyle:re})(W)},xn=c(98787);function ln(W,re){const he=(0,xn.o2)(re),k=V()({[`${W}-${re}`]:re&&he}),ie={},xe={};return re&&!he&&(ie.background=re,xe["--antd-arrow-background-color"]=re),{className:k,overlayStyle:ie,arrowStyle:xe}}var Me=W=>{const{prefixCls:re,className:he,placement:k="top",title:ie,color:xe,overlayInnerStyle:Ie}=W,{getPrefixCls:Ce}=v.useContext(s.E_),Pe=Ce("tooltip",re),[G,ot,Ze]=Xt(Pe),rt=ln(Pe,xe),St=rt.arrowStyle,wt=Object.assign(Object.assign({},Ie),rt.overlayStyle),$t=V()(ot,Ze,Pe,`${Pe}-pure`,`${Pe}-placement-${k}`,he,rt.className);return G(v.createElement("div",{className:$t,style:St},v.createElement("div",{className:`${Pe}-arrow`}),v.createElement(Z.G,Object.assign({},W,{className:ot,prefixCls:Pe,overlayInnerStyle:wt}),ie)))},fn=function(W,re){var he={};for(var k in W)Object.prototype.hasOwnProperty.call(W,k)&&re.indexOf(k)<0&&(he[k]=W[k]);if(W!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ie=0,k=Object.getOwnPropertySymbols(W);ie<k.length;ie++)re.indexOf(k[ie])<0&&Object.prototype.propertyIsEnumerable.call(W,k[ie])&&(he[k[ie]]=W[k[ie]]);return he};const sn=v.forwardRef((W,re)=>{var he,k;const{prefixCls:ie,openClassName:xe,getTooltipContainer:Ie,overlayClassName:Ce,color:Pe,overlayInnerStyle:G,children:ot,afterOpenChange:Ze,afterVisibleChange:rt,destroyTooltipOnHide:St,arrow:wt=!0,title:$t,overlay:Vt,builtinPlacements:Ot,arrowPointAtCenter:Bt=!1,autoAdjustOverflow:Ut=!0}=W,on=!!wt,[,Nt]=(0,Mt.ZP)(),{getPopupContainer:$e,getPrefixCls:cn,direction:b}=v.useContext(s.E_),g=(0,Ne.ln)("Tooltip"),u=v.useRef(null),S=()=>{var pt;(pt=u.current)===null||pt===void 0||pt.forceAlign()};v.useImperativeHandle(re,()=>({forceAlign:S,forcePopupAlign:()=>{g.deprecated(!1,"forcePopupAlign","forceAlign"),S()}}));const[C,F]=(0,a.Z)(!1,{value:(he=W.open)!==null&&he!==void 0?he:W.visible,defaultValue:(k=W.defaultOpen)!==null&&k!==void 0?k:W.defaultVisible}),_=!$t&&!Vt&&$t!==0,K=pt=>{var Ht,fe;F(_?!1:pt),_||((Ht=W.onOpenChange)===null||Ht===void 0||Ht.call(W,pt),(fe=W.onVisibleChange)===null||fe===void 0||fe.call(W,pt))},B=v.useMemo(()=>{var pt,Ht;let fe=Bt;return typeof wt=="object"&&(fe=(Ht=(pt=wt.pointAtCenter)!==null&&pt!==void 0?pt:wt.arrowPointAtCenter)!==null&&Ht!==void 0?Ht:Bt),Ot||Xe({arrowPointAtCenter:fe,autoAdjustOverflow:Ut,arrowWidth:on?Nt.sizePopupArrow:0,borderRadius:Nt.borderRadius,offset:Nt.marginXXS,visibleFirst:!0})},[Bt,wt,Ot,Nt]),be=v.useMemo(()=>$t===0?$t:Vt||$t||"",[Vt,$t]),Ge=v.createElement(_e.BR,null,typeof be=="function"?be():be),{getPopupContainer:de,placement:Ke="top",mouseEnterDelay:De=.1,mouseLeaveDelay:Ee=.1,overlayStyle:ze,rootClassName:Ue}=W,He=fn(W,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),tt=cn("tooltip",ie),bt=cn(),R=W["data-popover-inject"];let Se=C;!("open"in W)&&!("visible"in W)&&_&&(Se=!1);const at=v.isValidElement(ot)&&!(0,Ve.M2)(ot)?ot:v.createElement("span",null,ot),it=at.props,jt=!it.className||typeof it.className=="string"?V()(it.className,xe||`${tt}-open`):it.className,[Le,Pt,zt]=Xt(tt,!R),xt=ln(tt,Pe),dt=xt.arrowStyle,ft=Object.assign(Object.assign({},G),xt.overlayStyle),It=V()(Ce,{[`${tt}-rtl`]:b==="rtl"},xt.className,Ue,Pt,zt),[Gt,st]=(0,U.Cn)("Tooltip",He.zIndex),rn=v.createElement(Z.Z,Object.assign({},He,{zIndex:Gt,showArrow:on,placement:Ke,mouseEnterDelay:De,mouseLeaveDelay:Ee,prefixCls:tt,overlayClassName:It,overlayStyle:Object.assign(Object.assign({},dt),ze),getTooltipContainer:de||Ie||$e,ref:u,builtinPlacements:B,overlay:Ge,visible:Se,onVisibleChange:K,afterVisibleChange:Ze!=null?Ze:rt,overlayInnerStyle:ft,arrowContent:v.createElement("span",{className:`${tt}-arrow-content`}),motion:{motionName:(0,ce.m)(bt,"zoom-big-fast",W.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!St}),Se?(0,Ve.Tm)(at,{className:jt}):at);return Le(v.createElement(lt.Z.Provider,{value:st},rn))});sn._InternalPanelDoNotUseOrYouWillBeFired=Me;var nn=sn},56051:function(A,q,c){"use strict";c.r(q),c.d(q,{default:function(){return $c}});var v=c(849),I=c(10403),V=c(64063),Z=c.n(V),a=c(67294),U=c(4942),ce=c(91),pe=c(93967),T=c.n(pe),P=c(53124),ae=c(16474),ke=c(94423),Qe=c(48311),Je=c(66968),ge=c(91945);const ue=e=>{const{componentCls:t,colorText:n,fontSize:o,lineHeight:r,fontFamily:i}=e;return{[t]:{color:n,fontSize:o,lineHeight:r,fontFamily:i}}},oe=()=>({});var we=(0,ge.I$)("App",ue,oe);const Xe=()=>a.useContext(Je.Z),Ve=e=>{const{prefixCls:t,children:n,className:o,rootClassName:r,message:i,notification:l,style:d,component:p="div"}=e,{getPrefixCls:f}=(0,a.useContext)(P.E_),m=f("app",t),[x,$,w]=we(m),y=T()($,m,o,r,w),h=(0,a.useContext)(Je.J),O=a.useMemo(()=>({message:Object.assign(Object.assign({},h.message),i),notification:Object.assign(Object.assign({},h.notification),l)}),[i,l,h.message,h.notification]),[j,N]=(0,ae.Z)(O.message),[D,M]=(0,Qe.Z)(O.notification),[L,E]=(0,ke.Z)(),z=a.useMemo(()=>({message:j,notification:D,modal:L}),[j,D,L]),H=p===!1?a.Fragment:p,X={className:y,style:d};return x(a.createElement(Je.Z.Provider,{value:z},a.createElement(Je.J.Provider,{value:O},a.createElement(H,Object.assign({},p===!1?void 0:X),E,N,M,n))))};Ve.useApp=Xe;var Ne=Ve,lt=c(25212),s=c(85893),_e=["children"];function Mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function ut(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mt(Object(n),!0).forEach(function(o){(0,U.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var tn=function(e){var t=e.children,n=(0,ce.Z)(e,_e);return(0,s.jsx)(lt.f,ut(ut({},n),{},{children:(0,s.jsx)(Ne,{children:t})}))},Ft=c(74902),kt=c(97582),Ae=c(23279),mt=c.n(Ae);function At(e){var t=(0,a.useRef)(e);return t.current=e,t}var Xt=At,xn=function(e){return e!==null&&typeof e=="object"},ln=function(e){return typeof e=="function"},yn=function(e){return typeof e=="string"},Me=function(e){return typeof e=="boolean"},fn=function(e){return typeof e=="number"},Jt=function(e){return typeof e=="undefined"},sn=!1,nn=sn,W=function(e){nn&&(ln(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=Xt(e);(0,a.useEffect)(function(){return function(){t.current()}},[])},re=W;function he(e,t){var n;nn&&(ln(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var o=Xt(e),r=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,i=(0,a.useMemo)(function(){return mt()(function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return o.current.apply(o,(0,kt.ev)([],(0,kt.CR)(l),!1))},r,t)},[]);return re(function(){i.cancel()}),{run:i,cancel:i.cancel,flush:i.flush}}var k=he,ie=function(e){return function(t,n){var o=(0,a.useRef)(!1);e(function(){return function(){o.current=!1}},[]),e(function(){if(!o.current)o.current=!0;else return t()},n)}},xe=null,Ie=ie(a.useEffect);function Ce(e,t,n){var o=(0,kt.CR)((0,a.useState)({}),2),r=o[0],i=o[1],l=k(function(){i({})},n).run;(0,a.useEffect)(function(){return l()},t),Ie(e,[r])}var Pe=Ce,G=c(1320),ot=["setLoading"],Ze=["setLoading"],rt=typeof window!="undefined",St={},wt=function(t,n){(0,a.useEffect)(function(){a.startTransition(function(){t()})},n)},$t=function(t,n){Pe(function(){t()},n,{wait:32,maxWait:96})},Vt=typeof a.startTransition=="function"?wt:$t,Ot=function(t,n,o){var r=(0,G.AC)(),i=o||function(l,d){return r.setState((0,U.Z)({},l,d))};!rt&&!St[t]&&(i(t,n),St[t]=!0),Vt(function(){i(t,n)},[n])},Bt={"zh-CN":"\u9996\u9875","en-US":"Home"},Ut=function(t){return{title:Bt[t],link:"/",activePath:"/"}},on=(0,a.memo)(function(){var e=(0,I.WF)(),t=(0,I.tx)(),n=(0,I.eL)(),o=(0,I.zh)(),r=(0,I.OK)(),i=(0,I.TH)(),l=(0,I.bU)(),d=(0,G.AC)();return Ot("siteData",e,function(){var p=e.setLoading,f=(0,ce.Z)(e,ot),m=d.getState(),x=m.siteData,$=x.setLoading,w=(0,ce.Z)(x,Ze);Z()(f,w)||d.setState({siteData:e})}),Ot("sidebar",t),Ot("routeMeta",n),Ot("location",i),Ot("tabMeta",o),Ot("locale",l),Ot("navData",r,function(){var p=e.themeConfig.hideHomeNav?r:[Ut(l.id)].concat((0,Ft.Z)(r));d.setState({navData:p})}),null}),Nt=c(58401),$e=c(17542),cn=c(50238),b=c(48954),g=["children","className","prefixCls"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(o){(0,U.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var C=(0,a.forwardRef)(function(e,t){var n=e.children,o=e.className,r=e.prefixCls,i=(0,ce.Z)(e,g);return(0,s.jsx)(cn.Z,S(S({ref:t,internalClassName:"".concat((0,b.Gn)(r),"-center"),className:o},i),{},{align:"center",justify:"center",children:n}))}),F=C,_=c(21687),K=c(93538),B=c(87462),be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ge=be,de=c(42135),Ke=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:Ge}))},De=a.forwardRef(Ke),Ee=De,ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ue=ze,He=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:Ue}))},tt=a.forwardRef(He),bt=tt,R=c(30168),Se=c(68497),at,it,jt,Le,Pt=(0,Se.kc)(function(e){var t=e.token,n=e.css;return{container:n(at||(at=(0,R.Z)([`
    background: `,`;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,`;
    }
  `])),t.colorBgContainer,t.colorFillTertiary),nav:n(it||(it=(0,R.Z)([`
    color: `,`;
    font-size: 12px;
  `])),t.colorTextTertiary),title:n(jt||(jt=(0,R.Z)([`
    font-size: 16px;
  `]))),alignmentEnd:n(Le||(Le=(0,R.Z)([`
    justify-content: flex-end;
  `])))}}),zt=function(t){var n=t.title,o=t.link,r=t.type,i=Pt(),l=i.styles,d=i.cx,p=(0,I.YB)(),f=(0,a.useMemo)(function(){switch(r){case"prev":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ee,{})," ",p.formatMessage({id:"content.footer.actions.previous"})]});case"next":return(0,s.jsxs)(s.Fragment,{children:[p.formatMessage({id:"content.footer.actions.next"})," ",(0,s.jsx)(bt,{})]})}},[r]);return(0,s.jsx)(I.rU,{to:o,children:(0,s.jsxs)($e.D,{className:l.container,gap:8,children:[(0,s.jsx)($e.D,{horizontal:!0,gap:4,className:d(l.nav,r==="next"&&l.alignmentEnd),children:f}),(0,s.jsx)($e.D,{horizontal:!0,className:d(l.title,r==="next"&&l.alignmentEnd),children:n})]})})},xt=(0,a.memo)(zt);function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(n),!0).forEach(function(o){(0,U.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var It=function(){var t=(0,G.HX)(K.e9,Z()),n=t.prev,o=t.next,r=(0,Nt.F)(),i=r.mobile;return(0,s.jsxs)($e.D,{horizontal:!i,gap:i?12:0,distribution:"space-between",style:{margin:i?12:0},children:[n?(0,s.jsx)(xt,ft({type:"prev"},n)):(0,s.jsx)("div",{}),o?(0,s.jsx)(xt,ft({type:"next"},o)):(0,s.jsx)("div",{})]})},Gt=(0,a.memo)(It),st,rn=(0,Se.kc)(function(e){var t=e.token,n=e.responsive,o=e.isDarkMode,r=e.css;return{content:r(st||(st=(0,R.Z)([`
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
  `])),t.colorBgContainer,t.boxShadowTertiary,n.mobile,o?t.colorTextSecondary:t.colorText,t.colorText,t.colorLink,t.colorLinkHover,t.colorLinkActive,o?.8:1,o?t["cyan-7"]:t.colorPrimaryText,o?t["cyan-1"]:t.colorPrimaryBg,t.colorFillTertiary,t.colorBorderSecondary,t.colorTextDescription,t.colorBorder,t.colorText,t.colorTextTertiary)}}),pt=function(t){var n=t.children,o=(0,G.HX)(function(f){return f.siteData.loading}),r=rn(),i=r.styles,l=r.cx,d=(0,Nt.F)(),p=d.mobile;return(0,s.jsxs)($e.D,{width:"100%",gap:p?0:24,children:[(0,s.jsxs)("div",{className:l("dumi-antd-style-content",i.content),children:[(0,s.jsx)(_.Z,{active:!0,paragraph:!0,loading:o}),(0,s.jsx)("div",{style:{display:o?"none":void 0},children:n})]}),(0,s.jsx)(Gt,{})]})},Ht=(0,a.memo)(pt),fe=c(14947),Zt=c(14747),Kt=c(45503);const Mn=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:o,lineWidth:r,textPaddingInline:i,orientationMargin:l,verticalMarginInline:d}=e;return{[t]:Object.assign(Object.assign({},(0,Zt.Wf)(e)),{borderBlockStart:`${(0,fe.bf)(r)} solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,fe.bf)(r)} solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,fe.bf)(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,fe.bf)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,fe.bf)(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:i},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${(0,fe.bf)(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},Yt=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS});var pn=(0,ge.I$)("Divider",e=>{const t=(0,Kt.TS)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[Mn(t)]},Yt,{unitless:{orientationMargin:!0}}),gn=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},Qr=e=>{const{getPrefixCls:t,direction:n,divider:o}=a.useContext(P.E_),{prefixCls:r,type:i="horizontal",orientation:l="center",orientationMargin:d,className:p,rootClassName:f,children:m,dashed:x,plain:$,style:w}=e,y=gn(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),h=t("divider",r),[O,j,N]=pn(h),D=l.length>0?`-${l}`:l,M=!!m,L=l==="left"&&d!=null,E=l==="right"&&d!=null,z=T()(h,o==null?void 0:o.className,j,N,`${h}-${i}`,{[`${h}-with-text`]:M,[`${h}-with-text${D}`]:M,[`${h}-dashed`]:!!x,[`${h}-plain`]:!!$,[`${h}-rtl`]:n==="rtl",[`${h}-no-default-orientation-margin-left`]:L,[`${h}-no-default-orientation-margin-right`]:E},p,f),H=a.useMemo(()=>typeof d=="number"?d:/^\d+$/.test(d)?Number(d):d,[d]),X=Object.assign(Object.assign({},L&&{marginLeft:H}),E&&{marginRight:H});return O(a.createElement("div",Object.assign({className:z,style:Object.assign(Object.assign({},o==null?void 0:o.style),w)},y,{role:"separator"}),m&&i!=="vertical"&&a.createElement("span",{className:`${h}-inner-text`,style:X},m)))},gt=c(1413),Jr=function(t){var n=t.prefixCls,o=t.icon,r=t.title,i=t.items,l=i===void 0?[]:i,d=t.style,p=t.className;return a.createElement("div",{className:T()("".concat(n,"-column"),p),style:d},(r||o)&&a.createElement("h2",null,o&&a.createElement("span",{className:"".concat(n,"-column-icon")},o),r),l.map(function(f,m){var x=f.LinkComponent||"a";return a.createElement("div",{className:T()("".concat(n,"-item"),f.className),style:f.style,key:m},a.createElement(x,{href:f.url,to:typeof x!="string"?f.url:void 0,target:f.openExternal?"_blank":void 0,rel:f.openExternal?"noopener noreferrer":void 0},f.icon&&a.createElement("span",{className:"".concat(n,"-item-icon")},f.icon),f.title),f.description&&a.createElement(a.Fragment,null,a.createElement("span",{className:"".concat(n,"-item-separator")},"-"),a.createElement("span",{className:"".concat(n,"-item-description")},f.description)))}))},_r=Jr,qr=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],ea=function(t){var n=t.prefixCls,o=n===void 0?"rc-footer":n,r=t.className,i=t.style,l=t.bottom,d=t.columns,p=t.maxColumnsPerRow,f=t.backgroundColor,m=t.columnLayout,x=t.theme,$=x===void 0?"dark":x,w=(0,ce.Z)(t,qr),y=T()("".concat(o),r,(0,U.Z)({},"".concat(o,"-").concat($),!!$)),h=typeof p=="number"&&p>0;return a.createElement("footer",(0,gt.Z)((0,gt.Z)({},w),{},{className:y,style:(0,gt.Z)((0,gt.Z)({},i),{},{backgroundColor:f})}),a.createElement("section",{className:"".concat(o,"-container")},d&&d.length>0&&a.createElement("section",{className:"".concat(o,"-columns"),style:{justifyContent:m,flexWrap:h?"wrap":void 0}},d.map(function(O,j){var N=O.title,D=O.icon,M=O.style,L=O.className,E=O.items,z=E===void 0?[]:E,H=(0,gt.Z)({},M);return h&&(H.flex="0 0 ".concat(100/(p+1)+.1,"%")),a.createElement(_r,{key:j,prefixCls:o,title:N,icon:D,items:z,style:H,className:L})}))),l&&a.createElement("section",{className:"".concat(o,"-bottom")},a.createElement("div",{className:"".concat(o,"-bottom-container")},l)))},ta=ea,Fn,Xn,na=(0,Se.kc)(function(e,t){var n=e.css,o=e.responsive,r=e.token,i="rc-footer";return{container:n(Fn||(Fn=(0,R.Z)([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),r.colorSplit,r.colorTextDescription,o.mobile),footer:n(Xn||(Xn=(0,R.Z)([`
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
    `])),r.colorTextSecondary,r.colorBgLayout,i,r.colorTextTertiary,r.colorLinkHover,i,r.contentMaxWidth,t?"0":"60px 0 20px",r.colorText,t?"transparent":r.colorBorderSecondary,o.mobile,i)}}),oa=function(t){var n=t.columns,o=t.bottom,r=t.theme,i=!n||(n==null?void 0:n.length)===0,l=na(i),d=l.styles;return(0,s.jsx)("div",{className:d.container,children:(0,s.jsx)(ta,{theme:r,className:d.footer,columns:n,bottom:o})})},ra=oa,Vn=function(t){return t.siteData.themeConfig.name},kn=function(t){var n,o;return((n=t.siteData.themeConfig)===null||n===void 0||(n=n.socialLinks)===null||n===void 0?void 0:n.github)||((o=t.siteData.themeConfig)===null||o===void 0?void 0:o.github)},aa=function(t){var n=t.siteData.themeConfig.logo;return n?(n.startsWith("http"),n):n||""},ia={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 01-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 016.8-17.2z"}}]},name:"medium",theme:"outlined"},la=ia,sa=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:la}))},ca=a.forwardRef(sa),da=ca,ua={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"},ma=ua,fa=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:ma}))},pa=a.forwardRef(fa),ga=pa,ha={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}}]},name:"zhihu",theme:"outlined"},va=ha,ba=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:va}))},xa=a.forwardRef(ba),Un=xa,ya={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},Ca=ya,Sa=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:Ca}))},wa=a.forwardRef(Sa),$a=wa,Oa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"}}]},name:"history",theme:"outlined"},ja=Oa,Ia=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:ja}))},Ea=a.forwardRef(Ia),Ta=Ea,Ma={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 00-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0026 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 01-49.8 62.2A355.92 355.92 0 01651.1 840a355 355 0 01-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 01-113.3-76.3A353.06 353.06 0 01184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 01138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 00892 694z"}}]},name:"issues-close",theme:"outlined"},ka=Ma,Na=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:ka}))},Pa=a.forwardRef(Na),Da=Pa,Ba=function(t){var n=t.github,o={title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Umi",description:"React \u5E94\u7528\u5F00\u53D1\u6846\u67B6",url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:"\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177",url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:"\u5FAE\u524D\u7AEF\u6846\u67B6",url:"https://qiankun.umijs.org",openExternal:!0}]},r={title:"\u793E\u533A",items:[{icon:(0,s.jsx)(da,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,s.jsx)(ga,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,s.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"Ant Design \u8BED\u96C0\u4E13\u680F",url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,s.jsx)(Un,{style:{color:"#056de8"}}),title:"Ant Design \u77E5\u4E4E\u4E13\u680F",url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,s.jsx)(Un,{style:{color:"#056de8"}}),title:"\u4F53\u9A8C\u79D1\u6280\u4E13\u680F",url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:(0,s.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:"SEE Conf-\u8682\u8681\u4F53\u9A8C\u79D1\u6280\u5927\u4F1A",url:"https://seeconf.antfin.com/",openExternal:!0}]},i={icon:(0,s.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"\u66F4\u591A\u4EA7\u54C1",items:[{icon:(0,s.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"\u8BED\u96C0",url:"https://yuque.com",description:"\u77E5\u8BC6\u521B\u4F5C\u4E0E\u5206\u4EAB\u5DE5\u5177",openExternal:!0},{icon:(0,s.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:"\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",openExternal:!0},{icon:(0,s.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:"\u4F01\u4E1A\u7EA7 Node.js \u6846\u67B6",openExternal:!0},{icon:(0,s.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:"Sketch \u5DE5\u5177\u96C6",url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,s.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:"\u8682\u8681\u4F53\u9A8C\u79D1\u6280",url:"https://xtech.antfin.com/",openExternal:!0}]},l={title:"\u5E2E\u52A9",items:[n?{icon:(0,s.jsx)($a,{}),title:"GitHub",url:n,openExternal:!0}:void 0,{icon:(0,s.jsx)(Ta,{}),title:"\u66F4\u65B0\u65E5\u5FD7",url:"/changelog",LinkComponent:I.rU},n?{icon:(0,s.jsx)(Da,{}),title:"\u8BA8\u8BBA",url:"".concat(n,"/issues"),openExternal:!0}:void 0].filter(Boolean)};return[o,r,l,i]},Gn,Kn,za=(0,Se.kc)(function(e){var t=e.css,n=e.responsive,o=e.token,r="rc-footer";return{container:t(Gn||(Gn=(0,R.Z)([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),o.colorSplit,o.colorTextDescription,n.mobile),footer:t(Kn||(Kn=(0,R.Z)([`
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
    `])),o.colorTextSecondary,o.colorBgLayout,r,o.colorTextTertiary,o.colorLinkHover,r,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,n.mobile,r)}}),Ha=function(){var t=(0,G.HX)(function(y){return y.siteData}),n=t.themeConfig,o=t.pkg,r=(0,G.HX)(kn),i=za(),l=i.styles,d=i.theme,p=(0,Nt.F)(),f=p.mobile;if(!n.footer)return null;var m=n.footerConfig,x=m!=null&&m.columns?m.columns:Ba({github:r||o.homepage}),$=(m==null?void 0:m.bottom)||n.footer,w=(m==null?void 0:m.copyright)||"Copyright \xA9 2022-".concat(new Date().getFullYear());return(0,s.jsx)(ra,{theme:(m==null?void 0:m.theme)||d.appearance,columns:x,bottom:f?(0,s.jsxs)(F,{className:l.container,children:[w,(0,s.jsx)($e.D,{align:"center",horizontal:!0,dangerouslySetInnerHTML:{__html:$}})]}):(0,s.jsxs)(F,{horizontal:!0,children:[w,(0,s.jsx)(Qr,{type:"vertical"}),(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:$}})]})})},Yn=Ha,Lt=c(97685),Cn=c(22543),La=c(27286);function Sn(e){var t=e.pathname,n=e.current,o=e.target,r="base"in n?t.replace(n.base.replace(/\/$/,""),"")||"/":t.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(r).replace(/([^/])\/$/,"$1"):"".concat(r).concat(o.suffix)}var Ra={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","de-DE":"\u{1F1E9}\u{1F1EA}","pt-BR":"\u{1F1E7}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}"},Qn={"zh-CN":"\u4E2D","en-US":"EN"},Aa=function(t){var n=t.locale,o=t.current,r=(0,I.TH)(),i=r.pathname,l=(0,a.useState)(function(){return Sn({pathname:i,current:o,target:n})}),d=(0,Lt.Z)(l,2),p=d[0],f=d[1];return(0,a.useEffect)(function(){f(Sn({pathname:i,current:o,target:n}))},[i,o.id,n.id]),(0,s.jsx)(I.rU,{to:p,children:(0,s.jsx)(Cn.ZP,{style:{minWidth:34,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:Qn[n.id]})})},Za=function(){var t=(0,G.HX)(function(o){return o.siteData.locales}),n=(0,G.HX)(function(o){return o.locale});return t.length<=1?null:t.length>2?(0,s.jsx)(La.Z,{value:t.findIndex(function(o){return o.id===n.id}),onChange:function(r){console.log(Sn({pathname:location.pathname,current:n,target:t[r]})),I.m8.push(Sn({pathname:location.pathname,current:n,target:t[r]}))},options:t.map(function(o){return{value:o.id,label:Qn[o.id]}}),renderItem:function(r,i){return"".concat(Ra[t[i].id]," ").concat(t[i].name)},style:{height:32,minWidth:32,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}):(0,s.jsx)(Aa,{locale:t.find(function(o){var r=o.id;return r!==n.id}),current:n})},Wa=(0,a.memo)(Za),Jn=c(76248),an=c(96486),Fa=function(t){var n,o=t.routeMeta.frontmatter;if(t.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var r=["/api","/components"].concat((0,Ft.Z)(((n=t.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return r.some(function(i){return t.location.pathname.startsWith(i)})};function Xa(e,t){var n={camel:function(){return(0,an.camelCase)(e)},pascal:function(){return(0,an.upperFirst)((0,an.camelCase)(e))},kebab:function(){return(0,an.kebabCase)(e)},snake:function(){return(0,an.snakeCase)(e)},default:function(){return e}};return(n[t]||n.default)()}var Va=function(t){var n,o,r,i,l,d,p,f,m=kn(t),x=((n=t.routeMeta)===null||n===void 0?void 0:n.frontmatter)||{},$=(o=t.locale)===null||o===void 0?void 0:o.id,w=function(Q){if(m)return Q.replace("{github}",m).replace("{atomId}",x.atomId||"").replace(/\{atomId\.([^}]+)}/g,function(te,le){return Xa(x.atomId||"",le)}).replace("{title}",x.title).replace("{locale}",$)},y=function(Q){return Q===!1?!1:typeof Q=="string"},h=((r=t.siteData)===null||r===void 0||(r=r.themeConfig)===null||r===void 0?void 0:r.apiHeader)||{},O=h.pkg,j=O===void 0?(i=t.siteData)===null||i===void 0||(i=i.pkg)===null||i===void 0?void 0:i.name:O,N=h.sourceUrl,D=h.docUrl,M=((l=x.apiHeader)===null||l===void 0?void 0:l.pkg)||j,L=x.atomId||x.title,E=((d=x.apiHeader)===null||d===void 0?void 0:d.defaultImport)||!1,z=((p=x.apiHeader)===null||p===void 0?void 0:p.sourceUrl)||N,H=y(z)?w(z):void 0,X=((f=x.apiHeader)===null||f===void 0?void 0:f.docUrl)||D,ee=y(X)?w(X):void 0;return{title:x.title,description:x.description,pkg:M,defaultImport:E,componentName:L,sourceUrl:H,docUrl:ee}},_n=function(t){var n=t.routeMeta.frontmatter;return(0,an.merge)({},n.token,t.siteData.themeConfig.siteToken)},Ua={apiHeader:Va,flattenSidebar:K.gt,token:_n,logo:aa},qn,Ga=(0,Se.kc)(function(e){var t=e.css,n=e.responsive,o=e.token;return t(qn||(qn=(0,R.Z)([`
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
  `])),o.fontFamily,o.colorText,n.mobile)}),Ka=function(){var t=(0,G.HX)(function(m){return m.siteData.themeConfig},Z()),n=(0,G.HX)(function(m){return m.locale},Z()),o=(0,G.HX)(Ua.logo,Jn.X),r=Ga(),i=r.styles,l=r.cx,d=t.name,p=t.hideNameOnHeader,f=p===void 0?!1:p;return t&&(0,s.jsxs)(I.rU,{className:l(i),to:"base"in n?n.base:"/",children:[!!o&&(0,s.jsx)("img",{src:o,alt:t.name,height:32}),!f&&d]})},eo=(0,a.memo)(Ka),Ya=c(43378),Qa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},Ja=Qa,_a=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:Ja}))},qa=a.forwardRef(_a),to=qa,ei=Object.defineProperty,no=Object.getOwnPropertySymbols,ti=Object.prototype.hasOwnProperty,ni=Object.prototype.propertyIsEnumerable,oo=(e,t,n)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oi=(e,t)=>{for(var n in t||(t={}))ti.call(t,n)&&oo(e,n,t[n]);if(no)for(var n of no(t))ni.call(t,n)&&oo(e,n,t[n]);return e};const ro=e=>a.createElement("svg",oi({viewBox:"0 0 1024 1024"},e),a.createElement("path",{d:"m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}));var jc="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=",ri=function(e,t,n,o){function r(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function d(m){try{f(o.next(m))}catch(x){l(x)}}function p(m){try{f(o.throw(m))}catch(x){l(x)}}function f(m){m.done?i(m.value):r(m.value).then(d,p)}f((o=o.apply(e,t||[])).next())})};function wn(e){let t=0,n=0,o=e;do t+=o.offsetTop||0,n+=o.offsetLeft||0,o=o.offsetParent;while(o);return{top:t,left:n}}class ai{constructor(t){this.element=t}getHorizontalScroll(){return this.element.scrollLeft}getVerticalScroll(){return this.element.scrollTop}getMaxHorizontalScroll(){return this.element.scrollWidth-this.element.clientWidth}getMaxVerticalScroll(){return this.element.scrollHeight-this.element.clientHeight}getHorizontalElementScrollOffset(t,n){return wn(t).left-wn(n).left}getVerticalElementScrollOffset(t,n){return wn(t).top-wn(n).top}scrollTo(t,n){this.element.scrollLeft=t,this.element.scrollTop=n}}class ii{constructor(){this.element=window}getHorizontalScroll(){return window.scrollX||document.documentElement.scrollLeft}getVerticalScroll(){return window.scrollY||document.documentElement.scrollTop}getMaxHorizontalScroll(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth}getMaxVerticalScroll(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight}getHorizontalElementScrollOffset(t){return(window.scrollX||document.documentElement.scrollLeft)+t.getBoundingClientRect().left}getVerticalElementScrollOffset(t){return(window.scrollY||document.documentElement.scrollTop)+t.getBoundingClientRect().top}scrollTo(t,n){window.scrollTo(t,n)}}const Qt={elements:[],cancelMethods:[],add:(e,t)=>{Qt.elements.push(e),Qt.cancelMethods.push(t)},remove:(e,t)=>{const n=Qt.elements.indexOf(e);n>-1&&(t&&Qt.cancelMethods[n](),Qt.elements.splice(n,1),Qt.cancelMethods.splice(n,1))}},ao=typeof window!="undefined",li={cancelOnUserAction:!0,easing:e=>--e*e*e+1,elementToScroll:ao?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function si(e,t={}){return ri(this,void 0,void 0,function*(){if(ao){if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."}else return new Promise(M=>{M(!1)});let n,o,r,i=Object.assign(Object.assign({},li),t);const l=i.elementToScroll===window,d=!!i.elementToScroll.nodeName;if(!l&&!d)throw"Element to scroll needs to be either window or DOM element.";const p=l?document.documentElement:i.elementToScroll;getComputedStyle(p).getPropertyValue("scroll-behavior")==="smooth"&&console.warn(`${p.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);const m=l?new ii:new ai(i.elementToScroll);if(e instanceof Element){if(r=e,d&&(!i.elementToScroll.contains(r)||i.elementToScroll.isSameNode(r)))throw"options.elementToScroll has to be a parent of scrollToElement";n=m.getHorizontalElementScrollOffset(r,i.elementToScroll),o=m.getVerticalElementScrollOffset(r,i.elementToScroll)}else if(typeof e=="number")n=m.getHorizontalScroll(),o=e;else if(Array.isArray(e)&&e.length===2)n=e[0]===null?m.getHorizontalScroll():e[0],o=e[1]===null?m.getVerticalScroll():e[1];else throw`Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;n+=i.horizontalOffset,o+=i.verticalOffset;const x=m.getMaxHorizontalScroll(),$=m.getHorizontalScroll();n>x&&(n=x);const w=n-$,y=m.getMaxVerticalScroll(),h=m.getVerticalScroll();o>y&&(o=y);const O=o-h,j=Math.abs(Math.round(w/1e3*i.speed)),N=Math.abs(Math.round(O/1e3*i.speed));let D=j>N?j:N;return D<i.minDuration?D=i.minDuration:D>i.maxDuration&&(D=i.maxDuration),new Promise((M,L)=>{w===0&&O===0&&M(!0),Qt.remove(m.element,!0);let E;const z=()=>{Q(),cancelAnimationFrame(E),M(!1)};Qt.add(m.element,z);const H=J=>J.preventDefault(),X=i.cancelOnUserAction?z:H,ee=i.cancelOnUserAction?{passive:!0}:{passive:!1},Y=["wheel","touchstart","keydown","mousedown"],Q=()=>{Y.forEach(J=>{m.element.removeEventListener(J,X,ee)})};Y.forEach(J=>{m.element.addEventListener(J,X,ee)});const te=Date.now(),le=()=>{var J=Date.now()-te,Te=J/D;const ne=Math.round($+w*i.easing(Te)),Be=Math.round(h+O*i.easing(Te));J<D&&(ne!==n||Be!==o)?(m.scrollTo(ne,Be),E=requestAnimationFrame(le)):(m.scrollTo(n,o),cancelAnimationFrame(E),Q(),Qt.remove(m.element,!1),M(!0))};E=requestAnimationFrame(le)})})}var ci=si;function Nn(e,t){return fi(e)||mi(e,t)||ui(e,t)||di()}function di(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ui(e,t){if(e){if(typeof e=="string")return io(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return io(e,t)}}function io(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function mi(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,i,l,d=[],p=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;p=!1}else for(;!(p=(o=i.call(n)).done)&&(d.push(o.value),d.length!==t);p=!0);}catch(m){f=!0,r=m}finally{try{if(!p&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw r}}return d}}function fi(e){if(Array.isArray(e))return e}var pi=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),a.createElement("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),a.createElement("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"}))},gi=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"}))},hi=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"}))},vi=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"}))},bi={title:pi,page:gi,content:hi,demo:vi},lo=function(t){return a.createElement(a.Fragment,null,t.texts.map(function(n,o){return a.createElement(a.Fragment,{key:o},n.highlighted?a.createElement("mark",null,n.text):n.text)}))},xi=function(t){var n=(0,a.useCallback)(function(){var d=0,p=[];return t.forEach(function(f){f.title&&p.push({type:"title",value:{title:f.title}}),f.hints.forEach(function(m){p.push({type:"hint",activeIndex:d++,value:m})})}),[p,d]},[t]),o=(0,a.useState)(n),r=Nn(o,2),i=r[0],l=r[1];return(0,a.useEffect)(function(){l(n)},[t]),i},yi=function(t){var n=xi(t.data),o=Nn(n,2),r=o[0],i=o[1],l=(0,a.useState)(-1),d=Nn(l,2),p=d[0],f=d[1],m=(0,I.TH)(),x=m.pathname,$=function(h){var O;(O=t.onItemSelect)===null||O===void 0||O.call(t,h);var j=new URL(h==null?void 0:h.link,location.origin);(j==null?void 0:j.pathname)===x&&!j.hash&&setTimeout(function(){ci(0,{maxDuration:300})},1)};(0,a.useEffect)(function(){var y=function(O){if(O.key==="ArrowDown")f((p+1)%i);else if(O.key==="ArrowUp")f((p+i-1)%i);else if(O.key==="Enter"&&p>=0){var j=r.find(function(N){return N.type==="hint"&&N.activeIndex===p}).value;I.m8.push(j.link),$==null||$(j),document.activeElement.blur()}["Escape","Enter"].includes(O.key)&&f(-1)};return document.addEventListener("keydown",y),function(){return document.removeEventListener("keydown",y)}});var w=null;return t.loading?w=a.createElement("div",{className:"dumi-default-search-empty"},a.createElement(ro,null),a.createElement(I._H,{id:"search.loading"})):t.data.length?w=a.createElement("dl",null,r.map(function(y,h){return y.type==="title"?a.createElement("dt",{key:String(h)},y.value.title):a.createElement("dd",{key:String(h)},a.createElement(I.rU,{to:y.value.link,"data-active":p===y.activeIndex||void 0,onClick:function(){return $==null?void 0:$(y.value)}},a.createElement(bi[y.value.type]),a.createElement("h4",null,a.createElement(lo,{texts:y.value.highlightTitleTexts})),a.createElement("p",null,a.createElement(lo,{texts:y.value.highlightTexts}))))})):w=a.createElement("div",{className:"dumi-default-search-empty"},a.createElement(ro,null),a.createElement(I._H,{id:"search.not.found"})),a.createElement("div",{className:"dumi-default-search-result",onMouseEnter:function(){return f(-1)},onMouseDownCapture:function(h){return h.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()}},w)},so=yi,co=(0,a.forwardRef)(function(e,t){var n=(0,I.YB)(),o=(0,a.useRef)(!1),r=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,function(){return r.current}),(0,s.jsx)("input",{className:e.className,onCompositionStart:function(){return o.current=!0},onCompositionEnd:function(l){o.current=!1,e.onChange(l.currentTarget.value)},onFocus:e.onFocus,onBlur:e.onBlur,onKeyDown:function(l){["ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),l.key==="Escape"&&!o.current&&l.currentTarget.blur()},onChange:function(l){setTimeout(function(){o.current||e.onChange(l.target.value)},1)},placeholder:n.formatMessage({id:"header.search.placeholder"}),ref:r})}),uo,mo,fo,Ci=(0,Se.kc)(function(e){var t=e.token,n=e.css;return{modal:n(uo||(uo=(0,R.Z)([`
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `]))),mask:n(mo||(mo=(0,R.Z)([`
      background-color: `,`;
      width: 100%;
      height: 100%;
    `])),t.colorBgMask),content:n(fo||(fo=(0,R.Z)([`
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
    `])),t.colorBgElevated)}}),Si=function(t){var n=Ci(),o=n.styles;return(0,a.useEffect)(function(){if(t.visible)document.body.style.overflow="hidden";else{var r;document.body.style.overflow="",(r=t.onClose)===null||r===void 0||r.call(t)}},[t.visible]),t.visible?(0,s.jsxs)("div",{className:o.modal,children:[(0,s.jsx)("div",{className:o.mask,onClick:t.onMaskClick}),(0,s.jsx)("div",{className:o.content,children:t.children})]}):null},po,go,ho,vo,bo,wi=(0,Se.kc)(function(e){var t=e.token,n=e.responsive,o=e.css,r=e.cx;return{container:o(po||(po=(0,R.Z)([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),shortcut:r("site-header-shortcut",o(go||(go=(0,R.Z)([`
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
      `])),t.colorTextDescription,t.colorFillSecondary,t.colorBorderSecondary,n.mobile)),popover:o(ho||(ho=(0,R.Z)([`
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
    `])),t.colorBgElevated),svg:r(o(vo||(vo=(0,R.Z)([`
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,`;
        transform: translateY(-50%);
      `])),t.colorTextPlaceholder)),input:o(bo||(bo=(0,R.Z)([`
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
    `])),t.controlHeightLG,t.colorTextSecondary,t.colorBorder,t.colorBorderSecondary,t.colorBgElevated,t.colorTextPlaceholder)}}),Pn,xo=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(Pn=navigator)===null||Pn===void 0?void 0:Pn.platform:""),$i=function(t){return["TEXTAREA","INPUT"].includes(t.tagName)||t.contentEditable==="true"},Oi=function(){var t=wi(),n=t.styles,o=(0,a.useState)(!1),r=(0,Lt.Z)(o,2),i=r[0],l=r[1],d=(0,a.useRef)(null),p=(0,a.useRef)(null),f=(0,a.useState)("\u2318"),m=(0,Lt.Z)(f,2),x=m[0],$=m[1],w=(0,I.OO)(),y=w.keywords,h=w.setKeywords,O=w.result,j=w.loading,N=(0,a.useState)(!1),D=(0,Lt.Z)(N,2),M=D[0],L=D[1];return(0,a.useEffect)(function(){xo||$("Ctrl");var E=function(H){if(((xo?H.metaKey:H.ctrlKey)&&H.key==="k"||H.key==="/"&&!$i(H.target))&&(H.preventDefault(),d.current)){var X=d.current.getBoundingClientRect(),ee=X.top,Y=X.bottom,Q=X.left,te=X.right,le=ee>=0&&Q>=0&&Y<=window.innerHeight&&te<=window.innerWidth;le?d.current.focus():(h(""),L(!0),setTimeout(function(){var J;(J=p.current)===null||J===void 0||J.focus()}))}H.key==="Escape"&&(H.preventDefault(),L(!1))};return document.addEventListener("keydown",E),function(){return document.removeEventListener("keydown",E)}},[]),(0,s.jsxs)("div",{className:n.container,children:[(0,s.jsx)(to,{className:n.svg}),(0,s.jsx)(co,{onFocus:function(){return l(!0)},onBlur:function(){setTimeout(function(){l(!1)},1)},onChange:function(z){return h(z)},ref:d,className:n.input}),(0,s.jsxs)("span",{className:n.shortcut,children:[x," K"]}),y.trim()&&i&&(O.length||!j)&&!M&&(0,s.jsx)("div",{className:n.popover,children:(0,s.jsx)("section",{children:(0,s.jsx)(so,{data:O,loading:j})})}),(0,s.jsxs)(Si,{visible:M,onMaskClick:function(){L(!1)},onClose:function(){return h("")},children:[(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)(to,{className:n.svg}),(0,s.jsx)(co,{className:n.input,onFocus:function(){return l(!0)},onBlur:function(){setTimeout(function(){l(!1)},1)},onChange:function(z){return h(z)},ref:p})]}),(0,s.jsx)(so,{data:O,loading:j,onItemSelect:function(){L(!1)}})]})]})},ji=Oi,Ii=c(54535),yo=c(8410),Ei=a.createContext(null),Co=a.createContext({}),So=Ei,Dn=c(82225),hn=c(15105),$n=c(64217),Ti=c(42550),Mi=["prefixCls","className","containerRef"],ki=function(t){var n=t.prefixCls,o=t.className,r=t.containerRef,i=(0,ce.Z)(t,Mi),l=a.useContext(Co),d=l.panel,p=(0,Ti.x1)(d,r);return a.createElement("div",(0,B.Z)({className:T()("".concat(n,"-content"),o),role:"dialog",ref:p},(0,$n.Z)(t,{aria:!0}),{"aria-modal":"true"},i))},Ni=ki,wo=c(80334);function $o(e){return typeof e=="string"&&String(Number(e))===e?((0,wo.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}function Ic(e){warning(!("wrapperClassName"in e),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!e.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var Oo={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Pi(e,t){var n,o,r,i=e.prefixCls,l=e.open,d=e.placement,p=e.inline,f=e.push,m=e.forceRender,x=e.autoFocus,$=e.keyboard,w=e.classNames,y=e.rootClassName,h=e.rootStyle,O=e.zIndex,j=e.className,N=e.id,D=e.style,M=e.motion,L=e.width,E=e.height,z=e.children,H=e.mask,X=e.maskClosable,ee=e.maskMotion,Y=e.maskClassName,Q=e.maskStyle,te=e.afterOpenChange,le=e.onClose,J=e.onMouseEnter,Te=e.onMouseOver,ne=e.onMouseLeave,Be=e.onClick,ht=e.onKeyDown,Re=e.onKeyUp,Oe=e.styles,qe=a.useRef(),nt=a.useRef(),ct=a.useRef();a.useImperativeHandle(t,function(){return qe.current});var je=function(et){var Ct=et.keyCode,Rt=et.shiftKey;switch(Ct){case hn.Z.TAB:{if(Ct===hn.Z.TAB){if(!Rt&&document.activeElement===ct.current){var mn;(mn=nt.current)===null||mn===void 0||mn.focus({preventScroll:!0})}else if(Rt&&document.activeElement===nt.current){var Wn;(Wn=ct.current)===null||Wn===void 0||Wn.focus({preventScroll:!0})}}break}case hn.Z.ESC:{le&&$&&(et.stopPropagation(),le(et));break}}};a.useEffect(function(){if(l&&x){var Fe;(Fe=qe.current)===null||Fe===void 0||Fe.focus({preventScroll:!0})}},[l]);var ve=a.useState(!1),me=(0,Lt.Z)(ve,2),vt=me[0],Ye=me[1],ye=a.useContext(So),Et;typeof f=="boolean"?Et=f?{}:{distance:0}:Et=f||{};var Tt=(n=(o=(r=Et)===null||r===void 0?void 0:r.distance)!==null&&o!==void 0?o:ye==null?void 0:ye.pushDistance)!==null&&n!==void 0?n:180,qt=a.useMemo(function(){return{pushDistance:Tt,push:function(){Ye(!0)},pull:function(){Ye(!1)}}},[Tt]);a.useEffect(function(){if(l){var Fe;ye==null||(Fe=ye.push)===null||Fe===void 0||Fe.call(ye)}else{var et;ye==null||(et=ye.pull)===null||et===void 0||et.call(ye)}},[l]),a.useEffect(function(){return function(){var Fe;ye==null||(Fe=ye.pull)===null||Fe===void 0||Fe.call(ye)}},[]);var en=H&&a.createElement(Dn.ZP,(0,B.Z)({key:"mask"},ee,{visible:l}),function(Fe,et){var Ct=Fe.className,Rt=Fe.style;return a.createElement("div",{className:T()("".concat(i,"-mask"),Ct,w==null?void 0:w.mask,Y),style:(0,gt.Z)((0,gt.Z)((0,gt.Z)({},Rt),Q),Oe==null?void 0:Oe.mask),onClick:X&&l?le:void 0,ref:et})}),un=typeof M=="function"?M(d):M,se={};if(vt&&Tt)switch(d){case"top":se.transform="translateY(".concat(Tt,"px)");break;case"bottom":se.transform="translateY(".concat(-Tt,"px)");break;case"left":se.transform="translateX(".concat(Tt,"px)");break;default:se.transform="translateX(".concat(-Tt,"px)");break}d==="left"||d==="right"?se.width=$o(L):se.height=$o(E);var We={onMouseEnter:J,onMouseOver:Te,onMouseLeave:ne,onClick:Be,onKeyDown:ht,onKeyUp:Re},Dt=a.createElement(Dn.ZP,(0,B.Z)({key:"panel"},un,{visible:l,forceRender:m,onVisibleChanged:function(et){te==null||te(et)},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),function(Fe,et){var Ct=Fe.className,Rt=Fe.style;return a.createElement("div",(0,B.Z)({className:T()("".concat(i,"-content-wrapper"),w==null?void 0:w.wrapper,Ct),style:(0,gt.Z)((0,gt.Z)((0,gt.Z)({},se),Rt),Oe==null?void 0:Oe.wrapper)},(0,$n.Z)(e,{data:!0})),a.createElement(Ni,(0,B.Z)({id:N,containerRef:et,prefixCls:i,className:T()(j,w==null?void 0:w.content),style:(0,gt.Z)((0,gt.Z)({},D),Oe==null?void 0:Oe.content)},(0,$n.Z)(e,{aria:!0}),We),z))}),yt=(0,gt.Z)({},h);return O&&(yt.zIndex=O),a.createElement(So.Provider,{value:qt},a.createElement("div",{className:T()(i,"".concat(i,"-").concat(d),y,(0,U.Z)((0,U.Z)({},"".concat(i,"-open"),l),"".concat(i,"-inline"),p)),style:yt,tabIndex:-1,ref:qe,onKeyDown:je},en,a.createElement("div",{tabIndex:0,ref:nt,style:Oo,"aria-hidden":"true","data-sentinel":"start"}),Dt,a.createElement("div",{tabIndex:0,ref:ct,style:Oo,"aria-hidden":"true","data-sentinel":"end"})))}var Di=a.forwardRef(Pi),Bi=Di,zi=function(t){var n=t.open,o=n===void 0?!1:n,r=t.prefixCls,i=r===void 0?"rc-drawer":r,l=t.placement,d=l===void 0?"right":l,p=t.autoFocus,f=p===void 0?!0:p,m=t.keyboard,x=m===void 0?!0:m,$=t.width,w=$===void 0?378:$,y=t.mask,h=y===void 0?!0:y,O=t.maskClosable,j=O===void 0?!0:O,N=t.getContainer,D=t.forceRender,M=t.afterOpenChange,L=t.destroyOnClose,E=t.onMouseEnter,z=t.onMouseOver,H=t.onMouseLeave,X=t.onClick,ee=t.onKeyDown,Y=t.onKeyUp,Q=t.panelRef,te=a.useState(!1),le=(0,Lt.Z)(te,2),J=le[0],Te=le[1],ne=a.useState(!1),Be=(0,Lt.Z)(ne,2),ht=Be[0],Re=Be[1];(0,yo.Z)(function(){Re(!0)},[]);var Oe=ht?o:!1,qe=a.useRef(),nt=a.useRef();(0,yo.Z)(function(){Oe&&(nt.current=document.activeElement)},[Oe]);var ct=function(Ye){var ye;if(Te(Ye),M==null||M(Ye),!Ye&&nt.current&&!((ye=qe.current)!==null&&ye!==void 0&&ye.contains(nt.current))){var Et;(Et=nt.current)===null||Et===void 0||Et.focus({preventScroll:!0})}},je=a.useMemo(function(){return{panel:Q}},[Q]);if(!D&&!J&&!Oe&&L)return null;var ve={onMouseEnter:E,onMouseOver:z,onMouseLeave:H,onClick:X,onKeyDown:ee,onKeyUp:Y},me=(0,gt.Z)((0,gt.Z)({},t),{},{open:Oe,prefixCls:i,placement:d,autoFocus:f,keyboard:x,width:w,mask:h,maskClosable:j,inline:N===!1,afterOpenChange:ct,ref:qe},ve);return a.createElement(Co.Provider,{value:je},a.createElement(Ii.Z,{open:Oe||D||J,autoDestroy:!1,getContainer:N,autoLock:h&&(Oe||J)},a.createElement(Bi,me)))},Hi=zi,Li=Hi,Ri=c(87263),Bn=c(33603),Ai=c(43945),Zi=c(36337),Wi=c(4173),Fi=c(16569),dn=c(69760),vn=c(98423);function Xi(e,t,n){var o=n||{},r=o.noTrailing,i=r===void 0?!1:r,l=o.noLeading,d=l===void 0?!1:l,p=o.debounceMode,f=p===void 0?void 0:p,m,x=!1,$=0;function w(){m&&clearTimeout(m)}function y(O){var j=O||{},N=j.upcomingOnly,D=N===void 0?!1:N;w(),x=!D}function h(){for(var O=arguments.length,j=new Array(O),N=0;N<O;N++)j[N]=arguments[N];var D=this,M=Date.now()-$;if(x)return;function L(){$=Date.now(),t.apply(D,j)}function E(){m=void 0}!d&&f&&!m&&L(),w(),f===void 0&&M>e?d?($=Date.now(),i||(m=setTimeout(f?E:L,e))):L():i!==!0&&(m=setTimeout(f?E:L,f===void 0?e-M:e))}return h.cancel=y,h}function Vi(e,t,n){var o=n||{},r=o.atBegin,i=r===void 0?!1:r;return Xi(e,t,{debounceMode:i!==!1})}var bn=c(96159);const Ui=new fe.E4("antSpinMove",{to:{opacity:1}}),Gi=new fe.E4("antRotate",{to:{transform:"rotate(405deg)"}}),Ki=e=>{const{componentCls:t,calc:n}=e;return{[`${t}`]:Object.assign(Object.assign({},(0,Zt.Wf)(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},[`${t}-text`]:{fontSize:e.fontSize,paddingTop:n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${e.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[`${t}-dot ${t}-dot-item`]:{backgroundColor:e.colorWhite},[`${t}-text`]:{color:e.colorTextLightSolid}},"&-nested-loading":{position:"relative",[`> div > ${t}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${t}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:n(e.dotSize).mul(-1).div(2).equal()},[`${t}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${t}-dot`]:{margin:n(e.dotSizeSM).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${t}-dot`]:{margin:n(e.dotSizeLG).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${t}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none",["&::after"]:{opacity:.4,pointerEvents:"auto"}}},["&-tip"]:{color:e.spinDotDefault},[`${t}-dot`]:{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),height:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:Ui,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:Gi,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t}-dot`]:{fontSize:e.dotSizeSM,i:{width:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),height:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()}},[`&-lg ${t}-dot`]:{fontSize:e.dotSizeLG,i:{width:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}},[`&${t}-show-text ${t}-text`]:{display:"block"}})}},Yi=e=>{const{controlHeightLG:t,controlHeight:n}=e;return{contentHeight:400,dotSize:t/2,dotSizeSM:t*.35,dotSizeLG:n}};var Qi=(0,ge.I$)("Spin",e=>{const t=(0,Kt.TS)(e,{spinDotDefault:e.colorTextDescription});return[Ki(t)]},Yi),Ji=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Ec=null;let On=null;function _i(e,t){const{indicator:n}=t,o=`${e}-dot`;return n===null?null:a.isValidElement(n)?(0,bn.Tm)(n,{className:T()(n.props.className,o)}):a.isValidElement(On)?(0,bn.Tm)(On,{className:T()(On.props.className,o)}):a.createElement("span",{className:T()(o,`${e}-dot-spin`)},a.createElement("i",{className:`${e}-dot-item`,key:1}),a.createElement("i",{className:`${e}-dot-item`,key:2}),a.createElement("i",{className:`${e}-dot-item`,key:3}),a.createElement("i",{className:`${e}-dot-item`,key:4}))}function qi(e,t){return!!e&&!!t&&!isNaN(Number(t))}const jo=e=>{const{prefixCls:t,spinning:n=!0,delay:o=0,className:r,rootClassName:i,size:l="default",tip:d,wrapperClassName:p,style:f,children:m,fullscreen:x=!1}=e,$=Ji(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen"]),{getPrefixCls:w}=a.useContext(P.E_),y=w("spin",t),[h,O,j]=Qi(y),[N,D]=a.useState(()=>n&&!qi(n,o));a.useEffect(()=>{if(n){const Q=Vi(o,()=>{D(!0)});return Q(),()=>{var te;(te=Q==null?void 0:Q.cancel)===null||te===void 0||te.call(Q)}}D(!1)},[o,n]);const M=a.useMemo(()=>typeof m!="undefined"&&!x,[m,x]),{direction:L,spin:E}=a.useContext(P.E_),z=T()(y,E==null?void 0:E.className,{[`${y}-sm`]:l==="small",[`${y}-lg`]:l==="large",[`${y}-spinning`]:N,[`${y}-show-text`]:!!d,[`${y}-fullscreen`]:x,[`${y}-fullscreen-show`]:x&&N,[`${y}-rtl`]:L==="rtl"},r,i,O,j),H=T()(`${y}-container`,{[`${y}-blur`]:N}),X=(0,vn.Z)($,["indicator"]),ee=Object.assign(Object.assign({},E==null?void 0:E.style),f),Y=a.createElement("div",Object.assign({},X,{style:ee,className:z,"aria-live":"polite","aria-busy":N}),_i(y,e),d&&(M||x)?a.createElement("div",{className:`${y}-text`},d):null);return h(M?a.createElement("div",Object.assign({},X,{className:T()(`${y}-nested-loading`,p,O,j)}),N&&a.createElement("div",{key:"loading"},Y),a.createElement("div",{className:H,key:"container"},m)):Y)};jo.setDefaultIndicator=e=>{On=e};var el=jo,Io=e=>{var t,n;const{prefixCls:o,title:r,footer:i,extra:l,loading:d,onClose:p,headerStyle:f,bodyStyle:m,footerStyle:x,children:$,classNames:w,styles:y}=e,{drawer:h}=a.useContext(P.E_),O=a.useCallback(E=>a.createElement("button",{type:"button",onClick:p,"aria-label":"Close",className:`${o}-close`},E),[p]),[j,N]=(0,dn.Z)((0,dn.w)(e),(0,dn.w)(h),{closable:!0,closeIconRender:O});let D;typeof d=="boolean"?D={spinning:d}:typeof d=="object"&&(D=Object.assign({spinning:!0},d));const M=a.useMemo(()=>{var E,z;return!r&&!j?null:a.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(E=h==null?void 0:h.styles)===null||E===void 0?void 0:E.header),f),y==null?void 0:y.header),className:T()(`${o}-header`,{[`${o}-header-close-only`]:j&&!r&&!l},(z=h==null?void 0:h.classNames)===null||z===void 0?void 0:z.header,w==null?void 0:w.header)},a.createElement("div",{className:`${o}-header-title`},N,r&&a.createElement("div",{className:`${o}-title`},r)),l&&a.createElement("div",{className:`${o}-extra`},l))},[j,N,l,f,o,r]),L=a.useMemo(()=>{var E,z;if(!i)return null;const H=`${o}-footer`;return a.createElement("div",{className:T()(H,(E=h==null?void 0:h.classNames)===null||E===void 0?void 0:E.footer,w==null?void 0:w.footer),style:Object.assign(Object.assign(Object.assign({},(z=h==null?void 0:h.styles)===null||z===void 0?void 0:z.footer),x),y==null?void 0:y.footer)},i)},[i,x,o]);return D!=null&&D.spinning?a.createElement(el,Object.assign({spinning:!1,style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},D)):a.createElement(a.Fragment,null,M,a.createElement("div",{className:T()(`${o}-body`,w==null?void 0:w.body,(t=h==null?void 0:h.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(n=h==null?void 0:h.styles)===null||n===void 0?void 0:n.body),m),y==null?void 0:y.body)},$),L)};const tl=e=>{const t="100%";return{left:`translateX(-${t})`,right:`translateX(${t})`,top:`translateY(-${t})`,bottom:`translateY(${t})`}[e]},Eo=(e,t)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":t}),"&-leave":Object.assign(Object.assign({},t),{"&-active":e})}),To=(e,t)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}},Eo({opacity:e},{opacity:1})),nl=(e,t)=>[To(.7,t),Eo({transform:tl(e)},{transform:"none"})];var ol=e=>{const{componentCls:t,motionDurationSlow:n}=e;return{[t]:{[`${t}-mask-motion`]:To(0,n),[`${t}-panel-motion`]:["left","right","top","bottom"].reduce((o,r)=>Object.assign(Object.assign({},o),{[`&-${r}`]:nl(r,n)}),{})}}};const rl=e=>{const{borderRadiusSM:t,componentCls:n,zIndexPopup:o,colorBgMask:r,colorBgElevated:i,motionDurationSlow:l,motionDurationMid:d,paddingXS:p,padding:f,paddingLG:m,fontSizeLG:x,lineHeightLG:$,lineWidth:w,lineType:y,colorSplit:h,marginXS:O,colorIcon:j,colorIconHover:N,colorBgTextHover:D,colorBgTextActive:M,colorText:L,fontWeightStrong:E,footerPaddingBlock:z,footerPaddingInline:H,calc:X}=e,ee=`${n}-content-wrapper`;return{[n]:{position:"fixed",inset:0,zIndex:o,pointerEvents:"none","&-pure":{position:"relative",background:i,display:"flex",flexDirection:"column",[`&${n}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${n}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${n}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${n}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${n}-mask`]:{position:"absolute",inset:0,zIndex:o,background:r,pointerEvents:"auto"},[ee]:{position:"absolute",zIndex:o,maxWidth:"100vw",transition:`all ${l}`,"&-hidden":{display:"none"}},[`&-left > ${ee}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${ee}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${ee}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${ee}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${n}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:i,pointerEvents:"auto"},[`${n}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,fe.bf)(f)} ${(0,fe.bf)(m)}`,fontSize:x,lineHeight:$,borderBottom:`${(0,fe.bf)(w)} ${y} ${h}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${n}-extra`]:{flex:"none"},[`${n}-close`]:Object.assign({display:"inline-flex",width:X(x).add(p).equal(),height:X(x).add(p).equal(),borderRadius:t,justifyContent:"center",alignItems:"center",marginInlineEnd:O,color:j,fontWeight:E,fontSize:x,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${d}`,textRendering:"auto","&:hover":{color:N,backgroundColor:D,textDecoration:"none"},"&:active":{backgroundColor:M}},(0,Zt.Qy)(e)),[`${n}-title`]:{flex:1,margin:0,color:L,fontWeight:e.fontWeightStrong,fontSize:x,lineHeight:$},[`${n}-body`]:{flex:1,minWidth:0,minHeight:0,padding:m,overflow:"auto"},[`${n}-footer`]:{flexShrink:0,padding:`${(0,fe.bf)(z)} ${(0,fe.bf)(H)}`,borderTop:`${(0,fe.bf)(w)} ${y} ${h}`},"&-rtl":{direction:"rtl"}}}},al=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding});var Mo=(0,ge.I$)("Drawer",e=>{const t=(0,Kt.TS)(e,{});return[rl(t),ol(t)]},al),ko=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const kc=null,il={distance:180},No=e=>{var t;const{rootClassName:n,width:o,height:r,size:i="default",mask:l=!0,push:d=il,open:p,afterOpenChange:f,onClose:m,prefixCls:x,getContainer:$,style:w,className:y,visible:h,afterVisibleChange:O,maskStyle:j,drawerStyle:N,contentWrapperStyle:D}=e,M=ko(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:L,getPrefixCls:E,direction:z,drawer:H}=a.useContext(P.E_),X=E("drawer",x),[ee,Y,Q]=Mo(X),te=$===void 0&&L?()=>L(document.body):$,le=T()({"no-mask":!l,[`${X}-rtl`]:z==="rtl"},n,Y,Q),J=a.useMemo(()=>o!=null?o:i==="large"?736:378,[o,i]),Te=a.useMemo(()=>r!=null?r:i==="large"?736:378,[r,i]),ne={motionName:(0,Bn.m)(X,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Be=ve=>({motionName:(0,Bn.m)(X,`panel-motion-${ve}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),ht=(0,Fi.H)(),[Re,Oe]=(0,Ri.Cn)("Drawer",M.zIndex),{classNames:qe={},styles:nt={}}=M,{classNames:ct={},styles:je={}}=H||{};return ee(a.createElement(Wi.BR,null,a.createElement(Zi.Ux,{status:!0,override:!0},a.createElement(Ai.Z.Provider,{value:Oe},a.createElement(Li,Object.assign({prefixCls:X,onClose:m,maskMotion:ne,motion:Be},M,{classNames:{mask:T()(qe.mask,ct.mask),content:T()(qe.content,ct.content),wrapper:T()(qe.wrapper,ct.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},nt.mask),j),je.mask),content:Object.assign(Object.assign(Object.assign({},nt.content),N),je.content),wrapper:Object.assign(Object.assign(Object.assign({},nt.wrapper),D),je.wrapper)},open:p!=null?p:h,mask:l,push:d,width:J,height:Te,style:Object.assign(Object.assign({},H==null?void 0:H.style),w),className:T()(H==null?void 0:H.className,y),rootClassName:le,getContainer:te,afterOpenChange:f!=null?f:O,panelRef:ht,zIndex:Re}),a.createElement(Io,Object.assign({prefixCls:X},M,{onClose:m})))))))},ll=e=>{const{prefixCls:t,style:n,className:o,placement:r="right"}=e,i=ko(e,["prefixCls","style","className","placement"]),{getPrefixCls:l}=a.useContext(P.E_),d=l("drawer",t),[p,f,m]=Mo(d),x=T()(d,`${d}-pure`,`${d}-${r}`,f,m,o);return p(a.createElement("div",{className:x,style:n},a.createElement(Io,Object.assign({prefixCls:d},i))))};No._InternalPanelDoNotUseOrYouWillBeFired=ll;var sl=No,cl=c(68354),Wt=c(52062),Po,Do,Bo,zo,Ho,Lo,Ro,dl=(0,Se.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.cx,r=e.css,i=6;return{rect:r(Po||(Po=(0,R.Z)([`
      background: `,`;

      width: 100%;
    `])),(0,Wt.m4)(t.colorBgContainer,.8)),icon:o("site-burger-icon",r(Do||(Do=(0,R.Z)([`
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
      `])),t.colorTextSecondary,i,i)),active:r(Bo||(Bo=(0,R.Z)([`
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
    `])),t.colorText),container:r(zo||(zo=(0,R.Z)([`
      width: `,`px;
      height: `,`px;
      border-radius: `,`px;
      cursor: pointer;
    `])),t.controlHeight,t.controlHeight,t.borderRadius),drawerRoot:r(Ho||(Ho=(0,R.Z)([`
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
    `])),t.headerHeight+1,n,(0,Wt.m4)(t.colorBgBase,.5)),drawer:r(Lo||(Lo=(0,R.Z)([`
      &.`,`-drawer-content {
        background: transparent;
      }

      .`,`-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `])),n,n),menu:r(Ro||(Ro=(0,R.Z)([`
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
    `])),n,n,(0,Wt.m4)(t.colorBgContainer,.8),t.borderRadius,n,n,(0,Wt.m4)(t.colorBgContainer,.2))}}),ul=function(){var t=(0,a.useState)(!1),n=(0,Lt.Z)(t,2),o=n[0],r=n[1],i=dl(),l=i.styles,d=i.cx,p=(0,G.HX)(function($){return $.navData},Z()),f=(0,G.HX)(function($){return $.sidebar},Z()),m=(0,G.HX)(K.K1),x=(0,G.HX)(function($){return $.location.pathname});return(0,s.jsxs)(F,{className:l.container,onClick:function(){r(!o)},children:[(0,s.jsx)("div",{className:d(l.icon,o?l.active:"")}),(0,s.jsxs)(sl,{open:o,placement:"left",closeIcon:null,rootClassName:l.drawerRoot,className:l.drawer,width:"100vw",headerStyle:{display:"none"},bodyStyle:{padding:0},children:[(0,s.jsx)("div",{style:{height:24},className:l.rect}),(0,s.jsx)(cl.Z,{mode:"inline",selectedKeys:(0,an.uniq)([m,"s-".concat(x)]),openKeys:[m],className:l.menu,items:p.map(function($){return{label:(0,s.jsx)(I.rU,{to:$.link,children:$.title}),key:$.activePath||$.link,children:($.activePath||$.link)===m&&(f==null?void 0:f.map(function(w){return!w.link&&{label:w.title,type:"group",children:w.children.map(function(y){return{label:(0,s.jsx)(I.rU,{to:y.link,onClick:function(){r(!1)},children:y.title}),key:"s-".concat(y.link)}})}}))}})}),(0,s.jsx)("div",{style:{flex:1},className:l.rect})]})]})},ml=ul,fl={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"},pl=fl,gl=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:pl}))},hl=a.forwardRef(gl),vl=hl,bl=c(68866),xl=function(){var t=(0,G.HX)(kn);return t?(0,s.jsx)(bl.Z,{arrow:!1,title:"Github",children:(0,s.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,s.jsx)(Cn.ZP,{icon:(0,s.jsx)(vl,{})})})}):null},yl=(0,a.memo)(xl),Cl=c(15806),Ao=c(96201),Zo,Wo,Fo,Xo,Sl=(0,Se.kc)(function(e){var t=e.css,n=e.responsive,o=e.token;return{header:t(Zo||(Zo=(0,R.Z)([`
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
  `])),o.zIndexPopupBase-50,o.colorSplit,n.mobile,o.colorBgContainer),content:t(Wo||(Wo=(0,R.Z)([`
    padding: 0 24px;
    height: 64px;

    `,` {
      padding: 0 12px;
    }
  `])),n.mobile),left:t(Fo||(Fo=(0,R.Z)([""]))),right:t(Xo||(Xo=(0,R.Z)([`
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
  `])),n.mobile,o.colorBorder)}}),Vo=function(){var t=(0,G.HX)(function(l){return l.siteData.themeConfig.prefersColor.switch}),n=(0,Ao.f)(function(l){return l.themeMode}),o=(0,I.OI)(),r=(0,Lt.Z)(o,3),i=r[2];return(0,a.useEffect)(function(){return i(n)},[n]),t?(0,s.jsx)(Cl.Z,{value:n,onChange:function(d){Ao.f.setState({themeMode:d})}}):null},wl=function(){var t=(0,G.HX)(function(l){return!!l.routeMeta.frontmatter}),n=(0,Nt.F)(),o=n.mobile,r=Sl(),i=r.styles;return t?(0,s.jsx)("div",{className:i.header,children:(0,s.jsx)($e.D,{horizontal:!0,distribution:"space-between",align:"center",width:"auto",className:i.content,children:o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)($e.D,{children:(0,s.jsx)(ml,{})}),(0,s.jsx)($e.D,{horizontal:!0,className:i.left,children:(0,s.jsx)(eo,{})}),(0,s.jsx)($e.D,{children:(0,s.jsx)(Vo,{})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)($e.D,{horizontal:!0,className:i.left,children:(0,s.jsx)(eo,{})}),(0,s.jsx)($e.D,{style:{marginLeft:48,alignSelf:"end"},children:(0,s.jsx)(Ya.Z,{})}),(0,s.jsxs)("section",{className:i.right,children:[(0,s.jsx)("div",{}),(0,s.jsxs)($e.D,{gap:16,horizontal:!0,align:"center",className:"dumi-default-header-right-aside",children:[(0,s.jsx)(ji,{}),(0,s.jsx)(Wa,{}),(0,s.jsx)(yl,{}),(0,s.jsx)(Vo,{})]})]})]})})}):null},Uo=(0,a.memo)(wl),$l=c(92109),Ol={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},jl=Ol,Il=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:jl}))},El=a.forwardRef(Il),Tl=El,Ml={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},kl=Ml,Nl=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:kl}))},Pl=a.forwardRef(Nl),Dl=Pl,zn=c(88929),Bl={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},zl=Bl,Hl=function(t,n){return a.createElement(de.Z,(0,B.Z)({},t,{ref:n,icon:zl}))},Ll=a.forwardRef(Hl),Rl=Ll,Al=c(71002),Zl=c(21770),Go=c(50344),Ko=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.forceRender,r=e.className,i=e.style,l=e.children,d=e.isActive,p=e.role,f=a.useState(d||o),m=(0,Lt.Z)(f,2),x=m[0],$=m[1];return a.useEffect(function(){(o||d)&&$(!0)},[o,d]),x?a.createElement("div",{ref:t,className:T()("".concat(n,"-content"),(0,U.Z)((0,U.Z)({},"".concat(n,"-content-active"),d),"".concat(n,"-content-inactive"),!d),r),style:i,role:p},a.createElement("div",{className:"".concat(n,"-content-box")},l)):null});Ko.displayName="PanelContent";var Wl=Ko,Fl=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],Xl=a.forwardRef(function(e,t){var n=e.showArrow,o=n===void 0?!0:n,r=e.headerClass,i=e.isActive,l=e.onItemClick,d=e.forceRender,p=e.className,f=e.prefixCls,m=e.collapsible,x=e.accordion,$=e.panelKey,w=e.extra,y=e.header,h=e.expandIcon,O=e.openMotion,j=e.destroyInactivePanel,N=e.children,D=(0,ce.Z)(e,Fl),M=m==="disabled",L=m==="header",E=m==="icon",z=w!=null&&typeof w!="boolean",H=function(){l==null||l($)},X=function(J){(J.key==="Enter"||J.keyCode===hn.Z.ENTER||J.which===hn.Z.ENTER)&&H()},ee=typeof h=="function"?h(e):a.createElement("i",{className:"arrow"});ee&&(ee=a.createElement("div",{className:"".concat(f,"-expand-icon"),onClick:["header","icon"].includes(m)?H:void 0},ee));var Y=T()((0,U.Z)((0,U.Z)((0,U.Z)({},"".concat(f,"-item"),!0),"".concat(f,"-item-active"),i),"".concat(f,"-item-disabled"),M),p),Q=T()(r,(0,U.Z)((0,U.Z)((0,U.Z)({},"".concat(f,"-header"),!0),"".concat(f,"-header-collapsible-only"),L),"".concat(f,"-icon-collapsible-only"),E)),te={className:Q,"aria-expanded":i,"aria-disabled":M,onKeyDown:X};return!L&&!E&&(te.onClick=H,te.role=x?"tab":"button",te.tabIndex=M?-1:0),a.createElement("div",(0,B.Z)({},D,{ref:t,className:Y}),a.createElement("div",te,o&&ee,a.createElement("span",{className:"".concat(f,"-header-text"),onClick:m==="header"?H:void 0},y),z&&a.createElement("div",{className:"".concat(f,"-extra")},w)),a.createElement(Dn.ZP,(0,B.Z)({visible:i,leavedClassName:"".concat(f,"-content-hidden")},O,{forceRender:d,removeOnLeave:j}),function(le,J){var Te=le.className,ne=le.style;return a.createElement(Wl,{ref:J,prefixCls:f,className:Te,style:ne,isActive:i,forceRender:d,role:x?"tabpanel":void 0},N)}))}),Yo=Xl,Vl=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],Ul=function(t,n){var o=n.prefixCls,r=n.accordion,i=n.collapsible,l=n.destroyInactivePanel,d=n.onItemClick,p=n.activeKey,f=n.openMotion,m=n.expandIcon;return t.map(function(x,$){var w=x.children,y=x.label,h=x.key,O=x.collapsible,j=x.onItemClick,N=x.destroyInactivePanel,D=(0,ce.Z)(x,Vl),M=String(h!=null?h:$),L=O!=null?O:i,E=N!=null?N:l,z=function(ee){L!=="disabled"&&(d(ee),j==null||j(ee))},H=!1;return r?H=p[0]===M:H=p.indexOf(M)>-1,a.createElement(Yo,(0,B.Z)({},D,{prefixCls:o,key:M,panelKey:M,isActive:H,accordion:r,openMotion:f,expandIcon:m,header:y,collapsible:L,onItemClick:z,destroyInactivePanel:E}),w)})},Gl=function(t,n,o){if(!t)return null;var r=o.prefixCls,i=o.accordion,l=o.collapsible,d=o.destroyInactivePanel,p=o.onItemClick,f=o.activeKey,m=o.openMotion,x=o.expandIcon,$=t.key||String(n),w=t.props,y=w.header,h=w.headerClass,O=w.destroyInactivePanel,j=w.collapsible,N=w.onItemClick,D=!1;i?D=f[0]===$:D=f.indexOf($)>-1;var M=j!=null?j:l,L=function(H){M!=="disabled"&&(p(H),N==null||N(H))},E={key:$,panelKey:$,header:y,headerClass:h,isActive:D,prefixCls:r,destroyInactivePanel:O!=null?O:d,openMotion:m,accordion:i,children:t.props.children,onItemClick:L,expandIcon:x,collapsible:M};return typeof t.type=="string"?t:(Object.keys(E).forEach(function(z){typeof E[z]=="undefined"&&delete E[z]}),a.cloneElement(t,E))};function Kl(e,t,n){return Array.isArray(e)?Ul(e,n):(0,Go.Z)(t).map(function(o,r){return Gl(o,r,n)})}var Yl=Kl;function Ql(e){var t=e;if(!Array.isArray(t)){var n=(0,Al.Z)(t);t=n==="number"||n==="string"?[t]:[]}return t.map(function(o){return String(o)})}var Jl=a.forwardRef(function(e,t){var n=e.prefixCls,o=n===void 0?"rc-collapse":n,r=e.destroyInactivePanel,i=r===void 0?!1:r,l=e.style,d=e.accordion,p=e.className,f=e.children,m=e.collapsible,x=e.openMotion,$=e.expandIcon,w=e.activeKey,y=e.defaultActiveKey,h=e.onChange,O=e.items,j=T()(o,p),N=(0,Zl.Z)([],{value:w,onChange:function(X){return h==null?void 0:h(X)},defaultValue:y,postState:Ql}),D=(0,Lt.Z)(N,2),M=D[0],L=D[1],E=function(X){return L(function(){if(d)return M[0]===X?[]:[X];var ee=M.indexOf(X),Y=ee>-1;return Y?M.filter(function(Q){return Q!==X}):[].concat((0,Ft.Z)(M),[X])})};(0,wo.ZP)(!f,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var z=Yl(O,f,{prefixCls:o,accordion:d,openMotion:x,expandIcon:$,collapsible:m,destroyInactivePanel:i,onItemClick:E,activeKey:M});return a.createElement("div",(0,B.Z)({ref:t,className:j,style:l,role:d?"tablist":void 0},(0,$n.Z)(e,{aria:!0,data:!0})),z)}),Qo=Object.assign(Jl,{Panel:Yo}),Jo=Qo,Nc=Qo.Panel,_l=c(98675),ql=a.forwardRef((e,t)=>{const{getPrefixCls:n}=a.useContext(P.E_),{prefixCls:o,className:r,showArrow:i=!0}=e,l=n("collapse",o),d=T()({[`${l}-no-arrow`]:!i},r);return a.createElement(Jo.Panel,Object.assign({ref:t},e,{prefixCls:l,className:d}))}),es=c(33507);const ts=e=>{const{componentCls:t,contentBg:n,padding:o,headerBg:r,headerPadding:i,collapseHeaderPaddingSM:l,collapseHeaderPaddingLG:d,collapsePanelBorderRadius:p,lineWidth:f,lineType:m,colorBorder:x,colorText:$,colorTextHeading:w,colorTextDisabled:y,fontSizeLG:h,lineHeight:O,lineHeightLG:j,marginSM:N,paddingSM:D,paddingLG:M,paddingXS:L,motionDurationSlow:E,fontSizeIcon:z,contentPadding:H,fontHeight:X,fontHeightLG:ee}=e,Y=`${(0,fe.bf)(f)} ${m} ${x}`;return{[t]:Object.assign(Object.assign({},(0,Zt.Wf)(e)),{backgroundColor:r,border:Y,borderRadius:p,["&-rtl"]:{direction:"rtl"},[`& > ${t}-item`]:{borderBottom:Y,["&:last-child"]:{[`
            &,
            & > ${t}-header`]:{borderRadius:`0 0 ${(0,fe.bf)(p)} ${(0,fe.bf)(p)}`}},[`> ${t}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:i,color:w,lineHeight:O,cursor:"pointer",transition:`all ${E}, visibility 0s`,[`> ${t}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${t}-expand-icon`]:{height:X,display:"flex",alignItems:"center",paddingInlineEnd:N},[`${t}-arrow`]:Object.assign(Object.assign({},(0,Zt.Ro)()),{fontSize:z,transition:`transform ${E}`,svg:{transition:`transform ${E}`}}),[`${t}-header-text`]:{marginInlineEnd:"auto"}},[`${t}-icon-collapsible-only`]:{cursor:"unset",[`${t}-expand-icon`]:{cursor:"pointer"}}},[`${t}-content`]:{color:$,backgroundColor:n,borderTop:Y,[`& > ${t}-content-box`]:{padding:H},["&-hidden"]:{display:"none"}},["&-small"]:{[`> ${t}-item`]:{[`> ${t}-header`]:{padding:l,paddingInlineStart:L,[`> ${t}-expand-icon`]:{marginInlineStart:e.calc(D).sub(L).equal()}},[`> ${t}-content > ${t}-content-box`]:{padding:D}}},["&-large"]:{[`> ${t}-item`]:{fontSize:h,lineHeight:j,[`> ${t}-header`]:{padding:d,paddingInlineStart:o,[`> ${t}-expand-icon`]:{height:ee,marginInlineStart:e.calc(M).sub(o).equal()}},[`> ${t}-content > ${t}-content-box`]:{padding:M}}},[`${t}-item:last-child`]:{borderBottom:0,[`> ${t}-content`]:{borderRadius:`0 0 ${(0,fe.bf)(p)} ${(0,fe.bf)(p)}`}},[`& ${t}-item-disabled > ${t}-header`]:{[`
          &,
          & > .arrow
        `]:{color:y,cursor:"not-allowed"}},[`&${t}-icon-position-end`]:{[`& > ${t}-item`]:{[`> ${t}-header`]:{[`${t}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:N}}}}})}},ns=e=>{const{componentCls:t}=e,n=`> ${t}-item > ${t}-header ${t}-arrow`;return{[`${t}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},os=e=>{const{componentCls:t,headerBg:n,paddingXXS:o,colorBorder:r}=e;return{[`${t}-borderless`]:{backgroundColor:n,border:0,[`> ${t}-item`]:{borderBottom:`1px solid ${r}`},[`
        > ${t}-item:last-child,
        > ${t}-item:last-child ${t}-header
      `]:{borderRadius:0},[`> ${t}-item:last-child`]:{borderBottom:0},[`> ${t}-item > ${t}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${t}-item > ${t}-content > ${t}-content-box`]:{paddingTop:o}}}},rs=e=>{const{componentCls:t,paddingSM:n}=e;return{[`${t}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${t}-item`]:{borderBottom:0,[`> ${t}-content`]:{backgroundColor:"transparent",border:0,[`> ${t}-content-box`]:{paddingBlock:n}}}}}},as=e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer});var is=(0,ge.I$)("Collapse",e=>{const t=(0,Kt.TS)(e,{collapseHeaderPaddingSM:`${(0,fe.bf)(e.paddingXS)} ${(0,fe.bf)(e.paddingSM)}`,collapseHeaderPaddingLG:`${(0,fe.bf)(e.padding)} ${(0,fe.bf)(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[ts(t),os(t),rs(t),ns(t),(0,es.Z)(t)]},as),ls=Object.assign(a.forwardRef((e,t)=>{const{getPrefixCls:n,direction:o,collapse:r}=a.useContext(P.E_),{prefixCls:i,className:l,rootClassName:d,style:p,bordered:f=!0,ghost:m,size:x,expandIconPosition:$="start",children:w,expandIcon:y}=e,h=(0,_l.Z)(Y=>{var Q;return(Q=x!=null?x:Y)!==null&&Q!==void 0?Q:"middle"}),O=n("collapse",i),j=n(),[N,D,M]=is(O),L=a.useMemo(()=>$==="left"?"start":$==="right"?"end":$,[$]),E=y!=null?y:r==null?void 0:r.expandIcon,z=a.useCallback(function(){let Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const Q=typeof E=="function"?E(Y):a.createElement(Rl,{rotate:Y.isActive?90:void 0});return(0,bn.Tm)(Q,()=>{var te;return{className:T()((te=Q==null?void 0:Q.props)===null||te===void 0?void 0:te.className,`${O}-arrow`)}})},[E,O]),H=T()(`${O}-icon-position-${L}`,{[`${O}-borderless`]:!f,[`${O}-rtl`]:o==="rtl",[`${O}-ghost`]:!!m,[`${O}-${h}`]:h!=="middle"},r==null?void 0:r.className,l,d,D,M),X=Object.assign(Object.assign({},(0,Bn.Z)(j)),{motionAppear:!1,leavedClassName:`${O}-content-hidden`}),ee=a.useMemo(()=>w?(0,Go.Z)(w).map((Y,Q)=>{var te,le;if(!((te=Y.props)===null||te===void 0)&&te.disabled){const J=(le=Y.key)!==null&&le!==void 0?le:String(Q),{disabled:Te,collapsible:ne}=Y.props,Be=Object.assign(Object.assign({},(0,vn.Z)(Y.props,["disabled"])),{key:J,collapsible:ne!=null?ne:Te?"disabled":void 0});return(0,bn.Tm)(Y,Be)}return Y}):null,[w]);return N(a.createElement(Jo,Object.assign({ref:t,openMotion:X},(0,vn.Z)(e,["rootClassName"]),{expandIcon:z,prefixCls:O,className:H,style:Object.assign(Object.assign({},r==null?void 0:r.style),p)}),ee))}),{Panel:ql}),_o=ls,Hn=c(56790);const qo=e=>typeof e=="object"&&e!=null&&e.nodeType===1,er=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Ln=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return er(n.overflowY,t)||er(n.overflowX,t)||(o=>{const r=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch(l){return null}})(o);return!!r&&(r.clientHeight<o.scrollHeight||r.clientWidth<o.scrollWidth)})(e)}return!1},jn=(e,t,n,o,r,i,l,d)=>i<e&&l>t||i>e&&l<t?0:i<=e&&d<=n||l>=t&&d>=n?i-e-o:l>t&&d<n||i<e&&d>n?l-t+r:0,ss=e=>{const t=e.parentElement;return t==null?e.getRootNode().host||null:t},tr=(e,t)=>{var n,o,r,i;if(typeof document=="undefined")return[];const{scrollMode:l,block:d,inline:p,boundary:f,skipOverflowHiddenElements:m}=t,x=typeof f=="function"?f:Te=>Te!==f;if(!qo(e))throw new TypeError("Invalid target");const $=document.scrollingElement||document.documentElement,w=[];let y=e;for(;qo(y)&&x(y);){if(y=ss(y),y===$){w.push(y);break}y!=null&&y===document.body&&Ln(y)&&!Ln(document.documentElement)||y!=null&&Ln(y,m)&&w.push(y)}const h=(o=(n=window.visualViewport)==null?void 0:n.width)!=null?o:innerWidth,O=(i=(r=window.visualViewport)==null?void 0:r.height)!=null?i:innerHeight,{scrollX:j,scrollY:N}=window,{height:D,width:M,top:L,right:E,bottom:z,left:H}=e.getBoundingClientRect(),{top:X,right:ee,bottom:Y,left:Q}=(Te=>{const ne=window.getComputedStyle(Te);return{top:parseFloat(ne.scrollMarginTop)||0,right:parseFloat(ne.scrollMarginRight)||0,bottom:parseFloat(ne.scrollMarginBottom)||0,left:parseFloat(ne.scrollMarginLeft)||0}})(e);let te=d==="start"||d==="nearest"?L-X:d==="end"?z+Y:L+D/2-X+Y,le=p==="center"?H+M/2-Q+ee:p==="end"?E+ee:H-Q;const J=[];for(let Te=0;Te<w.length;Te++){const ne=w[Te],{height:Be,width:ht,top:Re,right:Oe,bottom:qe,left:nt}=ne.getBoundingClientRect();if(l==="if-needed"&&L>=0&&H>=0&&z<=O&&E<=h&&L>=Re&&z<=qe&&H>=nt&&E<=Oe)return J;const ct=getComputedStyle(ne),je=parseInt(ct.borderLeftWidth,10),ve=parseInt(ct.borderTopWidth,10),me=parseInt(ct.borderRightWidth,10),vt=parseInt(ct.borderBottomWidth,10);let Ye=0,ye=0;const Et="offsetWidth"in ne?ne.offsetWidth-ne.clientWidth-je-me:0,Tt="offsetHeight"in ne?ne.offsetHeight-ne.clientHeight-ve-vt:0,qt="offsetWidth"in ne?ne.offsetWidth===0?0:ht/ne.offsetWidth:0,en="offsetHeight"in ne?ne.offsetHeight===0?0:Be/ne.offsetHeight:0;if($===ne)Ye=d==="start"?te:d==="end"?te-O:d==="nearest"?jn(N,N+O,O,ve,vt,N+te,N+te+D,D):te-O/2,ye=p==="start"?le:p==="center"?le-h/2:p==="end"?le-h:jn(j,j+h,h,je,me,j+le,j+le+M,M),Ye=Math.max(0,Ye+N),ye=Math.max(0,ye+j);else{Ye=d==="start"?te-Re-ve:d==="end"?te-qe+vt+Tt:d==="nearest"?jn(Re,qe,Be,ve,vt+Tt,te,te+D,D):te-(Re+Be/2)+Tt/2,ye=p==="start"?le-nt-je:p==="center"?le-(nt+ht/2)+Et/2:p==="end"?le-Oe+me+Et:jn(nt,Oe,ht,je,me+Et,le,le+M,M);const{scrollLeft:un,scrollTop:se}=ne;Ye=en===0?0:Math.max(0,Math.min(se+Ye/en,ne.scrollHeight-Be/en+Tt)),ye=qt===0?0:Math.max(0,Math.min(un+ye/qt,ne.scrollWidth-ht/qt+Et)),te+=se-Ye,le+=un-ye}J.push({el:ne,top:Ye,left:ye})}return J},cs=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function ds(e,t){if(!e.isConnected||!(r=>{let i=r;for(;i&&i.parentNode;){if(i.parentNode===document)return!0;i=i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}return!1})(e))return;const n=(r=>{const i=window.getComputedStyle(r);return{top:parseFloat(i.scrollMarginTop)||0,right:parseFloat(i.scrollMarginRight)||0,bottom:parseFloat(i.scrollMarginBottom)||0,left:parseFloat(i.scrollMarginLeft)||0}})(e);if((r=>typeof r=="object"&&typeof r.behavior=="function")(t))return t.behavior(tr(e,t));const o=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:r,top:i,left:l}of tr(e,cs(t))){const d=i-n.top+n.bottom,p=l-n.left+n.right;r.scroll({top:d,left:p,behavior:o})}}function Rn(e){return e!=null&&e===e.window}function nr(e,t){var n,o;if(typeof window=="undefined")return 0;const r=t?"scrollTop":"scrollLeft";let i=0;return Rn(e)?i=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?i=e.documentElement[r]:(e instanceof HTMLElement||e)&&(i=e[r]),e&&!Rn(e)&&typeof i!="number"&&(i=(o=((n=e.ownerDocument)!==null&&n!==void 0?n:e).documentElement)===null||o===void 0?void 0:o[r]),i}var In=c(75164);function us(e,t,n,o){const r=n-t;return e/=o/2,e<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t}function ms(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:n=()=>window,callback:o,duration:r=450}=t,i=n(),l=nr(i,!0),d=Date.now(),p=()=>{const m=Date.now()-d,x=us(m>r?r:m,l,e,r);Rn(i)?i.scrollTo(window.pageXOffset,x):i instanceof Document||i.constructor.name==="HTMLDocument"?i.documentElement.scrollTop=x:i.scrollTop=x,m<r?(0,In.Z)(p):typeof o=="function"&&o()};(0,In.Z)(p)}var or=c(9220);function fs(e){let t;const n=r=>()=>{t=null,e.apply(void 0,(0,Ft.Z)(r))},o=function(){if(t==null){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];t=(0,In.Z)(n(i))}};return o.cancel=()=>{In.Z.cancel(t),t=null},o}var rr=fs;const ps=e=>{const{componentCls:t}=e;return{[t]:{position:"fixed",zIndex:e.zIndexPopup}}},gs=e=>({zIndexPopup:e.zIndexBase+10});var hs=(0,ge.I$)("Affix",ps,gs);function En(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ar(e,t,n){if(n!==void 0&&Math.round(t.top)>Math.round(e.top)-n)return n+t.top}function ir(e,t,n){if(n!==void 0&&Math.round(t.bottom)<Math.round(e.bottom)+n){const o=window.innerHeight-t.bottom;return n+o}}const lr=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function vs(){return typeof window!="undefined"?window:null}const sr=0,cr=1;var bs=a.forwardRef((e,t)=>{var n;const{style:o,offsetTop:r,offsetBottom:i,prefixCls:l,className:d,rootClassName:p,children:f,target:m,onChange:x}=e,{getPrefixCls:$,getTargetContainer:w}=a.useContext(P.E_),y=$("affix",l),[h,O]=a.useState(!1),[j,N]=a.useState(),[D,M]=a.useState(),L=a.useRef(sr),E=a.useRef(null),z=a.useRef(),H=a.useRef(null),X=a.useRef(null),ee=a.useRef(null),Y=(n=m!=null?m:w)!==null&&n!==void 0?n:vs,Q=i===void 0&&r===void 0?0:r,te=()=>{if(L.current!==cr||!X.current||!H.current||!Y)return;const je=Y();if(je){const ve={status:sr},me=En(H.current);if(me.top===0&&me.left===0&&me.width===0&&me.height===0)return;const vt=En(je),Ye=ar(me,vt,Q),ye=ir(me,vt,i);Ye!==void 0?(ve.affixStyle={position:"fixed",top:Ye,width:me.width,height:me.height},ve.placeholderStyle={width:me.width,height:me.height}):ye!==void 0&&(ve.affixStyle={position:"fixed",bottom:ye,width:me.width,height:me.height},ve.placeholderStyle={width:me.width,height:me.height}),ve.lastAffix=!!ve.affixStyle,h!==ve.lastAffix&&(x==null||x(ve.lastAffix)),L.current=ve.status,N(ve.affixStyle),M(ve.placeholderStyle),O(ve.lastAffix)}},le=()=>{var je;L.current=cr,te()},J=rr(()=>{le()}),Te=rr(()=>{if(Y&&j){const je=Y();if(je&&H.current){const ve=En(je),me=En(H.current),vt=ar(me,ve,Q),Ye=ir(me,ve,i);if(vt!==void 0&&j.top===vt||Ye!==void 0&&j.bottom===Ye)return}}le()}),ne=()=>{const je=Y==null?void 0:Y();je&&(lr.forEach(ve=>{var me;z.current&&((me=E.current)===null||me===void 0||me.removeEventListener(ve,z.current)),je==null||je.addEventListener(ve,Te)}),E.current=je,z.current=Te)},Be=()=>{ee.current&&(clearTimeout(ee.current),ee.current=null);const je=Y==null?void 0:Y();lr.forEach(ve=>{var me;je==null||je.removeEventListener(ve,Te),z.current&&((me=E.current)===null||me===void 0||me.removeEventListener(ve,z.current))}),J.cancel(),Te.cancel()};a.useImperativeHandle(t,()=>({updatePosition:J})),a.useEffect(()=>(ee.current=setTimeout(ne),()=>Be()),[]),a.useEffect(()=>{ne()},[m,j]),a.useEffect(()=>{J()},[m,r,i]);const[ht,Re,Oe]=hs(y),qe=T()(p,Re,y,Oe),nt=T()({[qe]:j});let ct=(0,vn.Z)(e,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return ht(a.createElement(or.Z,{onResize:J},a.createElement("div",Object.assign({style:o,className:d,ref:H},ct),j&&a.createElement("div",{style:D,"aria-hidden":"true"}),a.createElement("div",{className:nt,ref:X,style:j},a.createElement(or.Z,{onResize:J},f)))))}),xs=c(35792),dr=a.createContext(void 0),ur=e=>{const{href:t,title:n,prefixCls:o,children:r,className:i,target:l,replace:d}=e,p=a.useContext(dr),{registerLink:f,unregisterLink:m,scrollTo:x,onClick:$,activeLink:w,direction:y}=p||{};a.useEffect(()=>(f==null||f(t),()=>{m==null||m(t)}),[t]);const h=L=>{d&&(L.preventDefault(),window.location.replace(t)),$==null||$(L,{title:n,href:t}),x==null||x(t)},{getPrefixCls:O}=a.useContext(P.E_),j=O("anchor",o),N=w===t,D=T()(`${j}-link`,i,{[`${j}-link-active`]:N}),M=T()(`${j}-link-title`,{[`${j}-link-title-active`]:N});return a.createElement("div",{className:D},a.createElement("a",{className:M,href:t,title:typeof n=="string"?n:"",target:l,onClick:h},n),y!=="horizontal"?r:null)};const ys=e=>{const{componentCls:t,holderOffsetBlock:n,motionDurationSlow:o,lineWidthBold:r,colorPrimary:i,lineType:l,colorSplit:d,calc:p}=e;return{[`${t}-wrapper`]:{marginBlockStart:p(n).mul(-1).equal(),paddingBlockStart:n,[t]:Object.assign(Object.assign({},(0,Zt.Wf)(e)),{position:"relative",paddingInlineStart:r,[`${t}-link`]:{paddingBlock:e.linkPaddingBlock,paddingInline:`${(0,fe.bf)(e.linkPaddingInlineStart)} 0`,"&-title":Object.assign(Object.assign({},Zt.vS),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${t}-link-title`]:{color:e.colorPrimary},[`${t}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${t}-wrapper-horizontal)`]:{[t]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${(0,fe.bf)(r)} ${l} ${d}`,content:'" "'},[`${t}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${o} ease-in-out`,width:r,backgroundColor:i,[`&${t}-ink-visible`]:{display:"inline-block"}}}},[`${t}-fixed ${t}-ink ${t}-ink`]:{display:"none"}}}},Cs=e=>{const{componentCls:t,motionDurationSlow:n,lineWidthBold:o,colorPrimary:r}=e;return{[`${t}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`${(0,fe.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,content:'" "'},[t]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${t}-link:first-of-type`]:{paddingInline:0},[`${t}-ink`]:{position:"absolute",bottom:0,transition:`left ${n} ease-in-out, width ${n} ease-in-out`,height:o,backgroundColor:r}}}}},Ss=e=>({linkPaddingBlock:e.paddingXXS,linkPaddingInlineStart:e.padding});var ws=(0,ge.I$)("Anchor",e=>{const{fontSize:t,fontSizeLG:n,paddingXXS:o,calc:r}=e,i=(0,Kt.TS)(e,{holderOffsetBlock:o,anchorPaddingBlockSecondary:r(o).div(2).equal(),anchorTitleBlock:r(t).div(14).mul(3).equal(),anchorBallSize:r(n).div(2).equal()});return[ys(i),Cs(i)]},Ss);function $s(){return window}function mr(e,t){if(!e.getClientRects().length)return 0;const n=e.getBoundingClientRect();return n.width||n.height?t===window?(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top-t.getBoundingClientRect().top:n.top}const fr=/#([\S ]+)$/;var Os=e=>{var t;const{rootClassName:n,prefixCls:o,className:r,style:i,offsetTop:l,affix:d=!0,showInkInFixed:p=!1,children:f,items:m,direction:x="vertical",bounds:$,targetOffset:w,onClick:y,onChange:h,getContainer:O,getCurrentAnchor:j,replace:N}=e,[D,M]=a.useState([]),[L,E]=a.useState(null),z=a.useRef(L),H=a.useRef(null),X=a.useRef(null),ee=a.useRef(!1),{direction:Y,anchor:Q,getTargetContainer:te,getPrefixCls:le}=a.useContext(P.E_),J=le("anchor",o),Te=(0,xs.Z)(J),[ne,Be,ht]=ws(J,Te),Re=(t=O!=null?O:te)!==null&&t!==void 0?t:$s,Oe=JSON.stringify(D),qe=(0,Hn.zX)(se=>{D.includes(se)||M(We=>[].concat((0,Ft.Z)(We),[se]))}),nt=(0,Hn.zX)(se=>{D.includes(se)&&M(We=>We.filter(Dt=>Dt!==se))}),ct=()=>{var se;const We=(se=H.current)===null||se===void 0?void 0:se.querySelector(`.${J}-link-title-active`);if(We&&X.current){const{style:Dt}=X.current,yt=x==="horizontal";Dt.top=yt?"":`${We.offsetTop+We.clientHeight/2}px`,Dt.height=yt?"":`${We.clientHeight}px`,Dt.left=yt?`${We.offsetLeft}px`:"",Dt.width=yt?`${We.clientWidth}px`:"",yt&&ds(We,{scrollMode:"if-needed",block:"nearest"})}},je=function(se){let We=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Dt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const yt=[],Fe=Re();return se.forEach(et=>{const Ct=fr.exec(et==null?void 0:et.toString());if(!Ct)return;const Rt=document.getElementById(Ct[1]);if(Rt){const mn=mr(Rt,Fe);mn<=We+Dt&&yt.push({link:et,top:mn})}}),yt.length?yt.reduce((Ct,Rt)=>Rt.top>Ct.top?Rt:Ct).link:""},ve=(0,Hn.zX)(se=>{if(z.current===se)return;const We=typeof j=="function"?j(se):se;E(We),z.current=We,h==null||h(se)}),me=a.useCallback(()=>{if(ee.current)return;const se=je(D,w!==void 0?w:l||0,$);ve(se)},[Oe,w,l]),vt=a.useCallback(se=>{ve(se);const We=fr.exec(se);if(!We)return;const Dt=document.getElementById(We[1]);if(!Dt)return;const yt=Re(),Fe=nr(yt,!0),et=mr(Dt,yt);let Ct=Fe+et;Ct-=w!==void 0?w:l||0,ee.current=!0,ms(Ct,{getContainer:Re,callback(){ee.current=!1}})},[w,l]),Ye=T()(Be,ht,Te,n,`${J}-wrapper`,{[`${J}-wrapper-horizontal`]:x==="horizontal",[`${J}-rtl`]:Y==="rtl"},r,Q==null?void 0:Q.className),ye=T()(J,{[`${J}-fixed`]:!d&&!p}),Et=T()(`${J}-ink`,{[`${J}-ink-visible`]:L}),Tt=Object.assign(Object.assign({maxHeight:l?`calc(100vh - ${l}px)`:"100vh"},Q==null?void 0:Q.style),i),qt=se=>Array.isArray(se)?se.map(We=>a.createElement(ur,Object.assign({replace:N},We,{key:We.key}),x==="vertical"&&qt(We.children))):null,en=a.createElement("div",{ref:H,className:Ye,style:Tt},a.createElement("div",{className:ye},a.createElement("span",{className:Et,ref:X}),"items"in e?qt(m):f));a.useEffect(()=>{const se=Re();return me(),se==null||se.addEventListener("scroll",me),()=>{se==null||se.removeEventListener("scroll",me)}},[Oe]),a.useEffect(()=>{typeof j=="function"&&ve(j(z.current||""))},[j]),a.useEffect(()=>{ct()},[x,j,Oe,L]);const un=a.useMemo(()=>({registerLink:qe,unregisterLink:nt,scrollTo:vt,activeLink:L,onClick:y,direction:x}),[L,y,vt,x]);return ne(a.createElement(dr.Provider,{value:un},d?a.createElement(bs,{offsetTop:l,target:Re},en):en))};const pr=Os;pr.Link=ur;var gr=pr,js=c(76010),hr,vr,br,xr,Is=(0,Se.kc)(function(e){var t=e.token,n=e.stylish,o=e.prefixCls,r=e.responsive,i=e.css,l=36;return{container:i(hr||(hr=(0,R.Z)([`
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
    `])),t.tocWidth,r.mobile,t.headerHeight+1,t.colorTextDescription),mobileCtn:i(vr||(vr=(0,R.Z)([`
      position: sticky;
      top: `,`px;

      height: `,`px;
      width: 100%;
      z-index: 200;
      background: transparent;
      background: `,`;
    `])),t.headerHeight+1,l,(0,Wt.m4)(t.colorBgContainer,.8)),expand:i(br||(br=(0,R.Z)([`
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
    `])),t.colorSplit,t.boxShadowSecondary,(0,Wt.m4)(t.colorBgContainer,.8),o),anchor:i(xr||(xr=(0,R.Z)([`
      `,`
    `])),n.blur)}}),Es=(0,a.memo)(function(e){var t=e.items,n=e.activeKey,o=e.onChange,r=(0,js.Z)("",{value:n,onChange:o}),i=(0,Lt.Z)(r,2),l=i[0],d=i[1],p=Is(),f=p.styles,m=(0,Nt.F)(),x=m.mobile,$=(0,Se.Fg)(),w=t.find(function(h){return h.id===l}),y=(0,a.useMemo)(function(){return t.map(function(h){var O;return{href:"#".concat(h.id),title:h.title,key:h.id,children:(O=h.children)===null||O===void 0?void 0:O.map(function(j){return{href:"#".concat(j.id),title:j==null?void 0:j.title,key:j.id}})}})},[t]);return((t==null?void 0:t.length)===0?null:x?(0,s.jsx)(zn.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,s.jsx)("div",{className:f.mobileCtn,children:(0,s.jsx)(_o,{bordered:!1,ghost:!0,expandIconPosition:"end",expandIcon:function(O){var j=O.isActive;return j?(0,s.jsx)(Tl,{}):(0,s.jsx)(Dl,{})},className:f.expand,children:(0,s.jsx)(_o.Panel,{forceRender:!0,header:w?w.title:"\u76EE\u5F55",children:(0,s.jsx)(zn.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,s.jsx)(gr,{onChange:function(O){d(O.replace("#",""))},targetOffset:$.headerHeight+12,items:y})})},"toc")})})}):(0,s.jsxs)("div",{className:f.container,children:[(0,s.jsx)("h4",{children:"Table of Contents"}),(0,s.jsx)(gr,{items:y,className:f.anchor,targetOffset:$.headerHeight+12})]}))||null}),Ts=Es,Ms=(0,a.memo)(function(){var e=(0,G.HX)(K.TL,Z());return(0,s.jsx)(Ts,{items:e})}),ks=Ms,Ns=c(72081),yr,Cr,Sr,Ps=(0,Se.kc)(function(e,t){var n=e.css,o=e.cx,r=e.responsive,i=e.token,l=t.hideToc,d=t.hideSidebar;return{layout:n(yr||(yr=(0,R.Z)([`
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
    `])),i.colorBgLayout,i.colorBgContainer,i.sidebarWidth,l?"":"".concat(i.tocWidth+24,"px"),i.headerHeight,d?"title":"sidebar",l?"title":".",d?"main":"sidebar",l?"main":"toc",d?"footer":"sidebar",r.mobile),toc:n(Cr||(Cr=(0,R.Z)([`
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
    `])),i.tocWidth,r.mobile,i.headerHeight+1,i.colorTextDescription),content:o(n(Sr||(Sr=(0,R.Z)([`
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `]))),n(r({desktop:{maxWidth:i.contentMaxWidth},mobile:{margin:0}})))}}),Ds=(0,a.memo)(function(){var e=(0,I.pC)(),t=(0,Nt.F)(),n=t.mobile,o=(0,G.HX)(function($){return $.routeMeta.frontmatter},Z()),r=(0,G.HX)(Fa),i=(0,G.HX)(Vn),l=(0,G.HX)(function($){return(0,K.TL)($).length===0}),d=o.sidebar===!1,p=o.toc===!1||l,f=Ps({hideToc:p,hideSidebar:d}),m=f.styles,x=f.theme;return(0,s.jsxs)("div",{className:m.layout,children:[(0,s.jsx)(I.ql,{children:o.title&&(0,s.jsxs)("title",{children:[o.title," - ",i]})}),(0,s.jsx)(Uo,{}),p?null:(0,s.jsx)(ks,{}),n||d?null:(0,s.jsx)($l.Z,{}),r?(0,s.jsx)($e.D,{style:{gridArea:"title",paddingBlock:n?24:void 0},children:(0,s.jsx)(F,{children:(0,s.jsx)($e.D,{style:{maxWidth:x.contentMaxWidth,width:"100%"},children:(0,s.jsx)($e.D,{style:{paddingBlock:0,paddingInline:n?16:48},children:(0,s.jsx)(Ns.Z,{})})})})}):null,(0,s.jsx)($e.D,{style:{zIndex:10,gridArea:"main",margin:n?0:24,marginBottom:n?0:48},children:(0,s.jsx)(F,{width:"100%",children:(0,s.jsx)($e.D,{className:m.content,children:(0,s.jsx)($e.D,{horizontal:!0,children:(0,s.jsx)(Ht,{children:e})})})})}),(0,s.jsx)(Yn,{})]})}),Bs=Ds,wr=c(98787),zs=c(36728),Hs=c(10274);const Ls=e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:r,calc:i}=e,l=i(o).sub(n).equal(),d=i(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},(0,Zt.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,fe.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:d,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},An=e=>{const{lineWidth:t,fontSizeIcon:n,calc:o}=e,r=e.fontSizeSM;return(0,Kt.TS)(e,{tagFontSize:r,tagLineHeight:(0,fe.bf)(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(n).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},Zn=e=>({defaultBg:new Hs.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var $r=(0,ge.I$)("Tag",e=>{const t=An(e);return Ls(t)},Zn),Rs=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},As=a.forwardRef((e,t)=>{const{prefixCls:n,style:o,className:r,checked:i,onChange:l,onClick:d}=e,p=Rs(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:f,tag:m}=a.useContext(P.E_),x=j=>{l==null||l(!i),d==null||d(j)},$=f("tag",n),[w,y,h]=$r($),O=T()($,`${$}-checkable`,{[`${$}-checkable-checked`]:i},m==null?void 0:m.className,r,y,h);return w(a.createElement("span",Object.assign({},p,{ref:t,style:Object.assign(Object.assign({},o),m==null?void 0:m.style),className:O,onClick:x})))}),Zs=c(98719);const Ws=e=>(0,Zs.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:r,lightColor:i,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:i,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var Fs=(0,ge.bk)(["Tag","preset"],e=>{const t=An(e);return Ws(t)},Zn);function Xs(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const Tn=(e,t,n)=>{const o=Xs(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var Vs=(0,ge.bk)(["Tag","status"],e=>{const t=An(e);return[Tn(t,"success","Success"),Tn(t,"processing","Info"),Tn(t,"error","Error"),Tn(t,"warning","Warning")]},Zn),Us=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Or=a.forwardRef((e,t)=>{const{prefixCls:n,className:o,rootClassName:r,style:i,children:l,icon:d,color:p,onClose:f,bordered:m=!0,visible:x}=e,$=Us(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:w,direction:y,tag:h}=a.useContext(P.E_),[O,j]=a.useState(!0),N=(0,vn.Z)($,["closeIcon","closable"]);a.useEffect(()=>{x!==void 0&&j(x)},[x]);const D=(0,wr.o2)(p),M=(0,wr.yT)(p),L=D||M,E=Object.assign(Object.assign({backgroundColor:p&&!L?p:void 0},h==null?void 0:h.style),i),z=w("tag",n),[H,X,ee]=$r(z),Y=T()(z,h==null?void 0:h.className,{[`${z}-${p}`]:L,[`${z}-has-color`]:p&&!L,[`${z}-hidden`]:!O,[`${z}-rtl`]:y==="rtl",[`${z}-borderless`]:!m},o,r,X,ee),Q=Be=>{Be.stopPropagation(),f==null||f(Be),!Be.defaultPrevented&&j(!1)},[,te]=(0,dn.Z)((0,dn.w)(e),(0,dn.w)(h),{closable:!1,closeIconRender:Be=>{const ht=a.createElement("span",{className:`${z}-close-icon`,onClick:Q},Be);return(0,bn.wm)(Be,ht,Re=>({onClick:Oe=>{var qe;(qe=Re==null?void 0:Re.onClick)===null||qe===void 0||qe.call(Re,Oe),Q(Oe)},className:T()(Re==null?void 0:Re.className,`${z}-close-icon`)}))}}),le=typeof $.onClick=="function"||l&&l.type==="a",J=d||null,Te=J?a.createElement(a.Fragment,null,J,l&&a.createElement("span",null,l)):l,ne=a.createElement("span",Object.assign({},N,{ref:t,className:Y,style:E}),Te,te,D&&a.createElement(Fs,{key:"preset",prefixCls:z}),M&&a.createElement(Vs,{key:"status",prefixCls:z}));return H(le?a.createElement(zs.Z,{component:"Tag"},ne):ne)});Or.CheckableTag=As;var Gs=Or,jr,Ir,Er,Tr,Mr,kr,Nr,Pr,Dr,Br,Ks=(0,Se.kc)(function(e,t){var n=e.token,o=e.prefixCls,r=e.responsive,i=e.css,l=e.stylish,d=e.isDarkMode,p=e.cx,f=t.rowNum,m=t.hasLink,x="".concat(o,"-features"),$="".concat(x,"-cover"),w="".concat(x,"-description"),y="".concat(x,"-title"),h="".concat(x,"-img"),O=20,j=function(M){return i(jr||(jr=(0,R.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),M,M,M*(22/24))},N=i(Ir||(Ir=(0,R.Z)([`
      transition: all `," ",`;
    `])),n.motionDurationSlow,n.motionEaseInOutCirc);return{cell:i(Er||(Er=(0,R.Z)([`
        overflow: hidden;
      `]))),container:i(Tr||(Tr=(0,R.Z)([`
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
      `])),N,n.colorFillContent,n.colorFillQuaternary,(0,Wt.$n)(.5,n.colorFillContent),(0,Wt.$n)(.5,n.colorFillQuaternary),n.colorBorder,n.boxShadowSecondary,$,O*f,h,j(100),w,y,m?14:20),title:p(y,N,i(Mr||(Mr=(0,R.Z)([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),n.lineHeightHeading3,n.colorText)),desc:p(w,N,i(kr||(kr=(0,R.Z)([`
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
        `])),n.colorTextSecondary,n.colorTextDescription,d?n.colorPrimary:n.colorPrimaryBgHover)),imgContainer:p($,N,i(Nr||(Nr=(0,R.Z)([`
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
        `])),n.colorFillContent,j(24),n.gradientColor1,n.gradientColor2,n.colorBgContainer,(0,Wt.m4)(n.gradientColor2,.3),(0,Wt.m4)(n.gradientColor2,.3),(0,Wt.m4)(n.gradientColor1,.3))),img:p(h,N,i(Pr||(Pr=(0,R.Z)([`
          `,`;
          color: `,`;
        `])),j(20),n.colorWhite)),link:i(Dr||(Dr=(0,R.Z)([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),N,l.resetLinkColor,n.colorTextDescription,n.colorPrimaryHover),blur:i(Br||(Br=(0,R.Z)([`
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
      `])),l.heroBlurBall,d?.05:.08,r.mobile)}}),Ys=function(t){var n=t.image,o=t.className,r=t.title,i=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return n.startsWith("http")||i.test(n)?(0,s.jsx)("img",{className:o,src:n,alt:r}):(0,s.jsx)(F,{className:o,children:n})},Qs=function(t){var n=t.imageType,o=t.row,r=t.column,i=t.hero,l=t.description,d=t.image,p=t.title,f=t.link,m=t.imageStyle,x=t.openExternal,$=o||7,w=Ks({rowNum:$,hasLink:!!f}),y=w.styles,h=w.theme;return(0,s.jsxs)("div",{className:y.container,style:{gridRow:"span ".concat($),gridColumn:"span ".concat(r||1),cursor:f?"pointer":"default"},onClick:function(){f&&(x?window.open(f):I.m8.push(f))},children:[(0,s.jsxs)("div",{className:y.cell,children:[d&&(0,s.jsx)(F,{"image-style":n,className:y.imgContainer,style:m,children:(0,s.jsx)(Ys,{className:y.img,image:d,title:p})}),p&&(0,s.jsxs)($e.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:y.title,children:[p,n==="soon"?(0,s.jsx)(Gs,{color:h.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),l&&(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:l},className:y.desc}),f&&(0,s.jsx)("div",{className:y.link,children:(0,s.jsxs)(I.rU,{to:f,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,s.jsx)(bt,{})]})})]}),i&&(0,s.jsx)("div",{className:y.blur})]})},Js=Qs,zr,Hr,_s=(0,Se.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.responsive,r=e.css,i=e.cx,l="".concat(n,"-features");return{container:i(l,r(zr||(zr=(0,R.Z)([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),t.contentMaxWidth,o({mobile:r(Hr||(Hr=(0,R.Z)([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}});function Lr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function qs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lr(Object(n),!0).forEach(function(o){(0,U.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lr(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var ec=function(t){var n=t.items,o=t.style,r=_s(),i=r.styles;return n!=null&&n.length?(0,s.jsx)("div",{className:i.container,style:o,children:n.map(function(l){return(0,s.jsx)(Js,qs({},l),l.title)})}):null},tc=ec,Rr=function(t){return!!t.routeMeta.frontmatter.hero},nc=function(t){var n,o;return!!((n=t.routeMeta.frontmatter.hero)!==null&&n!==void 0&&n.showCustomContent)||!!((o=t.siteData.themeConfig.hero)!==null&&o!==void 0&&o.showCustomContent)},_t=function(t,n){if(n)return n[t.locale.id]?n[t.locale.id]:n},oc=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((o=_t(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||_t(t,t.siteData.themeConfig.title)||t.siteData.themeConfig.name},rc=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((o=_t(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||_t(t,t.siteData.themeConfig.description)},ac=function(t){var n,o;return((n=t.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((o=_t(t,t.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||_t(t,t.siteData.themeConfig.actions)},ic=function(t){var n;return Rr(t)?((n=_t(t,t.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||_t(t,t.siteData.themeConfig.features)||t.routeMeta.frontmatter.features||[]:[]},lc=function(){var t=(0,G.HX)(ic,Jn.X);return t!=null&&t.length?(0,s.jsx)(tc,{items:t,style:{margin:"0 16px"}}):null},sc=lc,Ar,cc=(0,Se.kc)(function(e){var t=e.css,n=e.stylish;return{button:t(Ar||(Ar=(0,R.Z)([`
      border: none;

      `,`
      `,`

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `])),n.heroButtonGradient,n.heroGradientFlow)}}),dc=function(t){var n=t.children,o=cc(),r=o.styles;return(0,s.jsx)(Cn.ZP,{size:"large",shape:"round",type:"primary",className:r.button,children:n})},uc=dc,Zr,Wr,Fr,Xr,Vr,Ur,Gr,mc=(0,Se.kc)(function(e){var t=e.css,n=e.responsive,o=e.token,r=e.stylish,i=e.isDarkMode;return{container:t(Zr||(Zr=(0,R.Z)([`
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
  `])),o.colorTextSecondary,n({mobile:{fontSize:16}})),titleContainer:t(Wr||(Wr=(0,R.Z)([`
    position: relative;
  `]))),title:t(Fr||(Fr=(0,R.Z)([`
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
  `])),o.fontFamily,n({mobile:{fontSize:40}}),r.heroGradient,r.heroGradientFlow),titleShadow:t(Xr||(Xr=(0,R.Z)([`
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
  `])),i?o.colorWhite:o.colorTextBase,o.fontFamily,n({mobile:{fontSize:40}}),r.heroTextShadow),desc:t(Vr||(Vr=(0,R.Z)([`
    font-size: `,`px;
    color: `,`;

    `,` {
      font-size: `,`px;
      margin: 24px 16px;
    }
  `])),o.fontSizeHeading3,o.colorTextSecondary,n.mobile,o.fontSizeHeading5),actions:t(Ur||(Ur=(0,R.Z)([`
    margin-top: 48px;
    display: flex;
    justify-content: center;

    `,`
  `])),n({mobile:{marginTop:24}})),canvas:t(Gr||(Gr=(0,R.Z)([`
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
  `])),r.heroBlurBall,n.mobile)}}),fc=function(t){var n=t.title,o=t.description,r=t.actions,i=mc(),l=i.styles,d=i.cx;return(0,s.jsxs)($e.D,{horizontal:!0,distribution:"center",className:l.container,children:[(0,s.jsx)("div",{className:l.canvas}),(0,s.jsxs)(F,{children:[n&&(0,s.jsxs)("div",{className:l.titleContainer,children:[(0,s.jsx)("h1",{className:l.title,dangerouslySetInnerHTML:{__html:n}}),(0,s.jsx)("div",{className:d(l.titleShadow),dangerouslySetInnerHTML:{__html:n}})]}),o&&(0,s.jsx)("p",{className:l.desc,dangerouslySetInnerHTML:{__html:o}}),!!(r!=null&&r.length)&&(0,s.jsx)(zn.ZP,{theme:{token:{fontSize:16,controlHeight:40}},children:(0,s.jsx)($e.D,{horizontal:!0,gap:24,className:l.actions,children:r.map(function(p,f){var m=p.text,x=p.link,$=p.openExternal,w=/^(https?:)?\/\//i.test(x),y=f===0?(0,s.jsx)(uc,{children:m}):(0,s.jsx)(Cn.ZP,{size:"large",shape:"round",type:"default",children:m});return w?(0,s.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:y},"".concat(m,"-").concat(f)):(0,s.jsx)(I.rU,{to:x,target:$?"_blank":void 0,rel:"noreferrer",children:y},m)})})})]})]})},pc=fc,gc=function(){var t=(0,G.HX)(oc),n=(0,G.HX)(rc),o=(0,G.HX)(ac);return(0,s.jsx)(pc,{title:t,actions:o,description:n})},hc=gc,Kr,vc=(0,Se.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.css,r=e.cx,i="".concat(n,"-home-contents");return{container:r(i,o(Kr||(Kr=(0,R.Z)([`
        width: 100%;
        max-width: `,`px;
        padding: 0 16px;
        box-sizing: border-box;
      `])),t.contentMaxWidth))}}),bc=(0,a.memo)(function(){var e=(0,G.HX)(Vn),t=(0,I.pC)(),n=(0,G.HX)(nc),o=vc(),r=o.styles;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(I.ql,{children:(0,s.jsx)("title",{children:e})}),(0,s.jsxs)($e.D,{align:"center",gap:80,children:[(0,s.jsx)(Uo,{}),(0,s.jsx)(hc,{}),(0,s.jsx)(sc,{}),n&&(0,s.jsx)("div",{className:r.container,children:t}),(0,s.jsx)(Yn,{})]})]})}),xc=bc,Yr,yc=(0,Se.vJ)(Yr||(Yr=(0,R.Z)([`
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
`])),function(e){return e.theme.colorBgLayout},function(e){var t=e.theme;return t.colorFill}),Cc=(0,a.memo)(function(){var e=(0,I.YB)(),t=(0,I.TH)(),n=t.hash,o=(0,G.HX)(function(l){return l.routeMeta.frontmatter}),r=(0,G.HX)(Rr),i=(0,G.HX)(function(l){return l.siteData.loading});return(0,a.useEffect)(function(){var l=n.replace("#","");l&&setTimeout(function(){var d=document.getElementById(decodeURIComponent(l));d&&(d.scrollIntoView(),window.scrollBy({top:-80}))},1)},[i,n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(I.ql,{children:[(0,s.jsx)("html",{lang:e.locale.replace(/-.+$/,"")}),o.title&&(0,s.jsx)("meta",{property:"og:title",content:o.title}),o.description&&(0,s.jsx)("meta",{name:"description",content:o.description}),o.description&&(0,s.jsx)("meta",{property:"og:description",content:o.description}),o.keywords&&(0,s.jsx)("meta",{name:"keywords",content:o.keywords.join(",")}),o.keywords&&(0,s.jsx)("meta",{property:"og:keywords",content:o.keywords.join(",")})]}),r?(0,s.jsx)(xc,{}):(0,s.jsx)(Bs,{})]})});c.g.__ANTD_CACHE__=v.Y.cache;var Sc=function(t){var n=t.children,o=(0,G.HX)(_n,Z());return(0,s.jsx)(tn,{cache:v.Y.cache,token:o,children:n})},wc=(0,a.memo)(function(e){var t=e.initState;return(0,s.jsxs)(G.zt,{createStore:function(){return(0,G.MT)(t)},children:[(0,s.jsx)(on,{}),(0,s.jsxs)(Sc,{children:[(0,s.jsx)(yc,{}),(0,s.jsx)(Cc,{})]})]})}),$c=function(){var e=(0,I.WF)(),t=(0,I.tx)(),n=(0,I.eL)(),o=(0,I.zh)(),r=(0,I.OK)(),i=(0,I.TH)(),l=(0,I.bU)(),d=(0,a.useMemo)(function(){return{siteData:e,navData:r,locale:l,location:i,routeMeta:n,tabMeta:o,sidebar:t}},[]);return(0,s.jsx)(wc,{initState:d})}},93538:function(A,q,c){"use strict";c.d(q,{K1:function(){return Z},TL:function(){return a},e9:function(){return ce},gt:function(){return U}});var v=c(4942);function I(pe,T){var P=Object.keys(pe);if(Object.getOwnPropertySymbols){var ae=Object.getOwnPropertySymbols(pe);T&&(ae=ae.filter(function(ke){return Object.getOwnPropertyDescriptor(pe,ke).enumerable})),P.push.apply(P,ae)}return P}function V(pe){for(var T=1;T<arguments.length;T++){var P=arguments[T]!=null?arguments[T]:{};T%2?I(Object(P),!0).forEach(function(ae){(0,v.Z)(pe,ae,P[ae])}):Object.getOwnPropertyDescriptors?Object.defineProperties(pe,Object.getOwnPropertyDescriptors(P)):I(Object(P)).forEach(function(ae){Object.defineProperty(pe,ae,Object.getOwnPropertyDescriptor(P,ae))})}return pe}var Z=function(T){if(T.location.pathname==="/")return"/";var P=T.navData.filter(function(ae){return ae.link!=="/"}).find(function(ae){return T.location.pathname.startsWith(ae.activePath||ae.link)});return(P==null?void 0:P.activePath)||(P==null?void 0:P.link)||""},a=function(T){var P,ae,ke=T.routeMeta,Qe=ke.toc,Je=ke.frontmatter;return(P=T.tabMeta)!==null&&P!==void 0&&P.toc&&(Qe=T.tabMeta.toc),(ae=T.tabMeta)!==null&&ae!==void 0&&ae.frontmatter&&(Je=T.tabMeta.frontmatter),Qe.reduce(function(ge,ue){var oe=function(Ve){if(!Je.tocDepth||typeof Je.tocDepth=="number"&&Je.tocDepth>Ve-1)return!0};if(ue.depth===2&&oe(2))ge.push(V({},ue));else if(ue.depth===3&&oe(3)){var we=ge[ge.length-1];we&&(we.children=we.children||[],we.children.push(V({},ue)))}return ge},[])},U=function(T){var P;return((P=T.sidebar)===null||P===void 0?void 0:P.map(function(ae){return ae.children}).flat())||[]},ce=function(T){var P=U(T),ae=T.location.pathname,ke=P.findIndex(function(Qe){return Qe.link===ae});return{prev:P[ke-1],currentIndex:ke,next:P[ke+1]}}},40123:function(A,q,c){"use strict";var v=c(67294),I=function(){return v.createElement(v.Fragment,null)};q.Z=I},62705:function(A,q,c){var v=c(55639),I=v.Symbol;A.exports=I},44239:function(A,q,c){var v=c(62705),I=c(89607),V=c(2333),Z="[object Null]",a="[object Undefined]",U=v?v.toStringTag:void 0;function ce(pe){return pe==null?pe===void 0?a:Z:U&&U in Object(pe)?I(pe):V(pe)}A.exports=ce},27561:function(A,q,c){var v=c(67990),I=/^\s+/;function V(Z){return Z&&Z.slice(0,v(Z)+1).replace(I,"")}A.exports=V},31957:function(A,q,c){var v=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g;A.exports=v},89607:function(A,q,c){var v=c(62705),I=Object.prototype,V=I.hasOwnProperty,Z=I.toString,a=v?v.toStringTag:void 0;function U(ce){var pe=V.call(ce,a),T=ce[a];try{ce[a]=void 0;var P=!0}catch(ke){}var ae=Z.call(ce);return P&&(pe?ce[a]=T:delete ce[a]),ae}A.exports=U},2333:function(A){var q=Object.prototype,c=q.toString;function v(I){return c.call(I)}A.exports=v},55639:function(A,q,c){var v=c(31957),I=typeof self=="object"&&self&&self.Object===Object&&self,V=v||I||Function("return this")();A.exports=V},67990:function(A){var q=/\s/;function c(v){for(var I=v.length;I--&&q.test(v.charAt(I)););return I}A.exports=c},23279:function(A,q,c){var v=c(13218),I=c(7771),V=c(14841),Z="Expected a function",a=Math.max,U=Math.min;function ce(pe,T,P){var ae,ke,Qe,Je,ge,ue,oe=0,we=!1,Xe=!1,Ve=!0;if(typeof pe!="function")throw new TypeError(Z);T=V(T)||0,v(P)&&(we=!!P.leading,Xe="maxWait"in P,Qe=Xe?a(V(P.maxWait)||0,T):Qe,Ve="trailing"in P?!!P.trailing:Ve);function Ne(Ae){var mt=ae,At=ke;return ae=ke=void 0,oe=Ae,Je=pe.apply(At,mt),Je}function lt(Ae){return oe=Ae,ge=setTimeout(Mt,T),we?Ne(Ae):Je}function s(Ae){var mt=Ae-ue,At=Ae-oe,Xt=T-mt;return Xe?U(Xt,Qe-At):Xt}function _e(Ae){var mt=Ae-ue,At=Ae-oe;return ue===void 0||mt>=T||mt<0||Xe&&At>=Qe}function Mt(){var Ae=I();if(_e(Ae))return ut(Ae);ge=setTimeout(Mt,s(Ae))}function ut(Ae){return ge=void 0,Ve&&ae?Ne(Ae):(ae=ke=void 0,Je)}function tn(){ge!==void 0&&clearTimeout(ge),oe=0,ae=ue=ke=ge=void 0}function Ft(){return ge===void 0?Je:ut(I())}function kt(){var Ae=I(),mt=_e(Ae);if(ae=arguments,ke=this,ue=Ae,mt){if(ge===void 0)return lt(ue);if(Xe)return clearTimeout(ge),ge=setTimeout(Mt,T),Ne(ue)}return ge===void 0&&(ge=setTimeout(Mt,T)),Je}return kt.cancel=tn,kt.flush=Ft,kt}A.exports=ce},13218:function(A){function q(c){var v=typeof c;return c!=null&&(v=="object"||v=="function")}A.exports=q},37005:function(A){function q(c){return c!=null&&typeof c=="object"}A.exports=q},33448:function(A,q,c){var v=c(44239),I=c(37005),V="[object Symbol]";function Z(a){return typeof a=="symbol"||I(a)&&v(a)==V}A.exports=Z},7771:function(A,q,c){var v=c(55639),I=function(){return v.Date.now()};A.exports=I},14841:function(A,q,c){var v=c(27561),I=c(13218),V=c(33448),Z=0/0,a=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,ce=/^0o[0-7]+$/i,pe=parseInt;function T(P){if(typeof P=="number")return P;if(V(P))return Z;if(I(P)){var ae=typeof P.valueOf=="function"?P.valueOf():P;P=I(ae)?ae+"":ae}if(typeof P!="string")return P===0?P:+P;P=v(P);var ke=U.test(P);return ke||ce.test(P)?pe(P.slice(2),ke?2:8):a.test(P)?Z:+P}A.exports=T},96446:function(A,q,c){var v=c(37923);function I(V){if(Array.isArray(V))return v(V)}A.exports=I,A.exports.__esModule=!0,A.exports.default=A.exports},96936:function(A){function q(c){if(typeof Symbol!="undefined"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}A.exports=q,A.exports.__esModule=!0,A.exports.default=A.exports},88619:function(A){function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}A.exports=q,A.exports.__esModule=!0,A.exports.default=A.exports},68400:function(A){function q(c,v){return v||(v=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(v)}}))}A.exports=q,A.exports.__esModule=!0,A.exports.default=A.exports},19632:function(A,q,c){var v=c(96446),I=c(96936),V=c(96263),Z=c(88619);function a(U){return v(U)||I(U)||V(U)||Z()}A.exports=a,A.exports.__esModule=!0,A.exports.default=A.exports},76248:function(A,q,c){"use strict";c.d(q,{X:function(){return v}});function v(V,Z){if(Object.is(V,Z))return!0;if(typeof V!="object"||V===null||typeof Z!="object"||Z===null)return!1;if(V instanceof Map&&Z instanceof Map){if(V.size!==Z.size)return!1;for(const[U,ce]of V)if(!Object.is(ce,Z.get(U)))return!1;return!0}if(V instanceof Set&&Z instanceof Set){if(V.size!==Z.size)return!1;for(const U of V)if(!Z.has(U))return!1;return!0}const a=Object.keys(V);if(a.length!==Object.keys(Z).length)return!1;for(const U of a)if(!Object.prototype.hasOwnProperty.call(Z,U)||!Object.is(V[U],Z[U]))return!1;return!0}var I=(V,Z)=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`."),v(V,Z))}}]);
