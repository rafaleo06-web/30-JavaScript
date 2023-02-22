/* //EXAMPLE
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)//en [0] elimine 9 elmentos
    .join(', ')//splice() cortamos todos los skills y AGREGAMOS a una nueva matriz(skillsWithoutLastSkill) al mismo tiempo
  let lastSkill = this.skills.splice(this.skills.length - 1,1)//Recortamos el ultimo ELEMENt para agregar AND, en skill
  console.log(lastSkill)

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
*/

//Ejercicios: Nivel 1
//1.Crea un objeto vacío llamado perro.
// const person = {}
// 2.Imprime el objeto del perro en la consola.
/*
      const perro={
          name:'boby',
          raza:'sharpey',
          edad: '5 meses'
      }
      */
// 3.Agregue propiedades de nombre, patas, color, edad y ladrido para el objeto perro.
// La propiedad ladrar es un método que devuelve guau guau
/*
        perro.patas=4
        perro.color='marron'
        perro.ladrido=function(){
            return 'gua gua'
        }
      console.log(perro.ladrido())
    */
//4.Obtén el nombre, las patas, el color, la edad y el valor del ladrido del objeto perro
// console.log(perro.color)

//5.Establecer nuevas propiedades del objeto perro: raza, getDogInfo
/*  perro.getDogInfo=function(){
          return `${this.name} ${this.edad} ${this.raza} ${this.patas} ${this.color}`
      }
      console.log(perro)
      console.log(perro.getDogInfo())
      */

//Ejercicios: Nivel 2
// 1- Encuentre a la persona que tiene muchas habilidades en el objeto de usuarios.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Rafael: {
    email: "rafael@rafael.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Java",
      "Oracle",
    ],
    age: 23,
    isLoggedIn: false,
    points: 60,
  },
};

function persona_skills() {
  let max = 1;
  let user;
  let name;
  for (const key in users) {
    user = users[key].skills;
    if (max < user.length) {
      max = user.length;
      name = key;
    }
  }
  return `${name} tienes mas habilidades ${max}`;
}

// 2-Cuente los usuarios registrados, cuente los usuarios que tienen más de 50 puntos del siguiente objeto.

function count_user_register() {
  const usuarios_registrados = Object.entries(users).length; //usuarios regitrados

  let point;
  let count_user_point = 0;
  const user_mas_points = [];

  for (const key in users) {
    point = users[key].points;
    if (point >= 50) {
      count_user_point++;
      user_mas_points.push(key);
    }
  }
  return user_mas_points;
}

// 3-Encuentre personas que sean desarrolladores de pila MERN desde el objeto de usuarios
/*
        function search_mern() {
          let user_skills;
          const name = [];
          const conditions = ["MongoDB", "Express", "React", "Node"];
          for (const key in users) {
            user_skills = users[key].skills;
            console.log(user_skills);
            const res = conditions.every((element) => user_skills.includes(element));
            if (res) {
              name.push(key)
            }
          }
          return name.join(',');
        }
    */

function search_mern() {
  const skill = Object.entries(users)
    .filter(([_, value]) =>
      value.skills.includes("MongoDB", "Express", "React", "Node")
    )
    .map(([key, _]) => key)
    .join(", ");
  return skill;
}

// 4-Establezca su nombre en el objeto de usuarios sin modificar el objeto de usuarios original
/*
    const copyObject=Object.assign({},users)
    copyObject.Leonardo={}
    copyObject.Leonardo.age=25
    copyObject.Leonardo.email='leonardo@leonardo.com'
    copyObject.Leonardo.isLoggedIn=true
    copyObject.Leonardo.points=25
    copyObject.Leonardo.skills=[]
    copyObject.Leonardo.skills.push('Javascript')
*/
// 5-Obtener todas las claves o propiedades del objeto de los usuarios
/*const entries=Object.entries(users)*/

// 6-Obtener todos los valores del objeto de los usuarios
/*const values=Object.values(users)*/

