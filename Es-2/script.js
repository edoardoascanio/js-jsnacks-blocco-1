var parola1 = prompt("Inserisci la prima parola");
var parola2 = prompt("Inserisci la seconda parola");

if (!Number.isNaN(parseInt(parola1)) || !Number.isNaN(parseInt(parola2))); {
    console.log("Parola non valida")
}

if (parola1.length > parola2.length) {
    console.log(parola2);
    console.log(parola1);
}

else if (parola2.length > parola1.length) {
    console.log(parola1);
    console.log(parola2);
}

else if (parola1 == parola2) {
    console.log("Le due parole sono identiche");
}

else {
    console.log("Le due parole sono di uguale lunghezza");
}


