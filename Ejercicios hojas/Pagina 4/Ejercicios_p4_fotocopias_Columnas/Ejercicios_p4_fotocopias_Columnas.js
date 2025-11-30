function checkAnswers() {
  const correctAnswers = ["7", "5", "8", "2", "4", "1", "6", "3"];
  const total = correctAnswers.length;
  let score = 0;
  let allFilled = true;

  // Revisar si hay campos vacíos
  correctAnswers.forEach((_, index) => {
    const input = document.getElementById(`answer-${index + 1}`);
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  const result = document.getElementById("result");

  // ❗ Si falta una respuesta → mensaje especial
  if (!allFilled) {
    result.innerHTML = "<i class='fas fa-exclamation-circle'></i> Debes contestar todas las preguntas antes de oprimir el botón verificar.";
    result.className = "incorrect";
    return;
  }

  // Si están todas llenas → evaluar cada una
  correctAnswers.forEach((answer, index) => {
    const input = document.getElementById(`answer-${index + 1}`);

    if (input.value === answer) {
      input.style.borderColor = "green";   // correcta
      score++;
    } else {
      input.style.borderColor = "red";     // incorrecta
    }
  });

  // Mensajes finales
  if (score === total) {
    result.innerHTML = "<i class='fas fa-check-circle'></i> ¡Correcto! Todas las respuestas son correctas.";
    result.className = "correct";
  } else {
    result.innerHTML = "<i class='fas fa-times-circle'></i> Algunas clasificaciones son incorrectas. Intenta nuevamente.";
    result.className = "incorrect";
  }
}
