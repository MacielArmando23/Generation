/*
var nonbre;
nombre = prompt("Ingresa tu nombre");
document.write("Hola ", nombre ," saludos desde JavaScrip");
console.log("Hola ", nombre ," saludos desde JavaScrip")

*/
/*
Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.
*/
var num1 = parseInt(prompt("Ingresa un numero "));
var num2 = parseInt(prompt("Ingresa otro numero "));


console.log(suma(num1,num2));
console.log(resta(num1,num2));
console.log(multiplicacion(num1,num2));
console.log(divicion(num1,num2));

document.write("El resultado de la suma de ", num1, " + ", num2, " es : ", suma(num1,num2), '</br>');
document.write("El resultado de la resta de ", num1, " - ", num2, " es : ", resta(num1,num2), '</br>');
document.write("El resultado de la multiplicacion de ", num1, " * ", num2, " es : ", multiplicacion(num1,num2), '</br>');
document.write("El resultado de la divicion de ", num1, " / ", num2, " es : ",num2 != 0 ? divicion(num1,num2) : " El segundo numero no debe ser 0", '</br>');

function suma(num1, num2){
    let suma = num1 + num2;
    return suma;
}
function resta(num1, num2){
    let resta = num1 - num2;
    return resta;
}function multiplicacion(num1, num2){
    let multiplicacion = num1 * num2;
    return multiplicacion;
}function divicion(num1, num2){
    if (num2 != 0){
        var divicion = num1 / num2;
    }else {
        console.log("El segundo numero no debe ser 0");
    }
    return divicion;
}