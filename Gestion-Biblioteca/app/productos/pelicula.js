import {Producto} from './producto.js'

export class Pelicula extends Producto{
    constructor(titulo, numEjemplares, director, genero){
        super(titulo, numEjemplares)
        this._titulo = titulo;
        this._numEjemplares = numEjemplares;
        this._director = director;
        this._genero = genero;
    }

    toString() {
        return `${this._titulo}, Director: ${this._director}, Genero: ${this._genero}, Ejemplares: ${this._numEjemplares}`;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(value) {
        this._titulo = value;
    }

    get numEjemplares() {
        return this._numEjemplares;
    }

    set numEjemplares(value) {
        this._numEjemplares = value;
    }

    get director() {
        return this._director;
    }

    set director(value) {
        this._director = value;
    }

    get genero() {
        return this._genero;
    }

    set genero(value) {
        this._genero = value;
    }

}

