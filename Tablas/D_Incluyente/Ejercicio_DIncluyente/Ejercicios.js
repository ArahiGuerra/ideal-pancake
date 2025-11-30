// Variables de estado globales para saber si las secciones han sido completadas correctamente
let section4Completed = false;
let section5Completed = false;

section4Completed = true;
document.getElementById('section5').style.display = "block";

// Drag and Drop functionality for Section 5
const draggables = document.querySelectorAll('.draggable');
const dropZone3 = document.getElementById('drop-zone3');
let draggedElementId = '';  // Variable global para almacenar el ID del elemento arrastrado

// Añade eventos a cada elemento arrastrable
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        draggedElementId = e.target.id;  // Almacena el ID del elemento arrastrado
    });
});

// Permite soltar el elemento en la zona de drop
dropZone3.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Detecta el evento de soltar en la zona de drop
dropZone3.addEventListener('drop', () => {
    const draggedElement = document.getElementById(draggedElementId); // Obtiene el elemento arrastrado
    dropZone3.textContent = draggedElement.textContent; // Muestra el contenido del elemento en la zona de drop
});

// Validar simbolización en la Sección 5
document.getElementById('validateSymbol3').addEventListener('click', () => {
    const answer = dropZone3.textContent.trim();
    const feedback = document.getElementById('feedbackSymbol3');
    const retryButton = document.getElementById('retrySymbol3');

    if (answer === 'p ∨ q') {
        feedback.textContent = "¡Correcto! Puedes avanzar a la siguiente sección.";
        feedback.style.color = "green";
        section5Completed = true; // Asignar a true cuando se complete la sección 5
        document.getElementById('section6').style.display = "block"; // Mostrar la sección 6
    } else {
        feedback.textContent = "Estás equivocado, intenta de nuevo.";
        feedback.style.color = "red";
        retryButton.style.display = "block";
    }
});

document.getElementById('retrySymbol3').addEventListener('click', () => {
    dropZone3.textContent = "_";
    document.getElementById('feedbackSymbol3').textContent = '';
    document.getElementById('retrySymbol3').style.display = 'none';
});

// Detectar cambios en los selects y mostrar el botón de validar solo cuando se hayan seleccionado todos los valores
const selectElements = document.querySelectorAll('#case7, #case8, #case9, #case10');
const validateButton = document.getElementById('validateTruthValues3');

// Función para verificar si todos los select tienen un valor distinto de "null"
function checkSelects() {
    let allSelected = true;
    selectElements.forEach(select => {
        if (select.value === "null") {
            allSelected = false;
        }
    });

    if (allSelected) {
        validateButton.style.display = "block"; // Mostrar el botón cuando todos los selects tengan un valor
    } else {
        validateButton.style.display = "none"; // Ocultar el botón si algún select no tiene un valor
    }
}

// Agregar el evento 'change' a todos los select para ejecutar la función checkSelects
selectElements.forEach(select => {
    select.addEventListener('change', checkSelects);
});

// Al iniciar, ocultar el botón de validar hasta que se seleccionen todos los valores
validateButton.style.display = "none";

// Validar valores de verdad en la Sección 6
document.getElementById('validateTruthValues3').addEventListener('click', () => {
    const case7 = document.getElementById('case7').value;
    const case8 = document.getElementById('case8').value;
    const case9 = document.getElementById('case9').value;
    const case10 = document.getElementById('case10').value;
    const feedback = document.getElementById('feedbackTruthValues3');
    const retryButton = document.getElementById('retryTruthValues3');

    if (case7 === "F" && case8 === "V" && case9 === "V" && case10 === "V") {
        feedback.textContent = "¡Tus respuestas son correctas!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Estás equivocado, intenta de nuevo.";
        feedback.style.color = "red";
        retryButton.style.display = "block";
    }
});

document.getElementById('retryTruthValues3').addEventListener('click', () => {
    document.getElementById('truthValuesForm3').reset();
    document.getElementById('feedbackTruthValues3').textContent = '';
    document.getElementById('retryTruthValues3').style.display = 'none';
});