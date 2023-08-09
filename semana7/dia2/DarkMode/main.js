// stamos capturando el elemento a usar

const btn = document.querySelector(".btn");
const mensaje = document.querySelector("#mensaje");

//estamos declarando un evento y su funcion
btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");

  if (document.documentElement.classList.contains("dark-theme")) {
    mensaje.textContent = "estas en modo Oscuro";
  } else {
    mensaje.textContent = "estas en modo Light";
  }
});
