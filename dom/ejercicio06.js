/*
Colocar una lista en el documento HTML,
    colocar un boton que diga agregar elemento.
    Cada ves que le den clic al boton debe agregar un elemento
    a la lista.

*/


const $btn = document.querySelector('#btn');
const $ol = document.querySelector('ol');


const addList = () =>{
    const $li = document.createElement('li');
    $li.innerHTML ="Nuevo elemento";
    $ol.appendChild($li);
    
}
$btn.addEventListener('click', () =>{
    const $li = document.createElement('li');
    $li.innerHTML ="Nuevo elemento";
    $ol.appendChild($li);
});