// 1 ci misal
let fullName = () => {
  return "1:" + "jeyhun abilov";
};

console.log(fullName());
// 2 ci misal

function DynamicFullName(name, surname) {
  return name + " " + surname;
}

console.log("2:", DynamicFullName("jeyhun", "abilov"));
// 3 cu misal

function addNumbers(a, b) {
  return Number(a) + Number(b);
}

console.log("3:", addNumbers(10, 30));

// 4 cu misal

function areaOfReactangle(width, height) {
  return Number(width) * Number(height);
}

console.log("4:", areaOfReactangle(5, 4));

// 5 ci misal

function perimeterOfReactangle(width, height) {
  return Number(width) + Number(height);
}

console.log("5:", perimeterOfReactangle(5, 4));

// 6 ci misal

function volumOfRectPrism(a, b, c) {
  return Number(a) * Number(b) * Number(c);
}

console.log("6:", volumOfRectPrism(5, 5, 5));

// 7 ci misal

function areaOfCircle(r) {
  return Number(r) * Number(r) * Math.PI;
}

console.log("7:", areaOfCircle(3));

// 8 ci misal

function circumOfCircle(r) {
  return Number(r) * 2 * Math.PI;
}

console.log("9:", circumOfCircle(2));

// 9 cu misal

function sixliq(m, V) {
  return Number(m) / Number(V);
}

console.log("9:", sixliq(1000, 100));

// 10 cu misal

function selsiToFarenheit(C) {
  return Number(C) * (Number(5) / Number(9)) + Number(32);
}

console.log("10:", selsiToFarenheit(0));

// 11 ci misal

function BMI(m, h) {
  let bmi = m / (h * h);
  if (bmi < 18.5) {
    return "Az Ceki";
  } else if (18.5 < bmi && bmi < 24.9) {
    return "Normal Ceki";
  } else if (25 < bmi && bmi < 29.9) {
    return "Artiq Ceki";
  } else {
    return "Obez";
  }
}

console.log("11:", BMI(95, 1.7));

// 12 ci misal

function CheckSeasons(month) {
  if (month == "december" || month == "january" || month == "februaty") {
    return "winter";
  } else if (month == "march" || month == "april" || month == "may") {
    return "spring";
  } else if (month == "june" || month == "july" || month == "august") {
    return "summer";
  } else month == "september" || month == "october" || month == "november";
  return "fall";
}

console.log("12:", CheckSeasons("november"));

// 13 cu misal

function findMax(a, b, c) {
  return Math.max(a, b, c);
}
// let arr = [1, 111, 48, 24]

// console.log(arr.sort((a,b) => a-b));

console.log("13:", findMax(5, 10, 1));

// 14 cu misal

console.log("14:");

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray(["salam", "privet", "hello"]);

// 15 ci misal

// function reverseArray(params) {}

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
];

let newArray = [];

function myFunc() {
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 5) {
      newArray.push(countries[i]);
    }
  }
}

myFunc();

console.log(newArray);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let newArray2 = [];
function myFunc2() {
  for (let i = 0; i < countries.length; i++) {
    if (
      countries[i].charAt(0).toLocaleLowerCase() ==
      countries[i].charAt(countries[i].length - 1).toLocaleLowerCase()
    ) {
      newArray2.push(countries[i]);
    }
  }
}
myFunc2();

console.log(newArray2);


