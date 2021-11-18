console.log("Bonjour monde");

const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

let read = true;
books.forEach((book) => {
  book.rented === 0;
});

if (read == true) {
  console.log("Tous les livres ont été empruntés au moins une fois");
}

function max_rented(books) {
  let i = 0;
  let max = 0;
  let name = "";

  while (i < books.length) {
    if (books[i].rented > max) {
      max = books[i].rented;
      name = books[i].title;
    }
    i++;
  }
  console.log("Le livre le plus emprunté est : ", name);
}

max_rented(books);

function min_rented(books) {
  let i = 0;
  let min = books[0].rented;
  let name = books[0].title;

  while (i < books.length) {
    if (books[i].rented < min) {
      min = books[i].rented;
      name = books[i].title;
    }
    i++;
  }
  console.log("Le livre le plus emprunté est : ", name);
}

min_rented(books);

function idCheck(book) {
  return book.id == 873495;
}
let idQuery = books.find(idCheck);
console.log(`Le livre avec l'id 873495 est ${idQuery.title}`);

let index = books.findIndex((book) => book.id === 133712);
books.splice(index, 1);
console.log("Le livre a été supprimé ");
console.log(books);

function sort_book(books) {
  return books.sort((a, b) => a.title.localeCompare(b.title));
}

console.log(sort_book(books));
