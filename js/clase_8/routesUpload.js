const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
    console.log(req.file);
    res.json({ Mensaje: 'Archivo cargado' });
});
module.exports = router;
