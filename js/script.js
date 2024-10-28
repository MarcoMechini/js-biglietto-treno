//DATI
let etaUtente = prompt("Dammi la tua età");
etaUtente = parseInt(etaUtente);

let kilometriUtente = prompt("Quanti kilometri percorri?");
kilometriUtente = parseInt(kilometriUtente);

const costoKilometro = 0.21;
const scMinorenni = 20;
const scOver65 = 40;
let costoTotaleBiglietto;

//CONTROLLO DATI INSERITI
if (isNaN(etaUtente) || isNaN(kilometriUtente)) {

    console.log(`I dati inseriti non sono corretti per favore inserite un numero`);

} else if (etaUtente < 0) {

    console.log('Inserire un età positiva :P');

} else {

    //LOGICA
    costoTotaleBiglietto = kilometriUtente * costoKilometro;

    if (etaUtente < 18) {
        costoTotaleBiglietto = costoTotaleBiglietto - costoTotaleBiglietto * scMinorenni / 100;

    } else if (etaUtente > 65) {
        costoTotaleBiglietto = costoTotaleBiglietto - costoTotaleBiglietto * scOver65 / 100;
    }

    costoTotaleBiglietto = costoTotaleBiglietto.toFixed(2);
    console.log(`Il costo del biglietto è ${costoTotaleBiglietto}`);

}    