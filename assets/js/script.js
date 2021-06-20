const questionElement = document.getElementById('question');
const questionContainer = document.getElementById('quiz');
const choiceButtons = document.getElementById('choice-container');
const nextButton = document.getElementById('next-button');
const startQuestion = document.getElementById('start-question');
const questionPopupElement = document.getElementById('popup-incorrect');
const score = document.getElementById('score');
const progressText = document.getElementById("progress-text");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion;
let shuffleQuestions;


const MAX_QUESTIONS = 10;

let scorePoints = 0;
window.onload = function beginGame() {
    startQuiz()
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    nextQuestion();
});

// When executed hide Start Button, shows Question container and Shuffle questions. 

function startQuiz() {
    shuffleQuestions = questionBank.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    nextQuestion();
}

// initialize page for new question.
function nextQuestion() {
    if (shuffleQuestions.length >= currentQuestion + 1) {
        resetQuestion();
        showQuestion(shuffleQuestions[currentQuestion]);
        myTimer();
    }
    if ((shuffleQuestions.length == currentQuestion)) {
        localStorage.setItem("mostRecentScore", (scorePoints * 100));
        window.location.assign('/end.html');
    }

    // update the progress text
    progressText.innerText = `Question ${currentQuestion + 1}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(currentQuestion / MAX_QUESTIONS) * 100}%`;
    window.scrollTo(0, document.getElementById('quiz').offsetTop)
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
    } else {
        this.classList.add('wrong');
        wrongAnswer();
    }
    Array.from(choiceButtons.children).forEach(button => {
        button.disabled = true;
    })
}

function wrongAnswer() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none"
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
           }
}


let timer;

function myTimer() {
    if (timer) {
        clearInterval(timer);
    }
    let sec = 10;
    timer = setInterval(function () {
        document.getElementById('timer').innerHTML = '<i class="far fa-clock"></i>' + ' ' + sec + ' ' + "sec left";
        sec--;
        if (sec == -1) {
            clearInterval(timer);
            wrongAnswer();
            Array.from(choiceButtons.children).forEach(button => {
                button.disabled = true;
            })

        }
    }, 1000)
}

// function myTimer() {
//     var sec = 10;
//     var time = setInterval(myTimer, 1000);
//     document.getElementById('timer').innerHTML = '<i class="far fa-clock"></i>' + ' ' + sec + ' ' + "sec left";
//     sec--;
//     if (sec == -1) {
//         clearInterval(time);
//         alert("Time out!! :(");
//         sec = 10;
//         time = setInterval(myTimer, 1000);
//     }
// }

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