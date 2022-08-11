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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1-Itere de 0 a 10 usando for loop, haga lo mismo usando while y do while loop 
      //for (let index = 0; index <= 10; index++) {
        //console.log(index)
      //}

      //var index=0
      //while (index<=10) {
        //console.log(index)
        //index++
      //}

      //var i=0
      //do {
        //console.log(i)
        //i++
      //} while (i<=10);

//2-Iterar de 0 a n usando for loop
    //var num=prompt("Ingrese numero a iterar")
    //for (let index = 0; index < num; index++) {
      //console.log(index)
    //}
//3-Escribe un ciclo que haga el siguiente patrón usando console.log(): 

//4-Escribe un ciclo que haga el siguiente patrón usando console.log(): 
    //num=prompt("Ingrese base de torre")
      //let string = "";
      //for (let i = 1; i <= num; i++) {
        //for (let j = 0; j < i; j++) {
          //string += "*";
        //}
        //string += "\n";
      //}
      //console.log(string)
//5-Use bucle para imprimir el siguiente patrón: 0 x 0 = 0
      //for (let index = 0; index <=10; index++) {
        //console.log(index + " x "+ index+" = "+ index*index) 
      //}
//6-Usando loop imprime el siguiente patrón: i i^2 i^3
      //for (let index = 0; index <= 10; index++) {
        //console.log(index+" "+Math.pow(index,2)+" "+Math.pow(index,3))
      //}
//7-Use for loop para iterar de 0 a 100 e imprimir solo números pares
      //for (let index = 0; index <=100; index++) {
        //if (index %2==0) {
          //console.log("Numero par"+index)
        //}else if (index %2==1) {
          //console.log("Numero impar"+index)
        //}
      //}
//8-Use for loop para iterar de 0 a 100 e imprimir solo números primos
    //const numPrimos=[]
    //for (let i = 2; i <= 100; i++) {//
      //var primo=true
      //for (let j = 2; j < i; j++) {//2 es true(yaque no cumple j<i)
        //if (i%j===0) {
          //primo=false
          //break
            //}
      //}
      //if(primo){
        //numPrimos.push(i)
      //}
    //}
    //console.log(numPrimos)
//9-Use for loop para iterar de 0 a 100 e imprimir la suma de todos los números.
    //var sum=0
    //for (let index = 0; index <=100; index++) {
      //sum+=index
    //}
    //console.log('Suma total '+sum)
//10-Use for loop para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todas las probabilidades, e imprima en una matriz. 
      /*let sumPares = 0
      let sumProba = 0
      let matriz=[]
      for (let index = 0; index <=100; index++) {
        if (index % 2 == 0) {
          sumPares += index
        } else {
          sumProba += index
        }
      }
      matriz.push(sumPares)
      matriz.push(sumProba)
      console.log(matriz)
      */
//11-Desarrolle un pequeño script que genere una matriz de 5 números aleatorios
    /*var numAle
    for (let index = 0; index < 5; index++) {
      numAle=Math.floor(Math.random()*10)
      console.log(numAle)
    }
    */
//12-Desarrolle un pequeño script que genere una matriz de 5 números aleatorios y los números deben ser únicos
    /*var arrayNumbers=[]//almacenamos para poder comparar con los elementos SI ESQUE EXISTE
    for (let index = 0; index < 10; index++) {
      var numAle=Math.floor(Math.random()*10)
      if (arrayNumbers.indexOf(numAle)===-1) {
        arrayNumbers.push(numAle)
        console.log(numAle)
      }
    }
    */
//13-Desarrolle un pequeño script que genere una identificación aleatoria de seis caracteres:
    /*var caracteres="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var text=''
    for (let index = 0; index < 5; index++) {
      text+=caracteres.charAt(Math.floor(Math.random()*caracteres.length))
      //redondea +O-[random(0-1)*30]
    }
    console.log(text)
    */
//14-Escriba un script que genere un número hexadecimal aleatorio. 
    /*var caracteres="0123456789abcdef"
    var text='#'
    for (let index = 0; index < 6; index++) {//SE PASA INDICE Y DEVUELVE LETRA
      text+=caracteres.charAt(Math.floor(Math.random()*caracteres.length))
      //redondea +O-[random(0-1)*30]
    }
    console.log(text)
    */
//15-Escriba un script que genere un número de color rgb aleatorio.

    /*rgbNumberX=Math.floor(Math.random()*255)
    rgbNumberY=Math.floor(Math.random()*255)
    rgbNumberZ=Math.floor(Math.random()*255)

    console.log('rgb('+rgbNumberX+','+rgbNumberY+','+rgbNumberZ+')')
    */
//16-Matriz de países, CONVERTIR E IMPRIMIR A MAYUSCULAS, IMPRIMIR 3 PRIMERAS LETRAS.
    /*newCountries=[]
    for (const iterator of countries) {
      newCountries.push(iterator.toUpperCase())
    }
    arrayCort=[]
    for (let index = 0; index < newCountries.length; index++) {
      arrayCort.push(newCountries[index].slice(0,3));
    }
    console.log(arrayCort)
    */
//17-Usando la matriz de países anterior, cree una matriz para la longitud de los países.
    /*arrayLongitud=[]
    for (let index = 0; index < countries.length; index++) {
      arrayLongitud.push(countries[index].length)
    }
    */
