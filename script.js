//Rock paper scissors game

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection, puntosJugador, puntosMaquina) {
    if (playerSelection == computerSelection) {
        return ["It's a tie!", puntosJugador, puntosMaquina];
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            puntosMaquina++;
            return ["You lose! Paper beats rock", puntosJugador, puntosMaquina];
        } else {
            puntosJugador++;
            return ["You win! Rock beats scissors", puntosJugador, puntosMaquina];
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            puntosMaquina++;
            return ["You lose! Scissors beats paper", puntosJugador, puntosMaquina];
        } else {
            puntosJugador++;
            return ["You win! Paper beats rock", puntosJugador, puntosMaquina];
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            puntosMaquina++;
            return ["You lose! Rock beats scissors", puntosJugador, puntosMaquina];
        } else {
            puntosJugador++;
            return ["You win! Scissors beats paper", puntosJugador, puntosMaquina];
        }
    }
}

const resultado = document.querySelector('#resultado');
const ganador = document.querySelector('#ganador');
const puntos = document.querySelector('#puntos');
const buttons = document.querySelectorAll('.button');
let puntosJugador = 0; //TODO: Ver por que no se resetean estos valores cuando recargo la pagina
let puntosMaquina = 0;
buttons.forEach(button => button.addEventListener('click', function (e) {
    let hayGanador = false;
    console.log(button.id);
    let ronda = playRound(button.id, computerPlay(), puntosJugador, puntosMaquina);
    let result = ronda[0];
    puntosJugador = ronda[1];
    puntosMaquina = ronda[2];
    resultado.textContent = result;
    puntos.textContent = "Puntos: " + puntosJugador + " - " + puntosMaquina;
    if (puntosJugador == 5) {
        disableAllButtons();
        ganador.textContent = "Ganaste pibe";
        puntosJugador = 0;
        puntosMaquina = 0;
    } else if (puntosMaquina == 5) {
        disableAllButtons();
        ganador.textContent = "Te ganó la máquina";
        puntosJugador = 0;
        puntosMaquina = 0;
    }

}));

function disableAllButtons() {
    buttons.forEach(button => button.disabled = true);
}



