(this.webpackJsonpprojektipaja=this.webpackJsonpprojektipaja||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),s=n(6),r=n.n(s),i=n(1),l=n(2),c=n(4),p=n(3),m=n(7),h=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).state={active:!1},o}return Object(l.a)(n,[{key:"toggleClass",value:function(){var t=this.state.active;this.setState({active:!t})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:this.state.active?"Button open":"Button",style:this.props.style,onClick:function(){Object(m.a)(document.querySelectorAll(".Button.open")).map((function(t){return t.click()})),t.setState({active:!t.state.active})}},a.a.createElement("a",{title:this.props.hoverInfo},a.a.createElement("img",{src:this.props.img,alt:"Content Box"})),a.a.createElement(u,{type:this.props.type,content:this.props.content,contentStyle:this.props.contentStyle}))}}]),n}(a.a.Component),u=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).state={},o}return Object(l.a)(n,[{key:"render",value:function(){switch(this.props.type){case"text":return a.a.createElement("div",{className:"contentBox",style:this.props.contentStyle},this.props.content);case"iframe":return a.a.createElement("iframe",{title:this.props.hoverInfo,className:"contentBox",style:this.props.contentStyle,width:"560",height:"315",src:this.props.content,allowFullScreen:!0});case"image":return a.a.createElement("img",{title:this.props.hoverInfo,alt:this.props.hoverInfo,className:"contentBox",src:this.props.content,style:this.props.contentStyle});case"slides":return a.a.createElement("iframe",{src:this.props.content,title:this.props.hoverInfo,className:"contentBox",style:this.props.contentStyle,frameBorder:"0",width:"480",height:"299",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true"});default:throw new Error('Invalid Button Type - must be "text", "iframe" or "image"')}}}]),n}(a.a.Component),f=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"main"},a.a.createElement(h,{img:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Group_font_awesome.svg",style:{left:"15%",top:"57%",transform:"translate(-50%, -50%)"},type:"slides",hoverInfo:"Ryhm\xe4ytt\xe4minen",contentStyle:{margin:"-150px 100px"},content:"https://docs.google.com/presentation/d/e/2PACX-1vT3reFsprMQH9rFI9rROMjQiMLkTtT1V0dTGPNdOY1LeoBZ02RCBIVpn_QFol3Rlw87L7yqfQ3OhS0P/embed?start=false&loop=false&delayms=15000"}),a.a.createElement(h,{img:"https://icon-library.com/images/info-icon-svg/info-icon-svg-27.jpg",style:{left:"48.5vw",top:"27vh",transform:"translate(-50%, -50%)"},type:"slides",hoverInfo:"Infoa IOVT:st\xe4",contentStyle:{margin:"0 -200px "},content:"https://docs.google.com/presentation/d/e/2PACX-1vQBWvGXfHpje0w_bnQinYYtx2z2CfTHZnkNy606IqN2V7N2sJTtBAqyHDVOHaboyu7_3Hn3KspEZTX-/embed?start=false&loop=false&delayms=15000"}),a.a.createElement(h,{img:"http://simpleicon.com/wp-content/uploads/camera.png",style:{left:"35%",top:"40%",transform:"translate(-50%, -50%)"},contentStyle:{width:"auto",height:"500px",margin:"-250px 70px"},type:"image",hoverInfo:"Posteri",content:"https://i.imgur.com/XNDsEp8.jpg"}),a.a.createElement(h,{img:"https://i.imgur.com/OAC7N2v.png",style:{left:"50%",top:"45%",transform:"translate(-50%, -50%)"},contentStyle:{margin:"-100px 60px"},type:"iframe",hoverInfo:"Esitysvideo",content:"https://www.youtube.com/embed/B1YV_1KzVwA"}),a.a.createElement(h,{img:"https://i.imgur.com/OAC7N2v.png",style:{left:"80%",top:"62%",transform:"translate(-50%, -50%)"},contentStyle:{margin:"-200px -530px"},type:"iframe",hoverInfo:"Video",content:"https://www.youtube.com/embed/WlterZVnGDA"}),a.a.createElement(h,{img:"https://i.imgur.com/BgYdbVL.png",style:{left:"20%",top:"15%",transform:"translate(-50%, -50%)"},type:"slides",hoverInfo:"Aikatauluttaminen",contentStyle:{},content:"https://docs.google.com/presentation/d/e/2PACX-1vTEub7axS1Mg56nJclLZqfXiLEqoQxIEkOpLu7mMQtYZSm3On7VuWS9FzZtmhwe_pnrVOm-j6I1ym4i/embed?start=false&loop=false&delayms=15000"}),a.a.createElement(h,{img:"https://image.flaticon.com/icons/png/512/1600/1600977.png",style:{left:"20%",top:"25%",transform:"translate(-50%, -50%)"},type:"slides",hoverInfo:"Tietoteknilliset  taidot",contentStyle:{},content:"https://docs.google.com/presentation/d/e/2PACX-1vTcVjRnCRg_DDaV1hcJ4Zt1rjVVbX9_Jp0JFOooHUB7Q50mIHbBu1H_3zGsBK5EngV-_7Qvxk8RaORL/embed?start=false&loop=false&delayms=15000"}),a.a.createElement(h,{img:"https://i.imgur.com/FPplNxJ.png",style:{left:"65%",top:"15%",transform:"translate(-50%, -50%)"},type:"slides",hoverInfo:"Johtajuus",contentStyle:{margin:"0 -500px"},content:"https://docs.google.com/presentation/d/e/2PACX-1vScLhrnVZhFUJLPTgXKztmza54HCZEjSP9kqE0UR8z_6n4Yh9aRKOdMXMyQHh5LcVw7o3Yr_g5CfoaP/embed?start=false&loop=false&delayms=15000&slide=id.p"}))}}]),n}(a.a.Component);n(13),n(14);var g=function(){return a.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b1e3bd68.chunk.js.map