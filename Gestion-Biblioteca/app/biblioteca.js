import { Revista } from "./productos/revista.js";
import { Libro } from "./productos/libro.js";
import { Pelicula } from "./productos/pelicula.js";


export let biblioteca = {
    revistas: [],
    peliculas: [],
    libros: []
};

// Libros
let libro = new Libro()
libro.addLibro("Cien años de soledad", 5, "Gabriel García Márquez");
libro.addLibro("Harry Potter y la piedra filosofal", 3, "J.K. Rowling");

// Películas
let pelicula = new Pelicula()
pelicula.addPelicula("Jurassic Park", 4, "Steven Spielberg", "Aventura");
pelicula.addPelicula("Inception", 2, "Christopher Nolan", "Ciencia ficción");

// Revistas
let revista = new Revista()
revista.addRevista("National Geographic", 6, "2025-09-01");
revista.addRevista("TIME", 4, "2025-08-15");

console.log(biblioteca)
/**
Afegir un llibre a la biblioteca amb la informació del títol, autor i nombre d'exemplars disponibles.

Afegir una pel·lícula a la biblioteca amb la informació del títol, director, gènere i nombre 
d'exemplars disponibles.


Afegir una revista a la biblioteca amb la informació del títol, la data de publicació i nombre d'exemplars disponibles.

Afegir un soci amb el seu nom i DNI.

Afegir un administrador amb el seu nom, DNI i càrrec.

Prestar un recurs a un soci. Cal verificar que el recurs estiga disponible i que el soci no haja superat el límit de llibres prestats (per exemple, un màxim de 3 llibres per soci).

Retornar un llibre.

Mostrar una llista de tots els recursos, amb la possibilitat de filtrar per tipus. En el cas de pel·lícules s'haurà de filtrar també per gènere. En el cas de revista per any de publicació.

Mostrar una llista de tots els socis.

Mostrar una llista de tots els administradors de préstecs.

Mostrar una llista amb la informació sobre quins recursos estan prestats a cada soci.
*/
