import { uid } from 'uid'
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
const liveCSS = function(){
  let styles = plain.apply(null,arguments)
  if(styles){
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(styles))
    document.head.appendChild(styleTag)
  }
}
const it_prox = (name) => new Proxy({}, {
  get(_,prop){
    if(prop===Symbol.toPrimitive || prop === 'toString'){ return ()=>name }
    return name+'__'+prop
  }
});
const register=(n)=>it_prox(n)
const mangle=(n)=>it_prox(n+'-'+uid(7))


export { css, liveCSS, raw, register, mangle, uid };