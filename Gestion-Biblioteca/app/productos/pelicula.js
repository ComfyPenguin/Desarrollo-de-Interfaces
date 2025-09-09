class Pelicula extends Producto{
    constructor(director, genero, titulo, num_ejemplares){
        super(titulo, num_ejemplares)
        this.director = director
        this.genero = genero
    }
}