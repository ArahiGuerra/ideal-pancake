function checkAnswers() {
  const correctAnswers = ['6', '10', '7', '4', '3', '8', '2', '9', '1', '5'];
  const inputs = document.querySelectorAll('#quiz-form input');
  const button = document.querySelector('#check-btn');

  inputs.forEach((input, index) => {
    if (input.value === correctAnswers[index]) {
      input.classList.add('correct');
      input.classList.remove('incorrect');
    } else {
      input.classList.add('incorrect');
      input.classList.remove('correct');
    }
  });

  // Cambiar el texto del botón y su funcionalidad
  button.textContent = 'Reintentar';
  button.onclick = resetAnswers;
}

function resetAnswers() {
  const inputs = document.querySelectorAll('#quiz-form input');
  const button = document.querySelector('#check-btn');

  inputs.forEach((input) => {
    input.value = ''; // Limpiar el valor del input
    input.classList.remove('correct', 'incorrect'); // Eliminar las clases
  });

  // Cambiar el texto del botón y su funcionalidad
  button.textContent = 'Verificar Respuestas';
  button.onclick = checkAnswers;
}
