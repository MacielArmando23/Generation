var numero1 = parseInt(prompt("Ingresa numero 1: "));
var numero2 = parseInt(prompt("Ingresa numero 2: "));

while(numero1 == numero2){
    numero2 = parseInt(prompt("Ingresa numero 2(distinto al numero 1): "));
}
while (isNaN(numero1) && isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingresa numero 1 (solo numeros): "));
    numero2 = parseInt(prompt("Ingresa numero 2 (solo numeros): "));
}
if(numero1 + 1 == numero2){
    numero2 = parseInt(prompt("Ingresa numero 2(mayor o menor por dos disfras): "));
    document.write(numerosImpares(numero1,numero2));
}else if(numero1 < numero2){
    for (let i = numero1 + 1 ; i < numero2 ; i++) {
        if( i % 2 != 0)
        document.write(`Los numeros impares son: ${i} <br> `);
    }
}else if(numero1 > numero2){
    for (let i = numero2 +1 ; i < numero1 ; i++) {
        if( i % 2 != 0)
        document.write(`Los numeros impares son: ${i} <br> `);
    }
}else {
    document.write(`Son pares`);
}    
function numerosImpares(numero1, numero2){
    for (let i = numero1 + 1 ; i < numero2 ; i++) {
        if( i % 2 != 0)
        return `Los numeros impares son: ${i} <br> `;
    }
}