const $btn = document.querySelector('#btn')
const $cajaFotos = document.querySelector('#cajaFotos');

$btn.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()).then(data => {
            console.log(data);
        
            const imgDog = document.createElement('img');
            imgDog.src = data.message;
            $cajaFotos.appendChild(imgDog);
        });    
});