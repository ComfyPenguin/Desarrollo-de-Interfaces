import {Usuario} from './usuario.js' 

export class Socio extends Usuario{
    constructor(nombre, dni, mat_prestados){
        super(nombre, dni)
        this.mat_prestados = mat_prestados = []
    }
}

export const socios = []