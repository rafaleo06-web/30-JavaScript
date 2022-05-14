/**NIVEL 1 
const date=new Date()//objeto de tiempo
console.log(date.getFullYear())//¿Qué año es hoy? 
console.log(date.getMonth())//Cuál es el mes de hoy en número?(0 = enero)
console.log(date.getDate())//¿Cuál es la fecha de hoy?
console.log(date.getDay())//¿Cuál es el día de hoy como un número?
console.log(date.getHours())//¿Cuál es el horario ahora?
console.log(date.getMinutes())//¿Cuáles son los minutos ahora?
console.log(date.getTime())//Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
*/
/**NIVEL 2 */
//Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo
let base = prompt('Enter base')
let altura = prompt('Enter altura')
let area=(base*altura)/2
console.log('el area del triangulo es: '+area) 

//Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo
let ladoA = parseInt(prompt('Enter lado A'))
let ladoB = parseInt(prompt('Enter lado B'))
let ladoC = parseInt(prompt('Enter lado C'))
console.log('EL PERIMETRO ES: '+ (ladoA + ladoB + ladoC)) 

//Obtenga el largo y el ancho usando el indicador y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho)) 

let largo=parseInt(prompt('Enter largo'))
let ancho=parseInt(prompt('Enter ancho'))
console.log('El area es: '+(largo*ancho))
console.log('El perimetro es: '+ (2*(largo*ancho)))

//Obtenga el radio usando el indicador y calcule el área de un círculo (área = pi xrxr) y la circunferencia de un círculo (c = 2 x pi xr) donde pi = 3.14. 

let radio= parseFloat(prompt('Enter radio'))
console.log('El area es: '+ ((Math.PI)*radio).toFixed(2))
console.log('La circunferencia es: '+ (2*(Math.PI)*radio).toFixed(2))

//Escriba un script que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona? 

let horas=parseInt(prompt('Enter Horas: '))
let tarifa_hora= parseInt(prompt('Enter tarifa'))
console.log('Su ganancia semanal es: '+ (horas*tarifa_hora))

//Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto. 

/*let firstName=prompt('Enter firstName')
if(firstName.length <7){
    console.log(firstName+ ' es corto')
}else{
    console.log(firstName+ ' es largo')

}*/

//Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado. 

let firstName=prompt('Enter firstName')
let lastName=prompt('Enter lastName')
if(firstName.length > lastName.length){
    console.log('tu pimer nombre, '+firstName+', es mas largo que tu apellido, '+lastName)
}else{
    console.log('tu pimer nombre, '+firstName+', es mas corto que tu apellido, '+lastName)
    
}

//Declare dos variables miEdad y suEdad y asígneles valores iniciales y miEdad y suEdad.
let myAge=50
let yourAge=100
if(myAge>yourAge){
    console.log('Soy '+(myAge-yourAge)+' años mayor que tu')
}if(myAge<yourAge){
    console.log('Tu eres '+(yourAge-myAge)+' años mayor que yo')
}

//Con el aviso, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

let yearBirth=parseInt(prompt('Enter año de nacimiento'))
const date=new Date()

if(date.getFullYear()>yearBirth){
    let edad=date.getFullYear()-yearBirth
    if(edad>18){
        console.log('tienes '+edad+ 'años. Tienes la edad suficiente para conducir')
    }else if(edad<18){
        console.log('Tienes '+ edad + 'Podras conducir despues de '+(18-edad)+' años')
    }
}
