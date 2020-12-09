# it-helpers

<a href="https://npmjs.org/package/it-helpers">
  <img src="https://badgen.now.sh/npm/v/it-helpers" alt="version" />
</a>
<a href="https://bundlephobia.com/result?p=it-helpers">
  <img src="https://img.badgesize.io/MarshallCB/it-helpers/main/es.js?compression=brotli" alt="install size" />
</a>

### Helpers for [`augm-it`](https://github.com/augm-dev/augm-it)

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

### `register, mangled`
These return proxies to generate CSS class names. The proxy resolves to a string within template literals (when cast to a primitive using `Symbol.toPrimitive`) or when `.toString()` is called. When a property is accessed from the proxy, it returns the "base" string plus the property name. `"[base]__[property]"`
- `register` is meant for on-site components when name-clashing can be easily prevented
- `mangled` is meant for external imports of components when name-clashing is a concern

**Example**
```js
let it = register('MyButton')

console.log(`${it}`) // MyButton
console.log(it.toString()) // MyButton
console.log(it.container) // MyButton__container
console.log(it.overlay) // MyButton__overlay

console.log(it) // Proxy({})
console.log('.'+it) // .MyButton

it = mangled('Btn2') // random ID generated when mangled is called

console.log(`${it}`) //Btn2-fa31b46
console.log(it.container) // Btn2-fa31b46__container
console.log(it.overlay) // Btn2-fa31b46__overlay
```

---

# Putting it together

```js
import { html } from 'uhtml'
import { css, register } from 'it-helpers'

let it = register('Header')

let style = css`
  .${it}{ // .Header
    width: 100%;
    padding: 4rem 0;
  }
  .${it.container}{ // .Header__container
    width: 80%;
    display: block;
    margin: auto;
  }
  .${it.title}{ // .Header__title
    font-size: 2rem;
    text-align: center;
  }
`
```


## License

MIT © [Marshall Brandt](https://m4r.sh)
