//realizaremos la logica del poekdex

const pokemonContainer = document.querySelector("#row-pokemones");
//haremos la funcion que trae lso datos del api

//tine que usar fecth
const obtenerPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();
  console.log("imprimo pokemon", data.results);
  setpokemonsView(data.results);
};

//amos a crear la funcion que pinte los pokemones en el navegador

const setpokemonsView = (results) => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  results.map(async (result, index) => {
    //por cada iteracion crea la variable html

    const html = `
        <div class ="col-md-3 mt-3">
        <div class ="card">
        <img 
        class ="card-img-top mt-2"
        width="100"
        height="100"
        src = "${imgUrl}${index + 1}.svg"
        <div class ="card-body text-center">
        <h6 class="text-title text-center">N.${index + 1}</h6>
        <h4 class = "text-title text-center">${result.name}</h4>
        </div>
        </div>
        </div>
        `;

    //vamos a inserta al navegador
    pokemonContainer.innerHTML += html;
  });
};

obtenerPokemones();
