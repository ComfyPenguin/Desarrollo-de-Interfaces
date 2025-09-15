import {Producto} from './producto.js'


export class Revista extends Producto{
    constructor(titulo, numEjemplares, fechaPublicacion){
        super(titulo, numEjemplares)
        this._titulo = titulo;
        this._numEjemplares = numEjemplares;
        this._fechaPublicacion = fechaPublicacion;
    }

    toString() {
        return `${this._titulo}, Fecha de publicación: ${this._fechaPublicacion}, Ejemplares: ${this._numEjemplares}`;
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

    get fechaPublicacion() {
        return this._fechaPublicacion;
    }

    set fechaPublicacion(value) {
        this._fechaPublicacion = value;
    }
}

