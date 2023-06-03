
//Clase 18 
// DESESTRUCTURACION O ASIGNACION DESESTRUCTURANTE
// DE OBJETOS

// Trabajar con las propiedades de un objeto
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );


//usar desestructuracion, para extraer solo una llave del arreglo o todas
const { nombre, edad, clave } = persona

console.log( 'nombre:', nombre );
console.log( 'edad:', edad );
console.log( 'clave:', clave );


// desestructuracion en funciones, agregar llaves
// y puedo agregar valores por default
const retornaPersona = ({ nombre, edad, rango = 'Capitán' }) => {
    console.log( 'datos persona:', nombre, edad, rango );
}
// si existe el valor lo usa, no usa el por defecto

retornaPersona ( persona );


// creo otra funcion desestructurando otra
const setContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.94949,
            lng: -12.55443
        }
    }
}

//desestructura lo que necesito y dentro de otras llaves lo anidado
const { nombreClave, anios, latlng:{ lat, lng} } = setContext( persona );
//generalmente el 2 nivel de llaves, desestructurar en otra linea

console.log( 'datos useContext:', nombreClave, anios );
console.log( 'datos latlng:', lat, lng );
