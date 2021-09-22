const numero = parseInt(prompt("Ingresa numero"));

function numpar(valor){
    if(valor % 2 == 0){
        return `El numero  ${valor} es par`;
    }else{
        return `El numero  ${valor} es impar`;
    }
} 
document.write(numpar(numero));