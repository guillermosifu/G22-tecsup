// resolucion de ejercicios

// funcion declarativa de ejercicios
function CallMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      "ingrese el numero de ejericio que quiere ejecutar : \r\n 1.suma.\r\n 2.Promedio de examanes.\r\n 3.calcular Area."
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("el campo esta vacio");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

// funcion de contenido variables y argumentos
function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseInt(prompt("ingresa el valor 1"));
      let valor2 = parseInt(prompt("ingresa el valor 2"));
      alert(ej1_sumarValores(valor1, valor2));
      break;

    case 2:
      let ex1 = parseInt(prompt("ingrese nota1: "));
      let ex2 = parseInt(prompt("ingrese nota2 "));
      let ex3 = parseInt(prompt("ingrese nota3: "));
      let ex4 = parseInt(prompt("ingrese nota4: "));
      alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
  }
}

// funciones ejcutoras
function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "oye! ingresa datos";
  } else {
    return a + b;
  }
}

function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
  if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
    return "oye! ingresa datos";
  } else {
    return (ex1 + ex2 + ex3 + ex4) / 4;
  }
}
