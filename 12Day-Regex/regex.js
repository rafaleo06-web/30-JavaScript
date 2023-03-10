//---------- NIVEL 1---------------
// 1-Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'.
/*
      const txt =
        "Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes";
      const pattern = /\d+/g;
      const matches = txt.match(pattern);
      const cast=matches.map(item => parseInt(item,10))
      const income = cast.reduce((acc, item) => acc + item);
      console.log(matches,income);
*/
// 2-La posición de algunas partículas en el eje horizontal x -1, -2, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas.
/*
      const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
      const string= points.join(',')
      console.log(string);
      const pattern = /[-]?\d+/g;
      const matches = string.match(pattern);
      console.log(matches);
      const num1=matches[0]
      const num2=matches[matches.length-1]
      const distancia=Math.abs(num1-num2)
      console.log(distancia);
*/
// 3-Escribir un patrón que identifique si una cadena es una variable JavaScript válida
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
/*
      function is_valid_variable(text) {
        const pattern=/^[A-Za-z]+[^\-]\w*$/gm
        const result=pattern.test(text)
        return result
      }
      console.log(is_valid_variable('1first_name'));
*/

//-------------- NIVEL 2 -----------------
// 1-Escriba una función llamada tenMostFrequentWords que obtenga las diez palabras más frecuentes de una cadena?
/*
      const text =
        "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";
      function tenMostFrequentWords(text, num) {
        const pattern = /[a-zA-Z]+/gm;
        const result = text.match(pattern);
        const new_array = [];

        result.forEach((item) => {
          let var_object = new_array.find((element) => element.word == item);
          if (var_object) {
            var_object.count++;
          } else {
            new_array.push({ word: item, count: 1 });
          }
        });
        return new_array.sort((a, b) => b.count - a.count).slice(0, num);
      }
      console.log(tenMostFrequentWords(text, 10));
*/
//----------- NIVEL 3---------------------
// 1-Escribe una función que limpie el texto. Limpia el siguiente texto. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.
// [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}
/*
      const text =
        "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?";

      function cleanText(text) {
        const mathreplace = text.replace(/[%#$&@!;]/gm, "");
        return mathreplace;
      }

      function tenMostFrequentWords(cleanText) {
        const textcleande = cleanText(text);
        const pattern_deep = /[a-zA-Z]+/gm;
        const matches = textcleande.match(pattern_deep);

        const new_array = [];

        matches.forEach((item) => {
          let var_object = new_array.find((element) => element.word == item);
          if (var_object) {
            var_object.count++;
          } else {
            new_array.push({ word: item, count: 1 });
          }
        });
        return new_array.filter((element) => element.count >= 2);
      }

      console.log(tenMostFrequentWords(cleanText));
*/