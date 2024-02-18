let bilettArray=[]; //Oppretter et array

//Validering av telefonnummer og email
let tRegex = /^\d{8}$/; //tlf-nummeret må inkl. 8 sifre
let eRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//hentes fra html
let bSkjema = document.getElementById("Bookingskjema");
let bListe = document.getElementById("Biletter");
let bekreftelse = document.getElementById("bekreftelse");
let kjøpBilett = document.getElementById("kjøpBilett");
let slettBiletter = document.getElementById("slettBiletter");

//validering av hele skjema
function validerSkjema(film, kvantitet, fornavn, etternavn, telefonnummer, email) {
    if (!film || !kvantitet || !fornavn || !etternavn || !telefonnummer || !email) {
        alert("Vennligst fyll ut alle feltene før du sender skjemaet.");
        return false; // Skjemaet sendes ikke hvis det er tomme felt
    }

    return true; // Skjemaet sendes hvis alle felt er fylt ut
}
function leggTilBiletter(event) { // for å legge til biletter
    event.preventDefault();

    //henter verdiene fra html
    let film = document.getElementById("film").value;
    let kvantitet = document.getElementById("kvantitet").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnummer = document.getElementById("telefonnummer").value;
    let email = document.getElementById("email").value;

    //validering og meldinger for validering
    if (!tRegex.test(telefonnummer)){
        alert("Ugyldig tlf-nummer, prøv igjen :)");
        return;
    }

    if (!eRegex.test(email)){
        alert("Ugyldig email, prøv igjen :)");
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
    alert("Bestillingen er registrert, takk for kjøpet :) " +
        "du finner oversikt over dine biletter nederst på siden ");

    visBiletter(); //biletter vises

    bSkjema.reset(); // når trykker send, tilbakestilles skjema
}
//for å vise bilettene
function visBiletter() {
    let ut = "<ul>";
    for (let i = 0; i < bilettArray.length; i++) {
        let bilettListe= bilettArray[i];
        ut += "<li> Film: "+ bilettListe.film + " | Antall biletter : " + bilettListe.kvantitet +  " | email: " + bilettListe.email + "</li>";
    }
    ut += "</ul>";
    bListe.innerHTML = ut;
}
//for å kunne slette alle bilettene
function slettBillettene() {
    bilettArray = [];
    visBiletter();
}
//for å håndtere skjemasending, kjøpe med klikk og slette med klikk
bSkjema.addEventListener("submit", leggTilBiletter);
kjøpBilett.addEventListener("click", function () {
    leggTilBiletter();
});
slettBiletter.addEventListener("click", slettBillettene);





