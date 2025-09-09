//selezione elementi DOM
let inputForm = document.getElementById("answers-form");
let inputUser = document.querySelectorAll("input")
let buttonSub = document.getElementById("btn");
let randomNumbers = document.getElementById("numbers-list");
let conta = document.getElementById("countdown");
let message = document.getElementById("message");
let instructions = document.getElementById("instructions");

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
        } else {
            i--;
        }
    }
    //ritorno l'array creato
    return array;
}

// Resetto input a ogni refresh
window.onload = function () {
    inputForm.reset();
};

//variabile numeri generati
const numbers = arrayUniqueNumbers(1, 50, 5);
//durata timer secondi
const countSec = 30;
//variabile tempo rimanente
let timeLeft = countSec;

//visualizzazione numeri generati
numbers.forEach(number => {
    const li = document.createElement("li");
    li.textContent = number;
    randomNumbers.appendChild(li);
});

//funzione per timer
// Imposta il numero del countdown
conta.textContent = `${timeLeft}`;

const timer = setInterval(() => {
    timeLeft--;
    conta.textContent = `${timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(timer);

        // Nascondi i numeri
        randomNumbers.classList.add('d-none');
        // Mostra il form
        inputForm.classList.remove('d-none');
        //istruzioni aggiornate
        instructions.textContent = 'Inserisci tutti i numeri che ricordi (l\'ordine non è importante)';
    }
}, 1000);

//gestione form con submit del bottone all'interno
inputForm.addEventListener('submit', (event) => {
    // Evita che la pagina si ricarichi
    event.preventDefault();

    //array con numeri dell'utente
    const userNumbers = [];
    inputUser.forEach(input => {
        userNumbers.push(parseInt(input.value));
    });

    //Confronto numeri dell'utente con quelli generati
    //variabile array
    const numbersCorrect = [];
    const numbersWrote = [];
    //li pusho nell'array giusto
    userNumbers.forEach(userNum => {
        if (numbers.includes(userNum) && !numbersWrote.includes(userNum)) {
            numbersCorrect.push(userNum);
            numbersWrote.push(userNum);
        }
    });

    //Risultato finale
    if (numbersCorrect.length > 0) {
        message.textContent = `Hai indovinato ${numbersCorrect.length} numeri: ${numbersCorrect.join(', ')}.`;
    } else {
        message.textContent = `Hai indovinato 0 numeri.`;
    }
});