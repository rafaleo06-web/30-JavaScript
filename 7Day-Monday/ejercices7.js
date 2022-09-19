//1-Declare una función fullName e imprima su nombre completo.
        /*function fullName(){
            console.log('Rafael Salirrosas Soto')
        }
        fullName()
        */
//Declare una función fullName y ahora toma firstName, lastName como parámetro y devuelve su nombre completo.
        /*function fullName(firstName, lastName){
            return firstName+' '+lastName
        }
        console.log(fullName('Rafael','Salirrosas'))
        */
//Declare una función addNumbers y toma dos dos parámetros y devuelve suma.
        /*function addNumbers(numero1, numero2){
            return numero1+numero2
        }
        console.log(addNumbers(5,12))
        */
//El área de un rectángulo se calcula de la siguiente manera: área = largo x ancho . Escribe una función que calcule areaOfRectangle
        /*function areaOfRectangle(largo, ancho){
            return largo*ancho
        }
        console.log(areaOfRectangle(20,20))
        */
//El perímetro de un rectángulo se calcula de la siguiente manera: perímetro = 2x (largo + ancho) . Escribe una función que calcule el perímetro del rectángulo .
        /*function perimetOfRectangle(largo, ancho){
            return 2*(largo+ancho)
        }
        console.log(perimetOfRectangle(20,20))
        */
//El volumen de un prisma rectangular se calcula de la siguiente manera: volumen = largo x ancho x alto . Escribe una función que calcule volumenDeRectPrism .
        /*function volumenPrisma(largo, ancho, alto){
            return largo*ancho*alto
        }
        console.log(volumenPrisma(10,5,10))
        */
//El área de un círculo se calcula de la siguiente manera: área = π xrxr . Escribe una función que calcule areaOfCircle
        /*function areaCircle(radio){
            let area=Math.PI*radio*radio
            return area
        }
        console.log(areaCircle(10))
        */
//La circunferencia de un círculo se calcula de la siguiente manera: circunferencia = 2πr . Escribe una función que calcule circumOfCircle
        /*function circumCircle(radio) {
            let circunferencia=2*Math.PI*radio
            return circunferencia
        }
        console.log(circumCircle(25))
        */
//El índice de masa corporal (IMC) se calcula de la siguiente manera: bmi = peso en Kg / (altura x altura) en m2 . Escribe una función que calcule bmi . El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso inferior al normal, normal, con sobrepeso u obeso según la información que se proporciona a continuación. 
        /*function calculationBmi(peso, altura) {
            bmi=peso/(altura*altura)
            if (bmi<18.5) {
                console.log('Bajo peso')
            }else if (bmi>=18.5 && bmi<=24.9) {
                console.log('Peso normal')
            }else if (bmi>=25 && bmi<=29.9) {
                console.log('Sobre peso')
            }else if (bmi>=30) {
                console.log('Obeso')
            }
            return bmi
        }
        console.log(calculationBmi(78,1.60))
        */
//Math.max devuelve su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max
        /*function findMax(arg1, arg2, arg3) {
            if (arg1>arg2 && arg1>arg3) {
                console.log('Mayor numero '+arg1)
            }else if(arg2>arg1 && arg2>arg3){
                console.log('Mayor numero '+arg2)
            }else{
                console.log('Maor numero '+arg3)
            }
        }
        findMax(50,10,30)
        */
//NIVEL 2
//La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0 . Escriba una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation
//(raíz1,raíz2) = (-b ± √b2-4ac)/2
        /*function solveQuadEquation(a,b,c) {
            let raiz1
            let raiz2
            let discriminante=b*b-4*a*c
            if (discriminante>0) {
                raiz1=(-b + Math.sqrt(discriminante)) / (2 * a)
                raiz2=(-b - Math.sqrt(discriminante)) / (2 * a)
                console.log('Discr > 0, Raices son: '+raiz1 +' y '+ raiz2)
            }else if(discriminante==0){
                raiz1=raiz2=-b/(2*a)
                console.log('Discriminate = 0, Raices son: '+raiz1 +' y '+ raiz2)
            }else{
                let realPart = (-b / (2 * a)).toFixed(2)
                let imagPart = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2)
                console.log('No real '+realPart+' & '+imagPart)       
            }
        }
        console.log(solveQuadEquation(1,6,5))
        */
