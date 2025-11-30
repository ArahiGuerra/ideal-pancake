function checkAnswers() {
  const correctAnswers = ["4", "", "1", "3", "6", "2", "", "5"];
  let score = 0;

  correctAnswers.forEach((answer, index) => {
    const input = document.getElementById(`answer-${index + 1}`);
    if (input.value.trim() === answer) { 
      score++;
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
