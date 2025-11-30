function verificarParteA() {
  const correctas = [true, false, false, true, true];
  let checkboxes = [
      document.getElementById('a1'),
      document.getElementById('a2'),
      document.getElementById('a3'),
      document.getElementById('a4'),
      document.getElementById('a5')
  ];

  let resultadoCorrecto = true;

  checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
          if (correctas[index]) {
              checkbox.parentElement.classList.add('correcto-seleccionado');
              checkbox.parentElement.classList.remove('incorrecto-seleccionado');
          } else {
              checkbox.parentElement.classList.add('incorrecto-seleccionado');
              checkbox.parentElement.classList.remove('correcto-seleccionado');
              resultadoCorrecto = false;
          }
      } else {
          checkbox.parentElement.classList.remove('correcto-seleccionado', 'incorrecto-seleccionado');
      }
  });

  const mensaje = document.getElementById('resultadoParteA');
  if (resultadoCorrecto) {
      mensaje.textContent = '¡Correcto!';
      mensaje.className = 'correcto';
  } else {
      mensaje.textContent = 'Algunas respuestas son incorrectas. Inténtalo de nuevo.';
      mensaje.className = 'incorrecto';
  }
}

function verificarParteB() {
  const respuestasCorrectas = ['verdadero', 'verdadero', 'verdadero', 'verdadero', 'falso', 'verdadero', 'falso'];
  let resultadoCorrecto = true;

  for (let i = 1; i <= 7; i++) { // Corregido a 7 porque hay 7 proposiciones
      const opciones = document.querySelectorAll(`input[name="b${i}"]`);
      let seleccionada = null;

      opciones.forEach(opcion => {
          const label = opcion.parentElement;

          if (opcion.checked) {
              seleccionada = opcion;
              if (opcion.value === respuestasCorrectas[i - 1]) {
                  label.classList.add('correcto-seleccionado');
                  label.classList.remove('incorrecto-seleccionado');
              } else {
                  label.classList.add('incorrecto-seleccionado');
                  label.classList.remove('correcto-seleccionado');
                  resultadoCorrecto = false;
              }
          } else {
              label.classList.remove('correcto-seleccionado', 'incorrecto-seleccionado');
          }
      });
  }

  const mensaje = document.getElementById('resultadoParteB');
  if (resultadoCorrecto) {
      mensaje.textContent = '¡Todas tus respuestas son correctas!';
      mensaje.className = 'correcto';
  } else {
      mensaje.textContent = 'Algunas respuestas son incorrectas. Inténtalo de nuevo.';
      mensaje.className = 'incorrecto';
  }
}
