(this["webpackJsonpmappingfunk-interface"]=this["webpackJsonpmappingfunk-interface"]||[]).push([[28],{1061:function(e,n,t){"use strict";t.r(n);var a,i=t(8),c=t(1),s=t(46),o=t(107),l=t(427),r=t(703),b=t.n(r),d=t(214),u=t(413),j=t(0);const p=Object(s.a)("h1")(a||(a=Object(i.a)(['\n  font-family: "Heebo Medium";\n  font-style: normal;\n  font-weight: 500; \n  font-size: 32px;\n  line-height: 48px;\n  color: #000;\n'])));var h,O,f=function(e){const{children:n}=e;return Object(j.jsx)(p,{...e,children:n})},g=t(14),m=t(225),k=t(994);const x=Object(s.a)("div")(h||(h=Object(i.a)(["\n  padding-right: 44px;\n"]))),y=Object(s.a)(o.a)(O||(O=Object(i.a)(["\n  .pagination {\n  }\n"]))),I=[{id:"avatar",numeric:!1,disablePadding:!0,label:"Collateral"},{id:"ticker",numeric:!0,disablePadding:!1,label:"Ticker"},{id:"markPrice",numeric:!0,disablePadding:!1,label:"Mark Price"},{id:"outstandingDebtPosition",numeric:!0,disablePadding:!1,label:" Outstanding Debt Position"},{id:"collateralRatio",numeric:!0,disablePadding:!1,label:"Collateral Ratio"},{id:"guaranteeDays",numeric:!0,disablePadding:!1,label:"Prepaid Interest Coverage"}];n.default=function(e){const{history:n}=e,[t,a]=Object(c.useState)("Ticker"),[i,s]=Object(c.useState)(),o=Object(c.useCallback)((e=>{let{target:n}=e;const{value:t}=n;s(t)}),[]),{hashPowerTokenList:r}=Object(u.a)(),{changeCPT:p}=Object(m.a)(),h=Object(c.useCallback)((e=>e.positionInfoValues&&Object.keys(e.positionInfoValues).length?e.positionInfoValues.cRate.includes("NaN")?0:"Infinity"===e.positionInfoValues.cRate?"+\u221e":"".concat(e.positionInfoValues.cRate,"%"):0),[]),O=Object(c.useCallback)((e=>e.positionInfoValues&&Object.keys(e.positionInfoValues).length&&e.positionInfoValues.gDays?"Infinity"===e.positionInfoValues.gDays?"+\u221e":e.positionInfoValues.gDays:0),[]);return Object(j.jsxs)(x,{children:[Object(j.jsx)(f,{style:{marginBottom:14,fontFamily:"Heebo Medium"},children:"Liquidation"}),Object(j.jsxs)(y,{children:[Object(j.jsxs)(k.Search,{children:[Object(j.jsx)(k.SearchIconWrapper,{children:Object(j.jsx)(b.a,{})}),Object(j.jsx)(k.StyledInputBase,{type:"search",placeholder:t,inputProps:{"aria-label":"search"},value:i,onInput:o,onFocus:()=>{a("")},onBlur:()=>{a("Ticker")}})]}),Object(j.jsx)(l.b,{rowClick:(e,t)=>{const a=r.filter((e=>e.token===t))[0];p(a),n.push("/liquidation/detail")},pagination:!0,dataSource:r||[],columns:I,content:(e,n,t)=>{return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{component:"th",id:t,scope:"row",children:Object(j.jsx)("span",{style:{color:"#2AA1FF"},children:(a=e.avatar,a?"".concat(a.slice(0,6),"...").concat(a.slice(-6)):a)})}),Object(j.jsx)(l.a,{children:e.ticker}),Object(j.jsxs)(l.a,{children:[Number(e.position)?Object(d.f)(e.tokensValues[e.token]):0," WBTC"]}),Object(j.jsx)(l.a,{children:Number(e.position)?Object(d.c)(e.balance/Object(g.c)("1",e.decimals)):0}),Object(j.jsx)(l.a,{children:h(e)}),Object(j.jsxs)(l.a,{children:[O(e)," days"]})]});var a}})]})]})}}}]);
//# sourceMappingURL=28.c6f15990.chunk.js.map