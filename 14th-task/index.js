const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// function length() {
//   console.log(countries.length);
// }

// length();

// ///

// function firstMidLast() {
//   console.log(
//     countries[0],
//     countries[(countries.length - 1) / 2],
//     countries[countries.length - 1]
//   );
// }

// firstMidLast();

// ///

// let newCountries = [];

// function pushing() {
//   newCountries.push(...countries);
//   console.log(newCountries);
// }

// pushing();

// ///

// function upper(newCountries) {
//   newCountries.forEach((i) => console.log(i.toUpperCase()));
// }

// upper(newCountries);

// ///

// function reArray(x) {
//   let reArray = x.reverse();
//   console.log(reArray);
// }

// reArray(countries);

// ////

// function search(x) {
//     console.log(countries.includes(x));
// }
// search("Canada");

// function findCountrie(x, y) {
//     console.log(x.find((a) => a == y));
// }

// findCountrie(countries, "Azerbaijan");

///

function findWord(countrie, char) {
  countrie.forEach((word) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      word[i] == char && count++;
    }
    count > 1 && console.log(word);
  });
}

findWord(countries, "o");
