const nameTitle = document.querySelector('#name');
const inputName = document.querySelector('#inputName');
const edad = document.querySelector('#edad');
const inputEdad = document.querySelector('#inputEdad');

const writeName = () =>{
    const inputValueName = inputName.value;
    const inputValueAge = inputEdad.value;
    nameTitle.textContent = inputValueName;
    edad.innerHTML = inputValueAge;
    if (inputValueAge >= 18) {
        edad.textContent = "Eres mayor de edad"
    }else{
        edad.textContent = "Aun no cumples la mayoria de edad"
    }
}