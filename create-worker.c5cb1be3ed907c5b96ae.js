"use strict";(this.webpackChunkEsher_light=this.webpackChunkEsher_light||[]).push([[975],{82959:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(67294),a=n(89449),l=n(11390),o=n(32793),s=n(13973),c=n(58074),i=n.n(c),p=n(112),m=n.n(p),u=n(76660);class h extends r.Component{constructor(){super(),this.state={title:null,start:new Date,end:null,pay:null,url:"http://",vesting:7}}shouldComponentUpdate(e,t){return e.currentAccount,this.props.currentAccount,!s.Z.are_equal_shallow(t,this.state)}onSubmit(){l.Z.createWorker(this.state,this.props.currentAccount).catch((e=>{console.log("error",e);let t=e.message&&e.message.length&&e.message.length>0?e.message.split("stack")[0]:"unknown error";u.Notification.error({message:m().translate("notifications.worker_create_failure",{error_msg:t})})}))}render(){return console.log("state:",this.state),r.createElement("div",{className:"grid-block",style:{paddingTop:20}},r.createElement("div",{className:"grid-content large-9 large-offset-3 small-12"},r.createElement(i(),{content:"explorer.workers.create",component:"h3"}),r.createElement("form",{style:{maxWidth:800}},r.createElement(i(),{content:"explorer.workers.create_text_1",component:"p"}),r.createElement(i(),{content:"explorer.workers.create_text_2",component:"p"}),r.createElement("label",null,r.createElement(i(),{content:"explorer.workers.title"}),r.createElement("input",{onChange:e=>{this.setState({title:e.target.value})},type:"text"})),r.createElement(i(),{content:"explorer.workers.name_text",component:"p"}),r.createElement("div",{style:{width:"50%",paddingRight:"2.5%",display:"inline-block"}},r.createElement("label",null,r.createElement(i(),{content:"account.votes.start"}),r.createElement("input",{onChange:e=>{this.setState({start:new Date(e.target.value)})},type:"date"}))),r.createElement("div",{style:{width:"50%",paddingLeft:"2.5%",display:"inline-block"}},r.createElement("label",null,r.createElement(i(),{content:"account.votes.end"}),r.createElement("input",{onChange:e=>{this.setState({end:new Date(e.target.value)})},type:"date"}))),r.createElement(i(),{content:"explorer.workers.date_text",component:"p"}),r.createElement("label",null,r.createElement(i(),{content:"explorer.workers.daily_pay"}),r.createElement("input",{onChange:e=>{this.setState({pay:e.target.value})},type:"number"})),r.createElement(i(),{content:"explorer.workers.pay_text",component:"p"}),r.createElement("label",null,r.createElement(i(),{content:"explorer.workers.website"}),r.createElement("input",{onChange:e=>{this.setState({url:e.target.value})},type:"text"})),r.createElement(i(),{content:"explorer.workers.url_text",component:"p"}),r.createElement("label",null,r.createElement(i(),{content:"explorer.workers.vesting_pay"}),r.createElement("input",{defaultValue:this.state.vesting,onChange:e=>{this.setState({vesting:parseInt(e.target.value)})},type:"number"})),r.createElement(i(),{content:"explorer.workers.vesting_text",component:"p"}),r.createElement("div",{className:"button-group",onClick:this.onSubmit.bind(this)},r.createElement("div",{className:"button",type:"submit"},"Publish")))))}}const g=h=(0,a.$)(h,{listenTo:()=>[o.Z],getProps:()=>({currentAccount:o.Z.getState().currentAccount})})}}]);