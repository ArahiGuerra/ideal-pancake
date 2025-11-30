// Variables de estado globales para saber si las secciones han sido completadas correctamente
let section1Completed = true;
let section2Completed = true;
let section3Completed = false;
let section4Completed = false;

// Drag and Drop functionality for Section 3
const draggables = document.querySelectorAll('.draggable');
const dropZone2 = document.getElementById('drop-zone2');
let draggedElementId = '';

// Añade eventos a cada elemento arrastrable
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        draggedElementId = e.target.id;  // Almacena el ID del elemento arrastrado
    });
});

// Permite soltar el elemento en la zona de drop
dropZone2.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Detecta el evento de soltar en la zona de drop
dropZone2.addEventListener('drop', () => {
    const draggedElement = document.getElementById(draggedElementId); // Obtiene el elemento arrastrado
    dropZone2.textContent = draggedElement.textContent; // Muestra el contenido del elemento en la zona de drop
});

// Simbolización Sección 3
document.getElementById('validateSymbol2').addEventListener('click', () => {
    const answer = dropZone2.textContent.trim(); // El contenido en la zona de drop
    const feedback = document.getElementById('feedbackSymbol2');
    const retryButton = document.getElementById('retrySymbol2');
    
    if (answer === 'p → q') { // Compara con el símbolo correcto
        feedback.textContent = "¡Correcto! Puedes avanzar a la siguiente sección.";
        feedback.style.color = "green";
        section3Completed = true;
        document.getElementById('section4').style.display = "block"; // Muestra la siguiente sección
    } else {
        feedback.textContent = "Estás equivocado, intenta de nuevo.";
        feedback.style.color = "red";
        retryButton.style.display = "block"; // Muestra el botón de reintentar
    }
});

// Botón de reintentar para la simbolización
document.getElementById('retrySymbol2').addEventListener('click', () => {
    dropZone2.textContent = "_"; // Resetea la zona de drop
    document.getElementById('feedbackSymbol2').textContent = ''; // Limpia el feedback
    document.getElementById('retrySymbol2').style.display = 'none'; // Oculta el botón de reintentar
});

// Validar valores de verdad en la Sección 4
const validateButton = document.getElementById('validateTruthValues2');

// Inicialmente ocultar el botón
validateButton.style.display = "none";

const truthValuesForm2 = document.getElementById('truthValuesForm2');
truthValuesForm2.addEventListener('change', () => {
    const case5 = document.getElementById('case5').value;
    const case6 = document.getElementById('case6').value;
    const caze5 = document.getElementById('caze5').value;
    const caze6 = document.getElementById('caze6').value;

    // Mostrar el botón solo si todos los select tienen un valor distinto de 'null'
    if (case5 !== 'null' && case6 !== 'null' && caze5 !== 'null' && caze6 !== 'null') {
        validateButton.style.display = "block"; // Mostrar botón
    } else {
        validateButton.style.display = "none";  // Ocultar botón si algún select tiene 'null'
    }
});

document.getElementById('validateTruthValues2').addEventListener('click', () => {
    const case5 = document.getElementById('case5').value;
    const case6 = document.getElementById('case6').value;
    const caze5 = document.getElementById('caze5').value;
    const caze6 = document.getElementById('caze6').value;
    const feedback = document.getElementById('feedbackTruthValues2');
    const retryButton = document.getElementById('retryTruthValues2');

    if (case5 === "F" && case6 === "T" && caze5 === "T" && caze6 === "T") {
        feedback.textContent = "¡Tus respuestas son correctas!";
        feedback.style.color = "green";
        section4Completed = true;
        // Aquí puedes mostrar la siguiente sección si es necesario
    } else {
        feedback.textContent = "Estás equivocado, intenta de nuevo.";
        feedback.style.color = "red";
        retryButton.style.display = "block"; // Muestra el botón de reintentar
    }
});

// Botón de reintentar para valores de verdad
document.getElementById('retryTruthValues2').addEventListener('click', () => {
    document.getElementById('truthValuesForm2').reset(); // Resetea el formulario
    document.getElementById('feedbackTruthValues2').textContent = ''; // Limpia el feedback
    document.getElementById('retryTruthValues2').style.display = 'none'; // Oculta el botón de reintentar
    validateButton.style.display = "none"; // Ocultar nuevamente el botón hasta que se seleccionen valores
});
