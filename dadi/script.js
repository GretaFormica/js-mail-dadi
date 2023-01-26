//dichiarazioni costanti e variabili globali
const sfida = document.getElementById('btnSfida');

sfida.addEventListener(
    'click',
    
    function() {
        let pcNum = Math.floor(Math.random() * 6) + 1;
        const userNum = Math.floor(Math.random() * 6) + 1;

        if(userNum > pcNum) {
            //output
            document.getElementById('risultato').innerHTML= `Complimenti! hai tirato: ${userNum} e il pc ha fatto: ${pcNum}
            <br>
            Hai vinto!`;
        } else if (userNum == pcNum){
            //output
            document.getElementById('risultato').innerHTML= `Pareggio! entrambi avete fatto ${pcNum}`;
        } else {
            //output
            document.getElementById('risultato').innerHTML= `Mi dispiace! hai tirato: ${userNum} e il pc ha fatto: ${pcNum}
            <br>
            Hai perso`;
        }
    }

  
)