// NIVEL 3
// 1-Cree un objeto literal llamado personAccount . Tiene propiedades de nombre , apellido, ingresos, gastos y tiene los métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance . Los ingresos son un conjunto de ingresos y su descripción y los gastos son un conjunto de ingresos y su descripción.
/*
      const personAccount={}
      personAccount.name='rafael'
      personAccount.lastname='salirrosas'
      personAccount.income=[]
      personAccount.income.push(100)
      personAccount.bills=[]
      personAccount.bills.push(50)

      personAccount.totalIncome=function () {
        return this.income.reduce((a,b)=>a+b)
      }
      personAccount.totalExpense=function () {
        return this.bills.reduce((a,b)=>a+b)
      }
      personAccount.accountInfo=function () {
        return `${this.name} ${this.lastName}`
      }
      personAccount.addIncome=function (income) {
        this.income.push(income)
        return this.totalIncome()
      }
      personAccount.addExpense=function (expense) {
        this.bills.push(expense)
        return this.totalExpense()

      }
      personAccount.accountBalance=function () {
        return this.totalIncome()-this.totalExpense()
      }
*/

// 2-A).  Cree una función llamada signUp que permita al usuario REGISTRARSE a la colección.  Si el usuario existe, informe al usuario que ya tiene una cuenta.
// 2-B). Cree una función llamada iniciar sesión que permita al usuario iniciar sesión en la aplicación
const new_users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
/*
      function signUp(name, correo, contras) {
        const usuarios = Object.values(new_users);
        const usern = usuarios.filter(
          (user) => user.username === name && user.email === correo
        );
        if (usern.length < 1) {
          console.log("usuario creado");
          const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
          let id_assing = "";
          const charactersLength = characters.length;
          for (let i = 0; i < 6; i++) {
            id_assing += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }

          let b = {
            _id: id_assing,
            username: name,
            email: correo,
            password: contras,
            createdAt: "08/01/2020 10:00 AM",
            isLoggedIn: true,
          };
          new_users.push(b);
          return new_users;
        } else {
          return "el usuario " + usern[0].username + " ya existe";
        }
      }

      function login(correo, contras) {
        const usuarios = Object.values(new_users);
        const usern = usuarios.filter(
          (user) => user.email === correo && user.password === contras
        );
        if (usern.length < 1) {
          console.log("El usuario no existe");
        } else {
          console.log(usern[0].username + " Iniciastes sesion");
        }
      }
*/

// 3-A)Cree una función llamada tasaProducto que califique el producto
// 3-B)Cree una función llamada AverageRating que calcule la calificación promedio de un producto
const products = [
  {
    _id: "eedfcf",
    name: "Mobile",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
/*
      function tasaProduct(name_product, rate_user) {
        const info_product = Object.values(products);
        const product = info_product.find((product) => product.name == name_product);
        console.log(product);

        if (!product) {
          return "Product no encontrado";
        } else {
          const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
          let id_assing = "";
          const charactersLength = characters.length;
          for (let i = 0; i < 6; i++) {
            id_assing += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }

          let rat = {
            userId: id_assing,
            rate: rate_user,
          };

          product.ratings.push(rat);
          return product;
        }
      }
*/
/*
      function promedio_rating(name_product) {
        const info_product = Object.values(products);
        const product = info_product.find((product) => product.name == name_product);

        if (!product) {
          return "Product no encontrado";
        } else {
          const sum = product.ratings.map((element) => element.rate);
          if (sum.length < 1) {
            return "no exite calificaciones";
          } else {
            const promedio = sum.reduce((a, b) => a + b);
            return promedio / sum.length;
          }
        }
      }
*/

// 4-Cree una función llamada likeProduct. Esta función ayudará a dar me gusta al producto y si no le gusta a eliminarlo
/*
      function like_product(name_product, like) {
        const info_product = Object.values(products);
        const product = info_product.find((product) => product.name == name_product);

        if (!product) {
          console.log("producto no encontrado");
        } else {
          if (product.likes.length < 1) {
            if (like === "like") {
              console.log("Like realizado");
              product.likes.push(like);
            } else if (like === "dislike") {
              console.log("AUN NO le distes like, para poder dislike");
            }
          } else {
            if (like === "like") {
              product.likes.push(like);
            } else if (like === "dislike") {
              product.likes.pop();
            }
          }
        }
        console.log(product)
      }
*/

