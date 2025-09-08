//selezione input
let inputForm = document.getElementById("answers-form");
let inputUser = document.querySelectorAll("input")
let buttonSub = document.getElementById("btn");




//generazione numeri random
function numRandomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che genera un array di tot numeri in un range
function arrayUniqueNumbers(numMin, numMax, numberElements) {
    //creo array vuoto di partenza
    let array = [];
    //ciclo l'array creato fino a che è più corto di numberElements
    for (let i = 0; i < numberElements; i++) {
        //genero un numero random in un range
        let nuovoNumero = numRandomGen(numMin, numMax);
        //verifico se nuovo numero è incluso nell'array creato
        //SE NON è vero
        //lo pusho nell'array creato
        if (!array.includes(nuovoNumero)) {
            array.push(nuovoNumero);
        }
        //ritorno l'array creato
    } return array;
}



