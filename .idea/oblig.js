
let bilettArray=[];
function validerSkjema(kino){
    kino.preventDefault(

        let film=document.getElementById('film').value;
        let kvantitet=document.getElementById('film').value;
        let fornavn=document.getElementById('film').value;
        let etternavn=document.getElementById('film').value;
        let telefonnummer=document.getElementById('film').value;
        let email=document.getElementById('film').value;

        if (film && kvantitet && fornavn && etternavn && telefonnummer && email) {
            let bilett = {
                film: film,
                kvantitet: kvantitet,
                fornavn: fornavn,
                etternavn: etternavn,
                telefonnummer: telefonnummer,
                email: email
            };
            bilettArray.push(bilett);

        }
