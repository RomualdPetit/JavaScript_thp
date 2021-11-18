console.log("Bonjour monde");

//exo 2
let nb = prompt("De quel nombre veut tu calculer la factorielle ?");
nb = Number(nb);

function factorialize(nb) {
  if (nb < 0) return -1;
  else if (nb == 0) return 1;
  else {
    return nb * factorialize(nb - 1);
  }
}

let res = "Le résultat est : " + factorialize(nb);
console.log(res);
