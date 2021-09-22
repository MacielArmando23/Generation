const persona = {
    nombre: 'Armando',
    apellido: 'Edad',
    correo: 'maciel.arm@gmail.com'
};

const articulos = [
    {
        id: 1,
        nombre: 'Cerveza',
        precio: 36.00
    },
    {
        id: 2,
        nombre: 'Cerveza',
        precio: 36.00
    },
    {
        id: 3,
        nombre: 'Cerveza',
        precio: 36.00
    }
];
document.write(`${persona.nombre} y ${articulos[0].nombre}`);