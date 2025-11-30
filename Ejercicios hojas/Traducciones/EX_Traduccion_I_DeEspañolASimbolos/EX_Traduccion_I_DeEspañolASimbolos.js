const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    });
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        
        const newElement = document.createElement('div');
        newElement.classList.add('draggable');
        newElement.textContent = data;
        dropzone.appendChild(newElement);
    });
});

function verificar() {
    let correctas = true;
    
    const respuestasCorrectas = {
        0: [['p', 'ꓥ', 'q'], ['q', 'ꓥ', 'p']],
        1: [['q', 'ꓥ', 'p'], ['p', 'ꓥ', 'q']],
        2: [['¬', 'q', '≠', '¬', 'p']],
        3: [['p', '→', 'q']],
        4: [['¬','q', '→', 'r'], ['¬', 'r', '→', 'q'], ['r', 'V', 'q'], ['q', 'V', 'r']]
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

    // const resultado = document.getElementById('resultado');
    // if (correctas) {
    //     resultado.textContent = "¡Correcto! Has clasificado todas las proposiciones correctamente.";
    //     resultado.style.color = "green";
    // } else {
    //     resultado.textContent = "Algunas clasificaciones son incorrectas. Intenta nuevamente.";
    //     resultado.style.color = "red";
    // }
}
