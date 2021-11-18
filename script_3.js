console.log("Bonjour monde");

let nb = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);
nb = Number(nb);

let n = nb;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }

  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);
