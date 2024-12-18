let resultado = calculandoRanking(103,1)
console.log(`O heroi tem saldo de **${resultado[1]}** está no nivel **${resultado[0]}**`)

function calculandoRanking(vitorias , derrotas){
    let calculo = vitorias - derrotas 
    let ranking = [0,calculo]

    if(calculo<10){
        ranking[0] = "Ferro"
    }
    else if(calculo>10 && calculo<=20){
        ranking[0] = "Bronze"
    }
    else if(calculo>20 && calculo<=50){
        ranking[0] = "Prata"
    }
    else if(calculo>50 && calculo<=80){
        ranking[0] = "Ouro"
    }
    else if(calculo>80 && calculo<=90){
        ranking[0] = "Diamente"
    }
    else if(calculo>90 && calculo<=100){
        ranking[0] = "Lendario"
    }
    else{
        ranking[0] = "Imortal"
    }
    return ranking
}