const highScoresList = document.getElementById("highScoresList");
const highScores2 = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores2
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score*100}</li>`;
    })
    .join("");

saveScoreBtn.disabled = true;

