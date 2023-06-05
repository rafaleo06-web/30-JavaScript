const title = document.querySelector(".wrapper h1");
const date = document.querySelector(".wrapper p");
const h1value = title.textContent;

const titleSplit = title.textContent.split(" ");
const year = titleSplit[titleSplit.length - 1];

var yearElement = document.createElement("span");
yearElement.textContent = year;

title.innerHTML = h1value.replace(year, ""); //replace por space empty
title.appendChild(yearElement);

const lista = document.querySelectorAll("li");

lista.forEach((element) => {
  var value = element.innerHTML;
  if (value.includes("realizado")) {
    element.style.backgroundColor = "green";
  } else if (value.includes("curso")) {
    element.style.backgroundColor = "yellow";
  } else {
    element.style.backgroundColor = "red";
  }
});

setInterval(function () {
  // Generar un color aleatorio en formato hexadecimal
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // console.log(randomColor);

  // Aplicar el color al elemento del año
  yearElement.style.color = randomColor;
}, 1000);

setInterval(function () {
  // Generar un color aleatorio en formato hexadecimal
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // console.log(randomColor);

  // Aplicar el color al elemento del año
  date.style.backgroundColor = randomColor;
}, 2000);
