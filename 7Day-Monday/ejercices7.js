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
