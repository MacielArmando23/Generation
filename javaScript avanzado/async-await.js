const $btn = document.querySelector('#btn')
const $cajaFotos = document.querySelector('#cajaFotos');

$btn.addEventListener('click', async()=>{
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await resp.json();
    console.log(data);

    const imgCat = document.createElement('img');
    imgCat.src = data[0].url;
    imgCat.width = '300';
    $cajaFotos.appendChild(imgCat);
});
/*
fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json()).then(data => {
            console.log(data);
            imgCat.src = data[0].url;
            const imgCat = document.createElement('img');
            imgCat.width = '300';
            $cajaFotos.appendChild(imgCat);
        });    
        */