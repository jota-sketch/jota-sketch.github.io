const texto = 'SAY MY NAME';
const elemento = document.getElementById("texto-digitando");

let i = 0;
let apagando = false;

function efeitoDigitacao() {
    if (!apagando) {
        // DIGITANDO
        elemento.innerHTML = texto.substring(0, i + 1);
        i++;

        if (i === texto.length) {
            apagando = true;
            setTimeout(efeitoDigitacao, 1500); // pausa antes de apagar
            return;
        }
    } else {
        // APAGANDO
        elemento.innerHTML = texto.substring(0, i - 1);
        i--;

        if (i === 0) {
            apagando = false;
        }
    }

    setTimeout(efeitoDigitacao, apagando ? 40 : 60);
}

efeitoDigitacao();