//Declare un nombre de función printArray . Toma matriz como parámetro e imprime cada valor de la matriz.
        /*function printArray(array) {
            console.log(array)
        }
        numbers=[1,2,3,4,5,6]
        printArray(numbers)
        */
//Escriba un nombre de función showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.
        /*function showDateTime(params) {
            const d=new Date()
            return d.toLocaleString()
        }
        console.log(showDateTime())
        */
//Declare un nombre de función swapValues . Esta función intercambia el valor de x a y.
        /*function swapValues(x,y) {
            [x,y]=[y,x]
            console.log('x:',x,' y:',y)
        }
        swapValues(10,5)
        */
//Declare un nombre de función reverseArray . Toma una matriz como parámetro y devuelve el reverso de la matriz (no use el método).
        /*function reverseArray(arreglo){
            let longitudDelArreglo = arreglo.length;
            // Recorrer arreglo hasta la mitad. Si es impar, se va al entero anterior más 
            // próximo. P. ej. 5 / 2 => 2(1,3,5,7,9)
            for (let x = 0; x < longitudDelArreglo / 2; x++) {
            // Respaldar el valor actual
            let temporal = arreglo[x];//1,3
            // Calcular el índice contrario, es decir, el del otro lado de la mitad; el cual irá descendiendo
            let indiceContrario = longitudDelArreglo - x - 1;//4,3
            // En el actual ahora está el del otro lado
            arreglo[x] = arreglo[indiceContrario];//[0]=9,[1]=7
            // Y en el otro lado, el que estaba originalmente en el actual
            arreglo[indiceContrario] = temporal;//[4]=1,[3]=3
            }
            return arreglo
        }
        numbers=[12,20,5,30,8,10]
        console.log(reverseArray(numbers))
        */
//Declare un nombre de función addItem . Toma un parámetro de elemento y devuelve una matriz después de agregar el elemento
        /*function addItem(element){
            let array=[]
            array[array.length]=element
            return array
        }
        console.log(addItem(6))
        */
//Declare un nombre de función removeItem . Toma un parámetro de índice y devuelve una matriz después de eliminar un elemento
        /*function removeItem(indice){
            let array=[1,2,3,4,5]
            array.splice(indice-1,1)
            return array
        }
        console.log(removeItem(4))
        */
//Declare un nombre de función sumOfNumbers . Toma un parámetro numérico y suma todos los números en ese rango.
        /*function sumOfNumbers(number){
            let sum=0
            for (let index = number; index >= 0 ; index--) {
                sum+=index
            }
            return sum;
        }
        console.log(sumOfNumbers(5))
        */
//Declare un nombre de función sumOfOdds . Toma un parámetro numérico y agrega todos los números impares en ese rango.
        /*function sumOfOdds(number){
                    let array=[]
                    for (let index = number; index >= 0 ; index--) {
                        if (index%2==1) {
                            array.push(index)
                        }
                    }
                    return array;
                }
        console.log(sumOfOdds(5))
        */
//Declare un nombre de función sumOfEven . Toma un parámetro numérico y suma todos los números pares en ese rango.
        /*function sumOfEven(number) {
            let sum=0
            for (let index = number; index >=0 ; index--) {
                if (index%2==0) {
                sum+=index
                }
            }
            return sum
        }
        console.log(sumOfEven(5))
        */
//Declare un nombre de función evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares en el número.
//evensAndOdds(100);
//The number of odds are 50.
//The number of evens are 51.
        /*function evensAndOdds(number) {
            counterEvens=0
            counterOdds=0
            for (let index = number; index >=0; index--) {
                if (index%2==0) {
                    counterEvens++
                }else{
                    counterOdds++
                }
            }
            console.log("Evens: "+counterEvens)
            console.log("Odds: "+counterOdds)
        }
        evensAndOdds(100)
        */
