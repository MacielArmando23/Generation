const arreglo =[];
const arreglo2 = new Array();

let lenguajes = ['JavaScript','Java','PHP', 'Python', 'C#', 'C++', 'Scala', 'Rust', 'Ruby', 'Cobol'];

lenguajes.forEach(function(){
    console.log(lenguajes);
});

let numeros = Array(2,3,4,5,6);
let numeros2 =numeros.map(function(num){
    return num * 2;
});
console.log(numeros);
console.log(numeros2);

console.log(lenguajes.includes('PHP'));
console.log(!lenguajes.includes('Go'));

let filtrados = numeros.filter((num){
    if(num >10){
        return num;
    }
});

console.log(filtrados);