const data = [{
  image: "./images/bottines-zip-cuir-taupe.jpg",
  title: "Bottines zip velours taupe",
  brand: "Kennel &amp; Schmenger",
  price: 240,
  discount: "",
  newPrice: null
},
{
  image: "./images/bottines-marcia-bleu.jpg",
  title: "Bottines Marcia bleu",
  brand: "Emma go",
  price: 195,
  discount: "",
  newPrice: null

},
{
  image: "./images/bottines-marron.jpg",
  title: "Bottines marron élastique multi",
  brand: "Anniel",
  price: 195,
  discount: "",
  newPrice: null

},
{
  image: "./images/bottines-cuir.jpg",
  title: "Bottines cuir paillettes",
  brand: "Rovial",
  price: 195,
  discount: "-30%",
  newPrice: 136.5

},
{
  image: "./images/bottines-franges.jpg",
  title: "Bottines franges et médailles",
  brand: "Minnetonka",
  price: 195,
  discount: "",
  newPrice: null

},
{
  image: "./images/bottines-anna-python.jpg",
  title: "Bottines Anna Python",
  brand: "Emma go",
  price: 185,
  discount: "-20%",
  newPrice: 148

},

];

const mainMobile = document.querySelector(".products");

// main title
const h2Soldes = document.createElement("h2");
h2Soldes.textContent = "Soldes";
mainMobile.appendChild(h2Soldes);


// main article

data.map((item, index) => {
  const articleElement = document.createElement("article");
  articleElement.classList.add("card");

  const aTopElement = document.createElement("a");
  aTopElement.classList.add("top-card");
  aTopElement.href = `#product${index + 1}`;

  const imgElement = document.createElement("img");
  imgElement.src = item.image;
  imgElement.alt = item.title;

  const h3Element = document.createElement("h3");
  h3Element.textContent = item.title;

  const aBottomElement = document.createElement("a");
  aBottomElement.classList.add("bottom-card");
  aBottomElement.href = `#product${index + 1}`;

  const h4Element = document.createElement("h4");
  h4Element.textContent = item.brand;

  const divElement = document.createElement("div");

  const pElement = document.createElement("p");
  pElement.textContent = `${item.price.toFixed(2)} €`;



  divElement.appendChild(pElement);

  aTopElement.appendChild(imgElement);
  aTopElement.appendChild(h3Element);

  aBottomElement.appendChild(h4Element);
  aBottomElement.appendChild(divElement);

  articleElement.appendChild(aTopElement);
  articleElement.appendChild(aBottomElement);

  mainMobile.appendChild(articleElement);

  if (item.newPrice !== null || item.discount !== "") {
    const delElement = document.createElement("del");
    delElement.textContent = `${item.price.toFixed(2)} €`;

    pElement.style.display = "none";

    const newPElement = document.createElement("p");
    newPElement.textContent = `${item.newPrice.toFixed(2)} €`;

    const pDiscountElement = document.createElement("p");
    pDiscountElement.textContent = item.discount;
    pDiscountElement.classList.add("discount");

    divElement.appendChild(delElement);
    divElement.appendChild(newPElement);

    aBottomElement.appendChild(pDiscountElement);
  }
});
