function esPrimo(numero) {
  // Si el número es menor que 2, no es primo
  if (numero < 2) {
    return false;
  }

  // Comprobar si el número es divisible por cualquier número menor que él
  //todo: example: 9 % 2 = false, 9 % 3 = true, 9 % 4 = false, 9 % 5 = false, 9 % 6 = false, 9 % 7 = true, 9 % 8 = false => 9 NOT IS PRIMO BECAUSE IS DIVISIBLE BY 3
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  // Si el número no es divisible por ningún número menor que él, es primo
  return true;
}

const boxNumbers = document.querySelector(".container-number");

for (let index = 0; index <= 101; index++) {
  const number = document.createElement("div");
  number.innerHTML = index;
  number.style.width = "40px";

  if (index % 2 === 0) {
    number.style.backgroundColor = "green";
  } else if (esPrimo(index)) {
    number.style.backgroundColor = "red";
  } else {
    number.style.backgroundColor = "yellow";
  }
  boxNumbers.appendChild(number);
}
