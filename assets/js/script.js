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

const MAX_QUESTIONS = 10;

// initialize page for new question.
function nextQuestion() {
    if (shuffleQuestions.length >= currentQuestion + 1)  {
        resetQuestion();
        showQuestion(shuffleQuestions[currentQuestion]);
        myTimer();
    }
    if ((shuffleQuestions.length == currentQuestion) || currentQuestion >= MAX_QUESTIONS) {
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
// Show correct answer after wrong click
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

// Add contdown function 
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

// Question Bank
const questionBank = [{
    question: "I'm going to the country that has the longest coastline in the world",
    answers: [{
            text: 'Canada',
            correct: true
        },
        {
            text: 'Brazil',
            correct: false
        },
        {
            text: 'USA',
            correct: false
        },{
            text: 'Australia',
            correct: false
        }
    ],
    correctText: "Canada's coastline is the world's longest, measuring 243,042 km (includes the mainland coast and the coasts of offshore islands).",
    image: ''
},
    {
        question: "I'll visit a famous volcano that detroyed 5 cities in AD 79 and until nowadays is one of the most dangerous volcanos in the world",
        answers: [{
                text: 'Mount Samalas - Indonesia',
                correct: false
            },
            {
                text: 'Mount Vesuvius - Italy',
                correct: true
            },
			{
                text: 'Mount Unzen - Japan',
                correct: false
            },{
                text: 'Santorini - Greece',
                correct: false
            }
        ],
        correctText: 'The eruption of Mount Vesuvius in AD 79 destroyed the Roman cities of Pompeii, Herculaneum, Oplontis and Stabiae, as well as several other settlements. Today, it is regarded as one of the most dangerous volcanoes in the world because of the population of 3,000,000 people living near enough to be affected by an eruption, with 600,000 in the danger zone, making it the most densely populated volcanic region in the world',
        image: ''
    },

    {
        question: "Dracula famously lived in the historical region of Transylvania – but in what country would I'll find his castle?",
        answers: [{
                text: 'Hungary',
                correct: false
            },
            {
                text: 'Romania',
                correct: true
            },
			{
                text: 'Slovakia',
                correct: false
            },{
                text: 'Czech Republic',
                correct: false
            }
        ],
        correctText: "Bran Castle is a castle in Bran.  It is a national monument and landmark in Transylvania. Commonly known outside Transylvania as Dracula's Castle, it is often referred to as the home of the title character in Bram Stoker's Dracula. There is no evidence that Stoker knew anything about this castle, which has only tangential associations with Vlad the Impaler, voivode of Wallachia, the putative inspiration for Dracula. Stoker's description of Dracula's crumbling fictional castle also bears no resemblance to Bran Castle.",
        image: 'assets/images/bran-castle.jpg'
    },

{
    question: "I'll finally visit the city where Antonio Gaudi's Holy Family Basilica is located!",
        answers: [{
                text: 'Madrid',
                correct: false
            },
            {
                text: 'Sevilha',
                correct: false
            },
			{
                text: 'Bilbau',
                correct: false
            },{
                text: 'Barcelona',
                correct: true
            }
        ],
        correctText: "The Basílica de la Sagrada Família ('Basilica of the Holy Family'), also known as the Sagrada Família, is a large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by the Spanish architect Antoni Gaudí (1852–1926), his work on the building is part of a UNESCO World Heritage Site.",
        image: 'assets/images/holy-family.jpg'
    },
    {question: "I'm headed to the African country that has the largest population! ",
    answers: [{
            text: 'South Africa',
            correct: false
        },
        {
            text: 'Egypt',
            correct: false
        },
        {
            text: 'Nigeria',
            correct: true
        },{
            text: 'Angola',
            correct: false
        }
    ],
    correctText: "As the most populous nation in Africa, Nigeria is home to over 206 million inhabitants. Each year, its population increases by nearly 5.5 million. With 2.64% of the world’s population, Nigeria is the seventh most populous country worldwide.",
    image: 'assets/images/nigeria.jpg'
},
{
    question: "I'm about to go to Maho Beach, famous for its proximity to the island's international airport. Where am I going to?",
        answers: [{
                text: 'San Martin',
                correct: true
            },
            {
                text: 'Bahamas',
                correct: false
            },
			{
                text: 'Aruba',
                correct: true
            },{
                text: 'Dominican Republic',
                correct: false
            }
        ],
        correctText: "Due to the unique proximity of low-flying airliners arriving and departing from Princess Juliana International Airport, the location is popular with plane spotters. This is one of the few places in the world where aircraft can be viewed in their flight path just outside the end of the runway. Watching airliners pass over the beach is such a popular activity that daily arrivals and departures airline timetables are displayed on a board in most bars and restaurants on the beach.",
        image: 'assets/images/maho-beach.jpg'
}
];