function verificaChuteValorValido (chute){
    const numero = +chute //Transforma o número que eu falei de string em número inteiro

    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += 
       '<div>Valor Invalido</div>'
       return //Para essa função
    }

    if (numeroForMaiorOuMenor(numero)){
        elementoChute.innerHTML += 
        `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += 
        `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        ` 
    } else {
        elementoChute.innerHTML += 
        `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        ` 
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero); //Método para verificar se é um número ou não
}

function numeroForMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload() //Recarrega a página
    }
})