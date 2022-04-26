const fs = require('fs');
// fs es para saber que se esta utilizando ese modo nativo
// ya esta integrado en js

// si agregamos Sync al final es para decir que es sincrono
//! readfile. lectura de un archivo
//! writeFile : escritura de un archivo
//! appendFile . actualizacion de un archivo
//! unlinnk borrado de un archivo
//! mkdir creacion de una carpeta

// //* CREAR UN ARCHIVO DE MANERA SINCRONICA
// fs.writeFileSync('./test-output-sync.txt', 'esto es una prueba');

// const data = fs.readFileSync('./test-output-sync.txt', 'utf-8');
// console.log(data);

// fs.appendFileSync('./test-output-sync.text', 'toda la noche')
// const data2= fs.readFileSync('./test-output-sync.text', 'utf-8')
// fs.unlinkSync('./test-output-sync.text')
// console.log(data2)

// //* CREAR UN ARCHIVO CON LA HORA ACTUAL
// //* POSTERIOR A ESO, LEA EL ARCHIVO Y MUESTRELO POR CONSOLA
// try {
//     let horaActual = new Date()
//     fs.writeFileSync('./fyh.txt', `${horaActual}`)
//     const verHora = fs.readFileSync('./fyh.txt', 'utf-8')
//     console.log(verHora)
// } catch (error) {
//     console.log(error)
// }

try {
    fs.readFile('../../package.json', 'utf-8', (error, contenido) => {
        if (error) {
            console.log(error);
        } else {
            const info = {
                //PARA MOSTRAR EN STRING
                contenidoStr: JSON.stringify(contenido),
                //PARA MOSTRAR EN OBJETO
                contenidoObj: JSON.parse(contenido),
                size: fs.statSync('../../package.json').size,
            };
            console.log(info);
            
            //CREAR UN ARCHIVO EN OTRA CARPETA QUE MUESTRE LOS DATOS ANTERIORES
            fs.writeFile('../../info.txt', `${JSON.stringify(info)}`,(error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Archivo creado correctamente');
                    }
                }
            );
        }
    });
} catch (error) {
    console.log(error);
}

//REALIZAMOS LO MISMO PERO AHORA CON PROMESAS
try {
    //Despues del Fs se le agrega el "promises" referente a la promesa
    fs.promises.readFile('../../package.json', 'utf-8')
    .then(contenido =>{
        const info = {
            //PARA MOSTRAR EN STRING
            contenidoStr: JSON.stringify(contenido),
            //PARA MOSTRAR EN OBJETO
            contenidoObj: JSON.parse(contenido),
            //PARA MOSTRAR TAMAÑO DE LOS DATOS EXTRAIDOS
            size: fs.statSync('../../package.json').size,
        };
        console.log(info);
        
        //CREAR UN ARCHIVO EN OTRA CARPETA QUE MUESTRE LOS DATOS ANTERIORES
        return fs.promises.writeFile('../../info.txt', `${JSON.stringify(info)}` 
               .then (() =>{
                   console.log('Archivo creado')
               })    
        );
    })
    .catch(err =>{
        console.log(err)
    })  
} catch (error) {
    
}