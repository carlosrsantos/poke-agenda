(function(){"use strict";var n={1421:function(n,e,t){var o=t(9242),r=t(3396);function a(n,e){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var i=t(89);const s={},u=(0,i.Z)(s,[["render",a]]);var c=u,l=t(2483);const p={class:"home"};function d(n,e,t,o,a,i){const s=(0,r.up)("PokemonCard");return(0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(s)])}var m=t(7139);const f=n=>((0,r.dD)("data-v-1ba8ef50"),n=n(),(0,r.Cn)(),n),v={class:"search"},h={class:"input-icons"},k=f((()=>(0,r._)("i",{class:"material-symbols-outlined icon"},"search",-1))),g={class:"card"},w={class:"titulo"},b=["src"],y=f((()=>(0,r._)("h4",{class:"types"},"Types:",-1))),_={class:"types-name"},P={class:"buttons"};function O(n,e,t,a,i,s){const u=(0,r.up)("pokemon-button");return(0,r.wg)(),(0,r.iD)("main",null,[(0,r._)("div",v,[(0,r._)("form",null,[(0,r._)("div",h,[k,(0,r.wy)((0,r._)("input",{class:"input-field",type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>n.search=e),placeholder:"Pesquisar Pokémon"},null,512),[[o.nr,n.search]])])])]),(0,r._)("div",g,[(0,r._)("h3",w,(0,m.zw)(n.pokemon.name),1),(0,r._)("img",{src:n.pokemon.picture,alt:"",class:"sprite"},null,8,b),y,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.pokemon.types,(n=>((0,r.wg)(),(0,r.iD)("ul",{key:n.id},[(0,r._)("li",_,(0,m.zw)(n.type.name),1)])))),128)),(0,r._)("div",P,[(0,r.Wm)(u,{icon:"arrow_back",onGetPokemon:n.previousPokemon},null,8,["onGetPokemon"]),(0,r.Wm)(u,{icon:"arrow_forward",onGetPokemon:n.nextPokemon},null,8,["onGetPokemon"])])])])}var j=t(4870),x=t(4161);const Z=x.Z.create({baseURL:"https://pokeapi.co/api/v2/pokemon/"});var C=Z;const S={class:"material-symbols-outlined"};function D(n,e,t,o,a,i){return(0,r.wg)(),(0,r.iD)("button",{onClick:e[0]||(e[0]=e=>n.$emit("get-pokemon"))},[(0,r._)("span",S,(0,m.zw)(n.props.icon),1),(0,r.WI)(n.$slots,"default")])}var G=(0,r.aZ)({name:"PokemonButton",props:{icon:{type:String,required:!0}},setup(n){return{props:n}}});const T=(0,i.Z)(G,[["render",D]]);var W=T,q=(0,r.aZ)({components:{PokemonButton:W},name:"PokemonCard",setup(){const n=(0,j.qj)({id:0,name:"",picture:"",types:[]}),e=(0,j.iH)(""),t=e=>{C.get(e).then((e=>{n.id=e.data.id,n.name=e.data.name,n.picture=e.data.sprites.other.dream_world.front_default?e.data.sprites.other.dream_world.front_default:e.data.sprites.front_default,n.types=e.data.types})).catch((n=>{console.error(n)}))},o=n=>{t(n)},a=()=>{n.id>1?(n.id--,t(n.id.toString())):(n.id=1010,t(n.id.toString()))},i=()=>{n.id>=1&&n.id<1009?(n.id++,t(n.id.toString())):(n.id=1,t(n.id.toString()))};return(0,r.wF)((()=>{n.id=1})),(0,r.bv)((()=>{t(n.id.toString())})),(0,r.YP)(e,(()=>{e.value&&o(e.value.toString())})),{pokemon:n,previousPokemon:a,nextPokemon:i,search:e}}});const z=(0,i.Z)(q,[["render",O],["__scopeId","data-v-1ba8ef50"]]);var H=z,B=(0,r.aZ)({name:"HomeView",components:{PokemonCard:H}});const F=(0,i.Z)(B,[["render",d]]);var I=F;const M=[{path:"/",name:"home",component:I}],U=(0,l.p7)({history:(0,l.r5)(),routes:M});var V=U,Y=t(65),$=(0,Y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(c).use($).use(V).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return n[o].call(a.exports,a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],a=n[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){n.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[o,r,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(u)var l=u(t)}for(e&&e(o);c<i.length;c++)a=i[c],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(l)},o=self["webpackChunkpokeagenda"]=self["webpackChunkpokeagenda"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1421)}));o=t.O(o)})();
//# sourceMappingURL=app.84555503.js.map