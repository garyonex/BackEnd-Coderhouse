const { Router } = require('express');
const router = Router();

router.get('/api/sumar/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    let suma = parseInt(num1) + parseInt(num2);
    res.json({ Resultado: suma });
});

router.get('/api/sumar', (req, res) => {
    const { num1, num2 } = req.query;
    let suma = parseInt(num1) + parseInt(num2);
    res.json({ Resultado: suma });
});

router.get('/api/operacion/:ope', (req, res) => {
    const { ope } = req.params;
    const nums = ope.split('+');
    let suma = parseInt(nums[0]) + parseInt(nums[1]);
    res.json({ Resultado: suma });
});

router.post('/api', (req, res) => {
    res.send('ok post');
});

router.put('/api', (req, res) => {
    res.send('ok put');
});

router.delete('/api', (req, res) => {
    res.send('ok delete');
});

module.exports = router;
