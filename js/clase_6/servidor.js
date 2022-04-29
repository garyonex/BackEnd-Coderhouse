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
const container = require('./contDesafio');
const contProductos =new container ('./products.txt')
  
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
const save = contProductos.save({title:'Mandarina', price:1200, thumbnail: 'mandarina.png', id:4}) //modificar siempre para agregar nuevos productos
    console.log (`Nuevo item ${save}`);
//!DESAFIO SERVIOR GLICH
appExp.get('/productos', (req, res) => {
  try {
      const prod= contProductos.getAll()
      res.send(`Productos mostrados ${JSON.stringify(prod)}`)
  } catch (error) {
      res.send('Ocurrio un error')
  } 
});

appExp.get('/productosRandom', (req, res) => {
    const id= Math.floor(Math.random() * contProductos.getAll().length ) 
    try {
        const random = contProductos.getById(id)
        res.send(`El id ${id}, ${JSON.stringify(random)}`)
    } catch (error) {
        res.send(`Error al cargar productos random id ${error}`)
    }
});
