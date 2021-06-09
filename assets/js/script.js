const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const questionContainer = document.getElementById('quiz');
const choiceButtons = document.getElementById('choice-container');

startButton.addEventListener('click', startQuiz)

// When executed hide Start Button, shows Question container and Shuffle questions. 

function startQuiz() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    shuffleQuestions = questionBank.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()
}

// initialize page for new question.
function nextQuestion() {
//    resetState()
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
    ]
}]