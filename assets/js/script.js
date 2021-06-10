const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const questionContainer = document.getElementById('quiz');
const choiceButtons = document.getElementById('choice-container');
const nextButton = document.getElementById('next-button')
const startQuestion = document.getElementById('start-question')

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})
// When executed hide Start Button, shows Question container and Shuffle questions. 

function startQuiz() {
    startButton.classList.add('hide')
    startQuestion.classList.add('hide')
    questionContainer.classList.remove('hide')
    shuffleQuestions = questionBank.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()
}

// initialize page for new question.
function nextQuestion() {
    resetQuestion()
    showQuestion(shuffleQuestions[currentQuestion])
}

//Receive question with answers and outputs buttons for each answer
function showQuestion(pQuestion) {
    questionElement.innerText = pQuestion.question
    pQuestion.answers.forEach(answer => {
        const answerButton = document.createElement('button')
        answerButton.innerText = answer.text
        answerButton.classList.add('button')
        choiceButtons.appendChild(answerButton)
    })
}

// Add hide on next button and clean buttons from previous question
function resetQuestion() {
    nextButton.classList.add('hide')
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild)
    }
}
function selectedAnswer (a) {
    const selectedButton = a.target
    const correct = selectedButton.dataset.correct
    answerStatus(document.body,correct)
    Array.from(choiceButtons.children).forEach(button => {
        answerStatus(button,button.dataset.correct)
    })

    if (shuffleQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.classList.remove('hide')
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
        ]
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
        ]
    }
]