//18-Unir los 2 arrays anteriores y countries  ['Albania', 'ALB', 7],
    /*unionArrays=[]
    for (let index = 0; index < countries.length; index++) {
      unionArrays.push([countries[index],arrayCort[index],arrayLongitud[index]]) 
      
    }
    console.log(unionArrays)
    */
//En la matriz de países anterior, verifique si hay un país o países que contengan la palabra 'tierra'. Si hay países que contienen 'tierra', imprímalo como matriz. Si no hay ningún país que contenga la palabra 'tierra', escriba 'Todos estos países no tienen tierra'. 
    /*newArray=[]
    for (let index = 0; index < countries.length; index++) {
      if (countries[index].includes('ia')) {
        newArray.push(countries[index]) 
      }
    }
    if (newArray.length==0) {
      console.log('Todos estos paises no tienen ia')
    }else{
      console.log(newArray)
    }
    */
//Usando la matriz de países anterior, encuentre el país que contiene la mayor cantidad de caracteres. 
    /*arrayComparacion=countries[0].length
    for (let index = 1; index < countries.length; index++) {
      if (arrayComparacion<countries[index].length) {
        arrayComparacion=countries[index].length
      }
    }
    for (let index = 0; index < countries.length; index++) {
      if (countries[index].length===arrayComparacion) {
        console.log(countries[index]+" = "+arrayComparacion)
      }
      
    }
    */
//Usando la matriz de países anterior, encuentre el país que contiene solo 5 caracteres. 
    /*arrayComparacion=5
    for (let index = 0; index < countries.length; index++) {
      if (arrayComparacion===countries[index].length) {
        console.log(countries[index])
      }
    }
    */
//Encuentre la palabra más larga en la matriz webTechs
    /*elementComparate=webTechs[0].length
    for (let index = 1; index < webTechs.length; index++) {
      if (elementComparate<webTechs[index].length) {
        elementComparate=webTechs[index].length
      }
    }
    for (let index = 0; index < webTechs.length; index++) {
      if (webTechs[index].length===elementComparate) {
        console.log(webTechs[index]+" = "+elementComparate)
      }
    }
    */
//Utilice la matriz de webTechs para crear la siguiente matriz de matrices:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    /*newArrayLenght=[]
    for (let index = 0; index < webTechs.length; index++) {
      newArrayLenght.push([webTechs[index],webTechs[index].length])
    }
    console.log(newArrayLenght)
    */
//Iterar a través de la matriz, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando un bucle for o for of e imprimir el elementos. 
    /*array=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    for (const iterator of array) {
      console.log(iterator)
    }
    */
//Esta es una matriz de frutas, ['plátano', 'naranja', 'mango', 'limón'] invierta el orden usando bucle sin usar un método inverso.
    /*arrayFrutas=['plátano', 'naranja', 'mango', 'limón']
    for (let index = arrayFrutas.length-1; index >= 0; index--) {
      console.log(arrayFrutas[index]) 
    }
    */
//Imprima  const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]
    /*const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]
    for (let i = 0; i < fullStack.length; i++) {
      for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase())
      }
    }
    */
//EJERCICIO NIVEL 3
//Copiar matriz de países (Evitar mutación)
    /*
    const copyCountries2=countries.slice()//slice copia parte de array(con paramentros), (vacio) copia todos elementos, EVITA MUTACION
    copyCountries2.push('Argentina')
    console.log(copyCountries2)
    console.log(countries)
    */    
//Cree una copia de la matriz que no modifique el original. Ordene la matriz copiada y guárdela en una variable sortedCountries
    /*const copyCountries2=countries.slice()
    copyCountries2.push('Argentina')
    var sortedCountries=copyCountries2.sort()
    console.log(sortedCountries)
    console.log(countries)
    */
//Extraiga todos los países que contengan la palabra 'land' de la matriz de países e imprímala como matriz
    /*countriesLand=[]
    for (let index = 0; index < countries.length; index++) {
      if (countries[index].includes('land')) {
        countriesLand.push(countries[index]) 
      }
    }
    console.log(countriesLand)
    */
//Extraiga todos los países que contengan dos o más palabras de la matriz de países e imprímalos como matriz
    /*countriesSpace=[]
    for (let index = 0; index < countries.length; index++) {
      if (countries[index].includes(' ')) {
        countriesSpace.push(countries[index]) 
      }
    }
    console.log(countriesSpace)
    */
//Invertir la matriz de países y poner en mayúscula cada país y almacenarlo como una matriz
    /*var countriesReverse=countries.reverse()
    newCountries=[]
    countrieSeparated=[]
    newcountrieSeparated=[]
    for (const countrie of countriesReverse) {
      if (countrie.includes(' ')) {
        countrieSeparated.push(countrie.split(" "))
        for (let i = 0; i < countrieSeparated.length; i++) {
          for (let j = 0; j < countrieSeparated.length; j++) {
            countrieSeparated[i][j]=countrieSeparated[i][j].charAt(0).toUpperCase()+countrieSeparated[i][j].slice(1)
          }        
        }
      } else {
        newCountries.push(countrie[0].toUpperCase() + countrie.slice(1))
      }
    }
    for (let index = 0; index < countrieSeparated.length; index++) {
      countrieSeparated[index]=countrieSeparated[index].join(" ")
    }

    const countrieFinal=newCountries.concat(countrieSeparated)
    //console.log(newCountries)
    //console.log(countrieSeparated)
    console.log(countrieFinal)
    */


