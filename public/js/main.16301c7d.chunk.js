(this.webpackJsonpjusttable=this.webpackJsonpjusttable||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),s=a(4),i=a.n(s),p=a(3),o=a(7),u=a(1);function d(e){return r.a.createElement("div",{className:"App-link App-btnDelete",onClick:function(){e.handlerDelete(e.indexRow)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")}var m=a(8),h=a(9),f=a(2),g=a(11),v=a(10);function b(e){var t=e.type,a=e.name,n=e.placeholder,l=e.value,c=e.defaultValue,s=e.className;switch(t){case"select":var i=e.options.map((function(e,t){return r.a.createElement("option",{value:e,key:"option-".concat(a,"-").concat(t)},e)}));return r.a.createElement("select",{className:"App-select ".concat(s||""),name:a,defaultValue:c,onChange:e.handleChange},i);default:var p={placeholder:n||a};return""===c&&(p.defaultValue=c),"disabled"in e&&e.disabled&&(p.disabled=!0),e.maxLength&&(p.maxLength=e.maxLength),r.a.createElement("input",Object.assign({type:t||"text",className:"App-input ".concat(s||""),name:a,onChange:function(t){e.maxLength?t.target.value.length<=e.maxLength&&e.handleChange(t):e.handleChange(t)},value:l},p))}}var y=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.inputsOpts={lastname:{type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"},firstname:{type:"text",placeholder:"\u0418\u043c\u044f"},patronymic:{type:"text",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"},card:{type:"text",className:"App-input--middle"},orgnameshort:{type:"text",className:"App-input--middle",placeholder:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f",defaultValue:"\u0420\u043e\u0433\u0430 \u0438 \u041a\u043e\u043f\u044b\u0442\u0430"},idperson:{type:"number",defaultValue:"102",className:"App-input--short",placeholder:"id",disabled:!0},idcard:{type:"number",maxLength:5,className:"App-input--short"},acc1num:{type:"number",maxLength:20},statusname:{type:"select",defaultValue:"\u041d\u043e\u0432\u044b\u0439",options:["\u041d\u043e\u0432\u044b\u0439","\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439"]},persontypename:{type:"select",defaultValue:"\u0424\u0438\u0437. \u043b\u0438\u0446\u043e",options:["\u0424\u0438\u0437. \u043b\u0438\u0446\u043e","\u042e\u0440. \u043b\u0438\u0446\u043e","\u0418\u041f"]},currname:{type:"text",defaultValue:"RUR",className:"App-input--short"},birthdate:{type:"date"},docseries:{type:"number",maxLength:4,className:"App-input--short"},docnum:{type:"number",maxLength:6,className:"App-input--middle"},doctypename:{type:"select",defaultValue:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0420\u0424",options:["\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0420\u0424"]},idtaskauthstatus:{type:"number",defaultValue:"10",className:"App-input--short"}},n.state=n.initFields(e.fields),n.initFields=n.initFields.bind(Object(f.a)(n)),n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.fields.map((function(t){return r.a.createElement("div",{className:"App-personForm-item grid-item",key:"".concat(t,"Wrapper")},r.a.createElement(b,Object.assign({},e.inputsOpts[t],{name:t,handleChange:e.handleChange,value:e.state[t]})))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App-overflow"}),t,r.a.createElement("div",{className:"App-personForm-item grid-item App-btnWrapper"},r.a.createElement("button",{className:"App-btnOk",onClick:function(){e.props.handlerToggleEditing(),e.props.handlerOk(e.state)}},"Ok"),r.a.createElement("div",{className:"App-link App-btnCancel",onClick:this.props.handlerToggleEditing},"\u041e\u0442\u043c\u0435\u043d\u0430")))}},{key:"initFields",value:function(e){var t=this.inputsOpts,a={};return e.forEach((function(e){a[e]=e in t&&"defaultValue"in t[e]?t[e].defaultValue:""})),a}}]),a}(r.a.Component);function E(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1];if(e.data){var s={gridTemplateColumns:"120px repeat(3, 1fr) repeat(".concat(e.headers.length-4,", auto) auto")},i=e.data.map((function(t,a){return r.a.createElement("div",{className:"App-rowWrapper",key:"".concat(a,"-row")},e.headers.map((function(e,a){return r.a.createElement("div",{className:"grid-item ".concat("CARD"===e||"ACC1NUM"===e?"App-ellipsis":""),key:"".concat(a,"-cell")},t[a][e])})),r.a.createElement("div",{className:"grid-item App-btnWrapper"},r.a.createElement(d,{handlerDelete:e.handlerDelete,indexRow:a})))})),p=l?r.a.createElement("div",{className:"App-rowWrapper"},r.a.createElement(y,{fields:e.headers.map((function(e){return e.toLowerCase()})),handlerToggleEditing:function(){c(!1)},handlerOk:e.handlerOk})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App-table"},r.a.createElement("div",{className:"grid-container",style:s},i,p)),r.a.createElement("p",{className:"App-link App-text--center",onClick:function(){c(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0443"))}return r.a.createElement("div",{className:"App-loader App-text--center"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..")}function A(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Response,e.t1=new TextDecoder("windows-1251"),e.next=4,t.arrayBuffer();case 4:return e.t2=e.sent,e.t3=e.t1.decode.call(e.t1,e.t2),e.abrupt("return",new e.t0(e.t3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),s=Object(u.a)(c,2),i=s[0],o=s[1],d=Object(n.useState)(null),m=Object(u.a)(d,2),h=m[0],f=m[1];return a||(l(!0),function(e,t){fetch("/justtable/public/person.json",{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"}}).then(A).then((function(e){return e.json()})).then((function(a){t(a.data.metaData.map((function(e){return e.name}))),e(function(e){return e.rows.map((function(t){return t.map((function(t,a){var n={};return n[e.metaData[a].name]=t,n}))}))}(a.data))})).catch((function(e){console.log(e)}))}(o,f)),r.a.createElement("div",{className:"App"},r.a.createElement(E,{handlerDelete:function(e){!function(e,t,a){var n=t.slice(0);n.splice(e,1),a(n)}(e,i,o)},handlerOk:function(e){!function(e,t,a){var n=[];for(var r in e){var l=e[r];["lastname","firstname","patronymic"].includes(r)&&(l=l.toUpperCase()),n.push(Object(p.a)({},r.toUpperCase(),l))}a(t.concat([n]))}(e,i,o)},data:i,headers:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.16301c7d.chunk.js.map
