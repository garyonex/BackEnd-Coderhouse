//TODO BASE INICIAL DE NUETRO SERVIDOR EN EXPRESS
const morgan = require('morgan');
const express = require('express');
const multer = require('multer');
const app = express();
const routes = require('./js/clase_7/routes');
const routerEjemplo = require('./js/clase_7/ejemplo');
const routesMascotas = require('./js/clase_8/routesMascota');
const routesPersonas = require('./js/clase_8/routesPersonas');
// const routesUpload = require('./js/clase_8/routesUpload')
const frase = ' hola mundo bienvenidos ';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/files');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + ' - ' + Date.now());
    },
});
//! middlewares

// //Para cargar una
// app.use(
//     multer({
//         dest: __dirname + '/public/files',
//     }).single('myFile')
// );
// //Para cargar varias
app.use(
    multer({
        storage,
    }).array('myFile', 12)
);

//Multer es para cargar un archivo al body
//single es porque vamos a manejar un solo archivo
app.use(morgan('dev'));
//morgan nos ayuda a visualizar que tipo de peticion estamos haciendo al servidor
app.use(express.json());
//Esto nos ayuda a qye nuetro servidor express pueda interpretar de manera automanica mensajes tipo json
app.use(express.static(__dirname + '/public'));
//Para solicitar al servidor mi carpeta public que esta de forma static
app.use(express.urlencoded({ extended: true }));
// esto es para que al momento de solicitar el post en nuestro servidor aparezca correctamente el post

//TODO Iniciando servidor
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});

app.get('/api/frase', (req, res) => {
    res.send(frase);
});

//* utilizando multer
//Para cargar
app.post('/uploadfile', (req, res) => {
    console.log(req.file);
    res.json({ Mensaje: 'Archivo cargado' });
});

//! RUTAS
app.use(routes);
app.use(routerEjemplo);
app.use('/mascotas', routesMascotas);
app.use('/personas', routesPersonas);
