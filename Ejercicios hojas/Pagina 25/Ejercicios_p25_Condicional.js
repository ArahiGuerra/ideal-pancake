// Respuestas correctas
const respuestasParte1 = [0, 1, 2, 4, 8, 10];
const respuestasParte2 = ["verdadero", "verdadero", "verdadero", "verdadero", "falso"];

function verificarParte1() {
    const checkboxes = document.querySelectorAll('#form-parte1 input[type="checkbox"]');
    let seleccionadas = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            seleccionadas.push(index);
        }
    });

    let hayIncorrectas = false;

    checkboxes.forEach((checkbox, index) => {
        // Limpiar estilos primero
        checkbox.parentElement.style.color = "black";

        if (checkbox.checked) {
            if (respuestasParte1.includes(index)) {
                checkbox.parentElement.style.color = "green";
            } else {
                checkbox.parentElement.style.color = "red";
                hayIncorrectas = true;
            }
        }
    });

    const resultado = document.getElementById('resultado-parte1');
    const boton = document.querySelector('#parte1 button');

    if (
        seleccionadas.length === respuestasParte1.length &&
        seleccionadas.every(index => respuestasParte1.includes(index))
    ) {
        resultado.textContent = "¡Todas tus respuestas son correctas!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Algunas respuestas son incorrectas.";
        resultado.style.color = "red";
        boton.textContent = "Reintentar";
        boton.onclick = reiniciarParte1;
    }
}


// // Verificar Parte 1
// function verificarParte1() {
//     const checkboxes = document.querySelectorAll('#form-parte1 input[type="checkbox"]');
//     let seleccionadas = [];

//     checkboxes.forEach((checkbox, index) => {
//         if (checkbox.checked) {
//             seleccionadas.push(index);
//         }
//     });

//     let correctas = seleccionadas.every(index => respuestasParte1.includes(index)) &&
//                     seleccionadas.length === respuestasParte1.length;

//     const resultado = document.getElementById('resultado-parte1');
//     const boton = document.querySelector('#parte1 button');

//     checkboxes.forEach((checkbox, index) => {
//         if (respuestasParte1.includes(index)) {
//             checkbox.parentElement.style.color = "green"; // Correctas en verde
//         } else if (checkbox.checked) {
//             checkbox.parentElement.style.color = "red"; // Incorrectas en rojo
//         } else {
//             checkbox.parentElement.style.color = "black"; // Restablecer a negro
//         }
//     });

//     resultado.textContent = correctas ? "¡Todas tus respuestas son correctas!" : "Algunas respuestas son incorrectas.";
//     resultado.style.color = correctas ? "green" : "red";

//     if (!correctas) {
//         boton.textContent = "Reintentar";
//         boton.onclick = reiniciarParte1;
//     }
// }

// function reiniciarParte1() {
//     const checkboxes = document.querySelectorAll('#form-parte1 input[type="checkbox"]');
//     checkboxes.forEach(checkbox => {
//         checkbox.checked = false;
//         checkbox.parentElement.style.color = "black";
//     });

//     const resultado = document.getElementById('resultado-parte1');
//     resultado.textContent = "";
    
//     const boton = document.querySelector('#parte1 button');
//     boton.textContent = "Verificar respuestas";
//     boton.onclick = verificarParte1;
// }

// Verificar Parte 2
function verificarParte2() {
    const selects = document.querySelectorAll("#form-parte2 select");
    let respuestasUsuario = [];

    selects.forEach(select => {
        respuestasUsuario.push(select.value);
    });

    let correctas = respuestasUsuario.every((respuesta, index) => respuesta === respuestasParte2[index]);

    const resultado = document.getElementById('resultado-parte2');
    const boton = document.querySelector('#parte2 button');

    selects.forEach((select, index) => {
        if (select.value === respuestasParte2[index]) {
            select.style.backgroundColor = "green"; // Correctas en verde
            select.style.color = "white";
        } else {
            select.style.backgroundColor = "red"; // Incorrectas en rojo
            select.style.color = "white";
        }
    });

    resultado.textContent = correctas ? "¡Todas tus respuestas son correctas!" : "Algunas respuestas son incorrectas.";
    resultado.style.color = correctas ? "green" : "red";

    if (!correctas) {
        boton.textContent = "Reintentar";
        boton.onclick = reiniciarParte2;
    }
}

function reiniciarParte2() {
    const selects = document.querySelectorAll("#form-parte2 select");
    selects.forEach(select => {
        select.value = "x"; // Restablecer las opciones
        select.style.backgroundColor = "white";
        select.style.color = "black";
    });

    const resultado = document.getElementById('resultado-parte2');
    resultado.textContent = "";

    const boton = document.querySelector('#parte2 button');
    boton.textContent = "Verificar respuestas";
    boton.onclick = verificarParte2;
}
