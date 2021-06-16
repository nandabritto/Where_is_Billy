//const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const questionContainer = document.getElementById('quiz');
const choiceButtons = document.getElementById('choice-container');
const nextButton = document.getElementById('next-button');
//const scoreButton = document.getElementById('score-button');
const startQuestion = document.getElementById('start-question');
const questionPopupElement = document.getElementById('popup-incorrect');
const score = document.getElementById('score');


let currentQuestion;
let shuffleQuestions;

let scorePoints = 0;
window.onload = function beginGame() {

    startQuiz()
}
//startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestion++;
    nextQuestion();
});

//start quiz when window loaded


// When executed hide Start Button, shows Question container and Shuffle questions. 

function startQuiz() {
   // startButton.classList.add('hide');
   // startQuestion.classList.add('hide');
   // questionContainer.classList.remove('hide');
    shuffleQuestions = questionBank.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    nextQuestion();
}

// initialize page for new question.
function nextQuestion() {
    if (shuffleQuestions.length >= currentQuestion + 1) {
        resetQuestion();
        showQuestion(shuffleQuestions[currentQuestion]);
    }
    if ((shuffleQuestions.length == currentQuestion)) {
      //  const scoreButton = document.getElementById('score-button');
        //scoreButton.classList.remove('hide');
        localStorage.setItem("mostRecentScore", (scorePoints*100));
        window.location.assign('/end.html');
       // nextButton.classList.add('hide');
    }

}

//Close incorrect answer div onClick
function showNextButton() {
    questionPopupElement.classList.add('hide');
    

    if (shuffleQuestions.length >= currentQuestion + 1) {
        nextButton.classList.remove('hide');
    } else {
        window.location.assign('/end.html')}
       // scoreButton.classList.remove('hide');
    
}
//Receive question with answers and outputs buttons for each answer
function showQuestion(pQuestion) {
    questionElement.innerText = pQuestion.question;
    questionPopupElement.innerText = pQuestion.correctText;
    const questionImage = document.getElementById("question-image");
    questionImage.src = pQuestion.image;
    pQuestion.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.innerText = answer.text;
        answerButton.classList.add('button');
        choiceButtons.appendChild(answerButton);

        if (answer.correct) {
            answerButton.dataset.correct = answer.correct;
        }
        answerButton.addEventListener('click', selectedAnswer);
    });
}

// Add hide on next button and clean buttons from previous question
function resetQuestion() {
   // nextButton.classList.add('hide');
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild);
    }


}
// target on selected asnwer and style it correct or wrong 
function selectedAnswer(a) {
    const selectedButton = a.target;
    const correct = selectedButton.dataset.correct;

    if (correct) {
        this.classList.add('correct');
        scorePoints++;
        //score.innerText = scorePoints;
    } else {
        this.classList.add('wrong');
    }

    Array.from(choiceButtons.children).forEach(button => {
        button.disabled = true;

    });

    //show popup with correct answer and close it with a click
    if (!correct) {
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName('close')[0];
        modal.style.display = "block";
       // questionPopupElement.classList.remove('hide');
        span.onclick = function () {
            modal.style.display = "none"
            showNextButton();

        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none"
                showNextButton();
            }
        }

    }
    //show nextbutton if the answer is correct
    else {
       // nextButton.classList.remove('hide');
    }
}

// Question Bank
const questionBank = [{
        question: 'Where is Cristo Redentor?',
        answers: [{
                text: 'Rio de Janeiro',
                correct: true
            },
            {
                text: 'Sao Paulo',
                correct: false
            }
        ],
        correctText: 'teste teste teste test teste',
        image: 'assets/images/sp.jpg'
    },
    {
        question: 'Where can I find Torre de Belem?',
        answers: [{
                text: 'Lisbon',
                correct: true
            },
            {
                text: 'Porto',
                correct: false
            },
            {
                text: 'London',
                correct: false
            },
            {
                text: 'Dublin',
                correct: false
            }
        ],
        correctText: 'teste teste teste test teste',
        image: 'assets/images/teste.jpg'
    },

    {
        question: 'Where can I find Spire?',
        answers: [{
                text: 'Lisbon',
                correct: false
            },
            {
                text: 'Porto',
                correct: false
            },
            {
                text: 'London',
                correct: false
            },
            {
                text: 'Dublin',
                correct: true
            }
        ],
        correctText: 'teste teste teste test teste',
        image: 'assets/images/teste.jpg'
    }
];