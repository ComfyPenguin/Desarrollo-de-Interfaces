import {Producto} from './producto.js'
import {biblioteca} from './../biblioteca.js'

export class Libro extends Producto{
    constructor(titulo, num_ejemplares, autor){
        super(titulo, num_ejemplares)
        this.autor = autor
    }

    addLibro(titulo, num_ejemplares, autor){
        let libro = { titulo, num_ejemplares, autor };
        biblioteca.libros.push(libro);
        return libro;
    };
}