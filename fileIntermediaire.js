const intermediateLocations = [
  {
    name: "Paris",
    image: "images/paris.jpg", // Make sure this image exists in your folder
    correctAnswer: "France"
  },
  {
    name: "New York",
    image: "images/newyork.jpg",
    correctAnswer: "USA"
  },
  {
    name: "Tokyo",
    image: "images/tokyo.jpg",
    correctAnswer: "Japan"
  }
];

let current = 0;
let score = 0;

function loadLocation() {
  const location = intermediateLocations[current];
  document.getElementById("locationImage").src = location.image;
  document.getElementById("guess").value = "";
  document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
  const userGuess = document.getElementById("guess").value.trim().toLowerCase();
  const correct = intermediateLocations[current].correctAnswer.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userGuess === correct) {
    feedback.innerText = "✅ Bonne réponse !";
    score += 10;
  } else {
    feedback.innerText = `❌ Faux ! La bonne réponse était : ${intermediateLocations[current].correctAnswer}`;
  }

  current++;

  setTimeout(() => {
    if (current < intermediateLocations.length) {
      loadLocation();
    } else {
      localStorage.setItem("intermediateScore", score);
      window.location.href = "score.html"; // Redirect to score page
    }
  }, 2000);
}

window.onload = loadLocation;
