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
    if (shuffleQuestions.length >= currentQuestion + 1) {
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
   }

function initMap() {};

//Receive question with answers and outputs buttons for each answer
function showQuestion(pQuestion) {
    questionElement.innerText = pQuestion.question;
    questionPopupElement.innerText = pQuestion.correctText;
    const questionImage = document.getElementById("question-image");
    questionImage.src = pQuestion.image;

    // add google maps api on wrong answer container
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: parseFloat(pQuestion.lat),
            lng: parseFloat(pQuestion.lng),
        },
        zoom: 15,
        mapTypeId: "satellite",
    });
   
    new google.maps.Marker({
        position: {
            lat: parseFloat(pQuestion.lat),
            lng: parseFloat(pQuestion.lng)
        },
        map,
        title: (pQuestion.mark),
    })


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
        //go to nextQuestion()
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
            }, {
                text: 'Santorini - Greece',
                correct: false
            }
        ],
        correctText: 'The eruption of Mount Vesuvius in AD 79 destroyed the Roman cities of Pompeii, Herculaneum, Oplontis and Stabiae, as well as several other settlements. Today, it is regarded as one of the most dangerous volcanoes in the world because of the population of 3,000,000 people living near enough to be affected by an eruption, with 600,000 in the danger zone, making it the most densely populated volcanic region in the world',
        image: 'assets/images/vesuvius.jpg',
        lat: '40.822633855656974',
        lng: '14.425354516052282',
        mark: "Mount Vesuvius"
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
            }, {
                text: 'Czech Republic',
                correct: false
            }
        ],
        correctText: "Bran Castle is a castle in Bran.  It is a national monument and landmark in Transylvania. Commonly known outside Transylvania as Dracula's Castle, it is often referred to as the home of the title character in Bram Stoker's Dracula. There is no evidence that Stoker knew anything about this castle, which has only tangential associations with Vlad the Impaler, voivode of Wallachia, the putative inspiration for Dracula. Stoker's description of Dracula's crumbling fictional castle also bears no resemblance to Bran Castle.",
        image: 'assets/images/bran-castle.jpg',
        lat: '45.51494446755655',
        lng: ' 25.367172414964003',
        mark: "Bran Castle"

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
            }, {
                text: 'Barcelona',
                correct: true
            }
        ],
        correctText: "The Basílica de la Sagrada Família ('Basilica of the Holy Family'), also known as the Sagrada Família, is a large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by the Spanish architect Antoni Gaudí (1852–1926), his work on the building is part of a UNESCO World Heritage Site.",
        image: 'assets/images/holy-family.jpg',
        lat: '41.40363992828481',
        lng: '2.1743505164382877'
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
            }, {
                text: 'Dominican Republic',
                correct: false
            }
        ],
        correctText: "Due to the unique proximity of low-flying airliners arriving and departing from Princess Juliana International Airport, the location is popular with plane spotters. This is one of the few places in the world where aircraft can be viewed in their flight path just outside the end of the runway. Watching airliners pass over the beach is such a popular activity that daily arrivals and departures airline timetables are displayed on a board in most bars and restaurants on the beach.",
        image: 'assets/images/maho-beach.jpg',
        lat: '18.03913041478814,',
        lng: '-63.12040862030914',
        mark: "Maho Beach"
    },
    {
        question: "I'm The Charles Bridge, a 14th century arch bridge across the Vltava river in what European capital city?",
        answers: [{
                text: 'Wien',
                correct: false
            },
            {
                text: 'Prague',
                correct: true
            },
            {
                text: 'Budapest',
                correct: false
            }, {
                text: 'Warsaw',
                correct: false
            }
        ],
        correctText: "Charles Bridge is a medieval stone arch bridge that crosses the Vltava (Moldau) river in Prague, Czech Republic. Its construction started in 1357 under the auspices of King Charles IV, and finished in the early 15th century. The bridge replaced the old Judith Bridge built 1158–1172 that had been badly damaged by a flood in 1342. This new bridge was originally called Stone Bridge or Prague Bridge, but has been referred to as 'Charles Bridge' since 1870.",
        image: 'assets/images/charlesbridge.jpg',
        lat: '50.08657723483899',
        lng: '14.411454524848248',
        mark: "Charles Bridge"
    },
    {
        question: "	Today I'll visit One of the largest association football stadiums in the world, and also known as Soccer City, in what city am I?",
        answers: [{
                text: 'Rio de Janeiro',
                correct: false
            },
            {
                text: 'Madrid',
                correct: false
            },
            {
                text: 'Johannesburg',
                correct: true
            }, {
                text: 'London',
                correct: false
            }
        ],
        correctText: "First National Bank Stadium or simply FNB Stadium, also known as Soccer City and The Calabash, is an association football (soccer) and Rugby union stadium located in Nasrec, bordering the Soweto area of Johannesburg, South Africa. It is located next to the South African Football Association headquarters (SAFA House) where both the FIFA offices and the Local Organising Committee for the 2010 FIFA World Cup were housed. Designed as the main association football stadium for the World Cup, the FNB Stadium became the largest stadium in Africa with a capacity of 94,736. However, its maximum capacity during the 2010 FIFA World Cup was 84,490 due to reserved seating for the press and other VIPs. The stadium is also known by its nickname 'The Calabash' due to its resemblance to the African pot or gourd.  ",
        image: 'assets/images/soccercity.jpg',
        lat: '-26.23429494669922',
        lng: '27.98171125961432',
        mark: "FNB Stadium"
    },
    {
        question: "The view of this place is amazing! I'm on the longest wall on Earth! Which country am I?",
        answers: [{
                text: 'Japan',
                correct: false
            },
            {
                text: 'Korea',
                correct: false
            },
            {
                text: 'Mongoly',
                correct: false
            }, {
                text: 'China',
                correct: true
            }
        ],
        correctText: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The most well-known sections of the wall were built by the Ming dynasty (1368–1644).",
        image: 'assets/images/greatwallofchina.jpg',
        lat: '40.43158846365261',
        lng: '116.56465470556327',
        mark: "Great Wall of China"        
    },
    {
        question: "Today I'm astonished with this ivory-white marble Wonder of the Modern World. Where am I?",
        answers: [{
                text: 'India',
                correct: true
            },
            {
                text: 'Nepal',
                correct: false
            },
            {
                text: 'Pakistan',
                correct: false
            }, {
                text: 'Madagascar',
                correct: false
            }
        ],
        correctText: "The Taj Mahal, originally the Rauza-i-munawwara is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.    Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653.",
        image: 'assets/images/tajmahal.jpg',
        lat: '27.17529749537184',
        lng: '78.04214219716435',
        mark: "Taj Mahal" 
    },
    {
        question: "The Christ the Redeemer statue is really huge looking from here. And this view of the city is amazing! Can you guess in wich brazilian city am I?",
        answers: [{
                text: 'Sao Paulo',
                correct: false
            },
            {
                text: 'Fortaleza',
                correct: false
            },
            {
                text: 'Rio de Janeiro',
                correct: true
            }, {
                text: 'Belo Horizonte',
                correct: false
            }
        ],
        correctText: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.The statue weighs 635 metric tons, and is located at the peak of the 700-metre (2,300 ft) Corcovado mountain in the Tijuca Forest National Park overlooking the city of Rio de Janeiro. A symbol of Christianity across the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil, and was voted as one of the New Seven Wonders of the World. It is made of reinforced concrete and soapstone.",
        image: 'assets/images/christredeenmer.jpg',
        lat: '-22.9500099577984',
        lng: '-43.21904276251032',
        mark: "Christ the Redeemer" 
    }
];