
//Clase 20 Y 21
//IMPORT Y EXPORT

//cree los datos (carpeta data, archivo heroes)
//en el archivo de los datos tiene que haber un export

// varias formas de escribirlo, snipper imp, o heroes
// import { heroes } from './data/heroes'; 
// import { heroes } from './data/heroes';
import heroes, { owners } from "../data/heroes";
// desestructurar owners porque no es default

console.log( heroes );
console.log( owners );


//el find recibe una funcion callback, encuentra un resultado
const getHeroesById = (id) => {
    return heroes.find( ( heroe ) => {
        //verifico q coincida con el id que busco
        if ( heroe.id === id ) {
            return true;
        }else {
            return false;
        }
    });
};

console.log( 'find heroe:', getHeroesById(2) );


//simplifico el ejemplo anterior
export const getHeroesById2 = (id) => heroes.find( ( heroe ) => heroe.id === id );
//lo exporto despues, porque lo uso en una siguiente clase

console.log( 'find heroe2:', getHeroesById2(3) );


// uso del filter, puede traer mas de un resultado
export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );

console.log( 'find owner:', getHeroesByOwner('DC') );
