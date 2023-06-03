

//Clase 17 
// FUNCIONES

// Crear la funcion como constante, para no recrearla
const saludar = function ( nombre ) {
    return `Hola, ${ nombre }`
}

// Mejor usar una funcion de flecha 
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`
}

// y se puede simplificar si tengo un solo return 
const saludar3 = ( nombre ) => `Hola, ${ nombre }`; 
const saludar4 = () => `Hola mundo`; 

console.log( saludar('Daniel') );
console.log( saludar2('Vegeta') );
console.log( saludar3('Anibal') );
console.log( saludar4() );

// funcion de flecha lleva parentesis cuando el return es un objeto 
const getUser = () => ({ 
    uid: 'ABC123',
    username: 'El_Papi1502',
});

const user = getUser();
console.log( 'user:', user );

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Daniel');
console.log('usuarioActivo:', usuarioActivo);

