const $creaCartas = document.querySelector("#card");




const cartas = () => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(resp => resp.json()).then(data => {
        data.forEach(card => {
            console.log(data);
            columna = document.createElement('div');
            columna.classList.add('col-md-4');
            columna.innerHTML = 
            `<div class="card">
                <img id="image" src="${card.url}" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title">${card.id} </h5>
                    <p class="card-text">${card.title}</p>
                </div>
            </div>`;
            $creaCartas.appendChild(columna);
        });
    })  
};

cartas();
