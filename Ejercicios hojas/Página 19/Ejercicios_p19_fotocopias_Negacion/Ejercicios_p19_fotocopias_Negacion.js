// Respuestas correctas
const respuestasParte1 = [1, 2, 3, 6];
const respuestasParte2 = {
    p: "verdadero",
    notP: "falso",
};

// Verificar Parte 1
function verificarParte1() {
    const checkboxes = document.querySelectorAll('#form-parte1 input[type="checkbox"]');
    const seleccionadas = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            seleccionadas.push(index);
        }
    });

    const correctas = seleccionadas.every(index => respuestasParte1.includes(index)) &&
                     seleccionadas.length === respuestasParte1.length;

    const resultado = document.getElementById('resultado-parte1');
    const boton = document.querySelector('#parte1 button');

    if (correctas) {
        resultado.textContent = "¡Todas tus respuestas son correctas!";
        resultado.style.color = "green";
        boton.textContent = "Verificar respuestas";
        boton.classList.remove('reintentar');
        checkboxes.forEach(checkbox => checkbox.disabled = true);
    } else {
        resultado.textContent = "Algunas de tus respuestas son incorrectas, revísalas.";
        resultado.style.color = "red";
        boton.textContent = "Reintentar";
        boton.classList.add('reintentar');
        boton.onclick = reiniciarParte1;
    }
}

function reiniciarParte1() {
    const checkboxes = document.querySelectorAll('#form-parte1 input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    const resultado = document.getElementById('resultado-parte1');
    resultado.textContent = "";
    const boton = document.querySelector('#parte1 button');
    boton.textContent = "Verificar respuestas";
    boton.classList.remove('reintentar');
    boton.onclick = verificarParte1;
}

// Verificar Parte 2
function verificarParte2() {
    const valorP = document.getElementById('valor-p').value;
    const valorNotP = document.getElementById('valor-not-p').value;

    const correctas = valorP === respuestasParte2.p && valorNotP === respuestasParte2.notP;

    const resultado = document.getElementById('resultado-parte2');
    const boton = document.querySelector('#parte2 button');

    if (correctas) {
        resultado.textContent = "¡Todas tus respuestas son correctas!";
        resultado.style.color = "green";
        boton.textContent = "Verificar respuestas";
        boton.classList.remove('reintentar');
        document.getElementById('valor-p').disabled = true;
        document.getElementById('valor-not-p').disabled = true;
    } else {
        resultado.textContent = "Algunas de tus respuestas son incorrectas, revísalas.";
        resultado.style.color = "red";
        boton.textContent = "Reintentar";
        boton.classList.add('reintentar');
        boton.onclick = reiniciarParte2;
    }
}

function reiniciarParte2() {
    document.getElementById('valor-p').value = "x";
    document.getElementById('valor-not-p').value = "x";
    const resultado = document.getElementById('resultado-parte2');
    resultado.textContent = "";
    const boton = document.querySelector('#parte2 button');
    boton.textContent = "Verificar respuestas";
    boton.classList.remove('reintentar');
    boton.onclick = verificarParte2;
}
