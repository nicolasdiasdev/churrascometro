
let inputAdulto = document.getElementById("adulto");
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");


function calcular() {

    let adulto = inputAdulto.value;
    let crianca = inputCrianca.value;
    let duracao = inputDuracao.value;

    let resultado = document.getElementById("resultado")

    let qtdCarne = carnePP(duracao)  * adulto  + (carnePP(duracao)* crianca);
    let qtdCerveja = adulto * cervejaPP(duracao);
    let qtdBebidas = adulto * bebidasPP(duracao) + (bebidasPP(duracao) * crianca);

    resultado.innerHTML = `<p> ${qtdCarne /1000} Kg de carne`;
    resultado.innerHTML += `<p> ${Math.ceil(qtdCerveja /355)} Latas de cerveja`;
    resultado.innerHTML += `<p> ${qtdBebidas / 1000} Litros de Bebidas `;
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 450
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 2500
    } else {
        return 1500
    }
}