const p1 = {
    score: 0,
    display: document.querySelector('#p1ScoreDisplay'),
    button: document.querySelector('#p1Button')
};

const p2 = {
    score: 0,
    display: document.querySelector('#p2ScoreDisplay'),
    button: document.querySelector('#p2Button')
};

const resetButton = document.querySelector('#reset');
const numberOfRounds = document.querySelector('#numberOfRounds');

let isGameOver = false;
let totalScore = parseInt(numberOfRounds.value);


function resetScore() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

numberOfRounds.addEventListener('change', function () {
    totalScore = parseInt(this.value);
    resetScore();
});

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === totalScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});
resetButton.addEventListener('click', resetScore);