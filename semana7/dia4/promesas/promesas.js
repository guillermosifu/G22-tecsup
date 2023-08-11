// promesa  sirve para podr ejecutar algo asyncrono
// cunado hacemos una petocio e una API esta tiene o pued etenr n tiempo de espera

//// la primera forma de usar una promesa
// la clase que se ecarga de instanciar se llama new Promise()

//resolve : es el envargado de retornar la respuesta cando todo este correcto
// reject :es el enargado de retornar le repuesta cuando todo esete mal
// ambas funciones retornarn algo
// cuando creamos una promesa esta no tiene return

const promesa = new Promise((resolve, reject) => {
  //vamos a simular un tiempo de espera
  setTimeout(() => {
    //esta funcion va esperar 3 segundos par poder retorna el resolve
    resolve("todo bien cumpli tu promesa");
  }, 5000);
});

//como hacemos para ejecutar la promesa

async function getDataFromPromise() {
  const respuesta = await promesa;
  console.log(respuesta);
}

getDataFromPromise();

//existe otra forma de leer una promesa , esta fomra existia del aasync y await

// then() => enotnces  //luego
//.then(callback)
//

promesa.then((respuesta) => {
  //cuando acabes de ejecutar la promesa obtener el valor y guardarlo
  console.log("then", respuesta);
});


