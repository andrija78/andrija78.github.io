!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t,n){(function(e){var l=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},l=0;l<t.length;l++)n[t[l]]=Object.getOwnPropertyDescriptor(e,t[l]);return n},r=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(o(arguments[n]));return t.join(" ")}n=1;for(var l=arguments,a=l.length,s=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(l[n++]);case"%d":return Number(l[n++]);case"%j":try{return JSON.stringify(l[n++])}catch(e){return"[Circular]"}default:return e}})),i=l[n];n<a;i=l[++n])f(i)||!w(i)?s+=" "+i:s+=" "+o(i);return s},t.deprecate=function(n,l){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,l).apply(this,arguments)};var r=!1;return function(){if(!r){if(e.throwDeprecation)throw new Error(l);e.traceDeprecation?console.trace(l):console.error(l),r=!0}return n.apply(this,arguments)}};var a,s={};function o(e,n){var l={seen:[],stylize:u};return arguments.length>=3&&(l.depth=arguments[2]),arguments.length>=4&&(l.colors=arguments[3]),y(n)?l.showHidden=n:n&&t._extend(l,n),g(l.showHidden)&&(l.showHidden=!1),g(l.depth)&&(l.depth=2),g(l.colors)&&(l.colors=!1),g(l.customInspect)&&(l.customInspect=!0),l.colors&&(l.stylize=i),d(l,e,l.depth)}function i(e,t){var n=o.styles[t];return n?"["+o.colors[n][0]+"m"+e+"["+o.colors[n][1]+"m":e}function u(e,t){return e}function d(e,n,l){if(e.customInspect&&n&&v(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(l,e);return b(r)||(r=d(e,r,l)),r}var a=function(e,t){if(g(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(_(t))return e.stylize(""+t,"number");if(y(t))return e.stylize(""+t,"boolean");if(f(t))return e.stylize("null","null")}(e,n);if(a)return a;var s=Object.keys(n),o=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),x(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return h(n);if(0===s.length){if(v(n)){var i=n.name?": "+n.name:"";return e.stylize("[Function"+i+"]","special")}if(m(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(C(n))return e.stylize(Date.prototype.toString.call(n),"date");if(x(n))return h(n)}var u,w="",E=!1,P=["{","}"];(c(n)&&(E=!0,P=["[","]"]),v(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return m(n)&&(w=" "+RegExp.prototype.toString.call(n)),C(n)&&(w=" "+Date.prototype.toUTCString.call(n)),x(n)&&(w=" "+h(n)),0!==s.length||E&&0!=n.length?l<0?m(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),u=E?function(e,t,n,l,r){for(var a=[],s=0,o=t.length;s<o;++s)O(t,String(s))?a.push(p(e,t,n,l,String(s),!0)):a.push("");return r.forEach((function(r){r.match(/^\d+$/)||a.push(p(e,t,n,l,r,!0))})),a}(e,n,l,o,s):s.map((function(t){return p(e,n,l,o,t,E)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(u,w,P)):P[0]+w+P[1]}function h(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,l,r,a){var s,o,i;if((i=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]}).get?o=i.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):i.set&&(o=e.stylize("[Setter]","special")),O(l,r)||(s="["+r+"]"),o||(e.seen.indexOf(i.value)<0?(o=f(n)?d(e,i.value,null):d(e,i.value,n-1)).indexOf("\n")>-1&&(o=a?o.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+o.split("\n").map((function(e){return"   "+e})).join("\n")):o=e.stylize("[Circular]","special")),g(s)){if(a&&r.match(/^\d+$/))return o;(s=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+o}function c(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function f(e){return null===e}function _(e){return"number"==typeof e}function b(e){return"string"==typeof e}function g(e){return void 0===e}function m(e){return w(e)&&"[object RegExp]"===E(e)}function w(e){return"object"==typeof e&&null!==e}function C(e){return w(e)&&"[object Date]"===E(e)}function x(e){return w(e)&&("[object Error]"===E(e)||e instanceof Error)}function v(e){return"function"==typeof e}function E(e){return Object.prototype.toString.call(e)}function P(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(g(a)&&(a=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(a)){var l=e.pid;s[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,l,e)}}else s[n]=function(){};return s[n]},t.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=c,t.isBoolean=y,t.isNull=f,t.isNullOrUndefined=function(e){return null==e},t.isNumber=_,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=g,t.isRegExp=m,t.isObject=w,t.isDate=C,t.isError=x,t.isFunction=v,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(17);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function N(){var e=new Date,t=[P(e.getHours()),P(e.getMinutes()),P(e.getSeconds())].join(":");return[e.getDate(),S[e.getMonth()],t].join(" ")}function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",N(),t.format.apply(t,arguments))},t.inherits=n(18),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),l=n.length;l--;)e[n[l]]=t[n[l]];return e};var T="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function j(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(T&&e[T]){var t;if("function"!=typeof(t=e[T]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,l=new Promise((function(e,l){t=e,n=l})),r=[],a=0;a<arguments.length;a++)r.push(arguments[a]);r.push((function(e,l){e?n(e):t(l)}));try{e.apply(this,r)}catch(e){n(e)}return l}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),T&&Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,l(e))},t.promisify.custom=T,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],l=0;l<arguments.length;l++)n.push(arguments[l]);var r=n.pop();if("function"!=typeof r)throw new TypeError("The last argument must be of type Function");var a=this,s=function(){return r.apply(a,arguments)};t.apply(this,n).then((function(t){e.nextTick(s,null,t)}),(function(t){e.nextTick(j,t,s)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,l(t)),n}}).call(this,n(7))},function(e,t,n){"use strict";e.exports=class{constructor(e){this.card=e}hash(){return this.card.toString()}}},function(e,t){e.exports=function(e){return{suite:["BASTONE","DINARE","KUPE","SPADE"][(e.card-e.card%100)/100-1],value:["AS","DUJA","TRICA","CETVORINA","PETINA","SESTINA","SEDMINA","OSMINA","DEVETKA","DESETKA","FANAT","KONJ","KRALJ"][e.card%100-1]}}},function(e,t,n){"use strict";(function(e){n(0);var l=n(9),r=n(4),a=n.n(r),s=n(1),o=n.n(s),i=n(2),u=n.n(i),d=n(10),h=n(6),p=n(13),c=n(15);const y=e.env.DEFAULT_MCTS_TIMEOUT||5;t.a=async function(e,t){let n,r=new l.a;if("kifameno3"===e.state.type)n=new c.a(r);else switch(e.algorithm){case"mcts":n=new h.a(r);break;case"mcts-1":n=new d.a(r);break;case"mcts-2":n=new h.a(r);break;case"mcts-3":n=new p.a(r)}let s,i=new a.a([],e.state,e.state.player),f=r.winner(i);if(null===f){let t=r.legalPlays(i);if(1===t.length)return s=t[0],console.log(e.algorithm," - Plays 0 - single play!"),u()(s)}if(null===f){let t=i.board.playerCards[i.player],l=t.cards.concat(t.optionalCards);if(1===l.length)s=new o.a(l[0]);else{n.runSearch(i,e.mcts_timeout||y);s=n.bestPlay(i,"max")}}let _=-1;return null!=s&&(_=u()(s)),_}}).call(this,n(7))},function(e,t,n){"use strict";e.exports=class{constructor(e,t,n){this.playHistory=e,this.board=t,this.player=n,this._hash=e.map(e=>e.card).join("-")}isPlayer(e){return 0===e&&(0===this.player||2===this.player)||1===e&&(1===this.player||3===this.player)}isPlayerK3(e){return this.player===e}hash(){return this._hash}}},function(e,t,n){"use strict";e.exports=class{constructor(e){this.card=e}hash(){return this.card.toString()}}},function(e,t,n){"use strict";var l=n(0),r=n(12),a=n.n(r);t.a=class{constructor(e,t=2){this.game=e,this.UCB1ExploreParam=t,this.nodes=new Map}makeNode(e){if(!this.nodes.has(e.hash())){let t=this.game.legalPlays(e).slice(),n=new a.a(null,null,e,t);this.nodes.set(e.hash(),n)}}runSearch(e,t=3){this.makeNode(e);let n=0,l=0,r=Date.now()+1e3*t;for(;Date.now()<r;){let t=this.select(e),r=this.game.winner(t.state);!1===t.isLeaf()&&null===r&&(t=this.expand(t),r=this.simulate(t)),this.backpropagate(t,r),-1===r.winner&&n++,l++}return{runtime:t,simulations:l,draws:n}}bestPlay(e,t="robust"){if(this.makeNode(e),!1===this.nodes.get(e.hash()).isFullyExpanded())throw console.log(Object(l.inspect)(e,{showHidden:!1,depth:null})),new Error("Not enough information!");let n=this.nodes.get(e.hash());"robust"===t&&this.isFullyExpanded(n)&&(t="max");let r,a=n.allPlays();if("robust"===t){let e=-1/0;for(let t of a){let l=n.childNode(t);l.n_plays>e&&(r=t,e=l.n_plays)}}else if("max"===t){let e=-1/0;for(let t of a){let l=n.childNode(t),a=l.n_belle_won/(l.n_belle_won+l.n_belle_lost);a>e&&(r=t,e=a)}}return r}select(e){let t=this.nodes.get(e.hash());for(;t.isFullyExpanded()&&!t.isLeaf();){let e,n=t.allPlays(),l=-1/0;for(let r of n){let n=t.childNode(r).getUCB1(this.UCB1ExploreParam);n>l&&(e=r,l=n)}t=t.childNode(e)}return t}expand(e){let t=e.unexpandedPlays(),n=t[Math.floor(Math.random()*t.length)],l=this.game.nextState(e.state,n),r=this.game.legalPlays(l),a=e.expand(n,l,r);return this.nodes.set(l.hash(),a),a}simulate(e){let t=e.state,n=this.game.winner(t);for(;null===n;){let e=this.game.legalPlays(t),l=e[Math.floor(Math.random()*e.length)];t=this.game.nextState(t,l),n=this.game.winner(t)}return n}backpropagate(e,t){for(;null!==e;)e.n_plays++,null!==e.parent&&(e.parent.state.isPlayer(t.winner)&&e.n_wins++,e.n_belle_won+=[t.team0,t.team1,t.team0,t.team1][e.parent.state.player],e.n_belle_lost+=[t.team1,t.team0,t.team1,t.team0][e.parent.state.player]),e=e.parent}getStats(e){let t=this.nodes.get(e.hash()),n={n_plays:t.n_plays,n_wins:t.n_wins,n_belle_won:t.n_belle_won,n_belle_lost:t.n_belle_lost,n_win_ratio:t.n_plays>0?t.n_wins/t.n_plays:null,n_belle_ratio:t.n_belle_won+t.n_belle_lsot>0?t.n_belle_won/(t.n_belle_won+t.n_belle_lost):null,children:[]};for(let e of t.children.values())null===e.node?n.children.push({play:e.play,n_plays:null,n_wins:null}):n.children.push({play:e.play,n_plays:e.node.n_plays,n_wins:e.node.n_wins,n_belle_won:e.node.n_belle_won,n_belle_lost:e.node.n_belle_lost,n_win_ratio:e.node.n_plays>0?e.node.n_wins/e.node.n_plays:null,n_belle_ratio:e.node.n_belle_won+e.node.n_belle_lost>0?e.node.n_belle_won/(e.node.n_belle_won+e.node.n_belle_lost):null});return n}getTreeStats(e,t=null){let n=this.nodes.get(e.hash()),l={n_plays:n.n_plays,n_wins:n.n_wins,n_win_ratio:n.n_plays>0?n.n_wins/n.n_plays:null,n_belle_won:n.n_belle_won,n_belle_lost:n.n_belle_lost,n_belle_ratio:n.n_belle_won+n.n_belle_lost>0?n.n_belle_won/(n.n_belle_won+n.n_belle_lost):null,node_play_history:this.getNodeHistory(n),children:[]};null==t&&(t={...l});for(let e of n.children.values())null===e.node?t.children.push({play:e.play,n_plays:null,n_wins:null}):this.getTreeStats(e.node.state,l);return t.children.push(l),t}getNodeHistory(e){try{return e.state.playHistory.map(e=>e.card).join("-")}catch(e){return null}}isFullyExpanded(e){if(!e.isFullyExpanded())return!1;for(let t of e.children.values())if(!this.isFullyExpanded(t.node))return!1;return!0}}},function(e,t){var n,l,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{l="function"==typeof clearTimeout?clearTimeout:s}catch(e){l=s}}();var i,u=[],d=!1,h=-1;function p(){d&&i&&(d=!1,i.length?u=i.concat(u):h=-1,u.length&&c())}function c(){if(!d){var e=o(p);d=!0;for(var t=u.length;t;){for(i=u,u=[];++h<t;)i&&i[h].run();h=-1,t=u.length}i=null,d=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===s||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new y(e,t)),1!==u.length||d||o(c)},y.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t){e.exports=class{constructor(e){this.game=e}getRandomInt(e){return Math.floor(Math.random()*Math.floor(e))}bestPlay(e){let t=this.game.legalPlays(e);return t[this.getRandomInt(t.length)]}}},function(e,t,n){"use strict";n(0);var l=n(4),r=n.n(l),a=n(1),s=n.n(a);t.a=class{legalPlays(e){const t=(e,t)=>e>=t&&e<=t+99;let n=4;"kifameno3"===e.board.type&&(n=3);let l=[],r=e.board.playerCards[e.player],a=[...r.cards,...r.optionalCards];if(0===e.board.table.length)return l=a.map(e=>new s.a(e)),l;let o=(i=e.board.table[0])-i%100;var i;if(r.cards.some(e=>t(e,o)))return a=a.filter(e=>t(e,o)),l=a.map(e=>new s.a(e)),l;if(e.player===e.board.playerId)return l=a.map(e=>new s.a(e)),l;let u=!1;if(r.optionalCards.some(e=>t(e,o))){let l,s,i,d=a.filter(e=>!t(e,o));if(d.length<e.board.playerCards[e.player].cardsCount&&(u=!0),3===n){if(!u){l=[0,1,2],l.splice(e.player,1);let t=l.indexOf(e.board.playerId);l.splice(t,1);let n=[...e.board.playerCards[l[0]].cards,...e.board.playerCards[l[0]].optionalCards];[...new Set([...d,...n])].length<e.board.playerCards[l[0]].cardsCount+r.cardsCount&&(u=!0)}}else{if(!u){l=[0,1,2,3],l.splice(e.player,1);let t=l.indexOf(e.board.playerId);l.splice(t,1),s=[...e.board.playerCards[l[0]].cards,...e.board.playerCards[l[0]].optionalCards],i=[...e.board.playerCards[l[1]].cards,...e.board.playerCards[l[1]].optionalCards]}let t,n,a;u||(t=[...new Set([...d,...s])],t.length<e.board.playerCards[l[0]].cardsCount+r.cardsCount&&(u=!0)),u||(n=[...new Set([...d,...i])],n.length<e.board.playerCards[l[1]].cardsCount+r.cardsCount&&(u=!0)),u||(a=[...new Set([...t,...i])],a.length<e.board.playerCards[l[0]].cardsCount+e.board.playerCards[l[1]].cardsCount+r.cardsCount&&(u=!0))}}return u&&(a=a.filter(e=>t(e,o))),l=a.map(e=>new s.a(e)),l}isStrongerCard(e,t){let n=t-t%100;if(!(e>=n&&e<=n+99))return!1;let l=e%100,r=t%100;return l<=3&&(l+=10*l+10),r<=3&&(r+=10*r+10),l>r}strongestCard(e){let t=0;return e.forEach((n,l)=>{this.isStrongerCard(n,e[t])&&(t=l)}),t}countBelle(e){let t=0;return e.forEach(e=>{let n=e%100;1===n&&(t+=3),2!==n&&3!==n&&11!==n&&12!==n&&13!==n||t++}),t}hasRemainingCards(e){for(let t of e.playerCards)if(t.cardsCount>0)return!0;return!1}boardCopyOld(e){return JSON.parse(JSON.stringify(e))}boardCopy(e){return{matchId:e.matchId,type:e.type,playerId:e.playerId,table:[...e.table],playerCards:e.playerCards.map(e=>new Object({cards:[...e.cards],optionalCards:[...e.optionalCards],cardsCount:e.cardsCount})),teams:e.teams.map(e=>new Object({collectedCards:[...e.collectedCards],belle:e.belle})),player:e.player}}nextState(e,t){let n,l=e.playHistory.slice();l.push(t);let a=this.boardCopy(e.board);a.playerCards[a.player].cardsCount--,a.table.push(t.card);let s=4;if("kifameno3"===e.board.type&&(s=3),e.player===e.board.playerId&&e.playHistory.length>0)a.playerCards[e.player].cards=a.playerCards[e.player].cards.filter(e=>e!==t.card);else{a.playerCards.forEach((e,n)=>{a.playerCards[n].cards=a.playerCards[n].cards.filter(e=>e!==t.card),a.playerCards[n].optionalCards=a.playerCards[n].optionalCards.filter(e=>e!==t.card)});let n=a.table[0]-a.table[0]%100;const l=e=>!(e>=n&&e<=n+99);l(t.card)&&(a.playerCards[a.player].cards=a.playerCards[a.player].cards.filter(l),a.playerCards[a.player].optionalCards=a.playerCards[a.player].optionalCards.filter(l)),a.playerCards.forEach((t,n)=>{if(n!==e.board.playerId&&t.cards.length+t.optionalCards.length===t.cardsCount){let l=[...t.optionalCards];a.playerCards[n].cards.push(...l),a.playerCards[n].optionalCards=[],a.playerCards.forEach((t,r)=>{r!==n&&r!==e.board.playerId&&(a.playerCards[r].optionalCards=a.playerCards[r].optionalCards.filter(e=>!l.some(t=>t===e)))})}});let r=[...new Array(s).keys()];a.playerCards.forEach((t,n)=>{if(n!==e.board.playerId){let l=[];r.forEach(t=>{t!=n&&t!=e.board.playerId&&(l=[...l,...a.playerCards[t].cards,...a.playerCards[t].optionalCards])});let s=[...t.optionalCards.filter(e=>!l.some(t=>t===e))];a.playerCards[n].cards.push(...s),a.playerCards[n].cards.length===a.playerCards[n].cardsCount?a.playerCards[n].optionalCards=[]:a.playerCards[n].optionalCards=a.playerCards[n].optionalCards.filter(e=>l.some(t=>t===e))}})}if(a.table.length===s){let e,t=this.strongestCard(a.table);t=t-(s-1)+a.player,t>=s&&(t-=s),t<0&&(t+=s),e=4===s?0===t||2===t?0:1:t,a.teams[e].belle+=this.countBelle(a.table),a.teams[e].collectedCards.push(...a.table),a.table=[],this.hasRemainingCards(a)||(a.teams[e].belle+=3),a.player=t,n=a.player}else a.player++,a.player>=s&&(a.player=0),n=a.player;return new r.a(l,a,n)}winner(e){if(this.hasRemainingCards(e.board))return null;if("kifameno3"===e.board.type){let t,n=1/0;for(let l=0;l<3;l++)e.board.teams[l].belle<n&&(t=l,n=e.board.teams[l].belle);return{team0:e.board.teams[0].belle,team1:e.board.teams[1].belle,team2:e.board.teams[2].belle,winner:t}}{let t;return t=[1,-1,0][Math.sign(e.board.teams[0].belle-e.board.teams[1].belle)+1],{team0:e.board.teams[0].belle,team1:e.board.teams[1].belle,winner:t}}}}},function(e,t,n){"use strict";var l=n(0),r=n(11),a=n.n(r);t.a=class{constructor(e,t=2){this.game=e,this.UCB1ExploreParam=t,this.nodes=new Map}makeNode(e){if(!this.nodes.has(e.hash())){let t=this.game.legalPlays(e).slice(),n=new a.a(null,null,e,t);this.nodes.set(e.hash(),n)}}runSearch(e,t=3){this.makeNode(e);let n=0,l=0,r=Date.now()+1e3*t;for(;Date.now()<r;){let t=this.select(e),r=this.game.winner(t.state);!1===t.isLeaf()&&null===r&&(t=this.expand(t),r=this.simulate(t)),this.backpropagate(t,r),-1===r.winner&&n++,l++}return{runtime:t,simulations:l,draws:n}}bestPlay(e,t="robust"){if(this.makeNode(e),!1===this.nodes.get(e.hash()).isFullyExpanded())throw console.log(Object(l.inspect)(e,{showHidden:!1,depth:null})),new Error("Not enough information!");let n=this.nodes.get(e.hash());"robust"===t&&this.isFullyExpanded(n)&&(t="max");let r,a=n.allPlays();if("robust"===t){let e=-1/0;for(let t of a){let l=n.childNode(t);l.n_plays>e&&(r=t,e=l.n_plays)}}else if("max"===t){let e=-1/0;for(let t of a){let l=n.childNode(t),a=l.n_wins/l.n_plays;a>e&&(r=t,e=a)}}return r}select(e){let t=this.nodes.get(e.hash());for(;t.isFullyExpanded()&&!t.isLeaf();){let e,n=t.allPlays(),l=-1/0;for(let r of n){let n=t.childNode(r).getUCB1(this.UCB1ExploreParam);n>l&&(e=r,l=n)}t=t.childNode(e)}return t}expand(e){let t=e.unexpandedPlays(),n=t[Math.floor(Math.random()*t.length)],l=this.game.nextState(e.state,n),r=this.game.legalPlays(l),a=e.expand(n,l,r);return this.nodes.set(l.hash(),a),a}simulate(e){let t=e.state,n=this.game.winner(t);for(;null===n;){let e=this.game.legalPlays(t),l=e[Math.floor(Math.random()*e.length)];t=this.game.nextState(t,l),n=this.game.winner(t)}return n}backpropagate(e,t){for(;null!==e;)e.n_plays+=1,null!==e.parent&&e.parent.state.isPlayer(t.winner)&&e.n_wins++,e=e.parent}getStats(e){let t=this.nodes.get(e.hash()),n={n_plays:t.n_plays,n_wins:t.n_wins,n_ratio:t.n_plays>0?t.n_wins/t.n_plays:null,children:[]};for(let e of t.children.values())null===e.node?n.children.push({play:e.play,n_plays:null,n_wins:null}):n.children.push({play:e.play,n_plays:e.node.n_plays,n_wins:e.node.n_wins,n_ratio:e.node.n_plays>0?e.node.n_wins/e.node.n_plays:null});return n}getTreeStats(e,t=null){let n=this.nodes.get(e.hash()),l={n_plays:n.n_plays,n_wins:n.n_wins,n_ratio:n.n_plays>0?n.n_wins/n.n_plays:null,node_play_history:this.getNodeHistory(n),children:[]};null==t&&(t={...l});for(let e of n.children.values())null===e.node?t.children.push({play:e.play,n_plays:null,n_wins:null}):this.getTreeStats(e.node.state,l);return t.children.push(l),t}getNodeHistory(e){try{return e.state.playHistory.map(e=>e.card).join("-")}catch(e){return null}}isFullyExpanded(e){if(!e.isFullyExpanded())return!1;for(let t of e.children.values())if(!this.isFullyExpanded(t.node))return!1;return!0}}},function(e,t,n){"use strict";class l{constructor(e,t,n,l){this.play=t,this.state=n,this.n_plays=0,this.n_wins=0,this.parent=e,this.children=new Map;for(let e of l)this.children.set(e.hash(),{play:e,node:null})}childNode(e){let t=this.children.get(e.hash());if(void 0===t)throw new Error("No such play!");if(null===t.node)throw new Error("Child is not expanded!");return t.node}expand(e,t,n){if(!this.children.has(e.hash()))throw new Error("No such play!");let r=new l(this,e,t,n);return this.children.set(e.hash(),{play:e,node:r}),r}allPlays(){let e=[];for(let t of this.children.values())e.push(t.play);return e}unexpandedPlays(){let e=[];for(let t of this.children.values())null===t.node&&e.push(t.play);return e}isFullyExpanded(){for(let e of this.children.values())if(null===e.node)return!1;return!0}isLeaf(){return 0===this.children.size}getUCB1(e){return this.n_wins/this.n_plays+Math.sqrt(e*Math.log(this.parent.n_plays)/this.n_plays)}}e.exports=l},function(e,t,n){"use strict";class l{constructor(e,t,n,l){this.play=t,this.state=n,this.n_plays=0,this.n_wins=0,this.n_belle_won=0,this.n_belle_lost=0,this._isFullyExpanded=!1,this.parent=e,this.children=new Map;for(let e of l)this.children.set(e.hash(),{play:e,node:null});this._allPlays=l}childNode(e){let t=this.children.get(e.hash());if(void 0===t)throw new Error("No such play!");if(null===t.node)throw new Error("Child is not expanded!");return t.node}expand(e,t,n){if(!this.children.has(e.hash()))throw new Error("No such play!");let r=new l(this,e,t,n);this.children.set(e.hash(),{play:e,node:r}),this._isFullyExpanded=!0;for(let e of this.children.values())if(null===e.node){this._isFullyExpanded=!1;break}return r}allPlays(){return this._allPlays}unexpandedPlays(){let e=[];for(let t of this.children.values())null===t.node&&e.push(t.play);return e}isFullyExpanded(){return this._isFullyExpanded}isLeaf(){return 0===this.children.size}getUCB1(e){return this.n_belle_won/(this.n_belle_won+this.n_belle_lost)+Math.sqrt(e*Math.log(this.parent.n_plays)/this.n_plays)}}e.exports=l},function(e,t,n){"use strict";var l=n(0),r=n(14),a=n.n(r);t.a=class{constructor(e,t=2){this.game=e,this.UCB1ExploreParam=t,this.nodes=new Map}makeNode(e){if(!this.nodes.has(e.hash())){let t=this.game.legalPlays(e).slice(),n=new a.a(null,null,e,t);this.nodes.set(e.hash(),n)}}runSearch(e,t=3){this.makeNode(e);let n=this.nodes.get(e.hash()),l=0,r=0,a=Date.now()+1e3*t;for(;Date.now()<a&&!n.subtree_completed;){let t=this.select(e),n=this.game.winner(t.state);!1===t.isLeaf()&&null===n&&(t=this.expand(t),n=this.simulate(t)),this.backpropagate(t,n),-1===n.winner&&l++,r++}return{runtime:t,simulations:r,draws:l}}bestPlay(e,t="robust"){if(this.makeNode(e),!1===this.nodes.get(e.hash()).isFullyExpanded())throw console.log(Object(l.inspect)(e,{showHidden:!1,depth:null})),new Error("Not enough information!");let n=this.nodes.get(e.hash());"robust"===t&&this.isFullyExpanded(n)&&(t="max");let r,a=n.allPlays();if("robust"===t){let e=-1/0;for(let t of a){let l=n.childNode(t);l.n_plays>e&&(r=t,e=l.n_plays)}}else if("max"===t){let e=-1/0;for(let t of a){let l=n.childNode(t),a=l.n_belle_won/(l.n_belle_won+l.n_belle_lost);a>e&&(r=t,e=a)}}return r}select(e){let t=this.nodes.get(e.hash());for(;t.isFullyExpanded()&&!t.isLeaf();){let e,n=t.allPlays(),l=-1/0;for(let r of n)if(!t.childTreeCompleted(r)){let n=t.childNode(r).getUCB1(this.UCB1ExploreParam);n>l&&(e=r,l=n)}t=t.childNode(e)}return t}expand(e){let t=e.unexpandedPlays(),n=t[Math.floor(Math.random()*t.length)],l=this.game.nextState(e.state,n),r=this.game.legalPlays(l),a=e.expand(n,l,r);return this.nodes.set(l.hash(),a),a}simulate(e){let t=e.state,n=this.game.winner(t);for(;null===n;){let e=this.game.legalPlays(t),l=e[Math.floor(Math.random()*e.length)];t=this.game.nextState(t,l),n=this.game.winner(t)}return n}backpropagate(e,t){let n=!1;for(e.isLeaf()&&(n=!0);null!==e;){if(e.n_plays++,null!==e.parent&&(e.parent.state.isPlayer(t.winner)&&e.n_wins++,e.n_belle_won+=[t.team0,t.team1,t.team0,t.team1][e.parent.state.player],e.n_belle_lost+=[t.team1,t.team0,t.team1,t.team0][e.parent.state.player]),n&&(!1===e.subtree_completed&&e.number_of_subTreeCompleted===e.number_of_children&&(e.subtree_completed=!0),null!==e.parent)){let t=e.state.playHistory[e.state.playHistory.length-1],n=e.parent.children.get(t.hash());n.subTreeCompleted=!0,e.parent.children.set(t.hash(),n),e.parent.number_of_subTreeCompleted++}e=e.parent}}getStats(e){let t=this.nodes.get(e.hash()),n={n_plays:t.n_plays,n_wins:t.n_wins,n_belle_won:t.n_belle_won,n_belle_lost:t.n_belle_lost,n_win_ratio:t.n_plays>0?t.n_wins/t.n_plays:null,n_belle_ratio:t.n_belle_won+t.n_belle_lsot>0?t.n_belle_won/(t.n_belle_won+t.n_belle_lost):null,children:[]};for(let e of t.children.values())null===e.node?n.children.push({play:e.play,n_plays:null,n_wins:null}):n.children.push({play:e.play,n_plays:e.node.n_plays,n_wins:e.node.n_wins,n_belle_won:e.node.n_belle_won,n_belle_lost:e.node.n_belle_lost,n_win_ratio:e.node.n_plays>0?e.node.n_wins/e.node.n_plays:null,n_belle_ratio:e.node.n_belle_won+e.node.n_belle_lost>0?e.node.n_belle_won/(e.node.n_belle_won+e.node.n_belle_lost):null});return n}getTreeStats(e,t=null){let n=this.nodes.get(e.hash()),l={n_plays:n.n_plays,n_wins:n.n_wins,n_win_ratio:n.n_plays>0?n.n_wins/n.n_plays:null,n_belle_won:n.n_belle_won,n_belle_lost:n.n_belle_lost,n_belle_ratio:n.n_belle_won+n.n_belle_lost>0?n.n_belle_won/(n.n_belle_won+n.n_belle_lost):null,node_play_history:this.getNodeHistory(n),children:[]};null==t&&(t={...l});for(let e of n.children.values())null===e.node?t.children.push({play:e.play,n_plays:null,n_wins:null}):this.getTreeStats(e.node.state,l);return t.children.push(l),t}getNodeHistory(e){try{return e.state.playHistory.map(e=>e.card).join("-")}catch(e){return null}}isFullyExpanded(e){if(!e.isFullyExpanded())return!1;for(let t of e.children.values())if(!this.isFullyExpanded(t.node))return!1;return!0}}},function(e,t,n){"use strict";class l{constructor(e,t,n,l){this.play=t,this.state=n,this.n_plays=0,this.n_wins=0,this.n_belle_won=0,this.n_belle_lost=0,this._isFullyExpanded=!1,this.parent=e,this.children=new Map;for(let e of l)this.children.set(e.hash(),{play:e,node:null,subTreeCompleted:!1});this.number_of_children=l.length,this.number_of_subTreeCompleted=0,this.subtree_completed=0===this.number_of_children,this._allPlays=l}childNode(e){let t=this.children.get(e.hash());if(void 0===t)throw new Error("No such play!");if(null===t.node)throw new Error("Child is not expanded!");return t.node}childTreeCompleted(e){let t=this.children.get(e.hash());if(void 0===t)throw new Error("No such play!");if(null===t.node)throw new Error("Child is not expanded!");return t.subTreeCompleted}expand(e,t,n){if(!this.children.has(e.hash()))throw new Error("No such play!");let r=new l(this,e,t,n);this.children.set(e.hash(),{play:e,node:r,subTreeCompleted:!1}),this._isFullyExpanded=!0;for(let e of this.children.values())if(null===e.node){this._isFullyExpanded=!1;break}return r}allPlays(){return this._allPlays}unexpandedPlays(){let e=[];for(let t of this.children.values())null===t.node&&e.push(t.play);return e}isFullyExpanded(){return this._isFullyExpanded}isLeaf(){return 0===this.children.size}getUCB1(e){return this.n_belle_won/(this.n_belle_won+this.n_belle_lost)+Math.sqrt(e*Math.log(this.parent.n_plays)/this.n_plays)}}e.exports=l},function(e,t,n){"use strict";var l=n(0),r=n(16),a=n.n(r);t.a=class{constructor(e,t=2){this.game=e,this.UCB1ExploreParam=t,this.nodes=new Map}makeNode(e){if(!this.nodes.has(e.hash())){let t=this.game.legalPlays(e).slice(),n=new a.a(null,null,e,t);this.nodes.set(e.hash(),n)}}runSearch(e,t=3){this.makeNode(e);let n=0,l=Date.now()+1e3*t;for(;Date.now()<l;){let t=this.select(e),l=this.game.winner(t.state);!1===t.isLeaf()&&null===l&&(t=this.expand(t),l=this.simulate(t)),this.backpropagate(t,l),n++}return{runtime:t,simulations:n,draws:0}}bestPlay(e,t="robust"){if(this.makeNode(e),!1===this.nodes.get(e.hash()).isFullyExpanded())throw console.log(Object(l.inspect)(e,{showHidden:!1,depth:null})),new Error("Not enough information!");let n=this.nodes.get(e.hash());"robust"===t&&this.isFullyExpanded(n)&&(t="max");let r,a=n.allPlays();if("robust"===t){let e=-1/0;for(let t of a){let l=n.childNode(t);l.n_plays>e&&(r=t,e=l.n_plays)}}else if("max"===t){let e=-1/0;for(let t of a){let l=n.childNode(t),a=l.n_wins/l.n_plays;a>e&&(r=t,e=a)}}return r}select(e){let t=this.nodes.get(e.hash());for(;t.isFullyExpanded()&&!t.isLeaf();){let e,n=t.allPlays(),l=-1/0;for(let r of n){let n=t.childNode(r).getUCB1(this.UCB1ExploreParam);n>l&&(e=r,l=n)}t=t.childNode(e)}return t}expand(e){let t=e.unexpandedPlays(),n=t[Math.floor(Math.random()*t.length)],l=this.game.nextState(e.state,n),r=this.game.legalPlays(l),a=e.expand(n,l,r);return this.nodes.set(l.hash(),a),a}simulate(e){let t=e.state,n=this.game.winner(t);for(;null===n;){let e=this.game.legalPlays(t),l=e[Math.floor(Math.random()*e.length)];t=this.game.nextState(t,l),n=this.game.winner(t)}return n}backpropagate(e,t){for(;null!==e;)e.n_plays++,null!==e.parent&&e.parent.state.player===t.winner&&e.n_wins++,e=e.parent}getStats(e){let t=this.nodes.get(e.hash()),n={n_plays:t.n_plays,n_wins:t.n_wins,n_ratio:t.n_plays>0?t.n_wins/t.n_plays:null,children:[]};for(let e of t.children.values())null===e.node?n.children.push({play:e.play,n_plays:null,n_wins:null}):n.children.push({play:e.play,n_plays:e.node.n_plays,n_wins:e.node.n_wins,n_ratio:e.node.n_plays>0?e.node.n_wins/e.node.n_plays:null});return n}getTreeStats(e,t=null){let n=this.nodes.get(e.hash()),l={n_plays:n.n_plays,n_wins:n.n_wins,n_ratio:n.n_plays>0?n.n_wins/n.n_plays:null,node_play_history:this.getNodeHistory(n),children:[]};null==t&&(t={...l});for(let e of n.children.values())null===e.node?t.children.push({play:e.play,n_plays:null,n_wins:null}):this.getTreeStats(e.node.state,l);return t.children.push(l),t}getNodeHistory(e){try{return e.state.playHistory.map(e=>e.card).join("-")}catch(e){return null}}isFullyExpanded(e){if(!e.isFullyExpanded())return!1;for(let t of e.children.values())if(!this.isFullyExpanded(t.node))return!1;return!0}}},function(e,t,n){"use strict";class l{constructor(e,t,n,l){this.play=t,this.state=n,this.n_plays=0,this.n_wins=0,this.parent=e,this.children=new Map;for(let e of l)this.children.set(e.hash(),{play:e,node:null})}childNode(e){let t=this.children.get(e.hash());if(void 0===t)throw new Error("No such play!");if(null===t.node)throw new Error("Child is not expanded!");return t.node}expand(e,t,n){if(!this.children.has(e.hash()))throw new Error("No such play!");let r=new l(this,e,t,n);return this.children.set(e.hash(),{play:e,node:r}),r}allPlays(){let e=[];for(let t of this.children.values())e.push(t.play);return e}unexpandedPlays(){let e=[];for(let t of this.children.values())null===t.node&&e.push(t.play);return e}isFullyExpanded(){for(let e of this.children.values())if(null===e.node)return!1;return!0}isLeaf(){return 0===this.children.size}getUCB1(e){return this.n_wins/this.n_plays+Math.sqrt(e*Math.log(this.parent.n_plays)/this.n_plays)}}e.exports=l},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";n.r(t);n(0);var l=n(5),r=n.n(l);var a=class{legalPlays(e){let t=[],n=e.playerCards[e.player],l=n.cards.concat(n.optionalCards);if(0!==e.table.length){let t=e.table[0]-e.table[0]%100;const r=e=>e>=t&&e<=t+99;n.cards.some(r)&&(l=l.filter(r))}return t=l.map(e=>new r.a(e)),t}},s=n(8),o=n.n(s),i=n(2),u=n.n(i);var d=async function(e,t){let n=e.state,l=new a,r=new o.a(l).bestPlay(n);return u()(r)},h=n(3);var p=async function(e,t){switch(e.algorithm){case"random":return d(e);case"mcts":case"mcts-1":case"mcts-2":case"mcts-3":return Object(h.a)(e);case"dart":return dartSolver(e);case"dart-native":return dartSolverNative(e)}};onmessage=async function(e){let t=await p(e);postMessage(t)}}]);