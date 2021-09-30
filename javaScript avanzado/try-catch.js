const gravedad = 9.8;
console.log(gravedad);

//@ts-check

try {
    gravedad = 10.1;
    
} catch (error) {
    console.log(error);
}finally{
    console.log('Soy el Finally');
}

console.log(gravedad);