// Seleccionamos contenedores
const dropZones = document.querySelectorAll('.drop-zone');
const optionsContainer = document.querySelector('.options');

// Inicializamos Dragula
const drake = dragula([optionsContainer, ...dropZones], {
    copy: (el, source) => source === optionsContainer, // Clona solo desde el banco
    removeOnSpill: true // Si se arrastra fuera desaparece
});

// Limpiamos colores al mover
drake.on('drop', (el, target) => {
    dropZones.forEach(zone => {
        zone.classList.remove('correct', 'incorrect');
    });
});

// Botón Verificar
document.getElementById('checkBtn').addEventListener('click', () => {
    let allCorrect = true;
    dropZones.forEach(zone => {
        const answer = zone.querySelector('.option');
        const correctAnswer = zone.getAttribute('data-correct');

        if (answer && answer.textContent.trim() === correctAnswer) {
            zone.classList.add('correct');
            zone.classList.remove('incorrect');
        } else {
            zone.classList.add('incorrect');
            zone.classList.remove('correct');
            allCorrect = false;
        }
    });

    const resultado = document.getElementById('resultado');
    if (allCorrect) {
        resultado.textContent = "¡Todas las respuestas son correctas!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Algunas respuestas son incorrectas. Intenta nuevamente.";
        resultado.style.color = "red";
    }
});
