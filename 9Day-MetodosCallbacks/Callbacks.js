import { countries } from "./countries_data.js";

// CALLBACK
/*
      const callback = (n) => {
        return n ** 2;
      };
      function cube(callback, n) {
        return callback(n) * n;
      }
      console.log(cube(callback, 3));
      */
// Higher order function returning an other function
/*
      const higherOrder = (n) => {//funcion de expresion, se asigna variable UNDEFINED e inmediato se asigna FUNCION 
        const doSomething = (m) => {
          const doWhatEver = (t) => {
            return 2 * n + 3 * m + t;
          };
          return doWhatEver;
        };
        return doSomething;
      };
      console.log(higherOrder(2)(3)(10));
*/
/*
      const numbers = [1, 2, 3, 4, 5]
      const sumArray = arr => {
        let sum = 0
        const callback = function(element) {
          sum += element
        }
        arr.forEach(callback)
        return sum
      }
      console.log(sumArray(numbers))
*/
/*
      const numbers = [1, 2, 3, 4]
      const sumArray = arr => {
        let sum = 0
        arr.forEach(function(element) {
          sum += element
        })
        return sum

      }
      console.log(sumArray(numbers))
*/
//-----setInterval-----
//CALLBACK siempre se llamará en ese intervalo de tiempo.
/*
      function sayHello() {
        console.log("Hello");
      }
      setInterval(sayHello, 1000); //imprime hola en cada segundo, 1000ms es 1s

      //-----setTimeout------
      //CALLBACK espera esa cantidad de tiempo y se IMPRIME. 
      function sayHello() {
        console.log('Hello')
      }
      setTimeout(sayHello, 2000) //imprime hola después de esperar 2 segundos
*/
/*
      let numbers = [0, 20 , 10, 3, 1 ];
      numbers.sort(function ( a , b){
        //(a=20,b=0)1 (a=10,b=20)-1 (a=10,b=0)1 (a=3,b=10)-1 (a=3,b=0)1 (a=1,b=10)-1 (a=1,b=3)-1 (a=1,b=0)1
        //cuando hay cambio de posicion la misma (a)[index], se compara con el [index-1] seria(b), si es 1, se reaunda el proximo (a)
        //a[1] , b[0]
          if(a > b) return 1;
          if(a < b) return -1;
          return 0;  
      });
      console.log(numbers);
*/
//EJERCICIOS
//----NIVEL 1----
// 1-Explique la diferencia entre forEach, map, filter y reduce .
/*forEach(callbak(elem,i)): se utiliza para ITERAR cada elemento del array
map: RECORRE array y devuelve un nuevo array(IGUAL LONGITUD)con modificacion a cada elemento, 
filter: a traves de CONDICION, se filtra cada elemento array y devuelve ARRAY el elemento validado
reduce(callback(acc,current)): aplica funcion de acumulador a cada elemento y REDUCE A UN VALOR UNICO
*/

//--------------------------------------------
// 2-Defina una función de devolución de llamada antes de usarla en forEach, mapear, filtrar o reducir.
// function crearCita(cita, callback){ //FUNCION ORDER SUPERIOR, argumento CALLBACK
//   return callback(cita); // ejecuto funcion
// }

// function logCita(cita){
//   console.log(cita);
// }
// //CALLBACK= LOGCITA
// crearCita("come tus vegetales!", logCita);//no estamos agregando paréntesis a logCita al pasarla como argumento. YAQUE no queremos ejecutar nuestra función callback de inmediato, simplemente queremos pasar la definición de la función a la función de orden-superior para que pueda ejecutarse más tarde.

// 3-Use forEach para console.log cada país en la matriz de países.
/*
      const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
      const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
      ]
*/
/*
      const paisesforeach=countries.forEach(element=>console.log(element))
*/
// 6-Use el mapa para crear una nueva matriz cambiando cada país a mayúsculas en la matriz de países.
/*
      const paises_map=countries.map(element=>console.log(element.toUpperCase()))
*/
// 7-Utilice el mapa para crear una matriz de longitud de países a partir de una matriz de países.
/*
      const paises_long=countries.map(element=>console.log(element.length))
*/
// 10-Utilice el mapa para asignar la matriz de productos a sus precios correspondientes.
/*
      const productos=products.map((a)=>console.log(a.price))
*/
// 11-Utilice el filtro para filtrar los países que contienen land.
/*
      const country_land=countries.filter(element => element.includes('land'))
*/
// 12-Utilice el filtro para filtrar los países que tienen seis caracteres.
/*
      const country_length=countries.filter(element => element.length ===6)
*/
// 14-Use el filtro para filtrar el país que comienza con 'E';

