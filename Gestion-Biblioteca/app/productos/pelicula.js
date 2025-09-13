import {Producto} from './producto.js'
import {biblioteca} from './../biblioteca.js'

export class Pelicula extends Producto{
    constructor(titulo, num_ejemplares, director, genero){
        super(titulo, num_ejemplares)
        this.director = director
        this.genero = genero
    }

    addPelicula(titulo, num_ejemplares, director, genero){
        let pelicula = { titulo, num_ejemplares, director, genero};
        biblioteca.peliculas.push(pelicula);
        return pelicula;
    };
}

