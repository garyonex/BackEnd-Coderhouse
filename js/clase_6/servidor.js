const http = require ('http')

const mensaje = () =>{
    const hora= new Date(). getHours()
    if(hora >= 6 && hora <= 12){
        return 'Buenos dias'
    } else if (hora >=13 && hora <= 19){
        return 'Buenas tardes'

    } else{
        return 'Buenas noches'
    }
}

const server= express.createServer((req,res) =>{
    res.end('Hola mundo')
})

// const PORT= 8080
const connectedServer = server.listen(8080, () =>{

    console.log(`Servidor Http escuchado en el puerto ${connectedServer.address().port}`);
    console.log(mensaje)
})

const express = require('express')
const app = express()
const PORT =8080

console.log(`Servidor Http escuchado en el puerto ${PORT}`)

app.get( '/',(req, res) =>{
    // res.end('<h1 style="color: blue;"> Bienvenidos al servidor</h1>')
    res.end(mensaje())
})

let visitas = 0
app.get('/visitas', (req, res) => {
    res.end(`cantidad de visitas ${++visitas}`)
})

app.get('/fyh', ( req, res) => {
    res.send({fyh: new Date().toLocaleDateString()})
})