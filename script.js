let visor = document.getElementById("Visor");

function adicionar(valor) {
    visor.value += valor;
}

function limpar() {
    visor.value = "";
}

function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (err) {
        visor.value = "Erro"
    }
}