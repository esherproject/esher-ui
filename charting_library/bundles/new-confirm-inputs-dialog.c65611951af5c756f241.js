(window.webpackJsonp=window.webpackJsonp||[]).push([["new-confirm-inputs-dialog"],{iqv3:function(t,n,e){"use strict";e.r(n);var o=e("i8i4"),i=e("q1tI"),s=e.n(i),r=(e("bSeV"),e("YFKU"),e("ycFu")),u=e("tWVy"),a=e("tmL0"),l=e("5Ssy"),c=e("tc+8"),f=e.n(c),m=e("aIyQ"),p=e.n(m),d=e("qFKp"),b=e("jOdQ");function y(t){var n=t.title,e=t.studyMetaInfo,o=t.model,c=t.confirmInputsType,m=t.onCancel,y=t.onSubmit,h=t.onClose,_=Object(i.useState)(!0),C=_[0],I=_[1],w=Object(i.useMemo)((function(){var t=Object.assign({},e.defaults.inputs);return new f.a({inputs:t})}),[]),O=Object(i.useMemo)((function(){var t=new p.a;return{isInputsStudy:!0,symbolsResolved:function(){return t},resolvedSymbolInfoBySymbol:function(){return null}}}),[]),S=Object(i.useRef)(null);return Object(i.useEffect)((function(){if(!d.CheckMobile.any()&&C&&"symbol"===c&&S.current){var t=S.current.querySelector("input");t&&t.focus()}}),[C]),s.a.createElement(r.a,{dataName:"confirm-inputs-dialog",title:n,isOpened:C,onSubmit:function(){y(w.state().inputs),E()},onCancel:m,onClickOutside:E,onClose:E,render:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:b.separator}),s.a.createElement(a.a,{className:b.scrollable,onScroll:v},s.a.createElement(l.a,{reference:S,property:w,model:o,study:O,inputs:"symbol"===c?e.inputs.filter((function(t){return t.id===e.symbolInputId()})):e.inputs.filter((function(t){return t.confirm}))})))},defaultActionOnClose:r.b.None,submitButtonText:window.t("Apply"),submitOnEnterKey:!1});function v(){u.a.fire()}function E(){I(!1),h()}}e.d(n,"ConfirmInputsDialogRenderer",(function(){return h}));var h=function(){function t(t,n,e,i,s,r){var u=this;this._container=document.createElement("div"),this._handleClose=function(){o.unmountComponentAtNode(u._container),u._onClose()},this._title=t,this._studyMetaInfo=n,this._model=e,this._confirmInputsType=i,this._onSubmit=s,this._onClose=r}return t.prototype.show=function(){o.render(i.createElement(y,{title:this._title,studyMetaInfo:this._studyMetaInfo,model:this._model,confirmInputsType:this._confirmInputsType,onSubmit:this._onSubmit,onCancel:function(){},onClose:this._handleClose}),this._container)},t}()},jOdQ:function(t,n,e){t.exports={separator:"separator-1fBbiGH4",scrollable:"scrollable-1was6mON"}}}]);