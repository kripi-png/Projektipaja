(this.webpackJsonpprojektipaja=this.webpackJsonpprojektipaja||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(6),c=n.n(a),r=n(1),s=n(2),l=n(4),p=n(3),u=n(7),m=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={active:!1},i}return Object(s.a)(n,[{key:"toggleClass",value:function(){var t=this.state.active;this.setState({active:!t})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:this.state.active?"Button open":"Button",style:this.props.style,onClick:function(){Object(u.a)(document.querySelectorAll(".Button.open")).map((function(t){return t.click()})),t.setState({active:!t.state.active})}},o.a.createElement("img",{src:this.props.img,alt:"Content Box"}),o.a.createElement(d,{type:this.props.type,content:this.props.content,contentStyle:this.props.contentStyle}))}}]),n}(o.a.Component),d=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={},i}return Object(s.a)(n,[{key:"render",value:function(){return"text"===this.props.type?o.a.createElement("div",{className:"contentBox",style:this.props.contentStyle},this.props.content):"iframe"===this.props.type?o.a.createElement("iframe",{title:"asd",className:"contentBox",style:this.props.contentStyle,width:"420",height:"315",src:this.props.content,allowFullScreen:!0}):"image"===this.props.type?o.a.createElement("img",{className:"contentBox",src:this.props.content,style:this.props.contentStyle}):void 0}}]),n}(o.a.Component),h=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement(m,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png",style:{left:"2%",top:"5%"},type:"text",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),o.a.createElement(m,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png",style:{left:"20%",top:"25%"},contentStyle:{width:"auto",height:"300px"},type:"image",content:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}),o.a.createElement(m,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/YouTube_social_white_circle_%282017%29.svg/1024px-YouTube_social_white_circle_%282017%29.svg.png",style:{left:"50%",top:"30%"},contentStyle:{margin:"0 0 0 -500px"},type:"iframe",content:"https://www.youtube.com/embed/dQw4w9WgXcQ"}),o.a.createElement(m,{img:"https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg",style:{left:"90%",top:"25%"},contentStyle:{margin:"0 0 0 -500px"},type:"iframe",content:"https://en.wikipedia.org/wiki/Rickrolling"}))}}]),n}(o.a.Component);n(13),n(14);var g=function(){return o.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e3cb3f82.chunk.js.map