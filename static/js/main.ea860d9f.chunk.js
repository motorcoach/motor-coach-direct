(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{262:function(e,a,t){e.exports=t.p+"static/media/white-logo.05c454ef.png"},276:function(e,a,t){e.exports=t(649)},281:function(e,a,t){},283:function(e,a,t){},400:function(e,a){},402:function(e,a){},434:function(e,a){},435:function(e,a){},502:function(e,a){},649:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(48),l=t.n(o),i=(t(281),t(24)),c=t(25),s=t(27),m=t(26),h=t(28),d=t(262),u=t.n(d),p=(t(283),t(36)),g=t(264),S=t.n(g),b=t(265),f=t.n(b),E=t(266),C=t.n(E),O=t(46),k=t.n(O),v=t(35),w=t.n(v),y=t(44),x=t(49),j=t.n(x),B=t(61),I=t.n(B),A=t(23),N=t.n(A),P=t(31),D=t.n(P),M=t(29),F=t.n(M),R=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={value:sessionStorage.getItem("dieselOrGas")},t.handleChange=function(e){t.setState({value:e.target.value}),sessionStorage.setItem("dieselOrGas",e.target.value)},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.props.handlerToUpdate;return r.a.createElement(F.a,{className:a.root,elevation:1},r.a.createElement(w.a,{variant:"h5",component:"h3"},"Select Diesel or Gas"),r.a.createElement(D.a,{component:"fieldset"},r.a.createElement(I.a,{"aria-label":"position",name:"position",value:this.state.value,onChange:function(){return t(e.handleChange)},row:!0},r.a.createElement(N.a,{value:"diesel",control:r.a.createElement(j.a,{color:"primary"}),label:"Diesel",labelPlacement:"start",onChange:this.handleChange}),r.a.createElement(N.a,{value:"gas",control:r.a.createElement(j.a,{color:"primary"}),label:"Gas",labelPlacement:"start",onChange:this.handleChange}))))}}]),a}(r.a.Component),G=Object(p.withStyles)(function(e){return{root:Object(y.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})(R),T=t(76),H=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={value:sessionStorage.getItem("manufacturer"),dieselOrGas:sessionStorage.getItem("dieselOrGas")},t.handleChange=function(e){t.setState({value:e.target.value}),sessionStorage.setItem("manufacturer",e.target.value)},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.props.handlerToUpdate;if(this.state.dieselOrGas){var n=Object.keys(T[this.state.dieselOrGas]).map(function(a,t){return r.a.createElement(N.a,{key:t,value:a,control:r.a.createElement(j.a,{color:"primary"}),label:a,labelPlacement:"start",onChange:e.handleChange})});return r.a.createElement(F.a,{className:a.root,elevation:1},r.a.createElement(w.a,{component:"span",variant:"h5"},"Select Manufacturer"),r.a.createElement(D.a,{component:"fieldset"},r.a.createElement(I.a,{"aria-label":"manufacturer",name:"manufacturer",value:this.state.value,onChange:function(){return t(e.handleChange)},row:!0},n)))}}}]),a}(r.a.Component),W=Object(p.withStyles)(function(e){return{root:Object(y.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})(H),L=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={dieselOrGas:sessionStorage.getItem("dieselOrGas"),value:sessionStorage.getItem("floorplan"),manufacturer:sessionStorage.getItem("manufacturer"),model:sessionStorage.getItem("model"),year:sessionStorage.getItem("year")},t.handleChange=function(e){t.setState({value:e.target.value}),sessionStorage.setItem("floorplan",e.target.value)},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.props.handlerToUpdate;if(this.state.dieselOrGas&&this.state.manufacturer&&this.state.year&&this.state.model){var n=T[this.state.dieselOrGas][this.state.manufacturer][this.state.year][this.state.model].map(function(a,t){return r.a.createElement(N.a,{key:t,value:a,control:r.a.createElement(j.a,{color:"primary"}),label:a,labelPlacement:"start",onChange:e.handleChange})});return r.a.createElement(F.a,{className:a.root,elevation:1},r.a.createElement(w.a,{component:"span",variant:"h5"},"Select Floorplan"),r.a.createElement(D.a,{component:"fieldset"},r.a.createElement(I.a,{"aria-label":"floorplan",name:"floorplan",value:this.state.value,onChange:function(){return t(e.handleChange)},row:!0},n)))}}}]),a}(r.a.Component),Q=Object(p.withStyles)(function(e){return{root:Object(y.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})(L),$=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={dieselOrGas:sessionStorage.getItem("dieselOrGas"),manufacturer:sessionStorage.getItem("manufacturer"),model:sessionStorage.getItem("model"),models:sessionStorage.getItem("dieselOrGas")&&sessionStorage.getItem("manufacturer")&&sessionStorage.getItem("year")?Object.keys(T[sessionStorage.getItem("dieselOrGas")][sessionStorage.getItem("manufacturer")][sessionStorage.getItem("year")]).map(function(e,a){return r.a.createElement(N.a,{key:a,value:e,control:r.a.createElement(j.a,{color:"primary"}),label:e,labelPlacement:"start",onChange:t.handleChangeModel})}):"",year:sessionStorage.getItem("year")},t.handleChangeYear=function(e){if(t.state.dieselOrGas&&t.state.manufacturer&&e.target.value){t.setState({year:e.target.value}),sessionStorage.setItem("year",e.target.value);var a=t.props.handlerToUpdate;t.setState({models:Object.keys(T[t.state.dieselOrGas][t.state.manufacturer][e.target.value]).map(function(e,n){return r.a.createElement(N.a,{key:n,value:e,control:r.a.createElement(j.a,{color:"primary"}),label:e,labelPlacement:"start",onChange:function(){return a(t.handleChangeModel)}})})})}},t.handleChangeModel=function(e){t.setState({model:e.target.value}),sessionStorage.setItem("model",e.target.value)},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=r.a.createElement(D.a,{component:"fieldset"},r.a.createElement(I.a,{"aria-label":"model",name:"model",value:this.state.model,onChange:this.handleChangeModel,row:!0},this.state.models));return r.a.createElement(F.a,{className:e.root,elevation:1},r.a.createElement(w.a,{component:"span",variant:"h5"},"Select your Model"),r.a.createElement(D.a,{component:"fieldset"},r.a.createElement(I.a,{"aria-label":"year",name:"year",value:this.state.year,onChange:this.handleChangeYear,row:!0},r.a.createElement(N.a,{value:"2019",control:r.a.createElement(j.a,{color:"primary"}),label:"2019",labelPlacement:"start"}),r.a.createElement(N.a,{value:"2018",control:r.a.createElement(j.a,{color:"primary"}),label:"2018",labelPlacement:"start"}))),r.a.createElement("br",null),a)}}]),a}(r.a.Component),Y=Object(p.withStyles)(function(e){return{root:Object(y.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})($),U=t(651),X=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={activeStep:0,skipped:new Set,nextStepDisabled:null===sessionStorage.getItem("dieselOrGas")},t.isNewOrPreowned=function(e){return 0===e},t.isStepOptional=function(e){return!1},t.handleCard=function(){t.props.history.push("/card/"+sessionStorage.getItem("dieselOrGas")+"/"+sessionStorage.getItem("manufacturer").replace(/\s/g,"")+"/"+sessionStorage.getItem("year")+"/"+sessionStorage.getItem("model").replace(/\s/g,"")+"/"+sessionStorage.getItem("floorplan"))},t.handleNext=function(){var e=t.state.activeStep,a=t.state.skipped;1===e&&"Other"===sessionStorage.getItem("manufacturer")?t.props.history.push("/other/"):t.isStepSkipped(e)?(a=new Set(a.values())).delete(e):(t.setState({activeStep:e+1,skipped:a}),t.setNextStepDisabled(e+1))},t.handleBack=function(){t.setState(function(e){return{activeStep:e.activeStep-1,nextStepDisabled:!1}})},t.handleEnableNextStep=function(){t.setState(function(e){return{nextStepDisabled:!1}})},t.handleSkip=function(){var e=t.state.activeStep;if(!t.isStepOptional(e))throw new Error("You can't skip a step that isn't optional.");t.setState(function(a){var t=new Set(a.skipped.values());return t.add(e),{activeStep:a.activeStep+1,skipped:t}})},t.handleReset=function(){t.setState({activeStep:0})},t.getSteps=function(){return["Select Diesel or Gas","Which Manufacturer","Select your Model","Select Floorplan"]},t.getStepContent=function(e){switch(e){case 0:return r.a.createElement(G,{handlerToUpdate:t.handleEnableNextStep});case 1:return r.a.createElement(W,{handlerToUpdate:t.handleEnableNextStep});case 2:return r.a.createElement(Y,{handlerToUpdate:t.handleEnableNextStep});case 3:return r.a.createElement(Q,{handlerToUpdate:t.handleEnableNextStep});default:return""}},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"isStepSkipped",value:function(e){return this.state.skipped.has(e)}},{key:"setNextStepDisabled",value:function(e){switch(e){case 0:this.state.nextStepDisabled||null!==sessionStorage.getItem("dieselOrGas")?this.state.nextStepDisabled&&null!==sessionStorage.getItem("dieselOrGas")&&this.setState({nextStepDisabled:!1}):this.setState({nextStepDisabled:!0});break;case 1:this.state.nextStepDisabled||null!==sessionStorage.getItem("manufacturer")?this.state.nextStepDisabled&&null!==sessionStorage.getItem("manufacturer")&&this.setState({nextStepDisabled:!1}):this.setState({nextStepDisabled:!0});break;case 2:this.state.nextStepDisabled||null!==sessionStorage.getItem("model")?this.state.nextStepDisabled&&null!==sessionStorage.getItem("model")&&this.setState({nextStepDisabled:!1}):this.setState({nextStepDisabled:!0});break;case 3:this.state.nextStepDisabled||null!==sessionStorage.getItem("floorplan")?this.state.nextStepDisabled&&null!==sessionStorage.getItem("floorplan")&&this.setState({nextStepDisabled:!1}):this.setState({nextStepDisabled:!0});break;default:return!1}}},{key:"render",value:function(){var e=this,a=this.props.classes,t=this.getSteps(),n=this.state.activeStep;return r.a.createElement("div",{className:a.root},r.a.createElement(S.a,{activeStep:n},t.map(function(a,t){var n={},o={};return e.isStepOptional(t)&&(o.optional=r.a.createElement(w.a,{variant:"caption"},"Optional")),e.isStepSkipped(t)&&(n.completed=!1),r.a.createElement(f.a,Object.assign({key:a},n),r.a.createElement(C.a,o,a))})),r.a.createElement("div",null,n===t.length?r.a.createElement("div",null,r.a.createElement(w.a,{component:"span",className:a.instructions},"All steps completed - you're finished"),r.a.createElement(k.a,{onClick:this.handleReset,className:a.button},"Reset")):r.a.createElement("div",null,r.a.createElement(w.a,{component:"span",className:a.instructions},this.getStepContent(n)),r.a.createElement("div",null,r.a.createElement(k.a,{disabled:0===n,onClick:this.handleBack,className:a.button},"Back"),this.isStepOptional(n)&&r.a.createElement(k.a,{variant:"contained",color:"primary",onClick:this.handleSkip,className:a.button},"Skip"),r.a.createElement(k.a,{variant:"contained",color:"primary",onClick:n===t.length-1?this.handleCard:this.handleNext,className:a.button,disabled:this.state.nextStepDisabled},n===t.length-1?"See RV card":"Next")))))}}]),a}(r.a.Component),J=Object(U.a)(Object(p.withStyles)(function(e){return{root:{width:"90%"},button:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(X)),V=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,null))}}]),a}(n.Component),K=t(42),z=t(62),Z=t.n(z),q=t(75),_=t.n(q),ee=t(51),ae=t.n(ee),te=t(50),ne=t.n(te),re=t(12),oe=t.n(re),le=t(63),ie=t.n(le),ce=t(17),se=t.n(ce),me=t(71),he=t.n(me),de=t(53),ue=t.n(de),pe=t(162),ge=t(271),Se=t.n(ge),be=t(275),fe=t.n(be),Ee=t(273),Ce=t.n(Ee),Oe=t(274),ke=t.n(Oe),ve=t(272),we=t.n(ve),ye=t(103),xe=t.n(ye),je=(t(269),t(270)),Be=t.n(je),Ie=t(52),Ae=t.n(Ie),Ne=t(119),Pe=t.n(Ne);function De(e){var a=e.inputRef,t=Object(pe.a)(e,["inputRef"]);return r.a.createElement(Be.a,Object.assign({},t,{ref:function(e){a(e?e.inputElement:null)},mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))}var Me=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={annualIncome:"",creditScore:"",desiredDownPayment:"",email:"",open:!1,name:"",numberformat:"1320",phone:"(1\u2000\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000",purchasePlan:"",reason:"",w21099:""},t.handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.handleMaxWidthChange=function(e){t.setState({maxWidth:e.target.value})},t.handleFullWidthChange=function(e){t.setState({fullWidth:e.target.checked})},t.handleChange=function(e){return function(a){t.setState(Object(K.a)({},e,a.target.value))}},t.handleChangeSelect=function(e){t.setState(Object(K.a)({},e.target.name,e.target.value))},t.handleChangeSwitch=function(e){return function(a){t.setState(Object(K.a)({},e,a.target.checked))}},t.handleOk=function(){t.setState({open:!1}),Pe.a.post({url:"https://us-central1-winter-agency-229213.cloudfunctions.net/sendgridEmail",form:{name:t.state.name,dieselOrGas:sessionStorage.getItem("dieselOrGas"),email:t.state.email,floorplan:sessionStorage.getItem("floorplan"),manufacturer:sessionStorage.getItem("manufacturer"),model:sessionStorage.getItem("model"),newOrPreowned:sessionStorage.getItem("newOrPreowned"),reason:sessionStorage.getItem("reason"),year:sessionStorage.getItem("year")}},function(e,a,n){sessionStorage.clear(),t.props.history.push("/")})},t.handleCancel=function(){t.setState({open:!1})},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.email,n=a.phone,o=a.purchasePlan,l=a.name,i=(a.numberformat,a.w21099),c=0!==t.length&&0!==l.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Open contact dialog"),r.a.createElement(Se.a,{fullWidth:this.state.fullWidth,maxWidth:this.state.maxWidth,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"max-width-dialog-title",disableBackdropClick:!0,disableEscapeKeyDown:!0},r.a.createElement(we.a,{id:"max-width-dialog-title"},"Contact Information"),r.a.createElement(Ce.a,null,r.a.createElement(ke.a,null,"Please supply information so we may know more about your request"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(D.a,{className:e.formControl},r.a.createElement(oe.a,{container:!0,spacing:24},r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"name",label:"Name",className:e.textField,value:l,error:""===l,onChange:this.handleChange("name"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"email",label:"Email",className:e.textField,value:t,error:""===t,onChange:this.handleChange("email"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(D.a,{className:e.formControl},r.a.createElement(ie.a,{htmlFor:"formatted-text-mask-input"},"Phone"),r.a.createElement(xe.a,{value:n,onChange:this.handleChange("phone"),id:"formatted-text-mask-input",inputComponent:De,margin:"normal"}))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"standard-textarea",label:"Reason For Contact",placeholder:"Reason For Contact",multiline:!0,className:e.textField,onChange:this.handleChange("reason"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(ne.a,{component:"legend"},"How do you plan to purchase your coach"),r.a.createElement(N.a,{control:r.a.createElement(ue.a,{classes:{switchBase:e.iOSSwitchBase,bar:e.iOSBar,icon:e.iOSIcon,iconChecked:e.iOSIconChecked,checked:e.iOSChecked},disableRipple:!0,checked:o,onChange:this.handleChangeSwitch("purchasePlan"),value:"purchasePlan"}),label:o?"Cash":"Finance",labelPlacement:o?"start":"end"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(D.a,{className:e.formControl},r.a.createElement(ie.a,{htmlFor:"desiredDownPayment"},"Desired down payment"),r.a.createElement(he.a,{value:this.state.desiredDownPayment,onChange:this.handleChangeSelect,inputProps:{name:"desiredDownPayment",id:"desiredDownPayment"}},r.a.createElement(se.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(se.a,{value:"10%"},"10%"),r.a.createElement(se.a,{value:"20%"},"20%"),r.a.createElement(se.a,{value:"30%"},"30%"),r.a.createElement(se.a,{value:"40%"},"40%")))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(D.a,{className:e.formControl},r.a.createElement(ie.a,{htmlFor:"creditScore"},"Your credit score?"),r.a.createElement(he.a,{value:this.state.creditScore,onChange:this.handleChangeSelect,inputProps:{name:"creditScore",id:"creditScore"}},r.a.createElement(se.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(se.a,{value:"650-700"},"650-700"),r.a.createElement(se.a,{value:"700-750"},"700-750"),r.a.createElement(se.a,{value:"750-800"},"750-800"),r.a.createElement(se.a,{value:"800-850"},"800-850")))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(D.a,{className:e.formControl},r.a.createElement(ie.a,{htmlFor:"annualIncome"},"Your annual income?"),r.a.createElement(he.a,{value:this.state.annualIncome,onChange:this.handleChangeSelect,inputProps:{name:"annualIncome",id:"annualIncome"}},r.a.createElement(se.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(se.a,{value:"50k-100k"},"50k-100k"),r.a.createElement(se.a,{value:"100k-250k"},"100k-250k"),r.a.createElement(se.a,{value:"250k-500k"},"250k-500k"),r.a.createElement(se.a,{value:"500k+"},"500k+")))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(ne.a,{component:"legend"},"If self employed or 1099 would you be able to furnish tax returns for the previous 2 tax years if a lender were to need necessary tax years if a lender were to need necessary tax documentation in order to write the loan"),r.a.createElement(N.a,{control:r.a.createElement(ue.a,{classes:{switchBase:e.iOSSwitchBase,bar:e.iOSBar,icon:e.iOSIcon,iconChecked:e.iOSIconChecked,checked:e.iOSChecked},disableRipple:!0,checked:i,onChange:this.handleChangeSwitch("w21099"),value:"w21099"}),label:o?"Yes":"No",labelPlacement:o?"start":"end"})))))),r.a.createElement(fe.a,null,r.a.createElement(k.a,{onClick:this.handleCancel,color:"primary"},"Cancel"),r.a.createElement(k.a,{onClick:this.handleOk,color:"primary",disabled:!c},"Ok"))))}}]),a}(r.a.Component),Fe=Object(U.a)(Object(p.withStyles)(function(e){return{form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},formControl:{marginTop:2*e.spacing.unit,minWidth:200},formControlLabel:{marginTop:e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:"100%"},colorSwitchBase:{color:ae.a[300],"&$colorChecked":{color:ae.a[500],"& + $colorBar":{backgroundColor:ae.a[500]}}},colorBar:{},colorChecked:{},iOSSwitchBase:{"&$iOSChecked":{color:e.palette.common.white,"& + $iOSBar":{backgroundColor:Z.a[500]}},transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest,easing:e.transitions.easing.sharp})},iOSChecked:{transform:"translateX(15px)","& + $iOSBar":{opacity:1,border:"none"}},iOSBar:{borderRadius:13,width:42,height:26,marginTop:-13,marginLeft:-21,border:"solid 1px",borderColor:Z.a[400],backgroundColor:_.a[500],opacity:1,transition:e.transitions.create(["background-color","border"])},iOSIcon:{width:24,height:24},iOSIconChecked:{boxShadow:e.shadows[1]}}})(Me)),Re=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={exteriorColor:"",interiorColor:"",checkedBed:!0,checkedHeater:!0,checkedFridge:!0,checkedSatelite:!0,checkedCollision:!0},t.handleChange=function(e){t.setState(Object(K.a)({},e.target.name,e.target.value))},t.handleChangeSwitch=function(e){return function(a){t.setState(Object(K.a)({},e,a.target.checked))}},t.handleSubmit=function(e){},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=document.createElement("a");a.href=window.location.href,a.pathname.split("/").splice(2);var t=a.pathname.split("/").splice(2);return r.a.createElement(F.a,{className:e.root,elevation:1},r.a.createElement(w.a,{component:"span",variant:"h5"},t.map(function(e,a){return a===t.length-1?e:e.replace(/([A-Z])/g," $1").trim()+" "})),r.a.createElement("form",{className:e.root,autoComplete:"off"},r.a.createElement(oe.a,{container:!0,spacing:24},r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(F.a,{className:e.paper},r.a.createElement(D.a,{className:e.formControl},r.a.createElement(ie.a,{htmlFor:"interiorColor"},"interior color"),r.a.createElement(he.a,{value:this.state.interiorColor,onChange:this.handleChange,inputProps:{name:"interiorColor",id:"interiorColor"}},r.a.createElement(se.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(se.a,{value:"blue"},"Blue"),r.a.createElement(se.a,{value:"green"},"Green"),r.a.createElement(se.a,{value:"red"},"Red"))))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(F.a,{className:e.paper},r.a.createElement(D.a,{className:e.formControl},r.a.createElement(ie.a,{htmlFor:"exteriorColor"},"exterior color"),r.a.createElement(he.a,{value:this.state.exteriorColor,onChange:this.handleChange,inputProps:{name:"exteriorColor",id:"exteriorColor"}},r.a.createElement(se.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(se.a,{value:"blue"},"Blue"),r.a.createElement(se.a,{value:"green"},"Green"),r.a.createElement(se.a,{value:"red"},"Red"))))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(F.a,{className:e.paper},r.a.createElement(ne.a,{component:"legend"},"Bed"),r.a.createElement(N.a,{control:r.a.createElement(ue.a,{classes:{switchBase:e.iOSSwitchBase,bar:e.iOSBar,icon:e.iOSIcon,iconChecked:e.iOSIconChecked,checked:e.iOSChecked},disableRipple:!0,checked:this.state.checkedBed,onChange:this.handleChangeSwitch("checkedBed"),value:"checkedBed"}),label:this.state.checkedBed?"King":"Queen",labelPlacement:this.state.checkedBed?"start":"end"}))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(F.a,{className:e.paper},r.a.createElement(ne.a,{component:"legend"},"Water Heater System"),r.a.createElement(N.a,{control:r.a.createElement(ue.a,{classes:{switchBase:e.iOSSwitchBase,bar:e.iOSBar,icon:e.iOSIcon,iconChecked:e.iOSIconChecked,checked:e.iOSChecked},disableRipple:!0,checked:this.state.checkedHeater,onChange:this.handleChangeSwitch("checkedHeater"),value:"checkedHeater"}),label:this.state.checkedHeater?"Tank":"Tankless",labelPlacement:this.state.checkedHeater?"start":"end"}))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(F.a,{className:e.paper},r.a.createElement(ne.a,{component:"legend"},"Fridge"),r.a.createElement(N.a,{control:r.a.createElement(ue.a,{classes:{switchBase:e.iOSSwitchBase,bar:e.iOSBar,icon:e.iOSIcon,iconChecked:e.iOSIconChecked,checked:e.iOSChecked},disableRipple:!0,checked:this.state.checkedFridge,onChange:this.handleChangeSwitch("checkedFridge"),value:"checkedFridge"}),label:this.state.checkedFridge?"RV":"Residential",labelPlacement:this.state.checkedFridge?"start":"end"}))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(F.a,{className:e.paper},r.a.createElement(ne.a,{component:"legend"},"In Motion Satelite"),r.a.createElement(N.a,{control:r.a.createElement(ue.a,{classes:{switchBase:e.iOSSwitchBase,bar:e.iOSBar,icon:e.iOSIcon,iconChecked:e.iOSIconChecked,checked:e.iOSChecked},disableRipple:!0,checked:this.state.checkedSatelite,onChange:this.handleChangeSwitch("checkedSatelite"),value:"checkedSatelite"}),label:this.state.checkedSatelite?"Yes":"No",labelPlacement:this.state.checkedSatelite?"start":"end"}))),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(F.a,{className:e.paper},r.a.createElement(ne.a,{component:"legend"},"Collision Avoidance System"),r.a.createElement(N.a,{control:r.a.createElement(ue.a,{classes:{switchBase:e.iOSSwitchBase,bar:e.iOSBar,icon:e.iOSIcon,iconChecked:e.iOSIconChecked,checked:e.iOSChecked},disableRipple:!0,checked:this.state.checkedCollision,onChange:this.handleChangeSwitch("checkedCollision"),value:"checkedCollision"}),label:this.state.checkedCollision?"Yes":"No",labelPlacement:this.state.checkedCollision?"start":"end"}))),r.a.createElement(oe.a,{item:!0,xs:12},r.a.createElement(Fe,null)))))}}]),a}(n.Component),Ge=Object(p.withStyles)(function(e){return Object(K.a)({root:Object(y.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit}),formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit},colorSwitchBase:{color:ae.a[300],"&$colorChecked":{color:ae.a[500],"& + $colorBar":{backgroundColor:ae.a[500]}}},colorBar:{},colorChecked:{},iOSSwitchBase:{"&$iOSChecked":{color:e.palette.common.white,"& + $iOSBar":{backgroundColor:Z.a[500]}},transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest,easing:e.transitions.easing.sharp})},iOSChecked:{transform:"translateX(15px)","& + $iOSBar":{opacity:1,border:"none"}},iOSBar:{borderRadius:13,width:42,height:26,marginTop:-13,marginLeft:-21,border:"solid 1px",borderColor:Z.a[400],backgroundColor:_.a[500],opacity:1,transition:e.transitions.create(["background-color","border"])},iOSIcon:{width:24,height:24},iOSIconChecked:{boxShadow:e.shadows[1]}},"selectEmpty",{marginTop:2*e.spacing.unit})})(Re),Te=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={exteriorColor:"",interiorColor:"",checkedBed:!0,checkedHeater:!0,checkedFridge:!0,checkedSatelite:!0,checkedCollision:!0},t.handleChange=function(e){t.setState(Object(K.a)({},e.target.name,e.target.value))},t.handleChangeSwitch=function(e){return function(a){t.setState(Object(K.a)({},e,a.target.checked))}},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ge,null))}}]),a}(n.Component),He=Object(p.withStyles)(function(e){return{root:Object(y.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit}),formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit},colorSwitchBase:{color:ae.a[300],"&$colorChecked":{color:ae.a[500],"& + $colorBar":{backgroundColor:ae.a[500]}}},colorBar:{},colorChecked:{},iOSSwitchBase:{"&$iOSChecked":{color:e.palette.common.white,"& + $iOSBar":{backgroundColor:Z.a[500]}},transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest,easing:e.transitions.easing.sharp})},iOSChecked:{transform:"translateX(15px)","& + $iOSBar":{opacity:1,border:"none"}},iOSBar:{borderRadius:13,width:42,height:26,marginTop:-13,marginLeft:-21,border:"solid 1px",borderColor:Z.a[400],backgroundColor:_.a[500],opacity:1,transition:e.transitions.create(["background-color","border"])},iOSIcon:{width:24,height:24},iOSIconChecked:{boxShadow:e.shadows[1]}}})(Te),We=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",manufacturer:"",year:"",model:"",name:"",nextMonthPurchase:!1,other:"",phone:""},t.handleChangeSwitch=function(e){return function(a){t.setState(Object(K.a)({},e,a.target.checked))}},t.handleChange=function(e){return function(a){t.setState(Object(K.a)({},e,a.target.value))}},t.handleSubmit=function(e){Pe.a.post({url:"https://us-central1-winter-agency-229213.cloudfunctions.net/sendgridEmail",form:{name:t.state.name,dieselOrGas:sessionStorage.getItem("dieselOrGas"),email:t.state.email,floorplan:sessionStorage.getItem("floorplan"),manufacturer:sessionStorage.getItem("manufacturer"),model:sessionStorage.getItem("model"),newOrPreowned:sessionStorage.getItem("newOrPreowned"),reason:sessionStorage.getItem("reason"),year:sessionStorage.getItem("year")}},function(e,a,n){sessionStorage.clear(),t.props.history.push("/")})},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state,t=(a.email,a.manufacturer),n=a.year,o=a.model,l=(a.name,a.nextMonthPurchase),i=a.other;a.phone;return r.a.createElement(F.a,{className:e.root,elevation:1},r.a.createElement(w.a,{component:"span",variant:"h5"},"We source all manufacturers and models for our customers so just because what you're looking for is not listed doesn't mean we can't help you locate it.  Please fill out the information below and one of our specialists will be in contact with you immediately.  We look forward to helping you find your new Coach!"),r.a.createElement(D.a,{component:"fieldset"},r.a.createElement(oe.a,{container:!0,spacing:24},r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"manufacturer",label:"Manufacturer",className:e.textField,value:t,onChange:this.handleChange("manufacturer"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"year",label:"Year",className:e.textField,value:n,onChange:this.handleChange("year"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"model",label:"Model",className:e.textField,value:o,onChange:this.handleChange("model"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"other",label:"Other specifications",className:e.textField,value:i,onChange:this.handleChange("other"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"name",label:"Name",className:e.textField,value:i,onChange:this.handleChange("name"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"email",label:"Email",className:e.textField,value:i,onChange:this.handleChange("email"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(Ae.a,{id:"phone",label:"Phone",className:e.textField,value:i,onChange:this.handleChange("phone"),margin:"normal"})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(ne.a,{component:"legend"},"If we find your Coach are you looking to purchase in the next month?"),r.a.createElement(N.a,{control:r.a.createElement(ue.a,{classes:{switchBase:e.iOSSwitchBase,bar:e.iOSBar,icon:e.iOSIcon,iconChecked:e.iOSIconChecked,checked:e.iOSChecked},disableRipple:!0,checked:l,onChange:this.handleChangeSwitch("nextMonthPurchase"),value:"nextMonthPurchase"}),label:l?"Yes":"No",labelPlacement:l?"start":"end"})),r.a.createElement(oe.a,{item:!0,xs:12},r.a.createElement(k.a,{variant:"contained",color:"primary",className:e.button,onClick:this.handleSubmit},"Submit")))))}}]),a}(n.Component),Le=Object(U.a)(Object(p.withStyles)(function(e){return{root:Object(y.a)({},e.mixins.gutters(),{padding:2*e.spacing.unit})}})(We)),Qe=t(653),$e=t(652),Ye=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(Qe.a,{basename:"/motor-coach-direct"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"})),r.a.createElement($e.a,{exact:!0,path:"/",component:V}),r.a.createElement($e.a,{path:"/card",component:He}),r.a.createElement($e.a,{path:"/other",component:Le})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e){e.exports={diesel:{"American Coach":{2018:{"American Dream":["42G","45A","45T"],"American Dream SE":["40J","40L","44M"],"American Eagle":["45A","45N","45C","45T"],"American Revolution":["39B","42D","42S","42P","42G","42Q","42QB"],"American Revolution SE":["40J","40L","44M"]},2019:{"American Dream":["42B","42Q","42S"],"American Eagle":["45A","45C","45T"],"American Eage Heritage Edition":["45A","45C"]}},Entegra:{2018:{Anthem:["42DEQ","42RBQ","44A","44B","44F"],Aspire:["38M","40P","42DEQ","42RBQ","44Q","44R","44U","44W"],Cornerstone:["45A","45B","45F","45W","45X","45Y"],Insignia:["44B","44W"]},2019:{Anthem:["42DEQ","44A","44B","44F","44W"],Aspire:["38M","40M","42DEQ","44B","44R","44W"],Cornerstone:["45A","45B","45F","45W","45X","45Y"],Insignia:["37MB","44B","44R","44W"]}},Tiffin:{2018:{"Allegro Bus":["37AP","40AP","40SP","45MP","45OP","45OPP"],"Allegro Red":["33A","37BA","37PA","38QBA","38QRA"],"Open Road Allegro":["31MA","32SA","34PA","36LA","36UA"],Phaeton:["36GH","37BH","40AH","40QKH","40QBH","40IH","44OH"]},2019:{"Allegro Breeze":["31BR","33BR"],"Allegro Bus":["37AP","40AP","40IP","45MP","45OPP"],"Allegro Red":["33AA","37BA","37PA"],"Open Road Allegro":["31MA","32SA","34PA","36LA","36UA"],Phaeton:["37BH","40AH","40IH","40QBH","40QKH","44OH"],Zephyr:["45MZ","45PZ"]}},Monaco:{2018:{"Monaco Signature":["Ne","40J","44M"],"Monaco Marquis":["40J","40L","44M"]},2019:{"Monaco Signature":["40J","40L","44M","44B"],"Monaco Marquis":["40J","40L","44B","44M"]}},Newmar:{2018:{"Dutch Star":["3718","3736","4002","4018","4052","4310","4311","4326","4362","4369","4327"],Essex:["4531","4534","4537","4553","4596","4536"],"King Aire":["4534","4536","4537","4553","4595","4531"],"London Aire":["4534","4535","4536","4537","4553","4531"],"Mountain Aire":["4531","4524","4525","4536","4537","4553","4047"],"New Aire":["3341","3342"],Ventana:["3407","3412","3436","3709","3715","4002","4037","4046","4049","4310","4311","4326","4369","4308"],"Ventana LE":["3412","3413","3426","3709","3713","4002","4037","4042","4048"]},2019:{"Dutch Star":["3717","3736","4002","4018","4054","4310","4311","4326","4328","4362","4363","4369"],Essex:["4533","4534","4543","4550","4551","4576","4579","4598"],"King Aire":["4531","4533","4534","4546","4549","4550","4553","4598"],"London Aire":["4533","4534","4535","4543","4550","4551","4576","4579"],"Mountain Aire":["4018","4533","4534","4535","4543","4550","4551","4576","4579"],"New Aire":["3341","3343","3345"],Ventana:["3407","3412","3426","3709","3717","4002","4037","4054","4310","4311","4326","4348","4369"],"Ventana LE":["3412","3426","3709","3717","4002","4037","4045","4048"]}},Winnebago:{2018:{Forza:[],Horizon:[],"Grand Tour":[]},2019:{Forza:["34T","36G","38F","38W"],Journey:["36M","40J","42E"],Horizon:["40A","42Q"],Tour:["42QD","45RD"],"Grand Tour":[]}},Fleetwood:{2018:{"Pace Arrow":[],"Pace Arrow LXE":[],Discovery:[],"Discovery LXE":[]},2019:{"Pace Arrow":[],"Pace Arrow LXE":[],Discovery:[],"Discovery LXE":[]}},Dynamax:{2019:{"Force HD":[],DX3:[],"DynaQuest XL":[]}},Other:{}},gas:{}}}},[[276,2,1]]]);
//# sourceMappingURL=main.ea860d9f.chunk.js.map