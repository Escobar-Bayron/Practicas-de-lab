const fs = require('fs');
const fileName = 'biblioteca.json';

fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
        console.log('Error al leer el archivo JSON:', err);
        return;
    }

    try {
        const libros = JSON.parse(data);

        // Eliminar el primer libro
        libros.splice(0, 1);

        // Guardar los cambios en el archivo
        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err) => {
            if (err) {
                console.log('Error al escribir archivo JSON:', err);
            } else {
                console.log('Libro eliminado del archivo JSON exitosamente');
            }
        });
    } catch (error) {
        console.error('Error al parsear el JSON:', error);
    }
});
