_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"+MOk":function(e,t,n){"use strict";n.r(t);var r,o,a,i,c=n("nKUr"),u=n("g4pe"),s=n.n(u),l=n("eN3O"),f=n("q1tI"),d=n.n(f),p=n("tY0/"),b=n("MTMm"),v=n("pUVP"),O=n("ADTZ"),x=n("2/AP"),m=n("EXCG"),h=n("Np9n"),j=n("0eMg"),y=n("teMl"),g=n("zyNG"),S=n("SX9u");function w(){var e=Object(f.useState)(S.a)[0];return Object(f.useEffect)((function(){return function(){return e.dispose()}}),[e]),e}function C(e,t){var n=Object(f.useState)(e),r=n[0],o=n[1],a=Object(f.useRef)(e);return Object(m.a)((function(){a.current=e}),[e]),Object(m.a)((function(){return o(a.current)}),[a,o].concat(t)),r}function R(e,t){var n=t.resolveItems();if(n.length<=0)return null;var o=t.resolveActiveIndex(),a=null!=o?o:-1,i=function(){switch(e.focus){case r.First:return n.findIndex((function(e){return!t.resolveDisabled(e)}));case r.Previous:var o=n.slice().reverse().findIndex((function(e,n,r){return!(-1!==a&&r.length-n-1>=a)&&!t.resolveDisabled(e)}));return-1===o?o:n.length-1-o;case r.Next:return n.findIndex((function(e,n){return!(n<=a)&&!t.resolveDisabled(e)}));case r.Last:var i=n.slice().reverse().findIndex((function(e){return!t.resolveDisabled(e)}));return-1===i?i:n.length-1-i;case r.Specific:return n.findIndex((function(n){return t.resolveId(n)===e.id}));case r.Nothing:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}();return-1===i?o:i}!function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"}(r||(r={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(a||(a={})),function(e){e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.GoToOption=3]="GoToOption",e[e.Search=4]="Search",e[e.ClearSearch=5]="ClearSearch",e[e.RegisterOption=6]="RegisterOption",e[e.UnregisterOption=7]="UnregisterOption"}(i||(i={}));var I=((o={})[i.CloseListbox]=function(e){return e.disabled||e.listboxState===a.Closed?e:Object(l.b)({},e,{activeOptionIndex:null,listboxState:a.Closed})},o[i.OpenListbox]=function(e){return e.disabled||e.listboxState===a.Open?e:Object(l.b)({},e,{listboxState:a.Open})},o[i.SetDisabled]=function(e,t){return e.disabled===t.disabled?e:Object(l.b)({},e,{disabled:t.disabled})},o[i.GoToOption]=function(e,t){if(e.disabled)return e;if(e.listboxState===a.Closed)return e;var n=R(t,{resolveItems:function(){return e.options},resolveActiveIndex:function(){return e.activeOptionIndex},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.current.disabled}});return""===e.searchQuery&&e.activeOptionIndex===n?e:Object(l.b)({},e,{searchQuery:"",activeOptionIndex:n})},o[i.Search]=function(e,t){if(e.disabled)return e;if(e.listboxState===a.Closed)return e;var n=e.searchQuery+t.value.toLowerCase(),r=e.options.findIndex((function(e){var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))}));return-1===r||r===e.activeOptionIndex?Object(l.b)({},e,{searchQuery:n}):Object(l.b)({},e,{searchQuery:n,activeOptionIndex:r})},o[i.ClearSearch]=function(e){return e.disabled||e.listboxState===a.Closed||""===e.searchQuery?e:Object(l.b)({},e,{searchQuery:""})},o[i.RegisterOption]=function(e,t){return Object(l.b)({},e,{options:[].concat(e.options,[{id:t.id,dataRef:t.dataRef}])})},o[i.UnregisterOption]=function(e,t){var n=e.options.slice(),r=null!==e.activeOptionIndex?n[e.activeOptionIndex]:null,o=n.findIndex((function(e){return e.id===t.id}));return-1!==o&&n.splice(o,1),Object(l.b)({},e,{options:n,activeOptionIndex:o===e.activeOptionIndex||null===r?null:n.indexOf(r)})},o),k=Object(f.createContext)(null);function P(e){var t=Object(f.useContext)(k);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+D.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,P),n}return t}function M(e,t){return Object(p.a)(t.type,I,e,t)}k.displayName="ListboxContext";var _=f.Fragment;function D(e){var t,n=e.value,r=e.onChange,o=e.disabled,c=void 0!==o&&o,u=Object(l.c)(e,["value","onChange","disabled"]),s=Object(f.useReducer)(M,{listboxState:a.Closed,propsRef:{current:{value:n,onChange:r}},labelRef:Object(f.createRef)(),buttonRef:Object(f.createRef)(),optionsRef:Object(f.createRef)(),disabled:c,options:[],searchQuery:"",activeOptionIndex:null}),v=s[0],O=v.listboxState,x=v.propsRef,h=v.optionsRef,S=v.buttonRef,w=s[1];Object(m.a)((function(){x.current.value=n}),[n,x]),Object(m.a)((function(){x.current.onChange=r}),[r,x]),Object(m.a)((function(){return w({type:i.SetDisabled,disabled:c})}),[c]),Object(y.a)("mousedown",(function(e){var t,n,r,o=e.target;O===a.Open&&((null==(t=S.current)?void 0:t.contains(o))||(null==(n=h.current)?void 0:n.contains(o))||(w({type:i.CloseListbox}),Object(j.f)(o,j.c.Loose)||(e.preventDefault(),null==(r=S.current)||r.focus())))}));var C=Object(f.useMemo)((function(){return{open:O===a.Open,disabled:c}}),[O,c]);return d.a.createElement(k.Provider,{value:s},d.a.createElement(g.a,{value:Object(p.a)(O,(t={},t[a.Open]=g.b.Open,t[a.Closed]=g.b.Closed,t))},Object(b.d)({props:u,slot:C,defaultTag:_,name:"Listbox"})))}var T=Object(b.c)((function e(t,n){var o,c=P([D.name,e.name].join(".")),u=c[0],s=c[1],d=Object(v.a)(u.buttonRef,n),p="headlessui-listbox-button-"+Object(h.a)(),m=w(),j=Object(f.useCallback)((function(e){switch(e.key){case O.a.Space:case O.a.Enter:case O.a.ArrowDown:e.preventDefault(),s({type:i.OpenListbox}),m.nextFrame((function(){u.propsRef.current.value||s({type:i.GoToOption,focus:r.First})}));break;case O.a.ArrowUp:e.preventDefault(),s({type:i.OpenListbox}),m.nextFrame((function(){u.propsRef.current.value||s({type:i.GoToOption,focus:r.Last})}))}}),[s,u,m]),y=Object(f.useCallback)((function(e){switch(e.key){case O.a.Space:e.preventDefault()}}),[]),g=Object(f.useCallback)((function(e){if(Object(x.a)(e.currentTarget))return e.preventDefault();u.listboxState===a.Open?(s({type:i.CloseListbox}),m.nextFrame((function(){var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),s({type:i.OpenListbox}))}),[s,m,u]),S=C((function(){if(u.labelRef.current)return[u.labelRef.current.id,p].join(" ")}),[u.labelRef.current,p]),R=Object(f.useMemo)((function(){return{open:u.listboxState===a.Open,disabled:u.disabled}}),[u]),I=t,k={ref:d,id:p,type:"button","aria-haspopup":!0,"aria-controls":null==(o=u.optionsRef.current)?void 0:o.id,"aria-expanded":u.disabled?void 0:u.listboxState===a.Open,"aria-labelledby":S,disabled:u.disabled,onKeyDown:j,onKeyUp:y,onClick:g};return Object(b.d)({props:Object(l.b)({},I,k),slot:R,defaultTag:"button",name:"Listbox.Button"})}));var N=b.a.RenderStrategy|b.a.Static,E=Object(b.c)((function e(t,n){var o,c=P([D.name,e.name].join(".")),u=c[0],s=c[1],d=Object(v.a)(u.optionsRef,n),p="headlessui-listbox-options-"+Object(h.a)(),x=w(),j=w(),y=Object(g.c)(),R=null!==y?y===g.b.Open:u.listboxState===a.Open;Object(m.a)((function(){var e=u.optionsRef.current;e&&u.listboxState===a.Open&&e!==document.activeElement&&e.focus({preventScroll:!0})}),[u.listboxState,u.optionsRef]);var I=Object(f.useCallback)((function(e){switch(j.dispose(),e.key){case O.a.Space:if(""!==u.searchQuery)return e.preventDefault(),e.stopPropagation(),s({type:i.Search,value:e.key});case O.a.Enter:if(e.preventDefault(),e.stopPropagation(),s({type:i.CloseListbox}),null!==u.activeOptionIndex){var t=u.options[u.activeOptionIndex].dataRef;u.propsRef.current.onChange(t.current.value)}Object(S.a)().nextFrame((function(){var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case O.a.ArrowDown:return e.preventDefault(),e.stopPropagation(),s({type:i.GoToOption,focus:r.Next});case O.a.ArrowUp:return e.preventDefault(),e.stopPropagation(),s({type:i.GoToOption,focus:r.Previous});case O.a.Home:case O.a.PageUp:return e.preventDefault(),e.stopPropagation(),s({type:i.GoToOption,focus:r.First});case O.a.End:case O.a.PageDown:return e.preventDefault(),e.stopPropagation(),s({type:i.GoToOption,focus:r.Last});case O.a.Escape:return e.preventDefault(),e.stopPropagation(),s({type:i.CloseListbox}),x.nextFrame((function(){var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case O.a.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(s({type:i.Search,value:e.key}),j.setTimeout((function(){return s({type:i.ClearSearch})}),350))}}),[x,s,j,u]),k=C((function(){var e,t,n;return null!=(e=null==(t=u.labelRef.current)?void 0:t.id)?e:null==(n=u.buttonRef.current)?void 0:n.id}),[u.labelRef.current,u.buttonRef.current]),M=Object(f.useMemo)((function(){return{open:u.listboxState===a.Open}}),[u]),_={"aria-activedescendant":null===u.activeOptionIndex||null==(o=u.options[u.activeOptionIndex])?void 0:o.id,"aria-labelledby":k,id:p,onKeyDown:I,role:"listbox",tabIndex:0,ref:d},T=t;return Object(b.d)({props:Object(l.b)({},T,_),slot:M,defaultTag:"ul",features:N,visible:R,name:"Listbox.Options"})}));D.Button=T,D.Label=function e(t){var n=P([D.name,e.name].join("."))[0],r="headlessui-listbox-label-"+Object(h.a)(),o=Object(f.useCallback)((function(){var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})}),[n.buttonRef]),i=Object(f.useMemo)((function(){return{open:n.listboxState===a.Open,disabled:n.disabled}}),[n]),c={ref:n.labelRef,id:r,onClick:o};return Object(b.d)({props:Object(l.b)({},t,c),slot:i,defaultTag:"label",name:"Listbox.Label"})},D.Options=E,D.Option=function e(t){var n=t.disabled,o=void 0!==n&&n,c=t.value,u=Object(l.c)(t,["disabled","value"]),s=P([D.name,e.name].join(".")),d=s[0],p=s[1],v="headlessui-listbox-option-"+Object(h.a)(),O=null!==d.activeOptionIndex&&d.options[d.activeOptionIndex].id===v,x=d.propsRef.current.value===c,j=Object(f.useRef)({disabled:o,value:c});Object(m.a)((function(){j.current.disabled=o}),[j,o]),Object(m.a)((function(){j.current.value=c}),[j,c]),Object(m.a)((function(){var e,t;j.current.textValue=null==(e=document.getElementById(v))||null==(t=e.textContent)?void 0:t.toLowerCase()}),[j,v]);var y=Object(f.useCallback)((function(){return d.propsRef.current.onChange(c)}),[d.propsRef,c]);Object(m.a)((function(){return p({type:i.RegisterOption,id:v,dataRef:j}),function(){return p({type:i.UnregisterOption,id:v})}}),[j,v]),Object(m.a)((function(){var e;d.listboxState===a.Open&&x&&(p({type:i.GoToOption,focus:r.Specific,id:v}),null==(e=document.getElementById(v))||null==e.focus||e.focus())}),[d.listboxState]),Object(m.a)((function(){if(d.listboxState===a.Open&&O){var e=Object(S.a)();return e.nextFrame((function(){var e;return null==(e=document.getElementById(v))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})})),e.dispose}}),[v,O,d.listboxState]);var g=Object(f.useCallback)((function(e){if(o)return e.preventDefault();y(),p({type:i.CloseListbox}),Object(S.a)().nextFrame((function(){var e;return null==(e=d.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),[p,d.buttonRef,o,y]),w=Object(f.useCallback)((function(){if(o)return p({type:i.GoToOption,focus:r.Nothing});p({type:i.GoToOption,focus:r.Specific,id:v})}),[o,v,p]),C=Object(f.useCallback)((function(){o||O||p({type:i.GoToOption,focus:r.Specific,id:v})}),[o,O,v,p]),R=Object(f.useCallback)((function(){o||O&&p({type:i.GoToOption,focus:r.Nothing})}),[o,O,p]),I=Object(f.useMemo)((function(){return{active:O,selected:x,disabled:o}}),[O,x,o]),k={id:v,role:"option",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,"aria-selected":!0===x||void 0,disabled:void 0,onClick:g,onFocus:w,onPointerMove:C,onMouseMove:C,onPointerLeave:R,onMouseLeave:R};return Object(b.d)({props:Object(l.b)({},u,k),slot:I,defaultTag:"li",name:"Listbox.Option"})};var L=n("6+OY"),A=n("Ka17"),G=[{name:"last week",value:"now-7d"},{name:"last 48 hours",value:"now-2d"},{value:"now-1d",name:"last 24 hours"},{name:"last 12 hours",value:"now-12h"}],F=function(e){var t=e.selected,n=e.setSelected;return Object(c.jsx)(D,{value:t,onChange:n,children:Object(c.jsxs)("div",{className:"relative",children:[Object(c.jsxs)(D.Button,{className:"relative w-48 py-2 pl-3 pr-10 text-left bg-gray-700 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm",children:[Object(c.jsxs)("span",{className:"block truncate",children:[Object(c.jsx)(A.b,{className:"w-6 h-6 text-gray-400 inline mr-2"}),t.name]}),Object(c.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(c.jsx)(A.d,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})})]}),Object(c.jsx)(L.a,{as:f.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(c.jsx)(D.Options,{className:"absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-800 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:G.map((function(e,t){return Object(c.jsx)(D.Option,{className:function(e){var t=e.active;return"".concat(t?"text-amber-900 bg-amber-100":"text-gray-100","\n                          cursor-default select-none relative py-2 pl-10 pr-4")},value:e,children:function(t){var n=t.selected;t.active;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"".concat(n?"font-medium":"font-normal"," block truncate"),children:e.name}),n?Object(c.jsx)("span",{className:"".concat("text-amber-600","\n                                absolute inset-y-0 left-0 flex items-center pl-3"),children:Object(c.jsx)(A.a,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},t)}))})})]})})};t.default=function(){var e=Object(f.useState)(G[1]),t=e[0],n=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s.a,{children:Object(c.jsx)("title",{children:"Stats - Plutonium Project"})}),Object(c.jsxs)("div",{className:"px-4 xl:px-8 pt-8 pb-4",children:[Object(c.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[Object(c.jsx)("h1",{className:"font-display font-bold text-5xl",children:"Stats"}),Object(c.jsx)(F,{selected:t,setSelected:n})]}),Object(c.jsxs)("div",{className:"grid grid-cols-2 block hidden md:grid gap-4",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h2",{className:"font-display font-bold text-3xl text-gray-300 mb-2",children:"Players"})}),Object(c.jsx)("div",{children:Object(c.jsx)("h2",{className:"font-display font-bold text-3xl text-gray-300 mb-2",children:"Servers"})})]})]}),Object(c.jsx)("iframe",{src:"".concat("https://grafana.erebus.group","/d/wBaoofZ7z/players-and-servers?orgId=1&theme=dark&panelId=4&from=").concat(t.value,"&to=now&kiosk"),width:"100%",height:"1050",frameBorder:"0",className:"px-1 mb-4"})]})}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},BdAR:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},CM2u:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},dTAc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("r55Z");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},g4pe:function(e,t,n){e.exports=n("mLbm")},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},mLbm:function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),c=(a=n("BdAR"))&&a.__esModule?a:{default:a},u=n("r55Z"),s=n("CM2u"),l=n("dTAc");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),r[l]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var v=function(e){var t=e.children,n=i.useContext(u.AmpStateContext),r=i.useContext(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:b,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=v},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},r55Z:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},zorG:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){return n("+MOk")}])}},[["zorG",0,1,6]]]);