//Escriba una función que tome cualquier número de argumentos y devuelva la suma de los argumentos
        /*function sumArguments(){
            sum=0
            for (let index = 0; index < arguments.length; index++) {
                sum+=arguments[index]
            }
            return sum
        }
        console.log(sumArguments(1,2,3,4))
        */
//Escriba una función que genere un randomUserIp .
        /*function randomUserIp() {
            oneSubred=192
            twoSubred=168
            threeSubred=Math.floor(Math.random()*283)
            fourSubred=Math.floor(Math.random()*283)
            console.log(oneSubred+"."+ twoSubred+ "."+ threeSubred+"." +fourSubred)
        }
        randomUserIp()
        */
//Escriba una función que genere una MacAddress aleatoria
        /*function macAdrees() {
            const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            let adrres=''
            for ( let i = 0; i < 12; i++ ) {
                adrres+= characters.charAt(Math.floor(Math.random() * charactersLength));
                if(i==1 || i==3 || i==5 || i==7 || i==9){
                    adrres+=':'
                }
            }
            return adrres
        }
        console.log(macAdrees())
        */
//Declare un nombre de función randomHexaNumberGenerator . Cuando se llama a esta función,
//genera un número hexadecimal aleatorio. La función devuelve el número hexadecima #ee33df
        /*function randomHexaNumberGenerator() {
            const characters ='0123456789ABCDEF';
            const charactersLength = characters.length;
            let numberhexadecimal='#'
            for ( let i = 0; i < 6; i++ ) {
                numberhexadecimal+= characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return numberhexadecimal
        }
        console.log(randomHexaNumberGenerator())
        */
//Declare un nombre de función userIdGenerator . Cuando se llama a esta función, genera una
//identificación de siete caracteres. La función devuelve el id
//console.log(userIdGenerator());
//41XTDbE
        /*function userIdGenerator() {
            const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
            const charactersLength = characters.length;
            let result=''
            for ( let i = 0; i < 7; i++ ) {
                result+= characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result
        }
        console.log(userIdGenerator())
        */
//Nivel3
//Modifique la userIdGenerator . Declare un nombre de función userIdGeneratedByUser . No toma
//ningún parámetro, pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de
//caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.
        /*function userIdGeneratedByUser() {
        const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
            const charactersLength = characters.length;
            const countCharacters=prompt('Cantidad de caracteres')
            const countIds=prompt('Numero de IDs')
            let result=''
            for (let index = 0; index < countIds; index++) {
                result+='\n'
                for ( let i = 0; i < countCharacters; i++ ) {
                    result+= characters.charAt(Math.floor(Math.random() * charactersLength));
                }
            }
            return result
        }
        console.log(userIdGeneratedByUser())
        */
//Escribe un nombre de función rgbColorGenerator y genera colores rgb.
//rgbColorGenerator() rgb(125,244,255)
        /*function rgbColorGenerator() {
            numberOne=Math.floor(Math.random()*283)
            numberTwo=Math.floor(Math.random()*283)
            numberThree=Math.floor(Math.random()*283)
            console.log('rgb('+numberOne+','+numberTwo+','+numberThree+')')
        }
        rgbColorGenerator()
        */
//Escriba una función arrayOfHexaColors que devuelva cualquier cantidad de colores hexadecimales en una matriz.
        /*function arrayOfHexaColors(countNumber) {
            const characters ='0123456789ABCDEF';
            const charactersLength = characters.length
            const arrayNumberHexadecimal=[]
            let numberhexadecimal='#'
            for (let index = 0; index < countNumber; index++) {
                for ( let i = 0; i < 6; i++ ) {
                    numberhexadecimal+= characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                arrayNumberHexadecimal.push(numberhexadecimal)
                numberhexadecimal='#'
            }
            return arrayNumberHexadecimal
        }
        console.log(arrayOfHexaColors(5))
        */
