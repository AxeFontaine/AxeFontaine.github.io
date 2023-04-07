(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function bl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Il(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ue(s)?cy(s):Il(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ue(t))return t;if(Te(t))return t}}const iy=/;(?![^(]*\))/g,oy=/:([^]+)/,ay=/\/\*.*?\*\//gs;function cy(t){const e={};return t.replace(ay,"").split(iy).forEach(n=>{if(n){const s=n.split(oy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function El(t){let e="";if(Ue(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=El(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uy=bl(ly);function vf(t){return!!t||t===""}const as=t=>Ue(t)?t:t==null?"":J(t)||Te(t)&&(t.toString===Ef||!ee(t.toString))?JSON.stringify(t,wf,2):String(t),wf=(t,e)=>e&&e.__v_isRef?wf(t,e.value):Us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:bf(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!J(e)&&!_f(e)?String(e):e,be={},Fs=[],Pt=()=>{},hy=()=>!1,dy=/^on[^a-z]/,ea=t=>dy.test(t),_l=t=>t.startsWith("onUpdate:"),st=Object.assign,Tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fy=Object.prototype.hasOwnProperty,de=(t,e)=>fy.call(t,e),J=Array.isArray,Us=t=>ta(t)==="[object Map]",bf=t=>ta(t)==="[object Set]",ee=t=>typeof t=="function",Ue=t=>typeof t=="string",Sl=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",If=t=>Te(t)&&ee(t.then)&&ee(t.catch),Ef=Object.prototype.toString,ta=t=>Ef.call(t),py=t=>ta(t).slice(8,-1),_f=t=>ta(t)==="[object Object]",Cl=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,io=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gy=/-(\w)/g,Hs=na(t=>t.replace(gy,(e,n)=>n?n.toUpperCase():"")),my=/\B([A-Z])/g,or=na(t=>t.replace(my,"-$1").toLowerCase()),Tf=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qa=na(t=>t?`on${Tf(t)}`:""),Kr=(t,e)=>!Object.is(t,e),oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Io=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wu;const Ay=()=>Wu||(Wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class Sf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Cf(t){return new Sf(t)}function yy(t,e=gt){e&&e.active&&e.effects.push(t)}function xf(){return gt}function vy(t){gt&&gt.cleanups.push(t)}const xl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Df=t=>(t.w&Ln)>0,kf=t=>(t.n&Ln)>0,wy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ln},by=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Df(r)&&!kf(r)?r.delete(t):e[n++]=r,r.w&=~Ln,r.n&=~Ln}e.length=n}},Eo=new WeakMap;let _r=0,Ln=1;const Ic=30;let Rt;const cs=Symbol(""),Ec=Symbol("");class Dl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yy(this,s)}run(){if(!this.active)return this.fn();let e=Rt,n=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rt,Rt=this,Dn=!0,Ln=1<<++_r,_r<=Ic?wy(this):Xu(this),this.fn()}finally{_r<=Ic&&by(this),Ln=1<<--_r,Rt=this.parent,Dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rt===this?this.deferStop=!0:this.active&&(Xu(this),this.onStop&&this.onStop(),this.active=!1)}}function Xu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dn=!0;const Rf=[];function ar(){Rf.push(Dn),Dn=!1}function cr(){const t=Rf.pop();Dn=t===void 0?!0:t}function dt(t,e,n){if(Dn&&Rt){let s=Eo.get(t);s||Eo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=xl()),Nf(r)}}function Nf(t,e){let n=!1;_r<=Ic?kf(t)||(t.n|=Ln,n=!Df(t)):n=!t.has(Rt),n&&(t.add(Rt),Rt.deps.push(t))}function cn(t,e,n,s,r,i){const o=Eo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?Cl(n)&&a.push(o.get("length")):(a.push(o.get(cs)),Us(t)&&a.push(o.get(Ec)));break;case"delete":J(t)||(a.push(o.get(cs)),Us(t)&&a.push(o.get(Ec)));break;case"set":Us(t)&&a.push(o.get(cs));break}if(a.length===1)a[0]&&_c(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);_c(xl(c))}}function _c(t,e){const n=J(t)?t:[...t];for(const s of n)s.computed&&Yu(s);for(const s of n)s.computed||Yu(s)}function Yu(t,e){(t!==Rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Iy(t,e){var n;return(n=Eo.get(t))===null||n===void 0?void 0:n.get(e)}const Ey=bl("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sl)),_y=kl(),Ty=kl(!1,!0),Sy=kl(!0),Ju=Cy();function Cy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let i=0,o=this.length;i<o;i++)dt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ar();const s=ue(this)[e].apply(this,n);return cr(),s}}),t}function xy(t){const e=ue(this);return dt(e,"has",t),e.hasOwnProperty(t)}function kl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Ky:Uf:e?Ff:Mf).get(s))return s;const o=J(s);if(!t){if(o&&de(Ju,r))return Reflect.get(Ju,r,i);if(r==="hasOwnProperty")return xy}const a=Reflect.get(s,r,i);return(Sl(r)?Of.has(r):Ey(r))||(t||dt(s,"get",r),e)?a:ke(a)?o&&Cl(r)?a:a.value:Te(a)?t?Bf(a):lr(a):a}}const Dy=Pf(),ky=Pf(!0);function Pf(t=!1){return function(n,s,r,i){let o=n[s];if(Ks(o)&&ke(o)&&!ke(r))return!1;if(!t&&(!_o(r)&&!Ks(r)&&(o=ue(o),r=ue(r)),!J(n)&&ke(o)&&!ke(r)))return o.value=r,!0;const a=J(n)&&Cl(s)?Number(s)<n.length:de(n,s),c=Reflect.set(n,s,r,i);return n===ue(i)&&(a?Kr(r,o)&&cn(n,"set",s,r):cn(n,"add",s,r)),c}}function Ry(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&cn(t,"delete",e,void 0),s}function Ny(t,e){const n=Reflect.has(t,e);return(!Sl(e)||!Of.has(e))&&dt(t,"has",e),n}function Oy(t){return dt(t,"iterate",J(t)?"length":cs),Reflect.ownKeys(t)}const Lf={get:_y,set:Dy,deleteProperty:Ry,has:Ny,ownKeys:Oy},Py={get:Sy,set(t,e){return!0},deleteProperty(t,e){return!0}},Ly=st({},Lf,{get:Ty,set:ky}),Rl=t=>t,sa=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,s=!1){t=t.__v_raw;const r=ue(t),i=ue(e);n||(e!==i&&dt(r,"get",e),dt(r,"get",i));const{has:o}=sa(r),a=s?Rl:n?Pl:qr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ji(t,e=!1){const n=this.__v_raw,s=ue(n),r=ue(t);return e||(t!==r&&dt(s,"has",t),dt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Hi(t,e=!1){return t=t.__v_raw,!e&&dt(ue(t),"iterate",cs),Reflect.get(t,"size",t)}function Zu(t){t=ue(t);const e=ue(this);return sa(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function eh(t,e){e=ue(e);const n=ue(this),{has:s,get:r}=sa(n);let i=s.call(n,t);i||(t=ue(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Kr(e,o)&&cn(n,"set",t,e):cn(n,"add",t,e),this}function th(t){const e=ue(this),{has:n,get:s}=sa(e);let r=n.call(e,t);r||(t=ue(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&cn(e,"delete",t,void 0),i}function nh(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function Ki(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ue(o),c=e?Rl:t?Pl:qr;return!t&&dt(a,"iterate",cs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function qi(t,e,n){return function(...s){const r=this.__v_raw,i=ue(r),o=Us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Rl:e?Pl:qr;return!e&&dt(i,"iterate",c?Ec:cs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function pn(t){return function(...e){return t==="delete"?!1:this}}function My(){const t={get(i){return $i(this,i)},get size(){return Hi(this)},has:ji,add:Zu,set:eh,delete:th,clear:nh,forEach:Ki(!1,!1)},e={get(i){return $i(this,i,!1,!0)},get size(){return Hi(this)},has:ji,add:Zu,set:eh,delete:th,clear:nh,forEach:Ki(!1,!0)},n={get(i){return $i(this,i,!0)},get size(){return Hi(this,!0)},has(i){return ji.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Ki(!0,!1)},s={get(i){return $i(this,i,!0,!0)},get size(){return Hi(this,!0)},has(i){return ji.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qi(i,!1,!1),n[i]=qi(i,!0,!1),e[i]=qi(i,!1,!0),s[i]=qi(i,!0,!0)}),[t,n,e,s]}const[Fy,Uy,By,Vy]=My();function Nl(t,e){const n=e?t?Vy:By:t?Uy:Fy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(de(n,r)&&r in s?n:s,r,i)}const $y={get:Nl(!1,!1)},jy={get:Nl(!1,!0)},Hy={get:Nl(!0,!1)},Mf=new WeakMap,Ff=new WeakMap,Uf=new WeakMap,Ky=new WeakMap;function qy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gy(t){return t.__v_skip||!Object.isExtensible(t)?0:qy(py(t))}function lr(t){return Ks(t)?t:Ol(t,!1,Lf,$y,Mf)}function zy(t){return Ol(t,!1,Ly,jy,Ff)}function Bf(t){return Ol(t,!0,Py,Hy,Uf)}function Ol(t,e,n,s,r){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Gy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function kn(t){return Ks(t)?kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function _o(t){return!!(t&&t.__v_isShallow)}function Vf(t){return kn(t)||Ks(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function qs(t){return Io(t,"__v_skip",!0),t}const qr=t=>Te(t)?lr(t):t,Pl=t=>Te(t)?Bf(t):t;function $f(t){Dn&&Rt&&(t=ue(t),Nf(t.dep||(t.dep=xl())))}function jf(t,e){t=ue(t);const n=t.dep;n&&_c(n)}function ke(t){return!!(t&&t.__v_isRef===!0)}function ln(t){return Hf(t,!1)}function Qy(t){return Hf(t,!0)}function Hf(t,e){return ke(t)?t:new Wy(t,e)}class Wy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:qr(e)}get value(){return $f(this),this._value}set value(e){const n=this.__v_isShallow||_o(e)||Ks(e);e=n?e:ue(e),Kr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:qr(e),jf(this))}}function sn(t){return ke(t)?t.value:t}const Xy={get:(t,e,n)=>sn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ke(r)&&!ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Kf(t){return kn(t)?t:new Proxy(t,Xy)}function Yy(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=Zy(t,n);return e}class Jy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Iy(ue(this._object),this._key)}}function Zy(t,e,n){const s=t[e];return ke(s)?s:new Jy(t,e,n)}var qf;class ev{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qf]=!1,this._dirty=!0,this.effect=new Dl(e,()=>{this._dirty||(this._dirty=!0,jf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ue(this);return $f(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qf="__v_isReadonly";function tv(t,e,n=!1){let s,r;const i=ee(t);return i?(s=t,r=Pt):(s=t.get,r=t.set),new ev(s,r,i||!r,n)}function Rn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ra(i,e,n)}return r}function St(t,e,n,s){if(ee(t)){const i=Rn(t,e,n,s);return i&&If(i)&&i.catch(o=>{ra(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(St(t[i],e,n,s));return r}function ra(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rn(c,null,10,[t,o,a]);return}}nv(t,n,r,s)}function nv(t,e,n,s=!0){console.error(t)}let Gr=!1,Tc=!1;const et=[];let Kt=0;const Bs=[];let Jt=null,Yn=0;const Gf=Promise.resolve();let Ll=null;function Ml(t){const e=Ll||Gf;return t?e.then(this?t.bind(this):t):e}function sv(t){let e=Kt+1,n=et.length;for(;e<n;){const s=e+n>>>1;zr(et[s])<t?e=s+1:n=s}return e}function Fl(t){(!et.length||!et.includes(t,Gr&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?et.push(t):et.splice(sv(t.id),0,t),zf())}function zf(){!Gr&&!Tc&&(Tc=!0,Ll=Gf.then(Wf))}function rv(t){const e=et.indexOf(t);e>Kt&&et.splice(e,1)}function iv(t){J(t)?Bs.push(...t):(!Jt||!Jt.includes(t,t.allowRecurse?Yn+1:Yn))&&Bs.push(t),zf()}function sh(t,e=Gr?Kt+1:0){for(;e<et.length;e++){const n=et[e];n&&n.pre&&(et.splice(e,1),e--,n())}}function Qf(t){if(Bs.length){const e=[...new Set(Bs)];if(Bs.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,s)=>zr(n)-zr(s)),Yn=0;Yn<Jt.length;Yn++)Jt[Yn]();Jt=null,Yn=0}}const zr=t=>t.id==null?1/0:t.id,ov=(t,e)=>{const n=zr(t)-zr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wf(t){Tc=!1,Gr=!0,et.sort(ov);const e=Pt;try{for(Kt=0;Kt<et.length;Kt++){const n=et[Kt];n&&n.active!==!1&&Rn(n,null,14)}}finally{Kt=0,et.length=0,Qf(),Gr=!1,Ll=null,(et.length||Bs.length)&&Wf()}}function av(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||be;d&&(r=n.map(p=>Ue(p)?p.trim():p)),h&&(r=n.map(bc))}let a,c=s[a=Qa(e)]||s[a=Qa(Hs(e))];!c&&i&&(c=s[a=Qa(or(e))]),c&&St(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(l,t,6,r)}}function Xf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=Xf(l,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Te(t)&&s.set(t,null),null):(J(i)?i.forEach(c=>o[c]=null):st(o,i),Te(t)&&s.set(t,o),o)}function ia(t,e){return!t||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,or(e))||de(t,e))}let _t=null,oa=null;function To(t){const e=_t;return _t=t,oa=t&&t.type.__scopeId||null,e}function Yf(t){oa=t}function Jf(){oa=null}function cv(t,e=_t,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&dh(-1);const i=To(e);let o;try{o=t(...r)}finally{To(i),s._d&&dh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Wa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:v}=t;let k,T;const M=To(t);try{if(n.shapeFlag&4){const G=r||s;k=Ht(u.call(G,G,h,i,p,d,m)),T=c}else{const G=e;k=Ht(G.length>1?G(i,{attrs:c,slots:a,emit:l}):G(i,null)),T=e.props?c:lv(c)}}catch(G){Nr.length=0,ra(G,t,1),k=He(Mt)}let S=k;if(T&&v!==!1){const G=Object.keys(T),{shapeFlag:V}=S;G.length&&V&7&&(o&&G.some(_l)&&(T=uv(T,o)),S=Mn(S,T))}return n.dirs&&(S=Mn(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),k=S,To(M),k}const lv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ea(n))&&((e||(e={}))[n]=t[n]);return e},uv=(t,e)=>{const n={};for(const s in t)(!_l(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?rh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ia(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?rh(s,o,l):!0:!!o;return!1}function rh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ia(n,i))return!0}return!1}function dv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fv=t=>t.__isSuspense;function pv(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):iv(t)}function ao(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function Lt(t,e,n=!1){const s=Pe||_t;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}const Gi={};function rn(t,e,n){return Zf(t,e,n)}function Zf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=be){const a=xf()===(Pe==null?void 0:Pe.scope)?Pe:null;let c,l=!1,u=!1;if(ke(t)?(c=()=>t.value,l=_o(t)):kn(t)?(c=()=>t,s=!0):J(t)?(u=!0,l=t.some(S=>kn(S)||_o(S)),c=()=>t.map(S=>{if(ke(S))return S.value;if(kn(S))return rs(S);if(ee(S))return Rn(S,a,2)})):ee(t)?e?c=()=>Rn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),St(t,a,3,[d])}:c=Pt,e&&s){const S=c;c=()=>rs(S())}let h,d=S=>{h=T.onStop=()=>{Rn(S,a,4)}},p;if(Wr)if(d=Pt,e?n&&St(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const S=aw();p=S.__watcherHandles||(S.__watcherHandles=[])}else return Pt;let m=u?new Array(t.length).fill(Gi):Gi;const v=()=>{if(T.active)if(e){const S=T.run();(s||l||(u?S.some((G,V)=>Kr(G,m[V])):Kr(S,m)))&&(h&&h(),St(e,a,3,[S,m===Gi?void 0:u&&m[0]===Gi?[]:m,d]),m=S)}else T.run()};v.allowRecurse=!!e;let k;r==="sync"?k=v:r==="post"?k=()=>ut(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),k=()=>Fl(v));const T=new Dl(c,k);e?n?v():m=T.run():r==="post"?ut(T.run.bind(T),a&&a.suspense):T.run();const M=()=>{T.stop(),a&&a.scope&&Tl(a.scope.effects,T)};return p&&p.push(M),M}function gv(t,e,n){const s=this.proxy,r=Ue(t)?t.includes(".")?ep(s,t):()=>s[t]:t.bind(s,s);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Pe;Gs(this);const a=Zf(r,i.bind(s),n);return o?Gs(o):ls(),a}function ep(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function rs(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))rs(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)rs(t[n],e);else if(bf(t)||Us(t))t.forEach(n=>{rs(n,e)});else if(_f(t))for(const n in t)rs(t[n],e);return t}function mv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return la(()=>{t.isMounted=!0}),ip(()=>{t.isUnmounting=!0}),t}const Et=[Function,Array],Av={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et},setup(t,{slots:e}){const n=yp(),s=mv();let r;return()=>{const i=e.default&&np(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Mt){o=v;break}}const a=ue(t),{mode:c}=a;if(s.isLeaving)return Xa(o);const l=ih(o);if(!l)return Xa(o);const u=Sc(l,a,s,n);Cc(l,u);const h=n.subTree,d=h&&ih(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(d&&d.type!==Mt&&(!Jn(l,d)||p)){const v=Sc(d,a,s,n);if(Cc(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Xa(o);c==="in-out"&&l.type!==Mt&&(v.delayLeave=(k,T,M)=>{const S=tp(s,d);S[String(d.key)]=d,k._leaveCb=()=>{T(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},yv=Av;function tp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Sc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:v,onAppear:k,onAfterAppear:T,onAppearCancelled:M}=e,S=String(t.key),G=tp(n,t),V=(N,re)=>{N&&St(N,s,9,re)},Q=(N,re)=>{const oe=re[1];V(N,re),J(N)?N.every(Ce=>Ce.length<=1)&&oe():N.length<=1&&oe()},$={mode:i,persisted:o,beforeEnter(N){let re=a;if(!n.isMounted)if(r)re=v||a;else return;N._leaveCb&&N._leaveCb(!0);const oe=G[S];oe&&Jn(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),V(re,[N])},enter(N){let re=c,oe=l,Ce=u;if(!n.isMounted)if(r)re=k||c,oe=T||l,Ce=M||u;else return;let Ve=!1;const ft=N._enterCb=rt=>{Ve||(Ve=!0,rt?V(Ce,[N]):V(oe,[N]),$.delayedLeave&&$.delayedLeave(),N._enterCb=void 0)};re?Q(re,[N,ft]):ft()},leave(N,re){const oe=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return re();V(h,[N]);let Ce=!1;const Ve=N._leaveCb=ft=>{Ce||(Ce=!0,re(),ft?V(m,[N]):V(p,[N]),N._leaveCb=void 0,G[oe]===t&&delete G[oe])};G[oe]=t,d?Q(d,[N,Ve]):Ve()},clone(N){return Sc(N,e,n,s)}};return $}function Xa(t){if(aa(t))return t=Mn(t),t.children=null,t}function ih(t){return aa(t)?t.children?t.children[0]:void 0:t}function Cc(t,e){t.shapeFlag&6&&t.component?Cc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function np(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ze?(o.patchFlag&128&&r++,s=s.concat(np(o.children,e,a))):(e||o.type!==Mt)&&s.push(a!=null?Mn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function sp(t){return ee(t)?{setup:t,name:t.name}:t}const co=t=>!!t.type.__asyncLoader,aa=t=>t.type.__isKeepAlive;function vv(t,e){rp(t,"a",e)}function wv(t,e){rp(t,"da",e)}function rp(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ca(e,s,n),n){let r=n.parent;for(;r&&r.parent;)aa(r.parent.vnode)&&bv(s,e,n,r),r=r.parent}}function bv(t,e,n,s){const r=ca(e,t,s,!0);op(()=>{Tl(s[e],r)},n)}function ca(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ar(),Gs(n);const a=St(e,n,t,o);return ls(),cr(),a});return s?r.unshift(i):r.push(i),i}}const dn=t=>(e,n=Pe)=>(!Wr||t==="sp")&&ca(t,(...s)=>e(...s),n),Iv=dn("bm"),la=dn("m"),Ev=dn("bu"),_v=dn("u"),ip=dn("bum"),op=dn("um"),Tv=dn("sp"),Sv=dn("rtg"),Cv=dn("rtc");function xv(t,e=Pe){ca("ec",t,e)}function xc(t,e){const n=_t;if(n===null)return t;const s=da(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=be]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&rs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function qn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ar(),St(c,n,8,[t.el,a,t,e]),cr())}}const Dv=Symbol();function Tr(t,e,n,s){let r;const i=n&&n[s];if(J(t)||Ue(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Te(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Dc=t=>t?vp(t)?da(t)||t.proxy:Dc(t.parent):null,Rr=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$emit:t=>t.emit,$options:t=>Ul(t),$forceUpdate:t=>t.f||(t.f=()=>Fl(t.update)),$nextTick:t=>t.n||(t.n=Ml.bind(t.proxy)),$watch:t=>gv.bind(t)}),Ya=(t,e)=>t!==be&&!t.__isScriptSetup&&de(t,e),kv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ya(s,e))return o[e]=1,s[e];if(r!==be&&de(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,i[e];if(n!==be&&de(n,e))return o[e]=4,n[e];kc&&(o[e]=0)}}const u=Rr[e];let h,d;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&de(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ya(r,e)?(r[e]=n,!0):s!==be&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==be&&de(t,o)||Ya(e,o)||(a=i[0])&&de(a,o)||de(s,o)||de(Rr,o)||de(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let kc=!0;function Rv(t){const e=Ul(t),n=t.proxy,s=t.ctx;kc=!1,e.beforeCreate&&oh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:v,deactivated:k,beforeDestroy:T,beforeUnmount:M,destroyed:S,unmounted:G,render:V,renderTracked:Q,renderTriggered:$,errorCaptured:N,serverPrefetch:re,expose:oe,inheritAttrs:Ce,components:Ve,directives:ft,filters:rt}=e;if(l&&Nv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ye in o){const ge=o[ye];ee(ge)&&(s[ye]=ge.bind(n))}if(r){const ye=r.call(n,n);Te(ye)&&(t.data=lr(ye))}if(kc=!0,i)for(const ye in i){const ge=i[ye],xt=ee(ge)?ge.bind(n,n):ee(ge.get)?ge.get.bind(n,n):Pt,Kn=!ee(ge)&&ee(ge.set)?ge.set.bind(n):Pt,Dt=At({get:xt,set:Kn});Object.defineProperty(s,ye,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:lt=>Dt.value=lt})}if(a)for(const ye in a)ap(a[ye],s,n,ye);if(c){const ye=ee(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(ge=>{ao(ge,ye[ge])})}u&&oh(u,t,"c");function Re(ye,ge){J(ge)?ge.forEach(xt=>ye(xt.bind(n))):ge&&ye(ge.bind(n))}if(Re(Iv,h),Re(la,d),Re(Ev,p),Re(_v,m),Re(vv,v),Re(wv,k),Re(xv,N),Re(Cv,Q),Re(Sv,$),Re(ip,M),Re(op,G),Re(Tv,re),J(oe))if(oe.length){const ye=t.exposed||(t.exposed={});oe.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:xt=>n[ge]=xt})})}else t.exposed||(t.exposed={});V&&t.render===Pt&&(t.render=V),Ce!=null&&(t.inheritAttrs=Ce),Ve&&(t.components=Ve),ft&&(t.directives=ft)}function Nv(t,e,n=Pt,s=!1){J(t)&&(t=Rc(t));for(const r in t){const i=t[r];let o;Te(i)?"default"in i?o=Lt(i.from||r,i.default,!0):o=Lt(i.from||r):o=Lt(i),ke(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function oh(t,e,n){St(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ap(t,e,n,s){const r=s.includes(".")?ep(n,s):()=>n[s];if(Ue(t)){const i=e[t];ee(i)&&rn(r,i)}else if(ee(t))rn(r,t.bind(n));else if(Te(t))if(J(t))t.forEach(i=>ap(i,e,n,s));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&rn(r,i,t)}}function Ul(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>So(c,l,o,!0)),So(c,e,o)),Te(e)&&i.set(e,c),c}function So(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&So(t,i,n,!0),r&&r.forEach(o=>So(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ov[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ov={data:ah,props:Qn,emits:Qn,methods:Qn,computed:Qn,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Qn,directives:Qn,watch:Lv,provide:ah,inject:Pv};function ah(t,e){return e?t?function(){return st(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return Qn(Rc(t),Rc(e))}function Rc(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Qn(t,e){return t?st(st(Object.create(null),t),e):e}function Lv(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function Mv(t,e,n,s=!1){const r={},i={};Io(i,ha,1),t.propsDefaults=Object.create(null),cp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:zy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Fv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ue(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ia(t.emitsOptions,d))continue;const p=e[d];if(c)if(de(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const m=Hs(d);r[m]=Nc(c,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{cp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=or(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Nc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!de(e,h))&&(delete i[h],l=!0)}l&&cn(t,"set","$attrs")}function cp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(io(c))continue;const l=e[c];let u;r&&de(r,u=Hs(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ia(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ue(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Nc(r,c,h,l[h],t,!de(l,h))}}return o}function Nc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Gs(r),s=l[n]=c.call(null,e),ls())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===or(n))&&(s=!0))}return s}function lp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[d,p]=lp(h,e,!0);st(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Te(t)&&s.set(t,Fs),Fs;if(J(i))for(let u=0;u<i.length;u++){const h=Hs(i[u]);ch(h)&&(o[h]=be)}else if(i)for(const u in i){const h=Hs(u);if(ch(h)){const d=i[u],p=o[h]=J(d)||ee(d)?{type:d}:Object.assign({},d);if(p){const m=hh(Boolean,p.type),v=hh(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||de(p,"default"))&&a.push(h)}}}const l=[o,a];return Te(t)&&s.set(t,l),l}function ch(t){return t[0]!=="$"}function lh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uh(t,e){return lh(t)===lh(e)}function hh(t,e){return J(e)?e.findIndex(n=>uh(n,t)):ee(e)&&uh(e,t)?0:-1}const up=t=>t[0]==="_"||t==="$stable",Bl=t=>J(t)?t.map(Ht):[Ht(t)],Uv=(t,e,n)=>{if(e._n)return e;const s=cv((...r)=>Bl(e(...r)),n);return s._c=!1,s},hp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(up(r))continue;const i=t[r];if(ee(i))e[r]=Uv(r,i,s);else if(i!=null){const o=Bl(i);e[r]=()=>o}}},dp=(t,e)=>{const n=Bl(e);t.slots.default=()=>n},Bv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Io(e,"_",n)):hp(e,t.slots={})}else t.slots={},e&&dp(t,e);Io(t.slots,ha,1)},Vv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(st(r,e),!n&&a===1&&delete r._):(i=!e.$stable,hp(e,r)),o=e}else e&&(dp(t,e),o={default:1});if(i)for(const a in r)!up(a)&&!(a in o)&&delete r[a]};function fp(){return{app:null,config:{isNativeTag:hy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function jv(t,e){return function(s,r=null){ee(s)||(s=Object.assign({},s)),r!=null&&!Te(r)&&(r=null);const i=fp(),o=new Set;let a=!1;const c=i.app={_uid:$v++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:cw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=He(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,da(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Oc(t,e,n,s,r=!1){if(J(t)){t.forEach((d,p)=>Oc(d,e&&(J(e)?e[p]:e),n,s,r));return}if(co(s)&&!r)return;const i=s.shapeFlag&4?da(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ue(l)?(u[l]=null,de(h,l)&&(h[l]=null)):ke(l)&&(l.value=null)),ee(c))Rn(c,a,12,[o,u]);else{const d=Ue(c),p=ke(c);if(d||p){const m=()=>{if(t.f){const v=d?de(h,c)?h[c]:u[c]:c.value;r?J(v)&&Tl(v,i):J(v)?v.includes(i)||v.push(i):d?(u[c]=[i],de(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,de(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ut(m,n)):m()}}}const ut=pv;function Hv(t){return Kv(t)}function Kv(t,e){const n=Ay();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Pt,insertStaticContent:m}=t,v=(f,g,y,w=null,I=null,x=null,P=!1,C=null,R=!!g.dynamicChildren)=>{if(f===g)return;f&&!Jn(f,g)&&(w=O(f),lt(f,I,x,!0),f=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:_,ref:K,shapeFlag:U}=g;switch(_){case ua:k(f,g,y,w);break;case Mt:T(f,g,y,w);break;case lo:f==null&&M(g,y,w,P);break;case Ze:Ve(f,g,y,w,I,x,P,C,R);break;default:U&1?V(f,g,y,w,I,x,P,C,R):U&6?ft(f,g,y,w,I,x,P,C,R):(U&64||U&128)&&_.process(f,g,y,w,I,x,P,C,R,he)}K!=null&&I&&Oc(K,f&&f.ref,x,g||f,!g)},k=(f,g,y,w)=>{if(f==null)s(g.el=a(g.children),y,w);else{const I=g.el=f.el;g.children!==f.children&&l(I,g.children)}},T=(f,g,y,w)=>{f==null?s(g.el=c(g.children||""),y,w):g.el=f.el},M=(f,g,y,w)=>{[f.el,f.anchor]=m(f.children,g,y,w,f.el,f.anchor)},S=({el:f,anchor:g},y,w)=>{let I;for(;f&&f!==g;)I=d(f),s(f,y,w),f=I;s(g,y,w)},G=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},V=(f,g,y,w,I,x,P,C,R)=>{P=P||g.type==="svg",f==null?Q(g,y,w,I,x,P,C,R):re(f,g,I,x,P,C,R)},Q=(f,g,y,w,I,x,P,C)=>{let R,_;const{type:K,props:U,shapeFlag:q,transition:Z,dirs:ie}=f;if(R=f.el=o(f.type,x,U&&U.is,U),q&8?u(R,f.children):q&16&&N(f.children,R,null,w,I,x&&K!=="foreignObject",P,C),ie&&qn(f,null,w,"created"),$(R,f,f.scopeId,P,w),U){for(const me in U)me!=="value"&&!io(me)&&i(R,me,null,U[me],x,f.children,w,I,L);"value"in U&&i(R,"value",null,U.value),(_=U.onVnodeBeforeMount)&&jt(_,w,f)}ie&&qn(f,null,w,"beforeMount");const ve=(!I||I&&!I.pendingBranch)&&Z&&!Z.persisted;ve&&Z.beforeEnter(R),s(R,g,y),((_=U&&U.onVnodeMounted)||ve||ie)&&ut(()=>{_&&jt(_,w,f),ve&&Z.enter(R),ie&&qn(f,null,w,"mounted")},I)},$=(f,g,y,w,I)=>{if(y&&p(f,y),w)for(let x=0;x<w.length;x++)p(f,w[x]);if(I){let x=I.subTree;if(g===x){const P=I.vnode;$(f,P,P.scopeId,P.slotScopeIds,I.parent)}}},N=(f,g,y,w,I,x,P,C,R=0)=>{for(let _=R;_<f.length;_++){const K=f[_]=C?wn(f[_]):Ht(f[_]);v(null,K,g,y,w,I,x,P,C)}},re=(f,g,y,w,I,x,P)=>{const C=g.el=f.el;let{patchFlag:R,dynamicChildren:_,dirs:K}=g;R|=f.patchFlag&16;const U=f.props||be,q=g.props||be;let Z;y&&Gn(y,!1),(Z=q.onVnodeBeforeUpdate)&&jt(Z,y,g,f),K&&qn(g,f,y,"beforeUpdate"),y&&Gn(y,!0);const ie=I&&g.type!=="foreignObject";if(_?oe(f.dynamicChildren,_,C,y,w,ie,x):P||ge(f,g,C,null,y,w,ie,x,!1),R>0){if(R&16)Ce(C,g,U,q,y,w,I);else if(R&2&&U.class!==q.class&&i(C,"class",null,q.class,I),R&4&&i(C,"style",U.style,q.style,I),R&8){const ve=g.dynamicProps;for(let me=0;me<ve.length;me++){const Ne=ve[me],kt=U[Ne],Ts=q[Ne];(Ts!==kt||Ne==="value")&&i(C,Ne,kt,Ts,I,f.children,y,w,L)}}R&1&&f.children!==g.children&&u(C,g.children)}else!P&&_==null&&Ce(C,g,U,q,y,w,I);((Z=q.onVnodeUpdated)||K)&&ut(()=>{Z&&jt(Z,y,g,f),K&&qn(g,f,y,"updated")},w)},oe=(f,g,y,w,I,x,P)=>{for(let C=0;C<g.length;C++){const R=f[C],_=g[C],K=R.el&&(R.type===Ze||!Jn(R,_)||R.shapeFlag&70)?h(R.el):y;v(R,_,K,null,w,I,x,P,!0)}},Ce=(f,g,y,w,I,x,P)=>{if(y!==w){if(y!==be)for(const C in y)!io(C)&&!(C in w)&&i(f,C,y[C],null,P,g.children,I,x,L);for(const C in w){if(io(C))continue;const R=w[C],_=y[C];R!==_&&C!=="value"&&i(f,C,_,R,P,g.children,I,x,L)}"value"in w&&i(f,"value",y.value,w.value)}},Ve=(f,g,y,w,I,x,P,C,R)=>{const _=g.el=f?f.el:a(""),K=g.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:Z}=g;Z&&(C=C?C.concat(Z):Z),f==null?(s(_,y,w),s(K,y,w),N(g.children,y,K,I,x,P,C,R)):U>0&&U&64&&q&&f.dynamicChildren?(oe(f.dynamicChildren,q,y,I,x,P,C),(g.key!=null||I&&g===I.subTree)&&pp(f,g,!0)):ge(f,g,y,K,I,x,P,C,R)},ft=(f,g,y,w,I,x,P,C,R)=>{g.slotScopeIds=C,f==null?g.shapeFlag&512?I.ctx.activate(g,y,w,P,R):rt(g,y,w,I,x,P,R):$e(f,g,R)},rt=(f,g,y,w,I,x,P)=>{const C=f.component=ew(f,w,I);if(aa(f)&&(C.ctx.renderer=he),tw(C),C.asyncDep){if(I&&I.registerDep(C,Re),!f.el){const R=C.subTree=He(Mt);T(null,R,g,y)}return}Re(C,f,g,y,I,x,P)},$e=(f,g,y)=>{const w=g.component=f.component;if(hv(f,g,y))if(w.asyncDep&&!w.asyncResolved){ye(w,g,y);return}else w.next=g,rv(w.update),w.update();else g.el=f.el,w.vnode=g},Re=(f,g,y,w,I,x,P)=>{const C=()=>{if(f.isMounted){let{next:K,bu:U,u:q,parent:Z,vnode:ie}=f,ve=K,me;Gn(f,!1),K?(K.el=ie.el,ye(f,K,P)):K=ie,U&&oo(U),(me=K.props&&K.props.onVnodeBeforeUpdate)&&jt(me,Z,K,ie),Gn(f,!0);const Ne=Wa(f),kt=f.subTree;f.subTree=Ne,v(kt,Ne,h(kt.el),O(kt),f,I,x),K.el=Ne.el,ve===null&&dv(f,Ne.el),q&&ut(q,I),(me=K.props&&K.props.onVnodeUpdated)&&ut(()=>jt(me,Z,K,ie),I)}else{let K;const{el:U,props:q}=g,{bm:Z,m:ie,parent:ve}=f,me=co(g);if(Gn(f,!1),Z&&oo(Z),!me&&(K=q&&q.onVnodeBeforeMount)&&jt(K,ve,g),Gn(f,!0),U&&ne){const Ne=()=>{f.subTree=Wa(f),ne(U,f.subTree,f,I,null)};me?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Ne()):Ne()}else{const Ne=f.subTree=Wa(f);v(null,Ne,y,w,f,I,x),g.el=Ne.el}if(ie&&ut(ie,I),!me&&(K=q&&q.onVnodeMounted)){const Ne=g;ut(()=>jt(K,ve,Ne),I)}(g.shapeFlag&256||ve&&co(ve.vnode)&&ve.vnode.shapeFlag&256)&&f.a&&ut(f.a,I),f.isMounted=!0,g=y=w=null}},R=f.effect=new Dl(C,()=>Fl(_),f.scope),_=f.update=()=>R.run();_.id=f.uid,Gn(f,!0),_()},ye=(f,g,y)=>{g.component=f;const w=f.vnode.props;f.vnode=g,f.next=null,Fv(f,g.props,w,y),Vv(f,g.children,y),ar(),sh(),cr()},ge=(f,g,y,w,I,x,P,C,R=!1)=>{const _=f&&f.children,K=f?f.shapeFlag:0,U=g.children,{patchFlag:q,shapeFlag:Z}=g;if(q>0){if(q&128){Kn(_,U,y,w,I,x,P,C,R);return}else if(q&256){xt(_,U,y,w,I,x,P,C,R);return}}Z&8?(K&16&&L(_,I,x),U!==_&&u(y,U)):K&16?Z&16?Kn(_,U,y,w,I,x,P,C,R):L(_,I,x,!0):(K&8&&u(y,""),Z&16&&N(U,y,w,I,x,P,C,R))},xt=(f,g,y,w,I,x,P,C,R)=>{f=f||Fs,g=g||Fs;const _=f.length,K=g.length,U=Math.min(_,K);let q;for(q=0;q<U;q++){const Z=g[q]=R?wn(g[q]):Ht(g[q]);v(f[q],Z,y,null,I,x,P,C,R)}_>K?L(f,I,x,!0,!1,U):N(g,y,w,I,x,P,C,R,U)},Kn=(f,g,y,w,I,x,P,C,R)=>{let _=0;const K=g.length;let U=f.length-1,q=K-1;for(;_<=U&&_<=q;){const Z=f[_],ie=g[_]=R?wn(g[_]):Ht(g[_]);if(Jn(Z,ie))v(Z,ie,y,null,I,x,P,C,R);else break;_++}for(;_<=U&&_<=q;){const Z=f[U],ie=g[q]=R?wn(g[q]):Ht(g[q]);if(Jn(Z,ie))v(Z,ie,y,null,I,x,P,C,R);else break;U--,q--}if(_>U){if(_<=q){const Z=q+1,ie=Z<K?g[Z].el:w;for(;_<=q;)v(null,g[_]=R?wn(g[_]):Ht(g[_]),y,ie,I,x,P,C,R),_++}}else if(_>q)for(;_<=U;)lt(f[_],I,x,!0),_++;else{const Z=_,ie=_,ve=new Map;for(_=ie;_<=q;_++){const pt=g[_]=R?wn(g[_]):Ht(g[_]);pt.key!=null&&ve.set(pt.key,_)}let me,Ne=0;const kt=q-ie+1;let Ts=!1,Gu=0;const gr=new Array(kt);for(_=0;_<kt;_++)gr[_]=0;for(_=Z;_<=U;_++){const pt=f[_];if(Ne>=kt){lt(pt,I,x,!0);continue}let $t;if(pt.key!=null)$t=ve.get(pt.key);else for(me=ie;me<=q;me++)if(gr[me-ie]===0&&Jn(pt,g[me])){$t=me;break}$t===void 0?lt(pt,I,x,!0):(gr[$t-ie]=_+1,$t>=Gu?Gu=$t:Ts=!0,v(pt,g[$t],y,null,I,x,P,C,R),Ne++)}const zu=Ts?qv(gr):Fs;for(me=zu.length-1,_=kt-1;_>=0;_--){const pt=ie+_,$t=g[pt],Qu=pt+1<K?g[pt+1].el:w;gr[_]===0?v(null,$t,y,Qu,I,x,P,C,R):Ts&&(me<0||_!==zu[me]?Dt($t,y,Qu,2):me--)}}},Dt=(f,g,y,w,I=null)=>{const{el:x,type:P,transition:C,children:R,shapeFlag:_}=f;if(_&6){Dt(f.component.subTree,g,y,w);return}if(_&128){f.suspense.move(g,y,w);return}if(_&64){P.move(f,g,y,he);return}if(P===Ze){s(x,g,y);for(let U=0;U<R.length;U++)Dt(R[U],g,y,w);s(f.anchor,g,y);return}if(P===lo){S(f,g,y);return}if(w!==2&&_&1&&C)if(w===0)C.beforeEnter(x),s(x,g,y),ut(()=>C.enter(x),I);else{const{leave:U,delayLeave:q,afterLeave:Z}=C,ie=()=>s(x,g,y),ve=()=>{U(x,()=>{ie(),Z&&Z()})};q?q(x,ie,ve):ve()}else s(x,g,y)},lt=(f,g,y,w=!1,I=!1)=>{const{type:x,props:P,ref:C,children:R,dynamicChildren:_,shapeFlag:K,patchFlag:U,dirs:q}=f;if(C!=null&&Oc(C,null,y,f,!0),K&256){g.ctx.deactivate(f);return}const Z=K&1&&q,ie=!co(f);let ve;if(ie&&(ve=P&&P.onVnodeBeforeUnmount)&&jt(ve,g,f),K&6)b(f.component,y,w);else{if(K&128){f.suspense.unmount(y,w);return}Z&&qn(f,null,g,"beforeUnmount"),K&64?f.type.remove(f,g,y,I,he,w):_&&(x!==Ze||U>0&&U&64)?L(_,g,y,!1,!0):(x===Ze&&U&384||!I&&K&16)&&L(R,g,y),w&&_s(f)}(ie&&(ve=P&&P.onVnodeUnmounted)||Z)&&ut(()=>{ve&&jt(ve,g,f),Z&&qn(f,null,g,"unmounted")},y)},_s=f=>{const{type:g,el:y,anchor:w,transition:I}=f;if(g===Ze){Vi(y,w);return}if(g===lo){G(f);return}const x=()=>{r(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:P,delayLeave:C}=I,R=()=>P(y,x);C?C(f.el,x,R):R()}else x()},Vi=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},b=(f,g,y)=>{const{bum:w,scope:I,update:x,subTree:P,um:C}=f;w&&oo(w),I.stop(),x&&(x.active=!1,lt(P,f,g,y)),C&&ut(C,g),ut(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},L=(f,g,y,w=!1,I=!1,x=0)=>{for(let P=x;P<f.length;P++)lt(f[P],g,y,w,I)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),j=(f,g,y)=>{f==null?g._vnode&&lt(g._vnode,null,null,!0):v(g._vnode||null,f,g,null,null,null,y),sh(),Qf(),g._vnode=f},he={p:v,um:lt,m:Dt,r:_s,mt:rt,mc:N,pc:ge,pbc:oe,n:O,o:t};let Se,ne;return e&&([Se,ne]=e(he)),{render:j,hydrate:Se,createApp:jv(j,Se)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pp(t,e,n=!1){const s=t.children,r=e.children;if(J(s)&&J(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=wn(r[i]),a.el=o.el),n||pp(o,a)),a.type===ua&&(a.el=o.el)}}function qv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Gv=t=>t.__isTeleport,Ze=Symbol(void 0),ua=Symbol(void 0),Mt=Symbol(void 0),lo=Symbol(void 0),Nr=[];let Nt=null;function Je(t=!1){Nr.push(Nt=t?null:[])}function zv(){Nr.pop(),Nt=Nr[Nr.length-1]||null}let Qr=1;function dh(t){Qr+=t}function gp(t){return t.dynamicChildren=Qr>0?Nt||Fs:null,zv(),Qr>0&&Nt&&Nt.push(t),t}function mt(t,e,n,s,r,i){return gp(te(t,e,n,s,r,i,!0))}function Vl(t,e,n,s,r){return gp(He(t,e,n,s,r,!0))}function Pc(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const ha="__vInternal",mp=({key:t})=>t??null,uo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ue(t)||ke(t)||ee(t)?{i:_t,r:t,k:e,f:!!n}:t:null;function te(t,e=null,n=null,s=0,r=null,i=t===Ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mp(e),ref:e&&uo(e),scopeId:oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_t};return a?($l(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),Qr>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const He=Qv;function Qv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Dv)&&(t=Mt),Pc(t)){const a=Mn(t,e,!0);return n&&$l(a,n),Qr>0&&!i&&Nt&&(a.shapeFlag&6?Nt[Nt.indexOf(t)]=a:Nt.push(a)),a.patchFlag|=-2,a}if(iw(t)&&(t=t.__vccOpts),e){e=Wv(e);let{class:a,style:c}=e;a&&!Ue(a)&&(e.class=El(a)),Te(c)&&(Vf(c)&&!J(c)&&(c=st({},c)),e.style=Il(c))}const o=Ue(t)?1:fv(t)?128:Gv(t)?64:Te(t)?4:ee(t)?2:0;return te(t,e,n,s,r,o,i,!0)}function Wv(t){return t?Vf(t)||ha in t?st({},t):t:null}function Mn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Lc(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&mp(a),ref:e&&e.ref?n&&r?J(r)?r.concat(uo(e)):[r,uo(e)]:uo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Xv(t=" ",e=0){return He(ua,null,t,e)}function Ap(t,e){const n=He(lo,null,t);return n.staticCount=e,n}function Yv(t="",e=!1){return e?(Je(),Vl(Mt,null,t)):He(Mt,null,t)}function Ht(t){return t==null||typeof t=="boolean"?He(Mt):J(t)?He(Ze,null,t.slice()):typeof t=="object"?wn(t):He(ua,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function $l(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),$l(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ha in e)?e._ctx=_t:r===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),s&64?(n=16,e=[Xv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lc(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=El([e.class,s.class]));else if(r==="style")e.style=Il([e.style,s.style]);else if(ea(r)){const i=e[r],o=s[r];o&&i!==o&&!(J(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function jt(t,e,n,s=null){St(t,e,7,[n,s])}const Jv=fp();let Zv=0;function ew(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Jv,i={uid:Zv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(s,r),emitsOptions:Xf(s,r),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=av.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const yp=()=>Pe||_t,Gs=t=>{Pe=t,t.scope.on()},ls=()=>{Pe&&Pe.scope.off(),Pe=null};function vp(t){return t.vnode.shapeFlag&4}let Wr=!1;function tw(t,e=!1){Wr=e;const{props:n,children:s}=t.vnode,r=vp(t);Mv(t,n,r,e),Bv(t,s);const i=r?nw(t,e):void 0;return Wr=!1,i}function nw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qs(new Proxy(t.ctx,kv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?rw(t):null;Gs(t),ar();const i=Rn(s,t,0,[t.props,r]);if(cr(),ls(),If(i)){if(i.then(ls,ls),e)return i.then(o=>{fh(t,o,e)}).catch(o=>{ra(o,t,0)});t.asyncDep=i}else fh(t,i,e)}else wp(t,e)}function fh(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=Kf(e)),wp(t,n)}let ph;function wp(t,e,n){const s=t.type;if(!t.render){if(!e&&ph&&!s.render){const r=s.template||Ul(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=st(st({isCustomElement:i,delimiters:a},o),c);s.render=ph(r,l)}}t.render=s.render||Pt}Gs(t),ar(),Rv(t),cr(),ls()}function sw(t){return new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}})}function rw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=sw(t))},slots:t.slots,emit:t.emit,expose:e}}function da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kf(qs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rr)return Rr[n](t)},has(e,n){return n in e||n in Rr}}))}function iw(t){return ee(t)&&"__vccOpts"in t}const At=(t,e)=>tv(t,e,Wr);function bp(t,e,n){const s=arguments.length;return s===2?Te(e)&&!J(e)?Pc(e)?He(t,null,[e]):He(t,e):He(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Pc(n)&&(n=[n]),He(t,e,n))}const ow=Symbol(""),aw=()=>Lt(ow),cw="3.2.47",lw="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,gh=Zn&&Zn.createElement("template"),uw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Zn.createElementNS(lw,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{gh.innerHTML=s?`<svg>${t}</svg>`:t;const a=gh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function hw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dw(t,e,n){const s=t.style,r=Ue(n);if(n&&!r){if(e&&!Ue(e))for(const i in e)n[i]==null&&Mc(s,i,"");for(const i in n)Mc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const mh=/\s*!important$/;function Mc(t,e,n){if(J(n))n.forEach(s=>Mc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=fw(t,e);mh.test(n)?t.setProperty(or(s),n.replace(mh,""),"important"):t[s]=n}}const Ah=["Webkit","Moz","ms"],Ja={};function fw(t,e){const n=Ja[e];if(n)return n;let s=Hs(e);if(s!=="filter"&&s in t)return Ja[e]=s;s=Tf(s);for(let r=0;r<Ah.length;r++){const i=Ah[r]+s;if(i in t)return Ja[e]=i}return e}const yh="http://www.w3.org/1999/xlink";function pw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yh,e.slice(6,e.length)):t.setAttributeNS(yh,e,n);else{const i=uy(e);n==null||i&&!vf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=vf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ks(t,e,n,s){t.addEventListener(e,n,s)}function mw(t,e,n,s){t.removeEventListener(e,n,s)}function Aw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=yw(e);if(s){const l=i[e]=bw(s,r);ks(t,a,l,c)}else o&&(mw(t,a,o,c),i[e]=void 0)}}const vh=/(?:Once|Passive|Capture)$/;function yw(t){let e;if(vh.test(t)){e={};let s;for(;s=t.match(vh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let Za=0;const vw=Promise.resolve(),ww=()=>Za||(vw.then(()=>Za=0),Za=Date.now());function bw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(Iw(s,n.value),e,5,[s])};return n.value=t,n.attached=ww(),n}function Iw(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const wh=/^on[a-z]/,Ew=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?hw(t,s,r):e==="style"?dw(t,n,s):ea(e)?_l(e)||Aw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_w(t,e,s,r))?gw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pw(t,e,s,r))};function _w(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&wh.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wh.test(e)&&Ue(n)?!1:e in t}const Tw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yv.props;const bh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>oo(e,n):e};function Sw(t){t.target.composing=!0}function Ih(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fc={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=bh(r);const i=s||r.props&&r.props.type==="number";ks(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=bc(a)),t._assign(a)}),n&&ks(t,"change",()=>{t.value=t.value.trim()}),e||(ks(t,"compositionstart",Sw),ks(t,"compositionend",Ih),ks(t,"change",Ih))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=bh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&bc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Cw=["ctrl","shift","alt","meta"],xw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Cw.some(n=>t[`${n}Key`]&&!e.includes(n))},Dw=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=xw[e[r]];if(i&&i(n,e))return}return t(n,...s)},kw=st({patchProp:Ew},uw);let Eh;function Rw(){return Eh||(Eh=Hv(kw))}const Nw=(...t)=>{const e=Rw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Ow(s);if(!r)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ow(t){return Ue(t)?document.querySelector(t):t}var Pw=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ip;const fa=t=>Ip=t,Ep=Symbol();function Uc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Or;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Or||(Or={}));function Lw(){const t=Cf(!0),e=t.run(()=>ln({}));let n=[],s=[];const r=qs({install(i){fa(r),r._a=i,i.provide(Ep,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Pw?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const _p=()=>{};function _h(t,e,n,s=_p){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&xf()&&vy(r),r}function Ss(t,...e){t.slice().forEach(n=>{n(...e)})}function Bc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Uc(r)&&Uc(s)&&t.hasOwnProperty(n)&&!ke(s)&&!kn(s)?t[n]=Bc(r,s):t[n]=s}return t}const Mw=Symbol();function Fw(t){return!Uc(t)||!t.hasOwnProperty(Mw)}const{assign:vn}=Object;function Uw(t){return!!(ke(t)&&t.effect)}function Bw(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Yy(n.state.value[t]);return vn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=qs(At(()=>{fa(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Tp(t,l,e,n,s,!0),c}function Tp(t,e,n={},s,r,i){let o;const a=vn({actions:{}},n),c={deep:!0};let l,u,h=qs([]),d=qs([]),p;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),ln({});let v;function k($){let N;l=u=!1,typeof $=="function"?($(s.state.value[t]),N={type:Or.patchFunction,storeId:t,events:p}):(Bc(s.state.value[t],$),N={type:Or.patchObject,payload:$,storeId:t,events:p});const re=v=Symbol();Ml().then(()=>{v===re&&(l=!0)}),u=!0,Ss(h,N,s.state.value[t])}const T=i?function(){const{state:N}=n,re=N?N():{};this.$patch(oe=>{vn(oe,re)})}:_p;function M(){o.stop(),h=[],d=[],s._s.delete(t)}function S($,N){return function(){fa(s);const re=Array.from(arguments),oe=[],Ce=[];function Ve($e){oe.push($e)}function ft($e){Ce.push($e)}Ss(d,{args:re,name:$,store:V,after:Ve,onError:ft});let rt;try{rt=N.apply(this&&this.$id===t?this:V,re)}catch($e){throw Ss(Ce,$e),$e}return rt instanceof Promise?rt.then($e=>(Ss(oe,$e),$e)).catch($e=>(Ss(Ce,$e),Promise.reject($e))):(Ss(oe,rt),rt)}}const G={_p:s,$id:t,$onAction:_h.bind(null,d),$patch:k,$reset:T,$subscribe($,N={}){const re=_h(h,$,N.detached,()=>oe()),oe=o.run(()=>rn(()=>s.state.value[t],Ce=>{(N.flush==="sync"?u:l)&&$({storeId:t,type:Or.direct,events:p},Ce)},vn({},c,N)));return re},$dispose:M},V=lr(G);s._s.set(t,V);const Q=s._e.run(()=>(o=Cf(),o.run(()=>e())));for(const $ in Q){const N=Q[$];if(ke(N)&&!Uw(N)||kn(N))i||(m&&Fw(N)&&(ke(N)?N.value=m[$]:Bc(N,m[$])),s.state.value[t][$]=N);else if(typeof N=="function"){const re=S($,N);Q[$]=re,a.actions[$]=N}}return vn(V,Q),vn(ue(V),Q),Object.defineProperty(V,"$state",{get:()=>s.state.value[t],set:$=>{k(N=>{vn(N,$)})}}),s._p.forEach($=>{vn(V,o.run(()=>$({store:V,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(V.$state,m),l=!0,u=!0,V}function Vw(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=yp();return a=a||l&&Lt(Ep,null),a&&fa(a),a=Ip,a._s.has(s)||(i?Tp(s,e,r,a):Bw(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof window<"u";function $w(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function ec(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ut(r)?r.map(t):t(r)}return n}const Pr=()=>{},Ut=Array.isArray,jw=/\/$/,Hw=t=>t.replace(jw,"");function tc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=zw(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Kw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Th(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&zs(e.matched[s],n.matched[r])&&Sp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gw(t[n],e[n]))return!1;return!0}function Gw(t,e){return Ut(t)?Sh(t,e):Ut(e)?Sh(e,t):t===e}function Sh(t,e){return Ut(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function zw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Xr;(function(t){t.pop="pop",t.push="push"})(Xr||(Xr={}));var Lr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Lr||(Lr={}));function Qw(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Hw(t)}const Ww=/^[^#]+#/;function Xw(t,e){return t.replace(Ww,"#")+e}function Yw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const pa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Yw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ch(t,e){return(history.state?history.state.position-e:-1)+t}const Vc=new Map;function Zw(t,e){Vc.set(t,e)}function eb(t){const e=Vc.get(t);return Vc.delete(t),e}let tb=()=>location.protocol+"//"+location.host;function Cp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Th(c,"")}return Th(n,t)+s+r}function nb(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=Cp(t,location),m=n.value,v=e.value;let k=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}k=v?d.position-v.position:0}else s(p);r.forEach(T=>{T(n.value,m,{delta:k,type:Xr.pop,direction:k?k>0?Lr.forward:Lr.back:Lr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:pa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function xh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?pa():null}}function sb(t){const{history:e,location:n}=window,s={value:Cp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:tb()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=pe({},e.state,xh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=pe({},r.value,e.state,{forward:c,scroll:pa()});i(u.current,u,!0);const h=pe({},xh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function rb(t){t=Qw(t);const e=sb(t),n=nb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:t,go:s,createHref:Xw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ib(t){return typeof t=="string"||t&&typeof t=="object"}function xp(t){return typeof t=="string"||typeof t=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dp=Symbol("");var Dh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dh||(Dh={}));function Qs(t,e){return pe(new Error,{type:t,[Dp]:!0},e)}function Yt(t,e){return t instanceof Error&&Dp in t&&(e==null||!!(t.type&e))}const kh="[^/]+?",ob={sensitive:!1,strict:!1,start:!0,end:!0},ab=/[.+*?^${}()[\]/\\]/g;function cb(t,e){const n=pe({},ob,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(ab,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:v,optional:k,regexp:T}=d;i.push({name:m,repeatable:v,optional:k});const M=T||kh;if(M!==kh){p+=10;try{new RegExp(`(${M})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+G.message)}}let S=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(S=k&&l.length<2?`(?:/${S})`:"/"+S),k&&(S+="?"),r+=S,p+=20,k&&(p+=-8),v&&(p+=-20),M===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:k}=p,T=m in l?l[m]:"";if(Ut(T)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=Ut(T)?T.join("/"):T;if(!M)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function lb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ub(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=lb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Rh(s))return 1;if(Rh(r))return-1}return r.length-s.length}function Rh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hb={type:0,value:""},db=/[a-zA-Z0-9_]/;function fb(t){if(!t)return[[]];if(t==="/")return[[hb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:db.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function pb(t,e,n){const s=cb(fb(t.path),n),r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function gb(t,e){const n=[],s=new Map;e=Ph({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,m=mb(u);m.aliasOf=d&&d.record;const v=Ph(e,u),k=[m];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of S)k.push(pe({},m,{components:d?d.record.components:m.components,path:G,aliasOf:d?d.record:m}))}let T,M;for(const S of k){const{path:G}=S;if(h&&G[0]!=="/"){const V=h.record.path,Q=V[V.length-1]==="/"?"":"/";S.path=h.record.path+(G&&Q+G)}if(T=pb(S,h,v),d?d.alias.push(T):(M=M||T,M!==T&&M.alias.push(T),p&&u.name&&!Oh(T)&&o(u.name)),m.children){const V=m.children;for(let Q=0;Q<V.length;Q++)i(V[Q],T,d&&d.children[Q])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return M?()=>{o(M)}:Pr}function o(u){if(xp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ub(u,n[h])>=0&&(u.record.path!==n[h].record.path||!kp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Oh(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},m,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Qs(1,{location:u});v=d.record.name,p=pe(Nh(h.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Nh(u.params,d.keys.map(M=>M.name))),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(M=>M.re.test(m)),d&&(p=d.parse(m),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(M=>M.re.test(h.path)),!d)throw Qs(1,{location:u,currentLocation:h});v=d.record.name,p=pe({},h.params,u.params),m=d.stringify(p)}const k=[];let T=d;for(;T;)k.unshift(T.record),T=T.parent;return{name:v,path:m,params:p,matched:k,meta:yb(k)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Nh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function mb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ab(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ab(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Oh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yb(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Ph(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function kp(t,e){return e.children.some(n=>n===t||kp(t,n))}const Rp=/#/g,vb=/&/g,wb=/\//g,bb=/=/g,Ib=/\?/g,Np=/\+/g,Eb=/%5B/g,_b=/%5D/g,Op=/%5E/g,Tb=/%60/g,Pp=/%7B/g,Sb=/%7C/g,Lp=/%7D/g,Cb=/%20/g;function jl(t){return encodeURI(""+t).replace(Sb,"|").replace(Eb,"[").replace(_b,"]")}function xb(t){return jl(t).replace(Pp,"{").replace(Lp,"}").replace(Op,"^")}function $c(t){return jl(t).replace(Np,"%2B").replace(Cb,"+").replace(Rp,"%23").replace(vb,"%26").replace(Tb,"`").replace(Pp,"{").replace(Lp,"}").replace(Op,"^")}function Db(t){return $c(t).replace(bb,"%3D")}function kb(t){return jl(t).replace(Rp,"%23").replace(Ib,"%3F")}function Rb(t){return t==null?"":kb(t).replace(wb,"%2F")}function Co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Nb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Np," "),o=i.indexOf("="),a=Co(o<0?i:i.slice(0,o)),c=o<0?null:Co(i.slice(o+1));if(a in e){let l=e[a];Ut(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lh(t){let e="";for(let n in t){const s=t[n];if(n=Db(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(s)?s.map(i=>i&&$c(i)):[s&&$c(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ob(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ut(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Pb=Symbol(""),Mh=Symbol(""),ga=Symbol(""),Mp=Symbol(""),jc=Symbol("");function mr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Qs(4,{from:n,to:e})):h instanceof Error?a(h):ib(h)?a(Qs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function nc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Lb(a)){const l=(a.__vccOpts||a)[e];l&&r.push(bn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=$w(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,s,i,o)()}))}}return r}function Lb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fh(t){const e=Lt(ga),n=Lt(Mp),s=At(()=>e.resolve(sn(t.to))),r=At(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(zs.bind(null,u));if(d>-1)return d;const p=Uh(c[l-2]);return l>1&&Uh(u)===p&&h[h.length-1].path!==p?h.findIndex(zs.bind(null,c[l-2])):d}),i=At(()=>r.value>-1&&Bb(n.params,s.value.params)),o=At(()=>r.value>-1&&r.value===n.matched.length-1&&Sp(n.params,s.value.params));function a(c={}){return Ub(c)?e[sn(t.replace)?"replace":"push"](sn(t.to)).catch(Pr):Promise.resolve()}return{route:s,href:At(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Mb=sp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fh,setup(t,{slots:e}){const n=lr(Fh(t)),{options:s}=Lt(ga),r=At(()=>({[Bh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:bp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Fb=Mb;function Ub(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bb(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ut(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Uh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bh=(t,e,n)=>t??e??n,Vb=sp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Lt(jc),r=At(()=>t.route||s.value),i=Lt(Mh,0),o=At(()=>{let l=sn(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=At(()=>r.value.matched[o.value]);ao(Mh,At(()=>o.value+1)),ao(Pb,a),ao(jc,r);const c=ln();return rn(()=>[c.value,a.value,t.name],([l,u,h],[d,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!zs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Vh(n.default,{Component:d,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,k=bp(d,pe({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Vh(n.default,{Component:k,route:l})||k}}});function Vh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fp=Vb;function $b(t){const e=gb(t.routes,t),n=t.parseQuery||Nb,s=t.stringifyQuery||Lh,r=t.history,i=mr(),o=mr(),a=mr(),c=Qy(gn);let l=gn;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ec.bind(null,b=>""+b),h=ec.bind(null,Rb),d=ec.bind(null,Co);function p(b,L){let O,j;return xp(b)?(O=e.getRecordMatcher(b),j=L):j=b,e.addRoute(j,O)}function m(b){const L=e.getRecordMatcher(b);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(b=>b.record)}function k(b){return!!e.getRecordMatcher(b)}function T(b,L){if(L=pe({},L||c.value),typeof b=="string"){const f=tc(n,b,L.path),g=e.resolve({path:f.path},L),y=r.createHref(f.fullPath);return pe(f,g,{params:d(g.params),hash:Co(f.hash),redirectedFrom:void 0,href:y})}let O;if("path"in b)O=pe({},b,{path:tc(n,b.path,L.path).path});else{const f=pe({},b.params);for(const g in f)f[g]==null&&delete f[g];O=pe({},b,{params:h(b.params)}),L.params=h(L.params)}const j=e.resolve(O,L),he=b.hash||"";j.params=u(d(j.params));const Se=Kw(s,pe({},b,{hash:xb(he),path:j.path})),ne=r.createHref(Se);return pe({fullPath:Se,hash:he,query:s===Lh?Ob(b.query):b.query||{}},j,{redirectedFrom:void 0,href:ne})}function M(b){return typeof b=="string"?tc(n,b,c.value.path):pe({},b)}function S(b,L){if(l!==b)return Qs(8,{from:L,to:b})}function G(b){return $(b)}function V(b){return G(pe(M(b),{replace:!0}))}function Q(b){const L=b.matched[b.matched.length-1];if(L&&L.redirect){const{redirect:O}=L;let j=typeof O=="function"?O(b):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=M(j):{path:j},j.params={}),pe({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function $(b,L){const O=l=T(b),j=c.value,he=b.state,Se=b.force,ne=b.replace===!0,f=Q(O);if(f)return $(pe(M(f),{state:typeof f=="object"?pe({},he,f.state):he,force:Se,replace:ne}),L||O);const g=O;g.redirectedFrom=L;let y;return!Se&&qw(s,j,O)&&(y=Qs(16,{to:g,from:j}),Kn(j,j,!0,!1)),(y?Promise.resolve(y):re(g,j)).catch(w=>Yt(w)?Yt(w,2)?w:xt(w):ye(w,g,j)).then(w=>{if(w){if(Yt(w,2))return $(pe({replace:ne},M(w.to),{state:typeof w.to=="object"?pe({},he,w.to.state):he,force:Se}),L||g)}else w=Ce(g,j,!0,ne,he);return oe(g,j,w),w})}function N(b,L){const O=S(b,L);return O?Promise.reject(O):Promise.resolve()}function re(b,L){let O;const[j,he,Se]=jb(b,L);O=nc(j.reverse(),"beforeRouteLeave",b,L);for(const f of j)f.leaveGuards.forEach(g=>{O.push(bn(g,b,L))});const ne=N.bind(null,b,L);return O.push(ne),Cs(O).then(()=>{O=[];for(const f of i.list())O.push(bn(f,b,L));return O.push(ne),Cs(O)}).then(()=>{O=nc(he,"beforeRouteUpdate",b,L);for(const f of he)f.updateGuards.forEach(g=>{O.push(bn(g,b,L))});return O.push(ne),Cs(O)}).then(()=>{O=[];for(const f of b.matched)if(f.beforeEnter&&!L.matched.includes(f))if(Ut(f.beforeEnter))for(const g of f.beforeEnter)O.push(bn(g,b,L));else O.push(bn(f.beforeEnter,b,L));return O.push(ne),Cs(O)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),O=nc(Se,"beforeRouteEnter",b,L),O.push(ne),Cs(O))).then(()=>{O=[];for(const f of o.list())O.push(bn(f,b,L));return O.push(ne),Cs(O)}).catch(f=>Yt(f,8)?f:Promise.reject(f))}function oe(b,L,O){for(const j of a.list())j(b,L,O)}function Ce(b,L,O,j,he){const Se=S(b,L);if(Se)return Se;const ne=L===gn,f=Rs?history.state:{};O&&(j||ne?r.replace(b.fullPath,pe({scroll:ne&&f&&f.scroll},he)):r.push(b.fullPath,he)),c.value=b,Kn(b,L,O,ne),xt()}let Ve;function ft(){Ve||(Ve=r.listen((b,L,O)=>{if(!Vi.listening)return;const j=T(b),he=Q(j);if(he){$(pe(he,{replace:!0}),j).catch(Pr);return}l=j;const Se=c.value;Rs&&Zw(Ch(Se.fullPath,O.delta),pa()),re(j,Se).catch(ne=>Yt(ne,12)?ne:Yt(ne,2)?($(ne.to,j).then(f=>{Yt(f,20)&&!O.delta&&O.type===Xr.pop&&r.go(-1,!1)}).catch(Pr),Promise.reject()):(O.delta&&r.go(-O.delta,!1),ye(ne,j,Se))).then(ne=>{ne=ne||Ce(j,Se,!1),ne&&(O.delta&&!Yt(ne,8)?r.go(-O.delta,!1):O.type===Xr.pop&&Yt(ne,20)&&r.go(-1,!1)),oe(j,Se,ne)}).catch(Pr)}))}let rt=mr(),$e=mr(),Re;function ye(b,L,O){xt(b);const j=$e.list();return j.length?j.forEach(he=>he(b,L,O)):console.error(b),Promise.reject(b)}function ge(){return Re&&c.value!==gn?Promise.resolve():new Promise((b,L)=>{rt.add([b,L])})}function xt(b){return Re||(Re=!b,ft(),rt.list().forEach(([L,O])=>b?O(b):L()),rt.reset()),b}function Kn(b,L,O,j){const{scrollBehavior:he}=t;if(!Rs||!he)return Promise.resolve();const Se=!O&&eb(Ch(b.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return Ml().then(()=>he(b,L,Se)).then(ne=>ne&&Jw(ne)).catch(ne=>ye(ne,b,L))}const Dt=b=>r.go(b);let lt;const _s=new Set,Vi={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:k,getRoutes:v,resolve:T,options:t,push:G,replace:V,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:$e.add,isReady:ge,install(b){const L=this;b.component("RouterLink",Fb),b.component("RouterView",Fp),b.config.globalProperties.$router=L,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>sn(c)}),Rs&&!lt&&c.value===gn&&(lt=!0,G(r.location).catch(he=>{}));const O={};for(const he in gn)O[he]=At(()=>c.value[he]);b.provide(ga,L),b.provide(Mp,lr(O)),b.provide(jc,c);const j=b.unmount;_s.add(b),b.unmount=function(){_s.delete(b),_s.size<1&&(l=gn,Ve&&Ve(),Ve=null,c.value=gn,lt=!1,Re=!1),j()}}};return Vi}function Cs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function jb(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>zs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>zs(l,c))||r.push(c))}return[n,s,r]}function Hb(){return Lt(ga)}const Kb={__name:"App",setup(t){return(e,n)=>(Je(),Vl(sn(Fp)))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Gb;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zb=function(t){const e=Up(t);return Bp.encodeByteArray(e,!0)},xo=function(t){return zb(t).replace(/\./g,"")},Vp=function(t){try{return Bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=()=>Qb().__FIREBASE_DEFAULTS__,Xb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vp(t[1]);return e&&JSON.parse(e)},ma=()=>{try{return Wb()||Xb()||Yb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$p=t=>{var e,n;return(n=(e=ma())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jb=t=>{const e=$p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Zb=()=>{var t;return(t=ma())===null||t===void 0?void 0:t.config},jp=t=>{var e;return(e=ma())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xo(JSON.stringify(n)),xo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function sI(){var t;const e=(t=ma())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oI(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aI(){return!sI()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hp(){try{return typeof indexedDB=="object"}catch{return!1}}function cI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="FirebaseError";class fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lI,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?uI(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new fn(r,a,s)}}function uI(t,e){return t.replace(hI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const hI=/\{\$([^}]+)}/g;function dI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if($h(i)&&$h(o)){if(!Do(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function $h(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Cr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fI(t,e){const n=new pI(t,e);return n.subscribe.bind(n)}class pI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=sc),r.error===void 0&&(r.error=sc),r.complete===void 0&&(r.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new eI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:AI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AI(t){return t===Wn?void 0:t}function yI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const wI={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},bI=fe.INFO,II={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},EI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=II[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=bI,this._logHandler=EI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const _I=(t,e)=>e.some(n=>t instanceof n);let jh,Hh;function TI(){return jh||(jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return Hh||(Hh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kp=new WeakMap,Hc=new WeakMap,qp=new WeakMap,rc=new WeakMap,Kl=new WeakMap;function CI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kp.set(n,t)}).catch(()=>{}),Kl.set(e,t),e}function xI(t){if(Hc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hc.set(t,e)}let Kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DI(t){Kc=t(Kc)}function kI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ic(this),e,...n);return qp.set(s,e.sort?e.sort():[e]),Nn(s)}:SI().includes(t)?function(...e){return t.apply(ic(this),e),Nn(Kp.get(this))}:function(...e){return Nn(t.apply(ic(this),e))}}function RI(t){return typeof t=="function"?kI(t):(t instanceof IDBTransaction&&xI(t),_I(t,TI())?new Proxy(t,Kc):t)}function Nn(t){if(t instanceof IDBRequest)return CI(t);if(rc.has(t))return rc.get(t);const e=RI(t);return e!==t&&(rc.set(t,e),Kl.set(e,t)),e}const ic=t=>Kl.get(t);function NI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Nn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Nn(o.result),c.oldVersion,c.newVersion,Nn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const OI=["get","getKey","getAll","getAllKeys","count"],PI=["put","add","delete","clear"],oc=new Map;function Kh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oc.get(e))return oc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=PI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||OI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return oc.set(e,i),i}DI(t=>({...t,get:(e,n,s)=>Kh(e,n)||t.get(e,n,s),has:(e,n)=>!!Kh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qc="@firebase/app",qh="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Hl("@firebase/app"),FI="@firebase/app-compat",UI="@firebase/analytics-compat",BI="@firebase/analytics",VI="@firebase/app-check-compat",$I="@firebase/app-check",jI="@firebase/auth",HI="@firebase/auth-compat",KI="@firebase/database",qI="@firebase/database-compat",GI="@firebase/functions",zI="@firebase/functions-compat",QI="@firebase/installations",WI="@firebase/installations-compat",XI="@firebase/messaging",YI="@firebase/messaging-compat",JI="@firebase/performance",ZI="@firebase/performance-compat",eE="@firebase/remote-config",tE="@firebase/remote-config-compat",nE="@firebase/storage",sE="@firebase/storage-compat",rE="@firebase/firestore",iE="@firebase/firestore-compat",oE="firebase",aE="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="[DEFAULT]",cE={[qc]:"fire-core",[FI]:"fire-core-compat",[BI]:"fire-analytics",[UI]:"fire-analytics-compat",[$I]:"fire-app-check",[VI]:"fire-app-check-compat",[jI]:"fire-auth",[HI]:"fire-auth-compat",[KI]:"fire-rtdb",[qI]:"fire-rtdb-compat",[GI]:"fire-fn",[zI]:"fire-fn-compat",[QI]:"fire-iid",[WI]:"fire-iid-compat",[XI]:"fire-fcm",[YI]:"fire-fcm-compat",[JI]:"fire-perf",[ZI]:"fire-perf-compat",[eE]:"fire-rc",[tE]:"fire-rc-compat",[nE]:"fire-gcs",[sE]:"fire-gcs-compat",[rE]:"fire-fst",[iE]:"fire-fst-compat","fire-js":"fire-js",[oE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map,zc=new Map;function lE(t,e){try{t.container.addComponent(e)}catch(n){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ws(t){const e=t.name;if(zc.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,t);for(const n of ko.values())lE(n,t);return!0}function ql(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new gi("app","Firebase",uE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=aE;function Gp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw On.create("bad-app-name",{appName:String(r)});if(n||(n=Zb()),!n)throw On.create("no-options");const i=ko.get(r);if(i){if(Do(n,i.options)&&Do(s,i.config))return i;throw On.create("duplicate-app",{appName:r})}const o=new vI(r);for(const c of zc.values())o.addComponent(c);const a=new hE(n,s,o);return ko.set(r,a),a}function zp(t=Gc){const e=ko.get(t);if(!e&&t===Gc)return Gp();if(!e)throw On.create("no-app",{appName:t});return e}function Pn(t,e,n){var s;let r=(s=cE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(a.join(" "));return}Ws(new ds(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebase-heartbeat-database",fE=1,Yr="firebase-heartbeat-store";let ac=null;function Qp(){return ac||(ac=NI(dE,fE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yr)}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),ac}async function pE(t){try{return(await Qp()).transaction(Yr).objectStore(Yr).get(Wp(t))}catch(e){if(e instanceof fn)fs.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fs.warn(n.message)}}}async function Gh(t,e){try{const s=(await Qp()).transaction(Yr,"readwrite");return await s.objectStore(Yr).put(e,Wp(t)),s.done}catch(n){if(n instanceof fn)fs.warn(n.message);else{const s=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fs.warn(s.message)}}}function Wp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=1024,mE=30*24*60*60*1e3;class AE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=mE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zh(),{heartbeatsToSend:n,unsentEntries:s}=yE(this._heartbeatsCache.heartbeats),r=xo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function zh(){return new Date().toISOString().substring(0,10)}function yE(t,e=gE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Qh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hp()?cI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qh(t){return xo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){Ws(new ds("platform-logger",e=>new LI(e),"PRIVATE")),Ws(new ds("heartbeat",e=>new AE(e),"PRIVATE")),Pn(qc,qh,t),Pn(qc,qh,"esm2017"),Pn("fire-js","")}wE("");var bE="firebase",IE="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(bE,IE,"app");var EE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Gl=Gl||{},Y=EE||self;function Ro(){}function Aa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _E(t){return Object.prototype.hasOwnProperty.call(t,cc)&&t[cc]||(t[cc]=++TE)}var cc="closure_uid_"+(1e9*Math.random()>>>0),TE=0;function SE(t,e,n){return t.call.apply(t.bind,arguments)}function CE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=SE:tt=CE,tt.apply(null,arguments)}function zi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Vn(){this.s=this.s,this.o=this.o}var xE=0;Vn.prototype.s=!1;Vn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),xE!=0)&&_E(this)};Vn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Wh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Aa(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var DE=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Ro,e),Y.removeEventListener("test",Ro,e)}catch{}return t}();function No(t){return/^[\s\xa0]*$/.test(t)}var Xh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lc(t,e){return t<e?-1:t>e?1:0}function ya(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return ya().indexOf(t)!=-1}function Ql(t){return Ql[" "](t),t}Ql[" "]=Ro;function kE(t){var e=OE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var RE=qt("Opera"),Xs=qt("Trident")||qt("MSIE"),Yp=qt("Edge"),Qc=Yp||Xs,Jp=qt("Gecko")&&!(ya().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),NE=ya().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function Zp(){var t=Y.document;return t?t.documentMode:void 0}var Oo;e:{var uc="",hc=function(){var t=ya();if(Jp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yp)return/Edge\/([\d\.]+)/.exec(t);if(Xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(NE)return/WebKit\/(\S+)/.exec(t);if(RE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hc&&(uc=hc?hc[1]:""),Xs){var dc=Zp();if(dc!=null&&dc>parseFloat(uc)){Oo=String(dc);break e}}Oo=uc}var OE={};function PE(){return kE(function(){let t=0;const e=Xh(String(Oo)).split("."),n=Xh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=lc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||lc(r[2].length==0,i[2].length==0)||lc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Wc;if(Y.document&&Xs){var Yh=Zp();Wc=Yh||parseInt(Oo,10)||void 0}else Wc=void 0;var LE=Wc;function Jr(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jp){e:{try{Ql(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ME[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jr.X.h.call(this)}}Xe(Jr,nt);var ME={2:"touch",3:"pen",4:"mouse"};Jr.prototype.h=function(){Jr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vi="closure_listenable_"+(1e6*Math.random()|0),FE=0;function UE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++FE,this.ba=this.ea=!1}function va(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function eg(t){const e={};for(const n in t)e[n]=t[n];return e}const Jh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Jh.length;i++)n=Jh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function wa(t){this.src=t,this.g={},this.h=0}wa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Yc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new UE(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Xc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Xp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(va(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Yc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Xl="closure_lm_"+(1e6*Math.random()|0),fc={};function ng(t,e,n,s,r){if(s&&s.once)return rg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ng(t,e[i],n,s,r);return null}return n=Zl(n),t&&t[vi]?t.N(e,n,yi(s)?!!s.capture:!!s,r):sg(t,e,n,!1,s,r)}function sg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=yi(r)?!!r.capture:!!r,a=Jl(t);if(a||(t[Xl]=a=new wa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=BE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)DE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(og(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BE(){function t(n){return e.call(t.src,t.listener,n)}const e=VE;return t}function rg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rg(t,e[i],n,s,r);return null}return n=Zl(n),t&&t[vi]?t.O(e,n,yi(s)?!!s.capture:!!s,r):sg(t,e,n,!0,s,r)}function ig(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ig(t,e[i],n,s,r);else s=yi(s)?!!s.capture:!!s,n=Zl(n),t&&t[vi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Yc(i,n,s,r),-1<n&&(va(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Yc(e,n,s,r)),(n=-1<t?e[t]:null)&&Yl(n))}function Yl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[vi])Xc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(og(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Jl(e))?(Xc(n,t),n.h==0&&(n.src=null,e[Xl]=null)):va(t)}}}function og(t){return t in fc?fc[t]:fc[t]="on"+t}function VE(t,e){if(t.ba)t=!0;else{e=new Jr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Yl(t),t=n.call(s,e)}return t}function Jl(t){return t=t[Xl],t instanceof wa?t:null}var pc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zl(t){return typeof t=="function"?t:(t[pc]||(t[pc]=function(e){return t.handleEvent(e)}),t[pc])}function Ke(){Vn.call(this),this.i=new wa(this),this.P=this,this.I=null}Xe(Ke,Vn);Ke.prototype[vi]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){ig(this,t,e,n,s)};function We(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var r=e;e=new nt(s,t),tg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Qi(o,s,!0,e)&&r}if(o=e.g=t,r=Qi(o,s,!0,e)&&r,r=Qi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Qi(o,s,!1,e)&&r}Ke.prototype.M=function(){if(Ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)va(n[s]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Xc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var eu=Y.JSON.stringify;function $E(){var t=lg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jE{constructor(){this.h=this.g=null}add(e,n){const s=ag.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ag=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new HE,t=>t.reset());class HE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KE(t){Y.setTimeout(()=>{throw t},0)}function cg(t,e){Jc||qE(),Zc||(Jc(),Zc=!0),lg.add(t,e)}var Jc;function qE(){var t=Y.Promise.resolve(void 0);Jc=function(){t.then(GE)}}var Zc=!1,lg=new jE;function GE(){for(var t;t=$E();){try{t.h.call(t.g)}catch(n){KE(n)}var e=ag;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zc=!1}function ba(t,e){Ke.call(this),this.h=t||1,this.g=e||Y,this.j=tt(this.lb,this),this.l=Date.now()}Xe(ba,Ke);B=ba.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),We(this,"tick"),this.ca&&(tu(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){ba.X.M.call(this),tu(this),delete this.g};function nu(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function ug(t){t.g=nu(()=>{t.g=null,t.i&&(t.i=!1,ug(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zE extends Vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ug(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(t){Vn.call(this),this.h=t,this.g={}}Xe(Zr,Vn);var Zh=[];function hg(t,e,n,s){Array.isArray(n)||(n&&(Zh[0]=n.toString()),n=Zh);for(var r=0;r<n.length;r++){var i=ng(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function dg(t){Wl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yl(e)},t),t.g={}}Zr.prototype.M=function(){Zr.X.M.call(this),dg(this)};Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ia(){this.g=!0}Ia.prototype.Aa=function(){this.g=!1};function QE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function WE(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ls(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+YE(t,n)+(s?" "+s:"")})}function XE(t,e){t.info(function(){return"TIMEOUT: "+e})}Ia.prototype.info=function(){};function YE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return eu(n)}catch{return e}}var Is={},ed=null;function Ea(){return ed=ed||new Ke}Is.Pa="serverreachability";function fg(t){nt.call(this,Is.Pa,t)}Xe(fg,nt);function ei(t){const e=Ea();We(e,new fg(e))}Is.STAT_EVENT="statevent";function pg(t,e){nt.call(this,Is.STAT_EVENT,t),this.stat=e}Xe(pg,nt);function ot(t){const e=Ea();We(e,new pg(e,t))}Is.Qa="timingevent";function gg(t,e){nt.call(this,Is.Qa,t),this.size=e}Xe(gg,nt);function wi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var _a={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},mg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function su(){}su.prototype.h=null;function td(t){return t.h||(t.h=t.i())}function Ag(){}var bi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ru(){nt.call(this,"d")}Xe(ru,nt);function iu(){nt.call(this,"c")}Xe(iu,nt);var el;function Ta(){}Xe(Ta,su);Ta.prototype.g=function(){return new XMLHttpRequest};Ta.prototype.i=function(){return{}};el=new Ta;function Ii(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Zr(this),this.O=JE,t=Qc?125:void 0,this.T=new ba(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new yg}function yg(){this.i=null,this.g="",this.h=!1}var JE=45e3,tl={},Po={};B=Ii.prototype;B.setTimeout=function(t){this.O=t};function nl(t,e,n){t.K=1,t.v=Ca(un(e)),t.s=n,t.P=!0,vg(t,null)}function vg(t,e){t.F=Date.now(),Ei(t),t.A=un(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Cg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new yg,t.g=Qg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zE(tt(t.La,t,t.g),t.N)),hg(t.S,t.g,"readystatechange",t.ib),e=t.H?eg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ei(),QE(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&Zt(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const u=Zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Qc||this.g&&(this.h.h||this.g.fa()||id(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ei(3):ei(2)),Sa(this);var n=this.g.aa();this.Y=n;t:if(wg(this)){var s=id(this.g);t="";var r=s.length,i=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),Mr(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,WE(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!No(a)){var l=a;break t}}l=null}if(n=l)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sl(this,n);else{this.i=!1,this.o=3,ot(12),is(this),Mr(this);break e}}this.P?(bg(this,u,o),Qc&&this.i&&u==3&&(hg(this.S,this.T,"tick",this.hb),this.T.start())):(Ls(this.j,this.m,o,null),sl(this,o)),u==4&&is(this),this.i&&!this.I&&(u==4?Kg(this.l,this):(this.i=!1,Ei(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),is(this),Mr(this)}}}catch{}finally{}};function wg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function bg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=ZE(t,n),r==Po){e==4&&(t.o=4,ot(14),s=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(r==tl){t.o=4,ot(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ls(t.j,t.m,r,null),sl(t,r);wg(t)&&r!=Po&&r!=tl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),du(e),e.K=!0,ot(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),is(t),Mr(t))}B.hb=function(){if(this.g){var t=Zt(this.g),e=this.g.fa();this.C<e.length&&(Sa(this),bg(this,t,e),this.i&&t!=4&&Ei(this))}};function ZE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Po:(n=Number(e.substring(n,s)),isNaN(n)?tl:(s+=1,s+n>e.length?Po:(e=e.substr(s,n),t.C=s+n,e)))}B.cancel=function(){this.I=!0,is(this)};function Ei(t){t.V=Date.now()+t.O,Ig(t,t.O)}function Ig(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wi(tt(t.gb,t),e)}function Sa(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(XE(this.j,this.A),this.K!=2&&(ei(),ot(17)),is(this),this.o=2,Mr(this)):Ig(this,this.V-t)};function Mr(t){t.l.G==0||t.I||Kg(t.l,t)}function is(t){Sa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,tu(t.T),dg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function sl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||rl(n.h,t))){if(!t.J&&rl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fo(n),ka(n);else break e;hu(n),ot(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=wi(tt(n.cb,n),6e3));if(1>=kg(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else os(n,11)}else if((t.J||n.g==t)&&Fo(n),!No(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ou(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Ee(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=zg(s,s.H?s.ka:null,s.V),o.J){Rg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Sa(a),Ei(a)),s.g=o}else jg(s);0<n.i.length&&Ra(n)}else l[0]!="stop"&&l[0]!="close"||os(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?os(n,7):uu(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ei(4)}catch{}}function e0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Aa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function t0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Aa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Eg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Aa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=t0(t),s=e0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var _g=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function n0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof us){this.h=e!==void 0?e:t.h,Lo(this,t.j),this.s=t.s,this.g=t.g,Mo(this,t.m),this.l=t.l,e=t.i;var n=new ti;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nd(this,n),this.o=t.o}else t&&(n=String(t).match(_g))?(this.h=!!e,Lo(this,n[1]||"",!0),this.s=xr(n[2]||""),this.g=xr(n[3]||"",!0),Mo(this,n[4]),this.l=xr(n[5]||"",!0),nd(this,n[6]||"",!0),this.o=xr(n[7]||"")):(this.h=!!e,this.i=new ti(null,this.h))}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dr(e,sd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Dr(e,sd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Dr(n,n.charAt(0)=="/"?i0:r0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dr(n,a0)),t.join("")};function un(t){return new us(t)}function Lo(t,e,n){t.j=n?xr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nd(t,e,n){e instanceof ti?(t.i=e,c0(t.i,t.h)):(n||(e=Dr(e,o0)),t.i=new ti(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Ca(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,s0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function s0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sd=/[#\/\?@]/g,r0=/[#\?:]/g,i0=/[#\?]/g,o0=/[#\?@]/g,a0=/#/g;function ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $n(t){t.g||(t.g=new Map,t.h=0,t.i&&n0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=ti.prototype;B.add=function(t,e){$n(this),this.i=null,t=ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Tg(t,e){$n(t),e=ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sg(t,e){return $n(t),e=ur(t,e),t.g.has(e)}B.forEach=function(t,e){$n(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};B.oa=function(){$n(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};B.W=function(t){$n(this);let e=[];if(typeof t=="string")Sg(this,t)&&(e=e.concat(this.g.get(ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return $n(this),this.i=null,t=ur(this,t),Sg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Cg(t,e,n){Tg(t,e),0<n.length&&(t.i=null,t.g.set(ur(t,e),zl(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function c0(t,e){e&&!t.j&&($n(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Tg(this,s),Cg(this,r,n))},t)),t.j=e}var l0=class{constructor(t,e){this.h=t,this.g=e}};function xg(t){this.l=t||u0,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var u0=10;function Dg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kg(t){return t.h?1:t.g?t.g.size:0}function rl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ou(t,e){t.g?t.g.add(e):t.h=e}function Rg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}xg.prototype.cancel=function(){if(this.i=Ng(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ng(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zl(t.i)}function au(){}au.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};au.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function h0(){this.g=new au}function d0(t,e,n){const s=n||"";try{Eg(t,function(r,i){let o=r;yi(r)&&(o=eu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function f0(t,e){const n=new Ia;if(Y.Image){const s=new Image;s.onload=zi(Wi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=zi(Wi,n,s,"TestLoadImage: error",!1,e),s.onabort=zi(Wi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=zi(Wi,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Wi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function _i(t){this.l=t.ac||null,this.j=t.jb||!1}Xe(_i,su);_i.prototype.g=function(){return new xa(this.l,this.j)};_i.prototype.i=function(t){return function(){return t}}({});function xa(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=cu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(xa,Ke);var cu=0;B=xa.prototype;B.open=function(t,e){if(this.readyState!=cu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ni(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=cu};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Og(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Og(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ti(this):ni(this),this.readyState==3&&Og(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,Ti(this))};B.Ua=function(t){this.g&&(this.response=t,Ti(this))};B.ga=function(){this.g&&Ti(this)};function Ti(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ni(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ni(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var p0=Y.JSON.parse;function De(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pg,this.K=this.L=!1}Xe(De,Ke);var Pg="",g0=/^https?$/i,m0=["POST","PUT"];B=De.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():el.g(),this.C=this.u?td(this.u):td(el),this.g.onreadystatechange=tt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){rd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Y.FormData&&t instanceof Y.FormData,!(0<=Xp(m0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fg(this),0<this.B&&((this.K=A0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.qa,this)):this.A=nu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rd(this,i)}};function A0(t){return Xs&&PE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof Gl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Lg(t),Da(t)}function Lg(t){t.D||(t.D=!0,We(t,"complete"),We(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Da(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Da(this,!0)),De.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?Mg(this):this.fb())};B.fb=function(){Mg(this)};function Mg(t){if(t.h&&typeof Gl<"u"&&(!t.C[1]||Zt(t)!=4||t.aa()!=2)){if(t.v&&Zt(t)==4)nu(t.Ha,0,t);else if(We(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(_g)[1]||null;if(!r&&Y.self&&Y.self.location){var i=Y.self.location.protocol;r=i.substr(0,i.length-1)}s=!g0.test(r?r.toLowerCase():"")}n=s}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var o=2<Zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Lg(t)}}finally{Da(t)}}}}function Da(t,e){if(t.g){Fg(t);const n=t.g,s=t.C[0]?Ro:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=s}catch{}}}function Fg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function Zt(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),p0(e)}};function id(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Pg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ug(t){let e="";return Wl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function lu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ug(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Ar(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bg(t){this.Ca=0,this.i=[],this.j=new Ia,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ar("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ar("baseRetryDelayMs",5e3,t),this.bb=Ar("retryDelaySeedMs",1e4,t),this.$a=Ar("forwardChannelMaxRetries",2,t),this.ta=Ar("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new xg(t&&t.concurrentRequestLimit),this.Fa=new h0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=Bg.prototype;B.ma=8;B.G=1;function uu(t){if(Vg(t),t.G==3){var e=t.U++,n=un(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Si(t,n),e=new Ii(t,t.j,e,void 0),e.K=2,e.v=Ca(un(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ei(e)}Gg(t)}function ka(t){t.g&&(du(t),t.g.cancel(),t.g=null)}function Vg(t){ka(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Fo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Ra(t){Dg(t.h)||t.m||(t.m=!0,cg(t.Ja,t),t.C=0)}function y0(t,e){return kg(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=wi(tt(t.Ja,t,e),qg(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ii(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=eg(i),tg(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$g(this,r,e),n=un(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),Si(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Ug(i)))+"&"+e:this.o&&lu(n,this.o,i)),ou(this.h,r),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),r.Z=!0,nl(r,n,null)):nl(r,n,e),this.G=2}}else this.G==3&&(t?od(this,t):this.i.length==0||Dg(this.h)||od(this))};function od(t,e){var n;e?n=e.m:n=t.U++;const s=un(t.F);Ee(s,"SID",t.I),Ee(s,"RID",n),Ee(s,"AID",t.T),Si(t,s),t.o&&t.s&&lu(s,t.o,t.s),n=new Ii(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$g(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ou(t.h,n),nl(n,s,e)}function Si(t,e){t.ia&&Wl(t.ia,function(n,s){Ee(e,s,n)}),t.l&&Eg({},function(n,s){Ee(e,s,n)})}function $g(t,e,n){n=Math.min(t.i.length,n);var s=t.l?tt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{d0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function jg(t){t.g||t.u||(t.Z=1,cg(t.Ia,t),t.A=0)}function hu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=wi(tt(t.Ia,t),qg(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,Hg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=wi(tt(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),ka(this),Hg(this))};function du(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Hg(t){t.g=new Ii(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=un(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),Si(t,e),t.o&&t.s&&lu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ca(un(e)),n.s=null,n.P=!0,vg(n,t)}B.cb=function(){this.v!=null&&(this.v=null,ka(this),hu(this),ot(19))};function Fo(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Kg(t,e){var n=null;if(t.g==e){Fo(t),du(t),t.g=null;var s=2}else if(rl(t.h,e))n=e.D,Rg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ea(),We(s,new gg(s,n)),Ra(t)}else jg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&y0(t,e)||s==2&&hu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:os(t,5);break;case 4:os(t,10);break;case 3:os(t,6);break;default:os(t,2)}}}function qg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function os(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=tt(t.kb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Lo(n,"https"),Ca(n)),f0(n.toString(),s)}else ot(2);t.G=0,t.l&&t.l.va(e),Gg(t),Vg(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Gg(t){if(t.G=0,t.la=[],t.l){const e=Ng(t.h);(e.length!=0||t.i.length!=0)&&(Wh(t.la,e),Wh(t.la,t.i),t.h.i.length=0,zl(t.i),t.i.length=0),t.l.ua()}}function zg(t,e,n){var s=n instanceof us?un(n):new us(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Mo(s,s.m);else{var r=Y.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new us(null,void 0);s&&Lo(i,s),e&&(i.g=e),r&&Mo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ma),Si(t,s),s}function Qg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new De(new _i({jb:!0})):new De(t.ra),e.Ka(t.H),e}function Wg(){}B=Wg.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function Uo(){if(Xs&&!(10<=Number(LE)))throw Error("Environmental error: no available transport.")}Uo.prototype.g=function(t,e){return new bt(t,e)};function bt(t,e){Ke.call(this),this.g=new Bg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!No(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!No(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hr(this)}Xe(bt,Ke);bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=zg(t,null,t.V),Ra(t)};bt.prototype.close=function(){uu(this.g)};bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=eu(t),t=n);e.i.push(new l0(e.ab++,t)),e.G==3&&Ra(e)};bt.prototype.M=function(){this.g.l=null,delete this.j,uu(this.g),delete this.g,bt.X.M.call(this)};function Xg(t){ru.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(Xg,ru);function Yg(){iu.call(this),this.status=1}Xe(Yg,iu);function hr(t){this.g=t}Xe(hr,Wg);hr.prototype.xa=function(){We(this.g,"a")};hr.prototype.wa=function(t){We(this.g,new Xg(t))};hr.prototype.va=function(t){We(this.g,new Yg)};hr.prototype.ua=function(){We(this.g,"b")};Uo.prototype.createWebChannel=Uo.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;_a.NO_ERROR=0;_a.TIMEOUT=8;_a.HTTP_ERROR=6;mg.COMPLETE="complete";Ag.EventType=bi;bi.OPEN="a";bi.CLOSE="b";bi.ERROR="c";bi.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.Oa;De.prototype.getLastErrorCode=De.prototype.Ea;De.prototype.getStatus=De.prototype.aa;De.prototype.getResponseJson=De.prototype.Sa;De.prototype.getResponseText=De.prototype.fa;De.prototype.send=De.prototype.da;De.prototype.setWithCredentials=De.prototype.Ka;var v0=function(){return new Uo},w0=function(){return Ea()},gc=_a,b0=mg,I0=Is,ad={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},E0=_i,Xi=Ag,_0=De;const cd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Hl("@firebase/firestore");function il(){return ps.logLevel}function D(t,...e){if(ps.logLevel<=fe.DEBUG){const n=e.map(fu);ps.debug(`Firestore (${dr}): ${t}`,...n)}}function yt(t,...e){if(ps.logLevel<=fe.ERROR){const n=e.map(fu);ps.error(`Firestore (${dr}): ${t}`,...n)}}function Bo(t,...e){if(ps.logLevel<=fe.WARN){const n=e.map(fu);ps.warn(`Firestore (${dr}): ${t}`,...n)}}function fu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+t;throw yt(e),new Error(e)}function W(t,e){t||z()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class S0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C0{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new on;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new on,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new on)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(W(typeof s.accessToken=="string"),new Jg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new Ge(e)}}class x0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(W(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class D0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new x0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.A=n.token,new k0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=N0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function Ys(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}function em(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new xe(0,0))}static max(){return new le(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends si{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const O0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends si{construct(e,n,s){return new Le(e,n,s)}static isValidIdentifier(e){return O0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new H(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new H(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new H(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(Ie.fromString(e))}static fromName(e){return new F(Ie.fromString(e).popFirst(5))}static empty(){return new F(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n,s,r){this.indexId=e,this.collectionGroup=n,this.fields=s,this.indexState=r}}function ol(t){return t.fields.find(e=>e.kind===2)}function Xn(t){return t.fields.filter(e=>e.kind!==2)}tm.UNKNOWN_ID=-1;class P0{constructor(e,n){this.fieldPath=e,this.kind=n}}class Vo{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Vo(0,It.min())}}function L0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=le.fromTimestamp(s===1e9?new xe(n+1,0):new xe(n,s));return new It(r,F.empty(),e)}function nm(t){return new It(t.readTime,t.key,-1)}class It{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new It(le.min(),F.empty(),-1)}static max(){return new It(le.max(),F.empty(),-1)}}function pu(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==sm)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new on,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Fr(e,n.error)):this.P.resolve()},this.transaction.onerror=s=>{const r=gu(s.target.error);this.P.reject(new Fr(e,r))}}static open(e,n,s,r){try{return new Oa(n,e.transaction(r,s))}catch(i){throw new Fr(n,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(D("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new F0(n)}}class en{constructor(e,n,s){this.name=e,this.version=n,this.S=s,en.D(Be())===12.2&&yt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return D("SimpleDb","Removing database:",e),es(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Hp())return!1;if(en.N())return!0;const e=Be(),n=en.D(e),s=0<n&&n<10,r=en.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.$)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const n=e.match(/Android ([\d.]+)/i),s=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async O(e){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;n(o)},r.onblocked=()=>{s(new Fr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new H(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new H(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Fr(e,o))},r.onupgradeneeded=i=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.F(o,r.transaction,i.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,s,r){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Oa.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),A.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(D("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class M0{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return es(this.q.delete())}}class Fr extends H{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Es(t){return t.name==="IndexedDbTransactionError"}class F0{constructor(e){this.store=e}put(e,n){let s;return n!==void 0?(D("SimpleDb","PUT",this.store.name,e,n),s=this.store.put(n,e)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),es(s)}add(e){return D("SimpleDb","ADD",this.store.name,e,e),es(this.store.add(e))}get(e){return es(this.store.get(e)).next(n=>(n===void 0&&(n=null),D("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return D("SimpleDb","DELETE",this.store.name,e),es(this.store.delete(e))}count(){return D("SimpleDb","COUNT",this.store.name),es(this.store.count())}W(e,n){const s=this.options(e,n);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.H(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new A((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}J(e,n){const s=this.store.getAll(e,n===null?void 0:n);return new A((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Y(e,n){D("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,n);s.Z=!1;const r=this.cursor(s);return this.H(r,(i,o,a)=>a.delete())}X(e,n){let s;n?s=e:(s={},n=e);const r=this.cursor(s);return this.H(r,n)}tt(e){const n=this.cursor({});return new A((s,r)=>{n.onerror=i=>{const o=gu(i.target.error);r(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,n){const s=[];return new A((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new M0(a),l=n(a.primaryKey,a.value,c);if(l instanceof A){const u=l.catch(h=>(c.done(),A.reject(h)));s.push(u)}c.isDone?r():c.G===null?a.continue():a.continue(c.G)}}).next(()=>A.waitFor(s))}options(e,n){let s;return e!==void 0&&(typeof e=="string"?s=e:n=e),{index:s,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const s=this.store.index(e.index);return e.Z?s.openKeyCursor(e.range,n):s.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function es(t){return new A((e,n)=>{t.onsuccess=s=>{const r=s.target.result;e(r)},t.onerror=s=>{const r=gu(s.target.error);n(r)}})}let ld=!1;function gu(t){const e=en.D(Be());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const s=new H("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ld||(ld=!0,setTimeout(()=>{throw s},0)),s}}return t}class U0{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){D("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{D("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Es(n)?D("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Na(n)}await this.nt(6e4)})}}class B0{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const s=new Set;let r=n,i=!0;return A.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return D("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>n-r)}rt(e,n,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(r=>this.localStore.localDocuments.getNextDocuments(e,n,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(r,i)).next(a=>(D("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let s=e;return n.changes.forEach((r,i)=>{const o=nm(i);pu(o,s)>0&&(s=o)}),new It(s.readTime,s.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ot.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function im(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return t==null}function ri(t){return t===0&&1/t==-1/0}function $0(t){return typeof t=="number"&&Number.isInteger(t)&&!ri(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new j0("Invalid base64 string: "+r):r}}(e);return new Bt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const H0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gs(t){if(W(!!t),typeof t=="string"){let e=0;const n=H0.exec(t);if(W(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zs(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $o(t){const e=gs(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ho={nullValue:"NULL_VALUE"};function er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?K0(t)?4:om(t)?9007199254740991:10:z()}function Xt(t,e){if(t===e)return!0;const n=er(t);if(n!==er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $o(t).isEqual($o(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=gs(s.timestampValue),o=gs(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Zs(s.bytesValue).isEqual(Zs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Me(s.geoPointValue.latitude)===Me(r.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Me(s.integerValue)===Me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Me(s.doubleValue),o=Me(r.doubleValue);return i===o?ri(i)===ri(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ud(i)!==ud(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Xt(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function ii(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Fn(t,e){if(t===e)return 0;const n=er(t),s=er(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Me(r.integerValue||r.doubleValue),a=Me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hd(t.timestampValue,e.timestampValue);case 4:return hd($o(t),$o(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Zs(r),a=Zs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=se(o[c],a[c]);if(l!==0)return l}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(Me(r.latitude),Me(i.latitude));return o!==0?o:se(Me(r.longitude),Me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Fn(o[c],a[c]);if(l)return l}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Cn.mapValue&&i===Cn.mapValue)return 0;if(r===Cn.mapValue)return 1;if(i===Cn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=se(a[u],l[u]);if(h!==0)return h;const d=Fn(o[a[u]],c[l[u]]);if(d!==0)return d}return se(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function hd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=gs(t),s=gs(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function tr(t){return al(t)}function al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=gs(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=al(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${al(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function mu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cl(t){return!!t&&"integerValue"in t}function oi(t){return!!t&&"arrayValue"in t}function dd(t){return!!t&&"nullValue"in t}function fd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fo(t){return!!t&&"mapValue"in t}function Ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ur(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function om(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function q0(t){return"nullValue"in t?ho:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?mu(Js.empty(),F.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:z()}function G0(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?mu(Js.empty(),F.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Cn:z()}function pd(t,e){const n=Fn(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function gd(t,e){const n=Fn(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){this.position=e,this.inclusive=n}}function md(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=F.comparator(F.fromName(o.referenceValue),n.key):s=Fn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ad(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{}class ae extends am{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new z0(e,n,s):n==="array-contains"?new X0(e,s):n==="in"?new fm(e,s):n==="not-in"?new Y0(e,s):n==="array-contains-any"?new J0(e,s):new ae(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Q0(e,s):new W0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fn(n,this.value)):n!==null&&er(this.value)===er(n)&&this.matchesComparison(Fn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ae extends am{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Ae(e,n)}matches(e){return sr(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function sr(t){return t.op==="and"}function ll(t){return t.op==="or"}function Au(t){return cm(t)&&sr(t)}function cm(t){for(const e of t.filters)if(e instanceof Ae)return!1;return!0}function ul(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+tr(t.value);if(Au(t))return t.filters.map(e=>ul(e)).join(",");{const e=t.filters.map(n=>ul(n)).join(",");return`${t.op}(${e})`}}function lm(t,e){return t instanceof ae?function(n,s){return s instanceof ae&&n.op===s.op&&n.field.isEqual(s.field)&&Xt(n.value,s.value)}(t,e):t instanceof Ae?function(n,s){return s instanceof Ae&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&lm(i,s.filters[o]),!0):!1}(t,e):void z()}function um(t,e){const n=t.filters.concat(e);return Ae.create(n,t.op)}function hm(t){return t instanceof ae?function(e){return`${e.field.canonicalString()} ${e.op} ${tr(e.value)}`}(t):t instanceof Ae?function(e){return e.op.toString()+" {"+e.getFilters().map(hm).join(" ,")+"}"}(t):"Filter"}class z0 extends ae{constructor(e,n,s){super(e,n,s),this.key=F.fromName(s.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class Q0 extends ae{constructor(e,n){super(e,"in",n),this.keys=dm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W0 extends ae{constructor(e,n){super(e,"not-in",n),this.keys=dm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>F.fromName(s.referenceValue))}class X0 extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oi(n)&&ii(n.arrayValue,this.value)}}class fm extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ii(this.value.arrayValue,n)}}class Y0 extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ii(this.value.arrayValue,n)}}class J0 extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ii(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n="asc"){this.field=e,this.dir=n}}function Z0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yi(this.root,e,this.comparator,!0)}}class Yi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ze.RED,this.left=r??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ze(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yd(this.data.getIterator())}getIteratorFrom(e){return new yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function xs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new _e(Le.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ur(n)}setAll(e){let n=Le.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ur(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];fo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ci(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new vt(Ur(this.value))}}function pm(t){const e=[];return Ci(t.fields,(n,s)=>{const r=new Le([n]);if(fo(s)){const i=pm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,le.min(),le.min(),le.min(),vt.empty(),0)}static newFoundDocument(e,n,s,r){return new Qe(e,1,n,le.min(),s,r,0)}static newNoDocument(e,n){return new Qe(e,2,n,le.min(),le.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,le.min(),le.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function hl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new e_(t,e,n,s,r,i,o)}function ms(t){const e=we(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ul(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>tr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>tr(s)).join(",")),e._t=n}return e._t}function xi(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Z0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ad(t.startAt,e.startAt)&&Ad(t.endAt,e.endAt)}function t_(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function jo(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function vd(t,e,n){let s=ho,r=!0;for(const i of jo(t,e)){let o=ho,a=!0;switch(i.op){case"<":case"<=":o=q0(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=ho}pd({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];pd({value:s,inclusive:r},{value:o,inclusive:n.inclusive})<0&&(s=o,r=n.inclusive);break}}return{value:s,inclusive:r}}function wd(t,e,n){let s=Cn,r=!0;for(const i of jo(t,e)){let o=Cn,a=!0;switch(i.op){case">=":case">":o=G0(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Cn}gd({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];gd({value:s,inclusive:r},{value:o,inclusive:n.inclusive})>0&&(s=o,r=n.inclusive);break}}return{value:s,inclusive:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function n_(t,e,n,s,r,i,o,a){return new La(t,e,n,s,r,i,o,a)}function gm(t){return new La(t)}function bd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function s_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function r_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function i_(t){return t.collectionGroup!==null}function Vs(t){const e=we(t);if(e.wt===null){e.wt=[];const n=r_(e),s=s_(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Br(n)),e.wt.push(new Br(Le.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Br(Le.keyField(),i))}}}return e.wt}function Un(t){const e=we(t);if(!e.gt)if(e.limitType==="F")e.gt=hl(e.path,e.collectionGroup,Vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Vs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Br(i.field,o))}const s=e.endAt?new nr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new nr(e.startAt.position,e.startAt.inclusive):null;e.gt=hl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function dl(t,e,n){return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mm(t,e){return xi(Un(t),Un(e))&&t.limitType===e.limitType}function Am(t){return`${ms(Un(t))}|lt:${t.limitType}`}function Id(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>hm(s)).join(", ")}]`),Pa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>tr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>tr(s)).join(",")),`Target(${n})`}(Un(t))}; limitType=${t.limitType})`}function Ma(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):F.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Vs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=md(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Vs(n),s)||n.endAt&&!function(r,i,o){const a=md(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Vs(n),s))}(t,e)}function o_(t){return(e,n)=>{let s=!1;for(const r of Vs(t)){const i=a_(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function a_(t,e,n){const s=t.field.isKeyField()?F.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Fn(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ri(e)?"-0":e}}function vm(t){return{integerValue:""+t}}function c_(t,e){return $0(e)?vm(e):ym(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this._=void 0}}function l_(t,e,n){return t instanceof ai?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof rr?bm(t,e):t instanceof ir?Im(t,e):function(s,r){const i=wm(s,r),o=Ed(i)+Ed(s.It);return cl(i)&&cl(s.It)?vm(o):ym(s.Tt,o)}(t,e)}function u_(t,e,n){return t instanceof rr?bm(t,e):t instanceof ir?Im(t,e):n}function wm(t,e){return t instanceof ci?cl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ai extends Fa{}class rr extends Fa{constructor(e){super(),this.elements=e}}function bm(t,e){const n=Em(e);for(const s of t.elements)n.some(r=>Xt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ir extends Fa{constructor(e){super(),this.elements=e}}function Im(t,e){let n=Em(e);for(const s of t.elements)n=n.filter(r=>!Xt(r,s));return{arrayValue:{values:n}}}class ci extends Fa{constructor(e,n){super(),this.Tt=e,this.It=n}}function Ed(t){return Me(t.integerValue||t.doubleValue)}function Em(t){return oi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n){this.field=e,this.transform=n}}function d_(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof rr&&s instanceof rr||n instanceof ir&&s instanceof ir?Ys(n.elements,s.elements,Xt):n instanceof ci&&s instanceof ci?Xt(n.It,s.It):n instanceof ai&&s instanceof ai}(t.transform,e.transform)}class f_{constructor(e,n){this.version=e,this.transformResults=n}}class wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ua{}function _m(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yu(t.key,wt.none()):new fr(t.key,t.data,wt.none());{const n=t.data,s=vt.empty();let r=new _e(Le.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new jn(t.key,s,new Tt(r.toArray()),wt.none())}}function p_(t,e,n){t instanceof fr?function(s,r,i){const o=s.value.clone(),a=Td(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(s,r,i){if(!po(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Td(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Tm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Vr(t,e,n,s){return t instanceof fr?function(r,i,o,a){if(!po(r.precondition,i))return o;const c=r.value.clone(),l=Sd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof jn?function(r,i,o,a){if(!po(r.precondition,i))return o;const c=Sd(r.fieldTransforms,a,i),l=i.data;return l.setAll(Tm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return po(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function g_(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=wm(s.transform,r||null);i!=null&&(n===null&&(n=vt.empty()),n.set(s.field,i))}return n||null}function _d(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ys(n,s,(r,i)=>d_(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fr extends Ua{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class jn extends Ua{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Td(t,e,n){const s=new Map;W(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,u_(o,a,n[r]))}return s}function Sd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,l_(i,o,e))}return s}class yu extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sm extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ce;function m_(t){switch(t){default:return z();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function A_(t){if(t===void 0)return yt("GRPC error has no .code"),E.UNKNOWN;switch(t){case Oe.OK:return E.OK;case Oe.CANCELLED:return E.CANCELLED;case Oe.UNKNOWN:return E.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return E.INTERNAL;case Oe.UNAVAILABLE:return E.UNAVAILABLE;case Oe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Oe.NOT_FOUND:return E.NOT_FOUND;case Oe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Oe.ABORTED:return E.ABORTED;case Oe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Oe.DATA_LOSS:return E.DATA_LOSS;default:return z()}}(ce=Oe||(Oe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return im(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new ct(F.comparator);function xn(){return y_}const Cm=new ct(F.comparator);function Ji(...t){let e=Cm;for(const n of t)e=e.insert(n.key,n);return e}function xm(t){let e=Cm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Gt(){return $r()}function Dm(){return $r()}function $r(){return new Hn(t=>t.toString(),(t,e)=>t.isEqual(e))}const v_=new ct(F.comparator),w_=new _e(F.comparator);function Fe(...t){let e=w_;for(const n of t)e=e.add(n);return e}const b_=new _e(se);function I_(){return b_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),__=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),T_=(()=>({and:"AND",or:"OR"}))();class S_{constructor(e,n){this.databaseId=e,this.yt=n}}function li(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C_(t,e){return t.yt?e.toBase64():e.toUint8Array()}function x_(t,e){return li(t,e.toTimestamp())}function Ft(t){return W(!!t),le.fromTimestamp(function(e){const n=gs(e);return new xe(n.seconds,n.nanos)}(t))}function vu(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function km(t){const e=Ie.fromString(t);return W(U_(e)),e}function Ho(t,e){return vu(t.databaseId,e.path)}function go(t,e){const n=km(e);if(n.get(1)!==t.databaseId.projectId)throw new H(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(Nm(n))}function fl(t,e){return vu(t.databaseId,e)}function Rm(t){const e=km(t);return e.length===4?Ie.emptyPath():Nm(e)}function D_(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nm(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cd(t,e,n){return{name:Ho(t,e),fields:n.value.mapValue.fields}}function k_(t,e,n){const s=go(t,e.name),r=Ft(e.updateTime),i=e.createTime?Ft(e.createTime):le.min(),o=new vt({mapValue:{fields:e.fields}}),a=Qe.newFoundDocument(s,r,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Ko(t,e){let n;if(e instanceof fr)n={update:Cd(t,e.key,e.value)};else if(e instanceof yu)n={delete:Ho(t,e.key)};else if(e instanceof jn)n={update:Cd(t,e.key,e.data),updateMask:F_(e.fieldMask)};else{if(!(e instanceof Sm))return z();n={verify:Ho(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ai)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof rr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ir)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ci)return{fieldPath:i.field.canonicalString(),increment:o.It};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:x_(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function pl(t,e){const n=e.currentDocument?function(r){return r.updateTime!==void 0?wt.updateTime(Ft(r.updateTime)):r.exists!==void 0?wt.exists(r.exists):wt.none()}(e.currentDocument):wt.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)W(o.setToServerValue==="REQUEST_TIME"),a=new ai;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new rr(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new ir(l)}else"increment"in o?a=new ci(i,o.increment):z();const c=Le.fromServerFormat(o.fieldPath);return new h_(c,a)}(t,r)):[];if(e.update){e.update.name;const r=go(t,e.update.name),i=new vt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Tt(c.map(l=>Le.fromServerFormat(l)))}(e.updateMask);return new jn(r,i,o,n,s)}return new fr(r,i,n,s)}if(e.delete){const r=go(t,e.delete);return new yu(r,n)}if(e.verify){const r=go(t,e.verify);return new Sm(r,n)}return z()}function R_(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ft(s.updateTime):Ft(r);return i.isEqual(le.min())&&(i=Ft(r)),new f_(i,s.transformResults||[])}(n,e))):[]}function N_(t,e){return{documents:[fl(t,e.path)]}}function O_(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=fl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Lm(Ae.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ns(u.field),direction:P_(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||Pa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Om(t){let e=Rm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){W(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Pm(u);return h instanceof Ae&&Au(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Br(Os(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Pa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new nr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new nr(d,h)}(n.endAt)),n_(e,r,o,i,a,"F",c,l)}function Pm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Os(e.unaryFilter.field);return ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Os(e.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Os(e.unaryFilter.field);return ae.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Os(e.unaryFilter.field);return ae.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return ae.create(Os(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ae.create(e.compositeFilter.filters.map(n=>Pm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function P_(t){return E_[t]}function L_(t){return __[t]}function M_(t){return T_[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Os(t){return Le.fromServerFormat(t.fieldPath)}function Lm(t){return t instanceof ae?function(e){if(e.op==="=="){if(fd(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NAN"}};if(dd(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fd(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NAN"}};if(dd(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(e.field),op:L_(e.op),value:e.value}}}(t):t instanceof Ae?function(e){const n=e.getFilters().map(s=>Lm(s));return n.length===1?n[0]:{compositeFilter:{op:M_(e.op),filters:n}}}(t):z()}function F_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xd(e)),e=B_(t.get(n),e);return xd(e)}function B_(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function xd(t){return t+""}function zt(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),Ie.emptyPath();const n=e-2,s=[];let r="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&z(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=t.substring(i,o),r+="\0";break;case"":r+=t.substring(i,o+1);break;default:z()}i=o+2}return new Ie(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e){return[t,at(e)]}function Mm(t,e,n){return[t,at(e),n]}const V_={},$_=["prefixPath","collectionGroup","readTime","documentId"],j_=["prefixPath","collectionGroup","documentId"],H_=["collectionGroup","readTime","prefixPath","documentId"],K_=["canonicalId","targetId"],q_=["targetId","path"],G_=["path","targetId"],z_=["collectionId","parent"],Q_=["indexId","uid"],W_=["uid","sequenceNumber"],X_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Y_=["indexId","uid","orderedDocumentKey"],J_=["userId","collectionPath","documentId"],Z_=["userId","collectionPath","largestBatchId"],eT=["userId","collectionGroup","largestBatchId"],Fm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],tT=[...Fm,"documentOverlays"],Um=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bm=Um,nT=[...Bm,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends rm{constructor(e,n){super(),this.re=e,this.currentSequenceNumber=n}}function qe(t,e){const n=we(t);return en.M(n.re,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&p_(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Vr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Vr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Dm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=_m(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(le.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Fe())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,s)=>_d(n,s))&&Ys(this.baseMutations,e.baseMutations,(n,s)=>_d(n,s))}}class bu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){W(e.mutations.length===s.length);let r=v_;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new bu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,s,r,i=le.min(),o=le.min(),a=Bt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.oe=e}}function sT(t,e){let n;if(e.document)n=k_(t.oe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=F.fromSegments(e.noDocument.path),r=ys(e.noDocument.readTime);n=Qe.newNoDocument(s,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return z();{const s=F.fromSegments(e.unknownDocument.path),r=ys(e.unknownDocument.version);n=Qe.newUnknownDocument(s,r)}}return e.readTime&&n.setReadTime(function(s){const r=new xe(s[0],s[1]);return le.fromTimestamp(r)}(e.readTime)),n}function kd(t,e){const n=e.key,s={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:qo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:Ho(r,i.key),fields:i.data.value.mapValue.fields,updateTime:li(r,i.version.toTimestamp()),createTime:li(r,i.createTime.toTimestamp())}}(t.oe,e);else if(e.isNoDocument())s.noDocument={path:n.path.toArray(),readTime:As(e.version)};else{if(!e.isUnknownDocument())return z();s.unknownDocument={path:n.path.toArray(),version:As(e.version)}}return s}function qo(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function As(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ys(t){const e=new xe(t.seconds,t.nanoseconds);return le.fromTimestamp(e)}function ts(t,e){const n=(e.baseMutations||[]).map(i=>pl(t.oe,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>pl(t.oe,i)),r=xe.fromMillis(e.localWriteTimeMs);return new wu(e.batchId,r,n,s)}function kr(t){const e=ys(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ys(t.lastLimboFreeSnapshotVersion):le.min();let s;var r;return t.query.documents!==void 0?(W((r=t.query).documents.length===1),s=Un(gm(Rm(r.documents[0])))):s=function(i){return Un(Om(i))}(t.query),new jr(s,t.targetId,0,t.lastListenSequenceNumber,e,n,Bt.fromBase64String(t.resumeToken))}function $m(t,e){const n=As(e.snapshotVersion),s=As(e.lastLimboFreeSnapshotVersion);let r;r=t_(e.target)?N_(t.oe,e.target):O_(t.oe,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ms(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function jm(t){const e=Om({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dl(e,e.limit,"L"):e}function mc(t,e){return new Iu(e.largestBatchId,pl(t.oe,e.overlayMutation))}function Rd(t,e){const n=e.path.lastSegment();return[t,at(e.path.popLast()),n]}function Nd(t,e,n,s){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:As(s.readTime),documentKey:at(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{getBundleMetadata(e,n){return Od(e).get(n).next(s=>{if(s)return{id:(r=s).bundleId,createTime:ys(r.createTime),version:r.version};var r})}saveBundleMetadata(e,n){return Od(e).put({bundleId:(s=n).id,createTime:As(Ft(s.createTime)),version:s.version});var s}getNamedQuery(e,n){return Pd(e).get(n).next(s=>{if(s)return{name:(r=s).name,query:jm(r.bundledQuery),readTime:ys(r.readTime)};var r})}saveNamedQuery(e,n){return Pd(e).put(function(s){return{name:s.name,readTime:As(Ft(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function Od(t){return qe(t,"bundles")}function Pd(t){return qe(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.Tt=e,this.userId=n}static ue(e,n){const s=n.uid||"";return new Ba(e,s)}getOverlay(e,n){return yr(e).get(Rd(this.userId,n)).next(s=>s?mc(this.Tt,s):null)}getOverlays(e,n){const s=Gt();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){const r=[];return s.forEach((i,o)=>{const a=new Iu(n,o);r.push(this.ce(e,a))}),A.waitFor(r)}removeOverlaysForBatchId(e,n,s){const r=new Set;n.forEach(o=>r.add(at(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(yr(e).Y("collectionPathOverlayIndex",a))}),A.waitFor(i)}getOverlaysForCollection(e,n,s){const r=Gt(),i=at(n),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return yr(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=mc(this.Tt,c);r.set(l.getKey(),l)}return r})}getOverlaysForCollectionGroup(e,n,s,r){const i=Gt();let o;const a=IDBKeyRange.bound([this.userId,n,s],[this.userId,n,Number.POSITIVE_INFINITY],!0);return yr(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=mc(this.Tt,l);i.size()<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}ce(e,n){return yr(e).put(function(s,r,i){const[o,a,c]=Rd(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Ko(s.oe,i.mutation)}}(this.Tt,this.userId,n))}}function yr(t){return qe(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){}ae(e,n){this.he(e,n),n.le()}he(e,n){if("nullValue"in e)this.fe(n,5);else if("booleanValue"in e)this.fe(n,10),n.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(n,15),n.de(Me(e.integerValue));else if("doubleValue"in e){const s=Me(e.doubleValue);isNaN(s)?this.fe(n,13):(this.fe(n,15),ri(s)?n.de(0):n.de(s))}else if("timestampValue"in e){const s=e.timestampValue;this.fe(n,20),typeof s=="string"?n._e(s):(n._e(`${s.seconds||""}`),n.de(s.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,n),this.me(n);else if("bytesValue"in e)this.fe(n,30),n.ge(Zs(e.bytesValue)),this.me(n);else if("referenceValue"in e)this.ye(e.referenceValue,n);else if("geoPointValue"in e){const s=e.geoPointValue;this.fe(n,45),n.de(s.latitude||0),n.de(s.longitude||0)}else"mapValue"in e?om(e)?this.fe(n,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,n),this.me(n)):"arrayValue"in e?(this.Ie(e.arrayValue,n),this.me(n)):z()}we(e,n){this.fe(n,25),this.Te(e,n)}Te(e,n){n._e(e)}pe(e,n){const s=e.fields||{};this.fe(n,55);for(const r of Object.keys(s))this.we(r,n),this.he(s[r],n)}Ie(e,n){const s=e.values||[];this.fe(n,50);for(const r of s)this.he(r,n)}ye(e,n){this.fe(n,37),F.fromName(e).path.forEach(s=>{this.fe(n,60),this.Te(s,n)})}fe(e,n){e.de(n)}me(e){e.de(2)}}ns.Ee=new ns;function iT(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Ld(t){const e=64-function(n){let s=0;for(let r=0;r<8;++r){const i=iT(255&n[r]);if(s+=i,i!==8)break}return s}(t);return Math.ceil(e/8)}class oT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ae(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.Re(s.value),s=n.next();this.Pe()}ve(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.be(s.value),s=n.next();this.Ve()}Se(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.Re(s);else if(s<2048)this.Re(960|s>>>6),this.Re(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.Re(480|s>>>12),this.Re(128|63&s>>>6),this.Re(128|63&s);else{const r=n.codePointAt(0);this.Re(240|r>>>18),this.Re(128|63&r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r)}}this.Pe()}De(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.be(s);else if(s<2048)this.be(960|s>>>6),this.be(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|s>>>12),this.be(128|63&s>>>6),this.be(128|63&s);else{const r=n.codePointAt(0);this.be(240|r>>>18),this.be(128|63&r>>>12),this.be(128|63&r>>>6),this.be(128|63&r)}}this.Ve()}Ce(e){const n=this.xe(e),s=Ld(n);this.Ne(1+s),this.buffer[this.position++]=255&s;for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=255&n[r]}ke(e){const n=this.xe(e),s=Ld(n);this.Ne(1+s),this.buffer[this.position++]=~(255&s);for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=~(255&n[r])}$e(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.Ne(e.length),this.buffer.set(e,this.position),this.position+=e.length}Be(){return this.buffer.slice(0,this.position)}xe(e){const n=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&n[0])!=0;n[0]^=s?255:128;for(let r=1;r<n.length;++r)n[r]^=s?255:0;return n}Re(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(n)}be(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Pe(){this.Me(0),this.Me(1)}Ve(){this.Fe(0),this.Fe(1)}Me(e){this.Ne(1),this.buffer[this.position++]=e}Fe(e){this.Ne(1),this.buffer[this.position++]=~e}Ne(e){const n=e+this.position;if(n<=this.buffer.length)return;let s=2*this.buffer.length;s<n&&(s=n);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class aT{constructor(e){this.Le=e}ge(e){this.Le.Ae(e)}_e(e){this.Le.Se(e)}de(e){this.Le.Ce(e)}le(){this.Le.$e()}}class cT{constructor(e){this.Le=e}ge(e){this.Le.ve(e)}_e(e){this.Le.De(e)}de(e){this.Le.ke(e)}le(){this.Le.Oe()}}class vr{constructor(){this.Le=new oT,this.qe=new aT(this.Le),this.Ue=new cT(this.Le)}seed(e){this.Le.seed(e)}Ke(e){return e===0?this.qe:this.Ue}Be(){return this.Le.Be()}reset(){this.Le.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,s,r){this.indexId=e,this.documentKey=n,this.arrayValue=s,this.directionalValue=r}Ge(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(n);return s.set(this.directionalValue,0),n!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new ss(this.indexId,this.documentKey,this.arrayValue,s)}}function mn(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Md(t.arrayValue,e.arrayValue),n!==0?n:(n=Md(t.directionalValue,e.directionalValue),n!==0?n:F.comparator(t.documentKey,e.documentKey)))}function Md(t,e){for(let n=0;n<t.length&&n<e.length;++n){const s=t[n]-e[n];if(s!==0)return s}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Qe=e.orderBy,this.je=[];for(const n of e.filters){const s=n;s.isInequality()?this.ze=s:this.je.push(s)}}We(e){W(e.collectionGroup===this.collectionId);const n=ol(e);if(n!==void 0&&!this.He(n))return!1;const s=Xn(e);let r=0,i=0;for(;r<s.length&&this.He(s[r]);++r);if(r===s.length)return!0;if(this.ze!==void 0){const o=s[r];if(!this.Je(this.ze,o)||!this.Ye(this.Qe[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Qe.length||!this.Ye(this.Qe[i++],o))return!1}return!0}He(e){for(const n of this.je)if(this.Je(n,e))return!0;return!1}Je(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===s}Ye(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){var e,n;if(W(t instanceof ae||t instanceof Ae),t instanceof ae){if(t instanceof fm){const r=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ae.create(t.field,"==",i)))||[];return Ae.create(r,"or")}return t}const s=t.filters.map(r=>Hm(r));return Ae.create(s,t.op)}function uT(t){if(t.getFilters().length===0)return[];const e=yl(Hm(t));return W(Km(e)),ml(e)||Al(e)?[e]:e.getFilters()}function ml(t){return t instanceof ae}function Al(t){return t instanceof Ae&&Au(t)}function Km(t){return ml(t)||Al(t)||function(e){if(e instanceof Ae&&ll(e)){for(const n of e.getFilters())if(!ml(n)&&!Al(n))return!1;return!0}return!1}(t)}function yl(t){if(W(t instanceof ae||t instanceof Ae),t instanceof ae)return t;if(t.filters.length===1)return yl(t.filters[0]);const e=t.filters.map(s=>yl(s));let n=Ae.create(e,t.op);return n=Go(n),Km(n)?n:(W(n instanceof Ae),W(sr(n)),W(n.filters.length>1),n.filters.reduce((s,r)=>Eu(s,r)))}function Eu(t,e){let n;return W(t instanceof ae||t instanceof Ae),W(e instanceof ae||e instanceof Ae),n=t instanceof ae?e instanceof ae?function(s,r){return Ae.create([s,r],"and")}(t,e):Fd(t,e):e instanceof ae?Fd(e,t):function(s,r){if(W(s.filters.length>0&&r.filters.length>0),sr(s)&&sr(r))return um(s,r.getFilters());const i=ll(s)?s:r,o=ll(s)?r:s,a=i.filters.map(c=>Eu(c,o));return Ae.create(a,"or")}(t,e),Go(n)}function Fd(t,e){if(sr(e))return um(e,t.getFilters());{const n=e.filters.map(s=>Eu(t,s));return Ae.create(n,"or")}}function Go(t){if(W(t instanceof ae||t instanceof Ae),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return Go(e[0]);if(cm(t))return t;const n=e.map(r=>Go(r)),s=[];return n.forEach(r=>{r instanceof ae?s.push(r):r instanceof Ae&&(r.op===t.op?s.push(...r.filters):s.push(r))}),s.length===1?s[0]:Ae.create(s,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.Ze=new _u}addToCollectionParentIndex(e,n){return this.Ze.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(It.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(It.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class _u{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _e(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Uint8Array(0);class dT{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new _u,this.tn=new Hn(s=>ms(s),(s,r)=>xi(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const s=n.lastSegment(),r=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const i={collectionId:s,parent:at(r)};return Ud(e).put(i)}return A.resolve()}getCollectionParents(e,n){const s=[],r=IDBKeyRange.bound([n,""],[em(n),""],!1,!0);return Ud(e).W(r).next(i=>{for(const o of i){if(o.collectionId!==n)break;s.push(zt(o.parent))}return s})}addFieldIndex(e,n){const s=eo(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete r.indexId;const i=s.add(r);if(n.indexState){const o=br(e);return i.next(a=>{o.put(Nd(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const s=eo(e),r=br(e),i=wr(e);return s.delete(n.indexId).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const s=wr(e);let r=!0;const i=new Map;return A.forEach(this.en(n),o=>this.nn(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=Fe();const a=[];return A.forEach(i,(c,l)=>{var u;D("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(S=>`${S.fieldPath}:${S.kind}`).join(",")}`} to execute ${ms(n)}`);const h=function(S,G){const V=ol(G);if(V===void 0)return null;for(const Q of jo(S,V.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(l,c),d=function(S,G){const V=new Map;for(const Q of Xn(G))for(const $ of jo(S,Q.fieldPath))switch($.op){case"==":case"in":V.set(Q.fieldPath.canonicalString(),$.value);break;case"not-in":case"!=":return V.set(Q.fieldPath.canonicalString(),$.value),Array.from(V.values())}return null}(l,c),p=function(S,G){const V=[];let Q=!0;for(const $ of Xn(G)){const N=$.kind===0?vd(S,$.fieldPath,S.startAt):wd(S,$.fieldPath,S.startAt);V.push(N.value),Q&&(Q=N.inclusive)}return new nr(V,Q)}(l,c),m=function(S,G){const V=[];let Q=!0;for(const $ of Xn(G)){const N=$.kind===0?wd(S,$.fieldPath,S.endAt):vd(S,$.fieldPath,S.endAt);V.push(N.value),Q&&(Q=N.inclusive)}return new nr(V,Q)}(l,c),v=this.sn(c,l,p),k=this.sn(c,l,m),T=this.rn(c,l,d),M=this.on(c.indexId,h,v,p.inclusive,k,m.inclusive,T);return A.forEach(M,S=>s.J(S,n.limit).next(G=>{G.forEach(V=>{const Q=F.fromSegments(V.documentKey);o.has(Q)||(o=o.add(Q),a.push(Q))})}))}).next(()=>a)}return A.resolve(null)})}en(e){let n=this.tn.get(e);return n||(e.filters.length===0?n=[e]:n=uT(Ae.create(e.filters,"and")).map(s=>hl(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.tn.set(e,n),n)}on(e,n,s,r,i,o,a){const c=(n!=null?n.length:1)*Math.max(s.length,i.length),l=c/(n!=null?n.length:1),u=[];for(let h=0;h<c;++h){const d=n?this.un(n[h/l]):Zi,p=this.cn(e,d,s[h%l],r),m=this.an(e,d,i[h%l],o),v=a.map(k=>this.cn(e,d,k,!0));u.push(...this.createRange(p,m,v))}return u}cn(e,n,s,r){const i=new ss(e,F.empty(),n,s);return r?i:i.Ge()}an(e,n,s,r){const i=new ss(e,F.empty(),n,s);return r?i.Ge():i}nn(e,n){const s=new lT(n),r=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let s=2;const r=this.en(n);return A.forEach(r,i=>this.nn(e,i).next(o=>{o?s!==0&&o.fields.length<function(a){let c=new _e(Le.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(i)&&(s=1):s=0})).next(()=>function(i){return i.limit!==null}(n)&&r.length>1&&s===2?1:s)}hn(e,n){const s=new vr;for(const r of Xn(e)){const i=n.data.field(r.fieldPath);if(i==null)return null;const o=s.Ke(r.kind);ns.Ee.ae(i,o)}return s.Be()}un(e){const n=new vr;return ns.Ee.ae(e,n.Ke(0)),n.Be()}ln(e,n){const s=new vr;return ns.Ee.ae(mu(this.databaseId,n),s.Ke(function(r){const i=Xn(r);return i.length===0?0:i[i.length-1].kind}(e))),s.Be()}rn(e,n,s){if(s===null)return[];let r=[];r.push(new vr);let i=0;for(const o of Xn(e)){const a=s[i++];for(const c of r)if(this.fn(n,o.fieldPath)&&oi(a))r=this.dn(r,o,a);else{const l=c.Ke(o.kind);ns.Ee.ae(a,l)}}return this._n(r)}sn(e,n,s){return this.rn(e,n,s.position)}_n(e){const n=[];for(let s=0;s<e.length;++s)n[s]=e[s].Be();return n}dn(e,n,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const c=new vr;c.seed(a.Be()),ns.Ee.ae(o,c.Ke(n.kind)),i.push(c)}return i}fn(e,n){return!!e.filters.find(s=>s instanceof ae&&s.field.isEqual(n)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,n){const s=eo(e),r=br(e);return(n?s.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):s.W()).next(i=>{const o=[];return A.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Vo(u.sequenceNumber,new It(ys(u.readTime),new F(zt(u.documentKey)),u.largestBatchId)):Vo.empty(),d=l.fields.map(([p,m])=>new P0(Le.fromServerFormat(p),m));return new tm(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:se(s.collectionGroup,r.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,s){const r=eo(e),i=br(e);return this.wn(e).next(o=>r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>A.forEach(a,c=>i.put(Nd(c.indexId,this.user,o,s)))))}updateIndexEntries(e,n){const s=new Map;return A.forEach(n,(r,i)=>{const o=s.get(r.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),A.forEach(a,c=>this.mn(e,r,c).next(l=>{const u=this.gn(i,c);return l.isEqual(u)?A.resolve():this.yn(e,i,c,l,u)}))))})}pn(e,n,s,r){return wr(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.ln(s,n.key),documentKey:n.key.path.toArray()})}In(e,n,s,r){return wr(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.ln(s,n.key),n.key.path.toArray()])}mn(e,n,s){const r=wr(e);let i=new _e(mn);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.ln(s,n)])},(o,a)=>{i=i.add(new ss(s.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}gn(e,n){let s=new _e(mn);const r=this.hn(n,e);if(r==null)return s;const i=ol(n);if(i!=null){const o=e.data.field(i.fieldPath);if(oi(o))for(const a of o.arrayValue.values||[])s=s.add(new ss(n.indexId,e.key,this.un(a),r))}else s=s.add(new ss(n.indexId,e.key,Zi,r));return s}yn(e,n,s,r,i){D("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),p=c.getIterator();let m=xs(d),v=xs(p);for(;m||v;){let k=!1,T=!1;if(m&&v){const M=l(m,v);M<0?T=!0:M>0&&(k=!0)}else m!=null?T=!0:k=!0;k?(u(v),v=xs(p)):T?(h(m),m=xs(d)):(m=xs(d),v=xs(p))}}(r,i,mn,a=>{o.push(this.pn(e,n,s,a))},a=>{o.push(this.In(e,n,s,a))}),A.waitFor(o)}wn(e){let n=1;return br(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),n=r.sequenceNumber+1}).next(()=>n)}createRange(e,n,s){s=s.sort((o,a)=>mn(o,a)).filter((o,a,c)=>!a||mn(o,c[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=mn(o,e),c=mn(o,n);if(a===0)r[0]=e.Ge();else if(a>0&&c<0)r.push(o),r.push(o.Ge());else if(c>0)break}r.push(n);const i=[];for(let o=0;o<r.length;o+=2){if(this.Tn(r[o],r[o+1]))return[];const a=[r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,Zi,[]],c=[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,Zi,[]];i.push(IDBKeyRange.bound(a,c))}return i}Tn(e,n){return mn(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Bd)}getMinOffset(e,n){return A.mapArray(this.en(n),s=>this.nn(e,s).next(r=>r||z())).next(Bd)}}function Ud(t){return qe(t,"collectionParents")}function wr(t){return qe(t,"indexEntries")}function eo(t){return qe(t,"indexConfiguration")}function br(t){return qe(t,"indexState")}function Bd(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let s=1;s<t.length;s++){const r=t[s].indexState.offset;pu(r,e)<0&&(e=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new It(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e,n){const s=t.store("mutations"),r=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=s.X({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{W(a===1)}));const l=[];for(const u of n.mutations){const h=Mm(e,u.key.path,n.batchId);i.push(r.delete(h)),l.push(u.key)}return A.waitFor(i).next(()=>l)}function zo(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw z();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(41943040,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);class Va{constructor(e,n,s,r){this.userId=e,this.Tt=n,this.indexManager=s,this.referenceDelegate=r,this.En={}}static ue(e,n,s,r){W(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Va(i,n,s,r)}checkEmpty(e){let n=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return An(e).X({index:"userMutationsIndex",range:s},(r,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,s,r){const i=Ps(e),o=An(e);return o.add({}).next(a=>{W(typeof a=="number");const c=new wu(a,n,s,r),l=function(d,p,m){const v=m.baseMutations.map(T=>Ko(d.oe,T)),k=m.mutations.map(T=>Ko(d.oe,T));return{userId:p,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:v,mutations:k}}(this.Tt,this.userId,c),u=[];let h=new _e((d,p)=>se(d.canonicalString(),p.canonicalString()));for(const d of r){const p=Mm(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(p,V_))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.En[a]=c.keys()}),A.waitFor(u).next(()=>c)})}lookupMutationBatch(e,n){return An(e).get(n).next(s=>s?(W(s.userId===this.userId),ts(this.Tt,s)):null)}An(e,n){return this.En[n]?A.resolve(this.En[n]):this.lookupMutationBatch(e,n).next(s=>{if(s){const r=s.keys();return this.En[n]=r,r}return null})}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return An(e).X({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(W(a.batchId>=s),i=ts(this.Tt,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return An(e).X({index:"userMutationsIndex",range:n,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return An(e).W("userMutationsIndex",n).next(s=>s.map(r=>ts(this.Tt,r)))}getAllMutationBatchesAffectingDocumentKey(e,n){const s=mo(this.userId,n.path),r=IDBKeyRange.lowerBound(s),i=[];return Ps(e).X({range:r},(o,a,c)=>{const[l,u,h]=o,d=zt(u);if(l===this.userId&&n.path.isEqual(d))return An(e).get(h).next(p=>{if(!p)throw z();W(p.userId===this.userId),i.push(ts(this.Tt,p))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(se);const r=[];return n.forEach(i=>{const o=mo(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Ps(e).X({range:a},(l,u,h)=>{const[d,p,m]=l,v=zt(p);d===this.userId&&i.path.isEqual(v)?s=s.add(m):h.done()});r.push(c)}),A.waitFor(r).next(()=>this.Rn(e,s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1,i=mo(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new _e(se);return Ps(e).X({range:o},(c,l,u)=>{const[h,d,p]=c,m=zt(d);h===this.userId&&s.isPrefixOf(m)?m.length===r&&(a=a.add(p)):u.done()}).next(()=>this.Rn(e,a))}Rn(e,n){const s=[],r=[];return n.forEach(i=>{r.push(An(e).get(i).next(o=>{if(o===null)throw z();W(o.userId===this.userId),s.push(ts(this.Tt,o))}))}),A.waitFor(r).next(()=>s)}removeMutationBatch(e,n){return qm(e.re,this.userId,n).next(s=>(e.addOnCommittedListener(()=>{this.Pn(n.batchId)}),A.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}Pn(e){delete this.En[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return A.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return Ps(e).X({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=zt(i[1]);r.push(c)}else a.done()}).next(()=>{W(r.length===0)})})}containsKey(e,n){return Gm(e,this.userId,n)}vn(e){return zm(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Gm(t,e,n){const s=mo(e,n.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Ps(t).X({range:i,Z:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===r&&(o=!0),l.done()}).next(()=>o)}function An(t){return qe(t,"mutations")}function Ps(t){return qe(t,"documentMutations")}function zm(t){return qe(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new vs(0)}static Sn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n){this.referenceDelegate=e,this.Tt=n}allocateTargetId(e){return this.Dn(e).next(n=>{const s=new vs(n.highestTargetId);return n.highestTargetId=s.next(),this.Cn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Dn(e).next(n=>le.fromTimestamp(new xe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Dn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,s){return this.Dn(e).next(r=>(r.highestListenSequenceNumber=n,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),n>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=n),this.Cn(e,r)))}addTargetData(e,n){return this.xn(e,n).next(()=>this.Dn(e).next(s=>(s.targetCount+=1,this.Nn(n,s),this.Cn(e,s))))}updateTargetData(e,n){return this.xn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ds(e).delete(n.targetId)).next(()=>this.Dn(e)).next(s=>(W(s.targetCount>0),s.targetCount-=1,this.Cn(e,s)))}removeTargets(e,n,s){let r=0;const i=[];return Ds(e).X((o,a)=>{const c=kr(a);c.sequenceNumber<=n&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>A.waitFor(i)).next(()=>r)}forEachTarget(e,n){return Ds(e).X((s,r)=>{const i=kr(r);n(i)})}Dn(e){return $d(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}Cn(e,n){return $d(e).put("targetGlobalKey",n)}xn(e,n){return Ds(e).put($m(this.Tt,n))}Nn(e,n){let s=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,s=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Dn(e).next(n=>n.targetCount)}getTargetData(e,n){const s=ms(n),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return Ds(e).X({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const l=kr(a);xi(n,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,n,s){const r=[],i=In(e);return n.forEach(o=>{const a=at(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),A.waitFor(r)}removeMatchingKeys(e,n,s){const r=In(e);return A.forEach(n,i=>{const o=at(i.path);return A.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,n){const s=In(e),r=IDBKeyRange.bound([n],[n+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,n){const s=IDBKeyRange.bound([n],[n+1],!1,!0),r=In(e);let i=Fe();return r.X({range:s,Z:!0},(o,a,c)=>{const l=zt(o[1]),u=new F(l);i=i.add(u)}).next(()=>i)}containsKey(e,n){const s=at(n.path),r=IDBKeyRange.bound([s],[em(s)],!1,!0);let i=0;return In(e).X({index:"documentTargetsIndex",Z:!0,range:r},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}ie(e,n){return Ds(e).get(n).next(s=>s?kr(s):null)}}function Ds(t){return qe(t,"targets")}function $d(t){return qe(t,"targetGlobal")}function In(t){return qe(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd([t,e],[n,s]){const r=se(t,n);return r===0?se(e,s):r}class pT{constructor(e){this.kn=e,this.buffer=new _e(jd),this.$n=0}Mn(){return++this.$n}On(e){const n=[e,this.Mn()];if(this.buffer.size<this.kn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();jd(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class gT{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Fn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Bn(6e4)}stop(){this.Fn&&(this.Fn.cancel(),this.Fn=null)}get started(){return this.Fn!==null}Bn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Fn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Fn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Es(n)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Na(n)}await this.Bn(3e5)})}}class mT{constructor(e,n){this.Ln=e,this.params=n}calculateTargetCount(e,n){return this.Ln.qn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return A.resolve(Ot.at);const s=new pT(n);return this.Ln.forEachTarget(e,r=>s.On(r.sequenceNumber)).next(()=>this.Ln.Un(e,r=>s.On(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Ln.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Ln.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Vd)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vd):this.Kn(e,n))}getCacheSize(e){return this.Ln.getCacheSize(e)}Kn(e,n){let s,r,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),il()<=fe.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n){this.db=e,this.garbageCollector=function(s,r){return new mT(s,r)}(this,n)}qn(e){const n=this.Gn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}Gn(e){let n=0;return this.Un(e,s=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Un(e,n){return this.Qn(e,(s,r)=>n(r))}addReference(e,n,s){return to(e,s)}removeReference(e,n,s){return to(e,s)}removeTargets(e,n,s){return this.db.getTargetCache().removeTargets(e,n,s)}markPotentiallyOrphaned(e,n){return to(e,n)}jn(e,n){return function(s,r){let i=!1;return zm(s).tt(o=>Gm(s,o,r).next(a=>(a&&(i=!0),A.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Qn(e,(o,a)=>{if(a<=n){const c=this.jn(e,o).next(l=>{if(!l)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,le.min()),In(e).delete([0,at(o.path)])))});r.push(c)}}).next(()=>A.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,n){return to(e,n)}Qn(e,n){const s=In(e);let r,i=Ot.at;return s.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==Ot.at&&n(new F(zt(r)),i),i=l,r=c):i=Ot.at}).next(()=>{i!==Ot.at&&n(new F(zt(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function to(t,e){return In(t).put(function(n,s){return{targetId:0,path:at(n.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.changes=new Hn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.Tt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,s){return zn(e).put(s)}removeEntry(e,n,s){return zn(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],qo(i),o[o.length-1]]}(n,s))}updateMetadata(e,n){return this.getMetadata(e).next(s=>(s.byteSize+=n,this.zn(e,s)))}getEntry(e,n){let s=Qe.newInvalidDocument(n);return zn(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Ir(n))},(r,i)=>{s=this.Wn(n,i)}).next(()=>s)}Hn(e,n){let s={size:0,document:Qe.newInvalidDocument(n)};return zn(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Ir(n))},(r,i)=>{s={document:this.Wn(n,i),size:zo(i)}}).next(()=>s)}getEntries(e,n){let s=xn();return this.Jn(e,n,(r,i)=>{const o=this.Wn(r,i);s=s.insert(r,o)}).next(()=>s)}Yn(e,n){let s=xn(),r=new ct(F.comparator);return this.Jn(e,n,(i,o)=>{const a=this.Wn(i,o);s=s.insert(i,a),r=r.insert(i,zo(o))}).next(()=>({documents:s,Zn:r}))}Jn(e,n,s){if(n.isEmpty())return A.resolve();let r=new _e(qd);n.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(Ir(r.first()),Ir(r.last())),o=r.getIterator();let a=o.getNext();return zn(e).X({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=F.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&qd(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.j(Ir(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,s,r){const i=n.path,o=[i.popLast().toArray(),i.lastSegment(),qo(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return zn(e).W(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=xn();for(const u of c){const h=this.Wn(F.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Ma(n,h)||r.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,s,r){let i=xn();const o=Kd(n,s),a=Kd(n,It.max());return zn(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.Wn(F.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===r&&u.done()}).next(()=>i)}newChangeBuffer(e){return new vT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Hd(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}zn(e,n){return Hd(e).put("remoteDocumentGlobalKey",n)}Wn(e,n){if(n){const s=sT(this.Tt,n);if(!(s.isNoDocument()&&s.version.isEqual(le.min())))return s}return Qe.newInvalidDocument(e)}}function Wm(t){return new yT(t)}class vT extends Qm{constructor(e,n){super(),this.Xn=e,this.trackRemovals=n,this.ts=new Hn(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const n=[];let s=0,r=new _e((i,o)=>se(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.ts.get(i);if(n.push(this.Xn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=kd(this.Xn.Tt,o);r=r.add(i.path.popLast());const l=zo(c);s+=l-a.size,n.push(this.Xn.addEntry(e,i,c))}else if(s-=a.size,this.trackRemovals){const c=kd(this.Xn.Tt,o.convertToNoDocument(le.min()));n.push(this.Xn.addEntry(e,i,c))}}),r.forEach(i=>{n.push(this.Xn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Xn.updateMetadata(e,s)),A.waitFor(n)}getFromCache(e,n){return this.Xn.Hn(e,n).next(s=>(this.ts.set(n,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,n){return this.Xn.Yn(e,n).next(({documents:s,Zn:r})=>(r.forEach((i,o)=>{this.ts.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function Hd(t){return qe(t,"remoteDocumentGlobal")}function zn(t){return qe(t,"remoteDocumentsV14")}function Ir(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Kd(t,e){const n=e.documentKey.path.toArray();return[t,qo(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function qd(t,e){const n=t.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<n.length-2&&i<s.length-2;++i)if(r=se(n[i],s[i]),r)return r;return r=se(n.length,s.length),r||(r=se(n[n.length-2],s[s.length-2]),r||se(n[n.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Vr(s.mutation,r,Tt.empty(),xe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Fe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Fe()){const r=Gt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ji();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Gt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Fe()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=xn();const o=$r(),a=$r();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof jn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Vr(u.mutation,l,u.mutation.getFieldMask(),xe.now())):o.set(l.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new wT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=$r();let r=new ct((o,a)=>o-a),i=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Tt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Fe()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Dm();u.forEach(d=>{if(!i.has(d)){const p=_m(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):i_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(Gt());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Fe())).next(u=>({batchId:a,changes:xm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(s=>{let r=Ji();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ji();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new La(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Qe.newInvalidDocument(l)))});let o=Ji();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Vr(l.mutation,c,Tt.empty(),xe.now()),Ma(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return A.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:jm(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.overlays=new ct(F.comparator),this.ss=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gt();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=Gt(),i=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ct((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Gt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Gt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Iu(n,s));let i=this.ss.get(n);i===void 0&&(i=Fe(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.rs=new _e(je.os),this.us=new _e(je.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new je(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new je(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new F(new Ie([])),s=new je(n,e),r=new je(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new F(new Ie([])),s=new je(n,e),r=new je(n,e+1);let i=Fe();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return F.comparator(e.key,n.key)||se(e.gs,n.gs)}static cs(e,n){return se(e.gs,n.gs)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new _e(je.os)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wu(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(se);return n.forEach(r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),A.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;F.isDocumentKey(i)||(i=i.child(""));const o=new je(new F(i),0);let a=new _e(se);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),A.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){W(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return A.forEach(n.mutations,r=>{const i=new je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new je(n,0),r=this.ps.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.Rs=e,this.docs=new ct(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=xn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=xn();const o=n.path,a=new F(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||pu(nm(u),s)<=0||(r.has(u.key)||Ma(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){z()}Ps(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new TT(this)}getSize(e){return A.resolve(this.size)}}class TT extends Qm{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.persistence=e,this.vs=new Hn(n=>ms(n),xi),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Tu,this.targetCount=0,this.Ss=vs.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),A.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.xn(n),A.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Ot(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new ST(this),this.indexManager=new hT,this.remoteDocumentCache=function(s){return new _T(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Vm(n),this.$s=new bT(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new ET(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){D("MemoryPersistence","Starting transaction:",e);const r=new CT(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return A.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class CT extends rm{constructor(e){super(),this.currentSequenceNumber=e}}class $a{constructor(e){this.persistence=e,this.Bs=new Tu,this.Ls=null}static qs(e){return new $a(e)}get Us(){if(this.Ls)return this.Ls;throw z()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),A.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Us,s=>{const r=F.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,le.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return A.or([()=>A.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.Tt=e}F(e,n,s,r){const i=new Oa("createOrUpgrade",n);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Dd,{unique:!0}),a.createObjectStore("documentMutations")}(e),Gd(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Gd(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:le.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Dd,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return A.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Gs(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Qs(i)))),s<7&&r>=7&&(o=o.next(()=>this.js(i))),s<8&&r>=8&&(o=o.next(()=>this.zs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.Ws(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:J_});c.createIndex("collectionPathOverlayIndex",Z_,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",eT,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:$_});c.createIndex("documentKeyIndex",j_),c.createIndex("collectionGroupIndex",H_)}(e)).next(()=>this.Hs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.Js(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Q_}).createIndex("sequenceNumberIndex",W_,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:X_}).createIndex("documentKeyIndex",Y_,{unique:!1})}(e))),o}Qs(e){let n=0;return e.store("remoteDocuments").X((s,r)=>{n+=zo(r)}).next(()=>{const s={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Gs(e){const n=e.store("mutationQueues"),s=e.store("mutations");return n.W().next(r=>A.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>A.forEach(a,c=>{W(c.userId===i.userId);const l=ts(this.Tt,c);return qm(e,i.userId,l).next(()=>{})}))}))}js(e){const n=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.X((o,a)=>{const c=new Ie(o),l=function(u){return[0,at(u)]}(c);i.push(n.get(l).next(u=>u?A.resolve():(h=>n.put({targetId:0,path:at(h),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>A.waitFor(i))})}zs(e,n){e.createObjectStore("collectionParents",{keyPath:z_});const s=n.store("collectionParents"),r=new _u,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:at(c)})}};return n.store("remoteDocuments").X({Z:!0},(o,a)=>{const c=new Ie(o);return i(c.popLast())}).next(()=>n.store("documentMutations").X({Z:!0},([o,a,c],l)=>{const u=zt(a);return i(u.popLast())}))}Ws(e){const n=e.store("targets");return n.X((s,r)=>{const i=kr(r),o=$m(this.Tt,i);return n.put(o)})}Hs(e,n){const s=n.store("remoteDocuments"),r=[];return s.X((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(l=o,l.document?new F(Ie.fromString(l.document.name).popFirst(5)):l.noDocument?F.fromSegments(l.noDocument.path):l.unknownDocument?F.fromSegments(l.unknownDocument.path):z()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(u))}).next(()=>A.waitFor(r))}Js(e,n){const s=n.store("mutations"),r=Wm(this.Tt),i=new Ym($a.qs,this.Tt.oe);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:Fe();ts(this.Tt,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),A.forEach(a,(c,l)=>{const u=new Ge(l),h=Ba.ue(this.Tt,u),d=i.getIndexManager(u),p=Va.ue(u,this.Tt,d,i.referenceDelegate);return new Xm(r,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new gl(n,Ot.at),c).next()})})}}function Gd(t){t.createObjectStore("targetDocuments",{keyPath:q_}).createIndex("documentTargetsIndex",G_,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",K_,{unique:!0}),t.createObjectStore("targetGlobal")}const Ac="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Su{constructor(e,n,s,r,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=s,this.Ys=i,this.window=o,this.document=a,this.Zs=l,this.Xs=u,this.ti=h,this.Cs=null,this.xs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ei=null,this.inForeground=!1,this.ni=null,this.si=null,this.ii=Number.NEGATIVE_INFINITY,this.ri=d=>Promise.resolve(),!Su.C())throw new H(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new AT(this,r),this.oi=n+"main",this.Tt=new Vm(c),this.ui=new en(this.oi,this.ti,new xT(this.Tt)),this.Ns=new fT(this.referenceDelegate,this.Tt),this.remoteDocumentCache=Wm(this.Tt),this.$s=new rT,this.window&&this.window.localStorage?this.ci=this.window.localStorage:(this.ci=null,u===!1&&yt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new H(E.FAILED_PRECONDITION,Ac);return this.hi(),this.li(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ns.getHighestSequenceNumber(e))}).then(e=>{this.Cs=new Ot(e,this.Zs)}).then(()=>{this.xs=!0}).catch(e=>(this.ui&&this.ui.close(),Promise.reject(e)))}di(e){return this.ri=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ui.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ys.enqueueAndForget(async()=>{this.started&&await this.ai()}))}ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>no(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this._i(e).next(n=>{n||(this.isPrimary=!1,this.Ys.enqueueRetryable(()=>this.ri(!1)))})}).next(()=>this.wi(e)).next(n=>this.isPrimary&&!n?this.mi(e).next(()=>!1):!!n&&this.gi(e).next(()=>!0))).catch(e=>{if(Es(e))return D("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ys.enqueueRetryable(()=>this.ri(e)),this.isPrimary=e})}_i(e){return Er(e).get("owner").next(n=>A.resolve(this.yi(n)))}pi(e){return no(e).delete(this.clientId)}async Ii(){if(this.isPrimary&&!this.Ti(this.ii,18e5)){this.ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const s=qe(n,"clientMetadata");return s.W().next(r=>{const i=this.Ei(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return A.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ci)for(const n of e)this.ci.removeItem(this.Ai(n.clientId))}}fi(){this.si=this.Ys.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ai().then(()=>this.Ii()).then(()=>this.fi()))}yi(e){return!!e&&e.ownerId===this.clientId}wi(e){return this.Xs?A.resolve(!0):Er(e).get("owner").next(n=>{if(n!==null&&this.Ti(n.leaseTimestampMs,5e3)&&!this.Ri(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new H(E.FAILED_PRECONDITION,Ac);return!1}}return!(!this.networkEnabled||!this.inForeground)||no(e).W().next(s=>this.Ei(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&D("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.xs=!1,this.Pi(),this.si&&(this.si.cancel(),this.si=null),this.vi(),this.bi(),await this.ui.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new gl(e,Ot.at);return this.mi(n).next(()=>this.pi(n))}),this.ui.close(),this.Vi()}Ei(e,n){return e.filter(s=>this.Ti(s.updateTimeMs,n)&&!this.Ri(s.clientId))}Si(){return this.runTransaction("getActiveClients","readonly",e=>no(e).W().next(n=>this.Ei(n,18e5).map(s=>s.clientId)))}get started(){return this.xs}getMutationQueue(e,n){return Va.ue(e,this.Tt,n,this.referenceDelegate)}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new dT(e,this.Tt.oe.databaseId)}getDocumentOverlayCache(e){return Ba.ue(this.Tt,e)}getBundleCache(){return this.$s}runTransaction(e,n,s){D("IndexedDbPersistence","Starting transaction:",e);const r=n==="readonly"?"readonly":"readwrite",i=(o=this.ti)===15?nT:o===14?Bm:o===13?Um:o===12?tT:o===11?Fm:void z();var o;let a;return this.ui.runTransaction(e,r,i,c=>(a=new gl(c,this.Cs?this.Cs.next():Ot.at),n==="readwrite-primary"?this._i(a).next(l=>!!l||this.wi(a)).next(l=>{if(!l)throw yt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ys.enqueueRetryable(()=>this.ri(!1)),new H(E.FAILED_PRECONDITION,sm);return s(a)}).next(l=>this.gi(a).next(()=>l)):this.Di(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Di(e){return Er(e).get("owner").next(n=>{if(n!==null&&this.Ti(n.leaseTimestampMs,5e3)&&!this.Ri(n.ownerId)&&!this.yi(n)&&!(this.Xs||this.allowTabSynchronization&&n.allowTabSynchronization))throw new H(E.FAILED_PRECONDITION,Ac)})}gi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Er(e).put("owner",n)}static C(){return en.C()}mi(e){const n=Er(e);return n.get("owner").next(s=>this.yi(s)?(D("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):A.resolve())}Ti(e,n){const s=Date.now();return!(e<s-n)&&(!(e>s)||(yt(`Detected an update time that is in the future: ${e} > ${s}`),!1))}hi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ni=()=>{this.Ys.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ai()))},this.document.addEventListener("visibilitychange",this.ni),this.inForeground=this.document.visibilityState==="visible")}vi(){this.ni&&(this.document.removeEventListener("visibilitychange",this.ni),this.ni=null)}li(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ei=()=>{this.Pi();const n=/(?:Version|Mobile)\/1[456]/;aI()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Ys.enterRestrictedMode(!0),this.Ys.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ei))}bi(){this.ei&&(this.window.removeEventListener("pagehide",this.ei),this.ei=null)}Ri(e){var n;try{const s=((n=this.ci)===null||n===void 0?void 0:n.getItem(this.Ai(e)))!==null;return D("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return yt("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Pi(){if(this.ci)try{this.ci.setItem(this.Ai(this.clientId),String(Date.now()))}catch(e){yt("Failed to set zombie client id.",e)}}Vi(){if(this.ci)try{this.ci.removeItem(this.Ai(this.clientId))}catch{}}Ai(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Er(t){return qe(t,"owner")}function no(t){return qe(t,"clientMetadata")}function DT(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=Fe(),r=Fe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Cu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(bd(n))return A.resolve(null);let s=Un(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=dl(n,null,"F"),s=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Fe(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,dl(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,r){return bd(n)||r.isEqual(le.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(il()<=fe.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Id(n)),this.qi(e,o,n,L0(r,-1)))})}Bi(e,n){let s=new _e(o_(e));return n.forEach((r,i)=>{Ma(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return il()<=fe.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Id(n)),this.$i.getDocumentsMatchingQuery(e,n,It.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new ct(se),this.Gi=new Hn(i=>ms(i),xi),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xm(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Zm(t,e,n,s){return new kT(t,e,n,s)}async function eA(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Fe();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function RT(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);W(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Fe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function NT(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function OT(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class zd{constructor(){this.activeTargetIds=I_()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tA{constructor(){this.Ur=new zd,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new zd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so=null;function yc(){return so===null?so=268435456+Math.round(2147483648*Math.random()):so++,"0x"+so.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class FT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=yc(),a=this.fo(e,n);D("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(l=>(D("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Bo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+dr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=LT[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=yc();return new Promise((o,a)=>{const c=new _0;c.setWithCredentials(!0),c.listenOnce(b0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case gc.NO_ERROR:const u=c.getResponseJson();D(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case gc.TIMEOUT:D(Ye,`RPC '${e}' ${i} timed out`),a(new H(E.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const h=c.getStatus();if(D(Ye,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(v){const k=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(k)>=0?k:E.UNKNOWN}(p.status);a(new H(m,p.message))}else a(new H(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(E.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{D(Ye,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);D(Ye,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}yo(e,n,s){const r=yc(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v0(),a=w0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new E0({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");D(Ye,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new MT({Yr:v=>{d?D(Ye,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(D(Ye,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),D(Ye,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},Zr:()=>u.close()}),m=(v,k,T)=>{v.listen(k,M=>{try{T(M)}catch(S){setTimeout(()=>{throw S},0)}})};return m(u,Xi.EventType.OPEN,()=>{d||D(Ye,`RPC '${e}' stream ${r} transport opened.`)}),m(u,Xi.EventType.CLOSE,()=>{d||(d=!0,D(Ye,`RPC '${e}' stream ${r} transport closed`),p.oo())}),m(u,Xi.EventType.ERROR,v=>{d||(d=!0,Bo(Ye,`RPC '${e}' stream ${r} transport errored:`,v),p.oo(new H(E.UNAVAILABLE,"The operation could not be completed")))}),m(u,Xi.EventType.MESSAGE,v=>{var k;if(!d){const T=v.data[0];W(!!T);const M=T,S=M.error||((k=M[0])===null||k===void 0?void 0:k.error);if(S){D(Ye,`RPC '${e}' stream ${r} received error:`,S);const G=S.status;let V=function($){const N=Oe[$];if(N!==void 0)return A_(N)}(G),Q=S.message;V===void 0&&(V=E.INTERNAL,Q="Unknown error status: "+G+" with message "+S.message),d=!0,p.oo(new H(V,Q)),u.close()}else D(Ye,`RPC '${e}' stream ${r} received:`,T),p.uo(T)}}),m(a,I0.STAT_EVENT,v=>{v.stat===ad.PROXY?D(Ye,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===ad.NOPROXY&&D(Ye,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(){return typeof window<"u"?window:null}function Ao(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){return new S_(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&D("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new nA(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new H(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VT extends BT{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=R_(e.writeResults,e.commitTime),s=Ft(e.commitTime);return this.listener.eu(s,n)}return W(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=D_(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Ko(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new H(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(E.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(E.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class jT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(yt(n),this.cu=!1):D("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{ki(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=we(a);c.mu.add(4),await Di(c),c.pu.set("Unknown"),c.mu.delete(4),await Ha(c)}(this))})}),this.pu=new jT(s,r)}}async function Ha(t){if(ki(t))for(const e of t.gu)await e(!0)}async function Di(t){for(const e of t.gu)await e(!1)}function ki(t){return we(t).mu.size===0}async function sA(t,e,n){if(!Es(e))throw e;t.mu.add(1),await Di(t),t.pu.set("Offline"),n||(n=()=>NT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Ha(t)})}function rA(t,e){return e().catch(n=>sA(t,n,e))}async function Ri(t){const e=we(t),n=Bn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;KT(e);)try{const r=await OT(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,qT(e,r)}catch(r){await sA(e,r)}iA(e)&&oA(e)}function KT(t){return ki(t)&&t._u.length<10}function qT(t,e){t._u.push(e);const n=Bn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function iA(t){return ki(t)&&!Bn(t).$o()&&t._u.length>0}function oA(t){Bn(t).start()}async function GT(t){Bn(t).su()}async function zT(t){const e=Bn(t);for(const n of t._u)e.tu(n.mutations)}async function QT(t,e,n){const s=t._u.shift(),r=bu.from(s,e,n);await rA(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ri(t)}async function WT(t,e){e&&Bn(t).Xo&&await async function(n,s){if(r=s.code,m_(r)&&r!==E.ABORTED){const i=n._u.shift();Bn(n).Fo(),await rA(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ri(n)}var r}(t,e),iA(t)&&oA(t)}async function Wd(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const s=ki(n);n.mu.add(3),await Di(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Ha(n)}async function XT(t,e){const n=we(t);e?(n.mu.delete(2),await Ha(n)):e||(n.mu.add(2),await Di(n),n.pu.set("Unknown"))}function Bn(t){return t.Eu||(t.Eu=function(e,n,s){const r=we(e);return r.ru(),new VT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:GT.bind(null,t),no:WT.bind(null,t),nu:zT.bind(null,t),eu:QT.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Ri(t)):(await t.Eu.stop(),t._u.length>0&&(D("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new on,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new xu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aA(t,e){if(yt("AsyncQueue",`${e}: ${t}`),Es(t))return new H(E.UNAVAILABLE,`${e}: ${t}`);throw t}class YT{constructor(){this.queries=new Hn(e=>Am(e),mm),this.onlineState="Unknown",this.vu=new Set}}function JT(t){t.vu.forEach(e=>{e.next()})}class ZT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Hn(a=>Am(a),mm),this.uc=new Map,this.cc=new Set,this.ac=new ct(F.comparator),this.hc=new Map,this.lc=new Tu,this.fc={},this.dc=new Map,this._c=vs.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function eS(t,e,n){const s=uA(t);try{const r=await function(i,o){const a=we(i),c=xe.now(),l=o.reduce((d,p)=>d.add(p.key),Fe());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=xn(),m=Fe();return a.ji.getEntries(d,l).next(v=>{p=v,p.forEach((k,T)=>{T.isValidDocument()||(m=m.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const k=[];for(const T of o){const M=g_(T,u.get(T.key).overlayedDocument);M!=null&&k.push(new jn(T.key,M,pm(M.value.mapValue),wt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(v=>{h=v;const k=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,k)})}).then(()=>({batchId:h.batchId,changes:xm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new ct(se)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ka(s,r.changes),await Ri(s.remoteStore)}catch(r){const i=aA(r,"Failed to persist write");n.reject(i)}}function Xd(t,e,n){const s=we(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=we(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&JT(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tS(t,e){const n=we(t),s=e.batch.batchId;try{const r=await RT(n.localStore,e);lA(n,s,null),cA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ka(n,r)}catch(r){await Na(r)}}async function nS(t,e,n){const s=we(t);try{const r=await function(i,o){const a=we(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(W(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);lA(s,e,n),cA(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ka(s,r)}catch(r){await Na(r)}}function cA(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function lA(t,e,n){const s=we(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}async function Ka(t,e,n){const s=we(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Cu.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=we(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>A.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Es(u))throw u;D("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,i))}async function sS(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const s=await eA(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new H(E.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ka(n,s.Wi)}}function uA(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nS.bind(null,e),e}class hA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ja(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Zm(this.persistence,new Jm,e.initialUser,this.Tt)}Tc(e){return new Ym($a.qs,this.Tt)}Ic(e){return new tA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rS extends hA{constructor(e,n,s){super(),this.Pc=e,this.cacheSizeBytes=n,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Pc.initialize(this,e),await uA(this.Pc.syncEngine),await Ri(this.Pc.remoteStore),await this.persistence.di(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ec(e){return Zm(this.persistence,new Jm,e.initialUser,this.Tt)}Ac(e,n){const s=this.persistence.referenceDelegate.garbageCollector;return new gT(s,e.asyncQueue,n)}Rc(e,n){const s=new B0(n,this.persistence);return new U0(e.asyncQueue,s)}Tc(e){const n=DT(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Su(this.synchronizeTabs,n,e.clientId,s,e.asyncQueue,UT(),Ao(),this.Tt,this.sharedClientState,!!this.forceOwnership)}Ic(e){return new tA}}class dA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sS.bind(null,this.syncEngine),await XT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new YT}createDatastore(e){const n=ja(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new FT(r));var r;return function(i,o,a,c){return new $T(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Xd(this.syncEngine,a,0),o=Qd.C()?new Qd:new PT,new HT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new ZT(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=we(e);D("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Di(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ge.UNAUTHENTICATED,this.clientId=Zg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{D("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(D("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new on;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=aA(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function fA(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await eA(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function pA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oS(t);D("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Wd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Wd(e.remoteStore,i)),t.onlineComponents=e}async function oS(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await fA(t,new hA)),t.offlineComponents}async function aS(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await pA(t,new dA)),t.onlineComponents}function cS(t){return aS(t).then(e=>e.syncEngine)}const Yd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e,n){if(!n)throw new H(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uS(t,e,n,s){if(e===!0&&s===!0)throw new H(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jd(t){if(!F.isDocumentKey(t))throw new H(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Qo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(t);throw new H(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,uS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new T0;switch(n.type){case"gapi":const s=n.client;return new D0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Yd.get(e);n&&(D("ComponentProvider","Removing Datastore"),Yd.delete(e),n.terminate())}(this),Promise.resolve()}}function hS(t,e,n,s={}){var r;const i=(t=Qo(t,ku))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Bo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ge.MOCK_USER;else{o=tI(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new H(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ge(c)}t._authCredentials=new S0(new Jg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class Ru{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ru(this.firestore,e,this._query)}}class ui extends Ru{constructor(e,n,s){super(e,n,gm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new F(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function dS(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=Zg.R()),lS("doc","path",e),t instanceof ku){const s=Ie.fromString(e,...n);return Jd(s),new an(t,null,new F(s))}{if(!(t instanceof an||t instanceof ui))throw new H(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Jd(s),new an(t.firestore,t instanceof ui?t.converter:null,new F(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new nA(this,"async_queue_retry"),this.Hc=()=>{const n=Ao();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Ao();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Ao();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new on;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Es(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw yt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=xu.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&z()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class Nu extends ku{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new fS,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mA(this),this._firestoreClient.terminate()}}function pS(t,e){const n=typeof t=="object"?t:zp(),s=typeof t=="string"?t:e||"(default)",r=ql(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Jb("firestore");i&&hS(r,...i)}return r}function gA(t){return t._firestoreClient||mA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mA(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new V0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new iS(t._authCredentials,t._appCheckCredentials,t._queue,s)}function gS(t,e){AS(t=Qo(t,Nu));const n=gA(t),s=t._freezeSettings(),r=new dA;return mS(n,r,new rS(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function mS(t,e,n){const s=new on;return t.asyncQueue.enqueue(async()=>{try{await fA(t,n),await pA(t,e),s.resolve()}catch(r){const i=r;if(!function(o){return o.name==="FirebaseError"?o.code===E.FAILED_PRECONDITION||o.code===E.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;Bo("Error enabling offline persistence. Falling back to persistence disabled: "+i),s.reject(i)}}).then(()=>s.promise)}function AS(t){if(t._initialized||t._terminated)throw new H(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi(Bt.fromBase64String(e))}catch(n){throw new H(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hi(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=/^__.*__$/;class vS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new fr(e,this.data,n,this.fieldTransforms)}}function wA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Ou{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Wo(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(wA(this.ra)&&yS.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class wS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ja(e)}wa(e,n,s,r=!1){return new Ou({ra:e,methodName:n,_a:s,path:Le.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function bS(t){const e=t._freezeSettings(),n=ja(t._databaseId);return new wS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IS(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);_A("Data must be an object, but it was:",o,s);const a=IA(s,o);let c,l;if(i.merge)c=new Tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=ES(e,h,n);if(!o.contains(d))throw new H(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SS(u,d)||u.push(d)}c=new Tt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new vS(new vt(a),c,l)}function bA(t,e){if(EA(t=Ct(t)))return _A("Unsupported field value:",e,t),IA(t,e);if(t instanceof yA)return function(n,s){if(!wA(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=bA(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return c_(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=xe.fromDate(n);return{timestampValue:li(s.Tt,r)}}if(n instanceof xe){const r=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:li(s.Tt,r)}}if(n instanceof vA)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hi)return{bytesValue:C_(s.Tt,n._byteString)};if(n instanceof an){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Du(n)}`)}(t,e)}function IA(t,e){const n={};return im(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,(s,r)=>{const i=bA(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function EA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof vA||t instanceof hi||t instanceof an||t instanceof yA)}function _A(t,e,n){if(!EA(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Du(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function ES(t,e,n){if((e=Ct(e))instanceof AA)return e._internalPath;if(typeof e=="string")return TS(t,e);throw Wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const _S=new RegExp("[~\\*/\\[\\]]");function TS(t,e,n){if(e.search(_S)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new AA(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new H(E.INVALID_ARGUMENT,a+t+c)}function SS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function xS(t,e,n){t=Qo(t,an);const s=Qo(t.firestore,Nu),r=CS(t.converter,e,n);return DS(s,[IS(bS(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,wt.none())])}function DS(t,e){return function(n,s){const r=new on;return n.asyncQueue.enqueueAndForget(async()=>eS(await cS(n),s,r)),r.promise}(gA(t),e)}(function(t,e=!0){(function(n){dr=n})(Ai),Ws(new ds("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Nu(new C0(n.getProvider("auth-internal")),new R0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Pn(cd,"3.9.0",t),Pn(cd,"3.9.0","esm2017")})();function Pu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function TA(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kS=TA,SA=new gi("auth","Firebase",TA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new Hl("@firebase/auth");function yo(t,...e){ef.logLevel<=fe.ERROR&&ef.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw Lu(t,...e)}function Qt(t,...e){return Lu(t,...e)}function RS(t,e,n){const s=Object.assign(Object.assign({},kS()),{[e]:n});return new gi("auth","Firebase",s).create(e,{appName:t.name})}function Lu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return SA.create(t,...e)}function X(t,e,...n){if(!t)throw Lu(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function hn(t,e){t||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new Map;function nn(t){hn(t instanceof Function,"Expected a class definition");let e=tf.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e){const n=ql(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Do(i,e??{}))return r;Vt(r,"already-initialized")}return n.initialize({options:e})}function OS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PS(){return nf()==="http:"||nf()==="https:"}function nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PS()||rI()||"connection"in navigator)?navigator.onLine:!0}function MS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=nI()||iI()}get(){return LS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Ni(3e4,6e4);function Oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pi(t,e,n,s,r={}){return xA(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=mi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),CA.fetch()(DA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xA(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},FS),e);try{const r=new BS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ro(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw RS(t,u,l);Vt(t,u)}}catch(r){if(r instanceof fn)throw r;Vt(t,"internal-error",{message:String(r)})}}async function Li(t,e,n,s,r={}){const i=await Pi(t,e,n,s,r);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function DA(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Mu(t.config,r):`${t.config.apiScheme}://${r}`}class BS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),US.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Qt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e){return Pi(t,"POST","/v1/accounts:delete",e)}async function $S(t,e){return Pi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jS(t,e=!1){const n=Ct(t),s=await n.getIdToken(e),r=Fu(s);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Hr(vc(r.auth_time)),issuedAtTime:Hr(vc(r.iat)),expirationTime:Hr(vc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Fu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vp(n);return r?JSON.parse(r):(yo("Failed to decode base64 JWT payload"),null)}catch(r){return yo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function HS(t){const e=Fu(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof fn&&KS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function KS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await di(t,$S(n,{idToken:s}));X(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?QS(i.providerUserInfo):[],a=zS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new kA(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function GS(t){const e=Ct(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function QS(t){return t.map(e=>{var{providerId:n}=e,s=Pu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e){const n=await xA(t,{},async()=>{const s=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=DA(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",CA.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await WS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new fi;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(X(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Pu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kA(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jS(this,e)}reload(){return GS(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,VS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:G,isAnonymous:V,providerData:Q,stsTokenManager:$}=n;X(S&&$,e,"internal-error");const N=fi.fromJSON(this.name,$);X(typeof S=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),X(typeof G=="boolean",e,"internal-error"),X(typeof V=="boolean",e,"internal-error"),yn(p,e.name),yn(m,e.name),yn(v,e.name),yn(k,e.name),yn(T,e.name),yn(M,e.name);const re=new hs({uid:S,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:V,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:N,createdAt:T,lastLoginAt:M});return Q&&Array.isArray(Q)&&(re.providerData=Q.map(oe=>Object.assign({},oe))),k&&(re._redirectEventId=k),re}static async _fromIdTokenResponse(e,n,s=!1){const r=new fi;r.updateFromServerResponse(n);const i=new hs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Xo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RA.type="NONE";const sf=RA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=vo(this.userKey,r.apiKey,i),this.fullPersistenceKey=vo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new $s(nn(sf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||nn(sf);const o=vo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=hs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $s(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new $s(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(NA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(MA(e))return"Blackberry";if(FA(e))return"Webos";if(Uu(e))return"Safari";if((e.includes("chrome/")||OA(e))&&!e.includes("edge/"))return"Chrome";if(LA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function NA(t=Be()){return/firefox\//i.test(t)}function Uu(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OA(t=Be()){return/crios\//i.test(t)}function PA(t=Be()){return/iemobile/i.test(t)}function LA(t=Be()){return/android/i.test(t)}function MA(t=Be()){return/blackberry/i.test(t)}function FA(t=Be()){return/webos/i.test(t)}function qa(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XS(t=Be()){var e;return qa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YS(){return oI()&&document.documentMode===10}function UA(t=Be()){return qa(t)||LA(t)||FA(t)||MA(t)||/windows phone/i.test(t)||PA(t)}function JS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t,e=[]){let n;switch(t){case"Browser":n=rf(Be());break;case"Worker":n=`${rf(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new of(this),this.idTokenSubscription=new of(this),this.beforeStateQueue=new ZS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SA,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ct(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Mi(t){return Ct(t)}class of{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function tC(t,e,n){const s=Mi(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=VA(e),{host:o,port:a}=nC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||sC()}function VA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nC(t){const e=VA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:af(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:af(o)}}}function af(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function rC(t,e){return Pi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e){return Li(t,"POST","/v1/accounts:signInWithPassword",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}async function aC(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Bu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new pi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new pi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return iC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oC(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aC(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return Li(t,"POST","/v1/accounts:signInWithIdp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="http://localhost";class ws extends Bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Pu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ws(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:cC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uC(t){const e=Sr(Cr(t)).link,n=e?Sr(Cr(e)).deep_link_id:null,s=Sr(Cr(t)).deep_link_id;return(s?Sr(Cr(s)).link:null)||s||n||e||t}class Vu{constructor(e){var n,s,r,i,o,a;const c=Sr(Cr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=lC((r=c.mode)!==null&&r!==void 0?r:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uC(e);try{return new Vu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.providerId=pr.PROVIDER_ID}static credential(e,n){return pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vu.parseLink(n);return X(s,"argument-error"),pi._fromEmailAndCode(e,s.code,s.tenantId)}}pr.PROVIDER_ID="password";pr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends $A{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Fi{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ws._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return _n.credential(n,s)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Fi{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Fi{constructor(){super("twitter.com")}static credential(e,n){return ws._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e){return Li(t,"POST","/v1/accounts:signUp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await hs._fromIdTokenResponse(e,s,r),o=cf(s);return new bs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=cf(s);return new bs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function cf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends fn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Yo(e,n,s,r)}}function jA(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,s):i})}async function dC(t,e,n=!1){const s=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await di(t,jA(s,r,e,t),n);X(i.idToken,s,"internal-error");const o=Fu(i.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),bs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e,n=!1){const s="signIn",r=await jA(t,s,e),i=await bs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function pC(t,e){return HA(Mi(t),e)}async function gC(t,e,n){const s=Mi(t),r=await hC(s,{returnSecureToken:!0,email:e,password:n}),i=await bs._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function mC(t,e,n){return pC(Ct(t),pr.credential(e,n))}function AC(t,e,n,s){return Ct(t).onIdTokenChanged(e,n,s)}function yC(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function vC(t,e,n,s){return Ct(t).onAuthStateChanged(e,n,s)}const Jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(){const t=Be();return Uu(t)||qa(t)}const bC=1e3,IC=10;class qA extends KA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wC()&&JS(),this.fallbackToPolling=UA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);YS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,IC):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qA.type="LOCAL";const EC=qA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA extends KA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GA.type="SESSION";const zA=GA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ga(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await _C(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$u("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function SC(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function CC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DC(){return QA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="firebaseLocalStorageDb",kC=1,Zo="firebaseLocalStorage",XA="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function RC(){const t=indexedDB.deleteDatabase(WA);return new Ui(t).toPromise()}function wl(){const t=indexedDB.open(WA,kC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zo,{keyPath:XA})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zo)?e(s):(s.close(),await RC(),e(await wl()))})})}async function lf(t,e,n){const s=za(t,!0).put({[XA]:e,value:n});return new Ui(s).toPromise()}async function NC(t,e){const n=za(t,!1).get(e),s=await new Ui(n).toPromise();return s===void 0?null:s.value}function uf(t,e){const n=za(t,!0).delete(e);return new Ui(n).toPromise()}const OC=800,PC=3;class YA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>PC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(DC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CC(),!this.activeServiceWorker)return;this.sender=new TC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await lf(e,Jo,"1"),await uf(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>NC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=za(r,!1).getAll();return new Ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YA.type="LOCAL";const LC=YA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function FC(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",MC().appendChild(s)})}function UC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t,e){return e?nn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VC(t){return HA(t.auth,new ju(t),t.bypassAuthState)}function $C(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),fC(n,new ju(t),t.bypassAuthState)}async function jC(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),dC(n,new ju(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VC;case"linkViaPopup":case"linkViaRedirect":return jC;case"reauthViaPopup":case"reauthViaRedirect":return $C;default:Vt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new Ni(2e3,1e4);class Ms extends JA{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=$u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,HC.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="pendingRedirect",wo=new Map;class qC extends JA{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const s=await GC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GC(t,e){const n=WC(e),s=QC(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function zC(t,e){wo.set(t._key(),e)}function QC(t){return nn(t._redirectPersistence)}function WC(t){return vo(KC,t.config.apiKey,t.name)}async function XC(t,e,n=!1){const s=Mi(t),r=BC(s,e),o=await new qC(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=10*60*1e3;class JC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ZA(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YC&&this.cachedEventUids.clear(),this.cachedEventUids.has(hf(e))}saveEventToCache(e){this.cachedEventUids.add(hf(e)),this.lastProcessedEventTime=Date.now()}}function hf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e={}){return Pi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nx=/^https?/;async function sx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ex(t);for(const n of e)try{if(rx(n))return}catch{}Vt(t,"unauthorized-domain")}function rx(t){const e=vl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!nx.test(n))return!1;if(tx.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=new Ni(3e4,6e4);function df(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ox(t){return new Promise((e,n)=>{var s,r,i;function o(){df(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{df(),n(Qt(t,"network-request-failed"))},timeout:ix.get()})}if(!((r=(s=Wt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=UC("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},FC(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw bo=null,e})}let bo=null;function ax(t){return bo=bo||ox(t),bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=new Ni(5e3,15e3),lx="__/auth/iframe",ux="emulator/auth/iframe",hx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fx(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mu(e,ux):`https://${t.config.authDomain}/${lx}`,s={apiKey:e.apiKey,appName:t.name,v:Ai},r=dx.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${mi(s).slice(1)}`}async function px(t){const e=await ax(t),n=Wt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:fx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hx,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},cx.get());function c(){Wt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mx=500,Ax=600,yx="_blank",vx="http://localhost";class ff{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wx(t,e,n,s=mx,r=Ax){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gx),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Be().toLowerCase();n&&(a=OA(l)?yx:n),NA(l)&&(e=e||vx,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(XS(l)&&a!=="_self")return bx(e||"",a),new ff(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new ff(h)}function bx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="__/auth/handler",Ex="emulator/auth/handler";function pf(t,e,n,s,r,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ai,eventId:r};if(e instanceof $A){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Fi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${_x(t)}?${mi(a).slice(1)}`}function _x({config:t}){return t.emulator?Mu(t,Ex):`https://${t.authDomain}/${Ix}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class Tx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zA,this._completeRedirectFn=XC,this._overrideRedirectResult=zC}async _openPopup(e,n,s,r){var i;hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=pf(e,n,s,vl(),r);return wx(e,o,$u())}async _openRedirect(e,n,s,r){return await this._originValidation(e),SC(pf(e,n,s,vl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(hn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await px(e),s=new JC(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wc];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return UA()||Uu()||qa()}}const Sx=Tx;var gf="@firebase/auth",mf="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dx(t){Ws(new ds("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{X(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BA(t)},u=new eC(a,c,l);return OS(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ws(new ds("auth-internal",e=>{const n=Mi(e.getProvider("auth").getImmediate());return(s=>new Cx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(gf,mf,xx(t)),Pn(gf,mf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=5*60,Rx=jp("authIdTokenMaxAge")||kx;let Af=null;const Nx=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Rx)return;const r=n==null?void 0:n.token;Af!==r&&(Af=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ey(t=zp()){const e=ql(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NS(t,{popupRedirectResolver:Sx,persistence:[LC,EC,zA]}),s=jp("authTokenSyncURL");if(s){const i=Nx(s);yC(n,i,()=>i(n.currentUser)),AC(n,o=>i(o))}const r=$p("auth");return r&&tC(n,`http://${r}`),n}Dx("Browser");const Ox="/assets/624_circle_logo-c714e720.png";const Px=["href"],ty={__name:"Button",props:{label:{type:String,required:!1},href:{type:String,required:!1},onClick:{type:Function,required:!1}},setup(t){const e=t;return(n,s)=>(Je(),mt("button",{href:e.href,onClick:s[0]||(s[0]=(...r)=>e.onClick&&e.onClick(...r)),class:"button",role:"button"},as(e.label),9,Px))}};const Hu=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Bi=t=>(Yf("data-v-e1e509b6"),t=t(),Jf(),t),Lx=Bi(()=>te("head",null,[te("meta",{name:"google-signin-client_id",content:"YOUR_CLIENT_ID.apps.googleusercontent.com"})],-1)),Mx={id:"box"},Fx=Bi(()=>te("img",{id:"circle_logo",src:Ox},null,-1)),Ux=Bi(()=>te("h1",{id:"login_title"},"Login",-1)),Bx={id:"auth"},Vx=["onSubmit"],$x={class:"Eform-group"},jx=Ap('<label for="email" class="form-label" data-v-e1e509b6><span aria-hidden="true" class="label__letter" style="--index:0;" data-v-e1e509b6>K</span><span aria-hidden="true" class="label__letter" style="--index:1;" data-v-e1e509b6>a</span><span aria-hidden="true" class="label__letter" style="--index:2;" data-v-e1e509b6>t</span><span aria-hidden="true" class="label__letter" style="--index:3;" data-v-e1e509b6>y</span><span aria-hidden="true" class="label__letter" style="--index:4;" data-v-e1e509b6> </span><span aria-hidden="true" class="label__letter" style="--index:5;" data-v-e1e509b6>I</span><span aria-hidden="true" class="label__letter" style="--index:6;" data-v-e1e509b6>S</span><span aria-hidden="true" class="label__letter" style="--index:7;" data-v-e1e509b6>D</span><span aria-hidden="true" class="label__letter" style="--index:8;" data-v-e1e509b6> </span><span aria-hidden="true" class="label__letter" style="--index:9;" data-v-e1e509b6>I</span><span aria-hidden="true" class="label__letter" style="--index:10;" data-v-e1e509b6>D</span><span class="sr-only" data-v-e1e509b6>Email</span></label>',1),Hx={class:"form-group__input",style:{position:"relative",left:"-10px"}},Kx=Bi(()=>te("div",{class:"form-group__error"},"Invalid Email",-1)),qx={class:"Pform-group"},Gx=Ap('<label for="password" class="form-label" data-v-e1e509b6><span aria-hidden="true" class="label__letter" style="--index:0;" data-v-e1e509b6>P</span><span aria-hidden="true" class="label__letter" style="--index:1;" data-v-e1e509b6>a</span><span aria-hidden="true" class="label__letter" style="--index:2;" data-v-e1e509b6>s</span><span aria-hidden="true" class="label__letter" style="--index:3;" data-v-e1e509b6>s</span><span aria-hidden="true" class="label__letter" style="--index:4;" data-v-e1e509b6>w</span><span aria-hidden="true" class="label__letter" style="--index:5;" data-v-e1e509b6>o</span><span aria-hidden="true" class="label__letter" style="--index:6;" data-v-e1e509b6>r</span><span aria-hidden="true" class="label__letter" style="--index:7;" data-v-e1e509b6>d</span><span class="sr-only" data-v-e1e509b6>Password</span></label>',1),zx={class:"form-group__input"},Qx=Bi(()=>te("div",{class:"form-group__error"},"Invalid Password",-1)),Wx={key:0},Xx={__name:"Login",setup(t){const e=Hb(),n=ln(""),s=ln(""),r=()=>{const i=document.querySelector("#email"),o=document.querySelector("#password");if(i.checkValidity()&&o.checkValidity()){const a=ey(),c=s.value+"@students.katyisd.org";gC(a,c,n.value).then(l=>{l.user,e.push("/scouting")}).catch(l=>{l.code==="auth/email-already-in-use"?mC(a,c,n.value).then(u=>{u.user,e.push("/scouting")}).catch(u=>{console.error("Sign in failed: ",u)}):console.error("Failed to create user:",l)})}else o.checkValidity()};return(i,o)=>(Je(),mt(Ze,null,[Lx,te("div",Mx,[Fx,Ux,te("div",Bx,[te("form",{action:"",onSubmit:Dw(r,["prevent"])},[te("div",$x,[jx,te("div",Hx,[xc(te("input",{required:"",id:"email",class:"form-input",pattern:"^[A-Za-z][0-9]{7}$",title:"Enter your school ID",placeholder:"Enter your school ID","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a)},null,512),[[Fc,s.value]]),Kx])]),te("div",qx,[Gx,te("div",zx,[xc(te("input",{required:"",type:"password",id:"password",class:"form-input",pattern:".{8,}",title:"Password must be at least 8 characters long",placeholder:"Enter password","onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},null,512),[[Fc,n.value]]),Qx,i.error?(Je(),mt("div",Wx,as(i.error),1)):Yv("",!0)])]),He(ty,{label:"Submit"})],40,Vx)])])],64))}},Yx=Hu(Xx,[["__scopeId","data-v-e1e509b6"]]),Jx="/assets/cryptonite_logo-ad732e97.png",Zx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAEkaAABJGgFW3UtnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAc5QTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4b6XgAAAJl0Uk5TAAECAwQFBwgJCg0ODxAREhMUFRgZGhsdHyAhJicoKSorLC8wMjM0ODk7PD4/Q0dJS0xNTlBRUlNUVVdbXF1eX2BhYmRlZmlrb3N1eHl6e3x/gIKJioyOkJGYmZydnp+goaOkpqeoqqusra6vsLGys7y9vr/AwsXGyMnLzc7P09TY2tvg4+Tl5ujq7e7v8vP09fb3+Pr7/P3+JHnxGgAACSRJREFUeNrt3QmvXVUdxuHdieKA1TrXqXKtVUSlTqCiV6yIFLVFBURrUZzAqYpUWwuFoihXBK0tPd3f1iYaCRJDsoez1trv836Ck//vOSc395xkd52ZmZmZmZmZ5e2ajYM2aPvaj7998/jjl3obuGd/860DTfffd0rEkXvhG7va7X/78wKO32P7W+1/s3iT7Onr2uy/d0u7afaDNgE8pNxU+1SL/Q/oNtmeahHAHbpNt9c1COCEbNPtww0COCfbdDvSIIDLsk234w0CUG3CPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUtvsAyN4mANl7LwDRu7ADgOg93AGQvL++EYDofaYDIHnf6wAI3nOHOwCC99u3d4EAzpy2q/vlsY+9uesSAezurPkBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAFgABgABoABYAAYAAaAAWAAGAAGQPzeeujotw+/fzcAkdv25a1/X+uFk28DIG/vOPXivf7+le0AhG3zny+52O/2ABC1L175n5M9tgeA5P4VCgBgrf3rEwDAevtXJwCANfevTQAA6+5fmQAA1t6/LgEArL9/VQIAKNC/JgEAlOhfkQAAivSvRwAAZfpXIwCAQv1rEQBAqf6VCACgWP86BABQrn8VAgAo2L8GAQCU7F+BAACK9i8vAICy/YsLAKBw/9ICACjdv7AAAIr3LysAgPL9iwoAoIL+JQUAUEP/ggIAqKJ/OQEA1NG/mAAAKulfSgAAtfQvJACAavqXEQBAPf2LCACgov4lBAAwYh9a9X3rAgAYvlc91ffNCwBg+O7t+/YFADB4G6t+AQIAGLwjfb8AAQAM3o/7JQgAYPDO90sQAMDQ7brSL0EAAIP3x34JAgAYvJ/1SxAAwOB9vV+CAAAG74Z+CQIAGL4HlyAAgOHb88wCBAAwYp/s2xcAwJgda18AAKN2d/MCAAgXAEC4AADCBQAQLgCAcAEAhAsAIFwAAOECAAgXAEC4AADCBQAQLgCAcAEAhAsAIFwAAOECAAgXAEC4AADCBQAQLgCAcAEAhAsAIFwAAOECAAgXAEC4AADCBQAQLgCAcAEAhAsAIFwAAOECAAgXAEC4AADCBQAQLgCAcAEAhAsAIFwAAOECAAgXAEC4AADCBQAQLgCAcAEAhAsAIFwAAOECAAgXAEC4AADCBQAQLgCAcAEAhAsAIFwAAOECAAgXAEC4AADCBQAQLgCAcAEAhAtYB4Cd1x++/5FH7eW7WF7A/AB2fO1Cb6V2dk9pAO88rULJvdJnwNwAPurtX7eAmQG84RkF6hYwM4Cfun/lAuYFcIvr1y5gXgA/cvzaBcwL4Lzb1y5gVgCvueL0tQuYFcCNDl+9gFkBfMLdqxcAQLgAAMIFABAuAIBwAQCECwAgXAAA4QIACBcAQLgAAMIFABAuAIBwAQCECwAgXAAA4QIACBcAQLgAAHJ39loAsncPANlbfQCA7D25G4Ds3QRA9o4BkL1fAZC9vwAAAADBOwmAPwIBCN4hAKJ3/loAkrf6oH8FR+9eXwZFz9fB2fODEP0BiO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f09NCq8v8fGhff34Mjw/h4dG95/ZgCfdvvK+8/9+PiHXb/u/nMD2Lvl/lX3nxtA9/GLCtTcf3YA3f4/aFBx//kBdDuPXpCh2M6+Qv81ALhK4PrD9z/yqL18F0q//9cDwP7P7irfH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AxDeH4Dw/gCE9wcgvD8A4f0BCO8PQHh/AML7AzBmN7XfH4ARu+7P7fcHYMS+v4D+AAzfDUvoD8DwfXUJ/QEYvp8soT8Aw3d+Cf0BGLxtl5bQH4Dhe2IJ/QEYvgeX0B+A4btzCf0BGL6N1QL6AzBi9yygPwAjtvvJ9vsDMGYHLzffH4BR++zl1vsDUJWA9fcHoCYBBfoDMFrAqun+AIzerauW+wNQjYAy/QGoRUCh/gBUIqBUfwDqEFCsPwDT7HOrRvsDUIOAgv0BqEBAyf4AlBdQtD8AxQWU7Q/AhPv8qr3+ABQWULo/AGUFFO8PQFEB5fsDUFJABf0BmHqbq6b6A1BOQBX9ASgmoI7+AJQSUEl/AAoJqKU/ALPsC6tW+gNQREA9/QEoIaCi/gAUEFBTfwDWL6Cq/gDMt9tWDfQHYN0CKusPwJoF1NYfgPUKqK4/APNu8+JLLvb76voDMPPeffrFe128a0cHQNp2HPnHf851Zn+Nrw+A2bfrfV/6zs/vPvSmOl8dAOEDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAADAADAADwAAwAAwAA8AAMABswQDOnLar+8XRj7w+E4D9dyffAkD2/rYJQPiOAxC+WwDI3tZeALL3QwCy99w2ALL3LgCydysA2bsPgOw9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU+yybNPtuw0COCfbdLuzQQAnZJtuNzYI4A7ZJtvq1Q0COKDbZDvXtbiHhJtqh5oEsHdLuWl2omtzN0s3yf702kYBdLc/r974nX1P1+z2ndJv5C4d29k1vO2bxx+/pOLQPfvrb250ze+ajYM2aPs6MzMzMzMzM7MG9i/kwlztF2AJ8AAAAABJRU5ErkJggg==",eD=[{optionLabel:"Played Defense",choices:["N/A","Yes","No"]},{optionLabel:"Driver Skill",choices:["N/A","Bad","Average","Amazing"]},{optionLabel:"Defending Level",choices:["N/A","Bad","Average","Amazing"]},{optionLabel:"Strategic Links",choices:["N/A","Yes","No"]},{optionLabel:"Game Piece Specialization",choices:["N/A","Cubes","Cones","Both"]},{optionLabel:"Substation Speed",choices:["N/A","Slow","Average","Fast"]}],tD=["118","148","231","418","624","1745","2158","2583","2587","2687","2714","2881","3005","3310","4153","4192","4206","4610","5261","5411","5417","5503","5572","5682","5829","6357","6901","7312","7506","7616","8088","8370","8573","8576","8749","8858","8874","9034","9088","9105"],nD={teams:tD},ny=Vw({id:"formStore",state:()=>({submissionData:new Map}),actions:{setValue(t,e){this.submissionData.set(t,e)},getValue(t){return this.submissionData.get(t)},deleteValue(t){this.submissionData.delete(t)},clearValues(){this.submissionData.clear()}}});const sD=["title","maxlength","filterFile"],rD=["id"],iD={__name:"TextField",props:{class:{type:String,default:"",required:!0},label:{type:String,required:!0},filterFile:{type:Array,required:!1},maxlength:{type:Number,default:100,required:!1},title:{type:String,default:"",required:!1},constraints:{type:String,default:"",required:!1},initialValue:{type:String,default:"",required:!1},reset:{type:Boolean,default:!1,required:!1},resetBehavior:{type:String,default:"default",required:!1}},setup(t){const e=t,n=ny(),s=e.label,r=s.replace(":","").trim(),i=`Invalid ${r}   `,o=ln(e.initialValue);la(()=>{n.setValue(r,e.initialValue)}),rn(()=>e.reset,p=>{p&&a()}),rn(o,p=>{u(e.constraints,p),c(p),l(p)});function a(){switch(e.resetBehavior){case"preserve":break;case"increment":o.value=(parseInt(o.value)+1).toString(),n.setValue(r,o.value);break;default:o.value="",n.setValue(r,"")}}function c(p){const m=e.maxlength;p.length===m?(o.value=p.toUpperCase(),document.getElementById(s).style.color="red"):document.getElementById(s).style.color="var(--color-text)"}function l(p){const m=e.filterFile;m&&(m.includes(p)?n.setValue(r,p):(n.setValue(r,""),d(p)))}function u(p,m){switch(p){case"Initials":h(m);break;case"Letters":o.value=m.replace(/[^a-zA-Z]/g,""),n.setValue(r,m);break;case"Text":o.value=m.replace(/[^a-zA-Z\s]/g,""),n.setValue(r,m);break;case"Numbers":o.value=m.replace(/\D/g,""),n.setValue(r,m);break}}function h(p){/^[a-zA-Z]*$/.test(p)||(o.value=p.slice(0,-1)),p.length===0||p.length<2?n.setValue(r,""):(document.getElementById(s).style.color="var(--color-text)",n.setValue(r,p))}function d(p){return p.length===0?"":i}return(p,m)=>(Je(),mt("div",null,[te("label",null,as(sn(s)),1),te("form",null,[xc(te("input",{onkeypress:"return event.keyCode != 13",title:e.title,id:"textField",maxlength:e.maxlength,filterFile:e.filterFile,"onUpdate:modelValue":m[0]||(m[0]=v=>o.value=v)},null,8,sD),[[Fc,o.value]]),te("label",{class:"maxChar",id:sn(s)},as(o.value.length)+"/"+as(e.maxlength),9,rD)])]))}},yf=Hu(iD,[["__scopeId","data-v-58f31b58"]]),oD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAB1dJREFUeJzt3WesbGUVh/FnzjnXBhcQ0KuIomBDBRVLRMQIihhQxIaKIjHGEmM3xqhEY4uxRDT2EjW2qLHFEjWWYC+xS+9ILxcuvZ/th+WEfTeHc2fO7HevPTPPL1nf3/Wu939zdnJXBiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkjRTngQcBQyyDyJeArww+xC6xQHAtUAFvAtDkullxByWgRcln0XAgcB1xFCG9R4MSYaXs/kcloEjU080557CrcMxrPdiSLr0ClaewzLw4sRzza2DgOtZeSjDeh+GpAuvZPU5LBPfJerIwWw5HMN6P4akpFcx2hwq4KVJZ5wrTwNuYPShVMAHMSQlvJrx5lARH/Eq5BDGD8ewPoQhadNrWdscKuJ7RS07lLWHY1gfxpC04fVMNoeK+G5RS54B3MjkQ6mAj2BIJvEG2plDRXy/aELPor1wDOujGJK1eCPtzqECXtNpBzPmOcBNtD+UCvgYhmQcb6LMHCrgdR32MTMOo1w4hvUJDMko3kzZOVTEd41G9DzKh2NYnwQWumlrKr2FbuZQEX/CaQsOB26mu6FUwKcwJCt5K93OoSL+lNNteAHdh2NYn8GQ1B1Fzhwq4k86NRxBXjiG9TkMCcDbyZ1DRfxpp/87kvgPbdlDqYDPM98heQf5MxjW2wr3OhU2AFeTP4x6fYH5C8kAeCf5d1+vZWDPkk1Pi/pGYF/qi8BiyaZ7ZEBsYmbfeTMcR5Rseto8EbiG/MHU60vMfkgGwLvJv+t63Yw77Svan/6F5MvMbkgGxOZl9h03w3F4yaan3X70LyRfZfZCMiA2LrPvthmO55dselY8gf59uH8NWCrYc5cGxKZl9p3W6ybguSWbnjWPB64if3D1+jrTH5IB8AHy77IZjsNKNj2r9qV/IfkG0xuSAbFZmX2HzXA8u2TTs+5xwJXkD7Je32T6QjIgNiqz765eNxL7PprQPvQvJN8C1pVsukUD4Gjy76wZjmeWbHrePBa4gvzB1uvb9D8kA2KDMvuumuE4tGTT82pv+heS7wK3K9n0BAbE5mT2HdXrBuDpJZued48BLid/0PX6Hv0LyQD4OPl30wzHISWbVng0sIn8gdfr+/QnJAvEpmT2ndTreuCpJZvW5h5F/0LyA+D2JZsewQKxIZl9F81wHFyyaa3skcBl5D+Aev2QvJAsEJuR2XfQDMdBJZvW6h4BXEr+Q6jXj+g+JAvAZ1s4e5t1HfETFUq2F/0LyY+BO5RsumaB2ITM7rkZjgNLNq3xPBzYSP7DqNdPKB+SBWIDMrvXel0LPLlk01qbh9G/kPyUciFZJDYfs3tshuOAQv2qBQ8FLiH/odTrZ8AdW+5zkdh4zO6tXtcQm6HquT2Bi8l/MPX6OXCnlvpbJDYds3tqhmP/lvpTB/agfyH5BZOHZBH4Sg96aYZjvwn7UoKHABeR/4Dq9UvWHpIlYrMxu4d6XU1sgGpKPRi4kPyHVK9fAVuN2ccSsdGYffZ6XUVsfmrKPQi4gPwHVa9jGD0kS8QmY/aZm+HYd8TzawrsTv9C8mtg6y2ce4nYYMw+a72uJDY9NWMeCJxP/gOr12+47ZCsIzYXs8/YDMc+W7xpTa0HAOeR/9Dq9VtgfeOc64iNxeyz1esKYrNTM+7+wLnkP7h6/Y5bQrIO+E4PztQMx95j37Sm1v2Ac8h/ePX6PbADscabfZZ6XU5scmrO3Bc4m/wH2PyXOvsM9dpEbHBqTu0G/Jf8h9jH2kRsbmrO7YohadZlxMamBERIziL/YfahLiU2NaXN3Ac4k/wHmh2OvSa8R82wewNnkP9QM2ojsZkprWoX5i8kG4mNTGkk9wJOJ//hdlGXEJuY0ljuCZxG/gMuWRfjTy1rAjsDp5L/kEuFY4/2rkrzamfgFPIfdJt1EbFxKbXiHsDJ5D/sNupCYtNSatVOwEnkP/BJ6gJiw1IqYifgRPIf+lrDsXv7VyJt7u7ACeQ/+HHqfGKjUurE3YDjyX/4o9R5xCal1KkNwHHkB2C1OpfYoJRSbACOJT8IK9U5xOaklOquwH/ID0S9ziY2JqVeuAvwb/KDURHLX7uVbVca347Av8gPx66lG5XWakfgn+SE4ywMh6bADsA/6DYcZxIbkdJU2B74O92E4wxiE1KaKtsDf6N8OHbpqiGpbXcG/kqZcJxObD5KU2074C+0G47TiI1HaSZsB/yZdsJxKrHEJc2UbYE/MVk4TsFwaIZtC/yRtYXjZGKzUZpp2wB/YLxwnEQsa0lzYRvi90BGCceJGA7NofXEL0utFo4TiA1GaS6tJ37Ic6VwHE9sLkpzbWviJ6Hr4TiOWMaSRITkGCIcx2I4pFvZCvg0saEoSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkdet/+eG36Igwk84AAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==";const sy=t=>(Yf("data-v-082a972e"),t=t(),Jf(),t),aD={class:"custom-select"},cD=sy(()=>te("option",{class:"option",value:"Default",disabled:"",selected:""},"Select your option",-1)),lD=["value"],uD=sy(()=>te("div",{class:"select-arrow"},[te("img",{src:oD})],-1)),hD={__name:"Dropdown",props:{modelValue:{type:String,default:"Default"},options:Object,reset:{type:Boolean,default:!1}},setup(t){const e=t,n=ln(null);function s(){n.value.selectedIndex=0}return rn(()=>e.reset,r=>{r&&s()}),(r,i)=>(Je(),mt("div",aD,[te("select",{ref_key:"selectDropdown",ref:n,onChange:i[0]||(i[0]=(...o)=>r.updateValue&&r.updateValue(...o)),class:"custom-dropdown"},[cD,(Je(!0),mt(Ze,null,Tr(t.options.choices,o=>(Je(),mt("option",{value:o},as(o),9,lD))),256))],544),uD]))}},dD=Hu(hD,[["__scopeId","data-v-082a972e"]]);const fD={style:{height:"100%",padding:"2%"}},pD={id:"top"},gD={id:"logo-logout"},mD=te("img",{id:"logo",src:Jx},null,-1),AD=te("img",{id:"logout-image",src:Zx},null,-1),yD=te("p",{id:"logout-text"},"Logout",-1),vD=[AD,yD],wD=te("h1",{id:"title"},"Comment Scouting",-1),bD={id:"comments"},ID={class:"textboxes"},ED={id:"options"},_D={id:"optionLabels"},TD={id:"dropdowns"},SD={class:"textboxes"},CD=te("h2",{class:"hide",id:"invalid-popup"},"INVALID INFORMATION",-1),xD={__name:"Scouting",setup(t){const e=ny(),n=ln(!1),s=ln(eD),r=[{class:"match-number-textfield",constraints:"Numbers",label:"Match Number:",maxlength:2,initialValue:"1",resetBehavior:"increment"},{class:"team-number-textfield",constraints:"Numbers",filterFile:nD.teams,label:"Team Number: ",maxlength:5},{class:"scouts-initials-textfield",constraints:"Initials",label:"Scout's Initials:",resetBehavior:"preserve",maxlength:2}],i=[{class:"auton-info-textfield",constraints:"Text",label:"Auton Description:",maxlength:200},{class:"additional-comments-textfield",constraints:"Text",label:"Additional Comments:",maxlength:200}];la(()=>{s.value.forEach(h=>{e.setValue(h.optionLabel,"")})});function o(h,d){e.setValue(d,h.target.value)}function a(){n.value=!0}function c(){for(const[d,p]of e.submissionData.entries()){var h=document.getElementById("invalid-popup");if(p===""&&d!="Additional Comments"){h.innerHTML=d+" is Invalid",h.classList.remove("hide");break}else h.classList.add("hide")}h.className==="hide"&&(l(),a())}async function l(){try{let h={};e.submissionData.forEach((m,v)=>{h[v]=m});const d="match"+e.submissionData.get("Match Number"),p=dS(ry,"matches",d,"teams",e.submissionData.get("Team Number"));await xS(p,h)}catch(h){console.error("Error adding document: ",h)}}async function u(){Ku.push("/login")}return rn(n,(h,d)=>{setTimeout(()=>{h===!0&&(s.value.forEach(p=>{e.setValue(p.optionLabel,"")}),n.value=!1)},1500)}),(h,d)=>(Je(),mt("div",fD,[te("header",pD,[te("div",gD,[mD,te("button",{id:"logout",onClick:d[0]||(d[0]=p=>u())},vD)]),wD]),te("main",bD,[te("div",ID,[(Je(),mt(Ze,null,Tr(r,(p,m)=>He(yf,Lc({key:m},p,{reset:n.value}),null,16,["reset"])),64))]),te("section",ED,[te("div",_D,[(Je(!0),mt(Ze,null,Tr(s.value,(p,m)=>(Je(),mt("label",{class:"optionLabel",key:m},as(p.optionLabel),1))),128))]),te("div",TD,[(Je(!0),mt(Ze,null,Tr(s.value,(p,m)=>(Je(),Vl(dD,{key:m,value:p.optionLabel,options:p,onChange:v=>o(v,p.optionLabel),reset:n.value},null,8,["value","options","onChange","reset"]))),128))])]),te("div",SD,[(Je(),mt(Ze,null,Tr(i,(p,m)=>He(yf,Lc({key:m},p,{reset:n.value}),null,16,["reset"])),64))]),He(ty,{onClick:d[1]||(d[1]=p=>c()),label:"Submit to Database"}),CD])]))}},DD=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:Yx},{path:"/scouting",name:"Scouting",component:xD,meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",redirect:"/login"}],Ku=$b({history:rb("/"),routes:DD});Ku.beforeEach((t,e,n)=>{const s=t.matched.some(i=>i.meta.requiresAuth),r=ey();vC(r,i=>{s&&!i?n({path:"/login"}):n()})});const kD={apiKey:"AIzaSyD4XGhmHwisYjhrIVoGsOh1tvAQ75bsg8U",authDomain:"scouting-web-app-2023.firebaseapp.com",projectId:"scouting-web-app-2023",storageBucket:"scouting-web-app-2023.appspot.com",messagingSenderId:"360081015403",appId:"1:360081015403:web:92f78f843f4315e272272e",measurementId:"G-048BY8QV6D"},RD=Gp(kD),ry=pS(RD);gS(ry).catch(t=>{t.code=="failed-precondition"||t.code=="unimplemented"});const qu=Nw(Kb),ND=Lw();qu.use(Ku);qu.use(ND);qu.mount("#app");
