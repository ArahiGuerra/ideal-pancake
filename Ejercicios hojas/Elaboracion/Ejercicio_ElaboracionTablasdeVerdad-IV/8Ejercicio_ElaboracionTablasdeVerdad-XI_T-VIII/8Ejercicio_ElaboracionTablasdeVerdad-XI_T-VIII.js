

function verificarSegundaTabla() {

  const valoresCorrectos = {
    x1: "V", x2: "V", x3: "V", x4: "F", x5: "F", x6: "F"
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
  const ids = ["x1", "x2", "x3", "x4", "x5", "x6"];
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correcto", "incorrecto");
  });
  document.getElementById("resultado2").textContent = "";
}

function verificarTerceraTabla() {
  const respuestas = {
    b1: "V", b2: "F"
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
  const ids = ["b1", "b2"];
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
    c2: "V"
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
    ? "¡Excelente! Has completado correctamente la tabla."
    : "Revisa tus respuestas. Algunas no son correctas.";
}

function reiniciarCuartaTabla() {
  const ids = ["c1", "c2"];
  ids.forEach(id => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correcto", "incorrecto");
  });
  document.getElementById("resultado4").textContent = "";
}

// function verificarCuartaTabla() {
//   const respuestas = {
//     c1: "V",
//     c2: "V",
//   };

//   let todoCorrecto = true;

//   for (const id in respuestas) {
//     const input = document.getElementById(id);
//     if (input.value.trim().toUpperCase() === respuestas[id]) {
//       input.classList.remove("incorrecto");
//       input.classList.add("correcto");
//     } else {
//       todoCorrecto = false;
//       input.classList.remove("correcto");
//       input.classList.add("incorrecto");
//     }
//   }

//   const mensaje = document.getElementById("resultado4");
//   if (todoCorrecto) {
//     mensaje.textContent = "¡Muy bien! Todas las respuestas son correctas.";

//     // Cambiar instrucción y avanzar a quinta tabla
//     document.getElementById("instruccion").textContent =
//       "1.4. Ahora ya sólo falta el último paso: resolver la columna correspondiente a la operación principal. Anota los valores para esa columna:";

//     document.getElementById("tablaCuarta").style.display = "none";
//     document.getElementById("tablaFinal").style.display = "block";
//   } else {
//     mensaje.textContent = "Revisa tus respuestas. Algunas no son correctas.";
//   }
// }

// function reiniciarCuartaTabla() {
//   const ids = ["c1", "c2", "c3", "c4"];
//   ids.forEach(id => {
//     const input = document.getElementById(id);
//     input.value = "";
//     input.classList.remove("correcto", "incorrecto");
//   });
//   document.getElementById("resultado4").textContent = "";
// }

