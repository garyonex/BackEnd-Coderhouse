//Declarar array de productos
const productos = [
    { id: 1, nombre: 'Papa', precio: 123.23 },
    { id: 2, nombre: 'Cebolla', precio: 13.23 },
    { id: 3, nombre: 'Remolacha', precio: 321.53 },
    { id: 4, nombre: 'Tomate', precio: 803.13 },
];
//Mostrar nombres por consola y separarlos cn ','
function nombres(productos) {
    const nombres = productos.map((producto) => producto.nombre).join(',');
    return nombres;
}

//Mostar precio total del array y promedio
function total(productos) {
    let total = 0;
    for (const producto of productos) {
        total = total + producto.precio;
    }
    return total;
}
function promedio(productos) {

    let promedio = total(productos) / productos.length;

    return promedio;
}
function minimo(productos) {
    //Mostar producto con menor precio
    let minPrecio = productos[0].precio;
    let productoMin = productos[0];
    for (const producto of productos) {
        if (producto.precio < minPrecio) {
            minPrecio = producto.precio;
            productoMin = producto;
        }
    }
    return productoMin;
}

//Mostrar producto con mayor precio
function maximo(productos) {
    let maxPrecio = productos[0].precio;
    let productoMax = productos[0];
    for (const producto of productos) {
        if (producto.precio > maxPrecio) {
            maxPrecio = producto.precio;
            productoMax = producto;
        }
    }
    return productoMax;
}
//Creamos un objeto y mostrarlo en consola

const objResultado = {
    nombre: nombres(productos),
    total: total(productos),
    promedio: promedio(productos),
    productoMin: minimo(productos),
    productoMax: maximo(productos),
};
console.log(objResultado)