import { countries } from "../9Day-MetodosCallbacks/countries_data.js";
//------------ NIVEL 1---------------
// 1-Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp.
/*
            const constants = [2.72, 3.14, 9.81, 37, 100];
            let [e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants;
            console.log(e, pi, gravedad, humanBodyTemp, waterBoilingTemp);
*/
// 2-Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor
/*
            const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
            let [fin, est, sw, den, nor] = countries;
            console.log(fin, est, sw, nor);
*/
// 3-Desestructurar el objeto rectángulo por sus propiedades o keys.
/*
            const rectangle = {
            width: 20,
            height: 10,
            area: 200,
            perimeter: 60,
            };
            let { width, height, area, perimeter } = rectangle;
            console.log(width, height, area, perimeter);
*/
//-------------- NIVEL 2------------------
// 1-Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración
/*
            const users = [
            {
                name: "Brook",
                scores: 75,
                skills: ["HTM", "CSS", "JS"],
                age: 16,
            },
            {
                name: "Alex",
                scores: 80,
                skills: ["HTM", "CSS", "JS"],
                age: 18,
            },
            {
                name: "David",
                scores: 75,
                skills: ["HTM", "CSS"],
                age: 22,
            },
            {
                name: "John",
                scores: 85,
                skills: ["HTML"],
                age: 25,
            },
            {
                name: "Sara",
                scores: 95,
                skills: ["HTM", "CSS", "JS"],
                age: 26,
            },
            {
                name: "Martha",
                scores: 80,
                skills: ["HTM", "CSS", "JS"],
                age: 18,
            },
            {
                name: "Thomas",
                scores: 90,
                skills: ["HTM", "CSS", "JS"],
                age: 20,
            },
            ];
*/
/*
            for (const { name, scores, skills, age } of users) {
            console.log(name, scores, skills, age);
            }
*/
// 2-Encuentra las personas que tienen menos de dos habilidades
/*
            function skills_(arr) {
            const person_filter = arr.filter((element) => element.skills.length <= 2);
            for (const { name, scores, skills, age } of person_filter) {
                console.log(name, scores, skills, age);
            }
            }
            skills_(users);
*/
// 3-Desestructurar el objeto países imprimir nombre, capital, población e idiomas de todos los países
/*
            for (const {name,capital, population,languages} of countries) {
                console.log(name,capital, population,languages);
            }
*/
// 4-Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en un array de arrays que puede no ser fácil de leer. Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.
// output: David (4) ["HTM", "CSS", "JS", "React"] 90 95
/*
            const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
            let [name, skills] = student;
            const [, , [, , jsScore, reactScore]] = student;
            console.log(name, skills.length, skills, jsScore, reactScore);
*/
// 5-Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto estructurado.
/*
            const students = [
            ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
            ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
            ];
            //-------- OPCION 1 -------------
            for (const [name, skills, scores] of students) {
                console.log({name, skills, scores});
            }
            //-------- OPCION 2 -------------
            const [[name, skills, scores]]=students
            console.log(name, skills, scores);

            //--------- OPCION 3 ----------
            function convertArrayToObject(arr) {
            return arr.map(([name, skills, scores]) => {
                return {
                name,
                skills,
                scores,
                };
            });
            }
            console.log(convertArrayToObject(students));
*/

// 4-Copie el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente ?
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const newStudent = [...students];
// >Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end
// >Añadir Express con nivel 9 a los conjuntos de habilidades del back end
// >Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
// >Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos
/*
            const student = {
            name: "David",
            age: 25,
            skills: {
                frontEnd: [
                { skill: "HTML", level: 10 },
                { skill: "CSS", level: 8 },
                { skill: "JS", level: 8 },
                { skill: "React", level: 9 },
                ],
                backEnd: [
                { skill: "Node", level: 7 },
                { skill: "GraphQL", level: 8 },
                ],
                dataBase: [{ skill: "MongoDB", level: 7.5 }],
                dataScience: ["Python", "R", "D3.js"],
            },
            };

            const new_skill_fronted = { skill: "Boobstrap", level: 8 };
            const new_skill_backend = { skill: "Express", level: 9 };
            const new_skill_db = { skill: "SQL", level: 8 };
            const new_skill_dataScience = "SQL";

            //--------- DESCTRUCTURING ----------------
            const {
            skills: { frontEnd },
            } = student;
            const {
            skills: { backEnd },
            } = student;
            const {
            skills: { dataBase },
            } = student;
            const {
            skills: { dataScience },
            } = student;

            frontEnd.push(new_skill_fronted);
            backEnd.push(new_skill_backend);
            dataBase.push(new_skill_db);
            dataScience.push(new_skill_dataScience);

            console.log(student);
*/
