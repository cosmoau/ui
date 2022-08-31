import e,{useLayoutEffect as t,useEffect as o,useRef as i,useCallback as n,useState as r}from"react";import a from"next/image";import{createStitches as l,createTheme as d}from"@stitches/react";import{Circle as c,Warning as s,Check as m,ClipboardText as g,Eye as p,EyeClosed as h}from"phosphor-react";import{useRouter as u}from"next/router";import b,{useToaster as f}from"react-hot-toast";export{default as toast}from"react-hot-toast";function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},$.apply(this,arguments)}const v={desktop:"@media only screen and (max-width: 1980px)",desktopX:"@media only screen and (min-width: 1541px) and (max-width: 1980px)",laptop:"@media only screen and (max-width: 1540px)",laptopX:"@media only screen and (min-width: 961px) and (max-width: 1540px)",phone:"@media only screen and (max-width: 780px)",tablet:"@media only screen and (max-width: 960px)",tabletX:"@media only screen and (min-width: 781px) and (max-width: 960px)",wide:"@media only screen and (min-width: 1981px)"},{theme:w,css:y,styled:x,getCssText:k,globalCss:E,keyframes:S}=l({theme:{colors:{accent:"rgb(170, 177, 201)",background:"rgb(26, 30, 43)",inverted:"rgb(18, 24, 38)",blueBorder:"rgba(115, 172, 255, 0.4)",blueCTA:"rgb(55, 119, 192)",blueOverlay:"rgba(151, 193, 255, 0.2)",blueText:"rgb(166, 179, 255)",border:"rgba(165, 170, 200, 0.2)",borderHover:"rgba(255, 255, 255, 0.1)",default:"rgba(255, 255, 255, 0.05)",defaultHover:"rgba(255, 255, 255, 0.075)",greenBorder:"rgba(0, 200, 83, 0.4)",greenOverlay:"rgba(101, 227, 124, 0.2)",greenText:"rgb(124, 241, 151)",orangeBorder:"rgba(255, 172, 115, 0.4)",orangeOverlay:"rgba(255, 172, 115, 0.2)",orangeText:"rgb(254, 177, 141)",pinkBorder:"rgba(255, 115, 172, 0.4)",pinkOverlay:"rgba(255, 115, 172, 0.2)",pinkText:"rgb(255, 142, 221)",purpleBorder:"rgba(172, 115, 255, 0.4)",purpleOverlay:"rgba(172, 115, 255, 0.2)",purpleText:"rgb(210, 142, 255)",redBorder:"rgba(255, 115, 115, 0.4)",redOverlay:"rgba(255, 115, 115, 0.2)",redText:"rgb(251, 127, 143)",text:"rgb(255, 255, 255)"},fontSizes:{h1:"3.2rem",h2:"2.8rem",h3:"2.2rem",h4:"1.9rem",h5:"1.7rem",h6:"1.5rem",p:"1.4rem",small:"1.3rem"},fontWeights:{h1:"bold",h2:"bold",h3:"bold",h4:"bold",h5:"normal",h6:"normal",p:"normal",small:"normal"},fonts:{default:"Untitled Sans, apple-system, sans-serif"},lineHeights:{h1:"1.3",h2:"1.3",h3:"1.3",h4:"1.35",h5:"1.4",h6:"1.4",p:"1.45",small:"1.45"},media:v,radii:{1:"0.66rem",2:"0.88rem",3:"1.33rem"},shadows:{1:0,2:0,3:0},space:{1:"0.3rem",2:"0.5rem",3:"0.75rem",4:"1.25rem",5:"2.25rem",6:"4.5rem",7:"7.5rem",8:"9.5rem"},transitions:{default:"all 0.2s ease-in-out"},zIndices:{dialog:100,dropdown:125,popover:150,toast:1e3}},utils:{desktop:e=>({[v.desktop]:e}),desktopX:e=>({[v.desktopX]:e}),hidden:e=>({[v[e]]:{display:"none !important"}}),hiddenInline:e=>({display:"inline-block !important",[v[e]]:{display:"none !important"}}),laptop:e=>({[v.laptop]:e}),laptopX:e=>({[v.laptopX]:e}),phone:e=>({[v.phone]:e}),tablet:e=>({[v.tablet]:e}),tabletX:e=>({[v.tabletX]:e}),visible:e=>({display:"none",[v[e]]:{display:"block"}}),visibleInline:e=>({display:"none",[v[e]]:{display:"inline-block"}}),wide:e=>({[v.wide]:e})}}),T=d({colors:{accent:"rgb(63, 67, 81)",background:"rgb(255, 255, 255)",blueText:"rgb(32, 47, 136)",border:"rgba(184, 187, 203, 0.4)",borderHover:"rgba(184, 187, 203, 0.2)",default:"rgba(0, 0, 0, 0.0475)",defaultHover:"rgba(0, 0, 0, 0.0825)",greenText:"rgb(0, 76, 6)",orangeText:"rgb(199, 84, 30)",pinkText:"rgb(173, 22, 128)",purpleText:"rgb(112, 23, 171)",redText:"rgb(170, 28, 47)",text:"rgb(18, 24, 38)"},shadows:{1:"0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.01)",2:"0 0.3rem 0.4rem 0 rgba(0, 0, 0, 0.05)",3:"0 0.3rem 0.4rem 0.2rem rgba(0, 0, 0, 0.05)"}}),C=S({"0%":{opacity:0},"100%":{opacity:1}}),z=S({"0%":{opacity:1},"100%":{opacity:0}}),B=x("div",{height:"100%",position:"relative",transition:"$default",variants:{borderRadius:{1:{borderRadius:"$1",img:{borderRadius:"$1"}},2:{borderRadius:"$2",img:{borderRadius:"$2"}},3:{borderRadius:"$2",img:{borderRadius:"$2"}}},hover:{false:{"&:hover":{opacity:1}},true:{"&:hover":{opacity:.7}}}},width:"100%"}),R=["borderRadius","css","hover","fillHeight"];function L(t){const{borderRadius:o,css:i,hover:n,fillHeight:r}=t,l=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(o=r[i])>=0||(n[o]=e[o]);return n}(t,R);/*#__PURE__*/return e.createElement(B,{borderRadius:o,css:$({height:r||"100%"},i),hover:n},/*#__PURE__*/e.createElement(a,l))}const W=L,H=x("div",{alignItems:"center",borderRadius:"100%",display:"inline-flex",justifyContent:"center",overflow:"hidden",position:"relative",userSelect:"none"}),A=x("div",{borderRadius:"inherit",height:"100%",position:"relative",width:"100%"}),O=x("div",{alignItems:"center",background:"$default",color:"$text",display:"flex",height:"100%",justifyContent:"center",lineHeight:1,textAlign:"center",width:"100%"});function X(t){/*#__PURE__*/return e.createElement(H,{css:$({height:t.width||20,width:t.width||20},t.css),id:t.id},t.image?/*#__PURE__*/e.createElement(A,null,/*#__PURE__*/e.createElement(L,{alt:t.fallback,layout:"fill",objectFit:"cover",objectPosition:"center center",src:t.image})):/*#__PURE__*/e.createElement(O,null,t.fallback))}function F({stroke:t=w.colors.text.toString(),width:o=16}){/*#__PURE__*/return e.createElement("svg",{height:o,stroke:t,viewBox:"0 0 38 38",width:o,xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/e.createElement("g",{fill:"none",fillRule:"nonzero"},/*#__PURE__*/e.createElement("g",{strokeWidth:"2",transform:"translate(1 1)"},/*#__PURE__*/e.createElement("circle",{cx:"18",cy:"18",r:"18",strokeOpacity:".2"}),/*#__PURE__*/e.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},/*#__PURE__*/e.createElement("animateTransform",{attributeName:"transform",begin:"0s",dur:"0.8s",from:"0 18 18",repeatCount:"indefinite",to:"360 18 18",type:"rotate"})))))}const M=S({"0%":{opacity:.5,transform:"scale(0.95)"},"100%":{opacity:.5,transform:"scale(0.95)"},"50%":{opacity:1,transform:"scale(1)"}}),I=x("div",{alignItems:"center",borderRadius:"$3",display:"inline-flex",fontSize:"$h6",fontWeight:"normal",justifyContent:"center",lineHeight:"normal",padding:"$1 $4",svg:{alignSelf:"center",height:"1.6rem",marginTop:"-0.4rem",width:"1.6rem"},variants:{theme:{blue:{background:"$blueOverlay",color:"$blueText"},border:{border:"0.1rem solid $border",color:"$text"},borderHover:{border:"0.1rem solid $borderHover",color:"$text"},default:{background:"$default",color:"$text"},green:{background:"$greenOverlay",color:"$greenText"},orange:{background:"$orangeOverlay",color:"$orangeText"},pink:{background:"$pinkOverlay",color:"$pinkText"},purple:{background:"$purpleOverlay",color:"$purpleText"},red:{background:"$redOverlay",color:"$redText"}}},[v.phone]:{fontSize:"calc($h6 * 0.9)"},verticalAlign:"middle"}),P=x("span",{display:"inline",variants:{align:{left:{marginRight:"$3"},right:{marginLeft:"$3"}}},verticalAlign:"middle"}),j=x("span",{display:"inline",paddingRight:"$2",svg:{height:"1rem",width:"1rem",marginTop:"-0.2rem",verticalAlign:"middle"},variants:{dotColor:{blue:{color:"$blueText"},borderHover:{color:"$borderHover"},default:{color:"$text"},green:{color:"$greenText"},orange:{color:"$orangeText"},pink:{color:"$pinkText"},purple:{color:"$purpleText"},red:{color:"$redText"}},pulse:{true:{animation:`${M} 1.5s infinite`}}},verticalAlign:"middle"});function D(t){/*#__PURE__*/return e.createElement(I,{css:$({},t.css,t.inline&&{display:"inline-flex",marginBottom:"0 !important",marginRight:"auto"===t.inline?"auto":`$${t.inline}`,[v.phone]:{marginRight:"auto"===t.inline?"auto":`calc($${t.inline} * 0.8)`},verticalAlign:"middle"}),id:t.id,onClick:t.onClick,theme:t.theme||"default"},t.icon&&("left"===t.iconPosition||!t.iconPosition)&&/*#__PURE__*/e.createElement(P,{align:"left"},t.icon),t.dot&&/*#__PURE__*/e.createElement(j,{dotColor:t.dotColor||"default",pulse:"pulse"===t.dot},/*#__PURE__*/e.createElement(c,{weight:"fill"})),t.loading?/*#__PURE__*/e.createElement(F,null):t.children,t.icon&&"right"===t.iconPosition&&/*#__PURE__*/e.createElement(P,{align:"right"},t.icon))}const N={padding:{default:{padding:"$5"},none:{padding:0}}},Y=x("div",{border:"0.1rem solid transparent",borderRadius:"$1",display:"block",height:"100%",margin:0,paddingBlock:0,position:"relative",transition:"$default",variants:$({hover:{true:{"&:hover":{boxShadow:"$2"}}},loading:{true:{cursor:"wait"}},theme:{border:{background:"transparent",borderColor:"$border"},default:{background:"$default"},error:{background:"$redOverlay",color:"$redText"},success:{background:"$greenOverlay",color:"$greenText"},transparent:{background:"transparent",borderColor:"transparent"},warning:{background:"$orangeOverlay",color:"$orangeText"}}},N),width:"auto"}),_=x("div",{variants:$({},N)});function q(t){return null!=t&&t.image?/*#__PURE__*/e.createElement(Y,{css:t.css,hover:t.hover,id:t.id,loading:t.loading||!1,padding:"none",theme:t.theme||"default"},t.imageCTA?/*#__PURE__*/e.createElement("a",{href:t.imageCTA,rel:"noopener noreferrer",target:t.imageTarget||"_blank"},/*#__PURE__*/e.createElement(W,{alt:t.imageAlt||"#",css:{img:{borderTopLeftRadius:"$1 !important",borderTopRightRadius:"$1 !important"}},fillHeight:t.imageHeight||"20rem",hover:t.hover,layout:"fill",objectFit:"cover",objectPosition:t.imagePosition||"center",src:t.image.toString()})):/*#__PURE__*/e.createElement(W,{alt:t.imageAlt||"#",css:{img:{borderTopLeftRadius:"$1 !important",borderTopRightRadius:"$1 !important"}},fillHeight:t.imageHeight||"20rem",hover:t.hover,layout:"fill",objectFit:"cover",objectPosition:t.imagePosition||"center",src:t.image.toString()}),/*#__PURE__*/e.createElement(_,{padding:"default"},t.children)):/*#__PURE__*/e.createElement(Y,{css:t.css,hover:t.hover,id:t.id,loading:t.loading||!1,padding:"default",theme:t.theme||"default"},t.children)}const J=x("button",{"&:disabled":{cursor:"not-allowed",opacity:.5},"&:hover":{backgroundColor:"$defaultHover",color:"$text"},alignContent:"center",alignItems:"center",border:"0.1rem solid transparent",borderRadius:"$2",fontSize:"1.5rem",fontWeight:400,lineHeight:1.5,padding:"$1 $4",boxShadow:"$1",svg:{alignSelf:"center",height:"1.8rem",marginTop:"-0.4rem",width:"1.8rem"},[v.phone]:{fontSize:"1.45rem"},a:{display:"block"},transition:"$default",variants:{block:{false:{display:"inline"},true:{display:"block",width:"100%"}},small:{true:{fontSize:"1.3rem",lineHeight:1.2}},theme:{border:{borderColor:"$border",boxShadow:"$1",color:"$text"},default:{background:"$default",color:"$text"},minimal:{background:"transparent",boxShadow:"none",color:"$text"},solid:{background:"$text",color:"$background"}}},verticalAlign:"middle"}),V=x("span",{display:"inline",variants:{align:{left:{marginRight:"$3"},right:{marginLeft:"$3"}}},verticalAlign:"middle"});function U(t){/*#__PURE__*/return e.createElement(J,{"aria-label":t.ariaLabel,name:t.name,block:t.block||!1,css:$({},t.css,t.inline&&{alignSelf:"center",marginRight:"auto"===t.inline?"auto":`$${t.inline}`,verticalAlign:"middle",[v.phone]:{marginRight:"auto"===t.inline?"auto":`calc($${t.inline} * 0.8)`}}),disabled:t.disabled||t.loading||!1,id:t.id,onClick:t.onClick,small:t.small,theme:t.theme||"default"},t.loading&&/*#__PURE__*/e.createElement(V,{align:"left"},/*#__PURE__*/e.createElement(F,null)),t.icon&&("left"===t.iconPosition||!t.iconPosition)&&/*#__PURE__*/e.createElement(V,{align:"left"},t.icon),t.children,t.icon&&"right"===t.iconPosition&&/*#__PURE__*/e.createElement(V,{align:"right"},t.icon))}const G="undefined"!=typeof window?t:o;function K(e,t,n,r){const a=i(t);G(()=>{a.current=t},[t]),o(()=>{const t=n?.current||window;if(!t||!t.addEventListener)return;const o=e=>a.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o)}},[e,n,r])}function Q(e){const t=function(e){const t=e=>"undefined"!=typeof window&&window.matchMedia(e).matches,[i,n]=r(t(e));function a(){n(t(e))}return o(()=>{const t=window.matchMedia(e);return a(),t.addListener?t.addListener(a):t.addEventListener("change",a),()=>{t.removeListener?t.removeListener(a):t.removeEventListener("change",a)}},[e]),i}("(prefers-color-scheme: dark)"),[a,l]=function(e,t){const a=n(()=>{if("undefined"==typeof window)return t;try{const o=window.localStorage.getItem(e);return o?function(e){try{return"undefined"===e?void 0:JSON.parse(e??"")}catch{return void console.log("parsing error on",{value:e})}}(o):t}catch(o){return console.warn(`Error reading localStorage key “${e}”:`,o),t}},[t,e]),[l,d]=r(a),c=function(e){const t=i(()=>{throw new Error("Cannot call an event handler while rendering.")});return G(()=>{t.current=e},[e]),n((...e)=>t.current(...e),[t])}(t=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const o=t instanceof Function?t(l):t;window.localStorage.setItem(e,JSON.stringify(o)),d(o),window.dispatchEvent(new Event("local-storage"))}catch(t){console.warn(`Error setting localStorage key “${e}”:`,t)}});o(()=>{d(a())},[]);const s=n(t=>{t?.key&&t.key!==e||d(a())},[e,a]);return K("storage",s),K("local-storage",s),[l,c]}("usehooks-ts-dark-mode",e??t??!1);return function(e,n){const r=function(){const e=i(!0);return e.current?(e.current=!1,!0):e.current}();o(()=>{r||l(t)},n)}(0,[t]),{isDarkMode:a,toggle:()=>l(e=>!e),enable:()=>l(!0),disable:()=>l(!1)}}function Z(e=!1){const[t,i]=r(e);return G(()=>{if(!t)return;const e=document.body.style.overflow,o=document.body.style.paddingRight;document.body.style.overflow="hidden";const i=document.getElementById("___gatsby"),n=i?i.offsetWidth-i.scrollWidth:0;return n&&(document.body.style.paddingRight=`${n}px`),()=>{document.body.style.overflow=e,n&&(document.body.style.paddingRight=o)}},[t]),o(()=>{t!==e&&i(e)},[e]),[t,i]}function ee(e,t,o="mousedown"){K(o,o=>{const i=e?.current;i&&!i.contains(o.target)&&t(o)})}const te=x("div",{display:"inline-block",position:"relative",verticalAlign:"middle"}),oe=x("div",{"*":{cursor:"pointer"},display:"inline-flex",position:"relative",verticalAlign:"middle"}),ie=x("div",{background:"rgba(0,0,0,0.75)",bottom:0,left:0,overflowY:"scroll",position:"fixed",right:0,top:0,transition:"$default",variants:{animation:{false:{animation:`${z} .3s ease-in-out`,animationFillMode:"forwards"},true:{animation:`${C} .1s ease-in-out`,animationFillMode:"forwards"}}},width:"100%",zIndex:"$dialog"}),ne=x("div",{background:"$background",borderRadius:"$2",left:"50%",maxHeight:"80vh",overflowY:"auto",padding:"$6 $5",position:"fixed",textAlign:"left",top:"50%",transform:"translate(-50%, -50%)",transition:"$default",variants:{animation:{false:{animation:`${z} .4s ease-in-out`,animationFillMode:"forwards"},true:{animation:`${C} .4s ease-in-out`,animationFillMode:"forwards"}}},width:"70rem",[v.phone]:{maxHeight:"95vh",maxWidth:"90%",padding:"5",width:"90%"}}),re=x("div",{"&:hover":{opacity:1},cursor:"pointer",opacity:.7,padding:"1rem",position:"absolute",right:0,top:0,transition:"$default"});function ae(t){const o=i(null),[n,a]=r(!1),[l,d]=r(!1);function c(){a(!1),setTimeout(()=>{d(!1)},250)}return ee(o,()=>c()),K("keydown",e=>{"Escape"===e.key&&c()}),Z(!!t.locked&&n),/*#__PURE__*/e.createElement(te,{id:t.id},/*#__PURE__*/e.createElement(oe,{onClickCapture:function(){n||l?(a(!1),d(!1)):(a(!0),setTimeout(()=>{d(!0)},25))}},t.trigger),l&&/*#__PURE__*/e.createElement(ie,{animation:n},/*#__PURE__*/e.createElement(ne,{animation:n,css:t.css,ref:o},/*#__PURE__*/e.createElement(re,{onClick:()=>c()},/*#__PURE__*/e.createElement(U,{small:!0,theme:"minimal",ariaLabel:"Close",name:"close"},"Close")),t.children)))}const le=x("div",{height:"0.1rem",margin:"0 auto",maxWidth:"100%",width:"100%"});function de(t){/*#__PURE__*/return e.createElement(le,{css:$({},t.css,{backgroundColor:t.theme?`$${t.theme}`:"$border"},t.top&&{marginTop:`$${t.top}`,[v.phone]:{marginTop:"8"!==t.top?`calc($${t.top} * 0.9)`:`calc($${t.top} * 0.8)`}},t.bottom&&{[v.phone]:{marginBottom:"8"!==t.bottom?`calc($${t.bottom} * 0.9)`:`calc($${t.bottom} * 0.8)`},marginBottom:`$${t.bottom}`},t.top&&{marginTop:`$${t.top}`,[v.phone]:{marginTop:`calc($${t.top} * 0.9)`}},t.bottom&&{marginBottom:`$${t.bottom}`,[v.phone]:{marginBottom:`calc($${t.bottom} * 0.9)`}}),id:t.id})}const ce=x("div",{display:"inline-block",position:"relative",verticalAlign:"middle"}),se=x("div",{"*":{cursor:"pointer"},display:"inline-flex",position:"relative",verticalAlign:"middle"}),me=x("div",{background:"$background",border:"0.1rem solid $border",borderRadius:"$1",boxShadow:"$3",lineBreak:"auto",marginTop:"5%",overflowY:"auto",padding:"calc($2 / 1.5)",position:"absolute",textAlign:"left !important",transition:"$default",variants:{animation:{false:{animation:`${z} .2s`,animationFillMode:"forwards"},true:{animation:`${C} .2s`,animationFillMode:"forwards"}}},width:"100%",zIndex:"$dropdown"}),ge=x("div",{"&.active":{"&:hover":{backgroundColor:"$defaultHover"}},"&:hover":{background:"$default",borderBottomColor:"transparent",borderRadius:"$1"},"&:last-child":{borderBottom:0},borderRadius:0,cursor:"pointer",display:"flex",fontSize:"$h6",lineHeight:"normal",transition:"$default",variants:{submenu:{false:{padding:"$2 $3"},true:{a:{display:"block",padding:"$3",width:"100%"},padding:0}}}});function pe(t){const o=i(null),n=u(),a=(null==n?void 0:n.pathname)||"/",[l,d]=r(!1),[c,s]=r(!1);function m(){d(!1),setTimeout(()=>{s(!1)},250)}return ee(o,()=>m()),K("keydown",e=>{"Escape"===e.key&&m()}),Z(!!t.locked&&l),/*#__PURE__*/e.createElement(ce,{css:t.css,id:t.id},/*#__PURE__*/e.createElement(se,{key:t.active||Math.random(),onClickCapture:function(){l||c?(d(!1),s(!1)):(d(!0),setTimeout(()=>{s(!0)},25))}},t.trigger),c&&/*#__PURE__*/e.createElement(me,{animation:l,css:{left:"left"===t.align?"0":"auto",maxWidth:t.width||"15rem",minWidth:"15rem",right:"right"===t.align?"0":"auto"},ref:o},t.options.map(({label:o,value:i})=>t.submenu?/*#__PURE__*/e.createElement(ge,{css:{opacity:a===i?.44:1},key:i,submenu:!0},/*#__PURE__*/e.createElement("a",{onClickCapture:()=>(e=>{n.push(e),m()})(i)},o)):/*#__PURE__*/e.createElement(ge,{css:{opacity:t.active&&t.active===i?.44:1},key:i,onClickCapture:()=>{((e,o)=>{t.actions(e,o),m()})(i,o)},submenu:!1},o))))}const he=x("div",{"&:focus-within":{boxShadow:"$2"},"&:hover":{boxShadow:"$2"},"*":{verticalAlign:"middle"},alignContent:"center",alignSelf:"center",borderRadius:"$1",display:"inline-flex",justifyContent:"center",padding:"$2 $4",position:"relative",transition:"$default",variants:{disabled:{true:{cursor:"not-allowed",opacity:"0.5"}},state:{default:{border:"0.1rem solid $border"},error:{border:"0.1rem solid $redOverlay"},success:{border:"0.1rem solid $greenOverlay"},warning:{border:"0.1rem solid $orangeOverlay"}}},width:"100%"}),ue=x("input",{"&:focus":{outline:"none"},appearance:"none",backgroundColor:"transparent",border:"none",color:"$text",fontFamily:"$default !important",fontSize:"16px !important",letterSpacing:"0",lineHeight:"normal",margin:"0",minHeight:"2.4rem",outline:"none",padding:"0",textAlign:"left",transition:"$default",width:"100%"}),be=x("div",{button:{fontSize:"$p",marginLeft:"$2"},display:"inline-flex",height:"100%",marginLeft:"$3",position:"relative",verticalAlign:"middle",width:"auto"});function fe(t){const[o,i]=r(t.value||""),[n,a]=r(!1),[l,d]=r(!1);/*#__PURE__*/return e.createElement(he,{css:{maxWidth:t.maxWidth||"80%",width:t.maxWidth||"80%"},disabled:t.disabled,id:t.id,state:t.success?"success":t.warning?"warning":t.error?"error":"default"},/*#__PURE__*/e.createElement(ue,{css:t.css,ref:t.mustRef||void 0,disabled:t.disabled,onChange:function(e){i(e.target.value),t.onChange&&t.onChange(e)},placeholder:t.placeholder,type:l?"text":t.type||"text",value:o}),(t.error||t.success||t.warning||t.loading||t.submit||t.copy||t.reveal)&&/*#__PURE__*/e.createElement(be,null,t.error&&/*#__PURE__*/e.createElement(D,{icon:/*#__PURE__*/e.createElement(s,{weight:"duotone"}),theme:"red",css:{paddingTop:"0.5rem",paddingBottom:"0.5rem",marginLeft:"$2"}},t.errorMessage||"Error"),t.success&&/*#__PURE__*/e.createElement(D,{icon:/*#__PURE__*/e.createElement(m,{weight:"duotone"}),theme:"green",css:{paddingTop:"0.5rem",paddingBottom:"0.5rem",marginLeft:"$2"}},t.successMessage||"Success"),t.warning&&/*#__PURE__*/e.createElement(D,{icon:/*#__PURE__*/e.createElement(s,{weight:"duotone"}),theme:"orange",css:{paddingTop:"0.5rem",paddingBottom:"0.5rem",marginLeft:"$2"}},t.warningMessage||"Warning"),t.loading&&/*#__PURE__*/e.createElement(F,null),t.copy&&/*#__PURE__*/e.createElement(U,{ariaLabel:"Copy",name:"copy",icon:/*#__PURE__*/e.createElement(g,n?{opacity:.4,weight:"duotone"}:{weight:"duotone"}),onClick:function(){t.copy&&(navigator.clipboard.writeText(o),a(!0),setTimeout(()=>{a(!1)},3e3))},css:{paddingTop:"0.3rem !important",paddingBottom:"0.3rem !important",lineHeight:"1",marginLeft:"$2"}},"Copy"),t.reveal&&/*#__PURE__*/e.createElement(U,{ariaLabel:"Reveal",name:"reveal",icon:/*#__PURE__*/e.createElement(l?h:p,{weight:"duotone"}),onClick:function(){d(!l)},css:{paddingTop:"0.3rem !important",paddingBottom:"0.3rem !important",lineHeight:"1",marginLeft:"$2"}},l?"Hide":"Show"),t.submit&&t.submitFunction&&/*#__PURE__*/e.createElement(U,{ariaLabel:"Submit",name:"submit",disabled:!t.submitValid,onClick:()=>t.submitFunction(o),css:{paddingTop:"0.3rem !important",paddingBottom:"0.3rem !important",lineHeight:"1",marginLeft:"$2"}},t.submit)))}const $e=x("div",{display:"inline-block",position:"relative",verticalAlign:"middle"}),ve=x("div",{"*":{cursor:"pointer"},display:"inline-flex",position:"relative",verticalAlign:"middle"}),we=x("div",{background:"$background",border:"0.1rem solid $border",borderRadius:"$1",boxShadow:"$3",lineBreak:"auto",marginTop:".75%",overflowY:"auto",padding:"$1 $4",position:"absolute",transition:"$default",variants:{animation:{false:{animation:`${z} .15s`,animationFillMode:"forwards"},true:{animation:`${C} .15s`,animationFillMode:"forwards"}},minimal:{true:{padding:0}}},zIndex:"$popover"});function ye(t){const o=i(null),[n,a]=r(!1),[l,d]=r(!1);function c(){a(!1),setTimeout(()=>{d(!1)},250)}function s(){a(!0),setTimeout(()=>{d(!0)},25)}return ee(o,"hover"!==t.trigger&&c),/*#__PURE__*/e.createElement($e,{id:t.id},/*#__PURE__*/e.createElement(ve,{onClickCapture:function(){n||l?(a(!1),d(!1)):"click"!==t.type&&t.type||s()},onMouseEnter:function(){n||l?(a(!1),d(!1)):"hover"===t.type&&s()},onMouseLeave:function(){"hover"===t.type&&c()}},t.trigger),l&&/*#__PURE__*/e.createElement(we,{animation:n,css:$({},t.css,{width:t.width||"auto"}),minimal:t.minimal,ref:o},t.children))}const xe=x("div",{background:"$background",border:"0.1rem solid $border",borderRadius:"$1",boxShadow:"$3",cursor:"pointer",fontSize:"$h6",height:"auto",lineHeight:"$h6",marginTop:"$3",overflow:"hidden",padding:"$1 $3",position:"relative",transition:"$default",variants:{animation:{false:{animation:`${z} .3s`,animationFillMode:"forwards"},true:{animation:`${C} .4s`,animationFillMode:"forwards"}},theme:{default:{background:"$background"},error:{borderColor:"$orangeBorder",color:"$orangeText"},success:{borderColor:"$greenBorder",color:"$greenText"}}}}),ke=x("div",{bottom:"$3",position:"fixed",right:"$3",zIndex:"$toast"});function Ee(t){const{toasts:o,handlers:i}=f(),{startPause:n,endPause:r}=i;return K("keydown",e=>{"Escape"===e.key&&b.dismiss()}),/*#__PURE__*/e.createElement(ke,$({onMouseEnter:n,onMouseLeave:r},t),o.map(t=>{var o;return t.duration=5e3,/*#__PURE__*/e.createElement(xe,{animation:t.visible,key:t.id,onClick:()=>b.dismiss(t.id),theme:"success"===t.type?"success":"error"===t.type?"error":"default"},t.message&&t.message.toString().length>50?`${t.message.toString().substring(0,50)}...`:null==(o=t.message)?void 0:o.toString())}))}const Se=x("div",{background:"$background",color:"$text",minHeight:"100vh",position:"relative"}),Te=x("div",{"*":{cursor:"pointer"},display:"inline-flex",position:"relative",verticalAlign:"middle"}),Ce=E({"@import":'url("https://xxxjddzdqkdtyqtywwfi.supabase.co/storage/v1/object/public/public/webfont.css")',"*":{MozOsxFontSmoothing:"grayscale",WebkitAppearance:"none",WebkitFontSmoothing:"antialiased",boxSizing:"inherit",letterSpacing:"normal",marginBlockEnd:0,marginBlockStart:0,marginInlineEnd:0,marginInlineStart:0,outline:"none",paddingBlockEnd:0,paddingBlockStart:0,paddingInlineEnd:0,paddingInlineStart:0,wordSpacing:"normal"},"*:after":{boxSizing:"inherit"},"*:before":{boxSizing:"inherit"},a:{color:"inherit",textDecoration:"none"},body:{backgroundColor:"inherit",border:0,color:"$text",fontFamily:"$default, sans-serif",fontSize:"1.6rem",margin:0,overflowX:"hidden",overflowY:"auto",padding:0,[`.${w}`]:{background:"$background",color:"$text"},[`.${T}`]:{background:"$background",color:"$text"}},button:{"&::-moz-focus-inner":{border:0,outline:0,outlineOffset:0,padding:0},"&:active":{outline:0},"&:focus":{outline:0},MozOsxFontSmoothing:"grayscale",WebkitAppearance:"none",WebkitFontSmoothing:"antialiased",appearance:"none",background:"transparent",border:0,cursor:"pointer",font:"$default",fontFamily:"inherit",margin:0,outline:"none",overflow:"visible",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"auto"},html:{MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",fontSize:"62.5%",lineHeight:"1.5",textRendering:"optimizeLegibility"},svg:{verticalAlign:"middle"}});function ze(t){const{isDarkMode:o}=Q("dark"===t.default);return Ce(),/*#__PURE__*/e.createElement(Se,{className:t.locked?"dark"===t.locked?w:T:o?w:T,css:t.css},/*#__PURE__*/e.createElement(Ee,null),t.children)}const Be=ze;function Re(t){const{isDarkMode:o,toggle:i}=Q(!1);/*#__PURE__*/return e.createElement(Te,{css:t.css,onClick:i},o&&t.triggerActive||t.trigger)}const Le=x("div",{"*":{boxSizing:"border-box"},display:"flex",flexDirection:"row",flexFlow:"row wrap",maxWidth:"100%",minWidth:"100%",width:"100%"}),We=x("div",{flex:"1 1 auto",maxWidth:"100%",paddingLeft:"$4",paddingRight:"$4",width:"100%",[v.tablet]:{paddingLeft:"$3",paddingRight:"$3"}}),He=x("div",{marginBlockEnd:0,marginBlockStart:0,variants:{flexduo:{true:{"*":{alignSelf:"center",marginBottom:"0 !important",marginTop:"0 !important",verticalAlign:"middle"},alignItems:"center",display:"flex",justifyContent:"space-between",verticalAlign:"middle"}}}});function Ae(t){return"row"===t.direction?/*#__PURE__*/e.createElement(Le,{css:$({},t.css,{"*":{alignItems:t.flex||"initial"},alignItems:t.flex||"initial"},t.top&&{paddingTop:`$${t.top}`,[v.phone]:{paddingTop:`calc($${t.top} * 0.9)`}},t.bottom&&{paddingBottom:`$${t.bottom}`,[v.phone]:{paddingBottom:`calc($${t.bottom} * 0.9)`}}),id:t.id},t.children):"column"===t.direction?/*#__PURE__*/e.createElement(We,{css:$({},t.top&&{paddingTop:`$${t.top}`,[v.phone]:{paddingTop:"8"!==t.top?`calc($${t.top} * 0.9)`:`calc($${t.top} * 0.8)`}},t.bottom&&{[v.phone]:{paddingBottom:"8"!==t.bottom?`calc($${t.bottom} * 0.9)`:`calc($${t.bottom} * 0.8)`},paddingBottom:`$${t.bottom}`},t.minimal&&{paddingLeft:"0!important",paddingRight:"0!important"},{textAlign:t.align,[v.phone]:{flex:t.widthPhone?`0 0 ${t.widthPhone}%`:"0 0 100%",marginLeft:t.offsetPhone?`${t.offsetPhone}%`:0,width:t.widthPhone?`${t.widthPhone}%`:"100%"},[v.tabletX]:{flex:t.widthTablet?`0 0 ${t.widthTablet}%`:`0 0 ${t.width}%`,marginLeft:t.offsetTablet?`${t.offsetTablet}%`:`${t.offset}%`,width:t.widthTablet?`${t.widthTablet}%`:`${t.width}%`},[v.laptopX]:{flex:t.widthLaptop?`0 0 ${t.widthLaptop}%`:`0 0 ${t.width}%`,marginLeft:t.offsetLaptop?`${t.offsetLaptop}%`:`${t.offset}%`,width:t.widthLaptop?`${t.widthLaptop}%`:`${t.width}%`},[v.desktopX]:{flex:t.widthDesktop?`0 0 ${t.widthDesktop}%`:`0 0 ${t.width}%`,marginLeft:t.offsetDesktop?`${t.offsetDesktop}%`:`${t.offset}%`,width:t.widthDesktop?`${t.widthDesktop}%`:`${t.width}%`},[v.wide]:{flex:t.widthWide?`0 0 ${t.widthWide}%`:`0 0 ${t.width}%`,marginLeft:t.offsetWide?`${t.offsetWide}%`:`${t.offset}%`,width:t.widthWide?`${t.widthWide}%`:`${t.width}%`}},t.css),id:t.id},t.children):/*#__PURE__*/e.createElement(He,{css:t.css,id:t.id,flexduo:!0},t.children)}const Oe=Ae,Xe=x("table",{"*":{alignContent:"center",verticalAlign:"middle"},borderRadius:"$1",borderSpacing:0,display:"inline-table",fontSize:"1.5rem",overflowX:"auto",[v.phone]:{display:"flex-table",minWidth:"100%",paddingBottom:"$3"},width:"100%"}),Fe=x("thead",{borderBottom:"0.1rem solid $border",textAlign:"left",width:"100%"}),Me=x("tbody",{width:"100%"}),Ie=x("tr",{"&:last-child":{td:{borderBottom:"0 !important"}},borderRadius:"$2",transition:"$default"}),Pe=x("td",{"&:last-child":{textAlign:"right"},borderBottom:"0.1rem solid $border",fontSize:"$h6",padding:"$3 0",whiteSpace:"nowrap"}),je=x("th",{"&:last-child":{textAlign:"right"},borderBottom:"0.1rem solid $border",fontSize:"$h6",fontWeight:"bold",padding:"$3 0"}),De=t=>/*#__PURE__*/e.createElement(Xe,t),Ne=t=>/*#__PURE__*/e.createElement(Fe,t),Ye=t=>/*#__PURE__*/e.createElement(Me,t),_e=t=>/*#__PURE__*/e.createElement(Ie,t),qe=t=>/*#__PURE__*/e.createElement(Pe,t),Je=t=>/*#__PURE__*/e.createElement(je,t),Ve=x("div",{"&:last-child":{marginBottom:"0!important"},color:"inherit",display:"block",variants:{accent:{true:{color:"$accent"}},bold:{true:{fontWeight:"bold !important"}},size:{h1:{"&:not(:last-child)":{marginBottom:"$5"},fontSize:"$h1",fontWeight:"$h1",lineHeight:"$h1",[v.phone]:{fontSize:"calc($h1 * 0.9)"},[v.tabletX]:{fontSize:"calc($h1 * 0.9)"},[v.laptopX]:{fontSize:"calc($h1 * 0.95)"}},h2:{"&:not(:last-child)":{marginBottom:"$5"},fontSize:"$h2",fontWeight:"$h2",lineHeight:"$h2",[v.phone]:{fontSize:"calc($h2 * 0.9)"},[v.tabletX]:{fontSize:"calc($h2 * 0.9)"},[v.laptopX]:{fontSize:"calc($h2 * 0.95)"}},h3:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h3",fontWeight:"$h3",lineHeight:"$h3",[v.phone]:{fontSize:"calc($h3 * 0.9)"},[v.tabletX]:{fontSize:"calc($h3 * 0.9)"},[v.laptopX]:{fontSize:"calc($h3 * 0.95)"}},h4:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h4",fontWeight:"$h4",lineHeight:"$h4",[v.phone]:{fontSize:"calc($h4 * 0.8)"},[v.tabletX]:{fontSize:"calc($h4 * 0.85)"},[v.laptopX]:{fontSize:"calc($h4 * 0.9)"}},h5:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h5",fontWeight:"$h5",lineHeight:"$h5",[v.phone]:{fontSize:"calc($h5 * 0.85)"},[v.tabletX]:{fontSize:"calc($h5 * 0.9)"},[v.laptopX]:{fontSize:"calc($h5 * 0.95)"}},h6:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h6",fontWeight:"$h6",lineHeight:"$h6",[v.phone]:{fontSize:"calc($h6 * 0.85)"},[v.tabletX]:{fontSize:"calc($h6 * 0.9)"},[v.laptopX]:{fontSize:"calc($h6 * 0.95)"},opacity:"0.85"},p:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$p",fontWeight:"$p",lineHeight:"$p",opacity:"0.85",[v.phone]:{fontSize:"calc($p * 0.85)"},[v.tabletX]:{fontSize:"calc($p * 0.9)"},[v.laptopX]:{fontSize:"calc($p * 0.95)"}},small:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$small",fontWeight:"$small",lineHeight:"$small",[v.phone]:{fontSize:"calc($small * 0.85)"},[v.tabletX]:{fontSize:"calc($small * 0.9)"},[v.laptopX]:{fontSize:"calc($small * 0.95)"}},span:{fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit"}}}});function Ue(t){/*#__PURE__*/return e.createElement(Ve,{accent:t.accent,as:t.as,bold:t.bold,css:$({},t.css,t.top&&{paddingTop:`$${t.top}`,[v.phone]:{paddingTop:"8"!==t.top?`calc($${t.top} * 0.9)`:`calc($${t.top} * 0.8)`}},t.bottom&&{[v.phone]:{paddingBottom:"8"!==t.bottom?`calc($${t.bottom} * 0.9)`:`calc($${t.bottom} * 0.8)`},paddingBottom:`$${t.bottom}`},t.inline&&{alignSelf:"center",display:"inline-flex",marginBottom:"0 !important",marginRight:"auto"===t.inline?"auto":`$${t.inline}`,verticalAlign:"middle",[v.phone]:{marginRight:"auto"===t.inline?"auto":`calc($${t.inline} * 0.8)`}},t.link&&{borderBottom:"borderHover"===t.link?"0.1rem solid $borderHover":"0.1rem solid $border",transition:"$default","&:hover":{opacity:.6}}),size:t.as},t.children)}const Ge=x("div",{boxSizing:"border-box",paddingLeft:"$2",paddingRight:"$2",position:"relative",width:"100%"}),Ke=x("div",{position:"relative",variants:{container:{false:{minWidth:"100%"},true:{margin:"auto",[v.phone]:{width:"97%"},[v.tabletX]:{width:"98%"},[v.laptopX]:{maxWidth:"1440px",width:"95%"},[v.desktopX]:{maxWidth:"1660px",width:"96%"},[v.wide]:{maxWidth:"1950px",width:"94%"}}}}});function Qe(t){/*#__PURE__*/return e.createElement(Ge,{className:t.inverted?w.toString():void 0,css:$({},t.css,{background:t.inverted?"$inverted !important":"$background"},t.top&&{paddingTop:`$${t.top}`,[v.phone]:{paddingTop:"8"!==t.top?`calc($${t.top} * 0.9)`:`calc($${t.top} * 0.8)`}},t.bottom&&{[v.phone]:{paddingBottom:"8"!==t.bottom?`calc($${t.bottom} * 0.9)`:`calc($${t.bottom} * 0.8)`},paddingBottom:`$${t.bottom}`}),id:t.id},/*#__PURE__*/e.createElement(Ke,{container:t.container},t.children))}const Ze=x("div",{alignContent:"center",alignSelf:"center",borderRadius:"$1",height:"100%",position:"relative",transition:"$default",width:"100%"}),et=x("div",{}),tt=x("pre",{fontFamily:"monospace",lineBreak:"auto",margin:"$2 0",maxWidth:"80%",overflow:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word"});function ot(t){const[o,i]=r(!1);/*#__PURE__*/return e.createElement(Ze,{css:t.css},/*#__PURE__*/e.createElement(et,null,t.copy&&/*#__PURE__*/e.createElement(U,{ariaLabel:"Copy",name:"copy",icon:/*#__PURE__*/e.createElement(g,o?{opacity:.4,weight:"duotone"}:{weight:"duotone"}),onClick:function(){t.copy&&(navigator.clipboard.writeText(t.children.toString()),i(!0),setTimeout(()=>{i(!1)},3e3))}},"Copy")),/*#__PURE__*/e.createElement(tt,null,t.children))}const it=x("div",{"&:focus-within":{boxShadow:"$2"},"&:hover":{boxShadow:"$2"},"*":{verticalAlign:"middle"},alignContent:"center",alignSelf:"center",borderRadius:"$1",justifyContent:"center",position:"relative",transition:"$default",variants:{disabled:{true:{cursor:"not-allowed",opacity:"0.5"}},state:{default:{border:"0.1rem solid $border"},error:{border:"0.2rem solid $redOverlay"},success:{border:"0.2rem solid $greenOverlay"},warning:{border:"0.2rem solid $orangeOverlay"}}},width:"100%"}),nt=x("textarea",{"&:after":{clear:"both",content:'""'},"&:focus":{outline:"none"},appearance:"none",backgroundColor:"transparent",border:"none",color:"$text",display:"block",fontFamily:"$default !important",fontSize:"16px !important",margin:"0 auto",padding:"$3 $4",width:"100%"}),rt=x("div",{borderBottom:"0.1rem solid $border",button:{fontSize:"$p",marginLeft:"$2",paddingBottom:"$1",paddingLeft:"$3",paddingRight:"$3",paddingTop:"$1"},height:"100%",padding:"$2 $4",position:"relative",svg:{height:"1.8rem",marginTop:"-0.1rem",verticalAlign:"middle",width:"1.8rem"},verticalAlign:"middle",width:"100%"});function at(t){const[o,i]=r(t.value||""),[n,a]=r(!1);/*#__PURE__*/return e.createElement(it,{css:{maxWidth:t.maxWidth||"80%",width:t.maxWidth||"80%"},disabled:t.disabled,id:t.id,state:t.success?"success":t.warning?"warning":t.error?"error":"default"},(t.error||t.success||t.warning||t.loading||t.submit||t.copy||t.reveal)&&/*#__PURE__*/e.createElement(rt,null,t.error&&/*#__PURE__*/e.createElement(D,{icon:/*#__PURE__*/e.createElement(s,{weight:"duotone"}),theme:"red"},t.errorMessage||"Error"),t.success&&/*#__PURE__*/e.createElement(D,{icon:/*#__PURE__*/e.createElement(m,{weight:"duotone"}),theme:"green"},t.successMessage||"Success"),t.warning&&/*#__PURE__*/e.createElement(D,{icon:/*#__PURE__*/e.createElement(s,{weight:"duotone"}),theme:"orange"},t.warningMessage||"Warning"),t.loading&&/*#__PURE__*/e.createElement(D,null,/*#__PURE__*/e.createElement(F,null)),t.copy&&/*#__PURE__*/e.createElement(U,{ariaLabel:"Copy",name:"copy",icon:/*#__PURE__*/e.createElement(g,n?{opacity:.4,weight:"duotone"}:{weight:"duotone"}),onClick:function(){t.copy&&(navigator.clipboard.writeText(o),a(!0),setTimeout(()=>{a(!1)},3e3))}},"Copy"),t.submit&&t.submitFunction&&/*#__PURE__*/e.createElement(U,{ariaLabel:"Submit",name:"submit",disabled:!t.submitValid,onClick:()=>t.submitFunction(o)},t.submit)),/*#__PURE__*/e.createElement(nt,{cols:t.cols,css:t.css,disabled:t.disabled,onChange:function(e){i(e.target.value),t.onChange&&t.onChange(e)},placeholder:t.placeholder,rows:t.rows,value:o}))}export{X as Avatar,D as Badge,q as Box,U as Button,ot as Code,ae as Dialog,de as Divider,pe as Dropdown,Oe as Element,at as Field,L as Image,fe as Input,F as Loading,ye as Popover,ze as Provider,Re as ProviderToggle,Ae as Stack,De as Table,Ye as TableBody,qe as TableCell,Ne as TableHead,Je as TableHeadCell,_e as TableRow,Ue as Text,Be as ThemeProvider,W as ThreesImage,Ee as Toast,Qe as View,v as breakpoints,y as css,k as getCssText,S as keyframes,T as lightTheme,x as styled,w as theme};
//# sourceMappingURL=index.modern.mjs.map
