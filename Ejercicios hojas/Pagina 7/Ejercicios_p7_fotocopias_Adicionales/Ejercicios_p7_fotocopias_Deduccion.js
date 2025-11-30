document.querySelectorAll(".checkAnswers").forEach(button => {
    button.addEventListener("click", function() {
        const questionBlock = button.parentElement;
        const checkboxes = questionBlock.querySelectorAll("input[type='checkbox']");
        let correct = 0;
        let total = 0;
        let hasIncorrect = false;

        checkboxes.forEach(checkbox => {
            const isCorrect = checkbox.dataset.correct === "true";
            const isChecked = checkbox.checked;

            if (isCorrect) total++;
            if (isCorrect && isChecked) correct++;
            if (!isCorrect && isChecked) {
                hasIncorrect = true;
            }
        });

        const result = questionBlock.querySelector(".result");

        if (hasIncorrect || correct < total) {
            result.textContent = "Algunas respuestas son incorrectas. Revisa nuevamente.";
            result.style.color = "red";
            button.textContent = "Reintentar";
            button.onclick = () => {
                checkboxes.forEach(checkbox => checkbox.checked = false);
                result.textContent = "";
                button.textContent = "Verificar Respuestas";
                button.onclick = null; // Restablece el comportamiento del botón
            };
        } else if (correct === total && total > 0) { // Ensure total > 0
            result.textContent = "¡Todas tus respuestas son correctas!";
            result.style.color = "green";
            button.textContent = "Correcto";
            button.disabled = true; // Deshabilita el botón si todas las respuestas son correctas
        }
    });
});