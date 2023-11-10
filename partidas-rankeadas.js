let saldoVitorias = partidasRankeadas(80, 20)
let classificacaoNivel = nivelHeroi (saldoVitorias)

function partidasRankeadas (vitorias, derrotas){
return vitorias-derrotas
}

function nivelHeroi(nivel) {
    let classificacao = ["Ferro", "Bronze", "Prata", "Ouro" , "Diamante" , "Lendário" , "Imortal"]

    if (nivel<10){
    return classificacao[0]
    }
    else if ((nivel>=11) && (nivel <=20)){
    return classificacao[1]
    }
    else if ((nivel>=21) && (nivel <=50)){
    return classificacao[2]
    }
    else if ((nivel>=51) && (nivel <=80)){
    return classificacao[3]
    }
    else if ((nivel>=81) && (nivel <=90)){
    return classificacao[4]
    }
    else if ((nivel>=91) && (nivel <=100)){
    return classificacao[5]
    }
    else if (nivel>=101){
    return classificacao[6]
    }
}

console.log("O herói tem o saldo de " + saldoVitorias + " e está no nível de " + classificacaoNivel)
