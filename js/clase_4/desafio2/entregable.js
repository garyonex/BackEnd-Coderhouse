const container = require('./contenedor');

const iniciar = async function () {
    let contenedor = new container('archivos.json');
    contenedor.save({
        title: 'Diabolo',
        price: 5000,
        thumbnail:
            'https://m.media-amazon.com/images/I/51qSz6uu8xL._AC_SX569_.jpg',
        id: 1,
    });

    contenedor.save({
        title: 'PlayStation 4',
        price: 50000,
        thumbnail:
            'https://images-na.ssl-images-amazon.com/images/I/51OnenSqevL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        id: 2,
    });
    contenedor.save({
        title: 'Iphone',
        price: 100000,
        thumbnail:
            'https://m.media-amazon.com/images/I/61kYwdMmD-L._AC_SX679_.jpg',
        id: 3,
    });

    // console.log(contenedor.getById());
    // console.log(contenedor.getAll());
    // console.log(contenedor.deleteById());
};

iniciar();
