# WebComponents

## Er dette egentlig en ny greie?

- En drøm som har eksistert lenge
- Microsoft, Mozilla 1998, 2001
  - Ønske om å kunne utvide DOM-elementer
  - Mozilla kom med XBL

Skal vi ha med XBL graf?
[XBL-gra fra Mozilla](https://bgrins.github.io/xbl-analysis/graph/)

## Hva er det egentlig

- I din nettleser så er det implementert en del specs

  - Custom-elements
  - Shadow-Dom
  - ES-moduler
  - HTML-templates

- De gir oss muligheten til å lage egne tags

  - Forstått av alle moderne nettlesere + skrap om man inkluderer polyfills
  - Enkapsulering med shadow-dom
  - Fungerer godt sammen med javascript-rammeverk
  - Kan lages med de fleste rammeverk

Den enkleste implementasjonen ser slik ut:

```
<script>

    // Extend et eksisterende element
    class MicroFrontendFun extends HTMLElement {
        constructor() {
            super();
            this.innerHTML = "Micro frontends for FTW!";
        }
    }

    // Si til nettleseren at vi har definert et element
    customElements.define('micro-frontend-er-artig', MicroFrontendFun);

</script>



// Bruk element
<micro-frontend-er-artig></micro-frontend-er-artig>
```

- Man vil jo fjerne ha litt mere støtte når man utvikler
- Biblioteker finnes
  - Stencil
  - Lit
  - React, Vue eller Angular om man vil
  - Komfort === binding

## Gotchas

- document.getElementById() === NEI
- :root :host.....

- Webpack all the things?
