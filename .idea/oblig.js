let bilettArray=[]; //Oppretter et array
function leggTilBiletter(kino) { // for å legge til biletter
    kino.preventDefault();

    //henter verdiene
    let film = document.getElementById('film').value;
    let kvantitet = document.getElementById('film').value;
    let fornavn = document.getElementById('film').value;
    let etternavn = document.getElementById('film').value;
    let telefonnummer = document.getElementById('film').value;
    let email = document.getElementById('film').value;

    if (!validerFilm(film) || !validerKvantitet(kvantitet) || validerNavn(fornavn) || validerEtternvan(etternavn
        || validerTlfNummer(telefonnummer) || validerEmail(email))) {
        return "Det du satte inn ble ikke godkjent";
    }

    let bilett = {
        film: film,
        kvantitet: kvantitet,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnummer: telefonnummer,
        email: email
    };

    //legger til de nye bilettene i arrayet
    bilettArray.push(bilett);

    visBiletter();

    document.getElementById('booking').reset(); //når man trykker slett, fjernes bilettene
}
    function visBiletter() {
        let biletter = document.getElementById('biletter');
        biletter.innerHTML = ''; // tømmer skjemat, før nye bietter blir lagt til

        let ut = "<ul";
        for (let i = 0; i < bilettArray.length; i++) ;
        let billett = bilettArray[i];
        ut += "<li>" + billett.film + " , " + billett.count + " , " + billett.fornavn + " , " + billett.etternavn + " , " +
            billett.telefonnummer + " , " + billett.email + " </li>";
    }

    function slettBillettene(){
    bilettArray=[];
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
    if (!emai) {
        alert("Vennligst fyll ut email-feltet:)")
        return false;
    }
    return true;
}





