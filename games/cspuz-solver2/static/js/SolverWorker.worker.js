!function(){var t={786:function(t){var n=function(){var t="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return function(n){var r,e;(n="undefined"!==typeof(n=n||{})?n:{}).ready=new Promise((function(t,n){r=t,e=n}));var o,i={};for(o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);var a,u,s,c=[],f="./this.program",l=function(t,n){throw n};a="object"===typeof window,u="function"===typeof importScripts,s="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;var p,h="";(a||u)&&(u?h=self.location.href:"undefined"!==typeof document&&document.currentScript&&(h=document.currentScript.src),t&&(h=t),h=0!==h.indexOf("blob:")?h.substr(0,h.lastIndexOf("/")+1):"",function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},u&&(p=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),function(t,n,r){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=function(){200==e.status||0==e.status&&e.response?n(e.response):r()},e.onerror=r,e.send(null)});var m=n.print||console.log.bind(console),_=n.printErr||console.warn.bind(console);for(o in i)i.hasOwnProperty(o)&&(n[o]=i[o]);i=null,n.arguments&&(c=n.arguments),n.thisProgram&&(f=n.thisProgram),n.quit&&(l=n.quit);var g,v,d,y=0,w=function(t){y=t};n.wasmBinary&&(g=n.wasmBinary),n.noExitRuntime&&(v=n.noExitRuntime),"object"!==typeof WebAssembly&&D("no native wasm support detected");var b,A,C,R,E=!1,x="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(t,n,r){for(var e=n+r,o=n;t[o]&&!(o>=e);)++o;if(o-n>16&&t.subarray&&x)return x.decode(t.subarray(n,o));for(var i="";n<o;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[n++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function S(t,n){return t?P(C,t,n):""}function j(t){b=t,n.HEAP8=A=new Int8Array(t),n.HEAP16=new Int16Array(t),n.HEAP32=R=new Int32Array(t),n.HEAPU8=C=new Uint8Array(t),n.HEAPU16=new Uint16Array(t),n.HEAPU32=new Uint32Array(t),n.HEAPF32=new Float32Array(t),n.HEAPF64=new Float64Array(t)}var I,H=n.INITIAL_MEMORY||16777216;(d=n.wasmMemory?n.wasmMemory:new WebAssembly.Memory({initial:H/65536,maximum:32768}))&&(b=d.buffer),H=b.byteLength,j(b);var T=[],U=[],M=[],k=[];var G=0,O=null,W=null;function D(t){n.onAbort&&n.onAbort(t),_(t+=""),E=!0,1,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(t);throw e(r),r}n.preloadedImages={},n.preloadedAudios={};function L(t){return n=t,r="data:application/octet-stream;base64,",String.prototype.startsWith?n.startsWith(r):0===n.indexOf(r);var n,r}var F,q="cspuz_solver_backend.wasm";function z(){try{if(g)return new Uint8Array(g);if(p)return p(q);throw"both async and sync fetching of the wasm failed"}catch(_){D(_)}}function B(t){for(;t.length>0;){var r=t.shift();if("function"!=typeof r){var e=r.func;"number"===typeof e?void 0===r.arg?I.get(e)():I.get(e)(r.arg):e(void 0===r.arg?null:r.arg)}else r(n)}}L(q)||(F=q,q=n.locateFile?n.locateFile(F,h):h+F);var N=0,X=4,J=8,Y=12,K=13,Q=16;var V=0;function Z(t){this.excPtr=t,this.ptr=t-Q,this.set_type=function(t){R[this.ptr+J>>2]=t},this.get_type=function(){return R[this.ptr+J>>2]},this.set_destructor=function(t){R[this.ptr+N>>2]=t},this.get_destructor=function(){return R[this.ptr+N>>2]},this.set_refcount=function(t){R[this.ptr+X>>2]=t},this.set_caught=function(t){t=t?1:0,A[this.ptr+Y>>0]=t},this.get_caught=function(){return 0!=A[this.ptr+Y>>0]},this.set_rethrown=function(t){t=t?1:0,A[this.ptr+K>>0]=t},this.get_rethrown=function(){return 0!=A[this.ptr+K>>0]},this.init=function(t,n){this.set_type(t),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=R[this.ptr+X>>2];R[this.ptr+X>>2]=t+1},this.release_ref=function(){var t=R[this.ptr+X>>2];return R[this.ptr+X>>2]=t-1,1===t}}function $(t){this.free=function(){ft(this.ptr),this.ptr=0},this.set_base_ptr=function(t){R[this.ptr>>2]=t},this.get_base_ptr=function(){return R[this.ptr>>2]},this.set_adjusted_ptr=function(t){R[this.ptr+4>>2]=t},this.get_adjusted_ptr=function(){return R[this.ptr+4>>2]},this.get_exception_ptr=function(){if(___cxa_is_pointer_type(this.get_exception_info().get_type()))return R[this.get_base_ptr()>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.get_base_ptr()},this.get_exception_info=function(){return new Z(this.get_base_ptr())},void 0===t?(this.ptr=lt(8),this.set_adjusted_ptr(0)):this.ptr=t}var tt,nt={mappings:{},buffers:[null,[],[]],printChar:function(t,n){var r=nt.buffers[t];0===n||10===n?((1===t?m:_)(P(r,0)),r.length=0):r.push(n)},varargs:void 0,get:function(){return nt.varargs+=4,R[nt.varargs-4>>2]},getStr:function(t){return S(t)},get64:function(t,n){return t}};tt=function(){return performance.now()};function rt(t){try{return d.grow(t-b.byteLength+65535>>>16),j(d.buffer),1}catch(n){}}var et={};function ot(){if(!ot.strings){var t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:f||"./this.program"};for(var n in et)t[n]=et[n];var r=[];for(var n in t)r.push(n+"="+t[n]);ot.strings=r}return ot.strings}U.push({func:function(){ut()}});var it,at={b:function(t,n,r,e){D("Assertion failed: "+S(t)+", at: "+[n?S(n):"unknown filename",r,e?S(e):"unknown function"])},h:function(t){return lt(t+Q)+Q},d:function(){var t=V;if(!t)return w(0),0;var n=new Z(t),r=n.get_type(),e=new $;if(e.set_base_ptr(t),!r)return w(0),0|e.ptr;var o=Array.prototype.slice.call(arguments),i=pt(),a=mt(4);R[a>>2]=t;for(var u=0;u<o.length;u++){var s=o[u];if(0===s||s===r)break;if(___cxa_can_catch(s,r,a)){var c=R[a>>2];return t!==c&&e.set_adjusted_ptr(c),w(0|s),0|e.ptr}}return ht(i),w(0|r),0|e.ptr},g:function(t,n,r){throw new Z(t).init(n,r),V=t,t},e:function(t){var n=new $(t),r=n.get_base_ptr();throw V||(V=r),n.free(),r},A:function(t,n){},B:function(t,n){return st(n,0,136),R[n>>2]=1,R[n+4>>2]=2,R[n+8>>2]=3,R[n+12>>2]=4,0},k:function(){D()},F:function(t,n){var r,e;if(0===t)r=Date.now();else{if(1!==t&&4!==t)return e=28,R[ct()>>2]=e,-1;r=tt()}return R[n>>2]=r/1e3|0,R[n+4>>2]=r%1e3*1e3*1e3|0,0},w:function(t,n,r){C.copyWithin(t,n,n+r)},x:function(t){t>>>=0;var n=C.length,r=2147483648;if(t>r)return!1;for(var e,o,i=1;i<=4;i*=2){var a=n*(1+.2/i);if(a=Math.min(a,t+100663296),rt(Math.min(r,((e=Math.max(16777216,t,a))%(o=65536)>0&&(e+=o-e%o),e))))return!0}return!1},y:function(t,n){var r=0;return ot().forEach((function(e,o){var i=n+r;R[t+4*o>>2]=i,function(t,n,r){for(var e=0;e<t.length;++e)A[n++>>0]=t.charCodeAt(e);r||(A[n>>0]=0)}(e,i),r+=e.length+1})),0},z:function(t,n){var r=ot();R[t>>2]=r.length;var e=0;return r.forEach((function(t){e+=t.length+1})),R[n>>2]=e,0},n:function(t){!function(t,r){if(r&&v&&0===t)return;v||(t,!0,n.onExit&&n.onExit(t),E=!0);l(t,new gt(t))}(t)},r:function(t,n,r,e){for(var o=0,i=0;i<r;i++){for(var a=R[n+8*i>>2],u=R[n+(8*i+4)>>2],s=0;s<u;s++)nt.printChar(t,C[a+s]);o+=u}return R[e>>2]=o,0},c:function(){return 0|y},K:function(t){var n=pt();try{return I.get(t)()}catch(r){if(ht(n),r!==r+0&&"longjmp"!==r)throw r;_t(1,0)}},l:function(t,n){var r=pt();try{return I.get(t)(n)}catch(e){if(ht(r),e!==e+0&&"longjmp"!==e)throw e;_t(1,0)}},p:function(t,n,r){var e=pt();try{return I.get(t)(n,r)}catch(o){if(ht(e),o!==o+0&&"longjmp"!==o)throw o;_t(1,0)}},m:function(t,n,r,e){var o=pt();try{return I.get(t)(n,r,e)}catch(i){if(ht(o),i!==i+0&&"longjmp"!==i)throw i;_t(1,0)}},G:function(t,n,r,e,o,i){var a=pt();try{return I.get(t)(n,r,e,o,i)}catch(u){if(ht(a),u!==u+0&&"longjmp"!==u)throw u;_t(1,0)}},t:function(t){var n=pt();try{I.get(t)()}catch(r){if(ht(n),r!==r+0&&"longjmp"!==r)throw r;_t(1,0)}},f:function(t,n){var r=pt();try{I.get(t)(n)}catch(e){if(ht(r),e!==e+0&&"longjmp"!==e)throw e;_t(1,0)}},i:function(t,n,r){var e=pt();try{I.get(t)(n,r)}catch(o){if(ht(e),o!==o+0&&"longjmp"!==o)throw o;_t(1,0)}},j:function(t,n,r,e){var o=pt();try{I.get(t)(n,r,e)}catch(i){if(ht(o),i!==i+0&&"longjmp"!==i)throw i;_t(1,0)}},q:function(t,n,r,e,o){var i=pt();try{I.get(t)(n,r,e,o)}catch(a){if(ht(i),a!==a+0&&"longjmp"!==a)throw a;_t(1,0)}},o:function(t,n,r,e,o,i){var a=pt();try{I.get(t)(n,r,e,o,i)}catch(u){if(ht(a),u!==u+0&&"longjmp"!==u)throw u;_t(1,0)}},a:d,H:function(){return 0},J:function(){return 0},I:function(){return 0},v:function(){},E:function(){},D:function(){},u:function(){return 0},C:function(){return 0},s:function(){return 0}},ut=(function(){var t={a:at};function r(t,r){var e=t.exports;n.asm=e,I=n.asm.L,function(t){if(G--,n.monitorRunDependencies&&n.monitorRunDependencies(G),0==G&&(null!==O&&(clearInterval(O),O=null),W)){var r=W;W=null,r()}}()}function o(t){r(t.instance)}function i(n){return(g||!a&&!u||"function"!==typeof fetch?Promise.resolve().then(z):fetch(q,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+q+"'";return t.arrayBuffer()})).catch((function(){return z()}))).then((function(n){return WebAssembly.instantiate(n,t)})).then(n,(function(t){_("failed to asynchronously prepare wasm: "+t),D(t)}))}if(G++,n.monitorRunDependencies&&n.monitorRunDependencies(G),n.instantiateWasm)try{return n.instantiateWasm(t,r)}catch(s){return _("Module.instantiateWasm callback failed with error: "+s),!1}(g||"function"!==typeof WebAssembly.instantiateStreaming||L(q)||"function"!==typeof fetch?i(o):fetch(q,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(o,(function(t){return _("wasm streaming compile failed: "+t),_("falling back to ArrayBuffer instantiation"),i(o)}))}))).catch(e)}(),n.___wasm_call_ctors=function(){return(ut=n.___wasm_call_ctors=n.asm.M).apply(null,arguments)}),st=(n._solve_problem=function(){return(n._solve_problem=n.asm.N).apply(null,arguments)},n._enumerate_answers_problem=function(){return(n._enumerate_answers_problem=n.asm.O).apply(null,arguments)},n._memset=function(){return(st=n._memset=n.asm.P).apply(null,arguments)}),ct=(n._Glucose_CallCustomConstraintInitialize=function(){return(n._Glucose_CallCustomConstraintInitialize=n.asm.Q).apply(null,arguments)},n._Glucose_CallCustomConstraintPropagate=function(){return(n._Glucose_CallCustomConstraintPropagate=n.asm.R).apply(null,arguments)},n._Glucose_CallCustomConstraintCalcReason=function(){return(n._Glucose_CallCustomConstraintCalcReason=n.asm.S).apply(null,arguments)},n._Glucose_CallCustomConstraintUndo=function(){return(n._Glucose_CallCustomConstraintUndo=n.asm.T).apply(null,arguments)},n.___errno_location=function(){return(ct=n.___errno_location=n.asm.U).apply(null,arguments)}),ft=n._free=function(){return(ft=n._free=n.asm.V).apply(null,arguments)},lt=n._malloc=function(){return(lt=n._malloc=n.asm.W).apply(null,arguments)},pt=n.stackSave=function(){return(pt=n.stackSave=n.asm.X).apply(null,arguments)},ht=n.stackRestore=function(){return(ht=n.stackRestore=n.asm.Y).apply(null,arguments)},mt=n.stackAlloc=function(){return(mt=n.stackAlloc=n.asm.Z).apply(null,arguments)},_t=n._setThrew=function(){return(_t=n._setThrew=n.asm._).apply(null,arguments)};function gt(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function vt(t){function e(){it||(it=!0,n.calledRun=!0,E||(!0,B(U),B(M),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)t=n.postRun.shift(),k.unshift(t);var t;B(k)}()))}t=t||c,G>0||(!function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)t=n.preRun.shift(),T.unshift(t);var t;B(T)}(),G>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(W=function t(){it||vt(),it||(W=t)},n.run=vt,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return v=!0,vt(),n.ready}}();t.exports=n}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";var t=r(786),n=r.n(t);let e=null;function o(t){const n=t.url,r=t.numAnswers||0,o=(new TextEncoder).encode(n),i=e._malloc(o.length);let a;e.HEAPU8.set(o,i),a=r<=0?e._solve_problem(i,o.length):e._enumerate_answers_problem(i,o.length,r),e._free(i);const u=e.HEAPU8[a]|e.HEAPU8[a+1]<<8|e.HEAPU8[a+2]<<16|e.HEAPU8[a+3]<<24,s=(new TextDecoder).decode(e.HEAPU8.slice(a+4,a+4+u)),c=JSON.parse(s.substring(0,s.length));self.postMessage(c.description)}self.onmessage=function(t){const r=t.data;e?o(r):n()().then((t=>{e=t,o(r)}))},n()().then((t=>{e=t}))}()}();
//# sourceMappingURL=SolverWorker.worker.js.map