(this["webpackJsonpmappingfunk-interface"]=this["webpackJsonpmappingfunk-interface"]||[]).push([[20],{1055:function(t,e,n){"use strict";n.r(e);var a,i,c,o,s=n(8),l=n(1),r=n.n(l),u=n(46),p=n(709),d=n(998),b=n(999),j=n(1060),m=n(1e3),g=n(1051),h=n(64),f=n(76),O=n(107),x=n(21),k=n(997),T=n(1054),y=n(214),C=n(228),B=n(11),v=n(37),w=n.p+"static/media/fbtc20.5f91e1ef.svg",D=n(25),S=n(33),I=n(23),F=n(14),W=n(0);const N=Object(u.a)("h3")(a||(a=Object(s.a)(["\n  font-family: PingFangSC-Semibold, sans-serif;\n  font-weight: 550;\n  font-size: 16px;\n  line-height: 22px;\n  color: #000000;\n  margin-bottom: 20px;\n"]))),L=Object(u.a)("div")(i||(i=Object(s.a)(["\n  height: calc(100vh - 200px);\n  overflow-y: scroll;\n  padding-bottom: 30px;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),P=Object(u.a)(O.a)(c||(c=Object(s.a)(["\n  background: rgba(255, 255, 255, 0.4) !important;\n  margin-bottom: 20px;\n  padding: 20px !important;\n"]))),R=Object(u.a)("div")(o||(o=Object(s.a)(["\n  .total {\n    display: flex;\n    justify-content: space-between;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    margin-bottom: 14px;\n\n    span {\n      color: #000000;\n      &:first-of-type {\n        font-family: PingFangSC-Medium, sans-serif;\n        font-weight: 500;\n      }\n      &:last-of-type {\n        font-family: PingFangSC-Regular, sans-serif;\n        font-weight: 400;\n      }\n    }\n  }\n\n  .guarantee,\n  .avatar,\n  .ticker {\n    display: flex;\n    margin-bottom: 16px;\n\n    .icon {\n      margin-right: 8px;\n    }\n\n    .title {\n      font-family: PingFangSC-Regular, sans-serif;\n      font-style: normal;\n      font-weight: 400;\n      font-size: 12px;\n      color: #000 !important;\n    }\n\n    div {\n      line-height: 20px;\n      width: calc(100% - 20px - 8px);\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      span:last-of-type {\n        font-family: PingFangSC-Regular, sans-serif;\n        font-size: 12px;\n        color: rgba(0, 0, 0, 0.5);\n      }\n    }\n  }\n\n  .avatar .avatar_info {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: fit-content;\n    span {\n      font-family: PingFangSC-Regular, sans-serif;\n      font-weight: 400;\n    }\n    svg {\n      cursor: pointer;\n    }\n  }\n\n  .ticker div span {\n    font-size: 14px !important;\n    line-height: 20px;\n    color: #000000 !important;\n  }\n\n  .token_list {\n    background: rgba(0, 0, 0, 0.04);\n    border-radius: 8px;\n    .icon {\n      width: 22px;\n      margin-right: 10px;\n    }\n    .MuiListItem-root {\n      display: flex;\n\n      .currency {\n        width: 100%;\n        //margin-left: 12px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        font-size: 12px;\n        color: rgba(0, 0, 0, 0.5);\n        span {\n          font-family: PingFangSC-Regular, sans-serif;\n          font-weight: 400;\n        }\n      }\n    }\n  }\n\n  .daily {\n    font-family: PingFangSC-Medium, sans-serif;\n    margin-top: 20px;\n    margin-bottom: 5px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    color: #000000;\n    white-space: nowrap;\n  }\n\n  .daily_name span {\n    font-family: PingFangSC-Regular, sans-serif;\n    font-size: 14px;\n    line-height: 20px;\n    color: #000000;\n  }\n\n  .more {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #2aa1ff;\n    cursor: pointer;\n  }\n"])));function A(t){const{pageType:e}=t,n=Object(v.c)((t=>t.collateralManage.currentCPT)),{position:a,balance:i,decimals:c,positionInfoValues:o,address:s}=n,{chainId:l}=Object(D.b)();return Object(W.jsxs)(L,{children:[Object(W.jsxs)(P,{children:[Object(W.jsxs)(N,{children:["Liq"===e?"The Collateral":"My Collateral"," "]}),Object(W.jsxs)(R,{children:[Object(W.jsxs)("div",{className:"total",children:[Object(W.jsx)("span",{children:"Collateral Value"}),Object(W.jsxs)("span",{children:["\u2248"," ",n&&Number(n.avatar)?Object(y.f)(B.a.from(n.positionInfoValues.totalAssetsValues)):0," ","WBTC"]})]}),Object(W.jsxs)("div",{className:"guarantee",children:[Object(W.jsx)(x.k,{className:"icon"}),Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{className:"title",children:"Prepaid Interest "}),Object(W.jsxs)("span",{children:["\u2248"," ",n&&Number(n.avatar)?Object(y.f)(B.a.from(n.positionInfoValues.interestGuaranteed)):0," ","WBTC"]})]})]}),Object(W.jsxs)("div",{className:"avatar",children:[Object(W.jsx)(x.b,{className:"icon"}),Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{className:"title",children:"Collateral"}),Object(W.jsx)(C.a,{className:"avatar_info",toCopy:n?n.position:"",children:Object(W.jsx)("span",{children:n&&Number(n.avatar)?"".concat(n.position.slice(0,3),"..").concat(n.position.slice(5,8)):""})})]})]}),Object(W.jsxs)(k.a,{className:"token_list",children:[Object(W.jsxs)(T.a,{children:[Object(W.jsx)(x.B,{className:"icon"}),Object(W.jsxs)("div",{className:"currency",children:[Object(W.jsx)("span",{className:"symbol",children:"WBTC"}),Object(W.jsx)("span",{className:"balance",children:n&&Number(n.avatar)?Object(y.c)(n.avatarAssetList.WBTC):0})]})]}),Object(W.jsxs)(T.a,{children:[Object(W.jsx)(x.A,{className:"icon"}),Object(W.jsxs)("div",{className:"currency",children:[Object(W.jsx)("span",{className:"symbol",children:"USDT"}),Object(W.jsx)("span",{className:"balance",children:n&&Number(n.avatar)?Object(y.c)(n.avatarAssetList.USDT):0})]})]}),Object(W.jsxs)(T.a,{children:[Object(W.jsx)("img",{src:w,alt:"",className:"icon"}),Object(W.jsxs)("div",{className:"currency",children:[Object(W.jsx)("span",{className:"symbol",children:"F(BTC,20)"}),Object(W.jsx)("span",{className:"balance",children:n&&Number(n.avatar)?Object(y.c)(n.avatarAssetList[S.a.FBTC20]):0})]})]})]}),"Liq"!==e&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h3",{className:"daily",children:"Mark Price"}),Object(W.jsx)("div",{className:"daily_name",children:Object(W.jsxs)("span",{children:["1 F(BTC, 20) \u2248"," ",n&&Number(n.avatar)?Object(y.f)(B.a.from(n.tokensValues[n.token])):0," ","WBTC"," "]})})," ",Object(W.jsxs)(f.b,{to:"/collateral",className:"more",children:[Object(W.jsx)("span",{children:"Add More Collateral"}),"\xa0\xa0",Object(W.jsx)(x.a,{})]})]})]})]}),Object(W.jsxs)(P,{children:[Object(W.jsx)(N,{children:"Liq"===e?"The Outstanding Debt":"My Outstanding Debt"}),Object(W.jsxs)(R,{children:[Object(W.jsxs)("div",{className:"ticker",style:{marginBottom:20},children:[Object(W.jsx)("img",{src:w,alt:"",className:"icon"}),Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{children:null===n||void 0===n?void 0:n.token}),Object(W.jsx)("span",{children:i?Object(y.c)(Object(F.b)(i,c)):0})]})]}),Object(W.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[Object(W.jsx)("h3",{className:"daily",style:{margin:"0"},children:"Daily Paid Rewards Reference"}),Object(W.jsx)("div",{className:"daily_name",children:Object(W.jsxs)("span",{children:[Number(a)?Object(y.f)(o.estimatedDailyDebt):0," WBTC"]})})]}),"Liq"!==e&&Object(W.jsx)("div",{className:"more",children:Object(W.jsxs)("a",{target:"_blank",href:"https://app.uniswap.org/#/swap?&outputCurrency=".concat(s?s[l]:"","&inputCurrency=").concat(I.b.WBTC.address[l]),rel:"noreferrer",children:["Buy More Asset to Neutralize \xa0\xa0",Object(W.jsx)(x.a,{})]})})]})]})]})}var V=n(494),M=n.n(V),z=n(412),U=n(708),G=n(527),E=n.n(G),q=n(217),_=n(413),H=n(454),J=n(68),K=n(108),Q=n(442),X=n(225),Y=n(177);var Z,$,tt,et,nt=n(528),at=n(92),it=function(t){return t[t.a=0]="a",t[t.g=1]="g",t}(it||{});const ct=Object(u.a)(x.c)(Z||(Z=Object(s.a)(["\n  box-shadow: none !important;\n  width: 34px !important;\n  height: 28px !important;\n  padding: 0 !important;\n  background: linear-gradient(90deg, #62c3f7 0%, #7ae9f1 100%) !important;\n  border-radius: 6px !important;\n\n  svg {\n    color: #000;\n    width: 16px;\n  }\n"]))),ot=Object(u.a)("div")($||($=Object(s.a)(["\n  padding-right: 44px;\n  width: 100%;\n  overflow: scroll;\n\n  .left_func {\n    overflow: scroll;\n    height: calc(100vh - 200px);\n    padding-bottom: 100px !important;\n  }\n"]))),st=Object(u.a)("div")(tt||(tt=Object(s.a)(["\n  min-width: 1024px;\n"]))),lt=Object(u.a)(O.a)(et||(et=Object(s.a)([""]))),{liquidation:rt}=J.a;e.default=function(){const{active:t,chainId:e}=Object(D.b)(),{hashPowerTokenList:n,setRefresh:a}=Object(_.a)(),{signer:i,getWBTC:c,helperContract:o}=Object(K.a)(),{changeCPT:s}=Object(X.a)(),u=Object(v.c)((t=>t.collateralManage.currentCPT)),{avatarAssetList:f,positionInfoValues:O,token:k,position:T,balance:C,decimals:B,rewards:w,tokensValues:N}=u,L=Object(nt.a)(t,i),P=function(){const{pairWBTCAndUSDT:t,pairWBTCAndFBTC:e,pairWBTCAndFBTC25:n}=Object(K.a)();return Object(l.useCallback)(((a,i)=>{if(t&&e)if(a.inputToken&&a.outputToken&&("USDT"===a.inputToken.token||"USDT"===a.outputToken.token)){if("USDT"===a.inputToken.token&&"WBTC"===a.outputToken.token)return Object(Y.a)({inputBalance:t.USDT,outputBalance:t.WBTC,inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:a.outputToken.decimals}).output;if("WBTC"===a.inputToken.token)return Object(Y.a)({inputBalance:t.WBTC,outputBalance:t.USDT,inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:a.outputToken.decimals}).output;if("F(BTC,20)"===a.inputToken.token){const n=Object(Y.a)({inputBalance:e[S.a.FBTC20],outputBalance:e.WBTC,inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:I.b.WBTC.decimals});return Object(Y.a)({inputBalance:t.WBTC,outputBalance:t.USDT,inputAmount:n.output,inputDecimals:I.b.WBTC.decimals,outputDecimals:a.outputToken.decimals}).output}if("F(BTC,25)"===a.inputToken.token){const e=Object(Y.a)({inputBalance:n[S.a.FBTC25],outputBalance:n.WBTC,inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:I.b.WBTC.decimals});return Object(Y.a)({inputBalance:t.WBTC,outputBalance:t.USDT,inputAmount:e.output,inputDecimals:I.b.WBTC.decimals,outputDecimals:a.outputToken.decimals}).output}if("F(BTC,20)"===a.outputToken.token){const n=Object(Y.a)({inputBalance:t.USDT,outputBalance:t.WBTC,inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:I.b.WBTC.decimals});return Object(Y.a)({inputBalance:e.WBTC,outputBalance:e[S.a.FBTC20],inputAmount:n.output,inputDecimals:I.b.WBTC.decimals,outputDecimals:a.outputToken.decimals}).output}if("F(BTC,25)"===a.outputToken.token){const e=Object(Y.a)({inputBalance:t.USDT,outputBalance:t.WBTC,inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:I.b.WBTC.decimals});return Object(Y.a)({inputBalance:n.WBTC,outputBalance:n[S.a.FBTC25],inputAmount:e.output,inputDecimals:I.b.WBTC.decimals,outputDecimals:a.outputToken.decimals}).output}}else if(a.inputToken&&a.outputToken&&"USDT"!==a.outputToken.token&&"USDT"!==a.inputToken.token){if("WBTC"===a.inputToken.token)return Object(Y.a)({inputBalance:e.WBTC,outputBalance:e[S.a.FBTC20],inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:a.outputToken.decimals}).output;if(a.inputToken.token===S.a.FBTC20){const t=Object(Y.a)({inputBalance:e[S.a.FBTC20],outputBalance:e.WBTC,inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:a.outputToken.decimals});return a.outputToken.token===S.a.FBTC25?Object(Y.a)({inputBalance:n.WBTC,outputBalance:n[S.a.FBTC25],inputAmount:t.output,inputDecimals:I.b.WBTC.decimals,outputDecimals:a.outputToken.decimals}).output:t.output}if(a.inputToken.token===S.a.FBTC25){const t=Object(Y.a)({inputBalance:n[S.a.FBTC25],outputBalance:n.WBTC,inputAmount:i,inputDecimals:a.inputToken.decimals,outputDecimals:a.outputToken.decimals});return a.outputToken.token===S.a.FBTC20?Object(Y.a)({inputBalance:e.WBTC,outputBalance:e[S.a.FBTC20],inputAmount:t.output,inputDecimals:I.b.WBTC.decimals,outputDecimals:a.outputToken.decimals}).output:t.output}}return 0}),[e,n,t])}(),{toastSuccess:R,toastError:V,toastWarning:G}=Object(at.a)(),[J,Z]=Object(l.useState)([]),[$,tt]=Object(l.useState)([]),[et,ut]=Object(l.useState)([]),[pt,dt]=Object(l.useState)(0),[bt,jt]=Object(l.useState)({m1:0,m2:0,m3:0,m4:0}),[mt,gt]=Object(l.useState)({nowGDays:0,nowCRate:"0%"}),[ht,ft]=r.a.useState("2"),Ot=t=>{ft(t.target.value)},xt=Object(l.useCallback)((t=>{if(O&&t){let e=0,n=0,a=0;t.forEach((t=>{e+=1*Object(y.g)(c({amount:t.output,symbol:t.outputToken.token,decimals:t.outputToken.decimals}),"WBTC"),e-=1*Object(y.g)(c({amount:t.input,symbol:t.inputToken.token,decimals:t.inputToken.decimals}),"WBTC"),t.type===it.g&&(n-=t.input)})),bt.m3&&(n+=bt.m3),bt.m4>0&&(a-=bt.m4);const i=1*O.totalAssetsValues+(0===e?0:Object(y.i)(1*Object(y.g)(e,"WBTC"))),o=O.interestGuaranteed-n,s=()=>0===Number(i)||0===Number(O.shortBalanceValue)?0:(i/(N[k]*(Object(y.a)(C,B)+a))*100).toFixed(2),l=()=>o-O.totalObligation===0||0===Number(O.estimatedDailyDebt)?0:Math.floor((o-O.totalObligation)/O.estimatedDailyDebt);gt((t=>({...t,outstandingDebt:Object(y.a)(C,B)+a,futureCRate:Object(y.b)(s()).toString().includes("\u221e")?Object(y.b)(s()):"".concat(Object(y.b)(s()),"%"),futureGDays:l(),dailyObligationReference:Object(y.f)((Object(y.a)(C,B)+a)*w/10)})))}}),[O,bt.m3,bt.m4,c,N,k,C,B,w]),kt=Object(l.useCallback)((t=>{if(n){const e=n.filter((e=>e.token===t))[0];s(e)}}),[n,s]),Tt=Object(l.useCallback)((()=>{Z((t=>{const e=[...t];if(pt===it.a){const t=[...$],n=t.findIndex((t=>"WBTC"===t.token)),a=t.splice(n,1);t.unshift(...a);const i=t[0].rightOptionList.findIndex((t=>t.token===k));t[0].rightOptionList.unshift(...t[0].rightOptionList.splice(i,1)),e.push({id:E()(),type:it.a,input:0,inputToken:t[0],outputToken:t[0].rightOptionList[0]})}if(pt===it.g){const t=[...$],n=t.findIndex((t=>"WBTC"===t.token)),a=t.splice(n,1);t.unshift(...a);const i=t[0].rightOptionList.findIndex((t=>"WBTC"===t.token));t[0].rightOptionList.unshift(...t[0].rightOptionList.splice(i,1)),e.push({id:E()(),type:it.g,input:0,inputToken:t[0],outputToken:t[0].rightOptionList[0]})}return e}))}),[pt,k,$]),yt=Object(l.useCallback)(((t,e)=>{Z((n=>{const a=n.map((n=>({...n,input:n.id===e.id?t.target.value:n.input,output:n.id===e.id?n.inputToken.token===e.outputToken.token?t.target.value:Object(y.g)(P(e,t.target.value),e.outputToken.token):n.output})));return xt(a),a}))}),[xt,P]),Ct=Object(l.useCallback)(((t,e,n)=>{Z((a=>a.map((a=>{if(a.id===e){const e={...a,[n]:t};return e.inputToken.token===t.token?e.output=e.input:e.output=Object(y.g)(P(e,e.input),e.outputToken.token),"inputToken"===n&&(e.output=0,e.input=0),e}return a}))))}),[P]),Bt=Object(l.useCallback)(((t,e)=>{Z((n=>{const a=n.map(((n,a)=>({...n,input:a===e?t.type===it.g&&O?Object(y.f)(O.interestGuaranteed):t.inputToken.allBalance:n.input,output:n.id===t.id?t.type===it.g&&O?Object(y.f)(O.interestGuaranteed):Object(y.g)(P(n,t.inputToken.allBalance),t.outputToken.token):n.output})));return xt(a),a}))}),[xt,P,O]),vt=Object(l.useCallback)(((t,e,n)=>{e>0?("m1"===n&&O&&jt((t=>({...t,[n]:Object(y.f)(O.interestGuaranteed)}))),"m3"===n&&jt((t=>({...t,[n]:f.WBTC}))),"m4"!==n&&"m2"!==n||jt((t=>({...t,[n]:f[k]})))):jt((e=>({...e,[n]:t.target.value})))}),[f,O,k]),wt=Object(l.useCallback)((async()=>{const t=new h.utils.Interface(rt.abi);if(L){if((await o.healthCheck(T,C,15e3,60)).includes(!1)){const i=J.map((n=>{const a=Object(y.e)(Math.floor(n.input*Object(F.c)("1",n.inputToken.decimals))),i=[],c=[];if(n.type===it.a){"USDT"!==n.inputToken.token&&"USDT"!==n.outputToken.token||"F(BTC,20)"!==n.inputToken.token&&"F(BTC,20)"!==n.outputToken.token?(c.push(n.inputToken.address[e]),c.push(n.outputToken.address[e])):(c.push(n.inputToken.address[e]),c.push(I.b.WBTC.address[e]),c.push(n.outputToken.address[e]));const o=t.encodeFunctionData("swapExactTokensForTokens",[a,"0",c,"999999999999999"]);i.push(rt.address[e],o)}return n.type===it.g&&i.push(rt.address[e],t.encodeFunctionData("moveGuaranteeBack",[a])),i})),c=[];if("1"===ht&&bt.m3){const n=t.encodeFunctionData("addGuarantee",[Math.floor(Object(y.i)(bt.m3))]);c.push([rt.address[e],n])}if("2"===ht&&bt.m4){const n=t.encodeFunctionData("neutralizetBalance",[Math.floor(Object(y.h)(bt.m4))]);c.push([rt.address[e],n])}const o=t.encodeFunctionData("liquidation",[ht,[...i,...c]]);try{const t=await L.delegateCall(rt.address[e],o);if(t){await t.wait()&&(a((t=>!t)),R("Success"))}}catch(n){V("Failed",null===n||void 0===n?void 0:n.message.substr(0,null===n||void 0===n?void 0:n.message.indexOf("(")))}}else G("Warning","Liquidation conditions not met")}}),[L,o,T,C,J,bt.m3,bt.m4,ht,e,a,R,V,G]),Dt=Object(l.useMemo)((()=>{const t=new RegExp("%","g");console.log(mt.futureCRate);return(mt.futureCRate?mt.futureCRate.toString().replace(t,""):mt.futureCRate)<110||mt.futureGDays<10}),[mt]),St=Object(l.useCallback)((t=>{const{value:e}=t.target;dt(Number(e))}),[]);return Object(l.useEffect)((()=>{if(t&&f){const t=[];for(const n in I.b)if(n){const e=I.b[n],a={token:n,address:e.address,allBalance:Object(y.e)(f[n]),balance:Object(y.g)(f[n],n),icon:e.icon,decimals:e.decimals,rightOptionList:[]};for(const t in I.b)t&&a.rightOptionList.push({token:t,address:I.b[t].address,icon:I.b[t].icon,allBalance:Object(y.e)(f[t]),balance:Object(y.g)(f[t],t),decimals:I.b[t].decimals});t.push(a)}tt(t);let e=0;if(t){e=P({inputToken:t[0],outputToken:t[0].rightOptionList[0]});const n=t.findIndex((t=>"WBTC"===t.token)),a=t.splice(n,1);t.unshift(...a);const i=t[0].rightOptionList.findIndex((t=>t.token===k));t[0].rightOptionList.unshift(...t[0].rightOptionList.splice(i,1)),Z((()=>[{id:E()(),type:it.a,input:0,output:0,inputToken:t[0],outputToken:t[0].rightOptionList[0],oracleHub:e}]))}}}),[t,f,P,k]),Object(l.useEffect)((()=>{if(u&&Object.keys(u).length){const t=[{...u,rightOptionList:[u]}];ut(t)}}),[u]),Object(l.useEffect)((()=>{xt(J)}),[J,bt.m4,bt.m3,xt]),Object(W.jsx)(ot,{children:Object(W.jsxs)(st,{children:[Object(W.jsx)(z.l,{children:"Liquidation"}),Object(W.jsx)(q.a,{selectDisabled:!0,isGroup:!1,options:n||[],selectValue:u?u.token:"",onChange:kt}),Object(W.jsxs)(p.a,{container:!0,spacing:2,style:{marginTop:14},children:[Object(W.jsx)(p.a,{className:"left_func",style:{paddingTop:0},item:!0,xs:8,children:Object(W.jsxs)(lt,{children:[Object(W.jsx)(U.a,{onDragEnd:t=>((t,e,n)=>{if(!t.destination)return;const{source:a,destination:i}=t;if(a.droppableId!==i.droppableId){const t=e[a.droppableId],c=e[i.droppableId],o=[...t.items],s=[...c.items],[l]=o.splice(a.index,1);s.splice(i.index,0,l),n([...c,s])}else{const t=[...e],[c]=t.splice(a.index,1);t.splice(i.index,0,c),n(t)}})(t,J,Z),children:Object(W.jsx)(U.c,{droppableId:"droppableId",children:t=>Object(W.jsxs)("div",{...t.droppableProps,ref:t.innerRef,children:[J.map(((t,e)=>Object(W.jsx)(U.b,{draggableId:t.id,index:e,children:n=>Object(W.jsxs)("div",{ref:n.innerRef,...n.draggableProps,...n.dragHandleProps,style:{display:"flex",alignItems:"center",userSelect:"none",margin:"0 0 8px 0",...n.draggableProps.style,position:"static"},children:[Object(W.jsxs)("div",{style:{width:"100%",position:"relative"},children:[Object(W.jsx)(H.a,{SelectIcon:()=>Object(W.jsx)("span",{children:t.type===it.a?"Collateral":"Prepaid Interest "}),leftInputValue:t.input,rightInputValue:t.output,options:$,rightOptions:t.inputToken.rightOptionList,leftSelectValue:t.inputToken.token,rightSelectValue:t.outputToken.token,leftBalance:t.type===it.g&&O?Object(y.f)(O.interestGuaranteed):t.inputToken.balance||t.inputToken.allBalance,rightBalance:t.outputToken.balance||t.outputToken.allBalance,selectedBalance:100,leftDisableStatus:[t.type===it.g,!1],RightIcon:()=>Object(W.jsx)("span",{children:"Collateral"}),rightDisableStatus:[t.type===it.g,!0],selectInput:e=>{yt(e,t)},leftChange:e=>{Ct(e,t.id,"inputToken")},rightChange:e=>{Ct(e,t.id,"outputToken")},onMax:()=>{Bt(t,e)},leftSymbol:t.inputToken.token,rightSymbol:t.outputToken.token}),Object(W.jsxs)("p",{style:{position:"absolute",bottom:0,right:0,color:"rgba(0, 0, 0, 0.5)",fontSize:12},children:["1",t.inputToken.token," \u2248"," ",t.inputToken.token===t.outputToken.token?1:Object(y.e)(P(t,1)),t.outputToken.token]})]}),Object(W.jsx)(d.a,{onClick:()=>{const t=[...J];t.splice(e,1),Z(t)},style:{cursor:"pointer",marginTop:8,marginLeft:10,padding:0},children:Object(W.jsx)(x.f,{})}),Object(W.jsx)(d.a,{style:{marginTop:8,marginLeft:8,padding:0},children:Object(W.jsx)(x.g,{style:{fill:"none"}})})]})},t.id))),t.placeholder]})})}),Object(W.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:10,marginBottom:40},children:[Object(W.jsx)(ct,{onClick:Tt,children:Object(W.jsx)(M.a,{})}),Object(W.jsx)(b.a,{style:{marginLeft:10},children:Object(W.jsxs)(j.a,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:pt,onChange:St,children:[Object(W.jsx)(m.a,{value:0,control:Object(W.jsx)(g.a,{}),label:Object(W.jsxs)("p",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(W.jsx)("span",{children:"Collateral"}),Object(W.jsx)("span",{style:{margin:"0 10px"},children:"->"}),Object(W.jsx)("span",{children:"Collateral"})]})}),Object(W.jsx)(m.a,{value:1,control:Object(W.jsx)(g.a,{}),label:Object(W.jsxs)("p",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(W.jsx)("span",{children:"Prepaid Interest "}),Object(W.jsx)("span",{style:{margin:"0 10px"},children:"->"}),Object(W.jsx)("span",{children:"Collateral"})]})})]})})]}),Object(W.jsxs)("div",{style:{display:"flex",alignItems:"center",paddingRight:28,width:"100%"},children:[Object(W.jsx)("div",{style:{width:"100%"},children:Object(W.jsx)(H.a,{SelectIcon:()=>Object(W.jsx)("span",{children:"Collateral"}),options:I.c,rightBalance:O?Object(y.f)(O.guaranteeValues):0,rightOptions:I.c,leftBalance:f?Object(y.c)(f.WBTC):0,RightIcon:()=>Object(W.jsx)("span",{children:"Prepaid Interest "}),leftInputValue:bt.m3,rightInputValue:bt.m3,selectInput:t=>{vt(t,0,"m3")},onMax:()=>{vt({},1,"m3")}})}),Object(W.jsx)(g.a,{checked:"1"===ht,onChange:Ot,value:"1",name:"radio-buttons",style:{cursor:"pointer",marginTop:8,marginLeft:10,padding:0},inputProps:{"aria-label":"1"}})]}),Object(W.jsxs)("div",{style:{display:"flex",alignItems:"center",paddingRight:28,width:"100%"},children:[Object(W.jsx)("div",{style:{width:"100%"},children:Object(W.jsx)(H.a,{SelectIcon:()=>Object(W.jsx)("span",{children:"Collateral"}),options:et,rightOptions:et,leftBalance:f?f[k]:0,RightIcon:Object(z.n)(z.j,[Object(W.jsx)("span",{style:{color:"#f40"},children:"Neutralize"})]),leftSelectValue:k,leftSymbol:k,rightSelectValue:k,leftInputValue:bt.m4,rightInputValue:bt.m4,rightNumberIsShow:!1,selectInput:t=>{vt(t,0,"m4")},onMax:()=>{vt({},1,"m4")}})}),Object(W.jsx)(g.a,{checked:"2"===ht,onChange:Ot,value:"2",style:{cursor:"pointer",marginTop:8,marginLeft:10,padding:0},name:"radio-buttons",inputProps:{"aria-label":"2"}})]}),Object(W.jsx)(Q.a,{data:[["OutStanding Debt",Object(y.c)(Object(y.a)(C,B)),Object(y.c)(mt.outstandingDebt)],["Daily Obligation Reference",O?Object(y.c)(Object(y.f)(O.estimatedDailyDebt)):0,mt.dailyObligationReference],["Collateral Ratio",O&&Object(y.b)(O.cRate).toString().includes("\u221e")?Object(y.b)(O.cRate):"".concat(Object(y.b)(O.cRate),"%")||!1,mt.futureCRate],["Prepaid Interest Coverage","".concat(O?Object(y.b)(O.gDays):0," days"),"".concat(mt.futureGDays," days")]]}),Object(W.jsxs)(z.k,{children:[Object(W.jsx)(z.h,{style:{background:"#FF7D00",color:"#fff"},children:"!"}),Object(W.jsx)("p",{children:"The collateral ratio should lower than 200% and the Prepaid Interest Coverage should lower than 100 days after the liquidation."})]}),Object(W.jsx)(z.e,{disabled:Dt,onClick:wt,children:"Submit"})]})}),Object(W.jsx)(p.a,{item:!0,style:{paddingTop:0,marginBottom:40,paddingBottom:50},xs:4,children:Object(W.jsx)(A,{pageType:"Liq"})})]})]})})}},412:function(t,e,n){"use strict";n.d(e,"m",(function(){return w})),n.d(e,"l",(function(){return D})),n.d(e,"a",(function(){return S})),n.d(e,"c",(function(){return I})),n.d(e,"b",(function(){return F})),n.d(e,"e",(function(){return W})),n.d(e,"h",(function(){return N})),n.d(e,"k",(function(){return L})),n.d(e,"j",(function(){return P})),n.d(e,"g",(function(){return R})),n.d(e,"n",(function(){return A})),n.d(e,"d",(function(){return V})),n.d(e,"f",(function(){return M})),n.d(e,"i",(function(){return z}));var a,i,c,o,s,l,r,u,p,d,b,j,m,g,h=n(8),f=(n(1),n(46)),O=n(1056),x=n(1064),k=n(1065),T=n(107),y=n(433),C=n.n(y),B=n(21),v=n(0);const w=Object(f.a)(T.a)(a||(a=Object(h.a)(["\n  margin-bottom: 20px;\n  padding-bottom: 0 !important;\n"]))),D=Object(f.a)("h3")(i||(i=Object(h.a)(["\n  font-family: PingFangSC-Semibold, sans-serif;\n  font-style: normal;\n  font-weight: 550;\n  font-size: 22px;\n  line-height: 31px;\n  color: #000000;\n  margin-bottom: 10px;\n"]))),S=Object(f.a)((t=>Object(v.jsx)(O.a,{disableGutters:!0,elevation:0,square:!0,...t})))((()=>({borderBottom:".2px solid #a5a5a5",background:"unset",boxShadow:"none","&:last-child":{borderBottom:0},"&:before":{display:"none"},".MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(45deg)"}}))),I=Object(f.a)((t=>Object(v.jsx)(x.a,{expandIcon:Object(v.jsx)(C.a,{style:{color:"#2AA1FF"}}),...t})))((()=>({padding:0,"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(45deg)"},"& .MuiAccordionSummary-content":{margin:"20px 0",p:{color:"#000",fontSize:"1rem",fontFamily:"PingFangSC-Semibold, sans-serif",fontWeight:600,lineHeight:"22px"}}}))),F=Object(f.a)(k.a)((()=>({padding:"0 0 30px 0",transition:".3s"}))),W=(Object(f.a)("div")(c||(c=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Object(f.a)(B.c)(o||(o=Object(h.a)(["\n  display: block !important;\n  background: linear-gradient(90deg, #61c2f7 0%, #7ae9f0 100%);\n  border-radius: 20px !important;\n  color: #000;\n  width: 30% !important;\n  margin: 0 auto !important;\n  box-shadow: none !important;\n"])))),N=(Object(f.a)(B.c)(s||(s=Object(h.a)(["\n  display: block !important;\n  background: linear-gradient(90deg, #61c2f7 0%, #7ae9f0 100%);\n  border-radius: 20px !important;\n  color: #000;\n  //width: 30% !important;\n  margin: 0 auto !important;\n  box-shadow: none !important;\n"]))),Object(f.a)("div")(l||(l=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n\n  div {\n    display: flex;\n    margin-bottom: 10px;\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.5);\n\n    p + p {\n      margin-left: 20px;\n    }\n  }\n\n  .days {\n    margin: 0;\n  }\n"]))),Object(f.a)("div")(r||(r=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% / 2 - 25px);\n\n  p {\n    height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 15px;\n    box-sizing: border-box;\n\n    span {\n      font-size: 12px;\n      line-height: 17px;\n      color: rgba(0, 0, 0, 0.5);\n    }\n  }\n"]))),Object(f.a)("strong")(u||(u=Object(h.a)(["\n  font-family: PingFangSC-Regular, sans-serif;\n  font-weight: 400;\n  display: block;\n  width: 16px;\n  height: 16px;\n  font-size: 12px;\n  background: #c4c4c4;\n  line-height: 16px;\n  text-align: center;\n  border-radius: 50%;\n  flex: none;\n"])))),L=Object(f.a)("div")(p||(p=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  line-height: 20px;\n  color: rgba(0, 0, 0, 0.5);\n  background: #f1f1f1;\n  border-radius: 8px;\n  padding: 14px 80px 13px 21px;\n  margin-bottom: 20px;\n\n  strong {\n    margin-right: 16px;\n  }\n  * {\n    font-family: PingFangSC-Regular, sans-serif;\n  }\n"]))),P=Object(f.a)("span")(d||(d=Object(h.a)(["\n  font-family: PingFangSC-Regular, sans-serif;\n  font-size: 12px;\n  line-height: 17px;\n  color: rgba(0, 0, 0, 0.5);\n"]))),R=Object(f.a)("div")(b||(b=Object(h.a)(["\n  display: flex;\n"]))),A=(t,e)=>function(n){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(t,{...n,children:e})})},V=Object(f.a)(B.c)(j||(j=Object(h.a)(["\n  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043) !important;\n  border-radius: 14px !important;\n  background: linear-gradient(270deg, #7ae9f1 0%, #61c3f7 100%) !important;\n  border-radius: 14px !important;\n  font-size: 14px !important;\n  height: 32px !important;\n  line-height: 32px !important;\n  color: #000 !important;\n  font-weight: normal !important;\n"]))),M=Object(f.a)("h1")(m||(m=Object(h.a)(["\n  font-family: 'Heebo Medium';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 32px;\n  line-height: 47px;\n  margin-bottom: 14px;\n  color: #000000;\n"]))),z=Object(f.a)("div")(g||(g=Object(h.a)(["\n  height: calc(100vh - 189px);\n  padding-bottom: 100px;\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])))},413:function(t,e,n){"use strict";var a=n(1),i=n(142);e.a=()=>{const t=Object(a.useContext)(i.a);if(void 0===t)throw new Error("hashPowerToken context undefined");return t}},442:function(t,e,n){"use strict";var a,i=n(8),c=(n(1),n(46)),o=n(0);const s=Object(c.a)("div")(a||(a=Object(i.a)(["\n  background: #def1ff;\n  border-radius: 14px;\n  padding: 13px 22px;\n  margin: 20px 0;\n\n  table {\n    width: 100%;\n  }\n\n  td {\n    font-family: PingFangSC-Regular, sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    padding: 5px 0;\n  }\n\n  .label {\n    text-align: left;\n    width: 30%;\n  }\n\n  .from,\n  .to {\n    width: 35%;\n    line-height: 17px;\n    text-align: right;\n  }\n\n  .to {\n    font-family: PingFangSC-Medium, sans-serif;\n    font-weight: 500;\n    color: #000;\n  }\n\n  .borderTop {\n    border-top: 0.5px solid rgba(0, 0, 0, 0.12);\n  }\n"])));e.a=function(t){const{data:e}=t;return Object(o.jsx)(s,{children:Object(o.jsx)("table",{children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"from",colSpan:2,children:"From"}),Object(o.jsx)("td",{className:"to",children:"To"})]}),e.map((t=>Object(o.jsxs)("tr",{className:t[3]?"borderTop":"",children:[Object(o.jsx)("td",{className:"label",children:t[0]}),Object(o.jsx)("td",{className:"from",children:t[1]}),Object(o.jsx)("td",{className:"to",children:t[2]})]},t[0])))]})})})}},454:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var a,i,c,o=n(8),s=n(1),l=n(46),r=n(14),u=n(217),p=n(21),d=n(412),b=n(0);const j=Object(l.a)("div")(a||(a=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: static !important;\n"]))),m=Object(l.a)("div")(i||(i=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% / 2 - 25px);\n\n  p {\n    height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 15px;\n    box-sizing: border-box;\n\n    span {\n      font-size: 12px;\n      line-height: 17px;\n      color: rgba(0, 0, 0, 0.5);\n    }\n  }\n\n  .maxBtn {\n    height: 21px;\n    align-items: flex-end;\n  }\n"])));Object(l.a)("strong")(c||(c=Object(o.a)(["\n  display: block;\n  width: 20px;\n  height: 20px;\n  background: #c4c4c4;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n"])));function g(t){const{options:e,leftBalance:n,isExchange:a,onExchange:i,onMax:c,selectInput:o,rightSelectInput:l,SelectIcon:g,RightIcon:h,leftInputValue:f,rightInputValue:O,rightBalance:x,rightDisableStatus:k,leftChange:T,rightChange:y,leftDisableStatus:C=[!1,!1],leftSelectValue:B,rightSelectValue:v,rightOptions:w,leftSymbol:D,rightSymbol:S,rightNumberIsShow:I=!0,leftDesc:F,rightDesc:W}=t,[N,L]=Object(s.useState)(e&&e.length?e[0]:{}),[P,R]=Object(s.useState)(e&&e.length?e[0].rightOptionList:[]),[A,V]=Object(s.useState)(P?P[0]:{});Object(s.useEffect)((()=>{e&&e.length&&B&&v&&(L(e.filter((t=>t.token===B))[0]||e[0]),R(e[0].rightOptionList),V(e[0].rightOptionList.filter((t=>t.token===v))[0]||e[0].rightOptionList[0]))}),[B,e,v]);const M=Object(s.useMemo)((()=>{const t=x||A&&A.balance||0,e=n||N.balance||0;return{right:{orignalBalance:t,balance:r.a.formatFourDecimals(t),symbol:S||(A&&Object.keys(A)?A.token:"WBTC")},left:{orignalBalance:e,balance:r.a.formatFourDecimals(e),symbol:D||N.token||"WBTC"}}}),[N,n,D,x,S,A]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(j,{children:[Object(b.jsxs)(m,{children:[Object(b.jsxs)("p",{title:"".concat(M.left.symbol," Balance: ").concat(M.left.orignalBalance),children:[Object(b.jsx)(g,{}),Object(b.jsxs)("span",{className:"balance",children:[M.left.balance," ",M.left.symbol]})]}),Object(b.jsx)(u.a,{selectValue:B||N.token,allDisabled:!C||C[0]&&C[1],inputDisabled:!C||C[1],selectDisabled:!C||C[0],onChange:t=>{const n=e.filter((e=>e.token===t))[0];R(n.rightOptionList),V(n.rightOptionList[0]),L(n),T&&T(n)},selectInput:o,actionValue:f,options:e,groupStyle:{width:"100%"},isGroup:!0},1),Object(b.jsxs)(d.g,{style:{justifyContent:"space-between",alignItems:"center"},children:[F&&F,Object(b.jsx)("p",{dir:"rtl",style:{width:"100%"},className:"maxBtn",children:Object(b.jsx)("span",{onClick:()=>{c&&c(N)},onKeyUp:()=>null,tabIndex:0,role:"button",style:{cursor:"pointer",color:"#6ED6F3",fontSize:"0.75rem",userSelect:"none"},children:"Max"})})]})]}),a?Object(b.jsx)(p.h,{onClick:i,style:{fill:"none",cursor:"pointer",width:22,marginTop:8}}):Object(b.jsx)(p.s,{style:{fill:"none",width:22,marginTop:8}}),Object(b.jsxs)(m,{children:[Object(b.jsxs)("p",{title:I?"".concat(M.right.symbol," Balance: ").concat(M.right.orignalBalance):"",children:[Object(b.jsx)(h,{}),I?Object(b.jsxs)("span",{className:"balance",children:[M.right.balance," ",M.right.symbol]}):null]}),Object(b.jsx)(u.a,{selectValue:v||(A?A.token:"WBTC"),options:w||P,actionValue:O,groupStyle:{width:"100%"},isGroup:!0,allDisabled:!k||k[0]&&k[1],inputDisabled:!k||k[1],selectDisabled:!k||k[0],selectInput:l,onChange:t=>{if(N){const e=N.rightOptionList.filter((e=>e.token===t))[0];y&&y(e),V(e)}else{const n=e[0].filter((e=>e.token===t))[0];y&&y(n),V(n)}}},2),Object(b.jsxs)(d.g,{style:{justifyContent:"space-between",alignItems:"center"},children:[W&&W,Object(b.jsx)("p",{dir:"rtl",style:{width:"100%"},className:"maxBtn"})]})]})]})})}},528:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(1),i=n(12),c=n(109),o=n(37);function s(t,e){const[n,s]=Object(a.useState)(null),l=Object(o.c)((t=>t.collateralManage.currentCPT));return Object(a.useEffect)((()=>{if(t&&e&&l&&Number(l.position)){const t=Object(i.b)(e,c,l.position);s(t)}}),[t,l,e]),n}}}]);
//# sourceMappingURL=20.c367b0aa.chunk.js.map