let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById(`textOutput`);
let userNumberUpdate = document.getElementById(`inputBox`);
let audio = new Audio("a1.mp3");

const randomNumberGenerate = () => {
    computerGuess = Math.floor(Math.random() * 100)
};

document.getElementById(`newGameButton`).style.display = `none`;
document.getElementById(`gameArea`).style.display = `none`;


const startGame = () => {
    document.getElementById(`wellcome-screen`).style.display = `none`;
    document.getElementById(`gameArea`).style.display = `block`;
}
//  Reload the page

const newGameBegin=()=>{
    window.location.reload();
    audio.play();
    
}
// start new game
 
const startNewGame = () => {
    document.getElementById(`newGameButton`).style.display = `inline`;
    userNumberUpdate.setAttribute(`disabled`, true);
   
};

// Main logic of our app

const compareGuess = () => {
    const userNumber = Number(document.getElementById(`inputBox`).value);
    audio.play();

    userGuess = [...userGuess, userNumber];
    document.getElementById(`Guesses`).innerHTML = userGuess;

    // check value low or high
    if (userGuess.length < maxGuess) {

        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `Youe guess is high 😆`;
            userNumberUpdate.value = ``;
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `Your guess is low 😒`;
            userNumberUpdate.value = ``;
        } else {
            userGuessUpdate.innerHTML = `Congratulation 💕`;
            userNumberUpdate.value = ``;
            startNewGame();
        }

    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You loose !! correct number was ${computerGuess}😆`;
            userNumberUpdate.value = ``;
            startNewGame();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You loose !! correct number was ${computerGuess}😆`;
            userNumberUpdate.value = ``;
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = `Congratulation 💕`;
            userNumberUpdate.value = ``;
            startNewGame();
        }
    }
    document.getElementById(`attempts`).innerHTML = userGuess.length;

};



const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};


const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};