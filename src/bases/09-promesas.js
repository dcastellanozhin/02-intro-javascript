//archivos de datos

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//exporto la anterior, por separado para indicar que es la default
export default heroes;

//Creo otro array y lo exporto en la misma linea, no es default
export const owners = ['DC', 'Marvel'];


//Exporto todo junto, se puede
// export {
//     heroes as default,
//     owners
// }