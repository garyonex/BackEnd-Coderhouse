//TODO iniciar un servidor desde el NPM
// const http = require ('http')
// const app = http.createServer((req, res) =>{
//     res.end(`Hola servidor ${mensaje()}`)
// })

// const PORT = 8080
// app.listen(8080)
// console.log(`Servidor Http iniciado ${PORT}`)

// const mensaje = () =>{
//     const hora= new Date(). getHours()
//     if(hora >= 6 && hora <= 12){
//         return 'Buenos dias'
//     } else if (hora >=13 && hora <= 19){
//         return 'Buenas tardes'

//     } else{
//         return 'Buenas noches'
//     }
// }

//! Iniciamos el servidor desde la libreria Express
//! Instalamos antes desde el terminar con npm express
const fs = require('fs')
const express = require('express');
const ContenedorDesa = require('./contDesafio');
let productos= null
  
const appExp = express();
const PORTExp = 8080;
const server = appExp.listen(PORTExp, () => {
    console.log(`Servidor express en puerto ${server.address().port}`);
});
server.on('Error', (error) => console.log(`Error en servidor ${error}`));

//mostrar un mensaje dependiendo de la hora enque nos encontramos
const mensaje = () => {
    const hora = new Date().getHours();
    if (hora >= 6 && hora <= 12) {
        return 'Buenos dias';
    } else if (hora >= 13 && hora <= 19) {
        return 'Buenas tardes';
    } else {
        return 'Buenas noches';
    }
};
function init(){
    console.log('Iniciando');
    productos=  productosTotal();
    console.log('Productos Cargados:' , productos);
}
//En el home del server aparecera un mensaje en azul
appExp.get('/', (req, res) => {
    res.send(`<h1 style="color: blue;">Bienvenidos</h1>${mensaje()}`);
});

//En la ruta 'Visitas' aparecera la cantidad de visitas que recibe
let visitas = 0;
appExp.get('/visitas', (req, res) => {
    res.send(`Las visistas son de ${++visitas}`);
});

//En la ruta 'fyh' aparecera la hora y la fcha actual
appExp.get('/fyh', (req, res) => {
    res.send({ fyh: new Date().toLocaleString() });
});
    
//!DESAFIO SERVIOR GLICH
appExp.get('/productos', (req, res) => {
 res.send(productos)
  console.log(productos)
});

appExp.get('/productosRandom', (req, res) => {
 res.send(productoRandom())
  
});
function productosTotal(){
    const container = new ContenedorDesa();
    const file = './products.txt';
    const allProductsArray = container.read(file);
    return allProductsArray;
}

function productoRandom () {
    const container = new ContenedorDesa();
    const file = './products.txt';
    const allProductsArray = container.read(file);
    const randomIndex = Math.floor(Math.random() * allProductsArray.length);
    return allProductsArray[randomIndex];
}

init()