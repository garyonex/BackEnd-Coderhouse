const { Router } = require('express');
const res = require('express/lib/response');
const router = Router();

const mascotas = [];

const verificarEdad = (req, res, next) => {
    if (req.body.edad > 5) {
        return res.json({ error: 'Edad mayor la permitida' });
        //Return es para cortar el codigo y no se agrege al array sino cumple la condicion
    }
    next();
};
router.get('/', (req, res) => {
    res.json({ Mascotas: mascotas });
});

router.post('/', verificarEdad, (req, res) => {
    const mascota = req.body;
    // el post añade al cuerpo
    mascotas.push(mascota);
    res.json({ Info: 'Mascota agregada perfectamente' });
});

module.exports = router;
