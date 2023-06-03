
//Clase 25
//OPERADOR CONDICIONAL TERNARIO

//metodo sin ternario
const activo = true;

let mensaje = '';

if ( !activo ) {
    mensaje = 'Activo';
}else {
    mensaje = 'Inactivo';
}

console.log( mensaje );


//metodo con ternario, no hace falta el if
const activo2 = true;

const mensaje2 = ( activo2 ) ? 'Activo' : 'Inactivo';

console.log( 'mensaje2:', mensaje2 );

//sin la condicion de falso, uso el and && 
// no hago nada, devuelve falso
const mensaje3 = !activo && 'Activo';
console.log( 'mensaje3', mensaje3 )



