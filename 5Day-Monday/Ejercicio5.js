//NIVEL 1
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

//1-Compruebe si existe una determinada empresa en la matriz itCompanies. Si existe, devuelva la empresa; de lo contrario, devuelva una empresa que no se encuentra
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

//2-Filtre las empresas que tienen más de una 'o' sin el método de filtro
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
          unt = 0;
        }
      }
      */

//3A-Ordenar la matriz usando el sort() método
    //console.log(itCompanies.sort())
//3B-Invierta la matriz usando reverse() método
    //console.log(itCompanies.reverse())
//3C-Cortar las primeras 3 empresas de la matriz
    //console.log(itCompanies.slice(0,3))
//3D-Cortar las últimas 3 empresas de la matriz
    //console.log(itCompanies.slice(-3))//indica un desplazamiento desde el final del array
//3E-Separar la empresa o empresas intermedias de TI de la matriz
    //console.log(itCompanies.slice((itCompanies.length-1)/2,(itCompanies.length+1)/2))
//3F-Eliminar la primera empresa de TI de la matriz
    //itCompanies.shift()
    //console.log(itCompanies)
//3G-Eliminar la empresa o empresas intermedias de TI de la matriz
    //itCompanies.splice(parseInt(itCompanies.length/2-1),1)
    //console.log(itCompanies)
//3H-Eliminar la última empresa de TI de la matriz
    //itCompanies.pop()
    //console.log(itCompanies)
//3I-Eliminar todas las empresas de TI
    //itCompanies.splice()
    //console.log(itCompanies)

//********************************************

//NIVEL 2
//1-Primero elimine todos los signos de puntuación y cambie la cadena a matriz y cuente la cantidad de palabras en la matriz
/*let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    var newtext=text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    const words=newtext.split(' ')
    console.log(words.length)*/

//2A-agregue 'Carne' al comienzo de su carro de compras si aún no se ha agregado
//2B-agregue azúcar al final de su carrito de compras si aún no se ha agregado
//2C-elimine 'Honey' si es alérgico a la miel
//2D-modificar té a 'té verde'
    //const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    //shoppingCart.unshift('Carne')
    //console.log(shoppingCart)
    //shoppingCart.push('azucar')
    //shoppingCart[3]='té verde'
    //shoppingCart.splice(4,1)//POSICION 4, ELIMINA 1 ELEMENTO
    //console.log(shoppingCart)

//3-Concatene las siguientes dos variables y guárdelas en una variable fullStack.
/*const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    const fullStack=frontEnd.concat(backEnd)
    console.log(fullStack)*/

//*******************************************************
// NIVEL 3
//1-Ordene la matriz y encuentre la edad mínima y máxima
//2-Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
//3-cuentre la edad promedio (todos los elementos divididos por el número de elementos)
//4-Encuentre el rango de las edades (max menos min)
const ages = [17, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    //1-console.log(ages.sort());

    //1-min=ages[0]
    //may=ages[0]
    //for (let index = 0; index < ages.length; index++) {
    //if (ages[index] < min) {
    //min=ages[index]
    //}else if(ages[index] > may) {
    //may=ages[index]
    //}}
    //console.log('Age minimun '+min, ',age maximun '+may)

    //2-if (ages.length % 2 === 0) {
      //numMedios = ages.slice(ages.length / 2 - 1, ages.length / 2 + 1);
      //console.log(numMedios);
    //} else if (ages.length % 2 === 1) {
      //numMedios=ages.slice(ages.length / 2, ages.length / 2 + 1)
      //console.log(numMedios);
    //}
    //media=0
    //for (const i of numMedios) {
      //media+=i
    //}
    //console.log(media/numMedios.length)

    //3-promedio=0
    //for (const i of ages) {
      //promedio+=i
    //}
    //console.log(promedio/ages.length)

    //4-ages.sort()
    //min=ages[0]
    //may=ages[0]
    //for (let index = 0; index < ages.length; index++) {
    //if (ages[index] < min) {
    //min=ages[index]
   //}else if(ages[index] > may) {
    //may=ages[index]
    //}}
    //minIndice=ages.indexOf(min)
    //mayIndice=ages.indexOf(may)

    //console.log(minIndice,mayIndice)
    //console.log(ages.slice(minIndice+1,mayIndice))