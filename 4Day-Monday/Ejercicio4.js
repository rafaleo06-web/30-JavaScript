//Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, brinde comentarios: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro comentario que indique que debe esperar la cantidad de años que necesita para cumplir 18. //
let age = parseInt(prompt("Enter edad: "));
age > 18
  ? console.log("Tienes la edad suficiente para conducir")
  : console.log("Te quedan" + (18 - age) + " años para conducir");

//Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Use prompt(“Ingrese su edad:”) para obtener la edad como entrada. //

let myAge = parseInt(prompt("Enter mi edad:"));
let yourAge = parseInt(prompt("Enter tu edad"));
if (yourAge > myAge) {
  console.log("Eres " + (yourAge - myAge) + " años mayor que yo");
} else {
  console.log("Soy " + (myAge - yourAge) + "años mayor que tu");
}
//Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras//

let a = 4;
let b = 3;
a > b ? console.log("a es mayo que b") : console.log("b es mayo que a");

//Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verifica si un número es par o no usando JavaScript?//

let number = parseInt(prompt("Enter numero"));
if (number % 2 == 0) {
  console.log(number + " es numero par");
} else {
  console.log(number + " es numero impar");
}

/**NIVEL 2 */
//Escriba un código que pueda otorgar calificaciones a los estudiantes de acuerdo con sus puntajes: //
let qualifications = parseInt(prompt("Enter qualifications"));
switch (true) {
  case qualifications > 80 && qualifications < 100:
    console.log("A");
    break;
  case qualifications > 70 && qualifications < 89:
    console.log("B");
  case qualifications > 60 && qualifications < 69:
    console.log("C");
  case qualifications > 50 && qualifications < 59:
    console.log("D");
  case qualifications > 0 && qualifications < 49:
    console.log("F");
  default:
    break;
}
/*Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es:
Septiembre, octubre o noviembre, la temporada es otoño.
Diciembre, enero o febrero, la temporada es invierno.
Marzo, Abril o Mayo, la temporada es Primavera
Junio, Julio o Agosto, la temporada es Verano*/

let season = prompt("Enter qualifications");
switch (true) {
  case qualifications > 80 && qualifications < 100:
    console.log("A");
    break;
  case qualifications > 70 && qualifications < 89:
    console.log("B");
  case qualifications > 60 && qualifications < 69:
    console.log("C");
  case qualifications > 50 && qualifications < 59:
    console.log("D");
  case qualifications > 0 && qualifications < 49:
    console.log("F");
  default:
    break;
}
