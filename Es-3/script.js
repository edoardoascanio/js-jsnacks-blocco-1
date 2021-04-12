var numero1 = parseInt(prompt("Inserisci il primo numero"));
console.log(numero1)
var numero2 = parseInt(prompt("Inserisci il secondo numero"));
console.log(numero2)
var numero3 = parseInt(prompt("Inserisci il terzo numero"));
console.log(numero3)
var numero4 = parseInt(prompt("Inserisci il quarto numero"));
console.log(numero4)
var numero5 = parseInt(prompt("Inserisci il quinto numero"));
console.log(numero5)
var numero6 = parseInt(prompt("Inserisci il sesto numero")); 
console.log(numero6)
var numero7 = parseInt(prompt("Inserisci il settimo numero"));
console.log(numero7)
var numero8 = parseInt(prompt("Inserisci il ottavo numero"));
console.log(numero8)
var numero9 = parseInt(prompt("Inserisci il nono numero"));
console.log(numero9)
var numero10 = parseInt(prompt("Inserisci il decimo numero"));
console.log(numero10)

var somma = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10)
console.log("Somma = " + somma)

document.getElementById("numero1").innerHTML = ("Primo Numero = " + numero1 + " +")
document.getElementById("numero2").innerHTML = ("Secondo Numero = " + numero2 + " +")
document.getElementById("numero3").innerHTML = ("Terzo Numero = " + numero3 + " +")
document.getElementById("numero4").innerHTML = ("Quarto Numero = " + numero4 + " +")
document.getElementById("numero5").innerHTML = ("Quinto Numero = " + numero5 + " +")
document.getElementById("numero6").innerHTML = ("Sesto Numero = " + numero6 + " +")
document.getElementById("numero7").innerHTML = ("Settimo Numero = " + numero7 + " +")
document.getElementById("numero8").innerHTML = ("Ottavo Numero = " + numero8 + " +")
document.getElementById("numero9").innerHTML = ("Nono Numero = " + numero9 + " +")
document.getElementById("numero10").innerHTML = ("Decimo Numero = ") + numero10;

document.getElementById("somma").innerHTML = ("Somma = ") + somma; 

if(Number.isNaN(somma)){
    console.log("Inserire cifre numeriche")
    document.getElementById("somma").innerHTML = ("Inserire cifre numeriche")
}