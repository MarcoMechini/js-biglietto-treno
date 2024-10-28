//DATI
let etaUtente = prompt("Dammi la tua età");
etaUtente = parseInt(etaUtente);

let kilometriUtente = prompt("Quanti kilometri percorri?");
kilometriUtente = parseInt(kilometriUtente);

const costoKilometro = 0.21;
const scMinorenni = 20;
const scOver65 = 40;
let costoTotaleBiglietto;
let scontoEta;

//CONTROLLO DATI INSERITI
if (isNaN(etaUtente) || isNaN(kilometriUtente)) {
    console.log(`I dati inseriti non sono corretti per favore inserite un numero`);
} else {

    //LOGICA
    costoTotaleBiglietto = kilometriUtente * costoKilometro;

    if (etaUtente < 18) {
        scontoEta = costoTotaleBiglietto * scMinorenni / 100;
        costoTotaleBiglietto = costoTotaleBiglietto - scontoEta;

    } else if (etaUtente > 65) {
        scontoEta = costoTotaleBiglietto * scOver65 / 100;
        costoTotaleBiglietto = costoTotaleBiglietto - scontoEta;
    }

    costoTotaleBiglietto = costoTotaleBiglietto.toFixed(2);
    console.log(`Il costo del biglietto è ${costoTotaleBiglietto}`);

}    