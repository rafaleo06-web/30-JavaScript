//*BEGIN EJERCISE 1
/* function esPrimo(numero) {
  // Si el número es menor que 2, no es primo
  if (numero < 2) {
    return false;
  }

  // Comprobar si el número es divisible por cualquier número menor que él
  //todo: example: 9 % 2 = false, 9 % 3 = true, 9 % 4 = false, 9 % 5 = false, 9 % 6 = false, 9 % 7 = true, 9 % 8 = false => 9 NOT IS PRIMO BECAUSE IS DIVISIBLE BY 3
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  // Si el número no es divisible por ningún número menor que él, es primo
  return true;
}

const boxNumbers = document.querySelector(".container-number");

for (let index = 0; index <= 101; index++) {
  const number = document.createElement("div");
  number.innerHTML = index;
  number.style.width = "40px";

  if (index % 2 === 0) {
    number.style.backgroundColor = "green";
  } else if (esPrimo(index)) {
    number.style.backgroundColor = "red";
  } else {
    number.style.backgroundColor = "yellow";
  }
  boxNumbers.appendChild(number);
} */
//*END EJERCISE 1

//*BEGIN EJERCISE 2
/* import { countries } from "../9Day-MetodosCallbacks/countries_data.js";
const containeCountries = document.querySelector(".container-countries");
for (let index = 0; index < countries.length; index++) {
  const boxCountrie = document.createElement("div");
  boxCountrie.style.width = "150px";
  boxCountrie.style.height = "150px";
  boxCountrie.style.margin = "10px";
  boxCountrie.style.display = "flex";
  boxCountrie.style.justifyContent = "center";
  boxCountrie.style.alignItems = "center";
  boxCountrie.style.boxShadow = "0px 0px 4px 0px rgba(0,0,0,0.5)";
  const nameCountrie = document.createElement("h3");
  nameCountrie.innerHTML = countries[index].name;
  nameCountrie.style.textAlign = "center";
  nameCountrie.style.fontFamily = "Arial";
  boxCountrie.appendChild(nameCountrie);
  containeCountries.appendChild(boxCountrie);
} */
//*END EJERCISE 2

//*BEGIN EJERCISE 3
//TODO: begin, title and description and date
import { asabenehChallenges2020 } from "../22Day-DOM-II/data/challenges_info.js";

const monthsArr = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const titleContainer = document.querySelector(".titleContainer");

const getTitle = document.createElement("h2");
getTitle.innerHTML = asabenehChallenges2020.challengeTitle;

const getYear = document.createElement("span");
getYear.innerHTML = " " + asabenehChallenges2020.challengeYear;
getYear.style.fontSize = "60px";

const textChallenge = document.createElement("p");
textChallenge.innerHTML = asabenehChallenges2020.challengeSubtitle;
textChallenge.style.textDecoration = "underline";

//begin, GET date current and format
const dateCurrent = new Date();
const year = dateCurrent.getFullYear();
const month = monthsArr[dateCurrent.getMonth() + 1]; // Sumamos 1 porque los meses van de 0 a 11
const day = dateCurrent.getDate();
const hour = dateCurrent.getHours();
const minute = dateCurrent.getMinutes();
const second = dateCurrent.getSeconds();

const dateFormat = `${month} ${day},${year}`;
const hourFormat = `${hour}:${minute}:${second}`;
//end, GET date current and format

const dateText = document.createElement("p");
dateText.innerHTML = `${dateFormat} ${hourFormat}`;

dateText.style.width = "200px";
dateText.style.margin = "0 auto";
dateText.style.padding = "8px";
dateText.style.marginBottom = "10px";

getTitle.appendChild(getYear);
titleContainer.append(getTitle, textChallenge, dateText);
//begin, change color title
setInterval(function () {
  // Generar un color aleatorio en formato hexadecimal
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // console.log(randomColor);

  // Aplicar el color al elemento del año
  getYear.style.color = randomColor;
}, 1000);
//end, change color title

//begin, change date completed
setInterval(function () {
  // Generar un color aleatorio en formato hexadecimal
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // console.log(randomColor);

  // Aplicar el color al elemento del año
  dateText.style.backgroundColor = randomColor;
}, 1000);
//end, change date completed

//TODO: END title and description and date

//TODO: BEGIN languajes div's
const languajesContainer = document.querySelector(".languajes");

