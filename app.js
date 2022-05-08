let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");

/* const user_label = document.querySelector(".badge");
const computer_label = document.getElementById("computer-label"); */

function getComputerChoice() {
    const choices = ['r', 'p', 's','l','sp'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    return "Spock";
}

function winScissors(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} cuts ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function winPaper(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} covers ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function winRock(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} crushes ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function winLizardSpock(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} poisons ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function winSpockScissors(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} smashes ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function winScissorsLizard(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} decapitates ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function winLizardPaper(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} eats ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function winPaperSpock(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} disproves ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function winSpockRock(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} vaporizes ${convertToWord(computerChoice)}  <br> Bazinga!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function loseScissorsPaper(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} cuts ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function loseScissorsLizard(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} decapitates ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function losePaperRock(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} covers ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function losePaperSpock(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} disproves ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function loseRock(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} crushes ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function loseLizardSpock(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} poisons ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function loseLizardPaper(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} eats ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function loseSpockScissors(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} smashes ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function loseSpockRock(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} vaporizes ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)} <br> Well, that's no reason to cry!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function draw(userChoice) {
    result_div.innerHTML = "It's a draw! <br> No cuts, no buts, no coconuts!"
    document.getElementById(userChoice).classList.add('white-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('white-glow') }, 500)
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch(userChoice + computerChoice) {
        case "rs":
            winRock(userChoice, computerChoice);
            break
        case "rl":
            winRock(userChoice, computerChoice);
            break
        case "pr":
            winPaper(userChoice, computerChoice);
            break
        case "psp":
            winPaperSpock(userChoice, computerChoice);
            break
        case "sp":
            winScissors(userChoice, computerChoice);
            break
        case "sl":
            winScissorsLizard(userChoice, computerChoice);
            break
        case "lsp":
            winLizardSpock(userChoice, computerChoice);
            break
        case "lp":
            winLizardPaper(userChoice, computerChoice);
            break
        case "sps":
            winSpockScissors(userChoice, computerChoice);
            break
        case "spr":    
            winSpockRock(userChoice, computerChoice);
            break
        case "sr":
            loseRock(userChoice, computerChoice);
            break
        case "lr":
            loseRock(userChoice, computerChoice);
            break
        case "rp":
            losePaperRock(userChoice, computerChoice);
            break
        case "spp":
            losePaperSpock(userChoice, computerChoice);
            break
        case "ps":
            loseScissorsPaper(userChoice, computerChoice);
            break
        case "ls":
            loseScissorsLizard(userChoice, computerChoice);
            break
        case "spl":
            loseLizardSpock(userChoice, computerChoice);
            break
        case "pl":
            loseLizardPaper(userChoice, computerChoice);
            break
        case "ssp":
            loseSpockScissors(userChoice, computerChoice);
            break
        case "rsp":
            loseSpockRock(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spsp":
            draw(userChoice);
            break;

    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
    lizard_div.addEventListener('click', function() {
        game("l");
    })
    spock_div.addEventListener('click', function() {
        game("sp");
    })
}

main();
