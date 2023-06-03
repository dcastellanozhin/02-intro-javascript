

//Clase 14 
// TEMPLATE STRING

// Concatenar
const nombre = 'Daniel';
const apellido = 'Castellano';

const nombreCompleto = nombre + ' ' + apellido;

console.log('Hola Mundo!!!! soy', nombreCompleto);


// back stick puedo insertar codigo javascript
let textoCompleto = `Hola mundo!! soy ${ nombre } ${ apellido }`;
console.log(textoCompleto);


// soporta salto de lineas, tabs y expresiones javascript
textoCompleto = `${ textoCompleto } primer renglón
    segundo renglón
tercer renglón
${ 1 + 1 }`;

console.log(textoCompleto);


//soporta funciones
function getSaludo(nombre) {
    return 'Hola a todos ' + nombre;
}

console.log(`Texto devuelto: ${ getSaludo( nombre ) }`);

