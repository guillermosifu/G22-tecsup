// API (APLICATION PROGRAMMIN INTERFACE)
// EN JS EXISTE UNA FUNCION LA CUAL SE ENCARAG DE HACER LA PETICION DE ESA DATA

//FECTH()
// DIFERENTES TIPOS DE PETICIONES
//GET = SIRVE PARA OBTENER INFO
// POST = SIVE PARA CREAR DATOS
// PUT = SIRVE PARA ACTUALIZAR DATOS
// DELETE

// FUNCION ASYNC
// FUNCIONES FUERON CREAD PARA EL CONSUMOS DE SERVICIOS

//  url = https://api.github.com/users/guillermo

//capturamos cada elemento donde sera reemplazado con dato del API
const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUser = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubFollower = document.querySelector("#github-follower");
const githubFollowing = document.querySelector("#github-following");
const githubRepos = document.querySelector("#github-repos");

// loe elementos los cuales generaran la busqueda y la accion
const githubSearch = document.querySelector("#github-search");
const githubAction = document.querySelector("#github-action-search");

githubAction.onclick = () => {
  const username = githubSearch.value;
  githubSearch.value = "";
  //aca debemos validar el campo vacio
  if (username === "") {
    Swal.fire({
      title: "Error",
      text: "Debes llenar los campos",
      icon: "error",
    });
    return;
  }

  obtenerDatosGithub(username)
};

// ahora generar la funcioness
const obtenerDatosGithub = async (username) => {
  //esta funcion hara el fectch del API
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log("imprime el api", data);
};


obtenerDatosGithub()