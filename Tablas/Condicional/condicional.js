let correctAnswers = {
  0: 'V',  
  1: 'F',  
  2: 'V',  
  3: 'V'   
};

let userAnswers = {};

// Configuración de Dragula
let drake = dragula([document.querySelector('.options'), ...document.querySelectorAll('.dropzone')], {
  copy: function (el, source) {
    return source.classList.contains('options'); // copiar desde las opciones
  },
  accepts: function (el, target) {
    return target.classList.contains('dropzone'); // solo permitir dropzones
  },
  removeOnSpill: true
});

// Cuando se suelta un elemento
drake.on('drop', function (el, target, source, sibling) {
  if (target && target.classList.contains('dropzone')) {
    // limpiar contenido previo
    target.innerHTML = "";

    // crear clon con estilo
    let newEl = document.createElement("div");
    newEl.textContent = el.textContent.trim();
    newEl.classList.add("draggable"); 

    target.appendChild(newEl);

    let rowIndex = target.parentNode.rowIndex - 1;
    userAnswers[rowIndex] = newEl.textContent.trim();
  }

  // limpiar fantasma de dragula
  if (el && el.parentNode && !el.parentNode.classList.contains("options")) {
    el.remove();
  }
});

// Verificación de respuestas
function checkAnswers() {
  let allCorrect = true;
  let dropzones = document.querySelectorAll(".dropzone");

  dropzones.forEach((cell, index) => {
    if (userAnswers[index] === correctAnswers[index]) {
      cell.classList.add("correct");
      cell.classList.remove("incorrect");
    } else {
      cell.classList.add("incorrect");
      cell.classList.remove("correct");
      allCorrect = false;
    }
  });

  if (allCorrect) {
    document.getElementById("message").textContent = "¡Todas las respuestas son correctas!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = "Algunas respuestas son incorrectas. Inténtalo de nuevo.";
    document.getElementById("message").style.color = "red";
    document.getElementById("retry").style.display = "inline"; 
  }
}

// Reintentar
function retry() {
  let dropzones = document.querySelectorAll(".dropzone");
  dropzones.forEach(cell => {
    cell.innerHTML = ""; 
    cell.classList.remove("correct", "incorrect"); 
  });

  userAnswers = {};
  document.getElementById("message").textContent = ""; 
  document.getElementById("retry").style.display = "none"; 
}
