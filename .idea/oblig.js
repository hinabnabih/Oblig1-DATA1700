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


    if (film && kvantitet && fornavn && etternavn && telefonnummer && email) { //if-setning som passer på at alle felt er fylt ut
        //når flere biletter blir bestilt
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
        fordelBiletter();
        document.getElementById('booking').reset(); //når man trykker slett, fjernes bilettene
        visBiletter();
        aler("Billeten er regisrert! Takk for bestillingen :)")
    } else {
        alert("Du må fylle ut alle felter :)"); //feilmeldingen hvis ikke alle felt er fylt ut
    }
}
function visBiletter(){
    let biletter=document.getElementById('biletter');
    biletter.innerHTML=''; // tømmer skjemat, før nye bietter blir lagt til
}