/*
      const country_e=countries.filter(element=>element.slice(0,1)==='I')//or .startsWith('F')
*/
// 15-Use el filtro para filtrar solo los precios con valores.
/*
      const precio = products.map((element) => {
        return { price: element.price };
      });

      const precio_contains = products.filter(
        (element) => element.price !="" && element.price !=" "
      );
      console.log(precio_contains);
*/
// 16-Declare una función llamada getStringLists que toma una matriz como parámetro y luego devuelve una matriz solo con elementos de cadena.
/*
      const arr = ["A", "B", "C", "D", 10, 20, 30];
      function getStringLists(arr) {
        const new_arr = arr.filter((element) => typeof element === "String"); //return typeof= number, string, object, boolean
        return new_arr;
      }
*/
// 18-Use reduce para concatenar todos los países y producir esta oración: Estonia, Finland, Sweden, Denmark, Norway and IceLand son países del norte de Europa.
/*
      function concatenar(countries) {
        const text = " son países del norte de Europa.";
        const join = countries.reduce((acc, curr, i, arr) => {
          // if (i <= arr.length - 2) {
          //   acc = acc + " , " + curr;
          // } else if (i === arr.length - 1) {
          //   acc = acc + " and " + curr + text;
          // }
          // return acc
          return arr.slice(0, -1).join(" , ") + " and " + arr.slice(-1) + text; //slice(-1) empiece a contar por el final
        });
        return join;
      }
*/
// 20-Use algunos(SOME) para verificar si la longitud de algunos nombres es mayor que siete en la matriz de nombres
/*
      function veryfi_length_name(names) {
        return names.some((element) => element.length > 7); //false
      }
*/
// 21-Use every para verificar si todos los países contienen la palabra land
/*
      function include_tierra(arr) {
        return arr.every((element) => element.include("land")); //false, every TODOS
      }
*/
// 22-Explique la diferencia entre find y findIndex .
// Rspta: find: return first element, findIndex: return index first element

// 23-Use find para encontrar el primer país que contenga solo seis letras en la matriz de países
/*
      function find_countrie_length(arr) {
        return arr.find((element) => element.length === 6);
      }
*/
// 24-Use findIndex para encontrar la posición del primer país que contiene solo seis letras en la matriz de países
/*
      function index_countrie_length(arr) {
        return arr.findIndex((element) => element.length === 6);
      }
*/
// 25-Use findIndex para encontrar la posición de Noruega si no existe en la matriz, obtendrá -1.
/*
      function find_norway(arr) {
        return arr.findIndex((element) => element === "Russia");
      }
*/
//----------- NIVEL 2 -------
//

// 1-Encuentre el precio total de los productos encadenando dos o más iteradores de matriz
/*
      function precio_total(arr) {
        return arr
          .map((element) => element.price)
          .filter((element) => typeof element === "number")
          .reduce((acc, curr) => acc + curr);
      }
*/
// 2-Encuentre la suma del precio de los productos usando solo reducir reducir
/*
      function reduce_total(arr) {
        return arr.reduce((acc, curr) => {
          if (typeof curr.price === "number") {
            acc = acc + curr.price;
          }
          return acc;
        }, 0);
      }
*/
// 3-Declare una función llamada categorizarPaíses que devuelve una matriz de países que tienen un patrón común
/*
      function categorizeCountries(arr) {
        return arr.filter((element) => {
          if (element.includes("ia")) {
            return element; //cada elemento se retornado a FILTER,
          } //FILTER retornara array de elementos
        });
      }
*/
// 4-Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.
/*
      function object_letter(arr) {
        return arr
          .map((element) => element.name.charAt(0))
          .reduce((acc, curr) => {
            if (acc[curr]) {
              acc[curr]++;
            } else {
              acc[curr] = 1;
            }
            return acc;
          }, {});
      }
*/
// 5-Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional
/*
      function getFirstTenCountries(arr) {
        return arr
          .map((element) => element.name)
          .filter((element, i) => {
            if (i < 10) {
              return element;
            }
          });
      }
*/
// 6-Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.
/*
      function getLastTenCountries(arr) {
        return arr
          .map((element) => element.name)
          .slice(arr.length - 10, arr.length);
      }
*/

