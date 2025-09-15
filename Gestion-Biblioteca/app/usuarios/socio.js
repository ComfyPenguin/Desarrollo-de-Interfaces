import {Usuario} from './usuario.js'

export class Socio extends Usuario{
    constructor(nombre, dni){
        super(nombre, dni)
        this._nombre = nombre;
        this._dni = dni;
        this._matPrestados = [];
    }

    toString() {
        let info = `Nombre: ${this._nombre}, DNI: ${this._dni}`;
        if (this._matPrestados && this._matPrestados.length > 0) {
            info += `, Materiales prestados: ${this._matPrestados.join(", ")}`;
        }
        return info;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get dni() {
        return this._dni;
    }

    set dni(value) {
        this._dni = value;
    }

    get matPrestados() {
        return this._matPrestados;
    }

    set matPrestados(value) {
        this._matPrestados = value;
    }
}