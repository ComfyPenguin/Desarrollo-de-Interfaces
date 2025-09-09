class Revista extends Producto{
    constructor(fecha_publicacion, titulo, num_ejemplares){
        super(titulo, num_ejemplares)
        this.fecha_publicacion = fecha_publicacion
    }
}