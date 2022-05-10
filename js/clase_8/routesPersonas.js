const{Router} = require ('express')
const router = Router()

const personas = []
router.get('/', (req,res)=>{
    res.json({personas:personas})
})
router.post('/',(req,res)=>{
    const persona = req.body
    // el post añade al cuerpo
    personas.push(persona)
    res.json({info: 'Persona agregada'})
})

module.exports= router