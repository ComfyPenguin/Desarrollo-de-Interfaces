class Producto {
  constructor(titulo, num_ejemplares) {
    if (new.target === Producto) {
      throw new TypeError("No se puede instanciar una clase abstracta.");
    }
    this.titulo = titulo;
    this.num_ejemplares = num_ejemplares;
  }
  
}