const {Router} = require ( 'express')
const router = Router()
const frase = 'Hola mundo como estan';
//Rutas
app.get('/api/frase', (req, res) => {
    res.send(frase);
});
//
app.get('/api/letras/:num', (req, res) => {
    const { num } = req.params;
    if (isNaN(num)) {
        return res.send({ error: 'El parametro no es un numero' });
    }
    if (num < 1 || num > frase.length) {
        return res.send({ error: 'Elparametro esta fuera de rango' });
    }
    return res.send(frase[num - 1]);
});
app.get('/api/palabras/:num', (req, res) => {
    const { num } = req.params;
    if (isNaN(num)) {
        return res.send({ error: 'El parametro no es un numero' });
    }
    const palabras = frase.split( ' ')
    if (num < 1 || num > palabras.length) {
        return res.send({ error: 'Elparametro esta fuera de rango' });
    }
    return res.send(palabras[num - 1]);
});


module.exports = router