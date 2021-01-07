# it-helpers

<a href="https://npmjs.org/package/it-helpers">
  <img src="https://badgen.now.sh/npm/v/it-helpers" alt="version" />
</a>
<a href="https://bundlephobia.com/result?p=it-helpers">
  <img src="https://img.badgesize.io/augm-dev/it-helpers/main/es.js?compression=brotli" alt="install size" />
</a>

### Helpers for [`augm-it`](https://github.com/augm-dev/augm-it)

These helper functions, along with [`uhtml`](https://github.com/WebReflection/uhtml) are included the browser runtime for [`augm-it`](https://github.com/augm-dev/augm-it)

[Codepen](https://codepen.io/marshallcb/pen/VwKKqYP?editors=0011)

---

# API

### `css, raw`
Both `css` and  `raw` can be used as identity functions for strings and [`plain-tag`](https://github.com/WebReflection/plain-tag) for template tag literals

**Example**
```js
import { css, raw } from 'it-helpers'
let x = '#f00';
let style = css`
  .test{
    color: ${x}
  }
`
/** OR **/
style = css(".test{color:"+x+"}")
```

---

### `classify, mangle`
These return proxies to generate CSS class names. The proxy resolves to a string within template literals (when cast to a primitive using `Symbol.toPrimitive`) or when `.toString()` is called. When a property is accessed from the proxy, it returns the "base" string plus the property name. `"[base]__[property]"`
- `classify` is meant for on-site components when name-clashing can be manually prevented
- `mangle` is meant for external imports of components when name-clashing is a concern

**Example**
```js
let it = classify('MyButton')

console.log(`${it}`) // MyButton
console.log(it.toString()) // MyButton
console.log(it.container) // MyButton__container
console.log(it.overlay) // MyButton__overlay

console.log(it) // Proxy({})
console.log('.'+it) // .MyButton

it = mangle('Btn2') // random ID generated when mangle is called

console.log(`${it}`) //Btn2-fa31b46
console.log(it.container) // Btn2-fa31b46__container
console.log(it.overlay) // Btn2-fa31b46__overlay
```

---

### `uid`
Exports a version of `@lukeed/uid` that guarantees that the first character is a `_` so that they will be valid CSS selectors.

---

### `liveCSS`
`liveCSS` behaves just like `css` and `raw`, but automatically injects a style tag into <head> with the contents. Returns the style node.

---

# Putting it together

```js
import { html } from 'uhtml'
import { css, classify } from 'it-helpers'

let Header = classify('Header')

let style = css`
  /* .Header{ ... } */
  .${Header}{ 
    width: 100%;
    padding: 4rem 0;
  }
   /* .Header__container{ ... } */
  .${Header.container}{
    width: 80%;
    display: block;
    margin: auto;
  }
  /* .Header__title{ ... } */
  .${Header.title}{
    font-size: 2rem;
    text-align: center;
  }
`
```


## License

MIT © [Marshall Brandt](https://m4r.sh)
