## Webcomponent

`dist/micro-demo.js`

```js
class MicroFrontendFun extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Micro frontends for FTW!";
  }
}
customElements.define("micro-demo", MicroFrontendFun);
```

=new slide=

## Serve

```bash
ngx http-serve . --port 8001
```

=new slide=

## Vis

`index.html`

```html
<micro-demo></micro-demo>

<script src="http://localhost:8001/micro-demo.js"></script>
```
