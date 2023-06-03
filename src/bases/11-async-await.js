
//Clase 24
//ASYNC AWAIT



//version larga, sin el async
const getImagenPromesa = () => {
    const promesa = new Promise( (resolve, reject) => {
        resolve('https://safdjlalsfjklf.com')
    })

    return promesa;
}

getImagenPromesa().then( console.log );


//version simplificada, 
//funciones flecha con uno solo, saco llaves y paréntesis
const getImagenPromesa2 = () => 
    new Promise( resolve => resolve('https://sdfsffsfff.com') );

getImagenPromesa2().then( console.log );


//version con async (funciona igual) con el await es asincrono
const getImagen = async() => {
    return 'https://jkafljklfasfd.com';

}

getImagen().then( console.log );


//version con async y con el await es asincrono
const getImagen2 = async() => {

    //para manejo de errores try y catch (snipper)
    try {
        const apiKey = 'QvyaKkxwseVXkh48KczsmWKjsMjruIPs'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        //el await espera que se ejecute la linea de cóodigo
        //el await siempre dentreo de una funcion async
        
        const { data } = await resp.json();
        const { url } = data.images.original;
        console.log( url );
    
        //uso de la imagen
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
        
    } catch (error) {
        // manejo de errores
        console.error('error!!', error);
    }
    

}

getImagen2();


