let win = 20
let defeat = 5
let rank = rankeadas(win, defeat)
let level = setLevel(rank)

function rankeadas(win, defeat){
    return win - defeat
}

function setLevel(rank) {
    let level = ""
    if (rank <= 10) {
        level = "Ferro"
    }else if (rank >= 11 && rank <=20 ) {
        level="Bronze"
    }else if (rank >= 21 && rank <=50 ) {
        level="Prata"
    }else if (rank >= 51 && rank <=80 ) {
        level="Ouro"
    }else if (rank >= 81 && rank <=90 ) {
        level="Diamante"
    }else if (rank >= 91 && rank <=100 ) {
        level="Lendário"
    }else if (rank >= 101 ) {
        level="Imortal"
    }
    return level
}


console.log(`O Herói tem de saldo de ${rank} está no nível de ${level}`)