//Escriba una función arrayOfRgbColors que devuelva cualquier cantidad de colores RGB en una matriz.
        /*function arrayOfRgbColors(countRGB) {
            const arrayRGB=[]
            for (let index = 0; index < countRGB; index++) {
                numberOne=Math.floor(Math.random()*283)
                numberTwo=Math.floor(Math.random()*283)
                numberThree=Math.floor(Math.random()*283)
                let color=`rgb(${numberOne},${numberTwo},${numberThree})`
                arrayRGB.push(color)
            }
            return arrayRGB
        }
        console.log(arrayOfRgbColors(5))
        */
//Escriba una función convertHexaToRgb que convierta el color hexa a rgb y devuelva un color rgb.
        /*function convertHexaToRgb(numberInput) {
            var red = parseInt(numberInput[1]+numberInput[2],16);
            var green = parseInt(numberInput[3]+numberInput[4],16);
            var blue = parseInt(numberInput[5]+numberInput[6],16);
            console.log(`rgb(${red},${green},${blue})`)
        }
        convertHexaToRgb("#ff0000")
        */
//Escriba una función convertRgbToHexa que convierta rgb a color hexa y devuelva un color hexa.
        /*function convertToHexa(rgb) {
            let rgbConvertHexa=rgb.toString(16)
            return rgbConvertHexa.length < 2 ? "0"+rgbConvertHexa : rgbConvertHexa
        }

        function RgbToHexa(r,g,b) {
            var red = convertToHexa(r);
            var green = convertToHexa(g);
            var blue = convertToHexa(b);
            return "#"+red+green+blue
            
        }
        console.log(RgbToHexa(0,51,255))
        */
//Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.
//console.log(generateColors('hexa', 3)) - output: ['#a3e12f', '#03ed55', '#eb3d2b']
        /*function generateColorse(toConvert, amount) {
            if (toConvert == 'hexa') {
                const characters ='0123456789ABCDEF';
                const charactersLength = characters.length
                const arrayNumberHexadecimal=[]
                let numberhexadecimal='#'
                for (let index = 0; index < amount; index++) {
                    for ( let i = 0; i < 6; i++ ) {
                        numberhexadecimal+= characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    arrayNumberHexadecimal.push(numberhexadecimal)
                    numberhexadecimal='#'
                }
                return arrayNumberHexadecimal

            } else if(toConvert == 'rgb'){
                const arrayRGB=[]
                for (let index = 0; index < amount; index++) {
                    numberOne=Math.floor(Math.random()*283)
                    numberTwo=Math.floor(Math.random()*283)
                    numberThree=Math.floor(Math.random()*283)
                    let color=`rgb(${numberOne},${numberTwo},${numberThree})`
                    arrayRGB.push(color)
                }
                return arrayRGB
            }
        }
        console.log(generateColorse('rgb',5))
        */
//Llame a su función shuffleArray , toma una matriz como parámetro y devuelve una matriz barajada
        /*function shuffleArray(array) {
            let t=array.sort(function () { 
                return (0.5-Math.random())//Metodo sort()-(funcion PARA ODENAR: devuelve -,+,ó 0) Y (ALEATORIO: - ó 0 y + ó 0) - (Multiplicacion GENERA SOLO 0, RESTA 0 y -)
            })
            return [...t]
        }

        const array=[1,2,3,4,5,6,7,8,9,10]
        console.log(shuffleArray(array))
        */
//Llame a su función factorial , toma un número entero como parámetro y devuelve un factorial del número
        /*function factorial(number) {
            let sumMultiplicador=1
            for (let index = number; index > 0; index--) {
                sumMultiplicador*=index  
            }
            return sumMultiplicador  
        }
        console.log(factorial(3))
        */
//Llame a su función isEmpty , toma un parámetro y verifica si está vacío o no
        /*function isEmpty1(param){
            if(param===''){
                return "vacia"
            }else{
                return "no vacia ==> "+param
            }
        }
        var param = "Paris"
        var array=[1,2,3,4,5,6]
        console.log(isEmpty1(param))
        */
