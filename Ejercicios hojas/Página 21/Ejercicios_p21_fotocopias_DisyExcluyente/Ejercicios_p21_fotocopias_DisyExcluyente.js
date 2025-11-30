function verificarParteA() {
    const correctas = [false, false, true, false, true, false];
    let correctasUsuario = [
      document.getElementById('a1').checked,
      document.getElementById('a2').checked,
      document.getElementById('a3').checked,
      document.getElementById('a4').checked,
      document.getElementById('a5').checked,
      document.getElementById('a6').checked
    ];
  
    const resultado = correctas.every((valor, index) => valor === correctasUsuario[index]);
    const mensaje = document.getElementById('resultadoParteA');
    const boton = document.querySelector('#parteA button');
  
    if (resultado) {
      mensaje.textContent = '¡Correcto!';
      mensaje.className = 'correcto';
      boton.disabled = true;
    } else {
      mensaje.textContent = 'Algunas respuestas son incorrectas. Inténtalo de nuevo.';
      mensaje.className = 'incorrecto';
      boton.textContent = 'Reintentar';
      boton.classList.add('reintentar');
      boton.onclick = resetearParteA;
    }
  }
  
  function resetearParteA() {
    const checks = document.querySelectorAll('#parteA input[type="checkbox"]');
    checks.forEach(check => check.checked = false);
  
    const mensaje = document.getElementById('resultadoParteA');
    mensaje.textContent = '';
    
    const boton = document.querySelector('#parteA button');
    boton.textContent = 'Verificar respuestas';
    boton.classList.remove('reintentar');
    boton.onclick = verificarParteA;
  }
  
  function verificarParteB() {
    const respuestasCorrectas = ['verdadero', 'falso', 'verdadero', 'falso', 'verdadero'];
    let resultadoCorrecto = true;
  
    for (let i = 1; i <= 5; i++) {
      const seleccionada = document.querySelector(`input[name="b${i}"]:checked`);
      if (!seleccionada || seleccionada.value !== respuestasCorrectas[i - 1]) {
        resultadoCorrecto = false;
        break;
      }
    }
  
    const mensaje = document.getElementById('resultadoParteB');
    const boton = document.querySelector('#parteB button');
  
    if (resultadoCorrecto) {
      mensaje.textContent = '¡Todas tus respuestas son correctas!';
      mensaje.className = 'correcto';
      boton.disabled = true;
    } else {
      mensaje.textContent = 'Algunas respuestas son incorrectas. Inténtalo de nuevo.';
      mensaje.className = 'incorrecto';
      boton.textContent = 'Reintentar';
      boton.classList.add('reintentar');
      boton.onclick = resetearParteB;
    }
  }
  
  function resetearParteB() {
    for (let i = 1; i <= 5; i++) {
      const radios = document.querySelectorAll(`input[name="b${i}"]`);
      radios.forEach(radio => radio.checked = false);
    }
  
    const mensaje = document.getElementById('resultadoParteB');
    mensaje.textContent = '';
  
    const boton = document.querySelector('#parteB button');
    boton.textContent = 'Verificar respuestas';
    boton.classList.remove('reintentar');
    boton.onclick = verificarParteB;
  }
  