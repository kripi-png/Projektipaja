(this.webpackJsonpprojektipaja=this.webpackJsonpprojektipaja||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),i=o(6),r=o.n(i),c=o(1),s=o(2),l=o(4),p=o(3),u=o(7),m=function(t){Object(l.a)(o,t);var e=Object(p.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).state={active:!1},n}return Object(s.a)(o,[{key:"toggleClass",value:function(){var t=this.state.active;this.setState({active:!t})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:this.state.active?"Button open":"Button",style:this.props.style,onClick:function(){Object(u.a)(document.querySelectorAll(".Button.open")).map((function(t){return t.click()})),t.setState({active:!t.state.active})}},a.a.createElement("a",{title:this.props.hoverInfo},a.a.createElement("img",{src:this.props.img,alt:"Content Box"})),a.a.createElement(h,{type:this.props.type,content:this.props.content,contentStyle:this.props.contentStyle}))}}]),o}(a.a.Component),h=function(t){Object(l.a)(o,t);var e=Object(p.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).state={},n}return Object(s.a)(o,[{key:"render",value:function(){switch(this.props.type){case"text":return a.a.createElement("div",{className:"contentBox",style:this.props.contentStyle},this.props.content);case"iframe":return a.a.createElement("iframe",{title:this.props.hoverInfo,className:"contentBox",style:this.props.contentStyle,width:"420",height:"315",src:this.props.content,allowFullScreen:!0});case"image":return a.a.createElement("img",{title:this.props.hoverInfo,alt:this.props.hoverInfo,className:"contentBox",src:this.props.content,style:this.props.contentStyle});default:throw new Error('Invalid Button Type - must be "text", "iframe" or "image"')}}}]),o}(a.a.Component),d=function(t){Object(l.a)(o,t);var e=Object(p.a)(o);function o(){return Object(c.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("div",{className:"main"},a.a.createElement(m,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png",style:{left:"2%",top:"5%"},type:"text",hoverInfo:"Teksti\xe4",contentStyle:{backgroundColor:"#820081",fontSize:"1.2em",padding:".75em",border:"1px solid #000"},content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),a.a.createElement(m,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png",style:{left:"20%",top:"25%"},contentStyle:{width:"auto",height:"300px"},type:"image",hoverInfo:"kuva",content:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}),a.a.createElement(m,{img:"https://i.imgur.com/RgYSq9J.gif",style:{left:"66.5%",top:"12.2%",transform:"translate(-50%, -50%)",width:"4em"},contentStyle:{margin:"0 0 0 -500px"},type:"iframe",hoverInfo:"youtube-video",content:"https://www.youtube.com/embed/dQw4w9WgXcQ"}),a.a.createElement(m,{img:"https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg",style:{left:"90%",top:"25%"},contentStyle:{margin:"0 0 0 -500px"},type:"iframe",hoverInfo:"Joku artikkeli",content:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}))}}]),o}(a.a.Component);o(13),o(14);var g=function(){return a.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,o){t.exports=o(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.861ca763.chunk.js.map