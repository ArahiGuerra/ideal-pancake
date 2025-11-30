// Variables de estado globales para saber si las secciones han sido completadas correctamente
let section1Completed = false;
let section2Completed = false;
let section3Completed = false;
let section4Completed = false;
let section5Completed = false; // Agregar la variable para controlar la penúltima sección

// Drag and Drop functionality for Section 1
const draggables = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('drop-zone');
let draggedElementId = '';

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggedElementId = draggable.id;
    });
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', () => {
    dropZone.textContent = draggedElementId;
});

// Validar simbolización en la Sección 1
document.getElementById('validateSymbol').addEventListener('click', () => {
    const answer = dropZone.textContent.trim();
    const feedback = document.getElementById('feedbackSymbol');
    const retryButton = document.getElementById('retrySymbol');
    if (answer === 'ꓥ') {
        feedback.textContent = "¡Correcto! Puedes avanzar a la siguiente sección.";
        feedback.style.color = "green";
        section1Completed = true;
        document.getElementById('section2').style.display = "block";
    } else {
        feedback.textContent = "Estás equivocado, intenta de nuevo.";
        feedback.style.color = "red";
        retryButton.style.display = "block";
    }
});

document.getElementById('retrySymbol').addEventListener('click', () => {
    dropZone.textContent = "p _ q";
    document.getElementById('feedbackSymbol').textContent = '';
    document.getElementById('retrySymbol').style.display = 'none';
});

// Función para verificar si todos los selectores tienen una opción válida seleccionada
function checkAllSelected() {
    const case1 = document.getElementById('case1').value;
    const case2 = document.getElementById('case2').value;
    const case3 = document.getElementById('case3').value;
    const case4 = document.getElementById('case4').value;

    // Si todos los selectores tienen un valor distinto de "null", se muestra el botón
    if (case1 !== 'null' && case2 !== 'null' && case3 !== 'null' && case4 !== 'null') {
        document.getElementById('validateTruthValues1').style.display = 'block';
    } else {
        document.getElementById('validateTruthValues1').style.display = 'none';
    }
}

// Añadir evento "change" a cada selector
document.getElementById('case1').addEventListener('change', checkAllSelected);
document.getElementById('case2').addEventListener('change', checkAllSelected);
document.getElementById('case3').addEventListener('change', checkAllSelected);
document.getElementById('case4').addEventListener('change', checkAllSelected);

// Inicialmente esconder el botón de validar
document.getElementById('validateTruthValues1').style.display = 'none';

// Validar valores de verdad en la Sección 2
document.getElementById('validateTruthValues1').addEventListener('click', () => {
    const case1 = document.getElementById('case1').value;
    const case2 = document.getElementById('case2').value;
    const case3 = document.getElementById('case3').value;
    const case4 = document.getElementById('case4').value;
    const feedback = document.getElementById('feedbackTruthValues1');
    const retryButton = document.getElementById('retryTruthValues1');

    if (case1 === "F" && case2 === "F" && case3 === "F" && case4 === "T") {
        feedback.textContent = "¡Tus respuestas son correctas!";
        feedback.style.color = "green";
        section2Completed = true;
        document.getElementById('section3').style.display = "block";
    } else {
        feedback.textContent = "Estás equivocado, intenta de nuevo.";
        feedback.style.color = "red";
        retryButton.style.display = "block";
    }
});

document.getElementById('retryTruthValues1').addEventListener('click', () => {
    document.getElementById('truthValuesForm1').reset();
    document.getElementById('feedbackTruthValues1').textContent = '';
    document.getElementById('retryTruthValues1').style.display = 'none';
    document.getElementById('validateTruthValues1').style.display = 'none';  // Ocultar el botón nuevamente
});
