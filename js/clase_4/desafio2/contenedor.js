const fs = require('fs');
class container {
    constructor(name) {
        this.file = name;
        this.coundId = 0;
        this.content = [];
    }
    async init() {
        try {
            const data = await fs.promises.readFile(this.file); //no se si es esta promesa la que me genera el bucle.!
            this.list = JSON.parse(data);
            for (const element of this.content) {
                if (element.id > this.countId) this.countId = element.id;
            }
        } catch (error) {
            console.log('No se encontro el archivo!!, generando...');
        }
    }
    //Escribir, sobre escribir el contenido
    async write() {
        await fs.promises.writeFile(
            this.file,
            JSON.stringify(this.content, null, '')
        );
        console.log('Guardado');
    }

    //Que hay dentro del contenedor
    async getAll() {
        return this.content;
    }

    //guardar en el archivo e incrementar
    async save(event) {
        this.coundId++;
        event['id'] = this.coundId;
        this.content.push(event);
        this.write();
        return `El id es ${this.coundId}`;
    }

    //Para buscar uno del archivo
    async getById() {
        let resp;
        if (this.content !== []) {
            resp = this.content.find((products) => products.id === id);
            if (resp === undefined) {
                resp = false;
            }
        } else {
            return console.log('Aqui no hay nada');
        }
        return resp;
    }

    //Para eliminar solo 1 del archivo
    deleteById() {
        let result;
        if (this.content !== []) {
            let newContent = this.content.filter((e) => e.id !== id);
            this.content = newContent;
            this.write(); //Para sobre escribir archivo
            result = 'elemento eliminado';
        } else {
            result = 'Archivo vacio';
        }
        return result;
    }

    //Eliminar todos los objetos del archivo
    async deleteAll() {
        this.content = this.content.splice(0, this.content.length);
        this.write();
    }
}

module.exports = container;
