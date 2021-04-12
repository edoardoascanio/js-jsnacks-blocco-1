var num1 = parseInt(prompt("Inserisci il primo numero"));
var num2 = parseInt(prompt("Inserisci il secondo numero"));

if (Number.isNaN(num1) || (Number.isNaN(num2)){ 
    console.log("Uno o entrambe i numeri non sono validi.");
}

else {
    var numroMaggiore;

    if (num1 > num2) {
        numeroMaggiore = num1
    }

    else if (num2 > num1) {
        numeroMaggiore = num2
    }

    if (typeof numeroMaggiore !== "number") {
        console.log("Il numero maggiore è" + numeroMaggiore)
    }

    else {
        console.log("I due numeri sono pari")
    }
}
