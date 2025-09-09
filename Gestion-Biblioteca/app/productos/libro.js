class Libro extends Producto{
    constructor(autor, titulo, num_ejemplares){
        super(titulo, num_ejemplares)
        this.autor = autor
    }
}