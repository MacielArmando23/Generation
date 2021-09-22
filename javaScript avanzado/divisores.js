var numero = parseInt(prompt("Ingresa un numero: "));

for (let i = 0; i < numero; i++) {
    if( numero % i === 0){
        document.write(`Los divisores son ${i}<Br>`);
    } 
}