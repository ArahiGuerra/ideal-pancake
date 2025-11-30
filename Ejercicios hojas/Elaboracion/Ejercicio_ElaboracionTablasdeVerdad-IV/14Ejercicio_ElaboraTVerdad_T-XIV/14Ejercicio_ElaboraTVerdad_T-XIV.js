function verificar() {
      const respuestasCorrectas = {
        col3: ["5"],
        col4: ["1"],
        col5: ["4", "6"],
        col6: ["2"],
        col7: ["3", "9"],
        col8: ["1"],
        col9: ["8", "10"],
        col10: ["2"]
      };

      const campos = {
        col3: [document.getElementById("col3")],
        col4: [document.getElementById("col4")],
        col5: [document.getElementById("col5_1"), document.getElementById("col5_2")],
        col6: [document.getElementById("col6")],
        col7: [document.getElementById("col7_1"), document.getElementById("col7_2")],
        col8: [document.getElementById("col8")],
        col9: [document.getElementById("col9_1"), document.getElementById("col9_2")],
        col10: [document.getElementById("col10")]
      };

      let todoCorrecto = true;

      for (const grupo in campos) {
        const respuestasGrupo = respuestasCorrectas[grupo];
        const inputs = campos[grupo];

        inputs.forEach(input => {
          const valor = input.value.trim();
          if (respuestasGrupo.includes(valor)) {
            input.classList.remove("incorrecto");
            input.classList.add("correcto");
          } else {
            todoCorrecto = false;
            input.classList.remove("correcto");
            input.classList.add("incorrecto");
          }
        });
      }

      const resultado = document.getElementById("resultado");
      if (todoCorrecto) {
        resultado.textContent = "¡Ya has seleccionado todas las respuestas correctas!";
        resultado.className = "exito";
      } else {
        resultado.textContent = "Revisa tus respuestas. Algunas no son correctas.";
        resultado.className = "error";
      }
    }

function verificarSegundaTabla() {

  const valoresCorrectos = {
    x1: "V", x2: "V", x3: "V", x4: "V",
    x5: "V", x6: "F", x7: "V", x8: "F",
    x9: "F", x10: "V", x11: "F", x12: "V",
    x13: "F", x14: "F", x15: "F", x16: "F"
  };

  let todoCorrecto = true;

  for (const id in valoresCorrectos) {
    const input = document.getElementById(id);
    if (input) {
      if (input.value.trim().toUpperCase() === valoresCorrectos[id]) {
        input.classList.remove("incorrecto");
        input.classList.add("correcto");
      } else {
        todoCorrecto = false;
        input.classList.remove("correcto");
        input.classList.add("incorrecto");
      }
    }
  }

  if (todoCorrecto) {
    document.getElementById("instruccion").textContent =
      "";

    document.getElementById("tablaAntigua").style.display = "true";
    document.getElementById("tablaNueva").style.display = "block";
  } else {
    document.getElementById("resultado2").textContent =
      "Revisa tus respuestas. Algunas no son correctas.";
  }
}

function reiniciarSegundaTabla() {
  const ids = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10", "x11", "x12", "x13", "x14", "x15", "x16"];
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correcto", "incorrecto");
  });
  document.getElementById("resultado2").textContent = "";
}

function verificarTerceraTabla() {
  const respuestas = {
    b1: "F",
    b2: "V",
    b3: "V",
    b4: "F",
    b5: "V",
    b6: "F",
    b7: "F",
    b8: "V"
  };

  let todoCorrecto = true;

  for (const id in respuestas) {
    const input = document.getElementById(id);
    if (input.value.trim().toUpperCase() === respuestas[id]) {
      input.classList.remove("incorrecto");
      input.classList.add("correcto");
    } else {
      todoCorrecto = false;
      input.classList.remove("correcto");
      input.classList.add("incorrecto");
    }
  }

  const mensaje = document.getElementById("resultado3");
  if (todoCorrecto) {
    mensaje.textContent = "¡Muy bien! Todas las respuestas son correctas.";
    
    // Cambiar instrucción y avanzar a cuarta tabla
    document.getElementById("instruccion").textContent =
      "";

    document.getElementById("tablaNueva").style.display = "true";
    document.getElementById("tablaCuarta").style.display = "block";
  } else {
    mensaje.textContent = "Revisa tus respuestas. Algunas no son correctas.";
  }
}

function reiniciarTerceraTabla() {
  const ids = ["b1", "b2", "b3", "b4"];
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correcto", "incorrecto");
  });
  document.getElementById("resultado3").textContent = "";
}

function verificarCuartaTabla() {
  const respuestas = {
    c1: "V",
    c2: "F",
    c3: "F",
    c4: "V"
  };

  let todoCorrecto = true;

  for (const id in respuestas) {
    const input = document.getElementById(id);
    if (input.value.trim().toUpperCase() === respuestas[id]) {
      input.classList.remove("incorrecto");
      input.classList.add("correcto");
    } else {
      todoCorrecto = false;
      input.classList.remove("correcto");
      input.classList.add("incorrecto");
    }
  }

  const mensaje = document.getElementById("resultado4");
  mensaje.textContent = todoCorrecto
    ? "¡Excelente! Has completado correctamente esta sección."
    : "Revisa tus respuestas. Algunas no son correctas.";
}

function reiniciarCuartaTabla() {
  const ids = ["c1", "c2", "c3", "c4"];
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correcto", "incorrecto");
  });
  document.getElementById("resultado4").textContent = "";
}

function verificarCuartaTabla() {
  const respuestas = {
    c1: "V",
    c2: "F",
    c3: "F",
    c4: "V"
  };

  let todoCorrecto = true;

  for (const id in respuestas) {
    const input = document.getElementById(id);
    if (input.value.trim().toUpperCase() === respuestas[id]) {
      input.classList.remove("incorrecto");
      input.classList.add("correcto");
    } else {
      todoCorrecto = false;
      input.classList.remove("correcto");
      input.classList.add("incorrecto");
    }
  }

  const mensaje = document.getElementById("resultado4");
  if (todoCorrecto) {
    mensaje.textContent = "¡Muy bien! Todas las respuestas son correctas.";

    // Cambiar instrucción y avanzar a quinta tabla
    document.getElementById("instruccion").textContent =
      "";

    document.getElementById("tablaCuarta").style.display = "true";
    document.getElementById("tablaFinal").style.display = "block";
  } else {
    mensaje.textContent = "Revisa tus respuestas. Algunas no son correctas.";
  }
}

function reiniciarCuartaTabla() {
  const ids = ["c1", "c2", "c3", "c4"];
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correcto", "incorrecto");
  });
  document.getElementById("resultado4").textContent = "";
}

function verificarTablaFinal() {
  const respuestas = {
    y1: "V",
    y2: "V",
    y3: "V",
    y4: "V"
  };

  let todoCorrecto = true;

  for (const id in respuestas) {
    const input = document.getElementById(id);
    if (input.value.trim().toUpperCase() === respuestas[id]) {
      input.classList.remove("incorrecto");
      input.classList.add("correcto");
    } else {
      todoCorrecto = false;
      input.classList.remove("correcto");
      input.classList.add("incorrecto");
    }
  }

  const mensaje = document.getElementById("resultadoFinal");
  mensaje.textContent = todoCorrecto
    ? "¡Excelente, has completado la tabla!"
    : "Revisa tus respuestas. Algunas no son correctas.";
}

function reiniciarTablaFinal() {
  const ids = ["y1", "y2", "y3", "y4"];
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correcto", "incorrecto");
  });
  document.getElementById("resultadoFinal").textContent = "";
}
