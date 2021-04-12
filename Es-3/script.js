var somma = 0
var numeriInseriti = []

for (var i = 0; i < 10; i++) {

    var numero = parseInt(prompt("Inserisci numero. Ne mancano" + (10 - i)));
    
    somma += numero

    numeriInseriti.push(numero)

}

if (!Number.isNaN(somma)) {
    console.log(numeriInseriti)
    console.log("Somma = " + somma);
    document.getElementById("somma").innerHTML = ("Somma = ") + somma;
}

else{
    console.log("Inserire cifre numeriche")
    document.getElementById("somma").innerHTML = ("Inserire cifre numeriche")
}