//Escriba una función llamada sumOfArrayItems , toma un parámetro de matriz y devuelve la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
        /*
        function sumOfArrayItems(arr) {
            let suma=0
            for (let index = 0; index < arr.length; index++) {
                if (typeof arr[index]==='number') {
                    suma+=arr[index]            
                }else{
                    return arr[index]+': el tipo de dato no es numerico'
                }
            }
            return suma
        }
        const arr=[1,2,3,4,5,'rafa']
        console.log(sumOfArrayItems(arr))
        */
//Escriba una función llamada promedio , toma un parámetro de matriz y devuelve el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
        /*
        function sumOfArrayItems(arr) {
            let suma=0
            let promedio=0

            for (let index = 0; index < arr.length; index++) {
                if (typeof arr[index]==='number') {
                    suma+=arr[index]            
                }else{
                    return arr[index]+': el tipo de dato no es numerico'
                }
            }
            return promedio=suma/arr.length
        }
        const arr=[1,2,3,4,5,'mar']
        console.log(sumOfArrayItems(arr))
        */
//Escriba una función llamada modificarArray que tome la matriz como parámetro y modifique el quinto elemento de la matriz y devuelva la matriz. Si la longitud de la matriz es inferior a cinco, devuelve 'elemento no encontrado'.
        /*
        function modificarArray(array) {
            if (array.length >= 5) {
                for (let index = 0; index < array.length; index++) {
                    if (index==4) {
                        array[index]=array[index].toUpperCase()
                    }
                }
            }else{
                return 'elemento no encontrado'
            } 
            return array
        }
        const array=['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']
        console.log(modificarArray(array))
        */
//Escriba una función llamada isPrime , que verifique si un número es un número primo.
        /*
        function isPrime(number){
            for (let index = 2; index < number; index++) {
                if (number%index==0) {
                    return 'no es primo'
                }else{
                    return 'si es primo'
                }
                
            }
        }
        console.log(isPrime(8))
        */
//Escriba una función que verifique si todos los elementos son únicos en la matriz.
        /*
        function isUnique(array){
            return array.length !== new Set(array).size;//new set: news elementos, size: cantidad
        }    //si NO tiene repetidos es ==, SI tiene repetidos es !== 
             //object SET, almacena valores unicos
        const array=['apple', 'apple', 'banana', 'pear']
        console.log(isUnique(array))
        */
//Escriba una función que verifique si todos los elementos de la matriz son del mismo tipo de datos.
        /*
        function isType(array){
            return new Set( array.map( x => typeof x ) ).size <= 1;
        }//MAP, crea array con los resultados
        const array=['apple', 'apple', 'banana', 'pear',5]
        console.log(isType(array))
        */
//El nombre de la variable de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es una variable válida o no válida.
        /*
        function isValidVariable(params) {
            var regex = '^([a-zA-Z_$][a-zA-Z\d_$]*)$'
            if (params.match(regex)) {
                return 'is valid'
            }else{
                return 'is invalid'
            }
        }
        var variable='auto$'
        console.log(isValidVariable(variable))
        */
//Escriba una función que devuelva una matriz de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.
        /*
        function isUniqueAleatorio() {
            const array=[]
            let element
            while (array.length < 7) {
                element=Math.floor(Math.random() * 10)
                if(array.indexOf(element) === -1) array.push(element)  
            }
            return array
        }
        console.log(isUniqueAleatorio())
        */
//Escriba una función llamada reverseCountries, toma la matriz de países y primero copia la matriz y devuelve el reverso de la matriz original
const countries = [
    'albania',
    'denmark',
    'ethiopia',
    'united states',
    'new zealand',
    'finland',
    'germany',
    'canada',
    'ireland',
    'japan',
    'bolivia',
    'kenya',
    'hungary'
]
function reverseCountries(array) {
    let copy=countries.slice()
    return copy.reverse()
}
console.log(reverseCountries(countries))

