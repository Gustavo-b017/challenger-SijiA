const questions = [ //Adicionando as questões
    {
        question: "Qual é o exame que utiliza ondas especias ?",
        answers: [
            { text: "Hemodiálise" , correct: false},
            { text: "Ecocardiograma", correct: true},
            { text: "Tomografia", correct: false},
            { text: "Ressonância Magnética", correct: false},
        ]
    },
    {
        question: "Quem realiza o exame ?",
        answers: [
            { text: "Papai ou mamãe ", correct: false}, 
            { text: "Super-Médico de corações ", correct: true},
            { text: "Enfermeira", correct: false},
            { text: "Super-médico de pulmão", correct: false},
                ]
    },
    {
        question: "Pra que o exame serve  ?",
        answers: [
            { text: "Para medir a febre", correct: false},
            { text: "Para ver a barriguinha", correct: false},
            { text: "Para ver os olhos", correct: false},
            { text: "Para descobrir se o nosso coração está funcionando direitinho", correct: true},
        ]
    },
    {
        question: "O exame dói ?",
        answers: [
            { text: "Sim", correct: false},
            { text: "Não dói mas pode fazer cócegas", correct: true},
            { text: "Mais ou menos", correct: false},
            { text: "Pode doer", correct: false},
        ]
    }  
];

// Criando variáveis para as classes : Question / answer - buttons / next-btn

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
// O número da questão e o score muda. 
let currentQuestionIndex = 0; // Variável que  armazena o index da questão
let score = 0; // Variável que armazena o index do score (pontuação)

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo"; // Quando a questão for respondida, irá para próxima questão
    showQuestion();
}

function showQuestion(){
    resetState(); // reseta a pergunta e a questão anterior
    let currentQuestion = questions[currentQuestionIndex]; // Variável para pergunta atual.
    let questionNo = currentQuestionIndex + 1; //Variável responsável por mudar a questão, ou seja, vai para próxima questão
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
     
    // Código para fazer aparecer as respostas
    // Faz aparecer os textos nos botões
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer); // Quando clicar no botão de resposta, a função selectAnswer será chamada
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){ // Supondo que tenha um elemento child, terá que remover esse elemento
        answerButtons.removeChild(answerButtons.firstChild);// Removendo o elemento child
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
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

function showScore(){
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();