//------------- NIVEL 3 -----------
// 1-Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población
/*
    function orden_name(arr) {
      return arr.sort((a, b) => {
        if (a.capital !== "" && b.capital !== "") {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;//YAQUE SE RETORNAN VALORES -1 , 1 y 0. SE COLOCA EL RETURN al comienzo, QUE RETORNARÁ SOLO VALUES
        }
      });
    }
    function orden_capital(arr) {
      return arr.sort((a, b) => {
        if (a.capital !== "" && b.capital !== "") {
          return a.capital < b.capital ? -1 : a.capital > b.capital ? 1 : 0;
        }
      });
    }
    function orden_population(arr) {
      return arr.sort((a, b) => {
          return a.capital - b.capital
      });
    }
*/
// 2-Encuentre las 10 lenguas más habladas:
/*
      function mostSpokenLanguages(arr, num) {
        const paises = arr.flatMap((element) => element.languages);
        const new_arr = [];

        paises.forEach((country) => {//recoore array
          // en el ARRAY new_arr, busca element.country(1)==country(2) 
          let country_find = new_arr.find((x) => x.country === country);

          if (country_find != null) {//SI ES QUE se encontró { country: 'English', count: 91 },
            country_find.count++;//country_find(KEY)={ country: 'English', count: 91 }(VALUE)
          } else {
            //si NO SE encuentra, se CREA OBJECT
            let new_object = {
              country: country,//se asigna element ARRAY
              count: 1,//inicializa
            };
            new_arr.push(new_object);//se agrega [ {}, {}... ]
          }
        });

        return new_arr.sort((a, b) => {
          return b.count - a.count;
        }).slice(0,num)//recortamos 10 count altos array. 0 toma, 10 toma element anterior (NO ARR[10], SI ARR[9])
      }
*/
// 3-Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.
/*
      function mostPopulatedCountries(arr, num) {
        const new_arr = [];
        arr.forEach((element) => {
          let new_object = {
            country: element.name,
            population: element.population,
          };
          new_arr.push(new_object);
        })
        return new_arr.sort((a,b)=>b.population - a.population).slice(0,num);
      }
*/
// 4-Intenta desarrollar un programa que calcule la medida de tendencia central de una muestra(mean, median, mode) y medida de la variabilidad(range, variance, standard deviation). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puede crear un objeto llamado estadísticas y crear todas las funciones que hacen cálculos estadísticos como método para el objeto estadísticas. Comprueba el resultado que aparece a continuación.
/*
        const statistics = {
          ages: [
            31, 26, 34, 37, 27, 26, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29],

          count: function () {
            return this.ages.length;
          },
          sum: function () {
            return this.ages.reduce((acc, curr) => acc + curr);
          },
          min: function () {
            // let min = this.ages[0];
            // for (let index = 1; index < this.ages.length; index++) {
            //   if (min > this.ages[index]) {
            //     min = this.ages[index];
            //   }
            // }
            // return min;

            //---------------  REDUCE ------------------
            const min = this.ages.reduce((acc, curr) => {
              //ACC toma el valor retornado, CURR toma en siguiente element
              return acc < curr ? acc : curr; //return VAL
            });
            return min;
          },
          max: function () {
            const max = this.ages.reduce((acc, curr) => {
              return acc > curr ? acc : curr;
            });
            return max;
          },
          range: function () {
            const rango = this.max() - this.min();
            return rango;
          },
          mean: function () {
            const sum = this.ages.reduce((acc, curr) => acc + curr);
            return Math.round(sum / this.ages.length);
          },
          median: function () {
            const order_copy=[...this.ages]
            const order = order_copy.sort((a, b) => a - b);
            let media;
            if (order.length % 2 !== 0) {
              media = order[Math.round(order.length / 2) - 1];
            } else {
              media =
                (order[Math.round(order.length / 2) - 1] +
                  order[Math.round(order.length / 2) + 1]) /
                2;
            }
            return media;
          },
          mode: function () {
            let mode = 0;
            let freqMax = 0;
            const object_freq = this.ages.reduce((acc, curr) => {
              if (!acc[curr]) {
                acc[curr] = 1;
              } else {
                acc[curr]++;
              }
              return acc;
            }, {});

            for (let key in object_freq) {
              if (object_freq[key] > freqMax) {
                freqMax = object_freq[key];
                mode = key;
              }
            }
            return { mode: mode, count: freqMax };
          },
          var: function () {
            const arr_dif = [];
            for (let index = 0; index < this.ages.length; index++) {
              const dife = (this.ages[index] - this.median())**2
              arr_dif.push(dife);
            }
            const sum_arr_dif=arr_dif.reduce((acc,curr)=> acc+curr);
            return sum_arr_dif/arr_dif.length
          },
          std: function () {
            const arr_dif = [];
            for (let index = 0; index < this.ages.length; index++) {
              const dife = (this.ages[index] - this.median())**2
              arr_dif.push(dife);
            }
            const sum_arr_dif=arr_dif.reduce((acc,curr)=> acc+curr);
            return Math.sqrt(sum_arr_dif/arr_dif.length).toFixed(2) 
          },
          freqDist: function () {
            return;
          },
        };
        console.log("Count:", statistics.count());
        console.log("Sum: ", statistics.sum());
        console.log("Min: ", statistics.min());
        console.log("Min: ", statistics.max());
        console.log("Range: ", statistics.range());
        console.log("Mean: ", statistics.mean());
        console.log("Median: ", statistics.median());
        console.log("Mode: ", statistics.mode());
        console.log("Variance: ", statistics.var());
        console.log("Desviacion Standar: ", statistics.std());
*/
