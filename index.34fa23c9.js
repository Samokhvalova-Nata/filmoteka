!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired76b;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired76b=a),a.register("dNYR7",(function(t,r){var n,i,o,s;n=t.exports,i="api",o=function(){return x},Object.defineProperty(n,i,{get:o,set:s,enumerable:!0,configurable:!0});var c=a("bpxeT"),u=a("8MBJY"),p=a("4KMWL"),l=a("8MQK7"),f=a("dPxxm"),v=a("a2hTj"),h=a("hKHmD"),d=a("2TvXO"),g=a("dIxxU"),w=new WeakMap,b=new WeakMap,m=new WeakMap,k=new WeakMap,x=new(function(){"use strict";function t(){e(u)(this,t),e(l)(this,w,{writable:!0,value:"week"}),e(l)(this,b,{writable:!0,value:"Avatar"}),e(l)(this,m,{writable:!0,value:"https://api.themoviedb.org/3/"}),e(l)(this,k,{writable:!0,value:"169863a84bc27c731fc45c45dd4a4a7e"}),e(h)(this,"backEndConfig",{test:0}),e(h)(this,"poster_sizes",["w92","w154","w185","w342","w500","w780","original"]),this.fetchConf()}return e(v)(t,[{key:"fetchMovie",value:function(t,r){var n=this;return e(c)(e(d).mark((function a(){var i,o;return e(d).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r&&e(f)(n,b,r),a.prev=1,i="".concat(e(p)(n,m),"/search/movie?api_key=").concat(e(p)(n,k),"&language=en-US&page=").concat(t,"&query=").concat(e(p)(n,b)),a.next=5,g.default.get(i);case 5:return o=a.sent,a.abrupt("return",o.data);case 9:throw a.prev=9,a.t0=a.catch(1),new Error(a.t0.message);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()}},{key:"fetchPopMovies",value:function(t){var r=this;return e(c)(e(d).mark((function n(){var a,i;return e(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a="".concat(e(p)(r,m),"trending/movie/").concat(e(p)(r,w),"?api_key=").concat(e(p)(r,k),"&page=").concat(t),n.next=4,g.default.get(a);case 4:return i=n.sent,n.abrupt("return",i.data);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}},{key:"fetchMovieInfo",value:function(t){var r=this;return e(c)(e(d).mark((function n(){var a,i;return e(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a="".concat(e(p)(r,m),"movie/").concat(t,"?api_key=").concat(e(p)(r,k),"&language=en-US"),n.next=4,g.default.get(a);case 4:return i=n.sent,n.abrupt("return",i.data);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}},{key:"fetchGenres",value:function(){var t=this;return e(c)(e(d).mark((function r(){var n,a;return e(d).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(e(p)(t,m),"genre/movie/list?api_key=").concat(e(p)(t,k),"&language=en-US"),r.prev=1,r.next=4,g.default.get(n);case 4:return a=r.sent.data,r.abrupt("return",a);case 8:throw r.prev=8,r.t0=r.catch(1),new Error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()}},{key:"fetchConf",value:function(){var t=this;return e(c)(e(d).mark((function r(){var n,a;return e(d).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(e(p)(t,m),"configuration?api_key=").concat(e(p)(t,k)),r.prev=1,r.next=4,g.default.get(n);case 4:return a=r.sent,t.backEndConfig=a.data,r.abrupt("return",a.data);case 9:throw r.prev=9,r.t0=r.catch(1),new Error(r.t0.message);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}},{key:"getPosterSize",value:function(e){for(var t=0;t<this.poster_sizes.length;t+=1)if(e<=Number(this.poster_sizes[t].slice(1)))return this.poster_sizes[t];return this.poster_sizes[this.poster_sizes.length-1]}},{key:"togglePeriod",value:function(){return e(f)(this,w,"week"===e(p)(this,w)?"day":"week"),e(p)(this,w)}}]),t}())})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i=a("bpxeT"),o=a("2TvXO"),s=a("jcFG7"),c=a("twtVq"),u=a("lOe7j"),p=a("dNYR7"),l=a("lEY6y"),f=document.querySelector(".film__gallery"),v=p.api.getPosterSize(342);function h(e){return d.apply(this,arguments)}function d(){return(d=e(i)(e(o).mark((function t(r){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.api.fetchPopMovies(r);case 3:n=e.sent,f.innerHTML=g(n.results,v),s.pagination.setTotalItems(n.total_results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("ERROR! ",e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(e,t){return e.map((function(e){var r=e.poster_path,n=e.title,a=e.genre_ids,i=e.release_date,o=e.id;return(0,l.getTemplateCard)({title:n,genresStr:c.genres.getSome(a),release_year:i.slice(0,4),poster_path:r,poster_size:t,id:o})})).join("")}(0,u.heightMax)(),h(1),s.pagination.on("afterMove",(function(){return h(s.pagination._currentPage)}))}();
//# sourceMappingURL=index.34fa23c9.js.map
