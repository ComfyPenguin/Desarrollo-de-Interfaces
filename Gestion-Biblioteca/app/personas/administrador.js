class Administrador extends Persona{
    constructor(cargo, nombre, dni){
        super(nombre, dni)
        this.cargo = cargo
    }
}

const cargo = {
  ADMINISTRADOR: 'Administrador',
  AYUDANTE: 'Ayudante'
};