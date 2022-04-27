//* Ejemplo 1
const objNum = {};
const aleatoria = () => {
    return Math.floor(Math.random() * 20) + 1;
};
for (let i = 0; i < 1000; i++) {
    const numero = aleatoria();
    if (objNum[numero]) {
        objNum[numero]++;
    } else {
        objNum[numero] = 1;
    }
}
console.log(objNum);

//* Ejemplo 3
// ejemplo con moment
// cuandos dias y años han sapasdo desde tu nacimiento
const moment = require('moment')
let now = moment()
let cumple = moment('03-02-1991','MM-DD-YYYY')
console.log(cumple)
const diferencia = now.diff(cumple, 'years')
const dias = now.diff(cumple, 'days')
console.log(diferencia, dias)
