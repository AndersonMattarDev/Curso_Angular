class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build);
    shadow.appendChild(this.styles);
  }
  build() {
    const componetRoot = document.createElement("div");
    componetRoot.setAttribute("class","card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", )
    const cardRight = document.createElement("div");

    componetRoot.appendChild(cardLeft);
    componetRoot.appendChild(cardRight);

    return componetRoot;
  }

  styles() {}
}

customElements.define("card-news", Cardnews);
