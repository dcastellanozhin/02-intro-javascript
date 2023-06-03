

//Clase 16 
// ARREGLOS

// crear el arreglo, en consola se ve como llaves cuadradas []
const arreglo0 = new Array( 100 );  
//solo usar si lo creo con variables fijas, de 100 posiciones vacias

arreglo0.push(1);  //le agrego 1 posición, va a 101

console.log( 'arreglo0:', arreglo0 );


// crear el arreglo normalmente
const arreglo1 = [1,2,3,4];
// arreglo2.push(1);
// arreglo2.push(2);
// arreglo2.push(3);
// arreglo2.push(4);
// tampoco usar el push, porque modifica el objeto principal

// tomo como base una arreglo anterior, sin modificar el anterior
// push si modifica el anterior
let arreglo2 = [ ...arreglo1, 5]

console.log( 'arreglo1:', arreglo1 );
console.log( 'arreglo2:', arreglo2 );

//uso del map, aplico una función sobre todos los valores
//map espera una función que se ejecuta dentro del metodo map
const arreglo3 = arreglo2.map( function(numero) {
    return 'Hola'
});

const arreglo3b = arreglo2.map( function(numero) {
    return numero * 2;
});

console.log( 'arreglo3:', arreglo3 );
console.log( 'arreglo3b:', arreglo3b );


