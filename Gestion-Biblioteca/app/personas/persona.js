class Persona {
  constructor(nombre, dni) {
    if (new.target === Producto) {
      throw new TypeError("No se puede instanciar una clase abstracta.");
    }
    this.nombre = nombre;
    this.dni = dni;
  }
  
}