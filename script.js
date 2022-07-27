let curso;
let respuesta;
let cantidadC4d = 0;
let cantidadBlender = 0;
let cantidadError = 0;

do {
  curso = prompt("Seleccione un curso: C4D o Blender");

  if (curso == "C4D") {
    cantidadC4d++;
  } else if (curso == "Blender") {
    cantidadBlender++;
  } else {
    cantidadError++;
  }

  respuesta = confirm("Desea seleccionar otro curso?");
} while (respuesta);

console.log(`Veces seleccionado C4D: ${cantidadC4d}`);
console.log(`Veces seleccionado Blender: ${cantidadBlender}`);
console.log(`Veces erroneas: ${cantidadError}`);
