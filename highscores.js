const highScoresList = document.getElementById("highScoresList");
const highScores2 = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores2
    .map(score => {
        return `<li class="high-score"> <i class="fas fa-trophy"></i> ${score.name} - ${score.score}</li>`;
    })
    .join("");


const clearScore = document.getElementById('clear-score');
clearScore.addEventListener('click', clearOldScores());

function clearOldScores (){
    localStorage.clear();
}



