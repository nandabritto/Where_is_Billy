const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const questionContainer = document.getElementById('quiz');
const choiceButtons = document.getElementById('choice-container');

startButton.addEventListener('click', startQuiz )

function startQuiz() {
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
}







let questions = [{
        question: 'test1',
        choice1: '2',
        choice2: '6',
        choice3: '8',
        choice4: '9',
        answer: 6,
    },
    {
        question: 'test2',
        choice1: 'oi',
        choice2: 'tudo',
        choice3: 'bem',
        choice4: 'contigo',
        answer: oi,
    }
]

