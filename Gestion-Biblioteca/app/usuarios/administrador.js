import {Usuario} from './usuario.js'

export class Administrador extends Usuario{
    constructor(nombre, dni, cargo){
        super(nombre, dni)
        this._nombre = nombre;
        this._dni = dni;
        this._cargo = cargo;
    }

    toString() {
        return `Nombre: ${this._nombre}, DNI: ${this._dni}, Cargo: ${this._cargo}`;
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

    get cargo() {
        return this._cargo;
    }

    set cargo(value) {
        this._cargo = value;
    }
}

