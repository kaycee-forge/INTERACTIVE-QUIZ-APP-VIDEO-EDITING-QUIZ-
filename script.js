// Global variables
let currentQuestionIndex = 0;
let score = 0;

// Questions data
const questions = [
  {
    question: "Which video editing software is widely used for professional filmmaking?",
    answers: ["Adobe Premiere Pro", "iMovie", "Windows Movie Maker"],
    correct: "Adobe Premiere Pro"
  },
  {
    question: "Which file format is typically used for high-quality video output?",
    answers: ["MP4", "AVI", "GIF"],
    correct: "MP4"
  },
  {
    question: "What does 'cutting' mean in video editing?",
    answers: ["Trimming a video clip", "Adding a special effect", "Changing video resolution"],
    correct: "Trimming a video clip"
  }
];

// Get elements
const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

// Show question and options
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  
  questionContainer.innerText = currentQuestion.question;
  answerButtons.innerHTML = "";

  // Add buttons for each answer
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.onclick = () => selectAnswer(answer);  // Handle answer selection
    answerButtons.appendChild(button);
  });

  nextButton.style.display = "none";  // Hide next button initially
}

// Select answer logic
function selectAnswer(selected) {
  const currentQuestion = questions[currentQuestionIndex];

  // Disable all answer buttons after selection
  const buttons = answerButtons.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = true;
  });

  // Check if the selected answer is correct
  if (selected === currentQuestion.correct) {
    score++;  // Increment score if correct
  }

  // Show Next button after selecting an answer
  nextButton.style.display = "inline";
}

// Handle next question logic
nextButton.onclick = function() {
  currentQuestionIndex++;  // Move to the next question
  
  if (currentQuestionIndex < questions.length) {
    showQuestion();  // Display next question
  } else {
    showScore();  // Display score when all questions are completed
  }
  nextButton.style.display = "none";  // Hide the next button until an answer is selected
};

// Show final score
function showScore() {
  questionContainer.innerText = "Quiz Completed!";
  answerButtons.innerHTML = "";
  nextButton.style.display = "none";
  scoreDisplay.innerText = `Your Score: ${score} out of ${questions.length}`;
}

// Start the quiz by showing the first question
showQuestion();
