var desafio='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
var desafio2='30 días de JavaScript'
console.log(desafio)
var desafio3='No puede terminar una oración con porque porque porque es una conjunción'
var mitadPalabra='30 dias de '
var mitadPalabra2='Javascript'
/*console.log(desafio.length)/* devuelve la longitud
console.log(desafio.toUpperCase()) /*convierte a mayusculas
console.log(desafio.toLowerCase()) /*convierte a minusculas
console.log(desafio.substring(3,22))/*recorta palabras entre indices
console.log(desafio.includes('script'))/*determina si incluye la palabra
console.log(desafio.split(',',7)) /*ACA ES COMILLA SIMPLES*/
/*let nuevaPalabra=(desafio2.replace("30 días de JavaScript","30 días de Python"))
console.log(nuevaPalabra.charAt(14))/*busca caracter en el indice */
/*console.log(desafio2.charCodeAt('J'))/**devuelve el valor unicode */
/*console.log(desafio2.indexOf('a'))/*busca la primera palabra */
/*console.log(desafio2.lastIndexOf('Java'))/*busca la ultima palabra y devuelve indice*/
/*console.log(desafio3.lastIndexOf('porque',50))/*del indice para adelante busca la palabra*/
/*console.log(desafio2.trim())/*elimina espacios al comienzo y al final*/
/*console.log(desafio2.startsWith('dí',3))/**si comienza con di=true o posicion 3 */
/*console.log(desafio2.endsWith('cript',21))/**si termina cript=true o indice 21 para adelante */
/*console.log(desafio2.match(/a/g))/**compara "cadena"(con cadena o EX. REG.)y muestra en array, EXP. REG. entre (//)busca todas las coincidencias y mestra en array */
/*console.log(mitadPalabra.concat(mitadPalabra2))/**une 2 cadenas o arrays*/
/*console.log(desafio2.repeat(2))/**repite 2 cadenas seguidas */
/*console.log(typeof 10)          // tipo de number
var numero=9.8
var conversion=parseFloat(numero)//convierte tipo de dato
console.log(conversion)
var declaracion="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
var cita=" El amor no es condescendiente y la caridad no se trata de lástima, se trata de amor. La caridad y el amor son lo mismo: con la caridad das amor, así que no solo des dinero, sino que tiendes la mano"
const numeroAleatorio=Math.round(Math.random()*11)//numeroAleatorio entre 0 y 11
console.log(numeroAleatorio)
console.log(desafio2.charAt(numeroAleatorio))//numeroAleatorio es indice para escoger caracter de la palabra
*/
var cadena= '1\t1\t1\t1\t1\n2\t1\t2\t4\t8';
console.log(cadena)

var oracion='No puede terminar una oración con porque porque porque es una conjunción'
console.log(oracion.substring(34,55))
var oracion2='El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'
console.log(oracion2.match(/amor/g))

var ingresoanual='Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
var salario=parseInt(ingresoanual.substring(7,12))
var bono=parseInt(ingresoanual.substring(52,58))
var curso=parseInt(ingresoanual.substring(ingresoanual.lastIndexOf('15000'),90))
var ingresoanual=salario+bono+curso
console.log(typeof(ingresoanual))
console.log(salario)
console.log(bono)
console.log(curso)
console.log(ingresoanual)
