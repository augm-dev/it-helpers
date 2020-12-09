import { uid } from 'uid'
// from https://github.com/WebReflection/plain-tag/blob/master/esm/index.js
function plain(t) {
  if(typeof t === 'string'){
    return t;
  }
  for (var s = t[0], i = 1, l = arguments.length; i < l; i++)
    s += arguments[i] + t[i];
  return s;
};
const css=plain.bind(null);
const raw=plain.bind(null);
const it_prox = (name) => new Proxy({}, {
  get(_,prop){
    if(prop===Symbol.toPrimitive || prop === 'toString'){ return ()=>name }
    return name+'_'+prop
  }
});
const register=(n)=>it_prox(n)
const mangle=(n)=>it_prox(n+'-'+uid(7))


export { css, raw, register, mangle, uid };