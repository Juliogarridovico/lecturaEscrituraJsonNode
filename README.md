# lecturaEscrituraJsonNode

Lectura y escritura de un archivo Json con Node #3
La finalidad de este proyecto, fue aprender a leer y escribir un archivo JSON del modo más sencillo posible, haciendo uso únicamente de la librería File System "FS" de node.

Documentación de la librería File System: https://nodejs.org/docs/v0.3.1/api/fs.html

## Como se usa

Inicializar un proyecto en node si no lo esta, el archivo index.js contiene las funciones necesiaras para leer y escribir

### La funcion jsonLeer(data)
Esta funcion, esta hecha para leer un archivo en formato Json.

### La funcion jsonEscribir(data)
Esta funcion, esta hecha para escribir todos que se encuentre en una variable

### Ejemplos de uso 
Almacenar en una variable el contenido de un archivo json, en este caso el archivo 111.json
hola = jsonLeer("111.json"); 

Modificar un valor del json
hola.name = 333;

Escribe el contenido de la variable hola
jsonEscribir(hola);
