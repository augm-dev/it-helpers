var IDX=256, HEX=[], SIZE=256, BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

function uid(len) {
	var i=0, tmp=(len || 11);
	if (!BUFFER || ((IDX + tmp) > SIZE*2)) {
		for (BUFFER='',IDX=0; i < SIZE; i++) {
			BUFFER += HEX[Math.random() * 256 | 0];
		}
	}

	return BUFFER.substring(IDX, IDX++ + tmp);
}

function plain(t) {
  if(typeof t === 'string'){
    return t;
  }
  for (var s = t[0], i = 1, l = arguments.length; i < l; i++)
    s += arguments[i] + t[i];
  return s;
}const uid$1 = (n=11)=>'_'+uid(n-1);
const css=plain.bind(null);
const raw=plain.bind(null);
const liveCSS = function(){
  let styles = plain.apply(null,arguments);
  if(styles){
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(styles));
    return document.head.appendChild(styleTag)
  }
};
const classify = (n) => new Proxy({}, {
  get(_,prop){
    if(prop===Symbol.toPrimitive || prop === 'toString'){ return ()=>n }
    return n+'__'+prop
  }
});
const mangle=(n)=>classify(n+'-'+uid(7));

export { classify, css, liveCSS, mangle, raw, uid$1 as uid };
