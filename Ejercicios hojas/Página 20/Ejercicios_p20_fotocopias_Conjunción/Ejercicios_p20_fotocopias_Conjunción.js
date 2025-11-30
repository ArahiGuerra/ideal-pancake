function verificarParte1() {
    const respuesta0 = document.getElementById('respuesta0').checked;
    const respuesta1 = document.getElementById('respuesta1').checked;
    const respuesta2 = document.getElementById('respuesta2').checked;
    const respuesta3 = document.getElementById('respuesta3').checked;
    const respuesta4 = document.getElementById('respuesta4').checked;
    const respuesta5 = document.getElementById('respuesta5').checked;

    const resultado = (respuesta1 && respuesta3 && respuesta4 && respuesta5) && !respuesta2 && !respuesta0;

    const resultadoElemento = document.getElementById('resultadoParte1');
    if (resultado) {
        resultadoElemento.innerHTML = "<i class='fas fa-check-circle'></i> ¡Correcto!";
        resultadoElemento.className = 'correct';
    } else {
        resultadoElemento.innerHTML = "<i class='fas fa-times-circle'></i> Incorrecto. Inténtalo de nuevo.";
        resultadoElemento.className = 'incorrect';
        const boton = document.querySelector('#parte1 button');
        boton.textContent = 'Reintentar';
        boton.setAttribute('onclick', 'reiniciarParte1()');
    }
}

function verificarParte2() {
    const respuesta1 = document.querySelector('input[name="parte2_1"]:checked');
    const respuesta2 = document.querySelector('input[name="parte2_2"]:checked');
    const respuesta3 = document.querySelector('input[name="parte2_3"]:checked');
    const respuesta4 = document.querySelector('input[name="parte2_4"]:checked');
    const respuesta5 = document.querySelector('input[name="parte2_5"]:checked');

    const resultado = respuesta1?.value === 'falso' &&
                     respuesta2?.value === 'verdadero' &&
                     respuesta3?.value === 'falso' &&
                     respuesta4?.value === 'falso' &&
                     respuesta5?.value === 'verdadero';

    const resultadoElemento = document.getElementById('resultadoParte2');
    if (resultado) {
        resultadoElemento.innerHTML = "<i class='fas fa-check-circle'></i> ¡Correcto!";
        resultadoElemento.className = 'correct';
    } else {
        resultadoElemento.innerHTML = "<i class='fas fa-times-circle'></i> Incorrecto. Inténtalo de nuevo.";
        resultadoElemento.className = 'incorrect';
        const boton = document.querySelector('#parte2 button');
        boton.textContent = 'Reintentar';
        boton.setAttribute('onclick', 'reiniciarParte2()');
    }
}

function checkAnswers() {
    const correctAnswers = ["4", "1", "5", "3", "2"];
    let score = 0;

    correctAnswers.forEach((answer, index) => {
        const input = document.getElementById(`answer-${index + 1}`);
        if (input.value === answer) {
            input.style.borderColor = "";
            score++;
        } else {
            input.style.borderColor = "";
        }
    });

    const result = document.getElementById("result");
    if (score === correctAnswers.length) {
        result.innerHTML = "<i class='fas fa-check-circle'></i> ¡Correcto! Todas las respuestas son correctas.";
        result.className = "correct";
    } else {
        result.innerHTML = `<i class='fas fa-times-circle'></i> Algunas de tus respuestas son incorrectas`;
        result.className = "incorrect";
        const boton = document.querySelector('#parte3 button');
        boton.textContent = 'Reintentar';
        boton.setAttribute('onclick', 'reiniciarParte3()');
    }
}

function reiniciarParte1() {
    document.getElementById('respuesta0').checked = false;
    document.getElementById('respuesta1').checked = false;
    document.getElementById('respuesta2').checked = false;
    document.getElementById('respuesta3').checked = false;
    document.getElementById('respuesta4').checked = false;
    document.getElementById('respuesta5').checked = false;

    const resultadoElemento = document.getElementById('resultadoParte1');
    resultadoElemento.textContent = '';
    resultadoElemento.className = '';

    const boton = document.querySelector('#parte1 button');
    boton.textContent = 'Verificar respuestas';
    boton.setAttribute('onclick', 'verificarParte1()');
}

function reiniciarParte2() {
    document.querySelectorAll('input[name^="parte2_"]:checked').forEach(input => input.checked = false);

    const resultadoElemento = document.getElementById('resultadoParte2');
    resultadoElemento.textContent = '';
    resultadoElemento.className = '';

    const boton = document.querySelector('#parte2 button');
    boton.textContent = 'Verificar respuestas';
    boton.setAttribute('onclick', 'verificarParte2()');
}

function reiniciarParte3() {
    document.querySelectorAll('#quiz-form input[type="text"]').forEach(input => input.value = '');

    const resultadoElemento = document.getElementById('result');
    resultadoElemento.textContent = '';
    resultadoElemento.className = '';

    const boton = document.querySelector('#parte3 button');
    boton.textContent = 'Verificar respuestas';
    boton.setAttribute('onclick', 'checkAnswers()');
}
