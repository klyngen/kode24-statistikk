class MicroFrontendFun extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Micro frontends for FTW!";
  }
}

customElements.define("micro-demo", MicroFrontendFun);
