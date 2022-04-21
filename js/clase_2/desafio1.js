class Usuario {
    constructor(nombres, apellidos, mascotas, libros) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.mascotas = []
        this.libros = []
    }

    getFullName() {
        return `El nombre completo es ${this.nombres} ${this.apellidos}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre, autor){
        let libro ={
            titulo: nombre,
            autor: autor
        }
        return this.libros.push(libro)
    }
    getBookNames(){
        return this.libros.map(book => book.titulo)
    }
}

const usuario = new Usuario('Gary', 'Calle');

console.log(usuario.getFullName());
usuario.addMascota('Perro');
usuario.addMascota('Gato');
console.log(usuario.mascotas);
console.log(usuario.countMascotas())
usuario.addBook('Las estrellas', 'Juanito')
usuario.addBook('Pedro Navaja','Willie Colon')
console.log(usuario.getBookNames())
