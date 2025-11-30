document.addEventListener("DOMContentLoaded", function () {
    const tabla1Opciones = [
        ["V", "F", "V", "F"],
        ["F", "V", "F", "V"]
    ];
    const tabla2Respuestas = ["V", "V", "F", "F", "V", "V", "F", "F"];

    function validarTabla(inputs, respuestas, opcionesMultiples = false) {
        let valoresIngresados = Array.from(inputs).map(input => input.value.toUpperCase());
        if (opcionesMultiples) {
            return tabla1Opciones.some(opcion => JSON.stringify(opcion) === JSON.stringify(valoresIngresados));
        }
        return JSON.stringify(valoresIngresados) === JSON.stringify(respuestas);
    }

    function mostrarResultado(inputs, respuestas, opcionesMultiples = false) {
        let valoresIngresados = Array.from(inputs).map(input => input.value.toUpperCase());
        let esCorrecto = opcionesMultiples
            ? tabla1Opciones.some(opcion => JSON.stringify(opcion) === JSON.stringify(valoresIngresados))
            : JSON.stringify(valoresIngresados) === JSON.stringify(respuestas);
        
        inputs.forEach((input, index) => {
            if (opcionesMultiples) {
                let respuestaCorrecta = tabla1Opciones.some(opcion => JSON.stringify(opcion) === JSON.stringify(valoresIngresados));
                input.style.backgroundColor = respuestaCorrecta ? "lightgreen" : "lightcoral";
            } else {
                input.style.backgroundColor = valoresIngresados[index] === respuestas[index] ? "lightgreen" : "lightcoral";
            }
        });
    }

    document.querySelector("#validar1").addEventListener("click", function () {
        let tabla1Inputs = document.querySelectorAll("table:nth-of-type(1) input");
        let valoresIngresados = Array.from(tabla1Inputs).map(input => input.value.toUpperCase());
        let esCorrecto = tabla1Opciones.some(opcion => JSON.stringify(opcion) === JSON.stringify(valoresIngresados));
        
        tabla1Inputs.forEach((input, index) => {
            input.style.backgroundColor = esCorrecto ? "lightgreen" : "lightcoral";
        });
    });

    document.querySelector("#validar2").addEventListener("click", function () {
        let tabla2Inputs = document.querySelectorAll("table:nth-of-type(2) input");
        mostrarResultado(tabla2Inputs, tabla2Respuestas);
    });
});
