function verificar() {
  const respuestas = {
    col4: ["3", "5"],
    col6: ["4", "7"],
    col8: ["6", "9"]
  };

  const valoresCorrectos = {
    x1: "V", x2: "V", x3: "V", x4: "V",
    x5: "V", x6: "F", x7: "V", x8: "F",
    x9: "F", x10: "V", x11: "F", x12: "V",
    x13: "F", x14: "F", x15: "F", x16: "F"
  };

  const campos = {
    col4: [document.getElementById("col4_1"), document.getElementById("col4_2")],
    col6: [document.getElementById("col6_1"), document.getElementById("col6_2")],
    col8: [document.getElementById("col8_1"), document.getElementById("col8_2")]
  };

  let todoCorrecto = true;



   for (const grupo in campos) {
    const respuestasGrupo = respuestas[grupo];
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

  document.getElementById("resultado").textContent = todoCorrecto
    ? "¡Muy bien! Todas las respuestas son correctas."
    : "Revisa tus respuestas. Algunas no son correctas.";
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
    b1: "V",
    b2: "F",
    b3: "V",
    b4: "V"
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
    c4: "F"
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
    c4: "F"
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