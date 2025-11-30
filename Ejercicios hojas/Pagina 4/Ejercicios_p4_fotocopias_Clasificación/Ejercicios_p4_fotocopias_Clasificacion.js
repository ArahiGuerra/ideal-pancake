
// // Inicializamos Dragula
// const dropzones = document.querySelectorAll('.dropzone');
// const respuestas = document.getElementById('respuestas');

// // Creamos un array con todos los contenedores
// const containers = [respuestas, ...dropzones];

// const drake = dragula(containers, {
//     copy: (el, source) => source === respuestas, // Clona si viene del banco de respuestas
//     removeOnSpill: true // Si lo sacas de cualquier zona, se elimina
// });

// // Evitamos que se acumulen duplicados en respuestas
// drake.on('drop', (el, target, source, sibling) => {
//     if (target === respuestas && source !== respuestas) {
//         el.remove(); // No dejamos que se devuelva arriba, solo clones en dropzones
//     }
// });

// function verificar() {
//     let correctas = true;
//     const resultado = document.getElementById('resultado');

//     dropzones.forEach(dropzone => {
//         const respuestasCorrectas = dropzone.getAttribute('data-correct').split(', ');
//         const respuestasUsuario = [...dropzone.querySelectorAll('.draggable')].map(item => item.textContent);

//         if (respuestasUsuario.length !== 3 || !respuestasCorrectas.every(res => respuestasUsuario.includes(res))) {
//             correctas = false;
//         }
//     });

//     if (correctas) {
//         resultado.textContent = "¡Correcto! Has clasificado todas las proposiciones correctamente.";
//         resultado.style.color = "green";
//     } else {
//         resultado.textContent = "Algunas clasificaciones son incorrectas. Intenta nuevamente.";
//         resultado.style.color = "red";
//     }
// }

// Inicializamos Dragula
const dropzones = document.querySelectorAll('.dropzone');
const respuestas = document.getElementById('respuestas');

// Creamos un array con todos los contenedores
const containers = [respuestas, ...dropzones];

const drake = dragula(containers, {
    copy: (el, source) => source === respuestas, // Clona si viene del banco de respuestas
    removeOnSpill: true // Si lo sacas de cualquier zona, se elimina
});

// Evitamos que se acumulen duplicados en respuestas
drake.on('drop', (el, target, source, sibling) => {
    if (target === respuestas && source !== respuestas) {
        el.remove(); // No dejamos que vuelva al banco
    }
});

function verificar() {
    let todasLlenas = true;
    let todasCorrectas = true;

    const resultado = document.getElementById('resultado');

    // Primero quitamos colores previos
    dropzones.forEach(d => {
        d.style.borderColor = "#ccc";
        d.style.backgroundColor = "#fff";
    });

    dropzones.forEach(dropzone => {
        const respuestasCorrectas = dropzone.getAttribute('data-correct').split(', ');
        const respuestasUsuario = [...dropzone.querySelectorAll('.draggable')].map(item => item.textContent);

        // ⭐ 1. Verificar que todas tengan 3 respuestas
        if (respuestasUsuario.length !== 3) {
            todasLlenas = false;
        }
    });

    // Si falta alguna respuesta
    if (!todasLlenas) {
        resultado.textContent = "Debes contestar todas las preguntas antes de oprimir el botón verificar.";
        resultado.style.color = "red";
        return; // detenemos aquí
    }

    // ⭐ 2. Si todas están llenas, ahora verificamos correctas/incorrectas una por una
    dropzones.forEach(dropzone => {
        const respuestasCorrectas = dropzone.getAttribute('data-correct').split(', ');
        const respuestasUsuario = [...dropzone.querySelectorAll('.draggable')].map(item => item.textContent);

        const esCorrecta = respuestasCorrectas.every(res => respuestasUsuario.includes(res));

        if (esCorrecta) {
            // Marca en verde
            dropzone.style.borderColor = "green";
            dropzone.style.backgroundColor = "#d4f8d4";
        } else {
            // Marca en rojo
            dropzone.style.borderColor = "red";
            dropzone.style.backgroundColor = "#f8d4d4";
            todasCorrectas = false;
        }
    });

    // ⭐ Mensaje final
    if (todasCorrectas) {
        resultado.textContent = "¡Correcto! Has clasificado todas las proposiciones correctamente.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Algunas clasificaciones son incorrectas. Intenta nuevamente.";
        resultado.style.color = "red";
    }
}
