const { Router } = require('express');
const router = Router();
const frase = 'Hola mundo como estan';

//sustituir la palabra app por router para identificar que son rutas de mi api
//Rutas
router.get('/api/frase', (req, res) => {
    res.send(frase);
});

//
router.get('/api/letras/:num', (req, res) => {
    const { num } = req.params;
    if (isNaN(num)) {
        return res.send({ error: 'El parametro no es un numero' });
        //* al colocar el return cuando encuntra un error se detiene
        //* sino seguira ejecutando el codigo
    }
    if (num < 1 || num > frase.length) {
        return res.send({ error: 'El parametro esta fuera de rango' });
    }
    return res.send(frase[num - 1]);
});

router.get('/api/palabras/:num', (req, res) => {
    const { num } = req.params;
    if (isNaN(num)) {
        return res.send({ error: 'El parametro no es un numero' });
    }

    // primero se mete dentro def un array
    const palabras = frase.split(' ');
    if (num < 1 || num > palabras.length) {
        return res.send({ error: 'Elparametro esta fuera de rango' });
    }
    return res.send(palabras[num - 1]);
});

module.exports = router;
