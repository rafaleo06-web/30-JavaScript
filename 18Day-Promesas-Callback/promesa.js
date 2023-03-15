//*----------Callback------------------
/* const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills); //true: "It did not go well"
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    //true
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback); */
//*-------------------------------------

//*------------------Promesa-------------
/* const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error)); */
//*---------------------------------------

//*----------------- EJERCICES 1 -------------
/* const url = "https://restcountries.com/v2/all"; 
fetch(url)
.then((response) => response.json()) 
.then((data) => {
  // obtener los datos
  console.log(
    data.map((country) => ({
      name: country.name,
      capital: country.capital,
      idiomas: country.languages,
      poblacion: country.population,
      superficie: country.area,
    }))
    );
  })
  .catch((error) => console.error(error)); // manejo de errores si ocurre algo incorrecto
  */

//*----------------- EJERCICES 2 -------------
/* const catsAPI = "https://api.thecatapi.com/v1/breeds";
fetch(catsAPI)
.then((response) => response.json()) 
.then((data) => {
  // obtener los datos
  const catWeight= data.map((cat) => cat.weight.metric);
  console.log(catWeight);
  })
  .catch((error) => console.error(error)); */

//*----------------- EJERCICES 3 -------------
/* const url = "https://restcountries.com/v2/all"; 
fetch(url)
  .then((response) => response.json()) 
  .then((data) => {
    // obtener los datos
    const bigcountry=data.sort((a,b) => b.area - a.area).slice(0,10)
    console.log(bigcountry);
  })
  .catch((error) => console.error(error)); */

//*----------------- EJERCICES 4 -------------
/* const url = "https://restcountries.com/v2/all"; 
fetch(url)
  .then((response) => response.json()) 
  .then((data) => {
    const bigcountry = data.map((country) => ({
      pais: country.name,
      lenguas: country.languages.length,
    }));
    console.log(bigcountry);
  })
  .catch((error) => console.error(error)); */
