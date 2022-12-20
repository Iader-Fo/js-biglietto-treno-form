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


submitGenera.addEventListener('click',
    function () {
        // CALCOLA PREZZO X KM        
        const kmVal = parseInt(numKm.value);
        let prezzo = kmVal * 0.21;
        console.log("Il prezzo è " + prezzo + " € ");
        console.log('Cliccato su submitGenera');
        console.log('Il valore di nameInput è', nameInput.value);
        console.log('Il valore di numKm è', kmVal);
        console.log('Il valore di eta è', eta.value);


        // SE MINORE DI 18 ANNI APPLICA SCONTO 20%
        if (eta.value == 'under18') {
            prezzo = prezzo * 0.8;
            console.log("Lo sconto del 20% è stato applicato: " + prezzo + " € ");
        }

        // SE MAGGIORE DI 65 ANNI APPLICA SCONTO 40%
        else if (eta.value == 'over65') {
            prezzo = prezzo * 0.6;
            console.log("Lo sconto del 40% è stato applicato: " + prezzo + " € ");
        }

        // PREZZO CON 2 VALORI DECIMALI
        prezzo = prezzo.toFixed(2)
        console.log("Prezzo finale con 2 decimali: " + prezzo + " € ");


        const outputName = document.getElementById("nome-passeggero");
        outputName.innerHTML = nameInput.value;

        const outputAge = document.getElementById("eta-passeggero");
        outputAge.innerHTML = eta.value;

    }
)
submitAnnulla.addEventListener('click',
    function () {
        // nameInput.value = "";
        // numKm.value = "";
        // eta.value = "over18";
        window.location.reload();
    }
)

// //STAMPA PREZZO IN HTML
// alert("Il prezzo finale del biglietto è: " + prezzo + " € ")