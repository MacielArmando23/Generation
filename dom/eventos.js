const $btn = document.querySelector('#btn');
$btn.addEventListener('click', () =>{
    console.log('Click');
});
const $inpText = document.querySelector('#name');
$inpText.addEventListener('keydown', (e) =>{
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
});

const $label = document.querySelector('#labelName');

$label.addEventListener('mouseover', (e) =>{
    console.log('move');
    e.target.style.background = "red";
});

$selectName = document.querySelector('#selectName');
$body = document.querySelector('body');
$selectName.addEventListener('change', (e) =>{
    if(e.target.value === 'red'){
        e.target.style.background = 'red';
    }
});