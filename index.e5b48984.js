!function(){var e,t,n,i,r={};e=r,t="Spinner",n=function(){return a},i=function(e){return a=e},Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0});var o=function(){return o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},s={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},a=function(){function e(e){void 0===e&&(e={}),this.opts=o(o({},s),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),d(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",i="none";!0===t.shadow?i="0 2px 4px #000":"string"==typeof t.shadow&&(i=t.shadow);for(var r=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,r=e.split(",");i<r.length;i++){var o=r[i].match(t);if(null!==o){var s=+o[2],a=+o[5],d=o[4],l=o[7];0!==s||d||(d=l),0!==a||l||(l=d),d===l&&n.push({prefix:o[1]||"",x:s,y:a,xUnits:d,yUnits:l,end:o[8]})}}return n}(i),o=0;o<t.lines;o++){var s=~~(360/t.lines*o+t.rotate),a=d(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:l(t.fadeColor,o),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+t.radius+"px)"}),c=o*t.direction/t.lines/t.speed;c-=1/t.speed;var h=d(document.createElement("div"),{width:"100%",height:"100%",background:l(t.color,o),borderRadius:n,boxShadow:p(r,s),animation:1/t.speed+"s linear "+c+"s infinite "+t.animation});a.appendChild(h),e.appendChild(a)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function d(e,t){for(var n in t)e.style[n]=t[n];return e}function l(e,t){return"string"==typeof e?e:e[t%e.length]}function p(e,t){for(var n=[],i=0,r=e;i<r.length;i++){var o=r[i],s=c(o.x,o.y,t);n.push(o.prefix+s[0]+o.xUnits+" "+s[1]+o.yUnits+o.end)}return n.join(", ")}function c(e,t,n){var i=n*Math.PI/180,r=Math.sin(i),o=Math.cos(i);return[Math.round(1e3*(e*o+t*r))/1e3,Math.round(1e3*(-e*r+t*o))/1e3]}window.onload=function(){var e=document.querySelector(".spinner");setTimeout((function(){e.classList.add("is-closed")}),3e3)};var h=document.querySelector(".gallery-spin");console.log(h),h.innerHTML='<div class="spinner-backdrop"></div>';document.getElementById("spinContainer"),document.querySelector(".spinner-backdrop"),new(0,r.Spinner)({lines:12,length:25,width:19,radius:45,scale:1.2,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#fe5b5b",fadeColor:"transparent",top:"500px",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"})}();
//# sourceMappingURL=index.e5b48984.js.map