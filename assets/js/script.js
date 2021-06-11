const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const questionContainer = document.getElementById('quiz');
const choiceButtons = document.getElementById('choice-container');
const nextButton = document.getElementById('next-button')
const scoreButton = document.getElementById('score-button')
const startQuestion = document.getElementById('start-question')
const questionPopupElement = document.getElementById('popup-incorrect')
const scorePopupElement = document.getElementById('popup-incorrect')

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

//Close incorrect answer div onClick
function closeDiv() {
    questionPopupElement.classList.add('hide')
    nextButton.classList.remove('hide')

}
//Receive question with answers and outputs buttons for each answer
function showQuestion(pQuestion) {
    questionElement.innerText = pQuestion.question
    questionPopupElement.innerText = pQuestion.correctText
    pQuestion.answers.forEach(answer => {
        const answerButton = document.createElement('button')
        answerButton.innerText = answer.text
        answerButton.classList.add('button')
        choiceButtons.appendChild(answerButton)

        if (answer.correct) {
            answerButton.dataset.correct = answer.correct
        }
        answerButton.addEventListener('click', selectedAnswer)
    })
}

// Add hide on next button and clean buttons from previous question
function resetQuestion() {
    nextButton.classList.add('hide')
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild)
    }
}

function selectedAnswer(a) {
    const selectedButton = a.target
    const correct = selectedButton.dataset.correct

    Array.from(choiceButtons.children).forEach(button => {
        answerStatus(button, button.dataset.correct)
    })

    //show popup with correct answer and close it with a click
    if (!correct) {
        questionPopupElement.classList.remove('hide')
        questionPopupElement.addEventListener('click', closeDiv)
    }
    //show nextbutton if the answer is correct
    if (correct) {
        nextButton.classList.remove('hide')
    }
    // if (shuffleQuestions.length > currentQuestion +1) {
    // nextButton.classList.remove('hide')
    //} else {
    //function to open score-popup with resetand hide game div. 
    //}
}

function answerStatus(element, correct) {
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
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
        correctText: 'teste teste teste test teste'
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
        correctText: 'teste teste teste test teste'
    }
]