const startButton = document.getElementById("startButton");
const splash = document.getElementById("splash");
const game = document.getElementById("game");
let diceImg = document.getElementById("diceImg");
const rollButton = document.getElementById("rollButton");
let score = 0;
let totalScore = document.getElementById("totalScore");
const gameOver = document.getElementById("gameOver");
const restartButton = document.getElementById("restartButton");

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

startButton.addEventListener("click", () => {
    splash.style.display = "none";
    game.style.display = "flex";
})

const diceGame = async () => {
    roll = Math.floor(Math.random() * 6) + 1
    if (roll == 1) {
        rollButton.disabled = true;
        rollButton.textContent = "YOU LOST";
        diceImg.src = "images/dice1.png";
        await sleep(5000);
        game.style.display = "none";
        gameOver.style.display = "flex";
    } else {
        diceImg.src = `images/dice${roll}.png`;
        score += roll;
        totalScore.textContent = score;
    }

    if (score >= 20) {
        rollButton.disabled = true;
        rollButton.textContent = "YOU WON";
        await sleep(5000);
        game.style.display = "none";
        gameOver.style.display = "flex";
    }

}

rollButton.addEventListener("click", diceGame);
restartButton.addEventListener("click", () => {
    gameOver.style.display = "none";
    splash.style.display = "flex";
    score = 0;
    totalScore.textContent = score;
    rollButton.disabled = false;
    rollButton.textContent = "ROLL!"
    diceImg.src = "images/dice.png";
})