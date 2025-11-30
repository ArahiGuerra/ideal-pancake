const respuestasContainer = document.getElementById('respuestas');
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

// Hacer que los elementos puedan ser arrastrados y clonados
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.textContent);
        e.dataTransfer.effectAllowed = 'copy';
    });
});

// Dropzones para recibir elementos clonados
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        
        // Crear un clon del elemento arrastrado
        const newElement = document.createElement('div');
        newElement.classList.add('draggable', 'cloned');
        newElement.textContent = data;
        newElement.draggable = true;
        
        // Permitir arrastrar el elemento clonado fuera de la dropzone
        newElement.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.textContent);
            e.dataTransfer.effectAllowed = 'move';
            setTimeout(() => {
                newElement.style.display = 'none';
            }, 0);
        });
        
        newElement.addEventListener('dragend', (e) => {
            // Si no se soltó en una dropzone, eliminar el elemento
            const dropzoneHit = Array.from(dropzones).some(dz => {
                const rect = dz.getBoundingClientRect();
                return (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                );
            });
            
            if (!dropzoneHit) {
                newElement.remove();
                dropzone.style.backgroundColor = "";
            } else {
                newElement.style.display = '';
            }
        });
        
        dropzone.innerHTML = ''; // Limpiar el contenido anterior
        dropzone.appendChild(newElement);
        
        // Resetear el estilo de fondo al agregar nueva respuesta
        dropzone.style.backgroundColor = "";
    });
});

function verificar() {
    let todasCorrectas = true;
    let hayRespuestas = false;
    
    dropzones.forEach(dropzone => {
        const respuestaCorrecta = dropzone.getAttribute('data-correct').trim();
        const respuestaUsuario = dropzone.querySelector('.draggable')?.textContent.trim();

        if (respuestaUsuario) { // Solo evaluar si hay una respuesta en la dropzone
            hayRespuestas = true;
            if (respuestaUsuario === respuestaCorrecta) {
                dropzone.style.backgroundColor = "#ccffcc"; // Verde si es correcto
            } else {
                dropzone.style.backgroundColor = "#ffcccc"; // Rojo si es incorrecto
                todasCorrectas = false;
            }
        } else {
            dropzone.style.backgroundColor = ""; // Mantiene el fondo sin cambios si está vacío
            todasCorrectas = false;
        }
    });

    const resultado = document.getElementById('resultado');
    if (!hayRespuestas) {
        resultado.textContent = "Por favor, completa al menos una respuesta antes de verificar.";
        resultado.style.color = "orange";
    } else if (todasCorrectas) {
        resultado.textContent = "¡Correcto! Has clasificado todas las proposiciones correctamente.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Algunas clasificaciones son incorrectas. Intenta nuevamente.";
        resultado.style.color = "red";
    }
}