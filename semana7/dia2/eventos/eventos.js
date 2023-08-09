function imprimir() {
  console.log("imprimo desdes js");
}
//  desde archivo externo
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("desde js");
// });

btn.onclick = function () {
  alert("hola priabando");
};

// probando el evento KEyup

const input = document.getElementById("inputEnter");
const mensaje = document.getElementById("mensaje");

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const inputValue = input.value;
    mensaje.textContent = `ingresaste :${inputValue}`;
    input.value = "";
  }
});

// este es usando sweet alert

const btnPrueba = document.querySelector("#btn-prueba");
btnPrueba.onclick = function () {
  Swal.fire("hola mundo");
};

//pregunta

const btnPregunta = document.querySelector("#btn-pregunta");
btnPregunta.onclick = function () {
  Swal.fire("Alguna Pregunta", "Aca el texto de la pregunta ", "question");
};

//Error

const btnError = document.querySelector("#btn-error");

btnError.onclick = () => {
  Swal.fire("error", "hubo un error", "error");
};

// warning

const btnWarning = document.querySelector("#btn-warning");

btnWarning.onclick = function () {
  Swal.fire("warning", "hay una alerta", "warning");
};
//danger

const btnDanger = document.querySelector("#btn-danger");

btnDanger.onclick = function () {
  Swal.fire();
};

//  tipo notificaion

const btnNotificacion = document.querySelector("#btn-imagen");

btnNotificacion.onclick = function () {
  Swal.fire({
    position: "top-start",
    icon: "success",
    title: "Notificacion",
    showConfirmButton: true,
    timer: 3000,
  });
};

// imagen

const marvel = "https://i.blogs.es/f824b1/new-project-3-1-/1366_2000.jpeg";
const btnImage = document.querySelector("#btn-img");
btnImage.onclick = function () {
  Swal.fire({
    title: "Marvel",
    text: "alerta con imagen",
    imageUrl: marvel,
    imageWidth: 300,
    imageHeight: 300,
  });
};