for (const index of asabenehChallenges2020.challenges) {
  const divLanguaje = document.createElement("div");
  const titleChallenge = document.createElement("p");
  const btnDetails = document.createElement("details");
  const summaryTitleTopic = document.createElement("summary");
  summaryTitleTopic.innerHTML = index.topics[0];
  btnDetails.appendChild(summaryTitleTopic);
  index.topics.forEach((element) => {
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.innerHTML = element;
    btnDetails.appendChild(li);
  });

  const textStatus = document.createElement("p");
  titleChallenge.innerHTML = index.name;
  titleChallenge.style.textDecoration = "underline";
  divLanguaje.style.width = "100%";
  divLanguaje.style.padding = "15px";
  divLanguaje.style.margin = "5px 0px";
  divLanguaje.style.display = "flex";
  divLanguaje.style.justifyContent = "space-between";
  divLanguaje.style.alignItems = "center";

  index.status === "Done"
    ? (divLanguaje.style.backgroundColor = "#5bbc7a")
    : index.status === "Ongoing"
    ? (divLanguaje.style.backgroundColor = "#f7dc5c")
    : (divLanguaje.style.backgroundColor = "#fd5e53");

  textStatus.innerHTML = index.status;
  divLanguaje.append(titleChallenge, btnDetails, textStatus);
  languajesContainer.appendChild(divLanguaje);
}
//TODO: END languajes div's

//TODO: BEGIN container-info-skills"
//name and socialLinks and descriptionBio
const infoPersonal = document.querySelector(".container-info-skills");

const nameAndDescription = document.createElement("div");
const nameInfo = document.createElement("h1");

const descriptionInfo = document.createElement("p");
nameInfo.innerHTML = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;

descriptionInfo.innerHTML = asabenehChallenges2020.author.bio;

nameAndDescription.appendChild(nameInfo);

asabenehChallenges2020.author.socialLinks.forEach((element) => {
  const btnLinkedin = document.createElement("span");
  btnLinkedin.style.margin = "0 5px";

  btnLinkedin.innerHTML = `${element.fontawesomeIcon}`;

  const iconElement = btnLinkedin.querySelector("i");
  console.log(iconElement);
  iconElement.classList.add("fa-2x");
  nameAndDescription.appendChild(btnLinkedin);
});

nameAndDescription.appendChild(descriptionInfo);
infoPersonal.appendChild(nameAndDescription);

// BEGIN, titles, skills and qualifications
const containerTitSkillQualif = document.createElement("div");
containerTitSkillQualif.style.display = "flex";
containerTitSkillQualif.style.justifyContent = "space-between";

const titleProfesion = document.createElement("ul");
titleProfesion.style.margin = "0";
titleProfesion.style.padding = "0";
titleProfesion.style.textAlign = "left";

titleProfesion.style.listStyle = "none";
const nameTitles = document.createElement("h3");
nameTitles.innerHTML = "Titles";
titleProfesion.appendChild(nameTitles);

asabenehChallenges2020.author.titles.forEach((element) => {
  const li = document.createElement("li");
  li.innerHTML = element.join(" ");
  titleProfesion.appendChild(li);
});

const titleSkills = document.createElement("ul");
titleSkills.style.listStyle = "none";
titleSkills.style.margin = "0";
titleSkills.style.padding = "0";
titleSkills.style.textAlign = "left";

const nameSkills = document.createElement("h3");
nameSkills.innerHTML = "Skills";
titleSkills.appendChild(nameSkills);

asabenehChallenges2020.author.skills.forEach((element) => {
  const li = document.createElement("li");
  li.innerHTML = element;
  titleSkills.appendChild(li);
});

const titleQualifications = document.createElement("ul");
titleQualifications.style.margin = "0";
titleQualifications.style.padding = "0";
titleQualifications.style.textAlign = "left";

titleQualifications.style.listStyle = "none";
const nameQualifications = document.createElement("h3");
nameQualifications.innerHTML = "Qualifications";
titleQualifications.appendChild(nameQualifications);

asabenehChallenges2020.author.qualifications.forEach((element) => {
  const li = document.createElement("li");
  li.innerHTML = element;
  titleQualifications.appendChild(li);
});

containerTitSkillQualif.append(
  titleProfesion,
  titleSkills,
  titleQualifications
);
infoPersonal.appendChild(containerTitSkillQualif);
// END, titles, skills and qualifications

// BEGIN, keywords
const containerKeywords = document.createElement("div");
const titleKeywords = document.createElement("h3");
titleKeywords.innerHTML = "Keywords";
titleKeywords.style.textAlign = "left";
containerKeywords.appendChild(titleKeywords);

asabenehChallenges2020.keywords.forEach((element) => {
  const btnKey = document.createElement("button");
  btnKey.innerHTML = "# " + element;
  btnKey.style.margin = "3px 5px";
  btnKey.style.borderRadius = "5px";
  btnKey.style.border = "none";
  btnKey.style.fontStyle = "italic";

  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  btnKey.style.backgroundColor = randomColor;
  containerKeywords.appendChild(btnKey);
});
// END, keywords

infoPersonal.appendChild(containerKeywords);
//TODO: END container-info-skills"
//*END EJERCISE 3
