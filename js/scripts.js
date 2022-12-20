// NOME E COGNOME
const nameInput = document.getElementById("name-input");

// CHIEDI N. DI KM
const numKm = document.getElementById("numkm");

// CHIEDI ETA'
const eta = document.getElementById("age");

// BUTTON GENERA
const submitGenera = document.getElementById("genera");

// BUTTON ANNULLA
const submitAnnulla = document.getElementById("annulla");

// CALCOLA PREZZO X KM
let prezzo = numKm * 0.21;
console.log ("Il prezzo è " + prezzo + " € ");


submitGenera.addEventListener('click',
    function() {
        console.log('Cliccato su submitGenera');
        console.log('Il valore di nameInput e', nameInput.value);
        console.log('Il valore di numKm e', numKm.value);
        console.log('Il valore di eta e', eta.value);
    }
)

// SE MINORE DI 18 ANNI APPLICA SCONTO 20%
if (eta < 18) {
    prezzo = prezzo * 0.8;
    console.log("Lo sconto del 20% è stato applicato: " + prezzo + " € ");
} 

// SE MAGGIORE DI 65 ANNI APPLICA SCONTO 40%
else if (eta >= 65) {
    prezzo = prezzo * 0.6;
    console.log("Lo sconto del 40% è stato applicato: " + prezzo + " € ");
}

// PREZZO CON 2 VALORI DECIMALI
prezzo = prezzo.toFixed(2)
console.log("Prezzo finale con 2 decimali: " + prezzo + " € ");


// //STAMPA PREZZO IN HTML
// alert("Il prezzo finale del biglietto è: " + prezzo + " € ")




