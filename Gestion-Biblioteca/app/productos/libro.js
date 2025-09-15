import {Producto} from './producto.js'

export class Libro extends Producto{
    constructor(titulo, numEjemplares, autor){
        super(titulo, numEjemplares)
        this._titulo = titulo;
        this._numEjemplares = numEjemplares;
        this._autor = autor;
    }

    toString() {
        return `${this._titulo}, Autor: ${this._autor}, Ejemplares: ${this._numEjemplares}`;
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

    get autor() {
        return this._autor;
    }

    set autor(value) {
        this._autor = value;
    }

}