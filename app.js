// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = document.getElementById('listaAmigos');
let name = document.getElementById('amigo');

function agregarAmigo() {
    let name = document.getElementById('amigo').value;

    console.log(name)
    if(name === ""){
        alert('Por favor introduce un Nombre')
    }else {
        lista.innerHTML += `<li>${name}</li>`
    }
}

function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const items = lista.getElementsByTagName('li');
    const randomIndex = Math.floor(Math.random() * items.length);
    const amigoAleatorio = items[randomIndex].textContent;
    console.log('Amigo seleccionado aleatoriamente:', amigoAleatorio);

    const resbox = document.getElementById('resultado');

    resbox.innerHTML = `<li>${amigoAleatorio}</li>`;
  }