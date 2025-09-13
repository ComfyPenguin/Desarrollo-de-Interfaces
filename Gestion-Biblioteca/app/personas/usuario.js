export class Usuario {
  constructor(nombre, dni) {
    if (new.target === Usuario) {
      throw new TypeError("No se puede instanciar una clase abstracta.");
    }
    this.nombre = nombre;
    this.dni = dni;
  }
}

export const usuarios = []