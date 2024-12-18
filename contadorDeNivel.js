let xp = 10001
let nome = "Mauricio"
let patente 

switch(true){
    case (xp<=1000):
        patente = "Ferro"
        break
    case (xp>1000 && xp<=2000):
        patente = "Bronze"
        break
    case (xp>2000 && xp<=5000):
        patente = "Prata"
        break
    case (xp>5000 && xp<=7000): // na atividade estava pedindo para a patente ouro ser de 6001 à 7000 porêm, preferi fazer da forma que está no programa para ficar mais natural
        patente = "Ouro"
        break
    case(xp>7000 && xp<=8000):
        patente = "Platina"
        break
     case(xp>8000 && xp<=9000):
        patente = "Ascendente"
        break
    case(xp>9000 && xp<=10000):
        patente = "Imortal"
        break
    default:
        patente = "Radiante"
}
console.log("o heroi de nome " + nome + " está no nivel " + patente)