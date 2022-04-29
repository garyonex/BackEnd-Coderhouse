const express = require('express');
const app = express();
const routes = require('./routes')

//middlewares
app.use(express)
//Iniciando servidor
const PORT = 8030;
const server = app.listen(PORT, () => {
    console.log(`Servidor en ${PORT}`);
});

//rutas
app.use(routes)