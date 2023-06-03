
//Clase 19 
// DESESTRUCTURACION DE ARREGLOS

// creo el arreglo y lo muestro uno a uno los valores desesctuctura con llaves cuadradas

const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log( 'personajes:', personajes );
console.log( 'personaje 1:', personajes[0] );
console.log( 'personaje 2:', personajes[1] );
console.log( 'personaje 3:', personajes[2] );


// lo desesctucturo con llaves cuadradas, adentro cada nombre de variable
const [ , p2] = personajes  //al segundo lo llamo p2
console.log( 'p2:', p2 );


//desestructuro arreglos que vienen de funciones
const retornaArreglo = () => {
    return ['ABC', 123];
}

const arr = retornaArreglo();
console.log('arreglo:', arr);

const [ letras, numeros ] = retornaArreglo();
console.log('letras y numeros:', letras, numeros);


//desestructurar una función dentro de un arreglo
const setState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') }];
}

const arr2 = setState( 'Goku' );
console.log('arr2:', arr2);

const [ nombre, setNombre ] = setState('Daniel');
console.log('nombre:', nombre);
setNombre();  //ejecuta el console log del return



