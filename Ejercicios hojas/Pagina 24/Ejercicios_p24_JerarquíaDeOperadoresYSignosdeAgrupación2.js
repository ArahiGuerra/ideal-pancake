// Selecciona contenedor de opciones y dropzones
const optionsContainer = document.querySelector('.options');
const dropZones = Array.from(document.querySelectorAll('.drop-zone'));

// Inicializa Dragula
const drake = dragula([optionsContainer, ...dropZones], {
    copy: (el, source) => {
        // Copiar solo cuando se arrastra desde el contenedor de opciones
        return source === optionsContainer;
    },
    accepts: (el, target) => {
        // Solo aceptar en drop-zones, no de vuelta al contenedor de opciones
        return target.classList.contains('drop-zone');
    },
    removeOnSpill: true // si lo sueltas fuera desaparece
});

// Cuando se suelta una opción
drake.on('drop', (el, target, source) => {

    // Si se soltó en una dropzone
    if (target.classList.contains('drop-zone')) {
        // Limpiar cualquier elemento previo en ese drop-zone
        const existingElements = Array.from(target.children).filter(child => 
            child !== el && child.classList.contains('option')
        );
        existingElements.forEach(elem => elem.remove());

        const correctAnswer = target.getAttribute('data-correct');
        const draggedText = el.textContent.trim();

        if (draggedText === correctAnswer) {
            target.classList.add('correct');
            target.classList.remove('incorrect');
        } else {
            target.classList.add('incorrect');
            target.classList.remove('correct');
        }
    }
});

// Al sacar la opción del dropzone y soltar fuera
drake.on('remove', (el, container, source) => {
    // Si se removió de un drop-zone, limpiar las clases
    if (source && source.classList.contains('drop-zone')) {
        source.classList.remove('correct', 'incorrect');
    }
});

// Cuando se cancela el arrastre
drake.on('cancel', (el, container, source) => {
    // Si se cancela desde un drop-zone, limpiar las clases
    if (source && source.classList.contains('drop-zone')) {
        source.classList.remove('correct', 'incorrect');
    }
});