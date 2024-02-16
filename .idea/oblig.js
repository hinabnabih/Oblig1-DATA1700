let bilettArray=[]; //Oppretter et array

function leggTilBiletter(event) { // for å legge til biletter
    event.preventDefault();

    //henter verdiene
    let film = document.getElementById('film').value;
    let kvantitet = document.getElementById('film').value;
    let fornavn = document.getElementById('film').value;
    let etternavn = document.getElementById('film').value;
    let telefonnummer = document.getElementById('film').value;
    let email = document.getElementById('film').value;

    //Input for valideringene
    if (!validerFilm(film) || !validerAntall(kvantitet) || validerNavn(fornavn) || validerEtternvan(etternavn
        || validerTlfNummer(telefonnummer) || validerEmail(email))) {
         alert ("Det du satte inn ble ikke godkjent");
         return;
    }

    let billett = {
        film: film,
        kvantitet: kvantitet,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnummer: telefonnummer,
        email: email
    };

    //legger til de nye bilettene i arrayet
    bilettArray.push(billett);

    visBiletter();

    document.getElementById('booking').reset(); //når man trykker slett, fjernes bilettene
}
    function visBiletter() {
        let bilettListe = document.getElementById('Bilettliste');
        bilettListe.innerHTML = ''; // tømmer skjemat, før nye bietter blir lagt ti
        bilettArray.forEach(billett => {
            bilettListe.innerHTML += "<li>"+ billett.film + billett.kvantitet + billett.fornavn + billett.etternavn  +
                billett.telefonnummer + billett.email + " </li>";
        });
    }


//lager en inputvalidering for hvert felt:
    function slettBillettene() {
        bilettArray = [];
        visBiletter();
    }
    function validerFilm(film) {
        if (!film) {
            alert("Vennligst full ut filmfeltet :)")
            return false
        }
        return true;
    }
    function validerAntall(kvantitet){
    if (!kvantitet || kvantitet<=0){
        alert("Sett inn et ordentlig tall (postivt)")
        return false
    }
    return true;
}
function validerNavn(fornavn) {
    if (!fornavn) {
        alert("Vennligst fyll ut navnfeltet :)")
        return false;
    }
    return true;
}
function validerTlfNummer(telefonnummer) {
    if (!telefonnummer) {
        alert("Vennligst fyll ut tlf-feltet :)")
        return false;
    }
    return true;
}
function validerEmail(email) {
    if (!email) {
        alert("Vennligst fyll ut email-feltet:)")
        return false;
    }
    return true;
}






