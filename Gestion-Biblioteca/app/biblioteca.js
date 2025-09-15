import {Pelicula} from "./productos/pelicula.js";
import {Socio} from "./usuarios/socio.js";
import {Libro} from "./productos/libro.js";
import {Revista} from "./productos/revista.js";
import {Administrador} from "./usuarios/administrador.js";
import {LIMITE_MATS} from "./productos/producto.js";


export class Biblioteca {
    constructor() {
        this.productos = {
            revistas: [],
            peliculas: [],
            libros: []
        };
        this.usuarios = {
            socios: [],
            administradores: []
        };
    }

    getSocio(dni) {
        return this.usuarios.socios.find(socio => socio.dni === dni);
    }

    getAdmin(dni) {
        return this.usuarios.administradores.find(admin => admin.dni === dni);
    }

    getLibro(titulo) {
        return this.productos.libros.find(libro => libro.titulo === titulo);
    }

    getPelicula(titulo) {
        return this.productos.peliculas.find(peli => peli.titulo === titulo);
    }

    getRevista(titulo) {
        return this.productos.revistas.find(revista => revista.titulo === titulo);
    }

    getProductos(){
        console.log("Libros:");
        this.productos.libros.forEach(libro => console.log(libro.toString()));
        console.log("Revistas:");
        this.productos.revistas.forEach(revista => console.log(revista.toString()));
        console.log("Películas:");
        this.productos.peliculas.forEach(peli => console.log(peli.toString()));
    }

    getUsuarios(){
        console.log("Usuarios:");
        this.usuarios.socios.forEach(socio => console.log(socio.toString()));
        this.usuarios.administradores.forEach(admin => console.log(admin.toString()));
    }

    getSocios(){
        console.log("Socios:");
        this.usuarios.socios.forEach(socio => console.log(socio.toString()));
    }

    getAdmins(){
        console.log("Administradores:");
        this.usuarios.administradores.forEach(admin => console.log(admin.toString()));
    }

    // Registrar usuarios
    registrarAdmin(nombre, dni, cargo){
        let admin = new Administrador(nombre, dni, cargo);
        this.usuarios.administradores.push(admin);
    };

    registrarSocio(nombre, dni, matPrestados){
        let socio = new Socio(nombre, dni, matPrestados);
        this.usuarios.socios.push(socio);
    };

    // Añadir productos
    agregarLibro(titulo, numEjemplares, autor) {
        let libro = new Libro(titulo, numEjemplares, autor);
        this.productos.libros.push(libro);
    };

    agregarPelicula(titulo, numEjemplares, director, genero) {
        let pelicula = new Pelicula(titulo, numEjemplares, director, genero);
        this.productos.peliculas.push(pelicula);
    }

    agregarRevista(titulo, numEjemplares, fechaPublicacion) {
        let revista = new Revista(titulo, numEjemplares, fechaPublicacion);
        this.productos.revistas.push(revista);
    }

    // Filtros
    filtrarRevistas(fechaPublicacion) {
        let revistaFiltrada = this.productos.revistas.filter(revista => revista.fechaPublicacion === fechaPublicacion);
        revistaFiltrada.forEach(revista => console.log(revista.toString()));
    }

    filtrarPelicula(genero) {
        let peliculasFiltradas = this.productos.peliculas.filter(peli => peli.genero === genero);
        peliculasFiltradas.forEach(peli => console.log(peli.toString()));
    }

    // Prestar material a un socio
    prestarProducto(titulo, dniSocio, tipoMaterial) {
        // Buscar
        let producto;
        switch (tipoMaterial) {
            case "libro":
                producto = this.getLibro(titulo);
                break;
            case "revista":
                producto = this.getRevista(titulo);
                break;
            case "pelicula":
                producto = this.getPelicula(titulo);
                break;
        }

        // Verificar disponibilidad
        if (producto === undefined) {
            console.log("Material no encontrado");
            return false;
        }

        // Buscar al socio
        if (!this.getSocio(dniSocio)) {
            console.log("Socio no encontrado.");
            return false;
        }

        // Límite de materiales prestados
        if (this.getSocio(dniSocio).matPrestados.length === LIMITE_MATS) {
            console.log(`${this.getSocio(dniSocio).nombre} ya tiene el máximo de materiales prestados.`);
            return false;
        }

        // Prestar el libro
        producto.numEjemplares -= 1;
        this.getSocio(dniSocio).matPrestados.push(producto.titulo);
        console.log(`Película "${producto.titulo}" prestado a ${this.getSocio(dniSocio).nombre}.`);
        return true;
    }

    devolverProducto(titulo, dniSocio) {
        for (let socio of this.usuarios.socios) {
            if (socio.dni === dniSocio) {
                if (socio.matPrestados.includes(titulo)) {
                    const index = socio.matPrestados.indexOf(titulo);
                    if (index > -1) {
                        socio.matPrestados.splice(index, 1);
                        if (this.getLibro(titulo)) {
                            this.getLibro(titulo).numEjemplares += 1;
                        } else if (this.getRevista(titulo)) {
                            this.getRevista(titulo).numEjemplares += 1;
                        } else if (this.getPelicula(titulo)) {
                            this.getPelicula(titulo).numEjemplares += 1;
                        }
                        console.log(`'${titulo}' devuelto por ${socio.nombre}.`);
                        return true;
                    }
                } else {
                    console.log(`${socio.nombre} no tiene prestado el material '${titulo}'.`);
                    return false;
                }
            }
        }
        console.log(`Socio con DNI ${dniSocio} no encontrado.`);
    }

    mostrarRecursosPrestados(){
        this.usuarios.socios.forEach(socio => {
            console.log(`Socio: ${socio.nombre}, Materiales prestados: ${socio.matPrestados.join(", ") || "Ninguno"}`);
        });
    }

}