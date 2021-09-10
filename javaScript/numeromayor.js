// Recibiendo entradas del usuario
// ParseInt para convertir las entradas a enteros
/*
var input1 = parseInt(prompt("input 1: "));
var input2 = parseInt(prompt("input 2: "));
var input3 = parseInt(prompt("input 3: "));
*/
/*
    Función para calcular el número máximo
    Referencia de la función extra para ordenar números: 
    https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
*/

// Recibe como parámetro el arreglo de números
function maxNumber(arrayNumbers) {

    // El método sort no ordena números, por lo que se usa una función extra
    arrayNumbers.sort(function(a, b){return b - a});
    console.log(arrayNumbers);
    // Por último, se devuelve el el número mayor del arreglo de números
    return arrayNumbers[0];
}

// Aquí se ingresan los valores del usuario en el arreglo
var arr = [1, 102, 100, 11, 101];
// Luego se llama a la función para calcular el número mayor
var max = maxNumber(arr);

console.log(max);

// Se escribe el resultado sobre el html
/*document.write(
  `El elemento más grande del arreglo [ ${arr} ], es: ${max}`
);
*/