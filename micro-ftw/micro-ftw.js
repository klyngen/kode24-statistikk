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
