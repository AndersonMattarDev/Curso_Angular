class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componetRoot = document.createElement("div");
    componetRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const author = document.createElement("span");
    author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content")

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/alt_img.jpg";
    newsImage.alt = "Foto da Noticia"
    cardRight.appendChild(newsImage);

    componetRoot.appendChild(cardLeft);
    componetRoot.appendChild(cardRight);

    return componetRoot;
  }

  styles() {}
}

customElements.define("card-news", Cardnews);
