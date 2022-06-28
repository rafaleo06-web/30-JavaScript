let array = Array();
console.log(array);

let array2 = [1, 2, 3, 4, 5, 6];
console.log(array2);
console.log(array2.length);
console.log(array2.lastIndexOf(6));
console.log(array2[0]);
console.log(array2.length / 2);

let mixedDataTypes = [
  "Asabeneh",
  250,
  true,
  { país: "Finlandia", ciudad: "Helsinki" },
  { habilidades: ["HTML", "CSS", "JS", "React", "Python"] },
];
console.log(mixedDataTypes.length);

//Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos
var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
/*console.log(itCompanies.length)
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)])
for (var i = 0; i < itCompanies.length; i++) {//pasamos cada palabra a MAYUSCULA
  itCompanies[i]=itCompanies[i].toUpperCase()
}
for(var itCompanie of itCompanies) {//PASO CADA PALABRA CONVERTIDA A UN NUEVO ARREGLO
  console.log(itCompanie)
}
*/
//Imprima la matriz como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
//console.log(itCompanies.join())

//Compruebe si existe una determinada empresa en la matriz itCompanies. Si existe, devuelva la empresa; de lo contrario, devuelva una empresa que no se encuentra
/*var valor='Facebook';
for (let index = 0; index < itCompanies.length; index++) {
  if (valor==itCompanies[index]) {
    console.log('Si existe '+valor)
    break;
  }else{
    console.log('Solo existen'+itCompanies[index])
    break;
  }
  
}
*/

//Filtre las empresas que tienen más de una 'o' sin el método de filtro
/*var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

nuevoArray = [];
count = 0;

for (let index = 0; index < itCompanies.length; index++) {
  nuevoArray[index] = itCompanies[index].toUpperCase().split("");
}

for (let i = 0; i < nuevoArray.length; i++) {
  for (let j = 0; j < nuevoArray[i].length; j++) {
    if (nuevoArray[i][j] === "O") {
      count++;
    } else {
    }
  }

  if (count >= 1) {
    console.log(nuevoArray[i] + " " + count);
    count = 0;
  }
}
*/

//Ordenar la matriz usando el sort() método 
console.log(itCompanies.sort())
//Invierta la matriz usando reverse() método
console.log(itCompanies.reverse())
//Cortar las primeras 3 empresas de la matriz
console.log(itCompanies.slice(0,3))
//Cortar las últimas 3 empresas de la matriz
console.log(itCompanies.slice(-3))//indica un desplazamiento desde el final del array
//Separar la empresa o empresas intermedias de TI de la matriz
console.log(itCompanies.slice((itCompanies.length-1)/2,(itCompanies.length+1)/2))
//Eliminar la primera empresa de TI de la matriz
itCompanies.shift()
console.log(itCompanies)
//Eliminar la empresa o empresas intermedias de TI de la matriz
itCompanies.splice(parseInt(itCompanies.length/2-1),1)
console.log(itCompanies)
//Eliminar la última empresa de TI de la matriz
itCompanies.pop()
console.log(itCompanies)
//Eliminar todas las empresas de TI
itCompanies.splice()
console.log(itCompanies)

