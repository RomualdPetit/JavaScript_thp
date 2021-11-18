console.log("Bonjour monde");

const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

function born(x) {
  return x.year > 1969 && x.year < 1980;
}
let pdg = entrepreneurs.filter(born);
console.log("Listes des entrepeneurs nés dans les années 70 : ");
console.log(pdg);

let first_name_and_last_name = [];

function first_name_last_name(x) {
  let i = 0;
  while (i < x.length) {
    first_name_and_last_name.push(x[i].first + " " + x[i].last);
    i++;
  }
}
first_name_last_name(entrepreneurs);
console.log(first_name_and_last_name);

function age_today(x) {
  let i = 0;
  while (i < x.length) {
    console.log(
      "Aujourd'hui",
      x[i].first,
      x[i].last,
      "a",
      2021 - x[i].year,
      "ans"
    );
    i++;
  }
}
age_today(entrepreneurs);

function sort_last_name(entrepreneurs) {
  return entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
}

console.log(
  "Liste des entrepreneurs par ordre alphabétique",
  sort_last_name(entrepreneurs)
);
