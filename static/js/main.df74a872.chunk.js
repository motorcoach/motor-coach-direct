(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),s=a.n(o),i=(a(85),a(10)),l=a(11),c=a(14),u=a(12),p=a(15),m=a(75),h=a.n(m),d=(a(87),a(23)),g=a(77),S=a.n(g),b=a(78),v=a.n(b),f=a(79),O=a.n(f),E=a(35),w=a.n(E),y=a(13),j=a.n(y),A=a(26),k=a(27),x=a(17),C=a.n(x),D=a(29),N=a.n(D),P=a(16),I=a.n(P),G=a(28),M=a.n(G),T=a(24),B=a.n(T),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:sessionStorage.getItem("newOrPreowned")},a.handleChange=function(e){a.setState({value:e.target.value}),sessionStorage.setItem("newOrPreowned",e.target.value)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.handlerToUpdate;return r.a.createElement(B.a,{className:t.root,elevation:1},r.a.createElement(j.a,Object(A.a)({component:"span",variant:"h5"},"component","h3"),"Select New or Pre-Owned"),r.a.createElement(M.a,{component:"fieldset"},r.a.createElement(N.a,{"aria-label":"position",name:"position",value:this.state.value,onChange:function(){return a(e.handleChange)},row:!0},r.a.createElement(I.a,{value:"new",control:r.a.createElement(C.a,{color:"primary"}),label:"New",labelPlacement:"start"}),r.a.createElement(I.a,{value:"preowned",control:r.a.createElement(C.a,{color:"primary"}),label:"Pre-Owned",labelPlacement:"start"}))))}}]),t}(r.a.Component),L=Object(d.withStyles)(function(e){return{root:Object(k.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})(R),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:sessionStorage.getItem("dieselOrGas")},a.handleChange=function(e){a.setState({value:e.target.value}),sessionStorage.setItem("dieselOrGas",e.target.value)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.handlerToUpdate;return r.a.createElement(B.a,{className:t.root,elevation:1},r.a.createElement(j.a,{variant:"h5",component:"h3"},"Select Diesel or Gas"),r.a.createElement(M.a,{component:"fieldset"},r.a.createElement(N.a,{"aria-label":"position",name:"position",value:this.state.value,onChange:function(){return a(e.handleChange)},row:!0},r.a.createElement(I.a,{value:"diesel",control:r.a.createElement(C.a,{color:"primary"}),label:"Diesel",labelPlacement:"start"}),r.a.createElement(I.a,{value:"gas",control:r.a.createElement(C.a,{color:"primary"}),label:"Gas",labelPlacement:"start"}))))}}]),t}(r.a.Component),U=Object(d.withStyles)(function(e){return{root:Object(k.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})(F),X=a(51),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:sessionStorage.getItem("manufacturer"),newOrPreowned:sessionStorage.getItem("newOrPreowned"),dieselOrGas:sessionStorage.getItem("dieselOrGas")},a.handleChange=function(e){a.setState({value:e.target.value}),sessionStorage.setItem("manufacturer",e.target.value)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.handlerToUpdate;if(this.state.newOrPreowed,"diesel"===this.state.dieselOrGas)var a=Object.keys(X.diesel).map(function(t,a){return r.a.createElement(I.a,{key:a,value:t,control:r.a.createElement(C.a,{color:"primary"}),label:t,labelPlacement:"start",onChange:e.handleChange})});var n=this.props.classes;return r.a.createElement(B.a,{className:n.root,elevation:1},r.a.createElement(j.a,Object(A.a)({component:"span",variant:"h5"},"component","h3"),"Select Manufacturer"),r.a.createElement(M.a,{component:"fieldset"},r.a.createElement(N.a,{"aria-label":"position",name:"position",value:this.state.value,onChange:function(){return t(e.handleChange)},row:!0},a)))}}]),t}(r.a.Component),H=Object(d.withStyles)(function(e){return{root:Object(k.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})(z),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={year:"",newOrPreowned:sessionStorage.getItem("newOrPreowned"),dieselOrGas:sessionStorage.getItem("dieselOrGas"),manufacturer:sessionStorage.getItem("manufacturer")},a.handleChangeYear=function(e){a.setState({year:e.target.value}),sessionStorage.setItem("year",e.target.value)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(B.a,{className:e.root,elevation:1},r.a.createElement(j.a,Object(A.a)({component:"span",variant:"h5"},"component","h3"),"Select your Model...'"),r.a.createElement(M.a,{component:"fieldset"},r.a.createElement(N.a,{"aria-label":"position",name:"position",value:this.state.value,onChange:this.handleChangeYear,row:!0},r.a.createElement(I.a,{value:"2019",control:r.a.createElement(C.a,{color:"primary"}),label:"2019",labelPlacement:"start"}),r.a.createElement(I.a,{value:"2018",control:r.a.createElement(C.a,{color:"primary"}),label:"2018",labelPlacement:"start"}))))}}]),t}(r.a.Component),W=Object(d.withStyles)(function(e){return{root:Object(k.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})(V),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={activeStep:0,skipped:new Set,nextStepDisabled:!0},a.isNewOrPreowned=function(e){return 0===e},a.isStepOptional=function(e){return!1},a.handleNext=function(){var e=a.state.activeStep,t=a.state.skipped;a.isStepSkipped(e)&&(t=new Set(t.values())).delete(e),a.setState({activeStep:e+1,skipped:t})},a.handleBack=function(){a.setState(function(e){return{activeStep:e.activeStep-1}})},a.handleEnableNextStep=function(){a.setState(function(e){return{nextStepDisabled:!1}})},a.handleSkip=function(){var e=a.state.activeStep;if(!a.isStepOptional(e))throw new Error("You can't skip a step that isn't optional.");a.setState(function(t){var a=new Set(t.skipped.values());return a.add(e),{activeStep:t.activeStep+1,skipped:a}})},a.handleReset=function(){a.setState({activeStep:0})},a.getSteps=function(){return["Select New or Pre-Order","Select Diesel or Gas","Which Manufacturer","Select your Model","Select Floorplan"]},a.getStepContent=function(e){switch(e){case 0:return r.a.createElement(L,{handlerToUpdate:a.handleEnableNextStep});case 1:return r.a.createElement(U,{handlerToUpdate:a.handleEnableNextStep});case 2:return r.a.createElement(H,{handlerToUpdate:a.handleEnableNextStep});case 3:return r.a.createElement(W,null);default:return"Select Floorplan"}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"isStepSkipped",value:function(e){return this.state.skipped.has(e)}},{key:"setNextStepDisabled",value:function(e){switch(e){case 0:this.state.nextStepDisabled||null!==sessionStorage.getItem("newOrPreowned")?this.state.nextStepDisabled&&this.setState({nextStepDisabled:!1}):this.setState({nextStepDisabled:null!==sessionStorage.getItem("dieselOrGas")});break;case 1:this.state.nextStepDisabled||null!==sessionStorage.getItem("dieselOrGas")?this.state.nextStepDisabled&&null!==sessionStorage.getItem("dieselOrGas")&&this.setState({nextStepDisabled:!1}):this.setState({nextStepDisabled:!0});break;case 2:console.log(sessionStorage.getItem("manufacturer")),this.state.nextStepDisabled||null!==sessionStorage.getItem("manufacturer")?this.state.nextStepDisabled&&null!==sessionStorage.getItem("manufacturer")&&this.setState({nextStepDisabled:!1}):this.setState({nextStepDisabled:!0});break;default:return!1}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.getSteps(),n=this.state.activeStep;return this.setNextStepDisabled(n),r.a.createElement("div",{className:t.root},r.a.createElement(S.a,{activeStep:n},a.map(function(t,a){var n={},o={};return e.isStepOptional(a)&&(o.optional=r.a.createElement(j.a,{variant:"caption"},"Optional")),e.isStepSkipped(a)&&(n.completed=!1),r.a.createElement(v.a,Object.assign({key:t},n),r.a.createElement(O.a,o,t))})),r.a.createElement("div",null,n===a.length?r.a.createElement("div",null,r.a.createElement(j.a,{component:"span",className:t.instructions},"All steps completed - you're finished"),r.a.createElement(w.a,{onClick:this.handleReset,className:t.button},"Reset")):r.a.createElement("div",null,r.a.createElement(j.a,{component:"span",className:t.instructions},this.getStepContent(n)),r.a.createElement("div",null,r.a.createElement(w.a,{disabled:0===n,onClick:this.handleBack,className:t.button},"Back"),this.isStepOptional(n)&&r.a.createElement(w.a,{variant:"contained",color:"primary",onClick:this.handleSkip,className:t.button},"Skip"),r.a.createElement(w.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:t.button,disabled:this.state.nextStepDisabled},n===a.length-1?"Finish":"Next")))))}}]),t}(r.a.Component),Y=Object(d.withStyles)(function(e){return{root:{width:"90%"},button:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(J),q=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,null))}}]),t}(n.Component),K=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})),r.a.createElement(q,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e){e.exports={diesel:{"American Coach":{2018:{"American Dream":[],"American dream SE":[],"American Eagle":[],"American Revolution":[],"American Revolution SE":[]},2019:{"American Dream":["42B","42Q","42S"],"American Eagle":["45A","45C","45T"],"American Eage Heritage Edition":["45A","45C"]}},Entegra:{2018:{Anthem:[],Aspire:[],Cornerstone:[],Insignia:[]},2019:{Anthem:[],Aspire:[],Cornerstone:[],Insignia:[]}},Tiffin:{2018:{"Allegro Bus":[],"Allegro Red":[],"Open Road Allegro":[],Phaeton:[]},2019:{"Allegro Breeze":[],"Allegro Bus":[],"Allegro Red":[],"Open Road Allegro":[],Phaeton:[],Zephyr:[]}},Monaco:{2018:{"Monaco Signature":[],"Monaco Marquis":[]},2019:{"Monaco Signature":[],"Monaco Marquis":[]}},Newmar:{2018:{"Dutch Star":[],Essex:[],"King Aire":[],"London Aire":[],"Mountain Aire":[],"New Aire":[],Ventana:[],"Ventana LE":[]},2019:{"Dutch Star":[],Essex:[],"King Aire":[],"London Aire":[],"Mountain Aire":[],"New Aire":[],Ventana:[],"Ventana LE":[]}},Winnebago:{2018:{Forza:[],Horizon:[],"Grand Tour":[]},2019:{Forza:[],Journey:[],Horizon:[],Tour:[],"Grand Tour":[]}},Fleetwood:{2018:{"Pace Arrow":[],"Pace Arrow LXE":[],Discovery:[],"Discovery LXE":[]},2019:{"Pace Arrow":[],"Pace Arrow LXE":[],Discovery:[],"Discovery LXE":[]}},Dynamax:{2018:{},2019:{"Force HD":[],DX3:[],"DynaQuest XL":[]}}},gas:{}}},75:function(e,t,a){e.exports=a.p+"static/media/white-logo.05c454ef.png"},80:function(e,t,a){e.exports=a(200)},85:function(e,t,a){},87:function(e,t,a){}},[[80,2,1]]]);
//# sourceMappingURL=main.df74a872.chunk.js.map