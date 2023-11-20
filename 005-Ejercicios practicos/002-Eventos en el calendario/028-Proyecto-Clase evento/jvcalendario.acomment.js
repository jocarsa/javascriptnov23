En comparación con la iteración anterior, se han realizado las siguientes novedades:

1. **Creación de la clase `Evento`:**
   - Se ha agregado un nuevo archivo llamado `Evento.js`, que contiene la definición de una clase llamada `Evento`.
   - Esta clase tiene un constructor sin parámetros que inicializa cuatro propiedades: `fecha`, `nombre`, `color` y `hora`.

2. **Actualización en el manejo de eventos:**
   - Se ha creado un array `eventos` al inicio del script para almacenar los objetos `Evento` creados posteriormente.
   - Al hacer clic en el botón con ID `jvenvia`, se recopilan los datos del modal para crear un nuevo objeto `Evento`.
   - Se capturan los valores del input `#jvfecha`, `#jvnombre`, `#jvcolor` y `#jvhora` y se asignan a las propiedades correspondientes del nuevo objeto `Evento`.
   - El objeto `Evento` recién creado se agrega al array `eventos`.
   - Se muestra por consola el array `eventos` actualizado cada vez que se agrega un nuevo evento.

Estas adiciones permiten la creación y almacenamiento de objetos `Evento` a medida que el usuario introduce información a través del modal del calendario.