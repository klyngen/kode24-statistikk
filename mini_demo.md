## Webcomponent

`micro-demo.js`

```js[0-6|8]
class MicroFrontendFun extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Micro frontends for FTW!";
  }
}

customElements.define("micro-demo", MicroFrontendFun);
```

=new slide=

## html

`index.html`

```html[]
<micro-demo></micro-demo>

<script src="http://localhost:8001/micro-demo.js"></script>
```

=new slide=

## Serve

```bash
$ npx http-serve . --port 8001
```
