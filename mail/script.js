// dichiarazini costanti globali
const accedi = document.getElementById('btnAccedi');
const emailPermesse = ["ciao@gmail.com", "mario@gmail.com", "luigi@gmail.com", "mail@gmail.com"];


accedi.addEventListener(
    'click',
    
    function() {

        //dichiarazioni costanti
        const element = document.getElementById('mail').value;
        console.log(element)

        let accesso = false;

        for (let i = 0; i < emailPermesse.length; i++) {

            if (element == emailPermesse[i]) {
                accesso = true;
            }

        }

        if (accesso == true) {
            alert("accesso consentito");
        } else {
            alert("accesso negato");
        }

    }
)