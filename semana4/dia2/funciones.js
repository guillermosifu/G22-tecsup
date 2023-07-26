// que son las funciones  es un conjunto de solusiones para poder realizar tareas

function nombreDeLafuncion() {
  //una ve declaremo la funcion  todo el codigo que haga estara dentor de este blqoque
  //para ejecutura un fucncion debo invocarla

  console.log("esta es mi primera funcion");
}

//para poder ejecutar solo tengo que poner el nombre con sus (parentesis)
//una vez que llmena la funcion se ejcutara too lo que se le pida dentro
nombreDeLafuncion();
//  lo que esta debtoe de los parentesis se le conoce como parametros

sumar(1000, 2000);

//cuants tiposde funciones exixsten  y cuales son?

//funcion declarativa
function sumar(numero1, numero2) {
  const suma = numero1 + numero2;
  console.log("el resultado de la suma es :", suma);
}

//funcion anonima

const sumando = function (numero1, numero2) {
  const suma = numero1 + numero2;
  console.log("el resultado de la suma es :", suma);
};

sumando(100, 20);

//funcion flecha o ARROWS FUNCTION

const sumando2 = (numero1, numero2) => {
  const suma = numero1 + numero2;
  console.log("el resultado de la suma es :", suma);
};

sumando2(200, 50);
