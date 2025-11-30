function checkAnswers() {
  const correctAnswers = ["4", "4", "8", "8", "32", "32"];
  let score = 0;
  let incorrectCount = 0;

  correctAnswers.forEach((answer, index) => {
    const input = document.getElementById(`answer-${index + 1}`);
    const userAnswer = input.value.trim();

    if (userAnswer === answer) {
      input.style.borderColor = "#2E7D32"; // Verde si es correcta
      score++;
    } else {
      input.style.borderColor = "#C62828"; // Rojo si es incorrecta
      incorrectCount++;
    }
  });

  const result = document.getElementById("result");
  if (score === correctAnswers.length) {
    result.innerHTML = "<i class='fas fa-check-circle'></i> ¡Correcto! Todas las respuestas son correctas.";
    result.className = "correct";
  } else {
    result.innerHTML = `<i class='fas fa-times-circle'></i> Algunas de tus respuestas son incorrectas.`;
    result.className = "incorrect";
  }
}
