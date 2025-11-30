document.addEventListener("DOMContentLoaded", function () {
    const tabla3Respuestas = ["V", "V", "V", "V", "F", "F", "F", "F", "V", "V", "V", "V", "F", "F", "F", "F"];

    function validarTabla(inputs, respuestas) {
        let valoresIngresados = Array.from(inputs).map(input => input.value.toUpperCase());
        return JSON.stringify(valoresIngresados) === JSON.stringify(respuestas);
    }

    function mostrarResultado(inputs, respuestas) {
        let valoresIngresados = Array.from(inputs).map(input => input.value.toUpperCase());
        let esCorrecto = JSON.stringify(valoresIngresados) === JSON.stringify(respuestas);

        inputs.forEach((input, index) => {
            input.style.backgroundColor = valoresIngresados[index] === respuestas[index] ? "lightgreen" : "lightcoral";
        });
    }

    document.querySelector("#validar1").addEventListener("click", function () {
        let tabla3Inputs = document.querySelectorAll("table:nth-of-type(1) input");
        mostrarResultado(tabla3Inputs, tabla3Respuestas);
    });
});
