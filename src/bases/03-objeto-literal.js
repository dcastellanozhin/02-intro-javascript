

//Clase 15 
// OBJETOS LITERALES o diccionarios

// crear el objeto literar con las llaves, así se ven en consola
const persona = {
    // par de valores la llave y su valor
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    // en nombres de llaves no usar caracteres especiales

    // anidado
    direccion: {
        ciudad: 'New York',
        zip: 56445555,
        lat: 14.98877,
        lng: 65.553433,
    } 

};

console.log( persona );
console.log( persona.nombre );

console.table( persona );


// copiar la referencia al espacio de memoria 
// (NO USAR!! modifico la original)
const persona2 = persona;
persona2.nombre = 'Peter';

console.log( 'persona2:', persona2 );
console.log( 'persona:', persona );

// si copiar la referencia creando un nuevo objeto
// no hace falta definirlo, usar los 3 puntos ...
const persona3 = { ...persona };
persona3.nombre = 'Raul';

console.log( 'persona3:', persona3 );


