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
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/alt_img.jpg";
    newsImage.alt = "Foto da Noticia";
    cardRight.appendChild(newsImage);

    componetRoot.appendChild(cardLeft);
    componetRoot.appendChild(cardRight);

    return componetRoot;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
    .card{
      width: 80%;
      margin-bottom: 50px;
      border: 1px solid gray;
      box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.89);
      -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.89);
      -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.89);
      justify-content: space-between;
      display: flex;
      flex-direction: row;
  }
  
  
  
  .card__left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
  }
  
  .card__left > span{
     font-weight: 400;
  }
  
  .card__left > a{
      margin-top: 10px;
      font-size: 25px;
      text-decoration: none;
      color: black;
      font-weight: bold;
  }
  
  .card__left > p{
      color: darkgray;
  }
  
  .card__right > img{
      width: 180px;
      height: 180px;
      object-fit: cover;
      border-radius: 10px;
  }
    `;

    return style;
  }
}

customElements.define("card-news", Cardnews);
