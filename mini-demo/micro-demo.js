// micro-demo.js
class MicroFrontendFun extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = `
      <p style='color: magenta; font-size: 50px'>
        Micro frontends FTW!
      </p>`;
  }
}

customElements.define("micro-demo", MicroFrontendFun);
