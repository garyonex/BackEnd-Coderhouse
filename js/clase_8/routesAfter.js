const { Router } = require('express');
const router = Router();
const frase = 'Frase inicial';
const fraseArray = frase.split(' ');

router.get('/frase', (req, res) => {
    res.json({ frase: frase });
});

router.get('/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    console.log(fraseArray);
    if (Number(pos) > fraseArray.length) {
        return res.json({ Error: 'Posicion solicitada no encontrada' });
    }
    if (isNaN(Number(pos))) {
        return res.json({ Error: 'Solicitado no esun numero' });
    }
    res.json({ Buscada: fraseArray[Number(pos) - 1] });
});

router.post('/palabras', (req, res) => {
    const { palabra } = req.body;
    //const recuperar = req.body.palabra
    //Otra forma de hacerlo
    fraseArray.push(palabra);
    res.json({ agregada: palabra, pos: fraseArray.length - 1 });
});

router.put('/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const { palabra } = req.body;
    const palabraAnterior = fraseArray.splice(Number(pos) - 1, 1, palabra);
    res.json({ actualizada: palabra, anterior: palabraAnterior });
});

router.delete('/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const palabraEliminada = fraseArray.splice(Number(pos) - 1, 1);
    res.json({ eliminada: palabraEliminada });
});
module.exports = router;
