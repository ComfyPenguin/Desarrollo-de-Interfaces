import {Biblioteca} from "./biblioteca.js";
import rl from 'readline-sync';

const biblioteca = new Biblioteca();

// Libros
biblioteca.agregarLibro("Harry Potter y la piedra filosofal", 3, "J.K. Rowling");
biblioteca.agregarLibro("El nombre de la rosa", 4, "Umberto Eco");

// Películas
biblioteca.agregarPelicula("Inception", 2, "Christopher Nolan", "Ciencia ficción");
biblioteca.agregarPelicula("Interstellar", 3, "Christopher Nolan", "Ciencia ficción");
biblioteca.agregarPelicula("Titanic", 5, "James Cameron", "Romance");

// Revistas
biblioteca.agregarRevista("National Geographic", 6, "01-09-2025");
biblioteca.agregarRevista("Scientific American", 7, "10-07-2025");
biblioteca.agregarRevista("Time Magazine", 5, "25-08-2025");

// Socios
biblioteca.registrarSocio("Juan Pérez", "12345678A");
biblioteca.registrarSocio("María Gómez", "87654321B");

// Administradores
biblioteca.registrarAdmin("Ana López", "11223344C", "Administrador");
biblioteca.registrarAdmin("Carlos Ruiz", "44332211D", "Ayudante");

while (true) {
    console.log("\n--- Menú de la Biblioteca ---");
    console.log("1. Agregar libro");
    console.log("2. Agregar revista");
    console.log("3. Agregar película");
    console.log("4. Agregar socio");
    console.log("5. Agregar administrador");
    console.log("6. Prestar producto a socio");
    console.log("7. Devolver producto de socio");
    console.log("8. Mostrar todos los productos");
    console.log("9. Mostrar todos los socios");
    console.log("10. Mostrar todos los administradores de préstamos");
    console.log("11. Mostrar recursos prestados por cada socio");
    console.log("0. Salir");

    const opcion = rl.questionInt("Seleccione una opción: ");
    console.log();

    switch (opcion) {
        case 1:
            const tituloLibro = rl.question("Título del libro: ");
            const ejemplaresLibro = rl.questionInt("Número de ejemplares: ");
            const autorLibro = rl.question("Autor del libro: ");
            biblioteca.agregarLibro(tituloLibro, ejemplaresLibro, autorLibro);
            break;
        case 2:
            const tituloRevista = rl.question("Título de la revista: ");
            const ejemplaresRevista = rl.questionInt("Número de ejemplares: ");
            const fechaPublicacion = rl.question("Fecha de publicación (DD-MM-AAAA): ");
            biblioteca.agregarRevista(tituloRevista, ejemplaresRevista, fechaPublicacion);
            break;
        case 3:
            const tituloPelicula = rl.question("Título de la película: ");
            const ejemplaresPelicula = rl.questionInt("Número de ejemplares: ");
            const directorPelicula = rl.question("Director de la película: ");
            const generoPelicula = rl.question("Género de la película: ");
            biblioteca.agregarPelicula(tituloPelicula, ejemplaresPelicula, directorPelicula, generoPelicula);
            break;
        case 4:
            const nombreSocio = rl.question("Nombre del socio: ");
            const dniSocio = rl.question("DNI del socio: ");
            biblioteca.registrarSocio(nombreSocio, dniSocio);
            break;
        case 5:
            const nombreAdmin = rl.question("Nombre del administrador: ");
            const dniAdmin = rl.question("DNI del administrador: ");
            const cargoAdmin = rl.question("Cargo del administrador (Ayudante/Administrador): ").toLowerCase();
            biblioteca.registrarAdmin(nombreAdmin, dniAdmin, cargoAdmin);
            break;
        case 6:
            const tituloPrestar = rl.question("Título del producto a prestar: ");
            const dniPrestar = rl.question("DNI del socio: ");
            const tipoMaterialPrestar = rl.question("Tipo de material (libro/revista/pelicula): ").toLowerCase();
            biblioteca.prestarProducto(tituloPrestar, dniPrestar, tipoMaterialPrestar);
            break;
        case 7:
            const tituloDevolver = rl.question("Título del producto a devolver: ");
            const dniDevolver = rl.question("DNI del socio: ");
            biblioteca.devolverProducto(tituloDevolver, dniDevolver);
            break;
        case 8:
            biblioteca.getProductos();
            break;
        case 9:
            biblioteca.getAdmins();
            break;
        case 10:
            biblioteca.getSocios();
            break;
        case 11:
            biblioteca.mostrarRecursosPrestados();
            break;
        case 0:
            console.log("Saliendo...");
            process.exit(0);
        default:
            console.log("Opción no válida. Intente de nuevo.");
    }




}