/*var edad = parseInt(prompt("Ingresa tu edad: "));
var mensaje = "";

switch (edad) {
    case 18 :
        mensaje = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;   
    case 70:
        mensaje = "Eres un adulto mayor";
        break;
    default:
        mensaje = "Fuera del rango"
        break;
}

document.write(`${mensaje}`)
*/
var nombre = prompt("Ingresa tu nombre: ");
var mensaje = "";

switch (nombre.toLowerCase()) {
    case 'armando':
        mensaje = "Eres administrador";
        break;
    case 'maciel':
        mensaje = "Eres usuario";
        break;   
    default:
        mensaje = "No tienes permiso"
        break;
}
document.write(`${mensaje}`)