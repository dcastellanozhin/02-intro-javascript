
//PROBAR DEBUG
//Clase 13
console.log('Hola Mundo!!!! soy Daniel Cas');
// levantado con npm start
// me muestra los errores no en consola en la pantalla


//VARIABLES Y CONSTANTES
//no empezar con use, ahora en una palabra reservada de React

// const no cambian, usar mucho mas en react
const nombre = 'Daniel';
const apellido = 'Castellano'; 

// let si posiblemente lo voy a cambiar
let valorDado = 5;
valorDado = 4;
// no usar var

console.log('Hola Mundo!!!! soy', nombre, apellido, valorDado);
// no me muestra errores de no uso de variables


// ambito o scope de las variables
if ( true ) {
    let valorDado = 6;
    const nombre = 'Peter';
    console.log('valor dentro de if', valorDado, 'nombre', nombre);
}
console.log('valor dentro fuera del if', valorDado);
