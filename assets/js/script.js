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


// Question Bank
let questionBank = [{
    question: 'What is 2 + 2?',
    answers: [{
            text: '4',
            correct: true
        },
        {
            text: '22',
            correct: false
        }
    ],
    question: 'What is 22 + 22?',
    answers: [{
            text: '44',
            correct: true
        },
        {
            text: '32',
            correct: false
        }
    ]
}]