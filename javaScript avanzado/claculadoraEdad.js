const anio = parseInt(prompt("Ingresa tu año de nacimiento"));
const mes = parseInt(prompt("Ingresa numero de mes de nacimiento"));

const edad = 2021 - anio;
if(mes < 9){
    document.write(`Tu edad es: ${edad}`); 
}else{
    document.write(`Tu edad es: ${edad - 1}`); 
}

