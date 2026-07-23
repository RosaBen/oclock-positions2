const data = [{
  image: "./images/bottines-zip-cuir-taupe.jpg",
  title: "Bottines zip velours taupe",
  brand: "Kennel &amp; Schmenger",
  price: 240
},
{
  image: "./images/bottines-marcia-bleu.jpg",
  title: "Bottines Marcia bleu",
  brand: "Emma go",
  price: 195

},
{
  image: "./images/bottines-marron.jpg",
  title: "Bottines marron élastique multi",
  brand: "Anniel",
  price: 195

},
{
  image: "./images/bottines-cuir.jpg",
  title: "Bottines cuir paillettes",
  brand: "Rovial",
  price: 195

},
{
  image: "./images/bottines-franges.jpg",
  title: "Bottines franges et médailles",
  brand: "Minnetonka",
  price: 195

},
{
  image: "./images/bottines-anna-python.jpg",
  title: "Bottines Anna Python",
  brand: "Emma go",
  price: 185

},

];

const mainMobile = document.querySelector(".products");

const h2Soldes = document.createElement("h2");
h2Soldes.textContent = "Soldes";
mainMobile.appendChild(h2Soldes);