const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
  question: "Who developed the theory of relativity?",
  options: ["Newton", "Einstein", "Tesla", "Galileo"],
  answer: "Einstein"
},
{
  question: "Which language is used for web apps?",
  options: ["Python", "Java", "C++", "JavaScript"],
  answer: "JavaScript"
},
{
  question: "How many continents are there on Earth?",
  options: ["5", "6", "7", "8"],
  answer: "7"
},
{
  question: "What is the boiling point of water?",
  options: ["90°C", "100°C", "110°C", "120°C"],
  answer: "100°C"
},
{
  question: "Who painted the Mona Lisa?",
  options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
  answer: "Leonardo da Vinci"
},
{
  question: "Which is the smallest planet in our solar system?",
  options: ["Mercury", "Mars", "Venus", "Pluto"],
  answer: "Mercury"
},
{
  question: "What is the chemical symbol for Gold?",
  options: ["Au", "Ag", "Gd", "Go"],
  answer: "Au"
},
{
  question: "What is the largest mammal?",
  options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  answer: "Blue Whale"
},
{
  question: "Which country is known as the Land of the Rising Sun?",
  options: ["China", "Japan", "South Korea", "Thailand"],
  answer: "Japan"
},
{
  question: "What is the hardest natural substance on Earth?",
  options: ["Gold", "Iron", "Diamond", "Silver"],
  answer: "Diamond"
},
{
  question: "Who wrote 'Romeo and Juliet'?",
  options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
  answer: "William Shakespeare"
},
{
  question: "What is the speed of light?",
  options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
  answer: "300,000 km/s"
},
{
  question: "Which gas is most abundant in the Earth's atmosphere?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  answer: "Nitrogen"
}
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, current.answer);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectAnswer(selectedBtn, correctAnswer) {
  const options = document.querySelectorAll(".option");
  options.forEach(option => option.style.pointerEvents = "none");

  if (selectedBtn.textContent === correctAnswer) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    options.forEach(btn => {
      if (btn.textContent === correctAnswer) btn.classList.add("correct");
    });
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById("quiz-box").classList.add("hidden");
  scoreBox.classList.remove("hidden");
  scoreDisplay.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
}

loadQuestion();