// const draggables = document.querySelectorAll('.draggable');
// const dropzones = document.querySelectorAll('.dropzone');

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text/plain', e.target.textContent);
//     });
// });

// dropzones.forEach(dropzone => {
//     dropzone.addEventListener('dragover', (e) => {
//         e.preventDefault();
//     });

//     dropzone.addEventListener('drop', (e) => {
//         e.preventDefault();
//         const data = e.dataTransfer.getData('text/plain');
        
//         const newElement = document.createElement('div');
//         newElement.classList.add('draggable');
//         newElement.textContent = data;
//         dropzone.appendChild(newElement);
//     });
// });

// function verificar() {
//     let correctas = true;
    
//     const respuestasCorrectas = {
//         0: [['p', '→', 'r']],
//         1: [['r', '↔', 'p', 'ꓥ', '¬', 'q']], 
//         2: [['¬', 'p', 'V', 'q', '→', '¬', 'r']], 
//         3: [['¬', '(', '¬', 'p', 'V', 'q', '→', '¬', 'r', ')']],
//         4: [['q', 'ꓥ', 'p',  '→', '¬', 'r'], ['p', 'ꓥ', 'q',  '→', '¬', 'r']],
//         5: [['r', '→', 'p', 'ꓥ', '¬', 'q']],
//         6: [['¬', 'q', 'ꓥ', '¬', 'p', '→', '¬', 'r']],
//         7: [['¬', 'q', '→', '(', 'p', '→', 'r', ')'], ['(', 'p', '→', 'r', ')', 'V', 'q'], ['p', 'ꓥ', '¬', 'q', '→', 'r']]
//     };

//     dropzones.forEach((dropzone, index) => {
//         const respuestasUsuario = [...dropzone.querySelectorAll('.draggable')].map(item => item.textContent);
//         const esCorrecto = respuestasCorrectas[index].some(correcta => JSON.stringify(correcta) === JSON.stringify(respuestasUsuario));
        
//         if (esCorrecto) {
//             dropzone.style.backgroundColor = "lightgreen";
//         } else {
//             dropzone.style.backgroundColor = "lightcoral";
//             correctas = false;
//         }
//     });

//     // const resultado = document.getElementById('resultado');
//     // if (correctas) {
//     //     resultado.textContent = "¡Correcto! Has clasificado todas las proposiciones correctamente.";
//     //     resultado.style.color = "green";
//     // } else {
//     //     resultado.textContent = "Algunas clasificaciones son incorrectas. Intenta nuevamente.";
//     //     resultado.style.color = "red";
//     // }
// }

const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
const respuestasContainer = document.getElementById('respuestas');

// Función para hacer que un elemento sea arrastrable
function makeDraggable(element) {
    element.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', element.innerHTML);
        e.dataTransfer.setData('text/plain', element.textContent);
        element.classList.add('dragging');
        // Guardamos si viene del área de respuestas o de una dropzone
        e.dataTransfer.setData('source', element.parentElement.classList.contains('dropzone') ? 'dropzone' : 'respuestas');
    });

    element.addEventListener('dragend', (e) => {
        element.classList.remove('dragging');
    });
}

// Hacer todos los draggables iniciales arrastrables
draggables.forEach(draggable => {
    makeDraggable(draggable);
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const source = e.dataTransfer.getData('source');
        const draggingElement = document.querySelector('.dragging');
        
        if (draggingElement) {
            // Si viene de una dropzone, simplemente moverlo
            if (source === 'dropzone') {
                dropzone.appendChild(draggingElement);
            } else {
                // Si viene del área de respuestas, crear una copia
                const newElement = document.createElement('div');
                newElement.classList.add('draggable');
                newElement.setAttribute('draggable', 'true');
                newElement.textContent = data;
                makeDraggable(newElement);
                dropzone.appendChild(newElement);
            }
        }
    });
});

// Permitir arrastrar de vuelta para eliminar (soltar fuera de dropzones)
document.addEventListener('dragover', (e) => {
    // Si no estamos sobre una dropzone, permitir el drop
    if (!e.target.classList.contains('dropzone') && !e.target.closest('.dropzone')) {
        e.preventDefault();
    }
});

document.addEventListener('drop', (e) => {
    // Si soltamos fuera de una dropzone
    if (!e.target.classList.contains('dropzone') && !e.target.closest('.dropzone')) {
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        const source = e.dataTransfer.getData('source');
        
        // Solo eliminar si venía de una dropzone
        if (draggingElement && source === 'dropzone') {
            draggingElement.remove();
        }
    }
});

function verificar() {
    let correctas = true;
    
    const respuestasCorrectas = {
        0: [['p', '→', 'r']],
        1: [['r', '↔', 'p', 'ꓥ', '¬', 'q']], 
        2: [['¬', 'p', 'V', 'q', '→', '¬', 'r']], 
        3: [['¬', '(', '¬', 'p', 'V', 'q', '→', '¬', 'r', ')']],
        4: [['q', 'ꓥ', 'p',  '→', '¬', 'r'], ['p', 'ꓥ', 'q',  '→', '¬', 'r']],
        5: [['r', '→', 'p', 'ꓥ', '¬', 'q']],
        6: [['¬', 'q', 'ꓥ', '¬', 'p', '→', '¬', 'r']],
        7: [['¬', 'q', '→', '(', 'p', '→', 'r', ')'], ['(', 'p', '→', 'r', ')', 'V', 'q'], ['p', 'ꓥ', '¬', 'q', '→', 'r']]
    };

    dropzones.forEach((dropzone, index) => {
        const respuestasUsuario = [...dropzone.querySelectorAll('.draggable')].map(item => item.textContent);
        const esCorrecto = respuestasCorrectas[index].some(correcta => JSON.stringify(correcta) === JSON.stringify(respuestasUsuario));
        
        if (esCorrecto) {
            dropzone.style.backgroundColor = "lightgreen";
        } else {
            dropzone.style.backgroundColor = "lightcoral";
            correctas = false;
        }
    });
}