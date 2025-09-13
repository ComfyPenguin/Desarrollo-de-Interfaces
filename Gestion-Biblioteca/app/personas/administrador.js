import {Usuario} from './usuario.js' 

export class Administrador extends Usuario{
    constructor(nombre, dni, cargo){
        super(nombre, dni)
        this.cargo = cargo
    }
}

export const CARGO = {
    ADMINISTRADOR: 'Administrador',
    AYUDANTE: 'Ayudante'
};

export const administradores = []

