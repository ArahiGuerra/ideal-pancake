function checkAnswers() {
  const correctAnswers = ["", "6", "", "", "", "3", "", "7", "5", "", "2", "1", "4"];
  const conditionalIndexes = { 0: 1, 2: 5, 3: 5, 4: 5, 6: 7, 9: 10 };
  let score = 0;

  correctAnswers.forEach((answer, index) => {
    const input = document.getElementById(`answer-${index + 1}`);

    if (!input) return; // Evitar errores si algún input no existe

    const nextIndex = conditionalIndexes[index];
    const nextInput = nextIndex !== undefined ? document.getElementById(`answer-${nextIndex + 1}`) : null;

    if (nextInput && nextInput.value.trim() !== "") {
      // Si la respuesta actual está vacía y la siguiente tiene valor, se marca como correcta
      if (input.value.trim() === "") {
        input.style.borderColor = "green";
        score++;
      } else {
        // Si la respuesta tiene un valor cuando la siguiente también tiene valor, se marca como incorrecta
        input.style.borderColor = "red";
      }
    } else {
      // Evaluar solo si el campo ha sido contestado
      if (input.value.trim() !== "") {
        if (input.value === answer) {
          input.style.borderColor = "green";
          score++;
        } else {
          input.style.borderColor = "red";
        }
      }
    }
  });

  const result = document.getElementById("result");
  if (score === correctAnswers.length) {
    result.innerHTML = "<i class='fas fa-check-circle'></i> ¡Correcto! Todas las respuestas son correctas.";
    result.className = "correct";
  } else {
    result.innerHTML = "<i class='fas fa-times-circle'></i> Algunas de tus respuestas son incorrectas.";
    result.className = "incorrect";
  }
}
