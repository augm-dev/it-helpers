!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).augmitHelpers={})}(this,(function(e){"use strict";for(var t,n=256,r=[];n--;)r[n]=(n+256).toString(16).substring(1);function i(e){var i=0,o=e||11;if(!t||n+o>512)for(t="",n=0;i<256;i++)t+=r[256*Math.random()|0];return t.substring(n,n+++o)}function o(e){if("string"==typeof e)return e;for(var t=e[0],n=1,r=arguments.length;n<r;n++)t+=arguments[n]+e[n];return t}const f=o.bind(null),u=o.bind(null),s=e=>new Proxy({},{get:(t,n)=>n===Symbol.toPrimitive||"toString"===n?()=>e:e+"__"+n});e.css=f,e.mangle=e=>s(e+"-"+i(7)),e.raw=u,e.register=e=>s(e),e.uid=i,Object.defineProperty(e,"__esModule",{value:!0})}));
