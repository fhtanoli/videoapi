(this.webpackJsonptokboxclient=this.webpackJsonptokboxclient||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),c=n.n(i),o=n(17),r=n.n(o),a=(n(25),n(2)),d=n(3),u=n(5),h=n(4),l=(n(26),n(27),n(6)),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.connected?"Connected":"Disconnected";return Object(s.jsxs)("div",{className:"connectionStatus",children:[Object(s.jsx)("strong",{children:"Status:"})," ",e]})}}]),n}(c.a.Component),j=n(18),O=(n(58),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).onChange=function(e){var t=e.currentTarget.checked;s.setState({isChecked:t})},s.state={id:Object(j.uniqueId)("Checkbox"),isChecked:s.props.initialChecked},s}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.isChecked!==this.state.isChecked&&"function"===typeof this.props.onChange&&this.props.onChange(this.state.isChecked)}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("i",{className:"fas fa-phone-volume"}),Object(s.jsx)("label",{htmlFor:this.state.id,children:this.props.label}),Object(s.jsx)("input",{type:"checkbox",checked:this.state.isChecked,id:this.state.id,onChange:this.onChange})]})}}]),n}(c.a.Component)),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).setAudio=function(e){s.setState({audio:e})},s.setVideo=function(e){s.setState({video:e})},s.changeVideoSource=function(e){"camera"!==s.state.videoSource?s.setState({videoSource:"camera"}):s.setState({videoSource:"screen"})},s.onError=function(e){s.setState({error:"Failed to publish: ".concat(e.message)})},s.state={error:null,audio:!1,video:!1,videoSource:"camera"},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"publisher",children:["Publisher",this.state.error?Object(s.jsx)("div",{id:"error",children:this.state.error}):null,Object(s.jsx)(l.OTPublisher,{properties:{publishAudio:this.state.audio,publishVideo:this.state.video,videoSource:"screen"===this.state.videoSource?"screen":void 0},onError:this.onError}),Object(s.jsx)(O,{label:"Share Screen",onChange:this.changeVideoSource}),Object(s.jsx)(O,{label:"Publish Audio",initialChecked:this.state.audio,onChange:this.setAudio}),Object(s.jsx)(O,{label:"Publish Video",initialChecked:this.state.video,onChange:this.setVideo})]})}}]),n}(c.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).setAudio=function(e){s.setState({audio:e})},s.setVideo=function(e){s.setState({video:e})},s.onError=function(e){s.setState({error:"Failed to subscribe: ".concat(e.message)})},s.state={error:null,audio:!1,video:!1},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"subscriber",children:["Subscriber",this.state.error?Object(s.jsx)("div",{id:"error",children:this.state.error}):null,Object(s.jsx)(l.OTSubscriber,{properties:{subscribeToAudio:this.state.audio,subscribeToVideo:this.state.video},onError:this.onError}),Object(s.jsx)(O,{label:"Subscribe to Audio",initialChecked:this.state.audio,onChange:this.setAudio}),Object(s.jsx)(O,{label:"Subscribe to Video",initialChecked:this.state.video,onChange:this.setVideo})]})}}]),n}(c.a.Component),x=n(19),f=n.n(x),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).onError=function(e){s.setState({error:"Failed to connect: ".concat(e.message)})},s.state={error:null,connected:!1},s.sessionEvents={sessionConnected:function(){s.setState({connected:!0})},sessionDisconnected:function(){s.setState({connected:!1})}},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)(l.OTSession,{apiKey:this.props.apiKey,sessionId:this.props.sessionId,token:this.props.token,eventHandlers:this.sessionEvents,onError:this.onError,children:[Object(s.jsx)(b,{connected:this.state.connected,children:f()("Connected")}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(p,{})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(l.OTStreams,{children:Object(s.jsx)(v,{})})})]})})})}}]),n}(c.a.Component),k=Object(l.preloadScript)(m),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),c(e),o(e)}))},C="46977004",N="2_MX40Njk3NzAwNH5-MTYwNDY0OTgyNjAyNX4vaUtUS1RvRlVaR1IyRDRjVVZxdmVEdzJ-fg",g="T1==cGFydG5lcl9pZD00Njk3NzAwNCZzaWc9YjNlZGM2M2QyNmRkM2JjMDAzMmEwZTc2N2QxZjBlNmRmZmIzMzlkYTpzZXNzaW9uX2lkPTJfTVg0ME5qazNOekF3Tkg1LU1UWXdORFkwT1RneU5qQXlOWDR2YVV0VVMxUnZSbFZhUjFJeVJEUmpWVlp4ZG1WRWR6Si1mZyZjcmVhdGVfdGltZT0xNjA0NjQ5ODQ1Jm5vbmNlPTAuODE3MTA5MDUwMTkxMDM2MSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjA3MjQxODQ0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";n(61);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(k,{apiKey:C,sessionId:N,token:g})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.8b6fbdc2.chunk.js.map