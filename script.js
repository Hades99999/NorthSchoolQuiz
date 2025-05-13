// Hello There. Here You see the code I wrote, Just to Prove this is Nandan!

const questions = [
    {
        question: "When was North Primary School and Nursery opened?",
        answers: [
            { text : "1963", correct: false},
            { text : "1894", correct: true},
            { text : "1642", correct: false},
            { text : "1926", correct: false}
        ]
    },

    {
        question: "How many pupils first attended North Primary school when it was first opened?",
        answers: [
            { text : "5", correct: false},
            { text : "416", correct: false},
            { text : "287", correct: false},
            { text : "181", correct: true}
        ]
    },

    {
        question: "Who was the first headteacher of North Primary School?",
        answers: [
            { text : "John Maize", correct: false},
            { text : "Bob Marley", correct: false},
            { text : "Bill Rose", correct: false},
            { text : "John Harper", correct: true}
        ]
    },

    {
        question: "How long Is the school day?",
        answers: [
            { text : "6.5 hrs", correct: true},
            { text : "7 hrs", correct: false},
            { text : "4 hrs", correct: false},
            { text : "8 hrs", correct: false}
        ]
    },

    {
        question: "How long is break time every day?",
        answers: [
            { text : "30 mins", correct: false},
            { text : "10 mins", correct: false},
            { text : "15 mins", correct: true},
            { text : "60 mins", correct: false}
        ]
    },

    {
        question: "When is PE day for the year 4's?",
        answers: [
            { text : "Wednesday", correct: true},
            { text : "Thursday", correct: false},
            { text : "Friday", correct: false},
            { text : "Tuesday", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    };
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again!"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
})



startQuiz();
