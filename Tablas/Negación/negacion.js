let correctAnswers = {
  0: 'F',  
  1: 'V'   
};

let userAnswers = {};

// Configuración de Dragula
let drake = dragula([document.querySelector('.options'), ...document.querySelectorAll('.dropzone')], {
  copy: function (el, source) {
    return source.classList.contains('options'); // copiar desde opciones
  },
  accepts: function (el, target) {
    return target.classList.contains('dropzone'); // solo celdas dropzone
  },
  removeOnSpill: true
});

// Cuando se suelta un elemento
drake.on('drop', function (el, target, source, sibling) {
  if (target && target.classList.contains('dropzone')) {
    // limpiar contenido previo de la celda
    target.innerHTML = "";

    // crear un clon limpio con el mismo estilo
    let newEl = document.createElement("div");
    newEl.textContent = el.textContent.trim();
    newEl.classList.add("draggable");

    target.appendChild(newEl);

    let rowIndex = target.parentNode.rowIndex - 1;
    userAnswers[rowIndex] = newEl.textContent.trim();
  }

  // eliminar el elemento fantasma de Dragula
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
    document.getElementById("message").textContent = "Felicidades, todas las respuestas son correctas.";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = "Intentalo de nuevo, algunas o todas tus respuestas son incorrectas.";
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
