class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //Base do componente
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo");

    //Estilo do componente
    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
      }

        h1{
            color: red;
        }
    `
    //Enviar para a Shadow
    shadow.appendChild(componentRoot)
    shadow.appendChild(style)
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
