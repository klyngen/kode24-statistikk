```js[1|2,11|3-4,10|5|6-9|13|0]
// micro-ftw.js
class MicroFrontendFtw extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = `
      <p style='color: magenta; font-size: 50px'>
        Microfrontend FTW!
      </p>`;
  }
}

customElements.define("micro-ftw", MicroFrontendFtw);
```

```html[1|2|4|0]
<!-- index.html -->
<micro-ftw></micro-ftw>

<script src="http://localhost:8001/micro-ftw.js"></script>
```

```bash
$ npx http-serve . -p 8001
```

Note:

- [x] Shadowdom fordi det funker
- [x] Trenger ikke gå igjennom js koden
- [x] Må skrive koden riktig
- [x] Samle koden på 1 slide
- [x] Vise først tom slide som mangler microfrontend
- [x] Åpne terminal. Vise mappe innhold
- [x] Batte ut filene
- [x] Starte http serveren
- [x] Refreshe siden
- [x] Vise i inspektør
- [x] Må ha tilkoblet mus fordi vi bruker mac
