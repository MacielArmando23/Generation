var numero1;
var array = [];
var suma;
var promedio;
var num;

while(numero1 > 0){
    suma=0;
    promedio=0;
    numero1 = parseInt(prompt("Ingresa un numero : "));
    array.push(numero1);
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
        
    }
    promedio = suma/array.length;
    console.log(suma);
    console.log(promedio);
    console.log(array)
}
document.write(`La suma es ${suma} <br> El promedio es: ${promedio}`);





