
//Clase 23
//FETCH API

const apiKey = 'QvyaKkxwseVXkh48KczsmWKjsMjruIPs'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


//promesa sin encadenar, no usar
// peticion.then ( resp => {
//     // console.log(resp);

//     resp.json().then ( data => {
//         console.log(data)
//     })
// })
// .catch( console.warn );


// promesa encadenada, codigo mas limpio
peticion
    .then ( resp => resp.json() )
    // desestructuro la data de la data
    .then ( ({data} ) => {
        // console.log( data.images.original.url )
        const { url } = data.images.original;
        console.log( url );

        //uso de la imagen
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch( console.warn );
    //tambien puedo tener un catch por cada then