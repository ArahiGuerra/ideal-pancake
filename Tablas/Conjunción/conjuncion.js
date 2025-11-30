let correctAnswers = {
  0: 'V',  // V ∧ V = V
  1: 'F',  // V ∧ F = F
  2: 'F',  // F ∧ V = F
  3: 'F'   // F ∧ F = F
};

let userAnswers = {};

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let draggedElement = document.getElementById(data).cloneNode(true);

  // evitar duplicar IDs dentro del dropzone
  draggedElement.id = "";

  // limpiar celda antes de colocar
  event.target.innerHTML = "";
  event.target.appendChild(draggedElement);

  let rowIndex = event.target.parentNode.rowIndex - 1; 
  userAnswers[rowIndex] = draggedElement.textContent;
}

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
