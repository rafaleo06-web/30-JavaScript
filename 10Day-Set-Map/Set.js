import { countries } from "../9Day-MetodosCallbacks/countries_data.js";
/*
            const languages = [
            "English",
            "Finnish",
            "English",
            "French",
            "Spanish",
            "English",
            "French",
            ];
            const langSet = new Set(languages);
            console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
            console.log(langSet.size); // 4

            const counts_arr = [];
            const count = {};

            for (const l of langSet) {
            console.log(l);
            const filteredLang = languages.filter((lng) => lng === l);
            console.log(filteredLang); // ["English", "English", "English"],['Finnish'],['French','French'],['Spanish']
            counts_arr.push({ lang: l, count: filteredLang.length });
            }
            console.log(counts_arr);
*/
//--------------------------------
/*
            let a = [1, 2, 3, 4, 5];
            let b = [3, 4, 5, 6];
            let c = [...a, ...b];

            let A = new Set(a);
            let B = new Set(b);
            let C = new Set(c);

            console.log(C);
            //------------------------------
            const countriesMap = new Map();
            console.log(countriesMap.size); // 0
            countriesMap.set("Finland", "Helsinki");
            countriesMap.set("Sweden", "Stockholm");
            countriesMap.set("Norway", "Oslo");
            console.log(countriesMap);
            console.log(countriesMap.size);

            for (const country of countriesMap) {
            console.log(country);
            }
            for (const [country, city] of countriesMap) {
            console.log(country, city);
            }
*/
//----------------------------
//-------------- NIVEL 1 --------------
// 1-crear un set vacío
/*
            const map = new Set();
            console.log(map);
*/
// 2-Crear un set que contenga de 10 element a parti de un ARRAY
/*
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const set_numbers = new Set();
            for (const number of numbers) {
            set_numbers.add(number);
            }
            console.log(set_numbers);
*/
// 3-Eliminar un elemento de set
/*
            set_numbers.delete(1);
            console.log(set_numbers);
*/
// 4-Limpia set
/*
            set_numbers.clear();
            console.log(set_numbers);
*/
// 2-Crear un set que contenga de 0 a 10 utilizando el bucle
/*
            const set = new Set();
            for (let index = 1; index <= 10; index++) {
            set.add(index);
            }
            console.log(set);
*/
// 6-Crear un map de países y el número de caracteres de un país
/*
            const paises = new Map();
            paises.set("peru", 4);
            paises.set("chile", 5);
            paises.set("uruguay", 7);
            console.log(paises);
*/
//------------ NIVEL 2 ---------------
/*
            const arr1 = [4, 5, 8, 9];
            const arr2 = [3, 4, 5, 7];
*/
// 1-Encontrar a unión b
/*
            const union = [...arr1, ...arr2];
            const set_arr1 = new Set(arr1);
            const set_arr2 = new Set(arr2);
            console.log(set_arr2);
            console.log(union);
*/
// 2-Encontrar a intersección b
/*
            const intersec = arr1.filter((item) => set_arr2.has(item));
            console.log(intersec);
*/
// 3-Encontrar a diferencia b
/*
            const difere = arr2.filter((item) => !set_arr1.has(item));
            console.log(difere);
*/
//--------------- NIVEL 3 -----------------
// 1-Cuántos idiomas hay en el archivo de objetos de países.
/*
        function count_idiomas(arr) {
        const idiomas = arr.flatMap((element) => element.languages);
        const set_idiomas = new Set(idiomas);
        console.log(set_idiomas.size);
        }
*/
// 2-Utiliza los datos de los países para encontrar las 10 lenguas más habladas:
/*
            function mostSpokenLanguages(arr, num) {
            const counts_arr = [];
            const idiomas = arr.flatMap((element) => element.languages);
            const set_idiomas = new Set(idiomas);
            for (const idioma of set_idiomas) {
                const filter_idioma = idiomas.filter((element) => element === idioma);
                let count = {};
                if (!count[idioma]) {
                count[idioma] = filter_idioma.length;
                counts_arr.push(count);
                }
            }
            return counts_arr //RETURN array elements ordenados
                .sort((a, b) => {//Si return -1, ELEMENT A se coloca antes que ELEMENT B
                // console.log(Object.values(b));//[91],[25],[24]
                //console.log(Object.values(b)[0] - Object.values(a)[0]); //-1, 0, -23, -22,...
                return Object.values(b)[0] - Object.values(a)[0]; //[0] accedo al value i=0, es 91
                })
                .slice(0, num);
            }
            console.log(mostSpokenLanguages(countries, 10));
*/