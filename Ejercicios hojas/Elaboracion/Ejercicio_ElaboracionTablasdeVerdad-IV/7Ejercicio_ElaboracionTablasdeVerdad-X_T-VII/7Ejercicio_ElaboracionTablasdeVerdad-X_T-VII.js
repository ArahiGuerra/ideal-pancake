

function verificarSegundaTabla() {

  const valoresCorrectos = {
    x1: "V", x2: "V", x3: "V", x4: "V", x5: "V", x6: "V", 
    x7: "V", x8: "F", x9: "F", x10: "V", x11: "V", x12: "F",
    x13: "F", x14: "V", x15: "V", x16: "F", x17: "F", x18: "V",
    x19: "F", x20: "F", x21: "F", x22: "F", x23: "F", x24: "F" 
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
  const ids = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10", "x11", "x12", "x13", "x14", "x15", "x16", "x17", "x18", "x19", "x20", "x21", "x22", "x23", "x24"];
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correcto", "incorrecto");
  });
  document.getElementById("resultado2").textContent = "";
}

function verificarTerceraTabla() {
  const respuestas = {
    b1: "V", b2: "V", b3: "V", b4: "F",
    b5: "V", b6: "F", b7: "V", b8: "F",
    b9: "F", b10: "V", b11: "V", b12: "V"
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
  const ids = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12"];
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
