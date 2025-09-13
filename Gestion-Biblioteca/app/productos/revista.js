import {Producto} from './producto.js'
import {biblioteca} from './../biblioteca.js'

export class Revista extends Producto{
    constructor(titulo, num_ejemplares, fecha_publicacion){
        super(titulo, num_ejemplares)
        this.fecha_publicacion = fecha_publicacion
    }

    addRevista(titulo, num_ejemplares, fecha_publicacion){
        let revista = { titulo, num_ejemplares, fecha_publicacion };
        biblioteca.revistas.push(revista);
        return revista;
    };
  
}

