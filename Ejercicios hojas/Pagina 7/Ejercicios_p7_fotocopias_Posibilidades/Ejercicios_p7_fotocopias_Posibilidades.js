const correctAnswers = {
    1: { q1a: "FALSO", q1b: "VERDADERO", q1c: "FALSO" },
    2: { q2a: "FALSO", q2b: "FALSO", q2c: "VERDADERO" },
    3: { q3a: "FALSO O VERDADERO", q3b: "FALSO O VERDADERO", q3c: "VERDADERO" },
    4: { q4a: "FALSO O VERDADERO", q4b: "VERDADERO", q4c: "FALSO O VERDADERO" },
  };
  
  document.querySelectorAll(".question").forEach((question) => {
    const reactiveId = question.getAttribute("id").split("-")[1];
    const feedbackElement = document.getElementById(`feedback-${reactiveId}`);
    const button = question.querySelector(".confirm-btn");
    const selects = question.querySelectorAll("select");
  

    button.style.display = "none";
  
    // Verificar si todos los selects tienen respuestas válidas
    const checkAllSelected = () => {
      const allSelected = Array.from(selects).every(
        (select) => select.value !== "x"
      );
      button.style.display = allSelected ? "block" : "none";
    };
  
    // Escuchar cambios en los selects
    selects.forEach((select) => {
      select.addEventListener("change", checkAllSelected);
    });
  
    // Manejar clic en el botón
    button.addEventListener("click", () => {
      const answers = correctAnswers[reactiveId];
      let allCorrect = true;
  
      Object.keys(answers).forEach((questionId) => {
        const selectedValue = document.getElementById(questionId).value;
        if (selectedValue !== answers[questionId]) {
          allCorrect = false;
        }
      });
  
      if (allCorrect) {
        feedbackElement.textContent = "Todas tus respuestas son correctas.";
        feedbackElement.style.color = "green";
      } else {
        feedbackElement.textContent =
          "Algunas de tus respuestas son incorrectas, vuelve a intentarlo.";
        feedbackElement.style.color = "red";
        button.textContent = "Reintentar";
        // Restablecer valores al presionar "Reintentar"
        button.addEventListener("click", () => {
          feedbackElement.textContent = "";
          button.textContent = "Confirmar";
          button.style.display = "none";
          selects.forEach((select) => {
            select.value = "x";
          });
        });
      }
    });
  });
  