//*---------------- EXAMPLE ---------------
/* const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;
// const conver = JSON.parse(usersText);
// for (const [key,value] of Object.entries(conver)) {
//   console.log(value);
// }
const usersObj = JSON.parse(usersText, (key, value) => {
  //TODO: console.log(key+`--${value}--${typeof value}`);
  //firstName--Asabeneh--string
  //0--[object Object]--object
  //age--25--number
  //users--[object Object],[object Object],[object Object]--object
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj); */
//*-----------------------------------------

/* const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const txt = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(txt); */

//--------------------------------------
//----------- EJERCISES NIVEL 1---------------
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
//*------------ EJERCICIO 2 ------------
const object = Object.assign({}, skills);
const convertjson = JSON.stringify(object);
console.log(convertjson);

const convertjsonAge = JSON.stringify(age);
const convertjsonMarried = JSON.stringify(isMarried);
const convertjsonEstudent1 = JSON.stringify(student);
const jsonEstudentSelect = JSON.stringify(student, [
  "firstName",
  "lastName",
  "skills",
]);
console.log(jsonEstudentSelect);
//*-----------------------------------

//*------------ EJERCICIO 3 ------------
const object_users = JSON.parse(txt, (key, value) => {
  if (key === "skills") {
    return value.length;
  } else {
    return value;
  }
});

let maxSkillsCount = 0;
let maxSkillsUser = "";

for (const user in object_users) {
  if (object_users[user]["skills"] > maxSkillsCount) {
    maxSkillsCount = object_users[user]["skills"];
    maxSkillsUser = user;
  }
}

console.log(object_users);
console.log(
  `El usuario con más habilidades es ${maxSkillsUser}, con ${maxSkillsCount} habilidades.`
);
//*-----------------------------------

