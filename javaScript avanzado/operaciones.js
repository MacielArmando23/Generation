var numero1 = parseInt(prompt("Ingresa numero 1: "));
var numero2 = parseInt(prompt("Ingresa numero 2: "));
var suma, resta, division, multiplicacion;

while(numero1 == numero2){
    numero2 = parseInt(prompt("Ingresa numero 2(distinto al numero 1): "));
}
while (isNaN(numero1) && isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingresa numero 1 (solo numeros): "));
    numero2 = parseInt(prompt("Ingresa numero 2 (solo numeros): "));
}

if (numero1 > numero2){
    suma = numero1 + numero2;
    resta = numero1 - numero2;
    document.write(`La suma es:  ${suma}<br>`);
    document.write(`La resta es:  ${resta}`);

}else if(numero1 < numero2){
    multiplicacion = numero1 * numero2;
    division = numero2 / numero1;
    document.write(`La multiplicacion es: ${multiplicacion}<br>`)
    document.write(`La division es:  ${division}`)
}