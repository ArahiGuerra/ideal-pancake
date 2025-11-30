function checkAnswer(button) {
    let questionDiv = button.parentElement;
    let correctAnswer = questionDiv.getAttribute("data-answer");
    let buttons = questionDiv.querySelectorAll("button");

    // Deshabilitar todos los botones después de una selección
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    // Aplicar estilos a cada botón
    buttons.forEach(btn => {
        if (btn.innerText === correctAnswer) {
            btn.style.backgroundColor = "green";  // Correcta en verde
            btn.style.color = "white";
        }
        if (btn === button && btn.innerText !== correctAnswer) {
            btn.style.backgroundColor = "red";  // Incorrecta en rojo
            btn.style.color = "white";
        }
    });
}
